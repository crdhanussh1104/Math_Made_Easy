import React, { useState, useEffect, useRef } from 'react';
import { getVideosForLesson } from '../../data/lessonVideoMapping';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { triggerConfetti } from '../../utils/confetti';
import { useGame } from '../../context/GameContext';
import {
  Tv, CheckCircle2, ShieldAlert,
  ExternalLink, AlertTriangle, Film, Lock, Check, Play, Pause
} from 'lucide-react';

export const VideoPlayerModule = ({ chapter, activeLesson, onUnlockNextLesson }) => {
  const { gameState, completeLesson, addXP } = useGame();
  
  // Dynamically load videos for the currently selected lesson
  const playlist = getVideosForLesson(activeLesson.id);

  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [embedError, setEmbedError] = useState(false);

  // Track watch completion and 2 milestone checkpoints independently per video option
  const [watchedVideos, setWatchedVideos] = useState({});
  const [videoPoints, setVideoPoints] = useState({});
  const [currentPct, setCurrentPct] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playerRef = useRef(null);
  const intervalRef = useRef(null);

  const currentVideo = playlist[activeVideoIdx] || null;
  const currentVideoKey = currentVideo ? (currentVideo.id || `${activeLesson.id}_vid_${activeVideoIdx}`) : '';
  const videoId = currentVideo?.videoId || (currentVideo?.youtubeUrl?.match(/embed\/([^?&]+)/)?.[1]) || '';
  const youtubeWatchUrl = currentVideo?.originalUrl || `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';

  const isCurrentVideoWatched = !!watchedVideos[currentVideoKey];
  const currentPoints = videoPoints[currentVideoKey] || { p1: false, p2: false };
  const cp1 = isCurrentVideoWatched || currentPoints.p1;
  const cp2 = isCurrentVideoWatched || currentPoints.p2;

  // Clickable only after listening past the 2nd point (67% of video)
  const canComplete = cp2;
  const watchProgress = isCurrentVideoWatched ? 100 : Math.max(currentPct, cp2 ? 100 : cp1 ? 50 : 0);

  // Load YouTube Iframe API once
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }, []);

  // Initialize or update YouTube Player on video change
  useEffect(() => {
    setActiveVideoIdx(0);
    setEmbedError(false);
    setCurrentPct(0);
    setIsPlaying(false);
  }, [activeLesson.id, chapter.id]);

  useEffect(() => {
    if (!videoId) return;

    let destroyed = false;

    const initPlayer = () => {
      if (destroyed || !window.YT || !window.YT.Player) return;

      const playerContainer = document.getElementById('yt-player-iframe');
      if (!playerContainer) return;

      try {
        if (playerRef.current && typeof playerRef.current.destroy === 'function') {
          playerRef.current.destroy();
        }

        playerRef.current = new window.YT.Player('yt-player-iframe', {
          videoId: videoId,
          playerVars: {
            rel: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            playsinline: 1,
            controls: 1,
            showinfo: 0,
            autohide: 1,
            enablejsapi: 1,
            origin: window.location.origin
          },
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
                startTracking();
              } else {
                setIsPlaying(false);
                stopTracking();
              }
            },
            onError: () => {
              setEmbedError(true);
            }
          }
        });
      } catch (err) {
        console.warn('YT Player init error:', err);
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      destroyed = true;
      stopTracking();
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
      }
    };
  }, [videoId, currentVideoKey]);

  const startTracking = () => {
    stopTracking();
    intervalRef.current = setInterval(() => {
      if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
        const cur = playerRef.current.getCurrentTime();
        const dur = playerRef.current.getDuration();

        if (dur > 0) {
          const pct = Math.min(100, Math.round((cur / dur) * 100));
          setCurrentPct(pct);

          setVideoPoints(prev => {
            const existing = prev[currentVideoKey] || { p1: false, p2: false };
            let updated = { ...existing };
            let changed = false;

            // Point 1: reached after 33.3% of video
            if (pct >= 33 && !existing.p1) {
              updated.p1 = true;
              changed = true;
              soundFx.playCorrect();
            }

            // Point 2: reached after 85% of video
            if (pct >= 85 && !existing.p2) {
              updated.p1 = true;
              updated.p2 = true;
              changed = true;
              soundFx.playCorrect();
              triggerConfetti('achievement');
            }

            return changed ? { ...prev, [currentVideoKey]: updated } : prev;
          });
        }
      }
    }, 800);
  };

  const stopTracking = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleSelectVideo = (idx) => {
    setActiveVideoIdx(idx);
    setEmbedError(false);
    setCurrentPct(0);
    soundFx.playClick();
  };

  const handleMarkComplete = () => {
    if (!canComplete) return;

    if (!isCurrentVideoWatched) {
      setWatchedVideos(prev => ({ ...prev, [currentVideoKey]: true }));
      setVideoPoints(prev => ({
        ...prev,
        [currentVideoKey]: { p1: true, p2: true }
      }));

      const isLessonAlreadyDone = gameState.completedLessons.includes(activeLesson.id);
      if (!isLessonAlreadyDone) {
        completeLesson(activeLesson.id, 100);
        addXP(activeLesson.xp || 50);
        soundFx.playCorrect();
        triggerConfetti('levelUp');

        if (onUnlockNextLesson) {
          onUnlockNextLesson();
        }
      } else {
        soundFx.playCorrect();
        triggerConfetti('achievement');
      }
    }
  };

  // CASE 1: NO VIDEO MAPPED FOR THIS LESSON
  if (!playlist || playlist.length === 0) {
    return (
      <CardRounded style={{ padding: '36px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <Film size={54} color="var(--purple)" />
        <div>
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.5rem', fontWeight: '800' }}>
            Video coming soon.
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px', maxWidth: '480px' }}>
            We are curating and animating the official ICSE video breakdown for <strong>{activeLesson.title}</strong>. Check out the Interactive Notes or Formula Cards in the meantime!
          </p>
        </div>
        <BadgeChip label="Lesson Content In Production" color="var(--purple)" bg="var(--purple-light)" size="md" />
      </CardRounded>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* 1. Video Playlist Switcher Tabs */}
      {playlist.length > 1 && (
        <CardRounded style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: 'var(--text-muted)' }}>
              Video Playlist:
            </span>

            {playlist.map((vidItem, idx) => {
              const isSelected = activeVideoIdx === idx;

              return (
                <button
                  key={vidItem.id}
                  onClick={() => handleSelectVideo(idx)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    border: isSelected ? `2px solid ${chapter.color}` : '1.5px solid var(--border-light)',
                    backgroundColor: isSelected ? `${chapter.color}20` : 'var(--bg-main)',
                    color: isSelected ? chapter.color : 'var(--text-main)',
                    fontWeight: '800',
                    fontFamily: 'var(--font-rounded)',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>Option {idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Completion Badge */}
          {isCurrentVideoWatched ? (
            <BadgeChip label="Video Completed ✓" color="var(--primary)" bg="var(--primary-light)" size="md" />
          ) : canComplete ? (
            <BadgeChip label="Ready to Complete (100%)" color="var(--primary)" bg="var(--primary-light)" size="md" />
          ) : (
            <BadgeChip label={`Progress: ${watchProgress}%`} color="var(--orange)" bg="var(--warning-light)" size="md" />
          )}
        </CardRounded>
      )}

      {/* 2. Main Responsive YouTube Player Card */}
      <CardRounded style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* Player Iframe Wrapper or Fallback Thumbnail Card */}
        <div style={{
          position: 'relative',
          paddingBottom: '56.25%', // 16:9 aspect ratio
          height: 0,
          overflow: 'hidden',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-md)',
          border: '2px solid var(--border-light)',
          backgroundColor: '#000000'
        }}>
          {!embedError ? (
            <div
              id="yt-player-iframe"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            />
          ) : (
            /* Fallback View when Publisher Disables Embedding */
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.95)), url(${thumbnailUrl})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: '#ffffff', padding: '24px', textAlign: 'center', gap: '14px'
            }}>
              <AlertTriangle size={44} color="var(--warning)" />
              <div>
                <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.25rem', fontWeight: '800' }}>
                  Watch Directly on YouTube
                </h3>
                <p style={{ fontSize: '0.88rem', opacity: 0.9, marginTop: '4px', maxWidth: '420px' }}>
                  The creator allows full playback on YouTube. Click below to open and watch.
                </p>
              </div>

              <a
                href={youtubeWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button3D variant="warning" size="md" icon={ExternalLink}>
                  Open Video on YouTube ↗
                </Button3D>
              </a>
            </div>
          )}
        </div>

        {/* 3. Subtopic Name & Auto-tracked 3-Part Milestone Progress */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '4px' }}>
          
          <div>
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-main)' }}>
              {activeLesson.title}
            </h3>
          </div>

          {/* 2 Automatic Points dividing video into 3 equal parts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Visual Progress Bar with 2 Milestone Indicator Nodes */}
            <div style={{ position: 'relative', height: '10px', backgroundColor: 'var(--border-light)', borderRadius: '99px', margin: '12px 8px 8px 8px' }}>
              {/* Active Fill Track */}
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: `${watchProgress}%`,
                backgroundColor: canComplete ? 'var(--primary)' : 'var(--orange)',
                borderRadius: '99px',
                transition: 'width 0.4s ease'
              }} />

              {/* Point 1 Indicator (at 33.3%) */}
              <div
                title="Checkpoint 1 (33% of video)"
                style={{
                  position: 'absolute',
                  left: '33.33%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  border: cp1 ? '2px solid #16a34a' : '2px solid var(--border-light)',
                  backgroundColor: cp1 ? '#22c55e' : 'var(--bg-main)',
                  color: cp1 ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                  userSelect: 'none'
                }}
              >
                {cp1 ? '✓' : '🚩'}
              </div>

              {/* Point 2 Indicator (at 85%) */}
              <div
                title="Checkpoint 2 (85% of video - Unlocks Completion)"
                style={{
                  position: 'absolute',
                  left: '85%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  border: cp2 ? '2px solid #16a34a' : '2px solid var(--border-light)',
                  backgroundColor: cp2 ? '#22c55e' : 'var(--bg-main)',
                  color: cp2 ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                  userSelect: 'none'
                }}
              >
                {cp2 ? '✓' : '🚩'}
              </div>
            </div>

            {/* Labels below milestones */}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: '600', padding: '0 4px' }}>
              <span>0% (Intro)</span>
              <span style={{ color: cp1 ? 'var(--primary)' : 'inherit', fontWeight: cp1 ? '800' : '600' }}>
                🚩 33% {cp1 ? '✓' : ''}
              </span>
              <span style={{ color: cp2 ? 'var(--primary)' : 'inherit', fontWeight: cp2 ? '800' : '600' }}>
                🚩 85% {cp2 ? '✓' : ''}
              </span>
              <span style={{ color: isCurrentVideoWatched ? 'var(--primary)' : 'inherit', fontWeight: '700' }}>
                🏆 100%
              </span>
            </div>
          </div>

          {/* Mark Complete Button (Clickable ONLY when video has played past Point 2) */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
            {isCurrentVideoWatched ? (
              <BadgeChip label="Lesson Completed ✓ (+50 XP)" color="var(--primary)" bg="var(--primary-light)" size="lg" />
            ) : canComplete ? (
              <Button3D variant="primary" size="md" onClick={handleMarkComplete} icon={CheckCircle2}>
                Mark Lesson Complete & Unlock Next 🚀
              </Button3D>
            ) : (
              <button
                type="button"
                disabled
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px dashed var(--border-light)',
                  backgroundColor: 'var(--bg-main)',
                  color: 'var(--text-muted)',
                  fontWeight: '700',
                  fontFamily: 'var(--font-rounded)',
                  fontSize: '0.95rem',
                  cursor: 'not-allowed',
                  opacity: 0.7
                }}
              >
                <Lock size={16} /> Mark Lesson Complete & Unlock Next 🚀
              </button>
            )}
          </div>

        </div>

      </CardRounded>

    </div>
  );
};

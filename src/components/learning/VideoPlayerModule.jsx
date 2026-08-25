import React, { useState, useEffect } from 'react';
import { getVideosForLesson } from '../../data/lessonVideoMapping';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { ProgressBar } from '../ui/ProgressBar';
import { soundFx } from '../../utils/audioSynth';
import { triggerConfetti } from '../../utils/confetti';
import { useGame } from '../../context/GameContext';
import {
  Tv, PlayCircle, RefreshCw, Sparkles, CheckCircle2, ShieldAlert,
  ExternalLink, AlertTriangle, Film
} from 'lucide-react';

export const VideoPlayerModule = ({ chapter, activeLesson, onUnlockNextLesson }) => {
  const { gameState, completeLesson, addXP } = useGame();
  
  // Dynamically load videos for the currently selected lesson
  const playlist = getVideosForLesson(activeLesson.id);

  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [embedError, setEmbedError] = useState(false);
  const [videoWatched, setVideoWatched] = useState(gameState.completedLessons.includes(activeLesson.id));
  const [watchProgress, setWatchProgress] = useState(gameState.completedLessons.includes(activeLesson.id) ? 100 : 0);

  // Reset tab index and error state whenever selected lesson changes
  useEffect(() => {
    setActiveVideoIdx(0);
    setEmbedError(false);
    const done = gameState.completedLessons.includes(activeLesson.id);
    setVideoWatched(done);
    setWatchProgress(done ? 100 : 0);
  }, [activeLesson.id, chapter.id]);

  const currentVideo = playlist[activeVideoIdx] || null;
  const videoId = currentVideo?.videoId || (currentVideo?.youtubeUrl?.match(/embed\/([^?&]+)/)?.[1]) || '';
  const embedUrl = videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&enablejsapi=1` : currentVideo?.youtubeUrl;
  const youtubeWatchUrl = currentVideo?.originalUrl || `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';

  const handleSelectVideo = (idx) => {
    setActiveVideoIdx(idx);
    setEmbedError(false);
    soundFx.playClick();
  };

  const handleMarkComplete = () => {
    if (!videoWatched) {
      setVideoWatched(true);
      setWatchProgress(100);
      completeLesson(activeLesson.id, 100);
      addXP(activeLesson.xp || 50);
      soundFx.playCorrect();
      triggerConfetti('levelUp');

      // Trigger automatic unlocking of next lesson
      if (onUnlockNextLesson) {
        onUnlockNextLesson();
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
              const tabIcon = idx === 0 ? PlayCircle : idx === 1 ? RefreshCw : Sparkles;
              const IconComp = tabIcon;

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
                    gap: '6px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <IconComp size={16} />
                  <span>Video Option {idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Completion Badge */}
          {videoWatched ? (
            <BadgeChip label="Completed (+50 XP)" color="var(--primary)" bg="var(--primary-light)" size="md" />
          ) : (
            <BadgeChip label={`Watch Progress: ${watchProgress}%`} color="var(--orange)" bg="var(--warning-light)" size="md" />
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
            <iframe
              key={embedUrl}
              src={embedUrl}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onError={() => setEmbedError(true)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
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

        {/* 3. Detailed Video Metadata Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '4px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-main)' }}>
                {currentVideo.title}
              </h3>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span>Lesson: <strong>{activeLesson.title}</strong></span>
                <span>•</span>
                <span>Chapter {chapter.number}: {chapter.title}</span>
                <span>•</span>
                <span style={{ color: 'var(--primary)', fontWeight: '700' }}>{currentVideo.themeName}</span>
              </div>
            </div>

            {/* Direct Watch on YouTube Quick Link */}
            <a
              href={youtubeWatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
              title="Open video on YouTube"
            >
              <button
                type="button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-main)',
                  color: 'var(--text-main)',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                <ExternalLink size={14} color="var(--primary)" />
                <span>Watch on YouTube</span>
              </button>
            </a>
          </div>

          {/* Progress Bar & Mark Complete Button */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginTop: '6px' }}>
            <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: '700' }}>
                <span>Video Watch Completion</span>
                <span>{watchProgress}%</span>
              </div>
              <ProgressBar progress={watchProgress} color={chapter.color} height={10} showLabel={false} />
            </div>

            {videoWatched ? (
              <BadgeChip label="Lesson Completed ✓ (+50 XP)" color="var(--primary)" bg="var(--primary-light)" size="lg" />
            ) : (
              <Button3D variant="primary" size="md" onClick={handleMarkComplete} icon={CheckCircle2}>
                Mark Lesson Complete & Unlock Next 🚀
              </Button3D>
            )}
          </div>

        </div>

      </CardRounded>

      {/* 4. Educational Video Copyright Notice Card */}
      <CardRounded style={{ backgroundColor: 'var(--bg-main)', border: '1.5px solid var(--border-light)', padding: '16px 20px' }}>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
          <ShieldAlert size={24} color="var(--purple)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '0.98rem', fontWeight: '800', color: 'var(--purple)', marginBottom: '4px' }}>
              Educational Video Notice
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              "This video is embedded directly from YouTube using YouTube's official embed feature.
              All copyrights, trademarks, and ownership belong to the respective YouTube creator and publisher.
              Math Made Easy does not host, modify, download, or redistribute this content.
              This content is displayed solely for educational purposes."
            </p>
          </div>
        </div>
      </CardRounded>

    </div>
  );
};

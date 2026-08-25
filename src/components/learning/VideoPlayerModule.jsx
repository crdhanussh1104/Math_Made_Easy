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
  ExternalLink, AlertTriangle, Film, Check, Lock, Unlock, ArrowRight
} from 'lucide-react';

export const VideoPlayerModule = ({ chapter, activeLesson, onUnlockNextLesson }) => {
  const { gameState, completeLesson, addXP } = useGame();
  
  // Dynamically load videos for the currently selected lesson
  const playlist = getVideosForLesson(activeLesson.id);

  const isAlreadyDone = gameState.completedLessons.includes(activeLesson.id);

  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [embedError, setEmbedError] = useState(false);
  const [videoWatched, setVideoWatched] = useState(isAlreadyDone);

  // 2 Trigger Points dividing the video length into 3 equal segments (Part 1: 0-33%, Part 2: 33-67%, Part 3: 67-100%)
  const [checkpoint1, setCheckpoint1] = useState(isAlreadyDone);
  const [checkpoint2, setCheckpoint2] = useState(isAlreadyDone);

  // Reset tab index and error state whenever selected lesson changes
  useEffect(() => {
    const done = gameState.completedLessons.includes(activeLesson.id);
    setActiveVideoIdx(0);
    setEmbedError(false);
    setVideoWatched(done);
    setCheckpoint1(done);
    setCheckpoint2(done);
  }, [activeLesson.id, chapter.id]);

  const currentVideo = playlist[activeVideoIdx] || null;
  const thumbnailUrl = currentVideo ? `https://img.youtube.com/vi/${currentVideo.videoId}/hqdefault.jpg` : '';

  // Calculate watch progress based on 2 checkpoints (0%, 50%, 100%)
  const checkpointsDoneCount = (checkpoint1 ? 1 : 0) + (checkpoint2 ? 1 : 0);
  const watchProgress = videoWatched ? 100 : checkpointsDoneCount === 2 ? 100 : checkpointsDoneCount === 1 ? 50 : 0;
  const canMarkComplete = checkpointsDoneCount === 2;

  const handleSelectVideo = (idx) => {
    setActiveVideoIdx(idx);
    setEmbedError(false);
    soundFx.playClick();
  };

  const handleTriggerCheckpoint = (cpNum) => {
    soundFx.playClick();
    if (cpNum === 1) {
      setCheckpoint1(true);
      soundFx.playCorrect();
    } else if (cpNum === 2) {
      if (!checkpoint1) {
        setCheckpoint1(true);
      }
      setCheckpoint2(true);
      soundFx.playCorrect();
      triggerConfetti('achievement');
    }
  };

  const handleMarkComplete = () => {
    if (!canMarkComplete) return;

    if (!videoWatched) {
      setVideoWatched(true);
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
                  <span>{vidItem.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Completion Badge */}
          {videoWatched ? (
            <BadgeChip label="Completed (+50 XP)" color="var(--primary)" bg="var(--primary-light)" size="md" />
          ) : (
            <BadgeChip label={`Checkpoints: ${checkpointsDoneCount}/2 (${watchProgress}%)`} color={canMarkComplete ? "var(--primary)" : "var(--orange)"} bg={canMarkComplete ? "var(--primary-light)" : "var(--warning-light)"} size="md" />
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
              key={currentVideo.youtubeUrl}
              src={currentVideo.youtubeUrl}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
            /* Fallback Thumbnail View when Publisher Disables Embedding */
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.95)), url(${thumbnailUrl})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: '#ffffff', padding: '24px', textAlign: 'center', gap: '14px'
            }}>
              <AlertTriangle size={48} color="var(--warning)" />
              <div>
                <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.25rem', fontWeight: '800' }}>
                  This video cannot be embedded by the publisher.
                </h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.9, marginTop: '4px' }}>
                  The channel owner has restricted third-party web embeds for this content.
                </p>
              </div>

              <a
                href={currentVideo.originalUrl || `https://www.youtube.com/watch?v=${currentVideo.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button3D variant="warning" size="lg" icon={ExternalLink}>
                  Watch on YouTube ↗
                </Button3D>
              </a>
            </div>
          )}
        </div>

        {/* 3. 3-Part Video Timeline & 2 Trigger Points */}
        <div style={{
          backgroundColor: 'var(--bg-main)',
          padding: '16px 18px',
          borderRadius: 'var(--radius-md)',
          border: '1.5px solid var(--border-light)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              🎯 Video Learning Trigger Points (3 Parts):
            </span>
            <span style={{ fontSize: '0.78rem', fontWeight: '700', color: canMarkComplete ? 'var(--primary)' : 'var(--text-muted)' }}>
              {canMarkComplete ? '✅ Both trigger checkpoints reached!' : '🔒 Reach 2 trigger checkpoints to unlock completion'}
            </span>
          </div>

          {/* 3-Segment Visual Track */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {/* Part 1 */}
            <div style={{
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: checkpoint1 ? 'rgba(79, 70, 229, 0.12)' : 'var(--bg-card-solid)',
              border: checkpoint1 ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: checkpoint1 ? 'var(--primary)' : 'var(--text-muted)' }}>
                  Part 1 (0% - 33%)
                </span>
                {checkpoint1 && <Check size={14} color="var(--primary)" />}
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Concepts & Intro
              </span>
            </div>

            {/* Part 2 */}
            <div style={{
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: checkpoint2 ? 'rgba(79, 70, 229, 0.12)' : 'var(--bg-card-solid)',
              border: checkpoint2 ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: checkpoint2 ? 'var(--primary)' : 'var(--text-muted)' }}>
                  Part 2 (33% - 67%)
                </span>
                {checkpoint2 && <Check size={14} color="var(--primary)" />}
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Methods & Proofs
              </span>
            </div>

            {/* Part 3 */}
            <div style={{
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: videoWatched ? 'rgba(79, 70, 229, 0.12)' : 'var(--bg-card-solid)',
              border: videoWatched ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: videoWatched ? 'var(--primary)' : 'var(--text-muted)' }}>
                  Part 3 (67% - 100%)
                </span>
                {videoWatched && <Check size={14} color="var(--primary)" />}
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Summary & Solved Qs
              </span>
            </div>
          </div>

          {/* Trigger Buttons */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '2px' }}>
            <button
              onClick={() => handleTriggerCheckpoint(1)}
              style={{
                flex: '1 1 140px',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                backgroundColor: checkpoint1 ? '#dcfce7' : 'var(--bg-card-solid)',
                color: checkpoint1 ? '#15803d' : 'var(--text-main)',
                fontWeight: '700',
                fontSize: '0.82rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                border: checkpoint1 ? '1px solid #bbf7d0' : '1px solid var(--border-light)',
                transition: 'all 0.15s ease'
              }}
            >
              {checkpoint1 ? <CheckCircle2 size={16} color="#15803d" /> : <PlayCircle size={16} />}
              <span>{checkpoint1 ? 'Trigger 1 Completed (33%)' : 'Check In: Completed Part 1'}</span>
            </button>

            <button
              onClick={() => handleTriggerCheckpoint(2)}
              style={{
                flex: '1 1 140px',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                backgroundColor: checkpoint2 ? '#dcfce7' : 'var(--bg-card-solid)',
                color: checkpoint2 ? '#15803d' : 'var(--text-main)',
                fontWeight: '700',
                fontSize: '0.82rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                border: checkpoint2 ? '1px solid #bbf7d0' : '1px solid var(--border-light)',
                transition: 'all 0.15s ease'
              }}
            >
              {checkpoint2 ? <CheckCircle2 size={16} color="#15803d" /> : <PlayCircle size={16} />}
              <span>{checkpoint2 ? 'Trigger 2 Completed (67%)' : 'Check In: Completed Part 2'}</span>
            </button>
          </div>
        </div>

        {/* 4. Video Title & Progress Action */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '4px' }}>
          
          <div>
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

          {/* Progress Bar & Mark Complete Button (Unlocked only after 2 trigger points) */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginTop: '6px' }}>
            <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: '700' }}>
                <span>Video Watch Progress (2 Checkpoints)</span>
                <span>{watchProgress}%</span>
              </div>
              <ProgressBar progress={watchProgress} color={canMarkComplete ? chapter.color : 'var(--orange)'} height={10} showLabel={false} />
            </div>

            {videoWatched ? (
              <BadgeChip label="Lesson Completed ✓ (+50 XP)" color="var(--primary)" bg="var(--primary-light)" size="lg" />
            ) : canMarkComplete ? (
              <Button3D variant="primary" size="md" onClick={handleMarkComplete} icon={CheckCircle2}>
                Mark Lesson Complete & Unlock Next 🚀
              </Button3D>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <button
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
                    opacity: 0.75
                  }}
                >
                  <Lock size={16} /> Mark Lesson Complete & Unlock Next 🚀
                </button>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  Complete Trigger 1 & 2 above to unlock
                </span>
              </div>
            )}
          </div>

        </div>

      </CardRounded>

      {/* 5. Educational Video Copyright Notice Card */}
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

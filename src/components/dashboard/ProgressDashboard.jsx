import React from 'react';
import { useGame } from '../../context/GameContext';
import { useLanguage } from '../../context/LanguageContext';
import { CardRounded } from '../ui/CardRounded';
import { ProgressBar } from '../ui/ProgressBar';
import { getChaptersForClass } from '../../data/chapters';
import { Trophy, Award, Flame, Star, CheckCircle } from 'lucide-react';

export const ProgressDashboard = () => {
  const { gameState } = useGame();
  const { t } = useLanguage();
  
  const selectedClassId = gameState.selectedClass || 'class4';
  const classNum = selectedClassId.replace('class', '');
  const chapters = getChaptersForClass(selectedClassId);

  const avgAccuracy = gameState.accuracyHistory.length > 0
    ? Math.round(gameState.accuracyHistory.reduce((a, b) => a + b, 0) / gameState.accuracyHistory.length)
    : 90;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div>
        <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-main)' }}>
          {t('class_label', { classNum })} {t('nav_dashboard')}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          {t('learn_subtitle', { classNum })}
        </p>
      </div>

      {/* Top Overview Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <CardRounded style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('accuracy')}</div>
          <div style={{ fontSize: '2rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>{avgAccuracy}%</div>
        </CardRounded>

        <CardRounded style={{ backgroundColor: 'var(--secondary-light)', color: 'var(--secondary)' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('header_xp', { xp: '' }).trim()}</div>
          <div style={{ fontSize: '2rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>{gameState.xp} XP</div>
        </CardRounded>

        <CardRounded style={{ backgroundColor: 'var(--warning-light)', color: 'var(--orange)' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('home_streak_title', { days: '' }).replace(/^[^\w\s]+/, '').trim()}</div>
          <div style={{ fontSize: '2rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>{gameState.streak} Days 🔥</div>
        </CardRounded>
      </div>

      {/* Topic Mastery Progress List */}
      <CardRounded>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px' }}>
          {t('class_label', { classNum })} {t('home_curriculum_title')}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {chapters.length === 0 ? (
            <div style={{ color: 'var(--text-muted)' }}>Syllabus coming soon.</div>
          ) : (
            chapters.map(chap => {
              const completedCount = chap.lessons.filter(l => gameState.completedLessons.includes(l.id)).length;
              const pct = Math.round((completedCount / chap.lessons.length) * 100);


              return (
                <div key={chap.id} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '0.95rem' }}>
                    <span>{chap.title}</span>
                    <span style={{ color: chap.color }}>{pct}% Mastered</span>
                </div>
                <ProgressBar progress={pct} color={chap.color} />
              </div>
            );
          }))}
        </div>
      </CardRounded>
    </div>
  );
};

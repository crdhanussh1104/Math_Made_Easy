import React from 'react';
import { getChaptersForClass } from '../data/chapters';
import { AvatarCharacter } from '../components/avatar/AvatarCharacter';
import { useGame } from '../context/GameContext';
import { useLanguage } from '../context/LanguageContext';
import {
  Play, BookOpen, HelpCircle, Box, Trophy, Lightbulb
} from 'lucide-react';

export const Home = ({ onNavigate, onSelectChapter }) => {
  const { gameState } = useGame();
  const { t } = useLanguage();
  
  const selectedClassId = gameState.selectedClass || 'class4';
  const classNum = selectedClassId.replace('class', '');
  const chapters = getChaptersForClass(selectedClassId);

  // Daily Math Spark Quote
  const dailyQuote = {
    text: "Mathematics is not about numbers, equations, or algorithms: it is about understanding!",
    author: "William Paul Thurston"
  };

  // Calculate Real Progress based on Student's Completed Lessons for THIS class
  const allLessons = [];
  chapters.forEach(chap => {
    chap.lessons.forEach(les => {
      allLessons.push({ ...les, chapterId: chap.id, chapterNumber: chap.number, chapterTitle: chap.title, color: chap.color });
    });
  });

  const completedSet = new Set(gameState.completedLessons || []);
  const classCompletedCount = allLessons.filter(l => completedSet.has(l.id)).length;
  const uncompletedLesson = allLessons.find(l => !completedSet.has(l.id)) || allLessons[allLessons.length - 1] || null;
  const resumeChap = uncompletedLesson ? chapters.find(c => c.id === uncompletedLesson.chapterId) : chapters[0];
  const realProgressPct = allLessons.length > 0 ? Math.round((classCompletedCount / allLessons.length) * 100) : 0;

  // Shared Card Style
  const cardStyle = {
    background: 'var(--bg-card-solid)',
    borderRadius: 'var(--radius-lg)',
    padding: '24px 32px',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--border-card)'
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      paddingBottom: '60px'
    }}>
      
      {/* 1. Welcome Section */}
      <div style={{
        ...cardStyle,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap-reverse',
        gap: '24px'
      }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '8px' }}>
            👋 {t('home_hero_title')}
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            {t('home_hero_desc')}
          </p>
          <div style={{ display: 'flex', gap: '16px', color: 'var(--text-main)', fontWeight: '600', fontSize: '0.95rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>🔥 {t('header_streak', { streak: gameState.streak })}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>⭐ {t('header_xp', { xp: gameState.xp })}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>🏆 {(gameState.claimedMissions || []).length} {t('completed')}</span>
          </div>
        </div>
        <div style={{ flexShrink: 0, paddingRight: '20px' }}>
          <AvatarCharacter avatarState={gameState.equippedAvatar} size={110} animate={true} />
        </div>
      </div>

      {/* 2. Continue Learning */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ fontSize: '1.3rem', color: 'var(--text-main)', fontWeight: '700', paddingLeft: '8px' }}>
          📚 {t('continue')} {t('nav_learn')}
        </h2>
        {chapters.length > 0 && resumeChap ? (
          <div style={{
            ...cardStyle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                {t('tab_syllabus')} • {t('class_label', { classNum })}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>
                {resumeChap.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                {t('next')}: <strong>{uncompletedLesson?.title || t('completed')}</strong>
              </p>
              
              {/* Progress Bar Container */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ flex: 1, height: '10px', backgroundColor: 'var(--border-light)', borderRadius: '99px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${realProgressPct}%`,
                    height: '100%',
                    backgroundColor: 'var(--primary)',
                    borderRadius: '99px',
                    transition: 'width 0.5s ease-in-out'
                  }} />
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                  {realProgressPct}% {t('completed')}
                </span>
              </div>
            </div>
            
            <button
              onClick={() => {
                onSelectChapter(resumeChap.id);
                onNavigate('learn');
              }}
              className="hover-lift"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                backgroundColor: 'var(--primary)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                fontSize: '1.05rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              <Play size={20} fill="currentColor" />
              {t('continue')}
            </button>
          </div>
        ) : (
          <div style={{ ...cardStyle, textAlign: 'center', color: 'var(--text-muted)' }}>
            Curriculum content for {t('class_label', { classNum })} is coming soon! Check back later.
          </div>
        )}
      </div>

      {/* 3. Quick Actions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ fontSize: '1.3rem', color: 'var(--text-main)', fontWeight: '700', paddingLeft: '8px' }}>
          {t('explore')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          
          <div onClick={() => onNavigate('learn')} className="hover-lift" style={{ ...cardStyle, backgroundColor: 'var(--accent-blue)', cursor: 'pointer', padding: '20px' }}>
            <BookOpen size={28} color="#2b3a4a" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#2b3a4a' }}>{t('nav_learn')}</h3>
            <p style={{ fontSize: '0.85rem', color: '#2b3a4a', opacity: 0.8, marginTop: '4px' }}>{t('learn_subtitle', { classNum })}</p>
          </div>

          <div onClick={() => onNavigate('quiz')} className="hover-lift" style={{ ...cardStyle, backgroundColor: 'var(--accent-green)', cursor: 'pointer', padding: '20px' }}>
            <HelpCircle size={28} color="#2b3a4a" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#2b3a4a' }}>{t('nav_practice')}</h3>
            <p style={{ fontSize: '0.85rem', color: '#2b3a4a', opacity: 0.8, marginTop: '4px' }}>{t('quiz_subtitle')}</p>
          </div>

          <div onClick={() => onNavigate('threeLab')} className="hover-lift" style={{ ...cardStyle, backgroundColor: 'var(--accent-purple)', cursor: 'pointer', padding: '20px' }}>
            <Box size={28} color="#2b3a4a" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#2b3a4a' }}>{t('nav_lab')}</h3>
            <p style={{ fontSize: '0.85rem', color: '#2b3a4a', opacity: 0.8, marginTop: '4px' }}>{t('lab_subtitle')}</p>
          </div>

          <div onClick={() => onNavigate('olympiadHub')} className="hover-lift" style={{ ...cardStyle, backgroundColor: 'var(--accent-yellow)', cursor: 'pointer', padding: '20px' }}>
            <Trophy size={28} color="#2b3a4a" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#2b3a4a' }}>{t('nav_olympiad')}</h3>
            <p style={{ fontSize: '0.85rem', color: '#2b3a4a', opacity: 0.8, marginTop: '4px' }}>{t('olympiad_subtitle')}</p>
          </div>

        </div>
      </div>

      {/* 4. Chapters Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ fontSize: '1.3rem', color: 'var(--text-main)', fontWeight: '700', paddingLeft: '8px' }}>
          📚 {t('home_curriculum_title')} ({t('class_label', { classNum })})
        </h2>
        {chapters.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
            {chapters.map((chap, idx) => (
              <div key={chap.id} className="hover-lift" onClick={() => { onSelectChapter(chap.id); onNavigate('learn'); }} style={{ ...cardStyle, cursor: 'pointer', padding: '20px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>
                  {['🔢', '➕', '✖️', '➗', '📐', '📏', '📊'][idx % 7]}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)', lineHeight: '1.3' }}>
                  {chap.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  {t('chapter_lessons', { count: chap.lessons.length })}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ ...cardStyle, textAlign: 'center', color: 'var(--text-muted)' }}>
            More chapters being added for this class soon!
          </div>
        )}
      </div>

      {/* 5. Daily Math Spark */}
      <div style={{
        ...cardStyle,
        backgroundColor: '#FFFBEA', // Soft yellow/cream
        border: '1px solid #F9D978',
        display: 'flex',
        gap: '16px',
        alignItems: 'flex-start'
      }}>
        <div style={{ color: '#E0A800', marginTop: '4px' }}>
          <Lightbulb size={24} />
        </div>
        <div>
          <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#D49A00', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>
            {t('home_fact_title')}
          </h4>
          <p style={{ fontSize: '1.05rem', fontWeight: '500', color: 'var(--text-main)', fontStyle: 'italic', marginBottom: '8px', lineHeight: '1.4' }}>
            "{dailyQuote.text}"
          </p>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            — {dailyQuote.author}
          </span>
        </div>
      </div>

    </div>
  );
};


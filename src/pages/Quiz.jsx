import React, { useState, useEffect } from 'react';
import { QuizPlayer } from '../components/quiz/QuizPlayer';
import { getChaptersForClass } from '../data/chapters';
import { getQuestionsForTopic } from '../data/questions';
import { useGame } from '../context/GameContext';
import { useLanguage } from '../context/LanguageContext';
import { CardRounded } from '../components/ui/CardRounded';
import { Button3D } from '../components/ui/Button3D';
import { BookOpen, CheckCircle, ChevronRight, Sparkles, Award } from 'lucide-react';

export const Quiz = ({ selectedChapterId, onNavigate }) => {
  const { gameState } = useGame();
  const { t } = useLanguage();
  
  const selectedClassId = gameState.selectedClass || 'class4';
  const chapters = getChaptersForClass(selectedClassId);

  // Derive class display name dynamically for all Classes 1 to 10
  const classNum = selectedClassId ? selectedClassId.replace(/\D/g, '') : '4';
  const classDisplayName = `${t('class_label', { classNum })} ICSE`;

  // Find active chapter
  const [activeChapterId, setActiveChapterId] = useState(
    selectedChapterId || (chapters[0] ? chapters[0].id : null)
  );

  // Sync when selectedClassId or chapters change
  useEffect(() => {
    if (chapters && chapters.length > 0) {
      if (!chapters.some(c => c.id === activeChapterId)) {
        setActiveChapterId(chapters[0].id);
      }
    }
  }, [selectedClassId, chapters]);

  const activeChap = chapters.find(c => c.id === activeChapterId) || chapters[0] || { title: 'Chapter', lessons: [] };
  const lessons = activeChap.lessons || [];

  // Active topic
  const [activeTopicId, setActiveTopicId] = useState(
    lessons[0] ? lessons[0].id : null
  );

  // Sync when activeChapterId or chapters change
  useEffect(() => {
    const curChap = chapters.find(c => c.id === activeChapterId) || chapters[0];
    if (curChap && curChap.lessons && curChap.lessons.length > 0) {
      if (!curChap.lessons.some(l => l.id === activeTopicId)) {
        setActiveTopicId(curChap.lessons[0].id);
      }
    }
  }, [activeChapterId, chapters]);

  const activeTopic = lessons.find(l => l.id === activeTopicId) || lessons[0] || { title: 'Topic' };

  // Calculate next topic in syllabus
  const allTopicsInClass = [];
  chapters.forEach(c => {
    (c.lessons || []).forEach(l => {
      allTopicsInClass.push({ chapterId: c.id, topicId: l.id, title: l.title });
    });
  });

  const currentTopicIndex = allTopicsInClass.findIndex(t => t.topicId === activeTopicId);
  const nextTopicObj = currentTopicIndex >= 0 && currentTopicIndex + 1 < allTopicsInClass.length
    ? allTopicsInClass[currentTopicIndex + 1]
    : null;

  const handleSelectNextTopic = (nextTId) => {
    const target = allTopicsInClass.find(t => t.topicId === nextTId);
    if (target) {
      setActiveChapterId(target.chapterId);
      setActiveTopicId(target.topicId);
    }
  };

  return (
    <div style={{ padding: '16px 0', maxWidth: '900px', margin: '0 auto' }}>
      {/* Topic & Theme Selector Bar */}
      <div style={{ background: '#ffffff', borderRadius: '16px', border: '2px solid #e2e8f0', padding: '16px 20px', marginBottom: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ background: '#4f46e5', color: '#ffffff', fontWeight: '800', fontSize: '0.8rem', padding: '4px 12px', borderRadius: '8px' }}>
              {classDisplayName}
            </span>
            <span style={{ fontWeight: '800', color: '#1e293b', fontSize: '1.05rem' }}>
              {t('quiz_title')}
            </span>
          </div>

          {/* Theme Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b' }}>{t('tab_syllabus')}:</label>
            <select
              value={activeChapterId || ''}
              onChange={(e) => {
                setActiveChapterId(e.target.value);
                const chap = chapters.find(c => c.id === e.target.value);
                if (chap && chap.lessons && chap.lessons.length > 0) {
                  setActiveTopicId(chap.lessons[0].id);
                }
              }}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1.5px solid #cbd5e1',
                fontWeight: '700',
                fontSize: '0.9rem',
                color: '#1e293b',
                background: '#f8fafc',
                cursor: 'pointer'
              }}
            >
              {chapters.map(chap => (
                <option key={chap.id} value={chap.id}>
                  {chap.themeName || chap.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Topic Pills */}
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
            {t('nav_practice')} ({t('chapter_lessons', { count: lessons.length })}):
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {lessons.map((lesson, idx) => {
              const isSelected = lesson.id === activeTopicId;
              return (
                <button
                  key={lesson.id}
                  onClick={() => setActiveTopicId(lesson.id)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '10px',
                    border: isSelected ? '2px solid #4f46e5' : '1.5px solid #e2e8f0',
                    background: isSelected ? '#ede9fe' : '#ffffff',
                    color: isSelected ? '#4338ca' : '#334155',
                    fontWeight: isSelected ? '800' : '600',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>{idx + 1}. {lesson.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quiz Player */}
      <QuizPlayer
        chapterId={activeChap.id}
        topicId={activeTopicId}
        themeTitle={activeChap.themeName || activeChap.title}
        topicTitle={activeTopic.title}
        classNameText={classDisplayName}
        practiceMode="school"
        onComplete={() => onNavigate && onNavigate('learn')}
        onResetMode={() => onNavigate && onNavigate('learn')}
        onSelectTopic={handleSelectNextTopic}
        nextTopicId={nextTopicObj ? nextTopicObj.topicId : null}
      />
    </div>
  );
};


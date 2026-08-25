import React, { useState, useEffect, useMemo } from 'react';
import { getChaptersForClass } from '../data/chapters';
import { getClassFormulaCards, getFormulaCardsForChapter, getFormulaCardsForTopic } from '../data/classFormulaCards';
import { CardRounded } from '../components/ui/CardRounded';
import { Button3D } from '../components/ui/Button3D';
import { ProgressBar } from '../components/ui/ProgressBar';
import { BadgeChip } from '../components/ui/BadgeChip';
import { MascotWidget } from '../components/ui/MascotWidget';
import { QuizPlayer } from '../components/quiz/QuizPlayer';
import { ChatWindow } from '../components/chat/ChatWindow';
import { InteractiveNotes } from '../components/learning/InteractiveNotes';
import { OlympiadInsights } from '../components/learning/OlympiadInsights';
import { OlympiadInsightsNLP } from '../components/learning/OlympiadInsightsNLP';
import { VideoPlayerModule } from '../components/learning/VideoPlayerModule';
import { FormulaCard3D } from '../components/library/FormulaCard3D';
import { AbacusVisualizer } from '../components/visualizers/AbacusVisualizer';
import { FractionPizza } from '../components/visualizers/FractionPizza';
import { ClockInteractive } from '../components/visualizers/ClockInteractive';
import { BalanceScale } from '../components/visualizers/BalanceScale';
import { ShapeBuilder } from '../components/visualizers/ShapeBuilder';
import { GraphBuilder } from '../components/visualizers/GraphBuilder';
import { CubeViewer } from '../components/three/CubeViewer';
import { RewardModal } from '../components/gamification/RewardModal';
import { useGame } from '../context/GameContext';
import { useLanguage } from '../context/LanguageContext';
import { speechFx } from '../utils/speech';
import { soundFx } from '../utils/audioSynth';
import {
  Tv, BookOpen, FileText, Lightbulb, HelpCircle, Bot, Sparkles,
  CheckCircle2, Star, Flame, Bookmark, ArrowRight, Volume2, Trophy,
  ChevronDown, ChevronUp, ZoomIn, ZoomOut, Eye, AlertTriangle, Check, X, Clock
} from 'lucide-react';

export const Learn = ({ selectedChapterId, onSelectChapter, onNavigate }) => {
  const { gameState, completeLesson, addXP, toggleBookmark } = useGame();
  const { t } = useLanguage();
  
  const selectedClassId = gameState.selectedClass || 'class4';
  const classNum = parseInt(selectedClassId.replace(/\D/g, ''), 10) || 4;
  const chapters = getChaptersForClass(selectedClassId);

  const [activeChapId, setActiveChapId] = useState(selectedChapterId || (chapters.length > 0 ? chapters[0].id : null));
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const [workspaceTab, setWorkspaceTab] = useState('video');

  useEffect(() => {
    if (selectedChapterId && chapters.some(c => c.id === selectedChapterId)) {
      setActiveChapId(selectedChapterId);
    } else if (chapters.length > 0) {
      setActiveChapId(chapters[0].id);
    } else {
      setActiveChapId(null);
    }
    setActiveLessonIdx(0);
  }, [selectedClassId, selectedChapterId]);

  // Reward Modal state
  const [showRewardModal, setShowRewardModal] = useState(false);

  if (!chapters || chapters.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
        <h2>{t('learn_title')} {t('class_label', { classNum })}</h2>
      </div>
    );
  }

  const activeChap = chapters.find(c => c.id === activeChapId) || chapters[0];
  const activeLesson = activeChap.lessons[activeLessonIdx] || activeChap.lessons[0];

  // Strictly Class-Specific & Topic-Specific formulas for current lesson/chapter
  const relevantFormulas = useMemo(() => {
    if (!activeLesson?.id) return [];
    const topicCards = getFormulaCardsForTopic(activeLesson.id);
    if (topicCards.length > 0) return topicCards;
    return getFormulaCardsForChapter(activeChap.id, classNum);
  }, [activeLesson?.id, activeChap.id, classNum]);

  const handleLessonComplete = () => {
    completeLesson(activeLesson.id, 100);
    setShowRewardModal(true);
  };

  const handleUnlockNextLesson = () => {
    if (activeLessonIdx + 1 < activeChap.lessons.length) {
      setActiveLessonIdx(prev => prev + 1);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '100%', paddingBottom: '60px' }}>
      
      {/* 1. Header: Chapter & Lesson Navigator */}
      <CardRounded style={{
        background: `linear-gradient(135deg, ${activeChap.color || '#4f46e5'} 0%, #1cb0f6 100%)`,
        color: '#ffffff',
        padding: '24px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {/* Top Class & Chapter Pills */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: 'rgba(255,255,255,0.25)', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
              {t('class_label', { classNum })} ICSE
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', opacity: 0.9 }}>
              {t('tab_syllabus')} {activeChap.number || 1} / {chapters.length}
            </span>
          </div>

          {/* Chapter Selector Dropdown */}
          <select
            value={activeChapId}
            onChange={(e) => {
              setActiveChapId(e.target.value);
              setActiveLessonIdx(0);
              if (onSelectChapter) onSelectChapter(e.target.value);
            }}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              backgroundColor: 'rgba(255,255,255,0.25)',
              color: '#ffffff',
              fontWeight: '700',
              fontFamily: 'var(--font-rounded)',
              fontSize: '0.9rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {chapters.map(c => (
              <option key={c.id} value={c.id} style={{ color: '#000' }}>
                Ch {c.number || ''}: {c.title}
              </option>
            ))}
          </select>
        </div>

        {/* Title & Description */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '2rem', fontWeight: '800', lineHeight: '1.2' }}>
            {activeChap.title}
          </h2>
          <p style={{ fontSize: '1rem', opacity: 0.95, marginTop: '6px' }}>
            {activeChap.description}
          </p>
        </div>

        {/* Lessons Sub-bar */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px', marginTop: '6px' }}>
          {activeChap.lessons.map((les, idx) => {
            const isCurrent = activeLessonIdx === idx;
            const isDone = gameState.completedLessons.includes(les.id);

            return (
              <button
                key={les.id}
                onClick={() => setActiveLessonIdx(idx)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  backgroundColor: isCurrent ? '#ffffff' : 'rgba(255,255,255,0.2)',
                  color: isCurrent ? (activeChap.color || '#4f46e5') : '#ffffff',
                  fontWeight: '700',
                  fontFamily: 'var(--font-rounded)',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {isDone ? <CheckCircle2 size={16} /> : <span>{idx + 1}.</span>}
                <span>{les.title}</span>
              </button>
            );
          })}
        </div>
      </CardRounded>

      {/* 2. Live Progress & Status Bar */}
      <CardRounded style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', padding: '16px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 300px' }}>
          <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-main)' }}>
            {t('accuracy')}:
          </div>
          <ProgressBar progress={((activeLessonIdx + 1) / activeChap.lessons.length) * 100} color={activeChap.color || '#4f46e5'} showLabel />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontWeight: '700', fontFamily: 'var(--font-rounded)', fontSize: '0.95rem' }}>
          <div style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Star size={20} fill="var(--secondary)" /> +{activeLesson.xp || 15} XP
          </div>
          <div style={{ color: 'var(--orange)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Flame size={20} fill="var(--orange)" /> {t('header_streak', { streak: gameState.streak })}
          </div>
        </div>
      </CardRounded>

      {/* 3. Main Workspace Navigation Tabs */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {[
          { id: 'video', label: t('tab_videos'), icon: Tv },
          { id: 'notes', label: t('tab_notes'), icon: FileText },
          { id: 'olympiad', label: t('tab_olympiad'), icon: Trophy },
          { id: 'textbook', label: t('tab_reader'), icon: BookOpen },
          { id: 'formulas', label: t('tab_cards'), icon: Lightbulb },
          { id: 'quiz', label: t('nav_quiz'), icon: HelpCircle },
          { id: 'pibot', label: t('home_pibot_ask_btn'), icon: Bot }
        ].map(tab => {

          const Icon = tab.icon;
          const isActive = workspaceTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setWorkspaceTab(tab.id)}
              style={{
                padding: '10px 18px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: isActive ? (activeChap.color || '#4f46e5') : 'var(--bg-card-solid)',
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                fontWeight: '700',
                fontFamily: 'var(--font-rounded)',
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? `0 4px 10px ${activeChap.color || '#4f46e5'}40` : 'var(--shadow-sm)',
                transition: 'all 0.2s ease'
              }}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 4. Tab Workspace Content Panels */}

      {/* TAB 1: YOUTUBE LESSON VIDEO LEARNING MODULE */}
      {workspaceTab === 'video' && (
        <VideoPlayerModule
          chapter={activeChap}
          activeLesson={activeLesson}
          onUnlockNextLesson={handleUnlockNextLesson}
        />
      )}

      {/* TAB 2: INTERACTIVE NOTES */}
      {workspaceTab === 'notes' && (
        <InteractiveNotes
          chapter={activeChap}
          activeLesson={activeLesson}
          classId={classNum}
        />
      )}

      {/* TAB 3: OLYMPIAD INSIGHTS & RECOMMENDATION ENGINE */}
      {workspaceTab === 'olympiad' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <OlympiadInsightsNLP chapterId={activeChap.id} />
          <OlympiadInsights chapterId={activeChap.id} />
        </div>
      )}

      {/* TAB 4: FLIPBOOK TEXTBOOK READER (Clean Placeholder) */}
      {workspaceTab === 'textbook' && (
        <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center', padding: '40px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f1f5f9', color: '#475569', fontSize: '0.8rem', fontWeight: '800', padding: '4px 12px', borderRadius: 'var(--radius-full)', textTransform: 'uppercase' }}>
              <BookOpen size={16} /> Official ICSE Mathematics • {t('class_label', { classNum })}
            </span>
          </div>

          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.6rem', fontWeight: '800', color: '#1e293b' }}>
            {t('tab_reader')}
          </h3>

          <div style={{
            maxWidth: '560px',
            margin: '0 auto',
            padding: '30px 24px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
            border: '2px dashed #cbd5e1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Clock size={36} color="#64748b" />
            <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#334155' }}>
              {t('ncert_reader_title')}
            </div>
            <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
              The official textbook chapters and reader pages for <strong>{activeChap.title}</strong> are formatted for {t('class_label', { classNum })}.
            </p>
            <div style={{ marginTop: '6px' }}>
              <span style={{ display: 'inline-block', background: '#e0f2fe', color: '#0284c7', fontWeight: '800', fontSize: '0.8rem', padding: '4px 12px', borderRadius: '8px', textTransform: 'uppercase' }}>
                ICSE Curriculum
              </span>
            </div>
          </div>
        </CardRounded>
      )}

      {/* TAB 5: 3D FLIP FORMULA CARDS */}
      {workspaceTab === 'formulas' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase' }}>
                  {t('class_label', { classNum })} ICSE • {activeChap.title}
                </span>
                <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '700', color: '#1e293b' }}>
                  {t('formula_cards_title')}
                </h3>
              </div>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>
                {relevantFormulas.length} {t('tab_cards')}
              </span>
            </div>

            {relevantFormulas.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '30px 20px', color: '#64748b' }}>
                <p>No formula cards available for this topic yet.</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
                {relevantFormulas.map(form => (
                  <FormulaCard3D key={form.id} formulaData={form} />
                ))}
              </div>
            )}
          </CardRounded>

          {/* Integrated Olympiad Insights below Formula Cards and above Quiz */}
          <OlympiadInsightsNLP chapterId={activeChap.id} />
        </div>
      )}

      {/* TAB 6: CHAPTER QUIZ */}
      {workspaceTab === 'quiz' && (
        <QuizPlayer
          chapterId={activeChap.id}
          topicId={activeLesson?.id}
          themeTitle={activeChap.themeName || activeChap.title}
          topicTitle={activeLesson?.title || activeChap.title}
          classNameText={`${t('class_label', { classNum })} ICSE`}
          onComplete={handleLessonComplete}
        />
      )}

      {/* TAB 8: ASK PI-BOT AI TUTOR */}
      {workspaceTab === 'pibot' && (
        <ChatWindow />
      )}

      {/* Rewards Celebration Modal */}
      <RewardModal
        isOpen={showRewardModal}
        onContinue={() => {
          setShowRewardModal(false);
          setWorkspaceTab('video');
        }}
        score={100}
        xpEarned={activeLesson.xp || 15}
        gemsEarned={15}
      />

    </div>
  );
};



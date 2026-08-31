import React, { useState, useEffect, useMemo } from 'react';
import { getChaptersForClass } from '../data/chapters';
import { getClassFormulaCards, getFormulaCardsForChapter, getFormulaCardsForTopic } from '../data/classFormulaCards';
import { getTextbookPdfUrl } from '../data/textbookPdfMap';
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

/** TextbookReader – self-contained PDF viewer with loading spinner */
const TextbookReader = ({ pdfUrl, activeChap, activeLesson, classNum, t }) => {
  const [pdfLoaded, setPdfLoaded] = useState(false);

  // Reset loaded state whenever the PDF URL changes (chapter switch)
  useEffect(() => { setPdfLoaded(false); }, [pdfUrl]);

  return (
    <>
      {/* Keyframe for spinner – injected once, tiny cost */}
      <style>{`@keyframes _tbSpin{to{transform:rotate(360deg)}}`}</style>

      <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '0', padding: '0', overflow: 'hidden' }}>

        {/* ── Header bar ── */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px', padding: '16px 20px',
          background: `linear-gradient(90deg, ${activeChap.color || '#4f46e5'}18 0%, transparent 100%)`,
          borderBottom: '1px solid var(--border-color, #e2e8f0)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{
              fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase',
              letterSpacing: '0.8px', color: activeChap.color || '#4f46e5',
              display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              <BookOpen size={14} />
              NCERT Mathematics • {t('class_label', { classNum })} • Chapter {activeChap.number || ''}
            </span>
            <span style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b' }}>
              {activeChap.title}
            </span>
            {activeLesson && (
              <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: '600' }}>
                📌 {activeLesson.title}
              </span>
            )}
          </div>

          {pdfUrl && (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a
                href={pdfUrl}
                download
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '8px 14px', borderRadius: 'var(--radius-full)',
                  background: activeChap.color || '#4f46e5', color: '#fff',
                  fontWeight: '700', fontSize: '0.82rem', textDecoration: 'none',
                  boxShadow: `0 3px 8px ${activeChap.color || '#4f46e5'}40`
                }}
              >
                ⬇ Download PDF
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '8px 14px', borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-card-solid, #f8fafc)',
                  border: '1.5px solid var(--border-color, #e2e8f0)',
                  color: '#475569', fontWeight: '700', fontSize: '0.82rem',
                  textDecoration: 'none'
                }}
              >
                ↗ Open in tab
              </a>
            </div>
          )}
        </div>

        {/* ── PDF viewer / unavailable fallback ── */}
        {pdfUrl ? (
          <div style={{ position: 'relative', width: '100%', height: '75vh' }}>

            {/* Loading spinner overlay */}
            {!pdfLoaded && (
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: '14px', background: '#f8fafc', zIndex: 2
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  border: `4px solid ${activeChap.color || '#4f46e5'}30`,
                  borderTopColor: activeChap.color || '#4f46e5',
                  animation: '_tbSpin 0.8s linear infinite'
                }} />
                <span style={{ fontSize: '0.88rem', fontWeight: '700', color: '#64748b' }}>
                  Loading textbook…
                </span>
              </div>
            )}

            <iframe
              key={pdfUrl}
              src={pdfUrl}
              title={`NCERT ${t('class_label', { classNum })} Chapter ${activeChap.number} – ${activeChap.title}`}
              onLoad={() => setPdfLoaded(true)}
              style={{
                width: '100%', height: '100%',
                border: 'none', display: 'block',
                opacity: pdfLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            />
          </div>
        ) : (
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: '12px', padding: '60px 24px', textAlign: 'center', color: '#64748b'
          }}>
            <Clock size={40} color="#94a3b8" />
            <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#334155' }}>
              Textbook PDF Coming Soon
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0, maxWidth: '420px' }}>
              The official NCERT chapter PDF for <strong>{activeChap.title}</strong> ({t('class_label', { classNum })}) will be available shortly.
            </p>
          </div>
        )}
      </CardRounded>
    </>
  );
};

export const Learn = ({ selectedChapterId, onSelectChapter, onNavigate }) => {
  const { gameState, completeLesson, addXP, toggleBookmark } = useGame();
  const { t } = useLanguage();
  
  const selectedClassId = gameState.selectedClass || 'class4';
  const classNum = parseInt(selectedClassId.replace(/\D/g, ''), 10) || 4;
  const chapters = getChaptersForClass(selectedClassId);

  const [activeChapId, setActiveChapId] = useState(() => {
    if (selectedChapterId && chapters.some(c => c.id === selectedChapterId)) return selectedChapterId;
    try {
      const saved = localStorage.getItem('mme_selectedChapterId');
      if (saved && chapters.some(c => c.id === saved)) return saved;
    } catch (e) {}
    return chapters.length > 0 ? chapters[0].id : null;
  });
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const [workspaceTab, setWorkspaceTabState] = useState(() => {
    try {
      return localStorage.getItem('mme_workspaceTab') || 'video';
    } catch (e) {
      return 'video';
    }
  });

  const setWorkspaceTab = (tabId) => {
    setWorkspaceTabState(tabId);
    try {
      localStorage.setItem('mme_workspaceTab', tabId);
    } catch (e) {}
  };

  useEffect(() => {
    if (selectedChapterId && chapters.some(c => c.id === selectedChapterId)) {
      setActiveChapId(selectedChapterId);
    } else if (chapters.length > 0 && (!activeChapId || !chapters.some(c => c.id === activeChapId))) {
      setActiveChapId(chapters[0].id);
    }
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
            {t('progress') || 'Progress'}:
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

      {/* TAB 4: NCERT TEXTBOOK PDF READER */}
      {workspaceTab === 'textbook' && (() => {
        const pdfUrl = getTextbookPdfUrl(selectedClassId, activeChap.number);
        return (
          <TextbookReader
            pdfUrl={pdfUrl}
            activeChap={activeChap}
            activeLesson={activeLesson}
            classNum={classNum}
            t={t}
          />
        );
      })()}


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
        </div>
      )}


      {/* TAB 6: PRACTICE VISUALIZER */}
      {workspaceTab === 'practice' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {activeChap.id === 'chap_1' || activeChap.id === 'c4_chap_1' ? (
            <AbacusVisualizer targetNumber={420513} onVerify={handleLessonComplete} />
          ) : activeChap.id === 'chap_4' || activeChap.id === 'c4_chap_4' ? (
            <FractionPizza targetNumerator={3} targetDenominator={8} onVerify={handleLessonComplete} />
          ) : activeChap.id === 'chap_5' || activeChap.id === 'c4_chap_5' ? (
            <ShapeBuilder onVerify={handleLessonComplete} />
          ) : activeChap.id === 'chap_6' || activeChap.id === 'c4_chap_6' ? (
            <BalanceScale targetWeightsCount={4} onVerify={handleLessonComplete} />
          ) : activeChap.id === 'chap_7' || activeChap.id === 'c4_chap_7' ? (
            <ClockInteractive targetHour={3} targetMinute={30} onVerify={handleLessonComplete} />
          ) : (
            <GraphBuilder />
          )}
        </div>
      )}

      {/* TAB 7: CHAPTER QUIZ */}
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



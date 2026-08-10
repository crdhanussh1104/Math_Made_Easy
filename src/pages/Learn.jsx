import React, { useState } from 'react';
import { class4Chapters } from '../data/chapters';
import { formulaBookData } from '../data/formulas';
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
import { speechFx } from '../utils/speech';
import { soundFx } from '../utils/audioSynth';
import {
  Tv, BookOpen, FileText, Lightbulb, HelpCircle, Bot, Sparkles,
  CheckCircle2, Star, Flame, Bookmark, ArrowRight, Volume2, Trophy,
  ChevronDown, ChevronUp, ZoomIn, ZoomOut, Eye, AlertTriangle, Check, X
} from 'lucide-react';

export const Learn = ({ selectedChapterId = 'chap_1', onSelectChapter, onNavigate }) => {
  const { gameState, completeLesson, addXP, toggleBookmark } = useGame();
  
  const [activeChapId, setActiveChapId] = useState(selectedChapterId || 'chap_1');
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const [workspaceTab, setWorkspaceTab] = useState('video');

  // Textbook reader state
  const [textbookPage, setTextbookPage] = useState(1);
  const [textbookZoom, setTextbookZoom] = useState(100);

  // Reward Modal state
  const [showRewardModal, setShowRewardModal] = useState(false);

  const activeChap = class4Chapters.find(c => c.id === activeChapId) || class4Chapters[0];
  const activeLesson = activeChap.lessons[activeLessonIdx] || activeChap.lessons[0];

  // Relevant formulas for current chapter
  const relevantFormulas = formulaBookData.filter(f =>
    f.category.toLowerCase().includes(activeChap.title.split(' ')[0].toLowerCase()) ||
    f.title.toLowerCase().includes(activeChap.title.split(' ')[0].toLowerCase())
  );

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
        background: `linear-gradient(135deg, ${activeChap.color} 0%, #1cb0f6 100%)`,
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
              Class 4 ICSE
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', opacity: 0.9 }}>
              Chapter {activeChap.number} of 7
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
            {class4Chapters.map(c => (
              <option key={c.id} value={c.id} style={{ color: '#000' }}>
                Ch {c.number}: {c.title}
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
                  color: isCurrent ? activeChap.color : '#ffffff',
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
                {isDone ? <CheckCircle2 size={16} /> : <span>Lesson {idx + 1}</span>}
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
            Lesson Progress:
          </div>
          <ProgressBar progress={((activeLessonIdx + 1) / activeChap.lessons.length) * 100} color={activeChap.color} showLabel />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontWeight: '700', fontFamily: 'var(--font-rounded)', fontSize: '0.95rem' }}>
          <div style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Star size={20} fill="var(--secondary)" /> +{activeLesson.xp} XP
          </div>
          <div style={{ color: 'var(--orange)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Flame size={20} fill="var(--orange)" /> {gameState.streak} Streak
          </div>
        </div>
      </CardRounded>

      {/* 3. Main Workspace Navigation Tabs */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {[
          { id: 'video', label: 'Video Player', icon: Tv },
          { id: 'notes', label: 'Interactive Notes', icon: FileText },
          { id: 'olympiad', label: 'Olympiad Insights', icon: Trophy },
          { id: 'textbook', label: 'Textbook Reader', icon: BookOpen },
          { id: 'formulas', label: 'Formula Cards', icon: Lightbulb },
          { id: 'practice', label: 'Practice Visualizer', icon: Sparkles },
          { id: 'quiz', label: 'Chapter Quiz', icon: HelpCircle },
          { id: 'pibot', label: 'Ask Pi-Bot AI', icon: Bot }
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
                backgroundColor: isActive ? activeChap.color : 'var(--bg-card-solid)',
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                fontWeight: '700',
                fontFamily: 'var(--font-rounded)',
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? `0 4px 10px ${activeChap.color}40` : 'var(--shadow-sm)',
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
        <InteractiveNotes chapter={activeChap} />
      )}

      {/* TAB 3: OLYMPIAD INSIGHTS & RECOMMENDATION ENGINE */}
      {workspaceTab === 'olympiad' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <OlympiadInsightsNLP chapterId={activeChap.id} />
          <OlympiadInsights chapterId={activeChap.id} />
        </div>
      )}

      {/* TAB 4: FLIPBOOK TEXTBOOK READER */}
      {workspaceTab === 'textbook' && (
        <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '700' }}>
                Textbook Reader: Page {textbookPage} of 12
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Official ICSE Mathematics Class 4 Flipbook View
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => setTextbookZoom(z => Math.max(80, z - 10))} title="Zoom Out" style={{ padding: '8px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-solid)', cursor: 'pointer' }}>
                <ZoomOut size={18} />
              </button>
              <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>{textbookZoom}%</span>
              <button onClick={() => setTextbookZoom(z => Math.min(140, z + 10))} title="Zoom In" style={{ padding: '8px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-solid)', cursor: 'pointer' }}>
                <ZoomIn size={18} />
              </button>

              <button
                onClick={() => toggleBookmark(`textbook_${activeChap.id}_p${textbookPage}`)}
                style={{
                  padding: '8px 14px', borderRadius: 'var(--radius-full)', border: 'none',
                  backgroundColor: gameState.bookmarks.includes(`textbook_${activeChap.id}_p${textbookPage}`) ? 'var(--warning-light)' : 'var(--bg-main)',
                  color: 'var(--orange)', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
                }}
              >
                <Bookmark size={16} fill={gameState.bookmarks.includes(`textbook_${activeChap.id}_p${textbookPage}`) ? 'var(--orange)' : 'none'} />
                Bookmark
              </button>
            </div>
          </div>

          <div style={{
            backgroundColor: 'var(--bg-card-solid)',
            padding: '28px',
            borderRadius: 'var(--radius-md)',
            border: '2px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            transform: `scale(${textbookZoom / 100})`,
            transformOrigin: 'top center',
            transition: 'transform 0.2s ease',
            lineHeight: '1.8',
            fontSize: '1rem',
            whiteSpace: 'pre-wrap'
          }}>
            {activeChap.textbookContent}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <Button3D
              variant="outline"
              disabled={textbookPage <= 1}
              onClick={() => { setTextbookPage(p => Math.max(1, p - 1)); soundFx.playClick(); }}
            >
              Previous Page
            </Button3D>

            <span style={{ fontWeight: '700', fontFamily: 'var(--font-rounded)' }}>
              Page {textbookPage} / 12
            </span>

            <Button3D
              variant="secondary"
              disabled={textbookPage >= 12}
              onClick={() => { setTextbookPage(p => Math.min(12, p + 1)); soundFx.playClick(); }}
            >
              Next Page
            </Button3D>
          </div>
        </CardRounded>
      )}

      {/* TAB 5: 3D FLIP FORMULA CARDS */}
      {workspaceTab === 'formulas' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '700' }}>
              3D Flip Formula Cards
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {(relevantFormulas.length > 0 ? relevantFormulas : formulaBookData).map(form => (
                <FormulaCard3D key={form.id} formulaData={form} />
              ))}
            </div>
          </CardRounded>

          {/* Integrated Olympiad Insights below Formula Cards and above Quiz */}
          <OlympiadInsightsNLP chapterId={activeChap.id} />
        </div>
      )}

      {/* TAB 6: PRACTICE VISUALIZER */}
      {workspaceTab === 'practice' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {activeChap.id === 'chap_1' ? (
            <AbacusVisualizer targetNumber={420513} onVerify={handleLessonComplete} />
          ) : activeChap.id === 'chap_4' ? (
            <FractionPizza targetNumerator={3} targetDenominator={8} onVerify={handleLessonComplete} />
          ) : activeChap.id === 'chap_5' ? (
            <ShapeBuilder onVerify={handleLessonComplete} />
          ) : activeChap.id === 'chap_6' ? (
            <BalanceScale targetWeightsCount={4} onVerify={handleLessonComplete} />
          ) : activeChap.id === 'chap_7' ? (
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
        xpEarned={activeLesson.xp}
        gemsEarned={15}
      />

    </div>
  );
};

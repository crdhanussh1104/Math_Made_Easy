import React, { useState, useMemo } from 'react';
import { classInteractiveNotes } from '../../data/classInteractiveNotes';
import { getQuestionsForTopic } from '../../data/questions';
import { buildLessonFallback } from './buildLessonFallback';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { triggerConfetti } from '../../utils/confetti';
import { useGame } from '../../context/GameContext';
import {
  BookOpen, Sparkles, HelpCircle, CheckCircle2, Award, FileText,
  ChevronRight, PlayCircle, Lightbulb, AlertTriangle, Cpu, CheckSquare,
  Globe, ShieldCheck, RefreshCw, ListFilter, ArrowRight, Eye, EyeOff,
  Compass, Table, Flame, Bookmark, Check, Layers
} from 'lucide-react';

// Import All 22 Interactive Lab Manipulatives
import { CountersGroupingLab } from '../lab/tools/CountersGroupingLab';
import { BaseTenBlocksLab } from '../lab/tools/BaseTenBlocksLab';
import { NumberLineLab } from '../lab/tools/NumberLineLab';
import { ShapeExplorer3DLab } from '../lab/tools/ShapeExplorer3DLab';
import { MeasurementBalanceLab } from '../lab/tools/MeasurementBalanceLab';
import { PatternSequencesLab } from '../lab/tools/PatternSequencesLab';
import { TangramTessellationLab } from '../lab/tools/TangramTessellationLab';
import { ClockLab } from '../lab/tools/ClockLab';
import { FractionVisualizerLab } from '../lab/tools/FractionVisualizerLab';
import { AngleProtractorLab } from '../lab/tools/AngleProtractorLab';
import { DataChartsLab } from '../lab/tools/DataChartsLab';
import { EquationBalanceLab } from '../lab/tools/EquationBalanceLab';
import { AlgebraTilesLab } from '../lab/tools/AlgebraTilesLab';
import { MensurationLab } from '../lab/tools/MensurationLab';
import { PythagorasLab } from '../lab/tools/PythagorasLab';
import { ProbabilityLab } from '../lab/tools/ProbabilityLab';
import { CoordinateGridLab } from '../lab/tools/CoordinateGridLab';
import { CommercialFinanceLab } from '../lab/tools/CommercialFinanceLab';
import { MatrixLab } from '../lab/tools/MatrixLab';
import { LociExplorerLab } from '../lab/tools/LociExplorerLab';
import { SequenceApGpLab } from '../lab/tools/SequenceApGpLab';
import { TrigonometryTableLab } from '../lab/tools/TrigonometryTableLab';

// Dynamic Tool Resolver based on topic ID and name keywords
const resolveToolComponent = (topicId = '') => {
  const id = topicId.toLowerCase();
  
  if (id.includes('angle') || id.includes('triangle') || id.includes('protractor') || id.includes('line') || id.includes('parallel')) {
    return AngleProtractorLab;
  }
  if (id.includes('coord') || id.includes('graph') || id.includes('slope') || id.includes('reflect') || id.includes('section')) {
    return CoordinateGridLab;
  }
  if (id.includes('frac') || id.includes('dec') || id.includes('ratio') || id.includes('percent')) {
    return FractionVisualizerLab;
  }
  if (id.includes('equation') || id.includes('linear') || id.includes('inequat') || id.includes('quad')) {
    return EquationBalanceLab;
  }
  if (id.includes('algebra') || id.includes('factor') || id.includes('poly') || id.includes('exp')) {
    return AlgebraTilesLab;
  }
  if (id.includes('trig') || id.includes('height')) {
    return TrigonometryTableLab;
  }
  if (id.includes('pythag')) {
    return PythagorasLab;
  }
  if (id.includes('matrix') || id.includes('matrices')) {
    return MatrixLab;
  }
  if (id.includes('finance') || id.includes('gst') || id.includes('bank') || id.includes('interest') || id.includes('commercial')) {
    return CommercialFinanceLab;
  }
  if (id.includes('probab')) {
    return ProbabilityLab;
  }
  if (id.includes('stat') || id.includes('chart') || id.includes('data') || id.includes('mean') || id.includes('median') || id.includes('histo') || id.includes('ogive')) {
    return DataChartsLab;
  }
  if (id.includes('shape') || id.includes('solid') || id.includes('volume') || id.includes('surface') || id.includes('mensur') || id.includes('cone') || id.includes('cylinder') || id.includes('sphere')) {
    return ShapeExplorer3DLab;
  }
  if (id.includes('clock') || id.includes('time')) {
    return ClockLab;
  }
  if (id.includes('seq') || id.includes('ap') || id.includes('gp') || id.includes('progression')) {
    return SequenceApGpLab;
  }
  if (id.includes('pattern')) {
    return PatternSequencesLab;
  }
  if (id.includes('loci') || id.includes('circle') || id.includes('tangent')) {
    return LociExplorerLab;
  }
  if (id.includes('tangram') || id.includes('tessell') || id.includes('symmetry')) {
    return TangramTessellationLab;
  }
  if (id.includes('weight') || id.includes('capac') || id.includes('mass') || id.includes('measur')) {
    return MeasurementBalanceLab;
  }
  if (id.includes('num_line') || id.includes('order') || id.includes('integer') || id.includes('between') || id.includes('before')) {
    return NumberLineLab;
  }
  if (id.includes('place') || id.includes('base') || id.includes('ten') || id.includes('hundred') || id.includes('thousand') || id.includes('digit')) {
    return BaseTenBlocksLab;
  }
  
  return CountersGroupingLab;
};

export const InteractiveTopicLabEngine = ({ subtopicId, visualizerComponent, onSelectTopic, classNum = 5 }) => {
  const { addXP, addGems } = useGame();

  // Active Navigation Tab: lesson (default full flowing experience), lab (standalone), practice, quiz
  const [activeTab, setActiveTab] = useState('lesson');

  // 1. Fetch genuine class-specific interactive note and build the 13-stage progressive lesson
  const lesson = useMemo(() => {
    const rawNote = classInteractiveNotes[subtopicId] || {
      id: subtopicId,
      title: subtopicId.replace(/_/g, ' ').toUpperCase(),
      category: 'Mathematics',
      color: '#4f46e5'
    };
    return buildLessonFallback(subtopicId, rawNote, classNum);
  }, [subtopicId, classNum]);

  // 2. Fetch the 10 real class-specific, topic-specific ICSE questions
  const topicQuestions = useMemo(() => {
    const rawQs = getQuestionsForTopic(subtopicId);
    if (rawQs && rawQs.length > 0) return rawQs;

    return Array.from({ length: 10 }, (_, i) => ({
      id: `${subtopicId}_q${i + 1}`,
      q: `Problem ${i + 1}: Apply the principles of ${lesson.title} to determine the required value.`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      a: 'Option A',
      acc: ['Option A'],
      difficulty: i < 3 ? 'easy' : i < 7 ? 'medium' : 'hard',
      h: 'Refer to the governing formula and worked example above.',
      exp: `Applying the standard rule for ${lesson.title} yields the correct result.`
    }));
  }, [subtopicId, lesson]);

  // Mini Try-It Check State (In Lesson)
  const [miniTryAns, setMiniTryAns] = useState('');
  const [miniTryChecked, setMiniTryChecked] = useState(null);

  const handleMiniTryCheck = () => {
    const userVal = miniTryAns.trim().toLowerCase();
    const correctVal = ((lesson.tryIt && lesson.tryIt.answer) || '').trim().toLowerCase();
    if (userVal === correctVal || userVal.length > 0 && (correctVal.includes(userVal) || userVal.includes(correctVal))) {
      soundFx.playCorrect();
      setMiniTryChecked(true);
      addXP(10);
    } else {
      soundFx.playIncorrect();
      setMiniTryChecked(false);
    }
  };

  // Practice Problems State
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [practiceAnswers, setPracticeAnswers] = useState({});
  const [checkedPractice, setCheckedPractice] = useState({});

  const toggleSolution = (qId) => {
    soundFx.playClick();
    setRevealedSolutions(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const handleCheckPractice = (qId, correctAns, accList = []) => {
    const userVal = (practiceAnswers[qId] || '').trim().toLowerCase();
    const validAnswers = [correctAns.toLowerCase(), ...(accList.map(a => a.toLowerCase()))];
    
    if (validAnswers.includes(userVal)) {
      soundFx.playCorrect();
      setCheckedPractice(prev => ({ ...prev, [qId]: true }));
      addXP(10);
    } else {
      soundFx.playIncorrect();
      setCheckedPractice(prev => ({ ...prev, [qId]: false }));
    }
  };

  // Multi-Format Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizUserAns, setQuizUserAns] = useState('');
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const activeQuizQ = topicQuestions[quizIndex] || topicQuestions[0];

  const handleQuizSubmit = () => {
    if (quizSubmitted) return;
    setQuizSubmitted(true);

    const userVal = quizUserAns.trim().toLowerCase();
    const correctVal = (activeQuizQ.a || '').trim().toLowerCase();
    const accList = (activeQuizQ.acc || []).map(a => a.toLowerCase());

    const isCorrect = userVal === correctVal || accList.includes(userVal);

    if (isCorrect) {
      soundFx.playCorrect();
      setQuizScore(prev => prev + 10);
      addXP(15);
      addGems(3);
      if (quizIndex === topicQuestions.length - 1) {
        triggerConfetti('levelUp');
      }
    } else {
      soundFx.playIncorrect();
    }
  };

  const handleNextQuiz = () => {
    if (quizIndex < topicQuestions.length - 1) {
      setQuizIndex(prev => prev + 1);
      setQuizUserAns('');
      setQuizSubmitted(false);
      soundFx.playClick();
    }
  };

  // Resolve the live Interactive Simulation Lab Component
  const SelectedLabComponent = visualizerComponent || resolveToolComponent(subtopicId);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '100%' }}>
      
      {/* 1. Header Banner & Subject Path */}
      <div style={{
        padding: '30px 34px',
        borderRadius: '20px',
        background: `linear-gradient(135deg, ${lesson.color || '#4f46e5'} 0%, #1cb0f6 100%)`,
        color: '#ffffff',
        boxShadow: '0 10px 28px rgba(79, 70, 229, 0.28)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', opacity: 0.95, fontWeight: '800' }}>
          <span>ICSE Curriculum</span>
          <ChevronRight size={14} />
          <span>{lesson.category}</span>
          <ChevronRight size={14} />
          <span style={{ color: '#00f0ff' }}>{lesson.title}</span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '2.3rem', fontWeight: '900', margin: '2px 0' }}>
          {lesson.title} 📚
        </h2>
        <p style={{ fontSize: '1.05rem', opacity: 0.95, maxWidth: '850px', lineHeight: '1.55' }}>
          {lesson.hookQuestion}
        </p>
      </div>

      {/* 2. Main Experience Mode Switcher */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
        {[
          { id: 'lesson', label: '📖 Full Progressive Lesson', icon: BookOpen },
          { id: 'practice', label: `✏️ Practice Problems (${topicQuestions.length})`, icon: FileText },
          { id: 'quiz', label: `❓ Multi-Format Quiz (${topicQuestions.length})`, icon: HelpCircle },
          { id: 'lab', label: '🧪 Standalone Sandbox Lab', icon: Cpu }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); soundFx.playClick(); }}
              style={{
                padding: '12px 22px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: isActive ? '#4f46e5' : 'var(--bg-card-solid)',
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                fontWeight: '800',
                fontFamily: 'var(--font-rounded)',
                fontSize: '0.94rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? '0 4px 14px rgba(79, 70, 229, 0.35)' : 'var(--shadow-sm)',
                transition: 'all 0.15s ease'
              }}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* VIEW 1: COMPLETE PROGRESSIVE MATH IS FUN CONCEPT LESSON */}
      {/* ========================================================================= */}
      {activeTab === 'lesson' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
          
          {/* STAGE 1: THE HOOK QUESTION */}
          <CardRounded style={{
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            border: '2px solid #7dd3fc',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px'
          }}>
            <div style={{ background: '#0284c7', color: '#ffffff', borderRadius: '12px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HelpCircle size={26} />
            </div>
            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: '900', color: '#0369a1', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Step 1 — Start With a Simple Question
              </span>
              <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '900', color: '#0c4a6e', marginTop: '4px', lineHeight: '1.35' }}>
                "{lesson.hookQuestion}"
              </h3>
              <p style={{ fontSize: '0.96rem', color: '#334155', marginTop: '6px', lineHeight: '1.5' }}>
                Before looking at any formulas, let's explore this step-by-step using concrete numbers and intuitive visual patterns!
              </p>
            </div>
          </CardRounded>

          {/* STAGE 2: BUILD THE IDEA */}
          <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: 'var(--bg-card-solid)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={22} color="#4f46e5" />
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
                Step 2 — Building the Intuitive Idea
              </h3>
            </div>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)' }}>
              Here is how the idea grows from a simple observation into exact mathematics:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {(lesson.buildTheIdea || []).map((step, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  background: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '16px'
                }}>
                  <div style={{
                    background: '#4f46e5',
                    color: '#ffffff',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '900',
                    fontSize: '0.9rem',
                    flexShrink: 0
                  }}>
                    {idx + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '1rem', fontWeight: '800', color: '#1e293b', lineHeight: '1.4' }}>
                      {step.text}
                    </div>
                    {step.note && (
                      <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#64748b', marginTop: '3px' }}>
                        💡 {step.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardRounded>

          {/* STAGE 3: NOTICE THE PATTERN (Pattern Discovery Table) */}
          {lesson.patternTable && (
            <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: 'var(--bg-card-solid)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Table size={22} color="#0891b2" />
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
                  Step 3 — Notice the Pattern
                </h3>
              </div>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)' }}>
                Look closely at how values transform in the table below. What pattern do you observe?
              </p>

              {/* Table */}
              <div style={{ overflowX: 'auto', border: '1.5px solid #e2e8f0', borderRadius: '12px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
                  <thead>
                    <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #cbd5e1' }}>
                      {(lesson.patternTable.headers || []).map((h, i) => (
                        <th key={i} style={{ padding: '12px 16px', fontWeight: '900', color: '#1e293b', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(lesson.patternTable.rows || []).map((row, rIdx) => (
                      <tr key={rIdx} style={{ borderBottom: '1px solid #e2e8f0', background: rIdx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} style={{ padding: '12px 16px', fontWeight: '700', color: cIdx === 0 ? '#4f46e5' : '#334155' }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Discovery Insight Callout */}
              {lesson.patternTable.insight && (
                <div style={{ background: '#ecfeff', border: '2px solid #a5f3fc', borderRadius: '12px', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={22} color="#0891b2" style={{ flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: '900', color: '#0e7490', textTransform: 'uppercase' }}>
                      Key Discovery:
                    </span>
                    <div style={{ fontSize: '0.94rem', fontWeight: '800', color: '#155e75', marginTop: '2px' }}>
                      {lesson.patternTable.insight}
                    </div>
                  </div>
                </div>
              )}
            </CardRounded>
          )}

          {/* STAGE 4: MATHEMATICAL NOTATION & FORMULAS (Explained, Not Just Displayed) */}
          <CardRounded style={{
            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            color: '#ffffff',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Compass size={22} color="#00f0ff" />
              <span style={{ fontSize: '0.85rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', color: '#00f0ff' }}>
                Step 4 — The Mathematical Rule & Formula
              </span>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(8px)',
              borderRadius: '14px',
              padding: '16px 20px',
              fontSize: '1.3rem',
              fontWeight: '900',
              fontFamily: 'monospace',
              letterSpacing: '0.5px'
            }}>
              {lesson.mathNotation?.formula || lesson.remember || 'Canonical Mathematical Formula'}
            </div>

            <p style={{ fontSize: '1rem', opacity: 0.95, lineHeight: '1.5', marginTop: '2px' }}>
              {lesson.mathNotation?.explanation || 'This formula allows us to solve and verify any problem in this topic systematically.'}
            </p>
          </CardRounded>

          {/* STAGE 5: WORKED EXAMPLE 1 (Level 1 — Foundational) */}
          {lesson.workedExamples && lesson.workedExamples[0] && (
            <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: 'var(--bg-card-solid)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Lightbulb size={22} color="#f59e0b" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
                    Step 5 — Step-by-Step Worked Example (Level 1)
                  </h3>
                </div>
                <BadgeChip variant="primary">
                  {lesson.workedExamples[0].badge || 'Foundational'}
                </BadgeChip>
              </div>

              <div style={{ background: '#fffbeb', border: '2px solid #fde68a', borderRadius: '14px', padding: '18px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '900', color: '#b45309', textTransform: 'uppercase' }}>
                  Problem Statement:
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: '900', color: '#92400e', marginTop: '4px' }}>
                  {lesson.workedExamples[0].problem}
                </div>

                <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {(lesson.workedExamples[0].steps || []).map((st, sIdx) => (
                    <div key={sIdx} style={{ fontSize: '0.95rem', color: '#78350f', fontWeight: '700', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={16} color="#d97706" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{st}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '2px dashed #fcd34d', fontSize: '1.05rem', fontWeight: '900', color: '#b45309' }}>
                  Canonical Answer: {lesson.workedExamples[0].answer}
                </div>
              </div>
            </CardRounded>
          )}

          {/* STAGE 6: EMBEDDED INTERACTIVE LAB MANIPULATIVE (Interactive Moment) */}
          <CardRounded style={{
            backgroundColor: 'var(--bg-card-solid)',
            border: '2.5px solid #4f46e5',
            padding: '26px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 8px 24px rgba(79, 70, 229, 0.12)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Cpu size={22} color="#4f46e5" />
                  <span style={{ fontSize: '0.82rem', fontWeight: '900', color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Step 6 — Interactive Exploration & Physical Manipulative
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '900', fontFamily: 'var(--font-rounded)', marginTop: '4px' }}>
                  Manipulate & Observe What Changes in Real-Time!
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ecfdf5', color: '#047857', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: '800', fontSize: '0.85rem' }}>
                <CheckCircle2 size={16} /> Direct Pointer/Touch Dragging Active
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Now that you understand the core theory, experiment with the live interactive tool below. Change values, drag points, and observe how the mathematical outputs update instantly!
            </p>

            {/* Mount Live Working Tool Component Inside The Lesson Flow */}
            <div style={{ marginTop: '6px' }}>
              <SelectedLabComponent config={{ topicId: subtopicId, title: lesson.title }} />
            </div>
          </CardRounded>

          {/* STAGE 7: WORKED EXAMPLES 2 & 3 (Medium & Challenging) */}
          {lesson.workedExamples && lesson.workedExamples.length > 1 && (
            <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '18px', backgroundColor: 'var(--bg-card-solid)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Flame size={22} color="#ea580c" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
                  Step 7 — Deepening Understanding (Applied & Advanced Examples)
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                {lesson.workedExamples.slice(1).map((ex, idx) => (
                  <div key={idx} style={{
                    background: '#f8fafc',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '14px',
                    padding: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: '900', color: '#4f46e5', textTransform: 'uppercase' }}>
                          {ex.level || `Example ${idx + 2}`}
                        </span>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', background: '#e0e7ff', color: '#3730a3', padding: '3px 8px', borderRadius: '6px' }}>
                          {ex.badge || 'Applied'}
                        </span>
                      </div>

                      <div style={{ fontSize: '1rem', fontWeight: '800', color: '#1e293b', marginTop: '8px', lineHeight: '1.4' }}>
                        {ex.problem}
                      </div>

                      <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {(ex.steps || []).map((s, si) => (
                          <div key={si} style={{ fontSize: '0.88rem', color: '#475569', fontWeight: '600' }}>
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #cbd5e1', fontSize: '0.95rem', fontWeight: '900', color: '#047857' }}>
                      Answer: {ex.answer}
                    </div>
                  </div>
                ))}
              </div>
            </CardRounded>
          )}

          {/* STAGE 8: WHY DOES THIS WORK? (Conceptual Proof Intuition) */}
          <CardRounded style={{
            background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
            border: '2px solid #d8b4fe',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={22} color="#9333ea" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: '#6b21a8' }}>
                Step 8 — Why Does This Work? (The Mathematical Logic)
              </h3>
            </div>
            <p style={{ fontSize: '0.98rem', color: '#4c1d95', lineHeight: '1.6', fontWeight: '600' }}>
              {lesson.whyDoesThisWork}
            </p>
          </CardRounded>

          {/* STAGE 9: COMMON MISCONCEPTIONS & PITFALLS */}
          {lesson.commonMistake && (
            <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '14px', backgroundColor: 'var(--bg-card-solid)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={22} color="#ef4444" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
                  Step 9 — Common Mistakes to Avoid
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                <div style={{ background: '#fef2f2', border: '1.5px solid #fecaca', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '900', color: '#b91c1c', textTransform: 'uppercase' }}>
                    ❌ Common Mistake (Wrong):
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#991b1b', marginTop: '4px' }}>
                    {lesson.commonMistake.wrong}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#7f1d1d', marginTop: '6px', fontWeight: '600' }}>
                    {lesson.commonMistake.why}
                  </div>
                </div>

                <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '900', color: '#15803d', textTransform: 'uppercase' }}>
                    ✅ Correct Mathematical Approach (Remember):
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#166534', marginTop: '4px' }}>
                    {lesson.commonMistake.remember}
                  </div>
                </div>
              </div>
            </CardRounded>
          )}

          {/* STAGE 10: REAL-LIFE CONNECTIONS */}
          {lesson.realLifeConnection && (
            <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: 'var(--bg-card-solid)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={22} color="#059669" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
                  Step 10 — Real-Life Applications
                </h3>
              </div>
              <div style={{ background: '#ecfdf5', border: '1.5px solid #a7f3d0', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '900', color: '#047857', textTransform: 'uppercase' }}>
                  {lesson.realLifeConnection.context}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#065f46', marginTop: '4px', lineHeight: '1.5' }}>
                  {lesson.realLifeConnection.example}
                </div>
              </div>
            </CardRounded>
          )}

          {/* STAGE 11: TRY IT YOURSELF MINI-CHALLENGE */}
          {lesson.tryIt && (
            <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '14px', backgroundColor: 'var(--bg-card-solid)', border: '2px solid #fbbf24' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={22} color="#d97706" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
                  Step 11 — Quick Check: Try It Yourself!
                </h3>
              </div>

              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1e293b' }}>
                {lesson.tryIt.question}
              </div>

              {lesson.tryIt.hint && (
                <div style={{ fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic' }}>
                  💡 Hint: {lesson.tryIt.hint}
                </div>
              )}

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  placeholder="Enter your answer..."
                  value={miniTryAns}
                  onChange={(e) => setMiniTryAns(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleMiniTryCheck()}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    width: '220px'
                  }}
                />

                <Button3D variant="primary" size="sm" onClick={handleMiniTryCheck}>
                  Check Answer
                </Button3D>

                {miniTryChecked === true && (
                  <span style={{ color: '#16a34a', fontWeight: '800', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={18} /> Brilliant! Exactly right (+10 XP) 🎉
                  </span>
                )}
                {miniTryChecked === false && (
                  <span style={{ color: '#dc2626', fontWeight: '800', fontSize: '0.9rem' }}>
                    ❌ Not quite. Check the hint and try again!
                  </span>
                )}
              </div>
            </CardRounded>
          )}

          {/* STAGE 12: SUMMARY & QUICK RECAP */}
          <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '14px', backgroundColor: 'var(--bg-card-solid)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bookmark size={22} color="#4f46e5" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
                Step 12 — Summary & Key Takeaways
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {(lesson.recap || []).map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={18} color="#4f46e5" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontWeight: '600' }}>{pt}</span>
                </div>
              ))}
            </div>
          </CardRounded>

          {/* NEXT STEPS CALL TO ACTION */}
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '10px' }}>
            <Button3D
              variant="primary"
              size="lg"
              onClick={() => { setActiveTab('practice'); soundFx.playClick(); }}
              icon={FileText}
            >
              Solve Practice Problems ({topicQuestions.length})
            </Button3D>

            <Button3D
              variant="secondary"
              size="lg"
              onClick={() => { setActiveTab('quiz'); soundFx.playClick(); }}
              icon={HelpCircle}
            >
              Take Mastery Assessment Quiz ({topicQuestions.length})
            </Button3D>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 2: STANDALONE FULL-SCREEN SANDBOX LAB */}
      {/* ========================================================================= */}
      {activeTab === 'lab' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <CardRounded style={{ backgroundColor: 'var(--bg-card-solid)', border: '2px solid var(--primary)', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase' }}>
                  Full Sandbox Manipulative Tool
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', margin: '2px 0' }}>
                  {lesson.title} Interactive Sandbox
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ecfdf5', color: '#047857', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: '800', fontSize: '0.85rem' }}>
                <CheckCircle2 size={16} /> Direct Physical Manipulation Active
              </div>
            </div>

            {/* Mount Live Working Tool Component */}
            <SelectedLabComponent config={{ topicId: subtopicId, title: lesson.title }} />
          </CardRounded>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 3: PRACTICE PROBLEMS (10 Real ICSE Questions) */}
      {/* ========================================================================= */}
      {activeTab === 'practice' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
                Class-Specific Practice Problems ({topicQuestions.length})
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                Solve step-by-step with real-time answer checking, hints, and complete solution guides.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {topicQuestions.map((q, idx) => {
              const isRevealed = revealedSolutions[q.id];
              const isChecked = checkedPractice[q.id];

              return (
                <CardRounded key={q.id || idx} style={{ display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: 'var(--bg-card-solid)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ background: '#4f46e5', color: '#ffffff', borderRadius: '50%', width: '28px', height: '28px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '0.85rem' }}>
                        {idx + 1}
                      </span>
                      <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: q.difficulty === 'hard' ? '#ef4444' : q.difficulty === 'medium' ? '#f59e0b' : '#10b981' }}>
                        {q.difficulty || 'standard'}
                      </span>
                    </div>

                    <Button3D
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSolution(q.id)}
                      icon={isRevealed ? EyeOff : Eye}
                    >
                      {isRevealed ? 'Hide Solution' : 'Reveal Solution'}
                    </Button3D>
                  </div>

                  <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1.4' }}>
                    {q.q}
                  </div>

                  {q.h && (
                    <div style={{ fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic' }}>
                      💡 Hint: {q.h}
                    </div>
                  )}

                  {/* Interactive Practice Answer Input */}
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '6px', flexWrap: 'wrap' }}>
                    <input
                      type="text"
                      placeholder="Enter your answer..."
                      value={practiceAnswers[q.id] || ''}
                      onChange={(e) => setPracticeAnswers({ ...practiceAnswers, [q.id]: e.target.value })}
                      onKeyDown={(e) => e.key === 'Enter' && handleCheckPractice(q.id, q.a, q.acc)}
                      style={{
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.95rem',
                        fontWeight: '700',
                        width: '220px'
                      }}
                    />

                    <Button3D variant="primary" size="sm" onClick={() => handleCheckPractice(q.id, q.a, q.acc)}>
                      Check Answer
                    </Button3D>

                    {isChecked === true && (
                      <span style={{ color: '#16a34a', fontWeight: '800', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircle2 size={18} /> Correct! (+10 XP)
                      </span>
                    )}
                    {isChecked === false && (
                      <span style={{ color: '#dc2626', fontWeight: '800', fontSize: '0.9rem' }}>
                        ❌ Try again!
                      </span>
                    )}
                  </div>

                  {/* Step-by-Step Revealed Solution */}
                  {isRevealed && (
                    <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '10px', padding: '14px', marginTop: '8px' }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#15803d', textTransform: 'uppercase' }}>
                        Step-by-Step Explanation:
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#166534', fontWeight: '700', marginTop: '4px', lineHeight: '1.4' }}>
                        {q.exp || `Applying foundational rules yields the canonical answer: ${q.a}`}
                      </div>
                      <div style={{ marginTop: '8px', fontWeight: '900', color: '#15803d', fontSize: '0.95rem' }}>
                        Exact Correct Answer: {q.a}
                      </div>
                    </div>
                  )}
                </CardRounded>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 4: MULTI-FORMAT QUIZ */}
      {/* ========================================================================= */}
      {activeTab === 'quiz' && (
        <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: 'var(--bg-card-solid)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase' }}>
                Question {quizIndex + 1} of {topicQuestions.length}
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
                {lesson.title} Mastery Assessment
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ fontWeight: '800', color: '#16a34a', fontSize: '0.95rem' }}>Score: {quizScore} XP</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${((quizIndex + 1) / topicQuestions.length) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #4f46e5, #06b6d4)',
                transition: 'width 0.3s ease'
              }}
            />
          </div>

          {/* Question Card */}
          <div style={{ background: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
            <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', lineHeight: '1.4' }}>
              {activeQuizQ.q}
            </div>

            {/* Answer Input: Options or Written */}
            {activeQuizQ.options && activeQuizQ.options.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginTop: '16px' }}>
                {activeQuizQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    disabled={quizSubmitted}
                    onClick={() => setQuizUserAns(opt)}
                    style={{
                      padding: '14px 16px',
                      borderRadius: '10px',
                      border: quizUserAns === opt ? '2px solid #4f46e5' : '1.5px solid #cbd5e1',
                      background: quizUserAns === opt ? '#eef2ff' : '#ffffff',
                      color: quizUserAns === opt ? '#4f46e5' : '#334155',
                      fontWeight: '800',
                      fontSize: '0.95rem',
                      textAlign: 'left',
                      cursor: quizSubmitted ? 'default' : 'pointer'
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div style={{ marginTop: '16px' }}>
                <input
                  type="text"
                  placeholder="Type your written answer..."
                  value={quizUserAns}
                  disabled={quizSubmitted}
                  onChange={(e) => setQuizUserAns(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleQuizSubmit()}
                  style={{
                    width: '100%',
                    maxWidth: '320px',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '2px solid #cbd5e1',
                    fontSize: '1rem',
                    fontWeight: '700'
                  }}
                />
              </div>
            )}

            {/* Submit & Next Buttons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              {!quizSubmitted ? (
                <Button3D variant="primary" size="md" onClick={handleQuizSubmit}>
                  Submit Answer
                </Button3D>
              ) : (
                <Button3D
                  variant="secondary"
                  size="md"
                  onClick={handleNextQuiz}
                  icon={ArrowRight}
                  disabled={quizIndex >= topicQuestions.length - 1}
                >
                  {quizIndex < topicQuestions.length - 1 ? 'Next Question' : 'Quiz Completed! 🎉'}
                </Button3D>
              )}
            </div>

            {/* Feedback After Submit */}
            {quizSubmitted && (
              <div style={{ marginTop: '16px', padding: '14px', borderRadius: '10px', background: (quizUserAns.trim().toLowerCase() === activeQuizQ.a.trim().toLowerCase() || (activeQuizQ.acc || []).includes(quizUserAns.trim().toLowerCase())) ? '#dcfce7' : '#fee2e2' }}>
                <div style={{ fontWeight: '900', fontSize: '1rem', color: (quizUserAns.trim().toLowerCase() === activeQuizQ.a.trim().toLowerCase() || (activeQuizQ.acc || []).includes(quizUserAns.trim().toLowerCase())) ? '#15803d' : '#b91c1c' }}>
                  {(quizUserAns.trim().toLowerCase() === activeQuizQ.a.trim().toLowerCase() || (activeQuizQ.acc || []).includes(quizUserAns.trim().toLowerCase())) ? '✓ Correct! Well done!' : `✗ Incorrect. Correct Answer: ${activeQuizQ.a}`}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#334155', marginTop: '4px', fontWeight: '600' }}>
                  {activeQuizQ.exp}
                </div>
              </div>
            )}
          </div>
        </CardRounded>
      )}

    </div>
  );
};


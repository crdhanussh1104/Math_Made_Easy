import React, { useState, useMemo } from 'react';
import { classInteractiveNotes } from '../../data/classInteractiveNotes';
import { getQuestionsForTopic } from '../../data/questions';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { triggerConfetti } from '../../utils/confetti';
import { useGame } from '../../context/GameContext';
import {
  BookOpen, Sparkles, HelpCircle, CheckCircle2, Award, FileText,
  ChevronRight, PlayCircle, Lightbulb, AlertTriangle, Cpu, CheckSquare,
  Globe, ShieldCheck, RefreshCw, ListFilter, ArrowRight, Eye, EyeOff
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

export const InteractiveTopicLabEngine = ({ subtopicId, visualizerComponent, onSelectTopic }) => {
  const { addXP, addGems } = useGame();

  // Active Navigation Tab: concept, lab, practice, quiz
  const [activeTab, setActiveTab] = useState('tutorial');

  // 1. Fetch genuine class-specific interactive note
  const noteData = useMemo(() => {
    return classInteractiveNotes[subtopicId] || {
      id: subtopicId,
      title: subtopicId.replace(/_/g, ' ').toUpperCase(),
      category: 'Mathematics',
      color: '#4f46e5',
      learningObjectives: [
        `Understand core principles and definitions of ${subtopicId.replace(/_/g, ' ')}.`,
        `Apply standard rules to solve step-by-step ICSE exam problems.`,
        `Develop visual intuition and spatial reasoning.`
      ],
      keyConcepts: [
        { topic: 'Core Concept', text: `Key mathematical principles and rules governing ${subtopicId.replace(/_/g, ' ')}.` }
      ],
      visualConcept: {
        title: `${subtopicId.replace(/_/g, ' ')} Visual Model`,
        label: `Interactive representation and mathematical rules.`
      },
      workedExample: {
        problem: `Step-by-step example problem for ${subtopicId.replace(/_/g, ' ')}.`,
        steps: [
          'Identify given parameters and constraints.',
          'Apply the governing formula or rule.',
          'Calculate and state the final result.'
        ],
        answer: 'Verified Result'
      },
      tryIt: {
        question: `Try solving a fundamental problem on ${subtopicId.replace(/_/g, ' ')}.`,
        answer: 'Correct',
        hint: 'Use the step-by-step procedure demonstrated above.'
      },
      remember: 'Always check units and verify each step carefully.'
    };
  }, [subtopicId]);

  // 2. Fetch the 10 real class-specific, topic-specific ICSE questions
  const topicQuestions = useMemo(() => {
    const rawQs = getQuestionsForTopic(subtopicId);
    if (rawQs && rawQs.length > 0) return rawQs;

    return Array.from({ length: 10 }, (_, i) => ({
      id: `${subtopicId}_q${i + 1}`,
      q: `Problem ${i + 1}: Apply the principles of ${noteData.title} to determine the required value.`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      a: 'Option A',
      acc: ['Option A'],
      difficulty: i < 3 ? 'easy' : i < 7 ? 'medium' : 'hard',
      h: 'Refer to the governing formula and worked example above.',
      exp: `Applying the standard rule for ${noteData.title} yields the correct result.`
    }));
  }, [subtopicId, noteData]);

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
        padding: '28px 32px',
        borderRadius: '16px',
        background: `linear-gradient(135deg, ${noteData.color || '#4f46e5'} 0%, #1cb0f6 100%)`,
        color: '#ffffff',
        boxShadow: '0 8px 24px rgba(79, 70, 229, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', opacity: 0.95, fontWeight: '800' }}>
          <span>ICSE Curriculum</span>
          <ChevronRight size={14} />
          <span>{noteData.category}</span>
          <ChevronRight size={14} />
          <span style={{ color: '#00f0ff' }}>{noteData.title}</span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '2.2rem', fontWeight: '800', margin: '4px 0' }}>
          {noteData.title}
        </h2>
        <p style={{ fontSize: '1rem', opacity: 0.95, maxWidth: '800px', lineHeight: '1.5' }}>
          {noteData.learningObjectives?.[0] || 'Interactive mathematics learning experience with real-time manipulative simulations.'}
        </p>
      </div>

      {/* 2. Main Experience Mode Switcher */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
        {[
          { id: 'tutorial', label: '📖 Concept & Intuition', icon: BookOpen },
          { id: 'lab', label: '🧪 Interactive Math Simulation Lab', icon: Cpu },
          { id: 'practice', label: `✏️ Practice Problems (${topicQuestions.length})`, icon: FileText },
          { id: 'quiz', label: `❓ Multi-Format Quiz (${topicQuestions.length})`, icon: HelpCircle }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); soundFx.playClick(); }}
              style={{
                padding: '12px 20px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: isActive ? '#4f46e5' : 'var(--bg-card-solid)',
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                fontWeight: '800',
                fontFamily: 'var(--font-rounded)',
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? '0 4px 12px rgba(79, 70, 229, 0.35)' : 'var(--shadow-sm)',
                transition: 'all 0.15s ease'
              }}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* VIEW 1: CONCEPT & INTUITION TUTORIAL */}
      {activeTab === 'tutorial' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Learning Objectives & Key Concepts */}
          <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: 'var(--bg-card-solid)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={20} color={noteData.color || '#4f46e5'} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
                Learning Objectives & Core Insights
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {(noteData.learningObjectives || []).map((obj, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={18} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{obj}</span>
                </div>
              ))}
            </div>

            {/* Key Concepts Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginTop: '10px' }}>
              {(noteData.keyConcepts || []).map((kc, i) => (
                <div key={i} style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase' }}>
                    {kc.topic}
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#1e293b', marginTop: '4px' }}>
                    {kc.text}
                  </div>
                </div>
              ))}
            </div>
          </CardRounded>

          {/* Step-by-Step Worked Example */}
          {noteData.workedExample && (
            <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: 'var(--bg-card-solid)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lightbulb size={20} color="#f59e0b" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
                  Step-by-Step Worked Example
                </h3>
              </div>

              <div style={{ background: '#fffbeb', border: '1.5px solid #fde68a', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#b45309', textTransform: 'uppercase' }}>
                  Problem:
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#92400e', marginTop: '4px' }}>
                  {noteData.workedExample.problem}
                </div>

                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {(noteData.workedExample.steps || []).map((step, idx) => (
                    <div key={idx} style={{ fontSize: '0.92rem', color: '#78350f', fontWeight: '600' }}>
                      {step}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px dashed #fcd34d', fontSize: '1rem', fontWeight: '900', color: '#b45309' }}>
                  Canonical Answer: {noteData.workedExample.answer}
                </div>
              </div>
            </CardRounded>
          )}

          {/* Golden Rule / Memory Trick */}
          {noteData.remember && (
            <div style={{ background: '#f0fdf4', border: '2px solid #86efac', borderRadius: '14px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck size={24} color="#16a34a" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#15803d', textTransform: 'uppercase' }}>
                  Golden Rule to Remember:
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#166534', marginTop: '2px' }}>
                  {noteData.remember}
                </div>
              </div>
            </div>
          )}

        </div>
      )}

      {/* VIEW 2: INTERACTIVE MATH SIMULATION LAB */}
      {activeTab === 'lab' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <CardRounded style={{ backgroundColor: 'var(--bg-card-solid)', border: '2px solid var(--primary)', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase' }}>
                  Live Mathematical Manipulative
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', margin: '2px 0' }}>
                  {noteData.title} Interactive Simulation
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ecfdf5', color: '#047857', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: '800', fontSize: '0.85rem' }}>
                <CheckCircle2 size={16} /> Direct Physical Manipulation Active
              </div>
            </div>

            {/* Mount Live Working Tool Component */}
            <SelectedLabComponent config={{ topicId: subtopicId, title: noteData.title }} />
          </CardRounded>
        </div>
      )}

      {/* VIEW 3: PRACTICE PROBLEMS (10 Real ICSE Questions) */}
      {activeTab === 'practice' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
              Class-Specific Practice Problems ({topicQuestions.length})
            </h3>
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '700' }}>
              Solve and test your answers with instant step-by-step feedback.
            </span>
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
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '6px' }}>
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
                        width: '200px'
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

      {/* VIEW 4: MULTI-FORMAT QUIZ */}
      {activeTab === 'quiz' && (
        <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: 'var(--bg-card-solid)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase' }}>
                Question {quizIndex + 1} of {topicQuestions.length}
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
                {noteData.title} Mastery Assessment
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

import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { labQuestionsBank } from '../../data/labQuestionsBank';
import { validateAnswer } from '../../utils/answerValidator';
import { soundFx } from '../../utils/audioSynth';
import { triggerConfetti } from '../../utils/confetti';
import {
  Compass, Lightbulb, CheckCircle2, AlertCircle, ArrowRight,
  HelpCircle, Sparkles, Award, RotateCcw, ChevronRight
} from 'lucide-react';

export const GuidedDiscoveryPanel = ({ activity, onCompleteLab, isCompleted }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hintLevel, setHintLevel] = useState(0); // 0 = none, 1 = hint1, 2 = hint2, 3 = hint3

  const qData = labQuestionsBank[activity.id] || {
    question: "What key mathematical relationship did you observe in this experiment?",
    targetAnswer: "relationship",
    acceptedAnswers: ["relationship", "formula", "pattern", "verified"],
    hints: [
      "Review the values displayed in the mathematical formula readout.",
      "Check how changing the inputs affects the outcome.",
      "The formula precisely reflects your experimental findings."
    ],
    correctFeedback: "Outstanding discovery! You observed the exact mathematical principle.",
    retryFeedback: "Observe the interactive values on the canvas and try again."
  };

  const steps = activity.guidedSteps || [
    { step: 1, type: 'explore', instruction: 'Interact with the controls and observe the visual changes.' },
    { step: 2, type: 'observe', instruction: 'Make a prediction before changing the main parameter.' },
    { step: 3, type: 'challenge', instruction: 'Answer the discovery question below to master this concept.' }
  ];

  const handleCheckAnswer = (e) => {
    if (e) e.preventDefault();
    if (userAnswer.trim() === '') return;

    const correct = validateAnswer(
      userAnswer,
      qData.targetAnswer,
      qData.acceptedAnswers || []
    );

    setSubmitted(true);
    setIsCorrect(correct);

    if (correct) {
      soundFx.playCorrect();
      triggerConfetti('default');
    } else {
      soundFx.playIncorrect();
    }
  };

  const handleShowNextHint = () => {
    soundFx.playClick();
    setHintLevel(prev => Math.min(prev + 1, (qData.hints || []).length));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* 3-Step Guided Discovery Progression */}
      <CardRounded style={{ padding: '20px', background: '#f8fafc', border: '1.5px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Compass size={18} color="#4f46e5" />
          <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#1e293b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Guided Discovery Steps
          </h4>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {steps.map((st, idx) => {
            const isActive = idx === activeStepIndex;
            const isPassed = idx < activeStepIndex;

            return (
              <div
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  background: isActive ? '#ede9fe' : isPassed ? '#f0fdf4' : '#ffffff',
                  border: isActive ? '1.5px solid #818cf8' : isPassed ? '1px solid #bbf7d0' : '1px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: isPassed ? '#16a34a' : isActive ? '#4f46e5' : '#cbd5e1',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  flexShrink: 0
                }}>
                  {isPassed ? '✓' : st.step}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '800', color: isActive ? '#4338ca' : '#64748b', textTransform: 'uppercase' }}>
                    Step {st.step}: {st.type}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#1e293b', fontWeight: '600', marginTop: '2px' }}>
                    {st.instruction}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardRounded>

      {/* Discovery Question Card */}
      <CardRounded style={{ padding: '20px', background: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#0284c7', background: '#e0f2fe', padding: '3px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
            Discovery Question
          </span>

          {(qData.hints || []).length > 0 && (
            <button
              onClick={handleShowNextHint}
              disabled={hintLevel >= (qData.hints || []).length}
              style={{
                background: 'none',
                border: 'none',
                color: hintLevel >= (qData.hints || []).length ? '#94a3b8' : '#f59e0b',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: hintLevel >= (qData.hints || []).length ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Lightbulb size={16} />
              <span>Hint {hintLevel > 0 ? `(${hintLevel}/${qData.hints.length})` : ''}</span>
            </button>
          )}
        </div>

        {/* 3-Tier Progressive Hint Display */}
        {hintLevel > 0 && (
          <div style={{ background: '#fefce8', border: '1px dashed #facc15', borderRadius: '10px', padding: '10px 14px', marginBottom: '14px' }}>
            {qData.hints.slice(0, hintLevel).map((h, hIdx) => (
              <div key={hIdx} style={{ fontSize: '0.85rem', color: '#854d0e', marginBottom: hIdx < hintLevel - 1 ? '6px' : '0' }}>
                💡 <strong>Hint {hIdx + 1}:</strong> {h}
              </div>
            ))}
          </div>
        )}

        {/* Question Text */}
        <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1e293b', lineHeight: '1.45', marginBottom: '14px' }}>
          {qData.question}
        </p>

        {/* Answer Input */}
        <form onSubmit={handleCheckAnswer}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter your answer..."
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: '8px',
                border: submitted
                  ? isCorrect
                    ? '2px solid #22c55e'
                    : '2px solid #f59e0b'
                  : '1.5px solid #cbd5e1',
                background: submitted ? (isCorrect ? '#f0fdf4' : '#fffbeb') : '#ffffff',
                fontSize: '0.95rem',
                fontWeight: '600',
                outline: 'none'
              }}
            />
            <Button3D type="submit" variant="primary" size="sm" disabled={userAnswer.trim() === ''}>
              Submit
            </Button3D>
          </div>
        </form>

        {/* Constructive Feedback Banner */}
        {submitted && (
          <div style={{
            padding: '12px 14px',
            borderRadius: '10px',
            background: isCorrect ? '#f0fdf4' : '#fffbeb',
            border: `1.5px solid ${isCorrect ? '#86efac' : '#fde68a'}`,
            marginTop: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              {isCorrect ? <CheckCircle2 size={18} color="#16a34a" /> : <AlertCircle size={18} color="#d97706" />}
              <span style={{ fontSize: '0.88rem', fontWeight: '800', color: isCorrect ? '#15803d' : '#b45309' }}>
                {isCorrect ? 'Correct Discovery!' : 'Almost there!'}
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: isCorrect ? '#166534' : '#92400e', margin: 0 }}>
              {isCorrect ? qData.correctFeedback : qData.retryFeedback}
            </p>
          </div>
        )}

        {/* Challenge Question Section */}
        {isCorrect && qData.challengeQuestion && (
          <div style={{ marginTop: '14px', padding: '12px', background: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '10px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#6d28d9', marginBottom: '4px', textTransform: 'uppercase' }}>
              ⭐ Next Challenge
            </div>
            <p style={{ fontSize: '0.88rem', color: '#4c1d95', margin: 0 }}>
              {qData.challengeQuestion}
            </p>
          </div>
        )}

        {/* Complete Lab Action */}
        <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid #f1f5f9' }}>
          <Button3D
            onClick={onCompleteLab}
            variant={isCompleted ? 'secondary' : 'warning'}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <Sparkles size={18} />
            <span>{isCompleted ? 'Lab Completed (+50 XP Earned)' : 'Complete Lab & Claim XP (+50)'}</span>
          </Button3D>
        </div>
      </CardRounded>
    </div>
  );
};

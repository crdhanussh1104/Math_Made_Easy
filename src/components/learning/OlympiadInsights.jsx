import React, { useState } from 'react';
import { olympiadInsightsData } from '../../data/olympiadData';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { Trophy, Award, Sparkles, ChevronDown, ChevronUp, Eye, CheckCircle2, Lightbulb, Target } from 'lucide-react';

export const OlympiadInsights = ({ chapterId = 'chap_1' }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showSolution, setShowSolution] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const data = olympiadInsightsData[chapterId] || olympiadInsightsData['chap_1'];

  const toggleExpand = () => {
    setIsOpen(prev => !prev);
    soundFx.playClick();
  };

  const handleCheckOption = (idx) => {
    setSelectedOption(idx);
    setIsAnswerChecked(true);
    if (idx === data.sampleQuestion.correctIndex) {
      soundFx.playCorrect();
    } else {
      soundFx.playIncorrect();
    }
  };

  const difficultyColor =
    data.difficulty === 'Beginner' ? '#58cc02' :
    data.difficulty === 'Intermediate' ? '#ff9600' : '#ff4b4b';

  const difficultyBg =
    data.difficulty === 'Beginner' ? '#e5f9d8' :
    data.difficulty === 'Intermediate' ? '#fff2df' : '#ffdfe0';

  return (
    <CardRounded style={{ border: '2px solid var(--purple)', overflow: 'hidden', padding: 0 }}>
      {/* Expandable Header */}
      <div
        onClick={toggleExpand}
        style={{
          padding: '20px 24px',
          background: 'linear-gradient(135deg, #7c3aed 0%, #ce82ff 100%)',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Trophy size={26} color="#ffc800" />
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.9 }}>
              National & International Contests
            </div>
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800' }}>
              Olympiad Insights 🏆
            </h3>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BadgeChip label={`Level: ${data.difficulty}`} color={difficultyColor} bg={difficultyBg} size="sm" />
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div className="animate-pop" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: 'var(--bg-card-solid)' }}>
          
          {/* 1. Why Concept is Important */}
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: 'var(--purple)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <Target size={18} /> Why This Concept Matters in Contests:
            </div>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
              {data.importance}
            </p>
          </div>

          {/* 2. Competitions Badge Pills */}
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: 'var(--text-muted)', marginBottom: '8px' }}>
              This concept builds foundational skills useful for:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {data.competitions.map(comp => (
                <BadgeChip key={comp} label={comp} color="var(--purple)" bg="var(--purple-light)" size="sm" />
              ))}
            </div>
          </div>

          {/* 3. Thinking Strategy Card */}
          <div style={{ padding: '16px', backgroundColor: 'var(--warning-light)', borderLeft: '4px solid var(--orange)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--text-main)' }}>
            <div style={{ fontWeight: '800', color: 'var(--orange)', marginBottom: '4px', fontFamily: 'var(--font-rounded)' }}>
              {data.thinkingStrategy.split(':')[0]}
            </div>
            <div>
              {data.thinkingStrategy.split(':')[1]}
            </div>
          </div>

          {/* 4. Sample Olympiad Question */}
          <div style={{ padding: '18px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Sample Olympiad-Style Challenge Question:
            </div>

            <p style={{ fontWeight: '700', fontSize: '0.98rem', lineHeight: '1.4' }}>
              {data.sampleQuestion.problem}
            </p>

            {/* Options */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
              {data.sampleQuestion.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === data.sampleQuestion.correctIndex;
                let bg = 'var(--bg-card-solid)';
                let border = '1px solid var(--border-light)';
                if (isAnswerChecked && isCorrect) { bg = 'var(--primary-light)'; border = '2px solid var(--primary)'; }
                if (isAnswerChecked && isSelected && !isCorrect) { bg = 'var(--accent-light)'; border = '2px solid var(--accent)'; }

                return (
                  <button
                    key={idx}
                    onClick={() => handleCheckOption(idx)}
                    style={{
                      padding: '10px 14px', borderRadius: 'var(--radius-md)', border: border,
                      backgroundColor: bg, fontWeight: '700', fontFamily: 'var(--font-rounded)',
                      cursor: 'pointer', textAlign: 'center'
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Reveal Explanation */}
            {isAnswerChecked && (
              <div className="animate-pop" style={{ padding: '12px 16px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem', fontWeight: '700' }}>
                💡 Explanation: {data.sampleQuestion.explanation}
              </div>
            )}
          </div>

          {/* 5. Recommended Practice */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '10px', borderTop: '1px dashed var(--border-light)' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--secondary)' }}>
                🚀 Recommended Next Step:
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                {data.recommendedPractice}
              </div>
            </div>

            <Button3D variant="secondary" size="sm" onClick={() => soundFx.playCorrect()} icon={Sparkles}>
              Practice Olympiad Quiz
            </Button3D>
          </div>

        </div>
      )}
    </CardRounded>
  );
};

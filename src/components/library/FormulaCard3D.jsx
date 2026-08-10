import React, { useState } from 'react';
import { BadgeChip } from '../ui/BadgeChip';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { speechFx } from '../../utils/speech';
import { RotateCw, Volume2, Lightbulb, Sparkles, CheckCircle2, Eye } from 'lucide-react';

export const FormulaCard3D = ({ formulaData }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(prev => !prev);
    soundFx.playClick();
  };

  const handleSpeak = (e) => {
    e.stopPropagation();
    const textToSpeak = `${formulaData.title}. Formula: ${formulaData.formula}. Memory Trick: ${formulaData.memoryTrick}`;
    speechFx.speak(textToSpeak);
  };

  const renderVisualIllustration = () => {
    if (formulaData.id === 'form_place_value') {
      return (
        <svg width="100%" height="70" viewBox="0 0 240 60">
          <rect x="5" y="10" width="70" height="40" rx="8" fill="#58cc02" />
          <text x="40" y="34" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800">Lakhs</text>
          <rect x="85" y="10" width="70" height="40" rx="8" fill="#1cb0f6" />
          <text x="120" y="34" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800">Thousands</text>
          <rect x="165" y="10" width="70" height="40" rx="8" fill="#ffc800" />
          <text x="200" y="34" textAnchor="middle" fill="#2b3a4a" fontSize="12" fontWeight="800">Ones</text>
        </svg>
      );
    } else if (formulaData.id === 'form_fraction') {
      return (
        <svg width="100%" height="70" viewBox="0 0 200 60">
          <circle cx="100" cy="30" r="26" fill="#fef08a" stroke="#d97706" strokeWidth="3" />
          <path d="M 100 30 L 100 4 A 26 26 0 0 1 126 30 Z" fill="#ef4444" />
          <text x="100" y="35" textAnchor="middle" fill="#2b3a4a" fontSize="14" fontWeight="800">3/8</text>
        </svg>
      );
    } else if (formulaData.id === 'form_perimeter') {
      return (
        <svg width="100%" height="70" viewBox="0 0 200 60">
          <rect x="60" y="12" width="80" height="36" rx="4" fill="none" stroke="#1cb0f6" strokeWidth="4" strokeDasharray="6 4" />
          <text x="100" y="34" textAnchor="middle" fill="#1cb0f6" fontSize="12" fontWeight="800">P = 2(L + W)</text>
        </svg>
      );
    } else if (formulaData.id === 'form_units') {
      return (
        <svg width="100%" height="70" viewBox="0 0 200 60">
          <line x1="30" y1="30" x2="170" y2="30" stroke="#ff4b4b" strokeWidth="4" />
          <circle cx="30" cy="30" r="10" fill="#ff4b4b" />
          <text x="30" y="52" textAnchor="middle" fill="#ff4b4b" fontSize="10" fontWeight="800">1 km</text>
          <circle cx="170" cy="30" r="10" fill="#ff4b4b" />
          <text x="170" y="52" textAnchor="middle" fill="#ff4b4b" fontSize="10" fontWeight="800">1000 m</text>
        </svg>
      );
    } else {
      return (
        <svg width="100%" height="70" viewBox="0 0 200 60">
          <path d="M 70 45 L 130 45 L 130 15" fill="none" stroke="#ff9600" strokeWidth="4" />
          <path d="M 115 45 A 15 15 0 0 0 130 30" fill="none" stroke="#ff9600" strokeWidth="3" />
          <text x="100" y="35" textAnchor="middle" fill="#ff9600" fontSize="12" fontWeight="800">90° Right</text>
        </svg>
      );
    }
  };

  return (
    <div style={{ perspective: '1000px', width: '100%', height: '380px' }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* FRONT SIDE */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: 'var(--bg-card-solid)',
            borderRadius: 'var(--radius-lg)',
            border: `2px solid ${formulaData.color || 'var(--border-card)'}`,
            padding: '24px',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <BadgeChip label={formulaData.category} size="sm" color={formulaData.color} bg={formulaData.bgLight} />
              <button onClick={handleSpeak} style={{ background: 'none', border: 'none', color: formulaData.color, cursor: 'pointer' }} title="Read Formula Aloud">
                <Volume2 size={20} />
              </button>
            </div>

            <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '8px' }}>
              {formulaData.title}
            </h4>

            {/* Visual SVG Illustration */}
            <div style={{ backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', padding: '6px', marginBottom: '12px' }}>
              {renderVisualIllustration()}
            </div>

            {/* Formula Glowing Box */}
            <div style={{
              padding: '12px',
              backgroundColor: formulaData.bgLight,
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'monospace',
              fontWeight: '800',
              color: formulaData.color,
              textAlign: 'center',
              fontSize: '0.95rem',
              borderLeft: `4px solid ${formulaData.color}`,
              boxShadow: `0 0 10px ${formulaData.color}30`
            }}>
              {formulaData.formula}
            </div>

            {/* Memory Trick */}
            <div style={{ marginTop: '10px', fontSize: '0.82rem', fontWeight: '700', color: 'var(--orange)' }}>
              {formulaData.memoryTrick}
            </div>
          </div>

          <Button3D variant="outline" size="sm" onClick={handleFlip} icon={RotateCw} style={{ alignSelf: 'center' }}>
            Flip Card 🔄
          </Button3D>
        </div>

        {/* BACK SIDE */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: 'var(--bg-card-solid)',
            borderRadius: 'var(--radius-lg)',
            border: `2px solid ${formulaData.color || 'var(--border-card)'}`,
            padding: '24px',
            boxShadow: 'var(--shadow-md)',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <BadgeChip label="Real-Life & Practice" size="sm" color="var(--secondary)" bg="var(--secondary-light)" />
              <button onClick={handleSpeak} style={{ background: 'none', border: 'none', color: formulaData.color, cursor: 'pointer' }}>
                <Volume2 size={20} />
              </button>
            </div>

            <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '8px' }}>
              🌟 Real-life Application:
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4', marginBottom: '14px' }}>
              {formulaData.realLifeApp}
            </p>

            <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '6px' }}>
              ✏️ Practice Question:
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '8px' }}>
              {formulaData.practiceQuestion}
            </p>

            {showAnswer ? (
              <div className="animate-pop" style={{ padding: '8px 12px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: '800' }}>
                Solution: {formulaData.practiceAnswer}
              </div>
            ) : (
              <Button3D variant="outline" size="sm" onClick={() => setShowAnswer(true)} icon={Eye}>
                Reveal Solution
              </Button3D>
            )}
          </div>

          <Button3D variant="secondary" size="sm" onClick={handleFlip} icon={RotateCw} style={{ alignSelf: 'center' }}>
            Flip Back 🔄
          </Button3D>
        </div>
      </div>
    </div>
  );
};

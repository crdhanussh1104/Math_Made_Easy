import React, { useState } from 'react';
import { BadgeChip } from '../ui/BadgeChip';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { speechFx } from '../../utils/speech';
import { RotateCw, Volume2, Eye } from 'lucide-react';

export const FormulaCard3D = ({ formulaData }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  if (!formulaData) return null;

  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(prev => !prev);
    soundFx.playClick();
  };

  const handleSpeak = (e) => {
    e.stopPropagation();
    const textToSpeak = `${formulaData.title}. ${formulaData.isRule ? 'Rule' : 'Formula'}: ${formulaData.formula}. ${formulaData.explanation || ''}`;
    speechFx.speak(textToSpeak);
  };

  const cardColor = formulaData.color || '#4f46e5';
  const cardBgLight = formulaData.bgLight || '#eef2ff';

  return (
    <div style={{ perspective: '1000px', width: '100%', minHeight: '400px' }}>
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
            position: isFlipped ? 'absolute' : 'relative',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: 'var(--bg-card-solid)',
            borderRadius: 'var(--radius-lg)',
            border: `2px solid ${cardColor}40`,
            padding: '24px',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '6px' }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '6px', background: cardBgLight, color: cardColor }}>
                  {formulaData.classId ? `Class ${formulaData.classId} ICSE` : 'ICSE'}
                </span>
                <BadgeChip label={formulaData.category || 'Core Math'} size="sm" color={cardColor} bg={cardBgLight} />
              </div>
              <button onClick={handleSpeak} style={{ background: 'none', border: 'none', color: cardColor, cursor: 'pointer' }} title="Read Formula Aloud">
                <Volume2 size={20} />
              </button>
            </div>

            <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '12px' }}>
              {formulaData.title}
            </h4>

            {/* Formula / Rule Glowing Box */}
            <div style={{
              padding: '14px 16px',
              backgroundColor: cardBgLight,
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'monospace',
              fontWeight: '800',
              color: cardColor,
              textAlign: 'center',
              fontSize: '1rem',
              borderLeft: `4px solid ${cardColor}`,
              boxShadow: `0 0 12px ${cardColor}25`,
              marginBottom: '14px',
              lineHeight: '1.4'
            }}>
              <div style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: cardColor, opacity: 0.85, marginBottom: '4px' }}>
                {formulaData.isRule ? 'Key Rule / Property' : 'Mathematical Formula'}
              </div>
              {formulaData.formula}
            </div>

            {/* Short Explanation */}
            {formulaData.explanation && (
              <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: '1.5', marginBottom: '10px' }}>
                <strong>What it means:</strong> {formulaData.explanation}
              </div>
            )}

            {/* Memory Trick / Tip */}
            {formulaData.memoryTrick && (
              <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--orange)', background: '#fffbeb', padding: '8px 12px', borderRadius: '8px' }}>
                💡 {formulaData.memoryTrick}
              </div>
            )}
          </div>

          <Button3D variant="outline" size="sm" onClick={handleFlip} icon={RotateCw} style={{ alignSelf: 'center', marginTop: '8px' }}>
            View Worked Example & Practice 🔄
          </Button3D>
        </div>

        {/* BACK SIDE */}
        <div
          style={{
            position: isFlipped ? 'relative' : 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: 'var(--bg-card-solid)',
            borderRadius: 'var(--radius-lg)',
            border: `2px solid ${cardColor}40`,
            padding: '24px',
            boxShadow: 'var(--shadow-md)',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <BadgeChip label="Worked Example & Real-Life" size="sm" color="var(--secondary)" bg="var(--secondary-light)" />
              <button onClick={handleSpeak} style={{ background: 'none', border: 'none', color: cardColor, cursor: 'pointer' }}>
                <Volume2 size={20} />
              </button>
            </div>

            {/* Real-life Application */}
            {formulaData.realLifeApplication && (
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: cardColor, textTransform: 'uppercase', marginBottom: '2px' }}>
                  🌟 Real-Life Application:
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                  {formulaData.realLifeApplication}
                </p>
              </div>
            )}

            {/* Example Question & Steps */}
            {formulaData.example && (
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: cardColor, textTransform: 'uppercase', marginBottom: '4px' }}>
                  ✏️ Step-by-Step Example:
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1e293b', background: '#f8fafc', padding: '8px 12px', borderRadius: '8px', marginBottom: '8px' }}>
                  {formulaData.example.question}
                </div>
                {formulaData.example.steps && (
                  <ol style={{ paddingLeft: '18px', fontSize: '0.82rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '10px' }}>
                    {formulaData.example.steps.map((st, i) => (
                      <li key={i}>{st}</li>
                    ))}
                  </ol>
                )}
                {showAnswer ? (
                  <div className="animate-pop" style={{ padding: '8px 12px', backgroundColor: '#dcfce7', color: '#15803d', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: '800' }}>
                    Canonical Result: {formulaData.example.answer}
                  </div>
                ) : (
                  <Button3D variant="outline" size="sm" onClick={() => setShowAnswer(true)} icon={Eye}>
                    Reveal Answer
                  </Button3D>
                )}
              </div>
            )}
          </div>

          <Button3D variant="secondary" size="sm" onClick={handleFlip} icon={RotateCw} style={{ alignSelf: 'center', marginTop: '8px' }}>
            Flip Back to Formula 🔄
          </Button3D>
        </div>
      </div>
    </div>
  );
};


import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';
import { soundFx } from '../../../utils/audioSynth';
import { triggerConfetti } from '../../../utils/confetti';
import { Target, CheckCircle2, RefreshCw } from 'lucide-react';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export const FractionVisualizerLab = ({ config = {} }) => {
  const [slices, setSlices] = useState(config.slices || 8);
  const [shaded, setShaded] = useState(config.shaded || 3);
  const [mode, setMode] = useState('pizza');

  // Challenge Mode State
  const [targetNumerator, setTargetNumerator] = useState(3);
  const [targetDenominator, setTargetDenominator] = useState(4);
  const [challengeSolved, setChallengeSolved] = useState(false);

  const decimalVal = (shaded / slices).toFixed(3);
  const percentVal = ((shaded / slices) * 100).toFixed(1);

  // Calculate simplified fraction
  const divisor = gcd(shaded, slices);
  const simpleNum = shaded / divisor;
  const simpleDen = slices / divisor;

  const toggleSlice = (idx) => {
    soundFx.playClick();
    let nextShaded;
    if (idx < shaded) {
      nextShaded = idx;
    } else {
      nextShaded = idx + 1;
    }
    setShaded(nextShaded);

    // Check challenge
    if (nextShaded / slices === targetNumerator / targetDenominator && !challengeSolved) {
      soundFx.playCorrect();
      setChallengeSolved(true);
      triggerConfetti('levelUp');
    }
  };

  const newChallenge = () => {
    soundFx.playClick();
    const challenges = [
      { n: 1, d: 2 },
      { n: 1, d: 4 },
      { n: 3, d: 4 },
      { n: 2, d: 3 },
      { n: 3, d: 5 },
      { n: 5, d: 6 },
      { n: 3, d: 8 }
    ];
    const pick = challenges[Math.floor(Math.random() * challenges.length)];
    setTargetNumerator(pick.n);
    setTargetDenominator(pick.d);
    setChallengeSolved(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', userSelect: 'none' }}>
      
      {/* Target Challenge Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', background: '#f8fafc', padding: '12px 18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Target size={20} color="#4f46e5" />
          <span style={{ fontWeight: '800', fontSize: '0.92rem', color: '#1e293b' }}>
            🎯 Target Challenge: Build equivalent of <strong>{targetNumerator}/{targetDenominator}</strong>!
          </span>
          {challengeSolved && (
            <span style={{ background: '#dcfce7', color: '#166534', fontWeight: '900', padding: '2px 8px', borderRadius: '6px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={14} /> Solved!
            </span>
          )}
        </div>

        <Button3D variant="outline" size="sm" onClick={newChallenge} icon={RefreshCw}>
          New Challenge
        </Button3D>
      </div>

      {/* Mode Switcher */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => { setMode('pizza'); soundFx.playClick(); }}
          style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: mode === 'pizza' ? '#4f46e5' : '#f1f5f9', color: mode === 'pizza' ? '#ffffff' : '#475569', fontWeight: '800', cursor: 'pointer' }}
        >
          🍕 Interactive Circular Pizza
        </button>
        <button
          onClick={() => { setMode('wall'); soundFx.playClick(); }}
          style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: mode === 'wall' ? '#4f46e5' : '#f1f5f9', color: mode === 'wall' ? '#ffffff' : '#475569', fontWeight: '800', cursor: 'pointer' }}
        >
          🧱 Fraction Wall Bar Strips
        </button>
      </div>

      {/* Denominator & Numerator Sliders */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', background: '#f8fafc', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>
            Denominator (Total Equal Parts): <strong>{slices}</strong>
          </label>
          <input
            type="range"
            min="2"
            max="12"
            value={slices}
            onChange={(e) => {
              const newSlices = parseInt(e.target.value, 10);
              setSlices(newSlices);
              if (shaded > newSlices) setShaded(newSlices);
            }}
            style={{ width: '100%', marginTop: '6px' }}
          />
        </div>

        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>
            Numerator (Shaded Parts): <strong>{shaded}</strong>
          </label>
          <input
            type="range"
            min="0"
            max={slices}
            value={shaded}
            onChange={(e) => setShaded(parseInt(e.target.value, 10))}
            style={{ width: '100%', marginTop: '6px' }}
          />
        </div>
      </div>

      {/* Equivalent Real-Time Values */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
        <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#4338ca', textTransform: 'uppercase' }}>Fraction</span>
          <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#3730a3' }}>{shaded} / {slices}</div>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#6366f1' }}>= {simpleNum}/{simpleDen} (simplest)</span>
        </div>

        <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#15803d', textTransform: 'uppercase' }}>Decimal</span>
          <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#166534' }}>{decimalVal}</div>
        </div>

        <div style={{ background: '#fff7ed', border: '1.5px solid #fed7aa', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#c2410c', textTransform: 'uppercase' }}>Percentage</span>
          <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#9a3412' }}>{percentVal}%</div>
        </div>
      </div>

      {/* Direct Interactive Clickable Slice Canvas */}
      <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '16px', minHeight: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '700', marginBottom: '12px' }}>
          💡 <strong>Direct Manipulation:</strong> Click any slice or bar segment directly to shade/unshade it!
        </span>

        {mode === 'pizza' ? (
          <svg width="240" height="240" viewBox="0 0 240 240">
            <circle cx="120" cy="120" r="100" fill="#fed7aa" stroke="#ea580c" strokeWidth="4" />
            {Array.from({ length: slices }).map((_, idx) => {
              const startAngle = (idx * 360) / slices;
              const endAngle = ((idx + 1) * 360) / slices;
              const isShaded = idx < shaded;

              const x1 = 120 + 100 * Math.cos((startAngle * Math.PI) / 180);
              const y1 = 120 + 100 * Math.sin((startAngle * Math.PI) / 180);
              const x2 = 120 + 100 * Math.cos((endAngle * Math.PI) / 180);
              const y2 = 120 + 100 * Math.sin((endAngle * Math.PI) / 180);
              const largeArc = endAngle - startAngle > 180 ? 1 : 0;

              return (
                <path
                  key={idx}
                  d={`M 120 120 L ${x1} ${y1} A 100 100 0 ${largeArc} 1 ${x2} ${y2} Z`}
                  fill={isShaded ? '#f97316' : '#ffedd5'}
                  stroke="#c2410c"
                  strokeWidth="2"
                  style={{ cursor: 'pointer', transition: 'fill 0.15s ease' }}
                  onClick={() => toggleSlice(idx)}
                />
              );
            })}
            <circle cx="120" cy="120" r="6" fill="#c2410c" />
          </svg>
        ) : (
          <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Reference 1 whole bar */}
            <div style={{ width: '100%', height: '36px', background: '#e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: '#475569', fontSize: '0.85rem' }}>
              1 Whole (1 / 1)
            </div>

            {/* Interactive fraction bar */}
            <div style={{ width: '100%', height: '48px', display: 'flex', borderRadius: '8px', overflow: 'hidden', border: '2px solid #ea580c' }}>
              {Array.from({ length: slices }).map((_, idx) => {
                const isShaded = idx < shaded;
                return (
                  <div
                    key={idx}
                    onClick={() => toggleSlice(idx)}
                    style={{
                      flex: 1,
                      background: isShaded ? '#f97316' : '#ffedd5',
                      borderRight: idx < slices - 1 ? '1.5px solid #ea580c' : 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      color: isShaded ? '#ffffff' : '#9a3412',
                      fontSize: '0.8rem'
                    }}
                  >
                    1/{slices}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

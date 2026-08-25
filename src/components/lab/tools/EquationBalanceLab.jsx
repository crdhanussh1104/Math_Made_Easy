import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';
import { soundFx } from '../../../utils/audioSynth';
import { triggerConfetti } from '../../../utils/confetti';
import { Scale, Target, CheckCircle2, RefreshCw, Plus, Minus } from 'lucide-react';

export const EquationBalanceLab = ({ config = {} }) => {
  const [targetSolution, setTargetSolution] = useState(4);
  const [coeffX, setCoeffX] = useState(2);
  const [leftConstant, setLeftConstant] = useState(3);
  const [xVal, setXVal] = useState(2);
  const [challengeSolved, setChallengeSolved] = useState(false);

  const rightConstant = coeffX * targetSolution + leftConstant;
  const leftWeight = coeffX * xVal + leftConstant;
  const rightWeight = rightConstant;
  const isBalanced = leftWeight === rightWeight;

  // Scale tilt angle in degrees (-15 to 15)
  const diff = leftWeight - rightWeight;
  const tiltDeg = Math.max(-15, Math.min(15, diff * 3));

  const handleXChange = (newVal) => {
    setXVal(newVal);
    soundFx.playClick();
    if (coeffX * newVal + leftConstant === rightConstant && !challengeSolved) {
      soundFx.playCorrect();
      setChallengeSolved(true);
      triggerConfetti('levelUp');
    }
  };

  const newChallenge = () => {
    soundFx.playClick();
    const solutions = [2, 3, 4, 5, 6, 7, 8];
    const coeffs = [1, 2, 3, 4];
    const consts = [1, 2, 3, 5, 6];

    const sol = solutions[Math.floor(Math.random() * solutions.length)];
    const c = coeffs[Math.floor(Math.random() * coeffs.length)];
    const k = consts[Math.floor(Math.random() * consts.length)];

    setTargetSolution(sol);
    setCoeffX(c);
    setLeftConstant(k);
    setXVal(1);
    setChallengeSolved(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', userSelect: 'none' }}>
      
      {/* Target Challenge Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', background: '#f8fafc', padding: '12px 18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Target size={20} color="#4f46e5" />
          <span style={{ fontWeight: '800', fontSize: '0.92rem', color: '#1e293b' }}>
            🎯 Target Challenge: Solve <strong>{coeffX}x + {leftConstant} = {rightConstant}</strong> for <strong>x</strong>!
          </span>
          {challengeSolved && (
            <span style={{ background: '#dcfce7', color: '#166534', fontWeight: '900', padding: '2px 8px', borderRadius: '6px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={14} /> Balanced & Solved!
            </span>
          )}
        </div>

        <Button3D variant="outline" size="sm" onClick={newChallenge} icon={RefreshCw}>
          New Equation
        </Button3D>
      </div>

      {/* Real-Time Algebraic Equation Card */}
      <div style={{ background: isBalanced ? '#f0fdf4' : '#eef2ff', border: `2px solid ${isBalanced ? '#86efac' : '#c7d2fe'}`, borderRadius: '14px', padding: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.8rem', fontWeight: '900', color: isBalanced ? '#15803d' : '#3730a3', fontFamily: 'var(--font-rounded)' }}>
          {coeffX}x + {leftConstant} = {rightConstant}
        </div>
        <div style={{ fontSize: '0.9rem', color: isBalanced ? '#166534' : '#4f46e5', fontWeight: '700', marginTop: '4px' }}>
          When x = {xVal}: Left Pan = {coeffX}({xVal}) + {leftConstant} = <strong>{leftWeight}</strong> vs Right Pan = <strong>{rightWeight}</strong>
        </div>
      </div>

      {/* Variable (x) Stepper Controls */}
      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => handleXChange(Math.max(1, xVal - 1))}
            style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', fontWeight: '800', cursor: 'pointer' }}
          >
            <Minus size={18} />
          </button>
          <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#4f46e5', minWidth: '80px', textAlign: 'center' }}>
            x = {xVal}
          </div>
          <button
            onClick={() => handleXChange(Math.min(12, xVal + 1))}
            style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', fontWeight: '800', cursor: 'pointer' }}
          >
            <Plus size={18} />
          </button>
        </div>

        <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '700' }}>
          {isBalanced ? '🎉 Perfect Balance! Both sides are exactly equal.' : diff > 0 ? '⬇️ Left side is heavier! Decrease x.' : '⬆️ Right side is heavier! Increase x.'}
        </div>
      </div>

      {/* SVG Physics Balance Scale Pan */}
      <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '16px', minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <svg width="340" height="240" viewBox="0 0 340 240">
          {/* Fulcrum Base */}
          <polygon points="170,140 145,210 195,210" fill="#475569" stroke="#1e293b" strokeWidth="2" />
          <circle cx="170" cy="140" r="8" fill="#0f172a" />

          {/* Tilted Balance Beam */}
          <g transform={`rotate(${tiltDeg}, 170, 140)`} style={{ transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
            <rect x="50" y="136" width="240" height="8" rx="4" fill="#0284c7" />

            {/* Left Pan Attachment */}
            <line x1="70" y1="140" x2="70" y2="180" stroke="#64748b" strokeWidth="2" />
            <path d="M 40 180 Q 70 195 100 180 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
            
            {/* Left Pan Weights (x boxes + constant units) */}
            <g transform="translate(45, 155)">
              <rect x="0" y="0" width="22" height="22" rx="4" fill="#4f46e5" />
              <text x="11" y="15" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle">{coeffX}x</text>
              <rect x="26" y="4" width="18" height="18" rx="3" fill="#f59e0b" />
              <text x="35" y="17" fill="#ffffff" fontSize="10" fontWeight="900" textAnchor="middle">+{leftConstant}</text>
            </g>

            {/* Right Pan Attachment */}
            <line x1="270" y1="140" x2="270" y2="180" stroke="#64748b" strokeWidth="2" />
            <path d="M 240 180 Q 270 195 300 180 Z" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />

            {/* Right Pan Weights */}
            <g transform="translate(245, 155)">
              <rect x="0" y="0" width="50" height="22" rx="4" fill="#d97706" />
              <text x="25" y="15" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle">{rightConstant}</text>
            </g>
          </g>
        </svg>
      </div>

    </div>
  );
};


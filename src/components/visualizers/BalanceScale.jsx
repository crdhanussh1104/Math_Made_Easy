import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { CheckCircle2, Scale } from 'lucide-react';

export const BalanceScale = ({ targetWeightsCount = 4, onVerify }) => {
  const [rightWeights, setRightWeights] = useState(1);

  const targetGrams = 2000; // 2 kg
  const weightPerUnit = 500; // 500 g
  const rightGrams = rightWeights * weightPerUnit;

  const isBalanced = rightGrams === targetGrams;
  const tiltAngle = Math.min(15, Math.max(-15, (targetGrams - rightGrams) / 100));

  const handleAddWeight = () => {
    setRightWeights(prev => Math.min(8, prev + 1));
    soundFx.playClick();
  };

  const handleRemoveWeight = () => {
    setRightWeights(prev => Math.max(0, prev - 1));
    soundFx.playClick();
  };

  const handleVerify = () => {
    if (isBalanced) {
      soundFx.playCorrect();
      if (onVerify) onVerify(true);
    } else {
      soundFx.playIncorrect();
    }
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '700' }}>
          Interactive Balance Scale ⚖️
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Balance 2 kg on the left pan with 500 g weights on the right pan!
        </p>
      </div>

      {/* Balance Scale SVG Container */}
      <svg width="280" height="160" viewBox="-140 -80 280 160">
        {/* Base Fulcrum */}
        <polygon points="0,40 -20,70 20,70" fill="var(--text-muted)" />
        <rect x="-6" y="-10" width="12" height="50" fill="var(--text-muted)" />

        {/* Tilting Lever */}
        <g transform={`rotate(${tiltAngle})`} style={{ transition: 'transform 0.4s ease' }}>
          <rect x="-110" y="-8" width="220" height="16" rx="6" fill="var(--secondary)" />

          {/* Left Pan (2 kg weight) */}
          <line x1="-90" y1="0" x2="-90" y2="40" stroke="var(--text-main)" strokeWidth="2" />
          <path d="M -115 40 L -65 40 A 25 25 0 0 1 -115 40 Z" fill="var(--accent)" />
          <text x="-90" y="32" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800" fontFamily="var(--font-rounded)">
            2 kg
          </text>

          {/* Right Pan (500 g weights) */}
          <line x1="90" y1="0" x2="90" y2="40" stroke="var(--text-main)" strokeWidth="2" />
          <path d="M 65 40 L 115 40 A 25 25 0 0 1 65 40 Z" fill="var(--primary)" />
          <text x="90" y="32" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800" fontFamily="var(--font-rounded)">
            {rightGrams} g
          </text>
        </g>
      </svg>

      {/* Weight Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={handleRemoveWeight}
          style={{
            padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
            backgroundColor: 'var(--accent-light)', color: 'var(--accent)', fontWeight: '800', cursor: 'pointer'
          }}
        >
          - 500g
        </button>

        <span style={{ fontWeight: '800', fontFamily: 'var(--font-rounded)', fontSize: '1.1rem' }}>
          {rightWeights} × 500g Weights
        </span>

        <button
          onClick={handleAddWeight}
          style={{
            padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
            backgroundColor: 'var(--primary-light)', color: 'var(--primary)', fontWeight: '800', cursor: 'pointer'
          }}
        >
          + 500g
        </button>
      </div>

      <Button3D variant="primary" onClick={handleVerify} icon={CheckCircle2}>
        Verify Scale Balance
      </Button3D>
    </CardRounded>
  );
};

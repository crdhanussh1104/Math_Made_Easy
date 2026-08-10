import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { RefreshCw, Move, FlipHorizontal, RotateCw, Maximize2 } from 'lucide-react';

export const TransformationsLab = () => {
  const [transType, setTransType] = useState('translation'); // translation, reflection, rotation, scaling
  const [step, setStep] = useState(0);

  const handleTransform = () => {
    setStep(prev => (prev + 1) % 2);
    soundFx.playClick();
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '700' }}>
          Geometric Transformations Lab 🔄
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Observe Translation (Slide), Reflection (Flip), Rotation (Turn), and Scaling (Resize)!
        </p>
      </div>

      {/* Transformation Selector Pills */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { id: 'translation', label: 'Translation (Slide)' },
          { id: 'reflection', label: 'Reflection (Flip)' },
          { id: 'rotation', label: 'Rotation (Turn)' },
          { id: 'scaling', label: 'Scaling (Resize)' }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => { setTransType(t.id); setStep(0); soundFx.playClick(); }}
            style={{
              padding: '6px 14px', borderRadius: 'var(--radius-full)', border: 'none',
              backgroundColor: transType === t.id ? 'var(--secondary)' : 'var(--bg-main)',
              color: transType === t.id ? '#fff' : 'var(--text-muted)',
              fontWeight: '700', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Animated SVG Visualizer Canvas */}
      <div style={{
        width: '100%', maxWidth: '340px', height: '220px', backgroundColor: 'var(--bg-main)',
        borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '2px solid var(--border-light)', position: 'relative'
      }}>
        <svg width="260" height="200" viewBox="-130 -100 260 200">
          {/* Axis Grid */}
          <line x1="-120" y1="0" x2="120" y2="0" stroke="var(--border-light)" strokeWidth="2" />
          <line x1="0" y1="-90" x2="0" y2="90" stroke="var(--border-light)" strokeWidth="2" />

          {/* Original Shape (Blue) */}
          <polygon points="-60,-40 -20,-40 -40,-80" fill="#1cb0f6" opacity="0.5" stroke="#1899d6" strokeWidth="2" />
          <text x="-40" y="-90" textAnchor="middle" fill="var(--secondary)" fontSize="11" fontWeight="800">Original (Pre-image)</text>

          {/* Transformed Shape (Green) */}
          <polygon
            points="-60,-40 -20,-40 -40,-80"
            fill="#58cc02"
            opacity="0.85"
            stroke="#46a302"
            strokeWidth="3"
            style={{
              transformOrigin: '-40px -60px',
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform:
                transType === 'translation' ? (step === 1 ? 'translate(80px, 80px)' : 'translate(0px, 0px)') :
                transType === 'reflection' ? (step === 1 ? 'scaleX(-1) translate(-80px, 0px)' : 'none') :
                transType === 'rotation' ? (step === 1 ? 'rotate(90deg)' : 'none') :
                (step === 1 ? 'scale(1.5)' : 'none')
            }}
          />
        </svg>
      </div>

      <Button3D variant="primary" size="lg" onClick={handleTransform} icon={RefreshCw}>
        {step === 0 ? 'Execute Transformation 🚀' : 'Reset to Original'}
      </Button3D>
    </CardRounded>
  );
};

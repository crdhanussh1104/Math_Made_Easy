import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const FractionVisualizerLab = ({ config = {} }) => {
  const [slices, setSlices] = useState(config.slices || 8);
  const [shaded, setShaded] = useState(config.shaded || 3);
  const [mode, setMode] = useState('pizza');

  const decimalVal = (shaded / slices).toFixed(3);
  const percentVal = ((shaded / slices) * 100).toFixed(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => setMode('pizza')}
          style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: mode === 'pizza' ? '#4f46e5' : '#f1f5f9', color: mode === 'pizza' ? '#ffffff' : '#475569', fontWeight: '800', cursor: 'pointer' }}
        >
          🍕 Pizza Slicer
        </button>
        <button
          onClick={() => setMode('wall')}
          style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: mode === 'wall' ? '#4f46e5' : '#f1f5f9', color: mode === 'wall' ? '#ffffff' : '#475569', fontWeight: '800', cursor: 'pointer' }}
        >
          🧱 Fraction Wall Strips
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>
            Denominator (Total Slices): <strong>{slices}</strong>
          </label>
          <input
            type="range"
            min="2"
            max="12"
            value={slices}
            onChange={(e) => {
              const newSlices = parseInt(e.target.value);
              setSlices(newSlices);
              if (shaded > newSlices) setShaded(newSlices);
            }}
            style={{ width: '100%', marginTop: '6px' }}
          />
        </div>

        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>
            Numerator (Shaded Slices): <strong>{shaded}</strong>
          </label>
          <input
            type="range"
            min="0"
            max={slices}
            value={shaded}
            onChange={(e) => setShaded(parseInt(e.target.value))}
            style={{ width: '100%', marginTop: '6px' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
        <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4338ca', textTransform: 'uppercase' }}>Fraction</span>
          <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#3730a3' }}>{shaded} / {slices}</div>
        </div>

        <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#15803d', textTransform: 'uppercase' }}>Decimal</span>
          <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#166534' }}>{decimalVal}</div>
        </div>

        <div style={{ background: '#fff7ed', border: '1.5px solid #fed7aa', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#c2410c', textTransform: 'uppercase' }}>Percentage</span>
          <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#9a3412' }}>{percentVal}%</div>
        </div>
      </div>

      <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '16px', minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
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
                />
              );
            })}
          </svg>
        ) : (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[1, 2, 3, 4, 6, 8, 12].map(den => (
              <div key={den} style={{ display: 'flex', width: '100%', height: '28px', border: '1px solid #cbd5e1', borderRadius: '6px', overflow: 'hidden' }}>
                {Array.from({ length: den }).map((_, pieceIdx) => (
                  <div
                    key={pieceIdx}
                    style={{
                      flex: 1,
                      borderRight: pieceIdx < den - 1 ? '1px solid #cbd5e1' : 'none',
                      background: den === slices && pieceIdx < shaded ? '#4f46e5' : '#f8fafc',
                      color: den === slices && pieceIdx < shaded ? '#ffffff' : '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '800'
                    }}
                  >
                    1/{den}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

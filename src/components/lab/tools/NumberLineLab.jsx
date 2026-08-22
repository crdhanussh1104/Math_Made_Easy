import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const NumberLineLab = ({ config = {} }) => {
  const [min, setMin] = useState(config.min !== undefined ? config.min : -5);
  const [max, setMax] = useState(config.max !== undefined ? config.max : 15);
  const [currentVal, setCurrentVal] = useState(config.currentVal !== undefined ? config.currentVal : 3);
  const [stepSize, setStepSize] = useState(1);

  const range = max - min;
  const toPercent = (val) => ((val - min) / range) * 100;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => setCurrentVal(prev => Math.max(min, prev - stepSize))}
            style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', fontWeight: '800', cursor: 'pointer' }}
          >
            ◀ Hop -{stepSize}
          </button>
          <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#4f46e5' }}>
            Current Point: <strong>{currentVal}</strong>
          </div>
          <button
            onClick={() => setCurrentVal(prev => Math.min(max, prev + stepSize))}
            style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', fontWeight: '800', cursor: 'pointer' }}
          >
            Hop +{stepSize} ▶
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b' }}>Step Size:</span>
          {[1, 2, 5, 0.5].map(st => (
            <button
              key={st}
              onClick={() => setStepSize(st)}
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                border: 'none',
                background: stepSize === st ? '#4f46e5' : '#e2e8f0',
                color: stepSize === st ? '#ffffff' : '#475569',
                fontWeight: '800',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#3730a3' }}>
          Predecessor: {currentVal - stepSize} ⟵ <strong>Point: {currentVal}</strong> ⟶ Successor: {currentVal + stepSize}
        </div>
        <div style={{ fontSize: '0.85rem', color: '#4f46e5', fontWeight: '700', marginTop: '4px' }}>
          Absolute Value: |{currentVal}| = {Math.abs(currentVal)} • Additive Inverse: {-currentVal}
        </div>
      </div>

      <div style={{
        background: '#ffffff',
        border: '2px solid #cbd5e1',
        borderRadius: '16px',
        padding: '50px 24px',
        position: 'relative',
        minHeight: '160px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ width: '100%', height: '4px', background: '#334155', position: 'relative' }}>
          {Array.from({ length: Math.floor(range / stepSize) + 1 }).map((_, idx) => {
            const val = min + idx * stepSize;
            const pct = toPercent(val);
            const isZero = val === 0;

            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  left: `${pct}%`,
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  top: '-12px'
                }}
              >
                <div style={{ width: isZero ? '3px' : '2px', height: isZero ? '28px' : '20px', background: isZero ? '#dc2626' : '#64748b' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: isZero ? '900' : '700', color: isZero ? '#dc2626' : '#475569', marginTop: '6px' }}>
                  {val}
                </span>
              </div>
            );
          })}

          <div
            style={{
              position: 'absolute',
              left: `${toPercent(currentVal)}%`,
              top: '-36px',
              transform: 'translateX(-50%)',
              cursor: 'grab',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'left 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div style={{ fontSize: '1.6rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>
              🐸
            </div>
            <div style={{
              background: '#4f46e5',
              color: '#ffffff',
              fontSize: '0.75rem',
              fontWeight: '900',
              padding: '2px 6px',
              borderRadius: '4px',
              marginTop: '2px'
            }}>
              {currentVal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

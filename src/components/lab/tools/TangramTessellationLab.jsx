import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const TangramTessellationLab = ({ config = {} }) => {
  const [activeShape, setActiveShape] = useState('hexagon');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        {['hexagon', 'square', 'triangle'].map(sh => (
          <button
            key={sh}
            onClick={() => setActiveShape(sh)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              background: activeShape === sh ? '#4f46e5' : '#f1f5f9',
              color: activeShape === sh ? '#ffffff' : '#475569',
              fontWeight: '800',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {sh} Tessellation
          </button>
        ))}
      </div>

      <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#166534' }}>
          Tessellation Property: Angles around every vertex sum to 360° with 0 gaps!
        </div>
      </div>

      <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '16px', minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <svg width="300" height="240" viewBox="0 0 300 240">
          {activeShape === 'hexagon' && (
            <g>
              {[
                { cx: 100, cy: 80 }, { cx: 160, cy: 80 }, { cx: 220, cy: 80 },
                { cx: 70, cy: 130 }, { cx: 130, cy: 130 }, { cx: 190, cy: 130 }, { cx: 250, cy: 130 },
                { cx: 100, cy: 180 }, { cx: 160, cy: 180 }, { cx: 220, cy: 180 }
              ].map((pos, idx) => (
                <polygon
                  key={idx}
                  points={`${pos.cx},${pos.cy-26} ${pos.cx+26*0.866},${pos.cy-13} ${pos.cx+26*0.866},${pos.cy+13} ${pos.cx},${pos.cy+26} ${pos.cx-26*0.866},${pos.cy+13} ${pos.cx-26*0.866},${pos.cy-13}`}
                  fill="#86efac"
                  stroke="#16a34a"
                  strokeWidth="2"
                />
              ))}
            </g>
          )}

          {activeShape === 'square' && (
            <g>
              {Array.from({ length: 16 }).map((_, idx) => {
                const r = Math.floor(idx / 4);
                const c = idx % 4;
                return (
                  <rect key={idx} x={60 + c * 45} y={30 + r * 45} width="45" height="45" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
                );
              })}
            </g>
          )}

          {activeShape === 'triangle' && (
            <g>
              {Array.from({ length: 8 }).map((_, idx) => (
                <polygon key={idx} points={`${50 + idx * 25},160 ${75 + idx * 25},110 ${100 + idx * 25},160`} fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              ))}
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};

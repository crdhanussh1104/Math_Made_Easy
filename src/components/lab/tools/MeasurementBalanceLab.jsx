import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const MeasurementBalanceLab = ({ config = {} }) => {
  const [leftWeight, setLeftWeight] = useState(config.leftWeight || 5);
  const [rightWeight, setRightWeight] = useState(config.rightWeight || 3);

  const diff = leftWeight - rightWeight;
  const tiltAngle = Math.max(-20, Math.min(20, diff * 4));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#2563eb' }}>Left Pan Weight: {leftWeight} kg</label>
          <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
            <button onClick={() => setLeftWeight(Math.max(1, leftWeight - 1))} style={{ flex: 1, padding: '6px', fontWeight: '800' }}>-1 kg</button>
            <button onClick={() => setLeftWeight(leftWeight + 1)} style={{ flex: 1, padding: '6px', fontWeight: '800' }}>+1 kg</button>
          </div>
        </div>

        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#dc2626' }}>Right Pan Weight: {rightWeight} kg</label>
          <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
            <button onClick={() => setRightWeight(Math.max(1, rightWeight - 1))} style={{ flex: 1, padding: '6px', fontWeight: '800' }}>-1 kg</button>
            <button onClick={() => setRightWeight(rightWeight + 1)} style={{ flex: 1, padding: '6px', fontWeight: '800' }}>+1 kg</button>
          </div>
        </div>
      </div>

      <div style={{ background: diff === 0 ? '#f0fdf4' : '#fffbeb', border: `1.5px solid ${diff === 0 ? '#bbf7d0' : '#fde68a'}`, borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: '900', color: diff === 0 ? '#166534' : '#b45309' }}>
          {diff === 0 ? '⚖️ Perfectly Balanced (Left = Right)' : diff > 0 ? '⬇️ Left Pan is Heavier' : '⬇️ Right Pan is Heavier'}
        </div>
      </div>

      <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '16px', minHeight: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <svg width="300" height="220" viewBox="0 0 300 220">
          <polygon points="135,200 165,200 155,100 145,100" fill="#64748b" />
          <rect x="100" y="200" width="100" height="10" fill="#475569" rx="3" />

          <g transform={`rotate(${tiltAngle} 150 100)`}>
            <rect x="50" y="96" width="200" height="8" fill="#334155" rx="3" />
            <line x1="60" y1="100" x2="60" y2="150" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 30 150 Q 60 170 90 150 Z" fill="#3b82f6" />
            <text x="60" y="145" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="800">{leftWeight} kg</text>

            <line x1="240" y1="100" x2="240" y2="150" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 210 150 Q 240 170 270 150 Z" fill="#ef4444" />
            <text x="240" y="145" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="800">{rightWeight} kg</text>
          </g>
        </svg>
      </div>
    </div>
  );
};

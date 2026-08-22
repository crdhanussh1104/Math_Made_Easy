import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const ClockLab = ({ config = {} }) => {
  const [hours, setHours] = useState(config.hours || 3);
  const [minutes, setMinutes] = useState(config.minutes || 30);

  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>Hour Hand: {hours}</label>
          <input type="range" min="1" max="12" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
        </div>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>Minute Hand: {minutes} mins</label>
          <input type="range" min="0" max="59" step="5" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
        </div>
      </div>

      <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#3730a3' }}>
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}
        </div>
      </div>

      <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '16px', minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <svg width="220" height="220" viewBox="0 0 220 220">
          <circle cx="110" cy="110" r="95" fill="#f8fafc" stroke="#334155" strokeWidth="6" />
          {Array.from({ length: 12 }).map((_, idx) => {
            const num = idx + 1;
            const a = (num * 30 * Math.PI) / 180;
            const x = 110 + 75 * Math.sin(a);
            const y = 110 - 75 * Math.cos(a) + 5;
            return (
              <text key={num} x={x} y={y} textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="900">
                {num}
              </text>
            );
          })}
          <line x1="110" y1="110" x2={110 + 50 * Math.sin((hourAngle * Math.PI) / 180)} y2={110 - 50 * Math.cos((hourAngle * Math.PI) / 180)} stroke="#2563eb" strokeWidth="6" strokeLinecap="round" />
          <line x1="110" y1="110" x2={110 + 70 * Math.sin((minuteAngle * Math.PI) / 180)} y2={110 - 70 * Math.cos((minuteAngle * Math.PI) / 180)} stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="110" cy="110" r="5" fill="#0f172a" />
        </svg>
      </div>
    </div>
  );
};

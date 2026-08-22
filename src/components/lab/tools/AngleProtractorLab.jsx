import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const AngleProtractorLab = ({ config = {} }) => {
  const [angle, setAngle] = useState(config.angle || 65);

  const angleType =
    angle < 90 ? 'Acute Angle (< 90°)' :
    angle === 90 ? 'Right Angle (90°)' :
    angle < 180 ? 'Obtuse Angle (90° - 180°)' :
    angle === 180 ? 'Straight Angle (180°)' : 'Reflex Angle (> 180°)';

  const rad = (angle * Math.PI) / 180;
  const rayX = 150 + 100 * Math.cos(-rad);
  const rayY = 150 + 100 * Math.sin(-rad);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>
          <span>Angle Measurement (θ):</span>
          <span><strong>{angle}°</strong></span>
        </div>
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
          style={{ width: '100%', marginTop: '8px' }}
        />
      </div>

      <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#3730a3' }}>
          {angle}° — {angleType}
        </div>
      </div>

      <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '16px', minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <svg width="300" height="260" viewBox="0 0 300 260">
          <path d="M 50 150 A 100 100 0 0 1 250 150 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" opacity="0.7" />
          <line x1="150" y1="150" x2="250" y2="150" stroke="#0f172a" strokeWidth="3" />
          <line x1="150" y1="150" x2={rayX} y2={rayY} stroke="#dc2626" strokeWidth="3" />
          <circle cx="150" cy="150" r="5" fill="#dc2626" />
        </svg>
      </div>
    </div>
  );
};

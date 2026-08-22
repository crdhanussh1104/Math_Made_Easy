import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const PythagorasLab = ({ config = {} }) => {
  const [legA, setLegA] = useState(config.legA || 6);
  const [legB, setLegB] = useState(config.legB || 8);

  const aSq = legA * legA;
  const bSq = legB * legB;
  const cSq = aSq + bSq;
  const c = Math.sqrt(cSq);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#2563eb' }}>Leg a: {legA} cm</label>
          <input type="range" min="3" max="12" value={legA} onChange={(e) => setLegA(parseInt(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
        </div>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#16a34a' }}>Leg b: {legB} cm</label>
          <input type="range" min="3" max="12" value={legB} onChange={(e) => setLegB(parseInt(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
        </div>
      </div>

      <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#3730a3' }}>
          a² + b² = c² ⟶ {aSq} + {bSq} = {cSq}
        </div>
        <div style={{ fontSize: '1rem', color: '#4f46e5', fontWeight: '800', marginTop: '4px' }}>
          Hypotenuse c = √{cSq} = {c.toFixed(2)} cm
        </div>
      </div>

      <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '16px', minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <svg width="280" height="240" viewBox="0 0 280 240">
          <polygon points={`60,180 ${60 + legB * 12},180 60,${180 - legA * 12}`} fill="#e0e7ff" stroke="#4f46e5" strokeWidth="3" />
          <text x={60 + legB * 6} y="196" textAnchor="middle" fill="#16a34a" fontWeight="800">b = {legB}</text>
          <text x="45" y={180 - legA * 6} textAnchor="middle" fill="#2563eb" fontWeight="800">a = {legA}</text>
          <text x={60 + legB * 6} y={180 - legA * 6 - 5} textAnchor="middle" fill="#dc2626" fontWeight="800">c = {c.toFixed(1)}</text>
        </svg>
      </div>
    </div>
  );
};

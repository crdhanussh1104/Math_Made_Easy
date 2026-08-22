import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const AlgebraTilesLab = ({ config = {} }) => {
  const [a, setA] = useState(config.a || 6);
  const [b, setB] = useState(config.b || 3);

  const aSq = a * a;
  const ab = a * b;
  const bSq = b * b;
  const total = (a + b) * (a + b);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#2563eb' }}>Dimension a: {a}</label>
          <input type="range" min="2" max="10" value={a} onChange={(e) => setA(parseInt(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
        </div>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#dc2626' }}>Dimension b: {b}</label>
          <input type="range" min="1" max="8" value={b} onChange={(e) => setB(parseInt(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
        </div>
      </div>

      <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#3730a3' }}>
          (a + b)² = a² + 2ab + b²
        </div>
        <div style={{ fontSize: '0.95rem', color: '#4f46e5', fontWeight: '700', marginTop: '4px' }}>
          ({a} + {b})² = {aSq} + {2 * ab} + {bSq} = {total}
        </div>
      </div>

      <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '16px', minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <svg width="260" height="260" viewBox="0 0 260 260">
          <rect x="30" y="30" width={a * 15} height={a * 15} fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
          <text x={30 + a * 7.5} y={30 + a * 7.5} textAnchor="middle" fill="#1e3a8a" fontWeight="900">a² ({aSq})</text>

          <rect x={30 + a * 15} y="30" width={b * 15} height={a * 15} fill="#fca5a5" stroke="#dc2626" strokeWidth="2" />
          <text x={30 + a * 15 + b * 7.5} y={30 + a * 7.5} textAnchor="middle" fill="#7f1d1d" fontWeight="900">ab ({ab})</text>

          <rect x="30" y={30 + a * 15} width={a * 15} height={b * 15} fill="#fca5a5" stroke="#dc2626" strokeWidth="2" />
          <text x={30 + a * 7.5} y={30 + a * 15 + b * 7.5} textAnchor="middle" fill="#7f1d1d" fontWeight="900">ab ({ab})</text>

          <rect x={30 + a * 15} y={30 + a * 15} width={b * 15} height={b * 15} fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
          <text x={30 + a * 15 + b * 7.5} y={30 + a * 15 + b * 7.5} textAnchor="middle" fill="#713f12" fontWeight="900">b² ({bSq})</text>
        </svg>
      </div>
    </div>
  );
};

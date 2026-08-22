import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const LociExplorerLab = ({ config = {} }) => {
  const [posY, setPosY] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>
          Move Point P along Perpendicular Bisector: y = {posY}
        </label>
        <input type="range" min="-60" max="60" value={posY} onChange={(e) => setPosY(parseInt(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
      </div>

      <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#166534' }}>
          Distance PA = Distance PB (Equidistant property holds everywhere along the vertical locus!)
        </div>
      </div>

      <div style={{ background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '16px', minHeight: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="260" height="220" viewBox="0 0 260 220">
          <line x1="60" y1="110" x2="200" y2="110" stroke="#94a3b8" strokeWidth="2" />
          <line x1="130" y1="20" x2="130" y2="200" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,4" />
          <circle cx="60" cy="110" r="6" fill="#2563eb" />
          <circle cx="200" cy="110" r="6" fill="#2563eb" />
          <circle cx="130" cy={110 - posY} r="7" fill="#16a34a" />
          <line x1="60" y1="110" x2="130" y2={110 - posY} stroke="#16a34a" strokeWidth="1.5" />
          <line x1="200" y1="110" x2="130" y2={110 - posY} stroke="#16a34a" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
};

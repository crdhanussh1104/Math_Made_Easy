import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const MatrixLab = ({ config = {} }) => {
  const [a11, setA11] = useState(2);
  const [a12, setA12] = useState(3);
  const [a21, setA21] = useState(1);
  const [a22, setA22] = useState(4);

  const det = a11 * a22 - a12 * a21;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>2x2 Matrix Elements:</label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', maxWidth: '200px', margin: '8px auto' }}>
          <input type="number" value={a11} onChange={(e) => setA11(parseInt(e.target.value) || 0)} style={{ padding: '8px', textAlign: 'center', fontWeight: '800' }} />
          <input type="number" value={a12} onChange={(e) => setA12(parseInt(e.target.value) || 0)} style={{ padding: '8px', textAlign: 'center', fontWeight: '800' }} />
          <input type="number" value={a21} onChange={(e) => setA21(parseInt(e.target.value) || 0)} style={{ padding: '8px', textAlign: 'center', fontWeight: '800' }} />
          <input type="number" value={a22} onChange={(e) => setA22(parseInt(e.target.value) || 0)} style={{ padding: '8px', textAlign: 'center', fontWeight: '800' }} />
        </div>
      </div>

      <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#3730a3' }}>
          Determinant |A| = ({a11} × {a22}) - ({a12} × {a21}) = {det}
        </div>
      </div>
    </div>
  );
};

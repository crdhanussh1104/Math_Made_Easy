import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const AbacusLab = ({ config = {} }) => {
  const [val, setVal] = useState(3452);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#3730a3' }}>
          Abacus Representation: {val}
        </div>
      </div>
    </div>
  );
};

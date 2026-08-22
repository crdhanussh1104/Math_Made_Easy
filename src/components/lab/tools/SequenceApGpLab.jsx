import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const SequenceApGpLab = ({ config = {} }) => {
  const [seqType, setSeqType] = useState('AP');
  const [a, setA] = useState(2);
  const [d, setD] = useState(3);
  const [r, setR] = useState(2);

  const terms = Array.from({ length: 6 }).map((_, idx) =>
    seqType === 'AP' ? a + idx * d : a * Math.pow(r, idx)
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => setSeqType('AP')} style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: seqType === 'AP' ? '#4f46e5' : '#f1f5f9', color: seqType === 'AP' ? '#ffffff' : '#475569', fontWeight: '800' }}>Arithmetic Progression (AP)</button>
        <button onClick={() => setSeqType('GP')} style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: seqType === 'GP' ? '#4f46e5' : '#f1f5f9', color: seqType === 'GP' ? '#ffffff' : '#475569', fontWeight: '800' }}>Geometric Progression (GP)</button>
      </div>

      <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#3730a3' }}>
          Sequence: {terms.join(', ')}...
        </div>
      </div>
    </div>
  );
};

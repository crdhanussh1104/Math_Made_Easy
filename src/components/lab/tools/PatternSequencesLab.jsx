import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const PatternSequencesLab = ({ config = {} }) => {
  const [patternType, setPatternType] = useState('AB');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        {['AB', 'ABC', 'Number'].map(t => (
          <button
            key={t}
            onClick={() => setPatternType(t)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              background: patternType === t ? '#4f46e5' : '#f1f5f9',
              color: patternType === t ? '#ffffff' : '#475569',
              fontWeight: '800',
              cursor: 'pointer'
            }}
          >
            {t} Pattern
          </button>
        ))}
      </div>

      <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#3730a3' }}>
          {patternType === 'AB' && 'Repeating Unit: 🔴 🟦 (Alternating Red Circle & Blue Square)'}
          {patternType === 'ABC' && 'Repeating Unit: 🔺 🔵 🟩 (Triangle, Circle, Square)'}
          {patternType === 'Number' && 'Arithmetic Step Rule: Add +3 each time (2, 5, 8, 11, 14...)'}
        </div>
      </div>

      <div style={{ background: '#ffffff', border: '2px dashed #cbd5e1', borderRadius: '16px', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '20px' }}>
        {patternType === 'AB' && (
          ['🔴', '🟦', '🔴', '🟦', '🔴', '🟦', '❓'].map((item, idx) => (
            <div key={idx} style={{ fontSize: '2.4rem', padding: '8px', background: '#f8fafc', borderRadius: '10px' }}>
              {item}
            </div>
          ))
        )}

        {patternType === 'ABC' && (
          ['🔺', '🔵', '🟩', '🔺', '🔵', '🟩', '❓'].map((item, idx) => (
            <div key={idx} style={{ fontSize: '2.4rem', padding: '8px', background: '#f8fafc', borderRadius: '10px' }}>
              {item}
            </div>
          ))
        )}

        {patternType === 'Number' && (
          [2, 5, 8, 11, 14, 17, '?'].map((item, idx) => (
            <div key={idx} style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#4f46e5', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: '900' }}>
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

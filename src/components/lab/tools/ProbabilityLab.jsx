import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const ProbabilityLab = ({ config = {} }) => {
  const [trials, setTrials] = useState(0);
  const [counts, setCounts] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 });

  const rollDice = (numTimes) => {
    const newCounts = { ...counts };
    for (let i = 0; i < numTimes; i++) {
      const roll = Math.floor(Math.random() * 6) + 1;
      newCounts[roll] += 1;
    }
    setCounts(newCounts);
    setTrials(prev => prev + numTimes);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button3D onClick={() => rollDice(1)} variant="primary" size="sm">Roll 1 Die</Button3D>
        <Button3D onClick={() => rollDice(10)} variant="secondary" size="sm">Roll 10x</Button3D>
        <Button3D onClick={() => rollDice(100)} variant="secondary" size="sm">Roll 100x</Button3D>
        <Button3D onClick={() => rollDice(500)} variant="warning" size="sm">⚡ Simulate 500x</Button3D>
      </div>

      <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#166534' }}>
          Total Trials: {trials} (Theoretical Probability = 1/6 ≈ 16.7% per face)
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '8px', minHeight: '180px', alignItems: 'end', background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '16px', padding: '20px' }}>
        {[1, 2, 3, 4, 5, 6].map(face => {
          const count = counts[face];
          const pct = trials > 0 ? ((count / trials) * 100).toFixed(1) : 0;
          return (
            <div key={face} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#475569', marginBottom: '4px' }}>{pct}%</div>
              <div style={{ width: '100%', height: `${Math.min(100, pct * 3)}px`, background: '#4f46e5', borderRadius: '6px' }} />
              <div style={{ fontSize: '1rem', fontWeight: '900', marginTop: '6px' }}>🎲 {face}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

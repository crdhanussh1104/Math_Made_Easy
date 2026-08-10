import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { BarChart3, CheckCircle2 } from 'lucide-react';

export const GraphBuilder = () => {
  const [data, setData] = useState({
    Apples: 15,
    Bananas: 25,
    Oranges: 10,
    Grapes: 20
  });

  const handleAdjust = (fruit, delta) => {
    setData(prev => ({
      ...prev,
      [fruit]: Math.min(30, Math.max(5, prev[fruit] + delta))
    }));
    soundFx.playClick();
  };

  const colors = {
    Apples: '#ef4444',
    Bananas: '#f59e0b',
    Oranges: '#ff9600',
    Grapes: '#ce82ff'
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '700' }}>
          Data Handling Graph Builder 📊
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Adjust fruit counts to watch live Bar Heights and Pictograph icons update!
        </p>
      </div>

      {/* Bar Graph Visual Container */}
      <div style={{
        width: '100%', maxWidth: '360px', height: '180px',
        backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around',
        padding: '16px 20px 24px 20px', border: '1.5px solid var(--border-light)'
      }}>
        {Object.entries(data).map(([fruit, val]) => (
          <div key={fruit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>{val}</span>
            <div
              style={{
                width: '36px',
                height: `${(val / 30) * 110}px`,
                backgroundColor: colors[fruit],
                borderRadius: '8px 8px 0 0',
                transition: 'height 0.3s ease',
                boxShadow: `0 0 10px ${colors[fruit]}40`
              }}
            />
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)' }}>{fruit}</span>
          </div>
        ))}
      </div>

      {/* Adjust Controls */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: '100%', maxWidth: '360px' }}>
        {Object.entries(data).map(([fruit, val]) => (
          <div key={fruit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>{fruit}:</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button onClick={() => handleAdjust(fruit, -5)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: 'none', backgroundColor: 'var(--bg-card-solid)', fontWeight: '800', cursor: 'pointer' }}>-</button>
              <button onClick={() => handleAdjust(fruit, 5)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: 'none', backgroundColor: 'var(--bg-card-solid)', fontWeight: '800', cursor: 'pointer' }}>+</button>
            </div>
          </div>
        ))}
      </div>
    </CardRounded>
  );
};

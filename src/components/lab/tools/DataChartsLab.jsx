import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const DataChartsLab = ({ config = {} }) => {
  const [data, setData] = useState(config.values || [12, 18, 25, 30, 15]);

  const sum = data.reduce((a, b) => a + b, 0);
  const mean = (sum / data.length).toFixed(1);
  const sorted = [...data].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
        <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4338ca' }}>Mean Average</span>
          <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#3730a3' }}>{mean}</div>
        </div>
        <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#15803d' }}>Median</span>
          <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#166534' }}>{median}</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', minHeight: '200px', background: '#ffffff', border: '2px solid #cbd5e1', borderRadius: '16px', padding: '24px' }}>
        {data.map((val, idx) => (
          <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', marginBottom: '4px' }}>{val}</span>
            <div style={{ width: '100%', height: `${val * 4}px`, background: '#3b82f6', borderRadius: '6px' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: '700', marginTop: '6px' }}>Item {idx + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

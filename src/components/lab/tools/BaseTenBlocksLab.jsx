import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const BaseTenBlocksLab = ({ config = {} }) => {
  const [thousands, setThousands] = useState(config.thousands || 1);
  const [hundreds, setHundreds] = useState(config.hundreds || 3);
  const [tens, setTens] = useState(config.tens || 4);
  const [ones, setOnes] = useState(config.ones || 7);

  const total = thousands * 1000 + hundreds * 100 + tens * 10 + ones;

  const bundleTens = () => {
    if (ones >= 10) {
      setOnes(ones - 10);
      setTens(tens + 1);
    }
  };

  const bundleHundreds = () => {
    if (tens >= 10) {
      setTens(tens - 10);
      setHundreds(hundreds + 1);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: '800', color: '#e11d48' }}>Thousands (Th): {thousands}</label>
          <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
            <button onClick={() => setThousands(Math.max(0, thousands - 1))} style={{ flex: 1, padding: '4px', fontWeight: '800' }}>-</button>
            <button onClick={() => setThousands(thousands + 1)} style={{ flex: 1, padding: '4px', fontWeight: '800' }}>+</button>
          </div>
        </div>

        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: '800', color: '#0284c7' }}>Hundreds (H): {hundreds}</label>
          <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
            <button onClick={() => setHundreds(Math.max(0, hundreds - 1))} style={{ flex: 1, padding: '4px', fontWeight: '800' }}>-</button>
            <button onClick={() => setHundreds(hundreds + 1)} style={{ flex: 1, padding: '4px', fontWeight: '800' }}>+</button>
          </div>
        </div>

        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: '800', color: '#16a34a' }}>Tens (T): {tens}</label>
          <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
            <button onClick={() => setTens(Math.max(0, tens - 1))} style={{ flex: 1, padding: '4px', fontWeight: '800' }}>-</button>
            <button onClick={() => setTens(tens + 1)} style={{ flex: 1, padding: '4px', fontWeight: '800' }}>+</button>
          </div>
        </div>

        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: '800', color: '#ea580c' }}>Ones (O): {ones}</label>
          <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
            <button onClick={() => setOnes(Math.max(0, ones - 1))} style={{ flex: 1, padding: '4px', fontWeight: '800' }}>-</button>
            <button onClick={() => setOnes(ones + 1)} style={{ flex: 1, padding: '4px', fontWeight: '800' }}>+</button>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        {ones >= 10 && (
          <Button3D onClick={bundleTens} variant="primary" size="sm">
            ✨ Bundle 10 Ones into 1 Ten-Rod
          </Button3D>
        )}
        {tens >= 10 && (
          <Button3D onClick={bundleHundreds} variant="primary" size="sm">
            ✨ Bundle 10 Tens into 1 Hundred-Flat
          </Button3D>
        )}
      </div>

      <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#3730a3' }}>
          {total.toLocaleString()}
        </div>
        <div style={{ fontSize: '0.95rem', color: '#4f46e5', fontWeight: '700', marginTop: '4px' }}>
          Expanded Form: {thousands * 1000} + {hundreds * 100} + {tens * 10} + {ones} = {total}
        </div>
      </div>
    </div>
  );
};

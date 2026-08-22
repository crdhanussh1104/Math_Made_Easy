import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const EquationBalanceLab = ({ config = {} }) => {
  const [xVal, setXVal] = useState(5);
  const [leftX, setLeftX] = useState(2);
  const [leftUnits, setLeftUnits] = useState(4);
  const [rightUnits, setRightUnits] = useState(14);

  const leftTotal = leftX * xVal + leftUnits;
  const rightTotal = rightUnits;
  const isBalanced = leftTotal === rightTotal;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#3730a3' }}>
          {leftX}x + {leftUnits} = {rightUnits}
        </div>
        <div style={{ fontSize: '0.9rem', color: '#4f46e5', fontWeight: '700', marginTop: '4px' }}>
          Subtract {leftUnits} from both sides ⟶ {leftX}x = {rightUnits - leftUnits} ⟶ x = {(rightUnits - leftUnits) / leftX}
        </div>
      </div>

      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>
          Adjust Variable Value (x): <strong>{xVal}</strong>
        </label>
        <input type="range" min="1" max="10" value={xVal} onChange={(e) => setXVal(parseInt(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
      </div>

      <div style={{ background: isBalanced ? '#f0fdf4' : '#fffbeb', border: `1.5px solid ${isBalanced ? '#bbf7d0' : '#fde68a'}`, borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: '900', color: isBalanced ? '#166534' : '#b45309' }}>
          {isBalanced ? `✨ Balanced! Equation holds true when x = ${xVal}` : `Left (${leftTotal}) ≠ Right (${rightTotal})`}
        </div>
      </div>
    </div>
  );
};

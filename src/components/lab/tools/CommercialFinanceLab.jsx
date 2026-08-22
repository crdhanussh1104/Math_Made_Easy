import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';

export const CommercialFinanceLab = ({ config = {} }) => {
  const [price, setPrice] = useState(5000);
  const [rate, setRate] = useState(18);

  const gstAmount = (price * rate) / 100;
  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;
  const totalBill = price + gstAmount;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>Base Price: Rs {price}</label>
          <input type="range" min="500" max="20000" step="500" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
        </div>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>GST Slab: {rate}%</label>
          <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
            {[5, 12, 18, 28].map(r => (
              <button key={r} onClick={() => setRate(r)} style={{ flex: 1, padding: '4px', background: rate === r ? '#4f46e5' : '#e2e8f0', color: rate === r ? '#ffffff' : '#475569', fontWeight: '800', borderRadius: '6px', border: 'none' }}>{r}%</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
        <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4338ca' }}>CGST ({rate/2}%)</span>
          <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#3730a3' }}>Rs {cgst.toFixed(2)}</div>
        </div>
        <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#15803d' }}>SGST ({rate/2}%)</span>
          <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#166534' }}>Rs {sgst.toFixed(2)}</div>
        </div>
        <div style={{ background: '#fff7ed', border: '1.5px solid #fed7aa', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#c2410c' }}>Total Invoice</span>
          <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#9a3412' }}>Rs {totalBill.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

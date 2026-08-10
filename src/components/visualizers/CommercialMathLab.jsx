import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { DollarSign, Percent, TrendingUp, BookOpen, Calculator } from 'lucide-react';

export const CommercialMathLab = () => {
  const [calcType, setCalcType] = useState('interest'); // interest, gst, emi

  // Interest state
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(5);

  // Interest Calculations
  const simpleInterest = (principal * rate * years) / 100;
  const simpleAmount = principal + simpleInterest;

  const compoundAmount = principal * Math.pow(1 + rate / 100, years);
  const compoundInterest = compoundAmount - principal;

  // GST State
  const [amount, setAmount] = useState(1000);
  const [gstRate, setGstRate] = useState(18);

  const gstAmount = (amount * gstRate) / 100;
  const totalAmount = amount + gstAmount;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      
      {/* Concept Tutorial */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <BookOpen size={24} color="#10b981" />
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-main)' }}>
            📖 Commercial Mathematics & Interest Growth (Explained From Scratch)
          </h3>
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
          Commercial Math studies real-world financial transactions. <strong>Simple Interest (SI)</strong> grows linearly on the initial principal, while <strong>Compound Interest (CI)</strong> earns "interest on interest", growing exponentially over time!
        </p>
      </div>

      {/* Mode Switcher */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          onClick={() => { setCalcType('interest'); soundFx.playClick(); }}
          style={{
            padding: '8px 18px', borderRadius: 'var(--radius-full)', border: 'none',
            backgroundColor: calcType === 'interest' ? '#10b981' : 'var(--bg-main)',
            color: calcType === 'interest' ? '#fff' : 'var(--text-muted)',
            fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
          }}
        >
          💰 Interest Growth Simulator
        </button>

        <button
          onClick={() => { setCalcType('gst'); soundFx.playClick(); }}
          style={{
            padding: '8px 18px', borderRadius: 'var(--radius-full)', border: 'none',
            backgroundColor: calcType === 'gst' ? 'var(--primary)' : 'var(--bg-main)',
            color: calcType === 'gst' ? '#fff' : 'var(--text-muted)',
            fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
          }}
        >
          🏷️ GST Tax Calculator
        </button>
      </div>

      {/* 1. INTEREST GROWTH SIMULATOR */}
      {calcType === 'interest' && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          
          <div style={{ backgroundColor: 'var(--bg-main)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1.5px solid #10b981', display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '340px' }}>
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: '800' }}>Principal Amount (P): ₹{principal.toLocaleString()}</label>
              <input type="range" min="1000" max="100000" step="1000" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} style={{ width: '100%', accentColor: '#10b981' }} />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: '800' }}>Annual Interest Rate (R): {rate}%</label>
              <input type="range" min="1" max="25" value={rate} onChange={(e) => setRate(Number(e.target.value))} style={{ width: '100%', accentColor: '#10b981' }} />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: '800' }}>Time Period (T): {years} Years</label>
              <input type="range" min="1" max="30" value={years} onChange={(e) => setYears(Number(e.target.value))} style={{ width: '100%', accentColor: '#10b981' }} />
            </div>
          </div>

          {/* Results Comparison Box */}
          <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '380px' }}>
            <div style={{ backgroundColor: '#eff6ff', padding: '16px', borderRadius: 'var(--radius-md)', border: '1.5px solid #3b82f6' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#1d4ed8' }}>SIMPLE INTEREST (Linear Growth)</span>
              <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: '#1d4ed8', marginTop: '2px' }}>
                Interest: ₹{simpleInterest.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1e40af', marginTop: '2px' }}>
                Total Amount: ₹{simpleAmount.toLocaleString()}
              </div>
            </div>

            <div style={{ backgroundColor: '#f0fdf4', padding: '16px', borderRadius: 'var(--radius-md)', border: '1.5px solid #22c55e' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#15803d' }}>COMPOUND INTEREST (Exponential Growth)</span>
              <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: '#15803d', marginTop: '2px' }}>
                Interest: ₹{Math.round(compoundInterest).toLocaleString()}
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#166534', marginTop: '2px' }}>
                Total Amount: ₹{Math.round(compoundAmount).toLocaleString()}
              </div>
            </div>
          </div>

        </div>
      )}

      {/* 2. GST TAX CALCULATOR */}
      {calcType === 'gst' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', backgroundColor: 'var(--bg-main)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--primary)' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', display: 'block', marginBottom: '4px' }}>Base Amount (₹):</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value) || 0)}
                style={{ padding: '10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '800', width: '140px' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', display: 'block', marginBottom: '4px' }}>GST Tax Rate:</label>
              <select value={gstRate} onChange={(e) => setGstRate(Number(e.target.value))} style={{ padding: '10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '800' }}>
                <option value={5}>5% (Essential Goods)</option>
                <option value={12}>12% (Standard)</option>
                <option value={18}>18% (Services/Electronics)</option>
                <option value={28}>28% (Luxury Goods)</option>
              </select>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--primary-light)', padding: '16px 24px', borderRadius: 'var(--radius-md)', border: '2px solid var(--primary)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)' }}>Total Price Including GST:</span>
            <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: 'var(--primary)', marginTop: '4px' }}>
              Base ₹{amount} + GST ₹{gstAmount.toFixed(2)} = ₹{totalAmount.toFixed(2)}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { PieChart, Layers, RefreshCw, BookOpen, Plus, Minus } from 'lucide-react';

export const FractionPizza = () => {
  const [viewMode, setViewMode] = useState('pizza'); // pizza, wall, converter
  const [numerator, setNumerator] = useState(3);
  const [denominator, setDenominator] = useState(4);

  const handleNumeratorChange = (delta) => {
    soundFx.playClick();
    setNumerator(prev => Math.max(0, Math.min(denominator, prev + delta)));
  };

  const handleDenominatorChange = (delta) => {
    soundFx.playClick();
    const newDenom = Math.max(1, Math.min(12, denominator + delta));
    setDenominator(newDenom);
    if (numerator > newDenom) setNumerator(newDenom);
  };

  const decimalVal = (numerator / denominator).toFixed(2);
  const percentageVal = ((numerator / denominator) * 100).toFixed(0);

  // SVG Pizza Slices Calculations
  const radius = 100;
  const center = 110;
  const slices = [];

  for (let i = 0; i < denominator; i++) {
    const startAngle = (i * 360) / denominator - 90;
    const endAngle = ((i + 1) * 360) / denominator - 90;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = center + radius * Math.cos(startRad);
    const y1 = center + radius * Math.sin(startRad);
    const x2 = center + radius * Math.cos(endRad);
    const y2 = center + radius * Math.sin(endRad);

    const largeArc = 360 / denominator > 180 ? 1 : 0;
    const d = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

    const isShaded = i < numerator;
    slices.push({ id: i, d, isShaded });
  }

  // Fraction Wall strips
  const wallDenominators = [1, 2, 3, 4, 5, 6, 8, 10, 12];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      
      {/* 1. Concept Tutorial From Scratch */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <BookOpen size={24} color="var(--purple)" />
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-main)' }}>
            📖 What is a Fraction? (Concept Explained From Scratch)
          </h3>
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
          A <strong>Fraction</strong> represents an equal part of a whole quantity!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '12px' }}>
          <div style={{ backgroundColor: '#fdf4ff', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #c084fc' }}>
            <strong style={{ color: '#7e22ce' }}>1. Numerator (Top Number)</strong>
            <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>Tells how many equal parts you <strong>have or shaded</strong> (e.g. {numerator} slices).</div>
          </div>

          <div style={{ backgroundColor: '#eff6ff', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #3b82f6' }}>
            <strong style={{ color: '#1d4ed8' }}>2. Denominator (Bottom Number)</strong>
            <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>Tells the total number of equal parts in <strong>one whole pizza</strong> (e.g. {denominator} slices).</div>
          </div>
        </div>
      </div>

      {/* Mode Switcher */}
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <button
          onClick={() => { setViewMode('pizza'); soundFx.playClick(); }}
          style={{
            padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
            backgroundColor: viewMode === 'pizza' ? 'var(--purple)' : 'var(--bg-main)',
            color: viewMode === 'pizza' ? '#fff' : 'var(--text-muted)',
            fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
          }}
        >
          🍕 Interactive Pizza Slicer
        </button>

        <button
          onClick={() => { setViewMode('wall'); soundFx.playClick(); }}
          style={{
            padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
            backgroundColor: viewMode === 'wall' ? 'var(--primary)' : 'var(--bg-main)',
            color: viewMode === 'wall' ? '#fff' : 'var(--text-muted)',
            fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
          }}
        >
          🧱 Fraction Wall & Equivalents
        </button>
      </div>

      {/* 2. Interactive Pizza & Pie Slicer */}
      {viewMode === 'pizza' && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          
          <div style={{
            backgroundColor: '#0f172a', borderRadius: 'var(--radius-md)', padding: '20px',
            boxShadow: 'var(--shadow-md)', border: '3px solid var(--purple)', display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}>
            <svg width="220" height="220" style={{ overflow: 'visible' }}>
              {slices.map(slice => (
                <path
                  key={slice.id}
                  d={slice.d}
                  fill={slice.isShaded ? '#ff9600' : 'rgba(255,255,255,0.15)'}
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  style={{ transition: 'fill 0.2s ease', cursor: 'pointer' }}
                  onClick={() => handleNumeratorChange(slice.isShaded ? -1 : 1)}
                />
              ))}
            </svg>
          </div>

          {/* Controls & Fraction To Decimal / Percent Conversion */}
          <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '380px' }}>
            
            <div style={{ backgroundColor: 'var(--purple-light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '2px solid var(--purple)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--purple)' }}>CURRENT FRACTION:</span>
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: 'var(--purple)', marginTop: '2px' }}>
                {numerator} / {denominator}
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-main)', marginTop: '4px' }}>
                Decimal: {decimalVal} | Percentage: {percentageVal}%
              </div>
            </div>

            {/* Numerator & Denominator Controls */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <div style={{ backgroundColor: 'var(--bg-main)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '800', display: 'block', marginBottom: '6px' }}>NUMERATOR (Shaded)</span>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Button3D variant="outline" size="sm" onClick={() => handleNumeratorChange(-1)} disabled={numerator <= 0}>-</Button3D>
                  <span style={{ fontSize: '1.2rem', fontWeight: '800', width: '24px' }}>{numerator}</span>
                  <Button3D variant="purple" size="sm" onClick={() => handleNumeratorChange(1)} disabled={numerator >= denominator}>+</Button3D>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-main)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '800', display: 'block', marginBottom: '6px' }}>DENOMINATOR (Total)</span>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Button3D variant="outline" size="sm" onClick={() => handleDenominatorChange(-1)} disabled={denominator <= 1}>-</Button3D>
                  <span style={{ fontSize: '1.2rem', fontWeight: '800', width: '24px' }}>{denominator}</span>
                  <Button3D variant="primary" size="sm" onClick={() => handleDenominatorChange(1)} disabled={denominator >= 12}>+</Button3D>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* 3. Fraction Wall Strip Tower */}
      {viewMode === 'wall' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-muted)', marginBottom: '8px' }}>
            🧱 Fraction Wall: Compare fraction block sizes side-by-side!
          </div>

          {wallDenominators.map((dVal) => (
            <div key={dVal} style={{ display: 'flex', width: '100%', height: '32px', border: '1px solid #cbd5e1', borderRadius: '4px', overflow: 'hidden' }}>
              {Array.from({ length: dVal }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    backgroundColor: dVal === 1 ? '#58cc02' : dVal === 2 ? '#1cb0f6' : dVal === 4 ? '#ff9600' : '#ce82ff',
                    opacity: (i + 1) <= Math.round((numerator / denominator) * dVal) ? 0.9 : 0.2,
                    borderRight: i < dVal - 1 ? '1px solid #fff' : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: '800', fontSize: '0.78rem'
                  }}
                >
                  1/{dVal}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

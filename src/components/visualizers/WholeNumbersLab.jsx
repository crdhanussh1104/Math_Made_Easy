import React, { useState, useRef } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { BookOpen, Hash, Layers, Move, Sparkles, Plus, Minus } from 'lucide-react';

export const WholeNumbersLab = () => {
  const [activeTab, setActiveTab] = useState('base10'); // base10, numberline, placevalue
  const [numberVal, setNumberVal] = useState(466);

  const isDraggingRef = useRef(false);
  const svgRef = useRef(null);

  // Number Properties
  const isEven = numberVal % 2 === 0;
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const primeStatus = isPrime(numberVal);

  // Base 10 Decomposition
  const hundreds = Math.floor(numberVal / 100);
  const tens = Math.floor((numberVal % 100) / 10);
  const ones = numberVal % 10;

  // Formatting Systems
  const indianFormatted = new Intl.NumberFormat('en-IN').format(numberVal);
  const internationalFormatted = new Intl.NumberFormat('en-US').format(numberVal);

  const handleAdjustVal = (delta) => {
    soundFx.playClick();
    setNumberVal(prev => Math.max(0, Math.min(999999, prev + delta)));
  };

  // Dynamic Number Line Range (Centers around numberVal)
  const rangeStart = Math.max(0, Math.floor(numberVal / 100) * 100);
  const rangeEnd = rangeStart + 100;
  const step = 10;
  const numTicks = 11;

  // Direct Mouse/Touch Interaction on Number Line
  const updateNumberLineFromClick = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    if (clientX === undefined) return;

    const relX = Math.max(0, Math.min(460, clientX - rect.left - 20));
    const calculatedVal = Math.round(rangeStart + (relX / 460) * 100);
    setNumberVal(calculatedVal);
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    updateNumberLineFromClick(e);
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      updateNumberLineFromClick(e);
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      
      {/* 1. In-Depth Concept Tutorial From Scratch */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <BookOpen size={24} color="var(--primary)" />
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-main)' }}>
            📖 Whole Numbers & Place Value System (Explained From Scratch)
          </h3>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
          <strong>Whole Numbers</strong> are the set of natural counting numbers along with zero: <strong>0, 1, 2, 3, 4, 5...</strong> (No fractions or decimals).
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '12px' }}>
          <div style={{ backgroundColor: '#f0fdf4', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #22c55e' }}>
            <strong style={{ color: '#15803d' }}>1. Predecessor (N - 1)</strong>
            <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>The number that comes immediately before {numberVal} is <strong>{numberVal - 1}</strong>.</div>
          </div>

          <div style={{ backgroundColor: '#eff6ff', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #3b82f6' }}>
            <strong style={{ color: '#1d4ed8' }}>2. Successor (N + 1)</strong>
            <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>The number that comes immediately after {numberVal} is <strong>{numberVal + 1}</strong>.</div>
          </div>
        </div>
      </div>

      {/* Mode Switcher */}
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { id: 'base10', label: '🧊 Base-10 Place Value Blocks', icon: Layers },
          { id: 'numberline', label: '📏 Interactive Number Line', icon: Move },
          { id: 'placevalue', label: '📊 Indian vs International Chart', icon: Hash }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); soundFx.playClick(); }}
            style={{
              padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
              backgroundColor: activeTab === tab.id ? 'var(--primary)' : 'var(--bg-main)',
              color: activeTab === tab.id ? '#fff' : 'var(--text-muted)',
              fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Interactive Viewport */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
        
        {/* Number Input & Controls */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', backgroundColor: 'var(--bg-main)', padding: '16px 24px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--primary)' }}>
          <Button3D variant="outline" size="sm" onClick={() => handleAdjustVal(-10)}>-10</Button3D>
          <Button3D variant="outline" size="sm" onClick={() => handleAdjustVal(-1)}>-1</Button3D>

          <input
            type="number"
            value={numberVal}
            onChange={(e) => setNumberVal(Math.max(0, Number(e.target.value) || 0))}
            style={{
              padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '2px solid var(--primary)',
              fontWeight: '800', fontSize: '1.6rem', fontFamily: 'var(--font-rounded)', textAlign: 'center',
              width: '140px', outline: 'none', color: 'var(--primary)', backgroundColor: '#ffffff'
            }}
          />

          <Button3D variant="primary" size="sm" onClick={() => handleAdjustVal(1)}>+1</Button3D>
          <Button3D variant="primary" size="sm" onClick={() => handleAdjustVal(10)}>+10</Button3D>
        </div>

        {/* Property Badge Chips */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <BadgeChip label={isEven ? 'Even Number' : 'Odd Number'} color={isEven ? '#3b82f6' : '#f97316'} bg="var(--bg-main)" size="md" />
          <BadgeChip label={primeStatus ? 'Prime Number' : 'Composite Number'} color={primeStatus ? '#22c55e' : '#a855f7'} bg="var(--bg-main)" size="md" />
        </div>

        {/* 1. BASE-10 PLACE VALUE BLOCKS VIEW */}
        {activeTab === 'base10' && (
          <div style={{
            backgroundColor: '#0f172a', borderRadius: 'var(--radius-md)', padding: '24px',
            boxShadow: 'var(--shadow-md)', border: '3px solid var(--primary)', width: '100%', maxWidth: '650px'
          }}>
            <div style={{ textAlign: 'center', color: '#00f0ff', fontSize: '0.88rem', fontWeight: '800', marginBottom: '16px' }}>
              Decomposition: {numberVal} = ({hundreds} × 100) + ({tens} × 10) + ({ones} × 1)
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', color: '#fff' }}>
              {/* Hundreds Flats */}
              <div style={{ backgroundColor: '#1e293b', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid #3b82f6', textAlign: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#3b82f6' }}>HUNDREDS FLATS ({hundreds})</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'center', marginTop: '10px', minHeight: '60px' }}>
                  {Array.from({ length: Math.min(9, hundreds) }).map((_, i) => (
                    <div key={i} style={{ width: '40px', height: '40px', backgroundColor: '#3b82f6', borderRadius: '4px', border: '1px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: '800' }}>
                      100
                    </div>
                  ))}
                </div>
              </div>

              {/* Tens Rods */}
              <div style={{ backgroundColor: '#1e293b', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid #f97316', textAlign: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#f97316' }}>TENS RODS ({tens})</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'center', marginTop: '10px', minHeight: '60px' }}>
                  {Array.from({ length: tens }).map((_, i) => (
                    <div key={i} style={{ width: '12px', height: '45px', backgroundColor: '#f97316', borderRadius: '3px', border: '1px solid #fff' }} />
                  ))}
                </div>
              </div>

              {/* Ones Unit Cubes */}
              <div style={{ backgroundColor: '#1e293b', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid #22c55e', textAlign: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#22c55e' }}>ONES CUBES ({ones})</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'center', marginTop: '10px', minHeight: '60px' }}>
                  {Array.from({ length: ones }).map((_, i) => (
                    <div key={i} style={{ width: '12px', height: '12px', backgroundColor: '#22c55e', borderRadius: '2px', border: '1px solid #fff' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. INTERACTIVE DYNAMIC NUMBER LINE VIEW */}
        {activeTab === 'numberline' && (
          <div style={{
            backgroundColor: '#0f172a', borderRadius: 'var(--radius-md)', padding: '24px',
            boxShadow: 'var(--shadow-md)', border: '3px solid var(--primary)', width: '100%', maxWidth: '650px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none'
          }}>
            <div style={{ color: '#58cc02', fontSize: '0.88rem', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Move size={16} /> Click or Drag Marker Directly On Number Line Track! ({rangeStart} to {rangeEnd}):
            </div>

            {/* SVG Interactive Dynamic Number Line */}
            <svg
              ref={svgRef}
              width="500"
              height="80"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
              style={{ overflow: 'visible', cursor: 'pointer' }}
            >
              {/* Main Track Line */}
              <line x1="20" y1="40" x2="480" y2="40" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
              
              {/* Dynamic Ticks */}
              {Array.from({ length: numTicks }).map((_, i) => {
                const x = 20 + i * 46;
                const val = rangeStart + i * step;
                return (
                  <g key={i}>
                    <line x1={x} y1="30" x2={x} y2="50" stroke="#94a3b8" strokeWidth="2.5" />
                    <text x={x} y={70} fill="#94a3b8" fontSize="12" fontWeight="800" textAnchor="middle">{val}</text>
                  </g>
                );
              })}

              {/* DRAGGABLE Marker Circle */}
              <g style={{ cursor: 'pointer' }}>
                <circle
                  cx={20 + Math.max(0, Math.min(1, (numberVal - rangeStart) / 100)) * 460}
                  cy="40"
                  r="12"
                  fill="#ff9600"
                  stroke="#ffffff"
                  strokeWidth="3.5"
                  style={{ filter: 'drop-shadow(0 0 6px #ff9600)' }}
                />
                <circle
                  cx={20 + Math.max(0, Math.min(1, (numberVal - rangeStart) / 100)) * 460}
                  cy="40"
                  r="4"
                  fill="#ffffff"
                />
                <text
                  x={20 + Math.max(0, Math.min(1, (numberVal - rangeStart) / 100)) * 460}
                  y="18"
                  fill="#ff9600"
                  fontSize="15"
                  fontWeight="800"
                  textAnchor="middle"
                >
                  {numberVal}
                </text>
              </g>
            </svg>
          </div>
        )}

        {/* 3. INDIAN VS INTERNATIONAL NUMBER SYSTEM TABLE */}
        {activeTab === 'placevalue' && (
          <div style={{ width: '100%', maxWidth: '650px', backgroundColor: 'var(--bg-main)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--primary)' }}>
            <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '12px' }}>
              Formatting Comparison Systems:
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ backgroundColor: '#eff6ff', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1.5px solid #3b82f6' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#1d4ed8' }}>INDIAN SYSTEM (Lakhs / Crores):</span>
                <div style={{ fontSize: '1.6rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: '#1d4ed8', marginTop: '4px' }}>
                  {indianFormatted}
                </div>
              </div>

              <div style={{ backgroundColor: '#f0fdf4', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1.5px solid #22c55e' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#15803d' }}>INTERNATIONAL SYSTEM (Millions / Billions):</span>
                <div style={{ fontSize: '1.6rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: '#15803d', marginTop: '4px' }}>
                  {internationalFormatted}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

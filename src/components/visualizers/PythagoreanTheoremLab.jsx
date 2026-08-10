import React, { useState, useRef } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { BookOpen, Triangle, Sparkles, Move } from 'lucide-react';

export const PythagoreanTheoremLab = () => {
  // Triangle vertices (Right-angled at C(50, 220))
  // A = (50, 100), B = (210, 220), C = (50, 220)
  const [aLength, setALength] = useState(3); // vertical side a = 3 units (60px)
  const [bLength, setBLength] = useState(4); // horizontal side b = 4 units (80px)

  const isDraggingRef = useRef(false);
  const svgRef = useRef(null);

  // Math Calculations
  const cLength = Math.sqrt(aLength * aLength + bLength * bLength).toFixed(2);
  const aSquare = aLength * aLength;
  const bSquare = bLength * bLength;
  const cSquare = Math.round(aSquare + bSquare);

  // SVG Canvas Scale & Coordinates
  const scale = 22; // 22px per grid unit
  const originX = 140;
  const originY = 220;

  const ax = originX;
  const ay = originY - aLength * scale;
  const bx = originX + bLength * scale;
  const by = originY;

  // Direct Mouse / Touch Dragging of Triangle Vertex B on the Canvas
  const updateTriangleFromDrag = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    if (clientX === undefined || clientY === undefined) return;

    const mathB = Math.max(1, Math.min(8, Math.round((clientX - rect.left - originX) / scale)));
    const mathA = Math.max(1, Math.min(8, Math.round((originY - (clientY - rect.top)) / scale)));

    if (mathA > 0) setALength(mathA);
    if (mathB > 0) setBLength(mathB);
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    updateTriangleFromDrag(e);
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      updateTriangleFromDrag(e);
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Pythagorean Triples table
  const triples = [
    { a: 3, b: 4, c: 5 },
    { a: 5, b: 12, c: 13 },
    { a: 6, b: 8, c: 10 },
    { a: 8, b: 15, c: 17 },
    { a: 7, b: 24, c: 25 }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      
      {/* 1. Deep Concept Tutorial From Scratch */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <BookOpen size={24} color="var(--primary)" />
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-main)' }}>
            📖 Pythagorean Theorem & Distance Formula (Concept Explained From Scratch)
          </h3>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
          Discovered by the ancient Greek mathematician <strong>Pythagoras</strong> over 2,500 years ago, the <strong>Pythagorean Theorem</strong> states that in ANY right-angled triangle:
        </p>

        <div style={{ backgroundColor: 'var(--primary-light)', padding: '14px 20px', borderRadius: 'var(--radius-sm)', border: '2px solid var(--primary)', marginTop: '12px', textAlign: 'center' }}>
          <span style={{ fontSize: '1.3rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: 'var(--primary)' }}>
            a² + b² = c²
          </span>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            (The sum of the areas of the two squares on the legs equals the area of the square on the hypotenuse!)
          </div>
        </div>
      </div>

      {/* 2. Direct Drag-Point Interactive Canvas Viewport */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        
        {/* SVG Viewport with Direct Point Dragging */}
        <div style={{
          backgroundColor: '#0f172a', borderRadius: 'var(--radius-md)', padding: '20px',
          boxShadow: 'var(--shadow-md)', border: '3px solid var(--primary)', display: 'flex', flexDirection: 'column', alignItems: 'center',
          userSelect: 'none'
        }}>
          <div style={{ color: '#58cc02', fontSize: '0.82rem', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Move size={16} /> Click & Drag Right Triangle Vertices Directly On Canvas!
          </div>

          <svg
            ref={svgRef}
            width="340"
            height="300"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
            style={{ overflow: 'visible', cursor: 'crosshair' }}
          >
            {/* Right Triangle Shape */}
            <polygon
              points={`${originX},${originY} ${ax},${ay} ${bx},${by}`}
              fill="rgba(88, 204, 2, 0.25)"
              stroke="#58cc02"
              strokeWidth="4"
            />

            {/* Side A Square (Left Side - Blue) */}
            <rect
              x={originX - aLength * scale}
              y={ay}
              width={aLength * scale}
              height={aLength * scale}
              fill="rgba(59, 130, 246, 0.2)"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <text x={originX - (aLength * scale) / 2} y={ay + (aLength * scale) / 2} fill="#3b82f6" fontSize="12" fontWeight="800" textAnchor="middle">
              a² = {aSquare}
            </text>

            {/* Side B Square (Bottom Side - Orange) */}
            <rect
              x={originX}
              y={originY}
              width={bLength * scale}
              height={bLength * scale}
              fill="rgba(249, 115, 22, 0.2)"
              stroke="#f97316"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <text x={originX + (bLength * scale) / 2} y={originY + (bLength * scale) / 2 + 14} fill="#f97316" fontSize="12" fontWeight="800" textAnchor="middle">
              b² = {bSquare}
            </text>

            {/* Right Angle Corner Square */}
            <rect x={originX} y={originY - 14} width="14" height="14" fill="none" stroke="#fff" strokeWidth="2" />

            {/* DRAGGABLE VERTICES */}
            {/* Vertex A (Top) */}
            <g style={{ cursor: 'pointer' }}>
              <circle cx={ax} cy={ay} r="9" fill="#3b82f6" stroke="#fff" strokeWidth="2.5" />
              <text x={ax - 18} y={ay - 6} fill="#3b82f6" fontSize="13" fontWeight="800">A (a={aLength})</text>
            </g>

            {/* Vertex B (Right) */}
            <g style={{ cursor: 'pointer' }}>
              <circle cx={bx} cy={by} r="9" fill="#f97316" stroke="#fff" strokeWidth="2.5" />
              <text x={bx + 10} y={by + 16} fill="#f97316" fontSize="13" fontWeight="800">B (b={bLength})</text>
            </g>

            {/* Hypotenuse Label c */}
            <text x={(ax + bx) / 2 + 10} y={(ay + by) / 2 - 10} fill="#58cc02" fontSize="14" fontWeight="800">
              c = {cLength}
            </text>
          </svg>
        </div>

        {/* Live Calculation Analysis Dashboard */}
        <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '380px' }}>
          
          <div style={{ backgroundColor: 'var(--bg-main)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase' }}>
              LIVE PROOF CALCULATION:
            </div>
            <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: 'var(--text-main)', marginTop: '6px' }}>
              a² + b² = {aSquare} + {bSquare} = <span style={{ color: 'var(--primary)' }}>{cSquare}</span>
            </div>
            <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: 'var(--primary)', marginTop: '4px' }}>
              c = √({cSquare}) = {cLength} units
            </div>
          </div>

          {/* Quick Sliders */}
          <div style={{ backgroundColor: 'var(--bg-main)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: '800' }}>Side a (Vertical): {aLength} units</label>
              <input type="range" min="1" max="8" value={aLength} onChange={(e) => setALength(Number(e.target.value))} style={{ width: '100%', accentColor: '#3b82f6' }} />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: '800' }}>Side b (Horizontal): {bLength} units</label>
              <input type="range" min="1" max="8" value={bLength} onChange={(e) => setBLength(Number(e.target.value))} style={{ width: '100%', accentColor: '#f97316' }} />
            </div>
          </div>

        </div>

      </div>

      {/* 3. Famous Pythagorean Triples Table */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--primary)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <Sparkles size={22} color="var(--primary)" />
          <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)' }}>
            ✨ Famous Pythagorean Triples Cheat Sheet
          </h4>
        </div>

        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
          A <strong>Pythagorean Triple</strong> consists of 3 positive integers (a, b, c) that perfectly satisfy a² + b² = c²!
        </p>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {triples.map((t, idx) => (
            <button
              key={idx}
              onClick={() => { setALength(t.a); setBLength(t.b); soundFx.playClick(); }}
              style={{
                padding: '10px 16px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--primary)',
                backgroundColor: 'var(--bg-card-solid)', color: 'var(--primary)', fontWeight: '800',
                cursor: 'pointer', fontFamily: 'var(--font-rounded)'
              }}
            >
              ({t.a}, {t.b}, {t.c}) ➔ c² = {t.c * t.c}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

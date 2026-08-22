import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';
import { Box, Droplets, RotateCw, Sparkles, Layers } from 'lucide-react';

export const MensurationLab = ({ config = {} }) => {
  const [shape, setShape] = useState(config.shapeType || 'cylinder'); // cylinder, cone, cube, cuboid, trapezium
  const [radius, setRadius] = useState(config.radius || 5);
  const [height, setHeight] = useState(config.height || 10);
  const [length, setLength] = useState(6);
  const [breadth, setBreadth] = useState(4);
  const [fillWater, setFillWater] = useState(true);

  // Exact Mathematical Calculations
  const cylinderBaseArea = Math.PI * radius * radius;
  const cylinderVolume = cylinderBaseArea * height;
  const cylinderCSA = 2 * Math.PI * radius * height;
  const cylinderTSA = 2 * Math.PI * radius * (radius + height);

  const coneVolume = (1 / 3) * Math.PI * radius * radius * height;
  const cuboidVolume = length * breadth * height;
  const cuboidTSA = 2 * (length * breadth + breadth * height + length * height);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Shape Selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {[
          { id: 'cylinder', label: '🛢️ Cylinder (Class 8)' },
          { id: 'cuboid', label: '📦 Cube / Cuboid' },
          { id: 'cone', label: '🍦 Cone' }
        ].map(s => (
          <button
            key={s.id}
            onClick={() => setShape(s.id)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              background: shape === s.id ? '#4f46e5' : '#f1f5f9',
              color: shape === s.id ? '#ffffff' : '#475569',
              fontWeight: '800',
              cursor: 'pointer'
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Sliders Control Panel */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        {shape === 'cylinder' || shape === 'cone' ? (
          <>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>
                <span>Radius (r):</span>
                <span><strong>{radius} cm</strong></span>
              </div>
              <input
                type="range"
                min="2"
                max="12"
                step="0.5"
                value={radius}
                onChange={(e) => setRadius(parseFloat(e.target.value))}
                style={{ width: '100%', marginTop: '6px' }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>
                <span>Height (h):</span>
                <span><strong>{height} cm</strong></span>
              </div>
              <input
                type="range"
                min="3"
                max="18"
                step="0.5"
                value={height}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
                style={{ width: '100%', marginTop: '6px' }}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>Length: {length} cm</label>
              <input type="range" min="2" max="12" value={length} onChange={(e) => setLength(parseInt(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>Breadth: {breadth} cm</label>
              <input type="range" min="2" max="12" value={breadth} onChange={(e) => setBreadth(parseInt(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>Height: {height} cm</label>
              <input type="range" min="2" max="12" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} style={{ width: '100%', marginTop: '6px' }} />
            </div>
          </>
        )}
      </div>

      {/* Real-Time Formula & Numerical Readout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
        <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4338ca', textTransform: 'uppercase' }}>
            Base Area (πr²)
          </span>
          <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#3730a3', marginTop: '2px' }}>
            {shape === 'cylinder' || shape === 'cone' ? `${cylinderBaseArea.toFixed(1)} cm²` : `${(length * breadth).toFixed(1)} cm²`}
          </div>
        </div>

        <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#15803d', textTransform: 'uppercase' }}>
            Total Volume (V)
          </span>
          <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#166534', marginTop: '2px' }}>
            {shape === 'cylinder' ? `${cylinderVolume.toFixed(1)} cm³` : shape === 'cone' ? `${coneVolume.toFixed(1)} cm³` : `${cuboidVolume.toFixed(1)} cm³`}
          </div>
        </div>

        <div style={{ background: '#fdf4ff', border: '1.5px solid #f5d0fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#86198f', textTransform: 'uppercase' }}>
            Curved Surface Area (CSA)
          </span>
          <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#701a75', marginTop: '2px' }}>
            {shape === 'cylinder' ? `${cylinderCSA.toFixed(1)} cm²` : shape === 'cuboid' ? `${cuboidTSA.toFixed(1)} cm²` : 'πrl'}
          </div>
        </div>
      </div>

      {/* 2D/3D SVG Solid Visualizer Canvas */}
      <div style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
        borderRadius: '16px',
        border: '2px solid #cbd5e1',
        minHeight: '280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        {shape === 'cylinder' && (
          <svg width="260" height="240" viewBox="0 0 260 240">
            {/* Cylinder Top Ellipse */}
            <ellipse cx="130" cy="40" rx={radius * 8} ry={radius * 2.8} fill="#93c5fd" stroke="#2563eb" strokeWidth="2.5" />
            
            {/* Cylinder Body */}
            <path
              d={`M ${130 - radius * 8} 40 L ${130 - radius * 8} ${40 + height * 8} A ${radius * 8} ${radius * 2.8} 0 0 0 ${130 + radius * 8} ${40 + height * 8} L ${130 + radius * 8} 40 Z`}
              fill="url(#cylinderGradient)"
              stroke="#2563eb"
              strokeWidth="2.5"
            />

            {/* Liquid Fill Level */}
            {fillWater && (
              <path
                d={`M ${130 - radius * 8} ${40 + height * 3} L ${130 - radius * 8} ${40 + height * 8} A ${radius * 8} ${radius * 2.8} 0 0 0 ${130 + radius * 8} ${40 + height * 8} L ${130 + radius * 8} ${40 + height * 3} Z`}
                fill="#38bdf8"
                opacity="0.6"
              />
            )}

            {/* Cylinder Bottom Ellipse (Front Arc) */}
            <ellipse cx="130" cy={40 + height * 8} rx={radius * 8} ry={radius * 2.8} fill="none" stroke="#2563eb" strokeWidth="2.5" />

            {/* Dimension Lines */}
            <line x1="130" y1="40" x2={130 + radius * 8} y2="40" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
            <text x={130 + radius * 3} y="34" fill="#dc2626" fontSize="12" fontWeight="800">r = {radius} cm</text>

            <line x1={145 + radius * 8} y1="40" x2={145 + radius * 8} y2={40 + height * 8} stroke="#16a34a" strokeWidth="2" />
            <text x={152 + radius * 8} y={40 + height * 4} fill="#16a34a" fontSize="12" fontWeight="800">h = {height} cm</text>

            <defs>
              <linearGradient id="cylinderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="50%" stopColor="#dbeafe" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {shape === 'cuboid' && (
          <svg width="260" height="240" viewBox="0 0 260 240">
            {/* 3D Isometric Cuboid */}
            <polygon points={`50,80 ${50 + length * 8},80 ${50 + length * 8 + breadth * 4},${80 - breadth * 3} ${50 + breadth * 4},${80 - breadth * 3}`} fill="#a7f3d0" stroke="#059669" strokeWidth="2" />
            <polygon points={`50,80 ${50 + length * 8},80 ${50 + length * 8},${80 + height * 8} 50,${80 + height * 8}`} fill="#6ee7b7" stroke="#059669" strokeWidth="2" />
            <polygon points={`${50 + length * 8},80 ${50 + length * 8 + breadth * 4},${80 - breadth * 3} ${50 + length * 8 + breadth * 4},${80 - breadth * 3 + height * 8} ${50 + length * 8},${80 + height * 8}`} fill="#34d399" stroke="#059669" strokeWidth="2" />
          </svg>
        )}

        {shape === 'cone' && (
          <svg width="260" height="240" viewBox="0 0 260 240">
            <ellipse cx="130" cy={40 + height * 8} rx={radius * 8} ry={radius * 2.8} fill="#fed7aa" stroke="#ea580c" strokeWidth="2.5" />
            <path d={`M ${130 - radius * 8} ${40 + height * 8} L 130 40 L ${130 + radius * 8} ${40 + height * 8} Z`} fill="#ffedd5" stroke="#ea580c" strokeWidth="2.5" />
          </svg>
        )}
      </div>
    </div>
  );
};

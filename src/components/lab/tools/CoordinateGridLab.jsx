import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';
import { Move, Target, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const CoordinateGridLab = ({ config = {} }) => {
  const [ptA, setPtA] = useState(config.pointA || { x: 1, y: 2 });
  const [ptB, setPtB] = useState(config.pointB || { x: 5, y: 5 });

  const dx = ptB.x - ptA.x;
  const dy = ptB.y - ptA.y;
  const distanceSquared = dx * dx + dy * dy;
  const distance = Math.sqrt(distanceSquared);
  const slope = dx !== 0 ? (dy / dx).toFixed(2) : 'Undefined (Vertical)';
  const midpoint = { x: ((ptA.x + ptB.x) / 2).toFixed(1), y: ((ptA.y + ptB.y) / 2).toFixed(1) };

  // Grid Coordinate conversion (origin at center 180, 180; scale = 20px per unit)
  const toSvgX = (x) => 180 + x * 20;
  const toSvgY = (y) => 180 - y * 20;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Point Position Inputs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#2563eb' }}>
            Point A: ({ptA.x}, {ptA.y})
          </label>
          <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
            <input type="number" min="-7" max="7" value={ptA.x} onChange={(e) => setPtA({ ...ptA, x: parseInt(e.target.value) || 0 })} style={{ width: '50%', padding: '6px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
            <input type="number" min="-7" max="7" value={ptA.y} onChange={(e) => setPtA({ ...ptA, y: parseInt(e.target.value) || 0 })} style={{ width: '50%', padding: '6px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
          </div>
        </div>

        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#dc2626' }}>
            Point B: ({ptB.x}, {ptB.y})
          </label>
          <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
            <input type="number" min="-7" max="7" value={ptB.x} onChange={(e) => setPtB({ ...ptB, x: parseInt(e.target.value) || 0 })} style={{ width: '50%', padding: '6px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
            <input type="number" min="-7" max="7" value={ptB.y} onChange={(e) => setPtB({ ...ptB, y: parseInt(e.target.value) || 0 })} style={{ width: '50%', padding: '6px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
          </div>
        </div>
      </div>

      {/* Real-Time Formula & Distance Readout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
        <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4338ca', textTransform: 'uppercase' }}>
            Distance d = √((Δx)² + (Δy)²)
          </span>
          <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#3730a3', marginTop: '2px' }}>
            {distance.toFixed(2)} units (√{distanceSquared})
          </div>
        </div>

        <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#15803d', textTransform: 'uppercase' }}>
            Slope m = Δy / Δx
          </span>
          <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#166534', marginTop: '2px' }}>
            m = {slope}
          </div>
        </div>

        <div style={{ background: '#fdf4ff', border: '1.5px solid #f5d0fe', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#86198f', textTransform: 'uppercase' }}>
            Midpoint M = ((x1+x2)/2, (y1+y2)/2)
          </span>
          <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#701a75', marginTop: '2px' }}>
            ({midpoint.x}, {midpoint.y})
          </div>
        </div>
      </div>

      {/* 4-Quadrant Cartesian SVG Grid */}
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: '2px solid #cbd5e1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflowX: 'auto'
      }}>
        <svg width="360" height="360" viewBox="0 0 360 360">
          {/* Grid lines */}
          {Array.from({ length: 17 }).map((_, idx) => (
            <React.Fragment key={idx}>
              <line x1={idx * 20 + 20} y1="0" x2={idx * 20 + 20} y2="360" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1={idx * 20 + 20} x2="360" y2={idx * 20 + 20} stroke="#f1f5f9" strokeWidth="1" />
            </React.Fragment>
          ))}

          {/* Axes */}
          <line x1="180" y1="0" x2="180" y2="360" stroke="#94a3b8" strokeWidth="2" />
          <line x1="0" y1="180" x2="360" y2="180" stroke="#94a3b8" strokeWidth="2" />

          {/* Right Triangle Construction */}
          <line x1={toSvgX(ptA.x)} y1={toSvgY(ptA.y)} x2={toSvgX(ptB.x)} y2={toSvgY(ptA.y)} stroke="#93c5fd" strokeWidth="2" strokeDasharray="3,3" />
          <line x1={toSvgX(ptB.x)} y1={toSvgY(ptA.y)} x2={toSvgX(ptB.x)} y2={toSvgY(ptB.y)} stroke="#fca5a5" strokeWidth="2" strokeDasharray="3,3" />

          {/* Hypotenuse Segment AB */}
          <line x1={toSvgX(ptA.x)} y1={toSvgY(ptA.y)} x2={toSvgX(ptB.x)} y2={toSvgY(ptB.y)} stroke="#4f46e5" strokeWidth="3" />

          {/* Point A */}
          <circle cx={toSvgX(ptA.x)} cy={toSvgY(ptA.y)} r="7" fill="#2563eb" />
          <text x={toSvgX(ptA.x) - 20} y={toSvgY(ptA.y) - 10} fill="#2563eb" fontSize="12" fontWeight="800">
            A({ptA.x}, {ptA.y})
          </text>

          {/* Point B */}
          <circle cx={toSvgX(ptB.x)} cy={toSvgY(ptB.y)} r="7" fill="#dc2626" />
          <text x={toSvgX(ptB.x) + 10} y={toSvgY(ptB.y) - 10} fill="#dc2626" fontSize="12" fontWeight="800">
            B({ptB.x}, {ptB.y})
          </text>

          {/* Midpoint M */}
          <circle cx={toSvgX(parseFloat(midpoint.x))} cy={toSvgY(parseFloat(midpoint.y))} r="5" fill="#a855f7" />
        </svg>
      </div>
    </div>
  );
};

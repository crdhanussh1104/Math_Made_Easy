import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';

export const CoordinateGeometry = () => {
  const [pointA, setPointA] = useState({ x: 3, y: 4 });
  const [pointB, setPointB] = useState({ x: -2, y: -3 });

  const handleMovePoint = (pt, dx, dy) => {
    soundFx.playClick();
    if (pt === 'A') {
      setPointA(prev => ({ x: Math.min(6, Math.max(-6, prev.x + dx)), y: Math.min(6, Math.max(-6, prev.y + dy)) }));
    } else {
      setPointB(prev => ({ x: Math.min(6, Math.max(-6, prev.x + dx)), y: Math.min(6, Math.max(-6, prev.y + dy)) }));
    }
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '700' }}>
          Interactive XY Coordinate Plane 📍
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Move points A & B to observe live (X, Y) coordinate changes and distance!
        </p>
      </div>

      {/* Live Coordinates Display */}
      <div style={{ display: 'flex', gap: '16px', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
        <div style={{ padding: '8px 16px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-full)' }}>
          Point A: ({pointA.x}, {pointA.y})
        </div>
        <div style={{ padding: '8px 16px', backgroundColor: 'var(--secondary-light)', color: 'var(--secondary)', borderRadius: 'var(--radius-full)' }}>
          Point B: ({pointB.x}, {pointB.y})
        </div>
      </div>

      {/* XY Grid Canvas */}
      <div style={{
        width: '100%', maxWidth: '320px', height: '220px', backgroundColor: 'var(--bg-main)',
        borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '2px solid var(--border-light)'
      }}>
        <svg width="260" height="200" viewBox="-130 -100 260 200">
          {/* Axis Lines */}
          <line x1="-120" y1="0" x2="120" y2="0" stroke="var(--text-main)" strokeWidth="2" />
          <line x1="0" y1="-90" x2="0" y2="90" stroke="var(--text-main)" strokeWidth="2" />

          {/* Line Segment A-B */}
          <line
            x1={pointA.x * 18}
            y1={-pointA.y * 13}
            x2={pointB.x * 18}
            y2={-pointB.y * 13}
            stroke="var(--purple)"
            strokeWidth="3"
            strokeDasharray="4 2"
          />

          {/* Point A (Green) */}
          <circle cx={pointA.x * 18} cy={-pointA.y * 13} r="8" fill="#58cc02" />
          <text x={pointA.x * 18 + 12} y={-pointA.y * 13 + 4} fill="#58cc02" fontSize="12" fontWeight="800">A</text>

          {/* Point B (Blue) */}
          <circle cx={pointB.x * 18} cy={-pointB.y * 13} r="8" fill="#1cb0f6" />
          <text x={pointB.x * 18 + 12} y={-pointB.y * 13 + 4} fill="#1cb0f6" fontSize="12" fontWeight="800">B</text>
        </svg>
      </div>

      {/* Point Move Controls */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%', maxWidth: '340px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontWeight: '700', fontSize: '0.85rem' }}>Move Point A:</span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button onClick={() => handleMovePoint('A', -1, 0)} style={{ padding: '6px 10px', borderRadius: 'var(--radius-sm)', border: 'none', backgroundColor: 'var(--bg-main)', fontWeight: '800', cursor: 'pointer' }}>←</button>
            <button onClick={() => handleMovePoint('A', 1, 0)} style={{ padding: '6px 10px', borderRadius: 'var(--radius-sm)', border: 'none', backgroundColor: 'var(--bg-main)', fontWeight: '800', cursor: 'pointer' }}>→</button>
            <button onClick={() => handleMovePoint('A', 0, 1)} style={{ padding: '6px 10px', borderRadius: 'var(--radius-sm)', border: 'none', backgroundColor: 'var(--bg-main)', fontWeight: '800', cursor: 'pointer' }}>↑</button>
            <button onClick={() => handleMovePoint('A', 0, -1)} style={{ padding: '6px 10px', borderRadius: 'var(--radius-sm)', border: 'none', backgroundColor: 'var(--bg-main)', fontWeight: '800', cursor: 'pointer' }}>↓</button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontWeight: '700', fontSize: '0.85rem' }}>Move Point B:</span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button onClick={() => handleMovePoint('B', -1, 0)} style={{ padding: '6px 10px', borderRadius: 'var(--radius-sm)', border: 'none', backgroundColor: 'var(--bg-main)', fontWeight: '800', cursor: 'pointer' }}>←</button>
            <button onClick={() => handleMovePoint('B', 1, 0)} style={{ padding: '6px 10px', borderRadius: 'var(--radius-sm)', border: 'none', backgroundColor: 'var(--bg-main)', fontWeight: '800', cursor: 'pointer' }}>→</button>
            <button onClick={() => handleMovePoint('B', 0, 1)} style={{ padding: '6px 10px', borderRadius: 'var(--radius-sm)', border: 'none', backgroundColor: 'var(--bg-main)', fontWeight: '800', cursor: 'pointer' }}>↑</button>
            <button onClick={() => handleMovePoint('B', 0, -1)} style={{ padding: '6px 10px', borderRadius: 'var(--radius-sm)', border: 'none', backgroundColor: 'var(--bg-main)', fontWeight: '800', cursor: 'pointer' }}>↓</button>
          </div>
        </div>
      </div>
    </CardRounded>
  );
};

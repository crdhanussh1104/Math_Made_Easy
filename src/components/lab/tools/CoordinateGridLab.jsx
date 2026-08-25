import React, { useState, useRef, useEffect } from 'react';
import { Button3D } from '../../ui/Button3D';
import { soundFx } from '../../../utils/audioSynth';
import { triggerConfetti } from '../../../utils/confetti';
import { Move, Target, ArrowUpRight, CheckCircle2, RefreshCw } from 'lucide-react';

export const CoordinateGridLab = ({ config = {} }) => {
  const [ptA, setPtA] = useState(config.pointA || { x: 1, y: 2 });
  const [ptB, setPtB] = useState(config.pointB || { x: 5, y: 5 });
  const [draggingPoint, setDraggingPoint] = useState(null); // 'A' or 'B'
  const svgRef = useRef(null);

  // Challenge Mode State
  const [challengeTarget, setChallengeTarget] = useState({ pt: 'A', x: 4, y: -2 });
  const [challengeSolved, setChallengeSolved] = useState(false);

  const dx = ptB.x - ptA.x;
  const dy = ptB.y - ptA.y;
  const distanceSquared = dx * dx + dy * dy;
  const distance = Math.sqrt(distanceSquared);
  const slope = dx !== 0 ? (dy / dx).toFixed(2) : 'Undefined (Vertical)';
  const midpoint = { x: ((ptA.x + ptB.x) / 2).toFixed(1), y: ((ptA.y + ptB.y) / 2).toFixed(1) };

  // Grid Coordinate conversion (origin at center 180, 180; scale = 20px per unit)
  const toSvgX = (x) => 180 + x * 20;
  const toSvgY = (y) => 180 - y * 20;

  const updatePointFromPointer = (clientX, clientY) => {
    if (!draggingPoint || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const svgPxX = clientX - rect.left;
    const svgPxY = clientY - rect.top;

    // Convert to grid coordinates (-7 to 7)
    let gridX = Math.round((svgPxX - 180) / 20);
    let gridY = Math.round((180 - svgPxY) / 20);

    gridX = Math.max(-7, Math.min(7, gridX));
    gridY = Math.max(-7, Math.min(7, gridY));

    if (draggingPoint === 'A') {
      setPtA({ x: gridX, y: gridY });
      if (challengeTarget.pt === 'A' && gridX === challengeTarget.x && gridY === challengeTarget.y && !challengeSolved) {
        soundFx.playCorrect();
        setChallengeSolved(true);
        triggerConfetti('levelUp');
      }
    } else if (draggingPoint === 'B') {
      setPtB({ x: gridX, y: gridY });
      if (challengeTarget.pt === 'B' && gridX === challengeTarget.x && gridY === challengeTarget.y && !challengeSolved) {
        soundFx.playCorrect();
        setChallengeSolved(true);
        triggerConfetti('levelUp');
      }
    }
  };

  const handlePointerMove = (e) => {
    if (draggingPoint) {
      updatePointFromPointer(e.clientX, e.clientY);
    }
  };

  const handlePointerUp = () => {
    setDraggingPoint(null);
  };

  useEffect(() => {
    if (draggingPoint) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
      };
    }
  }, [draggingPoint]);

  const newChallenge = () => {
    soundFx.playClick();
    const rx = Math.floor(Math.random() * 11) - 5;
    const ry = Math.floor(Math.random() * 11) - 5;
    const pt = Math.random() > 0.5 ? 'A' : 'B';
    setChallengeTarget({ pt, x: rx, y: ry });
    setChallengeSolved(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', userSelect: 'none' }}>
      
      {/* Target Challenge Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', background: '#f8fafc', padding: '12px 18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Target size={20} color="#4f46e5" />
          <span style={{ fontWeight: '800', fontSize: '0.92rem', color: '#1e293b' }}>
            🎯 Target Challenge: Move <strong>Point {challengeTarget.pt}</strong> to <strong>({challengeTarget.x}, {challengeTarget.y})</strong>!
          </span>
          {challengeSolved && (
            <span style={{ background: '#dcfce7', color: '#166534', fontWeight: '900', padding: '2px 8px', borderRadius: '6px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={14} /> Solved!
            </span>
          )}
        </div>

        <Button3D variant="outline" size="sm" onClick={newChallenge} icon={RefreshCw}>
          New Challenge
        </Button3D>
      </div>

      {/* Point Position Info & Direct Drag Hint */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', background: '#f8fafc', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe', padding: '10px 14px', borderRadius: '10px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#1e40af', textTransform: 'uppercase' }}>Point A (Blue Puck):</span>
          <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#1d4ed8' }}>({ptA.x}, {ptA.y})</div>
          <span style={{ fontSize: '0.75rem', color: '#3b82f6', fontWeight: '700' }}>Drag Blue circle directly on the grid</span>
        </div>

        <div style={{ background: '#fef2f2', border: '1.5px solid #fecaca', padding: '10px 14px', borderRadius: '10px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#991b1b', textTransform: 'uppercase' }}>Point B (Red Puck):</span>
          <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#b91c1c' }}>({ptB.x}, {ptB.y})</div>
          <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: '700' }}>Drag Red circle directly on the grid</span>
        </div>
      </div>

      {/* Real-Time Mathematical Readout Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
        <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#4338ca', textTransform: 'uppercase' }}>
            Distance d = √((Δx)² + (Δy)²)
          </span>
          <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#3730a3', marginTop: '2px' }}>
            {distance.toFixed(2)} u (√{distanceSquared})
          </div>
        </div>

        <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#15803d', textTransform: 'uppercase' }}>
            Slope m = Δy / Δx
          </span>
          <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#166534', marginTop: '2px' }}>
            m = {slope}
          </div>
        </div>

        <div style={{ background: '#fdf4ff', border: '1.5px solid #f5d0fe', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#86198f', textTransform: 'uppercase' }}>
            Midpoint M = ((x1+x2)/2, (y1+y2)/2)
          </span>
          <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#701a75', marginTop: '2px' }}>
            ({midpoint.x}, {midpoint.y})
          </div>
        </div>
      </div>

      {/* 4-Quadrant Cartesian SVG Grid with Direct Drag Support */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          border: '2px solid #cbd5e1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          cursor: draggingPoint ? 'grabbing' : 'default',
          touchAction: 'none'
        }}
      >
        <svg ref={svgRef} width="360" height="360" viewBox="0 0 360 360">
          {/* Minor Grid Lines */}
          {Array.from({ length: 17 }).map((_, idx) => {
            const pos = idx * 20 + 20;
            return (
              <React.Fragment key={idx}>
                <line x1={pos} y1="0" x2={pos} y2="360" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1={pos} x2="360" y2={pos} stroke="#f1f5f9" strokeWidth="1" />
              </React.Fragment>
            );
          })}

          {/* Coordinate Axes */}
          <line x1="180" y1="0" x2="180" y2="360" stroke="#94a3b8" strokeWidth="2" />
          <line x1="0" y1="180" x2="360" y2="180" stroke="#94a3b8" strokeWidth="2" />

          {/* Axis Labels */}
          {[-6, -4, -2, 2, 4, 6].map(num => (
            <React.Fragment key={num}>
              <text x={toSvgX(num)} y="196" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748b">{num}</text>
              <text x="168" y={toSvgY(num) + 4} textAnchor="end" fontSize="10" fontWeight="700" fill="#64748b">{num}</text>
            </React.Fragment>
          ))}

          {/* Right Triangle Construction */}
          <line x1={toSvgX(ptA.x)} y1={toSvgY(ptA.y)} x2={toSvgX(ptB.x)} y2={toSvgY(ptA.y)} stroke="#93c5fd" strokeWidth="2" strokeDasharray="3,3" />
          <line x1={toSvgX(ptB.x)} y1={toSvgY(ptA.y)} x2={toSvgX(ptB.x)} y2={toSvgY(ptB.y)} stroke="#fca5a5" strokeWidth="2" strokeDasharray="3,3" />

          {/* Hypotenuse Segment AB */}
          <line x1={toSvgX(ptA.x)} y1={toSvgY(ptA.y)} x2={toSvgX(ptB.x)} y2={toSvgY(ptB.y)} stroke="#4f46e5" strokeWidth="3.5" />

          {/* Midpoint M Marker */}
          <circle cx={toSvgX(parseFloat(midpoint.x))} cy={toSvgY(parseFloat(midpoint.y))} r="5" fill="#a855f7" />

          {/* Draggable Point A (Blue Puck) */}
          <circle
            cx={toSvgX(ptA.x)}
            cy={toSvgY(ptA.y)}
            r="12"
            fill="#2563eb"
            stroke="#ffffff"
            strokeWidth="3"
            style={{ cursor: 'grab', filter: 'drop-shadow(0 2px 6px rgba(37, 99, 235, 0.4))' }}
            onPointerDown={(e) => { e.stopPropagation(); setDraggingPoint('A'); }}
          />
          <text x={toSvgX(ptA.x)} y={toSvgY(ptA.y) - 16} textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="900">
            A({ptA.x}, {ptA.y})
          </text>

          {/* Draggable Point B (Red Puck) */}
          <circle
            cx={toSvgX(ptB.x)}
            cy={toSvgY(ptB.y)}
            r="12"
            fill="#dc2626"
            stroke="#ffffff"
            strokeWidth="3"
            style={{ cursor: 'grab', filter: 'drop-shadow(0 2px 6px rgba(220, 38, 38, 0.4))' }}
            onPointerDown={(e) => { e.stopPropagation(); setDraggingPoint('B'); }}
          />
          <text x={toSvgX(ptB.x)} y={toSvgY(ptB.y) - 16} textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="900">
            B({ptB.x}, {ptB.y})
          </text>
        </svg>
      </div>

    </div>
  );
};


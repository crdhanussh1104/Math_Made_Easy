import React, { useState, useRef, useEffect } from 'react';
import { Button3D } from '../../ui/Button3D';
import { soundFx } from '../../../utils/audioSynth';
import { triggerConfetti } from '../../../utils/confetti';
import { RotateCw, Target, CheckCircle2, RefreshCw, Compass } from 'lucide-react';

export const AngleProtractorLab = ({ config = {} }) => {
  const [angle, setAngle] = useState(config.angle || 60);
  const [isDragging, setIsDragging] = useState(false);
  const svgRef = useRef(null);

  // Challenge Mode State
  const [challengeAngle, setChallengeAngle] = useState(120);
  const [challengeSolved, setChallengeSolved] = useState(false);

  const angleType =
    angle === 0 ? 'Zero Angle (0°)' :
    angle < 90 ? 'Acute Angle (< 90°)' :
    angle === 90 ? 'Right Angle (90°)' :
    angle < 180 ? 'Obtuse Angle (90° - 180°)' :
    angle === 180 ? 'Straight Angle (180°)' :
    angle < 360 ? 'Reflex Angle (180° - 360°)' : 'Complete Angle (360°)';

  const updateAngleFromPointer = (clientX, clientY) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height * 0.65; // Vertex at center-bottom

    const dx = clientX - cx;
    const dy = cy - clientY; // inverted Y

    let deg = Math.round((Math.atan2(dy, dx) * 180) / Math.PI);
    if (deg < 0) deg += 360;

    setAngle(deg);

    // Check challenge match
    if (Math.abs(deg - challengeAngle) <= 2 && !challengeSolved) {
      soundFx.playCorrect();
      setChallengeSolved(true);
      triggerConfetti('levelUp');
    }
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updateAngleFromPointer(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      updateAngleFromPointer(e.clientX, e.clientY);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
      };
    }
  }, [isDragging]);

  const newChallenge = () => {
    soundFx.playClick();
    const targets = [30, 45, 60, 90, 120, 135, 150, 180, 240, 270, 315];
    const next = targets[Math.floor(Math.random() * targets.length)];
    setChallengeAngle(next);
    setChallengeSolved(false);
  };

  const rad = (angle * Math.PI) / 180;
  const rayLength = 120;
  const originX = 180;
  const originY = 180;
  const rayX = originX + rayLength * Math.cos(-rad);
  const rayY = originY + rayLength * Math.sin(-rad);

  // SVG Sector Arc
  const largeArcFlag = angle > 180 ? 1 : 0;
  const arcRadius = 45;
  const arcX = originX + arcRadius * Math.cos(-rad);
  const arcY = originY + arcRadius * Math.sin(-rad);
  const arcPath = `M ${originX + arcRadius} ${originY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 0 ${arcX} ${arcY} L ${originX} ${originY} Z`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', userSelect: 'none' }}>
      
      {/* Challenge & Status Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', background: '#f8fafc', padding: '14px 18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Target size={20} color="#4f46e5" />
          <span style={{ fontWeight: '800', fontSize: '0.92rem', color: '#1e293b' }}>
            🎯 Target Challenge: Create a <strong>{challengeAngle}°</strong> Angle!
          </span>
          {challengeSolved && (
            <span style={{ background: '#dcfce7', color: '#166534', fontWeight: '900', padding: '2px 8px', borderRadius: '6px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={14} /> Solved!
            </span>
          )}
        </div>

        <Button3D variant="outline" size="sm" onClick={newChallenge} icon={RefreshCw}>
          New Target Angle
        </Button3D>
      </div>

      {/* Angle Classification Badge */}
      <div style={{ background: '#eef2ff', border: '2px solid #c7d2fe', borderRadius: '14px', padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#6366f1', textTransform: 'uppercase' }}>Current Angle θ:</span>
          <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#3730a3', fontFamily: 'var(--font-rounded)' }}>
            {angle}° <span style={{ fontSize: '1rem', fontWeight: '800', color: '#4f46e5' }}>({angleType})</span>
          </div>
        </div>

        <div style={{ fontSize: '0.85rem', color: '#475569', fontWeight: '700', maxWidth: '280px', textAlign: 'right' }}>
          💡 <strong>Direct Manipulation:</strong> Drag the red terminal ray anywhere around the circular protractor dial!
        </div>
      </div>

      {/* Direct Drag Interactive Protractor Canvas */}
      <div
        ref={svgRef}
        onPointerDown={handlePointerDown}
        style={{
          background: '#ffffff',
          border: '2px solid #cbd5e1',
          borderRadius: '16px',
          height: '320px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: isDragging ? 'grabbing' : 'grab',
          position: 'relative',
          touchAction: 'none'
        }}
      >
        <svg width="360" height="320" viewBox="0 0 360 320">
          {/* Protractor Semi-Circle Base & Grid */}
          <circle cx={originX} cy={originY} r="140" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
          <path d={`M ${originX - 130} ${originY} A 130 130 0 0 1 ${originX + 130} ${originY} Z`} fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" opacity="0.6" />

          {/* Protractor Degree Ticks */}
          {[0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 240, 270, 300, 330].map(deg => {
            const tr = (deg * Math.PI) / 180;
            const x1 = originX + 125 * Math.cos(-tr);
            const y1 = originY + 125 * Math.sin(-tr);
            const x2 = originX + 135 * Math.cos(-tr);
            const y2 = originY + 135 * Math.sin(-tr);
            const lx = originX + 152 * Math.cos(-tr);
            const ly = originY + 152 * Math.sin(-tr);

            return (
              <React.Fragment key={deg}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#64748b" strokeWidth={deg % 90 === 0 ? '3' : '1.5'} />
                <text x={lx} y={ly + 4} textAnchor="middle" fontSize="10" fontWeight="800" fill="#475569">
                  {deg}°
                </text>
              </React.Fragment>
            );
          })}

          {/* Shaded Angle Arc */}
          {angle > 0 && <path d={arcPath} fill="#f43f5e" opacity="0.25" />}

          {/* Initial Base Ray (Fixed 0°) */}
          <line x1={originX} y1={originY} x2={originX + 130} y2={originY} stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />

          {/* Draggable Terminal Ray (Red) */}
          <line x1={originX} y1={originY} x2={rayX} y2={rayY} stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />

          {/* Ray Drag Handle (Puck) */}
          <circle cx={rayX} cy={rayY} r="12" fill="#ef4444" stroke="#ffffff" strokeWidth="3" style={{ filter: 'drop-shadow(0 2px 6px rgba(239, 68, 68, 0.5))' }} />

          {/* Vertex Center Dot */}
          <circle cx={originX} cy={originY} r="6" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
        </svg>
      </div>

      {/* Manual Fine Slider */}
      <div>
        <label style={{ fontSize: '0.82rem', fontWeight: '800', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
          <span>Fine Degree Adjust:</span>
          <span>{angle}°</span>
        </label>
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value, 10))}
          style={{ width: '100%', marginTop: '4px' }}
        />
      </div>
    </div>
  );
};


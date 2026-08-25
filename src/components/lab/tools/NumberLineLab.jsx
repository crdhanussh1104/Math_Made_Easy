import React, { useState, useRef, useEffect } from 'react';
import { Button3D } from '../../ui/Button3D';
import { soundFx } from '../../../utils/audioSynth';
import { triggerConfetti } from '../../../utils/confetti';
import { Target, CheckCircle2, RefreshCw } from 'lucide-react';

export const NumberLineLab = ({ config = {} }) => {
  const [min, setMin] = useState(config.min !== undefined ? config.min : -5);
  const [max, setMax] = useState(config.max !== undefined ? config.max : 15);
  const [currentVal, setCurrentVal] = useState(config.currentVal !== undefined ? config.currentVal : 3);
  const [stepSize, setStepSize] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);

  // Challenge Mode State
  const [targetVal, setTargetVal] = useState(8);
  const [challengeSolved, setChallengeSolved] = useState(false);

  const range = max - min;
  const toPercent = (val) => ((val - min) / range) * 100;

  const updateFromPointer = (clientX) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    let rawVal = min + pct * range;
    
    // Snap to step size
    let snapped = Math.round(rawVal / stepSize) * stepSize;
    snapped = Math.max(min, Math.min(max, snapped));
    // Fix floating point precision
    snapped = parseFloat(snapped.toFixed(2));

    setCurrentVal(snapped);

    if (snapped === targetVal && !challengeSolved) {
      soundFx.playCorrect();
      setChallengeSolved(true);
      triggerConfetti('levelUp');
    }
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updateFromPointer(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      updateFromPointer(e.clientX);
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
    const candidate = min + Math.floor(Math.random() * (range / stepSize)) * stepSize;
    setTargetVal(parseFloat(candidate.toFixed(2)));
    setChallengeSolved(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', userSelect: 'none' }}>
      
      {/* Target Challenge Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', background: '#f8fafc', padding: '12px 18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Target size={20} color="#4f46e5" />
          <span style={{ fontWeight: '800', fontSize: '0.92rem', color: '#1e293b' }}>
            🎯 Target Challenge: Place frog marker at <strong>{targetVal}</strong>!
          </span>
          {challengeSolved && (
            <span style={{ background: '#dcfce7', color: '#166534', fontWeight: '900', padding: '2px 8px', borderRadius: '6px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={14} /> Solved!
            </span>
          )}
        </div>

        <Button3D variant="outline" size="sm" onClick={newChallenge} icon={RefreshCw}>
          New Target
        </Button3D>
      </div>

      {/* Control Buttons & Current Value Info */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', padding: '14px 18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => {
              const next = Math.max(min, currentVal - stepSize);
              setCurrentVal(parseFloat(next.toFixed(2)));
              soundFx.playClick();
            }}
            style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', fontWeight: '800', cursor: 'pointer' }}
          >
            ◀ Hop -{stepSize}
          </button>
          <div style={{ fontSize: '1.25rem', fontWeight: '900', color: '#4f46e5', minWidth: '130px', textAlign: 'center' }}>
            Point: <strong>{currentVal}</strong>
          </div>
          <button
            onClick={() => {
              const next = Math.min(max, currentVal + stepSize);
              setCurrentVal(parseFloat(next.toFixed(2)));
              soundFx.playClick();
            }}
            style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', fontWeight: '800', cursor: 'pointer' }}
          >
            Hop +{stepSize} ▶
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#64748b' }}>Step Size:</span>
          {[1, 2, 5, 0.5].map(st => (
            <button
              key={st}
              onClick={() => { setStepSize(st); soundFx.playClick(); }}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: 'none',
                background: stepSize === st ? '#4f46e5' : '#e2e8f0',
                color: stepSize === st ? '#ffffff' : '#475569',
                fontWeight: '800',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Mathematical Relationships Card */}
      <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#3730a3' }}>
          Predecessor: {parseFloat((currentVal - stepSize).toFixed(2))} ⟵ <strong>Current Point: {currentVal}</strong> ⟶ Successor: {parseFloat((currentVal + stepSize).toFixed(2))}
        </div>
        <div style={{ fontSize: '0.82rem', color: '#4f46e5', fontWeight: '700', marginTop: '4px' }}>
          Distance from Origin (0): |{currentVal}| = {Math.abs(currentVal)} • Additive Inverse: {-currentVal}
        </div>
      </div>

      {/* Direct Interactive Draggable Number Line Canvas */}
      <div
        style={{
          background: '#ffffff',
          border: '2px solid #cbd5e1',
          borderRadius: '16px',
          padding: '60px 30px',
          position: 'relative',
          minHeight: '160px',
          display: 'flex',
          alignItems: 'center',
          cursor: isDragging ? 'grabbing' : 'pointer',
          touchAction: 'none'
        }}
        onPointerDown={handlePointerDown}
      >
        <div ref={trackRef} style={{ width: '100%', height: '6px', background: '#334155', borderRadius: '3px', position: 'relative' }}>
          {/* Tick marks */}
          {Array.from({ length: Math.floor(range / stepSize) + 1 }).map((_, idx) => {
            const val = parseFloat((min + idx * stepSize).toFixed(2));
            const pct = toPercent(val);
            const isZero = val === 0;

            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  left: `${pct}%`,
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  top: '-12px'
                }}
              >
                <div style={{ width: isZero ? '3px' : '2px', height: isZero ? '28px' : '20px', background: isZero ? '#dc2626' : '#64748b' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: isZero ? '900' : '700', color: isZero ? '#dc2626' : '#475569', marginTop: '8px' }}>
                  {val}
                </span>
              </div>
            );
          })}

          {/* Draggable Frog Puck */}
          <div
            style={{
              position: 'absolute',
              left: `${toPercent(currentVal)}%`,
              top: '-42px',
              transform: 'translateX(-50%)',
              cursor: 'grab',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: isDragging ? 'none' : 'left 0.15s ease'
            }}
          >
            <div style={{ fontSize: '2rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))' }}>
              🐸
            </div>
            <div style={{
              background: '#4f46e5',
              color: '#ffffff',
              fontSize: '0.8rem',
              fontWeight: '900',
              padding: '2px 8px',
              borderRadius: '6px',
              marginTop: '2px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
              {currentVal}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};


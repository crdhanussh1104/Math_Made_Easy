import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { CheckCircle2, RotateCcw } from 'lucide-react';

export const ClockInteractive = ({ targetHour = 3, targetMinute = 30, onVerify }) => {
  const [hour, setHour] = useState(10);
  const [minute, setMinute] = useState(10);

  const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
  const minuteAngle = minute * 6;

  const handleAdjustHour = (delta) => {
    setHour(prev => {
      let next = (prev + delta) % 12;
      if (next <= 0) next = 12;
      return next;
    });
    soundFx.playClick();
  };

  const handleAdjustMinute = (delta) => {
    setMinute(prev => (prev + delta + 60) % 60);
    soundFx.playClick();
  };

  const handleVerify = () => {
    if (hour === targetHour && Math.abs(minute - targetMinute) <= 2) {
      soundFx.playCorrect();
      if (onVerify) onVerify(true);
    } else {
      soundFx.playIncorrect();
    }
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '700' }}>
          Interactive Analog Clock Reader ⏰
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Adjust the hour and minute hands to set the target time!
        </p>
      </div>

      {/* Time Display Badge */}
      <div style={{
        backgroundColor: 'var(--warning-light)',
        color: 'var(--orange)',
        padding: '12px 28px',
        borderRadius: 'var(--radius-full)',
        fontSize: '1.8rem',
        fontWeight: '800',
        fontFamily: 'var(--font-rounded)',
        boxShadow: '0 4px 10px rgba(255, 200, 0, 0.2)'
      }}>
        {String(hour).padStart(2, '0')}:{String(minute).padStart(2, '0')} {hour >= 12 ? 'PM' : 'AM'}
      </div>

      {/* Clock SVG */}
      <svg width="220" height="220" viewBox="-110 -110 220 220">
        {/* Clock Face */}
        <circle cx="0" cy="0" r="100" fill="var(--bg-card-solid)" stroke="var(--warning)" strokeWidth="6" />
        <circle cx="0" cy="0" r="92" fill="none" stroke="var(--border-light)" strokeWidth="2" />

        {/* Hour Numbers */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => {
          const angle = (num * 30 - 90) * (Math.PI / 180);
          const x = 74 * Math.cos(angle);
          const y = 74 * Math.sin(angle);

          return (
            <text
              key={num}
              x={x}
              y={y + 5}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="16"
              fontWeight="800"
              fontFamily="var(--font-rounded)"
              fill="var(--text-main)"
            >
              {num}
            </text>
          );
        })}

        {/* Hour Hand */}
        <line
          x1="0" y1="0"
          x2={48 * Math.cos((hourAngle - 90) * (Math.PI / 180))}
          y2={48 * Math.sin((hourAngle - 90) * (Math.PI / 180))}
          stroke="var(--text-main)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Minute Hand */}
        <line
          x1="0" y1="0"
          x2={68 * Math.cos((minuteAngle - 90) * (Math.PI / 180))}
          y2={68 * Math.sin((minuteAngle - 90) * (Math.PI / 180))}
          stroke="var(--orange)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Center Pin */}
        <circle cx="0" cy="0" r="6" fill="var(--warning)" />
      </svg>

      {/* Adjust Controls */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontWeight: '700', fontSize: '0.85rem' }}>Hour:</span>
          <button onClick={() => handleAdjustHour(-1)} style={{ width: '32px', height: '32px', borderRadius: '50%', border: 'none', backgroundColor: 'var(--bg-main)', fontWeight: '800', cursor: 'pointer' }}>-</button>
          <button onClick={() => handleAdjustHour(1)} style={{ width: '32px', height: '32px', borderRadius: '50%', border: 'none', backgroundColor: 'var(--bg-main)', fontWeight: '800', cursor: 'pointer' }}>+</button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontWeight: '700', fontSize: '0.85rem' }}>Mins:</span>
          <button onClick={() => handleAdjustMinute(-5)} style={{ width: '32px', height: '32px', borderRadius: '50%', border: 'none', backgroundColor: 'var(--bg-main)', fontWeight: '800', cursor: 'pointer' }}>-5</button>
          <button onClick={() => handleAdjustMinute(5)} style={{ width: '32px', height: '32px', borderRadius: '50%', border: 'none', backgroundColor: 'var(--bg-main)', fontWeight: '800', cursor: 'pointer' }}>+5</button>
        </div>
      </div>

      <Button3D variant="warning" onClick={handleVerify} icon={CheckCircle2}>
        Verify Target ({targetHour}:{String(targetMinute).padStart(2, '0')})
      </Button3D>
    </CardRounded>
  );
};

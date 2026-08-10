import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { BadgeChip } from '../ui/BadgeChip';

export const AngleExplorer = () => {
  const [angleDegree, setAngleDegree] = useState(60);

  const getClassification = (deg) => {
    if (deg < 90) return { type: 'Acute Angle', color: '#58cc02', bg: '#e5f9d8' };
    if (deg === 90) return { type: 'Right Angle (90°)', color: '#1cb0f6', bg: '#ddf4ff' };
    if (deg < 180) return { type: 'Obtuse Angle', color: '#ff9600', bg: '#fff2df' };
    if (deg === 180) return { type: 'Straight Angle (180°)', color: '#ce82ff', bg: '#f6e5ff' };
    return { type: 'Reflex Angle (>180°)', color: '#ff4b4b', bg: '#ffdfe0' };
  };

  const currentClass = getClassification(angleDegree);
  const rad = (angleDegree * Math.PI) / 180;
  const rayX = 80 * Math.cos(-rad);
  const rayY = 80 * Math.sin(-rad);

  const handleSlider = (val) => {
    setAngleDegree(val);
    soundFx.playClick();
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '700' }}>
          Interactive Angle Explorer 📐
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Drag the ray arm to measure angles from 0° to 360° and observe real-time classification!
        </p>
      </div>

      {/* Angle Classification Badge */}
      <BadgeChip label={`${angleDegree}° — ${currentClass.type}`} color={currentClass.color} bg={currentClass.bg} size="md" />

      {/* Interactive Ray SVG Canvas */}
      <div style={{
        width: '100%', maxWidth: '320px', height: '220px', backgroundColor: 'var(--bg-main)',
        borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '2px solid var(--border-light)'
      }}>
        <svg width="240" height="200" viewBox="-120 -100 240 200">
          {/* Base Ray (0 degrees) */}
          <line x1="0" y1="50" x2="90" y2="50" stroke="var(--text-main)" strokeWidth="4" strokeLinecap="round" />
          <polygon points="95,50 85,45 85,55" fill="var(--text-main)" />

          {/* Rotating Ray */}
          <line x1="0" y1="50" x2={rayX} y2={50 + rayY} stroke={currentClass.color} strokeWidth="4" strokeLinecap="round" />
          <circle cx={rayX} cy={50 + rayY} r="8" fill={currentClass.color} />

          {/* Angle Arc Arc */}
          <path
            d={`M 30 50 A 30 30 0 ${angleDegree > 180 ? 1 : 0} 0 ${30 * Math.cos(-rad)} ${50 + 30 * Math.sin(-rad)}`}
            fill="none"
            stroke={currentClass.color}
            strokeWidth="3"
            strokeDasharray="4 2"
          />

          {/* Vertex Point */}
          <circle cx="0" cy="50" r="6" fill="var(--text-main)" />
        </svg>
      </div>

      {/* Angle Slider */}
      <div style={{ width: '100%', maxWidth: '320px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
          <span>0°</span>
          <span>Angle: {angleDegree}°</span>
          <span>360°</span>
        </div>
        <input
          type="range" min="0" max="360" step="5" value={angleDegree}
          onChange={(e) => handleSlider(Number(e.target.value))}
        />
      </div>

      {/* Preset Quick Angle Buttons */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[45, 90, 135, 180, 270].map(deg => (
          <button
            key={deg}
            onClick={() => handleSlider(deg)}
            style={{
              padding: '6px 14px', borderRadius: 'var(--radius-full)', border: 'none',
              backgroundColor: angleDegree === deg ? currentClass.color : 'var(--bg-main)',
              color: angleDegree === deg ? '#fff' : 'var(--text-muted)',
              fontWeight: '700', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
            }}
          >
            {deg}°
          </button>
        ))}
      </div>
    </CardRounded>
  );
};

import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { Box, Eye, CheckCircle2, RotateCcw } from 'lucide-react';

export const ShapeBuilder = ({ onVerify }) => {
  const [shape, setShape] = useState('rectangle'); // square, rectangle, triangle, circle
  const [width, setWidth] = useState(6);
  const [height, setHeight] = useState(4);
  const [showSymmetry, setShowSymmetry] = useState(true);

  const perimeter = shape === 'square' ? width * 4 : shape === 'rectangle' ? 2 * (width + height) : shape === 'triangle' ? width * 3 : Math.round(2 * Math.PI * (width / 2));
  const area = shape === 'square' ? width * width : shape === 'rectangle' ? width * height : shape === 'triangle' ? Math.round(0.5 * width * height) : Math.round(Math.PI * (width / 2) * (width / 2));

  const handleSelectShape = (s) => {
    setShape(s);
    soundFx.playClick();
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '700' }}>
          Interactive Geometry Shape Builder 📐
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Adjust dimensions, draw symmetry axes, and calculate Perimeter & Area!
        </p>
      </div>

      {/* Shape Selector Pills */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {['square', 'rectangle', 'triangle', 'circle'].map(s => (
          <button
            key={s}
            onClick={() => handleSelectShape(s)}
            style={{
              padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
              backgroundColor: shape === s ? 'var(--primary)' : 'var(--bg-main)',
              color: shape === s ? '#fff' : 'var(--text-muted)',
              fontWeight: '700', fontFamily: 'var(--font-rounded)', cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* SVG Interactive Canvas */}
      <div style={{
        width: '100%', maxWidth: '320px', height: '200px', backgroundColor: 'var(--bg-main)',
        borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '2px dashed var(--border-light)', position: 'relative'
      }}>
        <svg width="240" height="160" viewBox="-120 -80 240 160">
          {shape === 'square' && (
            <rect x={-width * 10} y={-width * 10} width={width * 20} height={width * 20} fill="#58cc02" opacity="0.8" stroke="#46a302" strokeWidth="3" />
          )}

          {shape === 'rectangle' && (
            <rect x={-width * 12} y={-height * 12} width={width * 24} height={height * 24} fill="#1cb0f6" opacity="0.8" stroke="#1899d6" strokeWidth="3" />
          )}

          {shape === 'triangle' && (
            <polygon points={`0,${-height * 12} ${-width * 12},${height * 12} ${width * 12},${height * 12}`} fill="#ff9600" opacity="0.8" stroke="#e08400" strokeWidth="3" />
          )}

          {shape === 'circle' && (
            <circle cx="0" cy="0" r={width * 10} fill="#ce82ff" opacity="0.8" stroke="#b25bf0" strokeWidth="3" />
          )}

          {/* Line of Symmetry Overlay */}
          {showSymmetry && (
            <line x1="0" y1="-70" x2="0" y2="70" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 5" />
          )}
        </svg>
      </div>

      {/* Dimension Sliders */}
      <div style={{ display: 'flex', gap: '20px', width: '100%', maxWidth: '340px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: '700' }}>Width / Base: {width} cm</label>
          <input type="range" min="3" max="9" value={width} onChange={(e) => setWidth(Number(e.target.value))} />
        </div>

        {shape === 'rectangle' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: '700' }}>Height: {height} cm</label>
            <input type="range" min="2" max="6" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
          </div>
        )}
      </div>

      {/* Live Calculated Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%', maxWidth: '340px' }}>
        <div style={{ padding: '10px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-sm)', textAlign: 'center', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
          <div style={{ fontSize: '0.75rem' }}>Perimeter</div>
          <div style={{ fontSize: '1.2rem' }}>{perimeter} cm</div>
        </div>

        <div style={{ padding: '10px', backgroundColor: 'var(--secondary-light)', color: 'var(--secondary)', borderRadius: 'var(--radius-sm)', textAlign: 'center', fontWeight: '800', fontFamily: 'var(--font-rounded)' }}>
          <div style={{ fontSize: '0.75rem' }}>Area (approx)</div>
          <div style={{ fontSize: '1.2rem' }}>{area} cm²</div>
        </div>
      </div>

      <Button3D variant="outline" size="sm" onClick={() => setShowSymmetry(!showSymmetry)} icon={Eye}>
        {showSymmetry ? 'Hide Line of Symmetry' : 'Show Line of Symmetry'}
      </Button3D>
    </CardRounded>
  );
};

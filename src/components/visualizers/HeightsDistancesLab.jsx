import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { TrendingUp, BookOpen, Compass, Eye } from 'lucide-react';

export const HeightsDistancesLab = () => {
  const [distance, setDistance] = useState(50); // distance from building in meters
  const [angle, setAngle] = useState(30); // angle of elevation in degrees

  const rad = (angle * Math.PI) / 180;
  const height = (distance * Math.tan(rad)).toFixed(2);

  // SVG Canvas dimensions
  const svgWidth = 360;
  const svgHeight = 240;
  const groundY = 200;
  const observerX = 40;
  
  // Scale building height to canvas
  const buildingX = 300;
  const pixelHeight = Math.min(160, Math.max(20, (Number(height) / 100) * 160));
  const buildingTopY = groundY - pixelHeight;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      
      {/* Concept Explanation */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <BookOpen size={24} color="#8b5cf6" />
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-main)' }}>
            📖 Heights & Distances (Angle of Elevation & Depression Explained From Scratch)
          </h3>
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
          <strong>Angle of Elevation</strong> is the upward angle formed between the horizontal line of sight and the observer's line of sight to an object above eye level. Using Tangent ratio: <strong>Height = Distance × tan(θ)</strong>.
        </p>
      </div>

      {/* Interactive Visualizer Canvas & Controls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        
        {/* SVG Interactive Canvas */}
        <div style={{
          backgroundColor: '#0f172a', borderRadius: 'var(--radius-md)', padding: '20px',
          boxShadow: 'var(--shadow-md)', border: '3px solid #8b5cf6', display: 'flex', flexDirection: 'column', alignItems: 'center',
          userSelect: 'none'
        }}>
          <div style={{ color: '#00f0ff', fontSize: '0.82rem', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Eye size={16} /> Angle of Elevation Simulator
          </div>

          <svg width={svgWidth} height={svgHeight} style={{ overflow: 'visible' }}>
            {/* Ground Line */}
            <line x1="10" y1={groundY} x2={svgWidth - 10} y2={groundY} stroke="#475569" strokeWidth="3" />
            
            {/* Building Structure */}
            <rect x={buildingX - 25} y={buildingTopY} width="50" height={pixelHeight} fill="#334155" stroke="#94a3b8" strokeWidth="2" />
            <text x={buildingX} y={buildingTopY - 10} fill="#00f0ff" fontSize="13" fontWeight="800" textAnchor="middle">Height h = {height}m</text>

            {/* Observer Point */}
            <circle cx={observerX} cy={groundY} r="8" fill="#ff9600" stroke="#fff" strokeWidth="2" />
            <text x={observerX} y={groundY + 20} fill="#ff9600" fontSize="12" fontWeight="800" textAnchor="middle">Observer</text>

            {/* Line of Sight (Hypotenuse) */}
            <line x1={observerX} y1={groundY} x2={buildingX} y2={buildingTopY} stroke="#ffc800" strokeWidth="3" strokeDasharray="5 5" />

            {/* Horizontal Distance Line */}
            <line x1={observerX} y1={groundY} x2={buildingX} y2={groundY} stroke="#3b82f6" strokeWidth="3" />
            <text x={(observerX + buildingX) / 2} y={groundY + 18} fill="#3b82f6" fontSize="12" fontWeight="800" textAnchor="middle">Distance d = {distance}m</text>

            {/* Angle Arc */}
            <path
              d={`M ${observerX + 30} ${groundY} A 30 30 0 0 0 ${observerX + 30 * Math.cos(rad)} ${groundY - 30 * Math.sin(rad)}`}
              fill="none"
              stroke="#ffc800"
              strokeWidth="2.5"
            />
            <text x={observerX + 38} y={groundY - 8} fill="#ffc800" fontSize="12" fontWeight="800">θ = {angle}°</text>
          </svg>
        </div>

        {/* Live Slider Controls */}
        <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '380px' }}>
          <div style={{ backgroundColor: 'var(--bg-main)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: '800' }}>Observer Distance (d): {distance} meters</label>
              <input type="range" min="10" max="150" step="5" value={distance} onChange={(e) => setDistance(Number(e.target.value))} style={{ width: '100%', accentColor: '#8b5cf6' }} />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: '800' }}>Angle of Elevation (θ): {angle}°</label>
              <input type="range" min="10" max="75" step="5" value={angle} onChange={(e) => setAngle(Number(e.target.value))} style={{ width: '100%', accentColor: '#8b5cf6' }} />
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--purple-light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '2px solid #8b5cf6', textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#8b5cf6' }}>CALCULATED HEIGHT:</span>
            <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: '#8b5cf6', marginTop: '2px' }}>
              h = {distance} × tan({angle}°) = {height} meters
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

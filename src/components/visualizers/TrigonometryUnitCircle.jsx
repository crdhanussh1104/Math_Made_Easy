import React, { useState, useRef } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Sparkles, HelpCircle, BookOpen, Calculator, Compass } from 'lucide-react';

export const TrigonometryUnitCircle = () => {
  const [angle, setAngle] = useState(45); // angle in degrees
  const isDraggingRef = useRef(false);
  const svgRef = useRef(null);

  const rad = (angle * Math.PI) / 180;
  const sinVal = Math.sin(rad).toFixed(4);
  const cosVal = Math.cos(rad).toFixed(4);
  const tanVal = Math.cos(rad) !== 0 ? Math.tan(rad).toFixed(4) : 'Undefined (∞)';

  // Canvas dimensions
  const size = 320;
  const center = size / 2;
  const radius = 115;

  const px = center + radius * Math.cos(rad);
  const py = center - radius * Math.sin(rad);

  // Direct Mouse / Touch Dragging of Point P(x, y) on the Circle Canvas
  const updateAngleFromEvent = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    if (clientX === undefined || clientY === undefined) return;

    const dx = clientX - rect.left - center;
    const dy = center - (clientY - rect.top); // SVG Y is inverted

    let calcAngle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (calcAngle < 0) calcAngle += 360;

    setAngle(Math.round(calcAngle));
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    updateAngleFromEvent(e);
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      updateAngleFromEvent(e);
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Standard Trigonometry Values Memory Table (Including reciprocal ratios: cosec, sec, cot!)
  const trigTable = [
    { angle: '0° (0 rad)', n: 0, sin: '0', cos: '1', tan: '0', cosec: 'Undefined (∞)', sec: '1', cot: 'Undefined (∞)' },
    { angle: '30° (π/6)', n: 1, sin: '1/2', cos: '√3/2', tan: '1/√3', cosec: '2', sec: '2/√3', cot: '√3' },
    { angle: '45° (π/4)', n: 2, sin: '1/√2', cos: '1/√2', tan: '1', cosec: '√2', sec: '√2', cot: '1' },
    { angle: '60° (π/3)', n: 3, sin: '√3/2', cos: '1/2', tan: '√3', cosec: '2/√3', sec: '2', cot: '1/√3' },
    { angle: '90° (π/2)', n: 4, sin: '1', cos: '0', tan: 'Undefined (∞)', cosec: '1', sec: 'Undefined (∞)', cot: '0' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      
      {/* 1. In-Depth Tutorial Explanation from Scratch */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <BookOpen size={24} color="var(--purple)" />
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-main)' }}>
            📖 What is Trigonometry? (Concept Explained From Scratch)
          </h3>
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
          <strong>Trigonometry</strong> comes from Greek <em>"Trigonon"</em> (Triangle) and <em>"Metron"</em> (Measure). It studies all 6 fundamental trigonometric ratios: Primary (sin, cos, tan) and Reciprocal (cosec, sec, cot)!
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '14px' }}>
          <div style={{ backgroundColor: '#eff6ff', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #3b82f6' }}>
            <strong style={{ color: '#1d4ed8' }}>1. Sine (sin) & Cosecant (cosec)</strong>
            <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>sin θ = Opp / Hyp<br /><strong>cosec θ = 1 / sin θ = Hyp / Opp</strong></div>
          </div>

          <div style={{ backgroundColor: '#f0fdf4', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #22c55e' }}>
            <strong style={{ color: '#15803d' }}>2. Cosine (cos) & Secant (sec)</strong>
            <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>cos θ = Adj / Hyp<br /><strong>sec θ = 1 / cos θ = Hyp / Adj</strong></div>
          </div>

          <div style={{ backgroundColor: '#fdf4ff', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #c084fc' }}>
            <strong style={{ color: '#7e22ce' }}>3. Tangent (tan) & Cotangent (cot)</strong>
            <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>tan θ = Opp / Adj<br /><strong>cot θ = 1 / tan θ = Adj / Opp</strong></div>
          </div>
        </div>
      </div>

      {/* 2. Direct Point Drag Interactive Canvas */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        
        {/* SVG Unit Circle Visualizer with DIRECT POINT DRAGGING */}
        <div style={{
          backgroundColor: '#0f172a', borderRadius: 'var(--radius-md)', padding: '20px',
          boxShadow: 'var(--shadow-md)', border: '3px solid var(--purple)', display: 'flex', flexDirection: 'column', alignItems: 'center',
          userSelect: 'none'
        }}>
          <div style={{ color: '#ffc800', fontSize: '0.82rem', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Compass size={16} /> Click & Drag Point P(x,y) Directly On Circle!
          </div>

          <svg
            ref={svgRef}
            width={size}
            height={size}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
            style={{ overflow: 'visible', cursor: 'grab' }}
          >
            {/* Grid & Axes */}
            <line x1="10" y1={center} x2={size - 10} y2={center} stroke="#334155" strokeWidth="2" />
            <line x1={center} y1="10" x2={center} y2={size - 10} stroke="#334155" strokeWidth="2" />

            {/* Unit Circle */}
            <circle cx={center} cy={center} r={radius} fill="none" stroke="#1cb0f6" strokeWidth="3.5" strokeDasharray="4 4" />

            {/* Cosine (Adjacent - Blue) */}
            <line x1={center} y1={center} x2={px} y2={center} stroke="#3b82f6" strokeWidth="4.5" />
            
            {/* Sine (Opposite - Green) */}
            <line x1={px} y1={center} x2={px} y2={py} stroke="#22c55e" strokeWidth="4.5" />

            {/* Hypotenuse (Radius - Orange) */}
            <line x1={center} y1={center} x2={px} y2={py} stroke="#f97316" strokeWidth="3.5" />

            {/* Angle Arc */}
            <path
              d={`M ${center + 28} ${center} A 28 28 0 0 0 ${center + 28 * Math.cos(rad)} ${center - 28 * Math.sin(rad)}`}
              fill="none"
              stroke="#ffc800"
              strokeWidth="3"
            />

            {/* DRAGGABLE POINT P(x, y) */}
            <circle
              cx={px}
              cy={py}
              r="12"
              fill="#f43f5e"
              stroke="#ffffff"
              strokeWidth="3"
              style={{ cursor: 'pointer', filter: 'drop-shadow(0 0 8px #f43f5e)' }}
            />
            <circle cx={px} cy={py} r="4" fill="#ffffff" />

            {/* Labels */}
            <text x={center + 12} y={center - 12} fill="#ffc800" fontSize="13" fontWeight="800">θ = {angle}°</text>
            <text x={px + 10} y={py - 10} fill="#f43f5e" fontSize="13" fontWeight="800">P({cosVal}, {sinVal})</text>
          </svg>
        </div>

        {/* Live Values Dashboard */}
        <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '380px' }}>
          
          <div style={{ backgroundColor: 'var(--bg-main)', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--text-muted)' }}>CURRENT ANGLE & RADIANS</div>
            <div style={{ fontSize: '1.6rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: 'var(--purple)', marginTop: '2px' }}>
              θ = {angle}° <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>({(angle * Math.PI / 180).toFixed(2)} rad)</span>
            </div>
          </div>

          {/* Trig Ratios Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ backgroundColor: '#eff6ff', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1.5px solid #3b82f6' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#1d4ed8' }}>cos(θ) [Adj/Hyp]</span>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e40af', marginTop: '2px' }}>{cosVal}</div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#3b82f6' }}>sec(θ) = {Number(cosVal) !== 0 ? (1 / Number(cosVal)).toFixed(3) : '∞'}</span>
            </div>

            <div style={{ backgroundColor: '#f0fdf4', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1.5px solid #22c55e' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#15803d' }}>sin(θ) [Opp/Hyp]</span>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#166534', marginTop: '2px' }}>{sinVal}</div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#22c55e' }}>cosec(θ) = {Number(sinVal) !== 0 ? (1 / Number(sinVal)).toFixed(3) : '∞'}</span>
            </div>
          </div>

          <div style={{ backgroundColor: '#fdf4ff', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1.5px solid #c084fc' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#7e22ce' }}>tan(θ) = sin/cos | cot(θ) = cos/sin</span>
            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#6b21a8', marginTop: '2px' }}>
              tan = {tanVal} | cot = {Number(sinVal) !== 0 ? (Number(cosVal) / Number(sinVal)).toFixed(3) : '∞'}
            </div>
          </div>

        </div>
      </div>

      {/* 3. Easy Memory Super-Table (All 6 Ratios: sin, cos, tan, cosec, sec, cot!) */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--purple)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <Sparkles size={24} color="var(--purple)" />
          <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--purple)' }}>
            ✨ Complete Trigonometry Values Table (All 6 Ratios: sin, cos, tan, cosec, sec, cot)
          </h4>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
          Remember the <strong>√(n) / 2 Formula</strong> for sin(θ), reverse for cos(θ), divide for tan(θ), and take reciprocals (1/x) for cosec, sec, and cot:
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--purple-light)', color: 'var(--purple)' }}>
                <th style={{ padding: '10px', border: '1px solid var(--border-light)' }}>Angle (θ)</th>
                <th style={{ padding: '10px', border: '1px solid var(--border-light)' }}>n</th>
                <th style={{ padding: '10px', border: '1px solid var(--border-light)' }}>sin θ</th>
                <th style={{ padding: '10px', border: '1px solid var(--border-light)' }}>cos θ</th>
                <th style={{ padding: '10px', border: '1px solid var(--border-light)' }}>tan θ</th>
                <th style={{ padding: '10px', border: '1px solid var(--border-light)', color: '#e11d48' }}>cosec θ (1/sin)</th>
                <th style={{ padding: '10px', border: '1px solid var(--border-light)', color: '#2563eb' }}>sec θ (1/cos)</th>
                <th style={{ padding: '10px', border: '1px solid var(--border-light)', color: '#9333ea' }}>cot θ (1/tan)</th>
              </tr>
            </thead>
            <tbody>
              {trigTable.map((row, idx) => (
                <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? 'var(--bg-card-solid)' : 'transparent' }}>
                  <td style={{ padding: '10px', border: '1px solid var(--border-light)', fontWeight: '800', color: 'var(--primary)' }}>{row.angle}</td>
                  <td style={{ padding: '10px', border: '1px solid var(--border-light)', fontWeight: '700' }}>n = {row.n}</td>
                  <td style={{ padding: '10px', border: '1px solid var(--border-light)', fontWeight: '800', color: '#22c55e' }}>{row.sin}</td>
                  <td style={{ padding: '10px', border: '1px solid var(--border-light)', fontWeight: '800', color: '#3b82f6' }}>{row.cos}</td>
                  <td style={{ padding: '10px', border: '1px solid var(--border-light)', fontWeight: '800', color: '#c084fc' }}>{row.tan}</td>
                  <td style={{ padding: '10px', border: '1px solid var(--border-light)', fontWeight: '800', color: '#e11d48' }}>{row.cosec}</td>
                  <td style={{ padding: '10px', border: '1px solid var(--border-light)', fontWeight: '800', color: '#2563eb' }}>{row.sec}</td>
                  <td style={{ padding: '10px', border: '1px solid var(--border-light)', fontWeight: '800', color: '#9333ea' }}>{row.cot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '14px', fontSize: '0.85rem', color: 'var(--text-main)', backgroundColor: 'var(--purple-light)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
          💡 <strong>How to remember all 6 ratios instantly:</strong><br />
          1. Calculate <strong>sin(θ) = √(n) / 2</strong> for n = 0, 1, 2, 3, 4 (0°, 30°, 45°, 60°, 90°).<br />
          2. <strong>cos(θ)</strong> is the reverse sequence of sin(θ).<br />
          3. <strong>tan(θ) = sin(θ) / cos(x)</strong>.<br />
          4. <strong>cosec(θ) = 1 / sin(θ)</strong>, <strong>sec(θ) = 1 / cos(θ)</strong>, and <strong>cot(θ) = 1 / tan(θ)</strong>!
        </div>
      </div>

    </div>
  );
};

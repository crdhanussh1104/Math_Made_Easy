import React, { useState, useRef } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { BookOpen, Sparkles, Activity, Move } from 'lucide-react';

export const AlgebraParabolaGrapher = () => {
  const [graphType, setGraphType] = useState('quadratic'); // linear vs quadratic
  
  // Quadratic y = ax^2 + bx + c
  const [a, setA] = useState(1);
  const [b, setB] = useState(-2);
  const [c, setC] = useState(-3);

  // Linear y = mx + k
  const [m, setM] = useState(2);
  const [k, setK] = useState(1);

  const svgRef = useRef(null);
  const isDraggingRef = useRef(false);

  // Graph params
  const width = 340;
  const height = 340;
  const scale = 20; // 20px per grid unit
  const cx = width / 2;
  const cy = height / 2;

  // Compute Quadratic Properties
  const discriminant = b * b - 4 * a * c;
  const vertexX = -b / (2 * a);
  const vertexY = a * vertexX * vertexX + b * vertexX + c;

  // Quadratic roots formula x = (-b +- sqrt(D)) / 2a
  let root1 = null;
  let root2 = null;
  if (discriminant >= 0) {
    root1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
    root2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
  }

  // Direct Mouse / Touch Dragging of Vertex on the Graph Viewport
  const updateGraphFromDrag = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    if (clientX === undefined || clientY === undefined) return;

    // Convert mouse coordinates back to math graph units
    const mathX = (clientX - rect.left - cx) / scale;
    const mathY = (cy - (clientY - rect.top)) / scale;

    if (graphType === 'quadratic') {
      // Set vertexX to mathX, vertexY to mathY -> solve b & c
      const newB = Math.round(-2 * a * mathX);
      const newC = Math.round(mathY - a * mathX * mathX);
      setB(newB);
      setC(newC);
    } else {
      // Set slope & intercept based on dragged point
      const newK = Math.round(mathY);
      setK(newK);
    }
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    updateGraphFromDrag(e);
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      updateGraphFromDrag(e);
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Build SVG Path
  const points = [];
  for (let xVal = -8; xVal <= 8; xVal += 0.2) {
    let yVal = 0;
    if (graphType === 'quadratic') {
      yVal = a * xVal * xVal + b * xVal + c;
    } else {
      yVal = m * xVal + k;
    }
    const px = cx + xVal * scale;
    const py = cy - yVal * scale;
    if (py >= -50 && py <= height + 50) {
      points.push(`${px},${py}`);
    }
  }
  const pathD = points.length > 0 ? `M ${points.join(' L ')}` : '';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      
      {/* 1. Tutorial Concept Explanation from Scratch */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <BookOpen size={24} color="var(--secondary)" />
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-main)' }}>
            📖 Algebra & Functions (Concept Explained From Scratch)
          </h3>
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
          A <strong>Function</strong> expresses how an output quantity <em>y</em> changes relative to an input <em>x</em>.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '12px' }}>
          <div style={{ backgroundColor: '#eff6ff', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #3b82f6' }}>
            <strong style={{ color: '#1d4ed8' }}>1. Linear Function (y = mx + c)</strong>
            <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>
              Forms a straight line. <em>m</em> is the <strong>Slope</strong> (steepness), and <em>c</em> is the <strong>y-intercept</strong> (where line crosses vertical y-axis).
            </div>
          </div>

          <div style={{ backgroundColor: '#f0fdf4', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #22c55e' }}>
            <strong style={{ color: '#15803d' }}>2. Quadratic Function (y = ax² + bx + c)</strong>
            <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>
              Forms a curved <strong>Parabola</strong>. Vertex point is at x = -b / (2a), and Quadratic Formula gives roots: x = (-b ± √(b² - 4ac)) / (2a).
            </div>
          </div>
        </div>
      </div>

      {/* Mode Switcher */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          onClick={() => setGraphType('quadratic')}
          style={{
            padding: '8px 18px', borderRadius: 'var(--radius-full)', border: 'none',
            backgroundColor: graphType === 'quadratic' ? 'var(--secondary)' : 'var(--bg-main)',
            color: graphType === 'quadratic' ? '#fff' : 'var(--text-muted)',
            fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
          }}
        >
          Parabola y = ax² + bx + c
        </button>

        <button
          onClick={() => setGraphType('linear')}
          style={{
            padding: '8px 18px', borderRadius: 'var(--radius-full)', border: 'none',
            backgroundColor: graphType === 'linear' ? 'var(--primary)' : 'var(--bg-main)',
            color: graphType === 'linear' ? '#fff' : 'var(--text-muted)',
            fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
          }}
        >
          Straight Line y = mx + c
        </button>
      </div>

      {/* 2. Direct Point Drag Canvas Viewport */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        
        <div style={{
          backgroundColor: '#0f172a', borderRadius: 'var(--radius-md)', padding: '16px',
          boxShadow: 'var(--shadow-md)', border: '3px solid var(--secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center',
          userSelect: 'none'
        }}>
          <div style={{ color: '#00f0ff', fontSize: '0.82rem', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Move size={16} /> Click & Drag Vertex / Graph Point Directly On Canvas!
          </div>

          <svg
            ref={svgRef}
            width={width}
            height={height}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
            style={{ overflow: 'hidden', cursor: 'crosshair' }}
          >
            {/* Grid Lines */}
            {[-6, -4, -2, 2, 4, 6].map(val => (
              <React.Fragment key={val}>
                <line x1={cx + val * scale} y1="0" x2={cx + val * scale} y2={height} stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="0" y1={cy - val * scale} x2={width} y2={cy - val * scale} stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
              </React.Fragment>
            ))}

            {/* Axes */}
            <line x1="0" y1={cy} x2={width} y2={cy} stroke="#94a3b8" strokeWidth="2" />
            <line x1={cx} y1="0" x2={cx} y2={height} stroke="#94a3b8" strokeWidth="2" />

            {/* Function Curve */}
            {pathD && <path d={pathD} fill="none" stroke="#00f0ff" strokeWidth="4" />}

            {/* DRAGGABLE Vertex Point for Quadratic */}
            {graphType === 'quadratic' && (
              <g style={{ cursor: 'pointer' }}>
                <circle
                  cx={cx + vertexX * scale}
                  cy={cy - vertexY * scale}
                  r="10"
                  fill="#ff9600"
                  stroke="#ffffff"
                  strokeWidth="3"
                  style={{ filter: 'drop-shadow(0 0 6px #ff9600)' }}
                />
                <circle cx={cx + vertexX * scale} cy={cy - vertexY * scale} r="3" fill="#ffffff" />
              </g>
            )}
          </svg>
        </div>

        {/* Live Controls & Detailed Equation Analysis */}
        <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '380px' }}>
          
          {graphType === 'quadratic' ? (
            <div style={{ backgroundColor: 'var(--bg-main)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontWeight: '800', fontSize: '1.05rem', color: 'var(--secondary)' }}>
                Quadratic: y = {a}x² {b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}x {c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`}
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '800' }}>Curvature (a): {a}</label>
                <input type="range" min="-3" max="3" step="0.5" value={a} onChange={(e) => setA(Number(e.target.value) || 0.5)} style={{ width: '100%', accentColor: 'var(--secondary)' }} />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '800' }}>Linear Term (b): {b}</label>
                <input type="range" min="-8" max="8" value={b} onChange={(e) => setB(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--secondary)' }} />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '800' }}>Constant (c): {c}</label>
                <input type="range" min="-8" max="8" value={c} onChange={(e) => setC(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--secondary)' }} />
              </div>
            </div>
          ) : (
            <div style={{ backgroundColor: 'var(--bg-main)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontWeight: '800', fontSize: '1.05rem', color: 'var(--primary)' }}>
                Linear: y = {m}x {k >= 0 ? `+ ${k}` : `- ${Math.abs(k)}`}
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '800' }}>Slope (m): {m}</label>
                <input type="range" min="-5" max="5" value={m} onChange={(e) => setM(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--primary)' }} />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '800' }}>y-Intercept (c): {k}</label>
                <input type="range" min="-6" max="6" value={k} onChange={(e) => setK(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--primary)' }} />
              </div>
            </div>
          )}

          {/* Mathematical Property Analysis Box */}
          {graphType === 'quadratic' && (
            <div style={{ backgroundColor: '#f0fdf4', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1.5px solid #22c55e', fontSize: '0.88rem', lineHeight: '1.5' }}>
              <div><strong>Vertex Point (h, k):</strong> ({vertexX.toFixed(2)}, {vertexY.toFixed(2)})</div>
              <div><strong>Discriminant (Δ = b² - 4ac):</strong> {discriminant}</div>
              <div>
                <strong>Roots / X-Intercepts:</strong> {discriminant >= 0 ? `x₁ = ${root1}, x₂ = ${root2}` : 'No real roots (discriminant < 0)'}
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

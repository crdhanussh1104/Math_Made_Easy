import React, { useState, useEffect, useRef } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import {
  Calculator, Activity, Grid, RefreshCw, Delete, Move, Layers,
  Sliders, ArrowRight, CheckCircle2, HelpCircle, TrendingUp
} from 'lucide-react';

// Safe mathematical expression evaluator without eval
const safeEvaluateMath = (expr) => {
  if (!expr || typeof expr !== 'string') return 0;
  
  // Clean tokens
  let s = expr
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π/g, `${Math.PI}`)
    .replace(/e/g, `${Math.E}`)
    .trim();

  // Handle scientific functions: sin, cos, tan, sqrt, log
  s = s.replace(/sin\(([^)]+)\)/g, (_, val) => Math.sin(safeEvaluateMath(val) * Math.PI / 180));
  s = s.replace(/cos\(([^)]+)\)/g, (_, val) => Math.cos(safeEvaluateMath(val) * Math.PI / 180));
  s = s.replace(/tan\(([^)]+)\)/g, (_, val) => Math.tan(safeEvaluateMath(val) * Math.PI / 180));
  s = s.replace(/sqrt\(([^)]+)\)/g, (_, val) => Math.sqrt(safeEvaluateMath(val)));
  s = s.replace(/log\(([^)]+)\)/g, (_, val) => Math.log10(safeEvaluateMath(val)));

  // Simple recursive descent / tokenized parser for +, -, *, /, ^
  try {
    const tokens = [];
    let numberBuffer = '';
    
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if ('0123456789.'.includes(char)) {
        numberBuffer += char;
      } else if ('+-*/^()'.includes(char)) {
        if (numberBuffer.length > 0) {
          tokens.push(parseFloat(numberBuffer));
          numberBuffer = '';
        }
        tokens.push(char);
      }
    }
    if (numberBuffer.length > 0) {
      tokens.push(parseFloat(numberBuffer));
    }

    // Parse simple expressions
    let pos = 0;

    const parsePrimary = () => {
      const token = tokens[pos++];
      if (typeof token === 'number') return token;
      if (token === '(') {
        const val = parseExpression();
        pos++; // skip ')'
        return val;
      }
      if (token === '-') {
        return -parsePrimary();
      }
      return 0;
    };

    const parsePower = () => {
      let val = parsePrimary();
      while (pos < tokens.length && tokens[pos] === '^') {
        pos++;
        const exp = parsePrimary();
        val = Math.pow(val, exp);
      }
      return val;
    };

    const parseTerm = () => {
      let val = parsePower();
      while (pos < tokens.length && (tokens[pos] === '*' || tokens[pos] === '/')) {
        const op = tokens[pos++];
        const next = parsePower();
        if (op === '*') val *= next;
        else if (op === '/') val = next === 0 ? 0 : val / next;
      }
      return val;
    };

    const parseExpression = () => {
      let val = parseTerm();
      while (pos < tokens.length && (tokens[pos] === '+' || tokens[pos] === '-')) {
        const op = tokens[pos++];
        const next = parseTerm();
        if (op === '+') val += next;
        else if (op === '-') val -= next;
      }
      return val;
    };

    const result = parseExpression();
    return isNaN(result) ? 'Error' : Number(result.toFixed(6));
  } catch (err) {
    return 'Error';
  }
};

export const InteractiveCalculatorsSuite = () => {
  const [activeCalc, setActiveCalc] = useState('scientific'); // scientific, grapher, prime_tree, matrix, unit_converter

  // 1. Scientific Calculator State
  const [calcDisplay, setCalcDisplay] = useState('0');

  const handleCalcInput = (char) => {
    soundFx.playClick();
    if (calcDisplay === '0' || calcDisplay === 'Error') {
      setCalcDisplay(char);
    } else {
      setCalcDisplay(prev => prev + char);
    }
  };

  const handleCalcClear = () => {
    soundFx.playClick();
    setCalcDisplay('0');
  };

  const handleCalcEval = () => {
    soundFx.playClick();
    const res = safeEvaluateMath(calcDisplay);
    setCalcDisplay(String(res));
  };

  // 2. 2D Interactive Function Curve Grapher State
  const canvasRef = useRef(null);
  const [graphType, setGraphType] = useState('quadratic'); // linear, quadratic, sine, cubic
  const [paramA, setParamA] = useState(1);
  const [paramB, setParamB] = useState(0);
  const [paramC, setParamC] = useState(-4);

  useEffect(() => {
    if (activeCalc !== 'grapher') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const originX = w / 2;
    const originY = h / 2;
    const scale = 25; // 25 px per unit

    // Background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;

    for (let x = 0; x < w; x += scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(w, originY);
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, h);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#64748b';
    ctx.font = '10px monospace';
    for (let i = -10; i <= 10; i += 2) {
      if (i !== 0) {
        ctx.fillText(i, originX + i * scale - 4, originY + 14);
        ctx.fillText(-i, originX + 6, originY + i * scale + 4);
      }
    }

    // Plot Curve
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();

    let started = false;
    for (let px = 0; px < w; px += 2) {
      const x = (px - originX) / scale;
      let y = 0;

      if (graphType === 'linear') {
        y = paramA * x + paramB;
      } else if (graphType === 'quadratic') {
        y = paramA * x * x + paramB * x + paramC;
      } else if (graphType === 'sine') {
        y = paramA * Math.sin(paramB * x);
      } else if (graphType === 'cubic') {
        y = paramA * x * x * x + paramB * x * x + paramC;
      }

      const py = originY - y * scale;
      if (!started) {
        ctx.moveTo(px, py);
        started = true;
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.stroke();

    // Plot Vertex / Intercept Key Points
    if (graphType === 'quadratic' && paramA !== 0) {
      const vx = -paramB / (2 * paramA);
      const vy = paramA * vx * vx + paramB * vx + paramC;
      const vpx = originX + vx * scale;
      const vpy = originY - vy * scale;

      ctx.fillStyle = '#f43f5e';
      ctx.beginPath();
      ctx.arc(vpx, vpy, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = '11px sans-serif';
      ctx.fillText(`Vertex (${vx.toFixed(1)}, ${vy.toFixed(1)})`, vpx + 10, vpy - 4);
    }
  }, [activeCalc, graphType, paramA, paramB, paramC]);

  // 3. Prime Factor Tree Generator State
  const [primeInput, setPrimeInput] = useState(60);

  const getPrimeFactors = (n) => {
    let num = Math.max(2, Math.min(999, parseInt(n, 10) || 60));
    const factors = [];
    let d = 2;
    while (d * d <= num) {
      while (num % d === 0) {
        factors.push(d);
        num = Math.floor(num / d);
      }
      d++;
    }
    if (num > 1) factors.push(num);
    return factors;
  };

  // 4. Matrix Calculator State
  const [matA, setMatA] = useState([[2, 1], [1, 3]]);
  const [matB, setMatB] = useState([[1, 0], [2, 1]]);

  const detA = matA[0][0] * matA[1][1] - matA[0][1] * matA[1][0];
  const matSum = [
    [matA[0][0] + matB[0][0], matA[0][1] + matB[0][1]],
    [matA[1][0] + matB[1][0], matA[1][1] + matB[1][1]]
  ];
  const matProd = [
    [matA[0][0] * matB[0][0] + matA[0][1] * matB[1][0], matA[0][0] * matB[0][1] + matA[0][1] * matB[1][1]],
    [matA[1][0] * matB[0][0] + matA[1][1] * matB[1][0], matA[1][0] * matB[0][1] + matA[1][1] * matB[1][1]]
  ];

  // 5. Unit Converter State
  const [unitType, setUnitType] = useState('length');
  const [inputVal, setInputVal] = useState(1);
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');

  const convertUnits = () => {
    const val = Number(inputVal) || 0;
    if (unitType === 'length') {
      let meters = val;
      if (fromUnit === 'kilometer') meters = val * 1000;
      if (fromUnit === 'centimeter') meters = val / 100;
      if (fromUnit === 'mile') meters = val * 1609.34;
      if (fromUnit === 'foot') meters = val * 0.3048;

      if (toUnit === 'meter') return meters.toFixed(3);
      if (toUnit === 'kilometer') return (meters / 1000).toFixed(4);
      if (toUnit === 'centimeter') return (meters * 100).toFixed(2);
      if (toUnit === 'mile') return (meters / 1609.34).toFixed(4);
      if (toUnit === 'foot') return (meters / 0.3048).toFixed(2);
    } else if (unitType === 'mass') {
      let kg = val;
      if (fromUnit === 'gram') kg = val / 1000;
      if (fromUnit === 'pound') kg = val * 0.453592;
      if (toUnit === 'kilogram') return kg.toFixed(3);
      if (toUnit === 'gram') return (kg * 1000).toFixed(2);
      if (toUnit === 'pound') return (kg / 0.453592).toFixed(3);
    }
    return val;
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: 'var(--bg-card-solid)' }}>
      
      {/* Header & Mode Switcher */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calculator size={22} color="var(--secondary)" />
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800' }}>
              Interactive Mathematical Calculators & Visual Grapher Suite
            </h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Scientific calculations, 2D curve plotting, prime factor trees, matrix algebra, and unit conversions.
          </p>
        </div>

        {/* Tool Switcher */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { id: 'scientific', label: '🧮 Scientific Calc' },
            { id: 'grapher', label: '📈 2D Function Grapher' },
            { id: 'prime_tree', label: '🌳 Prime Factor Tree' },
            { id: 'matrix', label: '🔲 Matrix Solver' },
            { id: 'unit_converter', label: '🔄 Unit Converter' }
          ].map(tool => (
            <button
              key={tool.id}
              onClick={() => { setActiveCalc(tool.id); soundFx.playClick(); }}
              style={{
                padding: '8px 14px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: activeCalc === tool.id ? 'var(--primary)' : 'var(--bg-main)',
                color: activeCalc === tool.id ? '#ffffff' : 'var(--text-muted)',
                fontWeight: '800',
                fontFamily: 'var(--font-rounded)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {tool.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. Scientific Calculator */}
      {activeCalc === 'scientific' && (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{
            width: '100%', maxWidth: '380px', backgroundColor: '#0f172a', borderRadius: 'var(--radius-lg)',
            padding: '22px', border: '3px solid var(--secondary)', boxShadow: 'var(--shadow-lg)'
          }}>
            {/* Display */}
            <div style={{
              backgroundColor: '#1e293b', color: '#00f0ff', padding: '16px', borderRadius: 'var(--radius-md)',
              fontSize: '1.6rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', textAlign: 'right',
              marginBottom: '16px', overflowX: 'auto', border: '1px solid #334155'
            }}>
              {calcDisplay}
            </div>

            {/* Keypad */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {['C', '(', ')', '÷', 'sin(', 'cos(', 'tan(', '×', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.', 'sqrt('].map((btn, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (btn === 'C') handleCalcClear();
                    else if (btn === '=') handleCalcEval();
                    else handleCalcInput(btn);
                  }}
                  style={{
                    padding: '12px', borderRadius: 'var(--radius-sm)', border: 'none',
                    backgroundColor: btn === '=' ? 'var(--secondary)' : btn === 'C' ? '#ef4444' : ['÷','×','-','+'].includes(btn) ? 'var(--primary)' : '#334155',
                    color: '#ffffff', fontWeight: '800', fontSize: '0.95rem', cursor: 'pointer',
                    gridColumn: btn === '=' ? 'span 2' : 'auto'
                  }}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. 2D Interactive Function Curve Grapher */}
      {activeCalc === 'grapher' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { id: 'linear', label: 'y = mx + c (Linear)' },
              { id: 'quadratic', label: 'y = ax² + bx + c (Parabola)' },
              { id: 'sine', label: 'y = a·sin(bx) (Wave)' },
              { id: 'cubic', label: 'y = ax³ + bx² + c (Cubic)' }
            ].map(gt => (
              <button
                key={gt.id}
                onClick={() => setGraphType(gt.id)}
                style={{
                  padding: '6px 12px', borderRadius: '8px', border: 'none',
                  background: graphType === gt.id ? '#38bdf8' : '#f1f5f9',
                  color: graphType === gt.id ? '#0f172a' : '#475569',
                  fontWeight: '800', fontSize: '0.8rem', cursor: 'pointer'
                }}
              >
                {gt.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            {/* Sliders */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '260px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '800', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Coefficient a (or m):</span>
                  <span>{paramA}</span>
                </label>
                <input type="range" min="-5" max="5" step="0.5" value={paramA} onChange={(e) => setParamA(parseFloat(e.target.value))} style={{ width: '100%' }} />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '800', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Coefficient b:</span>
                  <span>{paramB}</span>
                </label>
                <input type="range" min="-5" max="5" step="0.5" value={paramB} onChange={(e) => setParamB(parseFloat(e.target.value))} style={{ width: '100%' }} />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '800', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Constant c:</span>
                  <span>{paramC}</span>
                </label>
                <input type="range" min="-10" max="10" step="1" value={paramC} onChange={(e) => setParamC(parseFloat(e.target.value))} style={{ width: '100%' }} />
              </div>

              <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '10px', fontSize: '0.82rem', color: '#166534', fontWeight: '700' }}>
                💡 <strong>Equation:</strong> {graphType === 'linear' ? `y = ${paramA}x + ${paramB}` : graphType === 'quadratic' ? `y = ${paramA}x² + ${paramB}x + ${paramC}` : `y = ${paramA}·sin(${paramB}x)`}
              </div>
            </div>

            {/* Canvas */}
            <canvas ref={canvasRef} width={420} height={280} style={{ borderRadius: '12px', border: '2px solid #334155', maxWidth: '100%' }} />
          </div>
        </div>
      )}

      {/* 3. Prime Factor Tree Generator */}
      {activeCalc === 'prime_tree' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '800' }}>Enter Number (2 to 999):</label>
            <input
              type="number"
              min="2"
              max="999"
              value={primeInput}
              onChange={(e) => setPrimeInput(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontWeight: '800', width: '100px' }}
            />
          </div>

          <div style={{ background: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '16px', padding: '24px', textAlign: 'center', maxWidth: '500px', width: '100%' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#4f46e5' }}>{primeInput}</div>
            <div style={{ marginTop: '12px', fontSize: '0.95rem', fontWeight: '800', color: '#0f172a' }}>
              Prime Factorization:
            </div>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', marginTop: '8px', flexWrap: 'wrap' }}>
              {getPrimeFactors(primeInput).map((f, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <span style={{ color: '#94a3b8', fontWeight: '800' }}>×</span>}
                  <span style={{ background: '#dcfce7', color: '#166534', border: '1.5px solid #86efac', borderRadius: '50%', width: '36px', height: '36px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900' }}>
                    {f}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. Matrix Calculator */}
      {activeCalc === 'matrix' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Matrix A */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#4f46e5' }}>Matrix A (2×2)</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 50px)', gap: '6px', padding: '8px', borderLeft: '3px solid #4f46e5', borderRight: '3px solid #4f46e5', borderRadius: '4px' }}>
                <input type="number" value={matA[0][0]} onChange={(e) => setMatA([[parseFloat(e.target.value)||0, matA[0][1]], matA[1]])} style={{ width: '44px', textAlign: 'center', fontWeight: '800', padding: '4px' }} />
                <input type="number" value={matA[0][1]} onChange={(e) => setMatA([[matA[0][0], parseFloat(e.target.value)||0], matA[1]])} style={{ width: '44px', textAlign: 'center', fontWeight: '800', padding: '4px' }} />
                <input type="number" value={matA[1][0]} onChange={(e) => setMatA([matA[0], [parseFloat(e.target.value)||0, matA[1][1]]])} style={{ width: '44px', textAlign: 'center', fontWeight: '800', padding: '4px' }} />
                <input type="number" value={matA[1][1]} onChange={(e) => setMatA([matA[0], [matA[1][0], parseFloat(e.target.value)||0]])} style={{ width: '44px', textAlign: 'center', fontWeight: '800', padding: '4px' }} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b' }}>det(A) = {detA}</div>
            </div>

            {/* Matrix B */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#0284c7' }}>Matrix B (2×2)</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 50px)', gap: '6px', padding: '8px', borderLeft: '3px solid #0284c7', borderRight: '3px solid #0284c7', borderRadius: '4px' }}>
                <input type="number" value={matB[0][0]} onChange={(e) => setMatB([[parseFloat(e.target.value)||0, matB[0][1]], matB[1]])} style={{ width: '44px', textAlign: 'center', fontWeight: '800', padding: '4px' }} />
                <input type="number" value={matB[0][1]} onChange={(e) => setMatB([[matB[0][0], parseFloat(e.target.value)||0], matB[1]])} style={{ width: '44px', textAlign: 'center', fontWeight: '800', padding: '4px' }} />
                <input type="number" value={matB[1][0]} onChange={(e) => setMatB([matB[0], [parseFloat(e.target.value)||0, matB[1][1]]])} style={{ width: '44px', textAlign: 'center', fontWeight: '800', padding: '4px' }} />
                <input type="number" value={matB[1][1]} onChange={(e) => setMatB([matB[0], [matB[1][0], parseFloat(e.target.value)||0]])} style={{ width: '44px', textAlign: 'center', fontWeight: '800', padding: '4px' }} />
              </div>
            </div>
          </div>

          {/* Matrix Results */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px 18px', textAlign: 'center' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#16a34a' }}>Matrix A + B:</span>
              <div style={{ fontFamily: 'monospace', fontWeight: '800', fontSize: '1rem', marginTop: '4px' }}>
                [{matSum[0][0]}, {matSum[0][1]}]<br />[{matSum[1][0]}, {matSum[1][1]}]
              </div>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px 18px', textAlign: 'center' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#7c3aed' }}>Matrix A × B (Product):</span>
              <div style={{ fontFamily: 'monospace', fontWeight: '800', fontSize: '1rem', marginTop: '4px' }}>
                [{matProd[0][0]}, {matProd[0][1]}]<br />[{matProd[1][0]}, {matProd[1][1]}]
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Universal Unit Converter */}
      {activeCalc === 'unit_converter' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', backgroundColor: 'var(--bg-main)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--primary)' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', display: 'block', marginBottom: '4px' }}>Unit Type:</label>
              <select value={unitType} onChange={(e) => setUnitType(e.target.value)} style={{ padding: '10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '800' }}>
                <option value="length">Length</option>
                <option value="mass">Mass / Weight</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', display: 'block', marginBottom: '4px' }}>Value:</label>
              <input
                type="number"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                style={{ padding: '10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '800', width: '100px' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', display: 'block', marginBottom: '4px' }}>From Unit:</label>
              <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} style={{ padding: '10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '800' }}>
                <option value="meter">Meter (m)</option>
                <option value="kilometer">Kilometer (km)</option>
                <option value="centimeter">Centimeter (cm)</option>
                <option value="mile">Mile (mi)</option>
                <option value="foot">Foot (ft)</option>
              </select>
            </div>

            <div style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--primary)' }}>➔</div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', display: 'block', marginBottom: '4px' }}>To Unit:</label>
              <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} style={{ padding: '10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '800' }}>
                <option value="meter">Meter (m)</option>
                <option value="kilometer">Kilometer (km)</option>
                <option value="centimeter">Centimeter (cm)</option>
                <option value="mile">Mile (mi)</option>
                <option value="foot">Foot (ft)</option>
              </select>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--primary-light)', padding: '16px 24px', borderRadius: 'var(--radius-md)', border: '2px solid var(--primary)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)' }}>Converted Result:</span>
            <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: 'var(--primary)', marginTop: '4px' }}>
              {inputVal} {fromUnit} = {convertUnits()} {toUnit}
            </div>
          </div>
        </div>
      )}

    </CardRounded>
  );
};


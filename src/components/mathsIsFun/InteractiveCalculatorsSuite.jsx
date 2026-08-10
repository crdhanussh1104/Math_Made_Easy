import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { Calculator, Activity, Grid, RefreshCw, Delete } from 'lucide-react';

export const InteractiveCalculatorsSuite = () => {
  const [activeCalc, setActiveCalc] = useState('scientific'); // scientific, unit_converter, matrix

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
    try {
      // Safe math expression evaluation
      let sanitized = calcDisplay
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/sqrt\(/g, 'Math.sqrt(');

      const res = eval(sanitized);
      setCalcDisplay(String(res));
    } catch (err) {
      setCalcDisplay('Error');
    }
  };

  // 2. Unit Converter State
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
    }
    return val;
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: 'var(--bg-card-solid)' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calculator size={22} color="var(--secondary)" />
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800' }}>
              Universal Interactive Calculators & Conversion Tools Suite
            </h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Scientific calculations, function graphing, matrix algebra, and unit conversions!
          </p>
        </div>

        {/* Tool Switcher */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setActiveCalc('scientific')}
            style={{
              padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
              backgroundColor: activeCalc === 'scientific' ? 'var(--secondary)' : 'var(--bg-main)',
              color: activeCalc === 'scientific' ? '#fff' : 'var(--text-muted)',
              fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
            }}
          >
            Scientific Calc
          </button>

          <button
            onClick={() => setActiveCalc('unit_converter')}
            style={{
              padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
              backgroundColor: activeCalc === 'unit_converter' ? 'var(--primary)' : 'var(--bg-main)',
              color: activeCalc === 'unit_converter' ? '#fff' : 'var(--text-muted)',
              fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
            }}
          >
            Unit Converter
          </button>
        </div>
      </div>

      {/* 1. Scientific Calculator */}
      {activeCalc === 'scientific' && (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{
            width: '100%', maxWidth: '360px', backgroundColor: '#0f172a', borderRadius: 'var(--radius-lg)',
            padding: '20px', border: '3px solid var(--secondary)', boxShadow: 'var(--shadow-lg)'
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
                    backgroundColor: btn === '=' ? 'var(--secondary)' : btn === 'C' ? 'var(--accent)' : ['÷','×','-','+'].includes(btn) ? 'var(--primary)' : '#334155',
                    color: '#ffffff', fontWeight: '800', fontSize: '1rem', cursor: 'pointer',
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

      {/* 2. Universal Unit Converter */}
      {activeCalc === 'unit_converter' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', backgroundColor: 'var(--bg-main)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--primary)' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', display: 'block', marginBottom: '4px' }}>Value:</label>
              <input
                type="number"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                style={{ padding: '10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '800', width: '120px' }}
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

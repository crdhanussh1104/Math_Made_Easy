import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { RefreshCw, BookOpen, Scale, ArrowRight } from 'lucide-react';

export const MetricConversionsLab = () => {
  const [category, setCategory] = useState('length'); // length, mass, volume
  const [inputValue, setInputValue] = useState(1);
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('km');

  // Conversion factors relative to base unit (m, g, L)
  const lengthUnits = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    inch: 0.0254,
    ft: 0.3048,
    mile: 1609.34
  };

  const massUnits = {
    mg: 0.001,
    g: 1,
    kg: 1000,
    oz: 28.3495,
    lb: 453.592
  };

  const volumeUnits = {
    mL: 0.001,
    L: 1,
    cup: 0.24,
    gallon: 3.78541
  };

  const activeUnits = category === 'length' ? lengthUnits : category === 'mass' ? massUnits : volumeUnits;

  // Perform unit conversion
  const baseValue = inputValue * (activeUnits[fromUnit] || 1);
  const convertedValue = baseValue / (activeUnits[toUnit] || 1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      
      {/* Concept Explanation */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <BookOpen size={24} color="#06b6d4" />
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-main)' }}>
            📖 Metric & Imperial Unit Conversions (Explained From Scratch)
          </h3>
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
          Unit conversion converts a physical measurement expressed in one unit (e.g. meters) into an equivalent quantity in another unit (e.g. kilometers or feet) using multiplying conversion factors.
        </p>
      </div>

      {/* Category Tabs */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        {[
          { id: 'length', label: '📏 Length' },
          { id: 'mass', label: '⚖️ Mass / Weight' },
          { id: 'volume', label: '🧪 Volume / Liquid' }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => {
              setCategory(cat.id);
              soundFx.playClick();
              if (cat.id === 'length') { setFromUnit('m'); setToUnit('km'); }
              if (cat.id === 'mass') { setFromUnit('kg'); setToUnit('g'); }
              if (cat.id === 'volume') { setFromUnit('L'); setToUnit('mL'); }
            }}
            style={{
              padding: '8px 18px', borderRadius: 'var(--radius-full)', border: 'none',
              backgroundColor: category === cat.id ? '#06b6d4' : 'var(--bg-main)',
              color: category === cat.id ? '#fff' : 'var(--text-muted)',
              fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Interactive Converter Workspace */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--bg-card-solid)', padding: '24px', borderRadius: 'var(--radius-md)', border: '2px solid #06b6d4' }}>
        
        {/* Input Value & Unit */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '0.82rem', fontWeight: '800', color: 'var(--text-muted)' }}>FROM VALUE & UNIT:</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(Number(e.target.value) || 0)}
              style={{ padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '800', width: '120px', fontSize: '1.1rem' }}
            />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              style={{ padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '800', fontSize: '1rem' }}
            >
              {Object.keys(activeUnits).map(u => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </div>
        </div>

        <ArrowRight size={28} color="#06b6d4" />

        {/* Output Unit & Result */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '0.82rem', fontWeight: '800', color: 'var(--text-muted)' }}>TO CONVERTED UNIT:</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            style={{ padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '800', fontSize: '1rem' }}
          >
            {Object.keys(activeUnits).map(u => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>

        {/* Result Card */}
        <div style={{ backgroundColor: 'var(--cyan-light)', padding: '16px 24px', borderRadius: 'var(--radius-md)', border: '2px solid #06b6d4', textAlign: 'center', minWidth: '220px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#06b6d4' }}>EQUIVALENT RESULT:</span>
          <div style={{ fontSize: '1.6rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: '#06b6d4', marginTop: '2px' }}>
            {convertedValue.toLocaleString(undefined, { maximumFractionDigits: 4 })} {toUnit}
          </div>
        </div>

      </div>

    </div>
  );
};

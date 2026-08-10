import React, { useState } from 'react';
import { BadgeChip } from '../ui/BadgeChip';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { BarChart3, Plus, Trash2 } from 'lucide-react';

export const StatisticsDataLab = () => {
  const [dataValues, setDataValues] = useState([12, 18, 15, 24, 18, 9]);
  const [newValue, setNewValue] = useState('');

  const handleAdd = () => {
    const val = Number(newValue);
    if (!isNaN(val) && val >= 0) {
      setDataValues(prev => [...prev, val]);
      setNewValue('');
      soundFx.playClick();
    }
  };

  const handleClear = () => {
    setDataValues([]);
    soundFx.playClick();
  };

  // Statistical Calculations
  const count = dataValues.length;
  const sum = dataValues.reduce((a, b) => a + b, 0);
  const mean = count > 0 ? (sum / count).toFixed(1) : 0;

  const sorted = [...dataValues].sort((a, b) => a - b);
  let median = 0;
  if (count > 0) {
    const mid = Math.floor(count / 2);
    median = count % 2 !== 0 ? sorted[mid] : ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(1);
  }

  // Mode
  const countsMap = {};
  dataValues.forEach(x => { countsMap[x] = (countsMap[x] || 0) + 1; });
  let maxFreq = 0;
  let modes = [];
  Object.keys(countsMap).forEach(k => {
    if (countsMap[k] > maxFreq) {
      maxFreq = countsMap[k];
      modes = [k];
    } else if (countsMap[k] === maxFreq && maxFreq > 1) {
      modes.push(k);
    }
  });
  const modeStr = maxFreq > 1 ? modes.join(', ') : 'No Mode';

  const minVal = count > 0 ? sorted[0] : 0;
  const maxVal = count > 0 ? sorted[count - 1] : 0;
  const range = maxVal - minVal;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '800' }}>
            📊 Data Handling & Statistics Calculator
          </h3>
          <BadgeChip label="Grades 4 - 10" color="var(--primary)" bg="var(--primary-light)" size="sm" />
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Enter data values to dynamically build Bar Charts and calculate Mean, Median, Mode, and Range!
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        
        {/* Dynamic Bar Chart Canvas */}
        <div style={{
          backgroundColor: '#0f172a', borderRadius: 'var(--radius-md)', padding: '20px',
          boxShadow: 'var(--shadow-md)', border: '2px solid var(--primary)',
          width: '320px', height: '260px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around',
          gap: '8px', overflowX: 'auto'
        }}>
          {dataValues.map((val, idx) => {
            const heightPct = maxVal > 0 ? (val / maxVal) * 100 : 0;

            return (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '800', marginBottom: '4px' }}>{val}</span>
                <div style={{
                  width: '100%', height: `${Math.max(12, heightPct)}%`,
                  backgroundColor: 'var(--primary)', borderRadius: '4px 4px 0 0',
                  transition: 'all 0.3s ease'
                }} />
                <span style={{ color: '#94a3b8', fontSize: '0.7rem', marginTop: '4px' }}>#{idx + 1}</span>
              </div>
            );
          })}
        </div>

        {/* Dynamic Stats Summary & Data Entry */}
        <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '380px' }}>
          
          {/* Data Entry Input */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="number"
              placeholder="Add data value..."
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
              style={{
                flex: 1, padding: '10px', borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--border-light)', fontWeight: '800', outline: 'none'
              }}
            />
            <Button3D variant="primary" size="sm" onClick={handleAdd} icon={Plus}>Add</Button3D>
            <Button3D variant="outline" size="sm" onClick={handleClear} icon={Trash2}>Clear</Button3D>
          </div>

          {/* Stats Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ backgroundColor: 'var(--bg-main)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--primary)' }}>Mean (Average)</span>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)' }}>{mean}</div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-main)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--secondary)' }}>Median (Middle)</span>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)' }}>{median}</div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-main)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--purple)' }}>Mode (Most Frequent)</span>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)' }}>{modeStr}</div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-main)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--warning)' }}>Range (Max - Min)</span>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)' }}>{range}</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

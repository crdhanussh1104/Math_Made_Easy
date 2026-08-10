import React, { useState } from 'react';
import { BadgeChip } from '../ui/BadgeChip';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { BarChart3, PieChart, TrendingUp, Plus, Trash2 } from 'lucide-react';

export const DataChartsLab = () => {
  const [chartType, setChartType] = useState('bar'); // bar, line, pie
  const [categories, setCategories] = useState([
    { label: 'Apples 🍎', value: 25, color: '#ef4444' },
    { label: 'Bananas 🍌', value: 40, color: '#eab308' },
    { label: 'Oranges 🍊', value: 15, color: '#f97316' },
    { label: 'Grapes 🍇', value: 30, color: '#a855f7' }
  ]);

  const [newLabel, setNewLabel] = useState('');
  const [newValue, setNewValue] = useState('');

  const totalSum = categories.reduce((acc, c) => acc + c.value, 0);
  const maxVal = Math.max(...categories.map(c => c.value), 1);

  const handleAdd = () => {
    if (!newLabel.trim() || isNaN(Number(newValue)) || Number(newValue) <= 0) return;
    soundFx.playClick();
    const colors = ['#3b82f6', '#10b981', '#f43f5e', '#8b5cf6', '#06b6d4', '#f59e0b', '#ec4899'];
    setCategories(prev => [
      ...prev,
      { label: newLabel.trim(), value: Number(newValue), color: colors[prev.length % colors.length] }
    ]);
    setNewLabel('');
    setNewValue('');
  };

  const handleRemove = (idx) => {
    soundFx.playClick();
    setCategories(prev => prev.filter((_, i) => i !== idx));
  };

  const handleValueChange = (idx, val) => {
    const num = Math.max(0, Number(val));
    setCategories(prev => prev.map((c, i) => i === idx ? { ...c, value: num } : c));
  };

  // Pie Chart SVG Angles
  let cumulativeAngle = 0;
  const pieSlices = categories.map(cat => {
    const fraction = totalSum > 0 ? cat.value / totalSum : 0;
    const angle = fraction * 360;
    const startAngle = cumulativeAngle;
    cumulativeAngle += angle;
    return { ...cat, fraction, startAngle, endAngle: cumulativeAngle };
  });

  const getPieSlicePath = (startAngle, endAngle) => {
    const cx = 140, cy = 140, r = 110;
    if (endAngle - startAngle >= 359.9) {
      return `M ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;
    }
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);

    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  // Line Plot Coordinates (bounded dynamically to canvas width)
  const marginX = 40;
  const usableWidth = 320 - marginX * 2;
  const lineStep = categories.length > 1 ? usableWidth / (categories.length - 1) : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '800' }}>
            📊 Interactive Data Charts Visualizer (Bar Charts, Line Plots & Pie Charts)
          </h3>
          <BadgeChip label="Grades 3 - 10" color="var(--primary)" bg="var(--primary-light)" size="sm" />
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Visualize categorical data instantly across Bar Charts, Line Graphs, and Pie Charts!
        </p>
      </div>

      {/* Chart Type Selector Tabs */}
      <div style={{ display: 'flex', gap: '8px', backgroundColor: 'var(--bg-main)', padding: '6px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)' }}>
        <button
          onClick={() => { soundFx.playClick(); setChartType('bar'); }}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: 'var(--radius-sm)',
            border: 'none', fontWeight: '800', fontSize: '0.85rem', cursor: 'pointer',
            backgroundColor: chartType === 'bar' ? 'var(--primary)' : 'transparent',
            color: chartType === 'bar' ? '#fff' : 'var(--text-main)'
          }}
        >
          <BarChart3 size={16} /> Bar Chart
        </button>

        <button
          onClick={() => { soundFx.playClick(); setChartType('line'); }}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: 'var(--radius-sm)',
            border: 'none', fontWeight: '800', fontSize: '0.85rem', cursor: 'pointer',
            backgroundColor: chartType === 'line' ? '#10b981' : 'transparent',
            color: chartType === 'line' ? '#fff' : 'var(--text-main)'
          }}
        >
          <TrendingUp size={16} /> Line Plot
        </button>

        <button
          onClick={() => { soundFx.playClick(); setChartType('pie'); }}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: 'var(--radius-sm)',
            border: 'none', fontWeight: '800', fontSize: '0.85rem', cursor: 'pointer',
            backgroundColor: chartType === 'pie' ? '#a855f7' : 'transparent',
            color: chartType === 'pie' ? '#fff' : 'var(--text-main)'
          }}
        >
          <PieChart size={16} /> Pie Chart
        </button>
      </div>

      {/* Main Canvas & Controls Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        
        {/* CHART RENDER CANVAS BOX (STRICTLY CONTAINED & RESPONSIVE) */}
        <div style={{
          backgroundColor: '#0f172a', borderRadius: 'var(--radius-md)', padding: '16px',
          boxShadow: 'var(--shadow-md)', border: '3px solid var(--primary)',
          width: '100%', maxWidth: '380px', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden', boxSizing: 'border-box'
        }}>

          {/* BAR CHART VIEW (AUTO SCALED & SCROLLABLE IF MANY ITEMS) */}
          {chartType === 'bar' && (
            <div style={{
              width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: categories.length > 6 ? 'flex-start' : 'space-around',
              gap: categories.length > 6 ? '8px' : '12px', overflowX: 'auto', paddingBottom: '6px', boxSizing: 'border-box'
            }}>
              {categories.map((cat, idx) => {
                const heightPct = (cat.value / maxVal) * 75;
                return (
                  <div key={idx} style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    flex: categories.length > 6 ? '0 0 45px' : '1 1 0px',
                    minWidth: '32px', height: '100%', justifyContent: 'flex-end'
                  }}>
                    <span style={{ color: '#00f0ff', fontSize: categories.length > 6 ? '0.7rem' : '0.8rem', fontWeight: '800', marginBottom: '4px' }}>
                      {cat.value}
                    </span>
                    <div style={{
                      width: '100%', height: `${Math.max(8, heightPct)}%`,
                      backgroundColor: cat.color, borderRadius: '4px 4px 0 0',
                      boxShadow: `0 0 8px ${cat.color}88`, transition: 'all 0.3s ease'
                    }} />
                    <span style={{
                      color: '#fff', fontSize: categories.length > 6 ? '0.65rem' : '0.75rem', fontWeight: '700', marginTop: '6px',
                      textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '100%', textAlign: 'center'
                    }}>
                      {cat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* LINE PLOT VIEW (BOUNDED DYNAMIC SVG) */}
          {chartType === 'line' && (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="100%" height="100%" viewBox="0 0 320 240" style={{ overflow: 'visible' }}>
                {/* Grid Lines */}
                {[0, 25, 50, 75, 100].map((pct, i) => (
                  <line key={i} x1="20" y1={190 - pct * 1.5} x2="300" y2={190 - pct * 1.5} stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                ))}

                {/* Line Segments */}
                {categories.map((cat, idx) => {
                  if (idx === 0) return null;
                  const prev = categories[idx - 1];
                  const x1 = categories.length === 1 ? 160 : marginX + (idx - 1) * lineStep;
                  const y1 = 190 - (prev.value / maxVal) * 140;
                  const x2 = marginX + idx * lineStep;
                  const y2 = 190 - (cat.value / maxVal) * 140;

                  return <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#10b981" strokeWidth="3" />;
                })}

                {/* Data Points */}
                {categories.map((cat, idx) => {
                  const cx = categories.length === 1 ? 160 : marginX + idx * lineStep;
                  const cy = 190 - (cat.value / maxVal) * 140;

                  return (
                    <g key={idx}>
                      <circle cx={cx} cy={cy} r="5" fill={cat.color} stroke="#fff" strokeWidth="2" />
                      <text x={cx} y={cy - 10} fill="#00f0ff" fontSize="10" fontWeight="800" textAnchor="middle">{cat.value}</text>
                      <text x={cx} y="215" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle">{cat.label.substring(0, 7)}</text>
                    </g>
                  );
                })}
              </svg>
            </div>
          )}

          {/* PIE CHART VIEW (SCROLLABLE LEGEND & CONTAINER) */}
          {chartType === 'pie' && (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', boxSizing: 'border-box' }}>
              <div style={{ flex: '0 0 150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="140" height="140" viewBox="0 0 280 280">
                  {pieSlices.map((slice, idx) => (
                    <path
                      key={idx}
                      d={getPieSlicePath(slice.startAngle, slice.endAngle)}
                      fill={slice.color}
                      stroke="#0f172a"
                      strokeWidth="2"
                    />
                  ))}
                </svg>
              </div>

              {/* Scrollable Legend */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '240px', overflowY: 'auto', paddingRight: '4px' }}>
                {pieSlices.map((slice, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#fff' }}>
                    <div style={{ width: '10px', height: '10px', backgroundColor: slice.color, borderRadius: '2px', flexShrink: 0 }} />
                    <span style={{ fontWeight: '700', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                      {slice.label}: {(slice.fraction * 100).toFixed(0)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* DATA MANAGEMENT & CONTROLS */}
        <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '400px' }}>
          
          {/* Add Category Form */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              placeholder="Category (e.g. Mangoes 🥭)"
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
              style={{ flex: 1.5, padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '700', outline: 'none' }}
            />
            <input
              type="number"
              placeholder="Value"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              style={{ flex: 1, padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '700', outline: 'none' }}
            />
            <Button3D variant="primary" size="sm" onClick={handleAdd} icon={Plus}>Add</Button3D>
          </div>

          {/* Category Rows Editor */}
          <div style={{ backgroundColor: 'var(--bg-main)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '200px', overflowY: 'auto' }}>
            {categories.map((cat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', backgroundColor: 'var(--bg-card-solid)', padding: '8px 12px', borderRadius: 'var(--radius-sm)', borderLeft: `4px solid ${cat.color}` }}>
                <span style={{ fontWeight: '800', fontSize: '0.88rem', color: 'var(--text-main)' }}>{cat.label}</span>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="number"
                    value={cat.value}
                    onChange={(e) => handleValueChange(idx, e.target.value)}
                    style={{ width: '60px', padding: '4px 6px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontWeight: '800', textAlign: 'center' }}
                  />
                  <button onClick={() => handleRemove(idx)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f43f5e' }}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

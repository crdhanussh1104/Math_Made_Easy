import React, { useState } from 'react';
import { Button3D } from '../../ui/Button3D';
import { Plus, Minus, RotateCcw, Sparkles, Grid, Layers } from 'lucide-react';

export const CountersGroupingLab = ({ config = {} }) => {
  const [rows, setRows] = useState(config.rows || 3);
  const [cols, setCols] = useState(config.cols || 4);
  const [mode, setMode] = useState(config.mode || 'multiply'); // 'multiply' | 'share'
  const [sharingGroups, setSharingGroups] = useState(4);
  const [totalItems, setTotalItems] = useState(config.totalItems || 12);

  const totalArrayCount = rows * cols;
  const itemsPerGroup = Math.floor(totalItems / sharingGroups);
  const remainder = totalItems % sharingGroups;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Mode Switcher */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => setMode('multiply')}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            background: mode === 'multiply' ? '#4f46e5' : '#f1f5f9',
            color: mode === 'multiply' ? '#ffffff' : '#475569',
            fontWeight: '800',
            cursor: 'pointer'
          }}
        >
          ✖️ Multiplication Array
        </button>
        <button
          onClick={() => setMode('share')}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            background: mode === 'share' ? '#4f46e5' : '#f1f5f9',
            color: mode === 'share' ? '#ffffff' : '#475569',
            fontWeight: '800',
            cursor: 'pointer'
          }}
        >
          ➗ Equal Sharing & Division
        </button>
      </div>

      {mode === 'multiply' ? (
        <>
          {/* Controls */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>
                Rows (Groups): <strong>{rows}</strong>
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={rows}
                onChange={(e) => setRows(parseInt(e.target.value))}
                style={{ width: '100%', marginTop: '6px' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>
                Columns (Items per row): <strong>{cols}</strong>
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={cols}
                onChange={(e) => setCols(parseInt(e.target.value))}
                style={{ width: '100%', marginTop: '6px' }}
              />
            </div>
          </div>

          {/* Mathematical Formula Readout */}
          <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '14px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#3730a3' }}>
              {rows} rows × {cols} columns = {totalArrayCount} total items
            </div>
            <div style={{ fontSize: '0.9rem', color: '#4f46e5', fontWeight: '700', marginTop: '4px' }}>
              Repeated Addition: {Array(rows).fill(cols).join(' + ')} = {totalArrayCount}
            </div>
          </div>

          {/* Visual Array Canvas */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '260px',
            background: '#ffffff',
            border: '2px dashed #cbd5e1',
            borderRadius: '16px',
            padding: '24px',
            overflowX: 'auto'
          }}>
            {Array.from({ length: rows }).map((_, rIdx) => (
              <div key={rIdx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#94a3b8', width: '48px' }}>
                  Row {rIdx + 1}:
                </span>
                {Array.from({ length: cols }).map((_, cIdx) => (
                  <div
                    key={cIdx}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle at 30% 30%, #38bdf8, #0284c7)',
                      boxShadow: '0 3px 6px rgba(2, 132, 199, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: '800'
                    }}
                  >
                    {rIdx * cols + cIdx + 1}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Division Controls */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>
                Total Items to Share: <strong>{totalItems}</strong>
              </label>
              <input
                type="range"
                min="4"
                max="36"
                value={totalItems}
                onChange={(e) => setTotalItems(parseInt(e.target.value))}
                style={{ width: '100%', marginTop: '6px' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>
                Number of Equal Groups: <strong>{sharingGroups}</strong>
              </label>
              <input
                type="range"
                min="2"
                max="6"
                value={sharingGroups}
                onChange={(e) => setSharingGroups(parseInt(e.target.value))}
                style={{ width: '100%', marginTop: '6px' }}
              />
            </div>
          </div>

          {/* Formula Readout */}
          <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '14px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#166534' }}>
              {totalItems} ÷ {sharingGroups} = {itemsPerGroup} items per group {remainder > 0 ? `(Remainder: ${remainder})` : ''}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#15803d', fontWeight: '700', marginTop: '4px' }}>
              Inverse Multiplication: {sharingGroups} groups × {itemsPerGroup} items = {sharingGroups * itemsPerGroup}
            </div>
          </div>

          {/* Visual Sharing Bowls */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Math.min(sharingGroups, 3)}, 1fr)`,
            gap: '16px',
            minHeight: '220px',
            background: '#ffffff',
            border: '2px dashed #cbd5e1',
            borderRadius: '16px',
            padding: '20px'
          }}>
            {Array.from({ length: sharingGroups }).map((_, gIdx) => (
              <div
                key={gIdx}
                style={{
                  background: '#f8fafc',
                  border: '2px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#475569' }}>
                  Group {gIdx + 1} ({itemsPerGroup} items)
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                  {Array.from({ length: itemsPerGroup }).map((_, iIdx) => (
                    <div
                      key={iIdx}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '0.7rem',
                        fontWeight: '800'
                      }}
                    >
                      🍎
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

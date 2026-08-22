import React, { useState, useEffect, useRef } from 'react';
import { shapeProperties, getShapeData } from '../../../data/shapeProperties';
import { getReaderNotes } from '../../../data/labReaderNotes';
import { Button3D } from '../../ui/Button3D';
import {
  Box, Eye, Layers, RotateCw, Sparkles, BookOpen, Info,
  Compass, Maximize2, CheckCircle2, ChevronRight, HelpCircle,
  ChevronDown, ChevronUp, Calculator, Hash, ShieldCheck
} from 'lucide-react';

export const ShapeExplorer3DLab = ({ config = {}, activityId = '', classNumber = 8 }) => {
  const currentClassNum = parseInt(classNumber, 10) || 8;
  const [selectedShape, setSelectedShape] = useState(config.activeSolid || 'cube');
  const [activeView, setActiveView] = useState('3D'); // '3D' | '2D' | 'Net'
  const [piMode, setPiMode] = useState('approx'); // 'fraction' (22/7) | 'approx' (3.14159)
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAllFormulas, setShowAllFormulas] = useState(true);
  const [showReaderNotes, setShowReaderNotes] = useState(false);

  // Dimensions state
  const [dimensions, setDimensions] = useState({
    a: 5, l: 8, b: 5, h: 6, r: 5, base: 6, height: 5, length: 8, n: 6, side: 4, c: 5, d: 5
  });

  const shapeData = getShapeData(selectedShape);
  const readerNotes = getReaderNotes(selectedShape);
  const piVal = piMode === 'fraction' ? 22 / 7 : Math.PI;

  // Sync available view if current view is not supported for this shape
  useEffect(() => {
    if (!shapeData.views.includes(activeView)) {
      setActiveView(shapeData.views[0] || '2D');
    }
    setActiveCategory('All');
  }, [selectedShape]);

  const handleDimChange = (key, val) => {
    setDimensions(prev => ({ ...prev, [key]: Math.max(1, parseFloat(val) || 1) }));
  };

  // Extract dimensions
  const { a = 5, l = 8, b = 5, h = 6, r = 5, base = 6, height = 5, length = 8, n = 6, side = 4 } = dimensions;

  // CLASS-SPECIFIC FORMULA FILTERING:
  // Only expose formulas where minClass <= currentClassNum (or applicableClasses includes currentClassNum)
  const classAllowedFormulas = (shapeData.formulaList || []).filter(f => {
    if (f.applicableClasses && Array.isArray(f.applicableClasses)) {
      return f.applicableClasses.includes(currentClassNum);
    }
    return (f.minClass || 1) <= currentClassNum;
  });

  // Unique categories for class-allowed formulas
  const availableCategories = ['All', ...Array.from(new Set(classAllowedFormulas.map(f => f.category)))];

  // Filter formulas by active category
  const displayedFormulas = classAllowedFormulas.filter(f => {
    if (activeCategory === 'All') return true;
    return f.category === activeCategory;
  });

  // SVG Dragging simulation handlers
  const svgRef = useRef(null);
  const [isDragging, setIsDragging] = useState(null);

  const handleMouseDown = (dimKey) => (e) => {
    e.preventDefault();
    setIsDragging(dimKey);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    if (isDragging === 'a') {
      const newA = Math.min(12, Math.max(2, Math.round(offsetX / 20)));
      handleDimChange('a', newA);
    } else if (isDragging === 'l') {
      const newL = Math.min(14, Math.max(3, Math.round(offsetX / 18)));
      handleDimChange('l', newL);
    } else if (isDragging === 'b' || isDragging === 'h') {
      const newH = Math.min(14, Math.max(3, Math.round((260 - offsetY) / 16)));
      handleDimChange(isDragging, newH);
    } else if (isDragging === 'r') {
      const newR = Math.min(10, Math.max(2, Math.round(Math.abs(offsetX - 170) / 15)));
      handleDimChange('r', newR);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  // Step-by-step substitution calculations for primary metric
  const primaryFormula = classAllowedFormulas.find(f => f.category === 'Volume') ||
                         classAllowedFormulas.find(f => f.category === 'Area') ||
                         classAllowedFormulas[0] || null;
  const primaryResult = primaryFormula && typeof primaryFormula.calc === 'function' ?
    primaryFormula.calc(dimensions, piVal) : null;
  const formattedPrimaryResult = typeof primaryResult === 'number' ?
    (Number.isInteger(primaryResult) ? primaryResult : primaryResult.toFixed(2)) : primaryResult;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}
    >
      
      {/* 1. Shape Category Switcher (3D Solids & 2D Polygons) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase' }}>
              Choose Shape:
            </span>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', background: '#e0e7ff', color: '#4338ca', padding: '3px 8px', borderRadius: '6px' }}>
              Class {currentClassNum} Syllabus Mapped
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Pi Calculation Setting Toggle (Visible from Class 6+) */}
            {currentClassNum >= 6 && (
              <div style={{ display: 'flex', alignItems: 'center', background: '#f1f5f9', borderRadius: '8px', padding: '3px', border: '1px solid #cbd5e1' }}>
                <button
                  onClick={() => setPiMode('fraction')}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '6px',
                    border: 'none',
                    background: piMode === 'fraction' ? '#4f46e5' : 'transparent',
                    color: piMode === 'fraction' ? '#ffffff' : '#475569',
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    cursor: 'pointer'
                  }}
                >
                  π = 22/7
                </button>
                <button
                  onClick={() => setPiMode('approx')}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '6px',
                    border: 'none',
                    background: piMode === 'approx' ? '#4f46e5' : 'transparent',
                    color: piMode === 'approx' ? '#ffffff' : '#475569',
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    cursor: 'pointer'
                  }}
                >
                  π = 3.14159
                </button>
              </div>
            )}

            <button
              onClick={() => setShowReaderNotes(!showReaderNotes)}
              style={{
                background: '#f1f5f9',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '0.8rem',
                fontWeight: '800',
                color: '#334155',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <BookOpen size={15} color="#4f46e5" />
              <span>{showReaderNotes ? 'Hide Notes' : 'Reader Notes'}</span>
            </button>
          </div>
        </div>

        {/* Shape Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {Object.keys(shapeProperties).map(key => {
            const sh = shapeProperties[key];
            const isSelected = selectedShape === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedShape(key)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '10px',
                  border: isSelected ? 'none' : '1px solid #e2e8f0',
                  background: isSelected ? 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#334155',
                  fontWeight: '800',
                  fontFamily: 'var(--font-rounded)',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 4px 12px rgba(79, 70, 229, 0.3)' : '0 1px 3px rgba(0,0,0,0.02)',
                  transition: 'all 0.15s ease'
                }}
              >
                {sh.type === '3d' ? '📦' : '📐'} {sh.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Reader Notes Drawer */}
      {showReaderNotes && (
        <div style={{
          background: '#f8fafc',
          border: '1.5px solid #cbd5e1',
          borderRadius: '14px',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4338ca', fontWeight: '800', fontSize: '0.9rem' }}>
            <Info size={18} />
            <span>Class {currentClassNum} Reader Notes: {shapeData.name}</span>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#334155', margin: 0, lineHeight: '1.5' }}>
            {readerNotes.whatIsIt}
          </p>
          <div style={{ fontSize: '0.84rem', color: '#475569' }}>
            <strong>Real-Life Objects:</strong> {readerNotes.realLifeExamples.join(', ')}
          </div>
          <div style={{ fontSize: '0.84rem', color: '#166534', background: '#f0fdf4', padding: '8px 12px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
            💡 <strong>Why does it work?</strong> {readerNotes.whatToObserve}
          </div>
        </div>
      )}

      {/* 2. DEDICATED CLASS-SPECIFIC "FORMULAS & PROPERTIES" SECTION */}
      <div style={{
        background: '#ffffff',
        border: '2px solid #e0e7ff',
        borderRadius: '16px',
        padding: '18px 20px',
        boxShadow: '0 4px 16px rgba(79, 70, 229, 0.06)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
              <Calculator size={16} />
            </div>
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#6366f1', textTransform: 'uppercase' }}>
                Class {currentClassNum} Syllabus Properties & Formulas
              </span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '900', color: '#1e293b', margin: 0 }}>
                {shapeData.name} — Formulas & Properties ({displayedFormulas.length} Available)
              </h4>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setShowAllFormulas(!showAllFormulas)}
              style={{
                background: '#eef2ff',
                border: '1px solid #c7d2fe',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '0.8rem',
                fontWeight: '800',
                color: '#4338ca',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              {showAllFormulas ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              <span>{showAllFormulas ? 'Show Less' : 'Show All'}</span>
            </button>
          </div>
        </div>

        {/* Formula Category Tabs */}
        {availableCategories.length > 1 && (
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '6px', marginBottom: '12px' }}>
            {availableCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  background: activeCategory === cat ? '#4338ca' : '#f1f5f9',
                  color: activeCategory === cat ? '#ffffff' : '#475569',
                  fontWeight: '800',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Formula Cards Grid */}
        {showAllFormulas && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '12px'
          }}>
            {displayedFormulas.map(fItem => {
              const liveVal = typeof fItem.calc === 'function' ? fItem.calc(dimensions, piVal) : fItem.calc;
              const formattedVal = typeof liveVal === 'number' ? (Number.isInteger(liveVal) ? liveVal : liveVal.toFixed(2)) : liveVal;

              return (
                <div
                  key={fItem.id}
                  style={{
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '6px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>
                        {fItem.label}
                      </span>
                      <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#4f46e5', background: '#e0e7ff', padding: '2px 6px', borderRadius: '4px' }}>
                        {fItem.category}
                      </span>
                    </div>

                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: '900',
                      color: '#1e293b',
                      fontFamily: 'Consolas, Monaco, monospace'
                    }}>
                      {fItem.formula}
                    </div>

                    <p style={{ fontSize: '0.78rem', color: '#475569', margin: '4px 0 0 0' }}>
                      {fItem.desc}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: '#ffffff',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    marginTop: '4px'
                  }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748b' }}>Live Value:</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: '900', color: '#047857', fontFamily: 'monospace' }}>
                      {formattedVal} {fItem.unit}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 3. View Toggle Bar: [ 2D VIEW ] [ 3D VIEW ] [ NET VIEW ] */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {shapeData.views.map(view => {
            const isActive = activeView === view;
            return (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  background: isActive ? '#0f172a' : '#e2e8f0',
                  color: isActive ? '#ffffff' : '#475569',
                  fontWeight: '800',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.15s ease'
                }}
              >
                {view === '3D' && <Box size={16} />}
                {view === '2D' && <Eye size={16} />}
                {view === 'Net' && <Layers size={16} />}
                <span>{view} View</span>
              </button>
            );
          })}
        </div>

        <span style={{ fontSize: '0.82rem', fontWeight: '800', color: '#6366f1', background: '#eef2ff', padding: '4px 10px', borderRadius: '6px' }}>
          {shapeData.type.toUpperCase()} Geometry • {activeView} Mode
        </span>
      </div>

      {/* 4. Interactive Dimension Sliders & Number Steppers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px', background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1.5px solid #e2e8f0' }}>
        {Object.keys(shapeData.dimensionLabels).map(key => (
          <div key={key}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: '800', color: '#475569' }}>
              <span>{shapeData.dimensionLabels[key]}:</span>
              <span style={{ color: '#4f46e5' }}><strong>{dimensions[key]} {key === 'n' ? 'sides' : 'cm'}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
              <input
                type="range"
                min={key === 'n' ? 3 : 2}
                max={key === 'n' ? 12 : 15}
                step={key === 'n' ? 1 : 0.5}
                value={dimensions[key]}
                onChange={(e) => handleDimChange(key, e.target.value)}
                style={{ flex: 1 }}
              />
              <input
                type="number"
                min={key === 'n' ? 3 : 1}
                max={key === 'n' ? 12 : 25}
                value={dimensions[key]}
                onChange={(e) => handleDimChange(key, e.target.value)}
                style={{ width: '54px', padding: '4px', textAlign: 'center', borderRadius: '6px', border: '1px solid #cbd5e1', fontWeight: '800' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 5. Central Interactive Visualizer Canvas with Physical Drag Handles */}
      <div
        ref={svgRef}
        style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
          border: '2px solid #cbd5e1',
          borderRadius: '18px',
          minHeight: '320px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', top: '12px', right: '14px', fontSize: '0.78rem', color: '#64748b', background: '#ffffff', padding: '4px 10px', borderRadius: '6px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>↔ Drag handles or use sliders to resize</span>
        </div>

        {/* 3D RENDERING VIEWS */}
        {activeView === '3D' && (
          <svg width="340" height="280" viewBox="0 0 340 280">
            {/* CUBE 3D */}
            {selectedShape === 'cube' && (
              <g transform="translate(90, 40)">
                <polygon points={`30,20 ${30 + a * 16},20 ${30 + a * 16 + a * 6},${20 - a * 4} ${30 + a * 6},${20 - a * 4}`} fill="#93c5fd" stroke="#2563eb" strokeWidth="2.5" />
                <polygon points={`30,20 ${30 + a * 16},20 ${30 + a * 16},${20 + a * 16} 30,${20 + a * 16}`} fill="#60a5fa" stroke="#2563eb" strokeWidth="2.5" />
                <polygon points={`${30 + a * 16},20 ${30 + a * 16 + a * 6},${20 - a * 4} ${30 + a * 16 + a * 6},${20 - a * 4 + a * 16} ${30 + a * 16},${20 + a * 16}`} fill="#3b82f6" stroke="#2563eb" strokeWidth="2.5" />
                <text x={30 + a * 8} y={35 + a * 16} textAnchor="middle" fill="#1e3a8a" fontWeight="800">a = {a} cm</text>
                <circle cx={30 + a * 16} cy={20 + a * 16} r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'nwse-resize' }} onMouseDown={handleMouseDown('a')} />
              </g>
            )}

            {/* CUBOID 3D */}
            {selectedShape === 'cuboid' && (
              <g transform="translate(60, 40)">
                <polygon points={`30,40 ${30 + l * 14},40 ${30 + l * 14 + b * 6},${40 - b * 4} ${30 + b * 6},${40 - b * 4}`} fill="#a7f3d0" stroke="#059669" strokeWidth="2.5" />
                <polygon points={`30,40 ${30 + l * 14},40 ${30 + l * 14},${40 + h * 14} 30,${40 + h * 14}`} fill="#6ee7b7" stroke="#059669" strokeWidth="2.5" />
                <polygon points={`${30 + l * 14},40 ${30 + l * 14 + b * 6},${40 - b * 4} ${30 + l * 14 + b * 6},${40 - b * 4 + h * 14} ${30 + l * 14},${40 + h * 14}`} fill="#34d399" stroke="#059669" strokeWidth="2.5" />
                <text x={30 + l * 7} y={55 + h * 14} textAnchor="middle" fill="#064e3b" fontWeight="800">l = {l} cm, b = {b} cm, h = {h} cm</text>
                <circle cx={30 + l * 14} cy={40 + h * 14} r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'ew-resize' }} onMouseDown={handleMouseDown('l')} />
              </g>
            )}

            {/* CYLINDER 3D */}
            {selectedShape === 'cylinder' && (
              <g transform="translate(170, 30)">
                <ellipse cx="0" cy="30" rx={r * 10} ry={r * 3.2} fill="#93c5fd" stroke="#2563eb" strokeWidth="2.5" />
                <path d={`M ${-r * 10} 30 L ${-r * 10} ${30 + h * 12} A ${r * 10} ${r * 3.2} 0 0 0 ${r * 10} ${30 + h * 12} L ${r * 10} 30 Z`} fill="url(#cylGrad)" stroke="#2563eb" strokeWidth="2.5" />
                <ellipse cx="0" cy={30 + h * 12} rx={r * 10} ry={r * 3.2} fill="none" stroke="#2563eb" strokeWidth="2.5" />
                <line x1="0" y1="30" x2={r * 10} y2="30" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
                <text x={r * 5} y="24" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="800">r = {r}</text>
                <text x={r * 10 + 15} y={30 + h * 6} fill="#16a34a" fontSize="12" fontWeight="800">h = {h}</text>
                <circle cx={r * 10} cy="30" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'ew-resize' }} onMouseDown={handleMouseDown('r')} />
                <defs>
                  <linearGradient id="cylGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#bfdbfe" />
                    <stop offset="50%" stopColor="#dbeafe" />
                    <stop offset="100%" stopColor="#93c5fd" />
                  </linearGradient>
                </defs>
              </g>
            )}

            {/* CONE 3D */}
            {selectedShape === 'cone' && (
              <g transform="translate(170, 40)">
                <ellipse cx="0" cy={40 + h * 14} rx={r * 12} ry={r * 3.6} fill="#fed7aa" stroke="#ea580c" strokeWidth="2.5" />
                <path d={`M ${-r * 12} ${40 + h * 14} L 0 30 L ${r * 12} ${40 + h * 14} Z`} fill="url(#coneGrad)" stroke="#ea580c" strokeWidth="2.5" />
                <line x1="0" y1={40 + h * 14} x2={r * 12} y2={40 + h * 14} stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
                <text x={r * 6} y={55 + h * 14} textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="800">r = {r} cm</text>
                <text x={r * 12 + 10} y={35 + h * 7} fill="#16a34a" fontSize="12" fontWeight="800">h = {h} cm</text>
                <circle cx={r * 12} cy={40 + h * 14} r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'ew-resize' }} onMouseDown={handleMouseDown('r')} />
                <defs>
                  <linearGradient id="coneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fed7aa" />
                    <stop offset="50%" stopColor="#ffedd5" />
                    <stop offset="100%" stopColor="#fdba74" />
                  </linearGradient>
                </defs>
              </g>
            )}

            {/* SPHERE / HEMISPHERE 3D */}
            {(selectedShape === 'sphere' || selectedShape === 'hemisphere') && (
              <g transform="translate(170, 130)">
                <circle cx="0" cy="0" r={r * 14} fill="url(#sphereGrad)" stroke="#2563eb" strokeWidth="2.5" />
                <ellipse cx="0" cy="0" rx={r * 14} ry={r * 4} fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4,4" />
                <line x1="0" y1="0" x2={r * 14} y2="0" stroke="#dc2626" strokeWidth="2" />
                <circle cx="0" cy="0" r="4" fill="#dc2626" />
                <text x={r * 7} y="-8" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="800">r = {r} cm</text>
                <circle cx={r * 14} cy="0" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'ew-resize' }} onMouseDown={handleMouseDown('r')} />
                <defs>
                  <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#dbeafe" />
                    <stop offset="40%" stopColor="#93c5fd" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </radialGradient>
                </defs>
              </g>
            )}

            {/* PRISM 3D */}
            {selectedShape === 'prism' && (
              <g transform="translate(90, 50)">
                <polygon points={`30,120 ${30 + base * 12},120 ${30 + base * 6},${120 - height * 12}`} fill="#c084fc" stroke="#7e22ce" strokeWidth="2.5" />
                <polygon points={`30,120 ${30 + base * 6},${120 - height * 12} ${30 + base * 6 + length * 8},${120 - height * 12 - length * 4} ${30 + length * 8},${120 - length * 4}`} fill="#a855f7" stroke="#7e22ce" strokeWidth="2.5" />
                <polygon points={`${30 + base * 12},120 ${30 + base * 6},${120 - height * 12} ${30 + base * 6 + length * 8},${120 - height * 12 - length * 4} ${30 + base * 12 + length * 8},${120 - length * 4}`} fill="#9333ea" stroke="#7e22ce" strokeWidth="2.5" />
              </g>
            )}

            {/* PYRAMID 3D */}
            {selectedShape === 'pyramid' && (
              <g transform="translate(110, 30)">
                <polygon points={`20,160 ${20 + a * 14},160 ${20 + a * 14 + a * 6},${160 - a * 4} ${20 + a * 6},${160 - a * 4}`} fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                <polygon points={`20,160 ${20 + a * 14},160 ${20 + a * 10},40`} fill="#facc15" stroke="#ca8a04" strokeWidth="2.5" />
                <polygon points={`${20 + a * 14},160 ${20 + a * 14 + a * 6},${160 - a * 4} ${20 + a * 10},40`} fill="#eab308" stroke="#ca8a04" strokeWidth="2.5" />
              </g>
            )}
          </svg>
        )}

        {/* 2D RENDERING VIEWS */}
        {activeView === '2D' && (
          <svg width="340" height="280" viewBox="0 0 340 280">
            {/* CUBE 2D */}
            {selectedShape === 'cube' && (
              <g transform="translate(100, 50)">
                <rect x="0" y="0" width={a * 24} height={a * 24} fill="#bfdbfe" stroke="#2563eb" strokeWidth="3" />
                <text x={a * 12} y="-10" textAnchor="middle" fill="#1e3a8a" fontWeight="800">Side a = {a} cm</text>
                <circle cx={a * 24} cy={a * 24} r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'nwse-resize' }} onMouseDown={handleMouseDown('a')} />
              </g>
            )}

            {/* CUBOID 2D */}
            {selectedShape === 'cuboid' && (
              <g transform="translate(70, 60)">
                <rect x="0" y="0" width={l * 22} height={b * 22} fill="#a7f3d0" stroke="#059669" strokeWidth="3" />
                <text x={l * 11} y="-10" textAnchor="middle" fill="#064e3b" fontWeight="800">Length l = {l} cm</text>
                <text x="-15" y={b * 11} textAnchor="middle" fill="#064e3b" fontWeight="800" transform={`rotate(-90 -15 ${b * 11})`}>Breadth = {b} cm</text>
                <circle cx={l * 22} cy={b * 22} r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'ew-resize' }} onMouseDown={handleMouseDown('l')} />
              </g>
            )}

            {/* CYLINDER 2D */}
            {selectedShape === 'cylinder' && (
              <g transform="translate(90, 40)">
                <rect x="0" y="0" width={r * 20} height={h * 14} fill="#bfdbfe" stroke="#2563eb" strokeWidth="3" />
                <ellipse cx={r * 10} cy="0" rx={r * 10} ry="14" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
                <ellipse cx={r * 10} cy={h * 14} rx={r * 10} ry="14" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
                <text x={r * 10} y="-20" textAnchor="middle" fill="#1e3a8a" fontWeight="800">Diameter d = {2 * r} cm</text>
                <text x={r * 20 + 20} y={h * 7} fill="#16a34a" fontWeight="800">Height h = {h} cm</text>
                <circle cx={r * 20} cy={0} r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'ew-resize' }} onMouseDown={handleMouseDown('r')} />
              </g>
            )}

            {/* CONE 2D */}
            {selectedShape === 'cone' && (
              <g transform="translate(170, 40)">
                <polygon points={`${-r * 16},${h * 16} 0,0 ${r * 16},${h * 16}`} fill="#fed7aa" stroke="#ea580c" strokeWidth="3" />
                <ellipse cx="0" cy={h * 16} rx={r * 16} ry="16" fill="#fdba74" stroke="#ea580c" strokeWidth="2" />
                <text x="0" y={h * 16 + 32} textAnchor="middle" fill="#c2410c" fontWeight="800">Base Diameter = {2 * r} cm</text>
                <text x={r * 16 + 15} y={h * 8} fill="#16a34a" fontWeight="800">Height = {h} cm</text>
              </g>
            )}

            {/* SPHERE / HEMISPHERE 2D */}
            {(selectedShape === 'sphere' || selectedShape === 'hemisphere') && (
              <g transform="translate(170, 130)">
                <circle cx="0" cy="0" r={r * 16} fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
                <line x1="0" y1="0" x2={r * 16} y2="0" stroke="#dc2626" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="5" fill="#dc2626" />
                <text x={r * 8} y="-10" textAnchor="middle" fill="#dc2626" fontWeight="800">r = {r} cm</text>
                <circle cx={r * 16} cy="0" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'ew-resize' }} onMouseDown={handleMouseDown('r')} />
              </g>
            )}

            {/* TRIANGLE 2D */}
            {selectedShape === 'triangle' && (
              <g transform="translate(70, 40)">
                <polygon points={`0,160 ${base * 22},160 ${base * 11},${160 - height * 22}`} fill="#fef08a" stroke="#ca8a04" strokeWidth="3" />
                <line x1={base * 11} y1={160 - height * 22} x2={base * 11} y2="160" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,4" />
                <text x={base * 11} y="185" textAnchor="middle" fill="#854d0e" fontWeight="800">Base b = {base} cm</text>
                <text x={base * 11 + 10} y={160 - height * 11} fill="#dc2626" fontWeight="800">h = {height} cm</text>
                <circle cx={base * 11} cy={160 - height * 22} r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'ns-resize' }} onMouseDown={handleMouseDown('height')} />
              </g>
            )}

            {/* SQUARE 2D */}
            {selectedShape === 'square' && (
              <g transform="translate(90, 40)">
                <rect x="0" y="0" width={a * 24} height={a * 24} fill="#fed7aa" stroke="#ea580c" strokeWidth="3" />
                <text x={a * 12} y="-10" textAnchor="middle" fill="#9a3412" fontWeight="800">Side a = {a} cm</text>
                <circle cx={a * 24} cy={a * 24} r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'nwse-resize' }} onMouseDown={handleMouseDown('a')} />
              </g>
            )}

            {/* RECTANGLE 2D */}
            {selectedShape === 'rectangle' && (
              <g transform="translate(60, 50)">
                <rect x="0" y="0" width={l * 24} height={b * 24} fill="#bae6fd" stroke="#0284c7" strokeWidth="3" />
                <text x={l * 12} y="-10" textAnchor="middle" fill="#0369a1" fontWeight="800">Length l = {l} cm</text>
                <circle cx={l * 24} cy={b * 24} r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'ew-resize' }} onMouseDown={handleMouseDown('l')} />
              </g>
            )}

            {/* PARALLELOGRAM 2D */}
            {selectedShape === 'parallelogram' && (
              <g transform="translate(70, 50)">
                <polygon points={`30,140 ${30 + base * 20},140 ${base * 20},40 0,40`} fill="#fbcfe8" stroke="#db2777" strokeWidth="3" />
                <line x1="30" y1="40" x2="30" y2="140" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
                <text x={base * 10} y="165" textAnchor="middle" fill="#9d174d" fontWeight="800">Base = {base} cm</text>
                <text x="40" y="90" fill="#dc2626" fontWeight="800">h = {height} cm</text>
              </g>
            )}

            {/* TRAPEZIUM 2D */}
            {selectedShape === 'trapezium' && (
              <g transform="translate(80, 50)">
                <polygon points={`0,140 ${a * 22},140 ${b * 22 + 20},40 20,40`} fill="#ddd6fe" stroke="#7c3aed" strokeWidth="3" />
                <line x1="20" y1="40" x2="20" y2="140" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
                <text x={a * 11} y="165" textAnchor="middle" fill="#5b21b6" fontWeight="800">Parallel Side a = {a} cm</text>
                <text x={b * 11 + 20} y="30" textAnchor="middle" fill="#5b21b6" fontWeight="800">Side b = {b} cm</text>
              </g>
            )}

            {/* CIRCLE 2D */}
            {selectedShape === 'circle' && (
              <g transform="translate(170, 130)">
                <circle cx="0" cy="0" r={r * 18} fill="#fef08a" stroke="#ca8a04" strokeWidth="3" />
                <line x1="0" y1="0" x2={r * 18} y2="0" stroke="#dc2626" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="5" fill="#dc2626" />
                <text x={r * 9} y="-10" textAnchor="middle" fill="#dc2626" fontWeight="800">Radius r = {r} cm</text>
                <circle cx={r * 18} cy="0" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'ew-resize' }} onMouseDown={handleMouseDown('r')} />
              </g>
            )}

            {/* SEMI-CIRCLE 2D */}
            {selectedShape === 'semicircle' && (
              <g transform="translate(170, 160)">
                <path d={`M ${-r * 18} 0 A ${r * 18} ${r * 18} 0 0 1 ${r * 18} 0 Z`} fill="#fed7aa" stroke="#ea580c" strokeWidth="3" />
                <line x1="0" y1="0" x2={r * 18} y2="0" stroke="#dc2626" strokeWidth="2.5" />
                <text x="0" y="24" textAnchor="middle" fill="#c2410c" fontWeight="800">Diameter d = {2 * r} cm</text>
                <circle cx={r * 18} cy="0" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'ew-resize' }} onMouseDown={handleMouseDown('r')} />
              </g>
            )}

            {/* POLYGON EXPLORER 2D */}
            {selectedShape === 'polygons' && (
              <g transform="translate(170, 130)">
                <polygon
                  points={Array.from({ length: n }).map((_, idx) => {
                    const angle = (idx * 2 * Math.PI) / n - Math.PI / 2;
                    return `${80 * Math.cos(angle)},${80 * Math.sin(angle)}`;
                  }).join(' ')}
                  fill="#c7d2fe"
                  stroke="#4338ca"
                  strokeWidth="3"
                />
                <text x="0" y="115" textAnchor="middle" fill="#312e81" fontWeight="800">
                  {n}-sided Regular Polygon (Sum = {(n - 2) * 180}°)
                </text>
              </g>
            )}
          </svg>
        )}

        {/* NET RENDERING VIEWS */}
        {activeView === 'Net' && (
          <svg width="340" height="280" viewBox="0 0 340 280">
            {/* CUBE NET */}
            {selectedShape === 'cube' && (
              <g transform="translate(130, 20)">
                <rect x="0" y="0" width="38" height="38" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
                <rect x="-38" y="38" width="38" height="38" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
                <rect x="0" y="38" width="38" height="38" fill="#60a5fa" stroke="#2563eb" strokeWidth="2" />
                <rect x="38" y="38" width="38" height="38" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
                <rect x="0" y="76" width="38" height="38" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
                <rect x="0" y="114" width="38" height="38" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
                <text x="19" y="180" textAnchor="middle" fill="#1e3a8a" fontWeight="800">6 Congruent Square Faces</text>
              </g>
            )}

            {/* CUBOID NET */}
            {selectedShape === 'cuboid' && (
              <g transform="translate(110, 20)">
                <rect x="0" y="0" width="50" height="30" fill="#a7f3d0" stroke="#059669" strokeWidth="2" />
                <rect x="-40" y="30" width="40" height="60" fill="#6ee7b7" stroke="#059669" strokeWidth="2" />
                <rect x="0" y="30" width="50" height="60" fill="#34d399" stroke="#059669" strokeWidth="2" />
                <rect x="50" y="30" width="40" height="60" fill="#6ee7b7" stroke="#059669" strokeWidth="2" />
                <rect x="0" y="90" width="50" height="30" fill="#a7f3d0" stroke="#059669" strokeWidth="2" />
                <rect x="0" y="120" width="50" height="60" fill="#34d399" stroke="#059669" strokeWidth="2" />
                <text x="25" y="210" textAnchor="middle" fill="#064e3b" fontWeight="800">Unfolded 6-Rectangle Net</text>
              </g>
            )}

            {/* CYLINDER NET */}
            {selectedShape === 'cylinder' && (
              <g transform="translate(80, 20)">
                <circle cx="90" cy="25" r="22" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
                <rect x="0" y="55" width="180" height="80" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
                <circle cx="90" cy="165" r="22" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
                <text x="90" y="215" textAnchor="middle" fill="#1e3a8a" fontWeight="800">
                  Unrolled Rectangle (2πr × h) + 2 Circular Bases
                </text>
              </g>
            )}

            {/* CONE NET */}
            {selectedShape === 'cone' && (
              <g transform="translate(170, 30)">
                <path d="M 0 0 L 80 80 A 110 110 0 0 1 -80 80 Z" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
                <circle cx="0" cy="140" r="25" fill="#fdba74" stroke="#ea580c" strokeWidth="2" />
                <text x="0" y="195" textAnchor="middle" fill="#c2410c" fontWeight="800">
                  1 Circular Base + 1 Sector (Slant Radius l)
                </text>
              </g>
            )}

            {/* PRISM NET */}
            {selectedShape === 'prism' && (
              <g transform="translate(70, 30)">
                <polygon points="90,10 50,50 130,50" fill="#c084fc" stroke="#7e22ce" strokeWidth="2" />
                <rect x="0" y="50" width="60" height="90" fill="#a855f7" stroke="#7e22ce" strokeWidth="2" />
                <rect x="60" y="50" width="60" height="90" fill="#9333ea" stroke="#7e22ce" strokeWidth="2" />
                <rect x="120" y="50" width="60" height="90" fill="#a855f7" stroke="#7e22ce" strokeWidth="2" />
                <polygon points="90,180 50,140 130,140" fill="#c084fc" stroke="#7e22ce" strokeWidth="2" />
                <text x="90" y="215" textAnchor="middle" fill="#581c87" fontWeight="800">2 Triangular Bases + 3 Rectangles</text>
              </g>
            )}

            {/* PYRAMID NET */}
            {selectedShape === 'pyramid' && (
              <g transform="translate(170, 110)">
                <rect x="-30" y="-30" width="60" height="60" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                <polygon points="-30,-30 30,-30 0,-85" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                <polygon points="30,-30 30,30 85,0" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                <polygon points="-30,30 30,30 0,85" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                <polygon points="-30,-30 -30,30 -85,0" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                <text x="0" y="115" textAnchor="middle" fill="#713f12" fontWeight="800">1 Base Square + 4 Triangular Faces</text>
              </g>
            )}
          </svg>
        )}
      </div>

      {/* 6. LIVE STEP-BY-STEP CALCULATION PANEL */}
      {primaryFormula && (
        <div style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
          border: '1.5px solid #86efac',
          borderRadius: '14px',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#166534', textTransform: 'uppercase' }}>
              Live Step-by-Step Calculation ({primaryFormula.label})
            </span>
            {currentClassNum >= 6 && (
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#15803d', background: '#ffffff', padding: '2px 8px', borderRadius: '4px', border: '1px solid #bbf7d0' }}>
                Setting: {piMode === 'fraction' ? 'π = 22/7' : 'π = 3.14159'}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#166534' }}>
            <strong>Formula:</strong> <code style={{ background: '#ffffff', padding: '2px 8px', borderRadius: '6px', fontWeight: '800' }}>{primaryFormula.formula}</code>
            <span>⟶</span>
            <strong>Result:</strong> <span style={{ fontFamily: 'monospace', fontWeight: '800' }}>{formattedPrimaryResult} {primaryFormula.unit}</span>
          </div>
        </div>
      )}
    </div>
  );
};

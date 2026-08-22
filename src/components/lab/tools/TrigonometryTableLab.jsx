import React, { useState } from 'react';
import { CardRounded } from '../../ui/CardRounded';
import { Button3D } from '../../ui/Button3D';
import { soundFx } from '../../../utils/audioSynth';
import {
  Triangle, Sparkles, BookOpen, HelpCircle, CheckCircle2,
  RefreshCw, Layers, Zap, Info, Eye, ArrowRightLeft, Target
} from 'lucide-react';

const trigTableData = [
  { angle: '0°', rad: 0, sin: '0', cos: '1', tan: '0', cosec: 'Undefined', sec: '1', cot: 'Undefined', sinDec: 0, cosDec: 1, tanDec: 0, cosecDec: '—', secDec: 1, cotDec: '—', sinTrick: '√0 / 2 = 0', cosTrick: '√4 / 2 = 1', tanTrick: '0 / 1 = 0' },
  { angle: '30°', rad: Math.PI / 6, sin: '1/2', cos: '√3/2', tan: '1/√3', cosec: '2', sec: '2/√3', cot: '√3', sinDec: 0.5, cosDec: 0.866, tanDec: 0.577, cosecDec: 2, secDec: 1.155, cotDec: 1.732, sinTrick: '√1 / 2 = 1/2', cosTrick: '√3 / 2', tanTrick: '(1/2) ÷ (√3/2) = 1/√3' },
  { angle: '45°', rad: Math.PI / 4, sin: '1/√2', cos: '1/√2', tan: '1', cosec: '√2', sec: '√2', cot: '1', sinDec: 0.707, cosDec: 0.707, tanDec: 1, cosecDec: 1.414, secDec: 1.414, cotDec: 1, sinTrick: '√2 / 2 = 1/√2', cosTrick: '√2 / 2 = 1/√2', tanTrick: '(1/√2) ÷ (1/√2) = 1' },
  { angle: '60°', rad: Math.PI / 3, sin: '√3/2', cos: '1/2', tan: '√3', cosec: '2/√3', sec: '2', cot: '1/√3', sinDec: 0.866, cosDec: 0.5, tanDec: 1.732, cosecDec: 1.155, secDec: 2, cotDec: 0.577, sinTrick: '√3 / 2', cosTrick: '√1 / 2 = 1/2', tanTrick: '(√3/2) ÷ (1/2) = √3' },
  { angle: '90°', rad: Math.PI / 2, sin: '1', cos: '0', tan: 'Undefined', cosec: '1', sec: 'Undefined', cot: '0', sinDec: 1, cosDec: 0, tanDec: '—', cosecDec: 1, secDec: '—', cotDec: 0, sinTrick: '√4 / 2 = 1', cosTrick: '√0 / 2 = 0', tanTrick: '1 / 0 = Undefined' }
];

export const TrigonometryTableLab = ({ config = {}, activityId = '', classNumber = 10 }) => {
  const [angleTheta, setAngleTheta] = useState(30);
  const [showDecimals, setShowDecimals] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null); // { ratio, angle, val, trick }
  const [highlightReciprocal, setHighlightReciprocal] = useState(null);
  const [activeTab, setActiveTab] = useState('table'); // 'table' | 'triangle' | 'tricks' | 'game'

  // Quiz State
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);

  const quizQuestions = [
    { q: 'What is the exact value of sin 30°?', options: ['1/2', '√3/2', '1/√2', '1'], correct: '1/2', hint: 'Think of the sequence √0, √1, √2, √3, √4 divided by 2.' },
    { q: 'What is the value of cos 60°?', options: ['1/2', '√3/2', '0', '1'], correct: '1/2', hint: 'Cos is the reverse of Sin: cos 60° = sin 30°.' },
    { q: 'What is tan 45°?', options: ['1', '1/√3', '√3', 'Undefined'], correct: '1', hint: 'tan θ = sin θ / cos θ = (1/√2) / (1/√2) = 1.' },
    { q: 'What is cosec 30°?', options: ['2', '1/2', '2/√3', '√2'], correct: '2', hint: 'cosec θ is the reciprocal of sin θ: flip 1/2 to get 2.' },
    { q: 'What is tan 90°?', options: ['Undefined', '0', '1', 'Infinity'], correct: 'Undefined', hint: 'tan 90° = 1 / 0, which is mathematically undefined.' }
  ];

  // Dynamic Right Triangle Calculations for angleTheta
  const rad = (angleTheta * Math.PI) / 180;
  const hyp = 10;
  const opp = (hyp * Math.sin(rad)).toFixed(2);
  const adj = (hyp * Math.cos(rad)).toFixed(2);
  const sinVal = Math.sin(rad).toFixed(3);
  const cosVal = Math.cos(rad).toFixed(3);
  const tanVal = angleTheta === 90 ? 'Undefined' : Math.tan(rad).toFixed(3);
  const cosecVal = angleTheta === 0 ? 'Undefined' : (1 / Math.sin(rad)).toFixed(3);
  const secVal = angleTheta === 90 ? 'Undefined' : (1 / Math.cos(rad)).toFixed(3);
  const cotVal = angleTheta === 0 ? 'Undefined' : (angleTheta === 90 ? '0.000' : (1 / Math.tan(rad)).toFixed(3));

  const handleCellClick = (ratio, row) => {
    soundFx.playClick();
    const val = row[ratio];
    const trick = ratio === 'sin' ? row.sinTrick : ratio === 'cos' ? row.cosTrick : row.tanTrick;
    setSelectedCell({ ratio, angle: row.angle, val, trick });

    // Reciprocal partner
    if (ratio === 'sin') setHighlightReciprocal('cosec');
    else if (ratio === 'cos') setHighlightReciprocal('sec');
    else if (ratio === 'tan') setHighlightReciprocal('cot');
    else if (ratio === 'cosec') setHighlightReciprocal('sin');
    else if (ratio === 'sec') setHighlightReciprocal('cos');
    else if (ratio === 'cot') setHighlightReciprocal('tan');
  };

  const handleAnswerQuiz = (opt) => {
    setSelectedAnswer(opt);
    if (opt === quizQuestions[quizIdx].correct) {
      soundFx.playCorrect();
      setQuizScore(prev => prev + 1);
    } else {
      soundFx.playIncorrect();
    }
  };

  const nextQuizQuestion = () => {
    soundFx.playClick();
    setSelectedAnswer(null);
    setQuizIdx(prev => (prev + 1) % quizQuestions.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      
      {/* 1. Header Toolbar & Mode Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('table')}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'table' ? '#4f46e5' : '#e2e8f0',
              color: activeTab === 'table' ? '#ffffff' : '#334155',
              fontWeight: '800',
              cursor: 'pointer'
            }}
          >
            📊 Standard Table (0°-90°)
          </button>
          <button
            onClick={() => setActiveTab('triangle')}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'triangle' ? '#4f46e5' : '#e2e8f0',
              color: activeTab === 'triangle' ? '#ffffff' : '#334155',
              fontWeight: '800',
              cursor: 'pointer'
            }}
          >
            📐 Triangle Explorer (θ Slider)
          </button>
          <button
            onClick={() => setActiveTab('tricks')}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'tricks' ? '#4f46e5' : '#e2e8f0',
              color: activeTab === 'tricks' ? '#ffffff' : '#334155',
              fontWeight: '800',
              cursor: 'pointer'
            }}
          >
            ✨ Memory Tricks (√0 to √4)
          </button>
          <button
            onClick={() => setActiveTab('game')}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'game' ? '#16a34a' : '#e2e8f0',
              color: activeTab === 'game' ? '#ffffff' : '#334155',
              fontWeight: '800',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Target size={16} />
            <span>Practice Quiz</span>
          </button>
        </div>

        {activeTab === 'table' && (
          <button
            onClick={() => setShowDecimals(!showDecimals)}
            style={{
              background: showDecimals ? '#dbeafe' : '#f1f5f9',
              border: '1px solid #93c5fd',
              color: '#1e40af',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: '800',
              cursor: 'pointer'
            }}
          >
            {showDecimals ? '✓ Exact Values Only' : 'Show Decimal Values'}
          </button>
        )}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: STANDARD TRIGONOMETRY TABLE */}
      {/* ========================================================================= */}
      {activeTab === 'table' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ overflowX: 'auto', background: '#ffffff', borderRadius: '14px', border: '1.5px solid #cbd5e1' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #cbd5e1' }}>
                  <th style={{ padding: '12px', fontWeight: '800', color: '#1e293b' }}>Angle (θ)</th>
                  <th style={{ padding: '12px', fontWeight: '800', color: '#4338ca', background: highlightReciprocal === 'sin' ? '#e0e7ff' : 'transparent' }}>sin θ</th>
                  <th style={{ padding: '12px', fontWeight: '800', color: '#0369a1', background: highlightReciprocal === 'cos' ? '#e0f2fe' : 'transparent' }}>cos θ</th>
                  <th style={{ padding: '12px', fontWeight: '800', color: '#047857', background: highlightReciprocal === 'tan' ? '#dcfce7' : 'transparent' }}>tan θ</th>
                  <th style={{ padding: '12px', fontWeight: '800', color: '#7c3aed', background: highlightReciprocal === 'cosec' ? '#f3e8ff' : 'transparent' }}>cosec θ</th>
                  <th style={{ padding: '12px', fontWeight: '800', color: '#b45309', background: highlightReciprocal === 'sec' ? '#fef3c7' : 'transparent' }}>sec θ</th>
                  <th style={{ padding: '12px', fontWeight: '800', color: '#be185d', background: highlightReciprocal === 'cot' ? '#fce7f3' : 'transparent' }}>cot θ</th>
                </tr>
              </thead>
              <tbody>
                {trigTableData.map((row, rIdx) => (
                  <tr key={rIdx} style={{ borderBottom: '1px solid #e2e8f0', background: rIdx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                    <td style={{ padding: '12px', fontWeight: '900', color: '#0f172a', background: '#f1f5f9' }}>{row.angle}</td>
                    
                    {['sin', 'cos', 'tan', 'cosec', 'sec', 'cot'].map(ratio => {
                      const val = row[ratio];
                      const dec = row[`${ratio}Dec`];
                      const isRecip = highlightReciprocal === ratio;
                      return (
                        <td
                          key={ratio}
                          onClick={() => handleCellClick(ratio, row)}
                          style={{
                            padding: '12px',
                            cursor: 'pointer',
                            fontWeight: '800',
                            fontFamily: 'Consolas, Monaco, monospace',
                            background: isRecip ? '#fef08a' : 'transparent',
                            color: val === 'Undefined' ? '#dc2626' : '#1e293b',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          <div>{val}</div>
                          {showDecimals && dec !== '—' && (
                            <div style={{ fontSize: '0.72rem', color: '#64748b' }}>≈ {dec}</div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Drilldown Box on Clicked Cell */}
          {selectedCell && (
            <div style={{ background: '#f5f3ff', border: '1.5px solid #c4b5fd', borderRadius: '12px', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#6d28d9', textTransform: 'uppercase' }}>
                  Drilldown & Derivation: {selectedCell.ratio.toUpperCase()} {selectedCell.angle}
                </span>
                <span style={{ fontSize: '1.1rem', fontWeight: '900', color: '#4c1d95', fontFamily: 'monospace' }}>
                  = {selectedCell.val}
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#334155', margin: 0 }}>
                💡 <strong>Memory Rule:</strong> {selectedCell.trick || 'Derived from fundamental ratios'}
              </p>
              {highlightReciprocal && (
                <div style={{ fontSize: '0.8rem', color: '#7c3aed' }}>
                  🔁 <strong>Reciprocal Partner:</strong> {highlightReciprocal.toUpperCase()} {selectedCell.angle} (Highlighted in table above)
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: INTERACTIVE TRIANGLE EXPLORER */}
      {/* ========================================================================= */}
      {activeTab === 'triangle' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Angle Slider Bar */}
          <div style={{ background: '#f8fafc', padding: '14px 18px', borderRadius: '12px', border: '1.5px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontWeight: '800', color: '#334155', fontSize: '0.9rem' }}>Angle θ:</span>
            <input
              type="range"
              min="0"
              max="90"
              step="5"
              value={angleTheta}
              onChange={(e) => setAngleTheta(parseInt(e.target.value, 10))}
              style={{ flex: 1 }}
            />
            <span style={{ fontSize: '1.1rem', fontWeight: '900', color: '#4f46e5', minWidth: '45px' }}>{angleTheta}°</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', alignItems: 'center' }}>
            {/* Dynamic Right Triangle SVG */}
            <div style={{ background: '#ffffff', borderRadius: '14px', border: '1.5px solid #cbd5e1', padding: '20px', display: 'flex', justifyContent: 'center' }}>
              <svg width="260" height="220" viewBox="0 0 260 220">
                <polygon
                  points={`30,180 ${30 + parseFloat(adj) * 18},180 30,${180 - parseFloat(opp) * 18}`}
                  fill="#e0e7ff"
                  stroke="#4f46e5"
                  strokeWidth="3"
                />
                {/* Right Angle Marker */}
                <rect x="30" y="165" width="15" height="15" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
                
                {/* Labels */}
                <text x="15" y={180 - parseFloat(opp) * 9} fill="#dc2626" fontWeight="800" fontSize="12" textAnchor="middle">
                  Opp: {opp}
                </text>
                <text x={30 + parseFloat(adj) * 9} y="200" fill="#16a34a" fontWeight="800" fontSize="12" textAnchor="middle">
                  Adj: {adj}
                </text>
                <text x={25 + parseFloat(adj) * 9} y={165 - parseFloat(opp) * 9} fill="#4338ca" fontWeight="800" fontSize="12">
                  Hyp = 10
                </text>
                <text x={20 + parseFloat(adj) * 18} y="175" fill="#4f46e5" fontWeight="900" fontSize="12">
                  θ = {angleTheta}°
                </text>
              </svg>
            </div>

            {/* Live 6-Ratio Readout Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{ background: '#eef2ff', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4338ca' }}>sin θ (Opp/Hyp)</span>
                <div style={{ fontSize: '1.15rem', fontWeight: '900', color: '#312e81' }}>{sinVal}</div>
              </div>
              <div style={{ background: '#f3e8ff', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#7c3aed' }}>cosec θ (Hyp/Opp)</span>
                <div style={{ fontSize: '1.15rem', fontWeight: '900', color: '#581c87' }}>{cosecVal}</div>
              </div>
              <div style={{ background: '#f0f9ff', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#0369a1' }}>cos θ (Adj/Hyp)</span>
                <div style={{ fontSize: '1.15rem', fontWeight: '900', color: '#075985' }}>{cosVal}</div>
              </div>
              <div style={{ background: '#fef3c7', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#b45309' }}>sec θ (Hyp/Adj)</span>
                <div style={{ fontSize: '1.15rem', fontWeight: '900', color: '#78350f' }}>{secVal}</div>
              </div>
              <div style={{ background: '#f0fdf4', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#15803d' }}>tan θ (Opp/Adj)</span>
                <div style={{ fontSize: '1.15rem', fontWeight: '900', color: '#166534' }}>{tanVal}</div>
              </div>
              <div style={{ background: '#fce7f3', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#be185d' }}>cot θ (Adj/Opp)</span>
                <div style={{ fontSize: '1.15rem', fontWeight: '900', color: '#831843' }}>{cotVal}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: VISUAL MEMORY TRICKS */}
      {/* ========================================================================= */}
      {activeTab === 'tricks' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* SIN Trick Card */}
          <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '14px', padding: '16px' }}>
            <h4 style={{ color: '#166534', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={18} /> 1. The √0, √1, √2, √3, √4 Sequence for SIN
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#334155', margin: '0 0 10px 0' }}>
              Write 0, 1, 2, 3, 4, put square roots over each, and divide by 2:
            </p>
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
              {[{ a: '0°', t: '√0 / 2', r: '0' }, { a: '30°', t: '√1 / 2', r: '1/2' }, { a: '45°', t: '√2 / 2', r: '1/√2' }, { a: '60°', t: '√3 / 2', r: '√3/2' }, { a: '90°', t: '√4 / 2', r: '1' }].map((item, idx) => (
                <div key={idx} style={{ background: '#ffffff', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '8px 12px', textAlign: 'center', minWidth: '80px' }}>
                  <div style={{ fontWeight: '800', color: '#166534' }}>{item.a}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.t}</div>
                  <div style={{ fontSize: '1rem', fontWeight: '900', color: '#15803d' }}>= {item.r}</div>
                </div>
              ))}
            </div>
          </div>

          {/* COS Trick Card */}
          <div style={{ background: '#eff6ff', border: '1.5px solid #93c5fd', borderRadius: '14px', padding: '16px' }}>
            <h4 style={{ color: '#1e40af', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ArrowRightLeft size={18} /> 2. COS is Just SIN in Reverse Order!
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#334155', margin: '0 0 10px 0' }}>
              Write the SIN sequence backwards from 90° down to 0°:
            </p>
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
              {[{ a: '0°', r: '1' }, { a: '30°', r: '√3/2' }, { a: '45°', r: '1/√2' }, { a: '60°', r: '1/2' }, { a: '90°', r: '0' }].map((item, idx) => (
                <div key={idx} style={{ background: '#ffffff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '8px 12px', textAlign: 'center', minWidth: '80px' }}>
                  <div style={{ fontWeight: '800', color: '#1e40af' }}>{item.a}</div>
                  <div style={{ fontSize: '1rem', fontWeight: '900', color: '#1d4ed8' }}>{item.r}</div>
                </div>
              ))}
            </div>
          </div>

          {/* TAN & Reciprocal Card */}
          <div style={{ background: '#faf5ff', border: '1.5px solid #d8b4fe', borderRadius: '14px', padding: '16px' }}>
            <h4 style={{ color: '#6b21a8', fontWeight: '800', marginBottom: '8px' }}>
              3. TAN = SIN ÷ COS & Flip Ratios for Reciprocals
            </h4>
            <ul style={{ fontSize: '0.88rem', color: '#334155', margin: 0, paddingLeft: '20px', lineHeight: '1.6' }}>
              <li><strong>tan θ = sin θ / cos θ</strong> (e.g. tan 60° = (√3/2) ÷ (1/2) = √3)</li>
              <li><strong>cosec θ = 1 / sin θ</strong> (Flip 1/2 at 30° ⟶ 2)</li>
              <li><strong>sec θ = 1 / cos θ</strong> (Flip 1/2 at 60° ⟶ 2)</li>
              <li><strong>cot θ = 1 / tan θ</strong> (Flip √3 at 60° ⟶ 1/√3)</li>
            </ul>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: PRACTICE MEMORY QUIZ GAME */}
      {/* ========================================================================= */}
      {activeTab === 'game' && (
        <div style={{ background: '#ffffff', border: '1.5px solid #cbd5e1', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#64748b' }}>
              Question {quizIdx + 1} of {quizQuestions.length}
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#16a34a' }}>
              Score: {quizScore} / {quizQuestions.length}
            </span>
          </div>

          <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1e293b', margin: 0 }}>
            {quizQuestions[quizIdx].q}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {quizQuestions[quizIdx].options.map((opt, oIdx) => {
              const isSelected = selectedAnswer === opt;
              const isCorrect = opt === quizQuestions[quizIdx].correct;
              const bgColor = selectedAnswer ? (isCorrect ? '#86efac' : isSelected ? '#fca5a5' : '#f1f5f9') : '#f8fafc';
              
              return (
                <button
                  key={oIdx}
                  onClick={() => !selectedAnswer && handleAnswerQuiz(opt)}
                  style={{
                    padding: '14px',
                    borderRadius: '10px',
                    border: '1.5px solid #cbd5e1',
                    background: bgColor,
                    color: '#0f172a',
                    fontWeight: '800',
                    fontSize: '1rem',
                    cursor: selectedAnswer ? 'default' : 'pointer'
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
              <span style={{ fontSize: '0.85rem', color: selectedAnswer === quizQuestions[quizIdx].correct ? '#166534' : '#dc2626', fontWeight: '700' }}>
                {selectedAnswer === quizQuestions[quizIdx].correct ? '🎉 Correct! Well done!' : `💡 ${quizQuestions[quizIdx].hint}`}
              </span>
              <Button3D onClick={nextQuizQuestion} size="sm">
                Next Question
              </Button3D>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

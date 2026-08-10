import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { Layers, BookOpen, Sparkles } from 'lucide-react';

export const SetTheoryVennLab = () => {
  const [operation, setOperation] = useState('union'); // union, intersection, diffA, diffB

  // Set A & Set B elements
  const setA = [1, 2, 3, 4, 5];
  const setB = [4, 5, 6, 7, 8];

  const intersection = setA.filter(x => setB.includes(x));
  const union = Array.from(new Set([...setA, ...setB]));
  const diffA = setA.filter(x => !setB.includes(x));
  const diffB = setB.filter(x => !setA.includes(x));

  let activeResult = union;
  if (operation === 'intersection') activeResult = intersection;
  if (operation === 'diffA') activeResult = diffA;
  if (operation === 'diffB') activeResult = diffB;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      
      {/* Tutorial */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <BookOpen size={24} color="#8b5cf6" />
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-main)' }}>
            📖 Set Theory & Venn Diagrams (Explained From Scratch)
          </h3>
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
          A <strong>Set</strong> is a collection of distinct elements. <strong>Venn Diagrams</strong> use overlapping circles to visually represent relationships between sets (Union A ∪ B, Intersection A ∩ B, and Difference A \ B).
        </p>
      </div>

      {/* Operation Tabs */}
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { id: 'union', label: 'A ∪ B (Union)' },
          { id: 'intersection', label: 'A ∩ B (Intersection)' },
          { id: 'diffA', label: 'A \\ B (Difference A - B)' },
          { id: 'diffB', label: 'B \\ A (Difference B - A)' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => { setOperation(tab.id); soundFx.playClick(); }}
            style={{
              padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
              backgroundColor: operation === tab.id ? '#8b5cf6' : 'var(--bg-main)',
              color: operation === tab.id ? '#fff' : 'var(--text-muted)',
              fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* SVG Interactive Venn Diagram */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div style={{
          backgroundColor: '#0f172a', borderRadius: 'var(--radius-md)', padding: '24px',
          boxShadow: 'var(--shadow-md)', border: '3px solid #8b5cf6', display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
          <svg width="340" height="220" style={{ overflow: 'visible' }}>
            {/* Circle A */}
            <circle
              cx="120"
              cy="110"
              r="80"
              fill={operation === 'union' || operation === 'diffA' ? 'rgba(59, 130, 246, 0.4)' : operation === 'intersection' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255,255,255,0.05)'}
              stroke="#3b82f6"
              strokeWidth="3.5"
            />
            <text x="70" y="50" fill="#3b82f6" fontSize="16" fontWeight="800">Set A</text>

            {/* Circle B */}
            <circle
              cx="220"
              cy="110"
              r="80"
              fill={operation === 'union' || operation === 'diffB' ? 'rgba(168, 85, 247, 0.4)' : operation === 'intersection' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255,255,255,0.05)'}
              stroke="#a855f7"
              strokeWidth="3.5"
            />
            <text x="250" y="50" fill="#a855f7" fontSize="16" fontWeight="800">Set B</text>

            {/* Intersection Highlight Overlay */}
            {operation === 'intersection' && (
              <path
                d="M 170 43 A 80 80 0 0 1 170 177 A 80 80 0 0 1 170 43"
                fill="rgba(244, 63, 94, 0.6)"
                stroke="#f43f5e"
                strokeWidth="3"
              />
            )}

            {/* Elements inside Set A (only A) */}
            <text x="90" y="115" fill="#fff" fontSize="15" fontWeight="800">{diffA.join(', ')}</text>

            {/* Elements in Intersection (A and B) */}
            <text x="170" y="115" fill="#ffc800" fontSize="15" fontWeight="800" textAnchor="middle">{intersection.join(', ')}</text>

            {/* Elements inside Set B (only B) */}
            <text x="245" y="115" fill="#fff" fontSize="15" fontWeight="800">{diffB.join(', ')}</text>
          </svg>
        </div>

        {/* Result Dashboard */}
        <div style={{ backgroundColor: 'var(--purple-light)', padding: '20px 28px', borderRadius: 'var(--radius-md)', border: '2px solid #8b5cf6', textAlign: 'center' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#8b5cf6' }}>RESULT SET:</span>
          <div style={{ fontSize: '2rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: '#8b5cf6', marginTop: '4px' }}>
            &#123; {activeResult.join(', ')} &#125;
          </div>
          <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-main)', marginTop: '4px' }}>
            Cardinality |Result| = {activeResult.length} Elements
          </div>
        </div>
      </div>

    </div>
  );
};

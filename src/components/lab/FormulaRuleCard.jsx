import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { getFormulaForActivity } from '../../data/labFormulaBank';
import { BookOpen, Sparkles, HelpCircle, ChevronDown, ChevronUp, Calculator, Info } from 'lucide-react';

export const FormulaRuleCard = ({ activityId, classNumber }) => {
  const [expanded, setExpanded] = useState(true);
  const formulaData = getFormulaForActivity(activityId);

  if (!formulaData) return null;

  return (
    <CardRounded
      style={{
        padding: '18px 20px',
        background: '#ffffff',
        border: '1.5px solid #e0e7ff',
        boxShadow: '0 4px 16px rgba(79, 70, 229, 0.05)',
        marginBottom: '16px'
      }}
    >
      {/* Header with Title & Expand/Collapse */}
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff'
          }}>
            <BookOpen size={16} />
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Class {classNumber} Formula & Rule Card
            </span>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1e293b', lineHeight: '1.2' }}>
              {formulaData.title}
            </h4>
          </div>
        </div>

        <button
          style={{
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '6px',
            padding: '6px',
            cursor: 'pointer',
            color: '#64748b',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {expanded && (
        <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Main Formula Display Box */}
          <div style={{
            background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)',
            border: '1.5px solid #c7d2fe',
            borderRadius: '12px',
            padding: '14px 16px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4338ca', textTransform: 'uppercase', marginBottom: '4px' }}>
              Mathematical Formula / Governing Rule
            </div>
            <div style={{
              fontSize: '1.25rem',
              fontWeight: '900',
              color: '#312e81',
              fontFamily: 'Consolas, Monaco, "Courier New", monospace',
              letterSpacing: '0.5px'
            }}>
              {formulaData.formula}
            </div>
          </div>

          {/* Variables / Key Components Breakdown */}
          {formulaData.variables && formulaData.variables.length > 0 && (
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '10px 14px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', marginBottom: '6px' }}>
                Key Symbols & Terms:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {formulaData.variables.map((v, vIdx) => (
                  <div key={vIdx} style={{ fontSize: '0.82rem', color: '#334155' }}>
                    <strong style={{ color: '#4338ca' }}>{v.symbol}:</strong> {v.meaning}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conceptual Rule Description */}
          <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.45' }}>
            <strong style={{ color: '#1e293b' }}>Mathematical Principle:</strong> {formulaData.ruleDescription}
          </div>

          {/* Concrete Step-by-Step Calculation Example */}
          {formulaData.example && (
            <div style={{
              background: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '8px',
              padding: '8px 12px',
              fontSize: '0.82rem',
              color: '#166534'
            }}>
              💡 <strong>Example Calculation:</strong> {formulaData.example}
            </div>
          )}
        </div>
      )}
    </CardRounded>
  );
};

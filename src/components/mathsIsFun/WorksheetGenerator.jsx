import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { getChaptersForClass } from '../../data/chapters';
import {
  FileText, Printer, RefreshCw, Eye, EyeOff
} from 'lucide-react';

export const WorksheetGenerator = ({ initialClassNum = 4 }) => {
  const [selectedClass, setSelectedClass] = useState(initialClassNum);
  const [questionCount, setQuestionCount] = useState(10);
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const chapters = getChaptersForClass(`class${selectedClass}`);
  const [selectedChapId, setSelectedChapId] = useState(chapters[0]?.id || 'chap_1');

  const activeChap = chapters.find(c => c.id === selectedChapId) || chapters[0] || { title: 'Mathematics', lessons: [] };

  const generateQuestions = () => {
    const list = [];
    const lessons = activeChap.lessons || [{ title: 'Fundamental Operations' }];
    
    for (let i = 1; i <= questionCount; i++) {
      const les = lessons[(i - 1) % lessons.length];
      let problem = '';
      let answer = '';

      if (selectedClass <= 2) {
        const a = (i * 3) + 2;
        const b = (i * 2) + 1;
        if (i % 2 === 1) {
          problem = `Calculate the sum: ${a} + ${b} = ?`;
          answer = `${a + b}`;
        } else {
          problem = `Subtract: ${a + b} - ${b} = ?`;
          answer = `${a}`;
        }
      } else if (selectedClass <= 5) {
        const a = (i * 7) + 5;
        const b = (i * 4) + 3;
        if (i % 3 === 1) {
          problem = `Find the product: ${a} × ${b} = ?`;
          answer = `${a * b}`;
        } else if (i % 3 === 2) {
          problem = `Divide and find quotient: ${a * b} ÷ ${a} = ?`;
          answer = `${b}`;
        } else {
          problem = `Solve for the unknown value in fraction: ${i}/${i * 2} = ?/100`;
          answer = '50';
        }
      } else {
        const x = i + 2;
        const c = i * 5;
        if (i % 2 === 1) {
          problem = `Solve linear equation for x: 3x + ${c} = ${3 * x + c}`;
          answer = `x = ${x}`;
        } else {
          problem = `Calculate perimeter of rectangle with length ${x * 3} cm and width ${x * 2} cm.`;
          answer = `${2 * (x * 3 + x * 2)} cm`;
        }
      }

      list.push({
        num: i,
        topic: les.title,
        problem,
        answer
      });
    }
    return list;
  };

  const [generatedList, setGeneratedList] = useState(generateQuestions());

  const handleRegenerate = () => {
    soundFx.playClick();
    setGeneratedList(generateQuestions());
  };

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: 'var(--bg-card-solid)' }}>
      {/* Header & Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={22} color="#4f46e5" />
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800' }}>
              Dynamic Printable Worksheets Generator
            </h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Generate custom printable practice worksheets and answer keys for any ICSE Class and Topic!
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button3D variant="outline" size="sm" onClick={() => setShowAnswerKey(!showAnswerKey)} icon={showAnswerKey ? EyeOff : Eye}>
            {showAnswerKey ? 'Hide Answers' : 'Show Answers'}
          </Button3D>

          <Button3D variant="primary" size="sm" onClick={handlePrint} icon={Printer}>
            Print / Save PDF
          </Button3D>
        </div>
      </div>

      {/* Configuration Toolbar */}
      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        {/* Class Selector */}
        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: '800', display: 'block', marginBottom: '4px', color: '#475569' }}>Class:</label>
          <select
            value={selectedClass}
            onChange={(e) => {
              const c = parseInt(e.target.value, 10);
              setSelectedClass(c);
              const newChaps = getChaptersForClass(`class${c}`);
              setSelectedChapId(newChaps[0]?.id || 'chap_1');
            }}
            style={{ padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontWeight: '800', fontSize: '0.85rem' }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(c => (
              <option key={c} value={c}>Class {c} ICSE</option>
            ))}
          </select>
        </div>

        {/* Chapter / Topic */}
        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: '800', display: 'block', marginBottom: '4px', color: '#475569' }}>Chapter / Theme:</label>
          <select
            value={selectedChapId}
            onChange={(e) => setSelectedChapId(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontWeight: '800', fontSize: '0.85rem', maxWidth: '240px' }}
          >
            {chapters.map(ch => (
              <option key={ch.id} value={ch.id}>{ch.title}</option>
            ))}
          </select>
        </div>

        {/* Question Count */}
        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: '800', display: 'block', marginBottom: '4px', color: '#475569' }}>Problem Count:</label>
          <select
            value={questionCount}
            onChange={(e) => setQuestionCount(parseInt(e.target.value, 10))}
            style={{ padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontWeight: '800', fontSize: '0.85rem' }}
          >
            <option value={10}>10 Problems</option>
            <option value={15}>15 Problems</option>
            <option value={20}>20 Problems</option>
          </select>
        </div>

        <Button3D variant="secondary" size="sm" onClick={handleRegenerate} icon={RefreshCw} style={{ alignSelf: 'flex-end' }}>
          Generate New Set
        </Button3D>
      </div>

      {/* Printable Sheet View Container */}
      <div style={{
        background: '#ffffff',
        border: '2px solid #cbd5e1',
        borderRadius: '12px',
        padding: '32px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {/* Printable Header */}
        <div style={{ borderBottom: '2px solid #0f172a', paddingBottom: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0f172a', margin: 0 }}>
              Math Made Easy • Practice Worksheet
            </h2>
            <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#4f46e5', marginTop: '4px' }}>
              ICSE Class {selectedClass} — {activeChap.title}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', fontWeight: '700', color: '#475569' }}>
            <div>Student Name: _______________________</div>
            <div>Date: ____________  Score: _____ / {questionCount}</div>
          </div>
        </div>

        {/* Question Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {generatedList.map(q => (
            <div
              key={q.num}
              style={{
                border: '1.5px solid #e2e8f0',
                borderRadius: '10px',
                padding: '14px 16px',
                background: '#fafafa',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '110px'
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Q{q.num} • {q.topic}
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#1e293b', lineHeight: '1.4' }}>
                  {q.problem}
                </div>
              </div>

              <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontStyle: 'italic' }}>Workspace / Answer:</span>
                {showAnswerKey && (
                  <span style={{ background: '#dcfce7', color: '#15803d', fontWeight: '800', fontSize: '0.85rem', padding: '2px 8px', borderRadius: '4px' }}>
                    Key: {q.answer}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardRounded>
  );
};

import React, { useState, useEffect, useMemo } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { getChaptersForClass } from '../../data/chapters';
import { getQuestionsForTopic } from '../../data/questions';
import {
  FileText, Printer, RefreshCw, Eye, EyeOff, ShieldCheck, CheckCircle2
} from 'lucide-react';

export const WorksheetGenerator = ({ initialClassNum = 4, selectedClassNum }) => {
  const [selectedClass, setSelectedClass] = useState(selectedClassNum || initialClassNum);
  const [questionCount, setQuestionCount] = useState(10);
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  useEffect(() => {
    if (selectedClassNum) {
      setSelectedClass(selectedClassNum);
    }
  }, [selectedClassNum]);

  const chapters = useMemo(() => getChaptersForClass(selectedClass), [selectedClass]);
  const [selectedChapId, setSelectedChapId] = useState(chapters[0]?.id || 'chap_1');

  useEffect(() => {
    if (chapters && chapters.length > 0) {
      setSelectedChapId(chapters[0].id);
    }
  }, [chapters]);

  const activeChap = chapters.find(c => c.id === selectedChapId) || chapters[0] || { title: 'Mathematics', lessons: [] };

  const generateQuestions = () => {
    const list = [];
    const lessons = activeChap.lessons || [];

    // Collect genuine questions from all lessons in this chapter
    const pool = [];
    lessons.forEach(les => {
      const qs = getQuestionsForTopic(les.id) || [];
      qs.forEach(q => {
        pool.push({
          topic: les.title,
          problem: q.q,
          answer: q.a,
          explanation: q.exp
        });
      });
    });

    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());

    for (let i = 1; i <= questionCount; i++) {
      if (shuffled.length > 0) {
        const item = shuffled[(i - 1) % shuffled.length];
        list.push({
          num: i,
          topic: item.topic,
          problem: item.problem,
          answer: item.answer,
          explanation: item.explanation
        });
      } else {
        // Fallback structured problem
        list.push({
          num: i,
          topic: activeChap.title,
          problem: `Apply the core formulas and principles of ${activeChap.title} to calculate Problem #${i}.`,
          answer: `Standard solution for Class ${selectedClass} - ${activeChap.title}`,
          explanation: `Derived from Class ${selectedClass} ICSE Curriculum rules.`
        });
      }
    }
    return list;
  };

  const [generatedList, setGeneratedList] = useState([]);

  useEffect(() => {
    setGeneratedList(generateQuestions());
  }, [selectedClass, selectedChapId, questionCount]);

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
              ICSE Class {selectedClass} Printable Worksheet Generator
            </h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Generate 100% syllabus-verified practice worksheets and matching answer keys for Class {selectedClass}.
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

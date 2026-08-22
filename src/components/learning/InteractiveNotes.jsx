import React, { useState, useEffect } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { speechFx } from '../../utils/speech';
import { getInteractiveNotesForTopic, getInteractiveNotesForChapter } from '../../data/classInteractiveNotes';
import { validateAnswer } from '../../utils/answerValidator';
import {
  Target, Lightbulb, Sparkles, Edit3, HelpCircle, AlertTriangle,
  Smile, CheckCircle2, Volume2, ChevronDown, ChevronUp, Check, X, Repeat,
  BookOpen, Bookmark
} from 'lucide-react';

export const InteractiveNotes = ({ chapter, activeLesson, classId }) => {
  const [openSections, setOpenSections] = useState([0, 1, 2, 3, 4]);
  const [userAnswer, setUserAnswer] = useState('');
  const [tryItFeedback, setTryItFeedback] = useState(null);

  // Fetch topic-specific note or fallback to chapter's first note
  const activeTopicId = activeLesson?.id;
  const noteData = (activeTopicId && getInteractiveNotesForTopic(activeTopicId)) ||
                   (chapter?.id && getInteractiveNotesForChapter(chapter.id, classId)[0]) ||
                   null;

  // Reset user answer when topic/chapter changes
  useEffect(() => {
    setUserAnswer('');
    setTryItFeedback(null);
  }, [activeTopicId, chapter?.id, classId]);

  const toggleSection = (idx) => {
    setOpenSections(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
    soundFx.playClick();
  };

  const handleCheckTryIt = () => {
    if (!userAnswer.trim() || !noteData?.tryIt) return;
    const isRight = validateAnswer(
      userAnswer.trim(),
      noteData.tryIt.answer,
      [noteData.tryIt.answer],
      'written'
    );

    if (isRight) {
      soundFx.playCorrect();
      setTryItFeedback({ success: true, text: '🎉 Superb! You solved it correctly!' });
    } else {
      soundFx.playIncorrect();
      setTryItFeedback({ success: false, text: `💡 Not quite! Hint: ${noteData.tryIt.hint || 'Review the worked example above.'}` });
    }
  };

  if (!noteData) {
    return (
      <CardRounded style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
        <BookOpen size={40} style={{ margin: '0 auto 12px auto', color: '#94a3b8' }} />
        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#334155', marginBottom: '6px' }}>
          Interactive Notes
        </h3>
        <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
          Interactive notes for this topic are coming soon.
        </p>
      </CardRounded>
    );
  }

  const sections = [
    {
      id: 0,
      title: '🎯 Learning Objectives',
      color: '#1cb0f6',
      bgLight: '#ddf4ff',
      content: (
        <div style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
          By the end of this topic, you will be able to:
          <ul style={{ paddingLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {(noteData.learningObjectives || []).map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: 1,
      title: '🔑 Key Concepts & Definitions',
      color: '#58cc02',
      bgLight: '#e5f9d8',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem' }}>
          {(noteData.keyConcepts || []).map((n, i) => (
            <div key={i} style={{ padding: '12px 16px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid #58cc02' }}>
              <strong style={{ color: '#58cc02' }}>{n.topic}:</strong> {n.text}
            </div>
          ))}
        </div>
      )
    },
    {
      id: 2,
      title: '✨ Visual Concept & Summary',
      color: '#ce82ff',
      bgLight: '#f6e5ff',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '18px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: '#7c3aed', textAlign: 'center' }}>
            {noteData.visualConcept?.title || noteData.title}
          </div>
          <div style={{ padding: '8px 16px', backgroundColor: '#f5f3ff', border: '1.5px solid #ddd6fe', borderRadius: '8px', fontFamily: 'monospace', fontWeight: '800', color: '#6d28d9', fontSize: '1.05rem', textAlign: 'center' }}>
            {noteData.visualConcept?.label || noteData.title}
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {(noteData.visualConcept?.badges || []).map((b, i) => (
              <BadgeChip key={i} label={b} color="#7c3aed" bg="#f5f3ff" />
            ))}
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: '✏️ Solved Worked Example',
      color: '#ff9600',
      bgLight: '#fff2df',
      content: (
        <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
          <p style={{ fontWeight: '700', marginBottom: '6px', color: '#334155' }}>Problem Statement:</p>
          <div style={{ padding: '12px 16px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-sm)', fontFamily: 'monospace', fontWeight: '700', color: '#ea580c', marginBottom: '10px' }}>
            {noteData.workedExample?.problem}
          </div>
          <p style={{ fontWeight: '700', marginBottom: '6px', color: '#334155' }}>Step-by-step Solution:</p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {(noteData.workedExample?.steps || []).map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <div style={{ marginTop: '12px', padding: '8px 12px', background: '#ecfdf5', borderRadius: '8px', borderLeft: '3px solid #10b981', fontWeight: '700', color: '#065f46' }}>
            Final Answer: {noteData.workedExample?.answer}
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: '🚀 Try It Yourself!',
      color: '#ff4b4b',
      bgLight: '#ffe5e5',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
          <p style={{ fontWeight: '700', color: '#334155' }}>
            {noteData.tryIt?.question}
          </p>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Type your answer here..."
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleCheckTryIt(); }}
              style={{
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--border-light)',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-main)',
                fontWeight: '700',
                fontFamily: 'var(--font-rounded)',
                fontSize: '1rem',
                flex: '1 1 200px',
                outline: 'none'
              }}
            />
            <Button3D variant="primary" size="sm" onClick={handleCheckTryIt}>
              Check Answer
            </Button3D>
          </div>

          {tryItFeedback && (
            <div style={{
              padding: '10px 14px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: tryItFeedback.success ? 'var(--primary-light)' : 'var(--warning-light)',
              color: tryItFeedback.success ? 'var(--primary)' : 'var(--orange)',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem'
            }}>
              {tryItFeedback.success ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
              {tryItFeedback.text}
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: noteData.color, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Class {noteData.classId} ICSE • {noteData.category}
          </span>
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '800', color: '#1e293b' }}>
            {noteData.title}
          </h3>
        </div>

        <button
          onClick={() => {
            const textToSpeak = `${noteData.title}. Key concepts: ${noteData.keyConcepts?.map(k => `${k.topic}: ${k.text}`).join('. ')}`;
            speechFx.speak(textToSpeak);
          }}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.85rem',
            fontWeight: '700'
          }}
          title="Read Notes Aloud"
        >
          <Volume2 size={18} /> Listen to Notes
        </button>
      </div>

      {/* Accordion Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {sections.map((sec) => {
          const isOpen = openSections.includes(sec.id);

          return (
            <div
              key={sec.id}
              style={{
                borderRadius: 'var(--radius-md)',
                border: `1.5px solid ${sec.color}40`,
                backgroundColor: 'var(--bg-card-solid)',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Section Header */}
              <div
                onClick={() => toggleSection(sec.id)}
                style={{
                  padding: '14px 18px',
                  backgroundColor: isOpen ? sec.bgLight : 'transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
              >
                <div style={{ fontWeight: '800', fontFamily: 'var(--font-rounded)', fontSize: '1rem', color: sec.color }}>
                  {sec.title}
                </div>
                {isOpen ? <ChevronUp size={18} color={sec.color} /> : <ChevronDown size={18} color={sec.color} />}
              </div>

              {/* Section Content */}
              {isOpen && (
                <div style={{ padding: '18px', borderTop: `1px solid ${sec.color}20` }}>
                  {sec.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </CardRounded>
  );
};


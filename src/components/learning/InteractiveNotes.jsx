import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { speechFx } from '../../utils/speech';
import {
  Target, Lightbulb, Sparkles, Edit3, HelpCircle, AlertTriangle,
  Smile, CheckCircle2, Volume2, ChevronDown, ChevronUp, Check, X, Repeat
} from 'lucide-react';

export const InteractiveNotes = ({ chapter }) => {
  const [openSections, setOpenSections] = useState([0, 1, 2, 3, 4]);
  const [userAnswer, setUserAnswer] = useState('');
  const [tryItFeedback, setTryItFeedback] = useState(null);

  const toggleSection = (idx) => {
    setOpenSections(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
    soundFx.playClick();
  };

  const handleCheckTryIt = () => {
    if (!userAnswer.trim()) return;
    const isRight = userAnswer.trim().replace(/,/g, '') === (chapter.id === 'chap_1' ? '500000' : '84107');
    if (isRight) {
      soundFx.playCorrect();
      setTryItFeedback({ success: true, text: '🎉 Superb! You solved it correctly!' });
    } else {
      soundFx.playIncorrect();
      setTryItFeedback({ success: false, text: '💡 Not quite! Check the worked example above and try again.' });
    }
  };

  const sections = [
    {
      id: 0,
      title: '🎯 Learning Objective',
      color: '#1cb0f6',
      bgLight: '#ddf4ff',
      content: (
        <div style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
          By the end of this lesson, you will be able to:
          <ul style={{ paddingLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>Identify digit place values up to 6-digit Lakhs and 7-digit Crores.</li>
            <li>Convert numbers between Standard Form and Expanded Form.</li>
            <li>Apply commas according to the Indian Place Value System.</li>
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
          {chapter.notes.map((n, i) => (
            <div key={i} style={{ padding: '10px 14px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid #58cc02' }}>
              <strong style={{ color: '#58cc02' }}>{n.topic}:</strong> {n.text}
            </div>
          ))}
        </div>
      )
    },
    {
      id: 2,
      title: '✨ Animated Visual Concept',
      color: '#ce82ff',
      bgLight: '#f6e5ff',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)' }}>
          <div className="animate-float" style={{ fontSize: '1.6rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: '#ce82ff', letterSpacing: '2px' }}>
            5 , 4 2 , 1 0 9
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <BadgeChip label="5 Lakhs (500,000)" color="#ce82ff" bg="#f6e5ff" />
            <BadgeChip label="4 Ten-Thousands (40,000)" color="#1cb0f6" bg="#ddf4ff" />
            <BadgeChip label="2 Thousands (2,000)" color="#58cc02" bg="#e5f9d8" />
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
          <p style={{ fontWeight: '700', marginBottom: '6px' }}>Problem Statement:</p>
          <div style={{ padding: '12px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-sm)', fontFamily: 'monospace', fontWeight: '700', color: '#ff9600', marginBottom: '10px' }}>
            Write 3,45,809 in Expanded Form.
          </div>
          <p style={{ fontWeight: '700', marginBottom: '6px' }}>Step-by-step Solution:</p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <li>3 is in Lakhs position → 3 × 1,00,000 = 3,00,000</li>
            <li>4 is in Ten-Thousands position → 4 × 10,000 = 40,000</li>
            <li>5 is in Thousands position → 5 × 1,000 = 5,000</li>
            <li>8 is in Hundreds position → 8 × 100 = 800</li>
            <li>0 is in Tens position → 0 × 10 = 0</li>
            <li>9 is in Ones position → 9 × 1 = 9</li>
          </ol>
          <div style={{ fontWeight: '800', marginTop: '10px', color: '#ff9600' }}>
            Final Answer: 3,00,000 + 40,000 + 5,000 + 800 + 9
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: '🧪 Try It Yourself!',
      color: '#ff4b4b',
      bgLight: '#ffdfe0',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p style={{ fontWeight: '700', fontSize: '0.95rem' }}>
            {chapter.id === 'chap_1' ? 'What is the place value of digit 5 in 5,42,109?' : 'Calculate: 45678 + 38429'}
          </p>

          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              placeholder="Enter your answer..."
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              style={{
                flex: 1, padding: '10px 14px', borderRadius: 'var(--radius-md)',
                border: '1.5px solid var(--border-light)', outline: 'none',
                fontFamily: 'var(--font-rounded)', fontWeight: '700'
              }}
            />
            <Button3D variant="accent" size="sm" onClick={handleCheckTryIt}>Check</Button3D>
          </div>

          {tryItFeedback && (
            <div style={{ padding: '10px 14px', borderRadius: 'var(--radius-sm)', backgroundColor: tryItFeedback.success ? 'var(--primary-light)' : 'var(--accent-light)', color: tryItFeedback.success ? 'var(--primary)' : 'var(--accent)', fontWeight: '700', fontSize: '0.88rem' }}>
              {tryItFeedback.text}
            </div>
          )}
        </div>
      )
    },
    {
      id: 5,
      title: '⚠️ Common Mistakes to Avoid',
      color: '#ef4444',
      bgLight: '#fee2e2',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
          <div style={{ color: '#ef4444', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <X size={18} /> Common Mistake: Confusing Face Value with Place Value!
          </div>
          <div style={{ color: '#16a34a', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Check size={18} /> Correct Habit: Remember Face Value NEVER changes. Place value depends on position column!
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: '🌟 Real-life Example',
      color: '#f59e0b',
      bgLight: '#fef3c7',
      content: (
        <div style={{ fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--text-main)' }}>
          {chapter.id === 'chap_1' ? 'Bank accountants use 6-digit place values daily when managing customer savings accounts!' :
           chapter.id === 'chap_4' ? 'Pizza slices and cake portions use fractions to ensure everyone gets equal shares!' :
           'Grocery store bill receipts add itemized costs using multi-digit addition.'}
        </div>
      )
    },
    {
      id: 7,
      title: '📋 Summary & Key Takeaways',
      color: '#2bdeac',
      bgLight: '#e0faf2',
      content: (
        <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <li>In the Indian System, place values progress: Ones, Tens, Hundreds, Thousands, Ten-Thousands, Lakhs.</li>
          <li>Place Value = Digit × Position Value.</li>
          <li>Commas are placed after 3 digits from right, then every 2 digits.</li>
        </ul>
      )
    },
    {
      id: 8,
      title: '⚡ Quick Revision Flashcard',
      color: '#8b5cf6',
      bgLight: '#f3e8ff',
      content: (
        <div style={{ textAlign: 'center', padding: '16px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#8b5cf6', textTransform: 'uppercase', marginBottom: '4px' }}>
            Fast Exam Recap Rule
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: 'var(--text-main)' }}>
            Face Value = Digit Itself | Place Value = Digit × Position
          </div>
        </div>
      )
    }
  ];

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '700' }}>
            Rich Interactive Notes
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            9 Collapsible Animated Cards for ICSE Class 4 Mastery
          </p>
        </div>

        <Button3D
          variant="outline"
          size="sm"
          onClick={() => speechFx.speak(chapter.notes.map(n => n.text).join('. '))}
          icon={Volume2}
        >
          Read Aloud
        </Button3D>
      </div>

      {/* 9 Expandable Animated Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {sections.map(sec => {
          const isOpen = openSections.includes(sec.id);

          return (
            <div
              key={sec.id}
              style={{
                border: `1.5px solid ${sec.color}40`,
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
                transition: 'all 0.25s ease'
              }}
            >
              {/* Card Title Header */}
              <div
                onClick={() => toggleSection(sec.id)}
                style={{
                  padding: '16px 20px',
                  backgroundColor: sec.bgLight,
                  color: sec.color,
                  fontWeight: '800',
                  fontFamily: 'var(--font-rounded)',
                  fontSize: '1.1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <span>{sec.title}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>

              {/* Collapsible Content */}
              {isOpen && (
                <div
                  className="animate-pop"
                  style={{
                    padding: '20px',
                    backgroundColor: 'var(--bg-card-solid)',
                    borderTop: `1px solid ${sec.color}20`
                  }}
                >
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

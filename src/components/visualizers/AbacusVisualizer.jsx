import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { CheckCircle2, RotateCcw } from 'lucide-react';
import { soundFx } from '../../utils/audioSynth';

export const AbacusVisualizer = ({ targetNumber, onVerify }) => {
  const columns = [
    { key: 'lakhs', label: 'Lakhs (L)', value: 100000 },
    { key: 'tTh', label: 'Ten-Th (T-Th)', value: 10000 },
    { key: 'th', label: 'Thousands (Th)', value: 1000 },
    { key: 'h', label: 'Hundreds (H)', value: 100 },
    { key: 't', label: 'Tens (T)', value: 10 },
    { key: 'o', label: 'Ones (O)', value: 1 }
  ];

  const [beads, setBeads] = useState({
    lakhs: 4,
    tTh: 2,
    th: 0,
    h: 5,
    t: 1,
    o: 3
  });

  const [feedback, setFeedback] = useState(null);

  const currentTotal =
    beads.lakhs * 100000 +
    beads.tTh * 10000 +
    beads.th * 1000 +
    beads.h * 100 +
    beads.t * 10 +
    beads.o;

  const handleAdjust = (colKey, delta) => {
    setBeads(prev => {
      const nextVal = Math.min(9, Math.max(0, prev[colKey] + delta));
      return { ...prev, [colKey]: nextVal };
    });
    soundFx.playClick();
  };

  const handleCheck = () => {
    if (targetNumber && currentTotal === targetNumber) {
      soundFx.playCorrect();
      setFeedback({ success: true, text: 'Fantastic! Abacus count perfectly matches target 4,20,513!' });
      if (onVerify) onVerify(true);
    } else if (targetNumber) {
      soundFx.playIncorrect();
      setFeedback({ success: false, text: `Not quite! Your abacus shows ${currentTotal.toLocaleString('en-IN')}. Target is ${targetNumber.toLocaleString('en-IN')}.` });
    }
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '700' }}>
          Interactive Place Value Abacus
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Click + or - on each rod to add/remove beads and build 6-digit numbers!
        </p>
      </div>

      {/* Live Value Banner */}
      <div style={{
        backgroundColor: 'var(--primary-light)',
        color: 'var(--primary)',
        padding: '12px 28px',
        borderRadius: 'var(--radius-full)',
        fontSize: '1.8rem',
        fontWeight: '800',
        fontFamily: 'var(--font-rounded)',
        boxShadow: '0 4px 10px rgba(88, 204, 2, 0.2)'
      }}>
        {currentTotal.toLocaleString('en-IN')}
      </div>

      {/* Abacus Frame */}
      <div style={{
        display: 'flex',
        gap: '16px',
        backgroundColor: '#7c3aed',
        padding: '24px 20px 16px 20px',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 10px 0 #5b21b6, 0 15px 25px rgba(0,0,0,0.15)',
        border: '3px solid #a78bfa'
      }}>
        {columns.map(col => {
          const count = beads[col.key];

          return (
            <div key={col.key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              {/* Rod Top Button + */}
              <button
                onClick={() => handleAdjust(col.key, 1)}
                style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  backgroundColor: '#f59e0b', color: '#fff', border: 'none',
                  fontWeight: '800', cursor: 'pointer', boxShadow: '0 3px 0 #b45309'
                }}
              >
                +
              </button>

              {/* Rod Container */}
              <div style={{
                width: '36px',
                height: '180px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderRadius: '18px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                padding: '6px',
                gap: '4px',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                {/* Steel Wire inside Rod */}
                <div style={{ position: 'absolute', width: '4px', height: '100%', backgroundColor: '#e2e8f0', zIndex: 0 }} />

                {/* Beads */}
                {Array.from({ length: count }).map((_, i) => (
                  <div
                    key={i}
                    className="animate-pop"
                    style={{
                      width: '28px',
                      height: '16px',
                      borderRadius: '8px',
                      backgroundColor: '#38bdf8',
                      boxShadow: '0 3px 0 #0284c7, inset 0 2px 4px rgba(255,255,255,0.5)',
                      zIndex: 1,
                      border: '1px solid #7dd3fc'
                    }}
                  />
                ))}
              </div>

              {/* Rod Bottom Button - */}
              <button
                onClick={() => handleAdjust(col.key, -1)}
                style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  backgroundColor: '#ef4444', color: '#fff', border: 'none',
                  fontWeight: '800', cursor: 'pointer', boxShadow: '0 3px 0 #991b1b'
                }}
              >
                -
              </button>

              <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '700', fontFamily: 'var(--font-rounded)' }}>
                {col.label}
              </span>
            </div>
          );
        })}
      </div>

      {targetNumber && (
        <Button3D variant="primary" size="lg" onClick={handleCheck} icon={CheckCircle2}>
          Verify Target ({targetNumber.toLocaleString('en-IN')})
        </Button3D>
      )}

      {feedback && (
        <div style={{
          padding: '12px 20px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: feedback.success ? 'var(--primary-light)' : 'var(--accent-light)',
          color: feedback.success ? 'var(--primary)' : 'var(--accent)',
          fontWeight: '700',
          fontSize: '0.95rem'
        }}>
          {feedback.text}
        </div>
      )}
    </CardRounded>
  );
};

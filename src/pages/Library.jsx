import React, { useState } from 'react';
import { FormulaBook } from '../components/library/FormulaBook';
import { ChatWindow } from '../components/chat/ChatWindow';

export const Library = () => {
  const [tab, setTab] = useState('formulas');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.8rem', fontWeight: '800' }}>
            Class 4 Math Digital Library & AI Tutor
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Reference ICSE math formulas, definitions, and get instant answers from Pi-Bot!
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setTab('formulas')}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              backgroundColor: tab === 'formulas' ? 'var(--primary)' : 'var(--bg-card-solid)',
              color: tab === 'formulas' ? '#fff' : 'var(--text-muted)',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            Formula Book
          </button>
          <button
            onClick={() => setTab('ai')}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              backgroundColor: tab === 'ai' ? 'var(--secondary)' : 'var(--bg-card-solid)',
              color: tab === 'ai' ? '#fff' : 'var(--text-muted)',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            Ask Pi-Bot AI
          </button>
        </div>
      </div>

      {tab === 'formulas' ? <FormulaBook /> : <ChatWindow />}
    </div>
  );
};

import React, { useState } from 'react';
import { FormulaBook } from '../components/library/FormulaBook';
import { ChatWindow } from '../components/chat/ChatWindow';
import { useGame } from '../context/GameContext';
import { useLanguage } from '../context/LanguageContext';

export const Library = () => {
  const { gameState } = useGame();
  const { t } = useLanguage();
  const [tab, setTab] = useState('formulas');

  const selectedClassId = gameState.selectedClass || 'class4';
  const classNum = parseInt(selectedClassId.replace(/\D/g, ''), 10) || 4;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.8rem', fontWeight: '800' }}>
            {t('class_label', { classNum })} {t('library_title')}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            {t('library_subtitle')}
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
            {t('tab_cards')}
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
            {t('home_pibot_ask_btn')}
          </button>
        </div>
      </div>

      {tab === 'formulas' ? <FormulaBook classId={classNum} /> : <ChatWindow />}
    </div>
  );
};



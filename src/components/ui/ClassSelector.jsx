import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { useLanguage } from '../../context/LanguageContext';

export const ClassSelector = () => {
  const { gameState, changeClass } = useGame();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedClassId = gameState.selectedClass || 'class4';
  const classNum = selectedClassId.replace('class', '');
  const selectedClassDisplay = t('class_label', { classNum });

  const classes = Array.from({ length: 10 }, (_, i) => ({
    id: `class${i + 1}`,
    name: t('class_label', { classNum: i + 1 })
  }));

  return (
    <div style={{ position: 'relative', zIndex: 1000 }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--bg-card-solid)',
          border: '1px solid var(--border-light)',
          padding: '6px 12px',
          borderRadius: 'var(--radius-sm)',
          cursor: 'pointer',
          color: 'var(--text-main)',
          fontFamily: 'var(--font-sans)',
          fontWeight: '500',
          fontSize: '0.9rem'
        }}
      >
        {selectedClassDisplay}
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          marginTop: '4px',
          background: 'var(--bg-card-solid)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-sm)',
          boxShadow: 'var(--shadow-md)',
          minWidth: '120px',
          maxHeight: '300px',
          overflowY: 'auto'
        }}>
          {classes.map((cls) => (
            <button
              key={cls.id}
              onClick={() => {
                changeClass(cls.id);
                setIsOpen(false);
              }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '10px 16px',
                background: selectedClassId === cls.id ? 'var(--primary-light)' : 'transparent',
                border: 'none',
                borderLeft: selectedClassId === cls.id ? '4px solid var(--primary)' : '4px solid transparent',
                cursor: 'pointer',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                transition: 'background 0.2s'
              }}
            >
              {cls.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};



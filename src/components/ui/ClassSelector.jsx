import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { useLanguage } from '../../context/LanguageContext';

export const ClassSelector = () => {
  const { gameState, changeClass } = useGame();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const selectedClassId = gameState.selectedClass || 'class4';
  const classNum = selectedClassId.replace('class', '');
  const selectedClassDisplay = t('class_label', { classNum }) || `Class ${classNum}`;

  const classes = Array.from({ length: 10 }, (_, i) => ({
    id: `class${i + 1}`,
    name: t('class_label', { classNum: i + 1 }) || `Class ${i + 1}`
  }));

  // Click outside listener for mobile/desktop
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} style={{ position: 'relative', zIndex: 1000 }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Class"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'var(--bg-card-solid)',
          border: '1px solid var(--border-light)',
          padding: '6px 10px',
          borderRadius: 'var(--radius-sm)',
          cursor: 'pointer',
          color: 'var(--text-main)',
          fontFamily: 'var(--font-sans)',
          fontWeight: '700',
          fontSize: '0.85rem',
          whiteSpace: 'nowrap'
        }}
      >
        <span>{selectedClassDisplay}</span>
        <ChevronDown size={14} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
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
          minWidth: '130px',
          maxHeight: '260px',
          overflowY: 'auto',
          zIndex: 1100
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
                padding: '9px 14px',
                background: selectedClassId === cls.id ? 'var(--primary-light)' : 'transparent',
                border: 'none',
                borderLeft: selectedClassId === cls.id ? '4px solid var(--primary)' : '4px solid transparent',
                cursor: 'pointer',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                fontWeight: selectedClassId === cls.id ? '700' : '500',
                transition: 'background 0.15s'
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

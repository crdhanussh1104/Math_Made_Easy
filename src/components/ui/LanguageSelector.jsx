import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSelector = ({ variant = 'header' }) => {
  const { language, setLanguage, languages, currentLanguageMeta } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (variant === 'settings-grid') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px', width: '100%' }}>
        {languages.map((lang) => {
          const isSelected = language === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: 'var(--radius-sm, 10px)',
                border: isSelected ? '2px solid var(--primary, #4f46e5)' : '1px solid var(--border-light, #e2e8f0)',
                background: isSelected ? 'rgba(79, 70, 229, 0.08)' : 'var(--bg-card, #ffffff)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                fontFamily: 'inherit'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.25rem' }}>{lang.flag}</span>
                <div>
                  <div style={{ fontWeight: isSelected ? '700' : '600', fontSize: '0.9rem', color: isSelected ? 'var(--primary, #4f46e5)' : 'var(--text-main, #1e293b)' }}>
                    {lang.nativeName}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted, #64748b)' }}>
                    {lang.name}
                  </div>
                </div>
              </div>
              {isSelected && <Check size={18} color="var(--primary, #4f46e5)" />}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={dropdownRef} style={{ position: 'relative', zIndex: 1000 }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Change Language / भाषा बदलें"
        aria-label="Change Language"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          padding: '6px 12px',
          borderRadius: 'var(--radius-sm, 8px)',
          cursor: 'pointer',
          color: '#ffffff',
          fontFamily: 'inherit',
          fontWeight: '500',
          fontSize: '0.88rem',
          transition: 'all 0.2s',
          backdropFilter: 'blur(8px)'
        }}
      >
        <Globe size={16} />
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>{currentLanguageMeta.flag}</span>
          <span>{currentLanguageMeta.nativeName}</span>
        </span>
        <ChevronDown size={14} style={{ opacity: 0.8, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: '6px',
          background: 'var(--bg-card-solid, #ffffff)',
          border: '1px solid var(--border-light, #e2e8f0)',
          borderRadius: 'var(--radius-md, 10px)',
          boxShadow: 'var(--shadow-lg, 0 10px 25px -5px rgba(0,0,0,0.15))',
          minWidth: '190px',
          maxHeight: '340px',
          overflowY: 'auto',
          padding: '4px'
        }}>
          <div style={{
            padding: '6px 12px 4px 12px',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--text-muted, #94a3b8)',
            borderBottom: '1px solid var(--border-light, #f1f5f9)'
          }}>
            Select Language
          </div>
          {languages.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  background: isSelected ? 'var(--primary-light, #eef2ff)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: isSelected ? 'var(--primary, #4f46e5)' : 'var(--text-main, #1e293b)',
                  fontFamily: 'inherit',
                  fontSize: '0.88rem',
                  fontWeight: isSelected ? '600' : '400',
                  transition: 'background 0.15s'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1rem' }}>{lang.flag}</span>
                  <span>{lang.nativeName}</span>
                </span>
                {isSelected && <Check size={14} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { Bot, Sparkles, Volume2 } from 'lucide-react';
import { speechFx } from '../../utils/speech';

export const MascotWidget = ({
  message = "Hi! I'm Pi-Bot! Ready to conquer Class 4 Math?",
  mood = 'happy', // happy, thinking, celebrating, hint
  onClick,
  showVoiceBtn = true
}) => {
  const handleSpeak = (e) => {
    e.stopPropagation();
    speechFx.speak(message);
  };

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        cursor: onClick ? 'pointer' : 'default',
        padding: '12px'
      }}
    >
      {/* Pi-Bot Avatar Frame */}
      <div
        className="animate-float"
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '20px',
          background: mood === 'celebrating'
            ? 'linear-gradient(135deg, #ffc800, #ff9600)'
            : mood === 'hint'
            ? 'linear-gradient(135deg, #ce82ff, #8b5cf6)'
            : 'linear-gradient(135deg, #1cb0f6, #00f0ff)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          boxShadow: '0 8px 16px rgba(28, 176, 246, 0.3)',
          position: 'relative',
          flexShrink: 0
        }}
      >
        <Bot size={36} />
        {mood === 'celebrating' && (
          <Sparkles
            size={20}
            style={{ position: 'absolute', top: -6, right: -6, color: '#fff', animation: 'wobble 1s infinite' }}
          />
        )}
      </div>

      {/* Speech Bubble */}
      <div
        style={{
          backgroundColor: 'var(--bg-card-solid)',
          padding: '14px 18px',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-sm)',
          border: '1.5px solid var(--border-light)',
          position: 'relative',
          maxWidth: '360px',
          fontSize: '0.95rem',
          fontWeight: '500',
          lineHeight: '1.4',
          color: 'var(--text-main)'
        }}
      >
        {/* Tail */}
        <div style={{
          position: 'absolute',
          left: '-8px',
          top: '50%',
          transform: 'translateY(-50%) rotate(45deg)',
          width: '14px',
          height: '14px',
          backgroundColor: 'var(--bg-card-solid)',
          borderLeft: '1.5px solid var(--border-light)',
          borderBottom: '1.5px solid var(--border-light)'
        }} />
        
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
          <span>{message}</span>
          {showVoiceBtn && (
            <button
              onClick={handleSpeak}
              title="Read Aloud"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--secondary)',
                cursor: 'pointer',
                padding: '2px',
                flexShrink: 0
              }}
            >
              <Volume2 size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

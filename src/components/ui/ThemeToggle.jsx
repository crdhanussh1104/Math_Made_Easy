import React from 'react';
import { useGame } from '../../context/GameContext';
import { Sun, Moon } from 'lucide-react';
import { soundFx } from '../../utils/audioSynth';

export const ThemeToggle = ({ showLabel = false, size = 'md' }) => {
  const { gameState, setTheme } = useGame();
  const currentTheme = gameState?.theme || 'light';
  const isDark = currentTheme === 'dark' || currentTheme === 'space' || currentTheme === 'cyber';

  const handleToggle = () => {
    soundFx.playClick();
    const nextTheme = isDark ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={handleToggle}
      type="button"
      title={isDark ? "Switch to Light Mode (Day)" : "Switch to Dark Mode (Night)"}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: showLabel ? '8px' : '0',
        padding: showLabel ? '8px 14px' : '8px',
        borderRadius: '12px',
        border: '1.5px solid rgba(255, 255, 255, 0.25)',
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        color: '#ffffff',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '0.85rem',
        fontFamily: 'var(--font-rounded)',
        transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        flexShrink: 0
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
      aria-label={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s ease',
        transform: isDark ? 'rotate(180deg)' : 'rotate(0deg)'
      }}>
        {isDark ? (
          <Moon size={18} color="#fcd34d" fill="#fcd34d" />
        ) : (
          <Sun size={18} color="#fbbf24" fill="#fbbf24" />
        )}
      </div>

      {showLabel && (
        <span style={{ fontSize: '0.85rem' }}>
          {isDark ? 'Dark Theme' : 'Light Theme'}
        </span>
      )}
    </button>
  );
};

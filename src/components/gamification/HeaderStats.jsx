import React from 'react';
import { useGame } from '../../context/GameContext';
import { Flame, Star, Gem, Volume2, VolumeX, Moon, Sun, BookOpen } from 'lucide-react';
import { icseClasses } from '../../data/chapters';

export const HeaderStats = ({ onNavigate }) => {
  const { gameState, toggleSound, setTheme } = useGame();

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg-card)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderBottom: '1px solid var(--border-card)',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px'
    }}>
      {/* Brand Logo & Class Switcher */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div
          onClick={() => onNavigate && onNavigate('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #58cc02, #2bdeac)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: '1.2rem',
            fontFamily: 'var(--font-rounded)'
          }}>
            M
          </div>
          <div>
            <h1 style={{ fontSize: '1.15rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: 'var(--text-main)', lineHeight: 1.1 }}>
              Math Made Easy
            </h1>
            <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700' }}>
              ICSE Curriculum
            </span>
          </div>
        </div>

        {/* Class Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 12px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--primary-light)',
          color: 'var(--primary)',
          fontSize: '0.8rem',
          fontWeight: '700',
          fontFamily: 'var(--font-rounded)'
        }}>
          <BookOpen size={14} />
          <span>Class 4 ICSE</span>
        </div>
      </div>

      {/* Real Stats Counters (Streak, XP, Gems) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Real Streak Counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700', color: '#ff9600', fontFamily: 'var(--font-rounded)' }} title="Real Daily Learning Streak">
          <Flame size={22} fill="#ff9600" />
          <span>{gameState.streak}d</span>
        </div>

        {/* XP Level */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700', color: '#1cb0f6', fontFamily: 'var(--font-rounded)' }} title="XP Points">
          <Star size={22} fill="#1cb0f6" />
          <span>{gameState.xp} XP (Lvl {gameState.level})</span>
        </div>

        {/* Gems */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700', color: '#ce82ff', fontFamily: 'var(--font-rounded)' }} title="Gems">
          <Gem size={22} fill="#ce82ff" />
          <span>{gameState.gems}</span>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          onClick={toggleSound}
          title={gameState.soundMuted ? "Unmute Audio" : "Mute Audio"}
          style={{
            background: 'none',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-sm)',
            padding: '8px',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {gameState.soundMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        <button
          onClick={() => setTheme(gameState.theme === 'dark' ? 'daylight' : 'dark')}
          title="Toggle Theme"
          style={{
            background: 'none',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-sm)',
            padding: '8px',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {gameState.theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
};

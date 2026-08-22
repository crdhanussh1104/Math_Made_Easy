import React from 'react';
import { useGame } from '../../context/GameContext';
import { Home, BookOpen, HelpCircle, Box, User, Flame, Star, Gem } from 'lucide-react';
import { ClassSelector } from '../ui/ClassSelector';

export const HeaderStats = ({ currentPage, onNavigate }) => {
  const { gameState } = useGame();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'quiz', label: 'Practice', icon: HelpCircle },
    { id: 'threeLab', label: 'Lab', icon: Box },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--primary)',
      color: '#ffffff',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {/* Brand Logo & Class Switcher */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div
          onClick={() => onNavigate && onNavigate('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: '#ffffff',
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: '1.4rem',
            fontFamily: 'var(--font-sans)'
          }}>
            M
          </div>
        </div>

        {/* New Class Selector */}
        <ClassSelector />
      </div>

      {/* Main Navigation */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: isActive ? '#ffffff' : 'transparent',
                color: isActive ? 'var(--primary)' : '#ffffff',
                fontWeight: '600',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <Icon size={18} />
              <span className="hide-on-mobile">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Real Stats Counters (Streak, XP, Gems) - Hidden on very small screens */}
      <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500', fontSize: '0.85rem', color: '#fff8d6' }} title="Real Daily Learning Streak">
          <Flame size={16} fill="#ff9600" color="#ff9600" />
          <span>{gameState.streak} day streak</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500', fontSize: '0.85rem', color: '#ddf4ff' }} title="XP Points">
          <Star size={16} fill="#1cb0f6" color="#1cb0f6" />
          <span>{gameState.xp} XP</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500', fontSize: '0.85rem', color: '#f6e5ff' }} title="Gems">
          <Gem size={16} fill="#ce82ff" color="#ce82ff" />
          <span>{gameState.gems} gems</span>
        </div>
      </div>
    </header>
  );
};

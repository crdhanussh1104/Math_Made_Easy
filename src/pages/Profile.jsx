import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { CardRounded } from '../components/ui/CardRounded';
import { Button3D } from '../components/ui/Button3D';
import { BadgeChip } from '../components/ui/BadgeChip';
import { ProgressBar } from '../components/ui/ProgressBar';
import { WardrobeShop } from '../components/profile/WardrobeShop';
import { badgesData } from '../data/avatarShop';
import { User, Award, Shield, Star, Zap, Crown, Flame, Gem, Sparkles } from 'lucide-react';

export const Profile = () => {
  const { gameState } = useGame();
  const [activeTab, setActiveTab] = useState('wardrobe'); // 'wardrobe' | 'stats'

  // Evolution Titles
  const evolutionTitle = gameState.level >= 15 ? 'Sovereign Math Master 👑'
    : gameState.level >= 10 ? 'Wizard Mathemagician 🧙'
    : gameState.level >= 5 ? 'Math Knight 🛡️'
    : 'Novice Explorer 🎓';

  const unlockedCount = (gameState.unlockedBadges || []).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '100%' }}>
      
      {/* 1. Header Profile Banner */}
      <CardRounded style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, var(--purple) 100%)', color: '#ffffff', padding: '28px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', boxShadow: '0 8px 16px rgba(0,0,0,0.15)' }}>
              🎓
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: 'rgba(255,255,255,0.25)', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
                {evolutionTitle}
              </span>
              <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '2.2rem', fontWeight: '800', marginTop: '6px' }}>
                Math Explorer
              </h2>
              <div style={{ fontSize: '0.95rem', opacity: 0.95, display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                <span>Level {gameState.level}</span>
                <span>•</span>
                <span>{gameState.xp} total XP</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '12px 20px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', opacity: 0.8 }}>GEMS</div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: '#ffc800' }}>💎 {gameState.gems}</div>
            </div>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '12px 20px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', opacity: 0.8 }}>STREAK</div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: '#ff9600' }}>🔥 {gameState.streak}d</div>
            </div>
          </div>
        </div>
      </CardRounded>

      {/* 2. Badges & Achievements Gallery */}
      <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '800' }}>
          Trophies & Badges Gallery 🏆
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          {badgesData.map(badge => {
            const isUnlocked = (gameState.unlockedBadges || []).includes(badge.id) || badge.unlocked;

            return (
              <div
                key={badge.id}
                style={{
                  padding: '16px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-main)',
                  border: isUnlocked ? '1.5px solid var(--secondary)' : '1px dashed var(--border-light)',
                  opacity: isUnlocked ? 1 : 0.6, display: 'flex', alignItems: 'center', gap: '12px'
                }}
              >
                <div style={{ fontSize: '2rem' }}>{badge.icon}</div>
                <div>
                  <div style={{ fontWeight: '800', fontFamily: 'var(--font-rounded)', fontSize: '0.95rem' }}>{badge.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{badge.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </CardRounded>

      {/* 3. Avatar Wardrobe & Customization Shop */}
      <WardrobeShop />

    </div>
  );
};

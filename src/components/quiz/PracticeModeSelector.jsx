import React from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { BookOpen, Trophy, Gamepad2, Sparkles, Clock, Flame, Star } from 'lucide-react';

export const PracticeModeSelector = ({ chapterTitle, onSelectMode }) => {
  const modes = [
    {
      id: 'school',
      title: '📘 School Level',
      badge: 'ICSE Syllabus Standard',
      color: '#58cc02',
      bgLight: '#e5f9d8',
      icon: BookOpen,
      desc: 'Standard Class 4 ICSE questions to reinforce everyday classroom topics.',
      details: ['• Direct curriculum questions', '• Standard step-by-step guidance', '• +50 XP per completion']
    },
    {
      id: 'olympiad',
      title: '🏆 Olympiad Level',
      badge: 'HOTS & Logic Reasoning',
      color: '#7c3aed',
      bgLight: '#f3e8ff',
      icon: Trophy,
      desc: 'Higher-Order Thinking Skills (HOTS), pattern recognition, and contest reasoning.',
      details: ['• Higher-order thinking questions', '• Pattern-based logic riddles', '• Contest thinking strategies', '• +100 XP Bonus']
    },
    {
      id: 'challenge',
      title: '🎮 Challenge Mode',
      badge: 'Timed Speed Blitz',
      color: '#ff9600',
      bgLight: '#fff2df',
      icon: Gamepad2,
      desc: 'Timed 45-second high-speed blitz round with live leaderboard rankings and XP multipliers!',
      details: ['• 45-second fast timer', '• 🔥 2x / 3x XP Multiplier', '• Global Leaderboard points', '• +150 XP & 25 Gems']
    }
  ];

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '100%' }}>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--primary)' }}>
          Practice Mode Selection
        </span>
        <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.8rem', fontWeight: '800', marginTop: '4px' }}>
          Choose Your Practice Arena ⚔️
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Selected Chapter: <strong>{chapterTitle}</strong>
        </p>
      </div>

      {/* 3 Modes Cards Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {modes.map(mode => {
          const Icon = mode.icon;

          return (
            <div
              key={mode.id}
              onClick={() => {
                soundFx.playClick();
                onSelectMode(mode.id);
              }}
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-main)',
                border: `2px solid ${mode.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              className="hover-lift"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 280px' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  backgroundColor: mode.bgLight, color: mode.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 4px 12px ${mode.color}30`
                }}>
                  <Icon size={28} />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.25rem', fontWeight: '800' }}>
                      {mode.title}
                    </h3>
                    <BadgeChip label={mode.badge} color={mode.color} bg={mode.bgLight} size="sm" />
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    {mode.desc}
                  </p>
                </div>
              </div>

              <Button3D variant="primary" size="md">
                Launch Arena 🚀
              </Button3D>
            </div>
          );
        })}
      </div>
    </CardRounded>
  );
};

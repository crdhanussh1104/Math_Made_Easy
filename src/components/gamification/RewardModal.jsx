import React from 'react';
import { Star, Gem, Trophy, Sparkles } from 'lucide-react';
import { Button3D } from '../ui/Button3D';

export const RewardModal = ({
  isOpen,
  onContinue,
  score = 100,
  xpEarned = 50,
  gemsEarned = 10
}) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div
        className="animate-pop"
        style={{
          backgroundColor: 'var(--bg-card-solid)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '440px',
          padding: '32px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-lg)',
          border: '2px solid var(--primary-light)'
        }}
      >
        {/* Trophy Header Icon */}
        <div
          className="animate-bounce-short"
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #ffc800, #ff9600)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto',
            boxShadow: '0 10px 20px rgba(255, 200, 0, 0.4)'
          }}
        >
          <Trophy size={44} />
        </div>

        <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '8px' }}>
          Lesson Completed!
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '24px' }}>
          Awesome job! You scored {score}% accuracy!
        </p>

        {/* Stars Display */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
          {[1, 2, 3].map(s => (
            <Star
              key={s}
              size={36}
              fill={score >= (s * 33) ? '#ffc800' : '#e2e8f0'}
              color={score >= (s * 33) ? '#e5b200' : '#cbd5e1'}
              className="animate-pop"
              style={{ animationDelay: `${s * 0.15}s` }}
            />
          ))}
        </div>

        {/* Reward Stats Breakdown */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          marginBottom: '28px'
        }}>
          <div style={{
            padding: '14px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--secondary-light)',
            color: 'var(--secondary)',
            fontWeight: '700',
            fontFamily: 'var(--font-rounded)'
          }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>XP Earned</div>
            <div style={{ fontSize: '1.4rem' }}>+{xpEarned} XP</div>
          </div>
          <div style={{
            padding: '14px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--purple-light)',
            color: 'var(--purple)',
            fontWeight: '700',
            fontFamily: 'var(--font-rounded)'
          }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Gems Won</div>
            <div style={{ fontSize: '1.4rem' }}>+{gemsEarned} Gems</div>
          </div>
        </div>

        <Button3D variant="primary" size="lg" style={{ width: '100%' }} onClick={onContinue} icon={Sparkles}>
          Continue Journey
        </Button3D>
      </div>
    </div>
  );
};

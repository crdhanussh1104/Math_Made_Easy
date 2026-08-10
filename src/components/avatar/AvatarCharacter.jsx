import React from 'react';
import { Crown, GraduationCap, Wand2, Glasses, Gamepad2, Compass, Sparkles, Rocket, Bird, Bot } from 'lucide-react';

export const AvatarCharacter = ({
  avatarState = { hat: 'none', glasses: 'none', outfit: 'explorer', pet: 'none' },
  size = 120,
  animate = true
}) => {
  const { hat, glasses, outfit, pet } = avatarState;

  return (
    <div
      className={animate ? 'animate-float' : ''}
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Outer Glow Circle */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #1cb0f6, #58cc02)',
        padding: '6px',
        boxShadow: '0 10px 25px rgba(28, 176, 246, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {/* Avatar Base Face */}
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#ffe0bd',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Hair */}
          <div style={{
            position: 'absolute',
            top: 0,
            width: '80%',
            height: '35%',
            backgroundColor: '#4a2e18',
            borderRadius: '0 0 20px 20px'
          }} />

          {/* Eyes */}
          <div style={{ display: 'flex', gap: `${size * 0.15}px`, marginTop: `${size * 0.15}px`, zIndex: 2 }}>
            <div style={{ width: `${size * 0.1}px`, height: `${size * 0.1}px`, backgroundColor: '#1e293b', borderRadius: '50%' }} />
            <div style={{ width: `${size * 0.1}px`, height: `${size * 0.1}px`, backgroundColor: '#1e293b', borderRadius: '50%' }} />
          </div>

          {/* Smile */}
          <div style={{
            width: `${size * 0.2}px`,
            height: `${size * 0.1}px`,
            borderBottom: '3px solid #1e293b',
            borderRadius: '0 0 10px 10px',
            marginTop: '4px',
            zIndex: 2
          }} />

          {/* Outfit Color Indicator */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            width: '90%',
            height: '30%',
            backgroundColor: outfit === 'wizard' ? '#8b5cf6' : outfit === 'astronaut' ? '#64748b' : '#58cc02',
            borderRadius: '20px 20px 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}>
            {outfit === 'wizard' && <Sparkles size={size * 0.18} />}
            {outfit === 'astronaut' && <Rocket size={size * 0.18} />}
            {outfit === 'explorer' && <Compass size={size * 0.18} />}
          </div>
        </div>

        {/* Glasses Overlay */}
        {glasses !== 'none' && (
          <div style={{ position: 'absolute', top: '35%', zIndex: 10, color: '#0f172a' }}>
            {glasses === 'smart' && <Glasses size={size * 0.45} />}
            {glasses === 'vr' && <Gamepad2 size={size * 0.45} style={{ color: '#00f0ff' }} />}
          </div>
        )}

        {/* Hat Overlay */}
        {hat !== 'none' && (
          <div style={{ position: 'absolute', top: '-15%', zIndex: 12, color: '#ffc800' }}>
            {hat === 'crown' && <Crown size={size * 0.45} fill="#ffc800" />}
            {hat === 'grad' && <GraduationCap size={size * 0.45} style={{ color: '#1e293b' }} />}
            {hat === 'wizard' && <Wand2 size={size * 0.45} style={{ color: '#ce82ff' }} />}
          </div>
        )}

        {/* Pet Overlay */}
        {pet !== 'none' && (
          <div style={{
            position: 'absolute',
            bottom: '-5%',
            right: '-10%',
            zIndex: 15,
            width: `${size * 0.35}px`,
            height: `${size * 0.35}px`,
            borderRadius: '50%',
            backgroundColor: 'var(--bg-card-solid)',
            border: '2px solid var(--secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--secondary)'
          }}>
            {pet === 'owl' && <Bird size={size * 0.22} />}
            {pet === 'robot' && <Bot size={size * 0.22} />}
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';

export const ProgressBar = ({
  progress = 0, // 0 to 100
  color = 'var(--primary)',
  height = 16,
  showLabel = false,
  className = ''
}) => {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }} className={className}>
      <div style={{
        flex: 1,
        height: `${height}px`,
        backgroundColor: 'var(--border-light)',
        borderRadius: 'var(--radius-full)',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)'
      }}>
        <div style={{
          height: '100%',
          width: `${clamped}%`,
          backgroundColor: color,
          borderRadius: 'var(--radius-full)',
          transition: 'width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          position: 'relative',
          boxShadow: `0 0 8px ${color}`
        }}>
          {/* Highlight Shimmer */}
          <div style={{
            position: 'absolute',
            top: 2, left: 4, right: 4, height: '40%',
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: 'var(--radius-full)'
          }} />
        </div>
      </div>
      {showLabel && (
        <span style={{
          fontWeight: '700',
          fontSize: '0.875rem',
          fontFamily: 'var(--font-rounded)',
          color: 'var(--text-main)',
          minWidth: '36px'
        }}>
          {Math.round(clamped)}%
        </span>
      )}
    </div>
  );
};

import React from 'react';

export const BadgeChip = ({
  label,
  icon: Icon,
  color = 'var(--secondary)',
  bg = 'var(--secondary-light)',
  size = 'md',
  className = ''
}) => {
  return (
    <div
      className={`badge-chip ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: size === 'sm' ? '4px 10px' : '6px 14px',
        borderRadius: 'var(--radius-full)',
        backgroundColor: bg,
        color: color,
        fontWeight: '700',
        fontSize: size === 'sm' ? '0.75rem' : '0.875rem',
        fontFamily: 'var(--font-rounded)',
        border: `1px solid ${color}40`,
        boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
      }}
    >
      {Icon && <Icon size={size === 'sm' ? 14 : 16} />}
      <span>{label}</span>
    </div>
  );
};

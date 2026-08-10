import React from 'react';

export const CardRounded = ({
  children,
  glass = false,
  hoverable = false,
  className = '',
  style = {},
  onClick,
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className={`card-rounded ${hoverable ? 'hoverable-card' : ''} ${className}`}
      style={{
        background: glass ? 'var(--bg-card)' : 'var(--bg-card-solid)',
        backdropFilter: glass ? 'var(--glass-blur)' : 'none',
        WebkitBackdropFilter: glass ? 'var(--glass-blur)' : 'none',
        borderRadius: 'var(--radius-lg)',
        border: `1px solid ${glass ? 'var(--glass-border)' : 'var(--border-card)'}`,
        boxShadow: hoverable ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        padding: '24px',
        transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
        cursor: onClick ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

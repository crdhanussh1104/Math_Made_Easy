import React from 'react';
import { soundFx } from '../../utils/audioSynth';

export const Button3D = ({
  children,
  variant = 'primary', // primary, secondary, accent, warning, purple, outline
  size = 'md', // sm, md, lg
  onClick,
  disabled = false,
  className = '',
  icon: Icon,
  ...props
}) => {
  const handleClick = (e) => {
    if (disabled) return;
    soundFx.playClick();
    if (onClick) onClick(e);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          bg: 'var(--primary)',
          color: '#ffffff',
          shadow: '0 5px 0 var(--primary-shadow)'
        };
      case 'secondary':
        return {
          bg: 'var(--secondary)',
          color: '#ffffff',
          shadow: '0 5px 0 var(--secondary-shadow)'
        };
      case 'accent':
        return {
          bg: 'var(--accent)',
          color: '#ffffff',
          shadow: '0 5px 0 var(--accent-shadow)'
        };
      case 'warning':
        return {
          bg: 'var(--warning)',
          color: '#2b3a4a',
          shadow: '0 5px 0 var(--warning-shadow)'
        };
      case 'purple':
        return {
          bg: 'var(--purple)',
          color: '#ffffff',
          shadow: '0 5px 0 var(--purple-shadow)'
        };
      case 'outline':
        return {
          bg: '#ffffff',
          color: 'var(--text-main)',
          shadow: '0 4px 0 var(--border-light)',
          border: '2px solid var(--border-light)'
        };
      default:
        return { bg: 'var(--primary)', color: '#fff', shadow: '0 5px 0 var(--primary-shadow)' };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm': return { padding: '8px 14px', fontSize: '0.875rem', borderRadius: 'var(--radius-sm)' };
      case 'lg': return { padding: '16px 28px', fontSize: '1.15rem', borderRadius: 'var(--radius-lg)' };
      default: return { padding: '12px 20px', fontSize: '1rem', borderRadius: 'var(--radius-md)' };
    }
  };

  const vStyle = getVariantStyles();
  const sStyle = getSizeStyles();

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`button-3d ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontWeight: '700',
        fontFamily: 'var(--font-rounded)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        border: vStyle.border || 'none',
        backgroundColor: vStyle.bg,
        color: vStyle.color,
        boxShadow: disabled ? 'none' : vStyle.shadow,
        transition: 'transform 0.1s ease, box-shadow 0.1s ease',
        transform: 'translateY(0)',
        ...sStyle
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(4px)';
          e.currentTarget.style.boxShadow = '0 1px 0 transparent';
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = vStyle.shadow;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = vStyle.shadow;
        }
      }}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      <span>{children}</span>
    </button>
  );
};

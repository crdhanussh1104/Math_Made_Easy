import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X } from 'lucide-react';

export const DialogModal = ({
  isOpen,
  onClose,
  title,
  children,
  icon: Icon,
  footer,
  maxWidth = '720px'
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px 90px 16px' // Generous bottom padding to guarantee clearance over bottom nav
      }}
      onClick={onClose}
    >
      <div
        className="animate-pop"
        style={{
          backgroundColor: 'var(--bg-card-solid)',
          borderRadius: 'var(--radius-lg)',
          width: '92vw',
          maxWidth: maxWidth,
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
          border: '2px solid var(--border-card)',
          position: 'relative',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingRight: '12px' }}>
            {Icon && (
              <div style={{
                padding: '10px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--secondary-light)',
                color: 'var(--secondary)',
                flexShrink: 0
              }}>
                <Icon size={24} />
              </div>
            )}
            <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1.3' }}>
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-main)',
              border: '1px solid var(--border-light)',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              padding: '6px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '4px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {children}
        </div>

        {/* Optional Custom Footer */}
        {footer && (
          <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-light)', flexShrink: 0 }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

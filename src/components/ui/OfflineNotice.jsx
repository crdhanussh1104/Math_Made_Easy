import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';

export const OfflineNotice = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div
      className="animate-pop"
      style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        backgroundColor: '#ef4444',
        color: '#ffffff',
        padding: '10px 20px',
        borderRadius: 'var(--radius-full)',
        fontWeight: '800',
        fontFamily: 'var(--font-rounded)',
        fontSize: '0.85rem',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 8px 20px rgba(239, 68, 68, 0.4)'
      }}
    >
      <WifiOff size={18} />
      <span>Offline Mode Active — Local Storage & Cached Lessons Available!</span>
    </div>
  );
};

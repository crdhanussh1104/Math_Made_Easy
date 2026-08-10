import React, { useState, useEffect } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { Zap, Play, RotateCcw, BookOpen, Clock } from 'lucide-react';

export const TimeWorkPipesLab = () => {
  const [speed, setSpeed] = useState(60); // km/h
  const [time, setTime] = useState(2); // hours
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const distance = speed * time;

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartSimulation = () => {
    soundFx.playClick();
    setProgress(0);
    setIsRunning(true);
  };

  const handleReset = () => {
    soundFx.playClick();
    setIsRunning(false);
    setProgress(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      
      {/* Concept Explanation */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <BookOpen size={24} color="#f59e0b" />
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-main)' }}>
            📖 Time, Speed, Distance & Work Simulator (Explained From Scratch)
          </h3>
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
          The fundamental relationship governing motion is <strong>Distance = Speed × Time</strong>. Speed measures how fast distance changes per unit time!
        </p>
      </div>

      {/* Controls & Animated Track Viewport */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        
        {/* Animated Track Viewport */}
        <div style={{
          backgroundColor: '#0f172a', borderRadius: 'var(--radius-md)', padding: '20px',
          boxShadow: 'var(--shadow-md)', border: '3px solid #f59e0b', display: 'flex', flexDirection: 'column', alignItems: 'center',
          width: '340px', userSelect: 'none'
        }}>
          <div style={{ color: '#ffc800', fontSize: '0.82rem', fontWeight: '800', marginBottom: '14px' }}>
            🏎️ Animated Journey Track (Distance = {distance} km)
          </div>

          <div style={{ position: 'relative', width: '100%', height: '80px', backgroundColor: '#1e293b', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid #334155' }}>
            {/* Start & End Finish Lines */}
            <div style={{ position: 'absolute', left: '10px', top: '10px', color: '#94a3b8', fontSize: '0.75rem', fontWeight: '800' }}>START (0 km)</div>
            <div style={{ position: 'absolute', right: '10px', top: '10px', color: '#22c55e', fontSize: '0.75rem', fontWeight: '800' }}>FINISH ({distance} km)</div>

            {/* Road Track Line */}
            <div style={{ position: 'absolute', top: '45px', left: '0', right: '0', height: '4px', backgroundColor: '#475569', borderStyle: 'dashed' }} />

            {/* Moving Vehicle */}
            <div style={{
              position: 'absolute',
              top: '32px',
              left: `${Math.min(90, (progress / 100) * 85 + 5)}%`,
              fontSize: '1.6rem',
              transition: 'left 0.1s linear',
              filter: 'drop-shadow(0 0 6px #ffc800)'
            }}>
              🏎️
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
            <Button3D variant="warning" size="sm" onClick={handleStartSimulation} disabled={isRunning} icon={Play}>
              Start Journey
            </Button3D>
            <Button3D variant="outline" size="sm" onClick={handleReset} icon={RotateCcw}>
              Reset
            </Button3D>
          </div>
        </div>

        {/* Live Variable Controls */}
        <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '380px' }}>
          <div style={{ backgroundColor: 'var(--bg-main)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: '800' }}>Speed (S): {speed} km/h</label>
              <input type="range" min="10" max="150" step="5" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} style={{ width: '100%', accentColor: '#f59e0b' }} />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: '800' }}>Travel Time (T): {time} Hours</label>
              <input type="range" min="0.5" max="10" step="0.5" value={time} onChange={(e) => setTime(Number(e.target.value))} style={{ width: '100%', accentColor: '#f59e0b' }} />
            </div>
          </div>

          <div style={{ backgroundColor: '#fffbeb', padding: '16px', borderRadius: 'var(--radius-md)', border: '1.5px solid #f59e0b', textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#b45309' }}>TOTAL DISTANCE CALCULATED:</span>
            <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', color: '#b45309', marginTop: '2px' }}>
              D = {speed} km/h × {time} h = {distance} km
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

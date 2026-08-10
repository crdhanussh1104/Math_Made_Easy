import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { Dices, RefreshCw, Sparkles } from 'lucide-react';

export const ProbabilitySpinner = () => {
  const [toolType, setToolType] = useState('dice'); // dice, coin, spinner
  const [rolls, setRolls] = useState([]);
  const [coinFlips, setCoinFlips] = useState({ heads: 0, tails: 0 });
  const [spinnerResult, setSpinnerResult] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const handleRollDice = () => {
    soundFx.playClick();
    const result = Math.floor(Math.random() * 6) + 1;
    setRolls(prev => [result, ...prev.slice(0, 9)]);
  };

  const handleFlipCoin = () => {
    soundFx.playClick();
    const isHeads = Math.random() > 0.5;
    if (isHeads) {
      setCoinFlips(prev => ({ ...prev, heads: prev.heads + 1 }));
    } else {
      setCoinFlips(prev => ({ ...prev, tails: prev.tails + 1 }));
    }
  };

  const handleSpinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    soundFx.playClick();

    setTimeout(() => {
      const colors = ['#f43f5e', '#3b82f6', '#22c55e', '#eab308', '#a855f7', '#ec4899'];
      const picked = colors[Math.floor(Math.random() * colors.length)];
      setSpinnerResult(picked);
      setSpinning(false);
      soundFx.playCorrect();
    }, 600);
  };

  const totalFlips = coinFlips.heads + coinFlips.tails;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '800' }}>
            🎲 Probability Simulator & Experiment Lab
          </h3>
          <BadgeChip label="Grades 4 - 10" color="var(--warning)" bg="var(--warning-light)" size="sm" />
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Roll dice, flip coins, and spin color wheels to compare theoretical vs empirical probability!
        </p>
      </div>

      {/* Mode Switcher */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => setToolType('dice')}
          style={{
            padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
            backgroundColor: toolType === 'dice' ? 'var(--primary)' : 'var(--bg-main)',
            color: toolType === 'dice' ? '#fff' : 'var(--text-muted)',
            fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
          }}
        >
          🎲 6-Sided Dice
        </button>

        <button
          onClick={() => setToolType('coin')}
          style={{
            padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
            backgroundColor: toolType === 'coin' ? 'var(--secondary)' : 'var(--bg-main)',
            color: toolType === 'coin' ? '#fff' : 'var(--text-muted)',
            fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
          }}
        >
          🪙 Coin Toss
        </button>

        <button
          onClick={() => setToolType('spinner')}
          style={{
            padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
            backgroundColor: toolType === 'spinner' ? 'var(--purple)' : 'var(--bg-main)',
            color: toolType === 'spinner' ? '#fff' : 'var(--text-muted)',
            fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
          }}
        >
          🎯 Color Wheel
        </button>
      </div>

      {/* Simulator Content */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        
        {toolType === 'dice' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '100px', height: '100px', borderRadius: '20px',
              backgroundColor: '#fff', border: '4px solid var(--primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-rounded)',
              boxShadow: 'var(--shadow-md)', color: 'var(--primary)'
            }}>
              {rolls[0] || '?'}
            </div>

            <Button3D variant="primary" size="md" onClick={handleRollDice} icon={Dices}>
              Roll 6-Sided Die
            </Button3D>

            {rolls.length > 0 && (
              <div style={{ textAlign: 'center', backgroundColor: 'var(--bg-main)', padding: '12px', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-muted)' }}>Recent Rolls:</span>
                <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                  {rolls.map((r, idx) => (
                    <span key={idx} style={{ padding: '4px 8px', borderRadius: '6px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', fontWeight: '800' }}>
                      {r}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: '0.8rem', marginTop: '8px', color: 'var(--text-muted)' }}>
                  Theoretical Probability P(each number) = 1/6 ≈ 16.67%
                </div>
              </div>
            )}
          </div>
        )}

        {toolType === 'coin' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '100px', height: '100px', borderRadius: '50%',
              backgroundColor: '#ffc800', border: '4px solid #b45309',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.4rem', fontWeight: '800', fontFamily: 'var(--font-rounded)',
              color: '#78350f', boxShadow: 'var(--shadow-md)'
            }}>
              🪙 COIN
            </div>

            <Button3D variant="warning" size="md" onClick={handleFlipCoin}>
              Flip Coin
            </Button3D>

            <div style={{ display: 'flex', gap: '16px', backgroundColor: 'var(--bg-main)', padding: '14px 20px', borderRadius: 'var(--radius-md)' }}>
              <div>
                <strong>Heads:</strong> {coinFlips.heads} ({totalFlips > 0 ? ((coinFlips.heads / totalFlips) * 100).toFixed(1) : 0}%)
              </div>
              <div>
                <strong>Tails:</strong> {coinFlips.tails} ({totalFlips > 0 ? ((coinFlips.tails / totalFlips) * 100).toFixed(1) : 0}%)
              </div>
            </div>
          </div>
        )}

        {toolType === 'spinner' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '140px', height: '140px', borderRadius: '50%',
              backgroundColor: spinnerResult || '#3b82f6', border: '6px solid #fff',
              boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.4s ease', transform: spinning ? 'rotate(720deg)' : 'none'
            }}>
              <span style={{ color: '#fff', fontWeight: '800', fontSize: '1rem' }}>
                {spinning ? 'Spinning...' : 'TARGET'}
              </span>
            </div>

            <Button3D variant="purple" size="md" onClick={handleSpinWheel} icon={Sparkles}>
              Spin Color Wheel
            </Button3D>
          </div>
        )}

      </div>
    </div>
  );
};

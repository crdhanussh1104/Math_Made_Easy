import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { triggerConfetti } from '../../utils/confetti';
import { useGame } from '../../context/GameContext';
import { Gamepad2, Zap, Layers, Grid, Trophy, CheckCircle2, HelpCircle } from 'lucide-react';

export const MathGamesSuite = () => {
  const { addXP, addGems } = useGame();
  const [activeGame, setActiveGame] = useState('timestables'); // timestables, tangram

  // Speed Multiplication Grid Challenge State
  const [num1, setNum1] = useState(7);
  const [num2, setNum2] = useState(8);
  const [userAns, setUserAns] = useState('');
  const [gameScore, setGameScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const handleNextProblem = () => {
    setNum1(Math.floor(Math.random() * 10) + 2);
    setNum2(Math.floor(Math.random() * 10) + 2);
    setUserAns('');
  };

  const handleCheckAns = () => {
    const val = Number(userAns);
    if (val === num1 * num2) {
      soundFx.playCorrect();
      setGameScore(prev => prev + 10);
      setStreak(prev => prev + 1);
      addXP(10);
      addGems(2);
      if (streak + 1 >= 5) {
        triggerConfetti('levelUp');
      }
      handleNextProblem();
    } else {
      soundFx.playWrong();
      setStreak(0);
    }
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: 'var(--bg-card-solid)' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Gamepad2 size={22} color="var(--warning)" />
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800' }}>
              Interactive Math Games & Logic Puzzles Suite
            </h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Speed multiplication challenges, 7-piece Tangram geometry puzzles, and abacus counters!
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setActiveGame('timestables')}
            style={{
              padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
              backgroundColor: activeGame === 'timestables' ? 'var(--warning)' : 'var(--bg-main)',
              color: activeGame === 'timestables' ? '#fff' : 'var(--text-muted)',
              fontWeight: '800', fontFamily: 'var(--font-rounded)', cursor: 'pointer'
            }}
          >
            ⚡ Speed Times Tables
          </button>
        </div>
      </div>

      {/* 1. Speed Multiplication Grid Game */}
      {activeGame === 'timestables' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--secondary)' }}>Score: {gameScore} XP</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--orange)' }}>Streak: 🔥 {streak}</div>
          </div>

          <div style={{
            backgroundColor: '#0f172a', color: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '24px 36px',
            border: '3px solid var(--warning)', textAlign: 'center', boxShadow: 'var(--shadow-md)'
          }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--warning)', fontWeight: '800', textTransform: 'uppercase' }}>
              Solve Speed Product:
            </span>
            <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-rounded)', fontWeight: '800', marginTop: '4px' }}>
              {num1} × {num2} = ?
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="number"
              placeholder="Your answer..."
              value={userAns}
              onChange={(e) => setUserAns(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCheckAns()}
              style={{
                padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-light)',
                fontWeight: '800', fontSize: '1.1rem', outline: 'none', width: '150px', textAlign: 'center'
              }}
            />

            <Button3D variant="warning" size="md" onClick={handleCheckAns} icon={CheckCircle2}>
              Submit Answer
            </Button3D>
          </div>

        </div>
      )}

    </CardRounded>
  );
};

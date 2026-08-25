import React, { useState, useEffect } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { triggerConfetti } from '../../utils/confetti';
import { useGame } from '../../context/GameContext';
import {
  Gamepad2, Zap, Layers, Grid, Trophy, CheckCircle2,
  HelpCircle, RefreshCw, RotateCw, Scale, Sparkles, Star
} from 'lucide-react';

export const MathGamesSuite = () => {
  const { addXP, addGems } = useGame();
  const [activeGame, setActiveGame] = useState('timestables'); // timestables, tangram, memory_match, equation_balance, magic_square

  // -------------------------------------------------------------
  // 1. SPEED MULTIPLICATION STATE
  // -------------------------------------------------------------
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
      soundFx.playIncorrect();
      setStreak(0);
    }
  };

  // -------------------------------------------------------------
  // 2. 7-PIECE TANGRAM POLYFORM PUZZLE STATE
  // -------------------------------------------------------------
  const [targetShape, setTargetShape] = useState('square'); // square, house, boat
  const [tangramRotations, setTangramRotations] = useState([0, 45, 90, 0, 180, 45, 90]);

  const rotateTangramPiece = (index) => {
    soundFx.playClick();
    setTangramRotations(prev => {
      const next = [...prev];
      next[index] = (next[index] + 45) % 360;
      return next;
    });
  };

  // -------------------------------------------------------------
  // 3. FRACTION & DECIMAL MEMORY MATCH STATE
  // -------------------------------------------------------------
  const initialCards = [
    { id: 1, pairId: 'half', label: '1/2', matched: false, color: '#10b981' },
    { id: 2, pairId: 'half', label: '0.50', matched: false, color: '#10b981' },
    { id: 3, pairId: 'three_quarters', label: '3/4', matched: false, color: '#3b82f6' },
    { id: 4, pairId: 'three_quarters', label: '0.75', matched: false, color: '#3b82f6' },
    { id: 5, pairId: 'one_quarter', label: '1/4', matched: false, color: '#f59e0b' },
    { id: 6, pairId: 'one_quarter', label: '0.25', matched: false, color: '#f59e0b' },
    { id: 7, pairId: 'two_fifths', label: '2/5', matched: false, color: '#8b5cf6' },
    { id: 8, pairId: 'two_fifths', label: '0.40', matched: false, color: '#8b5cf6' }
  ];

  const [cards, setCards] = useState(initialCards);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  const handleCardClick = (index) => {
    if (flippedIndices.length === 2 || cards[index].matched || flippedIndices.includes(index)) return;
    soundFx.playClick();

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].pairId === cards[second].pairId) {
        soundFx.playCorrect();
        setCards(prev => prev.map((c, i) => (i === first || i === second ? { ...c, matched: true } : c)));
        setMatchedPairs(prev => prev + 1);
        addXP(15);
        addGems(3);
        setFlippedIndices([]);
        if (matchedPairs + 1 === 4) {
          triggerConfetti('levelUp');
        }
      } else {
        soundFx.playIncorrect();
        setTimeout(() => {
          setFlippedIndices([]);
        }, 900);
      }
    }
  };

  const resetMemoryGame = () => {
    soundFx.playClick();
    const shuffled = [...initialCards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedIndices([]);
    setMatchedPairs(0);
  };

  // -------------------------------------------------------------
  // 4. EQUATION BALANCE SCALE PUZZLE STATE
  // -------------------------------------------------------------
  const [leftWeight, setLeftWeight] = useState(14); // 2x + 4
  const [rightWeight, setRightWeight] = useState(14);
  const [unknownX, setUnknownX] = useState(5);
  const [addedLeft, setAddedLeft] = useState(4);
  const [scaleTarget, setScaleTarget] = useState(14);
  const [balanceSolved, setBalanceSolved] = useState(false);

  const handleTestBalance = () => {
    const totalLeft = unknownX * 2 + addedLeft;
    if (totalLeft === scaleTarget) {
      soundFx.playCorrect();
      setBalanceSolved(true);
      addXP(20);
      addGems(5);
      triggerConfetti('default');
    } else {
      soundFx.playIncorrect();
      setBalanceSolved(false);
    }
  };

  // -------------------------------------------------------------
  // 5. MAGIC NUMBER SQUARE GRID (Sum = 15)
  // -------------------------------------------------------------
  const [magicGrid, setMagicGrid] = useState([
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 0] // 0 is empty to solve
  ]);
  const [magicSolved, setMagicSolved] = useState(false);

  const handleMagicInput = (val) => {
    const num = parseInt(val, 10) || 0;
    const newGrid = [[2, 7, 6], [9, 5, 1], [4, 3, num]];
    setMagicGrid(newGrid);

    // Verify row 3 and col 3 sum to 15
    const row3 = newGrid[2][0] + newGrid[2][1] + newGrid[2][2];
    const col3 = newGrid[0][2] + newGrid[1][2] + newGrid[2][2];
    const diag1 = newGrid[0][0] + newGrid[1][1] + newGrid[2][2];

    if (row3 === 15 && col3 === 15 && diag1 === 15 && num === 8) {
      soundFx.playCorrect();
      setMagicSolved(true);
      addXP(25);
      addGems(5);
      triggerConfetti('levelUp');
    } else {
      setMagicSolved(false);
    }
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: 'var(--bg-card-solid)' }}>
      
      {/* Header & Game Switcher */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Gamepad2 size={22} color="var(--warning)" />
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800' }}>
              Interactive Math Games & Logic Puzzles Arcade
            </h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Multiplication speed drills, Tangram geometry puzzles, Fraction memory matching, Equation balance scales, and Magic squares!
          </p>
        </div>

        {/* Game Picker Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { id: 'timestables', label: '⚡ Speed Tables' },
            { id: 'tangram', label: '🧩 7-Piece Tangram' },
            { id: 'memory_match', label: '🃏 Fraction Match' },
            { id: 'equation_balance', label: '⚖️ Balance Scale' },
            { id: 'magic_square', label: '🔢 Magic Square' }
          ].map(g => (
            <button
              key={g.id}
              onClick={() => { setActiveGame(g.id); soundFx.playClick(); }}
              style={{
                padding: '8px 14px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: activeGame === g.id ? 'var(--warning)' : 'var(--bg-main)',
                color: activeGame === g.id ? '#0f172a' : 'var(--text-muted)',
                fontWeight: '800',
                fontFamily: 'var(--font-rounded)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. SPEED MULTIPLICATION */}
      {activeGame === 'timestables' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--secondary)' }}>Score: {gameScore} XP</div>
            <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--orange)' }}>Streak: 🔥 {streak}</div>
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

      {/* 2. TANGRAM GEOMETRY PUZZLE */}
      {activeGame === 'tangram' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontWeight: '800', fontSize: '0.85rem' }}>Target Silhouette:</span>
            {['square', 'house', 'boat'].map(sh => (
              <button
                key={sh}
                onClick={() => setTargetShape(sh)}
                style={{
                  padding: '6px 12px', borderRadius: '6px', border: 'none',
                  background: targetShape === sh ? '#4f46e5' : '#f1f5f9',
                  color: targetShape === sh ? '#ffffff' : '#475569',
                  fontWeight: '800', fontSize: '0.8rem', textTransform: 'capitalize', cursor: 'pointer'
                }}
              >
                {sh}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {/* Tangram Canvas Preview */}
            <div style={{ width: '260px', height: '260px', background: '#0f172a', borderRadius: '16px', border: '2px solid #334155', display: 'flex', flexWrap: 'wrap', padding: '10px', gap: '6px', justifyContent: 'center', alignItems: 'center' }}>
              {[
                { name: 'Large Triangle 1', color: '#ef4444', w: '110px', h: '60px' },
                { name: 'Large Triangle 2', color: '#3b82f6', w: '110px', h: '60px' },
                { name: 'Medium Triangle', color: '#10b981', w: '80px', h: '45px' },
                { name: 'Small Triangle 1', color: '#f59e0b', w: '60px', h: '35px' },
                { name: 'Small Triangle 2', color: '#8b5cf6', w: '60px', h: '35px' },
                { name: 'Square Tan', color: '#ec4899', w: '50px', h: '50px' },
                { name: 'Parallelogram', color: '#06b6d4', w: '70px', h: '40px' }
              ].map((tan, idx) => (
                <div
                  key={idx}
                  onClick={() => rotateTangramPiece(idx)}
                  title={`${tan.name} (Click to Rotate 45°)`}
                  style={{
                    width: tan.w,
                    height: tan.h,
                    backgroundColor: tan.color,
                    borderRadius: '4px',
                    transform: `rotate(${tangramRotations[idx]}deg)`,
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '0.65rem',
                    fontWeight: '800'
                  }}
                >
                  <RotateCw size={12} />
                </div>
              ))}
            </div>

            <div style={{ maxWidth: '280px', fontSize: '0.85rem', color: '#475569', lineHeight: '1.5' }}>
              <div style={{ fontWeight: '800', color: '#1e293b', marginBottom: '4px' }}>🎯 Instructions:</div>
              Click on each of the 7 classic geometric tans to rotate them by 45° and construct the target <strong>{targetShape}</strong> outline!
            </div>
          </div>
        </div>
      )}

      {/* 3. FRACTION & DECIMAL MEMORY MATCH */}
      {activeGame === 'memory_match' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '440px', alignItems: 'center' }}>
            <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#4f46e5' }}>
              Pairs Found: {matchedPairs} / 4
            </div>
            <Button3D variant="outline" size="sm" onClick={resetMemoryGame} icon={RefreshCw}>
              Shuffle Cards
            </Button3D>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 90px)', gap: '10px' }}>
            {cards.map((card, idx) => {
              const isFlipped = card.matched || flippedIndices.includes(idx);

              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(idx)}
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '12px',
                    backgroundColor: isFlipped ? card.color : '#1e293b',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: '900',
                    fontFamily: 'var(--font-rounded)',
                    cursor: card.matched ? 'default' : 'pointer',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    transform: isFlipped ? 'scale(1.03)' : 'scale(1)',
                    transition: 'all 0.2s ease',
                    userSelect: 'none'
                  }}
                >
                  {isFlipped ? card.label : '❓'}
                </div>
              );
            })}
          </div>

          {matchedPairs === 4 && (
            <div style={{ background: '#dcfce7', color: '#166534', padding: '10px 20px', borderRadius: '10px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Trophy size={18} /> Fantastic Memory! All equivalent fractions matched!
            </div>
          )}
        </div>
      )}

      {/* 4. EQUATION BALANCE SCALE PUZZLE */}
      {activeGame === 'equation_balance' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
          <div style={{ background: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '16px', padding: '20px', textAlign: 'center', maxWidth: '480px', width: '100%' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>
              Solve for x to Balance the Scale:
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#4f46e5', margin: '8px 0' }}>
              2x + 4 = 14
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', marginTop: '12px' }}>
              <label style={{ fontWeight: '800', fontSize: '0.9rem' }}>Value of x:</label>
              <input
                type="number"
                value={unknownX}
                onChange={(e) => setUnknownX(parseInt(e.target.value, 10) || 0)}
                style={{ width: '80px', padding: '8px', textAlign: 'center', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontWeight: '800' }}
              />
              <Button3D variant="primary" size="sm" onClick={handleTestBalance}>
                Test Balance
              </Button3D>
            </div>

            {balanceSolved && (
              <div style={{ marginTop: '12px', color: '#16a34a', fontWeight: '800', fontSize: '0.9rem' }}>
                🎉 Perfect Balance! 2(5) + 4 = 10 + 4 = 14.
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. MAGIC NUMBER SQUARE GRID */}
      {activeGame === 'magic_square' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
          <div style={{ textAlign: 'center', maxWidth: '360px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>
              Magic Constant: Target Sum = 15
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', margin: '4px 0 12px 0' }}>
              Fill in the missing bottom-right cell so every row, column, and diagonal sums to exactly 15!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 60px)', gap: '8px' }}>
            {magicGrid.map((row, r) =>
              row.map((val, c) => (
                <div
                  key={`${r}-${c}`}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '10px',
                    backgroundColor: r === 2 && c === 2 ? '#fef08a' : '#f1f5f9',
                    border: r === 2 && c === 2 ? '2px dashed #ca8a04' : '1.5px solid #cbd5e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    fontWeight: '900',
                    color: '#1e293b'
                  }}
                >
                  {r === 2 && c === 2 ? (
                    <input
                      type="number"
                      placeholder="?"
                      onChange={(e) => handleMagicInput(e.target.value)}
                      style={{ width: '40px', textAlign: 'center', border: 'none', background: 'transparent', fontWeight: '900', fontSize: '1.3rem', outline: 'none' }}
                    />
                  ) : (
                    val
                  )}
                </div>
              ))
            )}
          </div>

          {magicSolved && (
            <div style={{ background: '#dcfce7', color: '#166534', padding: '10px 20px', borderRadius: '10px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={18} /> Solved! 4 + 3 + 8 = 15 and 6 + 1 + 8 = 15!
            </div>
          )}
        </div>
      )}

    </CardRounded>
  );
};


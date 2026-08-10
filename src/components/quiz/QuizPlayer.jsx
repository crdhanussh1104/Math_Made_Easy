import React, { useState, useEffect } from 'react';
import { questionsData } from '../../data/questions';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { ProgressBar } from '../ui/ProgressBar';
import { MascotWidget } from '../ui/MascotWidget';
import { BadgeChip } from '../ui/BadgeChip';
import { RewardModal } from '../gamification/RewardModal';
import { AbacusVisualizer } from '../visualizers/AbacusVisualizer';
import { FractionPizza } from '../visualizers/FractionPizza';
import { soundFx } from '../../utils/audioSynth';
import { speechFx } from '../../utils/speech';
import { triggerConfetti } from '../../utils/confetti';
import { useGame } from '../../context/GameContext';
import {
  HelpCircle, CheckCircle, XCircle, ArrowRight, Heart, Flame,
  Star, Volume2, Sparkles, RefreshCw, Clock, Award, Check, RotateCcw
} from 'lucide-react';

export const QuizPlayer = ({ chapterId = 'chap_1', practiceMode = 'school', onComplete, onResetMode }) => {
  const { gameState, deductHeart, completeLesson, addXP, addGems } = useGame();
  const rawQuestions = questionsData[chapterId] || questionsData['chap_1'];

  const [questions, setQuestions] = useState(rawQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [blankInput, setBlankInput] = useState('');
  const [matchedPairs, setMatchedPairs] = useState({});
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [comboCount, setComboCount] = useState(0);
  const [wrongQuestionIds, setWrongQuestionIds] = useState([]);
  const [isRetryMode, setIsRetryMode] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(practiceMode === 'challenge' ? 45 : 60);
  const [timerActive, setTimerActive] = useState(true);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);

  const currentQ = questions[currentIndex] || questions[0];
  const xpRewardPerQ = practiceMode === 'challenge' ? 30 : practiceMode === 'olympiad' ? 25 : 15;

  // Live Timer Countdown
  useEffect(() => {
    let interval = null;
    if (timerActive && timerSeconds > 0 && !isAnswered) {
      interval = setInterval(() => setTimerSeconds(prev => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timerSeconds, isAnswered]);

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    soundFx.playClick();
  };

  const handleMatchSelect = (left, right) => {
    if (isAnswered) return;
    setMatchedPairs(prev => ({ ...prev, [left]: right }));
    soundFx.playClick();
  };

  const handleCheckAnswer = () => {
    if (isAnswered) return;

    let correct = false;

    if (currentQ.type === 'fill_blank') {
      const userVal = blankInput.trim().replace(/,/g, '');
      const targetVal = String(currentQ.targetValue || currentQ.correctAnswer).replace(/,/g, '');
      correct = userVal === targetVal;
    } else if (currentQ.type === 'match_following') {
      correct = currentQ.pairs.every(p => matchedPairs[p.left] === p.right);
    } else {
      correct = selectedOption === currentQ.correct;
    }

    setIsAnswered(true);
    setIsCorrect(correct);

    if (correct) {
      soundFx.playCorrect();
      const newCombo = comboCount + 1;
      setComboCount(newCombo);
      setScoreCount(prev => prev + 1);
      addXP(xpRewardPerQ);

      if (newCombo >= 2) triggerConfetti('default');
    } else {
      soundFx.playIncorrect();
      setComboCount(0);
      deductHeart();
      if (!wrongQuestionIds.includes(currentQ.id)) {
        setWrongQuestionIds(prev => [...prev, currentQ.id]);
      }
    }
  };

  const handleVisualizerVerify = (success) => {
    setIsAnswered(true);
    setIsCorrect(success);
    if (success) {
      soundFx.playCorrect();
      setComboCount(prev => prev + 1);
      setScoreCount(prev => prev + 1);
      addXP(xpRewardPerQ + 10);
      triggerConfetti('default');
    } else {
      soundFx.playIncorrect();
      setComboCount(0);
      deductHeart();
      if (!wrongQuestionIds.includes(currentQ.id)) {
        setWrongQuestionIds(prev => [...prev, currentQ.id]);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setBlankInput('');
      setMatchedPairs({});
      setIsAnswered(false);
      setIsCorrect(false);
      setShowHint(false);
    } else {
      // Quiz completed!
      const accuracy = Math.round((scoreCount / questions.length) * 100);
      completeLesson(`les_${chapterId}`, accuracy);
      triggerConfetti('levelUp');
      setShowRewardModal(true);
    }
  };

  const handleStartRetryMode = () => {
    const wrongQs = rawQuestions.filter(q => wrongQuestionIds.includes(q.id));
    setQuestions(wrongQs);
    setCurrentIndex(0);
    setSelectedOption(null);
    setBlankInput('');
    setMatchedPairs({});
    setIsAnswered(false);
    setIsCorrect(false);
    setShowHint(false);
    setShowRewardModal(false);
    setIsRetryMode(true);
  };

  return (
    <div style={{ width: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* 1. Header: Practice Mode Badge, Timer, Hearts & XP Indicator */}
      <CardRounded style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          {/* Practice Mode Pill */}
          <BadgeChip
            label={practiceMode === 'challenge' ? '🎮 Challenge Blitz (2x XP)' : practiceMode === 'olympiad' ? '🏆 Olympiad HOTS Mode' : '📘 School Level Mode'}
            color={practiceMode === 'challenge' ? 'var(--orange)' : practiceMode === 'olympiad' ? 'var(--purple)' : 'var(--primary)'}
            bg={practiceMode === 'challenge' ? 'var(--warning-light)' : practiceMode === 'olympiad' ? 'var(--purple-light)' : 'var(--primary-light)'}
            size="md"
          />

          {/* Timer Countdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: timerSeconds < 15 ? 'var(--accent)' : 'var(--secondary)' }}>
            <Clock size={18} />
            <span>00:{String(timerSeconds).padStart(2, '0')}</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {onResetMode && (
            <button onClick={onResetMode} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.82rem', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <RotateCcw size={14} /> Change Practice Mode
            </button>
          )}

          <span style={{ fontSize: '0.85rem', fontWeight: '700', fontFamily: 'var(--font-rounded)', color: 'var(--text-muted)' }}>
            Q {currentIndex + 1} of {questions.length}
          </span>
        </div>

        <ProgressBar progress={((currentIndex + 1) / questions.length) * 100} showLabel color="var(--primary)" />
      </CardRounded>

      {/* 2. Mascot & Hints */}
      <CardRounded style={{ padding: '14px 20px' }}>
        <MascotWidget
          message={showHint ? currentQ.hint : isAnswered ? (isCorrect ? '🎉 Great job! Keep going!' : '💡 Let\'s review the step breakdown below.') : 'Take your time and pick your answer!'}
          mood={showHint ? 'hint' : isAnswered ? (isCorrect ? 'celebrating' : 'thinking') : 'happy'}
        />

        {!showHint && !isAnswered && (
          <button
            onClick={() => setShowHint(true)}
            style={{
              alignSelf: 'flex-end', background: 'none', border: 'none',
              color: 'var(--purple)', fontWeight: '700', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.82rem', marginTop: '8px'
            }}
          >
            <HelpCircle size={16} /> Need a Step-by-Step Hint?
          </button>
        )}
      </CardRounded>

      {/* 3. Main Question Container Card */}
      <CardRounded>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '20px', lineHeight: '1.4' }}>
          {currentQ.question}
        </h3>

        {/* FORMAT A: ABACUS INTERACTIVE */}
        {currentQ.type === 'abacus_interactive' ? (
          <AbacusVisualizer targetNumber={currentQ.targetNumber} onVerify={handleVisualizerVerify} />
        ) : 

        /* FORMAT B: PIZZA FRACTION INTERACTIVE */
        currentQ.type === 'pizza_interactive' ? (
          <FractionPizza targetNumerator={currentQ.targetNumerator} targetDenominator={currentQ.targetDenominator} onVerify={handleVisualizerVerify} />
        ) :

        /* FORMAT C: MATCH THE FOLLOWING */
        currentQ.type === 'match_following' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {currentQ.pairs.map((p, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '12px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{p.left}</span>
                <select
                  value={matchedPairs[p.left] || ''}
                  onChange={(e) => handleMatchSelect(p.left, e.target.value)}
                  disabled={isAnswered}
                  style={{ padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontWeight: '700', outline: 'none' }}
                >
                  <option value="">Select Match</option>
                  {currentQ.pairs.map(pairOpt => (
                    <option key={pairOpt.right} value={pairOpt.right}>{pairOpt.right}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        ) :

        /* FORMAT D: FILL IN THE BLANK */
        currentQ.type === 'fill_blank' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            <input
              type="text"
              value={blankInput}
              onChange={(e) => setBlankInput(e.target.value)}
              disabled={isAnswered}
              placeholder="Type your answer here..."
              style={{
                fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-rounded)',
                textAlign: 'center', padding: '14px', borderRadius: 'var(--radius-md)',
                border: '2px solid var(--border-light)', outline: 'none', backgroundColor: 'var(--bg-main)'
              }}
            />
          </div>
        ) :

        /* FORMAT E: STANDARD MULTIPLE CHOICE */
        (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              let bg = 'var(--bg-card-solid)';
              let border = '1.5px solid var(--border-light)';
              if (isSelected) { bg = 'var(--secondary-light)'; border = '2.5px solid var(--secondary)'; }
              if (isAnswered && idx === currentQ.correct) { bg = 'var(--primary-light)'; border = '2.5px solid var(--primary)'; }
              if (isAnswered && isSelected && !isCorrect) { bg = 'var(--accent-light)'; border = '2.5px solid var(--accent)'; }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  style={{
                    padding: '16px 20px', borderRadius: 'var(--radius-md)', border: border,
                    backgroundColor: bg, color: 'var(--text-main)', fontSize: '1rem',
                    fontWeight: '600', textAlign: 'left', cursor: isAnswered ? 'default' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                  }}
                >
                  <span>{opt}</span>
                  {isAnswered && idx === currentQ.correct && <CheckCircle color="var(--primary)" size={22} />}
                  {isAnswered && isSelected && !isCorrect && <XCircle color="var(--accent)" size={22} />}
                </button>
              );
            })}
          </div>
        )}

        {/* Action Check / Next Button */}
        {!isAnswered ? (
          !currentQ.type?.includes('interactive') && (
            <Button3D
              variant="primary" size="lg" style={{ width: '100%' }} onClick={handleCheckAnswer}
              disabled={currentQ.type === 'fill_blank' ? !blankInput.trim() : currentQ.type === 'match_following' ? Object.keys(matchedPairs).length < currentQ.pairs.length : selectedOption === null}
            >
              Check Answer
            </Button3D>
          )
        ) : (
          <Button3D variant="secondary" size="lg" style={{ width: '100%' }} onClick={handleNextQuestion} icon={ArrowRight}>
            {currentIndex + 1 < questions.length ? 'Next Question' : 'Finish Quiz'}
          </Button3D>
        )}
      </CardRounded>

      {/* 4. Detailed Step-by-Step Explanation Banner */}
      {isAnswered && (
        <div
          className="animate-pop"
          style={{
            padding: '20px', borderRadius: 'var(--radius-lg)',
            backgroundColor: isCorrect ? 'var(--primary-light)' : 'var(--accent-light)',
            border: `2px solid ${isCorrect ? 'var(--primary)' : 'var(--accent)'}`,
            display: 'flex', flexDirection: 'column', gap: '8px'
          }}
        >
          <div style={{ fontWeight: '800', fontFamily: 'var(--font-rounded)', fontSize: '1.1rem', color: isCorrect ? 'var(--primary)' : 'var(--accent)' }}>
            {isCorrect ? '🎉 Correct Answer!' : '💡 Step-by-Step Solution Breakdown:'}
          </div>
          <div style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
            {currentQ.hint}
          </div>
        </div>
      )}

      {/* Quiz Completion Reward Modal */}
      <RewardModal
        isOpen={showRewardModal}
        onContinue={() => {
          setShowRewardModal(false);
          if (onComplete) onComplete();
        }}
        score={Math.round((scoreCount / questions.length) * 100)}
        xpEarned={practiceMode === 'challenge' ? 150 : practiceMode === 'olympiad' ? 100 : 60}
        gemsEarned={25}
      />

      {/* Retry Incorrect Questions Banner */}
      {showRewardModal && wrongQuestionIds.length > 0 && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Button3D variant="warning" size="lg" onClick={handleStartRetryMode} icon={RefreshCw}>
            Retry Incorrect Questions ({wrongQuestionIds.length})
          </Button3D>
        </div>
      )}

    </div>
  );
};

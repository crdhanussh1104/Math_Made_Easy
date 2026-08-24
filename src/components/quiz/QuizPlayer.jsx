import React, { useState, useEffect, useRef } from 'react';
import { getQuestionsForTopic, questionsData } from '../../data/questions';
import { validateAnswer } from '../../utils/answerValidator';
import { getFormulaForActivity } from '../../data/labFormulaBank';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { ProgressBar } from '../ui/ProgressBar';
import { MascotWidget } from '../ui/MascotWidget';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { triggerConfetti } from '../../utils/confetti';
import { useGame } from '../../context/GameContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  HelpCircle, CheckCircle2, XCircle, ArrowRight, Heart, Flame,
  Star, Volume2, Sparkles, RefreshCw, Clock, Award, Check, RotateCcw,
  BookOpen, ChevronRight, CheckCircle, AlertCircle, Bookmark, Lightbulb
} from 'lucide-react';

export const QuizPlayer = ({
  chapterId,
  topicId,
  themeTitle,
  topicTitle,
  classNameText = 'Class 4',
  practiceMode = 'school',
  onComplete,
  onResetMode,
  onSelectTopic,
  nextTopicId
}) => {
  const { gameState, deductHeart, completeLesson, addXP, addGems } = useGame();
  const { t } = useLanguage();
  const inputRef = useRef(null);


  // Load questions for topicId or fallback to chapterId
  const activeTopicKey = topicId || chapterId;
  const initialQuestions = getQuestionsForTopic(activeTopicKey) || questionsData[activeTopicKey] || [];

  const [questions, setQuestions] = useState(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showFormula, setShowFormula] = useState(false);
  const [revealSolution, setRevealSolution] = useState(false);
  const [comboCount, setComboCount] = useState(0);
  const [userAnswersHistory, setUserAnswersHistory] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(practiceMode === 'challenge' ? 45 : 60);
  const [timerActive, setTimerActive] = useState(true);

  const currentQ = questions[currentIndex] || null;
  const xpRewardPerQ = practiceMode === 'challenge' ? 25 : practiceMode === 'olympiad' ? 20 : 15;

  // Find relevant formula/rule clue if available for this topic or chapter
  const formulaClue = getFormulaForActivity(topicId) || getFormulaForActivity(chapterId) || null;

  // Re-sync when topicId changes
  useEffect(() => {
    const key = topicId || chapterId;
    const qList = getQuestionsForTopic(key) || questionsData[key] || [];
    setQuestions(qList);
    setCurrentIndex(0);
    setUserInput('');
    setIsAnswered(false);
    setIsCorrect(false);
    setShowHint(false);
    setShowFormula(false);
    setRevealSolution(false);
    setUserAnswersHistory([]);
    setIsQuizCompleted(false);
    setComboCount(0);
  }, [topicId, chapterId]);

  // Focus input when moving to a new question
  useEffect(() => {
    if (!isAnswered && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIndex, isAnswered]);

  // Live Timer Countdown
  useEffect(() => {
    let interval = null;
    if (timerActive && timerSeconds > 0 && !isAnswered && !isQuizCompleted) {
      interval = setInterval(() => setTimerSeconds(prev => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timerSeconds, isAnswered, isQuizCompleted]);

  // Insert math symbol into user input at cursor position
  const handleInsertSymbol = (sym) => {
    const input = inputRef.current;
    if (!input) {
      setUserInput(prev => prev + sym);
      return;
    }
    const start = input.selectionStart || userInput.length;
    const end = input.selectionEnd || userInput.length;
    const nextVal = userInput.substring(0, start) + sym + userInput.substring(end);
    setUserInput(nextVal);
    setTimeout(() => {
      input.focus();
      input.setSelectionRange(start + sym.length, start + sym.length);
    }, 0);
  };

  const handleCheckAnswer = (e) => {
    if (e) e.preventDefault();
    if (isAnswered || !currentQ || userInput.trim() === '') return;

    const correct = validateAnswer(
      userInput,
      currentQ.a || currentQ.correctAnswer,
      currentQ.acc || currentQ.acceptedAnswers,
      currentQ.type
    );

    setIsAnswered(true);
    setIsCorrect(correct);
    if (!correct) {
      setRevealSolution(false);
    }

    // Save into history
    setUserAnswersHistory(prev => [
      ...prev,
      {
        questionIndex: currentIndex + 1,
        questionText: currentQ.q || currentQ.question,
        studentAnswer: userInput.trim(),
        correctAnswer: currentQ.a || currentQ.correctAnswer,
        isCorrect: correct,
        explanation: currentQ.exp || currentQ.explanation
      }
    ]);

    if (correct) {
      soundFx.playCorrect();
      const newCombo = comboCount + 1;
      setComboCount(newCombo);
      addXP(xpRewardPerQ);
      if (newCombo >= 2) triggerConfetti('default');
    } else {
      soundFx.playIncorrect();
      setComboCount(0);
      deductHeart();
    }
  };

  const handleTryAgain = () => {
    setIsAnswered(false);
    setIsCorrect(false);
    setRevealSolution(false);
    setUserInput('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setUserInput('');
      setIsAnswered(false);
      setIsCorrect(false);
      setShowHint(false);
      setShowFormula(false);
      setRevealSolution(false);
      if (practiceMode === 'challenge') setTimerSeconds(45);
    } else {
      // Completed all questions
      const correctCount = userAnswersHistory.filter(h => h.isCorrect).length + (isCorrect ? 1 : 0);
      const accuracy = Math.round((correctCount / questions.length) * 100);
      completeLesson(`quiz_${activeTopicKey}`, accuracy);
      triggerConfetti('levelUp');
      setIsQuizCompleted(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentIndex(0);
    setUserInput('');
    setIsAnswered(false);
    setIsCorrect(false);
    setShowHint(false);
    setShowFormula(false);
    setRevealSolution(false);
    setUserAnswersHistory([]);
    setIsQuizCompleted(false);
    setComboCount(0);
  };

  if (!questions || questions.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <CardRounded>
          <h2 style={{ fontSize: '1.4rem', color: '#3c3c3c', marginBottom: '10px' }}>No Questions Found</h2>
          <p style={{ color: '#777', marginBottom: '20px' }}>No questions available for this topic yet.</p>
          <Button3D onClick={onResetMode} variant="secondary">Back to Syllabus</Button3D>
        </CardRounded>
      </div>
    );
  }

  // QUIZ COMPLETED SUMMARY VIEW
  if (isQuizCompleted) {
    const totalQ = questions.length;
    const correctTotal = userAnswersHistory.filter(h => h.isCorrect).length;
    const scorePct = Math.round((correctTotal / totalQ) * 100);

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '10px' }}>
        {/* Header summary card */}
        <CardRounded style={{ textAlign: 'center', padding: '30px 20px', marginBottom: '24px' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '10px' }}>
            {scorePct >= 80 ? '🏆' : scorePct >= 50 ? '🌟' : '💪'}
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#3c3c3c', marginBottom: '6px' }}>
            {scorePct === 100 ? 'Perfect Score!' : scorePct >= 80 ? 'Outstanding Job!' : scorePct >= 50 ? 'Great Effort!' : 'Keep Practicing!'}
          </h2>
          <p style={{ color: '#777', fontSize: '1rem', marginBottom: '20px' }}>
            {classNameText} • {themeTitle} • {topicTitle}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '25px', flexWrap: 'wrap' }}>
            <div style={{ background: '#f0f9ff', border: '2px solid #bae6fd', borderRadius: '16px', padding: '14px 24px', minWidth: '120px' }}>
              <div style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: '700', textTransform: 'uppercase' }}>Score</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#0369a1' }}>{correctTotal} / {totalQ}</div>
            </div>
            <div style={{ background: '#f0fdf4', border: '2px solid #bbf7d0', borderRadius: '16px', padding: '14px 24px', minWidth: '120px' }}>
              <div style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: '700', textTransform: 'uppercase' }}>Accuracy</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#15803d' }}>{scorePct}%</div>
            </div>
            <div style={{ background: '#fefce8', border: '2px solid #fef08a', borderRadius: '16px', padding: '14px 24px', minWidth: '120px' }}>
              <div style={{ fontSize: '0.85rem', color: '#ca8a04', fontWeight: '700', textTransform: 'uppercase' }}>XP Earned</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#a16207' }}>+{correctTotal * xpRewardPerQ}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <Button3D onClick={handleRetakeQuiz} variant="secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RotateCcw size={18} /> Retake This Topic
            </Button3D>
            {nextTopicId && onSelectTopic && (
              <Button3D onClick={() => onSelectTopic(nextTopicId)} variant="primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                Next Topic <ArrowRight size={18} />
              </Button3D>
            )}
            <Button3D onClick={onResetMode} variant="outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={18} /> Back to Syllabus
            </Button3D>
          </div>
        </CardRounded>

        {/* Detailed Question Review Table */}
        <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#3c3c3c', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📋</span> Question Review Breakdown
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {userAnswersHistory.map((item, idx) => (
            <CardRounded
              key={idx}
              style={{
                borderLeft: `6px solid ${item.isCorrect ? '#22c55e' : '#ef4444'}`,
                background: item.isCorrect ? '#fafffa' : '#fffbfa',
                padding: '16px 20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                <div style={{ fontWeight: '700', color: '#2d3748', fontSize: '1rem', lineHeight: '1.4' }}>
                  <span style={{ color: '#888', marginRight: '6px' }}>Q{item.questionIndex}.</span>
                  {item.questionText}
                </div>
                <div>
                  {item.isCorrect ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#dcfce7', color: '#15803d', fontWeight: '700', fontSize: '0.8rem', padding: '4px 10px', borderRadius: '12px', whiteSpace: 'nowrap' }}>
                      <CheckCircle2 size={14} /> Correct
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#fee2e2', color: '#b91c1c', fontWeight: '700', fontSize: '0.8rem', padding: '4px 10px', borderRadius: '12px', whiteSpace: 'nowrap' }}>
                      <XCircle size={14} /> Incorrect
                    </span>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.9rem', marginBottom: '8px' }}>
                <div>
                  <span style={{ color: '#666', fontWeight: '600' }}>Your Answer: </span>
                  <span style={{ fontWeight: '700', color: item.isCorrect ? '#16a34a' : '#dc2626' }}>
                    {item.studentAnswer || '(No answer)'}
                  </span>
                </div>
                {!item.isCorrect && (
                  <div>
                    <span style={{ color: '#666', fontWeight: '600' }}>Correct Answer: </span>
                    <span style={{ fontWeight: '700', color: '#16a34a' }}>{item.correctAnswer}</span>
                  </div>
                )}
              </div>

              {item.explanation && (
                <div style={{ fontSize: '0.88rem', color: '#334155', background: 'rgba(0,0,0,0.03)', padding: '10px 14px', borderRadius: '8px', lineHeight: '1.45' }}>
                  💡 <strong>Explanation:</strong> {item.explanation}
                </div>
              )}
            </CardRounded>
          ))}
        </div>
      </div>
    );
  }

  const questionPrompt = currentQ?.q || currentQ?.question || '';
  const questionAnswer = currentQ?.a || currentQ?.correctAnswer || '';
  const questionExp = currentQ?.exp || currentQ?.explanation || '';
  const questionHint = currentQ?.h || currentQ?.hint || '';
  const questionDiff = currentQ?.difficulty || (currentIndex < 3 ? 'easy' : currentIndex < 7 ? 'medium' : 'hard');

  // Quick Math Symbols Palette for student convenience
  const mathSymbols = ['√', 'π', '²', '³', '°', '/', '-', '(', ')', '.', 'x'];

  // ACTIVE QUESTION VIEW
  return (
    <div style={{ maxWidth: '750px', margin: '0 auto', padding: '10px' }}>
      {/* Top Header Card */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
            <span style={{ display: 'inline-block', background: '#e0f2fe', color: '#0284c7', fontWeight: '800', fontSize: '0.78rem', padding: '3px 10px', borderRadius: '8px', textTransform: 'uppercase' }}>
              {classNameText}
            </span>
            <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600' }}>
              {themeTitle}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ef4444', fontWeight: '700', fontSize: '0.9rem' }}>
              <Heart size={16} fill="#ef4444" /> {gameState.hearts}
            </span>
            {comboCount >= 2 && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b', fontWeight: '700', fontSize: '0.9rem' }}>
                <Flame size={16} fill="#f59e0b" /> {comboCount}x
              </span>
            )}
          </div>
        </div>

        {/* Topic Title */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1e293b', marginBottom: '12px' }}>
          {topicTitle}
        </h2>

        {/* Progress Bar & Question Counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ flex: 1 }}>
            <ProgressBar value={((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100} color="#22c55e" />
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#64748b', whiteSpace: 'nowrap' }}>
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>
      </div>

      {/* Main Question Card */}
      <CardRounded style={{ padding: '28px 24px', marginBottom: '20px', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '6px' }}>
              Written Answer
            </span>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: '6px',
              background: questionDiff.toLowerCase() === 'easy' ? '#dcfce7' : questionDiff.toLowerCase() === 'medium' ? '#fef9c3' : '#fee2e2',
              color: questionDiff.toLowerCase() === 'easy' ? '#15803d' : questionDiff.toLowerCase() === 'medium' ? '#a16207' : '#b91c1c'
            }}>
              {questionDiff}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {formulaClue && (
              <button
                type="button"
                onClick={() => setShowFormula(!showFormula)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6366f1', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: '700' }}
              >
                <Bookmark size={15} /> {showFormula ? 'Hide Rule' : 'Formula / Rule'}
              </button>
            )}

            {questionHint && (
              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: '700' }}
              >
                <HelpCircle size={15} /> {showHint ? 'Hide Hint' : 'Hint'}
              </button>
            )}
          </div>
        </div>

        {/* Formula / Rule Clue Box */}
        {showFormula && formulaClue && (
          <div style={{ background: '#eef2ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '12px 16px', marginBottom: '16px', fontSize: '0.9rem', color: '#312e81' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase', marginBottom: '4px' }}>
              📖 Reference Rule: {formulaClue.title}
            </div>
            <div style={{ fontFamily: 'monospace', fontWeight: '700', fontSize: '1rem', color: '#1e1b4b' }}>
              {formulaClue.formula}
            </div>
          </div>
        )}

        {/* Hint Box */}
        {showHint && questionHint && (
          <div style={{ background: '#fefce8', border: '1px dashed #facc15', borderRadius: '10px', padding: '12px 16px', marginBottom: '16px', fontSize: '0.92rem', color: '#854d0e', lineHeight: '1.45' }}>
            💡 <strong>Hint:</strong> {questionHint}
          </div>
        )}

        {/* Question Text */}
        <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', lineHeight: '1.55', marginBottom: '24px' }}>
          {questionPrompt}
        </div>

        {/* Answer Input Form */}
        <form onSubmit={handleCheckAnswer}>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b' }}>
                YOUR ANSWER:
              </label>

              {/* Quick Math Symbols Helper Bar */}
              {!isAnswered && (
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {mathSymbols.map(sym => (
                    <button
                      key={sym}
                      type="button"
                      onClick={() => handleInsertSymbol(sym)}
                      style={{
                        padding: '2px 8px',
                        fontSize: '0.82rem',
                        fontWeight: '700',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        background: '#f8fafc',
                        color: '#334155',
                        cursor: 'pointer'
                      }}
                      title={`Insert ${sym}`}
                    >
                      {sym}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <input
              ref={inputRef}
              type="text"
              inputMode={currentQ?.type === 'number' ? 'decimal' : 'text'}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={isAnswered}
              placeholder="Type your answer here..."
              autoFocus
              style={{
                width: '100%',
                padding: '14px 18px',
                fontSize: '1.15rem',
                fontWeight: '600',
                borderRadius: '12px',
                border: isAnswered
                  ? isCorrect
                    ? '2px solid #22c55e'
                    : '2px solid #ef4444'
                  : '2px solid #cbd5e1',
                background: isAnswered ? (isCorrect ? '#f0fdf4' : '#fef2f2') : '#ffffff',
                color: '#1e293b',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'all 0.2s ease'
              }}
            />
          </div>

          {!isAnswered && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
              <Button3D
                type="submit"
                variant="primary"
                disabled={userInput.trim() === ''}
                style={{ padding: '12px 28px', fontSize: '1rem', fontWeight: '800' }}
              >
                {t('quiz_check_answer')}
              </Button3D>
            </div>
          )}
        </form>

        {/* Instant Feedback Banner */}
        {isAnswered && (
          <div
            style={{
              marginTop: '20px',
              padding: '18px 20px',
              borderRadius: '14px',
              background: isCorrect ? '#f0fdf4' : '#fef2f2',
              border: `2px solid ${isCorrect ? '#86efac' : '#fca5a5'}`
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              {isCorrect ? (
                <>
                  <CheckCircle2 size={24} color="#16a34a" />
                  <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#15803d' }}>
                    {t('quiz_correct_feedback')}
                  </span>
                </>
              ) : (
                <>
                  <XCircle size={24} color="#dc2626" />
                  <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#b91c1c' }}>
                    {t('quiz_incorrect_feedback')}
                  </span>
                </>
              )}
            </div>

            {!isCorrect && revealSolution && (
              <div style={{ fontSize: '0.95rem', color: '#7f1d1d', marginBottom: '8px' }}>
                {t('solution')}: <strong style={{ color: '#15803d', fontSize: '1.05rem' }}>{questionAnswer}</strong>
              </div>
            )}

            {(isCorrect || revealSolution) && questionExp && (
              <div style={{ fontSize: '0.92rem', color: '#334155', background: 'rgba(255,255,255,0.85)', padding: '12px 16px', borderRadius: '10px', marginTop: '8px', lineHeight: '1.5' }}>
                💡 <strong>{t('solution')}:</strong> {questionExp}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
              {!isCorrect && !revealSolution && (
                <>
                  <Button3D
                    onClick={handleTryAgain}
                    variant="secondary"
                    style={{ padding: '12px 20px', fontSize: '0.95rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <RotateCcw size={16} /> {t('try_again')}
                  </Button3D>
                  <Button3D
                    onClick={() => setRevealSolution(true)}
                    variant="outline"
                    style={{ padding: '12px 18px', fontSize: '0.95rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Lightbulb size={16} /> {t('solution')}
                  </Button3D>
                </>
              )}

              {(isCorrect || revealSolution) && (
                <Button3D
                  onClick={handleNextQuestion}
                  variant={isCorrect ? 'primary' : 'outline'}
                  style={{ padding: '12px 28px', fontSize: '1rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  {currentIndex + 1 < questions.length ? (
                    <>{t('quiz_next_question')} <ArrowRight size={18} /></>
                  ) : (
                    <>{t('quiz_finish')} <Award size={18} /></>
                  )}
                </Button3D>
              )}
            </div>
          </div>
        )}
      </CardRounded>
    </div>

  );
};

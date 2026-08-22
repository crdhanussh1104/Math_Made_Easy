import React, { useState } from 'react';
import { getChaptersForClass } from '../../data/chapters';
import { olympiadExamPapers } from '../../data/olympiadPapers';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { ProgressBar } from '../ui/ProgressBar';
import { DialogModal } from '../ui/DialogModal';
import { soundFx } from '../../utils/audioSynth';
import { useGame } from '../../context/GameContext';
import { Trophy, Star, ArrowRight, Award, ShieldCheck, CheckCircle2, HelpCircle, FileText, Clock, Sparkles } from 'lucide-react';

export const OlympiadPathway = ({ onSelectChapter, onNavigate }) => {
  const { gameState, addXP, addGems } = useGame();
  
  const selectedClassId = gameState.selectedClass || 'class4';
  const chapters = getChaptersForClass(selectedClassId);

  const [selectedChapId, setSelectedChapId] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const activeChap = chapters.find(c => c.id === selectedChapId);
  const activePapers = selectedChapId ? (olympiadExamPapers[selectedChapId] || []) : [];
  const activeQuestion = activePapers[currentQuestionIdx];

  const handleOpenPaper = (chapId) => {
    soundFx.playClick();
    setSelectedChapId(chapId);
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
  };

  const handleSelectOption = (index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
    soundFx.playClick();
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isSubmitted) return;
    setIsSubmitted(true);

    if (selectedOption === activeQuestion.correctIndex) {
      soundFx.playCorrect();
      setScore(prev => prev + 1);
      addXP(30);
      addGems(10);
    } else {
      soundFx.playWrong();
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < activePapers.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      soundFx.playLevelUp();
    }
  };

  return (
    <>
      <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Header Banner */}
        <div style={{
          padding: '24px 28px',
          borderRadius: 'var(--radius-md)',
          background: 'linear-gradient(135deg, #7c3aed 0%, #1cb0f6 100%)',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: 'rgba(255,255,255,0.25)', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
              15-Years Real Olympiad Previous Papers (2010 - 2025)
            </span>
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.8rem', fontWeight: '800', marginTop: '6px' }}>
              🏆 {selectedClassId.replace('class', 'Class ')} Olympiad Readiness Pathway & HOTS Papers
            </h3>
            <p style={{ fontSize: '0.95rem', opacity: 0.95, marginTop: '4px' }}>
              Solve genuine previous year questions from SOF IMO, SilverZone, NSTSE & Math Kangaroo!
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '800', backgroundColor: 'rgba(0,0,0,0.25)', padding: '10px 18px', borderRadius: 'var(--radius-full)' }}>
            <Trophy size={22} color="#ffc800" /> Contest Practice Arena
          </div>
        </div>

        {/* Chapters Olympiad Readiness Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {chapters.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)' }}>
              Olympiad pathways for this class are coming soon!
            </div>
          ) : (
          chapters.map((chap) => (
            <div
              key={chap.id}
              style={{
                padding: '18px 22px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-main)',
                border: `1.5px solid ${chap.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              {/* Chapter Info & Star Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 260px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  backgroundColor: chap.bgLight, color: chap.color,
                  fontWeight: '800', fontFamily: 'var(--font-rounded)',
                  fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  Ch {chap.number}
                </div>

                <div>
                  <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.15rem', fontWeight: '800' }}>
                    {chap.title}
                  </h4>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                    <span style={{ fontSize: '1.1rem', color: '#ffc800', letterSpacing: '2px' }}>
                      {chap.olympiadRating}
                    </span>
                    <BadgeChip label={chap.readinessLevel} color={chap.color} bg={chap.bgLight} size="sm" />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Button3D
                  variant="warning"
                  size="md"
                  onClick={() => handleOpenPaper(chap.id)}
                  icon={FileText}
                >
                  Solve 15-Yr Olympiad Paper
                </Button3D>
              </div>
              </div>
            </div>
          }))}
        </div>
      </CardRounded>

      {/* Interactive 15-Years Olympiad Previous Paper Modal Arena */}
      {selectedChapId && activeQuestion && (
        <DialogModal
          isOpen={!!selectedChapId}
          onClose={() => setSelectedChapId(null)}
          title={`🏆 ${activeChap?.title} - Authentic Olympiad Paper`}
          maxWidth="720px"
          footer={
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              {!isSubmitted ? (
                <Button3D variant="warning" onClick={handleSubmitAnswer} disabled={selectedOption === null}>
                  Submit Answer
                </Button3D>
              ) : currentQuestionIdx < activePapers.length - 1 ? (
                <Button3D variant="primary" onClick={handleNextQuestion}>
                  Next Question ➔
                </Button3D>
              ) : (
                <Button3D variant="purple" onClick={() => setSelectedChapId(null)}>
                  Complete Paper Set 🏆
                </Button3D>
              )}
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Exam Header Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--purple-light)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--purple)' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--purple)' }}>
                📜 {activeQuestion.examName}
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-muted)' }}>
                Q {currentQuestionIdx + 1} of {activePapers.length}
              </span>
            </div>

            {/* Question Text */}
            <div style={{ fontSize: '1.05rem', fontWeight: '700', lineHeight: '1.5', color: 'var(--text-main)', padding: '4px 0' }}>
              {activeQuestion.question}
            </div>

            {/* Options */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
              {activeQuestion.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = isSubmitted && idx === activeQuestion.correctIndex;
                const isWrong = isSubmitted && isSelected && idx !== activeQuestion.correctIndex;

                let bg = 'var(--bg-main)';
                let border = '1.5px solid var(--border-light)';
                let color = 'var(--text-main)';

                if (isSelected && !isSubmitted) {
                  bg = 'var(--secondary-light)';
                  border = '2px solid var(--secondary)';
                  color = 'var(--secondary)';
                } else if (isCorrect) {
                  bg = 'var(--primary-light)';
                  border = '2px solid var(--primary)';
                  color = 'var(--primary)';
                } else if (isWrong) {
                  bg = 'var(--accent-light)';
                  border = '2px solid var(--accent)';
                  color = 'var(--accent)';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: bg,
                      border: border,
                      color: color,
                      fontWeight: '700',
                      textAlign: 'left',
                      fontSize: '0.95rem',
                      cursor: isSubmitted ? 'default' : 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {String.fromCharCode(65 + idx)}. {opt}
                  </button>
                );
              })}
            </div>

            {/* Answer Feedback & Detailed Solution Explanation */}
            {isSubmitted && (
              <div style={{
                padding: '14px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: selectedOption === activeQuestion.correctIndex ? 'var(--primary-light)' : 'var(--accent-light)',
                border: `1.5px solid ${selectedOption === activeQuestion.correctIndex ? 'var(--primary)' : 'var(--accent)'}`,
                lineHeight: '1.5',
                fontSize: '0.9rem'
              }}>
                <div style={{ fontWeight: '800', marginBottom: '4px', color: selectedOption === activeQuestion.correctIndex ? 'var(--primary)' : 'var(--accent)' }}>
                  {selectedOption === activeQuestion.correctIndex ? '🎉 Correct Answer (+30 XP & +10 Gems!)' : '❌ Incorrect Answer'}
                </div>
                <div><strong>Official Solution Explanation:</strong> {activeQuestion.explanation}</div>
              </div>
            )}
          </div>
        </DialogModal>
      )}
    </>
  );
};

import React, { useState } from 'react';
import { olympiadRecEngine } from '../../services/olympiadRecommendation';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { ProgressBar } from '../ui/ProgressBar';
import { RewardModal } from '../gamification/RewardModal';
import { soundFx } from '../../utils/audioSynth';
import { triggerConfetti } from '../../utils/confetti';
import { useGame } from '../../context/GameContext';
import { Trophy, Award, Sparkles, CheckCircle2, ChevronDown, ChevronUp, Eye, HelpCircle, ExternalLink, Flame } from 'lucide-react';

export const OlympiadInsightsNLP = ({ chapterId = 'chap_4' }) => {
  const { addXP, addGems } = useGame();
  const [isOpen, setIsOpen] = useState(true);
  const [showPracticeModal, setShowPracticeModal] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [practiceAnswer, setPracticeAnswer] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  // Call Content-Based Recommendation Engine
  const { chapter, topRecommendations } = olympiadRecEngine.getRecommendations(chapterId);
  const readinessTopics = olympiadRecEngine.getReadinessTracker();

  const rankMedals = ['🥇', '🥈', '🥉'];
  const rankColors = ['#ffc800', '#94a3b8', '#b45309'];

  const toggleExpand = () => {
    setIsOpen(prev => !prev);
    soundFx.playClick();
  };

  const handleAnswerPractice = (optionIdx) => {
    setPracticeAnswer(optionIdx);
    setShowSolution(true);
    if (optionIdx === 0) {
      soundFx.playCorrect();
      triggerConfetti('levelUp');
      addXP(50);
      addGems(20);
    } else {
      soundFx.playIncorrect();
    }
  };

  return (
    <CardRounded style={{ border: '2.5px solid var(--purple)', overflow: 'hidden', padding: 0 }}>
      {/* Header Banner */}
      <div
        onClick={toggleExpand}
        style={{
          padding: '20px 24px',
          background: 'linear-gradient(135deg, #7c3aed 0%, #ce82ff 50%, #1cb0f6 100%)',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Trophy size={30} color="#ffc800" />
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.9 }}>
              NLP Recommendation Engine
            </div>
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '800' }}>
              🏆 Olympiad Insights & Recommendations
            </h3>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BadgeChip label="AI Recommendation Powered" color="#ffffff" bg="rgba(255,255,255,0.25)" size="sm" />
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>

      {/* Expanded Content Body */}
      {isOpen && (
        <div className="animate-pop" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', backgroundColor: 'var(--bg-card-solid)' }}>
          
          {/* Section 1: Top 3 Recommended Competitions */}
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: 'var(--purple)', marginBottom: '4px' }}>
              Top Recommended Mathematics Competitions for {chapter.chapterName}:
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Ranked automatically by TF-IDF & Cosine Similarity NLP matching between your lesson syllabus and national contest specifications.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {topRecommendations.map((rec, index) => (
                <div
                  key={rec.id}
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-main)',
                    border: `2px solid ${index === 0 ? 'var(--warning)' : 'var(--border-light)'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  {/* Top Row: Medal Rank, Name, Match Score */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.8rem' }}>{rankMedals[index]}</span>
                      <div>
                        <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)' }}>
                          {rec.name}
                        </h4>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          Target: {rec.targetGrades.join(', ')} • Difficulty: {'⭐'.repeat(rec.difficulty)}
                        </div>
                      </div>
                    </div>

                    <div style={{
                      padding: '6px 14px', borderRadius: 'var(--radius-full)',
                      backgroundColor: index === 0 ? 'var(--warning-light)' : 'var(--primary-light)',
                      color: index === 0 ? 'var(--orange)' : 'var(--primary)',
                      fontWeight: '800', fontFamily: 'var(--font-rounded)', fontSize: '0.95rem'
                    }}>
                      Match Score: {rec.matchScore}%
                    </div>
                  </div>

                  {/* Explainability Natural Language Section */}
                  <div style={{ padding: '12px 14px', backgroundColor: 'var(--bg-card-solid)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: '800', color: 'var(--primary)' }}>Why Recommended? </span>
                    <span>{rec.explainabilityReason}</span>
                  </div>

                  {/* Highlighted Matching Keyword Chips */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>Matching Concepts:</span>
                    {rec.matchedKeywords.map((kw, i) => (
                      <BadgeChip key={i} label={`✓ ${kw}`} color="var(--purple)" bg="var(--purple-light)" size="sm" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Olympiad Readiness Tracker */}
          <div style={{ padding: '20px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)' }}>
            <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.15rem', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={20} color="var(--primary)" /> Olympiad Readiness Tracker
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
              {readinessTopics.map((item, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: '700' }}>
                    <span>{item.topic}</span>
                    <span style={{ color: item.color, fontWeight: '800' }}>{item.score}%</span>
                  </div>
                  <ProgressBar progress={item.score} color={item.color} height={10} showLabel={false} />
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Interactive Practice Olympiad Questions Button */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '10px', borderTop: '1px dashed var(--border-light)' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.05rem', fontWeight: '800' }}>
                Ready to Test Your Contest Logic?
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Solve Olympiad-style HOTS questions with step-by-step solutions to earn +50 XP and 20 Gems!
              </p>
            </div>

            <Button3D variant="warning" size="lg" onClick={() => setShowPracticeModal(true)} icon={Sparkles}>
              Practice Olympiad Questions 🚀
            </Button3D>
          </div>

        </div>
      )}

      {/* Olympiad Interactive Practice Modal */}
      {showPracticeModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(6px)',
          zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
        }}>
          <CardRounded style={{ maxWidth: '560px', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <BadgeChip label="SOF IMO Sample Challenge" color="var(--purple)" bg="var(--purple-light)" size="md" />
              <button onClick={() => setShowPracticeModal(false)} style={{ background: 'none', border: 'none', fontSize: '1.2rem', fontWeight: '800', cursor: 'pointer' }}>✕</button>
            </div>

            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.2rem', fontWeight: '800' }}>
              If 3/8 of a pizza is eaten by Rohan and 2/8 by Sam, what fraction of the pizza remains?
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {['3/8', '5/8', '1/2', '4/8'].map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerPractice(idx)}
                  style={{
                    padding: '14px', borderRadius: 'var(--radius-md)',
                    border: practiceAnswer === idx ? '2.5px solid var(--primary)' : '1.5px solid var(--border-light)',
                    backgroundColor: practiceAnswer === idx ? 'var(--primary-light)' : 'var(--bg-main)',
                    fontWeight: '800', fontFamily: 'var(--font-rounded)', fontSize: '1rem', cursor: 'pointer'
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>

            {showSolution && (
              <div className="animate-pop" style={{ padding: '14px', backgroundColor: practiceAnswer === 0 ? 'var(--primary-light)' : 'var(--accent-light)', color: practiceAnswer === 0 ? 'var(--primary)' : 'var(--accent)', borderRadius: 'var(--radius-sm)', fontWeight: '800', fontSize: '0.9rem' }}>
                {practiceAnswer === 0 ? '🎉 Correct! Total eaten = 3/8 + 2/8 = 5/8. Remaining = 8/8 - 5/8 = 3/8 (+50 XP)' : '💡 Not quite! Total eaten = 3/8 + 2/8 = 5/8. Remaining = 8/8 - 5/8 = 3/8.'}
              </div>
            )}

            <Button3D variant="secondary" size="md" onClick={() => setShowPracticeModal(false)}>
              Close Practice Challenge
            </Button3D>
          </CardRounded>
        </div>
      )}
    </CardRounded>
  );
};

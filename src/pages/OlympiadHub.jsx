import React, { useState } from 'react';
import { getChaptersForClass } from '../data/chapters';
import { olympiadInsightsData } from '../data/olympiadData';
import { olympiadRecEngine } from '../services/olympiadRecommendation';
import { CardRounded } from '../components/ui/CardRounded';
import { Button3D } from '../components/ui/Button3D';
import { BadgeChip } from '../components/ui/BadgeChip';
import { ProgressBar } from '../components/ui/ProgressBar';
import { RewardModal } from '../components/gamification/RewardModal';
import { useGame } from '../context/GameContext';
import { soundFx } from '../utils/audioSynth';
import { triggerConfetti } from '../utils/confetti';
import {
  Trophy, Calendar, Award, BookOpen, Target, Sparkles, CheckCircle2,
  ArrowRight, Star, Flame, ShieldCheck, HelpCircle, Globe, Zap, Compass
} from 'lucide-react';

export const OlympiadHub = ({ onNavigate, onSelectChapter }) => {
  const { gameState, addXP, addGems } = useGame();
  
  const selectedClassId = gameState.selectedClass || 'class4';
  const chapters = getChaptersForClass(selectedClassId);

  const [weeklyChallengeDone, setWeeklyChallengeDone] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [activeTab, setActiveTab] = useState('competitions'); // competitions, readiness, roadmap, calendar, practice, badges

  const readinessTopics = olympiadRecEngine.getReadinessTracker();

  // 1. Supported Competitions Detailed Data
  const supportedCompetitions = [
    {
      id: 'sof_imo',
      name: 'SOF International Mathematics Olympiad (IMO)',
      overview: 'Prestigious global competition assessing mathematical reasoning, place value logic, fractions, 3D geometry, measurement conversions, and higher-order reasoning.',
      difficultyStars: '⭐⭐⭐⭐☆',
      difficultyLevel: 'Advanced (Level 4)',
      recommendedClasses: 'Class 1 to Class 5 (Primary Target: Class 4)',
      skillsRequired: ['Higher Order Thinking (HOTS)', 'Logical Reasoning', 'Mathematical Reasoning', 'Spatial Logic'],
      color: '#7c3aed',
      bgLight: '#f3e8ff'
    },
    {
      id: 'silverzone_imo',
      name: 'SilverZone International Olympiad of Mathematics (IOM)',
      overview: 'International contest focusing on mental mathematics, rapid computation, missing digit addition, long division, metric unit conversion, and pattern recognition.',
      difficultyStars: '⭐⭐⭐☆☆',
      difficultyLevel: 'Intermediate (Level 3)',
      recommendedClasses: 'Class 1 to Class 5 (Target: Class 4)',
      skillsRequired: ['Speed Arithmetic', 'Pattern Analysis', 'Applied Mathematics', 'Unitary Logic'],
      color: '#1cb0f6',
      bgLight: '#ddf4ff'
    },
    {
      id: 'math_kangaroo',
      name: 'International Math Kangaroo Competition',
      overview: 'World-famous contest emphasizing spatial visualization, 2D/3D geometry, symmetry lines, angle classification, puzzle solving, and creative mathematical thinking.',
      difficultyStars: '⭐⭐⭐⭐☆',
      difficultyLevel: 'Advanced (Level 4)',
      recommendedClasses: 'Class 1 to Class 5 (Target: Class 4)',
      skillsRequired: ['Spatial Visualization', 'Creative Problem Solving', 'Geometric Intuition', 'Symmetry Mapping'],
      color: '#ce82ff',
      bgLight: '#f6e5ff'
    },
    {
      id: 'uimo',
      name: 'Unified International Mathematics Olympiad (UIMO)',
      overview: 'Curriculum-aligned national contest evaluating deep conceptual understanding of place value, large numbers, expanded notation, metric conversions, and structured word problems.',
      difficultyStars: '⭐⭐⭐☆☆',
      difficultyLevel: 'Intermediate (Level 3)',
      recommendedClasses: 'Class 1 to Class 5 (Target: Class 4)',
      skillsRequired: ['Conceptual Clarity', 'Curriculum Accuracy', 'Numerical Accuracy'],
      color: '#58cc02',
      bgLight: '#e5f9d8'
    },
    {
      id: 'nstse',
      name: 'National Level Science Talent Search Examination (NSTSE)',
      overview: 'Comprehensive national examination testing analytical thinking, mathematical logic, measurement balance, time intervals, and fundamental problem-solving skills.',
      difficultyStars: '⭐⭐⭐☆☆',
      difficultyLevel: 'Intermediate (Level 3)',
      recommendedClasses: 'Class 1 to Class 5 (Target: Class 4)',
      skillsRequired: ['Analytical Thinking', 'Science & Math Synergy', 'Logical Deduction'],
      color: '#ff9600',
      bgLight: '#fff2df'
    }
  ];

  // 2. Preparation Roadmap Stages
  const roadmapStages = [
    { stage: 1, title: 'Stage 1: ICSE Foundation Mastery', desc: 'Master Class 4 place value, 5-digit operations, and metric conversions.', status: 'Completed ✓', color: '#58cc02' },
    { stage: 2, title: 'Stage 2: Logical Reasoning & HOTS', desc: 'Solve pattern riddles, digit sum puzzles, and fraction visualizers.', status: 'In Progress ⏳', color: '#1cb0f6' },
    { stage: 3, title: 'Stage 3: Past Papers & Speed Blitz', desc: 'Practice 45-second timed challenge blitz rounds.', status: 'Next Step 🎯', color: '#ff9600' },
    { stage: 4, title: 'Stage 4: National Level Mock Contests', desc: 'Simulate full-length 35-question contest papers.', status: 'Locked 🔒', color: '#ce82ff' }
  ];

  // 3. Earned Olympiad Badges & Medals
  const earnedBadges = [
    { title: 'Gold Medalist - IMO Round 1', desc: 'Scored 100% on Place Value & Large Numbers.', icon: '🥇', date: 'Jul 2026', color: '#ffc800' },
    { title: 'Silver Badge - Speed Calculator', desc: 'Completed 5 Challenge Blitz rounds.', icon: '🥈', date: 'Jul 2026', color: '#94a3b8' },
    { title: 'Bronze Trophy - Fraction Master', desc: 'Solved 10 fraction slicing HOTS problems.', icon: '🥉', date: 'Aug 2026', color: '#b45309' },
    { title: 'Spatial Architect Star', desc: 'Mastered 3D geometry solids in 3D Math Lab.', icon: '🌟', date: 'Aug 2026', color: '#ce82ff' }
  ];

  const handleWeeklyChallenge = () => {
    if (weeklyChallengeDone) return;
    setWeeklyChallengeDone(true);
    soundFx.playCorrect();
    triggerConfetti('levelUp');
    addXP(100);
    addGems(30);
    setShowRewardModal(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', width: '100%', maxWidth: '100%', paddingBottom: '60px' }}>
      
      {/* 1. Header Banner */}
      <CardRounded style={{
        background: 'linear-gradient(135deg, #7c3aed 0%, #ce82ff 50%, #1cb0f6 100%)',
        color: '#ffffff',
        padding: '28px 32px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ maxWidth: '600px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: 'rgba(255,255,255,0.25)', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
              National & International Contests
            </span>
            <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '2.4rem', fontWeight: '800', marginTop: '8px' }}>
              Olympiad Command Hub 🏆
            </h2>
            <p style={{ fontSize: '1.05rem', opacity: 0.95, marginTop: '6px' }}>
              Supported Competitions, Preparation Roadmaps, Skill Analysis, Practice Sets, and Student Readiness Tracking!
            </p>
          </div>

          <div style={{ padding: '16px 24px', backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1.5px solid rgba(255,255,255,0.3)' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '800', opacity: 0.9 }}>Overall Readiness</div>
            <div style={{ fontSize: '2rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: '#ffc800' }}>75%</div>
            <span style={{ fontSize: '0.8rem', fontWeight: '700' }}>⭐⭐⭐⭐☆ Ready</span>
          </div>
        </div>
      </CardRounded>

      {/* 2. Target Weekly Olympiad Challenge Banner */}
      <CardRounded style={{
        background: 'linear-gradient(135deg, rgba(255, 200, 0, 0.15), rgba(255, 150, 0, 0.1))',
        border: '2px solid var(--warning)',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 300px' }}>
          <div style={{ width: '52px', height: '52px', borderRadius: '16px', backgroundColor: 'var(--warning)', color: '#2b3a4a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Target size={28} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--orange)', textTransform: 'uppercase' }}>
              🎯 Weekly Olympiad Challenge
            </div>
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.25rem', fontWeight: '800' }}>
              6-Digit Place Value & Fraction Puzzle Riddle
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Solve 5 HOTS reasoning questions to earn bonus +100 XP and 30 Gems!
            </p>
          </div>
        </div>

        {weeklyChallengeDone ? (
          <BadgeChip label="Challenge Completed! (+100 XP)" color="var(--primary)" bg="var(--primary-light)" size="md" />
        ) : (
          <Button3D variant="warning" size="lg" onClick={handleWeeklyChallenge} icon={Sparkles}>
            Start Weekly Challenge
          </Button3D>
        )}
      </CardRounded>

      {/* 3. Main Hub Navigation Tabs */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {[
          { id: 'competitions', label: '🏆 Supported Competitions', icon: Globe },
          { id: 'readiness', label: '📈 Student Readiness', icon: Zap },
          { id: 'roadmap', label: '📚 Prep Roadmap', icon: BookOpen },
          { id: 'practice', label: '🧩 Practice Sets', icon: Target },
          { id: 'badges', label: '🥇 Earned Badges', icon: Award }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); soundFx.playClick(); }}
              style={{
                padding: '10px 20px', borderRadius: 'var(--radius-full)', border: 'none',
                backgroundColor: isActive ? 'var(--purple)' : 'var(--bg-card-solid)',
                color: isActive ? '#fff' : 'var(--text-muted)',
                fontWeight: '700', fontFamily: 'var(--font-rounded)', fontSize: '0.9rem',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
                whiteSpace: 'nowrap', boxShadow: isActive ? '0 4px 12px rgba(124, 58, 237, 0.4)' : 'var(--shadow-sm)'
              }}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 4. Tab Content Panels */}

      {/* TAB 1: SUPPORTED MATHEMATICS COMPETITIONS */}
      {activeTab === 'competitions' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {supportedCompetitions.map((comp) => (
            <CardRounded key={comp.id} style={{ borderLeft: `6px solid ${comp.color}`, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-main)' }}>
                  {comp.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1rem', color: '#ffc800', fontWeight: '800' }}>{comp.difficultyStars}</span>
                  <BadgeChip label={comp.difficultyLevel} color={comp.color} bg={comp.bgLight} size="sm" />
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
                {comp.overview}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', backgroundColor: 'var(--bg-main)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Recommended Classes:</div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--primary)', marginTop: '2px' }}>{comp.recommendedClasses}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Key Skills Required:</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                    {comp.skillsRequired.map((sk, idx) => (
                      <BadgeChip key={idx} label={`✓ ${sk}`} color={comp.color} bg={comp.bgLight} size="sm" />
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <Button3D
                  variant="primary" size="sm"
                  onClick={() => {
                    if (onSelectChapter) onSelectChapter('chap_1');
                    if (onNavigate) onNavigate('learn');
                  }}
                  icon={ArrowRight}
                >
                  Start Preparation Set
                </Button3D>
              </div>
            </CardRounded>
          ))}
        </div>
      )}

      {/* TAB 2: STUDENT READINESS PERCENTAGE TRACKER */}
      {activeTab === 'readiness' && (
        <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '800' }}>
            📈 Student Olympiad Readiness Percentage Tracker
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
            {readinessTopics.map((item, idx) => (
              <div key={idx} style={{ padding: '18px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '800', fontFamily: 'var(--font-rounded)', fontSize: '1rem' }}>
                  <span>{item.topic}</span>
                  <span style={{ color: item.color }}>{item.score}%</span>
                </div>
                <ProgressBar progress={item.score} color={item.color} height={12} showLabel={false} />
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  Status: {item.score >= 85 ? '🌟 Excellent Contest Readiness' : '🎯 Steady Practice Needed'}
                </div>
              </div>
            ))}
          </div>
        </CardRounded>
      )}

      {/* TAB 3: PREPARATION ROADMAP */}
      {activeTab === 'roadmap' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {roadmapStages.map(st => (
            <CardRounded key={st.stage} style={{ borderLeft: `6px solid ${st.color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <BadgeChip label={st.status} color={st.color} bg="var(--bg-main)" size="sm" />
                  <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.2rem', fontWeight: '800', marginTop: '6px' }}>
                    {st.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {st.desc}
                  </p>
                </div>

                <Button3D
                  variant="primary" size="sm"
                  onClick={() => {
                    if (onSelectChapter) onSelectChapter('chap_1');
                    if (onNavigate) onNavigate('quiz');
                  }}
                  icon={ArrowRight}
                >
                  Start Stage
                </Button3D>
              </div>
            </CardRounded>
          ))}
        </div>
      )}

      {/* TAB 4: PRACTICE QUESTION SETS */}
      {activeTab === 'practice' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {chapters.length === 0 ? (
            <div style={{ color: 'var(--text-muted)' }}>Olympiad practice sets coming soon.</div>
          ) : (
          chapters.map(chap => {
            const insight = olympiadInsightsData[chap.id];

            return (
              <CardRounded key={chap.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <BadgeChip label={chap.title.split(' ')[0]} color={chap.color} bg={chap.bgLight} size="sm" />
                    <span style={{ color: '#ffc800', fontWeight: '800', fontSize: '0.9rem' }}>{chap.olympiadRating}</span>
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.15rem', fontWeight: '800', marginBottom: '8px' }}>
                    {chap.title} Olympiad Set
                  </h4>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4', marginBottom: '14px' }}>
                    {insight ? insight.importance : 'Practice higher order thinking questions for this chapter.'}
                  </p>
                </div>

                <Button3D
                  variant="purple" size="md" style={{ width: '100%' }}
                  onClick={() => {
                    if (onSelectChapter) onSelectChapter(chap.id);
                    if (onNavigate) onNavigate('quiz');
                  }}
                  icon={Trophy}
                >
                  Start Olympiad Set
                </Button3D>
              </CardRounded>
            );
          }))}
        </div>
      )}

      {/* TAB 5: EARNED OLYMPIAD BADGES & MEDALS */}
      {activeTab === 'badges' && (
        <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800' }}>
            🥇 Earned Olympiad Badges & Medals Gallery
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '16px' }}>
            {earnedBadges.map((ach, i) => (
              <div key={i} style={{ padding: '20px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-main)', border: `1.5px solid ${ach.color}`, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontSize: '3rem' }}>{ach.icon}</div>
                <div style={{ fontWeight: '800', fontFamily: 'var(--font-rounded)', fontSize: '1.05rem' }}>{ach.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{ach.desc}</div>
                <BadgeChip label={ach.date} color="var(--primary)" bg="var(--primary-light)" size="sm" />
              </div>
            ))}
          </div>
        </CardRounded>
      )}

      {/* Reward Celebration Modal */}
      <RewardModal
        isOpen={showRewardModal}
        onContinue={() => setShowRewardModal(false)}
        score={100}
        xpEarned={100}
        gemsEarned={30}
      />

    </div>
  );
};

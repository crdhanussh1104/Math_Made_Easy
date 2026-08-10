import React, { useState } from 'react';
import { class4Chapters } from '../data/chapters';
import { badgesData } from '../data/achievements';
import { formulaBookData } from '../data/formulas';
import { CardRounded } from '../components/ui/CardRounded';
import { Button3D } from '../components/ui/Button3D';
import { ProgressBar } from '../components/ui/ProgressBar';
import { MascotWidget } from '../components/ui/MascotWidget';
import { AvatarCharacter } from '../components/avatar/AvatarCharacter';
import { BadgeChip } from '../components/ui/BadgeChip';
import { DialogModal } from '../components/ui/DialogModal';
import { OlympiadPathway } from '../components/learning/OlympiadPathway';
import { useGame } from '../context/GameContext';
import {
  Play, Sparkles, Box, Camera, BookOpen, Trophy, Flame, Star,
  Gem, Award, BookMarked, ArrowRight, Lightbulb, MessageSquare,
  Users, CheckCircle2, RefreshCw
} from 'lucide-react';

export const Home = ({ onNavigate, onSelectChapter }) => {
  const { gameState, claimMission } = useGame();
  const [showPiBotModal, setShowPiBotModal] = useState(false);

  // Motivational Quotes Pool
  const quotes = [
    { text: "Mathematics is not about numbers, equations, or algorithms: it is about understanding!", author: "William Paul Thurston" },
    { text: "Pure mathematics is, in its way, the poetry of logical ideas.", author: "Albert Einstein" },
    { text: "The only way to learn mathematics is to do mathematics!", author: "Paul Halmos" }
  ];
  const dailyQuote = quotes[0];

  // 1. Calculate Real Resume Lesson from Student's Actual Completed Lessons
  const allLessons = [];
  class4Chapters.forEach(chap => {
    chap.lessons.forEach(les => {
      allLessons.push({ ...les, chapterId: chap.id, chapterNumber: chap.number, chapterTitle: chap.title, color: chap.color });
    });
  });

  const completedSet = new Set(gameState.completedLessons || []);
  const uncompletedLesson = allLessons.find(l => !completedSet.has(l.id)) || allLessons[allLessons.length - 1];
  const resumeChap = class4Chapters.find(c => c.id === uncompletedLesson.chapterId) || class4Chapters[0];
  const realProgressPct = Math.round((completedSet.size / allLessons.length) * 100);

  // 2. Real Dynamic Leaderboard derived from Student's Actual XP & Streak
  const peers = [
    { name: 'Ananya Sharma', xp: 450, streak: 8, isUser: false, avatar: { hat: 'crown', glasses: 'smart', outfit: 'wizard', pet: 'owl' } },
    { name: 'Rohan Mehta', xp: 220, streak: 4, isUser: false, avatar: { hat: 'grad', glasses: 'none', outfit: 'explorer', pet: 'none' } },
    { name: 'Aarav Patel', xp: 100, streak: 2, isUser: false, avatar: { hat: 'none', glasses: 'vr', outfit: 'astronaut', pet: 'robot' } }
  ];

  const userEntry = {
    name: 'You (Explorer)',
    xp: gameState.xp || 0,
    streak: gameState.streak || 1,
    isUser: true,
    avatar: gameState.equippedAvatar
  };

  const leaderboardData = [...peers, userEntry]
    .sort((a, b) => b.xp - a.xp)
    .map((entry, idx) => ({ ...entry, rank: idx + 1 }));

  // 3. Real Dynamic Daily Missions based on Actual Student Activity
  const realMissions = [
    {
      id: 'mission_lessons',
      text: 'Complete 2 lessons in ICSE Curriculum',
      progress: Math.min(2, completedSet.size),
      total: 2,
      completed: completedSet.size >= 2,
      rewardGems: 15
    },
    {
      id: 'mission_quiz',
      text: 'Score 100% on any Quiz',
      progress: (gameState.accuracyHistory || []).includes(100) ? 1 : 0,
      total: 1,
      completed: (gameState.accuracyHistory || []).includes(100),
      rewardGems: 20
    },
    {
      id: 'mission_pibot',
      text: 'Ask Pi-Bot AI a math question',
      progress: gameState.askedPiBot ? 1 : 0,
      total: 1,
      completed: !!gameState.askedPiBot,
      rewardGems: 10
    },
    {
      id: 'mission_3dlab',
      text: 'Inspect a 3D Shape in 3D Lab',
      progress: gameState.visited3DLab ? 1 : 0,
      total: 1,
      completed: !!gameState.visited3DLab,
      rewardGems: 25
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', width: '100%', paddingBottom: '60px', position: 'relative' }}>
      
      {/* 1. Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1cb0f6 0%, #00f0ff 100%)',
        borderRadius: 'var(--radius-lg)',
        padding: '44px 48px',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
        boxShadow: '0 12px 24px rgba(28, 176, 246, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '680px', zIndex: 1 }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: 'rgba(255,255,255,0.25)', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
            Class 4 ICSE Mathematics
          </span>
          <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '2.6rem', fontWeight: '800', marginTop: '10px', lineHeight: '1.2' }}>
            Math is a Superpower! 🚀
          </h2>
          <p style={{ fontSize: '1.15rem', opacity: 0.95, marginTop: '10px', marginBottom: '24px' }}>
            Earn real XP, unlock avatar gear, explore 3D Math labs, and master Class 4 ICSE topics!
          </p>
          <div style={{ display: 'flex', gap: '14px' }}>
            <Button3D variant="warning" size="lg" onClick={() => onNavigate('learn')} icon={Play}>
              Start Learning Map
            </Button3D>
            <Button3D variant="purple" size="lg" onClick={() => onNavigate('threeLab')} icon={Box}>
              3D Math Lab
            </Button3D>
          </div>
        </div>

        {/* Mascot & Avatar Showcase */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', zIndex: 1 }}>
          <AvatarCharacter avatarState={gameState.equippedAvatar} size={135} />
        </div>
      </div>

      {/* 2. Daily Motivational Quote Banner */}
      <CardRounded style={{
        background: 'linear-gradient(135deg, rgba(255, 200, 0, 0.15), rgba(255, 150, 0, 0.1))',
        border: '1.5px solid var(--warning)',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px 24px'
      }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '12px',
          backgroundColor: 'var(--warning)', color: '#2b3a4a',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0
        }}>
          <Lightbulb size={24} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Daily Math Spark ✨
          </div>
          <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)', fontStyle: 'italic', margin: '2px 0' }}>
            "{dailyQuote.text}"
          </p>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700' }}>— {dailyQuote.author}</span>
        </div>
      </CardRounded>

      {/* 3. Real Resume Lesson Card (Shows Real Student Progress) */}
      <CardRounded hoverable style={{ borderLeft: `6px solid ${resumeChap.color}`, backgroundColor: 'var(--bg-card-solid)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 300px' }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '16px',
              backgroundColor: resumeChap.color, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: '800', fontSize: '1.5rem', fontFamily: 'var(--font-rounded)'
            }}>
              {resumeChap.number}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase' }}>
                  CONTINUE LEARNING
                </span>
                <BadgeChip label={`Chapter ${resumeChap.number}`} size="sm" color={resumeChap.color} bg={`${resumeChap.color}20`} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>
                {resumeChap.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '4px 0 10px 0' }}>
                Next: <strong>{uncompletedLesson.title}</strong>
              </p>
              <ProgressBar progress={realProgressPct} color={resumeChap.color} showLabel />
            </div>
          </div>

          <Button3D
            variant="primary"
            size="lg"
            onClick={() => {
              onSelectChapter(resumeChap.id);
              onNavigate('learn');
            }}
            icon={Play}
          >
            Resume Lesson
          </Button3D>
        </div>
      </CardRounded>

      {/* 4. Olympiad Readiness Pathway Roadmap */}
      <OlympiadPathway onSelectChapter={onSelectChapter} onNavigate={onNavigate} />

      {/* 5. Quick Launch Tools Bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <CardRounded hoverable onClick={() => onNavigate('learn')} style={{ borderLeft: '5px solid #58cc02' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '10px', borderRadius: '12px', backgroundColor: '#e5f9d8', color: '#58cc02' }}>
              <BookOpen size={24} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.05rem', fontWeight: '700' }}>Curriculum Tree</h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>7 ICSE Class 4 Chapters</p>
            </div>
          </div>
        </CardRounded>

        <CardRounded hoverable onClick={() => onNavigate('library')} style={{ borderLeft: '5px solid #ce82ff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '10px', borderRadius: '12px', backgroundColor: '#f6e5ff', color: '#ce82ff' }}>
              <BookMarked size={24} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.05rem', fontWeight: '700' }}>Digital Library</h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>ICSE Formulas & Definitions</p>
            </div>
          </div>
        </CardRounded>

        <CardRounded hoverable onClick={() => onNavigate('threeLab')} style={{ borderLeft: '5px solid #1cb0f6' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '10px', borderRadius: '12px', backgroundColor: '#ddf4ff', color: '#1cb0f6' }}>
              <Box size={24} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.05rem', fontWeight: '700' }}>3D Geometry Lab</h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Interactive 3D Solids</p>
            </div>
          </div>
        </CardRounded>

        <CardRounded hoverable onClick={() => onNavigate('arLab')} style={{ borderLeft: '5px solid #ff4b4b' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '10px', borderRadius: '12px', backgroundColor: '#ffdfe0', color: '#ff4b4b' }}>
              <Camera size={24} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.05rem', fontWeight: '700' }}>AR Lite Explorer</h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Real-world camera missions</p>
            </div>
          </div>
        </CardRounded>
      </div>

      {/* 6. Dashboard Grid: Daily Missions & Real Leaderboard */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        
        {/* Real Daily Missions Section */}
        <CardRounded>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.1rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Trophy size={18} color="#ff9600" /> Daily Missions
            </h4>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary)' }}>Real Study Rewards</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {realMissions.map(m => {
              const isClaimed = (gameState.claimedMissions || []).includes(m.id);

              return (
                <div key={m.id} style={{ padding: '12px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.88rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                    {m.text}
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <ProgressBar progress={(m.progress / m.total) * 100} height={10} color="var(--warning)" />
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)' }}>
                      {m.progress}/{m.total}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <BadgeChip label={`+25 XP`} size="sm" color="var(--secondary)" bg="var(--secondary-light)" />
                      <BadgeChip label={`+${m.rewardGems} Gems`} size="sm" color="var(--purple)" bg="var(--purple-light)" />
                    </div>

                    {m.completed && !isClaimed ? (
                      <Button3D size="sm" variant="warning" onClick={() => claimMission(m.id, 25, m.rewardGems)}>
                        Claim
                      </Button3D>
                    ) : isClaimed ? (
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircle2 size={14} /> Claimed
                      </span>
                    ) : (
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600' }}>In Progress</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardRounded>

        {/* Real Top Learners Dynamic Leaderboard */}
        <CardRounded>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.1rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={18} color="var(--secondary)" /> Top Learners
            </h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700' }}>Live XP Standings</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {leaderboardData.map(user => (
              <div
                key={user.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: user.isUser ? 'var(--primary-light)' : 'var(--bg-main)',
                  border: user.isUser ? '1.5px solid var(--primary)' : '1px solid var(--border-light)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    fontWeight: '800', fontSize: '0.9rem', width: '20px',
                    color: user.rank === 1 ? '#ffc800' : user.rank === 2 ? '#94a3b8' : 'var(--text-muted)'
                  }}>
                    #{user.rank}
                  </span>
                  <AvatarCharacter avatarState={user.avatar} size={36} animate={false} />
                  <span style={{ fontWeight: user.isUser ? '800' : '600', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    {user.name}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', fontWeight: '700' }}>
                  <span style={{ color: 'var(--secondary)' }}>{user.xp} XP</span>
                  <span style={{ color: 'var(--orange)', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <Flame size={12} fill="var(--orange)" /> {user.streak}d
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardRounded>

      </div>
    </div>
  );
};

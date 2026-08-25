import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useLanguage } from '../context/LanguageContext';
import { mathLabRegistry, getLabsForClass } from '../data/mathLabRegistry';
import { LabActivityCard } from '../components/lab/LabActivityCard';
import { LabWorkspace } from '../components/lab/LabWorkspace';
import { HierarchicalSitemapTree } from '../components/mathsIsFun/HierarchicalSitemapTree';
import { InteractiveTopicLabEngine } from '../components/mathsIsFun/InteractiveTopicLabEngine';
import { InteractiveCalculatorsSuite } from '../components/mathsIsFun/InteractiveCalculatorsSuite';
import { MathGamesSuite } from '../components/mathsIsFun/MathGamesSuite';
import { WorksheetGenerator } from '../components/mathsIsFun/WorksheetGenerator';
import { CardRounded } from '../components/ui/CardRounded';
import { Button3D } from '../components/ui/Button3D';
import { BadgeChip } from '../components/ui/BadgeChip';
import { soundFx } from '../utils/audioSynth';
import { triggerConfetti } from '../utils/confetti';
import {
  Box, Compass, PieChart, Move, Sparkles, Search,
  Trophy, CheckCircle2, Award, RefreshCw, Activity, TrendingUp,
  BarChart3, Scale, Clock, Dices, Layers, Grid, Target, BookOpen,
  Calculator, Gamepad2, ShieldCheck, ListTree, Triangle, Zap, HelpCircle, Hash,
  FileText, ArrowLeft
} from 'lucide-react';

export const ThreeLab = () => {
  const { gameState, changeClass, addXP, addGems, markVisited3DLab } = useGame();
  const { t } = useLanguage();
  
  // Current active class in the lab (default to gameState.selectedClass or class4)
  const currentClassId = gameState.selectedClass || 'class4';
  const currentClassNum = parseInt(currentClassId.replace(/\D/g, ''), 10) || 4;

  // Active Main View Tab inside 3D Interactive Lab
  const [labSection, setLabSection] = useState('labs'); // labs, sitemap_topics, calculators, games, worksheets
  const [activeActivity, setActiveActivity] = useState(null);
  const [selectedSubtopicId, setSelectedSubtopicId] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  useEffect(() => {
    markVisited3DLab();
  }, []);

  // Fetch labs for currently active class
  const classLabs = getLabsForClass(currentClassNum);

  // Extract unique themes for current class
  const availableThemes = ['all', ...Array.from(new Set(classLabs.map(l => l.theme)))];

  // Filter activities
  const filteredLabs = classLabs.filter(lab => {
    const matchesTheme = selectedTheme === 'all' || lab.theme === selectedTheme;
    const matchesDifficulty = difficultyFilter === 'all' || lab.difficulty.toLowerCase() === difficultyFilter.toLowerCase();
    const matchesSearch = searchQuery === '' ||
      lab.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.objective.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTheme && matchesDifficulty && matchesSearch;
  });

  const handleSelectClass = (cNum) => {
    soundFx.playClick();
    changeClass(`class${cNum}`);
    setSelectedTheme('all');
    setActiveActivity(null);
    setSelectedSubtopicId(null);
  };

  const handleStartLab = (activity) => {
    soundFx.playClick();
    setActiveActivity(activity);
  };

  const handleBackToGrid = () => {
    soundFx.playClick();
    setActiveActivity(null);
  };

  // If a specific 3D experiment workspace is active
  if (activeActivity) {
    return (
      <LabWorkspace
        activity={activeActivity}
        onBack={handleBackToGrid}
      />
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '100%', paddingBottom: '60px' }}>
      
      {/* Header Banner */}
      <CardRounded style={{
        background: 'linear-gradient(135deg, #1cb0f6 0%, #4f46e5 50%, #7c3aed 100%)',
        color: '#ffffff',
        padding: '32px',
        boxShadow: '0 12px 28px rgba(79, 70, 229, 0.35)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: 'rgba(255,255,255,0.25)', padding: '4px 14px', borderRadius: 'var(--radius-full)' }}>
                {t('lab_title')} • {t('class_label', { classNum: currentClassNum })}
              </span>
              <span style={{ fontSize: '0.82rem', fontWeight: '800', backgroundColor: '#f0fdf4', color: '#166534', padding: '4px 12px', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={16} /> 100% Interactive & Feature-Rich
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '2.4rem', fontWeight: '800', marginTop: '6px', lineHeight: '1.2' }}>
              {t('lab_title')} 🧪
            </h2>
            <p style={{ fontSize: '1.05rem', opacity: 0.95, marginTop: '8px', maxWidth: '750px' }}>
              {t('lab_subtitle')} Complete with 3D manipulatives, concept guides, calculators, games, and worksheets!
            </p>
          </div>
        </div>
      </CardRounded>

      {/* Class Selector Bar: Classes 1 to 10 */}
      <div style={{ background: '#ffffff', padding: '16px 20px', borderRadius: '16px', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', marginBottom: '10px' }}>
          {t('select_language')}:
        </div>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(cNum => {
            const isActive = currentClassNum === cNum;
            return (
              <button
                key={cNum}
                onClick={() => handleSelectClass(cNum)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '12px',
                  border: 'none',
                  background: isActive ? 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' : '#f8fafc',
                  color: isActive ? '#ffffff' : '#334155',
                  fontWeight: '800',
                  fontFamily: 'var(--font-rounded)',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? '0 4px 14px rgba(79, 70, 229, 0.4)' : 'none',
                  border: isActive ? 'none' : '1px solid #e2e8f0',
                  transition: 'all 0.15s ease'
                }}
              >
                {t('class_label', { classNum: cNum })}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3D Lab Experience Mode Switcher (Labs, Topic Guides & Sitemap, Calculators & Grapher, Games, Worksheets) */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
        {[
          { id: 'labs', label: '🧪 3D Interactive Labs', icon: Box },
          { id: 'sitemap_topics', label: '📚 Topic Guides & Sitemap', icon: BookOpen },
          { id: 'calculators', label: '🧮 Calculators & Grapher', icon: Calculator },
          { id: 'games', label: '🎮 Math Games & Puzzles', icon: Gamepad2 },
          { id: 'worksheets', label: '📄 Printable Worksheets', icon: FileText }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = labSection === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => {
                setLabSection(tab.id);
                setSelectedSubtopicId(null);
                soundFx.playClick();
              }}
              style={{
                padding: '12px 20px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: isActive ? '#4f46e5' : 'var(--bg-card-solid)',
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                fontWeight: '800',
                fontFamily: 'var(--font-rounded)',
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? '0 4px 12px rgba(79, 70, 229, 0.35)' : 'var(--shadow-sm)',
                transition: 'all 0.2s ease'
              }}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* VIEW 1: 3D INTERACTIVE EXPERIMENTS GRID */}
      {labSection === 'labs' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Filters & Search Toolbar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
              <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder={t('search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  borderRadius: '12px',
                  border: '1.5px solid #cbd5e1',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  outline: 'none',
                  background: '#ffffff'
                }}
              />
            </div>

            {/* Theme Filters */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {availableThemes.map((th, idx) => (
                <button
                  key={idx}
                  onClick={() => { setSelectedTheme(th); soundFx.playClick(); }}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    background: selectedTheme === th ? '#4f46e5' : '#f1f5f9',
                    color: selectedTheme === th ? '#ffffff' : '#475569',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {th === 'all' ? t('library_all') : th.replace(/^Theme \d+:\s*/, '')}
                </button>
              ))}
            </div>
          </div>

          {/* Lab Activities Grid */}
          {filteredLabs.length === 0 ? (
            <CardRounded style={{ padding: '60px 20px', textAlign: 'center', color: '#64748b' }}>
              <h3>No lab experiments found matching your search.</h3>
            </CardRounded>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '20px'
            }}>
              {filteredLabs.map(activity => {
                const completedKey = `lab_${activity.id}`;
                const isCompleted = (gameState.completedLessons || []).includes(completedKey);

                return (
                  <LabActivityCard
                    key={activity.id}
                    activity={activity}
                    onStart={handleStartLab}
                    isCompleted={isCompleted}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: SITEMAP & DEEP TOPIC GUIDES */}
      {labSection === 'sitemap_topics' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {selectedSubtopicId ? (
            <div>
              <Button3D
                variant="outline"
                size="sm"
                onClick={() => setSelectedSubtopicId(null)}
                icon={ArrowLeft}
                style={{ marginBottom: '16px' }}
              >
                Back to Curriculum Sitemap
              </Button3D>
              <InteractiveTopicLabEngine
                subtopicId={selectedSubtopicId}
                onSelectTopic={(id) => setSelectedSubtopicId(id)}
              />
            </div>
          ) : (
            <HierarchicalSitemapTree
              selectedClassNum={currentClassNum}
              onSelectSubtopic={(id) => setSelectedSubtopicId(id)}
              activeSubtopicId={selectedSubtopicId}
            />
          )}
        </div>
      )}

      {/* VIEW 3: INTERACTIVE CALCULATORS & GRAPHING SUITE */}
      {labSection === 'calculators' && (
        <InteractiveCalculatorsSuite />
      )}

      {/* VIEW 4: MATH GAMES & LOGIC PUZZLES ARCADE */}
      {labSection === 'games' && (
        <MathGamesSuite />
      )}

      {/* VIEW 5: PRINTABLE WORKSHEETS GENERATOR */}
      {labSection === 'worksheets' && (
        <WorksheetGenerator initialClassNum={currentClassNum} selectedClassNum={currentClassNum} />
      )}

    </div>
  );
};



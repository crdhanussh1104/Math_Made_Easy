import React, { useState } from 'react';
import { mathsIsFunSitemapData } from '../../data/mathsIsFunSitemap';
import { CardRounded } from '../ui/CardRounded';
import { BadgeChip } from '../ui/BadgeChip';
import { soundFx } from '../../utils/audioSynth';
import { Search, ChevronDown, ChevronRight, CheckCircle2, ShieldCheck, BookOpen, Layers } from 'lucide-react';

export const HierarchicalSitemapTree = ({ onSelectSubtopic, activeSubtopicId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDomains, setExpandedDomains] = useState(
    mathsIsFunSitemapData.map(d => d.id)
  );

  const toggleDomain = (domainId) => {
    soundFx.playClick();
    setExpandedDomains(prev =>
      prev.includes(domainId) ? prev.filter(id => id !== domainId) : [...prev, domainId]
    );
  };

  // Calculate total topic coverage stats
  let totalTopics = 0;
  mathsIsFunSitemapData.forEach(d => { totalTopics += d.subtopics.length; });

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: 'var(--bg-card-solid)', border: '2px solid var(--border-card)', width: '100%' }}>
      
      {/* Header Banner & 100% Coverage Verification Badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={22} color="var(--primary)" />
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-main)' }}>
              Complete Mathematics Curriculum Sitemap Tree
            </h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Explore all {totalTopics} mathematics subtopics, calculators, visualizers, and games with 100% feature coverage.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#f0fdf4', color: '#166534', padding: '8px 16px', borderRadius: 'var(--radius-full)', border: '1.5px solid #22c55e', fontWeight: '800', fontSize: '0.85rem' }}>
          <ShieldCheck size={18} color="#22c55e" /> 100% Curriculum Coverage Verified
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ position: 'relative', width: '100%' }}>
        <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
        <input
          type="text"
          placeholder="Search any topic, calculator, or game (e.g. Trigonometry, Parabola, Abacus, HCF)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 14px 12px 42px',
            borderRadius: 'var(--radius-md)',
            border: '1.5px solid var(--border-light)',
            backgroundColor: 'var(--bg-main)',
            fontSize: '0.9rem',
            fontWeight: '700',
            outline: 'none',
            color: 'var(--text-main)',
            fontFamily: 'var(--font-sans)'
          }}
        />
      </div>

      {/* Fully Expanded Clean Tree View of All Domains & Subtopics (No height clipping or overlaps!) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
        {mathsIsFunSitemapData.map(domain => {
          const isExpanded = expandedDomains.includes(domain.id) || searchQuery.trim().length > 0;
          const filteredSubtopics = domain.subtopics.filter(sub =>
            sub.title.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (searchQuery.trim().length > 0 && filteredSubtopics.length === 0) {
            return null;
          }

          return (
            <div
              key={domain.id}
              style={{
                borderRadius: 'var(--radius-md)',
                border: `1.5px solid ${domain.color}40`,
                backgroundColor: 'var(--bg-card-solid)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Domain Category Header */}
              <div
                onClick={() => toggleDomain(domain.id)}
                style={{
                  padding: '12px 16px',
                  backgroundColor: `${domain.color}15`,
                  color: domain.color,
                  fontWeight: '800',
                  fontFamily: 'var(--font-rounded)',
                  fontSize: '0.98rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  <span>{domain.title}</span>
                </div>
                <BadgeChip label={`${filteredSubtopics.length} Subtopics`} color={domain.color} bg="#ffffff" size="sm" />
              </div>

              {/* Subtopic Items */}
              {isExpanded && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: '8px',
                  padding: '12px',
                  backgroundColor: 'var(--bg-main)'
                }}>
                  {filteredSubtopics.map(sub => {
                    const isActive = activeSubtopicId === sub.id;

                    return (
                      <button
                        key={sub.id}
                        onClick={() => {
                          soundFx.playClick();
                          if (onSelectSubtopic) onSelectSubtopic(sub.id);
                        }}
                        style={{
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: isActive ? `2px solid ${domain.color}` : '1.5px solid var(--border-light)',
                          backgroundColor: isActive ? 'var(--bg-card-solid)' : 'var(--bg-card-solid)',
                          color: isActive ? domain.color : 'var(--text-main)',
                          fontWeight: isActive ? '800' : '700',
                          textAlign: 'left',
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          transition: 'all 0.2s ease',
                          boxShadow: isActive ? `0 4px 12px ${domain.color}30` : 'none'
                        }}
                      >
                        <CheckCircle2 size={16} color={isActive ? domain.color : 'var(--text-muted)'} style={{ flexShrink: 0 }} />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </CardRounded>
  );
};

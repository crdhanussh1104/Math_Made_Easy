import React, { useState, useMemo } from 'react';
import { getClassFormulaCards } from '../../data/classFormulaCards';
import { FormulaCard3D } from './FormulaCard3D';
import { CardRounded } from '../ui/CardRounded';
import { Search, BookOpen } from 'lucide-react';
import { useGame } from '../../context/GameContext';

export const FormulaBook = ({ classId }) => {
  const { gameState } = useGame();
  const activeClass = classId || gameState.selectedClass || 'class4';
  const classNum = typeof activeClass === 'string' ? parseInt(activeClass.replace(/\D/g, ''), 10) : activeClass;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Load ONLY the formula cards for the active class
  const classCards = useMemo(() => {
    return getClassFormulaCards(classNum);
  }, [classNum]);

  // Derive unique categories from active class cards
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(classCards.map(c => c.category).filter(Boolean))];
    return cats;
  }, [classCards]);

  const filteredFormulas = useMemo(() => {
    return classCards.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (item.explanation && item.explanation.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [classCards, selectedCategory, searchTerm]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Top Header Card */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <span style={{ fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--primary)', background: 'var(--primary-light)', padding: '4px 10px', borderRadius: '8px' }}>
            Class {classNum} ICSE Formula & Rule Book
          </span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1e293b', marginTop: '6px' }}>
            Interactive Mathematical Reference
          </h3>
        </div>
      </div>

      {/* Search & Category Filter */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Search Bar */}
        <div style={{ position: 'relative', flex: '1 1 260px' }}>
          <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder={`Search Class ${classNum} formulas, properties, rules...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 14px 12px 42px',
              borderRadius: 'var(--radius-md)',
              border: '1.5px solid var(--border-light)',
              backgroundColor: 'var(--bg-card-solid)',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: selectedCategory === cat ? 'var(--primary)' : 'var(--bg-card-solid)',
                color: selectedCategory === cat ? '#fff' : 'var(--text-muted)',
                fontWeight: '700',
                fontFamily: 'var(--font-rounded)',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Flip Formula Cards Grid */}
      {filteredFormulas.length === 0 ? (
        <CardRounded style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
          <BookOpen size={36} style={{ margin: '0 auto 10px auto', color: '#94a3b8' }} />
          <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#334155' }}>No Formula Cards Found</h4>
          <p style={{ fontSize: '0.9rem' }}>Try adjusting your search query or selected category.</p>
        </CardRounded>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {filteredFormulas.map(item => (
            <FormulaCard3D key={item.id} formulaData={item} />
          ))}
        </div>
      )}
    </div>
  );
};


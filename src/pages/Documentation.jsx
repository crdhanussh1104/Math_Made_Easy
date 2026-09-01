import React, { useState } from 'react';
import { documentationTopics } from '../data/documentationData';
import { BookOpen, ExternalLink, Search, FileText } from 'lucide-react';
import { CardRounded } from '../components/ui/CardRounded';

export const Documentation = () => {
  const classes = Object.keys(documentationTopics);
  const [selectedClass, setSelectedClass] = useState('Class 10');
  const [searchQuery, setSearchQuery] = useState('');

  const activeSubtopics = documentationTopics[selectedClass] || [];

  const filteredSubtopics = activeSubtopics.filter(item => {
    const q = searchQuery.toLowerCase();
    if (!q) return true;
    const matchSubtopic = item.subtopic.toLowerCase().includes(q);
    const matchDesc = item.description.toLowerCase().includes(q);
    const matchChapter = item.chapters.some(ch => ch.title.toLowerCase().includes(q));
    return matchSubtopic || matchDesc || matchChapter;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', width: '100%', maxWidth: '1100px', margin: '0 auto', paddingBottom: '60px' }}>
      
      {/* 1. Header Banner */}
      <CardRounded style={{
        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        color: '#ffffff',
        padding: '32px 36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxShadow: '0 10px 25px rgba(79, 70, 229, 0.25)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '14px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <FileText size={28} color="#ffffff" />
          </div>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: 'rgba(255,255,255,0.25)', padding: '4px 12px', borderRadius: '20px' }}>
              ICSE Curriculum & Reference
            </span>
            <h1 style={{ fontFamily: 'var(--font-rounded)', fontSize: '2.1rem', fontWeight: '800', margin: '6px 0 0 0' }}>
              Mathematics Documentation
            </h1>
          </div>
        </div>
        <p style={{ fontSize: '1rem', opacity: 0.92, maxWidth: '800px', margin: 0, lineHeight: 1.6 }}>
          Explore organized subtopics for ICSE Mathematics across Classes 6 to 10. For every subtopic, direct hyperlinks to the corresponding official ICSE textbook chapter PDFs are provided below.
        </p>

        {/* Search Input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: '12px',
          padding: '10px 16px',
          marginTop: '8px'
        }}>
          <Search size={20} color="#ffffff" />
          <input
            type="text"
            placeholder="Search subtopics or chapters (e.g. GST, Trigonometry, Quadratic Equations)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              border: 'none',
              background: 'transparent',
              color: '#ffffff',
              fontSize: '0.98rem',
              fontWeight: '600',
              outline: 'none'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', fontWeight: '800' }}
            >
              ✕
            </button>
          )}
        </div>
      </CardRounded>

      {/* 2. Class Filter Tabs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        {classes.map(cls => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            style={{
              padding: '10px 22px',
              borderRadius: '25px',
              border: 'none',
              backgroundColor: selectedClass === cls ? 'var(--primary)' : 'var(--bg-card-solid)',
              color: selectedClass === cls ? '#ffffff' : 'var(--text-main)',
              fontWeight: '800',
              fontFamily: 'var(--font-rounded)',
              fontSize: '0.95rem',
              cursor: 'pointer',
              boxShadow: selectedClass === cls ? '0 4px 12px rgba(79, 70, 229, 0.3)' : 'var(--shadow-sm)',
              transition: 'all 0.2s ease'
            }}
          >
            {cls} ICSE
          </button>
        ))}
      </div>

      {/* 3. Subtopics List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filteredSubtopics.length > 0 ? (
          filteredSubtopics.map((item, idx) => (
            <CardRounded
              key={idx}
              style={{
                padding: '24px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderLeft: '5px solid var(--primary)',
                backgroundColor: 'var(--bg-card-solid)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    color: 'var(--primary)',
                    backgroundColor: 'rgba(79, 70, 229, 0.1)',
                    padding: '3px 10px',
                    borderRadius: '12px'
                  }}>
                    Subtopic #{idx + 1}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-main)', margin: 0 }}>
                    {item.subtopic}
                  </h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', margin: 0, lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>

              {/* Hyperlinked ICSE Chapters List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)' }}>
                  📖 ICSE Textbook Chapters (Click to View PDF):
                </span>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '12px' }}>
                  {item.chapters.map((ch, cIdx) => (
                    <a
                      key={cIdx}
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1.5px solid var(--border-light)',
                        backgroundColor: 'var(--bg-main)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--primary)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-light)';
                        e.currentTarget.style.transform = 'none';
                      }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <BookOpen size={18} color="var(--primary)" />
                          <span style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--text-main)', fontFamily: 'var(--font-rounded)' }}>
                            {ch.title}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)' }}>
                          <ExternalLink size={16} />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </CardRounded>
          ))
        ) : (
          <CardRounded style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
            <h3>No subtopics match "{searchQuery}" in {selectedClass}</h3>
            <p>Try searching for a different keyword or select another class above.</p>
          </CardRounded>
        )}
      </div>

    </div>
  );
};

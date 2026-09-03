import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { BadgeChip } from '../ui/BadgeChip';
import { getTextbookPdfUrl, getLessonPdfUrl, getClassTextbookChapters } from '../../data/textbookPdfMap';
import {
  BookOpen, ExternalLink, ChevronDown, ChevronUp, FileText, Search, Eye, EyeOff, Layers
} from 'lucide-react';

export const TextbookReader = ({ chapter, activeLesson, classId, t }) => {
  // Check if this class has a complete multi-chapter textbook directory
  const classChapters = getClassTextbookChapters(classId);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedChapterNumber, setExpandedChapterNumber] = useState(1);
  const [previewChapterNumber, setPreviewChapterNumber] = useState(null);

  // Fallback state for single-chapter lessons view
  const [expandedLessonId, setExpandedLessonId] = useState(activeLesson?.id || chapter?.lessons?.[0]?.id || null);

  const chapterNum = chapter?.number || 1;
  const pdfUrl = getTextbookPdfUrl(classId, chapterNum);

  // If this class has the complete 30-chapter textbook list (e.g. Class 6)
  if (classChapters && classChapters.length > 0) {
    const categories = ['All', ...new Set(classChapters.map(c => c.category).filter(Boolean))];

    const filteredChapters = classChapters.filter(ch => {
      const matchesCat = selectedCategory === 'All' || ch.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQ = !q ||
        ch.title.toLowerCase().includes(q) ||
        String(ch.chapterNumber).includes(q) ||
        (ch.category && ch.category.toLowerCase().includes(q));
      return matchesCat && matchesQ;
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* 1. Header Card */}
        <CardRounded style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              backgroundColor: '#4f46e515',
              color: '#4f46e5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.15)'
            }}>
              <BookOpen size={26} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase' }}>
                  Class 6 • ICSE Board Curriculum
                </span>
                <BadgeChip label="30 Chapters Available" color="#0284c7" bg="#e0f2fe" size="sm" />
                <BadgeChip label="Official PDF Links" color="#16a34a" bg="#dcfce7" size="sm" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)', margin: '4px 0 0 0' }}>
                ICSE Class 6 Mathematics Textbook
              </h3>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>
              Showing {filteredChapters.length} of {classChapters.length} Chapters
            </span>
          </div>
        </CardRounded>

        {/* 2. Search & Filter Bar */}
        <CardRounded style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 16px',
            backgroundColor: 'var(--bg-main)',
            borderRadius: 'var(--radius-full)',
            border: '1.5px solid var(--border-light)'
          }}>
            <Search size={18} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search chapters by name or number (e.g. Integers, Fractions, Angles, Sets, Venn Diagrams)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
                width: '100%',
                fontSize: '0.92rem',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-rounded)',
                fontWeight: '600'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: 'var(--text-muted)'
                }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            {categories.map(cat => {
              const count = cat === 'All'
                ? classChapters.length
                : classChapters.filter(c => c.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    border: isSelected ? '1.5px solid #4f46e5' : '1.5px solid var(--border-light)',
                    backgroundColor: isSelected ? '#4f46e5' : 'var(--bg-card-solid)',
                    color: isSelected ? '#ffffff' : 'var(--text-main)',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-rounded)',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{cat}</span>
                  <span style={{
                    fontSize: '0.72rem',
                    padding: '2px 6px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: isSelected ? 'rgba(255,255,255,0.25)' : 'var(--bg-main)',
                    color: isSelected ? '#ffffff' : 'var(--text-muted)'
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </CardRounded>

        {/* 3. Complete 30 Chapters List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredChapters.map((ch) => {
            const isExpanded = expandedChapterNumber === ch.chapterNumber;
            const isPreviewing = previewChapterNumber === ch.chapterNumber;

            return (
              <div
                key={ch.chapterNumber}
                style={{
                  borderRadius: 'var(--radius-lg)',
                  border: `2px solid ${isExpanded ? '#4f46e5' : 'var(--border-light)'}`,
                  boxShadow: isExpanded ? '0 6px 16px rgba(79, 70, 229, 0.12)' : 'var(--shadow-sm)',
                  backgroundColor: 'var(--bg-card-solid)',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Chapter Row Header */}
                <div
                  onClick={() => setExpandedChapterNumber(isExpanded ? null : ch.chapterNumber)}
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    backgroundColor: isExpanded ? 'rgba(79, 70, 229, 0.04)' : 'transparent',
                    userSelect: 'none',
                    transition: 'background-color 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: isExpanded ? '#4f46e5' : 'var(--bg-main)',
                      color: isExpanded ? '#ffffff' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      fontSize: '0.95rem'
                    }}>
                      {ch.chapterNumber}
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <h4 style={{
                          fontFamily: 'var(--font-rounded)',
                          fontSize: '1.05rem',
                          fontWeight: '800',
                          color: isExpanded ? '#4f46e5' : 'var(--text-main)',
                          margin: 0
                        }}>
                          Chapter {ch.chapterNumber}: {ch.title}
                        </h4>
                        {ch.category && (
                          <span style={{
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-full)',
                            backgroundColor: 'rgba(79, 70, 229, 0.08)',
                            color: '#4f46e5'
                          }}>
                            {ch.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Chapter Hyperlink Button */}
                    <a
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: '#4f46e515',
                        color: '#4f46e5',
                        textDecoration: 'none',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-rounded)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <ExternalLink size={14} /> Chapter Hyperlink
                    </a>

                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: '800',
                      color: 'var(--secondary)',
                      backgroundColor: 'var(--secondary-light)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)'
                    }}>
                      +40 XP
                    </span>

                    {isExpanded ? (
                      <ChevronUp size={20} color="#4f46e5" />
                    ) : (
                      <ChevronDown size={20} color="var(--text-muted)" />
                    )}
                  </div>
                </div>

                {/* Chapter Expanded Details & PDF Reader */}
                {isExpanded && (
                  <div style={{
                    borderTop: '1px solid var(--border-light)',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    backgroundColor: 'var(--bg-main)'
                  }}>
                    <div style={{
                      padding: '18px 24px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-card-solid)',
                      border: '1.5px solid var(--border-light)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <FileText size={20} color="#4f46e5" />
                          <span style={{ fontSize: '1.05rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: 'var(--text-main)' }}>
                            Chapter {ch.chapterNumber}: {ch.title}
                          </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          {/* Toggle In-App Preview */}
                          <button
                            onClick={() => setPreviewChapterNumber(isPreviewing ? null : ch.chapterNumber)}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '8px 16px',
                              borderRadius: 'var(--radius-full)',
                              border: '1.5px solid #4f46e5',
                              backgroundColor: isPreviewing ? '#4f46e515' : 'transparent',
                              color: '#4f46e5',
                              fontWeight: '700',
                              fontSize: '0.85rem',
                              cursor: 'pointer',
                              fontFamily: 'var(--font-rounded)'
                            }}
                          >
                            {isPreviewing ? <EyeOff size={16} /> : <Eye size={16} />}
                            <span>{isPreviewing ? 'Hide In-App Reader' : 'Read in App'}</span>
                          </button>

                          {/* Primary Open Chapter Button */}
                          <a
                            href={ch.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '8px 18px',
                              borderRadius: 'var(--radius-full)',
                              backgroundColor: '#4f46e5',
                              color: '#ffffff',
                              textDecoration: 'none',
                              fontWeight: '800',
                              fontSize: '0.9rem',
                              fontFamily: 'var(--font-rounded)',
                              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)'
                            }}
                          >
                            <BookOpen size={16} />
                            <span>Open Chapter PDF</span>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>

                      <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                        Access the ICSE Board official textbook chapter resource for <strong>Chapter {ch.chapterNumber}: {ch.title}</strong> using the direct chapter hyperlink below:
                      </p>

                      {/* In-App PDF Viewer (when toggled) */}
                      {isPreviewing && (
                        <div style={{
                          marginTop: '10px',
                          borderRadius: 'var(--radius-md)',
                          overflow: 'hidden',
                          border: '2px solid var(--border-light)',
                          backgroundColor: '#1e293b'
                        }}>
                          <div style={{
                            padding: '8px 16px',
                            backgroundColor: '#0f172a',
                            color: '#94a3b8',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '0.82rem'
                          }}>
                            <span>📄 Reading: Chapter {ch.chapterNumber} - {ch.title}</span>
                            <a
                              href={ch.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '700' }}
                            >
                              Open in Full Tab ↗
                            </a>
                          </div>
                          <iframe
                            src={ch.url}
                            title={`Chapter ${ch.chapterNumber}: ${ch.title}`}
                            style={{
                              width: '100%',
                              height: '580px',
                              border: 'none',
                              display: 'block'
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    );
  }

  // Fallback view for classes without a full chapter list
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* 1. Chapter General Header */}
      <CardRounded style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            backgroundColor: `${chapter?.color || '#4f46e5'}20`,
            color: chapter?.color || '#4f46e5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <BookOpen size={22} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '800', color: chapter?.color || '#4f46e5', textTransform: 'uppercase' }}>
                Class {classId} • Chapter {chapterNum}
              </span>
              <BadgeChip label="ICSE Board Curriculum" color="#0284c7" bg="#e0f2fe" size="sm" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', margin: '4px 0 0 0' }}>
              {chapter?.title}
            </h3>
          </div>
        </div>
      </CardRounded>

      {/* 2. Subtopics Accordion & Hyperlink List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {(chapter?.lessons || []).map((lesson, idx) => {
          const isExpanded = expandedLessonId === lesson.id;
          const lessonPdfUrl = getLessonPdfUrl(classId, lesson.id) || pdfUrl;
          
          return (
            <div
              key={lesson.id}
              style={{
                borderRadius: 'var(--radius-lg)',
                border: `2px solid ${isExpanded ? (chapter?.color || '#4f46e5') : 'var(--border-light)'}`,
                boxShadow: isExpanded ? `0 6px 16px ${(chapter?.color || '#4f46e5')}15` : 'var(--shadow-sm)',
                backgroundColor: 'var(--bg-card-solid)',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              <div
                onClick={() => setExpandedLessonId(isExpanded ? null : lesson.id)}
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  backgroundColor: isExpanded ? `${chapter?.color || '#4f46e5'}05` : 'transparent',
                  userSelect: 'none',
                  transition: 'background-color 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: isExpanded ? `${chapter?.color || '#4f46e5'}20` : 'var(--bg-main)',
                    color: isExpanded ? (chapter?.color || '#4f46e5') : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '0.9rem'
                  }}>
                    {idx + 1}
                  </div>
                  <div>
                    <h4 style={{
                      fontFamily: 'var(--font-rounded)',
                      fontSize: '1.05rem',
                      fontWeight: '800',
                      color: isExpanded ? (chapter?.color || '#4f46e5') : 'var(--text-main)',
                      margin: 0
                    }}>
                      {lesson.title}
                    </h4>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {lessonPdfUrl && (
                    <a
                      href={lessonPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: `${chapter?.color || '#4f46e5'}15`,
                        color: chapter?.color || '#4f46e5',
                        textDecoration: 'none',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-rounded)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <ExternalLink size={14} /> Chapter Hyperlink
                    </a>
                  )}

                  {lesson.xp && (
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: '800',
                      color: 'var(--secondary)',
                      backgroundColor: 'var(--secondary-light)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)'
                    }}>
                      +{lesson.xp} XP
                    </span>
                  )}
                  {isExpanded ? (
                    <ChevronUp size={20} color={chapter?.color || '#4f46e5'} />
                  ) : (
                    <ChevronDown size={20} color="var(--text-muted)" />
                  )}
                </div>
              </div>

              {isExpanded && (
                <div style={{
                  borderTop: '1px solid var(--border-light)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  backgroundColor: 'var(--bg-main)'
                }}>
                  <div style={{
                    padding: '18px 24px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-card-solid)',
                    border: '1.5px solid var(--border-light)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FileText size={20} color={chapter?.color || '#4f46e5'} />
                      <span style={{ fontSize: '1rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: 'var(--text-main)' }}>
                        {lesson.title}
                      </span>
                    </div>

                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      Access the ICSE Board official textbook chapter resource for <strong>{lesson.title}</strong> using the direct chapter hyperlink below:
                    </p>

                    {lessonPdfUrl ? (
                      <div style={{ marginTop: '6px' }}>
                        <a
                          href={lessonPdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '12px 22px',
                            borderRadius: 'var(--radius-full)',
                            backgroundColor: chapter?.color || '#4f46e5',
                            color: '#ffffff',
                            textDecoration: 'none',
                            fontWeight: '800',
                            fontSize: '0.95rem',
                            fontFamily: 'var(--font-rounded)',
                            boxShadow: `0 4px 12px ${(chapter?.color || '#4f46e5')}30`,
                            transition: 'transform 0.2s ease, opacity 0.2s ease'
                          }}
                        >
                          <BookOpen size={18} />
                          <span>Open Chapter PDF ({lesson.title})</span>
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    ) : (
                      <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', italic: 'true' }}>
                        Hyperlink for this subtopic chapter will be available shortly.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};


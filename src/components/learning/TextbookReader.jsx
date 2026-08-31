import React, { useState, useEffect } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { BadgeChip } from '../ui/BadgeChip';
import { getTextbookPdfUrl, getLessonPdfUrl } from '../../data/textbookPdfMap';
import {
  BookOpen, Download, ExternalLink, Maximize2, Minimize2,
  ChevronDown, ChevronUp
} from 'lucide-react';

export const TextbookReader = ({ chapter, activeLesson, classId, t }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [expandedLessonId, setExpandedLessonId] = useState(activeLesson?.id || chapter?.lessons[0]?.id || null);
  const [pdfLoaded, setPdfLoaded] = useState(false);

  const chapterNum = chapter?.number || 1;
  const pdfUrl = getTextbookPdfUrl(classId, chapterNum);

  const toggleFullscreen = () => {
    setIsFullscreen(prev => !prev);
  };

  // Keep expanded lesson in sync with parent activeLesson changes
  useEffect(() => {
    if (activeLesson?.id) {
      setExpandedLessonId(activeLesson.id);
    }
  }, [activeLesson?.id]);

  // Reset loaded state whenever the PDF URL changes (chapter switch)
  useEffect(() => {
    setPdfLoaded(false);
  }, [pdfUrl, expandedLessonId]);

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
              <BadgeChip label="Official NCERT / CBSE" color="#0284c7" bg="#e0f2fe" size="sm" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', margin: '4px 0 0 0' }}>
              {chapter?.title}
            </h3>
          </div>
        </div>
      </CardRounded>

      {/* 2. Subtopics Accordion List */}
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
              {/* Subtopic Header Row */}
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

              {/* Subtopic Expanded PDF Area */}
              {isExpanded && (
                <div style={{
                  borderTop: '1px solid var(--border-light)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  backgroundColor: 'var(--bg-main)'
                }}>
                  {/* Actions Toolbar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>
                      Viewing textbook chapter for: <strong>{lesson.title}</strong>
                    </span>

                    {lessonPdfUrl && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <a
                          href={lessonPdfUrl}
                          download
                          style={{ textDecoration: 'none' }}
                        >
                          <button
                            type="button"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '8px 14px',
                              borderRadius: 'var(--radius-full)',
                              border: '1.5px solid var(--border-light)',
                              backgroundColor: 'var(--bg-card-solid)',
                              color: 'var(--text-main)',
                              fontSize: '0.85rem',
                              fontWeight: '700',
                              fontFamily: 'var(--font-rounded)',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <Download size={15} /> Download PDF
                          </button>
                        </a>

                        <a
                          href={lessonPdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none' }}
                        >
                          <button
                            type="button"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '8px 14px',
                              borderRadius: 'var(--radius-full)',
                              border: '1.5px solid var(--border-light)',
                              backgroundColor: 'var(--bg-card-solid)',
                              color: 'var(--text-main)',
                              fontSize: '0.85rem',
                              fontWeight: '700',
                              fontFamily: 'var(--font-rounded)',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <ExternalLink size={15} /> Open in New Tab
                          </button>
                        </a>

                        <button
                          type="button"
                          onClick={toggleFullscreen}
                          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '36px',
                            height: '36px',
                            borderRadius: 'var(--radius-full)',
                            border: '1.5px solid var(--border-light)',
                            backgroundColor: isFullscreen ? (chapter?.color || '#4f46e5') : 'var(--bg-card-solid)',
                            color: isFullscreen ? '#ffffff' : 'var(--text-main)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* PDF Iframe or fallback */}
                  {lessonPdfUrl ? (
                    <div style={{
                      position: isFullscreen ? 'fixed' : 'relative',
                      top: isFullscreen ? 0 : 'auto',
                      left: isFullscreen ? 0 : 'auto',
                      right: isFullscreen ? 0 : 'auto',
                      bottom: isFullscreen ? 0 : 'auto',
                      width: isFullscreen ? '100vw' : '100%',
                      height: isFullscreen ? '100vh' : '650px',
                      zIndex: isFullscreen ? 9999 : 1,
                      borderRadius: isFullscreen ? 0 : '12px',
                      overflow: 'hidden',
                      boxShadow: isFullscreen ? 'none' : 'var(--shadow-sm)',
                      border: isFullscreen ? 'none' : '1.5px solid var(--border-light)',
                      backgroundColor: 'var(--bg-card-solid)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <style>{`@keyframes _tbSpin{to{transform:rotate(360deg)}}`}</style>

                      {/* Loading spinner overlay */}
                      {!pdfLoaded && (
                        <div style={{
                          position: 'absolute', inset: 0,
                          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                          gap: '14px', background: '#f8fafc', zIndex: 2
                        }}>
                          <div style={{
                            width: '48px', height: '48px', borderRadius: '50%',
                            border: `4px solid ${chapter?.color || '#4f46e5'}30`,
                            borderTopColor: chapter?.color || '#4f46e5',
                            animation: '_tbSpin 0.8s linear infinite'
                          }} />
                          <span style={{ fontSize: '0.88rem', fontWeight: '700', color: '#64748b' }}>
                            Loading textbook…
                          </span>
                        </div>
                      )}

                      {isFullscreen && (
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '10px 20px',
                          backgroundColor: 'var(--bg-card-solid)',
                          borderBottom: '1px solid var(--border-light)',
                          zIndex: 10
                        }}>
                          <span style={{ fontWeight: '800', fontFamily: 'var(--font-rounded)', fontSize: '1rem', color: 'var(--text-main)' }}>
                            Class {classId} • Chapter {chapterNum}: {chapter?.title} - {lesson.title}
                          </span>
                          <button
                            onClick={toggleFullscreen}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '6px 14px',
                              borderRadius: 'var(--radius-full)',
                              backgroundColor: chapter?.color || '#4f46e5',
                              color: '#ffffff',
                              border: 'none',
                              fontWeight: '700',
                              cursor: 'pointer'
                            }}
                          >
                            <Minimize2 size={15} /> Exit Fullscreen
                          </button>
                        </div>
                      )}

                      <iframe
                        src={`${lessonPdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
                        title={`Textbook: ${chapter?.title}`}
                        width="100%"
                        height="100%"
                        style={{
                          flex: 1,
                          border: 'none',
                          backgroundColor: '#525659',
                          display: 'block'
                        }}
                        onLoad={() => setPdfLoaded(true)}
                      />
                    </div>
                  ) : (
                    <CardRounded style={{ textAlign: 'center', padding: '30px 20px', color: 'var(--text-muted)' }}>
                      <p>Textbook chapter PDF is currently unavailable for this class.</p>
                    </CardRounded>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};

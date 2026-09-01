import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { BadgeChip } from '../ui/BadgeChip';
import { getTextbookPdfUrl, getLessonPdfUrl } from '../../data/textbookPdfMap';
import {
  BookOpen, ExternalLink, ChevronDown, ChevronUp, FileText
} from 'lucide-react';

export const TextbookReader = ({ chapter, activeLesson, classId, t }) => {
  const [expandedLessonId, setExpandedLessonId] = useState(activeLesson?.id || chapter?.lessons[0]?.id || null);

  const chapterNum = chapter?.number || 1;
  const pdfUrl = getTextbookPdfUrl(classId, chapterNum);

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

              {/* Subtopic Expanded Area */}
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


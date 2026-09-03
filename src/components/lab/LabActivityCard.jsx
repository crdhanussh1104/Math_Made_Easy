import React from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { Clock, CheckCircle2, ChevronRight } from 'lucide-react';

export const LabActivityCard = ({ activity, onStart, isCompleted = false }) => {
  const difficultyColor =
    activity.difficulty === 'Beginner' ? '#10b981' :
    activity.difficulty === 'Intermediate' ? '#f59e0b' : '#8b5cf6';

  const classDisplay = `Class ${activity.classNumber}`;

  return (
    <CardRounded
      className="lab-activity-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        padding: '24px',
        border: isCompleted ? '2px solid #86efac' : '1.5px solid var(--border-light, #e2e8f0)',
        background: isCompleted ? 'var(--bg-card-solid)' : 'var(--bg-card-solid)',
        boxShadow: 'var(--shadow-sm, 0 4px 16px rgba(0,0,0,0.04))',
        transition: 'all 0.2s ease'
      }}
    >
      <div>
        {/* Top Header Tags */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              background: 'var(--primary-light, rgba(79, 70, 229, 0.15))',
              color: 'var(--primary, #4f46e5)',
              fontSize: '0.75rem',
              fontWeight: '800',
              padding: '3px 8px',
              borderRadius: '6px',
              textTransform: 'uppercase'
            }}>
              {classDisplay}
            </span>
            <span style={{
              background: `${difficultyColor}25`,
              color: difficultyColor,
              fontSize: '0.75rem',
              fontWeight: '800',
              padding: '3px 8px',
              borderRadius: '6px'
            }}>
              {activity.difficulty}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '700' }}>
            <Clock size={14} /> {activity.estimatedTime} min
          </div>
        </div>

        {/* Theme Tag */}
        <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--secondary, #0284c7)', marginBottom: '6px' }}>
          {activity.theme}
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1.35', marginBottom: '8px' }}>
          {activity.title}
        </h3>

        {/* Learning Objective */}
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>
          {activity.objective}
        </p>
      </div>

      <div>
        {/* Interaction Type Pill */}
        <div
          className="interaction-box"
          style={{
            fontSize: '0.78rem',
            color: 'var(--text-main)',
            background: 'var(--primary-light, rgba(99, 102, 241, 0.08))',
            padding: '8px 12px',
            borderRadius: '8px',
            marginBottom: '16px',
            border: '1px solid var(--border-light, #edf2f7)'
          }}
        >
          🧪 <strong>Interaction:</strong> {activity.interactionType}
        </div>

        {/* Start / Completed Button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          {isCompleted && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#16a34a', fontWeight: '800', fontSize: '0.85rem' }}>
              <CheckCircle2 size={18} /> Completed
            </span>
          )}
          <Button3D
            onClick={() => onStart(activity)}
            variant={isCompleted ? 'secondary' : 'primary'}
            style={{ width: isCompleted ? 'auto' : '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
          >
            <span>{isCompleted ? 'Re-run Lab' : 'Start Experiment'}</span>
            <ChevronRight size={16} />
          </Button3D>
        </div>
      </div>
    </CardRounded>
  );
};

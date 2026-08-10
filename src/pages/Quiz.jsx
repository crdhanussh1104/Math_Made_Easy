import React, { useState } from 'react';
import { QuizPlayer } from '../components/quiz/QuizPlayer';
import { PracticeModeSelector } from '../components/quiz/PracticeModeSelector';
import { class4Chapters } from '../data/chapters';

export const Quiz = ({ selectedChapterId = 'chap_1', onNavigate }) => {
  const [selectedMode, setSelectedMode] = useState(null); // null, 'school', 'olympiad', 'challenge'

  const activeChap = class4Chapters.find(c => c.id === selectedChapterId) || class4Chapters[0];

  return (
    <div style={{ padding: '20px 0' }}>
      {!selectedMode ? (
        <PracticeModeSelector
          chapterTitle={activeChap.title}
          onSelectMode={setSelectedMode}
        />
      ) : (
        <QuizPlayer
          chapterId={selectedChapterId}
          practiceMode={selectedMode}
          onComplete={() => onNavigate('learn')}
          onResetMode={() => setSelectedMode(null)}
        />
      )}
    </div>
  );
};

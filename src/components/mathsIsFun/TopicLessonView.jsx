import React from 'react';
import { InteractiveTopicLabEngine } from './InteractiveTopicLabEngine';

export const TopicLessonView = ({ subtopicId, visualizerComponent, onLaunchVisualizer, onSelectTopic }) => {
  return (
    <InteractiveTopicLabEngine
      subtopicId={subtopicId}
      visualizerComponent={visualizerComponent}
      onSelectTopic={onSelectTopic}
    />
  );
};

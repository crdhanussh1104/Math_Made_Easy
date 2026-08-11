import { deepInteractiveMathKnowledge } from '../src/data/deepInteractiveMathKnowledge.js';

Object.entries(deepInteractiveMathKnowledge).forEach(([topicId, topic]) => {
  if (topic.quizQuestions) {
    topic.quizQuestions.forEach((q, idx) => {
      if (q.type === 'matching' && q.pairs) {
        console.log(`Topic [${topicId}] Quiz #${idx + 1}:`);
        console.log('  Pairs:', q.pairs.map(p => `${p.left} -> ${p.right}`).join(', '));
        console.log('  Explanation:', q.explanation);
      }
    });
  }
});

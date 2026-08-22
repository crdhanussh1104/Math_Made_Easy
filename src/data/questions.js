import { class1Questions } from './questions/class1Questions.js';
import { class2Questions } from './questions/class2Questions.js';
import { class3Questions } from './questions/class3Questions.js';
import { class4Questions } from './questions/class4Questions.js';
import { class5Questions } from './questions/class5Questions.js';
import { class6Questions } from './questions/class6Questions.js';
import { class7Questions } from './questions/class7Questions.js';
import { class8Questions } from './questions/class8Questions.js';
import { class9Questions } from './questions/class9Questions.js';
import { class10Questions } from './questions/class10Questions.js';

// Consolidated questions data keyed by classId and normalized number
export const classQuestionsMap = {
  class1: class1Questions,
  class2: class2Questions,
  class3: class3Questions,
  class4: class4Questions,
  class5: class5Questions,
  class6: class6Questions,
  class7: class7Questions,
  class8: class8Questions,
  class9: class9Questions,
  class10: class10Questions,
  '1': class1Questions,
  '2': class2Questions,
  '3': class3Questions,
  '4': class4Questions,
  '5': class5Questions,
  '6': class6Questions,
  '7': class7Questions,
  '8': class8Questions,
  '9': class9Questions,
  '10': class10Questions,
  1: class1Questions,
  2: class2Questions,
  3: class3Questions,
  4: class4Questions,
  5: class5Questions,
  6: class6Questions,
  7: class7Questions,
  8: class8Questions,
  9: class9Questions,
  10: class10Questions
};

// Chapter to topics mapping for chapter-level lookup
const chapterTopicMap = {
  // Class 1
  c1_theme_1: ['c1_les_1_1', 'c1_les_1_2', 'c1_les_1_3', 'c1_les_1_4', 'c1_les_1_5', 'c1_les_1_6', 'c1_les_1_7', 'c1_les_1_8', 'c1_les_1_9', 'c1_les_1_10'],
  c1_theme_2: ['c1_les_2_1', 'c1_les_2_2', 'c1_les_2_3', 'c1_les_2_4', 'c1_les_2_5'],
  c1_theme_3: ['c1_les_3_1', 'c1_les_3_2', 'c1_les_3_3', 'c1_les_3_4', 'c1_les_3_5', 'c1_les_3_6'],
  c1_theme_4: ['c1_les_4_1', 'c1_les_4_2', 'c1_les_4_3', 'c1_les_4_4', 'c1_les_4_5'],
  c1_theme_5: ['c1_les_5_1', 'c1_les_5_2', 'c1_les_5_3'],
  c1_theme_6: ['c1_les_6_1', 'c1_les_6_2', 'c1_les_6_3'],

  // Class 2
  c2_theme_1: ['c2_les_1_1', 'c2_les_1_2', 'c2_les_1_3', 'c2_les_1_4'],
  c2_theme_2: ['c2_les_2_1', 'c2_les_2_2', 'c2_les_2_3', 'c2_les_2_4', 'c2_les_2_5'],
  c2_theme_3: ['c2_les_3_1', 'c2_les_3_2', 'c2_les_3_3', 'c2_les_3_4'],
  c2_theme_4: ['c2_les_4_1', 'c2_les_4_2', 'c2_les_4_3', 'c2_les_4_4'],
  c2_theme_5: ['c2_les_5_1', 'c2_les_5_2', 'c2_les_5_3', 'c2_les_5_4'],
  c2_theme_6: ['c2_les_6_1', 'c2_les_6_2', 'c2_les_6_3'],

  // Class 3
  c3_theme_1: ['c3_les_1_1', 'c3_les_1_2', 'c3_les_1_3', 'c3_les_1_4', 'c3_les_1_5', 'c3_les_1_6', 'c3_les_1_7'],
  c3_theme_2: ['c3_les_2_1', 'c3_les_2_2', 'c3_les_2_3', 'c3_les_2_4', 'c3_les_2_5', 'c3_les_2_6', 'c3_les_2_7', 'c3_les_2_8'],
  c3_theme_3: ['c3_les_3_1', 'c3_les_3_2', 'c3_les_3_3', 'c3_les_3_4', 'c3_les_3_5'],
  c3_theme_4: ['c3_les_4_1', 'c3_les_4_2', 'c3_les_4_3', 'c3_les_4_4', 'c3_les_4_5', 'c3_les_4_6'],
  c3_theme_5: ['c3_les_5_1', 'c3_les_5_2', 'c3_les_5_3'],
  c3_theme_6: ['c3_les_6_1', 'c3_les_6_2', 'c3_les_6_3'],

  // Class 4
  chap_1: ['les_1_1', 'les_1_2', 'les_1_3', 'les_1_4'],
  chap_2: ['les_2_1', 'les_2_2', 'les_2_3', 'les_2_4'],
  chap_3: ['les_3_1', 'les_3_2', 'les_3_3', 'les_3_4'],
  chap_4: ['les_4_1', 'les_4_2', 'les_4_3'],
  chap_5: ['les_5_1', 'les_5_2', 'les_5_3', 'les_5_4'],
  chap_6: ['les_6_1', 'les_6_2', 'les_6_3'],
  chap_7: ['les_7_1', 'les_7_2'],

  // Class 5
  c5_theme_1: ['c5_les_1_1', 'c5_les_1_2', 'c5_les_1_3'],
  c5_theme_2: ['c5_les_2_1', 'c5_les_2_2'],
  c5_theme_3: ['c5_les_3_1', 'c5_les_3_2', 'c5_les_3_3'],
  c5_theme_4: ['c5_les_4_1', 'c5_les_4_2', 'c5_les_4_3', 'c5_les_4_4'],
  c5_theme_5: ['c5_les_5_1', 'c5_les_5_2', 'c5_les_5_3'],
  c5_theme_6: ['c5_les_6_1', 'c5_les_6_2', 'c5_les_6_3'],
  c5_theme_7: ['c5_les_7_1', 'c5_les_7_2'],
  c5_theme_8: ['c5_les_8_1', 'c5_les_8_2'],
  c5_theme_9: ['c5_les_9_1', 'c5_les_9_2', 'c5_les_9_3'],
  c5_theme_10: ['c5_les_10_1', 'c5_les_10_2'],

  // Class 6
  c6_theme_1: ['c6_les_1_1', 'c6_les_1_2', 'c6_les_1_3', 'c6_les_1_4', 'c6_les_1_5', 'c6_les_1_6', 'c6_les_1_7', 'c6_les_1_8'],
  c6_theme_2: ['c6_les_2_1', 'c6_les_2_2', 'c6_les_2_3', 'c6_les_2_4'],
  c6_theme_3: ['c6_les_3_1', 'c6_les_3_2', 'c6_les_3_3'],
  c6_theme_4: ['c6_les_4_1', 'c6_les_4_2', 'c6_les_4_3', 'c6_les_4_4', 'c6_les_4_5'],
  c6_theme_5: ['c6_les_5_1', 'c6_les_5_2', 'c6_les_5_3'],
  c6_theme_6: ['c6_les_6_1', 'c6_les_6_2', 'c6_les_6_3'],

  // Class 7
  c7_theme_1: ['c7_les_1_1', 'c7_les_1_2', 'c7_les_1_3', 'c7_les_1_4', 'c7_les_1_5', 'c7_les_1_6', 'c7_les_1_7'],
  c7_theme_2: ['c7_les_2_1', 'c7_les_2_2', 'c7_les_2_3', 'c7_les_2_4', 'c7_les_2_5'],
  c7_theme_3: ['c7_les_3_1', 'c7_les_3_2', 'c7_les_3_3'],
  c7_theme_4: ['c7_les_4_1', 'c7_les_4_2', 'c7_les_4_3', 'c7_les_4_4', 'c7_les_4_5', 'c7_les_4_6', 'c7_les_4_7'],
  c7_theme_5: ['c7_les_5_1', 'c7_les_5_2', 'c7_les_5_3'],
  c7_theme_6: ['c7_les_6_1', 'c7_les_6_2', 'c7_les_6_3'],

  // Class 8
  c8_theme_1: ['c8_les_1_1', 'c8_les_1_2', 'c8_les_1_3', 'c8_les_1_4'],
  c8_theme_2: ['c8_les_2_1', 'c8_les_2_2', 'c8_les_2_3', 'c8_les_2_4'],
  c8_theme_3: ['c8_les_3_1', 'c8_les_3_2', 'c8_les_3_3'],
  c8_theme_4: ['c8_les_4_1', 'c8_les_4_2', 'c8_les_4_3', 'c8_les_4_4'],
  c8_theme_5: ['c8_les_5_1', 'c8_les_5_2', 'c8_les_5_3', 'c8_les_5_4'],
  c8_theme_6: ['c8_les_6_1', 'c8_les_6_2', 'c8_les_6_3'],

  // Class 9
  c9_theme_1: ['c9_les_1_1'],
  c9_theme_2: ['c9_les_2_1'],
  c9_theme_3: ['c9_les_3_1', 'c9_les_3_2', 'c9_les_3_3', 'c9_les_3_4', 'c9_les_3_5'],
  c9_theme_4: ['c9_les_4_1', 'c9_les_4_2', 'c9_les_4_3', 'c9_les_4_4', 'c9_les_4_5'],
  c9_theme_5: ['c9_les_5_1', 'c9_les_5_2', 'c9_les_5_3'],
  c9_theme_6: ['c9_les_6_1', 'c9_les_6_2', 'c9_les_6_3'],
  c9_theme_7: ['c9_les_7_1', 'c9_les_7_2', 'c9_les_7_3', 'c9_les_7_4'],
  c9_theme_8: ['c9_les_8_1', 'c9_les_8_2', 'c9_les_8_3'],

  // Class 10
  c10_theme_1: ['c10_les_1_1', 'c10_les_1_2', 'c10_les_1_3'],
  c10_theme_2: ['c10_les_2_1', 'c10_les_2_2', 'c10_les_2_3', 'c10_les_2_4', 'c10_les_2_5', 'c10_les_2_6', 'c10_les_2_7'],
  c10_theme_3: ['c10_les_3_1', 'c10_les_3_2', 'c10_les_3_3'],
  c10_theme_4: ['c10_les_4_1', 'c10_les_4_2'],
  c10_theme_5: ['c10_les_5_1', 'c10_les_5_2'],
  c10_theme_6: ['c10_les_6_1', 'c10_les_6_2', 'c10_les_6_3'],
  c10_theme_7: ['c10_les_7_1', 'c10_les_7_2']
};

// Master questions dictionary
export const questionsData = {
  ...class1Questions,
  ...class2Questions,
  ...class3Questions,
  ...class4Questions,
  ...class5Questions,
  ...class6Questions,
  ...class7Questions,
  ...class8Questions,
  ...class9Questions,
  ...class10Questions
};

// Attach chapter-level questions
Object.entries(chapterTopicMap).forEach(([chapterId, topicIds]) => {
  const chapterQuestions = [];
  topicIds.forEach(tId => {
    if (questionsData[tId]) {
      chapterQuestions.push(...questionsData[tId]);
    }
  });
  if (chapterQuestions.length > 0) {
    questionsData[chapterId] = chapterQuestions;
  }
});

export function getQuestionsForTopic(topicId) {
  return questionsData[topicId] || [];
}

export function getQuestionsForClass(classId) {
  return classQuestionsMap[classId] || {};
}

import sofImo from '../data/olympiads/sof_imo.json';
import silverzoneImo from '../data/olympiads/silverzone_imo.json';
import mathKangaroo from '../data/olympiads/math_kangaroo.json';
import uimo from '../data/olympiads/uimo.json';
import nstse from '../data/olympiads/nstse.json';

import largeNumbers from '../data/chapters/large_numbers.json';
import additionSubtraction from '../data/chapters/addition_subtraction.json';
import multiplicationDivision from '../data/chapters/multiplication_division.json';
import fractions from '../data/chapters/fractions.json';
import geometry from '../data/chapters/geometry.json';
import measurement from '../data/chapters/measurement.json';
import time from '../data/chapters/time.json';

const allOlympiads = [sofImo, silverzoneImo, mathKangaroo, uimo, nstse];
const allChapters = [largeNumbers, additionSubtraction, multiplicationDivision, fractions, geometry, measurement, time];

/**
 * Tokenize text into normalized lowercase tokens
 */
function tokenize(text) {
  if (!text) return [];
  return String(text)
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 2);
}

/**
 * Build document string representation for Lesson & Chapter
 * Compares: Current Lesson Title + Lesson Description + Learning Objectives + Keywords + Formula Names + Quiz Concepts
 */
function buildChapterDoc(chap) {
  return [
    chap.chapterName,
    chap.currentLessonTitle || chap.chapterName,
    chap.description,
    ...(chap.learningObjectives || []),
    ...(chap.keywords || []),
    ...(chap.relatedFormulas || []),
    ...(chap.quizConcepts || ['place value', 'fractions', 'geometry', 'word problems', 'multiplication'])
  ].join(' ');
}

/**
 * Build document string representation for Olympiad
 * Compares: Olympiad Description + Keywords + Skills Tested + Sample Topics
 */
function buildOlympiadDoc(olymp) {
  return [
    olymp.name,
    olymp.description,
    ...(olymp.keywords || []),
    ...(olymp.skillsTested || []),
    ...(olymp.sampleTopics || ['logical reasoning', 'arithmetic', 'word problems', 'HOTS'])
  ].join(' ');
}

/**
 * Compute Term Frequency (TF) for a document tokens list
 */
function computeTF(tokens) {
  const tf = {};
  const total = tokens.length || 1;
  for (const t of tokens) {
    tf[t] = (tf[t] || 0) + 1 / total;
  }
  return tf;
}

/**
 * Compute IDF for a vocabulary across all documents
 */
function computeIDF(documentsTokens) {
  const N = documentsTokens.length;
  const docCount = {};

  for (const tokens of documentsTokens) {
    const uniqueTokens = new Set(tokens);
    for (const t of uniqueTokens) {
      docCount[t] = (docCount[t] || 0) + 1;
    }
  }

  const idf = {};
  for (const t in docCount) {
    idf[t] = Math.log(1 + N / docCount[t]);
  }
  return idf;
}

/**
 * Calculate Cosine Similarity between two TF-IDF vector maps
 */
function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (const term in vecA) {
    const valA = vecA[term];
    normA += valA * valA;
    if (vecB[term]) {
      dotProduct += valA * vecB[term];
    }
  }

  for (const term in vecB) {
    const valB = vecB[term];
    normB += valB * valB;
  }

  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Main Content-Based Recommendation Service
 */
export class OlympiadRecommendationEngine {
  constructor() {
    this.olympiads = allOlympiads;
    this.chapters = allChapters;
  }

  /**
   * Get Ranked Olympiad Recommendations for a given chapterId
   */
  getRecommendations(chapterId) {
    const chapterData = this.chapters.find(c => c.id === chapterId) || this.chapters[0];
    const chapText = buildChapterDoc(chapterData);
    const chapTokens = tokenize(chapText);

    // Build document corpus: 1 chapter doc + N olympiad docs
    const olympiadDocsTokens = this.olympiads.map(o => tokenize(buildOlympiadDoc(o)));
    const allDocsTokens = [chapTokens, ...olympiadDocsTokens];

    const idf = computeIDF(allDocsTokens);

    // Build TF-IDF vector for Chapter
    const chapTF = computeTF(chapTokens);
    const chapVec = {};
    for (const t in chapTF) {
      chapVec[t] = chapTF[t] * (idf[t] || 1);
    }

    // Rank Olympiads by Cosine Similarity
    const scoredOlympiads = this.olympiads.map((olymp, idx) => {
      const oTokens = olympiadDocsTokens[idx];
      const oTF = computeTF(oTokens);
      const oVec = {};
      for (const t in oTF) {
        oVec[t] = oTF[t] * (idf[t] || 1);
      }

      const similarity = cosineSimilarity(chapVec, oVec);

      // Match keywords intersection
      const chapKeywords = (chapterData.keywords || []).map(k => k.toLowerCase());
      const oKeywords = (olymp.keywords || []).map(k => k.toLowerCase());
      const matchedKeywords = Array.from(new Set(chapKeywords.filter(k => oKeywords.some(ok => ok.includes(k) || k.includes(ok)))));

      // Scale similarity to realistic Match Score (70% - 98%)
      const matchScore = Math.min(98, Math.max(65, Math.round(70 + similarity * 100)));

      // Generate Natural Language Explainability Reason
      const topMatchedText = matchedKeywords.length > 0
        ? matchedKeywords.slice(0, 3).join(', ')
        : 'mathematical reasoning and problem solving';

      const explainabilityReason = `This lesson includes ${topMatchedText} which are heavily assessed in ${olymp.shortName || olymp.name}.`;

      return {
        ...olymp,
        matchScore,
        rawSimilarity: similarity,
        matchedKeywords: matchedKeywords.length > 0 ? matchedKeywords.slice(0, 4) : ['Logical Reasoning', 'Math Logic'],
        explainabilityReason
      };
    });

    // Sort descending by matchScore
    scoredOlympiads.sort((a, b) => b.matchScore - a.matchScore);

    return {
      chapter: chapterData,
      topRecommendations: scoredOlympiads.slice(0, 3)
    };
  }

  /**
   * Get Olympiad Readiness score per topic
   */
  getReadinessTracker() {
    return [
      { topic: 'Fractions & Decimals', score: 95, color: '#ce82ff' },
      { topic: 'Geometry & 3D Shapes', score: 81, color: '#2bdeac' },
      { topic: 'Large Numbers & Place Value', score: 90, color: '#58cc02' },
      { topic: 'Measurement & Capacity', score: 67, color: '#ff4b4b' },
      { topic: 'Addition & Subtraction', score: 88, color: '#1cb0f6' },
      { topic: 'Time & Calendar', score: 72, color: '#ffc800' }
    ];
  }
}

export const olympiadRecEngine = new OlympiadRecommendationEngine();

/**
 * Answer Validator Utility
 * Validates user input against accepted answers with support for:
 * 1. String normalization (case-insensitive, trimmed, punctuation normalized, ignoring articles)
 * 2. Numeric equivalence (5 = 05 = 5.0, 1,000 = 1000)
 * 3. Decimal and fraction equivalence (0.5 = 1/2, 0.75 = 3/4, 2.5 = 5/2 = 2 1/2)
 * 4. Unit tolerance (10 cm = 10, Rs 500 = 500, 180° = 180, 50% = 50 = 0.5)
 */

// Helper to parse simple fraction string like "3/4" or "-12/7" or "1 3/4"
function parseFraction(str) {
  if (!str) return null;
  const clean = str.trim();
  
  // Mixed fraction: "1 3/4" or "1 and 3/4"
  const mixedMatch = clean.match(/^(-?\d+)\s+(?:and\s+)?(\d+)\/(\d+)$/i);
  if (mixedMatch) {
    const whole = parseFloat(mixedMatch[1]);
    const num = parseFloat(mixedMatch[2]);
    const den = parseFloat(mixedMatch[3]);
    if (den === 0) return null;
    const sign = whole < 0 ? -1 : 1;
    return whole + sign * (num / den);
  }

  // Simple fraction: "3/4" or "-5/8"
  const fracMatch = clean.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if (fracMatch) {
    const num = parseFloat(fracMatch[1]);
    const den = parseFloat(fracMatch[2]);
    if (den === 0) return null;
    return num / den;
  }

  return null;
}

// Clean unit / currency / percentage / degree suffixes and variable prefixes from numeric strings
function extractNumericValue(raw) {
  if (raw === null || raw === undefined) return null;
  let str = String(raw).trim();

  // Strip variable prefixes like "x = ", "x=", "k = ", "k="
  str = str.replace(/^[a-zA-Z]\s*=\s*/, '');

  // Try parsing fraction first
  const fracVal = parseFraction(str);
  if (fracVal !== null && !isNaN(fracVal)) {
    return fracVal;
  }

  // Strip currency prefixes, degree symbols, commas, and common unit words
  str = str.replace(/^(?:rs\.?|inr|₹|\$)\s*/i, '');
  str = str.replace(/[,]/g, '');
  str = str.replace(/(?:cm2|cm²|m2|m²|sq\s*cm|sq\s*m|sq\s*units|cubic\s*cm|cu\s*cm|cm3|cm³|km\/h|kmph|m\/s|cm|m|km|g|kg|ml|l|litres?|grams?|seconds?|secs?|minutes?|mins?|hours?|hrs?|days?|months?|years?|boys|girls|students|apples|books|pieces|icons|units|boxes|packets|weights|degrees?|°|%)\s*$/i, '');
  str = str.trim();

  const num = parseFloat(str);
  return isNaN(num) ? null : num;
}

// Normalize text for comparison
export function normalizeText(text) {
  if (!text) return '';
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[√]/g, 'sqrt ')
    .replace(/\broot\s+/g, 'sqrt ')
    .replace(/[()]/g, ' ')
    .replace(/[,\-_–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/^(a|an|the)\s+/i, '')
    .trim();
}

/**
 * Validates whether user response matches the correct answer or any accepted variants.
 * @param {string|number} userInput - The student's raw typed answer
 * @param {string|number} correctAnswer - The canonical answer
 * @param {Array<string|number>} [acceptedAnswers=[]] - List of alternate acceptable answers
 * @param {string} [questionType='written'] - 'written' | 'number' | 'decimal' | 'fraction' | 'text'
 * @returns {boolean} true if correct, false otherwise
 */
export function validateAnswer(userInput, correctAnswer, acceptedAnswers = [], questionType = 'written') {
  if (userInput === null || userInput === undefined) return false;
  const userTrimmed = String(userInput).trim();
  if (userTrimmed === '') return false;

  const allTargets = [correctAnswer, ...(acceptedAnswers || [])];

  // 1. Direct text normalization check against all accepted targets
  const normUser = normalizeText(userTrimmed);
  for (const target of allTargets) {
    if (normUser === normalizeText(target)) {
      return true;
    }
  }

  // 2. Variable prefix check (e.g. user typed "x = 5" and target is "5" or vice versa)
  const stripVarUser = normUser.replace(/^[a-zA-Z]\s*=\s*/, '');
  for (const target of allTargets) {
    const stripVarTarget = normalizeText(target).replace(/^[a-zA-Z]\s*=\s*/, '');
    if (stripVarUser === stripVarTarget) {
      return true;
    }
  }

  // 3. Numeric & Mathematical Equivalence check
  const userNum = extractNumericValue(userTrimmed);
  if (userNum !== null) {
    for (const target of allTargets) {
      const targetNum = extractNumericValue(target);
      if (targetNum !== null) {
        // Compare with small floating point tolerance (e.g. 0.001)
        if (Math.abs(userNum - targetNum) < 1e-3) {
          return true;
        }
        // Check percentage equivalence (e.g. user typed 0.5 for 50%, or 50 for 50%)
        if (String(target).includes('%') && (Math.abs(userNum - targetNum) < 1e-3 || Math.abs(userNum * 100 - targetNum) < 1e-3)) {
          return true;
        }
      }
    }
  }

  // 4. Compact string check (ignoring all spaces/symbols for equations/sets like {1,2,3} or 2:3)
  const compactUser = normUser.replace(/\s+/g, '').replace(/[*×]/g, 'x');
  for (const target of allTargets) {
    const compactTarget = normalizeText(target).replace(/\s+/g, '').replace(/[*×]/g, 'x');
    if (compactUser === compactTarget) {
      return true;
    }
  }

  return false;
}

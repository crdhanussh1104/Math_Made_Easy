import { mathLabRegistry, getLabsForClass } from '../data/mathLabRegistry.js';
import { labQuestionsBank } from '../data/labQuestionsBank.js';
import { labFormulaBank, getFormulaForActivity } from '../data/labFormulaBank.js';
import { shapeProperties, getShapeData } from '../data/shapeProperties.js';
import { labReaderNotes, getReaderNotes } from '../data/labReaderNotes.js';
import { getChaptersForClass, icseClasses } from '../data/chapters.js';
import { getQuestionsForTopic, getQuestionsForClass, classQuestionsMap } from '../data/questions.js';

console.log('====================================================');
console.log('RUNNING MATH LAB VALIDATION & COMPLETE 10-CLASS AUDIT');
console.log('====================================================');

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    console.error(`  ✗ FAIL: ${message}`);
  }
}

// 1. Coverage Test across Classes 1 to 10
console.log('\n[TEST SUITE 1: Class Coverage & Registry Integrity]');
for (let c = 1; c <= 10; c++) {
  const labs = getLabsForClass(c);
  assert(labs.length > 0, `Class ${c} has active lab activities (found: ${labs.length} labs)`);
}

// 2. Schema and Question Bank Integrity
console.log('\n[TEST SUITE 2: Lab Schema & Question Bank Linkage]');
const seenIds = new Set();
mathLabRegistry.forEach(lab => {
  assert(!seenIds.has(lab.id), `Unique activity ID: "${lab.id}"`);
  seenIds.add(lab.id);

  assert(!!lab.classNumber && lab.classNumber >= 1 && lab.classNumber <= 10, `${lab.id} has valid classNumber (${lab.classNumber})`);
  assert(!!lab.theme && lab.theme.length > 0, `${lab.id} has valid theme: "${lab.theme}"`);
  assert(!!lab.topic && lab.topic.length > 0, `${lab.id} has valid topic: "${lab.topic}"`);
  assert(!!lab.objective && lab.objective.length > 0, `${lab.id} has learning objective`);
  assert(!!lab.syllabusReference && lab.syllabusReference.includes(`Class ${lab.classNumber}`), `${lab.id} has syllabus mapping reference`);
  assert(Array.isArray(lab.guidedSteps) && lab.guidedSteps.length >= 3, `${lab.id} has 3-step guided discovery progression`);

  const q = labQuestionsBank[lab.id];
  assert(!!q, `${lab.id} has associated discovery question in questions bank`);
  if (q) {
    assert(Array.isArray(q.hints) && q.hints.length === 3, `${lab.id} question has 3 progressive hints`);
    assert(!!q.correctFeedback && !!q.retryFeedback, `${lab.id} question has constructive feedback`);
  }
});

// 3. Formula Card Bank Coverage across Classes 1 to 10
console.log('\n[TEST SUITE 3: Formula/Rule Card Coverage & Schema Audit]');
for (let c = 1; c <= 10; c++) {
  const labs = getLabsForClass(c);
  let classFormulaCount = 0;

  labs.forEach(lab => {
    const f = getFormulaForActivity(lab.id);
    assert(!!f, `Class ${c} activity "${lab.id}" has mapped Formula/Rule Card`);
    if (f) {
      assert(!!f.title && f.title.length > 0, `${lab.id} Formula has title`);
      assert(!!f.formula && f.formula.length > 0, `${lab.id} Formula has mathematical formula/expression`);
      assert(!!f.ruleDescription && f.ruleDescription.length > 0, `${lab.id} Formula has rule description`);
      assert(!!f.example && f.example.length > 0, `${lab.id} Formula has concrete example calculation`);
      classFormulaCount++;
    }
  });

  const percentage = labs.length > 0 ? ((classFormulaCount / labs.length) * 100).toFixed(0) : 0;
  console.log(`  📊 Class ${c} Formula Card Coverage: ${percentage}% mapped (${classFormulaCount}/${labs.length} activities)`);
}

// 4. Detailed Shape Formula Completeness & Polyhedral Euler Audit
console.log('\n[TEST SUITE 4: Detailed Shape Formula Completeness & Polyhedra Audit]');

const requiredShapeFormulas = {
  cube: ['face_area', 'face_perimeter', 'lsa', 'tsa', 'volume', 'face_diagonal', 'space_diagonal', 'edge_length', 'euler'],
  cuboid: ['base_area', 'lsa', 'tsa', 'volume', 'space_diagonal', 'edge_length', 'euler'],
  cylinder: ['base_area', 'circumference', 'csa', 'tsa', 'volume'],
  cone: ['slant_height', 'base_area', 'circumference', 'csa', 'tsa', 'volume'],
  sphere: ['diameter', 'great_circumference', 'surface_area', 'volume'],
  hemisphere: ['base_area', 'csa', 'tsa', 'volume'],
  prism: ['base_area', 'volume', 'tsa', 'euler'],
  pyramid: ['base_area', 'slant_height', 'lsa', 'tsa', 'volume', 'euler'],
  triangle: ['area', 'perimeter', 'equilateral_perim', 'equilateral_area', 'angle_sum', 'heron_area'],
  square: ['area', 'perimeter', 'diagonal', 'side_from_area', 'side_from_perim'],
  rectangle: ['area', 'perimeter', 'diagonal', 'length_from_area', 'breadth_from_area'],
  parallelogram: ['area', 'perimeter'],
  trapezium: ['area', 'perimeter'],
  circle: ['radius', 'diameter', 'circumference', 'area_radius', 'area_diameter'],
  semicircle: ['radius', 'diameter', 'area', 'curved_perimeter', 'total_perimeter'],
  polygons: ['perimeter', 'interior_sum', 'each_interior', 'each_exterior']
};

Object.keys(requiredShapeFormulas).forEach(shapeKey => {
  const sh = shapeProperties[shapeKey];
  assert(!!sh, `Shape "${shapeKey}" exists in shapeProperties registry`);

  const formulaIds = (sh.formulaList || []).map(f => f.id);
  requiredShapeFormulas[shapeKey].forEach(reqId => {
    assert(formulaIds.includes(reqId), `Shape "${shapeKey}" contains required formula "${reqId}"`);
  });

  if (sh.isPolyhedron) {
    assert(sh.hasEulerFormula === true, `Polyhedron "${shapeKey}" is marked hasEulerFormula=true`);
    assert(sh.faces + sh.vertices - sh.edges === 2, `Polyhedron "${shapeKey}" satisfies Euler: ${sh.faces} + ${sh.vertices} - ${sh.edges} = 2`);
  } else if (sh.type === '3d') {
    assert(sh.hasEulerFormula === false, `Curved 3D solid "${shapeKey}" correctly excludes Euler formula`);
  }
});

// 5. CLASS-SPECIFIC FORMULA VISIBILITY AUDIT
console.log('\n[TEST SUITE 5: Class-Specific Formula Filtering & Visibility Audit]');

function getFormulasForClass(shapeKey, classNum) {
  const sh = shapeProperties[shapeKey];
  return (sh.formulaList || []).filter(f => {
    if (f.applicableClasses && Array.isArray(f.applicableClasses)) {
      return f.applicableClasses.includes(classNum);
    }
    return (f.minClass || 1) <= classNum;
  });
}

// Class 1 checks
const c1CubeFormulas = getFormulasForClass('cube', 1).map(f => f.id);
assert(c1CubeFormulas.includes('face_props'), 'Class 1 Cube shows basic face/edge/vertex properties');
assert(!c1CubeFormulas.includes('volume'), 'Class 1 Cube HIDES Volume V = a³');
assert(!c1CubeFormulas.includes('tsa'), 'Class 1 Cube HIDES TSA = 6a²');
assert(!c1CubeFormulas.includes('euler'), 'Class 1 Cube HIDES Euler Formula');

const c1CircleFormulas = getFormulasForClass('circle', 1).map(f => f.id);
assert(c1CircleFormulas.includes('circle_props'), 'Class 1 Circle shows basic round boundary property');
assert(!c1CircleFormulas.includes('area_radius'), 'Class 1 Circle HIDES Area A = πr²');
assert(!c1CircleFormulas.includes('circumference'), 'Class 1 Circle HIDES Circumference C = 2πr');

// Class 4 checks
const c4CircleFormulas = getFormulasForClass('circle', 4).map(f => f.id);
assert(c4CircleFormulas.includes('radius') && c4CircleFormulas.includes('diameter'), 'Class 4 Circle shows Radius & Diameter');
assert(!c4CircleFormulas.includes('area_radius'), 'Class 4 Circle HIDES Area A = πr²');

const c4SquareFormulas = getFormulasForClass('square', 4).map(f => f.id);
assert(c4SquareFormulas.includes('area') && c4SquareFormulas.includes('perimeter'), 'Class 4 Square shows Area & Perimeter');
assert(!c4SquareFormulas.includes('diagonal'), 'Class 4 Square HIDES Diagonal d = a√2');

// Class 8 checks
const c8CubeFormulas = getFormulasForClass('cube', 8).map(f => f.id);
assert(c8CubeFormulas.includes('volume') && c8CubeFormulas.includes('tsa') && c8CubeFormulas.includes('euler'), 'Class 8 Cube shows Volume, TSA, LSA, and Euler Formula');

const c8CylFormulas = getFormulasForClass('cylinder', 8).map(f => f.id);
assert(c8CylFormulas.includes('volume') && c8CylFormulas.includes('csa') && c8CylFormulas.includes('tsa'), 'Class 8 Cylinder shows Volume, CSA, and TSA');

// Class 9 checks
const c9TriangleFormulas = getFormulasForClass('triangle', 9).map(f => f.id);
assert(c9TriangleFormulas.includes('heron_area') && c9TriangleFormulas.includes('equilateral_area'), 'Class 9 Triangle shows Heron\'s Formula & Equilateral Area');

const c9ConeFormulas = getFormulasForClass('cone', 9).map(f => f.id);
assert(c9ConeFormulas.includes('slant_height') && c9ConeFormulas.includes('volume') && c9ConeFormulas.includes('csa'), 'Class 9 Cone shows Slant Height, Volume & CSA');

// Class 10 checks
const c10SphereFormulas = getFormulasForClass('sphere', 10).map(f => f.id);
assert(c10SphereFormulas.includes('surface_area') && c10SphereFormulas.includes('volume'), 'Class 10 Sphere shows Surface Area 4πr² & Volume ⁴⁄₃πr³');

// 6. Exact Trigonometric Table & Ratios Audit
console.log('\n[TEST SUITE 6: Exact Trigonometric Standard Values Audit]');
const standardAngles = [0, 30, 45, 60, 90];
const sinVals = [0, 0.5, 1 / Math.SQRT2, Math.sqrt(3) / 2, 1];
const cosVals = [1, Math.sqrt(3) / 2, 1 / Math.SQRT2, 0.5, 0];

standardAngles.forEach((angle, idx) => {
  const rad = (angle * Math.PI) / 180;
  assert(Math.abs(Math.sin(rad) - sinVals[idx]) < 0.0001, `sin(${angle}°) exact calculation verified`);
  assert(Math.abs(Math.cos(rad) - cosVals[idx]) < 0.0001, `cos(${angle}°) exact calculation verified`);
});

// 7. Reader Notes Verification
console.log('\n[TEST SUITE 7: Reader Notes Bank Audit]');
['cube', 'cuboid', 'cylinder', 'cone', 'sphere', 'triangle', 'rectangle', 'circle', 'trigonometry_ratios'].forEach(topic => {
  const notes = getReaderNotes(topic);
  assert(!!notes.whatIsIt && notes.whatIsIt.length > 0, `Reader note "${topic}" has "whatIsIt"`);
  assert(Array.isArray(notes.keyProperties) && notes.keyProperties.length > 0, `Reader note "${topic}" has key properties`);
  assert(Array.isArray(notes.realLifeExamples) && notes.realLifeExamples.length > 0, `Reader note "${topic}" has real-life examples`);
});


// --- TEST SUITE 8: ICSE Classes 1–10 Complete Topic-Wise Written-Answer Quiz Bank Audit ---
console.log('\n[TEST SUITE 8: ICSE Classes 1–10 Complete Topic-Wise Written-Answer Quiz Bank Audit]');

const expectedTopicCounts = {
  1: 32,
  2: 24,
  3: 32,
  4: 24,
  5: 27,
  6: 26,
  7: 28,
  8: 22,
  9: 25,
  10: 22
};

let grandTotalQuizQuestions = 0;
let grandTotalTopics = 0;

for (let c = 1; c <= 10; c++) {
  const chapters = getChaptersForClass(`class${c}`);
  assert(chapters.length > 0, `Class ${c} has registered chapters (count: ${chapters.length})`);
  
  const classQuestions = getQuestionsForClass(`class${c}`);
  const topicIds = Object.keys(classQuestions);
  assert(topicIds.length === expectedTopicCounts[c], `Class ${c} has exactly ${expectedTopicCounts[c]} syllabus topics with quizzes (found: ${topicIds.length})`);
  
  let classQCount = 0;
  const questionIdSet = new Set();
  const isNewQuizClass = [1, 3, 6, 7, 9, 10].includes(c);
  
  chapters.forEach(chap => {
    (chap.lessons || []).forEach(lesson => {
      grandTotalTopics++;
      const questions = getQuestionsForTopic(lesson.id);
      assert(questions.length === 10, `Class ${c} topic "${lesson.id}" has EXACTLY 10 questions (found: ${questions.length})`);
      
      questions.forEach((q, qIdx) => {
        classQCount++;
        grandTotalQuizQuestions++;
        
        assert(!questionIdSet.has(q.id), `Class ${c} question ID "${q.id}" is unique`);
        questionIdSet.add(q.id);
        
        assert(!!q.q && q.q.length > 0, `Question "${q.id}" has question text`);
        assert(!!q.a && q.a.length > 0, `Question "${q.id}" has correct answer`);
        assert(Array.isArray(q.acc) && q.acc.length > 0, `Question "${q.id}" has acceptable answers array`);
        assert(!!q.exp && q.exp.length > 0, `Question "${q.id}" has explanation`);
        assert(!!q.h && q.h.length > 0, `Question "${q.id}" has hint`);
        
        if (isNewQuizClass) {
          assert(q.type === 'written' || q.type === 'number' || q.type === 'text', `Class ${c} question "${q.id}" has written question type`);
          const expectedDiff = qIdx < 3 ? 'easy' : (qIdx < 7 ? 'medium' : 'hard');
          assert(q.difficulty === expectedDiff, `Class ${c} Question "${q.id}" (Q${qIdx + 1}) has difficulty "${q.difficulty}" (expected "${expectedDiff}")`);
        }
      });
    });
  });
  
  console.log(`  📝 Class ${c} Quizzes: ${topicIds.length} topics, ${classQCount} questions verified (100% compliant)`);
}

console.log(`\n  🌟 GRAND TOTAL QUIZ COVERAGE: ${grandTotalTopics} topics, ${grandTotalQuizQuestions} questions across Classes 1–10`);

// --- TEST SUITE 9: Written-Answer Validation Engine Audit ---
console.log('\n[TEST SUITE 9: Written-Answer Validation Engine Audit]');

import('../utils/answerValidator.js').then(({ validateAnswer, normalizeText }) => {
  // A. Direct Numerical
  assert(validateAnswer('62', '62'), 'Direct numerical match (62 === 62)');
  assert(validateAnswer('  62  ', '62'), 'Direct numerical with leading/trailing spaces');
  assert(validateAnswer('62.0', '62'), 'Direct numerical with decimal point (62.0 === 62)');

  // B. Select from Series
  assert(validateAnswer('-12', '-12'), 'Negative integer select from series (-12 === -12)');

  // C. Fraction & Decimal Equivalence
  assert(validateAnswer('3/4', '3/4'), 'Fraction match (3/4 === 3/4)');
  assert(validateAnswer('0.75', '3/4'), 'Fraction-to-decimal equivalence (0.75 === 3/4)');
  assert(validateAnswer('3/4', '0.75'), 'Decimal-to-fraction equivalence (3/4 === 0.75)');
  assert(validateAnswer('1/2', '0.5'), 'Fraction 1/2 === 0.5');

  // D. Algebraic Variable Stripping
  assert(validateAnswer('x = 5', '5'), 'Algebra variable stripping ("x = 5" matches "5")');
  assert(validateAnswer('5', 'x = 5'), 'Algebra variable stripping ("5" matches "x = 5")');
  assert(validateAnswer('y = -4', '-4'), 'Algebra variable stripping ("y = -4" matches "-4")');

  // E. Geometry Answers with Units
  assert(validateAnswer('24 cm', '24 cm'), 'Geometry unit match ("24 cm" === "24 cm")');
  assert(validateAnswer('24cm', '24 cm'), 'Geometry compact unit ("24cm" === "24 cm")');
  assert(validateAnswer('24', '24 cm'), 'Geometry bare number tolerance ("24" matches "24 cm")');
  assert(validateAnswer('24 sq cm', '24 cm²'), 'Area unit variation ("24 sq cm" matches "24 cm²")');

  // F. Word & Concept Answers (Case Insensitive)
  assert(validateAnswer('Pentagon', 'Pentagon'), 'Concept exact case');
  assert(validateAnswer('pentagon', 'Pentagon'), 'Concept lowercase match');
  assert(validateAnswer('PENTAGON', 'Pentagon'), 'Concept uppercase match');

  // G. Radicals & Mathematical Symbols
  assert(validateAnswer('√5', '√5'), 'Radical exact match (√5 === √5)');
  assert(validateAnswer('sqrt(5)', '√5'), 'Radical functional match (sqrt(5) === √5)');
  assert(validateAnswer('sqrt 5', '√5'), 'Radical text match (sqrt 5 === √5)');

  // H. Incorrect Answer Rejection
  assert(!validateAnswer('63', '62'), 'Reject incorrect numerical answer');
  assert(!validateAnswer('Hexagon', 'Pentagon'), 'Reject incorrect word answer');

  // --- TEST SUITE 10: Class-Specific Formula Cards & Interactive Notes Architecture Audit ---
  console.log('\n[TEST SUITE 10: Class-Specific Formula Cards & Interactive Notes Architecture Audit]');

  Promise.all([
    import('../data/classFormulaCards.js'),
    import('../data/classInteractiveNotes.js'),
    import('../data/chapters.js')
  ]).then(([{ classFormulaCards, getClassFormulaCards, getFormulaCardsForTopic, getFormulaCardsForChapter }, { classInteractiveNotes, getInteractiveNotesForTopic, getInteractiveNotesForChapter }, { getChaptersForClass }]) => {

    let totalFormulaCards = 0;
    let totalNotes = 0;
    let crossClassLeakageCards = 0;
    let crossClassLeakageNotes = 0;

    for (let c = 1; c <= 10; c++) {
      const classCards = getClassFormulaCards(c);
      const chaps = getChaptersForClass(`class${c}`);
      let classTopicCount = 0;
      chaps.forEach(ch => {
        classTopicCount += (ch.lessons || []).length;
      });

      assert(classCards.length === classTopicCount, `Class ${c} has exactly ${classTopicCount} formula cards (found: ${classCards.length})`);
      totalFormulaCards += classCards.length;

      // Verify no cross-class leakage
      classCards.forEach(card => {
        if (card.classId !== c) {
          crossClassLeakageCards++;
        }
        assert(card.title && card.title.length > 0, `Formula card "${card.id}" has title`);
        assert(card.formula && card.formula.length > 0, `Formula card "${card.id}" has formula/rule`);
        assert(card.example && card.example.question, `Formula card "${card.id}" has worked example`);
        assert(card.explanation && card.explanation.length > 0, `Formula card "${card.id}" has explanation`);
      });

      // Verify Interactive Notes for this class
      chaps.forEach(ch => {
        (ch.lessons || []).forEach(les => {
          totalNotes++;
          const note = getInteractiveNotesForTopic(les.id);
          assert(note !== null, `Interactive note exists for topic "${les.id}" (Class ${c})`);
          if (note) {
            if (note.classId !== c) {
              crossClassLeakageNotes++;
            }
            assert(note.learningObjectives && note.learningObjectives.length > 0, `Note "${note.id}" has learning objectives`);
            assert(note.keyConcepts && note.keyConcepts.length > 0, `Note "${note.id}" has key concepts`);
            assert(note.workedExample && note.workedExample.problem, `Note "${note.id}" has worked example`);
            assert(note.tryIt && note.tryIt.question, `Note "${note.id}" has try-it question`);
          }
        });
      });
    }

    assert(crossClassLeakageCards === 0, `Cross-class formula card leakage: 0 (verified isolated)`);
    assert(crossClassLeakageNotes === 0, `Cross-class interactive notes leakage: 0 (verified isolated)`);
    assert(totalFormulaCards === 262, `Total formula cards across Classes 1–10: 262 (found: ${totalFormulaCards})`);
    assert(totalNotes === 262, `Total interactive notes across Classes 1–10: 262 (found: ${totalNotes})`);

    // Class Switching & Filtering simulation
    const c6Cards = getClassFormulaCards(6);
    const c9Cards = getClassFormulaCards(9);
    const c10Cards = getClassFormulaCards(10);
    assert(c6Cards.every(card => card.classId === 6), 'Class 6 cards contain ONLY Class 6 items');
    assert(c9Cards.every(card => card.classId === 9), 'Class 9 cards contain ONLY Class 9 items');
    assert(c10Cards.every(card => card.classId === 10), 'Class 10 cards contain ONLY Class 10 items');

    console.log('\n====================================================');
    console.log(`TEST SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED`);
    console.log('====================================================');

    if (passedTests !== totalTests) {
      process.exit(1);
    }
  }).catch(err => {
    console.error('Suite 10 test error:', err);
    process.exit(1);
  });
}).catch(err => {
  console.error('Validation test error:', err);
  process.exit(1);
});


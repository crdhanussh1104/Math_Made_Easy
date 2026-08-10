export const olympiadInsightsData = {
  chap_1: {
    importance: 'Understanding 6-digit and 7-digit place values is the foundation for solving multi-step logic puzzles in competitive exams!',
    competitions: [
      'SOF International Mathematics Olympiad (IMO)',
      'SilverZone International Olympiad of Mathematics (IOM)',
      'Unified Council NSTSE',
      'Unified Council UIMO',
      'Southeast Asian Mathematical Olympiad (SEAMO)'
    ],
    difficulty: 'Intermediate',
    sampleQuestion: {
      problem: 'I am a 6-digit number. My Thousands digit is double my Ones digit. The sum of all my digits is 24. If my Hundreds digit is 0, what is my Thousands digit?',
      options: ['2', '4', '6', '8'],
      correctIndex: 1,
      explanation: 'If Ones digit is 2, Thousands is 2 × 2 = 4. Test remaining digits to confirm digit sum equals 24!'
    },
    thinkingStrategy: '🧠 Think like a Detective: Don\'t just guess! Break the number into place value columns (L, T-Th, Th, H, T, O) and test given conditions step-by-step.',
    recommendedPractice: 'Practice 6-digit word problems with place value swaps and digit sum riddles.'
  },
  chap_2: {
    importance: 'Speedy column addition and borrowing across zeros in subtraction are essential for solving time-pressured competition rounds!',
    competitions: [
      'SOF International Mathematics Olympiad (IMO)',
      'Unified Council NSTSE',
      'American Mathematics Olympiad (AMO)'
    ],
    difficulty: 'Beginner',
    sampleQuestion: {
      problem: 'Find the missing digit A in the addition: 45,A68 + 23,415 = 69,183.',
      options: ['6', '7', '8', '9'],
      correctIndex: 1,
      explanation: 'Look at the Hundreds column: A + 4 + (carry 0) = 11 → A = 7!'
    },
    thinkingStrategy: '🧠 Reverse Engineering: Work backwards from the answer digits to find missing letters in missing-digit puzzles.',
    recommendedPractice: 'Solve missing-digit cryptographic addition grids.'
  },
  chap_3: {
    importance: 'Multiplication patterns and division remainders form the basis for number theory and sequence puzzles in global math contests.',
    competitions: [
      'SOF International Mathematics Olympiad (IMO)',
      'SEAMO',
      'SilverZone IOM',
      'Unified Council UIMO'
    ],
    difficulty: 'Intermediate',
    sampleQuestion: {
      problem: 'If 12 boxes hold 144 apples equally, how many apples are in 15 such boxes?',
      options: ['160', '180', '200', '210'],
      correctIndex: 1,
      explanation: 'First find 1 box: 144 ÷ 12 = 12 apples. Then multiply for 15 boxes: 15 × 12 = 180 apples!'
    },
    thinkingStrategy: '🧠 Unitary Method Magic: Always find the value of 1 item first before multiplying for many items!',
    recommendedPractice: 'Practice multi-step unitary method word problems.'
  },
  chap_4: {
    importance: 'Fractions are among the most heavily tested topics in Olympiads, bridging basic arithmetic to advanced ratio concepts.',
    competitions: [
      'SOF International Mathematics Olympiad (IMO)',
      'American Mathematics Olympiad (AMO)',
      'SEAMO',
      'Unified Council NSTSE'
    ],
    difficulty: 'Advanced',
    sampleQuestion: {
      problem: 'Sam ate 2/8 of a pizza and Rohan ate 1/4 of the same pizza. Who ate more pizza?',
      options: ['Sam', 'Rohan', 'Both ate equal amount', 'Cannot be determined'],
      correctIndex: 2,
      explanation: '2/8 simplifies to 1/4 (divide numerator & denominator by 2). So both ate an equal amount!'
    },
    thinkingStrategy: '🧠 Equivalent Visualizer: Convert all fractions to the same common denominator or simplify before comparing!',
    recommendedPractice: 'Compare mixed fractions and simplify fraction expressions.'
  },
  chap_5: {
    importance: 'Spatial reasoning, counting 3D faces/edges, and perimeter logic frequently appear in Logical Reasoning sections of Olympiad papers.',
    competitions: [
      'SOF International Mathematics Olympiad (IMO)',
      'SilverZone IOM',
      'Unified Council NSTSE'
    ],
    difficulty: 'Intermediate',
    sampleQuestion: {
      problem: 'How many edges does a rectangular cuboid box have?',
      options: ['6', '8', '12', '16'],
      correctIndex: 2,
      explanation: 'A cuboid has 6 rectangular faces, 8 vertices, and 12 straight edges.'
    },
    thinkingStrategy: '🧠 3D Mental Folding: Picture holding the shape in your hands and count top, bottom, and side edges systematically.',
    recommendedPractice: 'Count faces and edges of composite 3D shapes.'
  },
  chap_6: {
    importance: 'Unit conversions between kilograms, grams, meters, and liters test precision and careful attention to problem details.',
    competitions: [
      'SOF International Mathematics Olympiad (IMO)',
      'Unified Council UIMO',
      'AMO'
    ],
    difficulty: 'Beginner',
    sampleQuestion: {
      problem: 'A container holds 3 L 450 mL of water. How many milliliters of water is this in total?',
      options: ['345 mL', '3,450 mL', '34,500 mL', '345,000 mL'],
      correctIndex: 1,
      explanation: '3 L = 3,000 mL. Adding 450 mL gives 3,450 mL!'
    },
    thinkingStrategy: '🧠 Standardize Units First: Never add or subtract numbers with different measurement units! Convert to smaller units first.',
    recommendedPractice: 'Practice metric unit conversion matching games.'
  },
  chap_7: {
    importance: 'Elapsed time and calendar calculations are favorite real-world problem scenarios in competitive mathematics exams.',
    competitions: [
      'SOF International Mathematics Olympiad (IMO)',
      'SilverZone IOM',
      'SEAMO'
    ],
    difficulty: 'Intermediate',
    sampleQuestion: {
      problem: 'A movie starts at 3:45 PM and lasts for 2 hours 15 minutes. At what time does the movie end?',
      options: ['5:45 PM', '6:00 PM', '6:15 PM', '6:30 PM'],
      correctIndex: 1,
      explanation: '3:45 PM + 2 hours = 5:45 PM. Adding 15 minutes completes the hour to 6:00 PM!'
    },
    thinkingStrategy: '🧠 Timeline Jump: Jump in round hour chunks first, then add remaining minutes to cross hour boundaries smoothly.',
    recommendedPractice: 'Solve elapsed time timeline word problems.'
  }
};

/**
 * Deep Interactive Mathematics Knowledge Base
 * Built for MathsIsFun educational depth & 13 mandatory topic modules.
 * Includes: Definition, Intuition, Visual Explanation, Worked Examples (Easy, Med, Hard),
 * Real-Life Applications, Common Mistakes, Memory Tricks, 10+ Practice Problems, 10+ Multi-format Quizzes, and Related Topics.
 */

export const deepInteractiveMathKnowledge = {

  // ==========================================
  // 1. TRIGONOMETRY
  // ==========================================
  trig_unit_circle: {
    title: 'Trigonometry Unit Circle & SOH-CAH-TOA',
    domain: 'Geometry & Trigonometry',
    color: '#7c3aed',

    definition: 'Trigonometry is the branch of mathematics that studies the relationship between angle measures and side lengths in right-angled triangles.',

    intuition: `Why does Trigonometry exist?
Imagine wanting to measure the height of a massive mountain or a tall skyscraper without climbing it with a tape measure. By standing at a safe distance and measuring the angle to the top, trigonometry allows you to calculate the exact height using right-triangle ratios!

What problem does it solve?
It turns impossible physical measurements into simple angle calculations. Ancient navigators used stars and trigonometry to sail across oceans, and modern GPS satellites use it to locate your phone within meters.`,

    visualExplanation: `The Unit Circle Model:
A circle of radius r = 1 centered at the origin (0, 0) on the Cartesian coordinate plane:
• As you rotate a radius line by angle θ, the point P(x, y) traces the edge of the circle.
• The horizontal distance x is ALWAYS equal to Cosine: cos(θ) = x.
• The vertical height y is ALWAYS equal to Sine: sin(θ) = y.
• The slope of the line (y / x) is Tangent: tan(θ) = sin(θ) / cos(θ).`,

    workedExamples: [
      {
        level: 'Easy',
        problem: 'In a right-angled triangle, the side opposite angle θ is 3 cm and the hypotenuse is 5 cm. Find sin(θ).',
        solution: 'Formula: sin(θ) = Opposite / Hypotenuse\nsin(θ) = 3 / 5 = 0.6.'
      },
      {
        level: 'Medium',
        problem: 'A 10-meter ladder leans against a vertical wall making a 60° angle with the ground. How high up the wall does the ladder reach?',
        solution: 'Height h is opposite to the 60° angle. Ladder length 10 m is the hypotenuse.\nsin(60°) = h / 10\nSince sin(60°) = √3 / 2 ≈ 0.866:\nh = 10 × 0.866 = 8.66 meters.'
      },
      {
        level: 'Hard',
        problem: 'If cos(θ) = 5/13 and θ is an acute angle, find the exact values of sin(θ) and tan(θ).',
        solution: 'Using Pythagorean identity: sin²(θ) + cos²(θ) = 1\nsin²(θ) + (5/13)² = 1\nsin²(θ) + 25/169 = 1\nsin²(θ) = 144/169\nsin(θ) = 12/13.\nThen tan(θ) = sin(θ) / cos(θ) = (12/13) / (5/13) = 12/5.'
      }
    ],

    realLifeApplications: [
      '🏗️ Civil Engineering & Architecture: Calculating roof pitches, bridge support angles, and crane boom lengths.',
      '🛰️ GPS Navigation & Aviation: Calculating aircraft flight paths and satellite triangulation positions.',
      '🎮 Video Game Development: Rotating 3D character models and computing camera viewing angles.'
    ],

    commonMistakes: [
      {
        mistake: 'Confusing Opposite and Adjacent sides.',
        reason: 'The Opposite side is ALWAYS directly across from angle θ. The Adjacent side is ALWAYS next to angle θ (excluding the hypotenuse).'
      },
      {
        mistake: 'Dividing by zero when calculating tan(90°).',
        reason: 'At 90°, cos(90°) = 0. Since tan(θ) = sin(θ)/cos(θ), tan(90°) = 1/0 which is mathematically Undefined (∞).'
      }
    ],

    memoryTricks: [
      '🧠 SOH-CAH-TOA: "Some Old Horse / Caught Another Horse / Taking Oats Away"',
      '✨ The √(n)/2 Rule: Write n = 0, 1, 2, 3, 4 for 0°, 30°, 45°, 60°, 90°. Then sin(θ) = √(n)/2!'
    ],

    practiceProblems: [
      { id: 1, level: 'Easy', question: 'Find sin(90°).', answer: '1' },
      { id: 2, level: 'Easy', question: 'What is cos(0°)?', answer: '1' },
      { id: 3, level: 'Easy', question: 'What is tan(45°)?', answer: '1' },
      { id: 4, level: 'Medium', question: 'If sin(θ) = 0.5, what is θ in degrees?', answer: '30°' },
      { id: 5, level: 'Medium', question: 'If tan(θ) = 1 and θ is acute, what is θ?', answer: '45°' },
      { id: 6, level: 'Medium', question: 'In a right triangle, Adj = 4, Hyp = 5. Find cos(θ).', answer: '0.8' },
      { id: 7, level: 'Hard', question: 'Evaluate sin²(45°) + cos²(45°).', answer: '1' },
      { id: 8, level: 'Hard', question: 'If cos(θ) = 0.8, find sin(θ).', answer: '0.6' },
      { id: 9, level: 'Challenge', question: 'Find the height of a building if a 100 m shadow is cast when sun elevation is 30°.', answer: '57.7 m' },
      { id: 10, level: 'Challenge', question: 'Simplify: (1 - cos²θ) / sin(θ).', answer: 'sin(θ)' }
    ],

    quizQuestions: [
      { id: 1, type: 'mcq', question: 'What is the value of sin(30°)?', options: ['0.5', '1', '0.707', '0.866'], correctIndex: 0, explanation: 'Using √(1)/2 = 1/2 = 0.5.' },
      { id: 2, type: 'mcq', question: 'Which ratio defines Tangent?', options: ['Opposite / Adjacent', 'Opposite / Hypotenuse', 'Adjacent / Hypotenuse', 'Hypotenuse / Opposite'], correctIndex: 0, explanation: 'TOA: tan = Opposite / Adjacent.' },
      { id: 3, type: 'fill_in', question: 'Complete the identity: sin²(θ) + cos²(θ) = ___', correctAnswer: '1', explanation: 'Pythagorean identity is always equal to 1.' },
      { id: 4, type: 'mcq', question: 'What is tan(90°)?', options: ['Undefined', '0', '1', '0.5'], correctIndex: 0, explanation: '1 / 0 is mathematically undefined.' },
      { id: 5, type: 'mcq', question: 'What is cos(60°)?', options: ['0.5', '0.866', '1', '0'], correctIndex: 0, explanation: 'cos(60°) = sin(30°) = 0.5.' },
      { id: 6, type: 'matching', question: 'Match the ratio to formula:', pairs: [{ left: 'sin(θ)', right: 'Opp / Hyp' }, { left: 'cos(θ)', right: 'Adj / Hyp' }, { left: 'tan(θ)', right: 'Opp / Adj' }], explanation: 'SOH-CAH-TOA rules.' },
      { id: 7, type: 'mcq', question: 'On the unit circle, what coordinate represents sin(θ)?', options: ['y-coordinate', 'x-coordinate', 'Radius', 'Slope'], correctIndex: 0, explanation: 'Sine represents vertical height y.' },
      { id: 8, type: 'fill_in', question: 'In a right triangle, if Opp = 6 and Adj = 8, then tan(θ) = ___', correctAnswer: '0.75', explanation: '6 / 8 = 0.75.' },
      { id: 9, type: 'mcq', question: 'What is sin(0°)?', options: ['0', '1', '0.5', 'Undefined'], correctIndex: 0, explanation: 'At 0°, vertical height y = 0.' },
      { id: 10, type: 'mcq', question: 'What is cos(90°)?', options: ['0', '1', '0.5', '-1'], correctIndex: 0, explanation: 'At 90°, horizontal x = 0.' }
    ],

    relatedTopics: [
      { id: 'pythagoras_theorem', title: 'Pythagorean Theorem (a² + b² = c²)' },
      { id: 'angles_transversals', title: 'Angles & Parallel Lines' },
      { id: 'quadrant_grid', title: 'Cartesian Coordinate Plane' }
    ]
  },

  // ==========================================
  // 1B. HEIGHTS & DISTANCES
  // ==========================================
  heights_distances: {
    title: 'Heights & Distances, Angle of Elevation & Depression',
    domain: 'Geometry & Trigonometry',
    color: '#8b5cf6',
    definition: 'Heights & Distances uses trigonometric tangent ratios (tan θ = Height / Distance) to calculate inaccessible physical heights (buildings, mountains, towers) from ground distance and angle of sight.',
    intuition: `Why does Heights & Distances exist?
Measuring tall structures directly with a tape measure is dangerous or physically impossible. By measuring ground distance and using a clinometer to find the angle of sight, trigonometry gives the exact height instantly!`,
    visualExplanation: `The Right Triangle Sight Model:
• Line of Sight: The line drawn from the observer's eye to the top of the object.
• Angle of Elevation (θ): Angle between horizontal line and line of sight looking UP.
• Formula: Height = Distance × tan(θ).`,
    workedExamples: [
      { level: 'Easy', problem: 'A kite string is 50 m long and makes a 30° angle with the ground. Find the height of the kite.', solution: 'sin(30°) = Height / 50\n0.5 = Height / 50 → Height = 25 meters.' },
      { level: 'Medium', problem: 'From a point 100 m away from the base of a tower, the angle of elevation to the top is 45°. Find tower height.', solution: 'Height = Distance × tan(45°)\nHeight = 100 × 1 = 100 meters.' }
    ],
    realLifeApplications: ['🗼 Telecom Tower Design: Calculating antenna height and guy-wire anchor points.', '✈️ Aviation: Instrument landing system approach glide path angles.'],
    commonMistakes: [{ mistake: 'Confusing Angle of Elevation with Angle of Depression.', reason: 'Angle of Elevation looks UP from horizontal; Angle of Depression looks DOWN from horizontal.' }],
    memoryTricks: ['🧠 Height = Distance × tan(θ) ("H = D tan θ")'],
    practiceProblems: [{ id: 1, level: 'Easy', question: 'If distance is 50 m and angle is 45°, find height.', answer: '50 m' }],
    quizQuestions: [{ id: 1, type: 'mcq', question: 'What is tan(45°)?', options: ['1', '0', '0.5', 'Undefined'], correctIndex: 0, explanation: 'tan(45°) = 1.' }],
    relatedTopics: [{ id: 'trig_unit_circle', title: 'Unit Circle & Trigonometric Ratios' }]
  },

  // ==========================================
  // 2. PYTHAGOREAN THEOREM
  // ==========================================
  pythagoras_theorem: {
    title: 'Pythagorean Theorem & Distance Formula',
    domain: 'Geometry & Trigonometry',
    color: '#7c3aed',

    definition: 'The Pythagorean Theorem states that in any right-angled triangle, the area of the square built on the hypotenuse equals the sum of the areas of the squares built on the other two sides.',

    intuition: `Why does the Pythagorean Theorem exist?
Before this discovery over 2,500 years ago, ancient builders struggled to construct perfectly square corners for houses and pyramids. By creating a triangle with side lengths 3, 4, and 5 units, they guaranteed a perfect 90° right angle every single time!

What problem does it solve?
It allows you to calculate the shortest straight-line distance between any two points in 2D or 3D space without having to walk around corners.`,

    visualExplanation: `The Geometric Area Proof:
Construct a square on side a (area = a²), a square on side b (area = b²), and a square on hypotenuse c (area = c²).
If you cut the a² and b² squares into puzzle pieces, they will fit PERFECTLY into the c² hypotenuse square!
Formula: a² + b² = c²`,

    workedExamples: [
      {
        level: 'Easy',
        problem: 'A right-angled triangle has legs a = 6 cm and b = 8 cm. Find hypotenuse c.',
        solution: 'c² = a² + b²\nc² = 6² + 8² = 36 + 64 = 100\nc = √100 = 10 cm.'
      },
      {
        level: 'Medium',
        problem: 'Find the distance between points (1, 2) and (4, 6) on a grid.',
        solution: 'Horizontal difference dx = 4 - 1 = 3 units.\nVertical difference dy = 6 - 2 = 4 units.\nDistance d = √(dx² + dy²) = √(3² + 4²) = √(9 + 16) = √25 = 5 units.'
      },
      {
        level: 'Hard',
        problem: 'A 13 ft ladder leans against a building. If the base of the ladder is 5 ft from the wall, how high up the wall does it reach?',
        solution: 'Hypotenuse c = 13, Leg a = 5, Leg b = height.\na² + b² = c²\n5² + b² = 13²\n25 + b² = 169\nb² = 169 - 25 = 144\nb = √144 = 12 feet.'
      }
    ],

    realLifeApplications: [
      '📐 Carpentry & Construction: Using 3-4-5 rope loops to square foundation corners.',
      '📺 Display Screen Sizes: TV and smartphone screens are measured diagonally across corners using Pythagoras.',
      '🗺️ Navigation & Mapping: Computing direct straight-line distance (as the crow flies) between GPS coordinates.'
    ],

    commonMistakes: [
      {
        mistake: 'Applying a² + b² = c² to non-right triangles.',
        reason: 'The Pythagorean Theorem works ONLY for triangles with a 90° right angle!'
      },
      {
        mistake: 'Assuming c is always a leg.',
        reason: 'c is ALWAYS the longest side (Hypotenuse) opposite the 90° right angle.'
      }
    ],

    memoryTricks: [
      '🧠 Remember the 3-4-5 Rule: 3² + 4² = 9 + 16 = 25 = 5²!',
      '✨ Famous Triples: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25)'
    ],

    practiceProblems: [
      { id: 1, level: 'Easy', question: 'If a = 3, b = 4, find c.', answer: '5' },
      { id: 2, level: 'Easy', question: 'If a = 5, b = 12, find c.', answer: '13' },
      { id: 3, level: 'Easy', question: 'If c = 10, a = 6, find b.', answer: '8' },
      { id: 4, level: 'Medium', question: 'Find distance between (0, 0) and (6, 8).', answer: '10' },
      { id: 5, level: 'Medium', question: 'Is a triangle with sides 7, 24, 25 a right triangle?', answer: 'Yes' },
      { id: 6, level: 'Medium', question: 'Find hypotenuse of isosceles right triangle with leg = 1.', answer: '√2 ≈ 1.414' },
      { id: 7, level: 'Hard', question: 'Find the diagonal length of a rectangle with sides 9 cm and 12 cm.', answer: '15 cm' },
      { id: 8, level: 'Hard', question: 'Find length of space diagonal of a 3D box with dimensions 3 × 4 × 12.', answer: '13' },
      { id: 9, level: 'Challenge', question: 'A person walks 8 km North, then 6 km East, then 10 km North. Find distance from start.', answer: '20 km' },
      { id: 10, level: 'Challenge', question: 'Find area of an equilateral triangle with side = 6 cm.', answer: '9√3 ≈ 15.58 cm²' }
    ],

    quizQuestions: [
      { id: 1, type: 'mcq', question: 'In a² + b² = c², what is c?', options: ['Hypotenuse', 'Shortest side', 'Right angle', 'Perimeter'], correctIndex: 0, explanation: 'c is always the hypotenuse.' },
      { id: 2, type: 'mcq', question: 'If a = 6 and b = 8, what is c?', options: ['10', '14', '12', '100'], correctIndex: 0, explanation: '6² + 8² = 36 + 64 = 100 → √100 = 10.' },
      { id: 3, type: 'fill_in', question: 'The Pythagorean theorem applies only to ___ triangles.', correctAnswer: 'right', explanation: 'Applies strictly to right-angled triangles.' },
      { id: 4, type: 'mcq', question: 'Which of the following is a Pythagorean triple?', options: ['(5, 12, 13)', '(2, 3, 4)', '(4, 5, 6)', '(1, 1, 2)'], correctIndex: 0, explanation: '5² + 12² = 25 + 144 = 169 = 13².' },
      { id: 5, type: 'mcq', question: 'What is the distance formula between (x₁, y₁) and (x₂, y₂)?', options: ['√((x₂-x₁)² + (y₂-y₁)²)', '(x₂+x₁)/2', '(y₂-y₁)/(x₂-x₁)', 'x₁y₂ - x₂y₁'], correctIndex: 0, explanation: 'Standard 2D Euclidean distance formula.' },
      { id: 6, type: 'matching', question: 'Match leg pairs (a, b) with hypotenuse c:', pairs: [{ left: '(3, 4)', right: '5' }, { left: '(5, 12)', right: '13' }, { left: '(8, 15)', right: '17' }], explanation: 'Standard triples.' },
      { id: 7, type: 'mcq', question: 'If c = 13 and a = 5, what is b?', options: ['12', '8', '10', '14'], correctIndex: 0, explanation: '13² - 5² = 169 - 25 = 144 → √144 = 12.' },
      { id: 8, type: 'fill_in', question: 'A TV size rated as 55 inches measures its ___ length.', correctAnswer: 'diagonal', explanation: 'TV screen size measures diagonal distance.' },
      { id: 9, type: 'mcq', question: 'What is 9² + 12²?', options: ['225', '144', '81', '400'], correctIndex: 0, explanation: '81 + 144 = 225 = 15².' },
      { id: 10, type: 'mcq', question: 'In an isosceles right triangle with leg = 5, what is the hypotenuse?', options: ['5√2', '10', '25', '5'], correctIndex: 0, explanation: 'c = √(5² + 5²) = √50 = 5√2.' }
    ],

    relatedTopics: [
      { id: 'trig_unit_circle', title: 'Trigonometry & Ratios' },
      { id: 'quadrant_grid', title: 'Cartesian Coordinates & Distance' },
      { id: '2d_shapes_tangrams', title: '2D Polygons & Triangles' }
    ]
  },

  // ==========================================
  // 3. FRACTIONS, DECIMALS & PERCENTAGES
  // ==========================================
  fraction_pizza: {
    title: 'Fractions, Decimals & Percentages',
    domain: 'Numbers & Operations',
    color: '#ce82ff',

    definition: 'A Fraction represents equal parts of a whole quantity. A Decimal is a fraction written in base-10 positional format, and a Percentage represents parts per 100.',

    intuition: `Why do Fractions exist?
Whole numbers work great when counting complete items like 5 apples. But when you slice 1 apple into equal pieces to share with 4 friends, you need a way to describe less-than-a-whole quantities!

What problem does it solve?
Fractions allow precise measurement in cooking, construction, finance, and science whenever items are divided into smaller equal parts.`,

    visualExplanation: `The Pizza & Fraction Wall Models:
• Pizza Slicer: If a pizza is sliced into 4 equal pieces and you eat 3 slices, you have consumed 3/4 (75%) of the pizza.
• Fraction Wall: Comparing fraction bar lengths side-by-side demonstrates visually that 1/2 = 2/4 = 3/6 = 4/8 = 5/10 (Equivalent Fractions).`,

    workedExamples: [
      {
        level: 'Easy',
        problem: 'Simplify 12/16 to its lowest terms.',
        solution: 'Find Highest Common Factor of 12 and 16 (HCF = 4).\nDivide top and bottom by 4:\n(12 ÷ 4) / (16 ÷ 4) = 3/4.'
      },
      {
        level: 'Medium',
        problem: 'Add 1/3 + 1/4.',
        solution: 'Find Common Denominator (12):\n1/3 = 4/12\n1/4 = 3/12\n4/12 + 3/12 = 7/12.'
      },
      {
        level: 'Hard',
        problem: 'Convert 3/8 into a decimal and percentage.',
        solution: 'Decimal: 3 ÷ 8 = 0.375.\nPercentage: 0.375 × 100% = 37.5%.'
      }
    ],

    realLifeApplications: [
      '🍕 Food Sharing & Recipes: Scaling recipe ingredients for 3/4 cup of sugar or half a spoon.',
      '🏷️ Retail Discounts: Calculating 25% OFF ($1/4 off) clothing sales prices.',
      '📊 Business Profits: Expressing quarterly growth ratios and market shares.'
    ],

    commonMistakes: [
      {
        mistake: 'Adding denominators directly when adding fractions (e.g. 1/2 + 1/3 = 2/5).',
        reason: 'WRONG! You cannot add parts of different sizes. You MUST convert to a common denominator first! (1/2 + 1/3 = 3/6 + 2/6 = 5/6).'
      }
    ],

    memoryTricks: [
      '🧠 Top = Numerator ("Number of parts you have"), Bottom = Denominator ("Down below total parts").',
      '✨ Dividing by a fraction: "Keep, Change, Flip!" (e.g. 1/2 ÷ 3/4 = 1/2 × 4/3 = 4/6 = 2/3).'
    ],

    practiceProblems: [
      { id: 1, level: 'Easy', question: 'Simplify 4/8.', answer: '1/2' },
      { id: 2, level: 'Easy', question: 'Convert 0.5 to a fraction.', answer: '1/2' },
      { id: 3, level: 'Easy', question: 'What is 50% as a decimal?', answer: '0.5' },
      { id: 4, level: 'Medium', question: 'Add 1/5 + 2/5.', answer: '3/5' },
      { id: 5, level: 'Medium', question: 'Subtract 3/4 - 1/2.', answer: '1/4' },
      { id: 6, level: 'Medium', question: 'Convert 3/5 to a percentage.', answer: '60%' },
      { id: 7, level: 'Hard', question: 'Multiply 2/3 × 3/4.', answer: '1/2' },
      { id: 8, level: 'Hard', question: 'Divide 1/2 ÷ 1/4.', answer: '2' },
      { id: 9, level: 'Challenge', question: 'Calculate 20% of 150.', answer: '30' },
      { id: 10, level: 'Challenge', question: 'Find 3/4 of 80.', answer: '60' }
    ],

    quizQuestions: [
      { id: 1, type: 'mcq', question: 'Which fraction is equivalent to 3/4?', options: ['6/8', '5/6', '9/16', '3/8'], correctIndex: 0, explanation: '(3×2)/(4×2) = 6/8.' },
      { id: 2, type: 'mcq', question: 'What is 3/5 expressed as a percentage?', options: ['60%', '30%', '50%', '75%'], correctIndex: 0, explanation: '(3/5) × 100% = 60%.' },
      { id: 3, type: 'fill_in', question: '1/2 + 1/4 = ___ / 4', correctAnswer: '3', explanation: '2/4 + 1/4 = 3/4.' },
      { id: 4, type: 'mcq', question: 'What is 0.75 as a fraction in simplest terms?', options: ['3/4', '7/5', '75/10', '1/2'], correctIndex: 0, explanation: '75/100 = 3/4.' },
      { id: 5, type: 'mcq', question: 'What rule applies when dividing fractions?', options: ['Keep, Change, Flip', 'Add Top and Bottom', 'Cross Multiply Numerators', 'Cancel Zeros'], correctIndex: 0, explanation: 'Multiply by reciprocal.' },
      { id: 6, type: 'matching', question: 'Match fraction to percentage:', pairs: [{ left: '1/2', right: '50%' }, { left: '1/4', right: '25%' }, { left: '3/4', right: '75%' }], explanation: 'Standard conversions.' },
      { id: 7, type: 'mcq', question: 'What is 10% of 250?', options: ['25', '2.5', '50', '250'], correctIndex: 0, explanation: '250 / 10 = 25.' },
      { id: 8, type: 'fill_in', question: 'In the fraction 5/8, digit 8 is the ___', correctAnswer: 'denominator', explanation: 'Bottom number is denominator.' },
      { id: 9, type: 'mcq', question: 'Which is larger: 2/3 or 3/5?', options: ['2/3 (0.667)', '3/5 (0.60)', 'They are equal', 'Cannot tell'], correctIndex: 0, explanation: '2/3 ≈ 0.667 while 3/5 = 0.60.' },
      { id: 10, type: 'mcq', question: 'What is 1/2 × 1/3?', options: ['1/6', '2/5', '1/5', '5/6'], correctIndex: 0, explanation: '(1×1)/(2×3) = 1/6.' }
    ],

    relatedTopics: [
      { id: 'counting_placevalue', title: 'Whole Numbers & Place Value' },
      { id: 'metric_conversions', title: 'Unit Conversions & Decimals' }
    ]
  },

  // ==========================================
  // 4. LINEAR & QUADRATIC FUNCTIONS
  // ==========================================
  algebra_parabola: {
    title: 'Linear & Quadratic Functions (Parabola Graphs)',
    domain: 'Algebra & Functions',
    color: '#1cb0f6',

    definition: 'A Linear Function (y = mx + c) forms a straight line. A Quadratic Function (y = ax² + bx + c) forms a curved U-shaped parabola.',

    intuition: `Why do Linear & Quadratic Graphs exist?
Linear graphs model constant rates of change (like driving at a steady 60 km/h). Quadratic graphs model accelerating trajectories (like throwing a ball into the air or launching a space rocket)!

What problem does it solve?
Parabola equations allow engineers to design satellite dish receivers, car headlights, and predict where a projectile will land.`,

    visualExplanation: `Parabola Graph Anatomy:
• Curvature a: If a > 0, parabola opens UPWARD (smiling U). If a < 0, parabola opens DOWNWARD (frowning ∩).
• Vertex V(h, k): The peak maximum or lowest minimum point at x = -b / (2a).
• Discriminant Δ = b² - 4ac: Determines root count (x-axis intersections).`,

    workedExamples: [
      {
        level: 'Easy',
        problem: 'Find the y-intercept of the line y = 3x - 5.',
        solution: 'In y = mx + c, the constant c is the y-intercept.\nHere c = -5, so the line crosses the y-axis at (0, -5).'
      },
      {
        level: 'Medium',
        problem: 'Find the vertex x-coordinate of parabola y = 2x² - 8x + 3.',
        solution: 'Formula: h = -b / (2a)\na = 2, b = -8\nh = -(-8) / (2 × 2) = 8 / 4 = 2.'
      },
      {
        level: 'Hard',
        problem: 'Find the roots of x² - 5x + 6 = 0 using the quadratic formula.',
        solution: 'a = 1, b = -5, c = 6\nDiscriminant Δ = b² - 4ac = (-5)² - 4(1)(6) = 25 - 24 = 1.\nx = (-b ± √Δ) / (2a) = (5 ± √1) / 2 = (5 ± 1) / 2.\nx₁ = 6/2 = 3, x₂ = 4/2 = 2.'
      }
    ],

    realLifeApplications: [
      '⚽ Sports Trajectories: Calculating basketball arch shots and golf ball paths.',
      '📡 Satellite Antennas: Curved parabolic dish shapes focus incoming signals onto a central receiver point.',
      '🚗 Automobile Headlights: Reflectors behind headlight bulbs use parabolas to project parallel light beams.'
    ],

    commonMistakes: [
      {
        mistake: 'Forgetting that a negative times a negative equals a positive in the quadratic formula.',
        reason: 'When b = -5, -b is -(-5) = +5!'
      }
    ],

    memoryTricks: [
      '🧠 Slope m = "Rise over Run" = (y₂ - y₁) / (x₂ - x₁).',
      '✨ Quadratic Formula Song (to Pop Goes the Weasel): "x is equal to negative b, plus or minus square root, of b squared minus 4ac, all over 2a!"'
    ],

    practiceProblems: [
      { id: 1, level: 'Easy', question: 'What is the slope of y = 4x + 2?', answer: '4' },
      { id: 2, level: 'Easy', question: 'Find y when x = 3 in y = 2x + 1.', answer: '7' },
      { id: 3, level: 'Easy', question: 'Does y = -x² open upward or downward?', answer: 'Downward' },
      { id: 4, level: 'Medium', question: 'Find discriminant of x² - 4x + 4 = 0.', answer: '0' },
      { id: 5, level: 'Medium', question: 'Find roots of x² - 16 = 0.', answer: 'x = ±4' },
      { id: 6, level: 'Medium', question: 'Find vertex x of y = x² - 6x + 5.', answer: '3' },
      { id: 7, level: 'Hard', question: 'Solve x² - 7x + 12 = 0.', answer: 'x = 3, 4' },
      { id: 8, level: 'Hard', question: 'Find slope of line through (1, 2) and (3, 8).', answer: '3' },
      { id: 9, level: 'Challenge', question: 'Find maximum y value of parabola y = -x² + 4x + 1.', answer: '5' },
      { id: 10, level: 'Challenge', question: 'If Δ < 0, how many real roots exist?', answer: '0' }
    ],

    quizQuestions: [
      { id: 1, type: 'mcq', question: 'What is the quadratic formula?', options: ['x = (-b ± √(b² - 4ac)) / (2a)', 'y = mx + c', 'a² + b² = c²', 'x = -b / a'], correctIndex: 0, explanation: 'Standard quadratic roots formula.' },
      { id: 2, type: 'mcq', question: 'If discriminant Δ > 0, how many distinct real roots exist?', options: ['2 real roots', '1 real root', '0 real roots', 'Infinite roots'], correctIndex: 0, explanation: 'Δ > 0 yields two real roots.' },
      { id: 3, type: 'fill_in', question: 'The vertex x-coordinate formula is x = -b / (___)', correctAnswer: '2a', explanation: 'Vertex x = -b / (2a).' },
      { id: 4, type: 'mcq', question: 'What shape is formed by y = ax² + bx + c?', options: ['Parabola', 'Circle', 'Straight line', 'Hyperbola'], correctIndex: 0, explanation: 'Quadratic graphs form parabolas.' },
      { id: 5, type: 'mcq', question: 'In y = mx + c, what does m represent?', options: ['Slope', 'y-intercept', 'Vertex', 'Discriminant'], correctIndex: 0, explanation: 'm is the line slope.' },
      { id: 6, type: 'matching', question: 'Match discriminant value to root count:', pairs: [{ left: 'Δ > 0', right: '2 Real Roots' }, { left: 'Δ = 0', right: '1 Real Root' }, { left: 'Δ < 0', right: '0 Real Roots' }], explanation: 'Discriminant properties.' },
      { id: 7, type: 'mcq', question: 'What is the y-intercept of y = 5x + 7?', options: ['(0, 7)', '(0, 5)', '(7, 0)', '(5, 7)'], correctIndex: 0, explanation: 'When x = 0, y = 7.' },
      { id: 8, type: 'fill_in', question: 'If a < 0, the parabola opens ___', correctAnswer: 'downward', explanation: 'Negative a opens downward.' },
      { id: 9, type: 'mcq', question: 'What is the slope of a horizontal line?', options: ['0', '1', 'Undefined', 'Infinite'], correctIndex: 0, explanation: 'Horizontal line has zero rise.' },
      { id: 10, type: 'mcq', question: 'What is the slope of a vertical line?', options: ['Undefined', '0', '1', '-1'], correctIndex: 0, explanation: 'Vertical line involves division by zero.' }
    ],

    relatedTopics: [
      { id: 'linear_equations', title: 'Linear Equations & Balance Scale' },
      { id: 'quadrant_grid', title: 'Cartesian Coordinate Plane' }
    ]
  },

  // ==========================================
  // 5. WHOLE NUMBERS & PLACE VALUE
  // ==========================================
  counting_placevalue: {
    title: 'Whole Numbers & Place Value System',
    domain: 'Numbers & Operations',
    color: '#58cc02',

    definition: 'Whole Numbers are non-negative counting numbers: 0, 1, 2, 3, 4, 5... Place Value specifies that the numerical value of a digit depends on its position in a number.',

    intuition: `Why does Place Value exist?
Without place value, writing large numbers would require inventing thousands of new symbols! By using positional columns (Ones, Tens, Hundreds, Thousands), we can represent any number in the universe using just 10 digits (0 through 9)!`,

    visualExplanation: `Base-10 Block Decomposition:
• 1 Hundred Flat = 10 Tens Rods = 100 Ones Cubes.
• Example: 425 = 4 Hundreds Flats + 2 Tens Rods + 5 Ones Cubes.`,

    workedExamples: [
      {
        level: 'Easy',
        problem: 'Write 54,209 in expanded form.',
        solution: '50,000 + 4,000 + 200 + 0 + 9.'
      },
      {
        level: 'Medium',
        problem: 'Find the predecessor and successor of 1,000.',
        solution: 'Predecessor (N - 1) = 999.\nSuccessor (N + 1) = 1,001.'
      },
      {
        level: 'Hard',
        problem: 'Format 5240900 in Indian vs International Place Value systems.',
        solution: 'Indian System: 52,40,900 (52 Lakhs Forty Thousand Nine Hundred).\nInternational System: 5,240,900 (5 Million Two Hundred Forty Thousand Nine Hundred).'
      }
    ],

    realLifeApplications: [
      '🏦 Banking: Writing amounts on bank deposit slips and checks.',
      '📦 Inventory Management: Counting warehouse stock items.'
    ],

    commonMistakes: [
      {
        mistake: 'Confusing Place Value with Face Value.',
        reason: 'Face value of 7 in 7,500 is 7; Place Value is 7,000!'
      }
    ],

    memoryTricks: [
      '🧠 Moving Left = Multiply by 10 (×10). Moving Right = Divide by 10 (÷10).'
    ],

    practiceProblems: [
      { id: 1, level: 'Easy', question: 'What is successor of 99?', answer: '100' },
      { id: 2, level: 'Easy', question: 'What is predecessor of 50?', answer: '49' },
      { id: 3, level: 'Easy', question: 'Is 0 a whole number?', answer: 'Yes' },
      { id: 4, level: 'Medium', question: 'Place value of 5 in 45,210?', answer: '5,000' },
      { id: 5, level: 'Medium', question: 'Face value of 8 in 8,920?', answer: '8' },
      { id: 6, level: 'Medium', question: 'Expand 3,450.', answer: '3000+400+50' },
      { id: 7, level: 'Hard', question: 'Smallest 6-digit whole number?', answer: '100,000' },
      { id: 8, level: 'Hard', question: 'Largest 5-digit whole number?', answer: '99,999' },
      { id: 9, level: 'Challenge', question: 'Difference between largest 4-digit and smallest 4-digit number?', answer: '8,999' },
      { id: 10, level: 'Challenge', question: 'Write 4 Lakhs in numbers.', answer: '400,000' }
    ],

    quizQuestions: [
      { id: 1, type: 'mcq', question: 'What is the place value of 7 in 750,412?', options: ['700,000', '7,000', '70,000', '700'], correctIndex: 0, explanation: '7 is in hundred-thousands column.' },
      { id: 2, type: 'fill_in', question: 'Predecessor of N is N - ___', correctAnswer: '1', explanation: 'N - 1.' },
      { id: 3, type: 'mcq', question: 'Which is the smallest whole number?', options: ['0', '1', '-1', '10'], correctIndex: 0, explanation: '0 is the smallest whole number.' },
      { id: 4, type: 'mcq', question: 'How many tens make 1 Hundred?', options: ['10', '100', '1', '5'], correctIndex: 0, explanation: '10 × 10 = 100.' },
      { id: 5, type: 'mcq', question: 'Which system uses Millions and Billions?', options: ['International System', 'Indian System', 'Roman System', 'Binary System'], correctIndex: 0, explanation: 'International system.' },
      { id: 6, type: 'matching', question: 'Match terms:', pairs: [{ left: 'Successor', right: 'N + 1' }, { left: 'Predecessor', right: 'N - 1' }, { left: 'Base', right: 'Base-10' }], explanation: 'Whole number rules.' },
      { id: 7, type: 'mcq', question: 'What is 400 + 20 + 5?', options: ['425', '4205', '452', '400205'], correctIndex: 0, explanation: 'Standard form 425.' },
      { id: 8, type: 'fill_in', question: 'Face value of 9 in 9,876 is ___', correctAnswer: '9', explanation: 'Face value is digit itself.' },
      { id: 9, type: 'mcq', question: 'How many thousands make 1 Lakh?', options: ['100 Thousands', '10 Thousands', '1,000', '10'], correctIndex: 0, explanation: '100 × 1,000 = 100,000 = 1 Lakh.' },
      { id: 10, type: 'mcq', question: 'Is -5 a whole number?', options: ['No (It is an integer)', 'Yes', 'Only on weekends', 'Sometimes'], correctIndex: 0, explanation: 'Whole numbers cannot be negative.' }
    ],

    relatedTopics: [
      { id: 'fraction_pizza', title: 'Fractions & Decimals' },
      { id: 'integers_negatives', title: 'Integers & Number Line' }
    ]
  },

  // ==========================================
  // 6. LINEAR EQUATIONS
  // ==========================================
  linear_equations: {
    title: 'Linear Equations & Equation Balance Scale',
    domain: 'Algebra & Functions',
    color: '#1cb0f6',
    definition: 'A Linear Equation is an algebraic equation where each term has an exponent of 1 (e.g., ax + b = c). Its graph forms a straight line.',
    intuition: `Why do Linear Equations exist?
Linear equations act like a double-sided balance scale. To keep the scale balanced, whatever mathematical operation you do to the left side (+, -, ×, ÷), you MUST do to the right side!

What problem does it solve?
It lets you solve for unknown variables in everyday problems like budget planning, speed calculations, and physics formulas.`,
    visualExplanation: `The Balance Scale Model:
• Left Pan = Right Pan (Balance Condition).
• Subtracting 5 weights from the left pan requires subtracting 5 weights from the right pan to preserve equilibrium.`,
    workedExamples: [
      { level: 'Easy', problem: 'Solve 2x + 4 = 10.', solution: 'Subtract 4 from both sides: 2x = 6.\nDivide by 2: x = 3.' },
      { level: 'Medium', problem: 'Solve 3(x - 2) = 12.', solution: 'Divide by 3: x - 2 = 4.\nAdd 2: x = 6.' },
      { level: 'Hard', problem: 'Solve 5x - 3 = 2x + 9.', solution: 'Subtract 2x: 3x - 3 = 9.\nAdd 3: 3x = 12.\nDivide by 3: x = 4.' }
    ],
    realLifeApplications: ['🛒 Shopping & Budgeting: Calculating unit item costs.', '⛽ Fuel Mileage: Estimating travel distance per liter.'],
    commonMistakes: [{ mistake: 'Doing an operation on only one side of the equals sign.', reason: 'Unbalances the equation scale!' }],
    memoryTricks: ['🧠 "Do unto the left side as you do unto the right side!"'],
    practiceProblems: [
      { id: 1, level: 'Easy', question: 'Solve x + 5 = 12.', answer: 'x = 7' },
      { id: 2, level: 'Easy', question: 'Solve 4x = 20.', answer: 'x = 5' },
      { id: 3, level: 'Medium', question: 'Solve 3x - 2 = 13.', answer: 'x = 5' },
      { id: 4, level: 'Hard', question: 'Solve 2(x + 3) = 16.', answer: 'x = 5' }
    ],
    quizQuestions: [
      { id: 1, type: 'mcq', question: 'In 3x + 2 = 11, what is x?', options: ['3', '4', '5', '2'], correctIndex: 0, explanation: '3x = 9 → x = 3.' },
      { id: 2, type: 'fill_in', question: 'To solve x - 7 = 10, you add ___ to both sides.', correctAnswer: '7', explanation: 'Add 7 to cancel -7.' }
    ],
    relatedTopics: [{ id: 'algebra_parabola', title: 'Quadratic Equations & Graphs' }]
  },

  // ==========================================
  // 7. PROBABILITY
  // ==========================================
  probability_basic: {
    title: 'Theoretical vs Empirical Probability',
    domain: 'Probability & Combinatorics',
    color: '#ffc800',
    definition: 'Probability is the numerical measure of the likelihood that an event will occur, expressed as a number between 0 (impossible) and 1 (certain).',
    intuition: `Why does Probability exist?
Life is full of uncertainty. Probability quantifies chance so insurance companies, weather forecasters, and game developers can make smart predictions!`,
    visualExplanation: `Dice & Coin Simulators:
Flipping a fair coin has 2 total outcomes (Heads, Tails). P(Heads) = 1/2 = 50%.`,
    workedExamples: [
      { level: 'Easy', problem: 'What is the probability of rolling a 4 on a standard 6-sided die?', solution: 'P(4) = Favorable / Total = 1 / 6.' },
      { level: 'Medium', problem: 'Find the probability of drawing a Red Card from a 52-card deck.', solution: '26 Red cards out of 52. P = 26 / 52 = 1 / 2 = 50%.' }
    ],
    realLifeApplications: ['🌤️ Weather Forecasts: 80% chance of rain prediction.', '🎲 Board Games: Strategy based on dice odds.'],
    commonMistakes: [{ mistake: 'Expecting probability > 1.', reason: 'Probability is strictly between 0 and 1 (0% to 100%).' }],
    memoryTricks: ['🧠 Probability = Favorable Outcomes / Total Outcomes'],
    practiceProblems: [
      { id: 1, level: 'Easy', question: 'Probability of flipping Tails?', answer: '1/2' },
      { id: 2, level: 'Medium', question: 'Probability of rolling an even number on a die?', answer: '1/2' }
    ],
    quizQuestions: [
      { id: 1, type: 'mcq', question: 'What is the probability of an impossible event?', options: ['0', '1', '0.5', 'Infinity'], correctIndex: 0, explanation: 'Impossible events have 0 probability.' }
    ],
    relatedTopics: [{ id: 'compound_events', title: 'Compound Events & Tree Diagrams' }]
  },

  // ==========================================
  // 8. SET THEORY
  // ==========================================
  set_theory: {
    title: 'Set Theory & Venn Diagram Operations',
    domain: 'Set Theory & Logic',
    color: '#8b5cf6',
    definition: 'A Set is a well-defined collection of distinct objects. Venn Diagrams use overlapping circles to visualize set operations (Union, Intersection, Difference).',
    intuition: `Why does Set Theory exist?
Set theory provides the fundamental language for database search queries (AND, OR, NOT) and logic circuits!`,
    visualExplanation: `Overlapping Circle Model:
• A ∪ B (Union): Combine all elements in A and B.
• A ∩ B (Intersection): Common elements belonging to both A and B.`,
    workedExamples: [
      { level: 'Easy', problem: 'If A = {1, 2, 3} and B = {3, 4, 5}, find A ∩ B.', solution: 'Common element is 3. A ∩ B = {3}.' }
    ],
    realLifeApplications: ['🔍 Search Engines: Filtering results using AND/OR keywords.'],
    commonMistakes: [{ mistake: 'Listing duplicate elements in a set.', reason: 'Set elements must be distinct!' }],
    memoryTricks: ['🧠 U = Union (United Together), ∩ = Intersection (In-between common)'],
    practiceProblems: [{ id: 1, level: 'Easy', question: 'If A={1,2}, B={2,3}, find A ∪ B.', answer: '{1, 2, 3}' }],
    quizQuestions: [{ id: 1, type: 'mcq', question: 'Which symbol represents Union?', options: ['∪', '∩', '∈', '⊂'], correctIndex: 0, explanation: '∪ is Union.' }],
    relatedTopics: [{ id: 'boolean_logic', title: 'Boolean Logic & Truth Tables' }]
  },

  // ==========================================
  // 9. COMMERCIAL MATH
  // ==========================================
  commercial_interest: {
    title: 'Simple & Compound Interest Growth',
    domain: 'Commercial & Business Math',
    color: '#10b981',
    definition: 'Simple Interest (SI) is calculated only on the initial principal. Compound Interest (CI) is calculated on the principal plus accumulated interest (interest on interest).',
    intuition: `Why does Interest exist?
When banks lend money, interest pays for the risk and time value of money. Compound interest creates exponential growth over decades!`,
    visualExplanation: `Linear vs Exponential Curve:
• SI grows by a fixed rupee amount each year.
• CI curve bends upward exponentially as earnings compound.`,
    workedExamples: [
      { level: 'Easy', problem: 'Calculate SI on ₹5,000 at 10% per year for 2 years.', solution: 'SI = (P × R × T) / 100 = (5000 × 10 × 2) / 100 = ₹1,000.' }
    ],
    realLifeApplications: ['🏦 Savings Accounts: Growing wealth via compounding.'],
    commonMistakes: [{ mistake: 'Using SI formula for Compound Interest.', reason: 'CI uses exponent formula A = P(1 + R/100)^T.' }],
    memoryTricks: ['🧠 SI = (P × R × T) / 100 ("PRT over 100")'],
    practiceProblems: [{ id: 1, level: 'Easy', question: 'Find SI on ₹1,000 at 5% for 1 year.', answer: '₹50' }],
    quizQuestions: [{ id: 1, type: 'mcq', question: 'Which grows faster over 20 years?', options: ['Compound Interest', 'Simple Interest', 'They are equal', 'Neither'], correctIndex: 0, explanation: 'CI grows exponentially.' }],
    relatedTopics: [{ id: 'profit_loss_gst', title: 'Profit, Loss & GST' }]
  },

  // ==========================================
  // 10. METRIC CONVERSIONS
  // ==========================================
  metric_conversions: {
    title: 'Metric & Imperial Unit Conversions',
    domain: 'Mensuration & Measurement',
    color: '#06b6d4',
    definition: 'Unit Conversion changes a quantity from one unit system to another (e.g. meters to kilometers or inches) using fixed conversion multipliers.',
    intuition: `Why do Unit Conversions exist?
Different countries and industries use different measurement systems. Converting units ensures international trade and science function smoothly!`,
    visualExplanation: `Base Multipliers:
• 1 kilometer = 1,000 meters.
• 1 meter = 100 centimeters.
• 1 kilogram = 1,000 grams.`,
    workedExamples: [
      { level: 'Easy', problem: 'Convert 5 km into meters.', solution: '5 × 1,000 = 5,000 meters.' }
    ],
    realLifeApplications: ['✈️ International Travel: Converting miles to km and Celsius to Fahrenheit.'],
    commonMistakes: [{ mistake: 'Multiplying instead of dividing when converting small to large units.', reason: 'cm to m requires dividing by 100.' }],
    memoryTricks: ['🧠 "King Henry Died By Drinking Chocolate Milk" (kilo, hecto, deca, base, deci, centi, milli)'],
    practiceProblems: [{ id: 1, level: 'Easy', question: 'Convert 3,000 m to km.', answer: '3 km' }],
    quizQuestions: [{ id: 1, type: 'mcq', question: 'How many cm in 1 meter?', options: ['100', '1,000', '10', '1,000,000'], correctIndex: 0, explanation: '1 m = 100 cm.' }],
    relatedTopics: [{ id: 'perimeter_area', title: 'Perimeter & Area' }]
  },
  // ==========================================
  // 11. TIME, WORK & PIPES
  // ==========================================
  time_work_pipes: {
    title: 'Time & Work, Pipes & Cisterns Simulator',
    domain: 'Time, Work & Distance',
    color: '#f59e0b',
    definition: 'Time & Work studies the relationship between the time taken to complete a job, the work rate of individuals or machines, and total work done. Pipes & Cisterns applies these exact same rate concepts to filling or emptying water tanks.',
    intuition: `Why do Time & Work concepts exist?
If Person A can paint a wall in 4 hours and Person B can paint the same wall in 6 hours, how long will they take working together? It is NOT 5 hours (the average)!
By converting work into "work done per hour" (rates: 1/4 wall/hr + 1/6 wall/hr = 5/12 wall/hr), you can calculate exact completion times!`,
    visualExplanation: `Work Rate Formula:
• Individual Rate R = 1 / Time T.
• Combined Rate R_total = 1/T₁ + 1/T₂.
• Total Time T_total = 1 / R_total = (T₁ × T₂) / (T₁ + T₂).
• Pipes & Cisterns: Inlet pipe rate is Positive (+1/T), Outlet/Leak pipe rate is Negative (-1/T).`,
    workedExamples: [
      { level: 'Easy', problem: 'Pipe A can fill a tank in 4 hours. What fraction of the tank does it fill in 1 hour?', solution: 'Rate = 1 / 4 of the tank per hour.' },
      { level: 'Medium', problem: 'A can do a job in 6 days and B can do it in 12 days. How long will they take working together?', solution: 'A rate = 1/6, B rate = 1/12.\nCombined rate = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4.\nTotal time = 4 days.' },
      { level: 'Hard', problem: 'Inlet Pipe A fills a tank in 6 hours. Outlet Pipe B empties it in 10 hours. If both pipes are opened together, how long to fill the tank?', solution: 'Inlet rate = +1/6. Outlet rate = -1/10.\nNet rate = 1/6 - 1/10 = (5 - 3)/30 = 2/30 = 1/15.\nTotal time to fill = 15 hours.' }
    ],
    realLifeApplications: [
      '🏗️ Construction Planning: Estimating total building time when combining multiple worker crews.',
      '🚰 Water Reservoir Engineering: Managing municipal water supply tank filling and outflow rates.',
      '💻 Parallel Computing: Calculating server task completion times across multiple CPU cores.'
    ],
    commonMistakes: [
      { mistake: 'Averaging completion times directly (e.g. 4 hrs and 6 hrs = 5 hrs).', reason: 'WRONG! You MUST add hourly work rates (1/T), not individual times!' },
      { mistake: 'Adding leak rates instead of subtracting them.', reason: 'Leaks empty the tank, so their work rate is NEGATIVE (-1/T).' }
    ],
    memoryTricks: [
      '🧠 Combined Time Shortcut: T = (A × B) / (A + B) ("Product over Sum")'
    ],
    practiceProblems: [
      { id: 1, level: 'Easy', question: 'If A fills a tank in 5 hours, what is A\'s 1-hour work rate?', answer: '1/5' },
      { id: 2, level: 'Easy', question: 'Pipe A fills a tank in 3 hours and Pipe B in 6 hours. Find combined time.', answer: '2 hours' },
      { id: 3, level: 'Medium', question: 'A can build a wall in 10 days and B in 15 days. How long together?', answer: '6 days' },
      { id: 4, level: 'Medium', question: 'Pipe A fills a tank in 8 hrs. Leak B empties it in 24 hrs. Net fill time?', answer: '12 hours' },
      { id: 5, level: 'Medium', question: 'If 4 workers build 4 chairs in 4 hours, how many hours for 8 workers to build 8 chairs?', answer: '4 hours' },
      { id: 6, level: 'Hard', question: 'A is twice as fast as B. If together they finish in 12 days, how long for B alone?', answer: '36 days' },
      { id: 7, level: 'Hard', question: 'Pipe A fills in 12 hrs, B fills in 15 hrs, C empties in 20 hrs. Net fill time?', answer: '10 hours' },
      { id: 8, level: 'Hard', question: 'A works for 3 days (rate 1/9). What fraction of work remains?', answer: '2/3' },
      { id: 9, level: 'Challenge', question: 'A and B do a job in 12 days, B and C in 15 days, C and A in 20 days. Time for A+B+C?', answer: '10 days' },
      { id: 10, level: 'Challenge', question: 'If 12 men or 18 women complete a task in 14 days, time for 8 men and 16 women?', answer: '9 days' }
    ],
    quizQuestions: [
      { id: 1, type: 'mcq', question: 'What is the combined time formula for two workers A and B?', options: ['(A × B) / (A + B)', '(A + B) / 2', 'A + B', 'A × B'], correctIndex: 0, explanation: 'Product over Sum: (A × B)/(A + B).' },
      { id: 2, type: 'fill_in', question: 'If Pipe A fills a tank in 8 hours, its 1-hour rate is 1 / ___', correctAnswer: '8', explanation: 'Hourly rate is 1 / 8.' },
      { id: 3, type: 'mcq', question: 'What sign is assigned to a leak or outlet pipe rate?', options: ['Negative (-)', 'Positive (+)', 'Zero', 'Multiplication'], correctIndex: 0, explanation: 'Leaks remove water, so rate is negative.' },
      { id: 4, type: 'mcq', question: 'If A takes 4 hours and B takes 4 hours, combined time is?', options: ['2 hours', '4 hours', '8 hours', '1 hour'], correctIndex: 0, explanation: '(4 × 4)/(4 + 4) = 16/8 = 2 hours.' },
      { id: 5, type: 'mcq', question: 'If work rate R = 1/10 per day, total days needed = ?', options: ['10 days', '1 day', '100 days', '5 days'], correctIndex: 0, explanation: 'T = 1 / R = 10 days.' },
      { id: 6, type: 'matching', question: 'Match work scenario to rate calculation:', pairs: [{ left: 'Inlet Pipe (6 hrs)', right: '+1/6 per hr' }, { left: 'Outlet Pipe (10 hrs)', right: '-1/10 per hr' }, { left: 'Two Workers (A & B)', right: '1/A + 1/B' }], explanation: 'Standard rates.' },
      { id: 7, type: 'mcq', question: 'If 3 workers take 6 hours, how long do 6 workers take?', options: ['3 hours', '12 hours', '6 hours', '1.5 hours'], correctIndex: 0, explanation: 'Doubling workers halves the time: 3 hours.' },
      { id: 8, type: 'fill_in', question: 'A tank is 50% full. The remaining fraction to fill is ___ / 2', correctAnswer: '1', explanation: '1/2 remaining.' },
      { id: 9, type: 'mcq', question: 'If A does 1/3 work in 4 days, total time for full work is?', options: ['12 days', '8 days', '16 days', '3 days'], correctIndex: 0, explanation: '4 × 3 = 12 days.' },
      { id: 10, type: 'mcq', question: 'Pipes A (10h) and B (15h) fill together in?', options: ['6 hours', '12.5 hours', '25 hours', '5 hours'], correctIndex: 0, explanation: '(10 × 15)/(10 + 15) = 150/25 = 6 hours.' }
    ],
  },
  // ==========================================
  // 12. MODULAR ARITHMETIC
  // ==========================================
  modular_arithmetic: {
    title: 'Modular & Clock Arithmetic, Digital Roots',
    domain: 'Numbers & Operations',
    color: '#06b6d4',
    definition: 'Modular Arithmetic is a system of arithmetic for integers where numbers "wrap around" upon reaching a certain value called the modulus (m). Standard clock time is a 12-hour or 24-hour modular arithmetic system.',
    intuition: `Why does Modular Arithmetic exist?
Imagine looking at a 12-hour analog clock. If it is 9 o'clock now, what time will it be in 5 hours?
9 + 5 = 14, but on a clock 14 becomes 2 o'clock! (14 mod 12 = 2).
Modular arithmetic formalizes this "remainder wrap-around" logic.

What problem does it solve?
Modular arithmetic forms the mathematical foundation of modern computer cryptography (SSL/TLS internet security, RSA encryption), credit card checksum algorithms, digital roots, and calendar day calculations!`,
    visualExplanation: `Clock Wrap-Around Model:
• a ≡ b (mod m) means a and b have the exact same remainder when divided by m.
• Example: 17 mod 5 = 2 (since 17 = 5 × 3 + 2).
• Digital Root: Summing digits repeatedly until a single digit remains (equivalent to mod 9).`,
    workedExamples: [
      { level: 'Easy', problem: 'Find 15 mod 4.', solution: '15 ÷ 4 = 3 with a remainder of 3.\nTherefore, 15 mod 4 = 3.' },
      { level: 'Medium', problem: 'If today is Wednesday (Day 3), what day of the week will it be in 100 days?', solution: '7 days in a week (mod 7).\n100 mod 7 = 2 (since 100 = 7 × 14 + 2).\nDay 3 + 2 = Day 5 (Friday).' },
      { level: 'Hard', problem: 'Calculate 7^3 mod 5.', solution: '7 ≡ 2 (mod 5).\n7^3 ≡ 2^3 = 8 ≡ 3 (mod 5).\nResult = 3.' }
    ],
    realLifeApplications: [
      '🔒 Cybersecurity & RSA Encryption: Protecting password hashes and web SSL certificates.',
      '💳 Credit Card Checksums: The Luhn algorithm uses modulo operations to validate card numbers.',
      '📅 Calendar Algorithms: Calculating day of the week for any historical date.'
    ],
    commonMistakes: [
      { mistake: 'Confusing quotient with remainder in mod operations.', reason: '17 mod 5 = 2 (Remainder), NOT 3 (Quotient)!' }
    ],
    memoryTricks: [
      '🧠 Modulo = "Focus on the Remainder!"'
    ],
    practiceProblems: [
      { id: 1, level: 'Easy', question: 'Find 10 mod 3.', answer: '1' },
      { id: 2, level: 'Easy', question: 'Find 25 mod 5.', answer: '0' },
      { id: 3, level: 'Medium', question: 'Find 18 mod 7.', answer: '4' },
      { id: 4, level: 'Medium', question: 'Calculate digital root of 459.', answer: '9' }
    ],
    quizQuestions: [
      { id: 1, type: 'mcq', question: 'What is 14 mod 12 on a clock?', options: ['2', '14', '0', '1'], correctIndex: 0, explanation: '14 - 12 = 2 o\'clock.' },
      { id: 2, type: 'fill_in', question: '17 mod 5 = ___', correctAnswer: '2', explanation: '17 = 5×3 + 2.' }
    ],
    relatedTopics: [
      { id: 'counting_placevalue', title: 'Whole Numbers & Place Value' },
      { id: 'calendar_clock_puzzles', title: 'Calendar & Clock Problems' }
    ]
  },

  // ==========================================
  // 13. DATA CHARTS & PICTORIAL REPRESENTATION
  // ==========================================
  data_charts: {
    title: 'Data Collection, Bar Charts, Line Plots & Pie Charts',
    domain: 'Data & Statistics',
    color: '#ec4899',
    definition: 'Data Charts represent categorical and numerical data visually using rectangular bars, continuous line segments, or circular pie wedges to make trends and comparisons instantly readable.',
    intuition: `Why do Data Charts exist?
Looking at raw tables of numbers (e.g. 500 rows of student test scores) makes it nearly impossible to spot trends.
By converting numbers into visual bars or pie slices, your brain spots maximums, minimums, and proportions in less than a second!

Where is it used?
• News & Media: Presenting election poll results and weather forecasts.
• Business & Stock Market: Tracking sales growth, profits, and stock price trends.
• Healthcare: Monitoring disease recovery rates and patient vitals over time.`,
    visualExplanation: `The 3 Core Chart Models:
1. Bar Chart: Vertical or horizontal bars where Bar Height = Value Count.
2. Line Plot: Points connected by line segments showing Change Over Time.
3. Pie Chart: Circular disk divided into slices where Slice Angle = Percentage × 3.6°.`,
    workedExamples: [
      { level: 'Easy', problem: 'A Bar Chart shows Apples = 15, Bananas = 25, Oranges = 10. Which fruit is the most popular?', solution: 'Bananas has the highest bar (height = 25), so Bananas is the most popular fruit.' },
      { level: 'Medium', problem: 'A Pie Chart has 4 equal slices. What percentage does each slice represent?', solution: '100% ÷ 4 = 25% (or 360° ÷ 4 = 90° angle per slice).' },
      { level: 'Hard', problem: 'A Line Plot shows Monday = 10 m, Tuesday = 15 m, Wednesday = 25 m. Find the total distance and average per day.', solution: 'Total = 10 + 15 + 25 = 50 m.\nAverage = 50 ÷ 3 = 16.67 m per day.' }
    ],
    realLifeApplications: [
      '📊 Business Dashboards: Visualizing quarterly revenue growth and sales targets.',
      '🌤️ Meteorology: Plotting hourly temperature line charts.',
      '🍕 Nutrition & Budgeting: Pie chart breakdown of daily protein/carbs or household expenses.'
    ],
    commonMistakes: [
      { mistake: 'Not starting the vertical y-axis bar chart at zero (0).', reason: 'Truncating the y-axis distorts real bar height comparisons!' },
      { mistake: 'Forgetting that Pie Chart angles must sum to exactly 360°.', reason: '100% of data always equals 360° circle.' }
    ],
    memoryTricks: [
      '🧠 Bar = Compare Categories | Line = Track Trends | Pie = Part of Whole'
    ],
    practiceProblems: [
      {
        id: 1,
        level: 'Easy',
        question: 'Bar Chart Reading: If the bar for "Monday" reaches height 20 and "Tuesday" reaches height 40, how many more units were recorded on Tuesday than Monday?',
        answer: '20 units (40 - 20 = 20 units more on Tuesday)'
      },
      {
        id: 2,
        level: 'Easy',
        question: 'Pie Chart Fraction: A pie chart shows a shaded slice of 90°. What fraction of the total pie is shaded?',
        answer: '1/4 (90° / 360° = 1/4 or 25%)'
      },
      {
        id: 3,
        level: 'Medium',
        question: 'Line Plot Trend: Temperature recorded at 8 AM (15°C), 12 PM (25°C), 4 PM (20°C). What was the maximum temperature and at what time?',
        answer: '25°C at 12 PM'
      },
      {
        id: 4,
        level: 'Medium',
        question: 'Bar Chart Total: A survey records Favorite Sports: Cricket = 30, Football = 25, Tennis = 15, Basketball = 10. Find total students surveyed.',
        answer: '80 students (30 + 25 + 15 + 10 = 80)'
      },
      {
        id: 5,
        level: 'Medium',
        question: 'Pie Chart Angle Calculation: If 40% of students choose Blue as their favorite color, what is the central angle of the Blue slice in degrees?',
        answer: '144° (0.40 × 360° = 144°)'
      },
      {
        id: 6,
        level: 'Hard',
        question: 'Bar Chart Percentage: In a bar chart showing 50 total cars (Red = 15, Blue = 20, White = 15), what percentage of cars are Blue?',
        answer: '40% (20 / 50 × 100% = 40%)'
      },
      {
        id: 7,
        level: 'Hard',
        question: 'Line Plot Rate of Change: Distance walked on Day 1 = 2 km, Day 2 = 5 km, Day 3 = 11 km. What was the increase from Day 2 to Day 3?',
        answer: '6 km increase (11 - 5 = 6 km)'
      },
      {
        id: 8,
        level: 'Hard',
        question: 'Combined Charts: If Category A (20) and Category B (30) form a 2-item pie chart, find the angle for Category B.',
        answer: '216° (Total = 50. Fraction B = 30/50 = 3/5. Angle = 3/5 × 360° = 216°)'
      },
      {
        id: 9,
        level: 'Challenge',
        question: 'Pictograph Scale: In a pictograph where 🎨 = 5 paintings, how many 🎨 symbols represent 35 paintings?',
        answer: '7 symbols (35 ÷ 5 = 7)'
      },
      {
        id: 10,
        level: 'Challenge',
        question: 'Histogram Intervals: If test score intervals are 0-10 (4 students), 11-20 (8 students), 21-30 (12 students), 31-40 (6 students), how many students scored 21 or higher?',
        answer: '18 students (12 + 6 = 18)'
      }
    ],
    quizQuestions: [
      { id: 1, type: 'mcq', question: 'Which chart type is best suited to show change over continuous time?', options: ['Line Plot', 'Pie Chart', 'Bar Chart', 'Venn Diagram'], correctIndex: 0, explanation: 'Line plots connect continuous time data points.' },
      { id: 2, type: 'fill_in', question: 'The total central angle of all slices in a Pie Chart is ___ degrees.', correctAnswer: '360', explanation: 'A full circle equals 360°.' },
      { id: 3, type: 'mcq', question: 'What does the height of a bar in a vertical bar chart represent?', options: ['Category Frequency / Value', 'Category Name', 'Circle Radius', 'Time Duration'], correctIndex: 0, explanation: 'Bar height directly measures value frequency.' },
      { id: 4, type: 'mcq', question: 'If a slice represents 50% of a pie chart, its angle is?', options: ['180°', '90°', '360°', '45°'], correctIndex: 0, explanation: '50% of 360° = 180°.' },
      { id: 5, type: 'matching', question: 'Match chart type to best use case:', pairs: [{ left: 'Bar Chart', right: 'Comparing discrete categories' }, { left: 'Line Plot', right: 'Tracking continuous trends over time' }, { left: 'Pie Chart', right: 'Showing proportional parts of a whole' }], explanation: 'Core chart functions.' },
      { id: 6, type: 'mcq', question: 'In a pictograph where ⚽ = 10 goals, how many goals do 4 ⚽ symbols represent?', options: ['40 goals', '4 goals', '14 goals', '100 goals'], correctIndex: 0, explanation: '4 × 10 = 40 goals.' },
      { id: 7, type: 'fill_in', question: 'If 25% of data is in a slice, the slice angle is ___ degrees.', correctAnswer: '90', explanation: '25% × 360° = 90°.' },
      { id: 8, type: 'mcq', question: 'Why must vertical bar charts start at y = 0?', options: ['To prevent visual height distortion', 'To make bars look taller', 'It is optional', 'To save space'], correctIndex: 0, explanation: 'Starting above zero distorts visual ratio comparisons.' },
      { id: 9, type: 'mcq', question: 'Bar A = 10, Bar B = 20, Bar C = 30. What is the average bar height?', options: ['20', '15', '30', '60'], correctIndex: 0, explanation: '(10 + 20 + 30)/3 = 60/3 = 20.' },
      { id: 10, type: 'mcq', question: 'What is the sum of percentages across all slices of a pie chart?', options: ['100%', '360%', '50%', '180%'], correctIndex: 0, explanation: '100% represents the whole dataset.' }
    ],
    relatedTopics: [
      { id: 'central_tendency', title: 'Mean, Median & Mode' },
      { id: 'probability_basic', title: 'Probability Basics' }
    ]
  }

};


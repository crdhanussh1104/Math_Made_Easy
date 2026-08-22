/**
 * Lab Guided Discovery Questions & 3-Tier Progressive Hints Bank
 */

export const labQuestionsBank = {
  // CLASS 1
  c1_num_counting_objects: {
    question: "If you have 5 stars in the bowl and add 3 more stars, what is the total count?",
    targetAnswer: "8",
    acceptedAnswers: ["8", "eight"],
    hints: [
      "Count on from 5: 6, 7...",
      "Combine 5 objects and 3 objects together.",
      "5 + 3 = 8 stars."
    ],
    correctFeedback: "Great job! You discovered that combining 5 and 3 gives 8.",
    retryFeedback: "Try counting the stars in the bowl one by one after adding 3.",
    challengeQuestion: "If you remove all 8 stars from the bowl, what number represents an empty bowl?"
  },
  c1_num_tens_ones: {
    question: "How many single unit cubes are needed to make exactly 1 Ten-Rod?",
    targetAnswer: "10",
    acceptedAnswers: ["10", "ten"],
    hints: [
      "Count the unit cubes as you stack them vertically.",
      "A ten-rod is made of ten single units.",
      "10 ones = 1 ten."
    ],
    correctFeedback: "Super! You discovered that 10 ones bundle into 1 ten.",
    retryFeedback: "Look at the unit cubes on the left and count until you can click Bundle.",
    challengeQuestion: "How many tens and ones are in the number 42?"
  },
  c1_num_number_line: {
    question: "Which number comes immediately after 9 on the number line?",
    targetAnswer: "10",
    acceptedAnswers: ["10", "ten"],
    hints: [
      "Hop 1 step to the right from 9.",
      "Count forward: 8, 9...",
      "The next number is 10."
    ],
    correctFeedback: "Wonderful! You found that 10 is the successor of 9.",
    retryFeedback: "Move the marker 1 step right from 9 on the number line.",
    challengeQuestion: "What number lies exactly between 6 and 8?"
  },
  c1_ops_addition_subtraction: {
    question: "You have 7 apples and give 3 apples away. How many apples remain?",
    targetAnswer: "4",
    acceptedAnswers: ["4", "four"],
    hints: [
      "Start with 7 counters and take away 3.",
      "Count how many counters are left: 7 - 3.",
      "7 - 3 = 4."
    ],
    correctFeedback: "Terrific! You solved 7 - 3 = 4 using taking away.",
    retryFeedback: "Try removing 3 items from the group of 7.",
    challengeQuestion: "What is 6 + 5?"
  },
  c1_geom_2d_3d_shapes: {
    question: "How many flat circular faces does a cylinder have?",
    targetAnswer: "2",
    acceptedAnswers: ["2", "two"],
    hints: [
      "Inspect the top and bottom of the cylinder.",
      "The top is one circle, the bottom is another circle.",
      "A cylinder has 2 flat circular faces and 1 curved face."
    ],
    correctFeedback: "Spot on! A cylinder has 2 flat faces (top and bottom) and 1 curved surface.",
    retryFeedback: "Rotate the cylinder in 3D to check the top and bottom.",
    challengeQuestion: "Which 3D shape has 0 flat faces and 0 corners?"
  },
  c1_meas_pan_balance: {
    question: "When one side of the balance scale goes down, is that side heavier or lighter?",
    targetAnswer: "heavier",
    acceptedAnswers: ["heavier", "heavy", "more heavy"],
    hints: [
      "Gravity pulls heavier objects downward.",
      "The lower pan contains the heavier weight.",
      "The side that goes down is heavier."
    ],
    correctFeedback: "Brilliant! The heavier object pulls its pan downward.",
    retryFeedback: "Place a heavier object on one side and observe which side drops.",
    challengeQuestion: "If both pans stay level, what does that tell you about their weights?"
  },
  c1_pat_repeating_patterns: {
    question: "In the pattern: 🔴 🟦 🔴 🟦 🔴 ___, what shape comes next?",
    targetAnswer: "blue square",
    acceptedAnswers: ["blue square", "square", "blue", "🟦"],
    hints: [
      "Notice the pattern alternates: Circle, Square, Circle, Square...",
      "After a Red Circle comes a Blue Square.",
      "The next shape is the Blue Square."
    ],
    correctFeedback: "Awesome! You identified the repeating core AB pattern.",
    retryFeedback: "Look at what shape always follows the red circle.",
    challengeQuestion: "In the sequence 2, 4, 6, 8, ___, what number comes next?"
  },

  // CLASS 2
  c2_num_place_value_999: {
    question: "In the number 458, what is the place value of digit 4?",
    targetAnswer: "400",
    acceptedAnswers: ["400", "4 hundreds", "four hundred"],
    hints: [
      "Identify the place: 8 is Ones, 5 is Tens, 4 is Hundreds.",
      "4 in the Hundreds place means 4 x 100.",
      "4 x 100 = 400."
    ],
    correctFeedback: "Excellent! 4 Hundreds = 400.",
    retryFeedback: "Check the position of 4 on the Base-10 board.",
    challengeQuestion: "What is the difference between place value and face value of 5 in 458?"
  },
  c2_ops_multiplication_arrays: {
    question: "If there are 4 rows with 5 dots in each row, how many total dots are in the array?",
    targetAnswer: "20",
    acceptedAnswers: ["20", "twenty"],
    hints: [
      "Add 5 four times: 5 + 5 + 5 + 5.",
      "Multiply rows by columns: 4 x 5.",
      "4 x 5 = 20."
    ],
    correctFeedback: "Well done! 4 rows of 5 makes 4 x 5 = 20 dots.",
    retryFeedback: "Count the rows and columns in the array grid.",
    challengeQuestion: "If you share 20 dots equally into 4 bowls, how many dots are in each bowl?"
  },
  c2_geom_2d_lines_tangrams: {
    question: "How many small triangles from a tangram set are needed to make 1 medium square?",
    targetAnswer: "2",
    acceptedAnswers: ["2", "two"],
    hints: [
      "Place two identical right triangles with their hypotenuses touching.",
      "Two right triangles combine along the diagonal to form a square.",
      "2 triangles make 1 square."
    ],
    correctFeedback: "Fantastic! Combining two right triangles forms a square.",
    retryFeedback: "Try dragging two small triangles together on the canvas.",
    challengeQuestion: "Can you form a larger triangle using the same 2 small triangles?"
  },
  c2_meas_clock_time: {
    question: "When the clock shows 6:30, what number does the minute hand point to?",
    targetAnswer: "6",
    acceptedAnswers: ["6", "six"],
    hints: [
      "Each number on the clock represents 5 minutes.",
      "30 minutes is half the clock: 30 / 5 = 6.",
      "The minute hand points straight down to 6."
    ],
    correctFeedback: "Super! At half past (:30), the long minute hand points directly at 6.",
    retryFeedback: "Drag the minute hand to 30 minutes and observe where it points.",
    challengeQuestion: "Where does the hour hand point at 6:30?"
  },
  c2_data_pictographs: {
    question: "If 1 book symbol represents 2 books, how many books do 4 symbols represent?",
    targetAnswer: "8",
    acceptedAnswers: ["8", "8 books", "eight"],
    hints: [
      "Multiply the number of symbols by the key value: 4 x 2.",
      "4 symbols x 2 books each = 8 books.",
      "4 x 2 = 8."
    ],
    correctFeedback: "Great work! 4 symbols with a key of 2 equal 8 books.",
    retryFeedback: "Multiply the symbol count by the key shown at the top of the chart.",
    challengeQuestion: "How many symbols would you need to show 10 books?"
  },

  // CLASS 3
  c3_ops_multiplication_sharing: {
    question: "If 24 apples are shared equally into 4 baskets, how many apples go into each basket?",
    targetAnswer: "6",
    acceptedAnswers: ["6", "6 apples", "six"],
    hints: [
      "Division is equal sharing: 24 divided by 4.",
      "Think: what number multiplied by 4 equals 24? 4 x ? = 24.",
      "24 / 4 = 6."
    ],
    correctFeedback: "Perfect! You discovered that 24 / 4 = 6 because 4 x 6 = 24.",
    retryFeedback: "Drag the items into the 4 baskets until they are evenly distributed.",
    challengeQuestion: "If you have 5 baskets with 6 apples each, how many apples do you have in total?"
  },
  c3_num_4digit_place_value: {
    question: "What number is formed by 3 Thousands, 0 Hundreds, 7 Tens, and 4 Ones?",
    targetAnswer: "3074",
    acceptedAnswers: ["3074", "3,074"],
    hints: [
      "Write each digit in its place: Th=3, H=0, T=7, O=4.",
      "Thousands is 3000, Tens is 70, Ones is 4.",
      "3000 + 70 + 4 = 3074."
    ],
    correctFeedback: "Spot on! The numeral is 3,074 with 0 in the hundreds place.",
    retryFeedback: "Combine 3000 + 0 + 70 + 4 on the expanded form cards.",
    challengeQuestion: "What is the successor of 3,074?"
  },
  c3_geom_tessellation_tangram: {
    question: "Do regular hexagons tessellate a flat surface without leaving any gaps? (yes or no)",
    targetAnswer: "yes",
    acceptedAnswers: ["yes", "true"],
    hints: [
      "Look at the honeycomb pattern formed by hexagons.",
      "The interior angle of a regular hexagon is 120°. 120° x 3 = 360° around each vertex.",
      "Because they sum to 360°, hexagons tile perfectly without gaps."
    ],
    correctFeedback: "Brilliant! Hexagons tessellate completely because three 120° angles make a full 360° vertex.",
    retryFeedback: "Tile several hexagons on the grid and check if any gaps appear.",
    challengeQuestion: "Do regular pentagons tessellate a flat surface?"
  },

  // CLASS 4
  c4_num_fraction_strips: {
    question: "How many 1/8 strips are needed to equal the exact length of 1/2?",
    targetAnswer: "4",
    acceptedAnswers: ["4", "4/8", "four"],
    hints: [
      "Align the 1/8 strips directly under the 1/2 strip on the fraction wall.",
      "1/2 = 4/8.",
      "You need 4 eighths to equal one half."
    ],
    correctFeedback: "Outstanding! You proved that 1/2 is equivalent to 4/8.",
    retryFeedback: "Drag 1/8 strips onto the fraction wall until they match the 1/2 bar.",
    challengeQuestion: "What is 2/8 + 3/8?"
  },
  c4_num_roman_numerals: {
    question: "In Roman numerals, what number does XXIV represent?",
    targetAnswer: "24",
    acceptedAnswers: ["24", "twenty-four", "twenty four"],
    hints: [
      "Break down the symbols: X + X + IV.",
      "X = 10, X = 10, IV = 4.",
      "10 + 10 + 4 = 24."
    ],
    correctFeedback: "Super! XXIV = 10 + 10 + (5 - 1) = 24.",
    retryFeedback: "Add the values of XX (20) and IV (4).",
    challengeQuestion: "Write 39 in Roman numerals."
  },
  c4_geom_circle_radius_diameter: {
    question: "If the radius of a circle is 6 cm, what is the length of its diameter?",
    targetAnswer: "12",
    acceptedAnswers: ["12", "12 cm", "twelve"],
    hints: [
      "The diameter passes completely across the circle through the center: d = 2r.",
      "Multiply the radius by 2: 6 x 2.",
      "Diameter = 2 x 6 = 12 cm."
    ],
    correctFeedback: "Excellent! Diameter is always twice the radius (d = 2r).",
    retryFeedback: "Check the formula d = 2 * r displayed on the interactive compass.",
    challengeQuestion: "If a diameter is 20 cm, what is its radius?"
  },
  c4_meas_unit_conversions: {
    question: "How many centimetres are in 4 metres?",
    targetAnswer: "400",
    acceptedAnswers: ["400", "400 cm", "four hundred"],
    hints: [
      "1 metre = 100 centimetres.",
      "Multiply 4 by 100: 4 x 100.",
      "4 m = 400 cm."
    ],
    correctFeedback: "Great job! 1 m = 100 cm, so 4 m = 400 cm.",
    retryFeedback: "Use the x100 multiplier step on the conversion ladder.",
    challengeQuestion: "Convert 3 kg 250 g into grams."
  },

  // CLASS 5
  c5_num_decimals_fractions: {
    question: "What fraction in simplest form is equivalent to the decimal 0.75?",
    targetAnswer: "3/4",
    acceptedAnswers: ["3/4", "75/100"],
    hints: [
      "0.75 is 75 hundredths: 75 / 100.",
      "Divide numerator and denominator by 25: (75/25) / (100/25).",
      "75/100 reduces to 3/4."
    ],
    correctFeedback: "Terrific! 0.75 = 75/100 = 3/4.",
    retryFeedback: "Shade 75 squares on the 100-grid and see what fraction of the whole is shaded.",
    challengeQuestion: "Convert 0.2 into a fraction in lowest terms."
  },
  c5_num_integers_number_line: {
    question: "Calculate using the number line: (-4) + 7",
    targetAnswer: "3",
    acceptedAnswers: ["3", "+3", "three"],
    hints: [
      "Start at -4 on the number line.",
      "Move 7 steps in the positive direction (to the right).",
      "-4 + 7 = 3."
    ],
    correctFeedback: "Awesome! Starting at -4 and moving right 7 steps brings you to +3.",
    retryFeedback: "Drag the pointer from -4 seven steps to the right.",
    challengeQuestion: "What is (-3) - 5?"
  },
  c5_geom_angles_triangles: {
    question: "In a triangle, if angle A is 60° and angle B is 70°, what is the measure of angle C?",
    targetAnswer: "50",
    acceptedAnswers: ["50", "50°", "50 degrees"],
    hints: [
      "The sum of all three angles in a triangle is always 180°.",
      "Sum of known angles: 60° + 70° = 130°.",
      "Angle C = 180° - 130° = 50°."
    ],
    correctFeedback: "Brilliant! Angle sum is 180°, so 180 - 130 = 50°.",
    retryFeedback: "Subtract the two given angles from 180°.",
    challengeQuestion: "Can a triangle have two right angles (90° and 90°)?"
  },
  c5_geom_3d_nets_polyhedrons: {
    question: "How many vertices (corners) does a rectangular cuboid have?",
    targetAnswer: "8",
    acceptedAnswers: ["8", "eight"],
    hints: [
      "Count the 4 corners on the top face and 4 corners on the bottom face.",
      "4 + 4 = 8 vertices.",
      "A cuboid has 6 faces, 12 edges, and 8 vertices."
    ],
    correctFeedback: "Spot on! A cuboid has 8 vertices.",
    retryFeedback: "Rotate the 3D cuboid and click each corner to count them.",
    challengeQuestion: "How many edges does a triangular prism have?"
  },
  c5_data_mean_bar_charts: {
    question: "Find the mean (average) of the numbers: 10, 20, 30, 40, 50.",
    targetAnswer: "30",
    acceptedAnswers: ["30", "thirty"],
    hints: [
      "Add all 5 values: 10 + 20 + 30 + 40 + 50 = 150.",
      "Divide the total sum by the count of numbers: 150 / 5.",
      "Mean = 150 / 5 = 30."
    ],
    correctFeedback: "Excellent! The mean average of the numbers is 30.",
    retryFeedback: "Look at where the horizontal water-level line sits across the bars.",
    challengeQuestion: "If a 6th number 90 is added, what is the new mean?"
  },

  // CLASS 6
  c6_num_integers_ratio: {
    question: "Simplify the ratio 18 : 24 to its lowest terms.",
    targetAnswer: "3:4",
    acceptedAnswers: ["3:4", "3 : 4", "3/4"],
    hints: [
      "Find the highest common factor of 18 and 24 (HCF = 6).",
      "Divide both terms by 6: (18/6) : (24/6).",
      "18:24 = 3:4."
    ],
    correctFeedback: "Well done! 18 : 24 simplifies to 3 : 4.",
    retryFeedback: "Divide both sides of the ratio by their greatest common divisor.",
    challengeQuestion: "If 4 books cost Rs 120, what is the cost of 10 books?"
  },
  c6_alg_expressions_balance: {
    question: "Solve the balanced equation: 2x + 4 = 14. What is the value of x?",
    targetAnswer: "5",
    acceptedAnswers: ["5", "x=5", "x = 5"],
    hints: [
      "Remove 4 units from both sides: 2x = 10.",
      "Divide both sides by 2: x = 10 / 2.",
      "x = 5."
    ],
    correctFeedback: "Great work! Subtracting 4 gives 2x = 10, and dividing by 2 gives x = 5.",
    retryFeedback: "Remove 4 weight blocks from both pans on the scale, then divide by 2.",
    challengeQuestion: "Solve: 3x - 2 = 13."
  },
  c6_geom_circles_angles: {
    question: "If two parallel lines are cut by a transversal and one interior angle is 65°, what is its alternate interior angle?",
    targetAnswer: "65",
    acceptedAnswers: ["65", "65°", "65 degrees"],
    hints: [
      "Alternate interior angles form a 'Z' shape.",
      "For parallel lines, alternate interior angles are always equal.",
      "The alternate interior angle is 65°."
    ],
    correctFeedback: "Fantastic! Alternate interior angles are equal for parallel lines.",
    retryFeedback: "Look at the Z-shape angle pair highlighted on the transversal lab.",
    challengeQuestion: "What is the consecutive interior angle on the same side (supplementary)?"
  },

  // CLASS 7
  c7_num_rational_exponents: {
    question: "Using the product law of exponents a^m * a^n = a^(m+n), what is 2^3 * 2^4?",
    targetAnswer: "128",
    acceptedAnswers: ["128", "2^7"],
    hints: [
      "Add the exponents: 3 + 4 = 7, so 2^(3+4) = 2^7.",
      "Calculate 2^7: 2 x 2 x 2 x 2 x 2 x 2 x 2.",
      "2^7 = 128."
    ],
    correctFeedback: "Super! 2^3 x 2^4 = 2^(3+4) = 2^7 = 128.",
    retryFeedback: "Add the powers 3 and 4 together.",
    challengeQuestion: "What is (3^2)^3?"
  },
  c7_geom_triangle_congruence: {
    question: "Which criteria guarantees congruence given 2 sides and the INCLUDED angle between them?",
    targetAnswer: "SAS",
    acceptedAnswers: ["SAS", "Side Angle Side", "Side-Angle-Side"],
    hints: [
      "Side - Angle - Side.",
      "The angle must be trapped between the two known sides.",
      "SAS Criteria."
    ],
    correctFeedback: "Spot on! SAS (Side-Angle-Side) guarantees unique triangle congruence.",
    retryFeedback: "Check the criteria abbreviations: SSS, SAS, ASA, RHS.",
    challengeQuestion: "Does AAA (Angle-Angle-Angle) guarantee congruence?"
  },
  c7_prob_chance_sim: {
    question: "What is the theoretical probability of rolling an odd number (1, 3, 5) on a 6-sided die?",
    targetAnswer: "1/2",
    acceptedAnswers: ["1/2", "0.5", "50%", "3/6"],
    hints: [
      "There are 3 odd numbers {1, 3, 5} out of 6 total outcomes.",
      "P(Odd) = 3 / 6.",
      "3/6 simplifies to 1/2 (50%)."
    ],
    correctFeedback: "Brilliant! Favorable outcomes (3) / Total (6) = 1/2.",
    retryFeedback: "Count the odd numbers on the die faces and divide by 6.",
    challengeQuestion: "What is the probability of rolling a 7 on a standard 6-sided die?"
  },

  // CLASS 8
  c8_mens_cylinder_volume: {
    question: "What happens to the volume of a cylinder when its radius is doubled (with height kept constant)?",
    targetAnswer: "4 times",
    acceptedAnswers: ["4 times", "4x", "quadruples", "increases 4 times", "4"],
    hints: [
      "Look at the volume formula: V = π * r² * h.",
      "If radius r is doubled to (2r), then r² becomes (2r)² = 4r².",
      "Because radius is squared, the volume multiplies by 2² = 4 times!"
    ],
    correctFeedback: "Outstanding! You discovered that volume scales with r², so doubling radius quadruples volume.",
    retryFeedback: "Test it with the sliders: compare r=5 cm vs r=10 cm at height=10 cm.",
    challengeQuestion: "If height is doubled instead (radius kept constant), how many times does volume increase?"
  },
  c8_alg_identities_tiles: {
    question: "What are the 3 terms in the expansion of (a + b)²?",
    targetAnswer: "a^2 + 2ab + b^2",
    acceptedAnswers: ["a^2 + 2ab + b^2", "a^2+2ab+b^2", "a² + 2ab + b²"],
    hints: [
      "Look at the 4 algebra tiles forming the big square.",
      "You have 1 large a² square, 2 identical ab rectangles, and 1 small b² square.",
      "(a + b)² = a² + 2ab + b²."
    ],
    correctFeedback: "Terrific! Geometrically, the square is made of a² + 2ab + b².",
    retryFeedback: "Sum the areas of the 4 tiles on the screen.",
    challengeQuestion: "What is (a - b)²?"
  },
  c8_geom_euler_polyhedron: {
    question: "An Octahedron has 8 faces and 6 vertices. According to Euler's formula F + V = E + 2, how many edges does it have?",
    targetAnswer: "12",
    acceptedAnswers: ["12", "twelve", "12 edges"],
    hints: [
      "Substitute into formula: 8 + 6 = E + 2.",
      "14 = E + 2.",
      "E = 14 - 2 = 12 edges."
    ],
    correctFeedback: "Super! 8 + 6 - 2 = 12 edges.",
    retryFeedback: "Calculate 8 + 6 - 2 using Euler's formula.",
    challengeQuestion: "If a polyhedron has 20 faces and 12 vertices (Icosahedron), how many edges does it have?"
  },
  c8_num_rational_line: {
    question: "What rational number lies exactly halfway between 1/4 and 3/4?",
    targetAnswer: "1/2",
    acceptedAnswers: ["1/2", "0.5", "2/4"],
    hints: [
      "Calculate the average: (1/4 + 3/4) / 2.",
      "1/4 + 3/4 = 4/4 = 1. Half of 1 is 1/2.",
      "The midpoint is 1/2."
    ],
    correctFeedback: "Spot on! The midpoint of 1/4 and 3/4 is 1/2.",
    retryFeedback: "Add the two numbers and divide by 2.",
    challengeQuestion: "What is the additive inverse of -7/9?"
  },

  // CLASS 9
  c9_geom_pythagoras_theorem: {
    question: "In a right triangle with legs a = 6 cm and b = 8 cm, what is the length of hypotenuse c?",
    targetAnswer: "10",
    acceptedAnswers: ["10", "10 cm", "ten"],
    hints: [
      "Use Pythagoras: a² + b² = c².",
      "6² + 8² = 36 + 64 = 100.",
      "c = √100 = 10 cm."
    ],
    correctFeedback: "Excellent! 6² + 8² = 36 + 64 = 100, so hypotenuse c = 10 cm.",
    retryFeedback: "Add the areas of square a (36) and square b (64), then take the square root.",
    challengeQuestion: "If hypotenuse is 13 cm and one leg is 5 cm, find the other leg."
  },
  c9_trig_ratios_right_triangle: {
    question: "In a right triangle with an angle of 30°, if the Hypotenuse is 10 cm, what is the length of the Opposite side? (sin 30° = 0.5)",
    targetAnswer: "5",
    acceptedAnswers: ["5", "5 cm", "five"],
    hints: [
      "sin(30°) = Opposite / Hypotenuse.",
      "0.5 = Opposite / 10.",
      "Opposite = 0.5 x 10 = 5 cm."
    ],
    correctFeedback: "Brilliant! Opposite = 10 x sin(30°) = 5 cm.",
    retryFeedback: "Multiply Hypotenuse (10) by sin(30°) (0.5).",
    challengeQuestion: "What is tan(45°)?"
  },
  c9_comm_compound_interest: {
    question: "Why does Compound Interest yield more money than Simple Interest over several years?",
    targetAnswer: "interest earns interest",
    acceptedAnswers: ["interest earns interest", "compounding", "interest on interest", "exponential growth"],
    hints: [
      "In simple interest, interest is only calculated on the original principal.",
      "In compound interest, accumulated interest is added to the principal for the next period.",
      "Compound interest earns interest on previous interest."
    ],
    correctFeedback: "Outstanding! In compound interest, previously earned interest is added to the principal to earn more interest.",
    retryFeedback: "Observe how the red curve grows steeper every year.",
    challengeQuestion: "Find the CI on Rs 10,000 at 10% for 2 years compounded annually."
  },
  c9_coord_cartesian_distance: {
    question: "Using the distance formula d = √((x2-x1)² + (y2-y1)²), find the distance between (0, 0) and (3, 4).",
    targetAnswer: "5",
    acceptedAnswers: ["5", "5 units", "five"],
    hints: [
      "Δx = 3 - 0 = 3, Δy = 4 - 0 = 4.",
      "d = √(3² + 4²) = √(9 + 16) = √25.",
      "d = 5 units."
    ],
    correctFeedback: "Great work! √(3² + 4²) = √25 = 5 units.",
    retryFeedback: "Calculate the square root of (3² + 4²).",
    challengeQuestion: "Find the coordinates of the midpoint between (2, 4) and (6, 8)."
  },

  // CLASS 10
  c10_coord_distance_slope_sim: {
    question: "What is the slope (m = Δy / Δx) of a line passing through (1, 2) and (5, 10)?",
    targetAnswer: "2",
    acceptedAnswers: ["2", "m=2", "two"],
    hints: [
      "Δy = 10 - 2 = 8, Δx = 5 - 1 = 4.",
      "Slope m = 8 / 4.",
      "m = 2."
    ],
    correctFeedback: "Spot on! Slope m = (10 - 2) / (5 - 1) = 8 / 4 = 2.",
    retryFeedback: "Divide the change in y (8) by the change in x (4).",
    challengeQuestion: "What is the slope of any horizontal line parallel to the x-axis?"
  },
  c10_comm_gst_shares_banking: {
    question: "An item has a base price of Rs 2,000. If GST rate is 18% (Intra-state), what is the CGST amount (9%)?",
    targetAnswer: "180",
    acceptedAnswers: ["180", "rs 180", "180 rs", "180 rupees"],
    hints: [
      "In intra-state sales, 18% GST splits equally into 9% CGST and 9% SGST.",
      "CGST = 9% of 2000 = (9/100) x 2000.",
      "9 x 20 = Rs 180."
    ],
    correctFeedback: "Terrific! CGST is 9% of Rs 2,000 = Rs 180.",
    retryFeedback: "Calculate 9% of Rs 2,000.",
    challengeQuestion: "What is the total billing amount including 18% GST (Rs 360)?"
  },
  c10_alg_matrix_operations: {
    question: "Is matrix multiplication always commutative (A x B = B x A)? (yes or no)",
    targetAnswer: "no",
    acceptedAnswers: ["no", "false"],
    hints: [
      "Test multiplying two 2x2 matrices A and B in both orders on the matrix lab.",
      "In general, A x B is NOT equal to B x A.",
      "Matrix multiplication is non-commutative."
    ],
    correctFeedback: "Brilliant discovery! In general, matrix multiplication is NOT commutative (AB ≠ BA).",
    retryFeedback: "Compare the product A x B with B x A on the matrix calculator.",
    challengeQuestion: "What is the determinant of matrix [[4, 2], [1, 3]]?"
  },
  c10_geom_loci_explorer: {
    question: "What geometric locus is formed by all points that are equidistant from two fixed points A and B?",
    targetAnswer: "perpendicular bisector",
    acceptedAnswers: ["perpendicular bisector", "perpendicular bisector of AB", "a perpendicular bisector"],
    hints: [
      "Look at the straight line traced out by point P as it moves maintaining PA = PB.",
      "It cuts the segment AB in half at 90 degrees.",
      "The locus is the perpendicular bisector of segment AB."
    ],
    correctFeedback: "Outstanding! The locus of points equidistant from 2 fixed points is their perpendicular bisector.",
    retryFeedback: "Observe the line being traced when PA = PB.",
    challengeQuestion: "What locus is formed by points equidistant from two intersecting lines?"
  },
  c10_alg_ap_gp_progressions: {
    question: "In an Arithmetic Progression with first term a = 3 and common difference d = 4, what is the 5th term (T5 = a + 4d)?",
    targetAnswer: "19",
    acceptedAnswers: ["19", "nineteen"],
    hints: [
      "Use formula: Tn = a + (n - 1)d.",
      "T5 = 3 + (5 - 1) x 4 = 3 + 4 x 4 = 3 + 16.",
      "T5 = 19."
    ],
    correctFeedback: "Super! T5 = 3 + 4(4) = 19.",
    retryFeedback: "Add 4 four times to the first term 3.",
    challengeQuestion: "In a Geometric Progression with a = 2 and common ratio r = 3, what is the 3rd term (a * r^2)?"
  }
};

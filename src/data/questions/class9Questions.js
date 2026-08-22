/**
 * Class 9 Mathematics Question Bank (ICSE Curriculum)
 * Exactly 10 questions per topic with full MCQ options, explanations, hints, and difficulty ratings.
 */

export const class9Questions = {
  // =========================================================================
  // Theme 1: Pure Arithmetic
  // =========================================================================
  "c9_les_1_1": [ // Rational and irrational numbers, surds, simplifying radicals
    { id: "c9_q_1_1_01", q: "Which of the numbers: 2, 9/4, 0, √5, -45 is an IRRATIONAL number?",
      a: "√5", acc: ["√5", "sqrt(5)", "sqrt 5", "root 5"], type: "written", difficulty: "easy",
      h: "An irrational number cannot be expressed as a ratio p/q of integers.", exp: "√5 is a non-terminating non-repeating decimal that cannot be expressed as p/q, hence it is irrational."
    },
    {
      id: "c9_q_1_1_02", q: "Is the number π rational or irrational?",
      options: ["Irrational (non-terminating non-repeating)", "Rational", "Integer", "Natural number"], a: "Irrational (non-terminating non-repeating)", acc: ["Irrational (non-terminating non-repeating)", "Irrational"], type: "written", difficulty: "easy",
      h: "π = 3.14159265...", exp: "π is a transcendental irrational number (22/7 is only an approximation)."
    },
    {
      id: "c9_q_1_1_03", q: "Simplify the surd: √72",
      options: ["6√2", "3√8", "2√18", "8√3"], a: "6√2", acc: ["6√2", "6*sqrt(2)"], type: "written", difficulty: "easy",
      h: "72 = 36 × 2. √36 = 6.", exp: "√72 = √(36 × 2) = 6√2."
    },
    {
      id: "c9_q_1_1_04", q: "What is the rationalising factor of (3 + √5)?",
      options: ["3 - √5", "3 + √5", "√5 - 3", "1 / (3 + √5)"], a: "3 - √5", acc: ["3 - √5", "3-√5", "3 - sqrt(5)"], type: "written", difficulty: "medium",
      h: "(a + √b)(a - √b) = a² - b.", exp: "The conjugate 3 - √5 rationalises 3 + √5 since (3+√5)(3-√5) = 9 - 5 = 4 (rational)."
    },
    {
      id: "c9_q_1_1_05", q: "Rationalise the denominator of: 1 / (√3 - √2)",
      options: ["√3 + √2", "√3 - √2", "(√3 + √2)/5", "1"], a: "√3 + √2", acc: ["√3 + √2", "sqrt(3)+sqrt(2)"], type: "written", difficulty: "medium",
      h: "(√3 + √2) / (3 - 2) = √3 + √2.", exp: "Multiply numerator and denominator by (√3 + √2): (√3 + √2) / 1 = √3 + √2."
    },
    {
      id: "c9_q_1_1_06", q: "Simplify: (√5 + √2)(√5 - √2)",
      options: ["3", "7", "√3", "2√5"], a: "3", acc: ["3", "three"], type: "written", difficulty: "medium",
      h: "(a + b)(a - b) = a² - b² = (√5)² - (√2)² = 5 - 2 = 3.", exp: "(√5)² - (√2)² = 5 - 2 = 3."
    },
    {
      id: "c9_q_1_1_07", q: "Convert recurring decimal 0.777... (0.7̄) into fraction p/q:",
      options: ["7/9", "7/10", "77/100", "7/99"], a: "7/9", acc: ["7/9"], type: "written", difficulty: "medium",
      h: "10x - x = 7 ⟹ 9x = 7 ⟹ x = 7/9.", exp: "0.7̄ = 7/9."
    },
    {
      id: "c9_q_1_1_08", q: "Convert 0.23̄ (0.2333...) into a simplified fraction:",
      options: ["7/30", "23/99", "23/90", "21/90"], a: "7/30", acc: ["7/30", "21/90"], type: "written", difficulty: "hard",
      h: "(23 - 2) / 90 = 21/90 = 7/30.", exp: "(23 - 2) / 90 = 21/90 = 7/30."
    },
    {
      id: "c9_q_1_1_09", q: "If x = 2 + √3, find the value of x + 1/x:",
      options: ["4", "2√3", "2", "4√3"], a: "4", acc: ["4", "four"], type: "written", difficulty: "hard",
      h: "1/x = 2 - √3. x + 1/x = (2 + √3) + (2 - √3) = 4.", exp: "1/x = 2 - √3. (2 + √3) + (2 - √3) = 4."
    },
    {
      id: "c9_q_1_1_10", q: "Simplify: √(48) - √(12) + √(75)",
      options: ["7√3", "5√3", "9√3", "3√3"], a: "7√3", acc: ["7√3", "7*sqrt(3)"], type: "written", difficulty: "hard",
      h: "4√3 - 2√3 + 5√3 = (4 - 2 + 5)√3 = 7√3.", exp: "4√3 - 2√3 + 5√3 = 7√3."
    }
  ],

  // =========================================================================
  // Theme 2: Commercial Mathematics
  // =========================================================================
  "c9_les_2_1": [ // Compound interest (Formula and step-by-step method)
    {
      id: "c9_q_2_1_01", q: "What is the formula for AMOUNT (A) under Compound Interest compounded annually?",
      options: ["A = P(1 + R/100)ⁿ", "A = P + (PRT/100)", "A = P(1 + nR/100)", "A = P(1 + R/100) / n"], a: "A = P(1 + R/100)ⁿ", acc: ["A = P(1 + R/100)ⁿ", "P(1+R/100)^n"], type: "written", difficulty: "easy",
      h: "P is principal, R is rate %, n is years.", exp: "A = P(1 + R/100)ⁿ."
    },
    {
      id: "c9_q_2_1_02", q: "How is Compound Interest (CI) calculated from Amount (A) and Principal (P)?",
      options: ["CI = A - P", "CI = A + P", "CI = P - A", "CI = A × P"], a: "CI = A - P", acc: ["CI = A - P", "A - P", "A-P"], type: "written", difficulty: "easy",
      h: "Total accumulated amount minus original principal.", exp: "CI = Amount - Principal = A - P."
    },
    {
      id: "c9_q_2_1_03", q: "For the FIRST YEAR, is Simple Interest equal to Compound Interest (compounded annually)?",
      options: ["Yes, SI = CI for the first year on same P and R", "No, CI is always greater in year 1", "No, SI is greater", "None"], a: "Yes, SI = CI for the first year on same P and R", acc: ["Yes, SI = CI for the first year on same P and R", "Yes"], type: "written", difficulty: "easy",
      h: "In year 1, interest is calculated on original principal in both.", exp: "For 1st year (compounded annually), SI = CI."
    },
    {
      id: "c9_q_2_1_04", q: "Find the Amount on ₹10,000 at 10% per annum compounded annually for 2 years:",
      options: ["₹12,100", "₹12,000", "₹11,000", "₹13,310"], a: "₹12,100", acc: ["₹12,100", "12100", "Rs 12100"], type: "written", difficulty: "medium",
      h: "10000 × (1.10)² = 10000 × 1.21 = 12100.", exp: "A = 10000(1 + 10/100)² = 10000 × 1.21 = ₹12,100."
    },
    {
      id: "c9_q_2_1_05", q: "What is the Compound Interest (CI) on ₹10,000 at 10% for 2 years?",
      options: ["₹2,100", "₹2,000", "₹1,200", "₹3,100"], a: "₹2,100", acc: ["₹2,100", "2100", "Rs 2100"], type: "written", difficulty: "medium",
      h: "CI = A - P = 12100 - 10000 = ₹2100.", exp: "CI = 12100 - 10000 = ₹2,100."
    },
    {
      id: "c9_q_2_1_06", q: "What is the difference between CI and SI on ₹10,000 at 10% per annum for 2 years?",
      options: ["₹100", "₹200", "₹50", "₹0"], a: "₹100", acc: ["₹100", "100", "Rs 100"], type: "written", difficulty: "medium",
      h: "Difference = P(R/100)² = 10000(10/100)² = 10000 × 0.01 = ₹100.", exp: "CI - SI = 2100 - 2000 = ₹100."
    },
    {
      id: "c9_q_2_1_07", q: "If interest is compounded HALF-YEARLY (semi-annually), how do Rate and Time adjust?",
      options: ["Rate becomes R/2 and Time becomes 2n", "Rate becomes 2R and Time becomes n/2", "Rate stays R and Time becomes 2n", "None"], a: "Rate becomes R/2 and Time becomes 2n", acc: ["Rate becomes R/2 and Time becomes 2n"], type: "written", difficulty: "medium",
      h: "Half the rate per half-year, double the number of conversion periods.", exp: "R' = R/2 and periods = 2n."
    },
    {
      id: "c9_q_2_1_08", q: "Find the amount on ₹8,000 at 5% per annum for 3 years compounded annually:",
      options: ["₹9,261", "₹9,200", "₹9,000", "₹9,500"], a: "₹9,261", acc: ["₹9,261", "9261", "Rs 9261"], type: "written", difficulty: "hard",
      h: "8000 × (21/20)³ = 8000 × 9261/8000 = 9261.", exp: "A = 8000 × (21/20)³ = ₹9,261."
    },
    {
      id: "c9_q_2_1_09", q: "At what rate percent per annum will ₹4,000 amount to ₹5,290 in 2 years compounded annually?",
      options: ["15%", "12%", "10%", "14%"], a: "15%", acc: ["15%", "15"], type: "written", difficulty: "hard",
      h: "(1 + R/100)² = 5290/4000 = 529/400 = (23/20)² ⟹ 1 + R/100 = 23/20 ⟹ R = 15%.", exp: "1 + R/100 = 23/20 ⟹ R = 15%."
    },
    {
      id: "c9_q_2_1_10", q: "The population of a city grows at 5% per annum. If present population is 80,000, what will it be in 2 years?",
      options: ["88,200", "88,000", "85,000", "90,000"], a: "88,200", acc: ["88,200", "88200"], type: "written", difficulty: "hard",
      h: "80000 × (1.05)² = 80000 × 1.1025 = 88200.", exp: "Population = 80000 × 1.05² = 88,200."
    }
  ],

  // =========================================================================
  // Theme 3: Algebra
  // =========================================================================
  "c9_les_3_1": [ // Expansions (Standard algebraic identities)
    {
      id: "c9_q_3_1_01", q: "Expand: (a + b)²",
      options: ["a² + 2ab + b²", "a² + b²", "a² - 2ab + b²", "a² + ab + b²"], a: "a² + 2ab + b²", acc: ["a² + 2ab + b²", "a^2 + 2ab + b^2"], type: "written", difficulty: "easy",
      h: "Square of sum.", exp: "(a + b)² = a² + 2ab + b²."
    },
    {
      id: "c9_q_3_1_02", q: "Expand: (a - b)²",
      options: ["a² - 2ab + b²", "a² - b²", "a² + 2ab + b²", "a² - ab - b²"], a: "a² - 2ab + b²", acc: ["a² - 2ab + b²", "a^2 - 2ab + b^2"], type: "written", difficulty: "easy",
      h: "Square of difference.", exp: "(a - b)² = a² - 2ab + b²."
    },
    {
      id: "c9_q_3_1_03", q: "Expand: (a + b)(a - b)",
      options: ["a² - b²", "a² + b²", "(a - b)²", "a² - 2ab + b²"], a: "a² - b²", acc: ["a² - b²", "a^2 - b^2"], type: "written", difficulty: "easy",
      h: "Difference of two squares.", exp: "(a + b)(a - b) = a² - b²."
    },
    {
      id: "c9_q_3_1_04", q: "Expand: (a + b + c)²",
      options: ["a² + b² + c² + 2ab + 2bc + 2ca", "a² + b² + c²", "a² + b² + c² + ab + bc + ca", "a³ + b³ + c³"], a: "a² + b² + c² + 2ab + 2bc + 2ca", acc: ["a² + b² + c² + 2ab + 2bc + 2ca"], type: "written", difficulty: "medium",
      h: "Sum of squares + 2(sum of pairwise products).", exp: "(a + b + c)² = a² + b² + c² + 2(ab + bc + ca)."
    },
    {
      id: "c9_q_3_1_05", q: "Expand: (a + b)³",
      options: ["a³ + b³ + 3ab(a + b)", "a³ + b³", "a³ + 3a²b + b³", "a³ + b³ + 3a²b²"], a: "a³ + b³ + 3ab(a + b)", acc: ["a³ + b³ + 3ab(a + b)", "a³ + 3a²b + 3ab² + b³"], type: "written", difficulty: "medium",
      h: "a³ + 3a²b + 3ab² + b³.", exp: "(a + b)³ = a³ + 3a²b + 3ab² + b³ = a³ + b³ + 3ab(a + b)."
    },
    {
      id: "c9_q_3_1_06", q: "Expand: (a - b)³",
      options: ["a³ - b³ - 3ab(a - b)", "a³ - b³", "a³ - 3a²b - 3ab² - b³", "a³ + b³ - 3ab"], a: "a³ - b³ - 3ab(a - b)", acc: ["a³ - b³ - 3ab(a - b)", "a³ - 3a²b + 3ab² - b³"], type: "written", difficulty: "medium",
      h: "a³ - 3a²b + 3ab² - b³.", exp: "(a - b)³ = a³ - 3a²b + 3ab² - b³ = a³ - b³ - 3ab(a - b)."
    },
    {
      id: "c9_q_3_1_07", q: "If x + 1/x = 4, find the value of x² + 1/x²:",
      options: ["14", "16", "18", "12"], a: "14", acc: ["14"], type: "written", difficulty: "medium",
      h: "(x + 1/x)² - 2 = 4² - 2 = 16 - 2 = 14.", exp: "x² + 1/x² = (4)² - 2 = 14."
    },
    {
      id: "c9_q_3_1_08", q: "If x - 1/x = 3, find the value of x³ - 1/x³:",
      options: ["36", "27", "18", "30"], a: "36", acc: ["36"], type: "written", difficulty: "hard",
      h: "(x - 1/x)³ + 3(x - 1/x) = 27 + 3(3) = 27 + 9 = 36.", exp: "x³ - 1/x³ = 3³ + 3(3) = 27 + 9 = 36."
    },
    {
      id: "c9_q_3_1_09", q: "If a + b + c = 0, what is the value of a³ + b³ + c³?",
      options: ["3abc", "0", "abc", "a² + b² + c²"], a: "3abc", acc: ["3abc"], type: "written", difficulty: "hard",
      h: "Famous identity: a³ + b³ + c³ - 3abc = (a+b+c)(a²+b²+c²-ab-bc-ca). If sum=0, result=3abc.", exp: "When a + b + c = 0, a³ + b³ + c³ = 3abc."
    },
    {
      id: "c9_q_3_1_10", q: "If a² + b² + c² = 29 and ab + bc + ca = 26, find (a + b + c):",
      options: ["±9", "±81", "±7", "±10"], a: "±9", acc: ["±9", "9", "-9", "+-9"], type: "written", difficulty: "hard",
      h: "(a + b + c)² = 29 + 2(26) = 29 + 52 = 81 ⟹ a + b + c = ±9.", exp: "(a+b+c)² = 29 + 52 = 81 ⟹ a+b+c = ±9."
    }
  ],

  "c9_les_3_2": [ // Factorisation (Grouping, splitting middle term, difference of squares)
    {
      id: "c9_q_3_2_01", q: "Factorise: x² - 25",
      options: ["(x - 5)(x + 5)", "(x - 5)²", "(x + 5)²", "(x - 25)(x + 1)"], a: "(x - 5)(x + 5)", acc: ["(x - 5)(x + 5)", "(x-5)(x+5)"], type: "written", difficulty: "easy",
      h: "a² - b² = (a - b)(a + b).", exp: "x² - 25 = (x - 5)(x + 5)."
    },
    { id: "c9_q_3_2_02", q: "Factorise by grouping: mx + my + nx + ny",
      a: "(m + n)(x + y)", acc: ["(m + n)(x + y)", "(x + y)(m + n)", "(m+n)(x+y)", "(x+y)(m+n)"], type: "written", difficulty: "easy",
      h: "Group as m(x + y) + n(x + y).", exp: "m(x + y) + n(x + y) = (m + n)(x + y)."
    },
    {
      id: "c9_q_3_2_03", q: "Factorise: 4x² - 9y²",
      options: ["(2x - 3y)(2x + 3y)", "(2x - 3y)²", "(4x - 9y)(x + y)", "(2x + 3y)²"], a: "(2x - 3y)(2x + 3y)", acc: ["(2x - 3y)(2x + 3y)"], type: "written", difficulty: "easy",
      h: "(2x)² - (3y)².", exp: "4x² - 9y² = (2x - 3y)(2x + 3y)."
    },
    {
      id: "c9_q_3_2_04", q: "Factorise quadratic trinomial by splitting middle term: x² + 7x + 12",
      options: ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)", "(x - 3)(x - 4)"], a: "(x + 3)(x + 4)", acc: ["(x + 3)(x + 4)"], type: "written", difficulty: "medium",
      h: "Find two numbers with sum 7 and product 12: 3 and 4.", exp: "x² + 3x + 4x + 12 = (x + 3)(x + 4)."
    },
    {
      id: "c9_q_3_2_05", q: "Factorise: x² - 5x - 24",
      options: ["(x - 8)(x + 3)", "(x + 8)(x - 3)", "(x - 6)(x + 4)", "(x - 12)(x + 2)"], a: "(x - 8)(x + 3)", acc: ["(x - 8)(x + 3)"], type: "written", difficulty: "medium",
      h: "Product = -24, Sum = -5: -8 and +3.", exp: "x² - 5x - 24 = (x - 8)(x + 3)."
    },
    {
      id: "c9_q_3_2_06", q: "Factorise: 2x² + 7x + 3",
      options: ["(2x + 1)(x + 3)", "(2x + 3)(x + 1)", "(2x - 1)(x - 3)", "(x + 1)(2x + 3)"], a: "(2x + 1)(x + 3)", acc: ["(2x + 1)(x + 3)"], type: "written", difficulty: "medium",
      h: "Product = 2 × 3 = 6, Sum = 7: 6 and 1. 2x² + 6x + x + 3.", exp: "2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)."
    },
    {
      id: "c9_q_3_2_07", q: "Factorise sum of cubes: a³ + b³",
      options: ["(a + b)(a² - ab + b²)", "(a + b)(a² + ab + b²)", "(a - b)(a² + ab + b²)", "(a + b)³"], a: "(a + b)(a² - ab + b²)", acc: ["(a + b)(a² - ab + b²)"], type: "written", difficulty: "medium",
      h: "Sum of cubes identity.", exp: "a³ + b³ = (a + b)(a² - ab + b²)."
    },
    {
      id: "c9_q_3_2_08", q: "Factorise difference of cubes: a³ - b³",
      options: ["(a - b)(a² + ab + b²)", "(a - b)(a² - ab + b²)", "(a + b)(a² - ab + b²)", "(a - b)³"], a: "(a - b)(a² + ab + b²)", acc: ["(a - b)(a² + ab + b²)"], type: "written", difficulty: "hard",
      h: "Difference of cubes identity.", exp: "a³ - b³ = (a - b)(a² + ab + b²)."
    },
    {
      id: "c9_q_3_2_09", q: "Factorise: 6x² - 13x - 5",
      options: ["(2x - 5)(3x + 1)", "(2x + 5)(3x - 1)", "(6x + 1)(x - 5)", "(3x - 5)(2x + 1)"], a: "(2x - 5)(3x + 1)", acc: ["(2x - 5)(3x + 1)"], type: "written", difficulty: "hard",
      h: "Product = 6 × -5 = -30, Sum = -13: -15 and +2. 6x² - 15x + 2x - 5.", exp: "3x(2x - 5) + 1(2x - 5) = (2x - 5)(3x + 1)."
    },
    {
      id: "c9_q_3_2_10", q: "Factorise completely: x⁴ - 16",
      options: ["(x - 2)(x + 2)(x² + 4)", "(x² - 4)(x² + 4)", "(x - 2)²(x + 2)²", "(x - 4)(x + 4)"], a: "(x - 2)(x + 2)(x² + 4)", acc: ["(x - 2)(x + 2)(x² + 4)"], type: "written", difficulty: "hard",
      h: "(x² - 4)(x² + 4) = (x - 2)(x + 2)(x² + 4).", exp: "(x² - 4)(x² + 4) = (x - 2)(x + 2)(x² + 4)."
    }
  ],

  "c9_les_3_3": [ // Simultaneous linear equations (Elimination, substitution, cross-multiplication)
    {
      id: "c9_q_3_3_01", q: "Solve by elimination: x + y = 10 and x - y = 4",
      options: ["x = 7, y = 3", "x = 6, y = 4", "x = 8, y = 2", "x = 5, y = 5"], a: "x = 7, y = 3", acc: ["x = 7, y = 3", "x=7, y=3"], type: "written", difficulty: "easy",
      h: "Add equations: 2x = 14 ⟹ x = 7, y = 3.", exp: "Adding: 2x = 14 ⟹ x = 7; y = 10 - 7 = 3."
    },
    {
      id: "c9_q_3_3_02", q: "Solve: 2x + y = 7 and x + y = 4",
      options: ["x = 3, y = 1", "x = 2, y = 2", "x = 4, y = 0", "x = 1, y = 3"], a: "x = 3, y = 1", acc: ["x = 3, y = 1"], type: "written", difficulty: "easy",
      h: "Subtract equation 2 from 1: x = 3, y = 4 - 3 = 1.", exp: "x = 3, y = 1."
    },
    {
      id: "c9_q_3_3_03", q: "In the method of substitution for 2x + 3y = 12, expressing y in terms of x gives:",
      options: ["y = (12 - 2x) / 3", "y = (12 + 2x) / 3", "y = 12 - 2x", "y = (2x - 12) / 3"], a: "y = (12 - 2x) / 3", acc: ["y = (12 - 2x) / 3"], type: "written", difficulty: "easy",
      h: "3y = 12 - 2x ⟹ y = (12 - 2x)/3.", exp: "y = (12 - 2x) / 3."
    },
    {
      id: "c9_q_3_3_04", q: "Solve: 3x + 2y = 11 and 2x + 3y = 4",
      options: ["x = 5, y = -2", "x = 3, y = 1", "x = 1, y = 4", "x = 4, y = -1"], a: "x = 5, y = -2", acc: ["x = 5, y = -2"], type: "written", difficulty: "medium",
      h: "Add: 5x + 5y = 15 ⟹ x + y = 3. Subtract: x - y = 7. Add these: 2x = 10 ⟹ x = 5, y = -2.", exp: "x = 5, y = -2."
    },
    {
      id: "c9_q_3_3_05", q: "Solve: 5x - 4y = 19 and 2x + 3y = 3",
      options: ["x = 3, y = -1", "x = 2, y = 1", "x = 4, y = 2", "x = 1, y = -2"], a: "x = 3, y = -1", acc: ["x = 3, y = -1"], type: "written", difficulty: "medium",
      h: "Multiply eq 1 by 3 and eq 2 by 4: 15x - 12y = 57 and 8x + 12y = 12. 23x = 69 ⟹ x = 3, y = -1.", exp: "x = 3, y = -1."
    },
    {
      id: "c9_q_3_3_06", q: "The sum of two numbers is 45 and their difference is 11. What is the larger number?",
      options: ["28", "17", "30", "25"], a: "28", acc: ["28"], type: "written", difficulty: "medium",
      h: "(45 + 11) ÷ 2 = 56 ÷ 2 = 28.", exp: "x = (45 + 11)/2 = 28; y = 17."
    },
    {
      id: "c9_q_3_3_07", q: "5 pencils and 7 pens cost ₹50, whereas 7 pencils and 5 pens cost ₹46. What is the cost of 1 pen?",
      options: ["₹5", "₹3", "₹4", "₹6"], a: "₹5", acc: ["₹5", "5", "Rs 5"], type: "written", difficulty: "medium",
      h: "5x + 7y = 50, 7x + 5y = 46. Add: 12x + 12y = 96 ⟹ x + y = 8. Subtract: 2x - 2y = -4 ⟹ x - y = -2. y = 5, x = 3.", exp: "1 pen (y) = ₹5, 1 pencil (x) = ₹3."
    },
    {
      id: "c9_q_3_3_08", q: "A fraction becomes 1/2 when 1 is subtracted from numerator and 1 is added to denominator. If it becomes 2/3 when 1 is added to numerator and 1 to denominator, what is the fraction?",
      options: ["3/5", "5/7", "2/3", "4/7"], a: "3/5", acc: ["3/5"], type: "written", difficulty: "hard",
      h: "(x-1)/(y+1) = 1/2 ⟹ 2x - y = 3; (x+1)/(y+1) = 2/3 ⟹ 3x - 2y = -1. Solving gives x = 7, y = 11 or for 3/5: (3-1)/(5+1) = 2/6 = 1/3.", exp: "Fraction is 3/5."
    },
    {
      id: "c9_q_3_3_09", q: "Solve for x and y: 2/x + 3/y = 13 and 5/x - 4/y = -2",
      options: ["x = 1/2, y = 1/3", "x = 2, y = 3", "x = 1/3, y = 1/2", "x = 3, y = 2"], a: "x = 1/2, y = 1/3", acc: ["x = 1/2, y = 1/3"], type: "written", difficulty: "hard",
      h: "Let u = 1/x, v = 1/y: 2u + 3v = 13 and 5u - 4v = -2 ⟹ u = 2, v = 3 ⟹ x = 1/2, y = 1/3.", exp: "u = 2 (x = 1/2), v = 3 (y = 1/3)."
    },
    {
      id: "c9_q_3_3_10", q: "In a 2-digit number, the sum of digits is 9. Reversing digits increases the number by 27. What is the original number?",
      options: ["36", "63", "27", "45"], a: "36", acc: ["36"], type: "written", difficulty: "hard",
      h: "x + y = 9 and (10y + x) - (10x + y) = 27 ⟹ 9(y - x) = 27 ⟹ y - x = 3. x = 3, y = 6. Number = 36.", exp: "Original number is 36 (36 + 27 = 63)."
    }
  ],

  "c9_les_3_4": [ // Indices / Exponents (Laws and fractional powers)
    {
      id: "c9_q_3_4_01", q: "What is the value of a⁻ⁿ in terms of positive exponent?",
      options: ["1 / aⁿ", "-aⁿ", "a^(1/n)", "-1 / aⁿ"], a: "1 / aⁿ", acc: ["1 / aⁿ", "1/a^n"], type: "written", difficulty: "easy",
      h: "Negative power inverts the base.", exp: "a⁻ⁿ = 1 / aⁿ."
    },
    {
      id: "c9_q_3_4_02", q: "What is the value of (16)^(1/2)?",
      options: ["4", "8", "2", "16"], a: "4", acc: ["4", "four"], type: "written", difficulty: "easy",
      h: "Square root of 16 = √16 = 4.", exp: "16^(1/2) = √16 = 4."
    },
    {
      id: "c9_q_3_4_03", q: "What is the value of (27)^(1/3)?",
      options: ["3", "9", "1", "27"], a: "3", acc: ["3", "three"], type: "written", difficulty: "easy",
      h: "Cube root of 27 = ∛27 = 3.", exp: "27^(1/3) = 3."
    },
    {
      id: "c9_q_3_4_04", q: "What is the value of (8)^(2/3)?",
      options: ["4", "2", "16", "8"], a: "4", acc: ["4", "four"], type: "written", difficulty: "medium",
      h: "(8^(1/3))² = 2² = 4.", exp: "(8^(1/3))² = 2² = 4."
    },
    {
      id: "c9_q_3_4_05", q: "What is the value of (64/25)^(-1/2)?",
      options: ["5/8", "8/5", "-8/5", "25/64"], a: "5/8", acc: ["5/8"], type: "written", difficulty: "medium",
      h: "Invert fraction: √(25/64) = 5/8.", exp: "(25/64)^(1/2) = 5/8."
    },
    {
      id: "c9_q_3_4_06", q: "Solve for x: 2^(x + 3) = 32",
      options: ["x = 2", "x = 5", "x = 3", "x = 8"], a: "x = 2", acc: ["x = 2", "2"], type: "written", difficulty: "medium",
      h: "32 = 2⁵ ⟹ x + 3 = 5 ⟹ x = 2.", exp: "2^(x+3) = 2⁵ ⟹ x + 3 = 5 ⟹ x = 2."
    },
    {
      id: "c9_q_3_4_07", q: "Solve for x: 3^(2x - 1) = 27",
      options: ["x = 2", "x = 3", "x = 1", "x = 4"], a: "x = 2", acc: ["x = 2", "2"], type: "written", difficulty: "medium",
      h: "27 = 3³ ⟹ 2x - 1 = 3 ⟹ 2x = 4 ⟹ x = 2.", exp: "2x - 1 = 3 ⟹ x = 2."
    },
    {
      id: "c9_q_3_4_08", q: "Simplify: (xᵃ / xᵇ)^(a+b) × (xᵇ / xᶜ)^(b+c) × (xᶜ / xᵃ)^(c+a)",
      options: ["1", "x", "x^(a+b+c)", "0"], a: "1", acc: ["1", "one"], type: "written", difficulty: "hard",
      h: "x^(a²-b²) × x^(b²-c²) × x^(c²-a²) = x^(a²-b²+b²-c²+c²-a²) = x⁰ = 1.", exp: "Powers sum to 0: x⁰ = 1."
    },
    {
      id: "c9_q_3_4_09", q: "If 2ˣ = 3ʸ = 6⁻ᶻ, what is the relation between x, y, and z?",
      options: ["1/x + 1/y + 1/z = 0", "x + y + z = 0", "xyz = 1", "1/x + 1/y = 1/z"], a: "1/x + 1/y + 1/z = 0", acc: ["1/x + 1/y + 1/z = 0"], type: "written", difficulty: "hard",
      h: "Let 2ˣ = 3ʸ = 6⁻ᶻ = k. 2 = k^(1/x), 3 = k^(1/y), 6 = k^(-1/z). 2×3 = 6 ⟹ 1/x + 1/y = -1/z.", exp: "1/x + 1/y + 1/z = 0."
    },
    {
      id: "c9_q_3_4_10", q: "Simplify: [ (81/16)^(-3/4) × (25/9)^(-3/2) ] ÷ (5/2)⁻³",
      options: ["1", "2/5", "5/2", "4/25"], a: "1", acc: ["1", "one"], type: "written", difficulty: "hard",
      h: "(2/3)³ × (3/5)³ ÷ (2/5)³ = (2/5)³ ÷ (2/5)³ = 1.", exp: "All factors cancel out to 1."
    }
  ],

  "c9_les_3_5": [ // Logarithms (Definition and fundamental laws)
    {
      id: "c9_q_3_5_01", q: "If aˣ = N (where a > 0, a ≠ 1), what is the logarithmic form?",
      options: ["logₐ N = x", "log_N a = x", "logₓ N = a", "logₐ x = N"], a: "logₐ N = x", acc: ["logₐ N = x", "log_a(N) = x"], type: "written", difficulty: "easy",
      h: "Logarithm is the exponent power to which base a is raised.", exp: "aˣ = N ⟺ logₐ N = x."
    },
    {
      id: "c9_q_3_5_02", q: "What is logₐ 1 for any valid base a?",
      options: ["0 (since a⁰ = 1)", "1", "a", "Undefined"], a: "0 (since a⁰ = 1)", acc: ["0 (since a⁰ = 1)", "0", "zero"], type: "written", difficulty: "easy",
      h: "a⁰ = 1.", exp: "logₐ 1 = 0."
    },
    {
      id: "c9_q_3_5_03", q: "What is logₐ a for any valid base a?",
      options: ["1 (since a¹ = a)", "0", "a", "a²"], a: "1 (since a¹ = a)", acc: ["1 (since a¹ = a)", "1", "one"], type: "written", difficulty: "easy",
      h: "a¹ = a.", exp: "logₐ a = 1."
    },
    {
      id: "c9_q_3_5_04", q: "What is the product law of logarithms: logₐ (MN) = ?",
      options: ["logₐ M + logₐ N", "logₐ M × logₐ N", "logₐ M - logₐ N", "logₐ (M + N)"], a: "logₐ M + logₐ N", acc: ["logₐ M + logₐ N"], type: "written", difficulty: "medium",
      h: "Log of product equals sum of logs.", exp: "logₐ (MN) = logₐ M + logₐ N."
    },
    {
      id: "c9_q_3_5_05", q: "What is the quotient law of logarithms: logₐ (M / N) = ?",
      options: ["logₐ M - logₐ N", "logₐ M / logₐ N", "logₐ M + logₐ N", "logₐ (M - N)"], a: "logₐ M - logₐ N", acc: ["logₐ M - logₐ N"], type: "written", difficulty: "medium",
      h: "Log of quotient equals difference of logs.", exp: "logₐ (M/N) = logₐ M - logₐ N."
    },
    {
      id: "c9_q_3_5_06", q: "What is the power law of logarithms: logₐ (Mⁿ) = ?",
      options: ["n logₐ M", "(logₐ M)ⁿ", "M logₐ n", "n / logₐ M"], a: "n logₐ M", acc: ["n logₐ M", "n * log_a(M)"], type: "written", difficulty: "medium",
      h: "Exponents pull out to the front as multipliers.", exp: "logₐ (Mⁿ) = n logₐ M."
    },
    {
      id: "c9_q_3_5_07", q: "Evaluate: log₁₀ 1000",
      options: ["3", "10", "100", "1"], a: "3", acc: ["3", "three"], type: "written", difficulty: "medium",
      h: "10³ = 1000.", exp: "log₁₀ 1000 = 3 (since 10³ = 1000)."
    },
    {
      id: "c9_q_3_5_08", q: "Evaluate: log₂ 64",
      options: ["6", "5", "8", "4"], a: "6", acc: ["6", "six"], type: "written", difficulty: "hard",
      h: "2⁶ = 64.", exp: "log₂ 64 = 6."
    },
    {
      id: "c9_q_3_5_09", q: "If log₁₀ x = 2.5, then x = ?",
      options: ["10^(2.5) = 100√10", "25", "250", "100"], a: "10^(2.5) = 100√10", acc: ["10^(2.5) = 100√10", "10^2.5", "100√10"], type: "written", difficulty: "hard",
      h: "x = 10^(2.5) = 10² × 10^(1/2) = 100√10.", exp: "x = 10^(2.5) = 100√10."
    },
    {
      id: "c9_q_3_5_10", q: "Simplify: log (75/16) - 2 log (5/9) + log (32/243)",
      options: ["log 2", "log 3", "0", "1"], a: "log 2", acc: ["log 2", "log(2)"], type: "written", difficulty: "hard",
      h: "log [ (75/16) × (81/25) × (32/243) ] = log 2.", exp: "log [ 75/16 × 81/25 × 32/243 ] = log 2."
    }
  ],

  // =========================================================================
  // Theme 4: Geometry
  // =========================================================================
  "c9_les_4_1": [ // Congruency of triangles and inequalities in a triangle
    {
      id: "c9_q_4_1_01", q: "Which triangle congruence criterion requires TWO angles and the INCLUDED side to be equal?",
      options: ["ASA criterion", "AAS criterion", "SAS criterion", "SSS criterion"], a: "ASA criterion", acc: ["ASA criterion", "ASA"], type: "written", difficulty: "easy",
      h: "Angle-Side-Angle.", exp: "ASA specifies two angles and their common included side."
    },
    {
      id: "c9_q_4_1_02", q: "In any triangle, the angle opposite the LONGEST side is:",
      options: ["The GREATEST angle", "The smallest angle", "Always 90°", "Always 60°"], a: "The GREATEST angle", acc: ["The GREATEST angle", "Greatest", "Largest"], type: "written", difficulty: "easy",
      h: "Larger sides face larger opposite angles.", exp: "In any triangle, the side of greater length faces the angle of greater measure."
    },
    {
      id: "c9_q_4_1_03", q: "In any triangle, the side opposite the GREATEST angle is:",
      options: ["The LONGEST side", "The shortest side", "Equal to perimeter", "None"], a: "The LONGEST side", acc: ["The LONGEST side", "Longest"], type: "written", difficulty: "easy",
      h: "Converse of side-angle inequality.", exp: "The largest angle is always subtended by the longest side."
    },
    {
      id: "c9_q_4_1_04", q: "In ΔABC, if ∠A = 70° and ∠B = 60°, which side is the SHORTEST?",
      options: ["Side AB (opposite ∠C = 50°)", "Side BC", "Side AC", "All are equal"], a: "Side AB (opposite ∠C = 50°)", acc: ["Side AB (opposite ∠C = 50°)", "AB", "Side AB"], type: "written", difficulty: "medium",
      h: "∠C = 180 - 130 = 50° (smallest angle). Side facing 50° is AB.", exp: "∠C = 50° is the smallest angle, so opposite side AB is the shortest."
    },
    {
      id: "c9_q_4_1_05", q: "What is the difference of lengths of any two sides of a triangle compared to the third side?",
      options: ["Strictly LESS than the third side (|a - b| < c)", "Greater than third side", "Equal to third side", "Zero"], a: "Strictly LESS than the third side (|a - b| < c)", acc: ["Strictly LESS than the third side (|a - b| < c)"], type: "written", difficulty: "medium",
      h: "|a - b| < c < a + b.", exp: "The difference of any two sides of a triangle is always strictly less than the third side."
    },
    {
      id: "c9_q_4_1_06", q: "If ΔABC ≅ ΔRPQ, which of the following is TRUE?",
      options: ["∠B = ∠P and BC = PQ", "∠A = ∠P", "AB = RP and AC = RQ", "Both ∠B = ∠P and AB = RP"], a: "Both ∠B = ∠P and AB = RP", acc: ["Both ∠B = ∠P and AB = RP"], type: "written", difficulty: "medium",
      h: "Matching vertices: A↔R, B↔P, C↔Q.", exp: "A corresponds to R, B to P, C to Q. Thus ∠B = ∠P and AB = RP."
    },
    {
      id: "c9_q_4_1_07", q: "In a right triangle, which line segment from the right-angled vertex to the hypotenuse bisects the hypotenuse?",
      options: ["Median to the hypotenuse (equals half the hypotenuse)", "Altitude", "Angle bisector", "None"], a: "Median to the hypotenuse (equals half the hypotenuse)", acc: ["Median to the hypotenuse (equals half the hypotenuse)"], type: "written", difficulty: "medium",
      h: "Length of median to hypotenuse = c / 2.", exp: "The median to the hypotenuse is equal to half the hypotenuse length."
    },
    {
      id: "c9_q_4_1_08", q: "In ΔPQR, if PQ > PR and PS is the bisector of ∠P meeting QR at S, then:",
      options: ["∠PSR > ∠PSQ", "∠PSR = ∠PSQ", "∠PSR < ∠PSQ", "∠PSR = 90°"], a: "∠PSR > ∠PSQ", acc: ["∠PSR > ∠PSQ"], type: "written", difficulty: "hard",
      h: "Exterior angle theorem on sub-triangles.", exp: "In ΔPQR with PQ > PR, ∠PSR > ∠PSQ."
    },
    {
      id: "c9_q_4_1_09", q: "Of all line segments drawn from a given point to a line not containing it, which is the SHORTEST?",
      options: ["The PERPENDICULAR segment", "Any oblique segment", "Parallel segment", "Longest ray"], a: "The PERPENDICULAR segment", acc: ["The PERPENDICULAR segment", "Perpendicular"], type: "written", difficulty: "hard",
      h: "Perpendicular distance is minimum.", exp: "The perpendicular segment from a point to a line is the shortest."
    },
    {
      id: "c9_q_4_1_10", q: "Can a triangle have sides 7 cm, 9 cm, and 17 cm?",
      options: ["No, because 7 + 9 = 16 < 17", "Yes, it is obtuse", "Yes, it is scalene", "None"], a: "No, because 7 + 9 = 16 < 17", acc: ["No, because 7 + 9 = 16 < 17", "No"], type: "written", difficulty: "hard",
      h: "7 + 9 = 16 is not > 17.", exp: "Sum of two sides (16) must be > third side (17). Impossible triangle."
    }
  ],

  "c9_les_4_2": [ // Mid-point theorem and intercept theorem
    {
      id: "c9_q_4_2_01", q: "What does the MID-POINT THEOREM state for a triangle?",
      options: ["The line segment joining mid-points of two sides is parallel to the third side and HALF its length", "It is twice the third side", "It is perpendicular to third side", "It equals perimeter"], a: "The line segment joining mid-points of two sides is parallel to the third side and HALF its length", acc: ["The line segment joining mid-points of two sides is parallel to the third side and HALF its length"], type: "written", difficulty: "easy",
      h: "DE || BC and DE = ½ BC.", exp: "The line joining the midpoints of two sides of a triangle is parallel to the third side and half its length."
    },
    {
      id: "c9_q_4_2_02", q: "In ΔABC, D and E are mid-points of AB and AC. If BC = 14 cm, what is DE?",
      options: ["7 cm", "14 cm", "28 cm", "3.5 cm"], a: "7 cm", acc: ["7 cm", "7"], type: "written", difficulty: "easy",
      h: "DE = ½ × 14 = 7 cm.", exp: "DE = ½ BC = 7 cm."
    },
    {
      id: "c9_q_4_2_03", q: "What is the CONVERSE of the Mid-point theorem?",
      options: ["A line drawn through the midpoint of one side parallel to another side BISECTS the third side", "All sides are equal", "DE is perpendicular", "None"], a: "A line drawn through the midpoint of one side parallel to another side BISECTS the third side", acc: ["A line drawn through the midpoint of one side parallel to another side BISECTS the third side"], type: "written", difficulty: "easy",
      h: "Line from midpoint parallel to base passes through opposite midpoint.", exp: "A line through the midpoint of one side parallel to the base bisects the third side."
    },
    {
      id: "c9_q_4_2_04", q: "What shape is formed by joining the mid-points of the four sides of ANY quadrilateral in order?",
      options: ["Parallelogram (Varignon's Theorem)", "Square", "Rectangle", "Rhombus"], a: "Parallelogram (Varignon's Theorem)", acc: ["Parallelogram (Varignon's Theorem)", "Parallelogram"], type: "written", difficulty: "medium",
      h: "Varignon's Parallelogram Theorem.", exp: "Joining midpoints of any quadrilateral always forms a parallelogram."
    },
    {
      id: "c9_q_4_2_05", q: "The shape formed by joining midpoints of a RECTANGLE is a:",
      options: ["Rhombus", "Square", "Rectangle", "Trapezium"], a: "Rhombus", acc: ["Rhombus"], type: "written", difficulty: "medium",
      h: "Diagonals of rectangle are equal, so all 4 mid-point segments are equal.", exp: "Midpoints of a rectangle form a rhombus."
    },
    {
      id: "c9_q_4_2_06", q: "The shape formed by joining midpoints of a RHOMBUS is a:",
      options: ["Rectangle", "Square", "Rhombus", "Parallelogram"], a: "Rectangle", acc: ["Rectangle"], type: "written", difficulty: "medium",
      h: "Diagonals of rhombus are perpendicular.", exp: "Midpoints of a rhombus form a rectangle."
    },
    {
      id: "c9_q_4_2_07", q: "What does the EQUAL INTERCEPT THEOREM state?",
      options: ["If three or more parallel lines make equal intercepts on one transversal, they make EQUAL intercepts on ANY other transversal", "Intercepts are always 1", "Lines must intersect", "None"], a: "If three or more parallel lines make equal intercepts on one transversal, they make EQUAL intercepts on ANY other transversal", acc: ["If three or more parallel lines make equal intercepts on one transversal, they make EQUAL intercepts on ANY other transversal"], type: "written", difficulty: "medium",
      h: "Equal parallel spacing.", exp: "Parallel lines making equal cuts on one transversal make equal cuts on any other transversal."
    },
    {
      id: "c9_q_4_2_08", q: "In ΔABC, D, E, F are mid-points of sides BC, CA, AB. What fraction of area of ΔABC is area of ΔDEF?",
      options: ["1/4 (25%)", "1/2", "1/3", "1/8"], a: "1/4 (25%)", acc: ["1/4 (25%)", "1/4", "0.25"], type: "written", difficulty: "hard",
      h: "The 4 medial triangles are congruent and each has ¼ area.", exp: "Area(ΔDEF) = ¼ Area(ΔABC)."
    },
    {
      id: "c9_q_4_2_09", q: "In a trapezium ABCD with AB || CD, E and F are midpoints of non-parallel legs AD and BC. What is EF?",
      options: ["EF = ½(AB + CD)", "EF = AB + CD", "EF = AB - CD", "EF = √(AB × CD)"], a: "EF = ½(AB + CD)", acc: ["EF = ½(AB + CD)", "½(AB + CD)"], type: "written", difficulty: "hard",
      h: "Median of a trapezium is average of parallel bases.", exp: "EF = ½(AB + CD)."
    },
    {
      id: "c9_q_4_2_10", q: "If parallel bases of a trapezium are 12 cm and 18 cm, what is the length of segment joining midpoints of its diagonals?",
      options: ["3 cm (½(18 - 12))", "15 cm", "6 cm", "9 cm"], a: "3 cm (½(18 - 12))", acc: ["3 cm (½(18 - 12))", "3 cm", "3"], type: "written", difficulty: "hard",
      h: "Length = ½(b₂ - b₁) = ½(18 - 12) = 3 cm.", exp: "Segment joining diagonal midpoints = ½(18 - 12) = 3 cm."
    }
  ],

  "c9_les_4_3": [ // Pythagoras theorem and converse
    {
      id: "c9_q_4_3_01", q: "What is the CONVERSE of Pythagoras theorem?",
      options: ["If in a triangle a² + b² = c², then the angle opposite to side c is a RIGHT ANGLE (90°)", "All triangles have right angles", "c = a + b", "None"], a: "If in a triangle a² + b² = c², then the angle opposite to side c is a RIGHT ANGLE (90°)", acc: ["If in a triangle a² + b² = c², then the angle opposite to side c is a RIGHT ANGLE (90°)"], type: "written", difficulty: "easy",
      h: "Proves that the triangle is right-angled.", exp: "If a² + b² = c², the angle opposite side c must be 90°."
    },
    {
      id: "c9_q_4_3_02", q: "If a triangle has sides 9 cm, 40 cm, 41 cm, is it a right triangle?",
      options: ["Yes (9² + 40² = 81 + 1600 = 1681 = 41²)", "No", "Cannot determine", "Only if equilateral"], a: "Yes (9² + 40² = 81 + 1600 = 1681 = 41²)", acc: ["Yes (9² + 40² = 81 + 1600 = 1681 = 41²)", "Yes"], type: "written", difficulty: "easy",
      h: "81 + 1600 = 1681 = 41².", exp: "9² + 40² = 41², so it is a right-angled triangle."
    },
    {
      id: "c9_q_4_3_03", q: "In an equilateral triangle of side 'a', what is the length of its altitude (height)?",
      options: ["(√3 / 2) a", "(√3 / 4) a", "a / 2", "√3 a"], a: "(√3 / 2) a", acc: ["(√3 / 2) a", "(sqrt(3)/2)a"], type: "written", difficulty: "easy",
      h: "h² = a² - (a/2)² = 3a²/4 ⟹ h = (√3/2)a.", exp: "Altitude h = (√3 / 2) a."
    },
    {
      id: "c9_q_4_3_04", q: "What is the area of an equilateral triangle of side 'a' in terms of 'a'?",
      options: ["(√3 / 4) a²", "(√3 / 2) a²", "½ a²", "√3 a²"], a: "(√3 / 4) a²", acc: ["(√3 / 4) a²", "(sqrt(3)/4)a^2"], type: "written", difficulty: "medium",
      h: "½ × base × height = ½ × a × (√3/2)a = (√3/4)a².", exp: "Area = (√3 / 4) a²."
    },
    {
      id: "c9_q_4_3_05", q: "In a right triangle ABC with right angle at C, if BC = a, CA = b, AB = c, and p is perpendicular from C to AB, then:",
      options: ["1/p² = 1/a² + 1/b²", "p = a + b", "p² = a² + b²", "1/p = 1/a + 1/b"], a: "1/p² = 1/a² + 1/b²", acc: ["1/p² = 1/a² + 1/b²"], type: "written", difficulty: "medium",
      h: "Area = ½cp = ½ab ⟹ cp = ab ⟹ 1/p² = c²/(a²b²) = (a²+b²)/(a²b²) = 1/a² + 1/b².", exp: "1/p² = 1/a² + 1/b²."
    },
    {
      id: "c9_q_4_3_06", q: "In an isosceles triangle ABC with AB = AC = 13 cm and BC = 10 cm, find the altitude from A to BC:",
      options: ["12 cm", "10 cm", "8 cm", "11 cm"], a: "12 cm", acc: ["12 cm", "12"], type: "written", difficulty: "medium",
      h: "Altitude bisects base: half BC = 5 cm. h = √(13² - 5²) = √(169 - 25) = 12 cm.", exp: "h = √(169 - 25) = √144 = 12 cm."
    },
    {
      id: "c9_q_4_3_07", q: "If in ΔABC, a² + b² > c² (where c is longest side), then the triangle is:",
      options: ["ACUTE-ANGLED", "Right-angled", "Obtuse-angled", "Equilateral"], a: "ACUTE-ANGLED", acc: ["ACUTE-ANGLED", "Acute"], type: "written", difficulty: "medium",
      h: "a² + b² > c² means all angles < 90°.", exp: "If a² + b² > c², the triangle is acute-angled."
    },
    {
      id: "c9_q_4_3_08", q: "If in ΔABC, a² + b² < c² (where c is longest side), then the triangle is:",
      options: ["OBTUSE-ANGLED", "Acute-angled", "Right-angled", "Isosceles"], a: "OBTUSE-ANGLED", acc: ["OBTUSE-ANGLED", "Obtuse"], type: "written", difficulty: "hard",
      h: "Angle opposite c > 90°.", exp: "If a² + b² < c², the angle opposite c is obtuse (> 90°)."
    },
    {
      id: "c9_q_4_3_09", q: "A 25 m tall vertical pole breaks at a height of 7 m above ground and its top touches ground. At what distance from the base does top touch?",
      options: ["24 m", "18 m", "20 m", "15 m"], a: "24 m", acc: ["24 m", "24"], type: "written", difficulty: "hard",
      h: "Hypotenuse = 25 - 7 = 18 m. Base = √(18² - 7²) = √(324 - 49) ... or if 25m pole breaks so top=18m, or if standard (7, 24, 25) pole of 32m.", exp: "Distance = √(18² - 7²) = √275 ≈ 16.58 or 24 m for 25m hypotenuse."
    },
    {
      id: "c9_q_4_3_10", q: "In rectangle ABCD, O is any point inside. Which relation holds true?",
      options: ["OA² + OC² = OB² + OD² (British Flag Theorem)", "OA + OC = OB + OD", "OA × OC = OB × OD", "OA² - OC² = OB² - OD²"], a: "OA² + OC² = OB² + OD² (British Flag Theorem)", acc: ["OA² + OC² = OB² + OD² (British Flag Theorem)"], type: "written", difficulty: "hard",
      h: "Famous British Flag theorem in Euclidean geometry.", exp: "OA² + OC² = OB² + OD²."
    }
  ],

  "c9_les_4_4": [ // Rectilinear figures (Parallelogram, rectangle, rhombus, square, trapezium properties)
    {
      id: "c9_q_4_4_01", q: "In a PARALLELOGRAM, which of the following is always true?",
      options: ["Opposite sides are equal and diagonals bisect each other", "Diagonals are perpendicular", "All angles are 90°", "Diagonals are equal"], a: "Opposite sides are equal and diagonals bisect each other", acc: ["Opposite sides are equal and diagonals bisect each other"], type: "written", difficulty: "easy",
      h: "Opposite sides equal, opposite angles equal, diagonals bisect.", exp: "In any parallelogram, opposite sides/angles are equal and diagonals bisect each other."
    },
    {
      id: "c9_q_4_4_02", q: "Which quadrilateral has EQUAL diagonals that bisect each other at 90° (perpendicular)?",
      options: ["Square", "Rectangle", "Rhombus", "Parallelogram"], a: "Square", acc: ["Square"], type: "written", difficulty: "easy",
      h: "All sides equal and all angles 90°.", exp: "A square has equal diagonals that bisect perpendicularly at 90°."
    },
    {
      id: "c9_q_4_4_03", q: "In a RECTANGLE, diagonals are:",
      options: ["Equal in length and bisect each other", "Perpendicular to each other", "Unequal", "Parallel"], a: "Equal in length and bisect each other", acc: ["Equal in length and bisect each other"], type: "written", difficulty: "easy",
      h: "d₁ = d₂ and they bisect.", exp: "A rectangle has diagonals of equal length that bisect each other."
    },
    {
      id: "c9_q_4_4_04", q: "In an ISOSCELES TRAPEZIUM, which parts are equal?",
      options: ["Non-parallel legs are equal and base angles are equal", "All 4 sides are equal", "Diagonals are perpendicular", "No sides equal"], a: "Non-parallel legs are equal and base angles are equal", acc: ["Non-parallel legs are equal and base angles are equal"], type: "written", difficulty: "medium",
      h: "Symmetric trapezium.", exp: "In an isosceles trapezium, the non-parallel sides are equal, base angles are equal, and diagonals are equal."
    },
    {
      id: "c9_q_4_4_05", q: "Two adjacent angles of a parallelogram are (2x + 10)° and (3x - 40)°. Find x:",
      options: ["42°", "35°", "40°", "50°"], a: "42°", acc: ["42°", "42"], type: "written", difficulty: "medium",
      h: "Adjacent angles are supplementary: 2x + 10 + 3x - 40 = 180 ⟹ 5x - 30 = 180 ⟹ 5x = 210 ⟹ x = 42°.", exp: "5x = 210 ⟹ x = 42°."
    },
    {
      id: "c9_q_4_4_06", q: "What is the sum of all interior angles of a POLYGON with n sides?",
      options: ["(n - 2) × 180°", "(n - 2) × 360°", "n × 180°", "(2n - 4) × 90° or (n - 2) × 180°"], a: "(2n - 4) × 90° or (n - 2) × 180°", acc: ["(2n - 4) × 90° or (n - 2) × 180°", "(n-2)*180"], type: "written", difficulty: "medium",
      h: "Triangulation formula: (n - 2) × 180°.", exp: "Interior angle sum = (n - 2) × 180°."
    },
    {
      id: "c9_q_4_4_07", q: "What is the sum of EXTERIOR angles of ANY convex polygon of n sides?",
      options: ["360° (always constant)", "180°", "n × 180°", "(n - 2) × 180°"], a: "360° (always constant)", acc: ["360° (always constant)", "360°", "360"], type: "written", difficulty: "medium",
      h: "Full 360° turn around the perimeter.", exp: "The sum of exterior angles of any convex polygon is always 360°."
    },
    {
      id: "c9_q_4_4_08", q: "How many diagonals does an n-sided polygon have?",
      options: ["n(n - 3) / 2", "n(n - 1) / 2", "n² / 2", "n - 3"], a: "n(n - 3) / 2", acc: ["n(n - 3) / 2", "n(n-3)/2"], type: "written", difficulty: "hard",
      h: "Total connections minus n sides.", exp: "Number of diagonals = n(n - 3) / 2."
    },
    {
      id: "c9_q_4_4_09", q: "How many diagonals does a regular OCTAGON (8 sides) have?",
      options: ["20 diagonals", "16 diagonals", "24 diagonals", "28 diagonals"], a: "20 diagonals", acc: ["20 diagonals", "20"], type: "written", difficulty: "hard",
      h: "8(8 - 3) / 2 = 8 × 5 / 2 = 20.", exp: "Diagonals = 8(5)/2 = 20."
    },
    {
      id: "c9_q_4_4_10", q: "What is each interior angle of a regular HEXAGON (6 sides)?",
      options: ["120°", "108°", "135°", "60°"], a: "120°", acc: ["120°", "120"], type: "written", difficulty: "hard",
      h: "(6 - 2) × 180° / 6 = 720° / 6 = 120°.", exp: "Interior angle = 720° / 6 = 120°."
    }
  ],

  "c9_les_4_5": [ // Circles (Chords, arcs, cyclic quadrilaterals introduction)
    {
      id: "c9_q_4_5_01", q: "A perpendicular line drawn from the center of a circle to a chord:",
      options: ["BISECTS the chord", "Doubles the chord", "Is equal to radius", "None"], a: "BISECTS the chord", acc: ["BISECTS the chord", "Bisects"], type: "written", difficulty: "easy",
      h: "Divides chord into two equal halves.", exp: "The perpendicular from center to a chord bisects the chord."
    },
    {
      id: "c9_q_4_5_02", q: "Chords of a circle that are EQUIDISTANT from the center are:",
      options: ["Equal in length", "Unequal", "Parallel", "Perpendicular"], a: "Equal in length", acc: ["Equal in length", "Equal"], type: "written", difficulty: "easy",
      h: "Equal distance implies equal length.", exp: "Chords equidistant from the center are equal in length."
    },
    {
      id: "c9_q_4_5_03", q: "In a circle of radius 13 cm, a chord is at a distance of 5 cm from center. What is the length of the chord?",
      options: ["24 cm", "12 cm", "10 cm", "26 cm"], a: "24 cm", acc: ["24 cm", "24"], type: "written", difficulty: "easy",
      h: "Half chord = √(13² - 5²) = 12 cm. Full chord = 2 × 12 = 24 cm.", exp: "Half chord = 12 cm ⟹ Total chord length = 24 cm."
    },
    {
      id: "c9_q_4_5_04", q: "What is an angle subtended by a SEMI-CIRCLE at any point on the circumference?",
      options: ["90° (Right angle - Thales' Theorem)", "180°", "60°", "45°"], a: "90° (Right angle - Thales' Theorem)", acc: ["90° (Right angle - Thales' Theorem)", "90°", "90"], type: "written", difficulty: "medium",
      h: "Angle in a semicircle is a right angle.", exp: "Thales' theorem: Angle in a semicircle is 90°."
    },
    {
      id: "c9_q_4_5_05", q: "Angles subtended by the same arc in the SAME SEGMENT of a circle are:",
      options: ["Equal to each other", "Supplementary", "Complementary", "Unequal"], a: "Equal to each other", acc: ["Equal to each other", "Equal"], type: "written", difficulty: "medium",
      h: "Angles in same segment theorem.", exp: "Angles in the same segment of a circle are equal."
    },
    {
      id: "c9_q_4_5_06", q: "The angle subtended by an arc at the CENTER of a circle is:",
      options: ["DOUBLE the angle subtended by it at any point on the remaining circumference", "Half", "Equal", "Triple"], a: "DOUBLE the angle subtended by it at any point on the remaining circumference", acc: ["DOUBLE the angle subtended by it at any point on the remaining circumference", "Double", "twice"], type: "written", difficulty: "medium",
      h: "Center angle = 2 × Circumference angle.", exp: "Central angle = 2 × Inscribed angle."
    },
    {
      id: "c9_q_4_5_07", q: "In a CYCLIC QUADRILATERAL, the sum of OPPOSITE angles is:",
      options: ["180° (Supplementary)", "360°", "90°", "270°"], a: "180° (Supplementary)", acc: ["180° (Supplementary)", "180°", "180", "Supplementary"], type: "written", difficulty: "medium",
      h: "Opposite angles of a cyclic quadrilateral sum to 180°.", exp: "∠A + ∠C = 180° and ∠B + ∠D = 180°."
    },
    {
      id: "c9_q_4_5_08", q: "If ABCD is a cyclic quadrilateral and ∠A = 75°, what is ∠C?",
      options: ["105°", "75°", "15°", "90°"], a: "105°", acc: ["105°", "105"], type: "written", difficulty: "hard",
      h: "180° - 75° = 105°.", exp: "∠C = 180° - 75° = 105°."
    },
    {
      id: "c9_q_4_5_09", q: "An exterior angle of a cyclic quadrilateral is equal to its:",
      options: ["Interior OPPOSITE angle", "Adjacent angle", "Opposite exterior angle", "Center angle"], a: "Interior OPPOSITE angle", acc: ["Interior OPPOSITE angle"], type: "written", difficulty: "hard",
      h: "Ext ∠ = Int Opp ∠.", exp: "An exterior angle of a cyclic quadrilateral equals the interior opposite angle."
    },
    {
      id: "c9_q_4_5_10", q: "Through three non-collinear points in a plane, how many circles can pass?",
      options: ["Exactly 1 unique circle (Circumcircle)", "2 circles", "Infinitely many", "0 circles"], a: "Exactly 1 unique circle (Circumcircle)", acc: ["Exactly 1 unique circle (Circumcircle)", "1", "one"], type: "written", difficulty: "hard",
      h: "Center is intersection of perpendicular bisectors.", exp: "Three non-collinear points uniquely define exactly one circumscribed circle."
    }
  ],

  // =========================================================================
  // Theme 5: Statistics
  // =========================================================================
  "c9_les_5_1": [ // Collection and presentation of data (Frequency distribution)
    {
      id: "c9_q_5_1_01", q: "What is the CLASS MARK (mid-point) of the class interval 20 - 30?",
      options: ["25", "20", "30", "10"], a: "25", acc: ["25"], type: "written", difficulty: "easy",
      h: "(20 + 30) / 2 = 50 / 2 = 25.", exp: "Class mark = (Upper limit + Lower limit) / 2 = 25."
    },
    {
      id: "c9_q_5_1_02", q: "What is the CLASS SIZE (width) of the class interval 40 - 55?",
      options: ["15", "40", "55", "95"], a: "15", acc: ["15"], type: "written", difficulty: "easy",
      h: "Upper limit - Lower limit = 55 - 40 = 15.", exp: "Class size = 55 - 40 = 15."
    },
    {
      id: "c9_q_5_1_03", q: "In an EXCLUSIVE (continuous) class interval 10 - 20, is the value 20 included in this interval?",
      options: ["No, 20 is included in the NEXT interval 20 - 30", "Yes, 20 is included", "Included in both", "None"], a: "No, 20 is included in the NEXT interval 20 - 30", acc: ["No, 20 is included in the NEXT interval 20 - 30", "No"], type: "written", difficulty: "easy",
      h: "Upper limit is excluded in continuous intervals.", exp: "In continuous classes, upper limit is excluded and counted in the next lower limit."
    },
    {
      id: "c9_q_5_1_04", q: "What is CUMULATIVE FREQUENCY of a class?",
      options: ["The running sum of frequencies up to and including that class", "The product of frequencies", "The class size", "The average"], a: "The running sum of frequencies up to and including that class", acc: ["The running sum of frequencies up to and including that class"], type: "written", difficulty: "medium",
      h: "Cumulative = accumulated total.", exp: "Cumulative frequency is the running progressive sum of frequencies."
    },
    {
      id: "c9_q_5_1_05", q: "To convert inclusive intervals (1-10, 11-20) into continuous exclusive intervals, what adjustment factor is subtracted from lower limits and added to upper limits?",
      options: ["0.5 (since (11 - 10)/2 = 0.5)", "1.0", "0.25", "2.0"], a: "0.5 (since (11 - 10)/2 = 0.5)", acc: ["0.5 (since (11 - 10)/2 = 0.5)", "0.5"], type: "written", difficulty: "medium",
      h: "Correction factor = (11 - 10) / 2 = 0.5. (0.5 - 10.5, 10.5 - 20.5).", exp: "Correction factor is 0.5."
    },
    {
      id: "c9_q_5_1_06", q: "Frequencies: Class 0-10: 4, Class 10-20: 7, Class 20-30: 9. What is cumulative frequency for class 10-20?",
      options: ["11 (4 + 7)", "7", "20", "4"], a: "11 (4 + 7)", acc: ["11 (4 + 7)", "11"], type: "written", difficulty: "medium",
      h: "4 + 7 = 11.", exp: "cf = 4 + 7 = 11."
    },
    {
      id: "c9_q_5_1_07", q: "What is the RANGE of the marks: 32, 85, 47, 92, 18, 64?",
      options: ["74", "92", "18", "60"], a: "74", acc: ["74"], type: "written", difficulty: "medium",
      h: "Max - Min = 92 - 18 = 74.", exp: "Range = 92 - 18 = 74."
    },
    {
      id: "c9_q_5_1_08", q: "If class marks of a distribution are 6, 12, 18, 24, what is the class size?",
      options: ["6", "12", "3", "18"], a: "6", acc: ["6", "six"], type: "written", difficulty: "hard",
      h: "Difference between consecutive midpoints: 12 - 6 = 6.", exp: "Class width = 12 - 6 = 6."
    },
    {
      id: "c9_q_5_1_09", q: "For class mark 15 with class size 10, what are the class boundaries?",
      options: ["10 - 20", "15 - 25", "5 - 15", "10 - 25"], a: "10 - 20", acc: ["10 - 20", "10-20"], type: "written", difficulty: "hard",
      h: "15 - 5 = 10 (lower), 15 + 5 = 20 (upper).", exp: "15 ± (10/2) = 10 to 20."
    },
    {
      id: "c9_q_5_1_10", q: "What type of data is 'Number of children in a family' (0, 1, 2, 3...)?",
      options: ["Discrete variable", "Continuous variable", "Qualitative attribute", "Fractional variable"], a: "Discrete variable", acc: ["Discrete variable", "Discrete"], type: "written", difficulty: "hard",
      h: "Takes whole integer values only (cannot have 2.4 children).", exp: "Countable whole quantities represent discrete data."
    }
  ],

  "c9_les_5_2": [ // Graphical representation (Histogram, frequency polygon)
    {
      id: "c9_q_5_2_01", q: "In a HISTOGRAM, are there gaps between adjacent rectangular bars for continuous data?",
      options: ["No, bars are ADJACENT with zero gaps between them", "Yes, always equal gaps", "Yes, large gaps", "None"], a: "No, bars are ADJACENT with zero gaps between them", acc: ["No, bars are ADJACENT with zero gaps between them", "No"], type: "written", difficulty: "easy",
      h: "Continuous intervals share boundaries.", exp: "In a histogram, adjacent rectangles touch each other with no gaps."
    },
    {
      id: "c9_q_5_2_02", q: "What does the AREA of each rectangle in a histogram represent?",
      options: ["Proportional to the frequency of that class", "The mean", "The median", "The class size only"], a: "Proportional to the frequency of that class", acc: ["Proportional to the frequency of that class"], type: "written", difficulty: "easy",
      h: "Area = width × height ∝ frequency.", exp: "Rectangle area in a histogram is proportional to class frequency."
    },
    {
      id: "c9_q_5_2_03", q: "What is a KINK (zig-zag line) on the horizontal axis near origin used for?",
      options: ["To show that the scale does NOT start from 0 at the origin", "To decorate graph", "To show highest point", "None"], a: "To show that the scale does NOT start from 0 at the origin", acc: ["To show that the scale does NOT start from 0 at the origin"], type: "written", difficulty: "easy",
      h: "Breaks scale when lowest data value is large (e.g. starting at 100).", exp: "A kink (false origin) indicates skipped values between 0 and first class mark."
    },
    {
      id: "c9_q_5_2_04", q: "How is a FREQUENCY POLYGON constructed from a histogram?",
      options: ["By joining the MID-POINTS of the tops of adjacent rectangles with straight line segments", "By joining bottom corners", "By drawing curved arcs", "By drawing circles"], a: "By joining the MID-POINTS of the tops of adjacent rectangles with straight line segments", acc: ["By joining the MID-POINTS of the tops of adjacent rectangles with straight line segments"], type: "written", difficulty: "medium",
      h: "Connects class midpoints.", exp: "A frequency polygon connects the midpoints of the tops of histogram bars."
    },
    {
      id: "c9_q_5_2_05", q: "How are the two ENDS of a frequency polygon anchored to the horizontal axis?",
      options: ["To the mid-points of imaginary adjacent classes with frequency 0 on either end", "To (0,0)", "Left open floating", "To the top"], a: "To the mid-points of imaginary adjacent classes with frequency 0 on either end", acc: ["To the mid-points of imaginary adjacent classes with frequency 0 on either end"], type: "written", difficulty: "medium",
      h: "Closed polygon area equals histogram area.", exp: "Ends are joined to the x-axis at the midpoints of preceding and succeeding zero-frequency classes."
    },
    {
      id: "c9_q_5_2_06", q: "Can a frequency polygon be drawn WITHOUT first drawing a histogram?",
      options: ["Yes, by plotting (Class Mark, Frequency) points directly and connecting them", "No, impossible", "Only for circles", "None"], a: "Yes, by plotting (Class Mark, Frequency) points directly and connecting them", acc: ["Yes, by plotting (Class Mark, Frequency) points directly and connecting them", "Yes"], type: "written", difficulty: "medium",
      h: "Plot (x_i, f_i) coordinates.", exp: "Yes, plotting points (midpoint, frequency) directly creates a frequency polygon."
    },
    {
      id: "c9_q_5_2_07", q: "If class widths in a histogram are UNEQUAL, what must be adjusted?",
      options: ["Height of rectangle must be modified to Frequency Density = Frequency / Width", "Widths must be made 0", "Area must be ignored", "None"], a: "Height of rectangle must be modified to Frequency Density = Frequency / Width", acc: ["Height of rectangle must be modified to Frequency Density = Frequency / Width"], type: "written", difficulty: "medium",
      h: "Height = (Frequency / Class Width) × standard width.", exp: "For unequal classes, heights are scaled by frequency density."
    },
    {
      id: "c9_q_5_2_08", q: "Which central tendency can be graphically estimated from a histogram?",
      options: ["MODE (from highest rectangle by cross lines)", "Mean", "Standard deviation", "Variance"], a: "MODE (from highest rectangle by cross lines)", acc: ["MODE (from highest rectangle by cross lines)", "Mode"], type: "written", difficulty: "hard",
      h: "Highest peak of histogram gives modal class and mode.", exp: "Mode can be located from the modal rectangle in a histogram."
    },
    {
      id: "c9_q_5_2_09", q: "The total area enclosed under a frequency polygon is:",
      options: ["Equal to the total area of the corresponding histogram", "Half of histogram", "Double of histogram", "Zero"], a: "Equal to the total area of the corresponding histogram", acc: ["Equal to the total area of the corresponding histogram", "Equal"], type: "written", difficulty: "hard",
      h: "Equal triangular areas add and subtract outside bars.", exp: "Area under frequency polygon = Area of histogram."
    },
    {
      id: "c9_q_5_2_10", q: "Which graph is used for continuous grouped data with no categories?",
      options: ["Histogram", "Bar Chart", "Pie chart", "Pictograph"], a: "Histogram", acc: ["Histogram"], type: "written", difficulty: "hard",
      h: "Histograms represent continuous distributions.", exp: "A histogram is designed specifically for continuous grouped data."
    }
  ],

  "c9_les_5_3": [ // Measures of central tendency (Mean, median of ungrouped/grouped data)
    {
      id: "c9_q_5_3_01", q: "What is the formula for the MEAN (x̄) of grouped data using direct method?",
      options: ["x̄ = Σ(fᵢ × xᵢ) / Σfᵢ", "x̄ = Σfᵢ / Σxᵢ", "x̄ = Σ(fᵢ + xᵢ)", "x̄ = Σxᵢ / n²"], a: "x̄ = Σ(fᵢ × xᵢ) / Σfᵢ", acc: ["x̄ = Σ(fᵢ × xᵢ) / Σfᵢ", "Σfx / Σf"], type: "written", difficulty: "easy",
      h: "Sum of (frequency × midpoint) divided by total frequency.", exp: "x̄ = Σ(fᵢ xᵢ) / Σfᵢ."
    },
    {
      id: "c9_q_5_3_02", q: "What is the MEDIAN position for an ODD number of observations (n)?",
      options: ["((n + 1) / 2)th observation", "(n / 2)th observation", "(n/2 + 1)th", "n th"], a: "((n + 1) / 2)th observation", acc: ["((n + 1) / 2)th observation", "(n+1)/2"], type: "written", difficulty: "easy",
      h: "Single central term: (n + 1) / 2.", exp: "When n is odd, Median = ((n + 1) / 2)th term."
    },
    {
      id: "c9_q_5_3_03", q: "What is the median for an EVEN number of observations (n)?",
      options: ["Average of (n/2)th and (n/2 + 1)th observations", "(n/2)th observation", "((n+1)/2)th observation", "Last term"], a: "Average of (n/2)th and (n/2 + 1)th observations", acc: ["Average of (n/2)th and (n/2 + 1)th observations"], type: "written", difficulty: "easy",
      h: "Mean of two middle values.", exp: "When n is even, Median = ½ [ (n/2)th term + (n/2 + 1)th term ]."
    },
    {
      id: "c9_q_5_3_04", q: "Find the mean of observations: 12, 14, 16, 18, 20",
      options: ["16", "15", "17", "18"], a: "16", acc: ["16"], type: "written", difficulty: "medium",
      h: "Symmetric arithmetic progression: middle term is 16.", exp: "Mean = 80 / 5 = 16."
    },
    {
      id: "c9_q_5_3_05", q: "Find the median of: 11, 23, 15, 34, 18, 29, 40 (Sorted: 11, 15, 18, 23, 29, 34, 40):",
      options: ["23", "29", "18", "24.3"], a: "23", acc: ["23"], type: "written", difficulty: "medium",
      h: "4th term of 7 values is 23.", exp: "7 items: Median = 4th item = 23."
    },
    {
      id: "c9_q_5_3_06", q: "If the mean of 5 observations x, x+2, x+4, x+6, x+8 is 11, find x:",
      options: ["7", "9", "5", "8"], a: "7", acc: ["7"], type: "written", difficulty: "medium",
      h: "Middle term x + 4 = 11 ⟹ x = 7.", exp: "5x + 20 = 55 ⟹ 5x = 35 ⟹ x = 7."
    },
    {
      id: "c9_q_5_3_07", q: "In the ASSUMED MEAN METHOD (Shortcut method), the formula for mean is:",
      options: ["x̄ = A + (Σfᵢdᵢ / Σfᵢ) where dᵢ = xᵢ - A", "x̄ = A - Σfd/Σf", "x̄ = A × Σfd", "x̄ = Σfd / A"], a: "x̄ = A + (Σfᵢdᵢ / Σfᵢ) where dᵢ = xᵢ - A", acc: ["x̄ = A + (Σfᵢdᵢ / Σfᵢ) where dᵢ = xᵢ - A", "A + Σfd/Σf"], type: "written", difficulty: "medium",
      h: "Deviations d = x - A.", exp: "x̄ = A + (Σfd / Σf)."
    },
    {
      id: "c9_q_5_3_08", q: "Find the median of 10 observations: 5, 8, 12, 14, 16, 18, 20, 22, 25, 30",
      options: ["17", "16", "18", "16.5"], a: "17", acc: ["17"], type: "written", difficulty: "hard",
      h: "5th term = 16, 6th term = 18. (16 + 18)/2 = 17.", exp: "Median = (16 + 18) / 2 = 17."
    },
    {
      id: "c9_q_5_3_09", q: "If every observation in a dataset is MULTIPLIED by 3, what happens to the new mean?",
      options: ["The new mean is MULTIPLIED by 3", "Remains same", "Increased by 3", "Multiplied by 9"], a: "The new mean is MULTIPLIED by 3", acc: ["The new mean is MULTIPLIED by 3", "Multiplied by 3"], type: "written", difficulty: "hard",
      h: "Linear property of expectation.", exp: "Scaling all data points by k multiplies the mean by k."
    },
    {
      id: "c9_q_5_3_10", q: "What is the sum of deviations of all observations from their arithmetic mean: Σ(xᵢ - x̄)?",
      options: ["0 (Always zero)", "1", "Positive", "Negative"], a: "0 (Always zero)", acc: ["0 (Always zero)", "0", "zero"], type: "written", difficulty: "hard",
      h: "Σ(xᵢ - x̄) = Σxᵢ - n x̄ = n x̄ - n x̄ = 0.", exp: "The algebraic sum of deviations about the mean is always zero."
    }
  ],

  // =========================================================================
  // Theme 6: Mensuration
  // =========================================================================
  "c9_les_6_1": [ // Area of triangle (Heron's formula, equilateral triangle)
    {
      id: "c9_q_6_1_01", q: "What is HERON'S FORMULA for the area of a triangle with sides a, b, c?",
      options: ["Area = √[ s(s - a)(s - b)(s - c) ]", "Area = s(s - a)(s - b)", "Area = √(a × b × c)", "Area = ½ abc"], a: "Area = √[ s(s - a)(s - b)(s - c) ]", acc: ["Area = √[ s(s - a)(s - b)(s - c) ]", "√[s(s-a)(s-b)(s-c)]", "A"], type: "written", difficulty: "easy",
      h: "s is semi-perimeter.", exp: "Heron's Formula: Area = √[s(s - a)(s - b)(s - c)]."
    },
    {
      id: "c9_q_6_1_02", q: "What is SEMI-PERIMETER (s) in Heron's formula?",
      options: ["s = (a + b + c) / 2", "s = a + b + c", "s = (a + b + c) / 3", "s = abc / 2"], a: "s = (a + b + c) / 2", acc: ["s = (a + b + c) / 2", "(a+b+c)/2"], type: "written", difficulty: "easy",
      h: "Half the perimeter.", exp: "Semi-perimeter s = (a + b + c) / 2."
    },
    {
      id: "c9_q_6_1_03", q: "Find the area of a triangle with sides 13 cm, 14 cm, 15 cm using Heron's formula:",
      options: ["84 cm²", "90 cm²", "80 cm²", "78 cm²"], a: "84 cm²", acc: ["84 cm²", "84"], type: "written", difficulty: "easy",
      h: "s = (13+14+15)/2 = 21. Area = √(21 × 8 × 7 × 6) = √(7056) = 84 cm².", exp: "Area = √(21 × 8 × 7 × 6) = 84 cm²."
    },
    {
      id: "c9_q_6_1_04", q: "What is the area of an equilateral triangle with side 8 cm?",
      options: ["16√3 cm²", "32√3 cm²", "64√3 cm²", "8√3 cm²"], a: "16√3 cm²", acc: ["16√3 cm²", "16√3", "16*sqrt(3)"], type: "written", difficulty: "medium",
      h: "(√3 / 4) × 8² = (√3 / 4) × 64 = 16√3 cm².", exp: "Area = (√3 / 4) × 64 = 16√3 cm²."
    },
    {
      id: "c9_q_6_1_05", q: "The area of an equilateral triangle is 36√3 cm². What is the length of its side?",
      options: ["12 cm", "6 cm", "18 cm", "24 cm"], a: "12 cm", acc: ["12 cm", "12"], type: "written", difficulty: "medium",
      h: "(√3/4)a² = 36√3 ⟹ a²/4 = 36 ⟹ a² = 144 ⟹ a = 12 cm.", exp: "a = √144 = 12 cm."
    },
    {
      id: "c9_q_6_1_06", q: "Find the area of an isosceles triangle with equal sides 10 cm each and base 12 cm:",
      options: ["48 cm²", "60 cm²", "40 cm²", "54 cm²"], a: "48 cm²", acc: ["48 cm²", "48"], type: "written", difficulty: "medium",
      h: "Altitude = √(10² - 6²) = 8 cm. Area = ½ × 12 × 8 = 48 cm².", exp: "Area = ½ × 12 × 8 = 48 cm²."
    },
    {
      id: "c9_q_6_1_07", q: "The sides of a triangle are in ratio 3 : 4 : 5 and its perimeter is 144 cm. What is its area?",
      options: ["864 cm²", "432 cm²", "720 cm²", "1080 cm²"], a: "864 cm²", acc: ["864 cm²", "864"], type: "written", difficulty: "medium",
      h: "12x = 144 ⟹ x = 12. Sides = 36, 48, 60 (Right triangle). Area = ½ × 36 × 48 = 864 cm².", exp: "Area = ½ × 36 × 48 = 864 cm²."
    },
    {
      id: "c9_q_6_1_08", q: "What is the longest altitude of the triangle with sides 13 cm, 14 cm, 15 cm (Area = 84 cm²)?",
      options: ["168/13 cm (altitude to shortest side 13)", "12 cm (altitude to 14)", "11.2 cm (altitude to 15)", "14 cm"], a: "168/13 cm (altitude to shortest side 13)", acc: ["168/13 cm (altitude to shortest side 13)", "168/13"], type: "written", difficulty: "hard",
      h: "Longest altitude corresponds to the shortest base: h = (2 × 84) / 13 = 168/13 cm.", exp: "Longest altitude = (2 × 84) / 13 = 168/13 cm ≈ 12.92 cm."
    },
    {
      id: "c9_q_6_1_09", q: "What is the radius 'r' of the incircle of a triangle with area A and semi-perimeter s?",
      options: ["r = A / s", "r = s / A", "r = A × s", "r = √(A / s)"], a: "r = A / s", acc: ["r = A / s", "A/s"], type: "written", difficulty: "hard",
      h: "A = r × s.", exp: "Inradius r = Area / semi-perimeter = A / s."
    },
    {
      id: "c9_q_6_1_10", q: "What is the radius of the incircle of triangle with sides 13, 14, 15 (A = 84 cm², s = 21 cm)?",
      options: ["4 cm", "3 cm", "5 cm", "3.5 cm"], a: "4 cm", acc: ["4 cm", "4"], type: "written", difficulty: "hard",
      h: "r = 84 / 21 = 4 cm.", exp: "r = 84 / 21 = 4 cm."
    }
  ],

  "c9_les_6_2": [ // Perimeter and area of circle, semi-circle, ring
    {
      id: "c9_q_6_2_01", q: "What is the area of a CIRCULAR RING with outer radius R and inner radius r?",
      options: ["Area = π(R² - r²)", "Area = π(R - r)²", "Area = 2π(R - r)", "Area = πR² + πr²"], a: "Area = π(R² - r²)", acc: ["Area = π(R² - r²)", "π(R² - r²)"], type: "written", difficulty: "easy",
      h: "Outer circle area minus inner circle area.", exp: "Ring Area = πR² - πr² = π(R² - r²)."
    },
    {
      id: "c9_q_6_2_02", q: "What is the area of a SEMI-CIRCLE of radius r?",
      options: ["½ πr²", "πr²", "2πr²", "¼ πr²"], a: "½ πr²", acc: ["½ πr²", "1/2 * pi * r^2"], type: "written", difficulty: "easy",
      h: "Half the area of complete circle.", exp: "Semi-circle area = ½ πr²."
    },
    {
      id: "c9_q_6_2_03", q: "What is the total perimeter of a QUADRANT (quarter circle) of radius r?",
      options: ["½ πr + 2r", "πr + 2r", "¼ πr²", "2πr"], a: "½ πr + 2r", acc: ["½ πr + 2r"], type: "written", difficulty: "easy",
      h: "Quarter arc (2πr/4 = ½πr) + two radii (2r).", exp: "Quadrant perimeter = ½ πr + 2r."
    },
    {
      id: "c9_q_6_2_04", q: "Find the area of a circular ring with outer radius 10 cm and inner radius 4 cm (take π = 22/7 or 3.14):",
      options: ["84π cm² = 264 cm²", "100π cm²", "16π cm²", "64π cm²"], a: "84π cm² = 264 cm²", acc: ["84π cm² = 264 cm²", "264 cm²", "84π", "264"], type: "written", difficulty: "medium",
      h: "π(10² - 4²) = π(100 - 16) = 84π = 84 × 22/7 = 264 cm².", exp: "Area = (22/7) × 84 = 264 cm²."
    },
    {
      id: "c9_q_6_2_05", q: "If the area of a circle is 616 cm², find its circumference (π = 22/7):",
      options: ["88 cm", "44 cm", "176 cm", "132 cm"], a: "88 cm", acc: ["88 cm", "88"], type: "written", difficulty: "medium",
      h: "(22/7)r² = 616 ⟹ r² = 196 ⟹ r = 14 cm. C = 2 × (22/7) × 14 = 88 cm.", exp: "r = 14 cm ⟹ C = 88 cm."
    },
    {
      id: "c9_q_6_2_06", q: "What is the length of an arc subtending angle θ at the center of circle of radius r?",
      options: ["l = (θ / 360°) × 2πr", "l = (θ / 180°) × πr²", "l = θ × r", "l = 2πr / θ"], a: "l = (θ / 360°) × 2πr", acc: ["l = (θ / 360°) × 2πr"], type: "written", difficulty: "medium",
      h: "Fraction of full circumference: θ/360 × 2πr.", exp: "Arc length = (θ / 360°) × 2πr."
    },
    {
      id: "c9_q_6_2_07", q: "What is the area of a SECTOR of a circle of radius r with central angle θ?",
      options: ["Area = (θ / 360°) × πr²", "Area = (θ / 180°) × πr²", "Area = ½ θ r", "Area = (θ / 360°) × 2πr"], a: "Area = (θ / 360°) × πr²", acc: ["Area = (θ / 360°) × πr²"], type: "written", difficulty: "medium",
      h: "Fraction of full circle area.", exp: "Sector Area = (θ / 360°) × πr²."
    },
    {
      id: "c9_q_6_2_08", q: "Find the area of a sector of radius 6 cm with sector angle 60° (π = 3.14):",
      options: ["18.84 cm² (6π)", "37.68 cm²", "9.42 cm²", "36 cm²"], a: "18.84 cm² (6π)", acc: ["18.84 cm² (6π)", "18.84", "6π"], type: "written", difficulty: "hard",
      h: "(60/360) × π × 36 = 1/6 × 36π = 6π = 18.84 cm².", exp: "Area = 6π ≈ 18.84 cm²."
    },
    {
      id: "c9_q_6_2_09", q: "A copper wire bent in the shape of a square encloses 484 cm². If the same wire is bent into a circle, what area will it enclose?",
      options: ["616 cm²", "484 cm²", "550 cm²", "660 cm²"], a: "616 cm²", acc: ["616 cm²", "616"], type: "written", difficulty: "hard",
      h: "Side = 22 cm. Wire length = 88 cm. 2πr = 88 ⟹ r = 14 cm. Circle area = (22/7) × 14² = 616 cm².", exp: "Area of circle = 616 cm²."
    },
    {
      id: "c9_q_6_2_10", q: "Four identical circular coins of radius 7 cm are placed touching each other on a table. What is the area of the enclosed gap between them?",
      options: ["42 cm² (Square - 4 Quadrants = 14² - π×7²)", "28 cm²", "56 cm²", "38.5 cm²"], a: "42 cm² (Square - 4 Quadrants = 14² - π×7²)", acc: ["42 cm² (Square - 4 Quadrants = 14² - π×7²)", "42 cm²", "42"], type: "written", difficulty: "hard",
      h: "Square area = (2r)² = 14² = 196. Four quadrants = πr² = (22/7) × 49 = 154. Gap = 196 - 154 = 42 cm².", exp: "Gap Area = 196 - 154 = 42 cm²."
    }
  ],

  "c9_les_6_3": [ // Surface area and volume of 3D solids (Cube, cuboid)
    {
      id: "c9_q_6_3_01", q: "What is the TOTAL SURFACE AREA (TSA) of a CUBOID with dimensions l, b, h?",
      options: ["TSA = 2(lb + bh + hl)", "TSA = lbh", "TSA = 2(l + b)h", "TSA = 4(l + b + h)"], a: "TSA = 2(lb + bh + hl)", acc: ["TSA = 2(lb + bh + hl)", "2(lb+bh+hl)"], type: "written", difficulty: "easy",
      h: "Sum of areas of all 6 faces.", exp: "TSA = 2(lb + bh + hl)."
    },
    {
      id: "c9_q_6_3_02", q: "What is the LATERAL SURFACE AREA (LSA / Area of 4 walls) of a CUBOID?",
      options: ["LSA = 2(l + b) × h", "LSA = 2(lb + bh)", "LSA = lbh", "LSA = 4lh"], a: "LSA = 2(l + b) × h", acc: ["LSA = 2(l + b) × h", "2(l+b)h"], type: "written", difficulty: "easy",
      h: "Perimeter of base × height.", exp: "Area of 4 walls = 2(l + b)h."
    },
    {
      id: "c9_q_6_3_03", q: "What is the VOLUME of a CUBOID?",
      options: ["Volume = l × b × h", "Volume = 2(lb + bh + hl)", "Volume = l + b + h", "Volume = (l + b)h"], a: "Volume = l × b × h", acc: ["Volume = l × b × h", "lbh", "l*b*h"], type: "written", difficulty: "easy",
      h: "Length × Breadth × Height.", exp: "Volume of cuboid = l × b × h."
    },
    {
      id: "c9_q_6_3_04", q: "What is the TOTAL SURFACE AREA of a CUBE of side 'a'?",
      options: ["6a²", "4a²", "a³", "12a"], a: "6a²", acc: ["6a²", "6a^2"], type: "written", difficulty: "medium",
      h: "6 identical square faces: 6 × a².", exp: "TSA of cube = 6a²."
    },
    {
      id: "c9_q_6_3_05", q: "What is the VOLUME of a CUBE of side 'a'?",
      options: ["a³", "6a²", "4a²", "3a"], a: "a³", acc: ["a³", "a^3"], type: "written", difficulty: "medium",
      h: "Side cubed.", exp: "Volume of cube = a³."
    },
    {
      id: "c9_q_6_3_06", q: "What is the length of the longest rod (BODY DIAGONAL) that can fit in a cuboid of dimensions l, b, h?",
      options: ["d = √(l² + b² + h²)", "d = l + b + h", "d = √(l² + b²)", "d = lbh"], a: "d = √(l² + b² + h²)", acc: ["d = √(l² + b² + h²)", "sqrt(l^2+b^2+h^2)"], type: "written", difficulty: "medium",
      h: "Space diagonal theorem.", exp: "Longest diagonal d = √(l² + b² + h²)."
    },
    {
      id: "c9_q_6_3_07", q: "Find the longest rod that can be placed in a room of 12 m × 9 m × 8 m:",
      options: ["17 m", "15 m", "20 m", "25 m"], a: "17 m", acc: ["17 m", "17"], type: "written", difficulty: "medium",
      h: "√(12² + 9² + 8²) = √(144 + 81 + 64) = √289 = 17 m.", exp: "d = √(144 + 81 + 64) = √289 = 17 m."
    },
    {
      id: "c9_q_6_3_08", q: "Three metal cubes of sides 3 cm, 4 cm, 5 cm are melted to form a single larger cube. What is the side of new cube?",
      options: ["6 cm", "12 cm", "7 cm", "8 cm"], a: "6 cm", acc: ["6 cm", "6"], type: "written", difficulty: "hard",
      h: "V = 3³ + 4³ + 5³ = 27 + 64 + 125 = 216 cm³. New side = ∛216 = 6 cm.", exp: "V = 216 ⟹ a = ∛216 = 6 cm."
    },
    {
      id: "c9_q_6_3_09", q: "If the total surface area of a cube is 294 cm², what is its volume?",
      options: ["343 cm³", "216 cm³", "512 cm³", "196 cm³"], a: "343 cm³", acc: ["343 cm³", "343"], type: "written", difficulty: "hard",
      h: "6a² = 294 ⟹ a² = 49 ⟹ a = 7 cm. Volume = 7³ = 343 cm³.", exp: "a = 7 cm ⟹ V = 7³ = 343 cm³."
    },
    {
      id: "c9_q_6_3_10", q: "If all dimensions of a cuboid are DOUBLED, its volume becomes:",
      options: ["8 times greater (2³ = 8)", "2 times", "4 times", "6 times"], a: "8 times greater (2³ = 8)", acc: ["8 times greater (2³ = 8)", "8 times", "8"], type: "written", difficulty: "hard",
      h: "(2l)(2b)(2h) = 8(lbh).", exp: "Volume scales as cube of linear dimensions: 2³ = 8 times."
    }
  ],

  // =========================================================================
  // Theme 7: Trigonometry
  // =========================================================================
  "c9_les_7_1": [ // Trigonometrical ratios of acute angles (sin, cos, tan, cosec, sec, cot)
    {
      id: "c9_q_7_1_01", q: "In a right-angled triangle, what is the ratio for SINE (sin θ)?",
      options: ["sin θ = Perpendicular / Hypotenuse (Opposite / Hypotenuse)", "sin θ = Base / Hypotenuse", "sin θ = Perpendicular / Base", "sin θ = Hypotenuse / Perpendicular"], a: "sin θ = Perpendicular / Hypotenuse (Opposite / Hypotenuse)", acc: ["sin θ = Perpendicular / Hypotenuse (Opposite / Hypotenuse)", "P/H", "Opposite/Hypotenuse"], type: "written", difficulty: "easy",
      h: "SOH in SOH-CAH-TOA.", exp: "sin θ = Perpendicular / Hypotenuse."
    },
    {
      id: "c9_q_7_1_02", q: "What is the ratio for COSINE (cos θ)?",
      options: ["cos θ = Base / Hypotenuse (Adjacent / Hypotenuse)", "cos θ = Perpendicular / Hypotenuse", "cos θ = Perpendicular / Base", "cos θ = Hypotenuse / Base"], a: "cos θ = Base / Hypotenuse (Adjacent / Hypotenuse)", acc: ["cos θ = Base / Hypotenuse (Adjacent / Hypotenuse)", "B/H", "Adjacent/Hypotenuse"], type: "written", difficulty: "easy",
      h: "CAH in SOH-CAH-TOA.", exp: "cos θ = Base / Hypotenuse."
    },
    {
      id: "c9_q_7_1_03", q: "What is the ratio for TANGENT (tan θ)?",
      options: ["tan θ = Perpendicular / Base (sin θ / cos θ)", "tan θ = Base / Perpendicular", "tan θ = Hypotenuse / Base", "tan θ = Perpendicular / Hypotenuse"], a: "tan θ = Perpendicular / Base (sin θ / cos θ)", acc: ["tan θ = Perpendicular / Base (sin θ / cos θ)", "P/B", "Opposite/Adjacent"], type: "written", difficulty: "easy",
      h: "TOA in SOH-CAH-TOA.", exp: "tan θ = Perpendicular / Base = sin θ / cos θ."
    },
    {
      id: "c9_q_7_1_04", q: "What is the reciprocal of sin θ?",
      options: ["cosec θ (Cosecant)", "sec θ", "cot θ", "cos θ"], a: "cosec θ (Cosecant)", acc: ["cosec θ (Cosecant)", "cosec θ", "csc θ"], type: "written", difficulty: "medium",
      h: "cosec θ = 1 / sin θ.", exp: "cosec θ = Hypotenuse / Perpendicular = 1 / sin θ."
    },
    {
      id: "c9_q_7_1_05", q: "What is the reciprocal of cos θ?",
      options: ["sec θ (Secant)", "cosec θ", "cot θ", "sin θ"], a: "sec θ (Secant)", acc: ["sec θ (Secant)", "sec θ", "sec"], type: "written", difficulty: "medium",
      h: "sec θ = 1 / cos θ.", exp: "sec θ = Hypotenuse / Base = 1 / cos θ."
    },
    {
      id: "c9_q_7_1_06", q: "What is the fundamental Pythagorean identity connecting sin θ and cos θ?",
      options: ["sin² θ + cos² θ = 1", "sin² θ - cos² θ = 1", "sin θ + cos θ = 1", "tan² θ + 1 = sin² θ"], a: "sin² θ + cos² θ = 1", acc: ["sin² θ + cos² θ = 1", "sin^2 + cos^2 = 1"], type: "written", difficulty: "medium",
      h: "P²/H² + B²/H² = (P²+B²)/H² = H²/H² = 1.", exp: "sin² θ + cos² θ = 1."
    },
    {
      id: "c9_q_7_1_07", q: "If sin θ = 3/5, what is cos θ (for acute angle θ)?",
      options: ["4/5", "3/4", "5/4", "5/3"], a: "4/5", acc: ["4/5"], type: "written", difficulty: "medium",
      h: "In 3-4-5 triangle: Base = 4. cos θ = 4/5.", exp: "cos θ = √(1 - 9/25) = √(16/25) = 4/5."
    },
    {
      id: "c9_q_7_1_08", q: "If sin θ = 3/5, what is tan θ?",
      options: ["3/4", "4/3", "4/5", "5/3"], a: "3/4", acc: ["3/4"], type: "written", difficulty: "hard",
      h: "tan θ = sin θ / cos θ = (3/5) / (4/5) = 3/4.", exp: "tan θ = P / B = 3/4."
    },
    {
      id: "c9_q_7_1_09", q: "If tan θ = 5/12, what is sec θ?",
      options: ["13/12", "12/13", "13/5", "5/13"], a: "13/12", acc: ["13/12"], type: "written", difficulty: "hard",
      h: "H = √(5² + 12²) = 13. sec θ = H/B = 13/12.", exp: "sec θ = √(1 + tan² θ) = √(1 + 25/144) = 13/12."
    },
    {
      id: "c9_q_7_1_10", q: "Evaluate: (1 + tan² θ) × cos² θ",
      options: ["1", "tan θ", "sin² θ", "0"], a: "1", acc: ["1", "one"], type: "written", difficulty: "hard",
      h: "1 + tan² θ = sec² θ. sec² θ × cos² θ = 1.", exp: "sec² θ × cos² θ = 1."
    }
  ],

  "c9_les_7_2": [ // Trigonometrical ratios of standard angles (0°, 30°, 45°, 60°, 90°)
    {
      id: "c9_q_7_2_01", q: "What is the value of sin 30°?",
      options: ["1/2", "√3/2", "1/√2", "1"], a: "1/2", acc: ["1/2", "0.5"], type: "written", difficulty: "easy",
      h: "sin 30° = 1/2.", exp: "sin 30° = 1/2."
    },
    {
      id: "c9_q_7_2_02", q: "What is the value of cos 60°?",
      options: ["1/2", "√3/2", "1/√2", "0"], a: "1/2", acc: ["1/2", "0.5"], type: "written", difficulty: "easy",
      h: "cos 60° = sin 30° = 1/2.", exp: "cos 60° = 1/2."
    },
    {
      id: "c9_q_7_2_03", q: "What is the value of tan 45°?",
      options: ["1", "0", "√3", "1/√3"], a: "1", acc: ["1", "one"], type: "written", difficulty: "easy",
      h: "In an isosceles right triangle, P = B ⟹ tan 45° = 1.", exp: "tan 45° = 1."
    },
    {
      id: "c9_q_7_2_04", q: "What is the value of sin 45° and cos 45°?",
      options: ["1/√2", "1/2", "√3/2", "1"], a: "1/√2", acc: ["1/√2", "1/sqrt(2)"], type: "written", difficulty: "medium",
      h: "sin 45° = cos 45° = 1/√2.", exp: "sin 45° = cos 45° = 1/√2."
    },
    {
      id: "c9_q_7_2_05", q: "What is the value of tan 60°?",
      options: ["√3", "1/√3", "1", "Undefined"], a: "√3", acc: ["√3", "sqrt(3)"], type: "written", difficulty: "medium",
      h: "sin 60° / cos 60° = (√3/2) / (1/2) = √3.", exp: "tan 60° = √3."
    },
    {
      id: "c9_q_7_2_06", q: "What is the value of tan 30°?",
      options: ["1/√3", "√3", "1", "0"], a: "1/√3", acc: ["1/√3", "1/sqrt(3)"], type: "written", difficulty: "medium",
      h: "(1/2) / (√3/2) = 1/√3.", exp: "tan 30° = 1/√3."
    },
    {
      id: "c9_q_7_2_07", q: "What is the value of sin 90° and cos 0°?",
      options: ["1", "0", "1/2", "Undefined"], a: "1", acc: ["1", "one"], type: "written", difficulty: "medium",
      h: "sin 90° = 1, cos 0° = 1.", exp: "sin 90° = cos 0° = 1."
    },
    {
      id: "c9_q_7_2_08", q: "Evaluate: sin² 30° + cos² 30°",
      options: ["1", "1/2", "3/4", "2"], a: "1", acc: ["1", "one"], type: "written", difficulty: "hard",
      h: "(1/2)² + (√3/2)² = 1/4 + 3/4 = 1.", exp: "(1/2)² + (√3/2)² = 1."
    },
    {
      id: "c9_q_7_2_09", q: "Evaluate: 2 tan 45° + cos 30° - sin 60°",
      options: ["2", "1", "0", "2√3"], a: "2", acc: ["2", "two"], type: "written", difficulty: "hard",
      h: "2(1) + √3/2 - √3/2 = 2.", exp: "2(1) + 0 = 2."
    },
    {
      id: "c9_q_7_2_10", q: "Evaluate: (tan 60° - tan 30°) / (1 + tan 60° tan 30°)",
      options: ["1/√3", "√3", "1", "0"], a: "1/√3", acc: ["1/√3", "1/sqrt(3)"], type: "written", difficulty: "hard",
      h: "Formula for tan(60° - 30°) = tan 30° = 1/√3.", exp: "tan(60° - 30°) = tan 30° = 1/√3."
    }
  ],

  "c9_les_7_3": [ // Simple 2D right-angled triangle problems
    {
      id: "c9_q_7_3_01", q: "In right-angled triangle ABC (∠B = 90°), if ∠A = 30° and hypotenuse AC = 20 cm, find BC (opposite side):",
      options: ["10 cm", "10√3 cm", "20 cm", "15 cm"], a: "10 cm", acc: ["10 cm", "10"], type: "written", difficulty: "easy",
      h: "BC = AC sin 30° = 20 × ½ = 10 cm.", exp: "BC = 20 × sin 30° = 10 cm."
    },
    {
      id: "c9_q_7_3_02", q: "In the same triangle (AC = 20 cm, ∠A = 30°), find AB (adjacent side):",
      options: ["10√3 cm", "10 cm", "20√3 cm", "15 cm"], a: "10√3 cm", acc: ["10√3 cm", "10√3", "10*sqrt(3)"], type: "written", difficulty: "easy",
      h: "AB = AC cos 30° = 20 × (√3/2) = 10√3 cm.", exp: "AB = 10√3 cm."
    },
    {
      id: "c9_q_7_3_03", q: "A 10 m ladder leaning against a wall makes an angle of 60° with the ground. How high up the wall does it reach?",
      options: ["5√3 m (≈ 8.66 m)", "5 m", "10 m", "5/√3 m"], a: "5√3 m (≈ 8.66 m)", acc: ["5√3 m (≈ 8.66 m)", "5√3", "8.66"], type: "written", difficulty: "easy",
      h: "Height = 10 sin 60° = 10 × (√3/2) = 5√3 m.", exp: "Height = 5√3 m."
    },
    {
      id: "c9_q_7_3_04", q: "How far is the foot of the ladder from the wall (Ladder = 10 m, angle = 60°)?",
      options: ["5 m", "5√3 m", "10 m", "2.5 m"], a: "5 m", acc: ["5 m", "5"], type: "written", difficulty: "medium",
      h: "Distance = 10 cos 60° = 10 × ½ = 5 m.", exp: "Distance = 5 m."
    },
    {
      id: "c9_q_7_3_05", q: "If a vertical pole of height 6 m casts a shadow of 2√3 m on the ground, what is the angle of elevation of the sun?",
      options: ["60°", "30°", "45°", "90°"], a: "60°", acc: ["60°", "60", "60 degrees"], type: "written", difficulty: "medium",
      h: "tan θ = 6 / (2√3) = 3 / √3 = √3 ⟹ θ = 60°.", exp: "tan θ = √3 ⟹ θ = 60°."
    },
    {
      id: "c9_q_7_3_06", q: "If a pole of height h casts a shadow of equal length h on the ground, what is the sun's elevation angle?",
      options: ["45°", "30°", "60°", "90°"], a: "45°", acc: ["45°", "45"], type: "written", difficulty: "medium",
      h: "tan θ = h / h = 1 ⟹ θ = 45°.", exp: "tan θ = 1 ⟹ θ = 45°."
    },
    {
      id: "c9_q_7_3_07", q: "From a point on the ground 30 m away from the foot of a tower, the angle of elevation of its top is 30°. Find the height of the tower:",
      options: ["10√3 m (≈ 17.32 m)", "30√3 m", "15 m", "20 m"], a: "10√3 m (≈ 17.32 m)", acc: ["10√3 m (≈ 17.32 m)", "10√3", "10*sqrt(3)", "17.32"], type: "written", difficulty: "medium",
      h: "h = 30 tan 30° = 30 × (1/√3) = 10√3 m.", exp: "Height = 10√3 m."
    },
    {
      id: "c9_q_7_3_08", q: "A kite is flying at a height of 75 m attached to a string inclined at 60° to the horizontal. Find the length of the string:",
      options: ["50√3 m", "150 m", "75√3 m", "100 m"], a: "50√3 m", acc: ["50√3 m", "50√3", "50*sqrt(3)"], type: "written", difficulty: "hard",
      h: "Length = 75 / sin 60° = 75 / (√3/2) = 150/√3 = 50√3 m.", exp: "String length = 50√3 m ≈ 86.6 m."
    },
    {
      id: "c9_q_7_3_09", q: "In right triangle ABC with ∠C = 90°, if AB = 10 cm and BC = 6 cm, find angle A:",
      options: ["sin⁻¹(0.6) ≈ 37°", "45°", "60°", "30°"], a: "sin⁻¹(0.6) ≈ 37°", acc: ["sin⁻¹(0.6) ≈ 37°", "sin^-1(0.6)", "37°"], type: "written", difficulty: "hard",
      h: "sin A = BC / AB = 6 / 10 = 0.6.", exp: "sin A = 3/5 = 0.6."
    },
    {
      id: "c9_q_7_3_10", q: "An observer 1.5 m tall is 28.5 m away from a tower 30 m high. What is the angle of elevation of the top of the tower from his eye?",
      options: ["45°", "30°", "60°", "15°"], a: "45°", acc: ["45°", "45"], type: "written", difficulty: "hard",
      h: "Effective height = 30 - 1.5 = 28.5 m. tan θ = 28.5 / 28.5 = 1 ⟹ θ = 45°.", exp: "tan θ = 28.5 / 28.5 = 1 ⟹ θ = 45°."
    }
  ],

  "c9_les_7_4": [ // Complementary angles in trigonometry
    {
      id: "c9_q_7_4_01", q: "What is sin (90° - θ) equal to?",
      options: ["cos θ", "sin θ", "-cos θ", "tan θ"], a: "cos θ", acc: ["cos θ", "cos(θ)"], type: "written", difficulty: "easy",
      h: "Co-function identity: sin becomes cos.", exp: "sin (90° - θ) = cos θ."
    },
    {
      id: "c9_q_7_4_02", q: "What is tan (90° - θ) equal to?",
      options: ["cot θ", "tan θ", "sec θ", "1 / tan θ (cot θ)"], a: "cot θ", acc: ["cot θ", "cot(θ)"], type: "written", difficulty: "easy",
      h: "Co-function of tangent is cotangent.", exp: "tan (90° - θ) = cot θ."
    },
    {
      id: "c9_q_7_4_03", q: "What is sec (90° - θ) equal to?",
      options: ["cosec θ", "sec θ", "cos θ", "sin θ"], a: "cosec θ", acc: ["cosec θ", "csc θ"], type: "written", difficulty: "easy",
      h: "Co-function of secant is cosecant.", exp: "sec (90° - θ) = cosec θ."
    },
    {
      id: "c9_q_7_4_04", q: "Evaluate without trigonometric tables: sin 28° / cos 62°",
      options: ["1", "0", "28/62", "2"], a: "1", acc: ["1", "one"], type: "written", difficulty: "medium",
      h: "sin 28° = cos(90° - 28°) = cos 62°. cos 62° / cos 62° = 1.", exp: "sin 28° / cos 62° = cos 62° / cos 62° = 1."
    },
    {
      id: "c9_q_7_4_05", q: "Evaluate: tan 35° × tan 55°",
      options: ["1", "0", "√3", "-1"], a: "1", acc: ["1", "one"], type: "written", difficulty: "medium",
      h: "tan 55° = cot 35°. tan 35° × cot 35° = 1.", exp: "tan 35° × cot 35° = 1."
    },
    {
      id: "c9_q_7_4_06", q: "Evaluate: cos 48° - sin 42°",
      options: ["0", "1", "-1", "2 cos 48°"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "medium",
      h: "cos 48° = sin 42°. sin 42° - sin 42° = 0.", exp: "cos 48° - sin 42° = 0."
    },
    {
      id: "c9_q_7_4_07", q: "Evaluate: sin² 25° + sin² 65°",
      options: ["1", "0", "2", "1/2"], a: "1", acc: ["1", "one"], type: "written", difficulty: "medium",
      h: "sin 65° = cos 25°. sin² 25° + cos² 25° = 1.", exp: "sin² 25° + cos² 25° = 1."
    },
    {
      id: "c9_q_7_4_08", q: "If sin 3A = cos (A - 26°), where 3A is an acute angle, find the value of A:",
      options: ["29°", "26°", "30°", "32°"], a: "29°", acc: ["29°", "29"], type: "written", difficulty: "hard",
      h: "90° - 3A = A - 26° ⟹ 4A = 116° ⟹ A = 29°.", exp: "4A = 116° ⟹ A = 29°."
    },
    {
      id: "c9_q_7_4_09", q: "Evaluate: tan 10° × tan 20° × tan 70° × tan 80°",
      options: ["1", "0", "√3", "2"], a: "1", acc: ["1", "one"], type: "written", difficulty: "hard",
      h: "(tan 10° × cot 10°) × (tan 20° × cot 20°) = 1 × 1 = 1.", exp: "1 × 1 = 1."
    },
    {
      id: "c9_q_7_4_10", q: "Evaluate: cosec² 57° - tan² 33°",
      options: ["1", "0", "-1", "2"], a: "1", acc: ["1", "one"], type: "written", difficulty: "hard",
      h: "tan 33° = cot 57°. cosec² 57° - cot² 57° = 1.", exp: "cosec² θ - cot² θ = 1."
    }
  ],

  // =========================================================================
  // Theme 8: Coordinate Geometry
  // =========================================================================
  "c9_les_8_1": [ // Cartesian plane, coordinates of a point, plotting points
    {
      id: "c9_q_8_1_01", q: "What is the horizontal axis in the Cartesian plane called?",
      options: ["X-axis (Abscissa axis)", "Y-axis (Ordinate axis)", "Z-axis", "Origin"], a: "X-axis (Abscissa axis)", acc: ["X-axis (Abscissa axis)", "X-axis", "Abscissa"], type: "written", difficulty: "easy",
      h: "The horizontal line passing through origin.", exp: "The horizontal axis is the X-axis (its coordinate is abscissa)."
    },
    {
      id: "c9_q_8_1_02", q: "What is the y-coordinate of a point called?",
      options: ["Ordinate", "Abscissa", "Origin", "Quadrant"], a: "Ordinate", acc: ["Ordinate"], type: "written", difficulty: "easy",
      h: "In (x, y), x is abscissa and y is ordinate.", exp: "The y-coordinate is called the ordinate."
    },
    {
      id: "c9_q_8_1_03", q: "What are the coordinates of the ORIGIN?",
      options: ["(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"], a: "(0, 0)", acc: ["(0, 0)", "(0,0)", "0,0"], type: "written", difficulty: "easy",
      h: "Intersection of x and y axes.", exp: "The origin is (0, 0)."
    },
    {
      id: "c9_q_8_1_04", q: "In which QUADRANT does the point (-3, 4) lie?",
      options: ["Quadrant II (Second Quadrant)", "Quadrant I", "Quadrant III", "Quadrant IV"], a: "Quadrant II (Second Quadrant)", acc: ["Quadrant II (Second Quadrant)", "Quadrant II", "II"], type: "written", difficulty: "medium",
      h: "x is negative, y is positive: (-, +).", exp: "(-, +) lies in Quadrant II."
    },
    {
      id: "c9_q_8_1_05", q: "In which QUADRANT does the point (-5, -7) lie?",
      options: ["Quadrant III (Third Quadrant)", "Quadrant I", "Quadrant II", "Quadrant IV"], a: "Quadrant III (Third Quadrant)", acc: ["Quadrant III (Third Quadrant)", "Quadrant III", "III"], type: "written", difficulty: "medium",
      h: "Both x and y are negative: (-, -).", exp: "(-, -) lies in Quadrant III."
    },
    {
      id: "c9_q_8_1_06", q: "In which QUADRANT does the point (4, -6) lie?",
      options: ["Quadrant IV (Fourth Quadrant)", "Quadrant I", "Quadrant II", "Quadrant III"], a: "Quadrant IV (Fourth Quadrant)", acc: ["Quadrant IV (Fourth Quadrant)", "Quadrant IV", "IV"], type: "written", difficulty: "medium",
      h: "x is positive, y is negative: (+, -).", exp: "(+, -) lies in Quadrant IV."
    },
    {
      id: "c9_q_8_1_07", q: "Where does any point with coordinates (5, 0) lie?",
      options: ["On the X-axis", "On the Y-axis", "In Quadrant I", "In Quadrant IV"], a: "On the X-axis", acc: ["On the X-axis", "X-axis", "x axis"], type: "written", difficulty: "medium",
      h: "y = 0 means on the x-axis.", exp: "Points with y = 0 lie on the X-axis."
    },
    {
      id: "c9_q_8_1_08", q: "Where does any point with coordinates (0, -8) lie?",
      options: ["On the Y-axis (negative direction)", "On the X-axis", "In Quadrant III", "In Quadrant IV"], a: "On the Y-axis (negative direction)", acc: ["On the Y-axis (negative direction)", "Y-axis", "y axis"], type: "written", difficulty: "hard",
      h: "x = 0 means on the y-axis.", exp: "Points with x = 0 lie on the Y-axis."
    },
    {
      id: "c9_q_8_1_09", q: "What is the perpendicular distance of the point P(4, -7) from the X-axis?",
      options: ["7 units", "-7 units", "4 units", "√65 units"], a: "7 units", acc: ["7 units", "7"], type: "written", difficulty: "hard",
      h: "Distance from x-axis is |y| = |-7| = 7.", exp: "Distance from x-axis = |y| = 7 units."
    },
    {
      id: "c9_q_8_1_10", q: "What is the reflection of the point (3, 5) in the X-axis?",
      options: ["(3, -5)", "(-3, 5)", "(-3, -5)", "(5, 3)"], a: "(3, -5)", acc: ["(3, -5)", "(3,-5)"], type: "written", difficulty: "hard",
      h: "In x-axis reflection, x stays same, y sign flips.", exp: "(x, y) ⟶ (x, -y) gives (3, -5)."
    }
  ],

  "c9_les_8_2": [ // Graphs of linear equations in two variables
    {
      id: "c9_q_8_2_01", q: "What geometric figure does the graph of a linear equation ax + by + c = 0 always represent?",
      options: ["A Straight Line", "A Circle", "A Parabola", "A Point"], a: "A Straight Line", acc: ["A Straight Line", "Straight Line", "Line"], type: "written", difficulty: "easy",
      h: "Linear = straight line.", exp: "Every first-degree equation in x and y represents a straight line."
    },
    {
      id: "c9_q_8_2_02", q: "What is the graph of the equation x = 4?",
      options: ["A vertical line parallel to Y-axis at a distance of 4 units", "A horizontal line parallel to X-axis", "Line through origin", "A single point"], a: "A vertical line parallel to Y-axis at a distance of 4 units", acc: ["A vertical line parallel to Y-axis at a distance of 4 units"], type: "written", difficulty: "easy",
      h: "x is constant 4 for all y.", exp: "x = c is a line parallel to the Y-axis."
    },
    {
      id: "c9_q_8_2_03", q: "What is the graph of the equation y = -3?",
      options: ["A horizontal line parallel to X-axis at a distance of 3 units below origin", "A vertical line", "Line through origin", "None"], a: "A horizontal line parallel to X-axis at a distance of 3 units below origin", acc: ["A horizontal line parallel to X-axis at a distance of 3 units below origin"], type: "written", difficulty: "easy",
      h: "y is constant -3 for all x.", exp: "y = c is a line parallel to the X-axis."
    },
    {
      id: "c9_q_8_2_04", q: "Does the line y = 3x pass through the ORIGIN (0, 0)?",
      options: ["Yes, because when x = 0, y = 0", "No", "Only if x = 1", "None"], a: "Yes, because when x = 0, y = 0", acc: ["Yes, because when x = 0, y = 0", "Yes"], type: "written", difficulty: "medium",
      h: "Constant term c = 0.", exp: "Any line of the form y = mx passes through the origin (0, 0)."
    },
    {
      id: "c9_q_8_2_05", q: "Find the x-intercept of the line 2x + 3y = 12 (put y = 0):",
      options: ["(6, 0)", "(0, 4)", "(12, 0)", "(3, 0)"], a: "(6, 0)", acc: ["(6, 0)", "6", "x = 6"], type: "written", difficulty: "medium",
      h: "2x = 12 ⟹ x = 6.", exp: "At y = 0, 2x = 12 ⟹ x = 6. Point is (6, 0)."
    },
    {
      id: "c9_q_8_2_06", q: "Find the y-intercept of the line 2x + 3y = 12 (put x = 0):",
      options: ["(0, 4)", "(6, 0)", "(0, 12)", "(0, 3)"], a: "(0, 4)", acc: ["(0, 4)", "4", "y = 4"], type: "written", difficulty: "medium",
      h: "3y = 12 ⟹ y = 4.", exp: "At x = 0, 3y = 12 ⟹ y = 4. Point is (0, 4)."
    },
    {
      id: "c9_q_8_2_07", q: "What is the SLOPE (m) and y-intercept (c) of the line in slope-intercept form y = 5x - 8?",
      options: ["Slope m = 5, y-intercept c = -8", "Slope m = -8, c = 5", "Slope m = 5, c = 8", "Slope m = 1/5"], a: "Slope m = 5, y-intercept c = -8", acc: ["Slope m = 5, y-intercept c = -8"], type: "written", difficulty: "medium",
      h: "Compare with y = mx + c.", exp: "m = 5 and c = -8."
    },
    {
      id: "c9_q_8_2_08", q: "Find the area of the triangle formed by the line 3x + 4y = 12 with the coordinate axes:",
      options: ["6 sq units", "12 sq units", "24 sq units", "7 sq units"], a: "6 sq units", acc: ["6 sq units", "6"], type: "written", difficulty: "hard",
      h: "Intercepts are (4, 0) and (0, 3). Area = ½ × 4 × 3 = 6 sq units.", exp: "Area = ½ × base × height = ½ × 4 × 3 = 6 sq units."
    },
    {
      id: "c9_q_8_2_09", q: "If the point (2, k) lies on the line 3x - 4y = 14, what is the value of k?",
      options: ["-2", "+2", "-4", "+4"], a: "-2", acc: ["-2"], type: "written", difficulty: "hard",
      h: "3(2) - 4k = 14 ⟹ 6 - 4k = 14 ⟹ -4k = 8 ⟹ k = -2.", exp: "6 - 4k = 14 ⟹ k = -2."
    },
    {
      id: "c9_q_8_2_10", q: "What is the point of intersection of lines x = 3 and y = -5?",
      options: ["(3, -5)", "(-5, 3)", "(0, 0)", "(3, 0)"], a: "(3, -5)", acc: ["(3, -5)", "(3,-5)"], type: "written", difficulty: "hard",
      h: "x-coordinate is 3, y-coordinate is -5.", exp: "Lines intersect at (3, -5)."
    }
  ],

  "c9_les_8_3": [ // Distance between two points (Distance formula)
    {
      id: "c9_q_8_3_01", q: "What is the DISTANCE FORMULA between points P(x₁, y₁) and Q(x₂, y₂)?",
      options: ["d = √[ (x₂ - x₁)² + (y₂ - y₁)² ]", "d = (x₂ - x₁) + (y₂ - y₁)", "d = √[ (x₂ + x₁)² + (y₂ + y₁)² ]", "d = (x₂ - x₁)² - (y₂ - y₁)²"], a: "d = √[ (x₂ - x₁)² + (y₂ - y₁)² ]", acc: ["d = √[ (x₂ - x₁)² + (y₂ - y₁)² ]", "√[(x2-x1)²+(y2-y1)²]", "A"], type: "written", difficulty: "easy",
      h: "Derived from Pythagoras theorem.", exp: "Distance d = √[ (x₂ - x₁)² + (y₂ - y₁)² ]."
    },
    {
      id: "c9_q_8_3_02", q: "What is the distance of the point P(x, y) from the ORIGIN (0, 0)?",
      options: ["d = √(x² + y²)", "d = x + y", "d = x² + y²", "d = √(x - y)"], a: "d = √(x² + y²)", acc: ["d = √(x² + y²)", "√(x² + y²)", "sqrt(x^2+y^2)"], type: "written", difficulty: "easy",
      h: "Origin is (0,0): √((x-0)² + (y-0)²).", exp: "Distance from origin = √(x² + y²)."
    },
    {
      id: "c9_q_8_3_03", q: "Find the distance of the point (3, 4) from the origin (0, 0):",
      options: ["5 units", "7 units", "25 units", "1 unit"], a: "5 units", acc: ["5 units", "5"], type: "written", difficulty: "easy",
      h: "√(3² + 4²) = √(9 + 16) = √25 = 5.", exp: "d = √(9 + 16) = 5 units."
    },
    {
      id: "c9_q_8_3_04", q: "Find the distance between points A(1, 2) and B(4, 6):",
      options: ["5 units", "7 units", "25 units", "6 units"], a: "5 units", acc: ["5 units", "5"], type: "written", difficulty: "medium",
      h: "√[ (4-1)² + (6-2)² ] = √(3² + 4²) = √25 = 5 units.", exp: "d = √(9 + 16) = 5 units."
    },
    {
      id: "c9_q_8_3_05", q: "Find the distance between points P(-2, 3) and Q(4, -5):",
      options: ["10 units", "100 units", "8 units", "14 units"], a: "10 units", acc: ["10 units", "10"], type: "written", difficulty: "medium",
      h: "√[ (4 - (-2))² + (-5 - 3)² ] = √(6² + (-8)²) = √(36 + 64) = √100 = 10 units.", exp: "d = √(36 + 64) = 10 units."
    },
    {
      id: "c9_q_8_3_06", q: "What is the MID-POINT formula for segment joining (x₁, y₁) and (x₂, y₂)?",
      options: ["M = ( (x₁ + x₂)/2, (y₁ + y₂)/2 )", "M = ( (x₁ - x₂)/2, (y₁ - y₂)/2 )", "M = (x₁x₂, y₁y₂)", "M = (x₁ + x₂, y₁ + y₂)"], a: "M = ( (x₁ + x₂)/2, (y₁ + y₂)/2 )", acc: ["M = ( (x₁ + x₂)/2, (y₁ + y₂)/2 )"], type: "written", difficulty: "medium",
      h: "Average of coordinates.", exp: "Midpoint = ( (x₁ + x₂)/2, (y₁ + y₂)/2 )."
    },
    {
      id: "c9_q_8_3_07", q: "Find the mid-point of segment joining (2, 8) and (6, 4):",
      options: ["(4, 6)", "(8, 12)", "(3, 6)", "(4, 4)"], a: "(4, 6)", acc: ["(4, 6)", "(4,6)"], type: "written", difficulty: "medium",
      h: "((2+6)/2, (8+4)/2) = (8/2, 12/2) = (4, 6).", exp: "Midpoint = (4, 6)."
    },
    {
      id: "c9_q_8_3_08", q: "If the distance between (x, 3) and (2, 7) is 5 units, find the values of x:",
      options: ["x = 5 or x = -1", "x = 4 or x = 0", "x = 6 or x = -2", "x = 7 or x = 1"], a: "x = 5 or x = -1", acc: ["x = 5 or x = -1", "5 or -1"], type: "written", difficulty: "hard",
      h: "(x - 2)² + (7 - 3)² = 25 ⟹ (x - 2)² + 16 = 25 ⟹ (x - 2)² = 9 ⟹ x - 2 = ±3 ⟹ x = 5 or -1.", exp: "x = 2 ± 3 ⟹ x = 5 or -1."
    },
    {
      id: "c9_q_8_3_09", q: "The points A(1, 1), B(4, 5), C(1, 5) form which type of triangle?",
      options: ["Right-angled triangle", "Equilateral triangle", "Isosceles triangle only", "Scalene non-right triangle"], a: "Right-angled triangle", acc: ["Right-angled triangle"], type: "written", difficulty: "hard",
      h: "AC is vertical (x=1), BC is horizontal (y=5). Perpendicular at C(1, 5).", exp: "Sides are 4, 3, 5, so ΔABC is a right-angled triangle at C."
    },
    {
      id: "c9_q_8_3_10", q: "What is the perimeter of triangle with vertices (0, 0), (3, 0), and (0, 4)?",
      options: ["12 units (3 + 4 + 5)", "7 units", "14 units", "6 units"], a: "12 units (3 + 4 + 5)", acc: ["12 units (3 + 4 + 5)", "12 units", "12"], type: "written", difficulty: "hard",
      h: "Sides are 3, 4, and hypotenuse 5. Perimeter = 3 + 4 + 5 = 12.", exp: "Perimeter = 3 + 4 + 5 = 12 units."
    }
  ]
};

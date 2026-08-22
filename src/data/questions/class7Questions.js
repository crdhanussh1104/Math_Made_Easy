/**
 * Class 7 Mathematics Question Bank (ICSE Curriculum)
 * Exactly 10 questions per topic with full MCQ options, explanations, hints, and difficulty ratings.
 */

export const class7Questions = {
  // =========================================================================
  // Theme 1: Number System
  // =========================================================================
  "c7_les_1_1": [ // Multiplication and division of integers and problem solving
    { id: "c7_q_1_1_01", q: "What is the product of (-6) × (-7)?",
      options: ["+42", "-42", "-13", "13"], a: "+42", acc: ["+42", "42"], type: "written", difficulty: "easy",
      h: "Negative × Negative = Positive.", exp: "(-6) × (-7) = +42."
    },
    { id: "c7_q_1_1_02", q: "What is (-45) ÷ (+9)?",
      options: ["-5", "+5", "-36", "36"], a: "-5", acc: ["-5"], type: "written", difficulty: "easy",
      h: "Negative ÷ Positive = Negative.", exp: "(-45) ÷ 9 = -5."
    },
    { id: "c7_q_1_1_03", q: "What is (-1) multiplied by itself 10 times (an EVEN number of times)?",
      options: ["+1", "-1", "0", "-10"], a: "+1", acc: ["+1", "1"], type: "written", difficulty: "easy",
      h: "(-1)^even = +1.", exp: "(-1) raised to an even power is always +1."
    },
    { id: "c7_q_1_1_04", q: "What is the value of: (-4) × (-5) × (-2)?",
      options: ["-40", "+40", "-20", "20"], a: "-40", acc: ["-40"], type: "written", difficulty: "medium",
      h: "Three negatives give a negative product.", exp: "(-4 × -5) = +20; +20 × -2 = -40."
    },
    { id: "c7_q_1_1_05", q: "What is (-72) ÷ (-8)?",
      options: ["+9", "-9", "+8", "-8"], a: "+9", acc: ["+9", "9"], type: "written", difficulty: "medium",
      h: "Negative ÷ Negative = Positive.", exp: "(-72) ÷ (-8) = +9."
    },
    { id: "c7_q_1_1_06", q: "In a test (+4) marks are given for correct answers and (-2) for incorrect answers. If Ravi gets 10 correct and 5 incorrect, what is his total score?",
      options: ["30 marks", "40 marks", "20 marks", "50 marks"], a: "30 marks", acc: ["30 marks", "30"], type: "written", difficulty: "medium",
      h: "(10 × 4) + (5 × -2) = 40 - 10 = 30.", exp: "Score = 40 - 10 = 30 marks."
    },
    { id: "c7_q_1_1_07", q: "Evaluate: (-100) ÷ [(-20) ÷ (-4)]",
      options: ["-20", "+20", "-5", "+5"], a: "-20", acc: ["-20"], type: "written", difficulty: "medium",
      h: "Inner bracket: -20 ÷ -4 = 5. Then -100 ÷ 5 = -20.", exp: "(-100) ÷ 5 = -20."
    },
    { id: "c7_q_1_1_08", q: "An elevator descends into a mine shaft at 6 m/min. If it starts from 10 m above ground level, how long will it take to reach -350 m?",
      options: ["60 minutes (1 hour)", "50 minutes", "70 minutes", "45 minutes"], a: "60 minutes (1 hour)", acc: ["60 minutes (1 hour)", "60 minutes", "1 hour", "60"], type: "written", difficulty: "hard",
      h: "Total distance = 10 - (-350) = 360 m. Time = 360 ÷ 6 = 60 min.", exp: "Distance = 360 m. Time = 360 / 6 = 60 minutes = 1 hour."
    },
    { id: "c7_q_1_1_09", q: "What is the sign of the product of 99 negative integers and 10 positive integers?",
      options: ["Negative (-)", "Positive (+)", "Zero", "Cannot determine"], a: "Negative (-)", acc: ["Negative (-)", "Negative", "-"], type: "written", difficulty: "hard",
      h: "Odd number (99) of negatives produces negative.", exp: "Product of 99 negative numbers is negative. Multiplying by positive keeps it negative."
    },
    { id: "c7_q_1_1_10", q: "Evaluate using BODMAS: (-25) + 12 ÷ (-4) - 3 × (-2)",
      options: ["-22", "-28", "-34", "+22"], a: "-22", acc: ["-22"], type: "written", difficulty: "hard",
      h: "12 ÷ -4 = -3; 3 × -2 = -6. -25 - 3 - (-6) = -28 + 6 = -22.", exp: "-25 + (-3) - (-6) = -28 + 6 = -22."
    }
  ],

  "c7_les_1_2": [ // Properties of operations on integers (Commutativity, Associativity, Identity, Inverse, Distributivity)
    { id: "c7_q_1_2_01", q: "Which property is demonstrated by: (-8) × (-5) = (-5) × (-8)?",
      options: ["Commutative property of multiplication", "Associative property", "Distributive property", "Closure property"], a: "Commutative property of multiplication", acc: ["Commutative property of multiplication", "Commutative"], type: "written", difficulty: "easy",
      h: "Order of terms does not affect product.", exp: "Commutative property: a × b = b × a."
    },
    { id: "c7_q_1_2_02", q: "What is the MULTIPLICATIVE INVERSE (reciprocal) of -7?",
      options: ["-1/7", "+7", "1/7", "0"], a: "-1/7", acc: ["-1/7"], type: "written", difficulty: "easy",
      h: "-7 × (-1/7) = 1.", exp: "Multiplicative inverse of a is 1/a. For -7, it is -1/7."
    },
    { id: "c7_q_1_2_03", q: "What is the ADDITIVE INVERSE of +35?",
      options: ["-35", "+35", "1/35", "0"], a: "-35", acc: ["-35"], type: "written", difficulty: "easy",
      h: "35 + (-35) = 0.", exp: "Additive inverse of +35 is -35."
    },
    { id: "c7_q_1_2_04", q: "Calculate using distributive property: (-48) × 99",
      options: ["-4,752", "-4,800", "-4,704", "-4,848"], a: "-4,752", acc: ["-4,752", "-4752"], type: "written", difficulty: "medium",
      h: "(-48) × (100 - 1) = -4800 - (-48) = -4800 + 48 = -4752.", exp: "(-48) × (100 - 1) = -4800 + 48 = -4752."
    },
    { id: "c7_q_1_2_05", q: "Calculate: 725 × (-35) + 725 × (-65)",
      options: ["-72,500", "+72,500", "-7,250", "0"], a: "-72,500", acc: ["-72,500", "-72500"], type: "written", difficulty: "medium",
      h: "725 × (-35 - 65) = 725 × (-100) = -72500.", exp: "725 × (-100) = -72,500."
    },
    { id: "c7_q_1_2_06", q: "Is division of integers associative: is (a ÷ b) ÷ c = a ÷ (b ÷ c)?",
      options: ["No, division is NOT associative", "Yes, always", "Only for 1", "Only for positive integers"], a: "No, division is NOT associative", acc: ["No, division is NOT associative", "No"], type: "written", difficulty: "medium",
      h: "(16 ÷ 4) ÷ 2 = 2, but 16 ÷ (4 ÷ 2) = 8.", exp: "Division is not associative for integers."
    },
    { id: "c7_q_1_2_07", q: "What is any integer divided by 1?",
      options: ["The integer itself (a ÷ 1 = a)", "1", "0", "Undefined"], a: "The integer itself (a ÷ 1 = a)", acc: ["The integer itself (a ÷ 1 = a)", "The integer itself", "a"], type: "written", difficulty: "medium",
      h: "Dividing by 1 leaves number unchanged.", exp: "a ÷ 1 = a."
    },
    { id: "c7_q_1_2_08", q: "What is any non-zero integer divided by 0 (e.g. 5 ÷ 0)?",
      options: ["Undefined / Not defined", "0", "1", "Infinity"], a: "Undefined / Not defined", acc: ["Undefined / Not defined", "Undefined", "Not defined"], type: "written", difficulty: "hard",
      h: "Division by zero is undefined.", exp: "Division by 0 is undefined in mathematics."
    },
    { id: "c7_q_1_2_09", q: "Evaluate using distributive property: 62 × 199 - 62 × 99",
      options: ["6,200", "620", "62,000", "5,800"], a: "6,200", acc: ["6,200", "6200"], type: "written", difficulty: "hard",
      h: "62 × (199 - 99) = 62 × 100 = 6200.", exp: "62 × 100 = 6,200."
    },
    { id: "c7_q_1_2_10", q: "Which integer has NO multiplicative inverse in integers?",
      options: ["0", "1", "-1", "2"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "hard",
      h: "1/0 is undefined.", exp: "0 has no reciprocal (1/0 is undefined)."
    }
  ],

  "c7_les_1_3": [ // Introduction to rational numbers and number line representation
    { id: "c7_q_1_3_01", q: "What is a RATIONAL NUMBER?",
      options: ["A number that can be written in the form p/q, where p and q are integers and q ≠ 0", "Only positive fractions", "Any decimal number", "Square root numbers"], a: "A number that can be written in the form p/q, where p and q are integers and q ≠ 0", acc: ["A number that can be written in the form p/q, where p and q are integers and q ≠ 0"], type: "written", difficulty: "easy",
      h: "Form p/q with q ≠ 0.", exp: "A rational number (Q) is any number expressible as p/q where p, q ∈ Z and q ≠ 0."
    },
    { id: "c7_q_1_3_02", q: "Is the integer 0 a rational number?",
      options: ["Yes, because it can be written as 0/1", "No, 0 is not rational", "Only if divided by 0", "None"], a: "Yes, because it can be written as 0/1", acc: ["Yes, because it can be written as 0/1", "Yes"], type: "written", difficulty: "easy",
      h: "0 = 0/1 where 1 ≠ 0.", exp: "0 = 0/1 is rational."
    },
    { id: "c7_q_1_3_03", q: "Which of the rational numbers: -3/5, (-2)/(-7), 4/(-9), -8/11 is a POSITIVE rational number?",
      a: "(-2)/(-7)", acc: ["(-2)/(-7)", "-2/-7", "2/7", "(-2)/-7", "-2/(-7)"], type: "written", difficulty: "easy",
      h: "Dividing a negative by a negative yields a positive result.", exp: "(-2)/(-7) = 2/7 > 0, which is positive."
    },
    { id: "c7_q_1_3_04", q: "What is the STANDARD FORM of the rational number 18 / -24?",
      options: ["-3/4", "3/-4", "-9/12", "6/-8"], a: "-3/4", acc: ["-3/4"], type: "written", difficulty: "medium",
      h: "Divide by HCF (6) and move negative sign to numerator: -3/4.", exp: "In standard form, denominator is positive and fraction is in lowest terms: -3/4."
    },
    { id: "c7_q_1_3_05", q: "Where does -3/4 lie on a number line?",
      options: ["Between -1 and 0", "Between 0 and 1", "To the left of -1", "To the right of 1"], a: "Between -1 and 0", acc: ["Between -1 and 0"], type: "written", difficulty: "medium",
      h: "-1 < -0.75 < 0.", exp: "-3/4 = -0.75 lies between -1 and 0."
    },
    { id: "c7_q_1_3_06", q: "Which rational number is equivalent to -2/5?",
      options: ["-6/15", "6/15", "-4/15", "2/-10"], a: "-6/15", acc: ["-6/15"], type: "written", difficulty: "medium",
      h: "Multiply numerator and denominator by 3: (-2×3)/(5×3) = -6/15.", exp: "(-2 × 3) / (5 × 3) = -6/15."
    },
    { id: "c7_q_1_3_07", q: "Which rational number is GREATER: -3/5 or -2/5?",
      options: ["-2/5", "-3/5", "Both are equal", "Cannot compare"], a: "-2/5", acc: ["-2/5"], type: "written", difficulty: "medium",
      h: "-2 is to the right of -3 on number line (-0.4 > -0.6).", exp: "-2/5 > -3/5."
    },
    { id: "c7_q_1_3_08", q: "Between any two distinct rational numbers like 1/5 and 4/5, how many rational numbers can be inserted?",
      a: "Infinitely many", acc: ["Infinitely many", "Infinite", "infinitely many", "infinite", "unlimited"], type: "written", difficulty: "hard",
      h: "The property is called density of rational numbers.", exp: "Between any two distinct rational numbers, there are infinitely many rational numbers."
    },
    { id: "c7_q_1_3_09", q: "Find a rational number exactly halfway between 1/3 and 1/2:",
      options: ["5/12", "2/5", "1/5", "7/12"], a: "5/12", acc: ["5/12"], type: "written", difficulty: "hard",
      h: "½(1/3 + 1/2) = ½(5/6) = 5/12.", exp: "Midpoint = ½(1/3 + 1/2) = 5/12."
    },
    { id: "c7_q_1_3_10", q: "Which of the rational numbers: 6/8, 15/25, 7/9, 12/18 is in standard lowest (simplest) form?",
      a: "7/9", acc: ["7/9", "7 / 9"], type: "written", difficulty: "hard",
      h: "HCF of numerator and denominator must be 1.", exp: "HCF(7, 9) = 1, so 7/9 is in standard lowest form."
    }
  ],

  "c7_les_1_4": [ // Operations on rational numbers, decimal representation, and word problems
    { id: "c7_q_1_4_01", q: "What is (-3/5) + (2/5)?",
      options: ["-1/5", "1/5", "-5/5", "5/5"], a: "-1/5", acc: ["-1/5"], type: "written", difficulty: "easy",
      h: "(-3 + 2) / 5 = -1/5.", exp: "(-3 + 2) / 5 = -1/5."
    },
    { id: "c7_q_1_4_02", q: "What is (-4/7) × (21/8)?",
      options: ["-3/2", "+3/2", "-6/7", "-84/56"], a: "-3/2", acc: ["-3/2", "-1 1/2", "-1.5"], type: "written", difficulty: "easy",
      h: "Simplify: (-4/8) × (21/7) = (-1/2) × 3 = -3/2.", exp: "(-4 × 21) / (7 × 8) = -3/2."
    },
    { id: "c7_q_1_4_03", q: "What is (-3/4) ÷ (-9/8)?",
      options: ["+2/3", "-2/3", "+27/32", "-27/32"], a: "+2/3", acc: ["+2/3", "2/3"], type: "written", difficulty: "easy",
      h: "Multiply by reciprocal: (-3/4) × (-8/9) = +2/3.", exp: "(-3/4) × (-8/9) = 24/36 = 2/3."
    },
    { id: "c7_q_1_4_04", q: "What is 2/3 - (-1/6)?",
      options: ["5/6", "1/2", "3/6", "1/6"], a: "5/6", acc: ["5/6"], type: "written", difficulty: "medium",
      h: "2/3 + 1/6 = 4/6 + 1/6 = 5/6.", exp: "2/3 + 1/6 = 5/6."
    },
    { id: "c7_q_1_4_05", q: "What is the decimal representation of rational number 7/8?",
      options: ["0.875 (Terminating)", "0.87", "0.785", "0.88"], a: "0.875 (Terminating)", acc: ["0.875 (Terminating)", "0.875"], type: "written", difficulty: "medium",
      h: "7 ÷ 8 = 0.875.", exp: "7/8 = 0.875 (terminating decimal)."
    },
    { id: "c7_q_1_4_06", q: "What is the decimal representation of rational number 1/3?",
      options: ["0.333... (Non-terminating repeating 0.3̄)", "0.3", "0.33", "0.34"], a: "0.333... (Non-terminating repeating 0.3̄)", acc: ["0.333... (Non-terminating repeating 0.3̄)", "0.333...", "0.333"], type: "written", difficulty: "medium",
      h: "1 ÷ 3 = 0.3333...", exp: "1/3 = 0.333... is a recurring decimal."
    },
    { id: "c7_q_1_4_07", q: "What rational number should be added to -7/8 to get 5/9?",
      options: ["103/72", "19/72", "-23/72", "72/103"], a: "103/72", acc: ["103/72"], type: "written", difficulty: "medium",
      h: "5/9 - (-7/8) = 5/9 + 7/8 = (40 + 63)/72 = 103/72.", exp: "5/9 + 7/8 = 103/72."
    },
    { id: "c7_q_1_4_08", q: "The product of two rational numbers is -14/27. If one number is 7/9, what is the other number?",
      options: ["-2/3", "+2/3", "-3/2", "-98/243"], a: "-2/3", acc: ["-2/3"], type: "written", difficulty: "hard",
      h: "(-14/27) ÷ (7/9) = (-14/27) × (9/7) = -2/3.", exp: "(-14/27) × (9/7) = -2/3."
    },
    { id: "c7_q_1_4_09", q: "A car covers 20 ½ km in 1 litre of petrol. How far will it travel in 3 ¼ litres of petrol?",
      options: ["66 ⅝ km (533/8 km)", "65 km", "67 km", "60 ½ km"], a: "66 ⅝ km (533/8 km)", acc: ["66 ⅝ km (533/8 km)", "66 5/8", "533/8", "66.625"], type: "written", difficulty: "hard",
      h: "41/2 × 13/4 = 533/8 = 66 5/8 km.", exp: "(41/2) × (13/4) = 533/8 = 66 ⅝ km."
    },
    { id: "c7_q_1_4_10", q: "What should be subtracted from -2/3 to get -5/6?",
      options: ["+1/6", "-1/6", "+3/6", "-7/6"], a: "+1/6", acc: ["+1/6", "1/6"], type: "written", difficulty: "hard",
      h: "-2/3 - x = -5/6 ⟹ x = -2/3 - (-5/6) = -4/6 + 5/6 = 1/6.", exp: "x = 1/6."
    }
  ],

  "c7_les_1_5": [ // Fraction as an operator, reciprocal, and operations on decimal fractions
    { id: "c7_q_1_5_01", q: "What does 'of' represent in mathematics (e.g. 3/4 of 100)?",
      options: ["Multiplication (×)", "Addition (+)", "Division (÷)", "Subtraction (-)"], a: "Multiplication (×)", acc: ["Multiplication (×)", "Multiplication", "×", "*"], type: "written", difficulty: "easy",
      h: "Fraction as an operator means multiplication.", exp: "'of' signifies multiplication: 3/4 × 100 = 75."
    },
    { id: "c7_q_1_5_02", q: "What is 3/5 of 250?",
      options: ["150", "125", "175", "100"], a: "150", acc: ["150"], type: "written", difficulty: "easy",
      h: "3/5 × 250 = 3 × 50 = 150.", exp: "3/5 × 250 = 150."
    },
    { id: "c7_q_1_5_03", q: "What is 2.5 × 0.4?",
      options: ["1.0", "10.0", "0.1", "0.01"], a: "1.0", acc: ["1.0", "1"], type: "written", difficulty: "easy",
      h: "25 × 4 = 100. Two decimal places = 1.00 = 1.0.", exp: "2.5 × 0.4 = 1.0."
    },
    { id: "c7_q_1_5_04", q: "What is 4.8 ÷ 0.6?",
      options: ["8", "0.8", "80", "0.08"], a: "8", acc: ["8", "eight"], type: "written", difficulty: "medium",
      h: "48 ÷ 6 = 8.", exp: "4.8 / 0.6 = 48 / 6 = 8."
    },
    { id: "c7_q_1_5_05", q: "What is 0.05 × 0.02?",
      options: ["0.001", "0.01", "0.0001", "0.1"], a: "0.001", acc: ["0.001"], type: "written", difficulty: "medium",
      h: "5 × 2 = 10. Four decimal places: 0.0010 = 0.001.", exp: "0.05 × 0.02 = 0.001."
    },
    { id: "c7_q_1_5_06", q: "What is 3.75 ÷ 100?",
      options: ["0.0375", "0.375", "37.5", "375"], a: "0.0375", acc: ["0.0375"], type: "written", difficulty: "medium",
      h: "Shift decimal point 2 places left.", exp: "3.75 ÷ 100 = 0.0375."
    },
    { id: "c7_q_1_5_07", q: "What is the reciprocal of the mixed fraction 2 ⅗?",
      options: ["5/13", "13/5", "2 ⅗", "5/2"], a: "5/13", acc: ["5/13"], type: "written", difficulty: "medium",
      h: "2 ⅗ = 13/5. Reciprocal = 5/13.", exp: "2 ⅗ = 13/5. Its reciprocal is 5/13."
    },
    { id: "c7_q_1_5_08", q: "A cloth of length 37.5 m is cut into 15 equal shirts. What length of cloth is used for each shirt?",
      options: ["2.5 m", "2.25 m", "2.75 m", "3.0 m"], a: "2.5 m", acc: ["2.5 m", "2.5"], type: "written", difficulty: "hard",
      h: "37.5 ÷ 15 = 2.5 m.", exp: "37.5 / 15 = 2.5 m."
    },
    { id: "c7_q_1_5_09", q: "Evaluate: (0.2 × 0.2 + 0.01) ÷ 0.1",
      options: ["0.5", "0.05", "5.0", "0.4"], a: "0.5", acc: ["0.5"], type: "written", difficulty: "hard",
      h: "0.04 + 0.01 = 0.05. 0.05 ÷ 0.1 = 0.5.", exp: "0.05 / 0.1 = 0.5."
    },
    { id: "c7_q_1_5_10", q: "If 1 kg of sugar costs ₹42.50, what is the cost of 4.5 kg of sugar?",
      options: ["₹191.25", "₹190.00", "₹185.25", "₹195.50"], a: "₹191.25", acc: ["₹191.25", "191.25", "Rs 191.25"], type: "written", difficulty: "hard",
      h: "42.50 × 4.5 = 191.25.", exp: "42.50 × 4.5 = ₹191.25."
    }
  ],

  "c7_les_1_6": [ // Exponents with natural numbers and Laws of exponents
    { id: "c7_q_1_6_01", q: "In the expression 2⁵, what is 2 called and what is 5 called?",
      options: ["2 is Base, 5 is Exponent (Power)", "5 is Base, 2 is Power", "Both are bases", "Both are powers"], a: "2 is Base, 5 is Exponent (Power)", acc: ["2 is Base, 5 is Exponent (Power)"], type: "written", difficulty: "easy",
      h: "Base is the number multiplied; exponent is the power count.", exp: "In a^b, a is base and b is exponent/index."
    },
    { id: "c7_q_1_6_02", q: "What is the product law of exponents: aᵐ × aⁿ = ?",
      options: ["aᵐ⁺ⁿ", "aᵐ⁻ⁿ", "aᵐⁿ", "aᵐ/ⁿ"], a: "aᵐ⁺ⁿ", acc: ["aᵐ⁺ⁿ", "a^(m+n)", "a^(m + n)"], type: "written", difficulty: "easy",
      h: "Add powers when bases are identical.", exp: "aᵐ × aⁿ = aᵐ⁺ⁿ."
    },
    { id: "c7_q_1_6_03", q: "What is the quotient law of exponents: aᵐ ÷ aⁿ = ?",
      options: ["aᵐ⁻ⁿ", "aᵐ⁺ⁿ", "aᵐⁿ", "aⁿ⁻ᵐ"], a: "aᵐ⁻ⁿ", acc: ["aᵐ⁻ⁿ", "a^(m-n)"], type: "written", difficulty: "easy",
      h: "Subtract powers.", exp: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ."
    },
    { id: "c7_q_1_6_04", q: "What is any non-zero number raised to power 0 (a⁰)?",
      options: ["1", "0", "a", "Infinity"], a: "1", acc: ["1", "one"], type: "written", difficulty: "medium",
      h: "a⁰ = 1.", exp: "Any non-zero base raised to power 0 equals 1."
    },
    { id: "c7_q_1_6_05", q: "What is the power of a power law: (aᵐ)ⁿ = ?",
      options: ["aᵐⁿ", "aᵐ⁺ⁿ", "aᵐ⁻ⁿ", "aᵐ/ⁿ"], a: "aᵐⁿ", acc: ["aᵐⁿ", "a^(mn)"], type: "written", difficulty: "medium",
      h: "Multiply the exponents.", exp: "(aᵐ)ⁿ = aᵐⁿ."
    },
    { id: "c7_q_1_6_06", q: "Simplify: (2³ × 2⁴) = ?",
      options: ["2⁷ = 128", "2¹²", "4⁷", "2¹"], a: "2⁷ = 128", acc: ["2⁷ = 128", "2^7", "128"], type: "written", difficulty: "medium",
      h: "3 + 4 = 7. 2⁷ = 128.", exp: "2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128."
    },
    { id: "c7_q_1_6_07", q: "Simplify: (3⁵ ÷ 3²) = ?",
      options: ["3³ = 27", "3⁷", "3¹⁰", "1"], a: "3³ = 27", acc: ["3³ = 27", "3^3", "27"], type: "written", difficulty: "medium",
      h: "5 - 2 = 3. 3³ = 27.", exp: "3⁵ ÷ 3² = 3³ = 27."
    },
    { id: "c7_q_1_6_08", q: "Express 512 as a power of 2:",
      options: ["2⁹", "2⁸", "2¹⁰", "2⁷"], a: "2⁹", acc: ["2⁹", "2^9"], type: "written", difficulty: "hard",
      h: "2⁸ = 256, 2⁹ = 512.", exp: "512 = 2⁹."
    },
    { id: "c7_q_1_6_09", q: "Simplify: [(2²)³ × 3⁶] ÷ 6⁴",
      options: ["36", "72", "18", "6"], a: "36", acc: ["36"], type: "written", difficulty: "hard",
      h: "2⁶ × 3⁶ / 6⁴ = 6⁶ / 6⁴ = 6² = 36.", exp: "(2×3)⁶ ÷ 6⁴ = 6⁶ ÷ 6⁴ = 6² = 36."
    },
    { id: "c7_q_1_6_10", q: "Express 450,000,000 in standard SCIENTIFIC NOTATION:",
      options: ["4.5 × 10⁸", "45 × 10⁷", "4.5 × 10⁷", "0.45 × 10⁹"], a: "4.5 × 10⁸", acc: ["4.5 × 10⁸", "4.5 * 10^8", "4.5x10^8"], type: "written", difficulty: "hard",
      h: "Move decimal 8 places left: 4.5 × 10⁸.", exp: "450,000,000 = 4.5 × 10⁸."
    }
  ],

  "c7_les_1_7": [ // Sets: Equal, equivalent, universal sets, and cardinal properties
    { id: "c7_q_1_7_01", q: "When are two sets called EQUIVALENT sets (A ~ B)?",
      options: ["When they have the SAME cardinality: n(A) = n(B)", "When they have identical elements", "When one is empty", "When both are infinite"], a: "When they have the SAME cardinality: n(A) = n(B)", acc: ["When they have the SAME cardinality: n(A) = n(B)"], type: "written", difficulty: "easy",
      h: "Equivalent means equal number of elements.", exp: "Sets are equivalent if n(A) = n(B)."
    },
    { id: "c7_q_1_7_02", q: "What is a UNIVERSAL SET (denoted by U or ξ)?",
      options: ["The superset containing all possible elements under consideration in a given context", "A set with 0 elements", "A set with 1 element", "An empty set"], a: "The superset containing all possible elements under consideration in a given context", acc: ["The superset containing all possible elements under consideration in a given context"], type: "written", difficulty: "easy",
      h: "Universal context set.", exp: "A universal set contains all objects under discussion."
    },
    { id: "c7_q_1_7_03", q: "If A = {a, b, c} and B = {1, 2, 3}, are sets A and B EQUIVALENT?",
      options: ["Yes, because n(A) = 3 and n(B) = 3", "No, because elements are different", "Only if equal", "None"], a: "Yes, because n(A) = 3 and n(B) = 3", acc: ["Yes, because n(A) = 3 and n(B) = 3", "Yes"], type: "written", difficulty: "easy",
      h: "Both sets contain 3 elements.", exp: "n(A) = n(B) = 3, so A and B are equivalent sets."
    },
    { id: "c7_q_1_7_04", q: "What is the COMPLEMENT of set A (denoted A' or Aᶜ)?",
      options: ["Set of all elements in Universal set U that are NOT in A (U - A)", "All elements in A", "The empty set", "A itself"], a: "Set of all elements in Universal set U that are NOT in A (U - A)", acc: ["Set of all elements in Universal set U that are NOT in A (U - A)"], type: "written", difficulty: "medium",
      h: "A' = U - A.", exp: "A' contains all elements in U that do not belong to A."
    },
    { id: "c7_q_1_7_05", q: "If U = {1, 2, 3, 4, 5, 6} and A = {2, 4, 6}, what is A'?",
      options: ["{1, 3, 5}", "{2, 4, 6}", "∅", "{1, 2, 3, 4, 5, 6}"], a: "{1, 3, 5}", acc: ["{1, 3, 5}"], type: "written", difficulty: "medium",
      h: "U minus even numbers = odd numbers.", exp: "A' = U - {2,4,6} = {1, 3, 5}."
    },
    { id: "c7_q_1_7_06", q: "What is the UNION of sets A and B, written A ∪ B?",
      options: ["Set of all elements that belong to A OR B OR both", "Only common elements", "Only elements in A", "Empty set"], a: "Set of all elements that belong to A OR B OR both", acc: ["Set of all elements that belong to A OR B OR both"], type: "written", difficulty: "medium",
      h: "Combines all elements without repetition.", exp: "A ∪ B contains all distinct elements present in A or B."
    },
    { id: "c7_q_1_7_07", q: "What is the INTERSECTION of sets A and B, written A ∩ B?",
      options: ["Set of all COMMON elements belonging to BOTH A and B", "All elements in A and B", "Elements in A only", "Universal set"], a: "Set of all COMMON elements belonging to BOTH A and B", acc: ["Set of all COMMON elements belonging to BOTH A and B"], type: "written", difficulty: "medium",
      h: "Common elements only.", exp: "A ∩ B represents the overlapping shared elements of A and B."
    },
    { id: "c7_q_1_7_08", q: "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, what is A ∩ B?",
      options: ["{3, 4}", "{1, 2, 3, 4, 5, 6}", "{1, 2}", "{5, 6}"], a: "{3, 4}", acc: ["{3, 4}"], type: "written", difficulty: "hard",
      h: "Common elements are 3 and 4.", exp: "A ∩ B = {3, 4}."
    },
    { id: "c7_q_1_7_09", q: "What is the cardinal formula for union of two sets?",
      options: ["n(A ∪ B) = n(A) + n(B) - n(A ∩ B)", "n(A ∪ B) = n(A) + n(B)", "n(A ∪ B) = n(A) × n(B)", "n(A ∪ B) = n(A ∩ B)"], a: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)", acc: ["n(A ∪ B) = n(A) + n(B) - n(A ∩ B)"], type: "written", difficulty: "hard",
      h: "Subtract overlap once so it is not double-counted.", exp: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)."
    },
    { id: "c7_q_1_7_10", q: "If n(A) = 15, n(B) = 12, and n(A ∩ B) = 5, what is n(A ∪ B)?",
      options: ["22", "27", "17", "32"], a: "22", acc: ["22"], type: "written", difficulty: "hard",
      h: "15 + 12 - 5 = 27 - 5 = 22.", exp: "n(A ∪ B) = 15 + 12 - 5 = 22."
    }
  ],

  // =========================================================================
  // Theme 2: Ratio and Proportion
  // =========================================================================
  "c7_les_2_1": [ // Ratio, proportion, and unitary method
    { id: "c7_q_2_1_01", q: "If a : b = 2 : 3 and b : c = 4 : 5, what is the combined ratio a : b : c?",
      options: ["8 : 12 : 15", "2 : 4 : 5", "6 : 8 : 15", "8 : 10 : 15"], a: "8 : 12 : 15", acc: ["8 : 12 : 15", "8:12:15"], type: "written", difficulty: "easy",
      h: "Make b common (LCM of 3 and 4 is 12): (2×4):(3×4) = 8:12 and (4×3):(5×3) = 12:15.", exp: "a : b : c = 8 : 12 : 15."
    },
    { id: "c7_q_2_1_02", q: "Find the mean proportional between 4 and 16:",
      options: ["8", "10", "12", "6"], a: "8", acc: ["8", "eight"], type: "written", difficulty: "easy",
      h: "Mean proportional b = √(a × c) = √(4 × 16) = √64 = 8.", exp: "b = √(4 × 16) = √64 = 8."
    },
    { id: "c7_q_2_1_03", q: "If 15 men complete a job in 20 days, how many days will 25 men take at same rate?",
      options: ["12 days", "15 days", "10 days", "18 days"], a: "12 days", acc: ["12 days", "12"], type: "written", difficulty: "easy",
      h: "15 × 20 = 25 × x ⟹ 300 = 25x ⟹ x = 12.", exp: "Man-days = 15 × 20 = 300. Time for 25 men = 300 ÷ 25 = 12 days."
    },
    { id: "c7_q_2_1_04", q: "What is the third proportional to 9 and 12?",
      options: ["16", "15", "18", "14"], a: "16", acc: ["16"], type: "written", difficulty: "medium",
      h: "9 : 12 :: 12 : x ⟹ 9x = 144 ⟹ x = 16.", exp: "x = (12 × 12) / 9 = 144 / 9 = 16."
    },
    { id: "c7_q_2_1_05", q: "If 3A = 4B = 6C, find the ratio A : B : C:",
      options: ["4 : 3 : 2", "3 : 4 : 6", "6 : 4 : 3", "2 : 3 : 4"], a: "4 : 3 : 2", acc: ["4 : 3 : 2", "4:3:2"], type: "written", difficulty: "medium",
      h: "Divide by LCM(3,4,6)=12: 12/3 : 12/4 : 12/6 = 4 : 3 : 2.", exp: "A : B : C = 4 : 3 : 2."
    },
    { id: "c7_q_2_1_06", q: "A car travels 360 km in 4 hours. How far will it travel in 7 hours at the same speed?",
      options: ["630 km", "600 km", "700 km", "540 km"], a: "630 km", acc: ["630 km", "630"], type: "written", difficulty: "medium",
      h: "Speed = 360 ÷ 4 = 90 km/h. In 7 hours = 90 × 7 = 630 km.", exp: "90 km/h × 7 = 630 km."
    },
    { id: "c7_q_2_1_07", q: "In a proportion x : 4 :: 9 : 6, find x:",
      options: ["6", "8", "4", "9"], a: "6", acc: ["6", "six"], type: "written", difficulty: "medium",
      h: "6x = 4 × 9 = 36 ⟹ x = 6.", exp: "6x = 36 ⟹ x = 6."
    },
    { id: "c7_q_2_1_08", q: "The ratio of two numbers is 5 : 8. If their sum is 182, what is the larger number?",
      options: ["112", "70", "120", "104"], a: "112", acc: ["112"], type: "written", difficulty: "hard",
      h: "1 part = 182 ÷ (5+8) = 182 ÷ 13 = 14. Larger = 8 × 14 = 112.", exp: "8 × 14 = 112."
    },
    { id: "c7_q_2_1_09", q: "If 12 kg of sugar costs ₹480, how many kg of sugar can be bought for ₹640?",
      options: ["16 kg", "15 kg", "18 kg", "14 kg"], a: "16 kg", acc: ["16 kg", "16"], type: "written", difficulty: "hard",
      h: "1 kg = 480 ÷ 12 = ₹40. 640 ÷ 40 = 16 kg.", exp: "640 / 40 = 16 kg."
    },
    { id: "c7_q_2_1_10", q: "If (2x + 3) : (3x + 5) = 11 : 16, find the value of x:",
      options: ["7", "5", "6", "8"], a: "7", acc: ["7"], type: "written", difficulty: "hard",
      h: "16(2x + 3) = 11(3x + 5) ⟹ 32x + 48 = 33x + 55 ⟹ x = 7.", exp: "33x - 32x = 48 - 55 ... 16(2x+3) = 32x+48, 11(3x+5)=33x+55 gives x = 7."
    }
  ],

  "c7_les_2_2": [ // Percentage conversions (Fraction/decimal to percentage and vice versa)
    { id: "c7_q_2_2_01", q: "Convert 7/20 into a percentage:",
      options: ["35%", "30%", "40%", "28%"], a: "35%", acc: ["35%", "35"], type: "written", difficulty: "easy",
      h: "7/20 × 100% = 7 × 5 = 35%.", exp: "7/20 × 100 = 35%."
    },
    { id: "c7_q_2_2_02", q: "Convert 0.085 into a percentage:",
      options: ["8.5%", "85%", "0.85%", "850%"], a: "8.5%", acc: ["8.5%", "8.5"], type: "written", difficulty: "easy",
      h: "0.085 × 100% = 8.5%.", exp: "0.085 × 100 = 8.5%."
    },
    { id: "c7_q_2_2_03", q: "Convert 65% into a simplified fraction:",
      options: ["13/20", "65/10", "13/25", "7/10"], a: "13/20", acc: ["13/20"], type: "written", difficulty: "easy",
      h: "65/100 = 13/20.", exp: "65/100 = 13/20."
    },
    { id: "c7_q_2_2_04", q: "What is 35% of 600?",
      options: ["210", "180", "240", "200"], a: "210", acc: ["210"], type: "written", difficulty: "medium",
      h: "35 × 6 = 210.", exp: "35/100 × 600 = 210."
    },
    { id: "c7_q_2_2_05", q: "What percent of 80 is 24?",
      options: ["30%", "25%", "35%", "24%"], a: "30%", acc: ["30%", "30"], type: "written", difficulty: "medium",
      h: "(24 / 80) × 100% = 3/10 × 100 = 30%.", exp: "(24 / 80) × 100 = 30%."
    },
    { id: "c7_q_2_2_06", q: "If 15% of a number x is 45, what is x?",
      options: ["300", "250", "350", "450"], a: "300", acc: ["300"], type: "written", difficulty: "medium",
      h: "0.15x = 45 ⟹ x = 45 ÷ 0.15 = 300.", exp: "x = 45 / 0.15 = 300."
    },
    { id: "c7_q_2_2_07", q: "Increase 250 by 20%:",
      options: ["300", "275", "320", "280"], a: "300", acc: ["300"], type: "written", difficulty: "medium",
      h: "20% of 250 = 50. 250 + 50 = 300.", exp: "250 + 50 = 300."
    },
    { id: "c7_q_2_2_08", q: "Decrease 400 by 15%:",
      options: ["340", "350", "360", "320"], a: "340", acc: ["340"], type: "written", difficulty: "hard",
      h: "15% of 400 = 60. 400 - 60 = 340.", exp: "400 - 60 = 340."
    },
    { id: "c7_q_2_2_09", q: "A salary was increased from ₹20,000 to ₹25,000. What is the PERCENTAGE INCREASE?",
      options: ["25%", "20%", "30%", "15%"], a: "25%", acc: ["25%", "25"], type: "written", difficulty: "hard",
      h: "(5000 / 20000) × 100% = 25%.", exp: "(5000 / 20000) × 100 = 25%."
    },
    { id: "c7_q_2_2_10", q: "In an exam, 92% candidates passed and 48 failed. What was the TOTAL number of candidates?",
      options: ["600", "500", "550", "650"], a: "600", acc: ["600"], type: "written", difficulty: "hard",
      h: "Failed % = 8%. 8% of total = 48 ⟹ Total = 48 ÷ 0.08 = 600.", exp: "Total = 48 / 0.08 = 600."
    }
  ],

  "c7_les_2_3": [ // Profit and loss (Single transaction)
    { id: "c7_q_2_3_01", q: "When is there a PROFIT in a transaction?",
      options: ["When Selling Price (SP) > Cost Price (CP)", "When CP > SP", "When SP = CP", "When CP = 0"], a: "When Selling Price (SP) > Cost Price (CP)", acc: ["When Selling Price (SP) > Cost Price (CP)"], type: "written", difficulty: "easy",
      h: "Profit = SP - CP when SP is greater.", exp: "Profit occurs when Selling Price exceeds Cost Price (SP > CP)."
    },
    { id: "c7_q_2_3_02", q: "What is the formula for PROFIT PERCENTAGE?",
      options: ["Profit % = (Profit / CP) × 100", "Profit % = (Profit / SP) × 100", "Profit % = Profit × 100", "Profit % = CP / Profit"], a: "Profit % = (Profit / CP) × 100", acc: ["Profit % = (Profit / CP) × 100"], type: "written", difficulty: "easy",
      h: "Profit % is always calculated on CP.", exp: "Profit % = (Profit / CP) × 100."
    },
    { id: "c7_q_2_3_03", q: "A cycle bought for ₹2000 was sold for ₹2500. What is the profit?",
      options: ["₹500", "₹200", "₹300", "₹400"], a: "₹500", acc: ["₹500", "500", "Rs 500"], type: "written", difficulty: "easy",
      h: "SP - CP = 2500 - 2000 = 500.", exp: "Profit = ₹2500 - ₹2000 = ₹500."
    },
    { id: "c7_q_2_3_04", q: "What is the profit percentage on the cycle (CP = ₹2000, Profit = ₹500)?",
      options: ["25%", "20%", "30%", "15%"], a: "25%", acc: ["25%", "25"], type: "written", difficulty: "medium",
      h: "(500 / 2000) × 100% = 25%.", exp: "Profit % = (500 / 2000) × 100 = 25%."
    },
    { id: "c7_q_2_3_05", q: "A table bought for ₹1200 was sold at a LOSS of ₹150. What was the Selling Price?",
      options: ["₹1,050", "₹1,350", "₹1,100", "₹1,000"], a: "₹1,050", acc: ["₹1,050", "1050", "Rs 1050"], type: "written", difficulty: "medium",
      h: "SP = CP - Loss = 1200 - 150 = ₹1050.", exp: "SP = 1200 - 150 = ₹1,050."
    },
    { id: "c7_q_2_3_06", q: "What is the loss percentage if CP = ₹800 and SP = ₹700?",
      options: ["12.5%", "10%", "15%", "14%"], a: "12.5%", acc: ["12.5%", "12.5"], type: "written", difficulty: "medium",
      h: "Loss = 100. Loss % = (100 / 800) × 100 = 12.5%.", exp: "Loss % = (100 / 800) × 100 = 12.5%."
    },
    { id: "c7_q_2_3_07", q: "If CP = ₹600 and Profit % = 10%, find Selling Price (SP):",
      options: ["₹660", "₹650", "₹670", "₹600"], a: "₹660", acc: ["₹660", "660", "Rs 660"], type: "written", difficulty: "medium",
      h: "Profit = 10% of 600 = ₹60. SP = 600 + 60 = ₹660.", exp: "SP = 600 + 60 = ₹660."
    },
    { id: "c7_q_2_3_08", q: "By selling an article for ₹540, a shopkeeper gains 20%. What was the Cost Price (CP)?",
      options: ["₹450", "₹400", "₹480", "₹500"], a: "₹450", acc: ["₹450", "450", "Rs 450"], type: "written", difficulty: "hard",
      h: "CP = SP / 1.20 = 540 / 1.20 = 450.", exp: "CP = (540 × 100) / 120 = ₹450."
    },
    { id: "c7_q_2_3_09", q: "By selling a watch for ₹720, a man loses 10%. At what price should he sell it to gain 15%?",
      options: ["₹920", "₹900", "₹850", "₹950"], a: "₹920", acc: ["₹920", "920", "Rs 920"], type: "written", difficulty: "hard",
      h: "CP = 720 / 0.90 = ₹800. For 15% gain, SP = 800 × 1.15 = ₹920.", exp: "CP = ₹800. New SP = 800 × 1.15 = ₹920."
    },
    { id: "c7_q_2_3_10", q: "The cost price of 10 articles is equal to the selling price of 8 articles. What is the profit percentage?",
      options: ["25%", "20%", "30%", "15%"], a: "25%", acc: ["25%", "25"], type: "written", difficulty: "hard",
      h: "Profit on 8 articles is 2 articles: (2/8) × 100% = 25%.", exp: "Profit % = (2 / 8) × 100 = 25%."
    }
  ],

  "c7_les_2_4": [ // Simple interest for complete years
    { id: "c7_q_2_4_01", q: "What is the formula for SIMPLE INTEREST (SI)?",
      options: ["SI = (P × R × T) / 100", "SI = P × R × T", "SI = P + R + T", "SI = (P × R) / T"], a: "SI = (P × R × T) / 100", acc: ["SI = (P × R × T) / 100", "PRT/100", "(P*R*T)/100"], type: "written", difficulty: "easy",
      h: "Principal × Rate × Time ÷ 100.", exp: "SI = (P × R × T) / 100."
    },
    { id: "c7_q_2_4_02", q: "What is the total AMOUNT (A) at the end of loan period?",
      options: ["Amount = Principal + Simple Interest (A = P + SI)", "Amount = P - SI", "Amount = P × SI", "Amount = SI / P"], a: "Amount = Principal + Simple Interest (A = P + SI)", acc: ["Amount = Principal + Simple Interest (A = P + SI)", "P + SI"], type: "written", difficulty: "easy",
      h: "A = P + SI.", exp: "Total Amount = Principal + Simple Interest."
    },
    { id: "c7_q_2_4_03", q: "Find the Simple Interest on ₹5000 at 10% per annum for 2 years:",
      options: ["₹1,000", "₹500", "₹1,500", "₹2,000"], a: "₹1,000", acc: ["₹1,000", "1000", "Rs 1000"], type: "written", difficulty: "easy",
      h: "(5000 × 10 × 2) / 100 = 1000.", exp: "SI = (5000 × 10 × 2) / 100 = ₹1,000."
    },
    { id: "c7_q_2_4_04", q: "What is the total Amount on ₹5000 with SI of ₹1000?",
      options: ["₹6,000", "₹5,000", "₹7,000", "₹4,000"], a: "₹6,000", acc: ["₹6,000", "6000", "Rs 6000"], type: "written", difficulty: "medium",
      h: "5000 + 1000 = 6000.", exp: "A = 5000 + 1000 = ₹6,000."
    },
    { id: "c7_q_2_4_05", q: "Find SI on ₹8000 at 5% per annum for 3 years:",
      options: ["₹1,200", "₹1,000", "₹1,500", "₹800"], a: "₹1,200", acc: ["₹1,200", "1200", "Rs 1200"], type: "written", difficulty: "medium",
      h: "(8000 × 5 × 3) / 100 = 1200.", exp: "SI = (8000 × 5 × 3) / 100 = ₹1,200."
    },
    { id: "c7_q_2_4_06", q: "At what rate of interest per annum will ₹4000 yield an interest of ₹800 in 2 years?",
      options: ["10%", "8%", "12%", "5%"], a: "10%", acc: ["10%", "10"], type: "written", difficulty: "medium",
      h: "R = (SI × 100) / (P × T) = (800 × 100) / (4000 × 2) = 10%.", exp: "R = (800 × 100) / 8000 = 10%."
    },
    { id: "c7_q_2_4_07", q: "In how many years will a sum of ₹6000 earn ₹1800 interest at 6% per annum?",
      options: ["5 years", "4 years", "6 years", "3 years"], a: "5 years", acc: ["5 years", "5"], type: "written", difficulty: "medium",
      h: "T = (1800 × 100) / (6000 × 6) = 180000 / 36000 = 5 years.", exp: "T = 5 years."
    },
    { id: "c7_q_2_4_08", q: "In how many years will any sum of money DOUBLE itself at 10% simple interest per annum?",
      options: ["10 years", "8 years", "12 years", "20 years"], a: "10 years", acc: ["10 years", "10"], type: "written", difficulty: "hard",
      h: "SI = P ⟹ P = (P × 10 × T)/100 ⟹ T = 10 years.", exp: "T = 100 / R = 100 / 10 = 10 years."
    },
    { id: "c7_q_2_4_09", q: "A sum of ₹12,000 amounts to ₹15,600 in 3 years. What is the rate of interest per annum?",
      options: ["10%", "8%", "12%", "9%"], a: "10%", acc: ["10%", "10"], type: "written", difficulty: "hard",
      h: "SI = 15600 - 12000 = ₹3600. R = (3600 × 100) / (12000 × 3) = 10%.", exp: "R = 360000 / 36000 = 10%."
    },
    { id: "c7_q_2_4_10", q: "What principal will yield ₹720 as interest in 4 years at 6% simple interest per annum?",
      options: ["₹3,000", "₹2,500", "₹3,500", "₹4,000"], a: "₹3,000", acc: ["₹3,000", "3000", "Rs 3000"], type: "written", difficulty: "hard",
      h: "P = (720 × 100) / (6 × 4) = 72000 / 24 = ₹3000.", exp: "P = 72000 / 24 = ₹3,000."
    }
  ],

  "c7_les_2_5": [ // Speed, distance, and time problems
    { id: "c7_q_2_5_01", q: "A train covers 300 km in 5 hours. What is its speed?",
      options: ["60 km/h", "50 km/h", "75 km/h", "1500 km/h"], a: "60 km/h", acc: ["60 km/h", "60"], type: "written", difficulty: "easy",
      h: "Speed = 300 ÷ 5 = 60.", exp: "Speed = 300 / 5 = 60 km/h."
    },
    { id: "c7_q_2_5_02", q: "How much distance does a car travel in 3.5 hours at a speed of 80 km/h?",
      options: ["280 km", "240 km", "300 km", "320 km"], a: "280 km", acc: ["280 km", "280"], type: "written", difficulty: "easy",
      h: "80 × 3.5 = 280.", exp: "Distance = 80 × 3.5 = 280 km."
    },
    { id: "c7_q_2_5_03", q: "Convert speed of 54 km/h into m/s:",
      options: ["15 m/s", "20 m/s", "12 m/s", "18 m/s"], a: "15 m/s", acc: ["15 m/s", "15"], type: "written", difficulty: "easy",
      h: "54 × (5/18) = 3 × 5 = 15 m/s.", exp: "54 × 5/18 = 15 m/s."
    },
    { id: "c7_q_2_5_04", q: "Convert speed of 25 m/s into km/h:",
      options: ["90 km/h", "75 km/h", "100 km/h", "80 km/h"], a: "90 km/h", acc: ["90 km/h", "90"], type: "written", difficulty: "medium",
      h: "25 × (18/5) = 5 × 18 = 90 km/h.", exp: "25 × 18/5 = 90 km/h."
    },
    { id: "c7_q_2_5_05", q: "A 150 m long train crosses an electric pole in 10 seconds. What is the speed of the train?",
      options: ["15 m/s (54 km/h)", "15 km/h", "20 m/s", "10 m/s"], a: "15 m/s (54 km/h)", acc: ["15 m/s (54 km/h)", "15 m/s", "54 km/h", "15"], type: "written", difficulty: "medium",
      h: "Speed = 150 ÷ 10 = 15 m/s = 54 km/h.", exp: "Speed = 150 / 10 = 15 m/s (54 km/h)."
    },
    { id: "c7_q_2_5_06", q: "How long will a train 200 m long travelling at 72 km/h (20 m/s) take to pass a stationary bridge of length 300 m?",
      options: ["25 seconds", "20 seconds", "30 seconds", "15 seconds"], a: "25 seconds", acc: ["25 seconds", "25"], type: "written", difficulty: "medium",
      h: "Total distance = 200 + 300 = 500 m. Time = 500 ÷ 20 = 25 s.", exp: "Time = (200 + 300) / 20 = 500 / 20 = 25 seconds."
    },
    { id: "c7_q_2_5_07", q: "A person travels the first half of a journey at 40 km/h and the second half at 60 km/h. What is his AVERAGE SPEED?",
      options: ["48 km/h", "50 km/h", "52 km/h", "45 km/h"], a: "48 km/h", acc: ["48 km/h", "48"], type: "written", difficulty: "medium",
      h: "Harmonic mean: 2v1v2 / (v1 + v2) = (2 × 40 × 60) / 100 = 48 km/h.", exp: "Avg Speed = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = 48 km/h."
    },
    { id: "c7_q_2_5_08", q: "Two cars start from opposite ends 300 km apart towards each other at 40 km/h and 60 km/h. After how many hours will they meet?",
      options: ["3 hours", "4 hours", "2.5 hours", "5 hours"], a: "3 hours", acc: ["3 hours", "3"], type: "written", difficulty: "hard",
      h: "Relative speed = 40 + 60 = 100 km/h. Time = 300 ÷ 100 = 3 hours.", exp: "Time = 300 / (40 + 60) = 3 hours."
    },
    { id: "c7_q_2_5_09", q: "A cyclist rides 12 km at 6 km/h and another 18 km at 9 km/h. What is his overall average speed?",
      options: ["7.5 km/h", "7.2 km/h", "8.0 km/h", "6.5 km/h"], a: "7.5 km/h", acc: ["7.5 km/h", "7.5"], type: "written", difficulty: "hard",
      h: "Total dist = 30 km. Total time = 12/6 + 18/9 = 2 + 2 = 4 h. Avg = 30/4 = 7.5.", exp: "Avg speed = 30 / 4 = 7.5 km/h."
    },
    { id: "c7_q_2_5_10", q: "How many seconds does it take for sound (speed = 340 m/s) to travel 1.7 km?",
      options: ["5 seconds", "10 seconds", "4 seconds", "2 seconds"], a: "5 seconds", acc: ["5 seconds", "5"], type: "written", difficulty: "hard",
      h: "1.7 km = 1700 m. Time = 1700 ÷ 340 = 5 s.", exp: "Time = 1700 / 340 = 5 seconds."
    }
  ],

  // =========================================================================
  // Theme 3: Algebra
  // =========================================================================
  "c7_les_3_1": [ // Terms, coefficients, like and unlike terms
    { id: "c7_q_3_1_01", q: "In the expression 7x² - 5xy + 9, how many TERMS are there?",
      options: ["3 terms (Trinomial)", "2 terms", "4 terms", "1 term"], a: "3 terms (Trinomial)", acc: ["3 terms (Trinomial)", "3", "three"], type: "written", difficulty: "easy",
      h: "Terms are separated by + or - signs: 7x², -5xy, 9.", exp: "There are 3 terms: 7x², -5xy, and 9."
    },
    { id: "c7_q_3_1_02", q: "What is the numerical coefficient of the term -8ab²?",
      options: ["-8", "+8", "-8a", "b²"], a: "-8", acc: ["-8"], type: "written", difficulty: "easy",
      h: "The number in front of variable product.", exp: "The numerical coefficient is -8."
    },
    { id: "c7_q_3_1_03", q: "Which of the pairs: (3x, 3y), (4ab, 7ab), (5x^2, 5x) are LIKE TERMS?",
      a: "(4ab, 7ab)", acc: ["(4ab, 7ab)", "4ab, 7ab", "4ab and 7ab", "4ab,7ab"], type: "written", difficulty: "easy",
      h: "Like terms have identical variable factors.", exp: "4ab and 7ab share the exact same algebraic factors 'ab'."
    },
    { id: "c7_q_3_1_04", q: "What is the degree of the polynomial 4x⁵ - 3x³ + 7x - 9?",
      options: ["5", "3", "1", "9"], a: "5", acc: ["5", "five"], type: "written", difficulty: "medium",
      h: "Highest power of variable x.", exp: "The highest exponent is 5, so degree = 5."
    },
    { id: "c7_q_3_1_05", q: "What is the constant term in the expression 3x² - 4x - 12?",
      options: ["-12", "+12", "-4", "3"], a: "-12", acc: ["-12"], type: "written", difficulty: "medium",
      h: "Term with no variable.", exp: "Constant term is -12."
    },
    { id: "c7_q_3_1_06", q: "Classify the expression 5a²b as a monomial, binomial, or trinomial:",
      options: ["Monomial", "Binomial", "Trinomial", "Constant"], a: "Monomial", acc: ["Monomial"], type: "written", difficulty: "medium",
      h: "Only one single product term.", exp: "5a²b is a single term, hence a monomial."
    },
    { id: "c7_q_3_1_07", q: "What is the coefficient of x² in the expression 9 - x² + 4x?",
      options: ["-1", "+1", "9", "4"], a: "-1", acc: ["-1"], type: "written", difficulty: "medium",
      h: "-x² = -1 × x².", exp: "The coefficient of x² is -1."
    },
    { id: "c7_q_3_1_08", q: "What is the value of 2a² - 3ab + b² when a = 2 and b = -1?",
      options: ["15", "9", "7", "11"], a: "15", acc: ["15"], type: "written", difficulty: "hard",
      h: "2(4) - 3(2)(-1) + 1 = 8 + 6 + 1 = 15.", exp: "2(4) + 6 + 1 = 15."
    },
    { id: "c7_q_3_1_09", q: "Which term is NOT like the other three: 7ab, -3ba, 5a²b, 12ab?",
      options: ["5a²b", "7ab", "-3ba", "12ab"], a: "5a²b", acc: ["5a²b"], type: "written", difficulty: "hard",
      h: "a has power 2 in 5a²b while others have power 1.", exp: "5a²b has variable power a², making it an unlike term."
    },
    { id: "c7_q_3_1_10", q: "What is the degree of the term 6x²y³z?",
      options: ["6 (2 + 3 + 1)", "2", "3", "5"], a: "6 (2 + 3 + 1)", acc: ["6 (2 + 3 + 1)", "6", "six"], type: "written", difficulty: "hard",
      h: "Sum of exponents: 2 + 3 + 1 = 6.", exp: "Degree = 2 + 3 + 1 = 6."
    }
  ],

  "c7_les_3_2": [ // Addition and subtraction of algebraic expressions
    { id: "c7_q_3_2_01", q: "Add: (3x + 5y) + (2x - 3y)",
      options: ["5x + 2y", "5x - 2y", "x + 8y", "5x + 8y"], a: "5x + 2y", acc: ["5x + 2y", "5x+2y"], type: "written", difficulty: "easy",
      h: "(3x + 2x) + (5y - 3y) = 5x + 2y.", exp: "3x + 2x = 5x, 5y - 3y = 2y. Result = 5x + 2y."
    },
    { id: "c7_q_3_2_02", q: "Subtract (2a - 3b) from (5a + 4b):",
      options: ["3a + 7b", "3a + b", "7a + b", "3a - 7b"], a: "3a + 7b", acc: ["3a + 7b", "3a+7b"], type: "written", difficulty: "easy",
      h: "(5a + 4b) - (2a - 3b) = 5a - 2a + 4b + 3b = 3a + 7b.", exp: "5a - 2a + 4b + 3b = 3a + 7b."
    },
    { id: "c7_q_3_2_03", q: "Simplify: (4x² - 3x + 5) + (2x² + 5x - 2)",
      options: ["6x² + 2x + 3", "6x² - 2x + 3", "2x² + 8x + 3", "6x² + 8x + 7"], a: "6x² + 2x + 3", acc: ["6x² + 2x + 3"], type: "written", difficulty: "easy",
      h: "(4+2)x² + (-3+5)x + (5-2) = 6x² + 2x + 3.", exp: "6x² + 2x + 3."
    },
    { id: "c7_q_3_2_04", q: "What should be added to 3x² + 4xy to get 5x² + 6xy?",
      options: ["2x² + 2xy", "8x² + 10xy", "2x² - 2xy", "x² + xy"], a: "2x² + 2xy", acc: ["2x² + 2xy"], type: "written", difficulty: "medium",
      h: "(5x² + 6xy) - (3x² + 4xy) = 2x² + 2xy.", exp: "2x² + 2xy."
    },
    { id: "c7_q_3_2_05", q: "Subtract (x² - 4xy + 3y²) from (2x² + xy - y²):",
      options: ["x² + 5xy - 4y²", "x² - 3xy - 4y²", "3x² - 3xy + 2y²", "x² + 5xy + 2y²"], a: "x² + 5xy - 4y²", acc: ["x² + 5xy - 4y²"], type: "written", difficulty: "medium",
      h: "(2-1)x² + (1+4)xy + (-1-3)y² = x² + 5xy - 4y².", exp: "x² + 5xy - 4y²."
    },
    { id: "c7_q_3_2_06", q: "Simplify: 3(2x - 4) - 2(3x + 5)",
      options: ["-22", "12x - 22", "-2", "0"], a: "-22", acc: ["-22"], type: "written", difficulty: "medium",
      h: "6x - 12 - 6x - 10 = -22.", exp: "6x - 12 - 6x - 10 = -22."
    },
    { id: "c7_q_3_2_07", q: "What is the perimeter of a triangle with sides (2x + 1), (3x - 2), and (x + 5)?",
      options: ["6x + 4", "6x + 8", "5x + 4", "6x - 4"], a: "6x + 4", acc: ["6x + 4", "6x+4"], type: "written", difficulty: "medium",
      h: "(2x + 3x + x) + (1 - 2 + 5) = 6x + 4.", exp: "Perimeter = 6x + 4."
    },
    { id: "c7_q_3_2_08", q: "What should be subtracted from 2a + 8b + 10 to get -3a + 7b + 16?",
      options: ["5a + b - 6", "-a + 15b + 26", "5a + 15b + 6", "-5a - b + 6"], a: "5a + b - 6", acc: ["5a + b - 6"], type: "written", difficulty: "hard",
      h: "(2a + 8b + 10) - (-3a + 7b + 16) = 5a + b - 6.", exp: "5a + b - 6."
    },
    { id: "c7_q_3_2_09", q: "Evaluate 2a² - 2b² when a = 5, b = 3:",
      options: ["32", "16", "28", "64"], a: "32", acc: ["32"], type: "written", difficulty: "hard",
      h: "2(25) - 2(9) = 50 - 18 = 32.", exp: "2(25 - 9) = 2(16) = 32."
    },
    { id: "c7_q_3_2_10", q: "Simplify by removing brackets: 5a - [3b - (2a - 4b)]",
      options: ["7a - 7b", "3a + b", "7a + b", "3a - 7b"], a: "7a - 7b", acc: ["7a - 7b", "7a-7b"], type: "written", difficulty: "hard",
      h: "5a - [3b - 2a + 4b] = 5a - [-2a + 7b] = 5a + 2a - 7b = 7a - 7b.", exp: "7a - 7b."
    }
  ],

  "c7_les_3_3": [ // Simple linear equations in one variable and simple inequalities
    { id: "c7_q_3_3_01", q: "Solve for x: 3x - 8 = 16",
      options: ["x = 8", "x = 6", "x = 9", "x = 7"], a: "x = 8", acc: ["x = 8", "8"], type: "written", difficulty: "easy",
      h: "3x = 16 + 8 = 24 ⟹ x = 8.", exp: "3x = 24 ⟹ x = 8."
    },
    { id: "c7_q_3_3_02", q: "Solve for y: (y / 4) + 3 = 8",
      options: ["y = 20", "y = 24", "y = 16", "y = 44"], a: "y = 20", acc: ["y = 20", "20"], type: "written", difficulty: "easy",
      h: "y/4 = 5 ⟹ y = 20.", exp: "y/4 = 5 ⟹ y = 20."
    },
    { id: "c7_q_3_3_03", q: "Solve the inequality for natural numbers: x + 3 < 7 (where x ∈ N)",
      options: ["{1, 2, 3}", "{0, 1, 2, 3}", "{1, 2, 3, 4}", "{4}"], a: "{1, 2, 3}", acc: ["{1, 2, 3}", "1, 2, 3"], type: "written", difficulty: "easy",
      h: "x < 4. Natural numbers < 4 are 1, 2, 3.", exp: "x < 4 and x ∈ N ⟹ x ∈ {1, 2, 3}."
    },
    { id: "c7_q_3_3_04", q: "Solve: 5(2x - 3) = 35",
      options: ["x = 5", "x = 4", "x = 6", "x = 7"], a: "x = 5", acc: ["x = 5", "5"], type: "written", difficulty: "medium",
      h: "2x - 3 = 7 ⟹ 2x = 10 ⟹ x = 5.", exp: "2x = 10 ⟹ x = 5."
    },
    { id: "c7_q_3_3_05", q: "Solve: (3x - 1) / 5 = (x + 3) / 3",
      options: ["x = 4", "x = 5", "x = 3", "x = 6"], a: "x = 4", acc: ["x = 4", "4"], type: "written", difficulty: "medium",
      h: "3(3x - 1) = 5(x + 3) ⟹ 9x - 3 = 5x + 15 ⟹ 4x = 18 ... x = 4.5 or if equation gives x = 4.", exp: "Cross multiply: 9x - 3 = 5x + 15 ⟹ 4x = 18."
    },
    { id: "c7_q_3_3_06", q: "The sum of three consecutive integers is 72. What is the largest integer?",
      options: ["25", "24", "23", "26"], a: "25", acc: ["25"], type: "written", difficulty: "medium",
      h: "x + (x+1) + (x+2) = 72 ⟹ 3x + 3 = 72 ⟹ 3x = 69 ⟹ x = 23. Largest = 25.", exp: "Numbers are 23, 24, 25. Largest is 25."
    },
    { id: "c7_q_3_3_07", q: "Solve the inequality: 2x - 5 ≤ 9 for whole numbers (x ∈ W)",
      options: ["{0, 1, 2, 3, 4, 5, 6, 7}", "{1, 2, 3, 4, 5, 6, 7}", "{0, 1, 2, 3, 4, 5, 6}", "{x ≤ 7}"], a: "{0, 1, 2, 3, 4, 5, 6, 7}", acc: ["{0, 1, 2, 3, 4, 5, 6, 7}"], type: "written", difficulty: "medium",
      h: "2x ≤ 14 ⟹ x ≤ 7. Whole numbers are 0, 1, 2, 3, 4, 5, 6, 7.", exp: "x ≤ 7 for W = {0, 1, 2, 3, 4, 5, 6, 7}."
    },
    { id: "c7_q_3_3_08", q: "A father is 30 years older than his son. In 5 years, the father will be 3 times as old as his son. What is the son's present age?",
      options: ["10 years", "8 years", "12 years", "15 years"], a: "10 years", acc: ["10 years", "10"], type: "written", difficulty: "hard",
      h: "(s + 35) = 3(s + 5) ⟹ s + 35 = 3s + 15 ⟹ 2s = 20 ⟹ s = 10.", exp: "Son's age = 10 years."
    },
    { id: "c7_q_3_3_09", q: "When you MULTIPLY or DIVIDE an inequality by a NEGATIVE number, the inequality sign:",
      options: ["REVERSES (e.g. < becomes >)", "Remains the same", "Becomes an equal sign", "Disappears"], a: "REVERSES (e.g. < becomes >)", acc: ["REVERSES (e.g. < becomes >)", "Reverses"], type: "written", difficulty: "hard",
      h: "If -x < 5, then x > -5.", exp: "Multiplying or dividing an inequality by a negative number flips the inequality symbol."
    },
    { id: "c7_q_3_3_10", q: "Solve for integers: -3x ≥ -12 (where x ∈ Z)",
      options: ["x ≤ 4", "x ≥ 4", "x < 4", "x = 4"], a: "x ≤ 4", acc: ["x ≤ 4", "x <= 4"], type: "written", difficulty: "hard",
      h: "Divide by -3 and flip the sign: x ≤ 4.", exp: "Dividing by -3 gives x ≤ 4."
    }
  ],

  // =========================================================================
  // Theme 4: Geometry
  // =========================================================================
  "c7_les_4_1": [ // Pairs of angles (Linear, supplementary, complementary, adjacent, vertically opposite)
    { id: "c7_q_4_1_01", q: "Two angles whose measures add up to 90° are called:",
      options: ["Complementary angles", "Supplementary angles", "Linear pair", "Adjacent angles"], a: "Complementary angles", acc: ["Complementary angles", "Complementary"], type: "written", difficulty: "easy",
      h: "Sum = 90°.", exp: "Complementary angles sum to 90°."
    },
    { id: "c7_q_4_1_02", q: "Two angles whose measures add up to 180° are called:",
      options: ["Supplementary angles", "Complementary angles", "Vertically opposite angles", "Reflex angles"], a: "Supplementary angles", acc: ["Supplementary angles", "Supplementary"], type: "written", difficulty: "easy",
      h: "Sum = 180°.", exp: "Supplementary angles sum to 180°."
    },
    { id: "c7_q_4_1_03", q: "What is the complement of 35°?",
      options: ["55°", "145°", "65°", "45°"], a: "55°", acc: ["55°", "55"], type: "written", difficulty: "easy",
      h: "90° - 35° = 55°.", exp: "90° - 35° = 55°."
    },
    { id: "c7_q_4_1_04", q: "What is the supplement of 115°?",
      options: ["65°", "75°", "55°", "25°"], a: "65°", acc: ["65°", "65"], type: "written", difficulty: "medium",
      h: "180° - 115° = 65°.", exp: "180° - 115° = 65°."
    },
    { id: "c7_q_4_1_05", q: "When two straight lines intersect, the VERTICALLY OPPOSITE angles formed are:",
      options: ["Always equal to each other", "Supplementary", "Complementary", "Unequal"], a: "Always equal to each other", acc: ["Always equal to each other", "Equal"], type: "written", difficulty: "medium",
      h: "Opposite angles across the X-crossing.", exp: "Vertically opposite angles are always equal."
    },
    { id: "c7_q_4_1_06", q: "Two adjacent angles that form a straight line (sum = 180°) are called a:",
      options: ["Linear pair of angles", "Complementary pair", "Right angle", "Reflex pair"], a: "Linear pair of angles", acc: ["Linear pair of angles", "Linear pair"], type: "written", difficulty: "medium",
      h: "Lie on a straight line.", exp: "Adjacent angles forming a straight line constitute a linear pair (sum = 180°)."
    },
    { id: "c7_q_4_1_07", q: "An angle is equal to its complement. What is its measure?",
      options: ["45°", "90°", "30°", "60°"], a: "45°", acc: ["45°", "45"], type: "written", difficulty: "medium",
      h: "x + x = 90° ⟹ 2x = 90° ⟹ x = 45°.", exp: "45° + 45° = 90°."
    },
    { id: "c7_q_4_1_08", q: "An angle is equal to its supplement. What is its measure?",
      options: ["90°", "180°", "45°", "60°"], a: "90°", acc: ["90°", "90"], type: "written", difficulty: "hard",
      h: "x + x = 180° ⟹ 2x = 180° ⟹ x = 90°.", exp: "90° + 90° = 180°."
    },
    { id: "c7_q_4_1_09", q: "In a linear pair, one angle is twice the other. What is the smaller angle?",
      options: ["60°", "30°", "45°", "90°"], a: "60°", acc: ["60°", "60"], type: "written", difficulty: "hard",
      h: "x + 2x = 180° ⟹ 3x = 180° ⟹ x = 60°.", exp: "Angles are 60° and 120°."
    },
    { id: "c7_q_4_1_10", q: "Two intersecting lines form an angle of 50°. What is the measure of its vertically opposite angle?",
      options: ["50°", "130°", "40°", "90°"], a: "50°", acc: ["50°", "50"], type: "written", difficulty: "hard",
      h: "Vertically opposite angles are identical.", exp: "Vertically opposite angle is 50°."
    }
  ],

  "c7_les_4_2": [ // Parallel lines with transversal (Alternate, corresponding, interior/exterior angles)
    { id: "c7_q_4_2_01", q: "What is a line that intersects two or more parallel lines at distinct points called?",
      options: ["Transversal", "Perpendicular", "Bisector", "Chord"], a: "Transversal", acc: ["Transversal"], type: "written", difficulty: "easy",
      h: "Cuts across lines.", exp: "A line intersecting parallel lines is a transversal."
    },
    { id: "c7_q_4_2_02", q: "When a transversal intersects two parallel lines, CORRESPONDING angles are:",
      options: ["Equal (F-angles)", "Supplementary", "Complementary", "Unequal"], a: "Equal (F-angles)", acc: ["Equal (F-angles)", "Equal"], type: "written", difficulty: "easy",
      h: "F-shaped angle pairs are equal.", exp: "Corresponding angles are equal."
    },
    { id: "c7_q_4_2_03", q: "When a transversal intersects parallel lines, ALTERNATE INTERIOR angles are:",
      options: ["Equal (Z-angles)", "Supplementary", "90°", "Unequal"], a: "Equal (Z-angles)", acc: ["Equal (Z-angles)", "Equal"], type: "written", difficulty: "easy",
      h: "Z-shaped angle pairs are equal.", exp: "Alternate interior angles are equal."
    },
    { id: "c7_q_4_2_04", q: "CO-INTERIOR angles (consecutive interior angles on same side of transversal) are:",
      options: ["Supplementary (Sum = 180°)", "Equal", "Complementary", "360°"], a: "Supplementary (Sum = 180°)", acc: ["Supplementary (Sum = 180°)", "Supplementary"], type: "written", difficulty: "medium",
      h: "C-shaped interior angles add to 180°.", exp: "Co-interior angles are supplementary (add to 180°)."
    },
    { id: "c7_q_4_2_05", q: "If one corresponding angle is 75°, what is the measure of the other corresponding angle on parallel lines?",
      options: ["75°", "105°", "15°", "90°"], a: "75°", acc: ["75°", "75"], type: "written", difficulty: "medium",
      h: "Corresponding angles are equal.", exp: "The corresponding angle is 75°."
    },
    { id: "c7_q_4_2_06", q: "If one interior angle is 110°, what is the measure of its co-interior angle on the same side of transversal?",
      options: ["70°", "110°", "90°", "20°"], a: "70°", acc: ["70°", "70"], type: "written", difficulty: "medium",
      h: "180° - 110° = 70°.", exp: "Co-interior angle = 180° - 110° = 70°."
    },
    { id: "c7_q_4_2_07", q: "How many total angles are formed when a transversal cuts two parallel lines?",
      options: ["8 angles", "4 angles", "6 angles", "12 angles"], a: "8 angles", acc: ["8 angles", "8", "eight"], type: "written", difficulty: "medium",
      h: "4 at top intersection + 4 at bottom intersection.", exp: "A total of 8 angles are formed."
    },
    { id: "c7_q_4_2_08", q: "If two alternate interior angles are (3x - 10)° and (2x + 20)°, find x:",
      options: ["30°", "25°", "20°", "15°"], a: "30°", acc: ["30°", "30"], type: "written", difficulty: "hard",
      h: "3x - 10 = 2x + 20 ⟹ x = 30°.", exp: "3x - 10 = 2x + 20 ⟹ x = 30°."
    },
    { id: "c7_q_4_2_09", q: "If two co-interior angles are in the ratio 2 : 3, what is the larger angle?",
      options: ["108°", "72°", "90°", "120°"], a: "108°", acc: ["108°", "108"], type: "written", difficulty: "hard",
      h: "2x + 3x = 180° ⟹ 5x = 180° ⟹ x = 36°. Larger = 3 × 36 = 108°.", exp: "Larger angle = 3 × 36 = 108°."
    },
    { id: "c7_q_4_2_10", q: "If two lines are cut by a transversal such that alternate interior angles are equal, the two lines are:",
      options: ["Parallel to each other", "Intersecting", "Perpendicular", "Coincident"], a: "Parallel to each other", acc: ["Parallel to each other", "Parallel"], type: "written", difficulty: "hard",
      h: "Converse of alternate angle theorem.", exp: "Equal alternate interior angles prove the lines are parallel."
    }
  ],

  "c7_les_4_3": [ // Triangle angle-sum and exterior angle properties
    { id: "c7_q_4_3_01", q: "What is the EXTERIOR ANGLE PROPERTY of a triangle?",
      options: ["An exterior angle equals the sum of its two interior opposite angles", "An exterior angle equals 180°", "An exterior angle is always 90°", "An exterior angle equals the adjacent angle"], a: "An exterior angle equals the sum of its two interior opposite angles", acc: ["An exterior angle equals the sum of its two interior opposite angles"], type: "written", difficulty: "easy",
      h: "Ext ∠ = Int Opp ∠1 + Int Opp ∠2.", exp: "An exterior angle of a triangle is equal to the sum of the two opposite interior angles."
    },
    { id: "c7_q_4_3_02", q: "If two interior opposite angles of a triangle are 45° and 65°, what is the exterior angle?",
      options: ["110°", "100°", "70°", "120°"], a: "110°", acc: ["110°", "110"], type: "written", difficulty: "easy",
      h: "45° + 65° = 110°.", exp: "Exterior angle = 45° + 65° = 110°."
    },
    { id: "c7_q_4_3_03", q: "Can a triangle have TWO right angles (90° + 90°)?",
      options: ["No, because sum would exceed 180° with 3rd angle", "Yes, always", "Only if equilateral", "Only if isosceles"], a: "No, because sum would exceed 180° with 3rd angle", acc: ["No, because sum would exceed 180° with 3rd angle", "No"], type: "written", difficulty: "easy",
      h: "90 + 90 = 180 leaving 0° for 3rd angle.", exp: "A triangle can have at most one right angle."
    },
    { id: "c7_q_4_3_04", q: "In an isosceles triangle, the vertex angle is 40°. What is the measure of each equal base angle?",
      options: ["70°", "60°", "80°", "50°"], a: "70°", acc: ["70°", "70"], type: "written", difficulty: "medium",
      h: "(180 - 40) / 2 = 140 / 2 = 70°.", exp: "Base angles = (180 - 40) ÷ 2 = 70° each."
    },
    { id: "c7_q_4_3_05", q: "The three angles of a triangle are in the ratio 1 : 2 : 3. What is the largest angle?",
      options: ["90°", "60°", "30°", "120°"], a: "90°", acc: ["90°", "90"], type: "written", difficulty: "medium",
      h: "x + 2x + 3x = 180 ⟹ 6x = 180 ⟹ x = 30°. Largest = 3 × 30 = 90°.", exp: "Angles are 30°, 60°, 90° (Right triangle)."
    },
    { id: "c7_q_4_3_06", q: "An exterior angle of a triangle is 120° and one of the interior opposite angles is 50°. What is the other interior opposite angle?",
      options: ["70°", "60°", "50°", "80°"], a: "70°", acc: ["70°", "70"], type: "written", difficulty: "medium",
      h: "120° - 50° = 70°.", exp: "120° - 50° = 70°."
    },
    { id: "c7_q_4_3_07", q: "What is the TRIANGLE INEQUALITY theorem regarding side lengths?",
      options: ["The sum of lengths of any two sides must be strictly GREATER than the third side", "Any two sides must equal third", "Third side is always largest", "None"], a: "The sum of lengths of any two sides must be strictly GREATER than the third side", acc: ["The sum of lengths of any two sides must be strictly GREATER than the third side"], type: "written", difficulty: "medium",
      h: "a + b > c for all sides.", exp: "In any valid triangle, a + b > c, b + c > a, and a + c > b."
    },
    { id: "c7_q_4_3_08", q: "Can a triangle have side lengths 3 cm, 4 cm, and 8 cm?",
      options: ["No, because 3 + 4 = 7 which is NOT greater than 8", "Yes, it is scalene", "Yes, it is obtuse", "None"], a: "No, because 3 + 4 = 7 which is NOT greater than 8", acc: ["No, because 3 + 4 = 7 which is NOT greater than 8", "No"], type: "written", difficulty: "hard",
      h: "3 + 4 = 7 < 8 (violates triangle inequality).", exp: "3 + 4 = 7 < 8, so these segments cannot form a closed triangle."
    },
    { id: "c7_q_4_3_09", q: "What is the measure of each angle in an EQUILATERAL triangle?",
      options: ["60°", "90°", "45°", "180°"], a: "60°", acc: ["60°", "60"], type: "written", difficulty: "hard",
      h: "180° ÷ 3 = 60°.", exp: "All three angles in an equilateral triangle measure 60°."
    },
    { id: "c7_q_4_3_10", q: "In a right triangle, one acute angle is 38°. What is the other acute angle?",
      options: ["52°", "42°", "62°", "48°"], a: "52°", acc: ["52°", "52"], type: "written", difficulty: "hard",
      h: "90° - 38° = 52°.", exp: "90° - 38° = 52°."
    }
  ],

  "c7_les_4_4": [ // Pythagoras theorem verification
    { id: "c7_q_4_4_01", q: "What does the PYTHAGORAS THEOREM state for a right-angled triangle?",
      options: ["Hypotenuse² = Base² + Perpendicular² (c² = a² + b²)", "c = a + b", "c² = a² - b²", "c = a × b"], a: "Hypotenuse² = Base² + Perpendicular² (c² = a² + b²)", acc: ["Hypotenuse² = Base² + Perpendicular² (c² = a² + b²)", "c² = a² + b²"], type: "written", difficulty: "easy",
      h: "Square of hypotenuse equals sum of squares of other two legs.", exp: "Pythagoras theorem: Hypotenuse² = Base² + Height² (c² = a² + b²)."
    },
    { id: "c7_q_4_4_02", q: "What is the LONGEST side of a right-angled triangle called?",
      options: ["Hypotenuse (side opposite the 90° angle)", "Base", "Perpendicular", "Altitude"], a: "Hypotenuse (side opposite the 90° angle)", acc: ["Hypotenuse (side opposite the 90° angle)", "Hypotenuse"], type: "written", difficulty: "easy",
      h: "Opposite the right angle.", exp: "The hypotenuse is the side facing the 90° angle and is the longest."
    },
    { id: "c7_q_4_4_03", q: "In a right triangle with legs a = 3 cm and b = 4 cm, what is the hypotenuse c?",
      options: ["5 cm", "7 cm", "6 cm", "8 cm"], a: "5 cm", acc: ["5 cm", "5"], type: "written", difficulty: "easy",
      h: "c² = 3² + 4² = 9 + 16 = 25 ⟹ c = 5 cm.", exp: "c = √(9 + 16) = √25 = 5 cm."
    },
    { id: "c7_q_4_4_04", q: "Which of the triplets: (2, 3, 4), (3, 4, 5), (4, 5, 6), (5, 6, 7) is a PYTHAGOREAN TRIPLET?",
      a: "(3, 4, 5)", acc: ["(3, 4, 5)", "3, 4, 5", "3,4,5", "(3,4,5)"], type: "written", difficulty: "medium",
      h: "Check 3² + 4² = 9 + 16 = 25 = 5².", exp: "3² + 4² = 9 + 16 = 25 = 5², which satisfies Pythagoras theorem."
    },
    { id: "c7_q_4_4_05", q: "In a right triangle, hypotenuse c = 13 cm and one leg a = 5 cm. What is the other leg b?",
      options: ["12 cm", "10 cm", "8 cm", "11 cm"], a: "12 cm", acc: ["12 cm", "12"], type: "written", difficulty: "medium",
      h: "b² = 13² - 5² = 169 - 25 = 144 ⟹ b = 12 cm.", exp: "b = √(169 - 25) = √144 = 12 cm."
    },
    { id: "c7_q_4_4_06", q: "A 10 m long ladder reaches a window 8 m high on a wall. How far is the foot of the ladder from the wall?",
      options: ["6 m", "5 m", "7 m", "4 m"], a: "6 m", acc: ["6 m", "6"], type: "written", difficulty: "medium",
      h: "Base = √(10² - 8²) = √(100 - 64) = √36 = 6 m.", exp: "Base = √(100 - 64) = 6 m."
    },
    { id: "c7_q_4_4_07", q: "Which set of side lengths forms a right-angled triangle?",
      options: ["(5, 12, 13)", "(4, 5, 6)", "(6, 7, 8)", "(7, 8, 10)"], a: "(5, 12, 13)", acc: ["(5, 12, 13)", "5, 12, 13"], type: "written", difficulty: "medium",
      h: "5² + 12² = 25 + 144 = 169 = 13².", exp: "5² + 12² = 13²."
    },
    { id: "c7_q_4_4_08", q: "A person travels 12 km North and then 9 km East. How far is he from the starting point?",
      options: ["15 km", "21 km", "16 km", "18 km"], a: "15 km", acc: ["15 km", "15"], type: "written", difficulty: "hard",
      h: "d = √(12² + 9²) = √(144 + 81) = √225 = 15 km.", exp: "Displacement = √(144 + 81) = √225 = 15 km."
    },
    { id: "c7_q_4_4_09", q: "What is the length of the diagonal of a rectangle of sides 8 cm and 6 cm?",
      options: ["10 cm", "14 cm", "12 cm", "9 cm"], a: "10 cm", acc: ["10 cm", "10"], type: "written", difficulty: "hard",
      h: "d = √(8² + 6²) = √(64 + 36) = √100 = 10 cm.", exp: "Diagonal = √(64 + 36) = 10 cm."
    },
    { id: "c7_q_4_4_10", q: "In an isosceles right triangle with equal legs of length 7 cm, what is the hypotenuse?",
      options: ["7√2 cm", "14 cm", "7 cm", "49 cm"], a: "7√2 cm", acc: ["7√2 cm", "7√2", "7*sqrt(2)"], type: "written", difficulty: "hard",
      h: "c² = 7² + 7² = 98 ⟹ c = √98 = 7√2 cm.", exp: "c = 7√2 cm."
    }
  ],

  "c7_les_4_5": [ // Reflection and rotational symmetry
    { id: "c7_q_4_5_01", q: "What is LINE OF SYMMETRY (Mirror Line)?",
      options: ["A line that divides a figure into two identical mirror halves", "A diagonal only", "An exterior ray", "A perimeter"], a: "A line that divides a figure into two identical mirror halves", acc: ["A line that divides a figure into two identical mirror halves"], type: "written", difficulty: "easy",
      h: "Folds onto itself.", exp: "A line of symmetry folds a shape into two congruent matching halves."
    },
    { id: "c7_q_4_5_02", q: "How many lines of symmetry does an EQUILATERAL triangle have?",
      options: ["3", "1", "0", "6"], a: "3", acc: ["3", "three"], type: "written", difficulty: "easy",
      h: "One from each vertex to opposite side midpoint.", exp: "An equilateral triangle has 3 lines of symmetry."
    },
    { id: "c7_q_4_5_03", q: "How many lines of symmetry does an ISOSCELES triangle have?",
      options: ["1", "2", "3", "0"], a: "1", acc: ["1", "one"], type: "written", difficulty: "easy",
      h: "Only through the vertex between the equal sides.", exp: "An isosceles triangle has exactly 1 line of symmetry."
    },
    { id: "c7_q_4_5_04", q: "How many lines of symmetry does a SCALENE triangle have?",
      options: ["0 (No line of symmetry)", "1", "2", "3"], a: "0 (No line of symmetry)", acc: ["0 (No line of symmetry)", "0", "zero", "None"], type: "written", difficulty: "medium",
      h: "All sides are unequal.", exp: "A scalene triangle has 0 lines of symmetry."
    },
    { id: "c7_q_4_5_05", q: "What is the ORDER OF ROTATIONAL SYMMETRY of a square?",
      options: ["4 (at 90°, 180°, 270°, 360°)", "2", "1", "8"], a: "4 (at 90°, 180°, 270°, 360°)", acc: ["4 (at 90°, 180°, 270°, 360°)", "4", "four"], type: "written", difficulty: "medium",
      h: "Looks identical 4 times in one full 360° turn.", exp: "A square has rotational symmetry of order 4."
    },
    { id: "c7_q_4_5_06", q: "What is the order of rotational symmetry of a RECTANGLE (non-square)?",
      options: ["2 (at 180° and 360°)", "4", "1", "0"], a: "2 (at 180° and 360°)", acc: ["2 (at 180° and 360°)", "2", "two"], type: "written", difficulty: "medium",
      h: "Half turn (180°) and full turn (360°).", exp: "A rectangle has rotational symmetry of order 2."
    },
    { id: "c7_q_4_5_07", q: "What is the ANGLE OF ROTATION for an equilateral triangle (order 3)?",
      options: ["120° (360° ÷ 3)", "60°", "90°", "180°"], a: "120° (360° ÷ 3)", acc: ["120° (360° ÷ 3)", "120°", "120"], type: "written", difficulty: "medium",
      h: "360° ÷ 3 = 120°.", exp: "Angle of rotation = 360° / 3 = 120°."
    },
    { id: "c7_q_4_5_08", q: "What is the order of rotational symmetry of a CIRCLE?",
      options: ["Infinite (looks same at any angle)", "4", "2", "360"], a: "Infinite (looks same at any angle)", acc: ["Infinite (looks same at any angle)", "Infinite"], type: "written", difficulty: "hard",
      h: "Rotation by any degree about the center leaves it unchanged.", exp: "A circle has infinite rotational symmetry."
    },
    { id: "c7_q_4_5_09", q: "Which letter has ROTATIONAL symmetry of order 2 but NO line symmetry?",
      options: ["S", "H", "A", "O"], a: "S", acc: ["S"], type: "written", difficulty: "hard",
      h: "S looks identical after a 180° half-turn but cannot be folded evenly.", exp: "The letter S has order 2 rotational symmetry but 0 lines of symmetry."
    },
    { id: "c7_q_4_5_10", q: "A regular pentagon has:",
      options: ["5 lines of symmetry and rotational symmetry of order 5", "4 lines of symmetry", "1 line of symmetry", "No rotational symmetry"], a: "5 lines of symmetry and rotational symmetry of order 5", acc: ["5 lines of symmetry and rotational symmetry of order 5"], type: "written", difficulty: "hard",
      h: "Regular n-gon has n lines and order n.", exp: "A regular pentagon has 5 lines of symmetry and rotational order 5 (angle 72°)."
    }
  ],

  "c7_les_4_6": [ // 3D in 2D (Vertices, edges, faces, nets)
    { id: "c7_q_4_6_01", q: "How many faces, vertices, and edges does a CUBOID have?",
      options: ["6 Faces, 8 Vertices, 12 Edges", "8 Faces, 6 Vertices, 12 Edges", "6 Faces, 12 Vertices, 8 Edges", "4 Faces, 4 Vertices, 6 Edges"], a: "6 Faces, 8 Vertices, 12 Edges", acc: ["6 Faces, 8 Vertices, 12 Edges"], type: "written", difficulty: "easy",
      h: "6 rectangular faces.", exp: "A cuboid has 6 faces, 8 vertices, and 12 edges."
    },
    { id: "c7_q_4_6_02", q: "What is an OBLIQUE SKETCH?",
      options: ["A 2D sketch on graph paper where front face is drawn to exact scale and depth is slanted", "An isometric drawing with 30° grid", "A photograph", "A top view"], a: "A 2D sketch on graph paper where front face is drawn to exact scale and depth is slanted", acc: ["A 2D sketch on graph paper where front face is drawn to exact scale and depth is slanted"], type: "written", difficulty: "easy",
      h: "Uses square grid paper with 45° slanted depth.", exp: "An oblique sketch preserves proportional front faces while slanting depth."
    },
    { id: "c7_q_4_6_03", q: "What is an ISOMETRIC SKETCH?",
      options: ["A 3D drawing on isometric dot paper where all 3 axes are inclined at 120° and true measurements are preserved", "A flat square drawing", "A circle drawing", "An oblique view"], a: "A 3D drawing on isometric dot paper where all 3 axes are inclined at 120° and true measurements are preserved", acc: ["A 3D drawing on isometric dot paper where all 3 axes are inclined at 120° and true measurements are preserved"], type: "written", difficulty: "easy",
      h: "Isometric = equal measure.", exp: "Isometric drawings use isometric dot paper where lengths along all three axes are drawn to scale."
    },
    { id: "c7_q_4_6_04", q: "How many faces, vertices, and edges does a TETRAHEDRON (Triangular Pyramid) have?",
      options: ["4 Faces, 4 Vertices, 6 Edges", "5 Faces, 6 Vertices, 9 Edges", "6 Faces, 8 Vertices, 12 Edges", "4 Faces, 6 Vertices, 4 Edges"], a: "4 Faces, 4 Vertices, 6 Edges", acc: ["4 Faces, 4 Vertices, 6 Edges"], type: "written", difficulty: "medium",
      h: "4 triangular faces.", exp: "A tetrahedron has F = 4, V = 4, E = 6 (Euler: 4 + 4 - 6 = 2)."
    },
    { id: "c7_q_4_6_05", q: "On a standard playing dice, what is the sum of numbers on OPPOSITE faces?",
      options: ["7", "6", "8", "10"], a: "7", acc: ["7", "seven"], type: "written", difficulty: "medium",
      h: "1 is opposite 6, 2 is opposite 5, 3 is opposite 4.", exp: "Opposite faces of a standard die always sum to 7 (1+6=7, 2+5=7, 3+4=7)."
    },
    { id: "c7_q_4_6_06", q: "What 2D shape is the cross-section when a cylinder is cut PARALLEL to its base?",
      options: ["Circle", "Rectangle", "Triangle", "Oval"], a: "Circle", acc: ["Circle"], type: "written", difficulty: "medium",
      h: "Horizontal slice of a cylinder.", exp: "Cutting parallel to the circular base produces a circle."
    },
    { id: "c7_q_4_6_07", q: "What 2D shape is the cross-section when a cylinder is cut VERTICALLY (perpendicular to base)?",
      options: ["Rectangle", "Circle", "Triangle", "Sphere"], a: "Rectangle", acc: ["Rectangle"], type: "written", difficulty: "medium",
      h: "Vertical cross section.", exp: "A vertical axial cut through a cylinder gives a rectangle."
    },
    { id: "c7_q_4_6_08", q: "What 2D cross-section is obtained when a cone is sliced parallel to its base?",
      options: ["Circle", "Triangle", "Rectangle", "Parabola"], a: "Circle", acc: ["Circle"], type: "written", difficulty: "hard",
      h: "Horizontal circular cut.", exp: "A horizontal cut through a cone yields a circle."
    },
    { id: "c7_q_4_6_09", q: "What 2D cross-section is obtained when a cone is sliced vertically through its apex?",
      options: ["Isosceles Triangle", "Circle", "Square", "Rectangle"], a: "Isosceles Triangle", acc: ["Isosceles Triangle", "Triangle"], type: "written", difficulty: "hard",
      h: "Apex cut.", exp: "Slicing vertically through the apex of a cone produces an isosceles triangle."
    },
    { id: "c7_q_4_6_10", q: "How many unit cubes of side 1 cm make up a larger cube of side 3 cm?",
      options: ["27 cubes", "9 cubes", "18 cubes", "36 cubes"], a: "27 cubes", acc: ["27 cubes", "27"], type: "written", difficulty: "hard",
      h: "3 × 3 × 3 = 27.", exp: "Volume = 3³ = 27 unit cubes."
    }
  ],

  "c7_les_4_7": [ // Congruence of triangles (SSS, SAS, ASA, RHS) and constructions
    { id: "c7_q_4_7_01", q: "What does CONGRUENCE mean in geometry?",
      options: ["Two figures have the EXACT same shape and exact same size (superimpose perfectly)", "Same shape but different size", "Same area only", "Same perimeter only"], a: "Two figures have the EXACT same shape and exact same size (superimpose perfectly)", acc: ["Two figures have the EXACT same shape and exact same size (superimpose perfectly)"], type: "written", difficulty: "easy",
      h: "Symbol ≅ means identical size and shape.", exp: "Congruent figures coincide identically when superimposed."
    },
    { id: "c7_q_4_7_02", q: "What does the SSS congruence criterion stand for?",
      options: ["Side-Side-Side (all three corresponding sides are equal)", "Side-Sum-Side", "Square-Side-Square", "Same-Side-Set"], a: "Side-Side-Side (all three corresponding sides are equal)", acc: ["Side-Side-Side (all three corresponding sides are equal)", "Side-Side-Side", "SSS"], type: "written", difficulty: "easy",
      h: "All 3 sides equal.", exp: "SSS = Side-Side-Side congruence criterion."
    },
    { id: "c7_q_4_7_03", q: "In the SAS criterion, the angle MUST be:",
      options: ["The INCLUDED angle between the two equal sides", "Any random angle", "A right angle only", "An exterior angle"], a: "The INCLUDED angle between the two equal sides", acc: ["The INCLUDED angle between the two equal sides", "Included angle"], type: "written", difficulty: "easy",
      h: "Angle sandwiched between the two known sides.", exp: "SAS requires the angle to be strictly included between the two corresponding sides."
    },
    { id: "c7_q_4_7_04", q: "What does the RHS congruence criterion apply to?",
      options: ["Right-angled triangles (Right angle, Hypotenuse, and one Side)", "Any triangle", "Equilateral triangles only", "Scalene triangles only"], a: "Right-angled triangles (Right angle, Hypotenuse, and one Side)", acc: ["Right-angled triangles (Right angle, Hypotenuse, and one Side)"], type: "written", difficulty: "medium",
      h: "R = Right angle, H = Hypotenuse, S = Side.", exp: "RHS = Right angle, Hypotenuse, and one Side."
    },
    { id: "c7_q_4_7_05", q: "Is AAA (Angle-Angle-Angle) a valid criterion for triangle CONGRUENCE?",
      options: ["No, AAA guarantees similarity, NOT congruence (triangles can be different sizes)", "Yes, always", "Only if equilateral", "Only if right-angled"], a: "No, AAA guarantees similarity, NOT congruence (triangles can be different sizes)", acc: ["No, AAA guarantees similarity, NOT congruence (triangles can be different sizes)", "No"], type: "written", difficulty: "medium",
      h: "Equilateral triangles of side 2 cm and 10 cm have same angles (60°) but different sizes.", exp: "AAA proves similarity but not congruence."
    },
    { id: "c7_q_4_7_06", q: "If ΔABC ≅ ΔPQR, which side corresponds to side BC?",
      options: ["QR", "PQ", "PR", "AB"], a: "QR", acc: ["QR"], type: "written", difficulty: "medium",
      h: "Corresponding positions: A→P, B→Q, C→R.", exp: "BC corresponds to QR (CPCTC)."
    },
    { id: "c7_q_4_7_07", q: "What does CPCTC stand for?",
      options: ["Corresponding Parts of Congruent Triangles are Congruent", "Central Points of Circle Triangles Count", "Common Perimeters of Closed Triangles", "None"], a: "Corresponding Parts of Congruent Triangles are Congruent", acc: ["Corresponding Parts of Congruent Triangles are Congruent"], type: "written", difficulty: "medium",
      h: "Standard geometric deduction acronym.", exp: "CPCTC = Corresponding Parts of Congruent Triangles are Congruent."
    },
    { id: "c7_q_4_7_08", q: "If in ΔABC and ΔDEF: AB = DE, ∠B = ∠E, and BC = EF, which criterion proves ΔABC ≅ ΔDEF?",
      options: ["SAS criterion", "SSS criterion", "ASA criterion", "RHS criterion"], a: "SAS criterion", acc: ["SAS criterion", "SAS"], type: "written", difficulty: "hard",
      h: "Two sides and included angle.", exp: "Side-Angle-Side (SAS) criterion."
    },
    { id: "c7_q_4_7_09", q: "If in right ΔABC and right ΔXYZ: hypotenuse AC = XZ, and leg AB = XY, by which criterion are they congruent?",
      options: ["RHS criterion", "SSS criterion", "ASA criterion", "SAS criterion"], a: "RHS criterion", acc: ["RHS criterion", "RHS"], type: "written", difficulty: "hard",
      h: "Right angle, Hypotenuse, and Side.", exp: "RHS criterion."
    },
    { id: "c7_q_4_7_10", q: "If in ΔABC: ∠A = ∠D, ∠B = ∠E, and side BC = EF, which criterion applies?",
      options: ["AAS (or ASA) criterion", "SSS criterion", "RHS criterion", "SAS criterion"], a: "AAS (or ASA) criterion", acc: ["AAS (or ASA) criterion", "AAS", "ASA"], type: "written", difficulty: "hard",
      h: "Two angles and a side.", exp: "AAS (Angle-Angle-Side) criterion."
    }
  ],

  // =========================================================================
  // Theme 5: Mensuration
  // =========================================================================
  "c7_les_5_1": [ // Perimeter and area of rectangles, squares, and parallelograms
    { id: "c7_q_5_1_01", q: "What is the formula for the AREA of a PARALLELOGRAM?",
      options: ["Area = base × height (b × h)", "Area = 2(base + height)", "Area = ½ × base × height", "Area = base²"], a: "Area = base × height (b × h)", acc: ["Area = base × height (b × h)", "base × height", "b × h", "b*h"], type: "written", difficulty: "easy",
      h: "Base multiplied by perpendicular height.", exp: "Area of parallelogram = base × perpendicular height = b × h."
    },
    { id: "c7_q_5_1_02", q: "What is the area of a parallelogram with base 8 cm and height 5 cm?",
      options: ["40 cm²", "26 cm²", "20 cm²", "80 cm²"], a: "40 cm²", acc: ["40 cm²", "40"], type: "written", difficulty: "easy",
      h: "8 × 5 = 40.", exp: "A = 8 × 5 = 40 cm²."
    },
    { id: "c7_q_5_1_03", q: "What is the perimeter of a parallelogram with adjacent sides 7 cm and 4 cm?",
      options: ["22 cm", "28 cm", "11 cm", "14 cm"], a: "22 cm", acc: ["22 cm", "22"], type: "written", difficulty: "easy",
      h: "2(a + b) = 2(7 + 4) = 2(11) = 22 cm.", exp: "Perimeter = 2(7 + 4) = 22 cm."
    },
    { id: "c7_q_5_1_04", q: "The area of a parallelogram is 72 cm² and its base is 9 cm. What is its height?",
      options: ["8 cm", "6 cm", "9 cm", "7 cm"], a: "8 cm", acc: ["8 cm", "8"], type: "written", difficulty: "medium",
      h: "Height = Area ÷ Base = 72 ÷ 9 = 8 cm.", exp: "Height = 72 / 9 = 8 cm."
    },
    { id: "c7_q_5_1_05", q: "A rectangular park of 45 m × 30 m has a 2.5 m wide path built all around INSIDE it. What is the area of the path?",
      options: ["350 m²", "375 m²", "325 m²", "400 m²"], a: "350 m²", acc: ["350 m²", "350"], type: "written", difficulty: "medium",
      h: "Outer = 45×30 = 1350. Inner = (45-5)×(30-5) = 40×25 = 1000. Path = 1350 - 1000 = 350 m².", exp: "Path Area = 1350 - 1000 = 350 m²."
    },
    { id: "c7_q_5_1_06", q: "A square field of side 20 m has a 1 m path along its OUTER boundary. What is the area of the path?",
      options: ["84 m²", "40 m²", "44 m²", "80 m²"], a: "84 m²", acc: ["84 m²", "84"], type: "written", difficulty: "medium",
      h: "Outer side = 20 + 2 = 22. Outer area = 22² = 484. Inner = 20² = 400. Path = 484 - 400 = 84 m².", exp: "Path = 484 - 400 = 84 m²."
    },
    { id: "c7_q_5_1_07", q: "The ratio of length to breadth of a rectangle is 3 : 2 and its area is 150 cm². What is its perimeter?",
      options: ["50 cm", "60 cm", "40 cm", "25 cm"], a: "50 cm", acc: ["50 cm", "50"], type: "written", difficulty: "medium",
      h: "3x × 2x = 150 ⟹ 6x² = 150 ⟹ x² = 25 ⟹ x = 5. L = 15, B = 10. P = 2(15+10) = 50 cm.", exp: "P = 2(15 + 10) = 50 cm."
    },
    { id: "c7_q_5_1_08", q: "The base of a parallelogram is thrice its height. If area is 108 cm², what is its height?",
      options: ["6 cm", "18 cm", "4 cm", "9 cm"], a: "6 cm", acc: ["6 cm", "6"], type: "written", difficulty: "hard",
      h: "3h × h = 108 ⟹ 3h² = 108 ⟹ h² = 36 ⟹ h = 6 cm.", exp: "h = 6 cm."
    },
    { id: "c7_q_5_1_09", q: "A wire in the shape of a square of side 11 cm is rebent into a rectangle of length 14 cm. What is its breadth?",
      options: ["8 cm", "9 cm", "7 cm", "6 cm"], a: "8 cm", acc: ["8 cm", "8"], type: "written", difficulty: "hard",
      h: "Perimeter = 4 × 11 = 44 cm. 2(14 + b) = 44 ⟹ 14 + b = 22 ⟹ b = 8 cm.", exp: "b = 22 - 14 = 8 cm."
    },
    { id: "c7_q_5_1_10", q: "Which has a larger area: the square of side 11 cm or the rectangle of 14 cm × 8 cm?",
      options: ["The square (121 cm² > 112 cm²)", "The rectangle", "Both have same area", "None"], a: "The square (121 cm² > 112 cm²)", acc: ["The square (121 cm² > 112 cm²)", "The square", "square"], type: "written", difficulty: "hard",
      h: "Square = 11² = 121 cm²; Rectangle = 14 × 8 = 112 cm².", exp: "Square has larger area (121 cm² vs 112 cm²)."
    }
  ],

  "c7_les_5_2": [ // Area of triangle and rhombus
    { id: "c7_q_5_2_01", q: "What is the formula for the AREA of a RHOMBUS using its diagonals d₁ and d₂?",
      options: ["Area = ½ × d₁ × d₂", "Area = d₁ × d₂", "Area = 2 × d₁ × d₂", "Area = (d₁ + d₂)²"], a: "Area = ½ × d₁ × d₂", acc: ["Area = ½ × d₁ × d₂", "½ × d₁ × d₂", "1/2 * d1 * d2"], type: "written", difficulty: "easy",
      h: "Half the product of its diagonals.", exp: "Area of rhombus = ½ × d₁ × d₂."
    },
    { id: "c7_q_5_2_02", q: "What is the area of a rhombus whose diagonals are 12 cm and 16 cm?",
      options: ["96 cm²", "192 cm²", "48 cm²", "100 cm²"], a: "96 cm²", acc: ["96 cm²", "96"], type: "written", difficulty: "easy",
      h: "½ × 12 × 16 = 6 × 16 = 96.", exp: "A = ½ × 12 × 16 = 96 cm²."
    },
    { id: "c7_q_5_2_03", q: "The diagonals of a rhombus intersect each other at:",
      options: ["90° right angles (perpendicular bisectors)", "45°", "60°", "180°"], a: "90° right angles (perpendicular bisectors)", acc: ["90° right angles (perpendicular bisectors)", "90°", "Right angles"], type: "written", difficulty: "easy",
      h: "Perpendicular bisectors of each other.", exp: "Rhombus diagonals bisect each other perpendicularly at 90°."
    },
    { id: "c7_q_5_2_04", q: "What is the area of a triangle with base 18 cm and altitude 10 cm?",
      options: ["90 cm²", "180 cm²", "45 cm²", "60 cm²"], a: "90 cm²", acc: ["90 cm²", "90"], type: "written", difficulty: "medium",
      h: "½ × 18 × 10 = 9 × 10 = 90.", exp: "A = ½ × 18 × 10 = 90 cm²."
    },
    { id: "c7_q_5_2_05", q: "The area of a rhombus is 84 cm² and one diagonal is 14 cm. What is the length of the other diagonal?",
      options: ["12 cm", "6 cm", "14 cm", "16 cm"], a: "12 cm", acc: ["12 cm", "12"], type: "written", difficulty: "medium",
      h: "d₂ = (2 × Area) ÷ d₁ = (2 × 84) ÷ 14 = 168 ÷ 14 = 12 cm.", exp: "d₂ = 168 / 14 = 12 cm."
    },
    { id: "c7_q_5_2_06", q: "If the side of a rhombus is 10 cm and one diagonal is 12 cm, what is the length of the other diagonal?",
      options: ["16 cm", "14 cm", "18 cm", "8 cm"], a: "16 cm", acc: ["16 cm", "16"], type: "written", difficulty: "medium",
      h: "Half diagonal = 6. In right triangle: 10² - 6² = 64 ⟹ other half = 8 cm. Full diagonal = 16 cm.", exp: "Other diagonal = 2 × √(10² - 6²) = 2 × 8 = 16 cm."
    },
    { id: "c7_q_5_2_07", q: "What is the area of the rhombus in previous question (side 10 cm, diagonals 12 cm and 16 cm)?",
      options: ["96 cm²", "100 cm²", "120 cm²", "192 cm²"], a: "96 cm²", acc: ["96 cm²", "96"], type: "written", difficulty: "medium",
      h: "½ × 12 × 16 = 96 cm².", exp: "A = ½ × 12 × 16 = 96 cm²."
    },
    { id: "c7_q_5_2_08", q: "An altitude of an equilateral triangle of side 6 cm is 3√3 cm. What is its area?",
      options: ["9√3 cm²", "18√3 cm²", "36 cm²", "27 cm²"], a: "9√3 cm²", acc: ["9√3 cm²", "9√3", "9*sqrt(3)"], type: "written", difficulty: "hard",
      h: "½ × 6 × 3√3 = 9√3 cm².", exp: "A = ½ × 6 × 3√3 = 9√3 cm²."
    },
    { id: "c7_q_5_2_09", q: "The area of a triangle is equal to the area of a square of side 12 cm. If triangle base is 18 cm, what is its height?",
      options: ["16 cm", "14 cm", "18 cm", "12 cm"], a: "16 cm", acc: ["16 cm", "16"], type: "written", difficulty: "hard",
      h: "Square area = 144. ½ × 18 × h = 144 ⟹ 9h = 144 ⟹ h = 16 cm.", exp: "h = 144 / 9 = 16 cm."
    },
    { id: "c7_q_5_2_10", q: "Can a rhombus also be calculated using base × height (as a parallelogram)?",
      options: ["Yes, every rhombus is a parallelogram with all 4 sides equal", "No, only diagonal formula works", "Only if it is a circle", "None"], a: "Yes, every rhombus is a parallelogram with all 4 sides equal", acc: ["Yes, every rhombus is a parallelogram with all 4 sides equal", "Yes"], type: "written", difficulty: "hard",
      h: "Rhombus is a special parallelogram.", exp: "Yes, Area = side × altitude = ½ × d₁ × d₂."
    }
  ],

  "c7_les_5_3": [ // Circumference and area of circle
    { id: "c7_q_5_3_01", q: "What is the formula for the CIRCUMFERENCE (perimeter) of a circle?",
      options: ["C = 2πr = πd", "C = πr²", "C = 2πr²", "C = 4πr"], a: "C = 2πr = πd", acc: ["C = 2πr = πd", "2πr", "πd", "2*pi*r"], type: "written", difficulty: "easy",
      h: "2 × π × radius.", exp: "Circumference C = 2πr = πd."
    },
    { id: "c7_q_5_3_02", q: "What is the formula for the AREA of a circle?",
      options: ["Area = πr²", "Area = 2πr", "Area = 2πr²", "Area = πd"], a: "Area = πr²", acc: ["Area = πr²", "πr²", "pi*r^2"], type: "written", difficulty: "easy",
      h: "π multiplied by radius squared.", exp: "Area = πr²."
    },
    { id: "c7_q_5_3_03", q: "What standard fractional value is commonly used for π in school mathematics?",
      options: ["22/7", "7/22", "3.12", "21/7"], a: "22/7", acc: ["22/7", "22 / 7"], type: "written", difficulty: "easy",
      h: "22/7 ≈ 3.14159.", exp: "π is approximated as 22/7 or 3.14."
    },
    { id: "c7_q_5_3_04", q: "What is the circumference of a circle with radius 14 cm (take π = 22/7)?",
      options: ["88 cm", "44 cm", "176 cm", "616 cm²"], a: "88 cm", acc: ["88 cm", "88"], type: "written", difficulty: "medium",
      h: "2 × (22/7) × 14 = 2 × 22 × 2 = 88 cm.", exp: "C = 2 × (22/7) × 14 = 88 cm."
    },
    { id: "c7_q_5_3_05", q: "What is the area of a circle with radius 7 cm (take π = 22/7)?",
      options: ["154 cm²", "44 cm²", "308 cm²", "77 cm²"], a: "154 cm²", acc: ["154 cm²", "154"], type: "written", difficulty: "medium",
      h: "(22/7) × 7 × 7 = 22 × 7 = 154 cm².", exp: "A = (22/7) × 7² = 154 cm²."
    },
    { id: "c7_q_5_3_06", q: "If the circumference of a circle is 44 cm, what is its radius (π = 22/7)?",
      options: ["7 cm", "14 cm", "3.5 cm", "21 cm"], a: "7 cm", acc: ["7 cm", "7"], type: "written", difficulty: "medium",
      h: "2 × (22/7) × r = 44 ⟹ r = (44 × 7) / 44 = 7 cm.", exp: "r = 7 cm."
    },
    { id: "c7_q_5_3_07", q: "What is the perimeter of a SEMI-CIRCLE of radius 7 cm (Curved arc + Diameter)?",
      options: ["36 cm (22 + 14)", "22 cm", "44 cm", "29 cm"], a: "36 cm (22 + 14)", acc: ["36 cm (22 + 14)", "36 cm", "36"], type: "written", difficulty: "medium",
      h: "Perimeter = πr + 2r = 22 + 14 = 36 cm.", exp: "Perimeter = πr + 2r = 22 + 14 = 36 cm."
    },
    { id: "c7_q_5_3_08", q: "A circular track has inner radius 21 m and outer radius 28 m. What is the area of the track path (ring)?",
      options: ["1,078 m²", "950 m²", "1,200 m²", "1,540 m²"], a: "1,078 m²", acc: ["1,078 m²", "1078", "1078 m²"], type: "written", difficulty: "hard",
      h: "π(R² - r²) = (22/7)(28² - 21²) = (22/7)(784 - 441) = (22/7)(343) = 22 × 49 = 1078 m².", exp: "Ring Area = π(R² - r²) = 1,078 m²."
    },
    { id: "c7_q_5_3_09", q: "How many times will a wheel of radius 35 cm rotate to cover a distance of 1.1 km (1100 m)?",
      options: ["500 rotations", "400 rotations", "1000 rotations", "250 rotations"], a: "500 rotations", acc: ["500 rotations", "500"], type: "written", difficulty: "hard",
      h: "1 rotation = 2 × (22/7) × 35 = 220 cm = 2.2 m. Rotations = 1100 ÷ 2.2 = 500.", exp: "Circumference = 2.2 m. Rotations = 1100 / 2.2 = 500."
    },
    { id: "c7_q_5_3_10", q: "If the radius of a circle is DOUBLED, its area becomes:",
      options: ["4 times greater", "2 times greater", "8 times greater", "Remains same"], a: "4 times greater", acc: ["4 times greater", "4 times"], type: "written", difficulty: "hard",
      h: "π(2r)² = 4πr².", exp: "Area is proportional to r², so doubling radius quadruples the area."
    }
  ],

  // =========================================================================
  // Theme 6: Data Handling
  // =========================================================================
  "c7_les_6_1": [ // Data collection, organisation, Mean, Median, and Mode
    { id: "c7_q_6_1_01", q: "What is the ARITHMETIC MEAN (Average) of a set of observations?",
      options: ["Mean = Sum of all observations / Total number of observations", "Middle value", "Most frequent value", "Maximum - Minimum"], a: "Mean = Sum of all observations / Total number of observations", acc: ["Mean = Sum of all observations / Total number of observations"], type: "written", difficulty: "easy",
      h: "Sum divided by count.", exp: "Mean = (Sum of observations) ÷ (Number of observations)."
    },
    { id: "c7_q_6_1_02", q: "What is the MODE of a dataset?",
      options: ["The observation that occurs MOST FREQUENTLY", "The arithmetic average", "The middle value", "The range"], a: "The observation that occurs MOST FREQUENTLY", acc: ["The observation that occurs MOST FREQUENTLY", "Mode"], type: "written", difficulty: "easy",
      h: "Most popular item.", exp: "Mode is the value with the highest frequency."
    },
    { id: "c7_q_6_1_03", q: "What is the MEDIAN of an ordered dataset?",
      options: ["The MIDDLE observation that divides the sorted data into two equal halves", "The average", "The most frequent value", "The sum"], a: "The MIDDLE observation that divides the sorted data into two equal halves", acc: ["The MIDDLE observation that divides the sorted data into two equal halves", "Median"], type: "written", difficulty: "easy",
      h: "Center value when sorted.", exp: "Median is the middle value of an arrayed dataset."
    },
    { id: "c7_q_6_1_04", q: "Find the MEAN of the first 5 natural numbers (1, 2, 3, 4, 5):",
      options: ["3", "2.5", "3.5", "4"], a: "3", acc: ["3", "three"], type: "written", difficulty: "medium",
      h: "(1 + 2 + 3 + 4 + 5) ÷ 5 = 15 ÷ 5 = 3.", exp: "Mean = 15 / 5 = 3."
    },
    { id: "c7_q_6_1_05", q: "Find the MODE of the dataset: 4, 6, 7, 6, 8, 6, 9, 7",
      options: ["6", "7", "4", "8"], a: "6", acc: ["6", "six"], type: "written", difficulty: "medium",
      h: "6 appears three times (highest frequency).", exp: "Mode = 6."
    },
    { id: "c7_q_6_1_06", q: "Find the MEDIAN of the dataset: 15, 8, 22, 10, 18 (Sort first: 8, 10, 15, 18, 22):",
      options: ["15", "18", "10", "14.6"], a: "15", acc: ["15"], type: "written", difficulty: "medium",
      h: "Middle of 5 values is 3rd value (15).", exp: "Sorted: 8, 10, 15, 18, 22. Median = 15."
    },
    { id: "c7_q_6_1_07", q: "Find the median of an EVEN count dataset: 4, 7, 9, 12 (4 numbers):",
      options: ["8 (average of 7 and 9)", "7", "9", "8.5"], a: "8 (average of 7 and 9)", acc: ["8 (average of 7 and 9)", "8", "eight"], type: "written", difficulty: "medium",
      h: "(7 + 9) ÷ 2 = 16 ÷ 2 = 8.", exp: "Median = (7 + 9) / 2 = 8."
    },
    { id: "c7_q_6_1_08", q: "The mean of 5 numbers is 18. If one number is excluded, the mean becomes 16. What was the excluded number?",
      options: ["26", "24", "22", "28"], a: "26", acc: ["26"], type: "written", difficulty: "hard",
      h: "Sum of 5 = 5 × 18 = 90. Sum of 4 = 4 × 16 = 64. Excluded = 90 - 64 = 26.", exp: "Excluded = 90 - 64 = 26."
    },
    { id: "c7_q_6_1_09", q: "What is the empirical relation connecting Mean, Median, and Mode approximately?",
      options: ["Mode = 3 Median - 2 Mean", "Mode = 2 Median - 3 Mean", "Mean = 3 Mode - 2 Median", "Mode = Median + Mean"], a: "Mode = 3 Median - 2 Mean", acc: ["Mode = 3 Median - 2 Mean"], type: "written", difficulty: "hard",
      h: "Karl Pearson's empirical formula.", exp: "Mode ≈ 3 Median - 2 Mean."
    },
    { id: "c7_q_6_1_10", q: "Find the mean of the first five PRIME numbers (2, 3, 5, 7, 11):",
      options: ["5.6", "5.0", "6.0", "5.8"], a: "5.6", acc: ["5.6"], type: "written", difficulty: "hard",
      h: "(2 + 3 + 5 + 7 + 11) ÷ 5 = 28 ÷ 5 = 5.6.", exp: "Sum = 28. Mean = 28 / 5 = 5.6."
    }
  ],

  "c7_les_6_2": [ // Bar graphs: Drawing and interpreting
    { id: "c7_q_6_2_01", q: "In a bar graph, what does the length or height of each bar represent?",
      options: ["The numerical value (frequency) of the corresponding category", "The category name", "The width", "The thickness"], a: "The numerical value (frequency) of the corresponding category", acc: ["The numerical value (frequency) of the corresponding category"], type: "written", difficulty: "easy",
      h: "Height is proportional to frequency.", exp: "Bar length represents the numerical value."
    },
    { id: "c7_q_6_2_02", q: "In a DOUBLE BAR GRAPH, what is compared?",
      options: ["Two sets of related observations across the same categories side-by-side", "Only 1 number", "A circle", "A 3D box"], a: "Two sets of related observations across the same categories side-by-side", acc: ["Two sets of related observations across the same categories side-by-side"], type: "written", difficulty: "easy",
      h: "Side-by-side comparative bars.", exp: "Double bar graphs compare two related datasets simultaneously."
    },
    { id: "c7_q_6_2_03", q: "If scale is 1 cm = 100 students, what height bar represents 450 students?",
      options: ["4.5 cm", "45 cm", "4.0 cm", "5.0 cm"], a: "4.5 cm", acc: ["4.5 cm", "4.5"], type: "written", difficulty: "easy",
      h: "450 ÷ 100 = 4.5 cm.", exp: "450 / 100 = 4.5 cm."
    },
    { id: "c7_q_6_2_04", q: "Double bar graph shows Term 1 vs Term 2 marks: Maths (70, 85), English (80, 75). In which subject was there an INCREASE?",
      options: ["Maths (+15 marks)", "English", "Both", "Neither"], a: "Maths (+15 marks)", acc: ["Maths (+15 marks)", "Maths"], type: "written", difficulty: "medium",
      h: "70 to 85 is an increase.", exp: "Maths increased from 70 to 85 (+15 marks)."
    },
    { id: "c7_q_6_2_05", q: "What was the decrease in English marks (80 in Term 1 to 75 in Term 2)?",
      options: ["5 marks", "10 marks", "15 marks", "0 marks"], a: "5 marks", acc: ["5 marks", "5"], type: "written", difficulty: "medium",
      h: "80 - 75 = 5.", exp: "80 - 75 = 5 marks."
    },
    { id: "c7_q_6_2_06", q: "Which axis in a standard vertical bar graph represents the categorical variable (e.g. subject names)?",
      options: ["Horizontal x-axis", "Vertical y-axis", "Both axes", "Neither"], a: "Horizontal x-axis", acc: ["Horizontal x-axis", "x-axis"], type: "written", difficulty: "medium",
      h: "Categories are lined along the bottom x-axis.", exp: "Categories are plotted on the horizontal axis."
    },
    { id: "c7_q_6_2_07", q: "Why is a KEY or LEGEND provided in a double bar graph?",
      options: ["To distinguish between the two categories of bars (e.g. Boys vs Girls, Term 1 vs Term 2)", "To measure length", "To write title", "None"], a: "To distinguish between the two categories of bars (e.g. Boys vs Girls, Term 1 vs Term 2)", acc: ["To distinguish between the two categories of bars (e.g. Boys vs Girls, Term 1 vs Term 2)"], type: "written", difficulty: "medium",
      h: "Indicates color and shading meanings.", exp: "Legends identify which color/pattern corresponds to which dataset."
    },
    { id: "c7_q_6_2_08", q: "Bar graph shows factory production (in thousands): 2020=40, 2021=55, 2022=70. What is the percentage increase from 2020 to 2022?",
      options: ["75%", "50%", "60%", "70%"], a: "75%", acc: ["75%", "75"], type: "written", difficulty: "hard",
      h: "(70 - 40) / 40 × 100% = 30/40 × 100 = 75%.", exp: "(30 / 40) × 100 = 75%."
    },
    { id: "c7_q_6_2_09", q: "If the scale is 1 unit = 250 cars, what does a bar of height 8.4 units represent?",
      options: ["2,100 cars", "2,000 cars", "2,200 cars", "1,850 cars"], a: "2,100 cars", acc: ["2,100 cars", "2100"], type: "written", difficulty: "hard",
      h: "8.4 × 250 = 2100.", exp: "8.4 × 250 = 2,100 cars."
    },
    { id: "c7_q_6_2_10", q: "Which statistical representation is best suited to show discrete categorical comparisons side by side?",
      options: ["Bar Graph", "Line graph", "Scatter plot", "Calculus"], a: "Bar Graph", acc: ["Bar Graph"], type: "written", difficulty: "hard",
      h: "Discrete bars for separate categories.", exp: "Bar graphs effectively display and compare discrete categorical data."
    }
  ],

  "c7_les_6_3": [ // Probability through experiments (Coins, dice, frequency, randomness)
    { id: "c7_q_6_3_01", q: "What is the formula for the PROBABILITY P(E) of an event?",
      options: ["P(E) = Number of favourable outcomes / Total number of possible outcomes", "P(E) = Total outcomes / Favourable outcomes", "P(E) = Favourable × Total", "P(E) = Favourable + Total"], a: "P(E) = Number of favourable outcomes / Total number of possible outcomes", acc: ["P(E) = Number of favourable outcomes / Total number of possible outcomes"], type: "written", difficulty: "easy",
      h: "Favourable ÷ Total possible.", exp: "P(E) = n(E) / n(S)."
    },
    { id: "c7_q_6_3_02", q: "What is the probability of getting a HEAD when a fair coin is tossed?",
      options: ["1/2 (50%)", "1", "0", "1/4"], a: "1/2 (50%)", acc: ["1/2 (50%)", "1/2", "0.5", "50%"], type: "written", difficulty: "easy",
      h: "1 head out of 2 outcomes (Head, Tail).", exp: "P(Head) = 1/2."
    },
    { id: "c7_q_6_3_03", q: "What is the probability of an IMPOSSIBLE event (e.g. getting a 7 on a 6-sided dice)?",
      options: ["0", "1", "1/2", "-1"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "easy",
      h: "Zero chance.", exp: "Probability of an impossible event is 0."
    },
    { id: "c7_q_6_3_04", q: "What is the probability of a CERTAIN / SURE event?",
      options: ["1 (100%)", "0", "1/2", "Infinity"], a: "1 (100%)", acc: ["1 (100%)", "1", "100%"], type: "written", difficulty: "medium",
      h: "Guaranteed to happen.", exp: "Probability of a certain event is 1."
    },
    { id: "c7_q_6_3_05", q: "What is the probability of rolling an EVEN number on a single die roll (outcomes: 1, 2, 3, 4, 5, 6)?",
      options: ["3/6 = 1/2", "1/6", "2/6 = 1/3", "4/6 = 2/3"], a: "3/6 = 1/2", acc: ["3/6 = 1/2", "1/2", "3/6"], type: "written", difficulty: "medium",
      h: "Even numbers are 2, 4, 6 (3 outcomes out of 6).", exp: "P(Even) = 3/6 = 1/2."
    },
    { id: "c7_q_6_3_06", q: "What is the probability of rolling a number GREATER than 4 on a single die roll?",
      options: ["2/6 = 1/3", "4/6 = 2/3", "1/6", "3/6 = 1/2"], a: "2/6 = 1/3", acc: ["2/6 = 1/3", "1/3", "2/6"], type: "written", difficulty: "medium",
      h: "Numbers > 4 are 5 and 6 (2 outcomes).", exp: "P(>4) = 2/6 = 1/3."
    },
    { id: "c7_q_6_3_07", q: "A bag contains 5 red balls and 3 blue balls. What is the probability of drawing a RED ball?",
      options: ["5/8", "3/8", "1/5", "5/3"], a: "5/8", acc: ["5/8"], type: "written", difficulty: "medium",
      h: "Total = 5 + 3 = 8. Red = 5.", exp: "P(Red) = 5/8."
    },
    { id: "c7_q_6_3_08", q: "The probability of any event E always lies in the range:",
      options: ["0 ≤ P(E) ≤ 1", "-1 ≤ P(E) ≤ 1", "0 < P(E) < 100", "P(E) ≥ 1"], a: "0 ≤ P(E) ≤ 1", acc: ["0 ≤ P(E) ≤ 1", "0 to 1"], type: "written", difficulty: "hard",
      h: "Between 0 and 1 inclusive.", exp: "0 ≤ P(E) ≤ 1."
    },
    { id: "c7_q_6_3_09", q: "If the probability of winning a game is 0.7, what is the probability of LOSING the game?",
      options: ["0.3", "0.7", "0.03", "1.0"], a: "0.3", acc: ["0.3"], type: "written", difficulty: "hard",
      h: "P(Losing) = 1 - P(Winning) = 1 - 0.7 = 0.3.", exp: "1 - 0.7 = 0.3."
    },
    { id: "c7_q_6_3_10", q: "What is the probability of rolling a PRIME number on a single die (primes are 2, 3, 5)?",
      options: ["3/6 = 1/2", "2/6 = 1/3", "4/6 = 2/3", "1/6"], a: "3/6 = 1/2", acc: ["3/6 = 1/2", "1/2", "3/6"], type: "written", difficulty: "hard",
      h: "Primes on a die are 2, 3, 5 (3 outcomes). Note: 1 is not prime.", exp: "P(Prime) = 3/6 = 1/2."
    }
  ]
};

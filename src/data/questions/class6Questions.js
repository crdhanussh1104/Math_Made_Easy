/**
 * Class 6 Mathematics Question Bank (ICSE Curriculum)
 * Exactly 10 questions per topic with full MCQ options, explanations, hints, and difficulty ratings.
 */

export const class6Questions = {
  // =========================================================================
  // Theme 1: Number System
  // =========================================================================
  "c6_les_1_1": [ // Numbers, place value, large numbers, and estimation
    { id: "c6_q_1_1_01", q: "How many thousands make 1 LAKH in the Indian system?",
      options: ["100", "10", "1000", "10000"], a: "100", acc: ["100", "hundred", "100 thousands"], type: "written", difficulty: "easy",
      h: "1,00,000 ÷ 1,000 = ?", exp: "1 Lakh = 1,00,000 = 100 thousands."
    },
    { id: "c6_q_1_1_02", q: "How many lakhs make 1 MILLION in the International system?",
      options: ["10 Lakhs", "100 Lakhs", "1 Lakh", "1000 Lakhs"], a: "10 Lakhs", acc: ["10 Lakhs", "10", "10 lakhs"], type: "written", difficulty: "easy",
      h: "1 Million = 1,000,000 = 10 Lakhs.", exp: "1 Million = 1,000,000 = 10 Lakhs."
    },
    { id: "c6_q_1_1_03", q: "How is 4,50,072 written with commas in the International system?",
      options: ["450,072", "4,500,72", "45,007,2", "4500,72"], a: "450,072", acc: ["450,072"], type: "written", difficulty: "easy",
      h: "In International system, group in 3s from the right: 450,072.", exp: "450,072 (Four hundred fifty thousand seventy-two)."
    },
    { id: "c6_q_1_1_04", q: "What is the place value of 8 in 3,84,25,910?",
      options: ["80 Lakhs (80,00,000)", "8 Lakhs (8,00,000)", "8 Crores", "80,000"], a: "80 Lakhs (80,00,000)", acc: ["80 Lakhs (80,00,000)", "80,00,000", "80 lakhs"], type: "written", difficulty: "medium",
      h: "8 is in the ten-lakhs place: 8 × 10,00,000.", exp: "8 is in Ten Lakhs place = 80,00,000."
    },
    { id: "c6_q_1_1_05", q: "Estimate 7,845 + 3,190 to the nearest THOUSAND:",
      options: ["11,000", "10,000", "12,000", "11,035"], a: "11,000", acc: ["11,000", "11000"], type: "written", difficulty: "medium",
      h: "7,845 ≈ 8,000; 3,190 ≈ 3,000. 8,000 + 3,000 = ?", exp: "8000 + 3000 = 11,000."
    },
    { id: "c6_q_1_1_06", q: "What is 1 CRORE in the International system?",
      options: ["10 Million", "100 Million", "1 Billion", "1 Million"], a: "10 Million", acc: ["10 Million", "10 million"], type: "written", difficulty: "medium",
      h: "1,00,00,000 = 10,000,000.", exp: "1 Crore = 10 Million."
    },
    { id: "c6_q_1_1_07", q: "Estimate the product of 48 × 73 to the nearest TEN:",
      options: ["3,500", "3,600", "3,400", "3,000"], a: "3,500", acc: ["3,500", "3500"], type: "written", difficulty: "medium",
      h: "48 ≈ 50, 73 ≈ 70. 50 × 70 = ?", exp: "50 × 70 = 3500."
    },
    { id: "c6_q_1_1_08", q: "What is the Roman numeral for 94?",
      options: ["XCIV", "LXXXXIV", "CXIV", "IC"], a: "XCIV", acc: ["XCIV"], type: "written", difficulty: "hard",
      h: "90 = XC, 4 = IV.", exp: "94 = 90 + 4 = XC + IV = XCIV."
    },
    { id: "c6_q_1_1_09", q: "What is the Roman numeral for 450?",
      options: ["CDL", "CCCCL", "DL", "LD"], a: "CDL", acc: ["CDL"], type: "written", difficulty: "hard",
      h: "400 = CD, 50 = L.", exp: "450 = CD + L = CDL."
    },
    { id: "c6_q_1_1_10", q: "How many 7-digit numbers exist in all?",
      options: ["90,00,000 (90 Lakhs)", "99,99,999", "10,00,000", "9,00,000"], a: "90,00,000 (90 Lakhs)", acc: ["90,00,000 (90 Lakhs)", "90,00,000", "9000000"], type: "written", difficulty: "hard",
      h: "99,99,999 - 10,00,000 + 1 = 90,00,000.", exp: "Largest 7-digit - Smallest 7-digit + 1 = 99,99,999 - 10,00,000 + 1 = 90,00,000."
    }
  ],

  "c6_les_1_2": [ // Natural numbers, whole numbers, and properties (Commutative, Associative, Distributive, Identities)
    { id: "c6_q_1_2_01", q: "What is the smallest WHOLE number?",
      options: ["0", "1", "2", "-1"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "easy",
      h: "Whole numbers start from 0.", exp: "W = {0, 1, 2, 3...}. Smallest whole number is 0."
    },
    { id: "c6_q_1_2_02", q: "What is the smallest NATURAL number?",
      options: ["1", "0", "2", "None"], a: "1", acc: ["1", "one"], type: "written", difficulty: "easy",
      h: "Natural counting numbers start from 1.", exp: "N = {1, 2, 3...}. Smallest natural number is 1."
    },
    { id: "c6_q_1_2_03", q: "Which property states that a + b = b + a?",
      options: ["Commutative property of addition", "Associative property", "Distributive property", "Closure property"], a: "Commutative property of addition", acc: ["Commutative property of addition", "Commutative"], type: "written", difficulty: "easy",
      h: "Order of terms does not affect sum.", exp: "The Commutative Property states a + b = b + a."
    },
    { id: "c6_q_1_2_04", q: "What is the ADDITIVE IDENTITY for whole numbers?",
      options: ["0", "1", "-1", "Any number"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "medium",
      h: "a + 0 = a.", exp: "0 is the additive identity because adding 0 leaves any number unchanged."
    },
    { id: "c6_q_1_2_05", q: "What is the MULTIPLICATIVE IDENTITY for whole numbers?",
      options: ["1", "0", "2", "-1"], a: "1", acc: ["1", "one"], type: "written", difficulty: "medium",
      h: "a × 1 = a.", exp: "1 is the multiplicative identity because multiplying by 1 preserves value."
    },
    { id: "c6_q_1_2_06", q: "Which property is shown by: 12 × (10 + 5) = (12 × 10) + (12 × 5)?",
      options: ["Distributive property of multiplication over addition", "Commutative property", "Associative property", "Identity property"], a: "Distributive property of multiplication over addition", acc: ["Distributive property of multiplication over addition", "Distributive"], type: "written", difficulty: "medium",
      h: "a × (b + c) = a×b + a×c.", exp: "This is the Distributive Property of multiplication over addition."
    },
    { id: "c6_q_1_2_07", q: "Which property states that (a + b) + c = a + (b + c)?",
      options: ["Associative property of addition", "Commutative property", "Distributive property", "Closure property"], a: "Associative property of addition", acc: ["Associative property of addition", "Associative"], type: "written", difficulty: "medium",
      h: "Regrouping brackets does not change sum.", exp: "This is the Associative Property of addition."
    },
    { id: "c6_q_1_2_08", q: "What is the value of 584 × 105 - 584 × 5 using distributive property?",
      options: ["58,400", "58,405", "5,840", "584,000"], a: "58,400", acc: ["58,400", "58400"], type: "written", difficulty: "hard",
      h: "584 × (105 - 5) = 584 × 100 = ?", exp: "584 × (105 - 5) = 584 × 100 = 58,400."
    },
    { id: "c6_q_1_2_09", q: "Is subtraction of whole numbers commutative (is a - b = b - a)?",
      options: ["No, never (e.g. 5 - 3 ≠ 3 - 5)", "Yes, always", "Only for 0", "Only for even numbers"], a: "No, never (e.g. 5 - 3 ≠ 3 - 5)", acc: ["No, never (e.g. 5 - 3 ≠ 3 - 5)", "No"], type: "written", difficulty: "hard",
      h: "5 - 3 = 2, but 3 - 5 = -2.", exp: "Subtraction is NOT commutative for whole numbers."
    },
    { id: "c6_q_1_2_10", q: "What is the predecessor of the smallest whole number (0) in the set of whole numbers?",
      options: ["Does not exist in Whole Numbers", "-1", "1", "0"], a: "Does not exist in Whole Numbers", acc: ["Does not exist in Whole Numbers", "Does not exist", "None"], type: "written", difficulty: "hard",
      h: "Whole numbers end at 0 on the left.", exp: "0 has no predecessor in the set of Whole Numbers (W)."
    }
  ],

  "c6_les_1_3": [ // Number line and introduction to negative numbers / integers
    { id: "c6_q_1_3_01", q: "Which of the numbers: 3/4, 2.5, -7, √2 is an INTEGER?",
      a: "-7", acc: ["-7", "- 7"], type: "written", difficulty: "easy",
      h: "Integers are whole numbers and their negatives without fractional or decimal parts.", exp: "-7 is a negative integer. 3/4 and 2.5 are not integers, and √2 is irrational."
    },
    { id: "c6_q_1_3_02", q: "On a horizontal number line, negative numbers lie to the:",
      options: ["Left of 0", "Right of 0", "Above 0", "Below 0"], a: "Left of 0", acc: ["Left of 0", "Left"], type: "written", difficulty: "easy",
      h: "Negative values are to the left of zero.", exp: "Negative integers lie to the left of 0 on a number line."
    },
    { id: "c6_q_1_3_03", q: "What is the opposite of 'a gain of ₹500'?",
      options: ["A loss of ₹500 (-₹500)", "A gain of ₹1000", "₹0", "None"], a: "A loss of ₹500 (-₹500)", acc: ["A loss of ₹500 (-₹500)", "loss of ₹500"], type: "written", difficulty: "easy",
      h: "Opposite of gain is loss.", exp: "Gain (+500) opposes Loss (-500)."
    },
    { id: "c6_q_1_3_04", q: "What is the ABSOLUTE VALUE of -15 (written |-15|)?",
      options: ["15", "-15", "0", "1"], a: "15", acc: ["15"], type: "written", difficulty: "medium",
      h: "Absolute value is distance from 0 (always non-negative).", exp: "|-15| = 15."
    },
    { id: "c6_q_1_3_05", q: "Which integer is greater: -8 or -3?",
      options: ["-3", "-8", "Both are equal", "0"], a: "-3", acc: ["-3"], type: "written", difficulty: "medium",
      h: "On a number line, numbers further right are greater.", exp: "-3 is to the right of -8 on the number line, so -3 > -8."
    },
    { id: "c6_q_1_3_06", q: "What is the successor of -10?",
      options: ["-9", "-11", "9", "11"], a: "-9", acc: ["-9"], type: "written", difficulty: "medium",
      h: "-10 + 1 = ?", exp: "Successor = -10 + 1 = -9."
    },
    { id: "c6_q_1_3_07", q: "What is the predecessor of -15?",
      options: ["-16", "-14", "16", "14"], a: "-16", acc: ["-16"], type: "written", difficulty: "medium",
      h: "-15 - 1 = ?", exp: "Predecessor = -15 - 1 = -16."
    },
    { id: "c6_q_1_3_08", q: "Which integer is NEITHER positive NOR negative?",
      options: ["0", "1", "-1", "10"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "hard",
      h: "The neutral origin on the number line.", exp: "0 is neutral (neither positive nor negative)."
    },
    { id: "c6_q_1_3_09", q: "Arrange in ascending order: -7, 4, 0, -2, -10",
      options: ["-10, -7, -2, 0, 4", "4, 0, -2, -7, -10", "-2, -7, -10, 0, 4", "0, -2, -7, -10, 4"], a: "-10, -7, -2, 0, 4", acc: ["-10, -7, -2, 0, 4"], type: "written", difficulty: "hard",
      h: "Most negative number (-10) is smallest.", exp: "-10 < -7 < -2 < 0 < 4."
    },
    { id: "c6_q_1_3_10", q: "A submarine is at 250 m below sea level. Its position as an integer is:",
      options: ["-250 m", "+250 m", "0 m", "2500 m"], a: "-250 m", acc: ["-250 m", "-250"], type: "written", difficulty: "hard",
      h: "Below sea level is negative.", exp: "250 m below sea level = -250 m."
    }
  ],

  "c6_les_1_4": [ // Representation, addition, subtraction, and comparison of integers
    { id: "c6_q_1_4_01", q: "What is (-7) + (+12)?",
      options: ["5", "-5", "19", "-19"], a: "5", acc: ["5", "+5"], type: "written", difficulty: "easy",
      h: "12 - 7 = 5.", exp: "(-7) + 12 = 5."
    },
    { id: "c6_q_1_4_02", q: "What is (-8) + (-6)?",
      options: ["-14", "14", "-2", "2"], a: "-14", acc: ["-14"], type: "written", difficulty: "easy",
      h: "Both signs negative: -(8 + 6).", exp: "(-8) + (-6) = -14."
    },
    { id: "c6_q_1_4_03", q: "What is 15 - (-5)?",
      options: ["20", "10", "-20", "-10"], a: "20", acc: ["20"], type: "written", difficulty: "easy",
      h: "Subtracting a negative is adding: 15 + 5.", exp: "15 - (-5) = 15 + 5 = 20."
    },
    { id: "c6_q_1_4_04", q: "What is (-20) - (+14)?",
      options: ["-34", "-6", "6", "34"], a: "-34", acc: ["-34"], type: "written", difficulty: "medium",
      h: "-20 - 14 = -34.", exp: "(-20) - 14 = -34."
    },
    { id: "c6_q_1_4_05", q: "What is the value of: (-15) + (+25) + (-10)?",
      options: ["0", "10", "-10", "50"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "medium",
      h: "(-15 - 10) + 25 = -25 + 25 = 0.", exp: "-25 + 25 = 0."
    },
    { id: "c6_q_1_4_06", q: "Subtract -8 from -15: (-15) - (-8) = ?",
      options: ["-7", "-23", "7", "23"], a: "-7", acc: ["-7"], type: "written", difficulty: "medium",
      h: "-15 + 8 = -7.", exp: "(-15) - (-8) = -15 + 8 = -7."
    },
    { id: "c6_q_1_4_07", q: "Fill in the blank: (-13) + ___ = -13",
      options: ["0", "1", "-1", "13"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "medium",
      h: "Additive identity.", exp: "Adding 0 keeps the integer unchanged."
    },
    { id: "c6_q_1_4_08", q: "What is the additive inverse of -45?",
      options: ["+45", "-45", "0", "1"], a: "+45", acc: ["+45", "45"], type: "written", difficulty: "hard",
      h: "Number that adds to 0.", exp: "The additive inverse of -45 is +45 (since -45 + 45 = 0)."
    },
    { id: "c6_q_1_4_09", q: "At 6 AM temperature was -4°C. By noon it rose by 9°C. What was the temperature at noon?",
      options: ["5°C", "-5°C", "13°C", "-13°C"], a: "5°C", acc: ["5°C", "5", "5 degrees"], type: "written", difficulty: "hard",
      h: "-4 + 9 = ?", exp: "-4 + 9 = 5°C."
    },
    { id: "c6_q_1_4_10", q: "Evaluate: |(-12) + 5| - |-7|",
      options: ["0", "14", "-14", "2"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "hard",
      h: "|-7| - 7 = 7 - 7 = 0.", exp: "|-7| = 7. |-7| - 7 = 7 - 7 = 0."
    }
  ],

  "c6_les_1_5": [ // Sets: Finite, infinite, empty sets, and cardinality
    { id: "c6_q_1_5_01", q: "What is a SET in mathematics?",
      options: ["A well-defined collection of distinct objects", "Any random group of numbers", "A geometry tool", "A formula"], a: "A well-defined collection of distinct objects", acc: ["A well-defined collection of distinct objects"], type: "written", difficulty: "easy",
      h: "Objects must have clear membership criteria.", exp: "A set is a well-defined collection of distinct elements."
    },
    { id: "c6_q_1_5_02", q: "What is a set containing NO elements called?",
      options: ["Empty set (or Null set ∅)", "Universal set", "Finite set", "Infinite set"], a: "Empty set (or Null set ∅)", acc: ["Empty set (or Null set ∅)", "Empty set", "Null set"], type: "written", difficulty: "easy",
      h: "Denoted by ∅ or {}.", exp: "A set with no members is an empty/null set: ∅."
    },
    { id: "c6_q_1_5_03", q: "If A = {2, 4, 6, 8, 10}, what is the CARDINALITY of set A, written n(A)?",
      options: ["5", "10", "4", "6"], a: "5", acc: ["5", "five"], type: "written", difficulty: "easy",
      h: "Count the number of elements in set A.", exp: "There are 5 elements, so n(A) = 5."
    },
    { id: "c6_q_1_5_04", q: "Which of the sets: Set of Days in a week, Set of Natural Numbers, Set of Letters in 'MATH' is an INFINITE set?",
      a: "Set of Natural Numbers", acc: ["Set of Natural Numbers", "Natural Numbers", "natural numbers", "set of natural numbers", "N"], type: "written", difficulty: "medium",
      h: "Natural numbers count 1, 2, 3, ... without end.", exp: "The set of natural numbers N = {1, 2, 3, ...} has an infinite number of elements."
    },
    { id: "c6_q_1_5_05", q: "Which of the sets: Set of Even Numbers, Set of Points on a line, Set of Months in a year is a FINITE set?",
      a: "Set of Months in a year", acc: ["Set of Months in a year", "Months in a year", "set of months in a year", "months in a year"], type: "written", difficulty: "medium",
      h: "A year has exactly 12 countable months.", exp: "Months in a year has exactly 12 elements (finite)."
    },
    { id: "c6_q_1_5_06", q: "What is the roster form of: Set of vowels in the word 'MATHEMATICS'?",
      options: ["{A, E, I}", "{A, E, I, A, I}", "{M, T, H}", "{A, B, C}"], a: "{A, E, I}", acc: ["{A, E, I}"], type: "written", difficulty: "medium",
      h: "Elements in a set are never repeated.", exp: "Vowels are A, E, I (no duplicate elements in sets)."
    },
    { id: "c6_q_1_5_07", q: "Which symbol denotes 'is an element of'?",
      options: ["∈", "∉", "⊂", "∅"], a: "∈", acc: ["∈", "element of"], type: "written", difficulty: "medium",
      h: "Looks like stylized letter E.", exp: "∈ represents set membership."
    },
    { id: "c6_q_1_5_08", q: "If P = {x : x is an even prime number}, what is n(P)?",
      options: ["1 (since only 2 is an even prime)", "0", "2", "Infinite"], a: "1 (since only 2 is an even prime)", acc: ["1 (since only 2 is an even prime)", "1", "one"], type: "written", difficulty: "hard",
      h: "2 is the only even prime number.", exp: "P = {2}, so n(P) = 1 (a singleton set)."
    },
        { id: "c6_q_1_5_09", q: "Which of the sets: Set of Even Primes, Set of Natural Numbers less than 1, Set of Whole Numbers is an EMPTY SET (null set)?",
      a: "Set of Natural Numbers less than 1", acc: ["Set of Natural Numbers less than 1", "Natural Numbers less than 1", "set of natural numbers less than 1", "natural numbers less than 1", "empty set"], type: "written", difficulty: "hard",
      h: "Natural numbers start from 1, so there are no natural numbers less than 1.", exp: "Natural numbers start at 1, so the set of natural numbers < 1 contains no elements: Ø."
    },
    { id: "c6_q_1_5_10", q: "If A = {1, 2, 3} and B = {3, 2, 1}, are sets A and B EQUAL?",
      options: ["Yes, order of elements does not matter in sets", "No, order is different", "Only if A has 4 elements", "None"], a: "Yes, order of elements does not matter in sets", acc: ["Yes, order of elements does not matter in sets", "Yes"], type: "written", difficulty: "hard",
      h: "Both contain exact same elements 1, 2, 3.", exp: "Two sets are equal if they have identical elements, regardless of order."
    }
  ],

  "c6_les_1_6": [ // Fractions: Part of whole, fractions on number line, proper, improper, mixed, and equivalent fractions
    { id: "c6_q_1_6_01", q: "What type of fraction has numerator SMALLER than denominator (e.g. 3/5)?",
      options: ["Proper fraction", "Improper fraction", "Mixed fraction", "Unit fraction"], a: "Proper fraction", acc: ["Proper fraction", "Proper"], type: "written", difficulty: "easy",
      h: "Numerator < Denominator.", exp: "A fraction where numerator < denominator is a proper fraction."
    },
    { id: "c6_q_1_6_02", q: "What type of fraction is 7/4?",
      options: ["Improper fraction", "Proper fraction", "Mixed fraction", "Decimal fraction"], a: "Improper fraction", acc: ["Improper fraction", "Improper"], type: "written", difficulty: "easy",
      h: "Numerator ≥ Denominator.", exp: "7/4 has numerator > denominator, so it is an improper fraction."
    },
    { id: "c6_q_1_6_03", q: "Convert 7/3 into a MIXED fraction:",
      options: ["2 ⅓", "1 ⁴⁄₃", "3 ½", "2 ⅔"], a: "2 ⅓", acc: ["2 ⅓", "2 1/3", "2 and 1/3"], type: "written", difficulty: "easy",
      h: "7 ÷ 3 = 2 with remainder 1.", exp: "7/3 = 2 ⅓ (2 whole and 1/3)."
    },
    { id: "c6_q_1_6_04", q: "Convert mixed fraction 3 ¾ into an IMPROPER fraction:",
      options: ["15/4", "12/4", "7/4", "13/4"], a: "15/4", acc: ["15/4"], type: "written", difficulty: "medium",
      h: "(3 × 4 + 3) / 4 = ?", exp: "(3 × 4 + 3) / 4 = 15/4."
    },
    { id: "c6_q_1_6_05", q: "Find the equivalent fraction of 2/3 with denominator 18:",
      options: ["12/18", "10/18", "14/18", "6/18"], a: "12/18", acc: ["12/18"], type: "written", difficulty: "medium",
      h: "Multiply numerator and denominator by 6: 2×6 / 3×6.", exp: "(2 × 6) / (3 × 6) = 12/18."
    },
    { id: "c6_q_1_6_06", q: "Reduce 24/36 to its SIMPLEST (lowest) form:",
      options: ["2/3", "4/6", "6/9", "3/4"], a: "2/3", acc: ["2/3"], type: "written", difficulty: "medium",
      h: "Divide numerator and denominator by HCF (12).", exp: "24 ÷ 12 / 36 ÷ 12 = 2/3."
    },
    { id: "c6_q_1_6_07", q: "Where does the proper fraction 3/5 lie on a number line?",
      options: ["Between 0 and 1", "Between 1 and 2", "To the left of 0", "Greater than 3"], a: "Between 0 and 1", acc: ["Between 0 and 1"], type: "written", difficulty: "medium",
      h: "All positive proper fractions are between 0 and 1.", exp: "0 < 3/5 < 1."
    },
    { id: "c6_q_1_6_08", q: "Which fraction is a UNIT fraction?",
      options: ["1/7", "7/1", "2/7", "7/7"], a: "1/7", acc: ["1/7"], type: "written", difficulty: "hard",
      h: "Numerator is exactly 1.", exp: "A fraction with numerator 1 is a unit fraction (1/7)."
    },
    { id: "c6_q_1_6_09", q: "Are 4/10 and 6/15 equivalent fractions?",
      options: ["Yes, both simplify to 2/5", "No, numerators are different", "Only if added", "None"], a: "Yes, both simplify to 2/5", acc: ["Yes, both simplify to 2/5", "Yes"], type: "written", difficulty: "hard",
      h: "4/10 = 2/5; 6/15 = 2/5.", exp: "Both reduce to 2/5, so they are equivalent."
    },
    { id: "c6_q_1_6_10", q: "What fraction of an hour is 20 minutes?",
      options: ["1/3", "1/4", "1/2", "2/5"], a: "1/3", acc: ["1/3"], type: "written", difficulty: "hard",
      h: "20 / 60 = ?", exp: "20/60 = 1/3 of an hour."
    }
  ],

  "c6_les_1_7": [ // Comparison and operations on fractions
    { id: "c6_q_1_7_01", q: "What is 3/7 + 2/7?",
      options: ["5/7", "5/14", "6/7", "1/7"], a: "5/7", acc: ["5/7"], type: "written", difficulty: "easy",
      h: "Like fractions: add numerators directly.", exp: "(3 + 2) / 7 = 5/7."
    },
    { id: "c6_q_1_7_02", q: "What is 8/9 - 5/9?",
      options: ["3/9 = 1/3", "3/0", "13/9", "3/18"], a: "3/9 = 1/3", acc: ["3/9 = 1/3", "1/3", "3/9"], type: "written", difficulty: "easy",
      h: "8 - 5 = 3.", exp: "(8 - 5) / 9 = 3/9 = 1/3."
    },
    { id: "c6_q_1_7_03", q: "Which fraction is GREATER: 5/8 or 3/8?",
      options: ["5/8", "3/8", "Both equal", "None"], a: "5/8", acc: ["5/8"], type: "written", difficulty: "easy",
      h: "When denominators are equal, larger numerator is greater.", exp: "5/8 > 3/8."
    },
    { id: "c6_q_1_7_04", q: "What is 1/2 + 1/3?",
      options: ["5/6", "2/5", "1/6", "5/5"], a: "5/6", acc: ["5/6"], type: "written", difficulty: "medium",
      h: "LCM of 2 and 3 is 6. 3/6 + 2/6 = ?", exp: "3/6 + 2/6 = 5/6."
    },
    { id: "c6_q_1_7_05", q: "What is 3/4 - 1/6?",
      options: ["7/12", "2/12", "1/2", "5/12"], a: "7/12", acc: ["7/12"], type: "written", difficulty: "medium",
      h: "LCM of 4 and 6 is 12. 9/12 - 2/12 = ?", exp: "9/12 - 2/12 = 7/12."
    },
    { id: "c6_q_1_7_06", q: "Which fraction is GREATER: 3/5 or 4/7?",
      options: ["3/5 (21/35 > 20/35)", "4/7", "Both are equal", "Cannot compare"], a: "3/5 (21/35 > 20/35)", acc: ["3/5 (21/35 > 20/35)", "3/5"], type: "written", difficulty: "medium",
      h: "Cross multiply: 3 × 7 = 21 vs 5 × 4 = 20. 21 > 20.", exp: "3/5 = 21/35, 4/7 = 20/35. 21/35 > 20/35."
    },
    { id: "c6_q_1_7_07", q: "What is 2 ⅓ + 1 ½?",
      options: ["3 ⅚ (or 23/6)", "3 ⅖", "4", "3 ⅓"], a: "3 ⅚ (or 23/6)", acc: ["3 ⅚ (or 23/6)", "3 5/6", "23/6"], type: "written", difficulty: "medium",
      h: "7/3 + 3/2 = 14/6 + 9/6 = 23/6 = 3 5/6.", exp: "7/3 + 3/2 = 23/6 = 3 5/6."
    },
    { id: "c6_q_1_7_08", q: "A ribbon is 4 ½ m long. If 1 ¾ m is cut off, what length remains?",
      options: ["2 ¾ m", "2 ½ m", "3 m", "1 ¾ m"], a: "2 ¾ m", acc: ["2 ¾ m", "2 3/4 m", "2 3/4", "11/4"], type: "written", difficulty: "hard",
      h: "9/2 - 7/4 = 18/4 - 7/4 = 11/4 = 2 3/4 m.", exp: "9/2 - 7/4 = 11/4 = 2 ¾ m."
    },
    { id: "c6_q_1_7_09", q: "What is 1 - 5/8?",
      options: ["3/8", "5/8", "1/8", "8/5"], a: "3/8", acc: ["3/8"], type: "written", difficulty: "hard",
      h: "8/8 - 5/8 = ?", exp: "8/8 - 5/8 = 3/8."
    },
    { id: "c6_q_1_7_10", q: "Arrange in ascending order: 1/2, 2/3, 3/4, 1/4",
      options: ["1/4, 1/2, 2/3, 3/4", "3/4, 2/3, 1/2, 1/4", "1/4, 2/3, 1/2, 3/4", "1/2, 1/4, 2/3, 3/4"], a: "1/4, 1/2, 2/3, 3/4", acc: ["1/4, 1/2, 2/3, 3/4"], type: "written", difficulty: "hard",
      h: "Convert to common denominator 12: 3/12, 6/12, 8/12, 9/12.", exp: "1/4 < 1/2 < 2/3 < 3/4."
    }
  ],

  "c6_les_1_8": [ // Decimal fractions, decimal place value, conversion, and word problems
    { id: "c6_q_1_8_01", q: "What is 7/10 written as a decimal?",
      options: ["0.7", "0.07", "7.0", "0.007"], a: "0.7", acc: ["0.7"], type: "written", difficulty: "easy",
      h: "7 tenths.", exp: "7/10 = 0.7."
    },
    { id: "c6_q_1_8_02", q: "What is 45/100 written as a decimal?",
      options: ["0.45", "4.5", "0.045", "45.0"], a: "0.45", acc: ["0.45"], type: "written", difficulty: "easy",
      h: "45 hundredths.", exp: "45/100 = 0.45."
    },
    { id: "c6_q_1_8_03", q: "In 48.375, what is the place value of 7?",
      options: ["7/100 (7 hundredths)", "7/10", "7/1000", "70"], a: "7/100 (7 hundredths)", acc: ["7/100 (7 hundredths)", "7/100", "7 hundredths"], type: "written", difficulty: "easy",
      h: "Second digit after decimal point.", exp: "7 is in hundredths place = 7/100 = 0.07."
    },
    { id: "c6_q_1_8_04", q: "Convert 0.25 into a simplified fraction:",
      options: ["1/4", "25/10", "1/2", "2/5"], a: "1/4", acc: ["1/4"], type: "written", difficulty: "medium",
      h: "25/100 = 1/4.", exp: "25/100 simplifies to 1/4."
    },
    { id: "c6_q_1_8_05", q: "What is 14.5 + 8.75?",
      options: ["23.25", "22.25", "23.75", "22.80"], a: "23.25", acc: ["23.25"], type: "written", difficulty: "medium",
      h: "14.50 + 8.75 = ?", exp: "14.50 + 8.75 = 23.25."
    },
    { id: "c6_q_1_8_06", q: "What is 30.0 - 12.65?",
      options: ["17.35", "18.35", "17.45", "18.65"], a: "17.35", acc: ["17.35"], type: "written", difficulty: "medium",
      h: "30.00 - 12.65 = ?", exp: "30.00 - 12.65 = 17.35."
    },
    { id: "c6_q_1_8_07", q: "Which decimal is LARGER: 0.5 or 0.09?",
      options: ["0.5 (0.50 > 0.09)", "0.09", "Both equal", "None"], a: "0.5 (0.50 > 0.09)", acc: ["0.5 (0.50 > 0.09)", "0.5"], type: "written", difficulty: "medium",
      h: "5 tenths vs 0 tenths.", exp: "0.50 > 0.09."
    },
    { id: "c6_q_1_8_08", q: "Convert 3/8 into a decimal:",
      options: ["0.375", "0.38", "0.35", "0.37"], a: "0.375", acc: ["0.375"], type: "written", difficulty: "hard",
      h: "3 ÷ 8 = 0.375.", exp: "3/8 = 0.375."
    },
    { id: "c6_q_1_8_09", q: "Sunil bought 2.5 kg apples, 1.75 kg grapes, and 3.25 kg oranges. What was the total weight of fruits?",
      options: ["7.5 kg", "7.0 kg", "7.25 kg", "8.0 kg"], a: "7.5 kg", acc: ["7.5 kg", "7.5"], type: "written", difficulty: "hard",
      h: "2.50 + 1.75 + 3.25 = 7.50 kg.", exp: "2.50 + 1.75 + 3.25 = 7.5 kg."
    },
    { id: "c6_q_1_8_10", q: "Express 75 paise in rupees as a decimal:",
      options: ["₹0.75", "₹7.50", "₹0.075", "₹75.0"], a: "₹0.75", acc: ["₹0.75", "0.75", "Rs 0.75"], type: "written", difficulty: "hard",
      h: "75 ÷ 100 = 0.75.", exp: "75 paise = ₹0.75."
    }
  ],

  // =========================================================================
  // Theme 2: Ratio and Proportion
  // =========================================================================
  "c6_les_2_1": [ // Difference between fraction and ratio, Ratio and Proportion concepts
    { id: "c6_q_2_1_01", q: "What is a RATIO?",
      options: ["A mathematical comparison of two quantities of the same unit by division", "A sum of two numbers", "A geometric angle", "A polygon"], a: "A mathematical comparison of two quantities of the same unit by division", acc: ["A mathematical comparison of two quantities of the same unit by division"], type: "written", difficulty: "easy",
      h: "Comparison by division: a : b.", exp: "A ratio compares two quantities of the same kind by division."
    },
    { id: "c6_q_2_1_02", q: "What is the ratio of 20 boys to 30 girls in simplest form?",
      options: ["2 : 3", "20 : 30", "3 : 2", "1 : 2"], a: "2 : 3", acc: ["2 : 3", "2:3"], type: "written", difficulty: "easy",
      h: "Divide both terms by 10.", exp: "20 : 30 = 2 : 3."
    },
    { id: "c6_q_2_1_03", q: "Does a ratio have any units?",
      options: ["No, a ratio is a pure comparison number with NO units", "Yes, in cm", "Yes, in kg", "Yes, in rupees"], a: "No, a ratio is a pure comparison number with NO units", acc: ["No, a ratio is a pure comparison number with NO units", "No"], type: "written", difficulty: "easy",
      h: "Units in numerator and denominator cancel out.", exp: "A ratio has no units because it compares quantities of identical units."
    },
    { id: "c6_q_2_1_04", q: "What is the ratio of 50 cm to 2 m in simplest form?",
      options: ["1 : 4", "50 : 2", "25 : 1", "1 : 2"], a: "1 : 4", acc: ["1 : 4", "1:4"], type: "written", difficulty: "medium",
      h: "Convert 2 m to 200 cm. 50 : 200 = 1 : 4.", exp: "50 cm : 200 cm = 1 : 4."
    },
    { id: "c6_q_2_1_05", q: "In a proportion a : b :: c : d, the product of extremes equals:",
      options: ["Product of means (a × d = b × c)", "Sum of means", "Difference of means", "0"], a: "Product of means (a × d = b × c)", acc: ["Product of means (a × d = b × c)", "Product of means"], type: "written", difficulty: "medium",
      h: "Cross product rule: a × d = b × c.", exp: "In any proportion, Product of Extremes = Product of Means (ad = bc)."
    },
    { id: "c6_q_2_1_06", q: "Are the numbers 4, 6, 8, 12 in proportion?",
      options: ["Yes (4 × 12 = 48 and 6 × 8 = 48)", "No", "Only first two", "None"], a: "Yes (4 × 12 = 48 and 6 × 8 = 48)", acc: ["Yes (4 × 12 = 48 and 6 × 8 = 48)", "Yes"], type: "written", difficulty: "medium",
      h: "4/6 = 2/3 and 8/12 = 2/3.", exp: "4 × 12 = 48 and 6 × 8 = 48, so 4:6 :: 8:12 is a true proportion."
    },
    { id: "c6_q_2_1_07", q: "Find x in the proportion: 3 : 5 :: 12 : x",
      options: ["20", "15", "25", "18"], a: "20", acc: ["20"], type: "written", difficulty: "medium",
      h: "3 × x = 5 × 12 = 60. x = 60 ÷ 3 = 20.", exp: "3x = 60 ⟹ x = 20."
    },
    { id: "c6_q_2_1_08", q: "Divide ₹1200 between Ravi and Shikha in the ratio 2 : 3. What is Shikha's share?",
      options: ["₹720", "₹480", "₹600", "₹800"], a: "₹720", acc: ["₹720", "720", "Rs 720"], type: "written", difficulty: "hard",
      h: "Total parts = 2 + 3 = 5. Shikha gets 3/5 × 1200 = 720.", exp: "3/5 × 1200 = ₹720."
    },
    { id: "c6_q_2_1_09", q: "Ratio of length to breadth of a rectangle is 5 : 3. If breadth is 15 cm, what is the length?",
      options: ["25 cm", "20 cm", "30 cm", "45 cm"], a: "25 cm", acc: ["25 cm", "25"], type: "written", difficulty: "hard",
      h: "5/3 = L / 15 ⟹ L = (5 × 15) / 3 = 25 cm.", exp: "L = 25 cm."
    },
    { id: "c6_q_2_1_10", q: "What is the ratio of 30 minutes to 2 hours?",
      options: ["1 : 4", "1 : 2", "15 : 1", "3 : 2"], a: "1 : 4", acc: ["1 : 4", "1:4"], type: "written", difficulty: "hard",
      h: "2 hours = 120 minutes. 30 : 120 = 1 : 4.", exp: "30 min : 120 min = 1 : 4."
    }
  ],

  "c6_les_2_2": [ // Unitary method and direct variation
    { id: "c6_q_2_2_01", q: "What is the UNITARY METHOD?",
      options: ["Finding the value of 1 unit first, then finding the required value", "Adding all numbers", "Using a compass", "Dividing by zero"], a: "Finding the value of 1 unit first, then finding the required value", acc: ["Finding the value of 1 unit first, then finding the required value"], type: "written", difficulty: "easy",
      h: "Unit = 1.", exp: "The unitary method solves problems by first calculating the value of a single unit."
    },
    { id: "c6_q_2_2_02", q: "If 6 pens cost ₹72, what is the cost of 1 pen?",
      options: ["₹12", "₹10", "₹14", "₹15"], a: "₹12", acc: ["₹12", "12", "Rs 12"], type: "written", difficulty: "easy",
      h: "72 ÷ 6 = ?", exp: "72 ÷ 6 = ₹12 per pen."
    },
    { id: "c6_q_2_2_03", q: "If 1 pen costs ₹12, what is the cost of 9 pens?",
      options: ["₹108", "₹96", "₹120", "₹84"], a: "₹108", acc: ["₹108", "108", "Rs 108"], type: "written", difficulty: "easy",
      h: "9 × 12 = ?", exp: "9 × 12 = ₹108."
    },
    { id: "c6_q_2_2_04", q: "If 8 books cost ₹240, what is the cost of 5 books?",
      options: ["₹150", "₹120", "₹160", "₹180"], a: "₹150", acc: ["₹150", "150", "Rs 150"], type: "written", difficulty: "medium",
      h: "1 book = 240 ÷ 8 = ₹30. 5 books = 5 × 30 = ₹150.", exp: "1 book = ₹30. 5 books = 5 × 30 = ₹150."
    },
    { id: "c6_q_2_2_05", q: "A car travels 180 km on 15 litres of petrol. How far will it travel on 25 litres?",
      options: ["300 km", "250 km", "350 km", "270 km"], a: "300 km", acc: ["300 km", "300"], type: "written", difficulty: "medium",
      h: "Distance per litre = 180 ÷ 15 = 12 km. 25 × 12 = 300 km.", exp: "12 km/l × 25 l = 300 km."
    },
    { id: "c6_q_2_2_06", q: "If 12 workers build a wall in 4 days, does increasing the number of workers DECREASE the time required?",
      options: ["Yes, this is inverse variation", "No, it takes longer", "Time never changes", "None"], a: "Yes, this is inverse variation", acc: ["Yes, this is inverse variation", "Yes"], type: "written", difficulty: "medium",
      h: "More workers complete work faster.", exp: "More workers decrease the time needed (inverse variation)."
    },
    { id: "c6_q_2_2_07", q: "A train covers 240 km in 3 hours. How much distance will it cover in 5 hours at same speed?",
      options: ["400 km", "360 km", "450 km", "350 km"], a: "400 km", acc: ["400 km", "400"], type: "written", difficulty: "medium",
      h: "Speed = 240 ÷ 3 = 80 km/h. In 5 hours = 80 × 5 = 400 km.", exp: "80 km/h × 5 = 400 km."
    },
    { id: "c6_q_2_2_08", q: "If the cost of 15 envelopes is ₹45, how many envelopes can be purchased for ₹90?",
      options: ["30 envelopes", "25 envelopes", "20 envelopes", "45 envelopes"], a: "30 envelopes", acc: ["30 envelopes", "30"], type: "written", difficulty: "hard",
      h: "1 envelope = 45 ÷ 15 = ₹3. For ₹90 = 90 ÷ 3 = 30.", exp: "90 ÷ 3 = 30 envelopes."
    },
    { id: "c6_q_2_2_09", q: "A factory makes 1500 bottles in 6 hours. How many bottles will it make in 8 hours?",
      options: ["2000 bottles", "1800 bottles", "2400 bottles", "1900 bottles"], a: "2000 bottles", acc: ["2000 bottles", "2000"], type: "written", difficulty: "hard",
      h: "Rate = 1500 ÷ 6 = 250 per hour. 8 × 250 = 2000.", exp: "250 × 8 = 2000 bottles."
    },
    { id: "c6_q_2_2_10", q: "If the weight of 56 sheets of paper is 280 grams, what is the weight of 100 such sheets?",
      options: ["500 grams", "450 grams", "560 grams", "600 grams"], a: "500 grams", acc: ["500 grams", "500", "500g"], type: "written", difficulty: "hard",
      h: "1 sheet = 280 ÷ 56 = 5 g. 100 sheets = 100 × 5 = 500 g.", exp: "5 g × 100 = 500 grams."
    }
  ],

  "c6_les_2_3": [ // Percentage as fraction with denominator 100
    { id: "c6_q_2_3_01", q: "What does 'Percent' mean literally?",
      options: ["Per hundred (out of 100)", "Per ten", "Per thousand", "Per whole"], a: "Per hundred (out of 100)", acc: ["Per hundred (out of 100)", "Per hundred", "out of 100"], type: "written", difficulty: "easy",
      h: "Centum = 100.", exp: "Percent means 'per hundred' (parts out of 100), denoted by %."
    },
    { id: "c6_q_2_3_02", q: "Convert 25% into a simplified fraction:",
      options: ["1/4", "1/2", "1/5", "25/10"], a: "1/4", acc: ["1/4"], type: "written", difficulty: "easy",
      h: "25/100 = 1/4.", exp: "25% = 25/100 = 1/4."
    },
    { id: "c6_q_2_3_03", q: "Convert fraction 3/5 into a percentage:",
      options: ["60%", "30%", "75%", "50%"], a: "60%", acc: ["60%", "60"], type: "written", difficulty: "easy",
      h: "3/5 × 100% = ?", exp: "3/5 × 100 = 60%."
    },
    { id: "c6_q_2_3_04", q: "Convert decimal 0.45 into percentage:",
      options: ["45%", "4.5%", "0.45%", "450%"], a: "45%", acc: ["45%", "45"], type: "written", difficulty: "medium",
      h: "0.45 × 100% = 45%.", exp: "0.45 × 100 = 45%."
    },
    { id: "c6_q_2_3_05", q: "What is 20% of 150?",
      options: ["30", "20", "25", "35"], a: "30", acc: ["30"], type: "written", difficulty: "medium",
      h: "20/100 × 150 = 1/5 × 150 = 30.", exp: "0.20 × 150 = 30."
    },
    { id: "c6_q_2_3_06", q: "In a class of 40 students, 60% are girls. How many girls are in the class?",
      options: ["24", "20", "16", "28"], a: "24", acc: ["24"], type: "written", difficulty: "medium",
      h: "60/100 × 40 = 24.", exp: "60% of 40 = 24 girls."
    },
    { id: "c6_q_2_3_07", q: "What is 50% of ₹800?",
      options: ["₹400", "₹200", "₹500", "₹300"], a: "₹400", acc: ["₹400", "400", "Rs 400"], type: "written", difficulty: "medium",
      h: "50% is half.", exp: "Half of ₹800 is ₹400."
    },
    { id: "c6_q_2_3_08", q: "A student scored 36 marks out of 40 in a test. What is his percentage score?",
      options: ["90%", "85%", "92%", "80%"], a: "90%", acc: ["90%", "90"], type: "written", difficulty: "hard",
      h: "(36 / 40) × 100% = 9/10 × 100 = 90%.", exp: "(36 / 40) × 100 = 90%."
    },
    { id: "c6_q_2_3_09", q: "What is 12 ½% converted into a fraction?",
      options: ["1/8", "1/6", "1/4", "1/12"], a: "1/8", acc: ["1/8"], type: "written", difficulty: "hard",
      h: "25/2 ÷ 100 = 25/200 = 1/8.", exp: "12.5% = 12.5/100 = 1/8."
    },
    { id: "c6_q_2_3_10", q: "A shirt priced at ₹500 is offered at a 15% discount. What is the discount amount in rupees?",
      options: ["₹75", "₹50", "₹100", "₹85"], a: "₹75", acc: ["₹75", "75", "Rs 75"], type: "written", difficulty: "hard",
      h: "15/100 × 500 = 15 × 5 = ₹75.", exp: "15% of 500 = ₹75."
    }
  ],

  "c6_les_2_4": [ // Speed, distance, and time problems
    { id: "c6_q_2_4_01", q: "What is the formula for SPEED?",
      options: ["Speed = Distance / Time", "Speed = Distance × Time", "Speed = Time / Distance", "Speed = Distance + Time"], a: "Speed = Distance / Time", acc: ["Speed = Distance / Time", "Distance / Time", "Distance/Time"], type: "written", difficulty: "easy",
      h: "Rate of covering distance per unit time.", exp: "Speed = Distance ÷ Time."
    },
    { id: "c6_q_2_4_02", q: "What is the standard unit of speed?",
      options: ["km/h (or m/s)", "km", "hours", "m²"], a: "km/h (or m/s)", acc: ["km/h (or m/s)", "km/h", "m/s"], type: "written", difficulty: "easy",
      h: "Kilometres per hour or metres per second.", exp: "Speed is expressed in km/h or m/s."
    },
    { id: "c6_q_2_4_03", q: "A bus travels 120 km in 2 hours. What is its speed?",
      options: ["60 km/h", "50 km/h", "70 km/h", "240 km/h"], a: "60 km/h", acc: ["60 km/h", "60"], type: "written", difficulty: "easy",
      h: "Speed = 120 ÷ 2 = 60.", exp: "Speed = 120 / 2 = 60 km/h."
    },
    { id: "c6_q_2_4_04", q: "How do you calculate DISTANCE?",
      options: ["Distance = Speed × Time", "Distance = Speed / Time", "Distance = Time / Speed", "Distance = Speed + Time"], a: "Distance = Speed × Time", acc: ["Distance = Speed × Time", "Speed × Time", "Speed * Time"], type: "written", difficulty: "medium",
      h: "Multiply speed by elapsed time.", exp: "Distance = Speed × Time."
    },
    { id: "c6_q_2_4_05", q: "A cyclist rides at 15 km/h for 3 hours. What distance does he cover?",
      options: ["45 km", "30 km", "50 km", "5 km"], a: "45 km", acc: ["45 km", "45"], type: "written", difficulty: "medium",
      h: "15 × 3 = 45.", exp: "Distance = 15 × 3 = 45 km."
    },
    { id: "c6_q_2_4_06", q: "How do you calculate TIME taken?",
      options: ["Time = Distance / Speed", "Time = Distance × Speed", "Time = Speed / Distance", "Time = Distance - Speed"], a: "Time = Distance / Speed", acc: ["Time = Distance / Speed", "Distance / Speed", "Distance/Speed"], type: "written", difficulty: "medium",
      h: "Divide total distance by speed.", exp: "Time = Distance ÷ Speed."
    },
    { id: "c6_q_2_4_07", q: "How much time will an aeroplane flying at 600 km/h take to cover 1800 km?",
      options: ["3 hours", "4 hours", "2.5 hours", "5 hours"], a: "3 hours", acc: ["3 hours", "3", "3 hrs"], type: "written", difficulty: "medium",
      h: "1800 ÷ 600 = 3.", exp: "Time = 1800 / 600 = 3 hours."
    },
    { id: "c6_q_2_4_08", q: "To convert km/h to m/s, multiply by which fraction?",
      options: ["5/18", "18/5", "10/36", "60/100"], a: "5/18", acc: ["5/18"], type: "written", difficulty: "hard",
      h: "1000 m / 3600 s = 5/18.", exp: "1 km/h = 1000/3600 = 5/18 m/s."
    },
    { id: "c6_q_2_4_09", q: "Convert 72 km/h into m/s:",
      options: ["20 m/s", "25 m/s", "15 m/s", "18 m/s"], a: "20 m/s", acc: ["20 m/s", "20"], type: "written", difficulty: "hard",
      h: "72 × (5/18) = 4 × 5 = 20 m/s.", exp: "72 × (5/18) = 20 m/s."
    },
    { id: "c6_q_2_4_10", q: "A person walks 400 metres in 5 minutes. What is his speed in metres per minute?",
      options: ["80 m/min", "70 m/min", "90 m/min", "2000 m/min"], a: "80 m/min", acc: ["80 m/min", "80"], type: "written", difficulty: "hard",
      h: "400 ÷ 5 = 80.", exp: "Speed = 400 / 5 = 80 m/min."
    }
  ],

  // =========================================================================
  // Theme 3: Algebra
  // =========================================================================
  "c6_les_3_1": [ // Introduction to algebra, constants, variables, and algebraic terms
    { id: "c6_q_3_1_01", q: "What is a VARIABLE in algebra?",
      options: ["A symbol (usually a letter like x, y) that represents an unknown changing value", "A fixed number like 5", "A plus sign", "An equal sign"], a: "A symbol (usually a letter like x, y) that represents an unknown changing value", acc: ["A symbol (usually a letter like x, y) that represents an unknown changing value"], type: "written", difficulty: "easy",
      h: "Values can vary.", exp: "A variable represents an unknown quantity that can take different values."
    },
    { id: "c6_q_3_1_02", q: "In the expression 4x + 7, which is the CONSTANT?",
      options: ["7", "4", "x", "4x"], a: "7", acc: ["7"], type: "written", difficulty: "easy",
      h: "Constant has a fixed numerical value.", exp: "7 is the constant term."
    },
    { id: "c6_q_3_1_03", q: "In the term 6y, what is the COEFFICIENT of y?",
      options: ["6", "y", "6y", "1"], a: "6", acc: ["6", "six"], type: "written", difficulty: "easy",
      h: "The numerical multiplying factor.", exp: "6 is the numerical coefficient of y."
    },
    { id: "c6_q_3_1_04", q: "What is an algebraic expression with ONE term called (e.g. 5x)?",
      options: ["Monomial", "Binomial", "Trinomial", "Polynomial"], a: "Monomial", acc: ["Monomial"], type: "written", difficulty: "medium",
      h: "Mono = single.", exp: "An expression with 1 term is a monomial."
    },
    { id: "c6_q_3_1_05", q: "What is an expression with TWO terms called (e.g. 3x + 4)?",
      options: ["Binomial", "Monomial", "Trinomial", "Constant"], a: "Binomial", acc: ["Binomial"], type: "written", difficulty: "medium",
      h: "Bi = two.", exp: "An expression with 2 terms is a binomial."
    },
    { id: "c6_q_3_1_06", q: "Which pair are LIKE TERMS?",
      options: ["4x and 9x", "4x and 4y", "3x and 3x²", "5 and 5a"], a: "4x and 9x", acc: ["4x and 9x"], type: "written", difficulty: "medium",
      h: "Same algebraic variable and exponent.", exp: "4x and 9x have the exact same variable part x."
    },
    { id: "c6_q_3_1_07", q: "What is the value of 3x + 5 when x = 4?",
      options: ["17", "12", "9", "20"], a: "17", acc: ["17"], type: "written", difficulty: "medium",
      h: "3 × 4 + 5 = 12 + 5 = 17.", exp: "3(4) + 5 = 17."
    },
    { id: "c6_q_3_1_08", q: "What is the coefficient of x in the term -x?",
      options: ["-1", "1", "0", "-x"], a: "-1", acc: ["-1"], type: "written", difficulty: "hard",
      h: "-x = -1 × x.", exp: "The numerical coefficient of -x is -1."
    },
    { id: "c6_q_3_1_09", q: "Combine like terms: 5x + 3y + 2x - y = ?",
      options: ["7x + 2y", "7x + 4y", "10xy", "7x - 2y"], a: "7x + 2y", acc: ["7x + 2y"], type: "written", difficulty: "hard",
      h: "(5x + 2x) + (3y - y) = 7x + 2y.", exp: "5x + 2x = 7x, 3y - y = 2y. Result: 7x + 2y."
    },
    { id: "c6_q_3_1_10", q: "What is the degree of the monomial term 7x²y³?",
      options: ["5", "2", "3", "7"], a: "5", acc: ["5", "five"], type: "written", difficulty: "hard",
      h: "Sum the powers of variables: 2 + 3 = 5.", exp: "Degree = 2 + 3 = 5."
    }
  ],

  "c6_les_3_2": [ // Framing algebraic expressions from situations
    { id: "c6_q_3_2_01", q: "Write an algebraic expression for: '5 more than x'",
      options: ["x + 5", "5x", "x - 5", "5/x"], a: "x + 5", acc: ["x + 5", "x+5"], type: "written", difficulty: "easy",
      h: "More than means addition.", exp: "x + 5."
    },
    { id: "c6_q_3_2_02", q: "Write an algebraic expression for: '7 subtracted from y'",
      options: ["y - 7", "7 - y", "7y", "y/7"], a: "y - 7", acc: ["y - 7", "y-7"], type: "written", difficulty: "easy",
      h: "Subtract 7 from y.", exp: "y - 7."
    },
    { id: "c6_q_3_2_03", q: "Write an algebraic expression for: 'Product of 4 and p'",
      options: ["4p", "4 + p", "4 - p", "p/4"], a: "4p", acc: ["4p", "4*p"], type: "written", difficulty: "easy",
      h: "Product means multiplication.", exp: "4p."
    },
    { id: "c6_q_3_2_04", q: "Write an expression for: '3 times x added to 8'",
      options: ["3x + 8", "8x + 3", "3(x + 8)", "24x"], a: "3x + 8", acc: ["3x + 8", "3x+8"], type: "written", difficulty: "medium",
      h: "3x plus 8.", exp: "3x + 8."
    },
    { id: "c6_q_3_2_05", q: "Rohan is x years old. His father is 4 times his age plus 5 years. What is the father's age?",
      options: ["4x + 5", "4x - 5", "5x + 4", "4(x + 5)"], a: "4x + 5", acc: ["4x + 5", "4x+5"], type: "written", difficulty: "medium",
      h: "4 times x is 4x, then add 5.", exp: "Father's age = 4x + 5 years."
    },
    { id: "c6_q_3_2_06", q: "A pen costs ₹x and a notebook costs ₹20. What is the total cost of 3 pens and 2 notebooks?",
      options: ["3x + 40", "3x + 20", "2x + 60", "5x + 20"], a: "3x + 40", acc: ["3x + 40", "3x+40"], type: "written", difficulty: "medium",
      h: "(3 × x) + (2 × 20) = 3x + 40.", exp: "3x + 40 rupees."
    },
    { id: "c6_q_3_2_07", q: "Write an expression for: 'One-fourth of the sum of numbers a and b'",
      options: ["¼(a + b)", "¼a + b", "a/4 + b/4", "Both ¼(a + b) and a/4 + b/4"], a: "Both ¼(a + b) and a/4 + b/4", acc: ["Both ¼(a + b) and a/4 + b/4", "¼(a + b)"], type: "written", difficulty: "medium",
      h: "¼ × (a + b).", exp: "¼(a + b) = (a + b)/4."
    },
    { id: "c6_q_3_2_08", q: "If the side of an equilateral triangle is 's', what is its perimeter in algebra?",
      options: ["3s", "s³", "s + 3", "3 + s"], a: "3s", acc: ["3s", "3*s"], type: "written", difficulty: "hard",
      h: "s + s + s = 3s.", exp: "Perimeter = 3s."
    },
    { id: "c6_q_3_2_09", q: "If length of a rectangle is 'l' and breadth is 'b', what is its perimeter?",
      options: ["2(l + b)", "l × b", "l + b", "2l + b"], a: "2(l + b)", acc: ["2(l + b)", "2(l+b)"], type: "written", difficulty: "hard",
      h: "2 lengths + 2 breadths.", exp: "P = 2(l + b)."
    },
    { id: "c6_q_3_2_10", q: "A bus travels at v km/h for 4 hours and is still 30 km away from destination. What is total distance?",
      options: ["4v + 30 km", "4v - 30 km", "30v + 4 km", "4(v + 30) km"], a: "4v + 30 km", acc: ["4v + 30 km", "4v + 30"], type: "written", difficulty: "hard",
      h: "Distance covered = 4v, remaining = 30.", exp: "Total distance = 4v + 30 km."
    }
  ],

  "c6_les_3_3": [ // Simple linear equations in one variable
    { id: "c6_q_3_3_01", q: "Solve for x: x + 7 = 15",
      options: ["x = 8", "x = 22", "x = 7", "x = 9"], a: "x = 8", acc: ["x = 8", "8"], type: "written", difficulty: "easy",
      h: "Subtract 7 from both sides: 15 - 7.", exp: "x = 15 - 7 = 8."
    },
    { id: "c6_q_3_3_02", q: "Solve for y: y - 5 = 12",
      options: ["y = 17", "y = 7", "y = -7", "y = 60"], a: "y = 17", acc: ["y = 17", "17"], type: "written", difficulty: "easy",
      h: "Add 5 to both sides: 12 + 5.", exp: "y = 12 + 5 = 17."
    },
    { id: "c6_q_3_3_03", q: "Solve for p: 4p = 36",
      options: ["p = 9", "p = 8", "p = 32", "p = 144"], a: "p = 9", acc: ["p = 9", "9"], type: "written", difficulty: "easy",
      h: "Divide both sides by 4: 36 ÷ 4.", exp: "p = 36 / 4 = 9."
    },
    { id: "c6_q_3_3_04", q: "Solve for m: m / 3 = 7",
      options: ["m = 21", "m = 10", "m = 4", "m = 24"], a: "m = 21", acc: ["m = 21", "21"], type: "written", difficulty: "medium",
      h: "Multiply both sides by 3: 7 × 3.", exp: "m = 7 × 3 = 21."
    },
    { id: "c6_q_3_3_05", q: "Solve: 2x + 5 = 19",
      options: ["x = 7", "x = 12", "x = 6", "x = 8"], a: "x = 7", acc: ["x = 7", "7"], type: "written", difficulty: "medium",
      h: "2x = 19 - 5 = 14 ⟹ x = 14/2 = 7.", exp: "2x = 14 ⟹ x = 7."
    },
    { id: "c6_q_3_3_06", q: "Solve: 3y - 4 = 11",
      options: ["y = 5", "y = 7", "y = 15", "y = 4"], a: "y = 5", acc: ["y = 5", "5"], type: "written", difficulty: "medium",
      h: "3y = 11 + 4 = 15 ⟹ y = 15/3 = 5.", exp: "3y = 15 ⟹ y = 5."
    },
    { id: "c6_q_3_3_07", q: "What is an EQUATION in algebra?",
      options: ["A statement of equality between two expressions containing an equal sign (=)", "An expression without = sign", "A single number", "A polygon"], a: "A statement of equality between two expressions containing an equal sign (=)", acc: ["A statement of equality between two expressions containing an equal sign (=)"], type: "written", difficulty: "medium",
      h: "Must have '=' symbol.", exp: "An equation asserts that LHS = RHS using an equal sign."
    },
    { id: "c6_q_3_3_08", q: "Solve: 5x - 3 = 2x + 12",
      options: ["x = 5", "x = 3", "x = 7", "x = 4"], a: "x = 5", acc: ["x = 5", "5"], type: "written", difficulty: "hard",
      h: "5x - 2x = 12 + 3 ⟹ 3x = 15 ⟹ x = 5.", exp: "3x = 15 ⟹ x = 5."
    },
    { id: "c6_q_3_3_09", q: "The sum of a number and 14 is 35. What is the number?",
      options: ["21", "20", "49", "19"], a: "21", acc: ["21"], type: "written", difficulty: "hard",
      h: "x + 14 = 35 ⟹ x = 35 - 14 = 21.", exp: "x = 21."
    },
    { id: "c6_q_3_3_10", q: "Solve: (x + 3) / 2 = 8",
      options: ["x = 13", "x = 16", "x = 11", "x = 10"], a: "x = 13", acc: ["x = 13", "13"], type: "written", difficulty: "hard",
      h: "x + 3 = 16 ⟹ x = 16 - 3 = 13.", exp: "x + 3 = 16 ⟹ x = 13."
    }
  ],

  // =========================================================================
  // Theme 4: Geometry
  // =========================================================================
  "c6_les_4_1": [ // Basic geometrical concepts: Point, line, line segment, ray, intersecting and parallel lines
    { id: "c6_q_4_1_01", q: "What is a POINT in geometry?",
      options: ["An exact location in space with no length, breadth, or thickness", "A straight line", "A circle", "A ray"], a: "An exact location in space with no length, breadth, or thickness", acc: ["An exact location in space with no length, breadth, or thickness"], type: "written", difficulty: "easy",
      h: "Represented by a fine dot with capital letter.", exp: "A point denotes an exact location with zero dimensions."
    },
    { id: "c6_q_4_1_02", q: "How many lines can pass through ONE given point?",
      options: ["Infinitely many", "Only 1", "Only 2", "100"], a: "Infinitely many", acc: ["Infinitely many", "Infinite"], type: "written", difficulty: "easy",
      h: "Think of spokes in a wheel.", exp: "An infinite number of lines can pass through a single point."
    },
    { id: "c6_q_4_1_03", q: "How many straight lines can pass through TWO distinct given points?",
      options: ["Exactly 1 unique line", "2 lines", "Infinitely many", "0 lines"], a: "Exactly 1 unique line", acc: ["Exactly 1 unique line", "1", "one"], type: "written", difficulty: "easy",
      h: "Only one straight path connects two points.", exp: "Two distinct points determine exactly one unique straight line."
    },
    { id: "c6_q_4_1_04", q: "Points that lie on the same straight line are called:",
      options: ["Collinear points", "Concurrent points", "Non-collinear points", "Coplanar points"], a: "Collinear points", acc: ["Collinear points", "Collinear"], type: "written", difficulty: "medium",
      h: "Co = together, linear = on a line.", exp: "Three or more points lying on the same line are collinear."
    },
    { id: "c6_q_4_1_05", q: "Lines that lie in the same plane and never meet however far extended are called:",
      options: ["Parallel lines", "Intersecting lines", "Concurrent lines", "Perpendicular lines"], a: "Parallel lines", acc: ["Parallel lines"], type: "written", difficulty: "medium",
      h: "Like railway tracks.", exp: "Parallel lines remain equidistant and never intersect."
    },
    { id: "c6_q_4_1_06", q: "When three or more lines pass through the SAME common point, they are called:",
      options: ["Concurrent lines", "Parallel lines", "Collinear lines", "Segment lines"], a: "Concurrent lines", acc: ["Concurrent lines"], type: "written", difficulty: "medium",
      h: "Point of concurrence.", exp: "Lines intersecting at a single common point are concurrent."
    },
    { id: "c6_q_4_1_07", q: "A flat 2D surface that extends infinitely in all directions is a:",
      options: ["Plane", "Line", "Ray", "Point"], a: "Plane", acc: ["Plane"], type: "written", difficulty: "medium",
      h: "Like an infinite blackboard.", exp: "A plane is an infinite flat 2-dimensional surface."
    },
    { id: "c6_q_4_1_08", q: "What is the difference between a ray and a line segment?",
      options: ["A ray has 1 endpoint, a line segment has 2 endpoints", "A ray has 2 endpoints", "They are identical", "A line segment has infinite length"], a: "A ray has 1 endpoint, a line segment has 2 endpoints", acc: ["A ray has 1 endpoint, a line segment has 2 endpoints"], type: "written", difficulty: "hard",
      h: "Ray = 1 end, Segment = 2 ends.", exp: "A ray has 1 endpoint and extends infinitely; a line segment has fixed length between 2 endpoints."
    },
    { id: "c6_q_4_1_09", q: "Two intersecting lines meet at how many points?",
      options: ["Exactly 1 point", "2 points", "Infinitely many", "0 points"], a: "Exactly 1 point", acc: ["Exactly 1 point", "1"], type: "written", difficulty: "hard",
      h: "Single intersection vertex.", exp: "Two non-parallel lines intersect at exactly one point."
    },
    { id: "c6_q_4_1_10", q: "If line AB is perpendicular to line CD, what is the angle between them?",
      options: ["90° (Right angle)", "180°", "45°", "0°"], a: "90° (Right angle)", acc: ["90° (Right angle)", "90°", "90"], type: "written", difficulty: "hard",
      h: "Perpendicular means right angle.", exp: "Perpendicular lines intersect at 90°."
    }
  ],

  "c6_les_4_2": [ // Angles: Types of angles, measuring angles with protractor
    { id: "c6_q_4_2_01", q: "What is an angle measuring LESS than 90° called?",
      options: ["Acute angle", "Right angle", "Obtuse angle", "Straight angle"], a: "Acute angle", acc: ["Acute angle", "Acute"], type: "written", difficulty: "easy",
      h: "Between 0° and 90°.", exp: "An angle < 90° is an acute angle."
    },
    { id: "c6_q_4_2_02", q: "What is an angle measuring EXACTLY 90° called?",
      options: ["Right angle", "Acute angle", "Obtuse angle", "Reflex angle"], a: "Right angle", acc: ["Right angle"], type: "written", difficulty: "easy",
      h: "Square corner.", exp: "A 90° angle is a right angle."
    },
    { id: "c6_q_4_2_03", q: "What is an angle measuring between 90° and 180° called?",
      options: ["Obtuse angle", "Acute angle", "Straight angle", "Reflex angle"], a: "Obtuse angle", acc: ["Obtuse angle", "Obtuse"], type: "written", difficulty: "easy",
      h: "90° < θ < 180°.", exp: "An angle between 90° and 180° is an obtuse angle."
    },
    { id: "c6_q_4_2_04", q: "What is an angle measuring EXACTLY 180° called?",
      options: ["Straight angle", "Complete angle", "Right angle", "Reflex angle"], a: "Straight angle", acc: ["Straight angle"], type: "written", difficulty: "medium",
      h: "Forms a straight line.", exp: "A 180° angle is a straight angle."
    },
    { id: "c6_q_4_2_05", q: "What is an angle measuring between 180° and 360° called?",
      options: ["Reflex angle", "Obtuse angle", "Straight angle", "Complete angle"], a: "Reflex angle", acc: ["Reflex angle", "Reflex"], type: "written", difficulty: "medium",
      h: "Greater than straight line.", exp: "An angle between 180° and 360° is a reflex angle."
    },
    { id: "c6_q_4_2_06", q: "What is an angle measuring EXACTLY 360° called?",
      options: ["Complete angle (Full turn)", "Straight angle", "Right angle", "Zero angle"], a: "Complete angle (Full turn)", acc: ["Complete angle (Full turn)", "Complete angle"], type: "written", difficulty: "medium",
      h: "One full rotation.", exp: "A 360° angle is a complete angle."
    },
    { id: "c6_q_4_2_07", q: "Which instrument in geometry box is used to measure and draw angles?",
      options: ["Protractor (D-scale)", "Ruler", "Compass", "Divider"], a: "Protractor (D-scale)", acc: ["Protractor (D-scale)", "Protractor"], type: "written", difficulty: "medium",
      h: "Semi-circular scale graduated 0° to 180°.", exp: "A protractor measures angles in degrees."
    },
    { id: "c6_q_4_2_08", q: "What is the angle between hands of a clock at 3:00 o'clock?",
      options: ["90° (Right angle)", "60°", "180°", "120°"], a: "90° (Right angle)", acc: ["90° (Right angle)", "90°", "90"], type: "written", difficulty: "hard",
      h: "Hour hand at 3, minute hand at 12.", exp: "At 3:00, hands form a 90° right angle."
    },
    { id: "c6_q_4_2_09", q: "What is the angle between hands of a clock at 6:00 o'clock?",
      options: ["180° (Straight angle)", "90°", "120°", "360°"], a: "180° (Straight angle)", acc: ["180° (Straight angle)", "180°", "180"], type: "written", difficulty: "hard",
      h: "Straight line pointing up and down.", exp: "At 6:00, hands form a 180° straight angle."
    },
    { id: "c6_q_4_2_10", q: "What is the reflex angle corresponding to an interior angle of 60°?",
      options: ["300°", "120°", "240°", "180°"], a: "300°", acc: ["300°", "300"], type: "written", difficulty: "hard",
      h: "360° - 60° = ?", exp: "Reflex angle = 360° - 60° = 300°."
    }
  ],

  "c6_les_4_3": [ // Triangles, quadrilaterals, polygons, and circles
    { id: "c6_q_4_3_01", q: "What is the sum of all three interior angles of any triangle?",
      options: ["180°", "360°", "90°", "270°"], a: "180°", acc: ["180°", "180", "180 degrees"], type: "written", difficulty: "easy",
      h: "Constant angle-sum property.", exp: "The angles of a triangle always sum to 180°."
    },
    { id: "c6_q_4_3_02", q: "What is a triangle with NO two sides equal called?",
      options: ["Scalene triangle", "Isosceles triangle", "Equilateral triangle", "Right triangle"], a: "Scalene triangle", acc: ["Scalene triangle", "Scalene"], type: "written", difficulty: "easy",
      h: "All 3 sides have different lengths.", exp: "A scalene triangle has all three sides of different lengths."
    },
    { id: "c6_q_4_3_03", q: "What is a triangle with TWO equal sides called?",
      options: ["Isosceles triangle", "Equilateral triangle", "Scalene triangle", "Acute triangle"], a: "Isosceles triangle", acc: ["Isosceles triangle", "Isosceles"], type: "written", difficulty: "easy",
      h: "Two legs equal.", exp: "An isosceles triangle has 2 equal sides."
    },
    { id: "c6_q_4_3_04", q: "What is the sum of interior angles of a 4-sided QUADRILATERAL?",
      options: ["360°", "180°", "540°", "720°"], a: "360°", acc: ["360°", "360", "360 degrees"], type: "written", difficulty: "medium",
      h: "Divide into 2 triangles: 2 × 180° = 360°.", exp: "Sum of angles in any quadrilateral = (4 - 2) × 180° = 360°."
    },
    { id: "c6_q_4_3_05", q: "What is the longest chord of a circle that passes through its center?",
      options: ["Diameter", "Radius", "Arc", "Sector"], a: "Diameter", acc: ["Diameter"], type: "written", difficulty: "medium",
      h: "d = 2r.", exp: "The diameter is the longest chord passing through the circle's center."
    },
    { id: "c6_q_4_3_06", q: "What is the relationship between Radius (r) and Diameter (d)?",
      options: ["d = 2r (Diameter is twice radius)", "r = 2d", "d = r²", "d = r + 2"], a: "d = 2r (Diameter is twice radius)", acc: ["d = 2r (Diameter is twice radius)", "d = 2r"], type: "written", difficulty: "medium",
      h: "Diameter = 2 × Radius.", exp: "d = 2r."
    },
    { id: "c6_q_4_3_07", q: "A region bounded by two radii and an arc of a circle is a:",
      options: ["Sector", "Segment", "Chord", "Circumference"], a: "Sector", acc: ["Sector"], type: "written", difficulty: "medium",
      h: "Like a pizza slice.", exp: "A sector is bounded by 2 radii and the intercepted arc."
    },
    { id: "c6_q_4_3_08", q: "A region enclosed between a chord and its corresponding arc is a:",
      options: ["Segment", "Sector", "Diameter", "Radius"], a: "Segment", acc: ["Segment"], type: "written", difficulty: "hard",
      h: "Cut off by a straight chord.", exp: "A segment is the region bounded by a chord and an arc."
    },
    { id: "c6_q_4_3_09", q: "If two angles of a triangle are 50° and 70°, what is the third angle?",
      options: ["60°", "50°", "80°", "90°"], a: "60°", acc: ["60°", "60", "60 degrees"], type: "written", difficulty: "hard",
      h: "180 - (50 + 70) = 180 - 120 = 60°.", exp: "Third angle = 180° - 120° = 60°."
    },
    { id: "c6_q_4_3_10", q: "What is a regular polygon with 8 sides called?",
      options: ["Regular Octagon", "Hexagon", "Decagon", "Heptagon"], a: "Regular Octagon", acc: ["Regular Octagon", "Octagon"], type: "written", difficulty: "hard",
      h: "Octa = 8.", exp: "An 8-sided polygon is an octagon."
    }
  ],

  "c6_les_4_4": [ // 3D solids and symmetry
    { id: "c6_q_4_4_01", q: "How many faces, vertices, and edges does a CUBE have?",
      options: ["6 Faces, 8 Vertices, 12 Edges", "8 Faces, 6 Vertices, 12 Edges", "6 Faces, 12 Vertices, 8 Edges", "4 Faces, 4 Vertices, 6 Edges"], a: "6 Faces, 8 Vertices, 12 Edges", acc: ["6 Faces, 8 Vertices, 12 Edges"], type: "written", difficulty: "easy",
      h: "6 square faces.", exp: "Cube has 6 faces, 8 vertices, and 12 edges."
    },
    { id: "c6_q_4_4_02", q: "What is Euler's formula for convex polyhedra?",
      options: ["F + V - E = 2", "F + E - V = 2", "F + V + E = 2", "F × V = E"], a: "F + V - E = 2", acc: ["F + V - E = 2", "F+V-E=2"], type: "written", difficulty: "easy",
      h: "Faces + Vertices - Edges = 2.", exp: "Euler's formula states F + V - E = 2."
    },
    { id: "c6_q_4_4_03", q: "How many faces does a TRIANGULAR PRISM have?",
      options: ["5 (2 triangles + 3 rectangles)", "4", "6", "8"], a: "5 (2 triangles + 3 rectangles)", acc: ["5 (2 triangles + 3 rectangles)", "5", "five"], type: "written", difficulty: "easy",
      h: "2 bases + 3 lateral faces.", exp: "A triangular prism has 5 faces."
    },
    { id: "c6_q_4_4_04", q: "How many faces does a SQUARE PYRAMID have?",
      options: ["5 (1 square + 4 triangles)", "4", "6", "8"], a: "5 (1 square + 4 triangles)", acc: ["5 (1 square + 4 triangles)", "5"], type: "written", difficulty: "medium",
      h: "1 base + 4 triangular sides.", exp: "A square pyramid has 5 faces."
    },
    { id: "c6_q_4_4_05", q: "Does Euler's formula apply to a CYLINDER or SPHERE?",
      options: ["No, Euler's formula applies ONLY to flat-faced polyhedra", "Yes, always", "Only for sphere", "Only for cylinder"], a: "No, Euler's formula applies ONLY to flat-faced polyhedra", acc: ["No, Euler's formula applies ONLY to flat-faced polyhedra", "No"], type: "written", difficulty: "medium",
      h: "Curved solids do not have standard polygonal edges/vertices.", exp: "Euler's relation is valid only for polyhedra with flat polygonal faces."
    },
    { id: "c6_q_4_4_06", q: "What 2D net unfolds into a CYLINDER?",
      options: ["1 Rectangle + 2 Circles", "6 Squares", "1 Sector + 1 Circle", "2 Triangles + 3 Rectangles"], a: "1 Rectangle + 2 Circles", acc: ["1 Rectangle + 2 Circles"], type: "written", difficulty: "medium",
      h: "Rolled rectangle with circular end caps.", exp: "Unrolling a cylinder gives 1 rectangle and 2 circular bases."
    },
    { id: "c6_q_4_4_07", q: "What 2D net unfolds into a CONE?",
      options: ["1 Sector of a circle + 1 Circle", "1 Rectangle + 2 Circles", "4 Triangles", "1 Square + 4 Triangles"], a: "1 Sector of a circle + 1 Circle", acc: ["1 Sector of a circle + 1 Circle"], type: "written", difficulty: "medium",
      h: "Circular base + curved fan sector.", exp: "A cone net consists of 1 circular base and 1 sector."
    },
    { id: "c6_q_4_4_08", q: "A regular hexagon has how many lines of symmetry?",
      options: ["6", "3", "12", "4"], a: "6", acc: ["6", "six"], type: "written", difficulty: "hard",
      h: "A regular n-sided polygon has n lines of symmetry.", exp: "A regular hexagon has 6 lines of symmetry."
    },
    { id: "c6_q_4_4_09", q: "For a polyhedron with 6 faces and 8 vertices, verify Euler's formula: what is E?",
      options: ["12 edges", "14 edges", "10 edges", "16 edges"], a: "12 edges", acc: ["12 edges", "12", "twelve"], type: "written", difficulty: "hard",
      h: "6 + 8 - E = 2 ⟹ 14 - E = 2 ⟹ E = 12.", exp: "E = 14 - 2 = 12 edges."
    },
    { id: "c6_q_4_4_10", q: "Which letter has BOTH horizontal and vertical line symmetry?",
      options: ["H", "A", "B", "C"], a: "H", acc: ["H"], type: "written", difficulty: "hard",
      h: "Can be folded horizontally and vertically.", exp: "H, I, X, O have both horizontal and vertical symmetry."
    }
  ],

  "c6_les_4_5": [ // Geometrical constructions: Line segments, perpendiculars, angle bisectors
    { id: "c6_q_4_5_01", q: "Which instrument is used with a ruler to draw a circle or arc of exact radius?",
      options: ["Compass", "Divider", "Protractor", "Set square"], a: "Compass", acc: ["Compass"], type: "written", difficulty: "easy",
      h: "It holds a pencil and rotates about a needle point.", exp: "A compass is used to draw arcs and circles of fixed radii."
    },
    { id: "c6_q_4_5_02", q: "An angle bisector divides an angle into:",
      options: ["Two equal angles", "Three equal angles", "Right angles", "Unequal angles"], a: "Two equal angles", acc: ["Two equal angles"], type: "written", difficulty: "easy",
      h: "Bi = two, sect = cut.", exp: "An angle bisector divides an angle into two equal halves."
    },
    { id: "c6_q_4_5_03", q: "A perpendicular bisector of a line segment AB:",
      options: ["Divides AB into two equal halves and makes a 90° angle with AB", "Only divides in two halves", "Only makes 45° angle", "Is parallel to AB"], a: "Divides AB into two equal halves and makes a 90° angle with AB", acc: ["Divides AB into two equal halves and makes a 90° angle with AB"], type: "written", difficulty: "easy",
      h: "Perpendicular (90°) + Bisector (equal parts).", exp: "It bisects the segment at a 90° right angle."
    },
    { id: "c6_q_4_5_04", q: "If you bisect a 90° angle using a compass, what is the measure of each resulting angle?",
      options: ["45°", "30°", "60°", "40°"], a: "45°", acc: ["45°", "45"], type: "written", difficulty: "medium",
      h: "90° ÷ 2 = 45°.", exp: "90° / 2 = 45°."
    },
    { id: "c6_q_4_5_05", q: "To construct a 60° angle using ruler and compass only, we construct an arc from:",
      options: ["An equilateral triangle construction with radius equal to initial arc", "Protractor", "Right angle", "Square"], a: "An equilateral triangle construction with radius equal to initial arc", acc: ["An equilateral triangle construction with radius equal to initial arc"], type: "written", difficulty: "medium",
      h: "First arc cut with same compass radius gives 60°.", exp: "Cutting an initial arc with the unchanged compass radius marks 60°."
    },
    { id: "c6_q_4_5_06", q: "If a line segment of 8 cm is bisected, what is the length of each half?",
      options: ["4 cm", "2 cm", "6 cm", "8 cm"], a: "4 cm", acc: ["4 cm", "4"], type: "written", difficulty: "medium",
      h: "8 ÷ 2 = 4.", exp: "8 cm / 2 = 4 cm."
    },
    { id: "c6_q_4_5_07", q: "To construct the perpendicular bisector of segment AB, the compass radius should be set to:",
      options: ["More than half of length AB", "Less than half of AB", "Equal to 1 cm", "Any tiny length"], a: "More than half of length AB", acc: ["More than half of length AB", "More than half"], type: "written", difficulty: "medium",
      h: "Arcs must intersect above and below the line.", exp: "Compass radius must be > ½(AB) so that arcs intersect."
    },
    { id: "c6_q_4_5_08", q: "Which angle CANNOT be constructed using ruler and compass only by successive bisecting from 60° and 90°?",
      options: ["40°", "30°", "45°", "15°"], a: "40°", acc: ["40°", "40"], type: "written", difficulty: "hard",
      h: "Multiples of 15° are constructible (15°, 30°, 45°, 60°, 75°, 90°).", exp: "40° cannot be constructed with classical compass and straightedge."
    },
    { id: "c6_q_4_5_09", q: "If you construct an angle of 60° and then bisect it, and then bisect one of the halves again, what angle do you get?",
      options: ["15°", "30°", "20°", "10°"], a: "15°", acc: ["15°", "15"], type: "written", difficulty: "hard",
      h: "60° ÷ 2 = 30°; 30° ÷ 2 = 15°.", exp: "60° ⟶ 30° ⟶ 15°."
    },
    { id: "c6_q_4_5_10", q: "How many set-squares are in a standard geometry box?",
      options: ["2 (one 45°-45°-90° and one 30°-60°-90°)", "1", "3", "4"], a: "2 (one 45°-45°-90° and one 30°-60°-90°)", acc: ["2 (one 45°-45°-90° and one 30°-60°-90°)", "2", "two"], type: "written", difficulty: "hard",
      h: "Two triangular rulers with specific angles.", exp: "Geometry boxes contain 2 set-squares (45°-45°-90° and 30°-60°-90°)."
    }
  ],

  // =========================================================================
  // Theme 5: Mensuration
  // =========================================================================
  "c6_les_5_1": [ // Perimeter of regular and irregular closed figures
    { id: "c6_q_5_1_01", q: "What is the PERIMETER of a closed plane figure?",
      options: ["The total length of the continuous boundary line enclosing the figure", "The area inside", "The volume", "The weight"], a: "The total length of the continuous boundary line enclosing the figure", acc: ["The total length of the continuous boundary line enclosing the figure"], type: "written", difficulty: "easy",
      h: "Distance around the outside edge.", exp: "Perimeter is the total boundary length of a 2D closed figure."
    },
    { id: "c6_q_5_1_02", q: "What is the perimeter of a rectangle with length 8 cm and breadth 5 cm?",
      options: ["26 cm", "40 cm", "13 cm", "20 cm"], a: "26 cm", acc: ["26 cm", "26"], type: "written", difficulty: "easy",
      h: "P = 2(l + b) = 2(8 + 5) = 2(13) = 26.", exp: "P = 2(8 + 5) = 26 cm."
    },
    { id: "c6_q_5_1_03", q: "What is the perimeter of a square with side 6 cm?",
      options: ["24 cm", "36 cm", "12 cm", "18 cm"], a: "24 cm", acc: ["24 cm", "24"], type: "written", difficulty: "easy",
      h: "P = 4a = 4 × 6 = 24.", exp: "P = 4 × 6 = 24 cm."
    },
    { id: "c6_q_5_1_04", q: "What is the perimeter of an equilateral triangle with side 7 cm?",
      options: ["21 cm", "14 cm", "28 cm", "49 cm"], a: "21 cm", acc: ["21 cm", "21"], type: "written", difficulty: "medium",
      h: "P = 3a = 3 × 7 = 21.", exp: "P = 3 × 7 = 21 cm."
    },
    { id: "c6_q_5_1_05", q: "What is the perimeter of a regular pentagon with each side 8 cm?",
      options: ["40 cm", "48 cm", "32 cm", "35 cm"], a: "40 cm", acc: ["40 cm", "40"], type: "written", difficulty: "medium",
      h: "P = 5 × side = 5 × 8 = 40.", exp: "P = 5 × 8 = 40 cm."
    },
    { id: "c6_q_5_1_06", q: "What is the perimeter of a regular hexagon with side 5.5 cm?",
      options: ["33 cm", "30 cm", "35 cm", "27.5 cm"], a: "33 cm", acc: ["33 cm", "33"], type: "written", difficulty: "medium",
      h: "P = 6 × 5.5 = 33.", exp: "P = 6 × 5.5 = 33 cm."
    },
    { id: "c6_q_5_1_07", q: "If the perimeter of a square is 36 cm, what is the length of each side?",
      options: ["9 cm", "6 cm", "12 cm", "18 cm"], a: "9 cm", acc: ["9 cm", "9"], type: "written", difficulty: "medium",
      h: "Side = Perimeter ÷ 4 = 36 ÷ 4 = 9.", exp: "Side = 36 / 4 = 9 cm."
    },
    { id: "c6_q_5_1_08", q: "A triangular park has sides 35 m, 40 m, and 45 m. What is the total length of fencing required?",
      options: ["120 m", "110 m", "130 m", "100 m"], a: "120 m", acc: ["120 m", "120"], type: "written", difficulty: "hard",
      h: "35 + 40 + 45 = 120.", exp: "Perimeter = 35 + 40 + 45 = 120 m."
    },
    { id: "c6_q_5_1_09", q: "An athlete runs 4 times around a rectangular field of length 50 m and breadth 25 m. What total distance did he run?",
      options: ["600 m", "150 m", "300 m", "5000 m"], a: "600 m", acc: ["600 m", "600"], type: "written", difficulty: "hard",
      h: "1 lap = 2(50 + 25) = 150 m. 4 laps = 4 × 150 = 600 m.", exp: "Distance = 4 × 2(50 + 25) = 4 × 150 = 600 m."
    },
    { id: "c6_q_5_1_10", q: "If the perimeter of a regular octagon is 64 cm, what is the length of one side?",
      options: ["8 cm", "6 cm", "7 cm", "9 cm"], a: "8 cm", acc: ["8 cm", "8"], type: "written", difficulty: "hard",
      h: "64 ÷ 8 = 8.", exp: "Side = 64 / 8 = 8 cm."
    }
  ],

  "c6_les_5_2": [ // Area of rectangle and square
    { id: "c6_q_5_2_01", q: "What is the formula for the AREA of a rectangle?",
      options: ["Area = length × breadth (l × b)", "Area = 2(l + b)", "Area = l + b", "Area = l²"], a: "Area = length × breadth (l × b)", acc: ["Area = length × breadth (l × b)", "length × breadth", "l × b"], type: "written", difficulty: "easy",
      h: "Count of unit square tiles enclosed.", exp: "Area of rectangle = length × breadth."
    },
    { id: "c6_q_5_2_02", q: "What is the formula for the AREA of a square?",
      options: ["Area = side × side (a²)", "Area = 4a", "Area = 2a", "Area = a³"], a: "Area = side × side (a²)", acc: ["Area = side × side (a²)", "side × side", "a²"], type: "written", difficulty: "easy",
      h: "Side squared.", exp: "Area of square = side × side = a²."
    },
    { id: "c6_q_5_2_03", q: "What is the standard unit of area?",
      options: ["Square units (cm², m²)", "cm", "m³", "kg"], a: "Square units (cm², m²)", acc: ["Square units (cm², m²)", "cm²", "m²", "sq cm"], type: "written", difficulty: "easy",
      h: "Expressed in square measure.", exp: "Area is measured in square centimetres (cm²) or square metres (m²)."
    },
    { id: "c6_q_5_2_04", q: "What is the area of a rectangle of length 12 cm and breadth 7 cm?",
      options: ["84 cm²", "38 cm", "42 cm²", "72 cm²"], a: "84 cm²", acc: ["84 cm²", "84"], type: "written", difficulty: "medium",
      h: "12 × 7 = 84.", exp: "A = 12 × 7 = 84 cm²."
    },
    { id: "c6_q_5_2_05", q: "What is the area of a square of side 9 cm?",
      options: ["81 cm²", "36 cm", "18 cm²", "72 cm²"], a: "81 cm²", acc: ["81 cm²", "81"], type: "written", difficulty: "medium",
      h: "9 × 9 = 81.", exp: "A = 9² = 81 cm²."
    },
    { id: "c6_q_5_2_06", q: "The area of a rectangle is 96 cm² and its length is 12 cm. What is its breadth?",
      options: ["8 cm", "6 cm", "7 cm", "9 cm"], a: "8 cm", acc: ["8 cm", "8"], type: "written", difficulty: "medium",
      h: "Breadth = Area ÷ Length = 96 ÷ 12 = 8.", exp: "Breadth = 96 / 12 = 8 cm."
    },
    { id: "c6_q_5_2_07", q: "If the area of a square is 49 cm², what is its perimeter?",
      options: ["28 cm", "14 cm", "21 cm", "56 cm"], a: "28 cm", acc: ["28 cm", "28"], type: "written", difficulty: "medium",
      h: "Side = √49 = 7 cm. Perimeter = 4 × 7 = 28 cm.", exp: "Side = 7 cm. Perimeter = 4 × 7 = 28 cm."
    },
    { id: "c6_q_5_2_08", q: "How many square tiles of side 10 cm are needed to cover a floor of 2 m × 1 m?",
      options: ["200 tiles", "20 tiles", "100 tiles", "50 tiles"], a: "200 tiles", acc: ["200 tiles", "200"], type: "written", difficulty: "hard",
      h: "Floor area = 200 × 100 = 20000 cm². Tile area = 10 × 10 = 100 cm². 20000 ÷ 100 = 200.", exp: "20,000 / 100 = 200 tiles."
    },
    { id: "c6_q_5_2_09", q: "What is the cost of tiling a square room of side 6 m at the rate of ₹25 per m²?",
      options: ["₹900", "₹600", "₹750", "₹1200"], a: "₹900", acc: ["₹900", "900", "Rs 900"], type: "written", difficulty: "hard",
      h: "Area = 6 × 6 = 36 m². Cost = 36 × 25 = ₹900.", exp: "36 × 25 = ₹900."
    },
    { id: "c6_q_5_2_10", q: "If the side of a square is DOUBLED, its area becomes:",
      options: ["4 times greater", "2 times greater", "8 times greater", "Remains same"], a: "4 times greater", acc: ["4 times greater", "4 times"], type: "written", difficulty: "hard",
      h: "(2a)² = 4a².", exp: "(2s)² = 4s² (area quadruples)."
    }
  ],

  "c6_les_5_3": [ // Area of triangle (½ × base × height)
    { id: "c6_q_5_3_01", q: "What is the formula for the AREA of a triangle?",
      options: ["Area = ½ × base × height", "Area = base × height", "Area = base + height", "Area = ⅓ × base × height"], a: "Area = ½ × base × height", acc: ["Area = ½ × base × height", "½ × base × height", "1/2 * base * height"], type: "written", difficulty: "easy",
      h: "Half of rectangle area with same base and height.", exp: "Area of triangle = ½ × base × height."
    },
    { id: "c6_q_5_3_02", q: "What is the area of a triangle with base 10 cm and height 6 cm?",
      options: ["30 cm²", "60 cm²", "16 cm²", "20 cm²"], a: "30 cm²", acc: ["30 cm²", "30"], type: "written", difficulty: "easy",
      h: "½ × 10 × 6 = 5 × 6 = 30.", exp: "A = ½ × 10 × 6 = 30 cm²."
    },
    { id: "c6_q_5_3_03", q: "What is the area of a right-angled triangle whose legs are 8 cm and 5 cm?",
      options: ["20 cm²", "40 cm²", "13 cm²", "26 cm²"], a: "20 cm²", acc: ["20 cm²", "20"], type: "written", difficulty: "easy",
      h: "½ × 8 × 5 = 4 × 5 = 20.", exp: "A = ½ × 8 × 5 = 20 cm²."
    },
    { id: "c6_q_5_3_04", q: "What is the area of a triangle with base 14 cm and height 9 cm?",
      options: ["63 cm²", "126 cm²", "23 cm²", "54 cm²"], a: "63 cm²", acc: ["63 cm²", "63"], type: "written", difficulty: "medium",
      h: "½ × 14 × 9 = 7 × 9 = 63.", exp: "A = ½ × 14 × 9 = 63 cm²."
    },
    { id: "c6_q_5_3_05", q: "The area of a triangle is 48 cm² and its base is 12 cm. What is its height?",
      options: ["8 cm", "4 cm", "6 cm", "10 cm"], a: "8 cm", acc: ["8 cm", "8"], type: "written", difficulty: "medium",
      h: "Height = (2 × Area) ÷ base = (2 × 48) ÷ 12 = 96 ÷ 12 = 8 cm.", exp: "Height = (2 × 48) / 12 = 8 cm."
    },
    { id: "c6_q_5_3_06", q: "The diagonal of a rectangle of 10 cm × 6 cm divides it into two congruent triangles. What is the area of EACH triangle?",
      options: ["30 cm²", "60 cm²", "15 cm²", "20 cm²"], a: "30 cm²", acc: ["30 cm²", "30"], type: "written", difficulty: "medium",
      h: "Rectangle area = 60. Half = 30.", exp: "Each triangle = ½(10 × 6) = 30 cm²."
    },
    { id: "c6_q_5_3_07", q: "What is the area of a triangle with base 2.4 m and height 1.5 m?",
      options: ["1.8 m²", "3.6 m²", "2.0 m²", "1.5 m²"], a: "1.8 m²", acc: ["1.8 m²", "1.8"], type: "written", difficulty: "medium",
      h: "½ × 2.4 × 1.5 = 1.2 × 1.5 = 1.8 m².", exp: "A = ½ × 2.4 × 1.5 = 1.8 m²."
    },
    { id: "c6_q_5_3_08", q: "In a triangle, if the base is doubled and height remains unchanged, the new area is:",
      options: ["2 times the original area", "4 times", "Remains same", "Half"], a: "2 times the original area", acc: ["2 times the original area", "2 times", "doubled"], type: "written", difficulty: "hard",
      h: "½(2b)h = 2 × (½bh).", exp: "Area is directly proportional to base, so doubling base doubles the area."
    },
    { id: "c6_q_5_3_09", q: "A right triangle has hypotenuse 10 cm and legs 6 cm and 8 cm. What is its area?",
      options: ["24 cm²", "48 cm²", "30 cm²", "40 cm²"], a: "24 cm²", acc: ["24 cm²", "24"], type: "written", difficulty: "hard",
      h: "Legs are base and height: ½ × 6 × 8 = 24.", exp: "A = ½ × 6 × 8 = 24 cm²."
    },
    { id: "c6_q_5_3_10", q: "The area of a triangle is 75 cm² and its height is 15 cm. What is its base length?",
      options: ["10 cm", "5 cm", "12 cm", "15 cm"], a: "10 cm", acc: ["10 cm", "10"], type: "written", difficulty: "hard",
      h: "Base = (2 × 75) ÷ 15 = 150 ÷ 15 = 10 cm.", exp: "Base = (2 × 75) / 15 = 10 cm."
    }
  ],

  // =========================================================================
  // Theme 6: Data Handling
  // =========================================================================
  "c6_les_6_1": [ // Data collection, organisation, and recording in tally charts
    { id: "c6_q_6_1_01", q: "What is RAW DATA?",
      options: ["Data collected in its original, unorganised form", "Data in a bar graph", "A sorted table", "A summary average"], a: "Data collected in its original, unorganised form", acc: ["Data collected in its original, unorganised form"], type: "written", difficulty: "easy",
      h: "Unprocessed original recordings.", exp: "Raw data is unprocessed numerical or categorical information collected directly."
    },
    { id: "c6_q_6_1_02", q: "What is the tally mark representation for 8?",
      options: ["卌 |||", "||||||||", "卌 卌", "卌 ||||"], a: "卌 |||", acc: ["卌 |||"], type: "written", difficulty: "easy",
      h: "5 + 3.", exp: "8 = 卌 |||."
    },
    { id: "c6_q_6_1_03", q: "The number of times a particular observation occurs in a dataset is called its:",
      options: ["Frequency", "Range", "Mean", "Class interval"], a: "Frequency", acc: ["Frequency"], type: "written", difficulty: "easy",
      h: "How frequently it occurs.", exp: "Frequency is the count of occurrences of a data item."
    },
    { id: "c6_q_6_1_04", q: "In a dataset: 4, 4, 5, 6, 4, 7, 4, 8, what is the frequency of 4?",
      options: ["4", "3", "5", "8"], a: "4", acc: ["4", "four"], type: "written", difficulty: "medium",
      h: "Count how many 4s are listed.", exp: "The number 4 appears 4 times."
    },
    { id: "c6_q_6_1_05", q: "What is the RANGE of the dataset: 12, 18, 25, 9, 34, 15?",
      options: ["25", "34", "9", "20"], a: "25", acc: ["25"], type: "written", difficulty: "medium",
      h: "Range = Maximum - Minimum = 34 - 9 = 25.", exp: "Range = 34 - 9 = 25."
    },
    { id: "c6_q_6_1_06", q: "Tally table shows marks: 卌 卌 卌 ||||. What is the total frequency?",
      options: ["19", "18", "20", "15"], a: "19", acc: ["19"], type: "written", difficulty: "medium",
      h: "5 + 5 + 5 + 4 = 19.", exp: "15 + 4 = 19."
    },
    { id: "c6_q_6_1_07", q: "Data collected directly by the investigator himself from source is called:",
      options: ["Primary data", "Secondary data", "Derived data", "Fake data"], a: "Primary data", acc: ["Primary data"], type: "written", difficulty: "medium",
      h: "First-hand original survey.", exp: "Primary data is gathered directly by the researcher."
    },
    { id: "c6_q_6_1_08", q: "Data obtained from published reports, newspapers, or websites is called:",
      options: ["Secondary data", "Primary data", "Raw data", "Tally data"], a: "Secondary data", acc: ["Secondary data"], type: "written", difficulty: "hard",
      h: "Second-hand published information.", exp: "Secondary data is sourced from existing records."
    },
    { id: "c6_q_6_1_09", q: "What is an ARRAY in statistics?",
      options: ["Data arranged in ascending or descending order of magnitude", "A circle chart", "A formula", "A single dot"], a: "Data arranged in ascending or descending order of magnitude", acc: ["Data arranged in ascending or descending order of magnitude"], type: "written", difficulty: "hard",
      h: "Ordered data list.", exp: "An arrayed dataset is ordered sequentially from least to greatest."
    },
    { id: "c6_q_6_1_10", q: "In a class of 30 students, 12 scored grade A, 10 scored grade B, and the rest scored grade C. What is the frequency of grade C?",
      options: ["8", "10", "6", "12"], a: "8", acc: ["8", "eight"], type: "written", difficulty: "hard",
      h: "30 - (12 + 10) = 30 - 22 = 8.", exp: "Frequency of C = 30 - 22 = 8 students."
    }
  ],

  "c6_les_6_2": [ // Pictographs (Interpretation and drawing with keys)
    { id: "c6_q_6_2_01", q: "In a pictograph, if 1 🚌 symbol = 25 passengers, how many passengers are shown by 4 bus symbols?",
      options: ["100 passengers", "75 passengers", "125 passengers", "50 passengers"], a: "100 passengers", acc: ["100 passengers", "100"], type: "written", difficulty: "easy",
      h: "4 × 25 = 100.", exp: "4 × 25 = 100 passengers."
    },
    { id: "c6_q_6_2_02", q: "If 1 🍎 = 50 apples, how many symbols are required to represent 350 apples?",
      options: ["7 symbols", "6 symbols", "8 symbols", "5 symbols"], a: "7 symbols", acc: ["7 symbols", "7"], type: "written", difficulty: "easy",
      h: "350 ÷ 50 = 7.", exp: "350 ÷ 50 = 7 symbols."
    },
    { id: "c6_q_6_2_03", q: "What does a half-symbol represent if 1 🌳 = 100 trees?",
      options: ["50 trees", "25 trees", "10 trees", "100 trees"], a: "50 trees", acc: ["50 trees", "50"], type: "written", difficulty: "easy",
      h: "100 ÷ 2 = 50.", exp: "Half of 100 = 50 trees."
    },
    { id: "c6_q_6_2_04", q: "If 1 🚲 = 10 cycles: Mon = 4 symbols, Tue = 3 symbols, Wed = 5 symbols. What was the total sales over 3 days?",
      options: ["120 cycles", "100 cycles", "110 cycles", "130 cycles"], a: "120 cycles", acc: ["120 cycles", "120"], type: "written", difficulty: "medium",
      h: "(4 + 3 + 5) × 10 = 12 × 10 = 120.", exp: "Total = 12 × 10 = 120 cycles."
    },
    { id: "c6_q_6_2_05", q: "How many MORE cycles were sold on Wednesday (5 symbols) than on Tuesday (3 symbols)?",
      options: ["20 cycles", "10 cycles", "30 cycles", "15 cycles"], a: "20 cycles", acc: ["20 cycles", "20"], type: "written", difficulty: "medium",
      h: "(5 - 3) × 10 = 2 × 10 = 20.", exp: "Difference = 2 symbols = 20 cycles."
    },
    { id: "c6_q_6_2_06", q: "What is a main limitation of a pictograph?",
      options: ["Representing fractional or uneven numbers accurately is difficult", "Symbols are too colorful", "It has no title", "It only uses numbers"], a: "Representing fractional or uneven numbers accurately is difficult", acc: ["Representing fractional or uneven numbers accurately is difficult"], type: "written", difficulty: "medium",
      h: "Hard to show exact fractions like 17 or 23 on a 50-scale.", exp: "Pictographs cannot easily portray complex fractional or prime counts."
    },
    { id: "c6_q_6_2_07", q: "In a book sales pictograph with scale 1 📖 = 40 books, Friday shows 3.5 symbols. How many books were sold?",
      options: ["140 books", "120 books", "160 books", "130 books"], a: "140 books", acc: ["140 books", "140"], type: "written", difficulty: "medium",
      h: "3.5 × 40 = 140.", exp: "3.5 × 40 = 140 books."
    },
    { id: "c6_q_6_2_08", q: "To represent 480 students where each 🎓 = 60 students, how many symbols should be drawn?",
      options: ["8 symbols", "6 symbols", "7 symbols", "9 symbols"], a: "8 symbols", acc: ["8 symbols", "8"], type: "written", difficulty: "hard",
      h: "480 ÷ 60 = 8.", exp: "480 / 60 = 8 symbols."
    },
    { id: "c6_q_6_2_09", q: "If Town A has 5 🏠 symbols and Town B has 9 🏠 symbols (where 1 🏠 = 500 houses), how many more houses in Town B?",
      options: ["2000 houses", "1500 houses", "2500 houses", "1000 houses"], a: "2000 houses", acc: ["2000 houses", "2000"], type: "written", difficulty: "hard",
      h: "(9 - 5) × 500 = 4 × 500 = 2000.", exp: "4 × 500 = 2000 houses."
    },
    { id: "c6_q_6_2_10", q: "Why is an appropriate SCALE chosen in pictographs?",
      options: ["To keep the number of drawn symbols manageable and fit on the page", "To change the data values", "To make numbers look smaller", "None"], a: "To keep the number of drawn symbols manageable and fit on the page", acc: ["To keep the number of drawn symbols manageable and fit on the page"], type: "written", difficulty: "hard",
      h: "Scaling fits large numbers cleanly.", exp: "Scales condense large quantities into easily readable counts."
    }
  ],

  "c6_les_6_3": [ // Bar graphs: Construction and interpretation
    { id: "c6_q_6_3_01", q: "In a BAR GRAPH, the width of all rectangular bars must be:",
      options: ["Equal (uniform)", "Different for each category", "Increasing", "Zero"], a: "Equal (uniform)", acc: ["Equal (uniform)", "Equal", "uniform"], type: "written", difficulty: "easy",
      h: "Bars have equal width; only height varies.", exp: "All bars in a bar graph must have uniform equal width."
    },
    { id: "c6_q_6_3_02", q: "The spacing between adjacent bars in a bar graph must be:",
      options: ["Uniform (equal spacing)", "No space at all", "Random", "Increasing"], a: "Uniform (equal spacing)", acc: ["Uniform (equal spacing)", "Uniform", "equal"], type: "written", difficulty: "easy",
      h: "Equal gaps between bars.", exp: "Gaps between bars must be uniform and equal."
    },
    { id: "c6_q_6_3_03", q: "In a vertical bar graph, the HEIGHT (or length) of each bar is proportional to its:",
      options: ["Frequency (numerical value)", "Width", "Category name", "Title"], a: "Frequency (numerical value)", acc: ["Frequency (numerical value)", "Frequency"], type: "written", difficulty: "easy",
      h: "Taller bar = larger quantity.", exp: "Bar height directly represents the numerical frequency."
    },
    { id: "c6_q_6_3_04", q: "On a bar graph, the scale is: 1 unit length = 10 marks. A bar of height 6.5 units represents how many marks?",
      options: ["65 marks", "60 marks", "70 marks", "55 marks"], a: "65 marks", acc: ["65 marks", "65"], type: "written", difficulty: "medium",
      h: "6.5 × 10 = 65.", exp: "6.5 × 10 = 65 marks."
    },
    { id: "c6_q_6_3_05", q: "In a bar graph showing weekly temperatures: Mon = 32°C, Tue = 36°C, Wed = 30°C. Which day was the HOTTEST?",
      options: ["Tuesday (36°C)", "Monday (32°C)", "Wednesday (30°C)", "All equal"], a: "Tuesday (36°C)", acc: ["Tuesday (36°C)", "Tuesday"], type: "written", difficulty: "medium",
      h: "Highest bar = 36°C.", exp: "Tuesday has the tallest bar (36°C)."
    },
    { id: "c6_q_6_3_06", q: "In a horizontal bar graph, where is the numerical scale placed?",
      options: ["On the horizontal x-axis", "On the vertical y-axis", "In the center", "At the top only"], a: "On the horizontal x-axis", acc: ["On the horizontal x-axis", "Horizontal axis", "x-axis"], type: "written", difficulty: "medium",
      h: "Horizontal bars extend along the horizontal axis.", exp: "In horizontal bar graphs, values are read along the horizontal x-axis."
    },
    { id: "c6_q_6_3_07", q: "If the scale of a bar graph is 1 cm = 50 tonnes of wheat, what height bar represents 350 tonnes?",
      options: ["7 cm", "6 cm", "8 cm", "5 cm"], a: "7 cm", acc: ["7 cm", "7"], type: "written", difficulty: "medium",
      h: "350 ÷ 50 = 7 cm.", exp: "350 / 50 = 7 cm."
    },
    { id: "c6_q_6_3_08", q: "Bar graph shows monthly rainfall: June = 12 cm, July = 25 cm, August = 20 cm, September = 8 cm. What is the total monsoon rainfall?",
      options: ["65 cm", "60 cm", "70 cm", "55 cm"], a: "65 cm", acc: ["65 cm", "65"], type: "written", difficulty: "hard",
      h: "12 + 25 + 20 + 8 = 65.", exp: "12 + 25 + 20 + 8 = 65 cm."
    },
    { id: "c6_q_6_3_09", q: "What is a DOUBLE BAR GRAPH used for?",
      options: ["Comparing two sets of related data simultaneously side-by-side", "Showing 3D solids", "Adding fractions", "Drawing circles"], a: "Comparing two sets of related data simultaneously side-by-side", acc: ["Comparing two sets of related data simultaneously side-by-side"], type: "written", difficulty: "hard",
      h: "Side-by-side comparative bars (e.g. Term 1 vs Term 2).", exp: "Double bar graphs provide direct visual comparison between two related data series."
    },
    { id: "c6_q_6_3_10", q: "Why must both axes of a bar graph be clearly LABELED with title and units?",
      options: ["To ensure the viewer understands what quantity and category each axis represents", "To make it look decorated", "To fill blank space", "None"], a: "To ensure the viewer understands what quantity and category each axis represents", acc: ["To ensure the viewer understands what quantity and category each axis represents"], type: "written", difficulty: "hard",
      h: "Axis labels provide unambiguous meaning.", exp: "Labels define the variables and units being measured on each coordinate axis."
    }
  ]
};

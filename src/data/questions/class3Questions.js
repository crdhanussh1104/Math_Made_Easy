/**
 * Class 3 Mathematics Question Bank (ICSE Curriculum)
 * Exactly 10 questions per topic with full MCQ options, explanations, hints, and difficulty ratings.
 */

export const class3Questions = {
  // =========================================================================
  // Theme 1: Numbers
  // =========================================================================
  "c3_les_1_1": [ // 4-digit numbers up to 9999
    { id: "c3_q_1_1_01", q: "What is the smallest 4-digit number?",
      options: ["1000", "9999", "1001", "9000"], a: "1000", acc: ["1000"], type: "written", difficulty: "easy",
      h: "1 more than 999.", exp: "1000 is the smallest 4-digit number."
    },
    { id: "c3_q_1_1_02", q: "What is the greatest 4-digit number?",
      options: ["9999", "1000", "9000", "9990"], a: "9999", acc: ["9999"], type: "written", difficulty: "easy",
      h: "The number just before 10000.", exp: "9999 is the largest 4-digit number."
    },
    { id: "c3_q_1_1_03", q: "How many hundreds are there in 1000?",
      options: ["10", "100", "1", "1000"], a: "10", acc: ["10", "ten"], type: "written", difficulty: "easy",
      h: "10 × 100 = 1000.", exp: "There are 10 hundreds in one thousand."
    },
    { id: "c3_q_1_1_04", q: "What number comes immediately AFTER 3459?",
      options: ["3460", "3458", "3469", "3500"], a: "3460", acc: ["3460"], type: "written", difficulty: "medium",
      h: "3459 + 1 = ?", exp: "3459 + 1 = 3460."
    },
    { id: "c3_q_1_1_05", q: "What number comes immediately BEFORE 7000?",
      options: ["6999", "6990", "7001", "6000"], a: "6999", acc: ["6999"], type: "written", difficulty: "medium",
      h: "7000 - 1 = ?", exp: "7000 - 1 = 6999."
    },
    { id: "c3_q_1_1_06", q: "How is 4,506 read in words?",
      options: ["Four thousand five hundred six", "Four thousand fifty-six", "Four hundred fifty-six", "Forty-five hundred"], a: "Four thousand five hundred six", acc: ["Four thousand five hundred six"], type: "written", difficulty: "medium",
      h: "4 thousands, 5 hundreds, 0 tens, 6 ones.", exp: "4506 = Four thousand five hundred six."
    },
    { id: "c3_q_1_1_07", q: "What is the numeral for 'Eight thousand seventy-two'?",
      options: ["8072", "8720", "8702", "8027"], a: "8072", acc: ["8072"], type: "written", difficulty: "medium",
      h: "8 in thousands, 0 in hundreds, 7 in tens, 2 in ones.", exp: "Eight thousand seventy-two is 8072."
    },
    { id: "c3_q_1_1_08", q: "How many tens are in 2,450?",
      options: ["245", "50", "45", "5"], a: "245", acc: ["245"], type: "written", difficulty: "hard",
      h: "Divide 2450 by 10.", exp: "2450 ÷ 10 = 245 tens."
    },
    { id: "c3_q_1_1_09", q: "What number is 100 MORE than 5,890?",
      options: ["5990", "5891", "6890", "5790"], a: "5990", acc: ["5990"], type: "written", difficulty: "hard",
      h: "Add 1 to hundreds digit: 8 + 1 = 9.", exp: "5890 + 100 = 5990."
    },
    { id: "c3_q_1_1_10", q: "What number is 1,000 LESS than 8,245?",
      options: ["7245", "8145", "9245", "8235"], a: "7245", acc: ["7245"], type: "written", difficulty: "hard",
      h: "Subtract 1 from thousands place: 8 - 1 = 7.", exp: "8245 - 1000 = 7245."
    }
  ],

  "c3_les_1_2": [ // Place value and face value
    { id: "c3_q_1_2_01", q: "In 4,729, what is the PLACE VALUE of 7?",
      options: ["700", "7", "70", "7000"], a: "700", acc: ["700", "7 hundreds"], type: "written", difficulty: "easy",
      h: "7 is in the hundreds place.", exp: "Place value of 7 in 4729 = 7 × 100 = 700."
    },
    { id: "c3_q_1_2_02", q: "In 8,351, what is the FACE VALUE of 3?",
      options: ["3", "300", "30", "3000"], a: "3", acc: ["3"], type: "written", difficulty: "easy",
      h: "Face value is the digit itself regardless of position.", exp: "The face value of 3 is always 3."
    },
    { id: "c3_q_1_2_03", q: "In which place is the digit 6 in the number 6,412?",
      options: ["Thousands", "Hundreds", "Tens", "Ones"], a: "Thousands", acc: ["Thousands"], type: "written", difficulty: "easy",
      h: "Fourth place from right.", exp: "6 is in the thousands place."
    },
    { id: "c3_q_1_2_04", q: "In 5,680, what is the place value of 0?",
      options: ["0", "1", "10", "100"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "medium",
      h: "0 × 1 = 0.", exp: "Place value of 0 in any place is always 0."
    },
    { id: "c3_q_1_2_05", q: "What is the difference between the place value and face value of 5 in 3,542?",
      options: ["495", "500", "5", "450"], a: "495", acc: ["495"], type: "written", difficulty: "medium",
      h: "Place value = 500, Face value = 5. 500 - 5 = ?", exp: "500 - 5 = 495."
    },
    { id: "c3_q_1_2_06", q: "In 9,876, what is the sum of place values of 9 and 7?",
      options: ["9070", "9700", "9007", "97"], a: "9070", acc: ["9070"], type: "written", difficulty: "medium",
      h: "9000 + 70 = ?", exp: "9000 + 70 = 9070."
    },
    { id: "c3_q_1_2_07", q: "In 2,345, the digit 4 stands for:",
      options: ["40", "4", "400", "4000"], a: "40", acc: ["40", "4 tens"], type: "written", difficulty: "medium",
      h: "4 is in tens place.", exp: "4 tens = 40."
    },
    { id: "c3_q_1_2_08", q: "What is the product of face value of 6 and face value of 4 in 6,248?",
      options: ["24", "240", "2400", "64"], a: "24", acc: ["24"], type: "written", difficulty: "hard",
      h: "Face values are 6 and 4. 6 × 4 = ?", exp: "6 × 4 = 24."
    },
    { id: "c3_q_1_2_09", q: "In a 4-digit number, if a digit has the SAME place value and face value, what place is it in?",
      options: ["Ones place", "Tens place", "Hundreds place", "Thousands place"], a: "Ones place", acc: ["Ones place", "Ones"], type: "written", difficulty: "hard",
      h: "Digit × 1 = Digit.", exp: "In the ones place, place value = digit × 1 = face value."
    },
    { id: "c3_q_1_2_10", q: "What is the place value of 9 in 9,005?",
      options: ["9000", "900", "90", "9"], a: "9000", acc: ["9000"], type: "written", difficulty: "hard",
      h: "9 is in the thousands place.", exp: "9 × 1000 = 9000."
    }
  ],

  "c3_les_1_3": [ // Expanded form
    { id: "c3_q_1_3_01", q: "What is the expanded form of 3,456?",
      options: ["3000 + 400 + 50 + 6", "300 + 40 + 5 + 6", "3000 + 40 + 56", "3400 + 56"], a: "3000 + 400 + 50 + 6", acc: ["3000 + 400 + 50 + 6"], type: "written", difficulty: "easy",
      h: "Break into thousands, hundreds, tens, and ones.", exp: "3456 = 3000 + 400 + 50 + 6."
    },
    { id: "c3_q_1_3_02", q: "What number is represented by 5000 + 200 + 30 + 8?",
      options: ["5238", "5328", "5283", "50238"], a: "5238", acc: ["5238"], type: "written", difficulty: "easy",
      h: "Combine the standard form digits.", exp: "5000 + 200 + 30 + 8 = 5238."
    },
    { id: "c3_q_1_3_03", q: "What is the expanded form of 7,045?",
      options: ["7000 + 40 + 5", "7000 + 400 + 5", "700 + 40 + 5", "7000 + 45"], a: "7000 + 40 + 5", acc: ["7000 + 40 + 5"], type: "written", difficulty: "easy",
      h: "Hundreds place is 0.", exp: "7045 = 7000 + 40 + 5."
    },
    { id: "c3_q_1_3_04", q: "What is the standard numeral for 8000 + 90 + 2?",
      options: ["8092", "8902", "8920", "8029"], a: "8092", acc: ["8092"], type: "written", difficulty: "medium",
      h: "0 in hundreds place.", exp: "8000 + 0 + 90 + 2 = 8092."
    },
    { id: "c3_q_1_3_05", q: "What is the expanded form of 6,800?",
      options: ["6000 + 800", "600 + 80", "6000 + 80", "6800 + 0"], a: "6000 + 800", acc: ["6000 + 800"], type: "written", difficulty: "medium",
      h: "Tens and ones are 0.", exp: "6800 = 6000 + 800."
    },
    { id: "c3_q_1_3_06", q: "What number is represented by 4 thousands + 6 tens + 3 ones?",
      options: ["4063", "4630", "4603", "4360"], a: "4063", acc: ["4063"], type: "written", difficulty: "medium",
      h: "Notice 0 hundreds.", exp: "4000 + 60 + 3 = 4063."
    },
    { id: "c3_q_1_3_07", q: "What is the missing value: 9472 = 9000 + ___ + 70 + 2?",
      options: ["400", "40", "4", "4000"], a: "400", acc: ["400"], type: "written", difficulty: "medium",
      h: "Look at the hundreds digit (4).", exp: "4 hundreds = 400."
    },
    { id: "c3_q_1_3_08", q: "What is the short form of 2000 + 300 + 5?",
      options: ["2305", "2350", "2035", "2530"], a: "2305", acc: ["2305"], type: "written", difficulty: "hard",
      h: "Tens place is 0.", exp: "2000 + 300 + 0 + 5 = 2305."
    },
    { id: "c3_q_1_3_09", q: "What is the missing value: 6050 = 6000 + ___?",
      options: ["50", "500", "5", "5000"], a: "50", acc: ["50"], type: "written", difficulty: "hard",
      h: "6050 - 6000 = ?", exp: "6050 = 6000 + 50."
    },
    { id: "c3_q_1_3_10", q: "How is 1000 + 100 + 10 + 1 written in standard form?",
      options: ["1111", "10001", "1011", "1110"], a: "1111", acc: ["1111"], type: "written", difficulty: "hard",
      h: "All place values are 1.", exp: "1000 + 100 + 10 + 1 = 1111."
    }
  ],

  "c3_les_1_4": [ // Counting from any number (Skip counting by 2s, 5s, 10s, 100s, 1000s)
    { id: "c3_q_1_4_01", q: "Count in 10s: 2340, 2350, 2360, ___?",
      options: ["2370", "2380", "2460", "2361"], a: "2370", acc: ["2370"], type: "written", difficulty: "easy",
      h: "Add 10 to 2360.", exp: "2360 + 10 = 2370."
    },
    { id: "c3_q_1_4_02", q: "Count in 100s: 4100, 4200, 4300, ___?",
      options: ["4400", "4500", "5300", "4310"], a: "4400", acc: ["4400"], type: "written", difficulty: "easy",
      h: "Add 100 to 4300.", exp: "4300 + 100 = 4400."
    },
    { id: "c3_q_1_4_03", q: "Count in 1000s: 3000, 4000, 5000, ___?",
      options: ["6000", "7000", "5100", "5010"], a: "6000", acc: ["6000"], type: "written", difficulty: "easy",
      h: "Add 1000 to 5000.", exp: "5000 + 1000 = 6000."
    },
    { id: "c3_q_1_4_04", q: "Skip count by 5s: 1215, 1220, 1225, ___?",
      options: ["1230", "1235", "1226", "1325"], a: "1230", acc: ["1230"], type: "written", difficulty: "medium",
      h: "Add 5 to 1225.", exp: "1225 + 5 = 1230."
    },
    { id: "c3_q_1_4_05", q: "Count backward by 10s: 5680, 5670, 5660, ___?",
      options: ["5650", "5640", "5560", "5670"], a: "5650", acc: ["5650"], type: "written", difficulty: "medium",
      h: "Subtract 10 from 5660.", exp: "5660 - 10 = 5650."
    },
    { id: "c3_q_1_4_06", q: "Count backward by 100s: 8900, 8800, 8700, ___?",
      options: ["8600", "8500", "7700", "8710"], a: "8600", acc: ["8600"], type: "written", difficulty: "medium",
      h: "Subtract 100 from 8700.", exp: "8700 - 100 = 8600."
    },
    { id: "c3_q_1_4_07", q: "What is the next number in sequence: 3998, 3999, ___?",
      options: ["4000", "3100", "4999", "3990"], a: "4000", acc: ["4000"], type: "written", difficulty: "medium",
      h: "3999 + 1 = ?", exp: "3999 + 1 = 4000."
    },
    { id: "c3_q_1_4_08", q: "Count by 50s: 2100, 2150, 2200, ___?",
      options: ["2250", "2300", "2210", "2500"], a: "2250", acc: ["2250"], type: "written", difficulty: "hard",
      h: "Add 50 to 2200.", exp: "2200 + 50 = 2250."
    },
    { id: "c3_q_1_4_09", q: "What is the missing number: 6420, 6422, ___, 6426?",
      options: ["6424", "6423", "6425", "6430"], a: "6424", acc: ["6424"], type: "written", difficulty: "hard",
      h: "Skip counting by 2s.", exp: "6422 + 2 = 6424."
    },
    { id: "c3_q_1_4_10", q: "What comes next when counting backward by 1000s from 9250: 9250, 8250, 7250, ___?",
      options: ["6250", "5250", "7150", "6000"], a: "6250", acc: ["6250"], type: "written", difficulty: "hard",
      h: "7250 - 1000 = ?", exp: "7250 - 1000 = 6250."
    }
  ],

  "c3_les_1_5": [ // Comparing numbers, Ascending and Descending order
    { id: "c3_q_1_5_01", q: "Which symbol correctly compares: 4,562 ___ 4,526?",
      options: [">", "<", "=", "+"], a: ">", acc: [">"], type: "written", difficulty: "easy",
      h: "Compare tens digit: 6 tens vs 2 tens.", exp: "4562 > 4526 because 60 > 20."
    },
    { id: "c3_q_1_5_02", q: "Which symbol correctly compares: 7,890 ___ 8,790?",
      options: ["<", ">", "=", "-"], a: "<", acc: ["<"], type: "written", difficulty: "easy",
      h: "Compare thousands digit: 7 thousands vs 8 thousands.", exp: "7890 < 8790."
    },
    { id: "c3_q_1_5_03", q: "Which of the following is the GREATEST: 3450, 3540, 3054, 3405?",
      options: ["3540", "3450", "3054", "3405"], a: "3540", acc: ["3540"], type: "written", difficulty: "easy",
      h: "Check the hundreds digit (5 is largest).", exp: "3540 is the greatest."
    },
    { id: "c3_q_1_5_04", q: "Which of the following is the SMALLEST: 6812, 6182, 6821, 6218?",
      options: ["6182", "6812", "6821", "6218"], a: "6182", acc: ["6182"], type: "written", difficulty: "medium",
      h: "1 in hundreds place is smallest.", exp: "6182 is the smallest."
    },
    { id: "c3_q_1_5_05", q: "Arrange in ASCENDING order (smallest to largest): 2341, 1432, 4213, 3124",
      options: ["1432, 2341, 3124, 4213", "4213, 3124, 2341, 1432", "1432, 3124, 2341, 4213", "2341, 1432, 3124, 4213"], a: "1432, 2341, 3124, 4213", acc: ["1432, 2341, 3124, 4213"], type: "written", difficulty: "medium",
      h: "Look at thousands digits: 1, 2, 3, 4.", exp: "1432 < 2341 < 3124 < 4213 is ascending."
    },
    { id: "c3_q_1_5_06", q: "Arrange in DESCENDING order (largest to smallest): 8905, 9805, 8095, 9085",
      options: ["9805, 9085, 8905, 8095", "8095, 8905, 9085, 9805", "9805, 8905, 9085, 8095", "9085, 9805, 8905, 8095"], a: "9805, 9085, 8905, 8095", acc: ["9805, 9085, 8905, 8095"], type: "written", difficulty: "medium",
      h: "Start with 9805, end with 8095.", exp: "9805 > 9085 > 8905 > 8095."
    },
    { id: "c3_q_1_5_07", q: "Which number is greater than 5,460 but smaller than 5,470?",
      options: ["5465", "5459", "5472", "5480"], a: "5465", acc: ["5465"], type: "written", difficulty: "medium",
      h: "Between 60 and 70.", exp: "5465 lies between 5460 and 5470."
    },
    { id: "c3_q_1_5_08", q: "Town A population is 7,850. Town B population is 7,580. Which town has MORE people?",
      options: ["Town A", "Town B", "Both are equal", "Cannot be determined"], a: "Town A", acc: ["Town A"], type: "written", difficulty: "hard",
      h: "7850 > 7580.", exp: "Town A (7850) is greater than Town B (7580)."
    },
    { id: "c3_q_1_5_09", q: "Which statement is TRUE?",
      options: ["3,000 + 400 + 5 > 3,450", "3,405 < 3,045", "4,000 + 500 = 4,500", "6,789 < 6,780"], a: "4,000 + 500 = 4,500", acc: ["4,000 + 500 = 4,500"], type: "written", difficulty: "hard",
      h: "4000 + 500 = 4500.", exp: "4000 + 500 = 4500 is mathematically true."
    },
    { id: "c3_q_1_5_10", q: "Choose the correct symbol: 9,999 ___ 10,000",
      options: ["<", ">", "=", "≈"], a: "<", acc: ["<"], type: "written", difficulty: "hard",
      h: "A 4-digit number is always smaller than a 5-digit number.", exp: "9999 < 10000."
    }
  ],

  "c3_les_1_6": [ // Greatest and smallest number from given digits
    { id: "c3_q_1_6_01", q: "Using digits 4, 1, 8, 3 without repeating, what is the GREATEST 4-digit number?",
      options: ["8431", "8413", "8341", "1348"], a: "8431", acc: ["8431"], type: "written", difficulty: "easy",
      h: "Arrange digits in descending order: 8, 4, 3, 1.", exp: "8431 is the greatest number."
    },
    { id: "c3_q_1_6_02", q: "Using digits 5, 2, 9, 7 without repeating, what is the SMALLEST 4-digit number?",
      options: ["2579", "2597", "2759", "9752"], a: "2579", acc: ["2579"], type: "written", difficulty: "easy",
      h: "Arrange digits in ascending order: 2, 5, 7, 9.", exp: "2579 is the smallest number."
    },
    { id: "c3_q_1_6_03", q: "Using digits 6, 0, 4, 9 without repeating, what is the SMALLEST 4-digit number?",
      options: ["4069", "0469", "4609", "4096"], a: "4069", acc: ["4069"], type: "written", difficulty: "easy",
      h: "A number cannot begin with 0. Start with the smallest non-zero digit (4).", exp: "4069 is the smallest valid 4-digit number."
    },
    { id: "c3_q_1_6_04", q: "Using digits 7, 0, 3, 8 without repeating, what is the GREATEST 4-digit number?",
      options: ["8730", "8703", "8370", "7830"], a: "8730", acc: ["8730"], type: "written", difficulty: "medium",
      h: "Order from largest to smallest: 8, 7, 3, 0.", exp: "8730 is the greatest."
    },
    { id: "c3_q_1_6_05", q: "What is the difference between the greatest and smallest 4-digit numbers formed by digits 1, 2, 3, 4?",
      options: ["3087", "4321", "1234", "3187"], a: "3087", acc: ["3087"], type: "written", difficulty: "medium",
      h: "Greatest = 4321, Smallest = 1234. 4321 - 1234 = ?", exp: "4321 - 1234 = 3087."
    },
    { id: "c3_q_1_6_06", q: "Form the smallest 4-digit number using digits 3, 0, 0, 5:",
      options: ["3005", "0035", "3050", "3500"], a: "3005", acc: ["3005"], type: "written", difficulty: "medium",
      h: "Place 3 in thousands, then zeros, then 5.", exp: "3005 is the smallest 4-digit number."
    },
    { id: "c3_q_1_6_07", q: "Using digits 2, 4, 6, 8, which of the following is an ODD number?",
      options: ["None can be odd", "8642", "2468", "4682"], a: "None can be odd", acc: ["None can be odd", "None"], type: "written", difficulty: "medium",
      h: "All given digits are even.", exp: "All given digits (2,4,6,8) are even, so every combination will be an even number."
    },
    { id: "c3_q_1_6_08", q: "Form the greatest 4-digit ODD number using digits 2, 5, 8, 6:",
      options: ["8625", "8652", "8562", "6825"], a: "8625", acc: ["8625"], type: "written", difficulty: "hard",
      h: "Odd number must end in 5. Order remaining digits (8, 6, 2) in front.", exp: "8625 is the greatest odd number."
    },
    { id: "c3_q_1_6_09", q: "Form the smallest 4-digit EVEN number using digits 1, 3, 5, 6:",
      options: ["1356", "1536", "3156", "6531"], a: "1356", acc: ["1356"], type: "written", difficulty: "hard",
      h: "Must end in 6. Order remaining digits (1, 3, 5) from smallest to largest.", exp: "1356 is the smallest even number."
    },
    { id: "c3_q_1_6_10", q: "Using digits 9, 4, 1, 0, what is the sum of thousands digit and ones digit in the greatest number formed?",
      options: ["9", "13", "10", "5"], a: "9", acc: ["9", "nine"], type: "written", difficulty: "hard",
      h: "Greatest number = 9410. Thousands = 9, Ones = 0. 9 + 0 = ?", exp: "Greatest number is 9410. 9 + 0 = 9."
    }
  ],

  "c3_les_1_7": [ // Forming numbers with and without repetition
    { id: "c3_q_1_7_01", q: "What is the GREATEST 4-digit number you can form using digits 2 and 7 (repetition allowed)?",
      options: ["7777", "7772", "7272", "2777"], a: "7777", acc: ["7777"], type: "written", difficulty: "easy",
      h: "Use the largest digit (7) in all 4 places.", exp: "7777 is the greatest 4-digit number using digits 2 and 7."
    },
    { id: "c3_q_1_7_02", q: "What is the SMALLEST 4-digit number using digits 3 and 8 (repetition allowed)?",
      options: ["3333", "3338", "8333", "3838"], a: "3333", acc: ["3333"], type: "written", difficulty: "easy",
      h: "Use the smallest digit (3) in all places.", exp: "3333 is the smallest number."
    },
    { id: "c3_q_1_7_03", q: "Form the greatest 4-digit number using digits 5, 2, 8 with REPETITION of any one digit:",
      options: ["8852", "8552", "8522", "5882"], a: "8852", acc: ["8852"], type: "written", difficulty: "easy",
      h: "Repeat the largest digit (8) twice.", exp: "8852 is the greatest."
    },
    { id: "c3_q_1_7_04", q: "Form the smallest 4-digit number using digits 4, 9, 1 with REPETITION of any one digit:",
      options: ["1149", "1449", "1499", "4119"], a: "1149", acc: ["1149"], type: "written", difficulty: "medium",
      h: "Repeat the smallest digit (1) twice.", exp: "1149 is the smallest number."
    },
    { id: "c3_q_1_7_05", q: "Form the smallest 4-digit number using digits 6, 0, 3 (repetition of any digit allowed):",
      options: ["3006", "0036", "3060", "3600"], a: "3006", acc: ["3006"], type: "written", difficulty: "medium",
      h: "Start with 3, repeat 0 twice, end in 6.", exp: "3006 is the smallest valid 4-digit number."
    },
    { id: "c3_q_1_7_06", q: "Form the greatest 4-digit number using digits 7, 0, 4 (repetition allowed):",
      options: ["7740", "7400", "7470", "7704"], a: "7740", acc: ["7740"], type: "written", difficulty: "medium",
      h: "Repeat 7 twice, then 4, then 0.", exp: "7740 is the greatest."
    },
    { id: "c3_q_1_7_07", q: "How many 4-digit numbers have ALL FOUR digits identical?",
      options: ["9", "10", "8", "1"], a: "9", acc: ["9", "nine"], type: "written", difficulty: "medium",
      h: "1111, 2222, ..., 9999.", exp: "There are 9 numbers: 1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999."
    },
    { id: "c3_q_1_7_08", q: "Form the greatest 4-digit number having 5 in the hundreds place using digits 9, 3, 5, 1 without repeating:",
      options: ["9531", "9513", "5931", "9351"], a: "9531", acc: ["9531"], type: "written", difficulty: "hard",
      h: "Place 5 in hundreds place, 9 in thousands place.", exp: "9531 has 5 in the hundreds place and is the greatest."
    },
    { id: "c3_q_1_7_09", q: "Form the smallest 4-digit number having 7 in the ones place using digits 4, 2, 7, 9 without repeating:",
      options: ["2497", "2947", "4297", "9427"], a: "2497", acc: ["2497"], type: "written", difficulty: "hard",
      h: "Put 7 in ones place, arrange 2, 4, 9 in ascending order.", exp: "2497 is the smallest."
    },
    { id: "c3_q_1_7_10", q: "What is the difference between the greatest and smallest 4-digit numbers formed by repeating digit 9 and digit 0?",
      options: ["9000", "9990", "9900", "8999"], a: "9000", acc: ["9000"], type: "written", difficulty: "hard",
      h: "Greatest = 9990 or 9999; smallest = 9000. 9999 - 9000 = ?", exp: "Greatest = 9999, Smallest = 1000 or using only 9 and 0: Greatest = 9990, Smallest = 9000."
    }
  ],

  // =========================================================================
  // Theme 2: Number Operations
  // =========================================================================
  "c3_les_2_1": [ // Addition up to 3 digits (with and without regrouping)
    { id: "c3_q_2_1_01", q: "What is 342 + 215?",
      options: ["557", "556", "547", "657"], a: "557", acc: ["557"], type: "written", difficulty: "easy",
      h: "Add column-wise without regrouping.", exp: "342 + 215 = 557."
    },
    { id: "c3_q_2_1_02", q: "What is 450 + 320?",
      options: ["770", "780", "670", "870"], a: "770", acc: ["770"], type: "written", difficulty: "easy",
      h: "45 tens + 32 tens.", exp: "450 + 320 = 770."
    },
    { id: "c3_q_2_1_03", q: "What is 526 + 148?",
      options: ["674", "664", "684", "774"], a: "674", acc: ["674"], type: "written", difficulty: "easy",
      h: "6 + 8 = 14 (carry 1 to tens).", exp: "526 + 148 = 674."
    },
    { id: "c3_q_2_1_04", q: "What is 389 + 254?",
      options: ["643", "633", "653", "543"], a: "643", acc: ["643"], type: "written", difficulty: "medium",
      h: "Regroup in ones and tens places.", exp: "389 + 254 = 643."
    },
    { id: "c3_q_2_1_05", q: "What is 675 + 189?",
      options: ["864", "854", "874", "764"], a: "864", acc: ["864"], type: "written", difficulty: "medium",
      h: "5 + 9 = 14, 7 + 8 + 1 = 16, 6 + 1 + 1 = 8.", exp: "675 + 189 = 864."
    },
    { id: "c3_q_2_1_06", q: "What is 499 + 301?",
      options: ["800", "790", "810", "700"], a: "800", acc: ["800"], type: "written", difficulty: "medium",
      h: "499 + 1 = 500; 500 + 300 = 800.", exp: "499 + 301 = 800."
    },
    { id: "c3_q_2_1_07", q: "What is 234 + 156 + 310?",
      options: ["700", "690", "710", "600"], a: "700", acc: ["700"], type: "written", difficulty: "medium",
      h: "234 + 156 = 390; 390 + 310 = 700.", exp: "234 + 156 + 310 = 700."
    },
    { id: "c3_q_2_1_08", q: "In a library, there are 458 English books and 375 Hindi books. How many books in total?",
      options: ["833", "823", "843", "733"], a: "833", acc: ["833"], type: "written", difficulty: "hard",
      h: "458 + 375 = ?", exp: "458 + 375 = 833 books."
    },
    { id: "c3_q_2_1_09", q: "A fruit seller sold 285 apples on Monday and 468 apples on Tuesday. How many apples did he sell in total?",
      options: ["753", "743", "763", "653"], a: "753", acc: ["753"], type: "written", difficulty: "hard",
      h: "285 + 468 = ?", exp: "285 + 468 = 753 apples."
    },
    { id: "c3_q_2_1_10", q: "What is 789 + 199?",
      options: ["988", "978", "998", "888"], a: "988", acc: ["988"], type: "written", difficulty: "hard",
      h: "789 + 200 - 1 = 989 - 1 = 988.", exp: "789 + 199 = 988."
    }
  ],

  "c3_les_2_2": [ // Subtraction up to 3 digits (with and without regrouping)
    { id: "c3_q_2_2_01", q: "What is 584 - 231?",
      options: ["353", "352", "343", "253"], a: "353", acc: ["353"], type: "written", difficulty: "easy",
      h: "Subtract column-wise without borrowing.", exp: "584 - 231 = 353."
    },
    { id: "c3_q_2_2_02", q: "What is 760 - 340?",
      options: ["420", "410", "430", "520"], a: "420", acc: ["420"], type: "written", difficulty: "easy",
      h: "76 tens - 34 tens = 42 tens.", exp: "760 - 340 = 420."
    },
    { id: "c3_q_2_2_03", q: "What is 652 - 238?",
      options: ["414", "424", "404", "314"], a: "414", acc: ["414"], type: "written", difficulty: "easy",
      h: "Borrow 1 ten into ones place: 12 - 8 = 4.", exp: "652 - 238 = 414."
    },
    { id: "c3_q_2_2_04", q: "What is 500 - 165?",
      options: ["335", "345", "435", "325"], a: "335", acc: ["335"], type: "written", difficulty: "medium",
      h: "Subtract from zeros: 500 - 165.", exp: "500 - 165 = 335."
    },
    { id: "c3_q_2_2_05", q: "What is 843 - 379?",
      options: ["464", "454", "474", "564"], a: "464", acc: ["464"], type: "written", difficulty: "medium",
      h: "Regroup in both tens and hundreds.", exp: "843 - 379 = 464."
    },
    { id: "c3_q_2_2_06", q: "What is 902 - 458?",
      options: ["444", "454", "434", "544"], a: "444", acc: ["444"], type: "written", difficulty: "medium",
      h: "Borrow across 0 in tens place.", exp: "902 - 458 = 444."
    },
    { id: "c3_q_2_2_07", q: "A factory produced 750 toys and shipped 485 toys. How many toys remain?",
      options: ["265", "275", "255", "365"], a: "265", acc: ["265"], type: "written", difficulty: "medium",
      h: "750 - 485 = ?", exp: "750 - 485 = 265 toys."
    },
    { id: "c3_q_2_2_08", q: "What number should be added to 345 to make 800?",
      options: ["455", "445", "465", "555"], a: "455", acc: ["455"], type: "written", difficulty: "hard",
      h: "800 - 345 = ?", exp: "800 - 345 = 455."
    },
    { id: "c3_q_2_2_09", q: "What is 1000 - 648?",
      options: ["352", "342", "362", "452"], a: "352", acc: ["352"], type: "written", difficulty: "hard",
      h: "1000 - 648 = ?", exp: "1000 - 648 = 352."
    },
    { id: "c3_q_2_2_10", q: "A cricket match required 384 runs to win. The team scored 259 runs. How many more runs are needed?",
      options: ["125", "135", "115", "145"], a: "125", acc: ["125"], type: "written", difficulty: "hard",
      h: "384 - 259 = ?", exp: "384 - 259 = 125 runs."
    }
  ],

  "c3_les_2_3": [ // Multiplication tables and strategies (2 to 10)
    { id: "c3_q_2_3_01", q: "What is 7 × 8?",
      options: ["56", "54", "48", "64"], a: "56", acc: ["56"], type: "written", difficulty: "easy",
      h: "7 times 8.", exp: "7 × 8 = 56."
    },
    { id: "c3_q_2_3_02", q: "What is 6 × 9?",
      options: ["54", "56", "45", "63"], a: "54", acc: ["54"], type: "written", difficulty: "easy",
      h: "6 times 9.", exp: "6 × 9 = 54."
    },
    { id: "c3_q_2_3_03", q: "What is any number multiplied by 0?",
      options: ["0", "The number itself", "1", "10"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "easy",
      h: "Zero property of multiplication.", exp: "Any number × 0 = 0."
    },
    { id: "c3_q_2_3_04", q: "What is 9 × 8?",
      options: ["72", "81", "63", "74"], a: "72", acc: ["72"], type: "written", difficulty: "medium",
      h: "9 times 8.", exp: "9 × 8 = 72."
    },
    { id: "c3_q_2_3_05", q: "If 4 × 6 = 24, what is 6 × 4?",
      options: ["24", "26", "20", "28"], a: "24", acc: ["24"], type: "written", difficulty: "medium",
      h: "Commutative property: order does not change product.", exp: "4 × 6 = 6 × 4 = 24."
    },
    { id: "c3_q_2_3_06", q: "What is 8 × 6?",
      options: ["48", "46", "54", "42"], a: "48", acc: ["48"], type: "written", difficulty: "medium",
      h: "8 times 6.", exp: "8 × 6 = 48."
    },
    { id: "c3_q_2_3_07", q: "What is 7 × 7?",
      options: ["49", "42", "56", "47"], a: "49", acc: ["49"], type: "written", difficulty: "medium",
      h: "7 squared.", exp: "7 × 7 = 49."
    },
    { id: "c3_q_2_3_08", q: "How can 8 × 5 be calculated by doubling and halving?",
      options: ["4 × 10 = 40", "16 × 10 = 160", "8 × 10 = 80", "4 × 5 = 20"], a: "4 × 10 = 40", acc: ["4 × 10 = 40"], type: "written", difficulty: "hard",
      h: "Halve 8 to 4, double 5 to 10.", exp: "8 × 5 = (8 ÷ 2) × (5 × 2) = 4 × 10 = 40."
    },
    { id: "c3_q_2_3_09", q: "What is 9 × 9?",
      options: ["81", "72", "90", "89"], a: "81", acc: ["81"], type: "written", difficulty: "hard",
      h: "9 times 9.", exp: "9 × 9 = 81."
    },
    { id: "c3_q_2_3_10", q: "If a spider has 8 legs, how many legs do 9 spiders have altogether?",
      options: ["72", "64", "81", "56"], a: "72", acc: ["72"], type: "written", difficulty: "hard",
      h: "9 × 8 = ?", exp: "9 × 8 = 72 legs."
    }
  ],

  "c3_les_2_4": [ // Multiplication of 2-digit × 1-digit numbers (Standard and Lattice algorithms)
    { id: "c3_q_2_4_01", q: "What is 23 × 3?",
      options: ["69", "66", "59", "79"], a: "69", acc: ["69"], type: "written", difficulty: "easy",
      h: "20 × 3 = 60; 3 × 3 = 9.", exp: "23 × 3 = 69."
    },
    { id: "c3_q_2_4_02", q: "What is 42 × 2?",
      options: ["84", "82", "86", "44"], a: "84", acc: ["84"], type: "written", difficulty: "easy",
      h: "40 × 2 = 80; 2 × 2 = 4.", exp: "42 × 2 = 84."
    },
    { id: "c3_q_2_4_03", q: "What is 35 × 4?",
      options: ["140", "130", "150", "120"], a: "140", acc: ["140"], type: "written", difficulty: "easy",
      h: "35 × 2 = 70; 70 × 2 = 140.", exp: "35 × 4 = 140."
    },
    { id: "c3_q_2_4_04", q: "What is 56 × 3?",
      options: ["168", "158", "178", "165"], a: "168", acc: ["168"], type: "written", difficulty: "medium",
      h: "6 × 3 = 18; 50 × 3 = 150. 150 + 18 = 168.", exp: "56 × 3 = 168."
    },
    { id: "c3_q_2_4_05", q: "What is 48 × 5?",
      options: ["240", "250", "230", "200"], a: "240", acc: ["240"], type: "written", difficulty: "medium",
      h: "48 × 10 ÷ 2 = 480 ÷ 2 = 240.", exp: "48 × 5 = 240."
    },
    { id: "c3_q_2_4_06", q: "In lattice multiplication, a 2-digit by 1-digit grid has how many cells?",
      options: ["2", "4", "6", "1"], a: "2", acc: ["2", "two"], type: "written", difficulty: "medium",
      h: "2 columns × 1 row.", exp: "A 2 × 1 grid has 2 cells."
    },
    { id: "c3_q_2_4_07", q: "What is 74 × 6?",
      options: ["444", "434", "454", "424"], a: "444", acc: ["444"], type: "written", difficulty: "medium",
      h: "70 × 6 = 420; 4 × 6 = 24. 420 + 24 = 444.", exp: "74 × 6 = 444."
    },
    { id: "c3_q_2_4_08", q: "A box contains 24 crayons. How many crayons are in 8 such boxes?",
      options: ["192", "182", "196", "172"], a: "192", acc: ["192"], type: "written", difficulty: "hard",
      h: "24 × 8 = ?", exp: "24 × 8 = 192 crayons."
    },
    { id: "c3_q_2_4_09", q: "What is 89 × 7?",
      options: ["623", "613", "633", "593"], a: "623", acc: ["623"], type: "written", difficulty: "hard",
      h: "80 × 7 = 560; 9 × 7 = 63. 560 + 63 = 623.", exp: "89 × 7 = 623."
    },
    { id: "c3_q_2_4_10", q: "What is 95 × 9?",
      options: ["855", "845", "865", "815"], a: "855", acc: ["855"], type: "written", difficulty: "hard",
      h: "95 × 10 - 95 = 950 - 95 = 855.", exp: "95 × 9 = 855."
    }
  ],

  "c3_les_2_5": [ // Division through equal grouping and equal sharing
    { id: "c3_q_2_5_01", q: "12 candies shared equally among 3 children gives how many candies to each child?",
      options: ["4", "3", "5", "6"], a: "4", acc: ["4", "four"], type: "written", difficulty: "easy",
      h: "12 ÷ 3 = ?", exp: "12 ÷ 3 = 4 candies each."
    },
    { id: "c3_q_2_5_02", q: "What is 20 ÷ 4?",
      options: ["5", "4", "6", "10"], a: "5", acc: ["5", "five"], type: "written", difficulty: "easy",
      h: "4 × ? = 20.", exp: "20 ÷ 4 = 5."
    },
    { id: "c3_q_2_5_03", q: "If 15 pencils are packed in packets of 5, how many packets are made?",
      options: ["3", "5", "4", "2"], a: "3", acc: ["3", "three"], type: "written", difficulty: "easy",
      h: "15 ÷ 5 = ?", exp: "15 ÷ 5 = 3 packets."
    },
    { id: "c3_q_2_5_04", q: "What is 36 ÷ 6?",
      options: ["6", "7", "5", "8"], a: "6", acc: ["6", "six"], type: "written", difficulty: "medium",
      h: "6 × 6 = 36.", exp: "36 ÷ 6 = 6."
    },
    { id: "c3_q_2_5_05", q: "What is 45 ÷ 9?",
      options: ["5", "6", "4", "9"], a: "5", acc: ["5", "five"], type: "written", difficulty: "medium",
      h: "9 × 5 = 45.", exp: "45 ÷ 9 = 5."
    },
    { id: "c3_q_2_5_06", q: "What is 56 ÷ 8?",
      options: ["7", "8", "6", "9"], a: "7", acc: ["7", "seven"], type: "written", difficulty: "medium",
      h: "8 × 7 = 56.", exp: "56 ÷ 8 = 7."
    },
    { id: "c3_q_2_5_07", q: "What is 0 ÷ 8?",
      options: ["0", "8", "1", "Cannot divide"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "medium",
      h: "Zero divided by any non-zero number is zero.", exp: "0 ÷ 8 = 0."
    },
    { id: "c3_q_2_5_08", q: "72 flowers are arranged equally in 8 vases. How many flowers are in each vase?",
      options: ["9", "8", "7", "10"], a: "9", acc: ["9", "nine"], type: "written", difficulty: "hard",
      h: "72 ÷ 8 = ?", exp: "72 ÷ 8 = 9 flowers."
    },
    { id: "c3_q_2_5_09", q: "What is 63 ÷ 7?",
      options: ["9", "8", "7", "6"], a: "9", acc: ["9", "nine"], type: "written", difficulty: "hard",
      h: "7 × 9 = 63.", exp: "63 ÷ 7 = 9."
    },
    { id: "c3_q_2_5_10", q: "In 48 ÷ 6 = 8, what is 48 called?",
      options: ["Dividend", "Divisor", "Quotient", "Remainder"], a: "Dividend", acc: ["Dividend"], type: "written", difficulty: "hard",
      h: "The number being divided.", exp: "48 is the dividend, 6 is divisor, and 8 is quotient."
    }
  ],

  "c3_les_2_6": [ // Repeated subtraction and multiplication-division relationship
    { id: "c3_q_2_6_01", q: "How many times can 3 be subtracted from 15 until 0 is reached?",
      options: ["5", "3", "4", "6"], a: "5", acc: ["5", "five"], type: "written", difficulty: "easy",
      h: "15 ÷ 3 = ?", exp: "15 - 3 - 3 - 3 - 3 - 3 = 0 (5 times)."
    },
    { id: "c3_q_2_6_02", q: "If 4 × 7 = 28, which division fact is correct?",
      options: ["28 ÷ 7 = 4", "28 ÷ 4 = 6", "28 × 7 = 4", "7 ÷ 4 = 28"], a: "28 ÷ 7 = 4", acc: ["28 ÷ 7 = 4"], type: "written", difficulty: "easy",
      h: "Division is the inverse of multiplication.", exp: "4 × 7 = 28 gives 28 ÷ 7 = 4 and 28 ÷ 4 = 7."
    },
    { id: "c3_q_2_6_03", q: "Every multiplication fact (like 5 × 6 = 30) gives how many division facts?",
      options: ["2", "1", "3", "4"], a: "2", acc: ["2", "two"], type: "written", difficulty: "easy",
      h: "30 ÷ 5 = 6 and 30 ÷ 6 = 5.", exp: "Two division facts: 30 ÷ 5 = 6 and 30 ÷ 6 = 5."
    },
    { id: "c3_q_2_6_04", q: "What is 24 ÷ 8 expressed as repeated subtraction?",
      options: ["24 - 8 - 8 - 8 = 0", "24 - 3 - 3 = 0", "24 + 8 = 32", "24 - 24 = 0"], a: "24 - 8 - 8 - 8 = 0", acc: ["24 - 8 - 8 - 8 = 0"], type: "written", difficulty: "medium",
      h: "Subtract 8 three times.", exp: "24 - 8 = 16, 16 - 8 = 8, 8 - 8 = 0."
    },
    { id: "c3_q_2_6_05", q: "If 9 × 6 = 54, what is 54 ÷ 9?",
      options: ["6", "9", "5", "8"], a: "6", acc: ["6", "six"], type: "written", difficulty: "medium",
      h: "Look at the related multiplication factor.", exp: "54 ÷ 9 = 6."
    },
    { id: "c3_q_2_6_06", q: "What multiplication fact has only ONE division fact?",
      options: ["5 × 5 = 25 (Square numbers)", "4 × 6 = 24", "7 × 8 = 56", "3 × 9 = 27"], a: "5 × 5 = 25 (Square numbers)", acc: ["5 × 5 = 25 (Square numbers)", "5 × 5 = 25"], type: "written", difficulty: "medium",
      h: "When both factors are identical.", exp: "5 × 5 = 25 gives only one unique division fact: 25 ÷ 5 = 5."
    },
    { id: "c3_q_2_6_07", q: "If 8 × ___ = 64, what is 64 ÷ 8?",
      options: ["8", "7", "9", "6"], a: "8", acc: ["8", "eight"], type: "written", difficulty: "medium",
      h: "8 × 8 = 64.", exp: "64 ÷ 8 = 8."
    },
    { id: "c3_q_2_6_08", q: "Dividend = Divisor × Quotient + Remainder. If Divisor = 7, Quotient = 6, Remainder = 0, what is Dividend?",
      options: ["42", "40", "48", "36"], a: "42", acc: ["42"], type: "written", difficulty: "hard",
      h: "7 × 6 + 0 = ?", exp: "7 × 6 = 42."
    },
    { id: "c3_q_2_6_09", q: "If 35 is repeatedly subtracted by 7, how many steps are needed to reach 0?",
      options: ["5 steps", "6 steps", "4 steps", "7 steps"], a: "5 steps", acc: ["5 steps", "5"], type: "written", difficulty: "hard",
      h: "35 ÷ 7 = 5.", exp: "5 repeated subtractions of 7."
    },
    { id: "c3_q_2_6_10", q: "If 48 ÷ 8 = 6, which statement is FALSE?",
      options: ["8 × 6 = 48", "48 ÷ 6 = 8", "6 × 8 = 48", "48 × 6 = 8"], a: "48 × 6 = 8", acc: ["48 × 6 = 8"], type: "written", difficulty: "hard",
      h: "48 × 6 = 288, not 8.", exp: "48 × 6 = 8 is completely false."
    }
  ],

  "c3_les_2_7": [ // Money problems, rate charts, and simple bills
    { id: "c3_q_2_7_01", q: "How many 50-paise coins make 1 Rupee (₹1)?",
      options: ["2", "4", "5", "10"], a: "2", acc: ["2", "two"], type: "written", difficulty: "easy",
      h: "50 + 50 = 100 paise = ₹1.", exp: "2 fifty-paise coins make ₹1."
    },
    { id: "c3_q_2_7_02", q: "How many paise are there in ₹5?",
      options: ["500 paise", "50 paise", "5000 paise", "5 paise"], a: "500 paise", acc: ["500 paise", "500"], type: "written", difficulty: "easy",
      h: "₹1 = 100 paise. 5 × 100 = ?", exp: "₹5 = 500 paise."
    },
    { id: "c3_q_2_7_03", q: "If 1 chocolate costs ₹15, what is the cost of 4 chocolates?",
      options: ["₹60", "₹50", "₹45", "₹75"], a: "₹60", acc: ["₹60", "60", "Rs 60"], type: "written", difficulty: "easy",
      h: "15 × 4 = ?", exp: "15 × 4 = ₹60."
    },
    { id: "c3_q_2_7_04", q: "A notebook costs ₹45 and a pen costs ₹20. What is the total bill?",
      options: ["₹65", "₹60", "₹70", "₹55"], a: "₹65", acc: ["₹65", "65", "Rs 65"], type: "written", difficulty: "medium",
      h: "45 + 20 = ?", exp: "₹45 + ₹20 = ₹65."
    },
    { id: "c3_q_2_7_05", q: "Rohan gave ₹100 note to buy a toy costing ₹72. How much change will he get back?",
      options: ["₹28", "₹38", "₹18", "₹25"], a: "₹28", acc: ["₹28", "28", "Rs 28"], type: "written", difficulty: "medium",
      h: "100 - 72 = ?", exp: "100 - 72 = ₹28."
    },
    { id: "c3_q_2_7_06", q: "Rate chart: Apple = ₹10 each, Banana = ₹5 each. What is the cost of 3 apples and 4 bananas?",
      options: ["₹50", "₹45", "₹55", "₹60"], a: "₹50", acc: ["₹50", "50", "Rs 50"], type: "written", difficulty: "medium",
      h: "(3 × 10) + (4 × 5) = 30 + 20 = ?", exp: "30 + 20 = ₹50."
    },
    { id: "c3_q_2_7_07", q: "Convert ₹8.50 into paise:",
      options: ["850 paise", "85 paise", "8050 paise", "805 paise"], a: "850 paise", acc: ["850 paise", "850"], type: "written", difficulty: "medium",
      h: "8 × 100 + 50.", exp: "₹8.50 = 850 paise."
    },
    { id: "c3_q_2_7_08", q: "What is ₹125.50 + ₹74.50?",
      options: ["₹200.00", "₹199.00", "₹205.00", "₹190.00"], a: "₹200.00", acc: ["₹200.00", "200", "₹200"], type: "written", difficulty: "hard",
      h: "125 + 74 = 199; 0.50 + 0.50 = 1.00. 199 + 1 = 200.", exp: "₹125.50 + ₹74.50 = ₹200.00."
    },
    { id: "c3_q_2_7_09", q: "If 6 movie tickets cost ₹480, what is the cost of 1 ticket?",
      options: ["₹80", "₹70", "₹90", "₹60"], a: "₹80", acc: ["₹80", "80", "Rs 80"], type: "written", difficulty: "hard",
      h: "480 ÷ 6 = ?", exp: "480 ÷ 6 = ₹80 per ticket."
    },
    { id: "c3_q_2_7_10", q: "Bill: 2 Books @ ₹30 each + 1 Pen @ ₹15. If paid with ₹100 note, change returned is:",
      options: ["₹25", "₹35", "₹15", "₹45"], a: "₹25", acc: ["₹25", "25", "Rs 25"], type: "written", difficulty: "hard",
      h: "Total = 60 + 15 = 75. 100 - 75 = 25.", exp: "₹100 - ₹75 = ₹25."
    }
  ],

  "c3_les_2_8": [ // Estimation of sum, difference, product and mental computation
    { id: "c3_q_2_8_01", q: "Round 47 to the nearest TEN:",
      options: ["50", "40", "45", "60"], a: "50", acc: ["50"], type: "written", difficulty: "easy",
      h: "7 is 5 or more, round up.", exp: "47 rounds up to 50."
    },
    { id: "c3_q_2_8_02", q: "Round 82 to the nearest TEN:",
      options: ["80", "90", "85", "70"], a: "80", acc: ["80"], type: "written", difficulty: "easy",
      h: "2 is less than 5, round down.", exp: "82 rounds down to 80."
    },
    { id: "c3_q_2_8_03", q: "Estimate the sum: 38 + 51 by rounding to nearest ten:",
      options: ["90", "80", "100", "89"], a: "90", acc: ["90"], type: "written", difficulty: "easy",
      h: "38 ≈ 40, 51 ≈ 50. 40 + 50 = ?", exp: "40 + 50 = 90."
    },
    { id: "c3_q_2_8_04", q: "Round 348 to the nearest HUNDRED:",
      options: ["300", "400", "350", "500"], a: "300", acc: ["300"], type: "written", difficulty: "medium",
      h: "Tens digit is 4 (< 5), round down.", exp: "348 rounds to 300."
    },
    { id: "c3_q_2_8_05", q: "Round 672 to the nearest HUNDRED:",
      options: ["700", "600", "650", "800"], a: "700", acc: ["700"], type: "written", difficulty: "medium",
      h: "Tens digit is 7 (≥ 5), round up.", exp: "672 rounds up to 700."
    },
    { id: "c3_q_2_8_06", q: "Estimate the difference: 89 - 32 by rounding to nearest ten:",
      options: ["60", "50", "70", "57"], a: "60", acc: ["60"], type: "written", difficulty: "medium",
      h: "89 ≈ 90, 32 ≈ 30. 90 - 30 = ?", exp: "90 - 30 = 60."
    },
    { id: "c3_q_2_8_07", q: "Mental Math: What is 450 + 250?",
      options: ["700", "600", "750", "800"], a: "700", acc: ["700"], type: "written", difficulty: "medium",
      h: "450 + 50 = 500, + 200 = 700.", exp: "450 + 250 = 700."
    },
    { id: "c3_q_2_8_08", q: "Estimate the product: 19 × 6 by rounding 19 to nearest ten:",
      options: ["120", "100", "114", "140"], a: "120", acc: ["120"], type: "written", difficulty: "hard",
      h: "19 ≈ 20. 20 × 6 = ?", exp: "20 × 6 = 120."
    },
    { id: "c3_q_2_8_09", q: "Estimate the sum: 485 + 312 by rounding to nearest hundred:",
      options: ["800", "700", "900", "797"], a: "800", acc: ["800"], type: "written", difficulty: "hard",
      h: "485 ≈ 500, 312 ≈ 300. 500 + 300 = 800.", exp: "500 + 300 = 800."
    },
    { id: "c3_q_2_8_10", q: "Mental Math: What is double of 175?",
      options: ["350", "300", "325", "375"], a: "350", acc: ["350"], type: "written", difficulty: "hard",
      h: "175 × 2 = (100 × 2) + (75 × 2) = 200 + 150 = 350.", exp: "175 × 2 = 350."
    }
  ],

  // =========================================================================
  // Theme 3: Geometry
  // =========================================================================
  "c3_les_3_1": [ // Straight lines and curved lines
    { id: "c3_q_3_1_01", q: "How many endpoints does a LINE SEGMENT have?",
      options: ["2", "1", "0", "Infinite"], a: "2", acc: ["2", "two"], type: "written", difficulty: "easy",
      h: "It has a definite start and end point.", exp: "A line segment has exactly 2 endpoints."
    },
    { id: "c3_q_3_1_02", q: "How many endpoints does a RAY have?",
      options: ["1", "2", "0", "Infinite"], a: "1", acc: ["1", "one"], type: "written", difficulty: "easy",
      h: "Starts at one point and goes forever in one direction (like a sunray).", exp: "A ray has exactly 1 endpoint."
    },
    { id: "c3_q_3_1_03", q: "How many endpoints does a straight LINE have?",
      options: ["0", "1", "2", "4"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "easy",
      h: "A line extends infinitely in both directions.", exp: "A line extends infinitely in both directions, having 0 endpoints."
    },
    { id: "c3_q_3_1_04", q: "A horizontal line running left to right is also called a:",
      options: ["Sleeping line", "Standing line", "Slanting line", "Curved line"], a: "Sleeping line", acc: ["Sleeping line"], type: "written", difficulty: "medium",
      h: "Flat like the horizon.", exp: "A horizontal line is known as a sleeping line."
    },
    { id: "c3_q_3_1_05", q: "A vertical line going straight up and down is called a:",
      options: ["Standing line", "Sleeping line", "Slanting line", "Oblique line"], a: "Standing line", acc: ["Standing line"], type: "written", difficulty: "medium",
      h: "Like a standing pole.", exp: "A vertical line is known as a standing line."
    },
    { id: "c3_q_3_1_06", q: "Which geometrical instrument is used to draw straight line segments of exact lengths?",
      options: ["A Ruler / Scale", "A compass", "A thermometer", "A clock"], a: "A Ruler / Scale", acc: ["A Ruler / Scale", "Ruler", "Scale"], type: "written", difficulty: "medium",
      h: "Marked in cm and mm.", exp: "A ruler is used to draw and measure straight line segments."
    },
    { id: "c3_q_3_1_07", q: "What kind of line is formed when you hold a piece of thread loosely?",
      options: ["Curved line", "Straight line", "Square line", "Ray"], a: "Curved line", acc: ["Curved line"], type: "written", difficulty: "medium",
      h: "It sags and bends.", exp: "A loose thread sags to form a curved line."
    },
    { id: "c3_q_3_1_08", q: "What kind of line is formed when you pull a thread tightly between two hands?",
      options: ["Straight line", "Curved line", "Circle", "Zig-zag"], a: "Straight line", acc: ["Straight line"], type: "written", difficulty: "hard",
      h: "Taut thread.", exp: "A tightly pulled thread forms a straight line segment."
    },
    { id: "c3_q_3_1_09", q: "Two straight lines that cross each other at one common point are called:",
      options: ["Intersecting lines", "Parallel lines", "Curved lines", "Rays"], a: "Intersecting lines", acc: ["Intersecting lines"], type: "written", difficulty: "hard",
      h: "Like the letter X.", exp: "Intersecting lines cross each other at a single intersection point."
    },
    { id: "c3_q_3_1_10", q: "Railway tracks on a straight path are an example of:",
      options: ["Parallel lines", "Intersecting lines", "Curved rays", "Perpendicular lines"], a: "Parallel lines", acc: ["Parallel lines"], type: "written", difficulty: "hard",
      h: "They stay at equal distance and never meet.", exp: "Parallel lines remain at an equal distance apart and never meet."
    }
  ],

  "c3_les_3_2": [ // Shapes on dot grids and Tangram shapes
    { id: "c3_q_3_2_01", q: "How many pieces are there in a standard traditional Tangram puzzle?",
      options: ["7", "5", "8", "6"], a: "7", acc: ["7", "seven"], type: "written", difficulty: "easy",
      h: "7 flat pieces cut from a square.", exp: "A standard Chinese Tangram consists of 7 geometric pieces (tans)."
    },
    { id: "c3_q_3_2_02", q: "In a 7-piece tangram, how many TRIANGLES are there?",
      options: ["5", "3", "4", "2"], a: "5", acc: ["5", "five"], type: "written", difficulty: "easy",
      h: "2 large, 1 medium, 2 small triangles.", exp: "There are 5 triangles in a 7-piece tangram."
    },
    { id: "c3_q_3_2_03", q: "In a 7-piece tangram, how many SQUARES are there?",
      options: ["1", "2", "3", "0"], a: "1", acc: ["1", "one"], type: "written", difficulty: "easy",
      h: "Exactly one central square piece.", exp: "There is 1 square in a 7-piece tangram."
    },
    { id: "c3_q_3_2_04", q: "In a 7-piece tangram, which 4-sided shape other than square is present?",
      options: ["Parallelogram", "Trapezium", "Circle", "Cube"], a: "Parallelogram", acc: ["Parallelogram"], type: "written", difficulty: "medium",
      h: "Slanted opposite sides.", exp: "A 7-piece tangram contains 1 parallelogram."
    },
    { id: "c3_q_3_2_05", q: "On a dot grid paper, how many dots are connected to form the smallest unit square?",
      options: ["4", "3", "2", "5"], a: "4", acc: ["4", "four"], type: "written", difficulty: "medium",
      h: "4 vertices.", exp: "A unit square connects 4 adjacent grid dots."
    },
    { id: "c3_q_3_2_06", q: "Can you create animal silhouettes (like birds, cats, fish) using all 7 tangram pieces?",
      options: ["Yes", "No", "Only squares", "Only triangles"], a: "Yes", acc: ["Yes"], type: "written", difficulty: "medium",
      h: "Tangram is famous for forming creative figures.", exp: "Tangrams are used to construct hundreds of geometric and animal figures."
    },
    { id: "c3_q_3_2_07", q: "Joining 3 non-collinear dots on a dot grid forms which shape?",
      options: ["Triangle", "Square", "Rectangle", "Circle"], a: "Triangle", acc: ["Triangle"], type: "written", difficulty: "medium",
      h: "3 vertices form a 3-sided polygon.", exp: "3 dots form a triangle."
    },
    { id: "c3_q_3_2_08", q: "In a 7-piece tangram, the two largest triangles together form:",
      options: ["Half of the large square", "The whole square", "A small square", "A circle"], a: "Half of the large square", acc: ["Half of the large square"], type: "written", difficulty: "hard",
      h: "Each large triangle is 1/4 of total area.", exp: "The two large triangles make up 2/4 = 1/2 of the complete tangram square."
    },
    { id: "c3_q_3_2_09", q: "If you join 4 dots with equal horizontal and vertical spacing on a dot grid, you form a:",
      options: ["Square", "Circle", "Triangle", "Cone"], a: "Square", acc: ["Square"], type: "written", difficulty: "hard",
      h: "4 equal sides with 90° angles.", exp: "Equal grid dot spacing forms a square."
    },
    { id: "c3_q_3_2_10", q: "Which 2D shape CANNOT be drawn on a regular straight dot grid using straight line segments?",
      options: ["Circle", "Square", "Triangle", "Rectangle"], a: "Circle", acc: ["Circle"], type: "written", difficulty: "hard",
      h: "A circle is curved.", exp: "A circle requires curved lines and cannot be formed by straight segments connecting dot vertices."
    }
  ],

  "c3_les_3_3": [ // Shape properties (Sides, corners, vertices)
    { id: "c3_q_3_3_01", q: "How many sides and vertices does a QUADRILATERAL have?",
      options: ["4 sides and 4 vertices", "3 sides and 3 vertices", "5 sides and 5 vertices", "6 sides"], a: "4 sides and 4 vertices", acc: ["4 sides and 4 vertices"], type: "written", difficulty: "easy",
      h: "Quad = 4.", exp: "Every quadrilateral has 4 sides and 4 vertices."
    },
    { id: "c3_q_3_3_02", q: "Which 2D shape has 0 sides and 0 corners?",
      options: ["Circle / Oval", "Square", "Triangle", "Rectangle"], a: "Circle / Oval", acc: ["Circle / Oval", "Circle"], type: "written", difficulty: "easy",
      h: "Round curved boundary.", exp: "A circle has 0 straight sides and 0 corners."
    },
    { id: "c3_q_3_3_03", q: "How many equal sides does an EQUILATERAL triangle have?",
      options: ["3", "2", "0", "4"], a: "3", acc: ["3", "three"], type: "written", difficulty: "easy",
      h: "Equi = equal.", exp: "An equilateral triangle has all 3 sides equal in length."
    },
    { id: "c3_q_3_3_04", q: "How many corners does a PENTAGON have?",
      options: ["5", "4", "6", "8"], a: "5", acc: ["5", "five"], type: "written", difficulty: "medium",
      h: "Penta = 5.", exp: "A pentagon is a 5-sided polygon with 5 corners."
    },
    { id: "c3_q_3_3_05", q: "How many sides does a HEXAGON have?",
      options: ["6", "5", "7", "8"], a: "6", acc: ["6", "six"], type: "written", difficulty: "medium",
      h: "Hexa = 6 (like honeycomb cell).", exp: "A hexagon has 6 sides."
    },
    { id: "c3_q_3_3_06", q: "In a rectangle, which sides are equal?",
      options: ["Opposite sides are equal", "All 4 sides are equal", "No sides are equal", "Adjacent sides only"], a: "Opposite sides are equal", acc: ["Opposite sides are equal"], type: "written", difficulty: "medium",
      h: "Length = Length, Breadth = Breadth.", exp: "In a rectangle, opposite sides are parallel and equal."
    },
    { id: "c3_q_3_3_07", q: "What is a corner where two sides of a polygon meet called?",
      options: ["Vertex", "Edge", "Surface", "Diagonal"], a: "Vertex", acc: ["Vertex"], type: "written", difficulty: "medium",
      h: "Plural is vertices.", exp: "The meeting point of two sides is called a vertex."
    },
    { id: "c3_q_3_3_08", q: "How many lines of symmetry does a SQUARE have?",
      options: ["4", "2", "1", "Infinite"], a: "4", acc: ["4", "four"], type: "written", difficulty: "hard",
      h: "2 axes through opposite sides + 2 diagonal axes.", exp: "A square has 4 lines of symmetry."
    },
    { id: "c3_q_3_3_09", q: "How many lines of symmetry does a RECTANGLE have?",
      options: ["2", "4", "1", "0"], a: "2", acc: ["2", "two"], type: "written", difficulty: "hard",
      h: "Horizontal and vertical bisectors only (not diagonals).", exp: "A standard rectangle has 2 lines of symmetry."
    },
    { id: "c3_q_3_3_10", q: "How many lines of symmetry does a CIRCLE have?",
      options: ["Infinite (unlimited)", "4", "2", "1"], a: "Infinite (unlimited)", acc: ["Infinite (unlimited)", "Infinite", "unlimited"], type: "written", difficulty: "hard",
      h: "Any line through the center.", exp: "Every diameter line through the center of a circle is a line of symmetry."
    }
  ],

  "c3_les_3_4": [ // Tessellation (Shapes that tile and shapes that do not tile)
    { id: "c3_q_3_4_01", q: "What is TESSELLATION (Tiling)?",
      options: ["Covering a flat surface with repeating shapes with NO gaps and NO overlaps", "Drawing random circles", "Measuring weight", "Adding numbers"], a: "Covering a flat surface with repeating shapes with NO gaps and NO overlaps", acc: ["Covering a flat surface with repeating shapes with NO gaps and NO overlaps"], type: "written", difficulty: "easy",
      h: "Like bathroom floor tiles.", exp: "Tessellation covers a plane using repeating shapes without leaving any gaps or overlaps."
    },
    { id: "c3_q_3_4_02", q: "Which of the following shapes can TILE (tessellate) a flat floor completely?",
      options: ["Square", "Circle", "Heart shape", "Star"], a: "Square", acc: ["Square"], type: "written", difficulty: "easy",
      h: "Squares fit together side-by-side perfectly.", exp: "Square tiles fit together with zero gap (90° × 4 = 360°)."
    },
    { id: "c3_q_3_4_03", q: "Why do CIRCLES NOT tessellate on a flat floor?",
      options: ["They leave gaps between adjacent circles", "They are too heavy", "They have corners", "They are 3D"], a: "They leave gaps between adjacent circles", acc: ["They leave gaps between adjacent circles"], type: "written", difficulty: "easy",
      h: "Round edges leave diamond-shaped gaps.", exp: "Circular coins or tiles cannot cover a surface without leaving gaps."
    },
    { id: "c3_q_3_4_04", q: "Which shape is used by bees in a HONEYCOMB to tessellate?",
      options: ["Regular Hexagon", "Circle", "Octagon", "Pentagon"], a: "Regular Hexagon", acc: ["Regular Hexagon", "Hexagon"], type: "written", difficulty: "medium",
      h: "6-sided shape.", exp: "Honeycombs use regular hexagons to tile the space with maximum volume and zero gaps."
    },
    { id: "c3_q_3_4_05", q: "Can RECTANGLES tessellate a floor?",
      options: ["Yes, completely", "No, never", "Only in circles", "Only 2 rectangles"], a: "Yes, completely", acc: ["Yes, completely", "Yes"], type: "written", difficulty: "medium",
      h: "Brick walls and wooden planks tile perfectly.", exp: "Rectangles tile planes seamlessly (like brick patterns)."
    },
    { id: "c3_q_3_4_06", q: "Can EQUILATERAL TRIANGLES tessellate a surface?",
      options: ["Yes, 6 triangles meet at a vertex (6 × 60° = 360°)", "No, triangles cannot tile", "Only 3 triangles", "Never"], a: "Yes, 6 triangles meet at a vertex (6 × 60° = 360°)", acc: ["Yes, 6 triangles meet at a vertex (6 × 60° = 360°)", "Yes"], type: "written", difficulty: "medium",
      h: "60° × 6 = 360°.", exp: "Equilateral triangles tessellate because six 60° angles sum to 360° at each corner."
    },
    { id: "c3_q_3_4_07", q: "Which of the shapes: Square, Rectangle, Equilateral Triangle, or Regular Octagon CANNOT tessellate a flat surface by itself without gaps?",
      a: "Regular Octagon", acc: ["Regular Octagon", "Octagon", "regular octagon", "octagon"], type: "written", difficulty: "medium",
      h: "Octagons leave square-shaped gaps between them.", exp: "Octagons alone cannot tile a flat surface without inserting small square filler tiles."
    },
    { id: "c3_q_3_4_08", q: "What is the total angle around any shared vertex in a flat tessellation?",
      options: ["360°", "180°", "90°", "720°"], a: "360°", acc: ["360°", "360", "360 degrees"], type: "written", difficulty: "hard",
      h: "A complete full turn.", exp: "Angles around a vertex in a tiling plane must sum to 360°."
    },
    { id: "c3_q_3_4_09", q: "Checkerboard pattern on a chessboard is a tessellation of:",
      options: ["Black and white squares", "Triangles", "Circles", "Hexagons"], a: "Black and white squares", acc: ["Black and white squares"], type: "written", difficulty: "hard",
      h: "64 squares.", exp: "Chessboards are classic square tessellations."
    },
    { id: "c3_q_3_4_10", q: "Brick bond in house walls is an example of:",
      options: ["Rectangular tessellation", "Circular tessellation", "Pentagonal tiling", "Non-tessellating pattern"], a: "Rectangular tessellation", acc: ["Rectangular tessellation"], type: "written", difficulty: "hard",
      h: "Staggered rectangular bricks.", exp: "Brick masonry is a staggered rectangular tessellation."
    }
  ],

  "c3_les_3_5": [ // Simple map reading and 2D representation of 3D objects
    { id: "c3_q_3_5_01", q: "On a standard map, which direction is at the TOP?",
      options: ["North", "South", "East", "West"], a: "North", acc: ["North", "N"], type: "written", difficulty: "easy",
      h: "N points upward.", exp: "North is always at the top of a standard map."
    },
    { id: "c3_q_3_5_02", q: "On a map, if North is UP, which direction is to the RIGHT?",
      options: ["East", "West", "South", "North-West"], a: "East", acc: ["East", "E"], type: "written", difficulty: "easy",
      h: "Sun rises in the East (to your right when facing North).", exp: "East is to the right."
    },
    { id: "c3_q_3_5_03", q: "What 2D shape is the top view of a cylindrical water glass?",
      options: ["Circle", "Rectangle", "Triangle", "Square"], a: "Circle", acc: ["Circle"], type: "written", difficulty: "easy",
      h: "Looking directly from above.", exp: "Looking from above, a cylinder appears as a circle."
    },
    { id: "c3_q_3_5_04", q: "What 2D shape is the side view of a cylindrical can?",
      options: ["Rectangle", "Circle", "Triangle", "Sphere"], a: "Rectangle", acc: ["Rectangle"], type: "written", difficulty: "medium",
      h: "Look from eye level.", exp: "The side projection of a cylinder is a rectangle."
    },
    { id: "c3_q_3_5_05", q: "What 2D shape is the side view of a cone (party hat)?",
      options: ["Triangle", "Circle", "Square", "Rectangle"], a: "Triangle", acc: ["Triangle"], type: "written", difficulty: "medium",
      h: "Tapers to a point.", exp: "Side view of a cone is an isosceles triangle."
    },
    { id: "c3_q_3_5_06", q: "What 2D shape is the top view of a cone?",
      options: ["Circle with a center dot (apex)", "Square", "Triangle", "Rectangle"], a: "Circle with a center dot (apex)", acc: ["Circle with a center dot (apex)", "Circle"], type: "written", difficulty: "medium",
      h: "Round base with the pointed peak in middle.", exp: "Top view of a cone is a circle with the apex point at center."
    },
    { id: "c3_q_3_5_07", q: "On a simple classroom map, a landmark symbol with a 🏥 cross represents a:",
      options: ["Hospital / Medical room", "Playground", "Library", "Canteen"], a: "Hospital / Medical room", acc: ["Hospital / Medical room", "Hospital"], type: "written", difficulty: "medium",
      h: "Medical red cross symbol.", exp: "A cross represents medical/hospital facilities on maps."
    },
    { id: "c3_q_3_5_08", q: "What 2D shape is any view (top, front, side) of a sphere?",
      options: ["Circle", "Square", "Triangle", "Oval"], a: "Circle", acc: ["Circle"], type: "written", difficulty: "hard",
      h: "Spheres are round from every angle.", exp: "A sphere always projects as a circle from all angles."
    },
    { id: "c3_q_3_5_09", q: "If your house is South of the school, then the school is in which direction from your house?",
      options: ["North", "South", "East", "West"], a: "North", acc: ["North"], type: "written", difficulty: "hard",
      h: "Opposite of South.", exp: "Opposite of South is North."
    },
    { id: "c3_q_3_5_10", q: "What 2D shape is the front view of a cube (dice)?",
      options: ["Square", "Rectangle", "Triangle", "Cube"], a: "Square", acc: ["Square"], type: "written", difficulty: "hard",
      h: "Each face of a cube is a square.", exp: "Every orthogonal view of a cube is a square."
    }
  ],

  // =========================================================================
  // Theme 4: Measurement
  // =========================================================================
  "c3_les_4_1": [ // Standard units: Centimetres and Metres, measuring length
    { id: "c3_q_4_1_01", q: "How many centimetres (cm) are in 1 metre (m)?",
      options: ["100 cm", "10 cm", "1000 cm", "50 cm"], a: "100 cm", acc: ["100 cm", "100"], type: "written", difficulty: "easy",
      h: "1 m = 100 cm.", exp: "There are 100 centimetres in one metre."
    },
    { id: "c3_q_4_1_02", q: "Which unit is best to measure the length of your pencil?",
      options: ["Centimetre (cm)", "Metre (m)", "Kilometre (km)", "Litre (l)"], a: "Centimetre (cm)", acc: ["Centimetre (cm)", "cm", "Centimetre"], type: "written", difficulty: "easy",
      h: "Pencils are small objects.", exp: "Small lengths like pencils are measured in centimetres (cm)."
    },
    { id: "c3_q_4_1_03", q: "Which unit is best to measure the height of a classroom wall?",
      options: ["Metre (m)", "Centimetre (cm)", "Millimetre (mm)", "Gram (g)"], a: "Metre (m)", acc: ["Metre (m)", "m", "Metre"], type: "written", difficulty: "easy",
      h: "Large heights and lengths.", exp: "Room heights are measured in metres (m)."
    },
    { id: "c3_q_4_1_04", q: "What is the standard symbol for metre?",
      options: ["m", "cm", "km", "mm"], a: "m", acc: ["m"], type: "written", difficulty: "medium",
      h: "Lower-case m.", exp: "Metre is denoted by 'm'."
    },
    { id: "c3_q_4_1_05", q: "How many centimetres are in 4 metres?",
      options: ["400 cm", "40 cm", "4000 cm", "44 cm"], a: "400 cm", acc: ["400 cm", "400"], type: "written", difficulty: "medium",
      h: "4 × 100 = ?", exp: "4 m = 4 × 100 cm = 400 cm."
    },
    { id: "c3_q_4_1_06", q: "Which is longer: 250 cm or 2 m?",
      options: ["250 cm", "2 m", "Both are equal", "None"], a: "250 cm", acc: ["250 cm"], type: "written", difficulty: "medium",
      h: "2 m = 200 cm. 250 cm > 200 cm.", exp: "250 cm > 200 cm (2 m)."
    },
    { id: "c3_q_4_1_07", q: "To measure the length of a football ground, which unit is used?",
      options: ["Metres (m)", "Centimetres (cm)", "Millimetres (mm)", "Grams (g)"], a: "Metres (m)", acc: ["Metres (m)", "Metres", "m"], type: "written", difficulty: "medium",
      h: "Large open distances.", exp: "Sports fields are measured in metres."
    },
    { id: "c3_q_4_1_08", q: "How many metres is 700 cm?",
      options: ["7 m", "70 m", "700 m", "0.7 m"], a: "7 m", acc: ["7 m", "7"], type: "written", difficulty: "hard",
      h: "700 ÷ 100 = ?", exp: "700 cm = 7 m."
    },
    { id: "c3_q_4_1_09", q: "A tailor has 5 m cloth. He uses 3 m 20 cm for a dress. How much cloth is left?",
      options: ["1 m 80 cm", "2 m 20 cm", "1 m 20 cm", "2 m 80 cm"], a: "1 m 80 cm", acc: ["1 m 80 cm", "1m 80cm"], type: "written", difficulty: "hard",
      h: "500 cm - 320 cm = 180 cm = 1 m 80 cm.", exp: "500 cm - 320 cm = 180 cm = 1 m 80 cm."
    },
    { id: "c3_q_4_1_10", q: "What is 3 m 45 cm + 2 m 65 cm?",
      options: ["6 m 10 cm", "5 m 10 cm", "6 m 00 cm", "5 m 110 cm"], a: "6 m 10 cm", acc: ["6 m 10 cm", "6m 10cm"], type: "written", difficulty: "hard",
      h: "45 + 65 = 110 cm = 1 m 10 cm. 3 + 2 + 1 = 6 m.", exp: "3 m 45 cm + 2 m 65 cm = 6 m 10 cm."
    }
  ],

  "c3_les_4_2": [ // Metre-centimetre relationship and conversions
    { id: "c3_q_4_2_01", q: "Convert 3 m 25 cm into centimetres:",
      options: ["325 cm", "3025 cm", "3250 cm", "55 cm"], a: "325 cm", acc: ["325 cm", "325"], type: "written", difficulty: "easy",
      h: "3 m = 300 cm + 25 cm = ?", exp: "300 + 25 = 325 cm."
    },
    { id: "c3_q_4_2_02", q: "Convert 608 cm into metres and centimetres:",
      options: ["6 m 8 cm", "60 m 8 cm", "6 m 80 cm", "68 m 0 cm"], a: "6 m 8 cm", acc: ["6 m 8 cm"], type: "written", difficulty: "easy",
      h: "600 cm = 6 m, remaining is 8 cm.", exp: "608 cm = 6 m 8 cm."
    },
    { id: "c3_q_4_2_03", q: "How many centimetres in half a metre (½ m)?",
      options: ["50 cm", "25 cm", "500 cm", "100 cm"], a: "50 cm", acc: ["50 cm", "50"], type: "written", difficulty: "easy",
      h: "100 ÷ 2 = ?", exp: "½ m = 50 cm."
    },
    { id: "c3_q_4_2_04", q: "Convert 8 m 50 cm into centimetres:",
      options: ["850 cm", "8500 cm", "805 cm", "85 cm"], a: "850 cm", acc: ["850 cm", "850"], type: "written", difficulty: "medium",
      h: "800 + 50 = ?", exp: "8 m 50 cm = 850 cm."
    },
    { id: "c3_q_4_2_05", q: "Convert 490 cm into metres and centimetres:",
      options: ["4 m 90 cm", "49 m 0 cm", "4 m 9 cm", "40 m 9 cm"], a: "4 m 90 cm", acc: ["4 m 90 cm"], type: "written", difficulty: "medium",
      h: "400 cm + 90 cm.", exp: "490 cm = 4 m 90 cm."
    },
    { id: "c3_q_4_2_06", q: "What is 7 m - 2 m 40 cm?",
      options: ["4 m 60 cm", "5 m 60 cm", "4 m 40 cm", "5 m 40 cm"], a: "4 m 60 cm", acc: ["4 m 60 cm"], type: "written", difficulty: "medium",
      h: "700 cm - 240 cm = 460 cm = 4 m 60 cm.", exp: "7 m - 2 m 40 cm = 4 m 60 cm."
    },
    { id: "c3_q_4_2_07", q: "How many centimetres in 1 metre and 1 centimetre?",
      options: ["101 cm", "110 cm", "11 cm", "1001 cm"], a: "101 cm", acc: ["101 cm", "101"], type: "written", difficulty: "medium",
      h: "100 + 1 = 101.", exp: "1 m 1 cm = 101 cm."
    },
    { id: "c3_q_4_2_08", q: "Rope A is 4 m 80 cm long. Rope B is 3 m 90 cm long. How much longer is Rope A?",
      options: ["90 cm", "1 m 10 cm", "70 cm", "80 cm"], a: "90 cm", acc: ["90 cm", "90"], type: "written", difficulty: "hard",
      h: "480 cm - 390 cm = 90 cm.", exp: "480 - 390 = 90 cm."
    },
    { id: "c3_q_4_2_09", q: "What is 4 times (1 m 25 cm)?",
      options: ["5 m", "4 m 50 cm", "5 m 25 cm", "4 m"], a: "5 m", acc: ["5 m", "5", "500 cm"], type: "written", difficulty: "hard",
      h: "125 cm × 4 = 500 cm = 5 m.", exp: "125 cm × 4 = 500 cm = 5 m."
    },
    { id: "c3_q_4_2_10", q: "A pole of length 3 m is cut into 6 equal pieces. What is the length of each piece?",
      options: ["50 cm", "60 cm", "40 cm", "30 cm"], a: "50 cm", acc: ["50 cm", "50"], type: "written", difficulty: "hard",
      h: "3 m = 300 cm. 300 ÷ 6 = 50 cm.", exp: "300 cm ÷ 6 = 50 cm."
    }
  ],

  "c3_les_4_3": [ // Weight and Capacity (Kilograms, grams, litres, millilitres, conservation of volume)
    { id: "c3_q_4_3_01", q: "How many grams (g) are in 1 kilogram (kg)?",
      options: ["1000 g", "100 g", "10 g", "500 g"], a: "1000 g", acc: ["1000 g", "1000"], type: "written", difficulty: "easy",
      h: "1 kg = 1000 g.", exp: "1 kilogram = 1000 grams."
    },
    { id: "c3_q_4_3_02", q: "How many millilitres (ml) are in 1 litre (l)?",
      options: ["1000 ml", "100 ml", "10 ml", "500 ml"], a: "1000 ml", acc: ["1000 ml", "1000"], type: "written", difficulty: "easy",
      h: "1 litre = 1000 millilitres.", exp: "1 litre = 1000 ml."
    },
    { id: "c3_q_4_3_03", q: "Which unit is best to measure the weight of a bag of rice?",
      options: ["Kilogram (kg)", "Gram (g)", "Litre (l)", "Millilitre (ml)"], a: "Kilogram (kg)", acc: ["Kilogram (kg)", "kg", "Kilogram"], type: "written", difficulty: "easy",
      h: "Heavy weight.", exp: "Heavy grocery items are weighed in kilograms."
    },
    { id: "c3_q_4_3_04", q: "Which unit is best to measure a dose of cough syrup in a small spoon?",
      options: ["Millilitre (ml)", "Litre (l)", "Kilogram (kg)", "Metre (m)"], a: "Millilitre (ml)", acc: ["Millilitre (ml)", "ml"], type: "written", difficulty: "medium",
      h: "Small liquid volume.", exp: "Small liquid quantities (like medicine) are measured in millilitres (ml)."
    },
    { id: "c3_q_4_3_05", q: "How many grams in half a kilogram (½ kg)?",
      options: ["500 g", "250 g", "100 g", "750 g"], a: "500 g", acc: ["500 g", "500"], type: "written", difficulty: "medium",
      h: "1000 ÷ 2 = ?", exp: "½ kg = 500 grams."
    },
    { id: "c3_q_4_3_06", q: "Convert 3 kg 450 g into grams:",
      options: ["3450 g", "30450 g", "345 g", "3400 g"], a: "3450 g", acc: ["3450 g", "3450"], type: "written", difficulty: "medium",
      h: "3000 + 450 = ?", exp: "3 kg 450 g = 3450 grams."
    },
    { id: "c3_q_4_3_07", q: "How many 250 ml cups are needed to fill a 1-litre bottle?",
      options: ["4", "2", "5", "10"], a: "4", acc: ["4", "four"], type: "written", difficulty: "medium",
      h: "1000 ÷ 250 = ?", exp: "1000 ml ÷ 250 ml = 4 cups."
    },
    { id: "c3_q_4_3_08", q: "A water tanker had 500 l water. 280 l was used. How much water remains?",
      options: ["220 l", "230 l", "320 l", "180 l"], a: "220 l", acc: ["220 l", "220"], type: "written", difficulty: "hard",
      h: "500 - 280 = ?", exp: "500 - 280 = 220 litres."
    },
    { id: "c3_q_4_3_09", q: "If you pour 500 ml juice from a tall narrow glass into a wide flat bowl, the volume of juice:",
      options: ["Remains exactly 500 ml (Conserved)", "Increases", "Decreases", "Becomes zero"], a: "Remains exactly 500 ml (Conserved)", acc: ["Remains exactly 500 ml (Conserved)", "Remains exactly 500 ml"], type: "written", difficulty: "hard",
      h: "Conservation of liquid volume.", exp: "Volume remains constant regardless of container shape (Conservation of Volume)."
    },
    { id: "c3_q_4_3_10", q: "What is 4 kg 750 g + 2 kg 850 g?",
      options: ["7 kg 600 g", "6 kg 600 g", "7 kg 500 g", "6 kg 1600 g"], a: "7 kg 600 g", acc: ["7 kg 600 g"], type: "written", difficulty: "hard",
      h: "750 + 850 = 1600 g = 1 kg 600 g. 4 + 2 + 1 = 7 kg.", exp: "4 kg 750 g + 2 kg 850 g = 7 kg 600 g."
    }
  ],

  "c3_les_4_4": [ // Calendar, days and dates
    { id: "c3_q_4_4_01", q: "How many months in a calendar year have exactly 30 days?",
      a: "4", acc: ["4", "four", "4 months"], type: "written", difficulty: "easy",
      h: "April, June, September, November.", exp: "4 months (April, June, September, November) have exactly 30 days."
    },
    { id: "c3_q_4_4_02", q: "How many days are in a regular non-leap year?",
      options: ["365 days", "366 days", "360 days", "300 days"], a: "365 days", acc: ["365 days", "365"], type: "written", difficulty: "easy",
      h: "A standard year.", exp: "A normal year has 365 days."
    },
    { id: "c3_q_4_4_03", q: "How many days are in a LEAP YEAR?",
      options: ["366 days", "365 days", "364 days", "360 days"], a: "366 days", acc: ["366 days", "366"], type: "written", difficulty: "easy",
      h: "February gets 29 days.", exp: "A leap year has 366 days (February has 29 days)."
    },
    { id: "c3_q_4_4_04", q: "Which month has only 28 or 29 days?",
      options: ["February", "January", "April", "June"], a: "February", acc: ["February"], type: "written", difficulty: "medium",
      h: "The second month of the year.", exp: "February has 28 days in a common year and 29 days in a leap year."
    },
    { id: "c3_q_4_4_05", q: "Which of these months has 31 days?",
      options: ["July", "April", "June", "September"], a: "July", acc: ["July"], type: "written", difficulty: "medium",
      h: "July and August both have 31 days.", exp: "July has 31 days (April, June, September have 30 days)."
    },
    { id: "c3_q_4_4_06", q: "How many weeks are there in a standard year?",
      options: ["52 weeks", "50 weeks", "48 weeks", "12 weeks"], a: "52 weeks", acc: ["52 weeks", "52"], type: "written", difficulty: "medium",
      h: "365 ÷ 7 ≈ 52.", exp: "There are 52 weeks in a year."
    },
    { id: "c3_q_4_4_07", q: "If today is 14th August, what will be the date 1 week later?",
      options: ["21st August", "20th August", "22nd August", "15th August"], a: "21st August", acc: ["21st August", "21 August", "21"], type: "written", difficulty: "medium",
      h: "14 + 7 = ?", exp: "14 + 7 = 21st August."
    },
    { id: "c3_q_4_4_08", q: "India's Independence Day is celebrated on:",
      options: ["15th August", "26th January", "2nd October", "14th November"], a: "15th August", acc: ["15th August", "15 August"], type: "written", difficulty: "hard",
      h: "August 15.", exp: "Independence Day is celebrated on 15th August."
    },
    { id: "c3_q_4_4_09", q: "If 1st March is a Sunday, what day of the week is 8th March?",
      options: ["Sunday", "Monday", "Saturday", "Friday"], a: "Sunday", acc: ["Sunday"], type: "written", difficulty: "hard",
      h: "1 + 7 = 8 (exactly 1 week).", exp: "Adding 7 days gives the same day of the week (Sunday)."
    },
    { id: "c3_q_4_4_10", q: "How many total days are there in the months of June and July together?",
      options: ["61 days", "60 days", "62 days", "59 days"], a: "61 days", acc: ["61 days", "61"], type: "written", difficulty: "hard",
      h: "June (30) + July (31) = ?", exp: "30 + 31 = 61 days."
    }
  ],

  "c3_les_4_5": [ // Reading time, AM/PM, 12-hour and 24-hour clock conversions
    { id: "c3_q_4_5_01", q: "How many minutes are in 1 hour?",
      options: ["60 minutes", "100 minutes", "30 minutes", "24 minutes"], a: "60 minutes", acc: ["60 minutes", "60"], type: "written", difficulty: "easy",
      h: "1 hour = 60 minutes.", exp: "There are 60 minutes in an hour."
    },
    { id: "c3_q_4_5_02", q: "What time is 'Half past 4'?",
      options: ["4:30", "4:15", "4:45", "5:30"], a: "4:30", acc: ["4:30"], type: "written", difficulty: "easy",
      h: "Half of 60 mins = 30 mins.", exp: "Half past 4 is 4:30."
    },
    { id: "c3_q_4_5_03", q: "What time is 'Quarter to 6'?",
      options: ["5:45", "6:15", "6:45", "5:15"], a: "5:45", acc: ["5:45"], type: "written", difficulty: "easy",
      h: "15 minutes before 6:00.", exp: "Quarter to 6 is 5:45."
    },
    { id: "c3_q_4_5_04", q: "What does 'AM' stand for in time?",
      options: ["Ante Meridiem (Before Noon / Morning)", "After Midnight", "After Morning", "All Morning"], a: "Ante Meridiem (Before Noon / Morning)", acc: ["Ante Meridiem (Before Noon / Morning)", "Ante Meridiem"], type: "written", difficulty: "medium",
      h: "From midnight to 12 noon.", exp: "AM stands for Ante Meridiem (before noon)."
    },
    { id: "c3_q_4_5_05", q: "What time of day is 8:00 PM?",
      options: ["Evening / Night", "Morning", "Noon", "Midnight"], a: "Evening / Night", acc: ["Evening / Night", "Evening", "Night"], type: "written", difficulty: "medium",
      h: "PM is after 12 noon.", exp: "8:00 PM is in the evening/night."
    },
    { id: "c3_q_4_5_06", q: "Convert 3:00 PM into 24-hour clock time:",
      options: ["15:00 hours", "13:00 hours", "03:00 hours", "18:00 hours"], a: "15:00 hours", acc: ["15:00 hours", "15:00", "1500"], type: "written", difficulty: "medium",
      h: "Add 12 to 3 for PM time: 3 + 12 = 15.", exp: "3:00 PM = 15:00 hours."
    },
    { id: "c3_q_4_5_07", q: "Convert 20:30 hours (24-hour clock) into 12-hour clock time:",
      options: ["8:30 PM", "8:30 AM", "10:30 PM", "6:30 PM"], a: "8:30 PM", acc: ["8:30 PM"], type: "written", difficulty: "medium",
      h: "20 - 12 = 8. So 8:30 PM.", exp: "20:30 - 12:00 = 8:30 PM."
    },
    { id: "c3_q_4_5_08", q: "If the hour hand is between 2 and 3, and the minute hand is at 6, the time is:",
      options: ["2:30", "3:30", "2:06", "3:00"], a: "2:30", acc: ["2:30"], type: "written", difficulty: "hard",
      h: "Minute hand at 6 = 30 minutes.", exp: "The time is 2:30 (half past 2)."
    },
    { id: "c3_q_4_5_09", q: "Convert 07:45 hours to 12-hour format:",
      options: ["7:45 AM", "7:45 PM", "5:45 AM", "8:45 PM"], a: "7:45 AM", acc: ["7:45 AM"], type: "written", difficulty: "hard",
      h: "Times before 12:00 are AM.", exp: "07:45 hours = 7:45 AM."
    },
    { id: "c3_q_4_5_10", q: "How is 12:00 MIDNIGHT represented in 24-hour time?",
      options: ["00:00 hours (or 24:00)", "12:00 hours", "01:00 hours", "12:00 PM"], a: "00:00 hours (or 24:00)", acc: ["00:00 hours (or 24:00)", "00:00", "24:00"], type: "written", difficulty: "hard",
      h: "Start of the new day.", exp: "Midnight is 00:00 hours."
    }
  ],

  "c3_les_4_6": [ // Time conversions (Days to hours, Hours to minutes)
    { id: "c3_q_4_6_01", q: "How many hours are in 1 full day?",
      options: ["24 hours", "12 hours", "60 hours", "48 hours"], a: "24 hours", acc: ["24 hours", "24"], type: "written", difficulty: "easy",
      h: "1 day = 24 hours.", exp: "There are 24 hours in one day."
    },
    { id: "c3_q_4_6_02", q: "How many hours are in 2 days?",
      options: ["48 hours", "24 hours", "36 hours", "50 hours"], a: "48 hours", acc: ["48 hours", "48"], type: "written", difficulty: "easy",
      h: "2 × 24 = ?", exp: "2 × 24 = 48 hours."
    },
    { id: "c3_q_4_6_03", q: "How many minutes are in 2 hours?",
      options: ["120 minutes", "100 minutes", "60 minutes", "180 minutes"], a: "120 minutes", acc: ["120 minutes", "120"], type: "written", difficulty: "easy",
      h: "2 × 60 = ?", exp: "2 × 60 = 120 minutes."
    },
    { id: "c3_q_4_6_04", q: "Convert 3 hours into minutes:",
      options: ["180 minutes", "150 minutes", "120 minutes", "300 minutes"], a: "180 minutes", acc: ["180 minutes", "180"], type: "written", difficulty: "medium",
      h: "3 × 60 = ?", exp: "3 × 60 = 180 minutes."
    },
    { id: "c3_q_4_6_05", q: "How many hours are there in 2 full days?",
      a: "48", acc: ["48", "48 hours", "48 hrs"], type: "written", difficulty: "medium",
      h: "1 day = 24 hours. 24 × 2 = ?", exp: "2 days = 2 × 24 = 48 hours."
    },
    { id: "c3_q_4_6_06", q: "Convert 1 hour 30 minutes into minutes:",
      options: ["90 minutes", "60 minutes", "130 minutes", "80 minutes"], a: "90 minutes", acc: ["90 minutes", "90"], type: "written", difficulty: "medium",
      h: "60 + 30 = ?", exp: "60 + 30 = 90 minutes."
    },
    { id: "c3_q_4_6_07", q: "Convert 120 seconds into minutes:",
      options: ["2 minutes", "1 minute", "3 minutes", "12 minutes"], a: "2 minutes", acc: ["2 minutes", "2"], type: "written", difficulty: "medium",
      h: "120 ÷ 60 = ?", exp: "120 ÷ 60 = 2 minutes."
    },
    { id: "c3_q_4_6_08", q: "How many minutes in 1 day?",
      options: ["1440 minutes", "720 minutes", "2400 minutes", "3600 minutes"], a: "1440 minutes", acc: ["1440 minutes", "1440"], type: "written", difficulty: "hard",
      h: "24 × 60 = ?", exp: "24 × 60 = 1440 minutes."
    },
    { id: "c3_q_4_6_09", q: "A movie started at 3:15 PM and ran for 2 hours 15 minutes. What time did it end?",
      options: ["5:30 PM", "5:15 PM", "5:45 PM", "6:00 PM"], a: "5:30 PM", acc: ["5:30 PM", "5:30"], type: "written", difficulty: "hard",
      h: "3:15 + 2 hr 15 min = 5:30 PM.", exp: "3:15 + 2h 15m = 5:30 PM."
    },
    { id: "c3_q_4_6_10", q: "Convert 200 minutes into hours and minutes:",
      options: ["3 hours 20 minutes", "2 hours 40 minutes", "3 hours 40 minutes", "4 hours 0 minutes"], a: "3 hours 20 minutes", acc: ["3 hours 20 minutes"], type: "written", difficulty: "hard",
      h: "200 ÷ 60 = 3 with remainder 20.", exp: "200 minutes = 3 hours 20 minutes."
    }
  ],

  // =========================================================================
  // Theme 5: Data Handling
  // =========================================================================
  "c3_les_5_1": [ // Data collection and representation using tables
    { id: "c3_q_5_1_01", q: "What is DATA in mathematics?",
      options: ["A collection of facts, numbers or information collected to draw conclusions", "A single shape", "A calculator", "A drawing"], a: "A collection of facts, numbers or information collected to draw conclusions", acc: ["A collection of facts, numbers or information collected to draw conclusions"], type: "written", difficulty: "easy",
      h: "Recorded information.", exp: "Data is a structured collection of facts and numbers gathered for observation."
    },
    { id: "c3_q_5_1_02", q: "In a class table: Cricket = 12, Football = 15, Badminton = 8. Which sport is MOST popular?",
      options: ["Football", "Cricket", "Badminton", "All are equal"], a: "Football", acc: ["Football"], type: "written", difficulty: "easy",
      h: "15 is the highest number.", exp: "Football with 15 students is the most popular."
    },
    { id: "c3_q_5_1_03", q: "Using the same table (Cricket 12, Football 15, Badminton 8), how many students were surveyed in all?",
      options: ["35", "30", "32", "40"], a: "35", acc: ["35"], type: "written", difficulty: "easy",
      h: "12 + 15 + 8 = ?", exp: "12 + 15 + 8 = 35 students."
    },
    { id: "c3_q_5_1_04", q: "What is the primary benefit of organizing raw data into a table?",
      options: ["It makes the data clear, easy to read, and quick to analyze", "It hides the numbers", "It makes math difficult", "None"], a: "It makes the data clear, easy to read, and quick to analyze", acc: ["It makes the data clear, easy to read, and quick to analyze"], type: "written", difficulty: "medium",
      h: "Tables organize information neatly.", exp: "Tabular data provides organized readability and scannability."
    },
    { id: "c3_q_5_1_05", q: "In a library survey table: Monday = 45 books, Tuesday = 30 books, Wednesday = 60 books. What was the total books issued?",
      options: ["135", "125", "145", "130"], a: "135", acc: ["135"], type: "written", difficulty: "medium",
      h: "45 + 30 + 60 = ?", exp: "45 + 30 + 60 = 135 books."
    },
    { id: "c3_q_5_1_06", q: "How many MORE books were issued on Wednesday (60) than on Tuesday (30)?",
      options: ["30", "20", "40", "15"], a: "30", acc: ["30", "thirty"], type: "written", difficulty: "medium",
      h: "60 - 30 = ?", exp: "60 - 30 = 30 books."
    },
    { id: "c3_q_5_1_07", q: "In a fruit shop table: Apples = 120, Oranges = 85, Mangoes = 150. Which fruit has the LEAST stock?",
      options: ["Oranges", "Apples", "Mangoes", "All are equal"], a: "Oranges", acc: ["Oranges"], type: "written", difficulty: "medium",
      h: "85 is the smallest number.", exp: "Oranges (85) have the least quantity."
    },
    { id: "c3_q_5_1_08", q: "What is the difference between Mangoes (150) and Apples (120)?",
      options: ["30", "25", "35", "40"], a: "30", acc: ["30"], type: "written", difficulty: "hard",
      h: "150 - 120 = ?", exp: "150 - 120 = 30."
    },
    { id: "c3_q_5_1_09", q: "A table has 4 rows and 3 columns. How many total cells does it have?",
      options: ["12", "7", "10", "14"], a: "12", acc: ["12", "twelve"], type: "written", difficulty: "hard",
      h: "4 × 3 = ?", exp: "4 × 3 = 12 cells."
    },
    { id: "c3_q_5_1_10", q: "Which of the following: Colors of rainbow, Names of cities, Days of week, or Test scores (85, 90, 78) is an example of numerical (quantitative) data?",
      a: "Test scores", acc: ["Test scores", "Test scores (85, 90, 78)", "test scores", "scores"], type: "written", difficulty: "hard",
      h: "Look for the option that represents countable numerical values.", exp: "Numbers like test scores constitute quantitative numerical data."
    }
  ],

  "c3_les_5_2": [ // Pictographs and Tally marks
    { id: "c3_q_5_2_01", q: "How is the number 5 written using standard TALLY MARKS?",
      options: ["卌 (4 vertical lines and 1 diagonal cross line)", "||||| (5 vertical lines)", "V", "5"], a: "卌 (4 vertical lines and 1 diagonal cross line)", acc: ["卌 (4 vertical lines and 1 diagonal cross line)", "卌"], type: "written", difficulty: "easy",
      h: "Four vertical strokes crossed by a fifth diagonal slash.", exp: "A bundle of 5 tally marks consists of 4 vertical lines crossed by 1 diagonal slash (卌)."
    },
    { id: "c3_q_5_2_02", q: "How many tally marks are represented by: 卌 卌 |||?",
      options: ["13", "12", "15", "8"], a: "13", acc: ["13"], type: "written", difficulty: "easy",
      h: "5 + 5 + 3 = ?", exp: "5 + 5 + 3 = 13."
    },
    { id: "c3_q_5_2_03", q: "In a pictograph, the SCALE says: 1 🚗 = 5 cars. If you see 4 car symbols 🚗 🚗 🚗 🚗, how many cars are there?",
      options: ["20 cars", "4 cars", "9 cars", "25 cars"], a: "20 cars", acc: ["20 cars", "20"], type: "written", difficulty: "easy",
      h: "4 × 5 = ?", exp: "4 × 5 = 20 cars."
    },
    { id: "c3_q_5_2_04", q: "In a pictograph where 1 📚 = 10 books, how many book symbols represent 60 books?",
      options: ["6 symbols", "60 symbols", "10 symbols", "5 symbols"], a: "6 symbols", acc: ["6 symbols", "6"], type: "written", difficulty: "medium",
      h: "60 ÷ 10 = ?", exp: "60 ÷ 10 = 6 symbols."
    },
    { id: "c3_q_5_2_05", q: "How would you write 17 in tally marks?",
      options: ["卌 卌 卌 ||", "卌 卌 |||||||", "卌 卌 卌 |||", "卌 卌 卌 卌"], a: "卌 卌 卌 ||", acc: ["卌 卌 卌 ||"], type: "written", difficulty: "medium",
      h: "5 + 5 + 5 + 2 = 17.", exp: "17 is written as three groups of 5 plus 2 single strokes: 卌 卌 卌 ||."
    },
    { id: "c3_q_5_2_06", q: "In a pictograph where 1 🌳 = 20 trees, a half tree symbol represents:",
      options: ["10 trees", "5 trees", "20 trees", "2 trees"], a: "10 trees", acc: ["10 trees", "10"], type: "written", difficulty: "medium",
      h: "Half of 20 = ?", exp: "20 ÷ 2 = 10 trees."
    },
    { id: "c3_q_5_2_07", q: "If 1 🍦 = 4 ice-creams, what does 3 and a half ice-cream symbols represent?",
      options: ["14 ice-creams", "12 ice-creams", "16 ice-creams", "7 ice-creams"], a: "14 ice-creams", acc: ["14 ice-creams", "14"], type: "written", difficulty: "medium",
      h: "(3 × 4) + 2 = 12 + 2 = 14.", exp: "(3 × 4) + 2 = 14 ice-creams."
    },
    { id: "c3_q_5_2_08", q: "Tally table: Class A = 卌 卌 || (12), Class B = 卌 卌 卌 (15). What is the total count?",
      options: ["27", "25", "30", "22"], a: "27", acc: ["27"], type: "written", difficulty: "hard",
      h: "12 + 15 = ?", exp: "12 + 15 = 27."
    },
    { id: "c3_q_5_2_09", q: "Why is a KEY or SCALE necessary in a pictograph?",
      options: ["It tells the exact value represented by each symbol", "It gives the title", "It colors the symbols", "None"], a: "It tells the exact value represented by each symbol", acc: ["It tells the exact value represented by each symbol"], type: "written", difficulty: "hard",
      h: "Without a key, we cannot know the number per icon.", exp: "A key defines what numerical quantity each picture icon stands for."
    },
    { id: "c3_q_5_2_10", q: "In a pictograph with scale 1 ⭐ = 8 points, Team Blue scored 40 points. How many stars should be drawn?",
      options: ["5 stars", "4 stars", "8 stars", "6 stars"], a: "5 stars", acc: ["5 stars", "5"], type: "written", difficulty: "hard",
      h: "40 ÷ 8 = ?", exp: "40 ÷ 8 = 5 stars."
    }
  ],

  "c3_les_5_3": [ // Comparing data and drawing conclusions
    { id: "c3_q_5_3_01", q: "Rainfall data: Mon = 10 mm, Tue = 25 mm, Wed = 5 mm. On which day was rainfall HIGHEST?",
      options: ["Tuesday", "Monday", "Wednesday", "All equal"], a: "Tuesday", acc: ["Tuesday"], type: "written", difficulty: "easy",
      h: "25 mm is the maximum.", exp: "Tuesday recorded the highest rainfall (25 mm)."
    },
    { id: "c3_q_5_3_02", q: "What was the TOTAL rainfall for the 3 days (Mon 10 mm, Tue 25 mm, Wed 5 mm)?",
      options: ["40 mm", "35 mm", "45 mm", "50 mm"], a: "40 mm", acc: ["40 mm", "40"], type: "written", difficulty: "easy",
      h: "10 + 25 + 5 = ?", exp: "10 + 25 + 5 = 40 mm."
    },
    { id: "c3_q_5_3_03", q: "Pet survey: Dogs = 18, Cats = 12, Birds = 6. Which pet is owned TWICE as much as birds?",
      options: ["Cats (12)", "Dogs (18)", "None", "Both"], a: "Cats (12)", acc: ["Cats (12)", "Cats"], type: "written", difficulty: "easy",
      h: "Birds = 6. 6 × 2 = 12 (Cats).", exp: "Cats (12) is twice birds (6)."
    },
    { id: "c3_q_5_3_04", q: "How many times more dogs (18) are there than birds (6)?",
      options: ["3 times", "2 times", "4 times", "12 times"], a: "3 times", acc: ["3 times", "3"], type: "written", difficulty: "medium",
      h: "18 ÷ 6 = ?", exp: "18 ÷ 6 = 3 times."
    },
    { id: "c3_q_5_3_05", q: "Daily step count: Ananya walked 4500 steps on Sat and 6200 steps on Sun. How many more steps on Sunday?",
      options: ["1700 steps", "1500 steps", "1800 steps", "2700 steps"], a: "1700 steps", acc: ["1700 steps", "1700"], type: "written", difficulty: "medium",
      h: "6200 - 4500 = ?", exp: "6200 - 4500 = 1700 steps."
    },
    { id: "c3_q_5_3_06", q: "Milk consumption: Family A uses 2 litres daily; Family B uses 3 litres daily. In 1 week (7 days), how much does Family B use?",
      options: ["21 litres", "14 litres", "15 litres", "28 litres"], a: "21 litres", acc: ["21 litres", "21"], type: "written", difficulty: "medium",
      h: "3 × 7 = ?", exp: "3 × 7 = 21 litres."
    },
    { id: "c3_q_5_3_07", q: "Plant height: Week 1 = 8 cm, Week 4 = 20 cm. What was the increase in height?",
      options: ["12 cm", "10 cm", "14 cm", "28 cm"], a: "12 cm", acc: ["12 cm", "12"], type: "written", difficulty: "medium",
      h: "20 - 8 = ?", exp: "20 - 8 = 12 cm."
    },
    { id: "c3_q_5_3_08", q: "If 100 students were surveyed: 45 prefer vanilla, 35 prefer chocolate, and the rest prefer strawberry. How many prefer strawberry?",
      options: ["20 students", "25 students", "15 students", "30 students"], a: "20 students", acc: ["20 students", "20"], type: "written", difficulty: "hard",
      h: "100 - (45 + 35) = 100 - 80 = 20.", exp: "100 - 80 = 20 students."
    },
    { id: "c3_q_5_3_09", q: "Score chart: Team Red = 75 pts, Team Blue = 90 pts, Team Green = 60 pts. What is the difference between highest and lowest scores?",
      options: ["30 pts", "15 pts", "25 pts", "35 pts"], a: "30 pts", acc: ["30 pts", "30"], type: "written", difficulty: "hard",
      h: "Highest = 90, Lowest = 60. 90 - 60 = 30.", exp: "90 - 60 = 30 points."
    },
    { id: "c3_q_5_3_10", q: "What conclusion can be drawn if sales of umbrellas in July are 5 times higher than in December?",
      options: ["It rains much more in July than in December", "December is very hot", "People buy umbrellas only in winter", "None"], a: "It rains much more in July than in December", acc: ["It rains much more in July than in December"], type: "written", difficulty: "hard",
      h: "Umbrellas are used in the rainy monsoon.", exp: "Higher umbrella sales indicate the monsoon rainy season in July."
    }
  ],

  // =========================================================================
  // Theme 6: Patterns
  // =========================================================================
  "c3_les_6_1": [ // Unit of repeat and identifying repeated patterns
    { id: "c3_q_6_1_01", q: "What is the UNIT OF REPEAT in the pattern: ABC ABC ABC ABC?",
      options: ["ABC", "AB", "BC", "A"], a: "ABC", acc: ["ABC"], type: "written", difficulty: "easy",
      h: "The block of letters that repeats identically.", exp: "The block 'ABC' repeats continuously."
    },
    { id: "c3_q_6_1_02", q: "What comes next: 123, 456, 123, 456, 123, ___?",
      options: ["456", "123", "789", "000"], a: "456", acc: ["456"], type: "written", difficulty: "easy",
      h: "123 is followed by 456.", exp: "456 comes next."
    },
    { id: "c3_q_6_1_03", q: "In the shape pattern: 🔶 🔶 🔷 🔶 🔶 🔷 🔶 🔶 🔷, what is the repeating unit?",
      options: ["🔶 🔶 🔷", "🔶 🔷", "🔷 🔶", "🔶 🔶 🔶"], a: "🔶 🔶 🔷", acc: ["🔶 🔶 🔷"], type: "written", difficulty: "easy",
      h: "Two orange diamonds followed by one blue diamond.", exp: "The unit of repeat is 🔶 🔶 🔷."
    },
    { id: "c3_q_6_1_04", q: "What comes next in rotational pattern: ⬆️ ➡️ ⬇️ ⬅️ ⬆️ ___?",
      options: ["➡️", "⬇️", "⬅️", "⬆️"], a: "➡️", acc: ["➡️", "Right arrow", "right"], type: "written", difficulty: "medium",
      h: "Quarter turn clockwise (90° turn).", exp: "After Up (⬆️) comes Right (➡️)."
    },
    { id: "c3_q_6_1_05", q: "If the repeating unit is XYZW of length 4, what is the 9th letter in the pattern?",
      options: ["X", "Y", "Z", "W"], a: "X", acc: ["X"], type: "written", difficulty: "medium",
      h: "9 ÷ 4 = 2 remainder 1. 1st letter is X.", exp: "Positions 1, 5, 9 are all 'X'."
    },
    { id: "c3_q_6_1_06", q: "Identify the pattern rule in: 3, 6, 12, 24, 48",
      options: ["Multiply by 2 (Doubling)", "Add 3", "Add 6", "Multiply by 3"], a: "Multiply by 2 (Doubling)", acc: ["Multiply by 2 (Doubling)", "Multiply by 2", "Doubling"], type: "written", difficulty: "medium",
      h: "Each term is multiplied by 2.", exp: "3 × 2 = 6, 6 × 2 = 12, 12 × 2 = 24, 24 × 2 = 48."
    },
    { id: "c3_q_6_1_07", q: "What is the next term in the doubling pattern: 3, 6, 12, 24, 48, ___?",
      options: ["96", "54", "60", "72"], a: "96", acc: ["96"], type: "written", difficulty: "medium",
      h: "48 × 2 = ?", exp: "48 × 2 = 96."
    },
    { id: "c3_q_6_1_08", q: "What is the missing term: 100, 90, 80, ___, 60?",
      options: ["70", "75", "65", "85"], a: "70", acc: ["70"], type: "written", difficulty: "hard",
      h: "Subtract 10 each step.", exp: "80 - 10 = 70."
    },
    { id: "c3_q_6_1_09", q: "Which term breaks the pattern: 2, 4, 6, 9, 10, 12?",
      options: ["9", "6", "10", "12"], a: "9", acc: ["9", "nine"], type: "written", difficulty: "hard",
      h: "All terms should be even numbers (skip count by 2).", exp: "9 is odd, breaking the even number pattern (should be 8)."
    },
    { id: "c3_q_6_1_10", q: "What is the 20th shape in the repeating pattern: 🔴 🟡 🟢 🔴 🟡 🟢 ... (period 3)?",
      options: ["🟡", "🔴", "🟢", "None"], a: "🟡", acc: ["🟡", "Yellow", "yellow circle"], type: "written", difficulty: "hard",
      h: "20 ÷ 3 = 6 remainder 2. 2nd shape is 🟡.", exp: "Remainder 2 corresponds to the second shape: Yellow (🟡)."
    }
  ],

  "c3_les_6_2": [ // Extending and creating shape and number patterns
    { id: "c3_q_6_2_01", q: "What number comes next: 5, 10, 20, 40, ___?",
      options: ["80", "50", "60", "70"], a: "80", acc: ["80"], type: "written", difficulty: "easy",
      h: "Multiply by 2 each time.", exp: "40 × 2 = 80."
    },
    { id: "c3_q_6_2_02", q: "What number comes next: 1, 4, 9, 16, ___?",
      options: ["25", "20", "24", "36"], a: "25", acc: ["25"], type: "written", difficulty: "easy",
      h: "Square numbers: 1², 2², 3², 4², 5².", exp: "5 × 5 = 25."
    },
    { id: "c3_q_6_2_03", q: "What is the next number in pattern: 2, 5, 8, 11, ___?",
      options: ["14", "13", "15", "16"], a: "14", acc: ["14"], type: "written", difficulty: "easy",
      h: "Add 3 each time.", exp: "11 + 3 = 14."
    },
    { id: "c3_q_6_2_04", q: "Complete the alpha-numeric pattern: A1, B2, C3, D4, ___?",
      options: ["E5", "E4", "F5", "D5"], a: "E5", acc: ["E5"], type: "written", difficulty: "medium",
      h: "Next letter is E, next number is 5.", exp: "E5 is next."
    },
    { id: "c3_q_6_2_05", q: "What number comes next: 81, 72, 63, 54, ___?",
      options: ["45", "48", "42", "36"], a: "45", acc: ["45"], type: "written", difficulty: "medium",
      h: "Multiples of 9 counting down: 9 × 5 = 45.", exp: "54 - 9 = 45."
    },
    { id: "c3_q_6_2_06", q: "What is the next term in Fibonacci-like sequence: 1, 1, 2, 3, 5, 8, ___?",
      options: ["13", "11", "12", "15"], a: "13", acc: ["13"], type: "written", difficulty: "medium",
      h: "Add previous two numbers: 5 + 8 = 13.", exp: "5 + 8 = 13."
    },
    { id: "c3_q_6_2_07", q: "Complete the growing pattern: 1, 1+2=3, 1+2+3=6, 1+2+3+4=10, 1+2+3+4+5=___?",
      options: ["15", "12", "14", "20"], a: "15", acc: ["15"], type: "written", difficulty: "medium",
      h: "Triangular numbers: 10 + 5 = 15.", exp: "10 + 5 = 15."
    },
    { id: "c3_q_6_2_08", q: "Complete the pattern: 111, 222, 333, 444, ___?",
      options: ["555", "455", "544", "666"], a: "555", acc: ["555"], type: "written", difficulty: "hard",
      h: "Add 111 each time.", exp: "444 + 111 = 555."
    },
    { id: "c3_q_6_2_09", q: "What is the next number: 10, 21, 32, 43, ___?",
      options: ["54", "53", "55", "64"], a: "54", acc: ["54"], type: "written", difficulty: "hard",
      h: "Add 11 each time.", exp: "43 + 11 = 54."
    },
    { id: "c3_q_6_2_10", q: "In a border pattern of alternating triangles and circles, if triangle is 🔺 and circle is ⚪: 🔺 ⚪ 🔺 ⚪ 🔺 ⚪, what is the 100th shape?",
      options: ["⚪ (Circle)", "🔺 (Triangle)", "Square", "None"], a: "⚪ (Circle)", acc: ["⚪ (Circle)", "Circle", "⚪"], type: "written", difficulty: "hard",
      h: "Odd positions are triangles, even positions are circles. 100 is even.", exp: "Even numbered positions are circles (⚪)."
    }
  ],

  "c3_les_6_3": [ // Daily-life patterns (Sari borders, rangoli, tile designs, natural symmetry)
    { id: "c3_q_6_3_01", q: "A traditional Indian rangoli or mandala design usually shows:",
      options: ["Rotational and mirror symmetry in circular repeating patterns", "Random straight scribbles", "Only single line", "No pattern"], a: "Rotational and mirror symmetry in circular repeating patterns", acc: ["Rotational and mirror symmetry in circular repeating patterns"], type: "written", difficulty: "easy",
      h: "Symmetrical art on floor.", exp: "Rangolis exhibit radial and reflective symmetry."
    },
    { id: "c3_q_6_3_02", q: "The border of a saree or dupatta with repeating floral motifs is an example of:",
      options: ["Linear strip pattern (Border pattern)", "Random dots", "Single circle", "3D solid"], a: "Linear strip pattern (Border pattern)", acc: ["Linear strip pattern (Border pattern)"], type: "written", difficulty: "easy",
      h: "Repeats along a straight strip/edge.", exp: "Border designs on garments are linear repeating patterns."
    },
    { id: "c3_q_6_3_03", q: "The wings of a butterfly show which geometric property?",
      options: ["Bilateral mirror symmetry", "No symmetry", "Rotational symmetry only", "Tessellation"], a: "Bilateral mirror symmetry", acc: ["Bilateral mirror symmetry"], type: "written", difficulty: "easy",
      h: "Left wing is a mirror reflection of right wing.", exp: "Butterfly wings show exact bilateral symmetry across the center axis."
    },
    { id: "c3_q_6_3_04", q: "The spirals in a sunflower seed head or pinecone follow which famous mathematical pattern?",
      options: ["Fibonacci spiral pattern", "Random scatter", "Square grid", "Straight lines"], a: "Fibonacci spiral pattern", acc: ["Fibonacci spiral pattern", "Fibonacci"], type: "written", difficulty: "medium",
      h: "Natural mathematical spirals.", exp: "Sunflower seeds arrange in Fibonacci spiral patterns."
    },
    { id: "c3_q_6_3_05", q: "In a brick wall, why are bricks arranged in a staggered overlapping pattern?",
      options: ["To distribute weight evenly and make the wall strong", "To make it fall easily", "Because straight joints are stronger", "No reason"], a: "To distribute weight evenly and make the wall strong", acc: ["To distribute weight evenly and make the wall strong"], type: "written", difficulty: "medium",
      h: "Overlapping joints prevent vertical cracking.", exp: "Staggered bond patterns lock bricks together for maximum structural strength."
    },
    { id: "c3_q_6_3_06", q: "The stripes of a tiger or spots on a leopard are:",
      options: ["Natural camouflage patterns in biology", "Artificial drawings", "Square tiles", "Mirrors"], a: "Natural camouflage patterns in biology", acc: ["Natural camouflage patterns in biology"], type: "written", difficulty: "medium",
      h: "Patterns in nature.", exp: "Animal coat patterns are natural mathematical adaptations for camouflage."
    },
    { id: "c3_q_6_3_07", q: "If you fold a paper in half, cut out a shape from the folded edge, and unfold it, the cut-out shape will be:",
      options: ["Symmetrical about the fold line", "Completely uneven", "A triangle always", "A 3D cube"], a: "Symmetrical about the fold line", acc: ["Symmetrical about the fold line"], type: "written", difficulty: "medium",
      h: "Both halves match across the fold line.", exp: "Paper folding and cutting creates symmetric figures with the fold as axis of symmetry."
    },
    { id: "c3_q_6_3_08", q: "A human face exhibits which type of symmetry?",
      options: ["Line symmetry (Vertical axis down the nose)", "Rotational symmetry", "Zero symmetry", "Spherical symmetry"], a: "Line symmetry (Vertical axis down the nose)", acc: ["Line symmetry (Vertical axis down the nose)", "Line symmetry"], type: "written", difficulty: "hard",
      h: "Left and right sides match.", exp: "The human face has approximate vertical mirror symmetry."
    },
    { id: "c3_q_6_3_09", q: "A starfish with 5 identical arms has:",
      options: ["5-fold rotational symmetry", "No symmetry", "2-fold symmetry only", "Square symmetry"], a: "5-fold rotational symmetry", acc: ["5-fold rotational symmetry"], type: "written", difficulty: "hard",
      h: "Rotates into itself every 360° ÷ 5 = 72°.", exp: "A 5-armed starfish has 5-fold rotational symmetry."
    },
    { id: "c3_q_6_3_10", q: "Why do mathematicians and artists study patterns?",
      options: ["To discover rules, make predictions, and create beautiful balanced designs", "To waste time", "To make numbers disappear", "None"], a: "To discover rules, make predictions, and create beautiful balanced designs", acc: ["To discover rules, make predictions, and create beautiful balanced designs"], type: "written", difficulty: "hard",
      h: "Pattern recognition is the core of mathematics and art.", exp: "Patterns allow us to generalize underlying rules, make logical forecasts, and create harmonic designs."
    }
  ]
};

/**
 * Class 1 Mathematics Question Bank (ICSE Curriculum)
 * Exactly 10 questions per topic with full MCQ options, explanations, hints, and difficulty ratings.
 */

export const class1Questions = {
  // =========================================================================
  // Theme 1: Numbers
  // =========================================================================
  "c1_les_1_1": [ // Numbers and numerals from 1 to 20
    {
      id: "c1_q_1_1_01", q: "How many apples are there if you count: 🍎 🍎 🍎 🍎 🍎?",
      options: ["3", "4", "5", "6"], a: "5", acc: ["5", "five"], type: "written", difficulty: "easy",
      h: "Count each apple one by one.", exp: "Counting the apples gives 1, 2, 3, 4, 5. So there are 5 apples."
    },
    {
      id: "c1_q_1_1_02", q: "What number comes just AFTER 7?",
      options: ["6", "8", "9", "5"], a: "8", acc: ["8", "eight"], type: "written", difficulty: "easy",
      h: "Count forward: 6, 7, ...", exp: "The number that comes immediately after 7 is 8."
    },
    {
      id: "c1_q_1_1_03", q: "Which numeral represents the word 'twelve'?",
      options: ["10", "11", "12", "20"], a: "12", acc: ["12"], type: "written", difficulty: "easy",
      h: "It is 1 ten and 2 ones.", exp: "Twelve is written as numeral 12."
    },
    {
      id: "c1_q_1_1_04", q: "What number comes just BEFORE 15?",
      options: ["14", "16", "13", "17"], a: "14", acc: ["14"], type: "written", difficulty: "medium",
      h: "Count backwards from 15.", exp: "14 comes just before 15."
    },
    {
      id: "c1_q_1_1_05", q: "Count the stars: ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐. How many are there?",
      options: ["6", "7", "8", "9"], a: "8", acc: ["8", "eight"], type: "written", difficulty: "medium",
      h: "Count each star carefully.", exp: "There are 8 stars in total."
    },
    {
      id: "c1_q_1_1_06", q: "Which number is BETWEEN 18 and 20?",
      options: ["17", "19", "21", "16"], a: "19", acc: ["19", "nineteen"], type: "written", difficulty: "medium",
      h: "18, ___, 20.", exp: "19 lies between 18 and 20."
    },
    {
      id: "c1_q_1_1_07", q: "Ria has 9 balloons and Sam gives her 1 more. How many balloons does Ria have now?",
      options: ["8", "10", "11", "12"], a: "10", acc: ["10", "ten"], type: "written", difficulty: "medium",
      h: "9 + 1 = ?", exp: "9 balloons plus 1 more makes 10 balloons."
    },
    {
      id: "c1_q_1_1_08", q: "Which of the following numbers is the GREATEST: 6, 14, 9, 11?",
      options: ["6", "14", "9", "11"], a: "14", acc: ["14"], type: "written", difficulty: "hard",
      h: "Look at the numbers with tens.", exp: "14 is the greatest among 6, 14, 9, and 11."
    },
    {
      id: "c1_q_1_1_09", q: "Which set of numbers is arranged in INCREASING order?",
      options: ["4, 7, 12, 19", "19, 12, 7, 4", "7, 4, 19, 12", "12, 4, 7, 19"], a: "4, 7, 12, 19", acc: ["4, 7, 12, 19"], type: "written", difficulty: "hard",
      h: "Increasing means from smallest to biggest.", exp: "4, 7, 12, 19 goes from smallest to largest."
    },
    {
      id: "c1_q_1_1_10", q: "What is 10 plus 7?",
      options: ["15", "16", "17", "18"], a: "17", acc: ["17", "seventeen"], type: "written", difficulty: "hard",
      h: "1 ten and 7 ones.", exp: "10 + 7 = 17."
    }
  ],

  "c1_les_1_2": [ // Introduction to zero
    {
      id: "c1_q_1_2_01", q: "There are 3 birds on a branch. All 3 fly away. How many birds are left on the branch?",
      options: ["1", "2", "3", "0"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "easy",
      h: "When none are left, the number is zero.", exp: "3 - 3 = 0. Zero birds are left."
    },
    {
      id: "c1_q_1_2_02", q: "What symbol represents 'zero'?",
      options: ["1", "0", "O", "Z"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "easy",
      h: "It looks like a round circle/oval.", exp: "0 is the numeral for zero."
    },
    {
      id: "c1_q_1_2_03", q: "An empty plate has how many cookies?",
      options: ["0", "1", "5", "10"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "easy",
      h: "Empty means no cookies.", exp: "An empty plate contains 0 cookies."
    },
    {
      id: "c1_q_1_2_04", q: "What is 5 + 0?",
      options: ["0", "5", "6", "50"], a: "5", acc: ["5"], type: "written", difficulty: "medium",
      h: "Adding zero means adding nothing.", exp: "Adding 0 to any number leaves the number unchanged. 5 + 0 = 5."
    },
    {
      id: "c1_q_1_2_05", q: "What is 8 - 0?",
      options: ["8", "0", "7", "80"], a: "8", acc: ["8"], type: "written", difficulty: "medium",
      h: "Subtracting zero means taking away nothing.", exp: "8 - 0 = 8."
    },
    {
      id: "c1_q_1_2_06", q: "What is 4 - 4?",
      options: ["4", "0", "1", "8"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "medium",
      h: "Taking away all 4 leaves nothing.", exp: "4 - 4 = 0."
    },
    {
      id: "c1_q_1_2_07", q: "Which of these means 'nothing' or 'none'?",
      options: ["Ten", "One", "Zero", "Hundred"], a: "Zero", acc: ["Zero", "0"], type: "written", difficulty: "medium",
      h: "It represents an empty collection.", exp: "Zero signifies the absence of any quantity."
    },
    {
      id: "c1_q_1_2_08", q: "If you have 0 pencils and your friend gives you 3 pencils, how many pencils do you have?",
      options: ["0", "1", "2", "3"], a: "3", acc: ["3", "three"], type: "written", difficulty: "hard",
      h: "0 + 3 = ?", exp: "0 + 3 = 3 pencils."
    },
    {
      id: "c1_q_1_2_09", q: "Which number comes just BEFORE 1 on the whole number line?",
      options: ["0", "2", "3", "none"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "hard",
      h: "It is the starting number for counting whole objects.", exp: "0 comes immediately before 1."
    },
    {
      id: "c1_q_1_2_10", q: "A basket has 6 mangoes. You eat 0 mangoes. How many mangoes remain?",
      options: ["0", "5", "6", "7"], a: "6", acc: ["6", "six"], type: "written", difficulty: "hard",
      h: "Eating 0 means you did not eat any.", exp: "6 - 0 = 6 mangoes remain."
    }
  ],

  "c1_les_1_3": [ // Counting objects from 1 to 99
    {
      id: "c1_q_1_3_01", q: "Count 2 bundles of 10 sticks: 🔟 🔟. How many sticks in total?",
      options: ["10", "20", "30", "2"], a: "20", acc: ["20", "twenty"], type: "written", difficulty: "easy",
      h: "10 + 10 = ?", exp: "2 tens = 20 sticks."
    },
    {
      id: "c1_q_1_3_02", q: "What number comes after 29?",
      options: ["28", "30", "31", "39"], a: "30", acc: ["30", "thirty"], type: "written", difficulty: "easy",
      h: "After 29 comes the next ten.", exp: "29 + 1 = 30."
    },
    {
      id: "c1_q_1_3_03", q: "What number comes after 49?",
      options: ["40", "48", "50", "51"], a: "50", acc: ["50", "fifty"], type: "written", difficulty: "easy",
      h: "Count forward from 49.", exp: "49 + 1 = 50."
    },
    { id: "c1_q_1_3_04", q: "How many tens make up the number 50?",
      a: "5", acc: ["5", "five", "5 tens"], type: "written", difficulty: "medium",
      h: "Count by tens: 10, 20, 30, 40, 50.", exp: "5 groups of ten equal 50 (5 tens)."
    },
    {
      id: "c1_q_1_3_05", q: "Count: 3 tens and 4 ones make what number?",
      options: ["30", "34", "43", "7"], a: "34", acc: ["34"], type: "written", difficulty: "medium",
      h: "3 tens = 30; 30 + 4 = ?", exp: "3 tens and 4 ones = 34."
    },
    {
      id: "c1_q_1_3_06", q: "What number comes just before 70?",
      options: ["68", "69", "71", "60"], a: "69", acc: ["69"], type: "written", difficulty: "medium",
      h: "Count one less than 70.", exp: "70 - 1 = 69."
    },
    {
      id: "c1_q_1_3_07", q: "Which number comes between 88 and 90?",
      options: ["87", "89", "91", "99"], a: "89", acc: ["89"], type: "written", difficulty: "medium",
      h: "88, ___, 90.", exp: "89 lies between 88 and 90."
    },
    {
      id: "c1_q_1_3_08", q: "What is the largest two-digit number?",
      options: ["90", "98", "99", "100"], a: "99", acc: ["99"], type: "written", difficulty: "hard",
      h: "It comes just before 100.", exp: "99 is the largest 2-digit number."
    },
    {
      id: "c1_q_1_3_09", q: "Count in 10s: 10, 20, 30, 40, ___?",
      options: ["45", "50", "60", "41"], a: "50", acc: ["50", "fifty"], type: "written", difficulty: "hard",
      h: "Add 10 to 40.", exp: "Skip counting by 10 gives 50 next."
    },
    {
      id: "c1_q_1_3_10", q: "If you have 7 tens and 9 ones, what number do you have?",
      options: ["79", "97", "70", "16"], a: "79", acc: ["79"], type: "written", difficulty: "hard",
      h: "7 tens = 70. 70 + 9 = ?", exp: "7 tens + 9 ones = 79."
    }
  ],

  "c1_les_1_4": [ // Groups of tens and ones
    {
      id: "c1_q_1_4_01", q: "In the number 25, how many TENS are there?",
      options: ["2", "5", "20", "25"], a: "2", acc: ["2", "two"], type: "written", difficulty: "easy",
      h: "Look at the first digit (tens place).", exp: "In 25, the digit 2 is in the tens place, representing 2 tens."
    },
    {
      id: "c1_q_1_4_02", q: "In the number 38, how many ONES are there?",
      options: ["3", "8", "30", "38"], a: "8", acc: ["8", "eight"], type: "written", difficulty: "easy",
      h: "Look at the second digit (ones place).", exp: "In 38, the digit 8 is in the ones place."
    },
    {
      id: "c1_q_1_4_03", q: "How many ones make 1 ten?",
      options: ["1", "5", "10", "100"], a: "10", acc: ["10", "ten"], type: "written", difficulty: "easy",
      h: "10 single ones combine to form 1 group of ten.", exp: "10 ones = 1 ten."
    },
    {
      id: "c1_q_1_4_04", q: "4 tens and 0 ones make which number?",
      options: ["4", "14", "40", "44"], a: "40", acc: ["40", "forty"], type: "written", difficulty: "medium",
      h: "4 groups of 10.", exp: "4 tens and 0 ones = 40."
    },
    {
      id: "c1_q_1_4_05", q: "Which number has 5 tens and 6 ones?",
      options: ["65", "56", "50", "11"], a: "56", acc: ["56"], type: "written", difficulty: "medium",
      h: "5 tens = 50, plus 6 ones.", exp: "5 tens and 6 ones = 56."
    },
    {
      id: "c1_q_1_4_06", q: "In 82, the place value of 8 is:",
      options: ["8", "80", "2", "82"], a: "80", acc: ["80", "eighty"], type: "written", difficulty: "medium",
      h: "8 is in the tens place.", exp: "8 tens = 80."
    },
    {
      id: "c1_q_1_4_07", q: "How do you write 6 tens and 3 ones?",
      options: ["36", "63", "60", "9"], a: "63", acc: ["63"], type: "written", difficulty: "medium",
      h: "6 in tens place, 3 in ones place.", exp: "6 tens and 3 ones = 63."
    },
    {
      id: "c1_q_1_4_08", q: "A shopkeeper has 4 packets of 10 pencils and 7 loose pencils. How many pencils in total?",
      options: ["40", "47", "74", "11"], a: "47", acc: ["47"], type: "written", difficulty: "hard",
      h: "4 tens + 7 ones.", exp: "4 packets of 10 = 40 pencils + 7 loose = 47 pencils."
    },
    {
      id: "c1_q_1_4_09", q: "Which number has the SAME digit in both tens and ones place?",
      options: ["34", "55", "62", "78"], a: "55", acc: ["55"], type: "written", difficulty: "hard",
      h: "Look for repeating digits.", exp: "55 has 5 tens and 5 ones."
    },
    {
      id: "c1_q_1_4_10", q: "If you break 9 tens into ones, how many ones do you get?",
      options: ["9", "19", "90", "99"], a: "90", acc: ["90"], type: "written", difficulty: "hard",
      h: "Each ten has 10 ones.", exp: "9 tens = 90 ones."
    }
  ],

  "c1_les_1_5": [ // Representing numbers using tens and ones
    {
      id: "c1_q_1_5_01", q: "Which number is shown by 1 bundle of 10 and 3 loose sticks?",
      options: ["11", "12", "13", "14"], a: "13", acc: ["13"], type: "written", difficulty: "easy",
      h: "10 + 3 = ?", exp: "1 ten + 3 ones = 13."
    },
    {
      id: "c1_q_1_5_02", q: "On an abacus, 2 beads on the Tens rod and 4 beads on the Ones rod make:",
      options: ["24", "42", "6", "20"], a: "24", acc: ["24"], type: "written", difficulty: "easy",
      h: "Tens = 2, Ones = 4.", exp: "2 tens and 4 ones = 24."
    },
    {
      id: "c1_q_1_5_03", q: "What is the expanded form of 47?",
      options: ["4 + 7", "40 + 7", "40 + 70", "47 + 0"], a: "40 + 7", acc: ["40 + 7", "40+7"], type: "written", difficulty: "easy",
      h: "4 tens is 40 and 7 ones is 7.", exp: "47 = 40 + 7."
    },
    {
      id: "c1_q_1_5_04", q: "What number is represented by 60 + 5?",
      options: ["56", "65", "605", "11"], a: "65", acc: ["65"], type: "written", difficulty: "medium",
      h: "Combine 60 and 5.", exp: "60 + 5 = 65."
    },
    {
      id: "c1_q_1_5_05", q: "How many tens blocks and ones blocks represent 32?",
      options: ["3 tens and 2 ones", "2 tens and 3 ones", "30 tens and 2 ones", "5 tens"], a: "3 tens and 2 ones", acc: ["3 tens and 2 ones"], type: "written", difficulty: "medium",
      h: "3 is in tens place, 2 is in ones place.", exp: "32 = 3 tens and 2 ones."
    },
    {
      id: "c1_q_1_5_06", q: "Which representation equals 80 + 9?",
      options: ["89", "98", "809", "17"], a: "89", acc: ["89"], type: "written", difficulty: "medium",
      h: "8 tens and 9 ones.", exp: "80 + 9 = 89."
    },
    {
      id: "c1_q_1_5_07", q: "On an abacus, 5 beads on Tens rod and 0 beads on Ones rod represents:",
      options: ["5", "50", "15", "55"], a: "50", acc: ["50"], type: "written", difficulty: "medium",
      h: "5 tens and 0 ones.", exp: "5 tens and 0 ones = 50."
    },
    {
      id: "c1_q_1_5_08", q: "Write 94 in expanded tens and ones:",
      options: ["9 tens + 4 ones", "4 tens + 9 ones", "90 tens + 4 ones", "9 + 4"], a: "9 tens + 4 ones", acc: ["9 tens + 4 ones"], type: "written", difficulty: "hard",
      h: "9 is in tens place, 4 is in ones place.", exp: "94 = 9 tens + 4 ones (90 + 4)."
    },
    {
      id: "c1_q_1_5_09", q: "If you add 1 one to 3 tens and 9 ones, what do you get?",
      options: ["39", "40", "49", "30"], a: "40", acc: ["40"], type: "written", difficulty: "hard",
      h: "39 + 1 = ?", exp: "39 + 1 = 40 (4 tens)."
    },
    {
      id: "c1_q_1_5_10", q: "Which number is shown by 7 ten-rupee notes and 5 one-rupee coins?",
      options: ["₹57", "₹75", "₹70", "₹12"], a: "₹75", acc: ["₹75", "75", "Rs 75"], type: "written", difficulty: "hard",
      h: "7 × 10 = 70, plus 5.", exp: "7 tens = 70 + 5 ones = 75 rupees."
    }
  ],

  "c1_les_1_6": [ // Number names up to 99
    {
      id: "c1_q_1_6_01", q: "What is the number name for 20?",
      options: ["Twelve", "Twenty", "Two", "Thirty"], a: "Twenty", acc: ["Twenty"], type: "written", difficulty: "easy",
      h: "Starts with Tw-.", exp: "20 is written as Twenty."
    },
    {
      id: "c1_q_1_6_02", q: "What is the number name for 45?",
      options: ["Forty-four", "Forty-five", "Fifty-four", "Fourteen"], a: "Forty-five", acc: ["Forty-five", "Forty five"], type: "written", difficulty: "easy",
      h: "40 is forty and 5 is five.", exp: "45 is written as Forty-five."
    },
    {
      id: "c1_q_1_6_03", q: "What is the number for 'Seventy-three'?",
      options: ["37", "70", "73", "77"], a: "73", acc: ["73"], type: "written", difficulty: "easy",
      h: "7 tens and 3 ones.", exp: "Seventy-three is 73."
    },
    {
      id: "c1_q_1_6_04", q: "How is 89 written in words?",
      options: ["Eighty-nine", "Ninety-eight", "Eighteen", "Eighty"], a: "Eighty-nine", acc: ["Eighty-nine", "Eighty nine"], type: "written", difficulty: "medium",
      h: "80 is eighty, 9 is nine.", exp: "89 = Eighty-nine."
    },
    {
      id: "c1_q_1_6_05", q: "What is the numeral for 'Thirty-six'?",
      options: ["63", "36", "30", "13"], a: "36", acc: ["36"], type: "written", difficulty: "medium",
      h: "3 tens and 6 ones.", exp: "Thirty-six is 36."
    },
    {
      id: "c1_q_1_6_06", q: "Which is the correct spelling for 50?",
      options: ["Fivety", "Fifty", "Fifteen", "Fiveteen"], a: "Fifty", acc: ["Fifty"], type: "written", difficulty: "medium",
      h: "F-I-F-T-Y.", exp: "50 is spelled Fifty."
    },
    {
      id: "c1_q_1_6_07", q: "What is the number name for 91?",
      options: ["Nineteen", "Ninety-one", "Ninety", "Nine-one"], a: "Ninety-one", acc: ["Ninety-one", "Ninety one"], type: "written", difficulty: "medium",
      h: "90 is ninety, 1 is one.", exp: "91 = Ninety-one."
    },
    {
      id: "c1_q_1_6_08", q: "What is the numeral for 'Ninety-nine'?",
      options: ["90", "89", "99", "100"], a: "99", acc: ["99"], type: "written", difficulty: "hard",
      h: "9 tens and 9 ones.", exp: "Ninety-nine is 99."
    },
    {
      id: "c1_q_1_6_09", q: "Which number name has spelling 'E-I-G-H-T-E-E-N'?",
      options: ["8", "80", "18", "88"], a: "18", acc: ["18"], type: "written", difficulty: "hard",
      h: "It is between 17 and 19.", exp: "18 is Eighteen."
    },
    {
      id: "c1_q_1_6_10", q: "What is the number name for 64?",
      options: ["Forty-six", "Sixty-four", "Sixteen", "Sixty"], a: "Sixty-four", acc: ["Sixty-four", "Sixty four"], type: "written", difficulty: "hard",
      h: "60 is sixty and 4 is four.", exp: "64 = Sixty-four."
    }
  ],

  "c1_les_1_7": [ // Comparison of numbers up to 99
    {
      id: "c1_q_1_7_01", q: "Which number is GREATER: 45 or 28?",
      options: ["45", "28", "Both are equal", "None"], a: "45", acc: ["45"], type: "written", difficulty: "easy",
      h: "Compare tens digit: 4 tens vs 2 tens.", exp: "4 tens (45) is greater than 2 tens (28)."
    },
    {
      id: "c1_q_1_7_02", q: "Which number is SMALLER: 19 or 31?",
      options: ["19", "31", "Both are equal", "None"], a: "19", acc: ["19"], type: "written", difficulty: "easy",
      h: "1 ten is less than 3 tens.", exp: "19 is smaller than 31."
    },
    {
      id: "c1_q_1_7_03", q: "Choose the correct symbol: 52 ___ 52",
      options: [">", "<", "=", "+"], a: "=", acc: ["="], type: "written", difficulty: "easy",
      h: "Both numbers are the same.", exp: "52 is equal to 52 (52 = 52)."
    },
    {
      id: "c1_q_1_7_04", q: "Choose the correct symbol: 67 ___ 76",
      options: [">", "<", "=", "-"], a: "<", acc: ["<"], type: "written", difficulty: "medium",
      h: "6 tens is less than 7 tens.", exp: "67 < 76 (67 is less than 76)."
    },
    {
      id: "c1_q_1_7_05", q: "Which number is GREATEST among: 23, 65, 41, 19?",
      options: ["23", "65", "41", "19"], a: "65", acc: ["65"], type: "written", difficulty: "medium",
      h: "Find the number with the most tens.", exp: "65 has 6 tens, which is greatest."
    },
    {
      id: "c1_q_1_7_06", q: "Which number is SMALLEST among: 84, 91, 72, 88?",
      options: ["84", "91", "72", "88"], a: "72", acc: ["72"], type: "written", difficulty: "medium",
      h: "7 tens is fewer than 8 or 9 tens.", exp: "72 is the smallest number."
    },
    {
      id: "c1_q_1_7_07", q: "Ali has 35 stickers and Meena has 53 stickers. Who has MORE stickers?",
      options: ["Ali", "Meena", "Both have same", "Neither"], a: "Meena", acc: ["Meena"], type: "written", difficulty: "medium",
      h: "53 > 35.", exp: "Meena has 53 stickers which is more than 35."
    },
    {
      id: "c1_q_1_7_08", q: "Choose the correct symbol: 90 ___ 89",
      options: [">", "<", "=", "x"], a: ">", acc: [">"], type: "written", difficulty: "hard",
      h: "90 comes after 89.", exp: "90 > 89 (90 is greater than 89)."
    },
    {
      id: "c1_q_1_7_09", q: "Which list is in DESCENDING order (largest to smallest)?",
      options: ["80, 65, 42, 18", "18, 42, 65, 80", "42, 80, 18, 65", "65, 80, 42, 18"], a: "80, 65, 42, 18", acc: ["80, 65, 42, 18"], type: "written", difficulty: "hard",
      h: "Look for numbers going down.", exp: "80 > 65 > 42 > 18 is descending order."
    },
    {
      id: "c1_q_1_7_10", q: "Which number is greater than 74 but smaller than 76?",
      options: ["73", "74", "75", "77"], a: "75", acc: ["75"], type: "written", difficulty: "hard",
      h: "74, ___, 76.", exp: "75 is between 74 and 76."
    }
  ],

  "c1_les_1_8": [ // Forming two-digit numbers using given digits
    {
      id: "c1_q_1_8_01", q: "Using digits 3 and 7 without repeating, what is the GREATEST 2-digit number you can make?",
      options: ["37", "73", "77", "33"], a: "73", acc: ["73"], type: "written", difficulty: "easy",
      h: "Put the larger digit in the tens place.", exp: "Put 7 in tens place to get 73."
    },
    {
      id: "c1_q_1_8_02", q: "Using digits 2 and 9 without repeating, what is the SMALLEST 2-digit number you can make?",
      options: ["92", "29", "22", "99"], a: "29", acc: ["29"], type: "written", difficulty: "easy",
      h: "Put the smaller digit in the tens place.", exp: "Put 2 in tens place to get 29."
    },
    {
      id: "c1_q_1_8_03", q: "What two 2-digit numbers can you make using digits 4 and 5?",
      options: ["45 and 54", "44 and 55", "50 and 40", "45 and 45"], a: "45 and 54", acc: ["45 and 54"], type: "written", difficulty: "easy",
      h: "Swap tens and ones.", exp: "Using 4 and 5 gives 45 and 54."
    },
    {
      id: "c1_q_1_8_04", q: "Using digits 8 and 1, which number is LARGER: 81 or 18?",
      options: ["81", "18", "Both are equal", "None"], a: "81", acc: ["81"], type: "written", difficulty: "medium",
      h: "8 tens is more than 1 ten.", exp: "81 is larger than 18."
    },
    {
      id: "c1_q_1_8_05", q: "Using digits 6 and 0, what is the only valid 2-digit number you can form?",
      options: ["06", "60", "66", "00"], a: "60", acc: ["60"], type: "written", difficulty: "medium",
      h: "A 2-digit number cannot start with 0.", exp: "06 is a single digit 6, so 60 is the only 2-digit number."
    },
    {
      id: "c1_q_1_8_06", q: "Form the smallest 2-digit number using digits 5 and 8:",
      options: ["85", "58", "55", "88"], a: "58", acc: ["58"], type: "written", difficulty: "medium",
      h: "Place 5 in tens place.", exp: "58 is smaller than 85."
    },
    {
      id: "c1_q_1_8_07", q: "Using digits 4 and 4, what number do you form?",
      options: ["4", "44", "40", "8"], a: "44", acc: ["44"], type: "written", difficulty: "medium",
      h: "4 tens and 4 ones.", exp: "44 is formed."
    },
    {
      id: "c1_q_1_8_08", q: "Using digits 1, 3, and 9, what is the GREATEST 2-digit number you can make?",
      options: ["39", "91", "93", "19"], a: "93", acc: ["93"], type: "written", difficulty: "hard",
      h: "Pick the two largest digits: 9 and 3.", exp: "93 is the greatest 2-digit number using these digits."
    },
    {
      id: "c1_q_1_8_09", q: "Using digits 6, 2, and 8, what is the SMALLEST 2-digit number you can make?",
      options: ["26", "28", "62", "82"], a: "26", acc: ["26"], type: "written", difficulty: "hard",
      h: "Pick the two smallest digits: 2 and 6.", exp: "26 is the smallest 2-digit number."
    },
    {
      id: "c1_q_1_8_10", q: "How many different 2-digit numbers can be formed using digits 1 and 2 without repeating?",
      options: ["1", "2", "3", "4"], a: "2", acc: ["2", "two"], type: "written", difficulty: "hard",
      h: "The numbers are 12 and 21.", exp: "Exactly two numbers: 12 and 21."
    }
  ],

  "c1_les_1_9": [ // Before, after and between numbers
    {
      id: "c1_q_1_9_01", q: "What number comes BEFORE 10?",
      options: ["8", "9", "11", "12"], a: "9", acc: ["9", "nine"], type: "written", difficulty: "easy",
      h: "Count 1 less than 10.", exp: "10 - 1 = 9."
    },
    {
      id: "c1_q_1_9_02", q: "What number comes AFTER 39?",
      options: ["38", "40", "41", "49"], a: "40", acc: ["40", "forty"], type: "written", difficulty: "easy",
      h: "39 + 1 = ?", exp: "40 comes after 39."
    },
    {
      id: "c1_q_1_9_03", q: "What number is BETWEEN 24 and 26?",
      options: ["23", "25", "27", "28"], a: "25", acc: ["25"], type: "written", difficulty: "easy",
      h: "24, ___, 26.", exp: "25 lies between 24 and 26."
    },
    {
      id: "c1_q_1_9_04", q: "What number comes BEFORE 50?",
      options: ["48", "49", "51", "52"], a: "49", acc: ["49"], type: "written", difficulty: "medium",
      h: "One less than 50.", exp: "50 - 1 = 49."
    },
    {
      id: "c1_q_1_9_05", q: "What number comes AFTER 89?",
      options: ["88", "90", "91", "99"], a: "90", acc: ["90", "ninety"], type: "written", difficulty: "medium",
      h: "89 + 1 = ?", exp: "90 comes immediately after 89."
    },
    {
      id: "c1_q_1_9_06", q: "What number is BETWEEN 69 and 71?",
      options: ["68", "70", "72", "60"], a: "70", acc: ["70", "seventy"], type: "written", difficulty: "medium",
      h: "69, ___, 71.", exp: "70 is between 69 and 71."
    },
    {
      id: "c1_q_1_9_07", q: "Which number comes BEFORE 100?",
      options: ["90", "98", "99", "101"], a: "99", acc: ["99"], type: "written", difficulty: "medium",
      h: "The largest two-digit number.", exp: "99 comes immediately before 100."
    },
    {
      id: "c1_q_1_9_08", q: "Fill in the blanks: 43, ___, 45, ___",
      options: ["44 and 46", "42 and 46", "44 and 47", "42 and 44"], a: "44 and 46", acc: ["44 and 46"], type: "written", difficulty: "hard",
      h: "Follow sequential counting.", exp: "43, 44, 45, 46."
    },
    {
      id: "c1_q_1_9_09", q: "What number is 2 more than 37?",
      options: ["38", "39", "40", "36"], a: "39", acc: ["39"], type: "written", difficulty: "hard",
      h: "37 + 2 = ?", exp: "37 + 2 = 39."
    },
    {
      id: "c1_q_1_9_10", q: "What number is 2 less than 80?",
      options: ["79", "78", "77", "82"], a: "78", acc: ["78"], type: "written", difficulty: "hard",
      h: "80 - 2 = ?", exp: "80 - 2 = 78."
    }
  ],

  "c1_les_1_10": [ // Increasing and decreasing number sequences
    {
      id: "c1_q_1_10_01", q: "Arrange in INCREASING order (smallest to largest): 8, 3, 5",
      options: ["3, 5, 8", "8, 5, 3", "5, 3, 8", "3, 8, 5"], a: "3, 5, 8", acc: ["3, 5, 8"], type: "written", difficulty: "easy",
      h: "Start with 3.", exp: "3 is smallest, then 5, then 8 (3, 5, 8)."
    },
    {
      id: "c1_q_1_10_02", q: "Arrange in DECREASING order (largest to smallest): 12, 19, 15",
      options: ["19, 15, 12", "12, 15, 19", "15, 19, 12", "19, 12, 15"], a: "19, 15, 12", acc: ["19, 15, 12"], type: "written", difficulty: "easy",
      h: "Start with largest (19).", exp: "19 > 15 > 12."
    },
    {
      id: "c1_q_1_10_03", q: "Complete the sequence: 2, 4, 6, 8, ___",
      options: ["9", "10", "11", "12"], a: "10", acc: ["10", "ten"], type: "written", difficulty: "easy",
      h: "Skip counting by 2.", exp: "8 + 2 = 10."
    },
    {
      id: "c1_q_1_10_04", q: "Complete the backward sequence: 10, 9, 8, 7, ___",
      options: ["5", "6", "8", "4"], a: "6", acc: ["6", "six"], type: "written", difficulty: "medium",
      h: "Count backward by 1.", exp: "7 - 1 = 6."
    },
    {
      id: "c1_q_1_10_05", q: "Complete the sequence: 5, 10, 15, 20, ___",
      options: ["21", "25", "30", "22"], a: "25", acc: ["25"], type: "written", difficulty: "medium",
      h: "Skip counting by 5.", exp: "20 + 5 = 25."
    },
    {
      id: "c1_q_1_10_06", q: "Which sequence is decreasing?",
      options: ["50, 40, 30, 20", "10, 20, 30, 40", "5, 15, 25, 35", "2, 4, 6, 8"], a: "50, 40, 30, 20", acc: ["50, 40, 30, 20"], type: "written", difficulty: "medium",
      h: "Numbers should get smaller.", exp: "50, 40, 30, 20 is decreasing."
    },
    {
      id: "c1_q_1_10_07", q: "Complete the sequence: 31, 32, 33, ___, 35",
      options: ["30", "34", "36", "43"], a: "34", acc: ["34"], type: "written", difficulty: "medium",
      h: "One more than 33.", exp: "34 fits between 33 and 35."
    },
    {
      id: "c1_q_1_10_08", q: "Arrange in INCREASING order: 45, 12, 78, 30",
      options: ["12, 30, 45, 78", "78, 45, 30, 12", "12, 45, 30, 78", "30, 12, 45, 78"], a: "12, 30, 45, 78", acc: ["12, 30, 45, 78"], type: "written", difficulty: "hard",
      h: "Smallest is 12, largest is 78.", exp: "12 < 30 < 45 < 78."
    },
    {
      id: "c1_q_1_10_09", q: "Complete backward count by 10s: 90, 80, 70, ___",
      options: ["50", "60", "65", "75"], a: "60", acc: ["60"], type: "written", difficulty: "hard",
      h: "Subtract 10 from 70.", exp: "70 - 10 = 60."
    },
    {
      id: "c1_q_1_10_10", q: "Arrange in DECREASING order: 95, 62, 84, 71",
      options: ["95, 84, 71, 62", "62, 71, 84, 95", "95, 71, 84, 62", "84, 95, 71, 62"], a: "95, 84, 71, 62", acc: ["95, 84, 71, 62"], type: "written", difficulty: "hard",
      h: "Start with 95, end with 62.", exp: "95 > 84 > 71 > 62."
    }
  ],

  // =========================================================================
  // Theme 2: Number Operations
  // =========================================================================
  "c1_les_2_1": [ // Addition up to 20
    {
      id: "c1_q_2_1_01", q: "What is 4 + 3?",
      options: ["6", "7", "8", "9"], a: "7", acc: ["7", "seven"], type: "written", difficulty: "easy",
      h: "Count 3 steps after 4.", exp: "4 + 3 = 7."
    },
    {
      id: "c1_q_2_1_02", q: "What is 5 + 5?",
      options: ["9", "10", "11", "12"], a: "10", acc: ["10", "ten"], type: "written", difficulty: "easy",
      h: "Doubles of 5.", exp: "5 + 5 = 10."
    },
    {
      id: "c1_q_2_1_03", q: "What is 8 + 2?",
      options: ["9", "10", "11", "12"], a: "10", acc: ["10"], type: "written", difficulty: "easy",
      h: "Make 10.", exp: "8 + 2 = 10."
    },
    {
      id: "c1_q_2_1_04", q: "What is 7 + 6?",
      options: ["12", "13", "14", "15"], a: "13", acc: ["13"], type: "written", difficulty: "medium",
      h: "7 + 3 = 10, then add 3 more.", exp: "7 + 6 = 13."
    },
    {
      id: "c1_q_2_1_05", q: "What is 9 + 4?",
      options: ["12", "13", "14", "15"], a: "13", acc: ["13"], type: "written", difficulty: "medium",
      h: "9 + 1 = 10, then add 3.", exp: "9 + 4 = 13."
    },
    {
      id: "c1_q_2_1_06", q: "What is 10 + 8?",
      options: ["17", "18", "19", "20"], a: "18", acc: ["18"], type: "written", difficulty: "medium",
      h: "1 ten + 8 ones.", exp: "10 + 8 = 18."
    },
    {
      id: "c1_q_2_1_07", q: "What is 12 + 5?",
      options: ["16", "17", "18", "19"], a: "17", acc: ["17"], type: "written", difficulty: "medium",
      h: "2 + 5 = 7, so 12 + 5 = 17.", exp: "12 + 5 = 17."
    },
    {
      id: "c1_q_2_1_08", q: "What is 8 + 8?",
      options: ["14", "15", "16", "17"], a: "16", acc: ["16"], type: "written", difficulty: "hard",
      h: "Double of 8.", exp: "8 + 8 = 16."
    },
    {
      id: "c1_q_2_1_09", q: "What is 11 + 9?",
      options: ["19", "20", "21", "22"], a: "20", acc: ["20"], type: "written", difficulty: "hard",
      h: "1 + 9 = 10, 10 + 10 = 20.", exp: "11 + 9 = 20."
    },
    {
      id: "c1_q_2_1_10", q: "What is 7 + 8?",
      options: ["14", "15", "16", "17"], a: "15", acc: ["15"], type: "written", difficulty: "hard",
      h: "Double 7 + 1 = 14 + 1 = 15.", exp: "7 + 8 = 15."
    }
  ],

  "c1_les_2_2": [ // Subtraction up to 20
    {
      id: "c1_q_2_2_01", q: "What is 6 - 2?",
      options: ["3", "4", "5", "8"], a: "4", acc: ["4", "four"], type: "written", difficulty: "easy",
      h: "Count back 2 from 6.", exp: "6 - 2 = 4."
    },
    {
      id: "c1_q_2_2_02", q: "What is 10 - 5?",
      options: ["4", "5", "6", "15"], a: "5", acc: ["5", "five"], type: "written", difficulty: "easy",
      h: "Half of 10.", exp: "10 - 5 = 5."
    },
    {
      id: "c1_q_2_2_03", q: "What is 9 - 3?",
      options: ["5", "6", "7", "12"], a: "6", acc: ["6", "six"], type: "written", difficulty: "easy",
      h: "Take away 3 from 9.", exp: "9 - 3 = 6."
    },
    {
      id: "c1_q_2_2_04", q: "What is 12 - 4?",
      options: ["7", "8", "9", "16"], a: "8", acc: ["8", "eight"], type: "written", difficulty: "medium",
      h: "12 - 2 = 10, 10 - 2 = 8.", exp: "12 - 4 = 8."
    },
    {
      id: "c1_q_2_2_05", q: "What is 15 - 5?",
      options: ["5", "10", "11", "20"], a: "10", acc: ["10", "ten"], type: "written", difficulty: "medium",
      h: "Take away the 5 ones.", exp: "15 - 5 = 10."
    },
    {
      id: "c1_q_2_2_06", q: "What is 14 - 7?",
      options: ["6", "7", "8", "9"], a: "7", acc: ["7", "seven"], type: "written", difficulty: "medium",
      h: "7 + 7 = 14.", exp: "14 - 7 = 7."
    },
    {
      id: "c1_q_2_2_07", q: "What is 18 - 6?",
      options: ["11", "12", "13", "14"], a: "12", acc: ["12"], type: "written", difficulty: "medium",
      h: "8 - 6 = 2, so 18 - 6 = 12.", exp: "18 - 6 = 12."
    },
    {
      id: "c1_q_2_2_08", q: "What is 20 - 7?",
      options: ["12", "13", "14", "15"], a: "13", acc: ["13"], type: "written", difficulty: "hard",
      h: "20 - 10 = 10 + 3 = 13.", exp: "20 - 7 = 13."
    },
    {
      id: "c1_q_2_2_09", q: "What is 16 - 9?",
      options: ["6", "7", "8", "9"], a: "7", acc: ["7"], type: "written", difficulty: "hard",
      h: "16 - 10 = 6 + 1 = 7.", exp: "16 - 9 = 7."
    },
    {
      id: "c1_q_2_2_10", q: "What is 17 - 8?",
      options: ["8", "9", "10", "11"], a: "9", acc: ["9"], type: "written", difficulty: "hard",
      h: "8 + 9 = 17.", exp: "17 - 8 = 9."
    }
  ],

  "c1_les_2_3": [ // Addition within 99 without regrouping
    {
      id: "c1_q_2_3_01", q: "What is 20 + 30?",
      options: ["40", "50", "60", "10"], a: "50", acc: ["50", "fifty"], type: "written", difficulty: "easy",
      h: "2 tens + 3 tens.", exp: "20 + 30 = 50."
    },
    {
      id: "c1_q_2_3_02", q: "What is 42 + 5?",
      options: ["45", "46", "47", "57"], a: "47", acc: ["47"], type: "written", difficulty: "easy",
      h: "Add ones: 2 + 5 = 7.", exp: "42 + 5 = 47."
    },
    {
      id: "c1_q_2_3_03", q: "What is 60 + 8?",
      options: ["68", "86", "60", "70"], a: "68", acc: ["68"], type: "written", difficulty: "easy",
      h: "6 tens and 8 ones.", exp: "60 + 8 = 68."
    },
    {
      id: "c1_q_2_3_04", q: "What is 24 + 13?",
      options: ["36", "37", "38", "47"], a: "37", acc: ["37"], type: "written", difficulty: "medium",
      h: "Ones: 4 + 3 = 7. Tens: 2 + 1 = 3.", exp: "24 + 13 = 37."
    },
    {
      id: "c1_q_2_3_05", q: "What is 51 + 23?",
      options: ["74", "73", "84", "64"], a: "74", acc: ["74"], type: "written", difficulty: "medium",
      h: "Ones: 1 + 3 = 4. Tens: 5 + 2 = 7.", exp: "51 + 23 = 74."
    },
    {
      id: "c1_q_2_3_06", q: "What is 35 + 40?",
      options: ["70", "75", "85", "65"], a: "75", acc: ["75"], type: "written", difficulty: "medium",
      h: "3 tens + 4 tens = 7 tens (70) + 5 = 75.", exp: "35 + 40 = 75."
    },
    {
      id: "c1_q_2_3_07", q: "What is 62 + 16?",
      options: ["76", "77", "78", "88"], a: "78", acc: ["78"], type: "written", difficulty: "medium",
      h: "Ones: 2 + 6 = 8. Tens: 6 + 1 = 7.", exp: "62 + 16 = 78."
    },
    {
      id: "c1_q_2_3_08", q: "What is 44 + 33?",
      options: ["77", "66", "88", "76"], a: "77", acc: ["77"], type: "written", difficulty: "hard",
      h: "4 + 3 = 7 for both tens and ones.", exp: "44 + 33 = 77."
    },
    {
      id: "c1_q_2_3_09", q: "What is 15 + 72?",
      options: ["85", "87", "86", "97"], a: "87", acc: ["87"], type: "written", difficulty: "hard",
      h: "Ones: 5 + 2 = 7. Tens: 1 + 7 = 8.", exp: "15 + 72 = 87."
    },
    {
      id: "c1_q_2_3_10", q: "What is 81 + 17?",
      options: ["98", "97", "99", "88"], a: "98", acc: ["98"], type: "written", difficulty: "hard",
      h: "Ones: 1 + 7 = 8. Tens: 8 + 1 = 9.", exp: "81 + 17 = 98."
    }
  ],

  "c1_les_2_4": [ // Subtraction within 99 without regrouping
    {
      id: "c1_q_2_4_01", q: "What is 50 - 20?",
      options: ["20", "30", "40", "70"], a: "30", acc: ["30", "thirty"], type: "written", difficulty: "easy",
      h: "5 tens - 2 tens.", exp: "50 - 20 = 30."
    },
    {
      id: "c1_q_2_4_02", q: "What is 48 - 5?",
      options: ["41", "42", "43", "45"], a: "43", acc: ["43"], type: "written", difficulty: "easy",
      h: "Ones: 8 - 5 = 3.", exp: "48 - 5 = 43."
    },
    {
      id: "c1_q_2_4_03", q: "What is 76 - 6?",
      options: ["70", "60", "72", "66"], a: "70", acc: ["70", "seventy"], type: "written", difficulty: "easy",
      h: "Subtract all ones.", exp: "76 - 6 = 70."
    },
    {
      id: "c1_q_2_4_04", q: "What is 39 - 14?",
      options: ["24", "25", "26", "15"], a: "25", acc: ["25"], type: "written", difficulty: "medium",
      h: "Ones: 9 - 4 = 5. Tens: 3 - 1 = 2.", exp: "39 - 14 = 25."
    },
    {
      id: "c1_q_2_4_05", q: "What is 67 - 23?",
      options: ["44", "45", "46", "34"], a: "44", acc: ["44"], type: "written", difficulty: "medium",
      h: "Ones: 7 - 3 = 4. Tens: 6 - 2 = 4.", exp: "67 - 23 = 44."
    },
    {
      id: "c1_q_2_4_06", q: "What is 85 - 32?",
      options: ["53", "52", "54", "43"], a: "53", acc: ["53"], type: "written", difficulty: "medium",
      h: "Ones: 5 - 2 = 3. Tens: 8 - 3 = 5.", exp: "85 - 32 = 53."
    },
    {
      id: "c1_q_2_4_07", q: "What is 94 - 40?",
      options: ["44", "54", "64", "50"], a: "54", acc: ["54"], type: "written", difficulty: "medium",
      h: "Tens: 9 - 4 = 5 tens (50) + 4 = 54.", exp: "94 - 40 = 54."
    },
    {
      id: "c1_q_2_4_08", q: "What is 78 - 46?",
      options: ["31", "32", "33", "22"], a: "32", acc: ["32"], type: "written", difficulty: "hard",
      h: "Ones: 8 - 6 = 2. Tens: 7 - 4 = 3.", exp: "78 - 46 = 32."
    },
    {
      id: "c1_q_2_4_09", q: "What is 59 - 38?",
      options: ["20", "21", "22", "11"], a: "21", acc: ["21"], type: "written", difficulty: "hard",
      h: "Ones: 9 - 8 = 1. Tens: 5 - 3 = 2.", exp: "59 - 38 = 21."
    },
    {
      id: "c1_q_2_4_10", q: "What is 99 - 66?",
      options: ["33", "44", "22", "30"], a: "33", acc: ["33"], type: "written", difficulty: "hard",
      h: "9 - 6 = 3 for both places.", exp: "99 - 66 = 33."
    }
  ],

  "c1_les_2_5": [ // Addition and subtraction word problems
    {
      id: "c1_q_2_5_01", q: "Tina has 5 pencils. Her mother gives her 4 more. How many pencils does Tina have now?",
      options: ["8", "9", "10", "1"], a: "9", acc: ["9", "nine"], type: "written", difficulty: "easy",
      h: "5 + 4 = ?", exp: "5 + 4 = 9 pencils."
    },
    {
      id: "c1_q_2_5_02", q: "A tree had 8 birds. 3 birds flew away. How many birds are left on the tree?",
      options: ["4", "5", "6", "11"], a: "5", acc: ["5", "five"], type: "written", difficulty: "easy",
      h: "8 - 3 = ?", exp: "8 - 3 = 5 birds left."
    },
    {
      id: "c1_q_2_5_03", q: "Rahul has 10 marbles. He finds 6 more in his box. How many marbles does he have in all?",
      options: ["14", "15", "16", "17"], a: "16", acc: ["16"], type: "written", difficulty: "easy",
      h: "10 + 6 = ?", exp: "10 + 6 = 16 marbles."
    },
    {
      id: "c1_q_2_5_04", q: "A baker made 18 cupcakes. He sold 7 cupcakes. How many cupcakes remain?",
      options: ["10", "11", "12", "13"], a: "11", acc: ["11"], type: "written", difficulty: "medium",
      h: "18 - 7 = ?", exp: "18 - 7 = 11 cupcakes."
    },
    {
      id: "c1_q_2_5_05", q: "In a garden, there are 24 red roses and 15 yellow roses. How many roses are there in total?",
      options: ["38", "39", "40", "49"], a: "39", acc: ["39"], type: "written", difficulty: "medium",
      h: "24 + 15 = ?", exp: "24 + 15 = 39 roses."
    },
    {
      id: "c1_q_2_5_06", q: "A bus had 45 passengers. 12 passengers got off. How many passengers are still on the bus?",
      options: ["32", "33", "34", "57"], a: "33", acc: ["33"], type: "written", difficulty: "medium",
      h: "45 - 12 = ?", exp: "45 - 12 = 33 passengers."
    },
    {
      id: "c1_q_2_5_07", q: "Sam has 30 stickers and Leo has 25 stickers. How many stickers do they have altogether?",
      options: ["45", "50", "55", "60"], a: "55", acc: ["55"], type: "written", difficulty: "medium",
      h: "30 + 25 = ?", exp: "30 + 25 = 55 stickers."
    },
    {
      id: "c1_q_2_5_08", q: "A fruit seller had 68 apples. He sold 35 apples. How many apples are left?",
      options: ["32", "33", "34", "43"], a: "33", acc: ["33"], type: "written", difficulty: "hard",
      h: "68 - 35 = ?", exp: "68 - 35 = 33 apples."
    },
    {
      id: "c1_q_2_5_09", q: "Class 1A has 22 boys and 21 girls. What is the total number of students in Class 1A?",
      options: ["41", "42", "43", "44"], a: "43", acc: ["43"], type: "written", difficulty: "hard",
      h: "22 + 21 = ?", exp: "22 + 21 = 43 students."
    },
    {
      id: "c1_q_2_5_10", q: "Ankit had 75 rupees. He bought a notebook for 25 rupees. How much money is left with him?",
      options: ["40", "45", "50", "55"], a: "50", acc: ["50", "₹50", "50 rupees"], type: "written", difficulty: "hard",
      h: "75 - 25 = ?", exp: "75 - 25 = 50 rupees."
    }
  ],

  // =========================================================================
  // Theme 3: Geometry
  // =========================================================================
  "c1_les_3_1": [ // Sorting and classifying shapes
    {
      id: "c1_q_3_1_01", q: "Which shape has 3 sides and 3 corners?",
      options: ["Square", "Circle", "Triangle", "Rectangle"], a: "Triangle", acc: ["Triangle"], type: "written", difficulty: "easy",
      h: "Tri means three.", exp: "A triangle is bounded by 3 sides and has 3 corners."
    },
    {
      id: "c1_q_3_1_02", q: "Which shape is perfectly round with NO corners?",
      options: ["Square", "Circle", "Triangle", "Cube"], a: "Circle", acc: ["Circle"], type: "written", difficulty: "easy",
      h: "Like a coin or clock.", exp: "A circle has a curved boundary and zero corners."
    },
    {
      id: "c1_q_3_1_03", q: "Which of these is a FLAT (2D) shape?",
      options: ["Rectangle", "Sphere", "Cylinder", "Cube"], a: "Rectangle", acc: ["Rectangle"], type: "written", difficulty: "easy",
      h: "A shape drawn flat on paper.", exp: "A rectangle is a 2D plane shape."
    },
    {
      id: "c1_q_3_1_04", q: "Which of these is a SOLID (3D) shape?",
      options: ["Square", "Triangle", "Cube", "Circle"], a: "Cube", acc: ["Cube"], type: "written", difficulty: "medium",
      h: "You can hold it like a dice.", exp: "A cube is a 3D solid shape."
    },
    {
      id: "c1_q_3_1_05", q: "A coin can SLIDE on its flat surface and ROLL on its edge. It is shaped like a:",
      options: ["Sphere", "Cylinder", "Cone", "Cube"], a: "Cylinder", acc: ["Cylinder"], type: "written", difficulty: "medium",
      h: "Flat circular faces and curved edge.", exp: "A coin is a short cylinder."
    },
    {
      id: "c1_q_3_1_06", q: "Which object will ONLY ROLL easily on the ground?",
      options: ["A football", "A wooden block", "A matchbox", "A book"], a: "A football", acc: ["A football"], type: "written", difficulty: "medium",
      h: "It is spherical with only a curved surface.", exp: "A spherical football has only a curved surface and rolls in all directions."
    },
    {
      id: "c1_q_3_1_07", q: "Which object will ONLY SLIDE?",
      options: ["A tennis ball", "A flat pencil box", "An orange", "A marble"], a: "A flat pencil box", acc: ["A flat pencil box"], type: "written", difficulty: "medium",
      h: "Objects with only flat faces slide.", exp: "A flat pencil box has flat faces, so it slides."
    },
    {
      id: "c1_q_3_1_08", q: "Which shape has 4 EQUAL straight sides?",
      options: ["Rectangle", "Square", "Triangle", "Circle"], a: "Square", acc: ["Square"], type: "written", difficulty: "hard",
      h: "All 4 sides are exactly same length.", exp: "A square has 4 equal sides."
    },
    {
      id: "c1_q_3_1_09", q: "Which shape has 4 sides where OPPOSITE sides are equal?",
      options: ["Rectangle", "Triangle", "Circle", "Cone"], a: "Rectangle", acc: ["Rectangle"], type: "written", difficulty: "hard",
      h: "Like a door or blackboard.", exp: "A rectangle has opposite sides equal."
    },
    {
      id: "c1_q_3_1_10", q: "How many corners does a circle have?",
      options: ["0", "1", "2", "4"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "hard",
      h: "A circle is completely curved.", exp: "A circle has 0 corners (no sharp vertices)."
    }
  ],

  "c1_les_3_2": [ // Observable properties of shapes (Corners, Vertices, Edges, Surfaces)
    { id: "c1_q_3_2_01", q: "How many corners (vertices) does a triangle have?",
      a: "3", acc: ["3", "three"], type: "written", difficulty: "easy",
      h: "Count the pointed corners of a triangle.", exp: "A triangle has 3 sides and 3 corners."
    },
    {
      id: "c1_q_3_2_02", q: "How many straight sides does a triangle have?",
      options: ["2", "3", "4", "0"], a: "3", acc: ["3", "three"], type: "written", difficulty: "easy",
      h: "Tri = 3.", exp: "A triangle has 3 straight sides."
    },
    {
      id: "c1_q_3_2_03", q: "How many flat faces does a playing dice (cube) have?",
      options: ["4", "5", "6", "8"], a: "6", acc: ["6", "six"], type: "written", difficulty: "easy",
      h: "A dice is numbered 1 to 6.", exp: "A cube has 6 flat faces."
    },
    {
      id: "c1_q_3_2_04", q: "How many vertices (corners) does a sphere (ball) have?",
      options: ["0", "1", "2", "8"], a: "0", acc: ["0", "zero"], type: "written", difficulty: "medium",
      h: "A ball has no sharp corners.", exp: "A sphere has 0 vertices."
    },
    {
      id: "c1_q_3_2_05", q: "A party hat (cone) has how many pointed vertices (apex)?",
      options: ["0", "1", "2", "3"], a: "1", acc: ["1", "one"], type: "written", difficulty: "medium",
      h: "Look at the sharp top point.", exp: "A cone has 1 pointed top vertex (apex)."
    },
    {
      id: "c1_q_3_2_06", q: "How many flat circular faces does a cylinder (can) have?",
      options: ["1", "2", "3", "0"], a: "2", acc: ["2", "two"], type: "written", difficulty: "medium",
      h: "Top and bottom.", exp: "A cylinder has 2 flat circular faces."
    },
    { id: "c1_q_3_2_07", q: "How many flat square faces does a cube have?",
      a: "6", acc: ["6", "six", "6 faces"], type: "written", difficulty: "medium",
      h: "Think of a playing dice with numbers 1 to 6.", exp: "A cube has 6 flat square faces."
    },
    {
      id: "c1_q_3_2_08", q: "How many corners (vertices) does a cuboid (brick) have?",
      options: ["6", "8", "12", "4"], a: "8", acc: ["8", "eight"], type: "written", difficulty: "hard",
      h: "4 top corners + 4 bottom corners.", exp: "A cuboid has 8 vertices."
    },
    {
      id: "c1_q_3_2_09", q: "What kind of surface does a basketball have?",
      options: ["Flat surface only", "Curved surface only", "Both flat and curved", "No surface"], a: "Curved surface only", acc: ["Curved surface only"], type: "written", difficulty: "hard",
      h: "It is round all over.", exp: "A basketball is a sphere with only a curved surface."
    },
    {
      id: "c1_q_3_2_10", q: "A solid cylinder has how many curved surfaces?",
      options: ["0", "1", "2", "3"], a: "1", acc: ["1", "one"], type: "written", difficulty: "hard",
      h: "The round unrolled wall.", exp: "A cylinder has 1 curved surface connecting the 2 flat circular bases."
    }
  ],

  "c1_les_3_3": [ // 3D Shapes: Cuboid, Cylinder, Cone, Sphere
    {
      id: "c1_q_3_3_01", q: "An ice-cream cone has the shape of a:",
      options: ["Cylinder", "Cone", "Cube", "Sphere"], a: "Cone", acc: ["Cone"], type: "written", difficulty: "easy",
      h: "Pointed top with circular base.", exp: "An ice-cream cone is a cone shape."
    },
    {
      id: "c1_q_3_3_02", q: "A globe or cricket ball has the shape of a:",
      options: ["Sphere", "Cube", "Cylinder", "Cone"], a: "Sphere", acc: ["Sphere"], type: "written", difficulty: "easy",
      h: "Completely round 3D solid.", exp: "A ball is a sphere."
    },
    {
      id: "c1_q_3_3_03", q: "A shoebox or matchbox has the shape of a:",
      options: ["Sphere", "Cone", "Cuboid", "Cylinder"], a: "Cuboid", acc: ["Cuboid"], type: "written", difficulty: "easy",
      h: "6 rectangular faces.", exp: "A matchbox is a cuboid."
    },
    {
      id: "c1_q_3_3_04", q: "A cold-drink can has the shape of a:",
      options: ["Cone", "Cylinder", "Cube", "Sphere"], a: "Cylinder", acc: ["Cylinder"], type: "written", difficulty: "medium",
      h: "Two flat circular ends and a round body.", exp: "A can is a cylinder."
    },
    {
      id: "c1_q_3_3_05", q: "Which 3D shape has 6 square faces of the exact same size?",
      options: ["Cube", "Cuboid", "Cylinder", "Sphere"], a: "Cube", acc: ["Cube"], type: "written", difficulty: "medium",
      h: "Like a Rubik's cube or dice.", exp: "A cube has 6 congruent square faces."
    },
    {
      id: "c1_q_3_3_06", q: "Which 3D shape can both ROLL and SLIDE?",
      options: ["Sphere only", "Cube only", "Cylinder", "None"], a: "Cylinder", acc: ["Cylinder"], type: "written", difficulty: "medium",
      h: "It has both flat and curved surfaces.", exp: "A cylinder slides on flat circular faces and rolls on its curved surface."
    },
    {
      id: "c1_q_3_3_07", q: "A birthday party cap is an example of which 3D shape?",
      options: ["Cone", "Cuboid", "Sphere", "Cylinder"], a: "Cone", acc: ["Cone"], type: "written", difficulty: "medium",
      h: "Pointed at top, round at bottom.", exp: "A party cap is a cone."
    },
    {
      id: "c1_q_3_3_08", q: "Which 3D shape has NO flat faces and NO edges?",
      options: ["Cylinder", "Sphere", "Cone", "Cube"], a: "Sphere", acc: ["Sphere"], type: "written", difficulty: "hard",
      h: "Round in all directions.", exp: "A sphere has 0 flat faces and 0 edges."
    },
    {
      id: "c1_q_3_3_09", q: "A tube light or battery cell has the shape of a:",
      options: ["Cylinder", "Cone", "Cuboid", "Cube"], a: "Cylinder", acc: ["Cylinder"], type: "written", difficulty: "hard",
      h: "Long round body with circular ends.", exp: "A battery cell is cylindrical."
    },
    {
      id: "c1_q_3_3_10", q: "A brick is an example of which solid shape?",
      options: ["Cube", "Cuboid", "Sphere", "Cone"], a: "Cuboid", acc: ["Cuboid"], type: "written", difficulty: "hard",
      h: "Opposite rectangular faces.", exp: "A brick is a rectangular cuboid."
    }
  ],

  "c1_les_3_4": [ // 2D shapes: Rectangle, Square, Triangle, Circle
    {
      id: "c1_q_3_4_01", q: "How many sides does a rectangle have?",
      options: ["3", "4", "5", "6"], a: "4", acc: ["4", "four"], type: "written", difficulty: "easy",
      h: "Count the 4 straight boundary lines.", exp: "A rectangle has 4 sides."
    },
    {
      id: "c1_q_3_4_02", q: "A wheel of a bicycle is shaped like a:",
      options: ["Square", "Circle", "Triangle", "Rectangle"], a: "Circle", acc: ["Circle"], type: "written", difficulty: "easy",
      h: "Round shape that rolls smoothly.", exp: "A bicycle wheel is a circle."
    },
    {
      id: "c1_q_3_4_03", q: "A slice of pizza cut from the center usually looks like a:",
      options: ["Square", "Triangle", "Circle", "Rectangle"], a: "Triangle", acc: ["Triangle"], type: "written", difficulty: "easy",
      h: "It has 3 corners.", exp: "A pizza slice has a triangular shape."
    },
    {
      id: "c1_q_3_4_04", q: "A chess board has the overall shape of a:",
      options: ["Circle", "Triangle", "Square", "Cone"], a: "Square", acc: ["Square"], type: "written", difficulty: "medium",
      h: "All 4 sides of the board are equal.", exp: "A standard chess board is a square."
    },
    {
      id: "c1_q_3_4_05", q: "A door or a standard currency note has the shape of a:",
      options: ["Circle", "Triangle", "Rectangle", "Square"], a: "Rectangle", acc: ["Rectangle"], type: "written", difficulty: "medium",
      h: "Length is longer than width.", exp: "A door is shaped like a rectangle."
    },
    {
      id: "c1_q_3_4_06", q: "Which 2D shape has 0 straight sides?",
      options: ["Square", "Triangle", "Circle", "Rectangle"], a: "Circle", acc: ["Circle"], type: "written", difficulty: "medium",
      h: "Its boundary is curved.", exp: "A circle is bounded by a continuous curve, so it has 0 straight sides."
    },
    {
      id: "c1_q_3_4_07", q: "A traffic caution sign (yield/hazard) often has the shape of a:",
      options: ["Triangle", "Circle", "Rectangle", "Sphere"], a: "Triangle", acc: ["Triangle"], type: "written", difficulty: "medium",
      h: "3-cornered warning sign.", exp: "Warning signs are commonly triangular."
    },
    {
      id: "c1_q_3_4_08", q: "If you trace around the bottom of a round cup onto paper, what 2D shape do you draw?",
      options: ["Square", "Circle", "Triangle", "Rectangle"], a: "Circle", acc: ["Circle"], type: "written", difficulty: "hard",
      h: "The base of a cup is circular.", exp: "Tracing the base of a cup draws a circle."
    },
    {
      id: "c1_q_3_4_09", q: "If you trace one face of a square dice onto paper, what shape do you get?",
      options: ["Circle", "Triangle", "Square", "Rectangle"], a: "Square", acc: ["Square"], type: "written", difficulty: "hard",
      h: "All 6 faces of a cube are squares.", exp: "Tracing a dice face gives a square."
    },
    {
      id: "c1_q_3_4_10", q: "What is the difference between a square and a rectangle?",
      options: ["A square has 3 sides", "A square has all 4 sides equal", "A rectangle has curved sides", "There is no difference"], a: "A square has all 4 sides equal", acc: ["A square has all 4 sides equal"], type: "written", difficulty: "hard",
      h: "Look at the side lengths.", exp: "In a square, all 4 sides are equal; in a rectangle, opposite sides are equal."
    }
  ],

  "c1_les_3_5": [ // Straight and curved boundaries and lines
    {
      id: "c1_q_3_5_01", q: "A ruler (scale) has what kind of edge?",
      options: ["Straight edge", "Curved edge", "Round edge", "None"], a: "Straight edge", acc: ["Straight edge"], type: "written", difficulty: "easy",
      h: "Used to draw straight lines.", exp: "A ruler has straight edges."
    },
    {
      id: "c1_q_3_5_02", q: "A bangle has what kind of boundary?",
      options: ["Straight boundary", "Curved boundary", "Zig-zag boundary", "Square boundary"], a: "Curved boundary", acc: ["Curved boundary"], type: "written", difficulty: "easy",
      h: "It is round like a ring.", exp: "A bangle has a smooth curved boundary."
    },
    {
      id: "c1_q_3_5_03", q: "Which letter is made using ONLY straight lines?",
      options: ["O", "C", "S", "H"], a: "H", acc: ["H"], type: "written", difficulty: "easy",
      h: "Two vertical lines and one horizontal line.", exp: "The letter H is made of 3 straight lines."
    },
    {
      id: "c1_q_3_5_04", q: "Which letter is made using ONLY a curved line?",
      options: ["L", "T", "C", "A"], a: "C", acc: ["C"], type: "written", difficulty: "medium",
      h: "It curves smoothly.", exp: "The letter C is a single curved line."
    },
    {
      id: "c1_q_3_5_05", q: "Which letter has BOTH straight lines and a curved line?",
      options: ["B", "I", "X", "O"], a: "B", acc: ["B"], type: "written", difficulty: "medium",
      h: "One vertical straight line + 2 curves.", exp: "Letter B combines a vertical straight line and 2 curved loops."
    },
    {
      id: "c1_q_3_5_06", q: "What kind of line is a standing line (vertical)?",
      options: ["Straight line", "Curved line", "Circular line", "Wavy line"], a: "Straight line", acc: ["Straight line"], type: "written", difficulty: "medium",
      h: "Straight up and down.", exp: "A standing line is a vertical straight line."
    },
    {
      id: "c1_q_3_5_07", q: "A sleeping line (horizontal) is a:",
      options: ["Straight line", "Curved line", "Circle", "Spiral"], a: "Straight line", acc: ["Straight line"], type: "written", difficulty: "medium",
      h: "Goes straight left to right.", exp: "A sleeping line is a horizontal straight line."
    },
    {
      id: "c1_q_3_5_08", q: "A slanting line is a:",
      options: ["Straight line", "Curved line", "Banded line", "Circle"], a: "Straight line", acc: ["Straight line"], type: "written", difficulty: "hard",
      h: "Tilted straight line.", exp: "A slanting line is an inclined straight line."
    },
    {
      id: "c1_q_3_5_09", q: "How many straight lines make a square?",
      options: ["2", "3", "4", "5"], a: "4", acc: ["4", "four"], type: "written", difficulty: "hard",
      h: "4 straight sides.", exp: "A square is formed by 4 straight line segments."
    },
    {
      id: "c1_q_3_5_10", q: "Can you draw a triangle using curved lines?",
      options: ["Yes", "No", "Only if small", "Only with colors"], a: "No", acc: ["No"], type: "written", difficulty: "hard",
      h: "Triangles require 3 straight sides.", exp: "A triangle must be drawn using 3 straight lines."
    }
  ],

  "c1_les_3_6": [ // Identifying shapes in everyday objects
    {
      id: "c1_q_3_6_01", q: "What shape is the surface of a standard wall clock?",
      options: ["Circle", "Triangle", "Star", "Cone"], a: "Circle", acc: ["Circle"], type: "written", difficulty: "easy",
      h: "Most wall clocks are round.", exp: "Wall clocks commonly have a circular face."
    },
    {
      id: "c1_q_3_6_02", q: "What shape is a book cover?",
      options: ["Circle", "Rectangle", "Triangle", "Cone"], a: "Rectangle", acc: ["Rectangle"], type: "written", difficulty: "easy",
      h: "Opposite sides are equal, long and wide.", exp: "A book cover is rectangular."
    },
    {
      id: "c1_q_3_6_03", q: "What shape is a slice of sandwich bread?",
      options: ["Square", "Circle", "Cylinder", "Sphere"], a: "Square", acc: ["Square"], type: "written", difficulty: "easy",
      h: "4 equal sides.", exp: "Sandwich bread slices are square."
    },
    {
      id: "c1_q_3_6_04", q: "What 3D shape is a battery cell?",
      options: ["Cylinder", "Cube", "Cone", "Sphere"], a: "Cylinder", acc: ["Cylinder"], type: "written", difficulty: "medium",
      h: "Two flat circles and curved tube.", exp: "A battery is cylindrical."
    },
    {
      id: "c1_q_3_6_05", q: "What 3D shape is an orange or globe?",
      options: ["Cone", "Sphere", "Cuboid", "Cylinder"], a: "Sphere", acc: ["Sphere"], type: "written", difficulty: "medium",
      h: "Round in all directions.", exp: "An orange is shaped like a sphere."
    },
    {
      id: "c1_q_3_6_06", q: "What shape are the steps of a ladder (rungs)?",
      options: ["Straight lines", "Curved lines", "Circles", "Spheres"], a: "Straight lines", acc: ["Straight lines"], type: "written", difficulty: "medium",
      h: "Horizontal straight bars.", exp: "Ladder rungs are straight horizontal segments."
    },
    {
      id: "c1_q_3_6_07", q: "What 3D shape is a cereal box?",
      options: ["Cuboid", "Sphere", "Cone", "Cylinder"], a: "Cuboid", acc: ["Cuboid"], type: "written", difficulty: "medium",
      h: "Box with rectangular sides.", exp: "A cereal box is a cuboid."
    },
    {
      id: "c1_q_3_6_08", q: "What shape is a tent (pointed roof)?",
      options: ["Cone / Prism", "Circle", "Sphere", "Square"], a: "Cone / Prism", acc: ["Cone / Prism", "Cone", "Prism"], type: "written", difficulty: "hard",
      h: "Triangular or conical shape.", exp: "A tent has a triangular or conical roof."
    },
    {
      id: "c1_q_3_6_09", q: "What shape is the face of a ten-rupee coin?",
      options: ["Circle", "Square", "Triangle", "Rectangle"], a: "Circle", acc: ["Circle"], type: "written", difficulty: "hard",
      h: "Round flat face.", exp: "A coin face is a circle."
    },
    {
      id: "c1_q_3_6_10", q: "What 3D shape is a traffic cone on the road?",
      options: ["Cone", "Cube", "Cylinder", "Sphere"], a: "Cone", acc: ["Cone"], type: "written", difficulty: "hard",
      h: "Pointed top tapering to circular base.", exp: "A traffic pylon is in the shape of a cone."
    }
  ],

  // =========================================================================
  // Theme 4: Measurement
  // =========================================================================
  "c1_les_4_1": [ // Comparing lengths (Longer/shorter, Taller/shorter, Near/far)
    {
      id: "c1_q_4_1_01", q: "Which is LONGER: a train or a car?",
      options: ["A train", "A car", "Both are same", "None"], a: "A train", acc: ["A train", "train"], type: "written", difficulty: "easy",
      h: "A train has many bogies.", exp: "A train is much longer than a car."
    },
    {
      id: "c1_q_4_1_02", q: "Which is TALLER: a giraffe or a dog?",
      options: ["A giraffe", "A dog", "Both are equal", "None"], a: "A giraffe", acc: ["A giraffe", "giraffe"], type: "written", difficulty: "easy",
      h: "A giraffe has a very long neck.", exp: "A giraffe is taller than a dog."
    },
    {
      id: "c1_q_4_1_03", q: "Which is SHORTER: a pencil or a ruler?",
      options: ["A pencil", "A ruler", "Both are same", "None"], a: "A pencil", acc: ["A pencil", "pencil"], type: "written", difficulty: "easy",
      h: "A standard small pencil vs long ruler.", exp: "A pencil is shorter than a full ruler."
    },
    {
      id: "c1_q_4_1_04", q: "Sunita is standing NEAR the door and Ravi is standing FAR from the door. Who is closer?",
      options: ["Sunita", "Ravi", "Both are at same place", "None"], a: "Sunita", acc: ["Sunita"], type: "written", difficulty: "medium",
      h: "Near means close.", exp: "Sunita is near, so she is closer to the door."
    },
    {
      id: "c1_q_4_1_05", q: "Which is THICKER: a tree trunk or a tree branch?",
      options: ["A tree trunk", "A tree branch", "Both are equal", "None"], a: "A tree trunk", acc: ["A tree trunk", "trunk"], type: "written", difficulty: "medium",
      h: "The main stem of a tree.", exp: "The main trunk is thicker than a branch."
    },
    {
      id: "c1_q_4_1_06", q: "Which tree is TALLEST: 🌴 Coconut tree, 🪴 Rose plant, 🌿 Grass?",
      options: ["Coconut tree", "Rose plant", "Grass", "All are equal"], a: "Coconut tree", acc: ["Coconut tree"], type: "written", difficulty: "medium",
      h: "Coconut palms grow very high.", exp: "A coconut tree is the tallest."
    },
    {
      id: "c1_q_4_1_07", q: "Ladder A has 10 steps. Ladder B has 5 steps. Which ladder is LONGER?",
      options: ["Ladder A", "Ladder B", "Both are equal", "Neither"], a: "Ladder A", acc: ["Ladder A"], type: "written", difficulty: "medium",
      h: "More steps mean greater length.", exp: "Ladder A with 10 steps is longer."
    },
    {
      id: "c1_q_4_1_08", q: "Which ribbon is the SHORTEST: Ribbon A (2 handspans), Ribbon B (5 handspans), Ribbon C (3 handspans)?",
      options: ["Ribbon A", "Ribbon B", "Ribbon C", "All are equal"], a: "Ribbon A", acc: ["Ribbon A"], type: "written", difficulty: "hard",
      h: "2 is the smallest count.", exp: "Ribbon A with 2 handspans is shortest."
    },
    {
      id: "c1_q_4_1_09", q: "Between an airplane flying in the sky and a bird on your balcony, which is FARTHER away?",
      options: ["The airplane", "The bird", "Both are equal", "None"], a: "The airplane", acc: ["The airplane"], type: "written", difficulty: "hard",
      h: "Planes fly high in the clouds.", exp: "The airplane high in the sky is farther away."
    },
    {
      id: "c1_q_4_1_10", q: "Which candle is the THINNEST: Birthday candle, Pillar candle, Jar candle?",
      options: ["Birthday candle", "Pillar candle", "Jar candle", "All are same"], a: "Birthday candle", acc: ["Birthday candle"], type: "written", difficulty: "hard",
      h: "Small slender candle on a cake.", exp: "A birthday candle is the thinnest."
    }
  ],

  "c1_les_4_2": [ // Measuring using non-standard units (Handspan, Footspan, Cubit, Erasers)
    {
      id: "c1_q_4_2_01", q: "What do we call the distance from the tip of your thumb to the tip of your little finger?",
      options: ["Handspan", "Footspan", "Pace", "Cubit"], a: "Handspan", acc: ["Handspan"], type: "written", difficulty: "easy",
      h: "Spread your hand wide.", exp: "A handspan is the span of an outstretched hand."
    },
    {
      id: "c1_q_4_2_02", q: "What do we call the distance from your elbow to the tip of your middle finger?",
      options: ["Cubit", "Handspan", "Footstep", "Finger width"], a: "Cubit", acc: ["Cubit"], type: "written", difficulty: "easy",
      h: "Elbow to fingertip.", exp: "A cubit is measured from elbow to fingertip."
    },
    {
      id: "c1_q_4_2_03", q: "A table is 6 handspans long. If an eraser is smaller than a handspan, measuring in erasers will give:",
      options: ["More than 6 erasers", "Less than 6 erasers", "Exactly 6 erasers", "0 erasers"], a: "More than 6 erasers", acc: ["More than 6 erasers"], type: "written", difficulty: "easy",
      h: "Smaller unit means bigger count.", exp: "Using a smaller unit (eraser) requires a greater number of units."
    },
    {
      id: "c1_q_4_2_04", q: "Which non-standard unit is best to measure the length of a classroom floor?",
      options: ["Footsteps / Paces", "Pencil tips", "Fingers", "Paperclips"], a: "Footsteps / Paces", acc: ["Footsteps / Paces", "Footsteps", "Paces"], type: "written", difficulty: "medium",
      h: "Walking along the floor.", exp: "Footsteps or paces are convenient for measuring room floors."
    },
    {
      id: "c1_q_4_2_05", q: "Rohan measured his textbook: it is 4 erasers long. Neha measured it: it is 4 erasers long. The book is:",
      options: ["4 erasers long", "8 erasers long", "0 erasers long", "2 erasers long"], a: "4 erasers long", acc: ["4 erasers long", "4"], type: "written", difficulty: "medium",
      h: "Both got 4 erasers.", exp: "The book length is 4 erasers."
    },
    {
      id: "c1_q_4_2_06", q: "Why might a father's handspan count for a table be FEWER than a child's handspan count?",
      options: ["Father's hand is bigger", "Child's hand is bigger", "Table gets smaller", "No reason"], a: "Father's hand is bigger", acc: ["Father's hand is bigger", "Father\'s hand is bigger"], type: "written", difficulty: "medium",
      h: "Adult hands are larger.", exp: "A larger hand covers more length per span, requiring fewer spans."
    },
    {
      id: "c1_q_4_2_07", q: "Which tool is used for measuring non-standard pencil lengths?",
      options: ["Paper clips", "Thermometer", "Clock", "Weighing scale"], a: "Paper clips", acc: ["Paper clips"], type: "written", difficulty: "medium",
      h: "Small everyday objects placed end to end.", exp: "Paper clips are used as non-standard length units."
    },
    {
      id: "c1_q_4_2_08", q: "A stick is equal to 3 pencils placed end-to-end. How many pencils long is the stick?",
      options: ["2", "3", "4", "6"], a: "3", acc: ["3", "three"], type: "written", difficulty: "hard",
      h: "3 pencils.", exp: "The stick is 3 pencils long."
    },
    {
      id: "c1_q_4_2_09", q: "A mat is 8 footsteps long. A carpet is 12 footsteps long. Which is longer?",
      options: ["The carpet", "The mat", "Both are equal", "Neither"], a: "The carpet", acc: ["The carpet", "carpet"], type: "written", difficulty: "hard",
      h: "12 > 8.", exp: "12 footsteps is longer than 8 footsteps."
    },
    {
      id: "c1_q_4_2_10", q: "To measure your pencil, which non-standard unit is most suitable?",
      options: ["Finger widths / Erasers", "Paces / Footsteps", "Beds", "Buses"], a: "Finger widths / Erasers", acc: ["Finger widths / Erasers"], type: "written", difficulty: "hard",
      h: "Small units for small objects.", exp: "Small items like erasers or finger widths are best for measuring pencils."
    }
  ],

  "c1_les_4_3": [ // Comparing weight (Heavy/light)
    {
      id: "c1_q_4_3_01", q: "Which is HEAVIER: a brick or a feather?",
      options: ["A brick", "A feather", "Both are same", "None"], a: "A brick", acc: ["A brick", "brick"], type: "written", difficulty: "easy",
      h: "A brick is solid stone.", exp: "A brick is much heavier than a light feather."
    },
    {
      id: "c1_q_4_3_02", q: "Which is LIGHTER: an empty plastic bottle or a bottle full of water?",
      options: ["An empty bottle", "A full bottle", "Both are same", "None"], a: "An empty bottle", acc: ["An empty bottle"], type: "written", difficulty: "easy",
      h: "Water adds weight.", exp: "An empty bottle is lighter."
    },
    {
      id: "c1_q_4_3_03", q: "On a see-saw balance, the HEAVIER object goes:",
      options: ["Down", "Up", "Stays in air", "Disappears"], a: "Down", acc: ["Down"], type: "written", difficulty: "easy",
      h: "Heavy things push down.", exp: "The heavier side of a balance goes down."
    },
    {
      id: "c1_q_4_3_04", q: "Which fruit is the HEAVIEST: Watermelon, Apple, Cherry, Grape?",
      options: ["Watermelon", "Apple", "Cherry", "Grape"], a: "Watermelon", acc: ["Watermelon"], type: "written", difficulty: "medium",
      h: "A huge fruit requiring two hands.", exp: "A watermelon is the heaviest."
    },
    {
      id: "c1_q_4_3_05", q: "Which animal is the LIGHTEST: Elephant, Mouse, Cow, Horse?",
      options: ["Elephant", "Mouse", "Cow", "Horse"], a: "Mouse", acc: ["Mouse"], type: "written", difficulty: "medium",
      h: "A tiny rodent.", exp: "A mouse is much lighter than cattle or elephants."
    },
    {
      id: "c1_q_4_3_06", q: "Which object is EASIEST to lift for a Class 1 student?",
      options: ["A school bag full of books", "A pencil", "A desk", "A teacher's chair"], a: "A pencil", acc: ["A pencil"], type: "written", difficulty: "medium",
      h: "Lightest object.", exp: "A pencil is very light and easy to lift."
    },
    {
      id: "c1_q_4_3_07", q: "On a beam balance, Pan A goes DOWN and Pan B goes UP. Which pan has the LIGHTER object?",
      options: ["Pan A", "Pan B", "Both are equal", "Neither"], a: "Pan B", acc: ["Pan B"], type: "written", difficulty: "medium",
      h: "The lighter side rises up.", exp: "Pan B rises up, so it contains the lighter object."
    },
    {
      id: "c1_q_4_3_08", q: "Which pair is in order of LIGHTEST to HEAVIEST?",
      options: ["Feather, Apple, Pumpkin", "Pumpkin, Apple, Feather", "Apple, Pumpkin, Feather", "Pumpkin, Feather, Apple"], a: "Feather, Apple, Pumpkin", acc: ["Feather, Apple, Pumpkin"], type: "written", difficulty: "hard",
      h: "Feather is lightest, pumpkin is heaviest.", exp: "Feather (lightest) < Apple < Pumpkin (heaviest)."
    },
    {
      id: "c1_q_4_3_09", q: "1 bag of cotton and 1 iron nail: If the cotton bag feels heavier, it means:",
      options: ["The cotton bag has more weight", "The nail has more weight", "Both are zero", "None"], a: "The cotton bag has more weight", acc: ["The cotton bag has more weight"], type: "written", difficulty: "hard",
      h: "Heavier means greater weight.", exp: "The heavier object has more weight."
    },
    {
      id: "c1_q_4_3_10", q: "Which tool do we use in a grocery shop to compare the weight of vegetables?",
      options: ["A balance scale", "A ruler", "A thermometer", "A clock"], a: "A balance scale", acc: ["A balance scale", "balance", "scale"], type: "written", difficulty: "hard",
      h: "It has two pans.", exp: "A weighing balance scale measures and compares weights."
    }
  ],

  "c1_les_4_4": [ // Comparing capacity (Holds more / holds less)
    {
      id: "c1_q_4_4_01", q: "Which container HOLDS MORE water: a bucket or a spoon?",
      options: ["A bucket", "A spoon", "Both hold same", "None"], a: "A bucket", acc: ["A bucket", "bucket"], type: "written", difficulty: "easy",
      h: "A bucket is much bigger.", exp: "A bucket has far more capacity than a small spoon."
    },
    {
      id: "c1_q_4_4_02", q: "Which container HOLDS LESS milk: a tea cup or a large jug?",
      options: ["A tea cup", "A large jug", "Both hold same", "None"], a: "A tea cup", acc: ["A tea cup", "tea cup", "cup"], type: "written", difficulty: "easy",
      h: "A tea cup is small.", exp: "A tea cup holds less liquid than a jug."
    },
    {
      id: "c1_q_4_4_03", q: "To fill a bucket with water, which will need FEWER pours: a big mug or a tiny teaspoon?",
      options: ["A big mug", "A tiny teaspoon", "Both need same", "None"], a: "A big mug", acc: ["A big mug", "big mug", "mug"], type: "written", difficulty: "easy",
      h: "A bigger container fills faster.", exp: "A big mug holds more water, so fewer pours are needed."
    },
    {
      id: "c1_q_4_4_04", q: "Which of these holds the MOST water: Swimming pool, Bathtub, Glass of water, Bucket?",
      options: ["Swimming pool", "Bathtub", "Glass of water", "Bucket"], a: "Swimming pool", acc: ["Swimming pool"], type: "written", difficulty: "medium",
      h: "A large water tank for swimming.", exp: "A swimming pool has the greatest capacity."
    },
    {
      id: "c1_q_4_4_05", q: "Which of these holds the LEAST liquid: An eye dropper, A water bottle, A kettle, A bowl?",
      options: ["An eye dropper", "A water bottle", "A kettle", "A bowl"], a: "An eye dropper", acc: ["An eye dropper", "eye dropper"], type: "written", difficulty: "medium",
      h: "Holds tiny drops.", exp: "An eye dropper holds only a few drops (least capacity)."
    },
    {
      id: "c1_q_4_4_06", q: "Bottle A fills 4 glasses. Bottle B fills 7 glasses. Which bottle has GREATER capacity?",
      options: ["Bottle B", "Bottle A", "Both are equal", "Neither"], a: "Bottle B", acc: ["Bottle B"], type: "written", difficulty: "medium",
      h: "7 glasses > 4 glasses.", exp: "Bottle B fills 7 glasses, so it holds more liquid."
    },
    {
      id: "c1_q_4_4_07", q: "If you pour 1 glass of juice into a large bowl, the amount of juice:",
      options: ["Remains the same", "Increases", "Decreases", "Becomes zero"], a: "Remains the same", acc: ["Remains the same"], type: "written", difficulty: "medium",
      h: "Only the container changes shape.", exp: "The liquid amount remains unchanged (conservation of volume)."
    },
    {
      id: "c1_q_4_4_08", q: "Which list is ordered from LEAST capacity to GREATEST capacity?",
      options: ["Spoon, Glass, Jug, Bucket", "Bucket, Jug, Glass, Spoon", "Glass, Spoon, Bucket, Jug", "Jug, Bucket, Spoon, Glass"], a: "Spoon, Glass, Jug, Bucket", acc: ["Spoon, Glass, Jug, Bucket"], type: "written", difficulty: "hard",
      h: "Spoon is smallest, bucket is largest.", exp: "Spoon < Glass < Jug < Bucket."
    },
    {
      id: "c1_q_4_4_09", q: "Jug X fills 5 mugs. Jug Y fills 5 mugs. We can say:",
      options: ["Jug X and Jug Y have equal capacity", "Jug X holds more", "Jug Y holds more", "None"], a: "Jug X and Jug Y have equal capacity", acc: ["Jug X and Jug Y have equal capacity"], type: "written", difficulty: "hard",
      h: "Both fill 5 mugs.", exp: "Both jugs hold the same capacity (5 mugs)."
    },
    {
      id: "c1_q_4_4_10", q: "To water a large garden, which is best to use?",
      options: ["A garden hose / large bucket", "A medicine dropper", "A soup spoon", "A teacup"], a: "A garden hose / large bucket", acc: ["A garden hose / large bucket"], type: "written", difficulty: "hard",
      h: "Requires a lot of water.", exp: "A hose or large bucket delivers large volumes of water."
    }
  ],

  "c1_les_4_5": [ // Time vocabulary and sequence of events (Earlier/later, Morning/afternoon/night)
    {
      id: "c1_q_4_5_01", q: "When do we see the SUN rising in the sky?",
      options: ["Morning", "Night", "Midnight", "Evening"], a: "Morning", acc: ["Morning"], type: "written", difficulty: "easy",
      h: "Start of the day.", exp: "The sun rises in the morning."
    },
    {
      id: "c1_q_4_5_02", q: "When do we see the MOON and STARS shining?",
      options: ["Night", "Morning", "Afternoon", "Noon"], a: "Night", acc: ["Night"], type: "written", difficulty: "easy",
      h: "When it is dark.", exp: "The moon and stars appear at night."
    },
    {
      id: "c1_q_4_5_03", q: "What meal do we eat in the MORNING?",
      options: ["Breakfast", "Lunch", "Dinner", "Supper"], a: "Breakfast", acc: ["Breakfast"], type: "written", difficulty: "easy",
      h: "First meal of the day.", exp: "Breakfast is eaten in the morning."
    },
    {
      id: "c1_q_4_5_04", q: "Which activity takes a LONGER time: Blinking your eye or Sleeping at night?",
      options: ["Sleeping at night", "Blinking your eye", "Both take same time", "None"], a: "Sleeping at night", acc: ["Sleeping at night"], type: "written", difficulty: "medium",
      h: "Sleeping takes hours.", exp: "Sleeping at night takes 8 hours, while blinking takes a second."
    },
    {
      id: "c1_q_4_5_05", q: "Which activity happens EARLIER in a school day: Morning Assembly or Going back home?",
      options: ["Morning Assembly", "Going back home", "Both at same time", "None"], a: "Morning Assembly", acc: ["Morning Assembly"], type: "written", difficulty: "medium",
      h: "Assembly happens when school starts.", exp: "Morning assembly happens earlier in the day."
    },
    {
      id: "c1_q_4_5_06", q: "What is the correct sequence: 1. Wake up, 2. Brush teeth, 3. Go to sleep at night?",
      options: ["1, 2, 3", "3, 2, 1", "2, 1, 3", "3, 1, 2"], a: "1, 2, 3", acc: ["1, 2, 3"], type: "written", difficulty: "medium",
      h: "Morning comes before night.", exp: "You wake up first, brush teeth, and sleep at night (1, 2, 3)."
    },
    {
      id: "c1_q_4_5_07", q: "Which takes a SHORTER time: Washing hands or Watching a full movie?",
      options: ["Washing hands", "Watching a full movie", "Both take same time", "None"], a: "Washing hands", acc: ["Washing hands"], type: "written", difficulty: "medium",
      h: "Washing hands takes 20 seconds.", exp: "Washing hands takes only a few seconds."
    },
    {
      id: "c1_q_4_5_08", q: "What day comes immediately AFTER Monday?",
      options: ["Tuesday", "Sunday", "Wednesday", "Friday"], a: "Tuesday", acc: ["Tuesday"], type: "written", difficulty: "hard",
      h: "Monday, ...", exp: "Tuesday comes after Monday."
    },
    { id: "c1_q_4_5_09", q: "How many days are there in 2 weeks?",
      a: "14", acc: ["14", "fourteen", "14 days"], type: "written", difficulty: "hard",
      h: "1 week has 7 days. 7 + 7 = ?", exp: "2 weeks = 2 × 7 = 14 days."
    },
    {
      id: "c1_q_4_5_10", q: "What tool tells us the exact time of the day in hours and minutes?",
      options: ["A clock / watch", "A ruler", "A thermometer", "A weighing balance"], a: "A clock / watch", acc: ["A clock / watch", "clock", "watch"], type: "written", difficulty: "hard",
      h: "It has hour and minute hands.", exp: "A clock shows the time."
    }
  ],

  // =========================================================================
  // Theme 5: Data Handling
  // =========================================================================
  "c1_les_5_1": [ // Collecting and recording simple information
    {
      id: "c1_q_5_1_01", q: "In a fruit basket, there are 4 apples and 3 bananas. How many fruits in total?",
      options: ["6", "7", "8", "9"], a: "7", acc: ["7", "seven"], type: "written", difficulty: "easy",
      h: "4 + 3 = ?", exp: "4 apples + 3 bananas = 7 fruits."
    },
    {
      id: "c1_q_5_1_02", q: "Count the shapes: 🟦 🟦 🟦 🔺 🔺. How many squares (🟦) are there?",
      options: ["2", "3", "4", "5"], a: "3", acc: ["3", "three"], type: "written", difficulty: "easy",
      h: "Count the blue squares.", exp: "There are 3 blue squares."
    },
    {
      id: "c1_q_5_1_03", q: "Count the shapes: 🟦 🟦 🟦 🔺 🔺. How many triangles (🔺) are there?",
      options: ["2", "3", "5", "1"], a: "2", acc: ["2", "two"], type: "written", difficulty: "easy",
      h: "Count the red triangles.", exp: "There are 2 triangles."
    },
    {
      id: "c1_q_5_1_04", q: "Look at the list: Red pencils = 5, Blue pencils = 8. Which color pencil is MORE in number?",
      options: ["Blue pencils", "Red pencils", "Both are same", "None"], a: "Blue pencils", acc: ["Blue pencils", "Blue"], type: "written", difficulty: "medium",
      h: "8 is greater than 5.", exp: "Blue pencils (8) are more than Red pencils (5)."
    },
    {
      id: "c1_q_5_1_05", q: "If 4 children like dogs and 6 children like cats, how many children were surveyed?",
      options: ["8", "9", "10", "12"], a: "10", acc: ["10", "ten"], type: "written", difficulty: "medium",
      h: "4 + 6 = ?", exp: "4 + 6 = 10 children."
    },
    {
      id: "c1_q_5_1_06", q: "In a toy box: 🧸 = 3, 🚗 = 5, ⚽ = 2. Which toy is LEAST in number?",
      options: ["⚽ Balls", "🧸 Teddy bears", "🚗 Cars", "All are equal"], a: "⚽ Balls", acc: ["⚽ Balls", "Balls", "⚽"], type: "written", difficulty: "medium",
      h: "2 is the smallest number.", exp: "Balls (2) are the least."
    },
    {
      id: "c1_q_5_1_07", q: "How many letters are in the name 'ANANYA'?",
      options: ["5", "6", "7", "8"], a: "6", acc: ["6", "six"], type: "written", difficulty: "medium",
      h: "A-N-A-N-Y-A.", exp: "There are 6 letters in ANANYA."
    },
    {
      id: "c1_q_5_1_08", q: "How many times does the letter 'A' appear in 'BANANA'?",
      options: ["1", "2", "3", "4"], a: "3", acc: ["3", "three"], type: "written", difficulty: "hard",
      h: "B-A-N-A-N-A.", exp: "Letter A appears 3 times."
    },
    {
      id: "c1_q_5_1_09", q: "Look at birds on a wire: 🐦 🐦 🐦 🕊️ 🕊️ 🐦. How many birds are there in all?",
      options: ["4", "5", "6", "7"], a: "6", acc: ["6", "six"], type: "written", difficulty: "hard",
      h: "4 bluebirds + 2 doves.", exp: "Total birds = 4 + 2 = 6."
    },
    {
      id: "c1_q_5_1_10", q: "In a car park: 🚗 Red = 7, 🚙 Blue = 4. How many MORE red cars than blue cars?",
      options: ["2", "3", "4", "11"], a: "3", acc: ["3", "three"], type: "written", difficulty: "hard",
      h: "7 - 4 = ?", exp: "7 - 4 = 3 more red cars."
    }
  ],

  "c1_les_5_2": [ // Representing and interpreting simple visual data
    {
      id: "c1_q_5_2_01", q: "Look at the picture tally: 🍦 🍦 🍦 🍦. How many ice creams are shown?",
      options: ["3", "4", "5", "6"], a: "4", acc: ["4", "four"], type: "written", difficulty: "easy",
      h: "Count each ice cream cone.", exp: "There are 4 ice creams."
    },
    {
      id: "c1_q_5_2_02", q: "Look at the chart: Mon: ☀️, Tue: ☀️, Wed: 🌧️, Thu: ☀️. How many sunny days were there?",
      options: ["1", "2", "3", "4"], a: "3", acc: ["3", "three"], type: "written", difficulty: "easy",
      h: "Count the sun symbols ☀️.", exp: "There are 3 sunny days."
    },
    {
      id: "c1_q_5_2_03", q: "In a picture graph where each 🍎 = 1 apple: Sam has 🍎 🍎 🍎. How many apples does Sam have?",
      options: ["2", "3", "4", "5"], a: "3", acc: ["3", "three"], type: "written", difficulty: "easy",
      h: "Count the 3 apple icons.", exp: "Sam has 3 apples."
    },
    {
      id: "c1_q_5_2_04", q: "If Amy has 🍎 🍎 and Sam has 🍎 🍎 🍎 🍎, who has MORE apples?",
      options: ["Sam", "Amy", "Both have same", "Neither"], a: "Sam", acc: ["Sam"], type: "written", difficulty: "medium",
      h: "4 is more than 2.", exp: "Sam has 4 apples, which is more than Amy's 2 apples."
    },
    {
      id: "c1_q_5_2_05", q: "In a pictograph: Lily has ⭐ ⭐ ⭐ ⭐ ⭐. Rohit has ⭐ ⭐ ⭐. How many stars do they have TOGETHER?",
      options: ["6", "7", "8", "9"], a: "8", acc: ["8", "eight"], type: "written", difficulty: "medium",
      h: "5 + 3 = ?", exp: "5 + 3 = 8 stars."
    },
    {
      id: "c1_q_5_2_06", q: "Which fruit was eaten the LEAST if: Mango = 8, Orange = 3, Banana = 5?",
      options: ["Orange", "Mango", "Banana", "All are same"], a: "Orange", acc: ["Orange"], type: "written", difficulty: "medium",
      h: "3 is the smallest number.", exp: "Orange (3) was eaten the least."
    },
    {
      id: "c1_q_5_2_07", q: "Look at vehicle count: Bicycles = 🚲 🚲 🚲 🚲 🚲 (5), Cars = 🚗 🚗 (2). What is the difference?",
      options: ["2", "3", "5", "7"], a: "3", acc: ["3", "three"], type: "written", difficulty: "medium",
      h: "5 - 2 = ?", exp: "5 - 2 = 3."
    },
    {
      id: "c1_q_5_2_08", q: "In a class pictograph, 6 students walk to school and 9 take the bus. How many students in total?",
      options: ["13", "14", "15", "16"], a: "15", acc: ["15"], type: "written", difficulty: "hard",
      h: "6 + 9 = ?", exp: "6 + 9 = 15 students."
    },
    {
      id: "c1_q_5_2_09", q: "If each 🌸 represents 1 flower: Garden A has 🌸 🌸 🌸 🌸. Garden B has 🌸 🌸. How many more flowers in Garden A?",
      options: ["1", "2", "3", "4"], a: "2", acc: ["2", "two"], type: "written", difficulty: "hard",
      h: "4 - 2 = ?", exp: "4 - 2 = 2 more flowers in Garden A."
    },
    {
      id: "c1_q_5_2_10", q: "Why do we use pictographs and tables?",
      options: ["To make information easy to see and count", "To make numbers disappear", "To make math harder", "None"], a: "To make information easy to see and count", acc: ["To make information easy to see and count"], type: "written", difficulty: "hard",
      h: "Visuals help in quick counting.", exp: "Pictographs organize data clearly for easy reading and comparison."
    }
  ],

  "c1_les_5_3": [ // Data from simple measurements
    {
      id: "c1_q_5_3_01", q: "Pencil A is 5 paperclips long. Pencil B is 8 paperclips long. Which pencil is LONGER?",
      options: ["Pencil B", "Pencil A", "Both are same", "None"], a: "Pencil B", acc: ["Pencil B"], type: "written", difficulty: "easy",
      h: "8 paperclips > 5 paperclips.", exp: "Pencil B (8 paperclips) is longer."
    },
    {
      id: "c1_q_5_3_02", q: "Plant 1 has 3 leaves. Plant 2 has 7 leaves. How many leaves in all?",
      options: ["8", "9", "10", "11"], a: "10", acc: ["10", "ten"], type: "written", difficulty: "easy",
      h: "3 + 7 = ?", exp: "3 + 7 = 10 leaves."
    },
    {
      id: "c1_q_5_3_03", q: "Ribbon Red = 4 handspans. Ribbon Blue = 4 handspans. The two ribbons are:",
      options: ["Equal in length", "Red is longer", "Blue is longer", "None"], a: "Equal in length", acc: ["Equal in length"], type: "written", difficulty: "easy",
      h: "Both measure 4 handspans.", exp: "Both ribbons have equal length (4 handspans)."
    },
    {
      id: "c1_q_5_3_04", q: "Book A weighs 5 wooden blocks. Book B weighs 9 wooden blocks. Which book is HEAVIER?",
      options: ["Book B", "Book A", "Both are same", "None"], a: "Book B", acc: ["Book B"], type: "written", difficulty: "medium",
      h: "9 blocks > 5 blocks.", exp: "Book B is heavier."
    },
    {
      id: "c1_q_5_3_05", q: "Bottle 1 holds 3 cups. Bottle 2 holds 6 cups. How many cups do both bottles hold together?",
      options: ["7", "8", "9", "10"], a: "9", acc: ["9", "nine"], type: "written", difficulty: "medium",
      h: "3 + 6 = ?", exp: "3 + 6 = 9 cups."
    },
    {
      id: "c1_q_5_3_06", q: "Ria walked 15 paces across the room. Joy walked 12 paces. How many more paces did Ria walk?",
      options: ["2", "3", "4", "5"], a: "3", acc: ["3", "three"], type: "written", difficulty: "medium",
      h: "15 - 12 = ?", exp: "15 - 12 = 3 paces."
    },
    {
      id: "c1_q_5_3_07", q: "Table 1 height = 6 handspans. Table 2 height = 8 handspans. Table 2 is:",
      options: ["Taller", "Shorter", "Equal", "Lighter"], a: "Taller", acc: ["Taller"], type: "written", difficulty: "medium",
      h: "8 handspans is greater height.", exp: "Table 2 is taller."
    },
    {
      id: "c1_q_5_3_08", q: "In a bean plant growth chart: Day 1 = 2 cm, Day 5 = 6 cm. How much did it grow?",
      options: ["3 cm", "4 cm", "5 cm", "8 cm"], a: "4 cm", acc: ["4 cm", "4"], type: "written", difficulty: "hard",
      h: "6 - 2 = ?", exp: "6 - 2 = 4 cm."
    },
    {
      id: "c1_q_5_3_09", q: "Bucket holds 10 mugs of water. If you pour in 4 mugs, how many more mugs are needed to fill it?",
      options: ["4", "5", "6", "7"], a: "6", acc: ["6", "six"], type: "written", difficulty: "hard",
      h: "10 - 4 = ?", exp: "10 - 4 = 6 mugs."
    },
    {
      id: "c1_q_5_3_10", q: "Stick A is 7 erasers long. Stick B is 3 erasers long. How much longer is Stick A?",
      options: ["3 erasers", "4 erasers", "5 erasers", "10 erasers"], a: "4 erasers", acc: ["4 erasers", "4"], type: "written", difficulty: "hard",
      h: "7 - 3 = ?", exp: "7 - 3 = 4 erasers."
    }
  ],

  // =========================================================================
  // Theme 6: Patterns
  // =========================================================================
  "c1_les_6_1": [ // Observing and extending shape patterns
    {
      id: "c1_q_6_1_01", q: "What comes next in the pattern: 🔴 🔵 🔴 🔵 🔴 ___?",
      options: ["🔵", "🔴", "🟢", "🟡"], a: "🔵", acc: ["🔵", "Blue", "blue circle"], type: "written", difficulty: "easy",
      h: "The colors alternate: Red, Blue, Red, Blue...", exp: "After red comes blue (🔵)."
    },
    {
      id: "c1_q_6_1_02", q: "What shape comes next: 🔺 🟦 🔺 🟦 🔺 ___?",
      options: ["🟦", "🔺", "⚪", "⭐"], a: "🟦", acc: ["🟦", "Square", "blue square"], type: "written", difficulty: "easy",
      h: "Triangle, Square, Triangle, Square...", exp: "The next shape is square (🟦)."
    },
    {
      id: "c1_q_6_1_03", q: "What comes next in the size pattern: Small circle, Big circle, Small circle, Big circle, ___?",
      options: ["Small circle", "Big circle", "Triangle", "Square"], a: "Small circle", acc: ["Small circle"], type: "written", difficulty: "easy",
      h: "Alternating small and big.", exp: "After Big circle comes Small circle."
    },
    {
      id: "c1_q_6_1_04", q: "Complete the arrow pattern: ⬆️ ⬇️ ⬆️ ⬇️ ___?",
      options: ["⬆️", "⬇️", "⬅️", "➡️"], a: "⬆️", acc: ["⬆️", "Up arrow", "up"], type: "written", difficulty: "medium",
      h: "Up, Down, Up, Down...", exp: "The next arrow points up (⬆️)."
    },
    {
      id: "c1_q_6_1_05", q: "What comes next: ☀️ 🌙 ☀️ 🌙 ☀️ ___?",
      options: ["🌙", "☀️", "⭐", "☁️"], a: "🌙", acc: ["🌙", "Moon"], type: "written", difficulty: "medium",
      h: "Sun, Moon, Sun, Moon...", exp: "The next is Moon (🌙)."
    },
    {
      id: "c1_q_6_1_06", q: "Find the repeating unit in: 🔴 🔴 🔵 🔴 🔴 🔵 🔴 🔴 🔵",
      options: ["🔴 🔴 🔵", "🔴 🔵", "🔵 🔴", "🔴 🔴 🔴"], a: "🔴 🔴 🔵", acc: ["🔴 🔴 🔵"], type: "written", difficulty: "medium",
      h: "Which group repeats every time?", exp: "Two reds followed by one blue (🔴 🔴 🔵) is the repeating unit."
    },
    {
      id: "c1_q_6_1_07", q: "What comes next: 🟢 🟢 🟡 🟢 🟢 🟡 🟢 🟢 ___?",
      options: ["🟡", "🟢", "🔴", "🔵"], a: "🟡", acc: ["🟡", "Yellow"], type: "written", difficulty: "medium",
      h: "Two greens, then one yellow.", exp: "After two greens comes yellow (🟡)."
    },
    {
      id: "c1_q_6_1_08", q: "Complete the shape pattern: ⬛ ⬜ ⬛ ⬜ ⬛ ⬜ ___?",
      options: ["⬛", "⬜", "🔺", "🔴"], a: "⬛", acc: ["⬛", "Black square"], type: "written", difficulty: "hard",
      h: "Black, White, Black, White...", exp: "The next is Black square (⬛)."
    },
    {
      id: "c1_q_6_1_09", q: "What comes next in growing pattern: 🟢, 🟢🟢, 🟢🟢🟢, ___?",
      options: ["🟢🟢🟢🟢 (4 greens)", "🟢 (1 green)", "🟢🟢 (2 greens)", "🔴"], a: "🟢🟢🟢🟢 (4 greens)", acc: ["🟢🟢🟢🟢 (4 greens)", "4 greens", "4"], type: "written", difficulty: "hard",
      h: "Add 1 green circle each time.", exp: "The count increases by 1: 1, 2, 3, so 4 greens is next."
    },
    {
      id: "c1_q_6_1_10", q: "Which item DOES NOT belong to the pattern: 🔺 🔺 🔺 🟦 🔺 🔺 🔺?",
      options: ["🟦", "🔺", "All belong", "None"], a: "🟦", acc: ["🟦", "Square"], type: "written", difficulty: "hard",
      h: "Look for the different shape.", exp: "The square (🟦) breaks the triangle pattern."
    }
  ],

  "c1_les_6_2": [ // Observing and extending number patterns
    {
      id: "c1_q_6_2_01", q: "What number comes next: 1, 2, 3, 4, ___?",
      options: ["5", "6", "7", "3"], a: "5", acc: ["5", "five"], type: "written", difficulty: "easy",
      h: "Add 1 each time.", exp: "The next number is 5."
    },
    {
      id: "c1_q_6_2_02", q: "What number comes next: 2, 4, 6, 8, ___?",
      options: ["9", "10", "11", "12"], a: "10", acc: ["10", "ten"], type: "written", difficulty: "easy",
      h: "Skip counting by 2.", exp: "8 + 2 = 10."
    },
    {
      id: "c1_q_6_2_03", q: "What number comes next: 10, 20, 30, 40, ___?",
      options: ["45", "50", "60", "41"], a: "50", acc: ["50", "fifty"], type: "written", difficulty: "easy",
      h: "Add 10 each time.", exp: "40 + 10 = 50."
    },
    {
      id: "c1_q_6_2_04", q: "Complete the backward pattern: 5, 4, 3, 2, ___?",
      options: ["1", "0", "6", "3"], a: "1", acc: ["1", "one"], type: "written", difficulty: "medium",
      h: "Subtract 1 each time.", exp: "2 - 1 = 1."
    },
    {
      id: "c1_q_6_2_05", q: "What number comes next: 5, 10, 15, 20, ___?",
      options: ["21", "25", "30", "35"], a: "25", acc: ["25"], type: "written", difficulty: "medium",
      h: "Skip counting by 5.", exp: "20 + 5 = 25."
    },
    {
      id: "c1_q_6_2_06", q: "What number comes next: 1, 3, 5, 7, ___?",
      options: ["8", "9", "10", "11"], a: "9", acc: ["9", "nine"], type: "written", difficulty: "medium",
      h: "Add 2 to each odd number.", exp: "7 + 2 = 9."
    },
    {
      id: "c1_q_6_2_07", q: "Complete the pattern: 11, 22, 33, 44, ___?",
      options: ["45", "54", "55", "66"], a: "55", acc: ["55"], type: "written", difficulty: "medium",
      h: "Double digits increasing.", exp: "The next number is 55."
    },
    {
      id: "c1_q_6_2_08", q: "What number is missing: 20, 18, 16, ___, 12?",
      options: ["13", "14", "15", "10"], a: "14", acc: ["14"], type: "written", difficulty: "hard",
      h: "Subtract 2 each time.", exp: "16 - 2 = 14."
    },
    {
      id: "c1_q_6_2_09", q: "What comes next: 100, 90, 80, 70, ___?",
      options: ["50", "60", "65", "75"], a: "60", acc: ["60"], type: "written", difficulty: "hard",
      h: "Count backward by 10s.", exp: "70 - 10 = 60."
    },
    {
      id: "c1_q_6_2_10", q: "Complete the pattern: 1A, 2B, 3C, ___?",
      options: ["4D", "4C", "3D", "5E"], a: "4D", acc: ["4D", "4d"], type: "written", difficulty: "hard",
      h: "Number increases by 1, letter advances by 1.", exp: "After 3C comes 4D."
    }
  ],

  "c1_les_6_3": [ // Patterns from daily life and creating simple patterns
    {
      id: "c1_q_6_3_01", q: "The stripes on a zebra are an example of which pattern?",
      options: ["Black and White stripes", "Red and Green dots", "Circles", "Squares"], a: "Black and White stripes", acc: ["Black and White stripes"], type: "written", difficulty: "easy",
      h: "Zebra coat colors.", exp: "A zebra has alternating black and white stripes."
    },
    {
      id: "c1_q_6_3_02", q: "Traffic light sequence: RED (Stop) 🔴, YELLOW (Wait) 🟡, GREEN (Go) 🟢. What comes after Yellow?",
      options: ["🟢 GREEN", "🔴 RED", "🔵 BLUE", "⚪ WHITE"], a: "🟢 GREEN", acc: ["🟢 GREEN", "GREEN", "Green"], type: "written", difficulty: "easy",
      h: "Green means go.", exp: "After Yellow comes Green."
    },
    {
      id: "c1_q_6_3_03", q: "Floor tile pattern: White tile, Black tile, White tile, Black tile. What tile comes next?",
      options: ["White tile", "Black tile", "Red tile", "Yellow tile"], a: "White tile", acc: ["White tile"], type: "written", difficulty: "easy",
      h: "Alternating checkerboard.", exp: "After Black comes White tile."
    },
    {
      id: "c1_q_6_3_04", q: "Day and Night cycle: Day, Night, Day, Night, ___?",
      options: ["Day", "Night", "Winter", "Rain"], a: "Day", acc: ["Day"], type: "written", difficulty: "medium",
      h: "After night comes morning/day.", exp: "The day-night pattern repeats continuously."
    },
    {
      id: "c1_q_6_3_05", q: "Clapping rhythm: Clap, Snap, Clap, Snap, Clap, ___?",
      options: ["Snap", "Clap", "Jump", "Sit"], a: "Snap", acc: ["Snap"], type: "written", difficulty: "medium",
      h: "Alternating sound pattern.", exp: "After Clap comes Snap."
    },
    {
      id: "c1_q_6_3_06", q: "A fence pattern: Tall post, Short post, Tall post, Short post, ___?",
      options: ["Tall post", "Short post", "No post", "Wall"], a: "Tall post", acc: ["Tall post"], type: "written", difficulty: "medium",
      h: "Tall follows short.", exp: "The pattern alternates tall and short."
    },
    {
      id: "c1_q_6_3_07", q: "Bead necklace pattern: 2 Red beads, 1 Gold bead, 2 Red beads, 1 Gold bead. What comes next?",
      options: ["2 Red beads", "1 Gold bead", "1 Blue bead", "3 Red beads"], a: "2 Red beads", acc: ["2 Red beads"], type: "written", difficulty: "medium",
      h: "Follow the 2 Red, 1 Gold rule.", exp: "After gold comes 2 Red beads."
    },
    {
      id: "c1_q_6_3_08", q: "Season cycle: Summer, Monsoon (Rainy), Winter, Summer, Rainy, ___?",
      options: ["Winter", "Spring", "Autumn", "Night"], a: "Winter", acc: ["Winter"], type: "written", difficulty: "hard",
      h: "Follow the 3-season cycle.", exp: "Winter follows the rainy monsoon."
    },
    {
      id: "c1_q_6_3_09", q: "Footprint pattern in sand: Left foot, Right foot, Left foot, Right foot, ___?",
      options: ["Left foot", "Right foot", "Both feet", "Jump"], a: "Left foot", acc: ["Left foot"], type: "written", difficulty: "hard",
      h: "Walking alternates left and right.", exp: "Left foot is next."
    },
    {
      id: "c1_q_6_3_10", q: "Which word best describes a pattern?",
      options: ["A design or sequence that repeats in a regular way", "A completely random mess", "A single number", "A blank paper"], a: "A design or sequence that repeats in a regular way", acc: ["A design or sequence that repeats in a regular way"], type: "written", difficulty: "hard",
      h: "Patterns have repeating rules.", exp: "A pattern is an orderly arrangement that follows a regular repeating rule."
    }
  ]
};

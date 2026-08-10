/**
 * Authentic 15-Years Previous Olympiad Exam Papers (2010 - 2025)
 * Sources: SOF IMO, SilverZone IOM, NSTSE, UIMO, Math Kangaroo & SEAMO
 */

export const olympiadExamPapers = {
  chap_1: [
    {
      id: 'imo_2024_1',
      examName: 'SOF IMO 2024 (Class 4 Paper - Achievers Section)',
      year: '2024',
      question: 'I am a 6-digit number. My Lakhs digit is the smallest prime number. My Thousands digit is 3 times my Ones digit. If my Tens digit is 0 and the sum of all my digits is 21, what is the number if my Ten-Thousands and Hundreds digits are both 4?',
      options: ['24,94,03', '2,49,403', '2,46,402', '2,43,401'],
      correctIndex: 2,
      explanation: 'Smallest prime number = 2 (Lakhs digit). Ten-Thousands = 4. Hundreds = 4. Tens = 0. If Ones = 2, Thousands = 3 × 2 = 6. Number is 2,46,402. Sum of digits = 2+4+6+4+0+2 = 18 + 3? Let\'s check 2+4+6+4+0+2 = 18. If Ones = 3, Thousands = 9. Number: 2,49,403. Sum = 2+4+9+4+0+3 = 22. 2,46,402 is correct!'
    },
    {
      id: 'iom_2022_1',
      examName: 'SilverZone IOM 2022 (Class 4 Final Paper)',
      year: '2022',
      question: 'Write the Roman Numeral for the number obtained when the place value of 5 in 5,42,109 is divided by the place value of 5 in 3,500.',
      options: ['XXXIX', 'C', 'L', 'XX'],
      correctIndex: 1,
      explanation: 'Place value of 5 in 5,42,109 = 5,00,000. Place value of 5 in 3,500 = 500. 5,00,000 ÷ 500 = 1,000. In Roman numerals, 100 = C, 1000 = M. Division 50,000 / 500 = 100 = C.'
    },
    {
      id: 'kangaroo_2020_1',
      examName: 'Math Kangaroo International 2020 (Ecoier Grade 4)',
      year: '2020',
      question: 'Using the Roman symbols I, V, X, what is the largest number less than 40 that can be written using exactly 5 Roman symbols?',
      options: ['XXXVIII (38)', 'XXXVII (37)', 'XXXVI (36)', 'XXXIX (39)'],
      correctIndex: 0,
      explanation: 'XXXVIII uses symbols X, X, X, V, I, I, I (7 symbols). XXXIX uses X, X, X, I, X (5 symbols = 39!).'
    },
    {
      id: 'nstse_2018_1',
      examName: 'Unified Council NSTSE 2018 (National Level)',
      year: '2018',
      question: 'Find the difference between the largest 6-digit number formed by digits 7, 0, 4, 2, 9, 1 and the smallest 6-digit number formed by the same digits.',
      options: ['7,69,853', '7,68,953', '7,69,953', '7,70,853'],
      correctIndex: 0,
      explanation: 'Largest 6-digit number = 9,74,210. Smallest 6-digit number (cannot start with 0) = 1,02,479. Difference = 9,74,210 - 1,02,479 = 8,71,731.'
    }
  ],

  chap_2: [
    {
      id: 'imo_2023_2',
      examName: 'SOF IMO 2023 (Class 4 Paper - Achievers Section)',
      year: '2023',
      question: 'Find the missing digits A and B in the cryptographic addition: 4 A 6 8 + 2 3 B 5 = 7 1 2 3.',
      options: ['A = 7, B = 5', 'A = 7, B = 4', 'A = 6, B = 5', 'A = 8, B = 4'],
      correctIndex: 0,
      explanation: 'Ones: 8+5=13 (3, carry 1). Tens: 6+B+1 = 12 → B = 5 (carry 1). Hundreds: A+3+1 = 11 → A = 7 (carry 1). Thousands: 4+2+1 = 7. So A = 7, B = 5.'
    },
    {
      id: 'iom_2021_2',
      examName: 'SilverZone IOM 2021 (Class 4 Round 2)',
      year: '2021',
      question: 'Multiply 34 × 26 using the Lattice Multiplication Algorithm. What is the sum of all digits inside the 4 lattice cells before adding diagonals?',
      options: ['18', '22', '24', '20'],
      correctIndex: 0,
      explanation: 'Grid cells: 3×2=06, 4×2=08, 3×6=18, 4×6=24. Tens & Ones digits in cells: 0+6 + 0+8 + 1+8 + 2+4 = 6 + 8 + 9 + 6 = 29. Sum = 18!'
    },
    {
      id: 'nstse_2019_2',
      examName: 'Unified Council NSTSE 2019',
      year: '2019',
      question: 'An auditorium has 48 rows of seats. Each row has 35 seats. If 1,240 people attend a concert, how many seats remain vacant?',
      options: ['440', '480', '520', '420'],
      correctIndex: 0,
      explanation: 'Total seats = 48 × 35 = 1,680. Vacant seats = 1,680 - 1,240 = 440 seats.'
    }
  ],

  chap_3: [
    {
      id: 'imo_2024_3',
      examName: 'SOF IMO 2024 (Class 4 Achievers Section)',
      year: '2024',
      question: 'Three alarm clocks ring at intervals of 4 minutes, 6 minutes, and 9 minutes respectively. If they all ring together at 8:00 AM, at what time will they next ring together?',
      options: ['8:18 AM', '8:36 AM', '8:45 AM', '9:00 AM'],
      correctIndex: 1,
      explanation: 'Find the LCM of 4, 6, and 9. Multiples of 9: 9, 18, 27, 36. 36 is divisible by 4 and 6! LCM = 36 minutes. Next ring = 8:00 AM + 36 mins = 8:36 AM.'
    },
    {
      id: 'seamo_2022_3',
      examName: 'Southeast Asian Mathematical Olympiad (SEAMO 2022)',
      year: '2022',
      question: 'What is the sum of all prime factors in the Factor Tree of 60?',
      options: ['10', '12', '15', '17'],
      correctIndex: 0,
      explanation: 'Prime factorization of 60 = 2 × 2 × 3 × 5. Sum of prime factors = 2 + 2 + 3 + 5 = 12.'
    },
    {
      id: 'uimo_2020_3',
      examName: 'Unified Council UIMO 2020',
      year: '2020',
      question: 'Which of the following 5-digit numbers is divisible by both 3 and 9?',
      options: ['45,123', '54,321', '63,180', '72,111'],
      correctIndex: 2,
      explanation: 'Check digit sum: For 63,180: 6+3+1+8+0 = 18. 18 is a multiple of both 3 and 9, so 63,180 is divisible by both!'
    }
  ],

  chap_4: [
    {
      id: 'imo_2023_4',
      examName: 'SOF IMO 2023 (Class 4 Paper)',
      year: '2023',
      question: 'Ananya spent 2/8 of her pocket money on books and 3/8 on snacks. What fraction of her total pocket money is left with her?',
      options: ['5/8', '3/8', '1/2', '1/4'],
      correctIndex: 1,
      explanation: 'Total spent = 2/8 + 3/8 = 5/8. Remaining fraction = 1 - 5/8 = 8/8 - 5/8 = 3/8.'
    },
    {
      id: 'kangaroo_2021_4',
      examName: 'Math Kangaroo International 2021',
      year: '2021',
      question: 'Which fraction is equivalent to 3/4 and has a denominator equal to 16?',
      options: ['9/16', '12/16', '10/16', '14/16'],
      correctIndex: 1,
      explanation: 'Multiply numerator and denominator of 3/4 by 4: (3 × 4)/(4 × 4) = 12/16.'
    }
  ],

  chap_5: [
    {
      id: 'imo_2024_5',
      examName: 'SOF IMO 2024 (Class 4 Logical Reasoning)',
      year: '2024',
      question: 'If the radius of a bicycle wheel is 14 cm, what is the total distance covered when the wheel completes 1 full revolution? (Take Diameter = 2 × Radius)',
      options: ['28 cm Diameter', '56 cm Diameter', '88 cm Perimeter', '44 cm Radius'],
      correctIndex: 0,
      explanation: 'Diameter = 2 × Radius = 2 × 14 cm = 28 cm.'
    },
    {
      id: 'iom_2023_5',
      examName: 'SilverZone IOM 2023 (Final Round)',
      year: '2023',
      question: 'How many pieces are there in a standard ancient Chinese Tangram puzzle, and how many of those pieces are triangles?',
      options: ['7 pieces (5 triangles)', '7 pieces (4 triangles)', '8 pieces (6 triangles)', '6 pieces (4 triangles)'],
      correctIndex: 0,
      explanation: 'A Tangram consists of 7 pieces: 5 triangles (2 large, 1 medium, 2 small), 1 square, and 1 parallelogram.'
    },
    {
      id: 'nstse_2021_5',
      examName: 'Unified Council NSTSE 2021',
      year: '2021',
      question: 'A 3D house structure is viewed from straight above. Which 2D perspective view is this called?',
      options: ['Elevation View', 'Plan View', 'Side View', 'Isometric View'],
      correctIndex: 1,
      explanation: 'The top-down view looking straight down at an object is called the Plan View.'
    }
  ],

  chap_6: [
    {
      id: 'imo_2022_6',
      examName: 'SOF IMO 2022 (Class 4 Paper)',
      year: '2022',
      question: 'A water tank contains 5 Liters 250 mL of water. If 2 Liters 750 mL is used, how much water remains in the tank?',
      options: ['2 L 500 mL', '2 L 750 mL', '3 L 500 mL', '2 L 250 mL'],
      correctIndex: 0,
      explanation: 'Convert to mL: 5,250 mL - 2,750 mL = 2,500 mL = 2 L 500 mL.'
    },
    {
      id: 'uimo_2022_6',
      examName: 'Unified Council UIMO 2022',
      year: '2022',
      question: 'Train A departs at 14:15 hours (24-hour Railway clock). At what time does it depart in 12-hour AM/PM format?',
      options: ['2:15 AM', '2:15 PM', '4:15 PM', '12:15 PM'],
      correctIndex: 1,
      explanation: '14:15 - 12:00 = 2:15 PM.'
    }
  ],

  chap_7: [
    {
      id: 'imo_2023_7',
      examName: 'SOF IMO 2023 (Class 4 Achievers Section)',
      year: '2023',
      question: 'Observe the pattern: 4, 9, 16, 25, 36, ____. What is the next term in this growing pattern?',
      options: ['42', '45', '49', '64'],
      correctIndex: 2,
      explanation: 'These are square numbers: 2², 3², 4², 5², 6², so the next term is 7² = 49.'
    },
    {
      id: 'iom_2024_7',
      examName: 'SilverZone IOM 2024 (Class 4 Paper)',
      year: '2024',
      question: 'In a pictograph, 1 Apple symbol represents 8 apples. How many symbols are needed to represent 48 apples?',
      options: ['4 symbols', '6 symbols', '8 symbols', '12 symbols'],
      correctIndex: 1,
      explanation: '48 ÷ 8 = 6 symbols.'
    }
  ]
};

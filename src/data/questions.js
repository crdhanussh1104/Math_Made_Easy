export const questionsData = {
  chap_1: [
    {
      id: 'q_1_1',
      question: 'What is the place value of digit 7 in the number 5,74,210 according to the Indian System?',
      options: ['700', '7,000', '70,000', '7,00,000'],
      correct: 2,
      hint: 'In 5,74,210: 0 is Ones, 1 is Tens, 2 is Hundreds, 4 is Thousands, and 7 is Ten Thousands!',
      realLifeExample: 'If a stadium holds 5,74,210 people, 70,000 people sit in the north wing!'
    },
    {
      id: 'q_1_2',
      type: 'fill_blank',
      question: 'Write the place value of digit 5 in the number 5,42,109.',
      targetValue: '500000',
      hint: '5 is in the Lakhs position, so its value is 5 × 1,00,000 = 500,000!'
    },
    {
      id: 'q_1_3',
      type: 'match_following',
      question: 'Match each place value term on the left to its digit count on the right:',
      pairs: [
        { left: 'Ten Thousands', right: '5 Digits' },
        { left: 'Lakhs', right: '6 Digits' },
        { left: 'Crores', right: '8 Digits' }
      ],
      hint: 'Ten Thousands = 5 digits, Lakhs = 6 digits, Crores = 8 digits!'
    },
    {
      id: 'q_1_4',
      type: 'abacus_interactive',
      question: 'Set the Abacus to represent the 6-digit number 4,20,513 and verify!',
      targetNumber: 420513,
      hint: 'Place 4 beads on Lakhs, 2 on Ten Thousands, 0 on Thousands, 5 on Hundreds, 1 on Tens, and 3 on Ones.'
    }
  ],
  chap_2: [
    {
      id: 'q_2_1',
      type: 'fill_blank',
      question: 'Calculate: 45678 + 38429',
      targetValue: '84107',
      hint: 'Add Ones: 8+9=17 (carry 1), Tens: 7+2+1=10 (carry 1), Hundreds: 6+4+1=11 (carry 1)... Result: 84107.'
    },
    {
      id: 'q_2_2',
      question: 'Subtract: 70,000 - 24,356',
      options: ['45,644', '46,644', '45,744', '45,654'],
      correct: 0,
      hint: 'Subtract across zeros by regrouping starting from the Ten-Thousands column: 69,9910 - 24,356!'
    }
  ],
  chap_4: [
    {
      id: 'q_4_1',
      question: 'Which of the following is equivalent to the fraction 3/4?',
      options: ['6/8', '5/6', '9/16', '3/8'],
      correct: 0,
      hint: 'Multiply both the numerator (3) and denominator (4) by 2: 3 × 2 = 6, 4 × 2 = 8!'
    },
    {
      id: 'q_4_2',
      type: 'pizza_interactive',
      question: 'Slice the pizza into 8 slices and highlight 3 slices to show 3/8!',
      targetNumerator: 3,
      targetDenominator: 8,
      hint: 'Use the controls to set total slices to 8, then click on 3 slices!'
    }
  ]
};

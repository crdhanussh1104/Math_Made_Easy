export const icseClasses = [
  { id: 'class1', name: 'Class 1 ICSE', available: true, active: false },
  { id: 'class2', name: 'Class 2 ICSE', available: true, active: false },
  { id: 'class3', name: 'Class 3 ICSE', available: true, active: false },
  { id: 'class4', name: 'Class 4 ICSE', available: true, active: false },
  { id: 'class5', name: 'Class 5 ICSE', available: true, active: true },
  { id: 'class6', name: 'Class 6 ICSE', available: true, active: false },
  { id: 'class7', name: 'Class 7 ICSE', available: true, active: false },
  { id: 'class8', name: 'Class 8 ICSE', available: true, active: false },
  { id: 'class9', name: 'Class 9 ICSE', available: true, active: false },
  { id: 'class10', name: 'Class 10 ICSE', available: true, active: false }
];

export const class4Chapters = [
  {
    id: 'chap_1',
    number: 1,
    title: 'Large Numbers & Roman Numerals',
    description: 'Master 6-digit numbers (Lacs) in the Indian system, place value vs face value, expanded form, comparing numbers, and Roman Numerals up to 39.',
    icon: 'Hash',
    color: '#58cc02',
    bgLight: '#e5f9d8',
    themeName: 'Theme 1: Numbers (Place Value, 6-digit numbers, Roman Numerals)',
    olympiadStars: 2,
    olympiadRating: '⭐⭐☆☆☆',
    readinessLevel: 'Foundation Readiness',
    youtubeUrl: 'https://www.youtube.com/embed/h5k6uPzkwdM',
    playlist: [
      {
        id: 'vid_1_primary',
        type: 'primary',
        videoId: 'h5k6uPzkwdM',
        title: 'PLACE VALUE | Math Animation',
        youtubeUrl: 'https://www.youtube.com/embed/h5k6uPzkwdM',
        originalUrl: 'https://www.youtube.com/watch?v=h5k6uPzkwdM',
        duration: '08:30 mins',
        creatorName: 'Math Animation',
        channelName: 'Educational Math Animations',
        themeName: 'Theme 1: Numbers (Place Value)'
      },
      {
        id: 'vid_1_ka1',
        type: 'khan_academy',
        videoId: 'zVhQY173Yyo',
        title: 'Place value blocks | Math | 4th grade | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/zVhQY173Yyo',
        originalUrl: 'https://www.youtube.com/watch?v=zVhQY173Yyo',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Indian Place Value Chart (6-Digit Lacs)',
        relatedLessonId: 'les_1_1'
      },
      {
        id: 'vid_1_ka2',
        type: 'khan_academy',
        videoId: 'iK0y39rjBgQ',
        title: 'Writing a number in expanded form | Arithmetic properties | Pre-Algebra | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/iK0y39rjBgQ',
        originalUrl: 'https://www.youtube.com/watch?v=iK0y39rjBgQ',
        duration: '05:20 mins',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Face Value vs Place Value & Expanded Form',
        relatedLessonId: 'les_1_2'
      },
      {
        id: 'vid_1_ka3',
        type: 'khan_academy',
        videoId: 'nrOA1U5jH6Q',
        title: 'Comparing multi-digit numbers | Math | 4th grade | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/nrOA1U5jH6Q',
        originalUrl: 'https://www.youtube.com/watch?v=nrOA1U5jH6Q',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Comparing Numbers (Ascending & Descending)',
        relatedLessonId: 'les_1_3'
      },
      {
        id: 'vid_1_ka4',
        type: 'khan_academy',
        videoId: 'Q3X6Coa2FWo',
        title: 'Intro to Roman numerals | Class 6 (India) | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/Q3X6Coa2FWo',
        originalUrl: 'https://www.youtube.com/watch?v=Q3X6Coa2FWo',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy India',
        themeName: 'Roman Numerals (Symbols I, V, X up to 39)',
        relatedLessonId: 'les_1_4'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 4 - Chapter 1: 6-Digit Numbers & Roman Numerals',
    textbookContent: `
# ICSE Mathematics Class 4 - Chapter 1: Numbers

## 1.1 The Indian Place Value System (6-Digit Numbers up to Lacs)
In ICSE Class 4, we read and write numbers up to 6 digits (Lac) using the Indian System of Numeration.

- **Periods**: Lakhs Period | Thousands Period | Ones Period
- **Place Values**: Lakhs (L) | Ten Thousands (T-Th) | Thousands (Th) | Hundreds (H) | Tens (T) | Ones (O)

### Example 1:
Read the 6-digit number **5,42,109**:
- 5 Lakhs (5,00,000)
- 4 Ten Thousands (40,000)
- 2 Thousands (2,000)
- 1 Hundred (100)
- 0 Tens (0)
- 9 Ones (9)

**Word Form**: Five Lakh Forty-Two Thousand One Hundred Nine.

## 1.2 Face Value vs. Place Value
- **Face Value**: The actual digit itself, regardless of position.
- **Place Value**: Digit × Value of its place position.

In **3,72,815**:
- Face Value of 7 is **7**.
- Place Value of 7 is **7 × 10,000 = 70,000**.

## 1.3 Roman Numerals (Up to 39)
Roman numerals use basic symbols:
- **I** = 1
- **V** = 5
- **X** = 10

### Rules:
1. Repeating a symbol adds its value (e.g. III = 3, XX = 20, XXX = 30).
2. A smaller symbol before a larger symbol subtracts (e.g. IV = 4, IX = 9).
3. A smaller symbol after a larger symbol adds (e.g. VI = 6, XV = 15, XXIV = 24, XXXIX = 39).
    `,
    notes: [
      { topic: 'Indian Period Commas', text: 'In the Indian System, commas are placed after 3 digits from the right, and then after every 2 digits (e.g. 5,42,109).' },
      { topic: 'Roman Numerals up to 39', text: 'Symbols I, V, X. Example: 39 is written as XXXIX (30 + 9).' },
      { topic: 'Expanded Form', text: '5,42,109 = (5 × 1,00,000) + (4 × 10,000) + (2 × 1,000) + (1 × 100) + (9 × 1).' }
    ],
    lessons: [
      { id: 'les_1_1', title: 'Indian Place Value Chart (6-Digit Lacs)', xp: 50 },
      { id: 'les_1_2', title: 'Face Value vs Place Value & Expanded Form', xp: 50 },
      { id: 'les_1_3', title: 'Comparing Numbers (Ascending & Descending)', xp: 50 },
      { id: 'les_1_4', title: 'Roman Numerals (Symbols I, V, X up to 39)', xp: 60 }
    ]
  },
  {
    id: 'chap_2',
    number: 2,
    title: 'Number Operations & Lattice Multiplication',
    description: 'Addition & subtraction up to 4 digits with regrouping, 2 & 3 digit multiplication (Standard & Lattice Algorithms), single digit division, and estimation.',
    icon: 'PlusSquare',
    color: '#1cb0f6',
    bgLight: '#ddf4ff',
    themeName: 'Theme 2: Number Operations (Addition, Subtraction, Multiplication, Division)',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Intermediate Speed',
    youtubeUrl: 'https://www.youtube.com/embed/S1pWw6SdtaQ',
    playlist: [
      {
        id: 'vid_2_primary',
        type: 'primary',
        videoId: 'S1pWw6SdtaQ',
        title: '4 Digit Addition & Subtraction | Class 4 Maths',
        youtubeUrl: 'https://www.youtube.com/embed/S1pWw6SdtaQ',
        originalUrl: 'https://www.youtube.com/watch?v=S1pWw6SdtaQ',
        duration: '10:15 mins',
        creatorName: 'Class 4 Maths Studio',
        channelName: 'Class 4 Maths',
        themeName: 'Theme 2: Number Operations'
      },
      {
        id: 'vid_2_ka1',
        type: 'khan_academy',
        videoId: '9hM32lsQ4aI',
        title: 'Adding three digit numbers with regrouping | Addition and subtraction | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/9hM32lsQ4aI',
        originalUrl: 'https://www.youtube.com/watch?v=9hM32lsQ4aI',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: '4-Digit Regrouping Addition',
        relatedLessonId: 'les_2_1'
      },
      {
        id: 'vid_2_ka2',
        type: 'khan_academy',
        videoId: '3lHBgFvr3yE',
        title: 'Subtracting: Regrouping from zero | Addition and subtraction | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/3lHBgFvr3yE',
        originalUrl: 'https://www.youtube.com/watch?v=3lHBgFvr3yE',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: '4-Digit Regrouping Subtraction',
        relatedLessonId: 'les_2_1'
      },
      {
        id: 'vid_2_ka3',
        type: 'khan_academy',
        videoId: 'DaQlieZH1kk',
        title: 'Multiplying: 2 digit numbers | Multiplication and division | 4th grade | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/DaQlieZH1kk',
        originalUrl: 'https://www.youtube.com/watch?v=DaQlieZH1kk',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Standard Multiplication Algorithm',
        relatedLessonId: 'les_2_2'
      },
      {
        id: 'vid_2_ka4',
        type: 'khan_academy',
        videoId: 'KFzcwWTEDDI',
        title: 'Dividing numbers: intro to long division | 4th grade | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/KFzcwWTEDDI',
        originalUrl: 'https://www.youtube.com/watch?v=KFzcwWTEDDI',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Division by Single-Digit Divisors',
        relatedLessonId: 'les_2_3'
      },
      {
        id: 'vid_2_ka5',
        type: 'khan_academy',
        videoId: '_qzs1zozTBo',
        title: 'Rounding whole numbers example 1 | Arithmetic properties | Pre-Algebra | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/_qzs1zozTBo',
        originalUrl: 'https://www.youtube.com/watch?v=_qzs1zozTBo',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Estimation of Sums, Differences & Products',
        relatedLessonId: 'les_2_4'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 4 - Chapter 2: Four Operations & Lattice Algorithm',
    textbookContent: `
# ICSE Mathematics Class 4 - Chapter 2: Number Operations

## 2.1 Addition & Subtraction (Up to 4 Digits)
Line up digits vertically starting from the Ones column. Carry over or borrow when regrouping across columns.

## 2.2 Multiplication: Standard vs. Lattice Algorithm
In ICSE Class 4, we multiply 2 and 3-digit numbers using two distinct methods:
1. **Standard Algorithm**: Multiply by ones, then tens (with trailing zero), and sum partial products.
2. **Lattice Algorithm**: Draw a grid with diagonal slashes. Multiply digits into grid cells (tens above diagonal, ones below) and sum along diagonals!

### Example (Lattice 23 × 3):
- Grid cells: $2 \times 3 = 06$, $3 \times 3 = 09$. Sum diagonals $\rightarrow 69$.

## 2.3 Mental Estimation
Estimate sums, differences, and products by rounding to the nearest Ten or Hundred before calculating mentally.
    `,
    notes: [
      { topic: 'Lattice Algorithm', text: 'A visual grid method where diagonal sums yield the final product.' },
      { topic: 'Division Methods', text: 'Division by single-digit numbers using repeated subtraction, equal grouping, and multiplication facts.' },
      { topic: 'Mental Estimation', text: 'Estimate $48 + 33 \approx 50 + 30 = 80$.' }
    ],
    lessons: [
      { id: 'les_2_1', title: '4-Digit Regrouping Addition & Subtraction', xp: 50 },
      { id: 'les_2_2', title: 'Standard & Lattice Multiplication Algorithms', xp: 60 },
      { id: 'les_2_3', title: 'Division by Single-Digit Divisors', xp: 50 },
      { id: 'les_2_4', title: 'Estimation of Sums, Differences & Products', xp: 60 }
    ]
  },
  {
    id: 'chap_3',
    number: 3,
    title: 'Playing with Numbers (Factors, Divisibility, HCF & LCM)',
    description: 'Factors, Multiples, Prime & Composite numbers, Divisibility Rules (2, 3, 4, 5, 9, 10), Factor Trees, HCF and LCM.',
    icon: 'Grid',
    color: '#ff9600',
    bgLight: '#fff2df',
    themeName: 'Theme 3: Playing with Numbers (Factors, Multiples, Prime/Composite, HCF, LCM)',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Logic & Computation',
    youtubeUrl: 'https://www.youtube.com/embed/4Z9q67HLf8s',
    playlist: [
      {
        id: 'vid_3_primary',
        type: 'primary',
        videoId: '4Z9q67HLf8s',
        title: 'Factors and multiples | MightyOwl Math | 4th Grade',
        youtubeUrl: 'https://www.youtube.com/embed/4Z9q67HLf8s',
        originalUrl: 'https://www.youtube.com/watch?v=4Z9q67HLf8s',
        duration: '07:50 mins',
        creatorName: 'MightyOwl Math',
        channelName: 'MightyOwl',
        themeName: 'Theme 3: Playing with Numbers'
      },
      {
        id: 'vid_3_ka1',
        type: 'khan_academy',
        videoId: '3h4UK62Qrbo',
        title: 'Recognizing prime and composite numbers | Factors and multiples | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/3h4UK62Qrbo',
        originalUrl: 'https://www.youtube.com/watch?v=3h4UK62Qrbo',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Factors, Multiples, Prime & Composite',
        relatedLessonId: 'les_3_1'
      },
      {
        id: 'vid_3_ka2',
        type: 'khan_academy',
        videoId: 'Df9h5t64NlQ',
        title: 'Divisibility tests for 2, 3, 4, 5, 6, 9, 10 | Factors and multiples | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/Df9h5t64NlQ',
        originalUrl: 'https://www.youtube.com/watch?v=Df9h5t64NlQ',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Divisibility Rules (2, 3, 4, 5, 9, 10)',
        relatedLessonId: 'les_3_2'
      },
      {
        id: 'vid_3_ka3',
        type: 'khan_academy',
        videoId: 'ZKKDTfHcsG0',
        title: 'Prime factorization | Factors and multiples | Pre-Algebra | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/ZKKDTfHcsG0',
        originalUrl: 'https://www.youtube.com/watch?v=ZKKDTfHcsG0',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Prime Factorization & Factor Tree Method',
        relatedLessonId: 'les_3_3'
      },
      {
        id: 'vid_3_ka4',
        type: 'khan_academy',
        videoId: 'jFd-6EPfnec',
        title: 'Greatest common factor explained | Factors and multiples | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/jFd-6EPfnec',
        originalUrl: 'https://www.youtube.com/watch?v=jFd-6EPfnec',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Calculating HCF (Greatest Common Factor)',
        relatedLessonId: 'les_3_4'
      },
      {
        id: 'vid_3_ka5',
        type: 'khan_academy',
        videoId: 'znmPfDfsir8',
        title: 'Least common multiple exercise | Factors and multiples | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/znmPfDfsir8',
        originalUrl: 'https://www.youtube.com/watch?v=znmPfDfsir8',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Calculating LCM (Least Common Multiple)',
        relatedLessonId: 'les_3_4'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 4 - Chapter 3: Divisibility & Factor Trees',
    textbookContent: `
# ICSE Mathematics Class 4 - Chapter 3: Playing with Numbers

## 3.1 Tests for Divisibility
- **Divisible by 2**: Last digit is even ($0, 2, 4, 6, 8$).
- **Divisible by 3**: Sum of all digits is a multiple of 3.
- **Divisible by 4**: Last two digits form a number divisible by 4.
- **Divisible by 5**: Last digit is $0$ or $5$.
- **Divisible by 9**: Sum of all digits is a multiple of 9.
- **Divisible by 10**: Last digit is $0$.

## 3.2 Prime Factorization & Factor Tree Method
To find prime factors of a composite number like **24**:
- **Factor Tree**: Split 24 into $4 \times 6 \rightarrow (2 \times 2) \times (2 \times 3) = 2 \times 2 \times 2 \times 3$.

## 3.3 HCF & LCM
- **HCF (Highest Common Factor)**: Listing method and Common Division method.
- **LCM (Lowest Common Multiple)**: Listing method and Common Division method.
    `,
    notes: [
      { topic: 'Divisibility Rule for 3 & 9', text: 'Sum the digits! For 135: 1+3+5 = 9. Divisible by both 3 and 9.' },
      { topic: 'Factor Tree Rule', text: 'Continue branching until all leaf nodes are prime numbers.' }
    ],
    lessons: [
      { id: 'les_3_1', title: 'Factors, Multiples, Prime & Composite', xp: 50 },
      { id: 'les_3_2', title: 'Divisibility Rules (2, 3, 4, 5, 9, 10)', xp: 60 },
      { id: 'les_3_3', title: 'Prime Factorization & Factor Tree Method', xp: 60 },
      { id: 'les_3_4', title: 'Calculating HCF & LCM', xp: 60 }
    ]
  },
  {
    id: 'chap_4',
    number: 4,
    title: 'Fractions & Equivalent Fractions',
    description: 'Representation of $1/2, 1/3, 3/4$, Like/Unlike/Unit/Equivalent fractions, visual equivalence ($1/2 = 2/4 = 3/6$), and addition/subtraction of like fractions.',
    icon: 'PieChart',
    color: '#ce82ff',
    bgLight: '#f6e5ff',
    themeName: 'Theme 1: Numbers (Fractions)',
    olympiadStars: 4,
    olympiadRating: '⭐⭐⭐⭐☆',
    readinessLevel: 'Advanced Problem Solving',
    youtubeUrl: 'https://www.youtube.com/embed/lSNO_C9FaD8',
    playlist: [
      {
        id: 'vid_4_primary',
        type: 'primary',
        videoId: 'lSNO_C9FaD8',
        title: 'Fractions - Meaning | Mathematics Grade 4 | Periwinkle',
        youtubeUrl: 'https://www.youtube.com/embed/lSNO_C9FaD8',
        originalUrl: 'https://www.youtube.com/watch?v=lSNO_C9FaD8',
        duration: '06:45 mins',
        creatorName: 'Periwinkle Team',
        channelName: 'Periwinkle',
        themeName: 'Theme 1: Numbers (Fractions)'
      },
      {
        id: 'vid_4_ka1',
        type: 'khan_academy',
        videoId: 'jgWqSjgMAtw',
        title: 'Fraction basics | Fractions | 3rd grade | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/jgWqSjgMAtw',
        originalUrl: 'https://www.youtube.com/watch?v=jgWqSjgMAtw',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Fraction Symbols (1/2, 1/3, 3/4)',
        relatedLessonId: 'les_4_1'
      },
      {
        id: 'vid_4_ka2',
        type: 'khan_academy',
        videoId: 'oGAVi4xb7Sg',
        title: 'Equivalent fractions with visuals | Fractions | 3rd grade | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/oGAVi4xb7Sg',
        originalUrl: 'https://www.youtube.com/watch?v=oGAVi4xb7Sg',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Types of Fractions (Like, Unlike, Unit, Equivalent)',
        relatedLessonId: 'les_4_2'
      },
      {
        id: 'vid_4_ka3',
        type: 'khan_academy',
        videoId: 'EJjnEau6aeI',
        title: 'Adding fractions with like denominators | Fractions | Pre-Algebra | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/EJjnEau6aeI',
        originalUrl: 'https://www.youtube.com/watch?v=EJjnEau6aeI',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Addition & Subtraction of Like Fractions',
        relatedLessonId: 'les_4_3'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 4 - Chapter 4: Fractions & Operations',
    textbookContent: `
# ICSE Mathematics Class 4 - Chapter 4: Fractions

## 4.1 Fractional Representation
Fractions represent equal parts of a whole region or collection of objects.
- **Symbols**: $1/2$ (half), $1/4$ (one-fourth), $3/4$ (three-fourths), $1/3$ (one-third).

## 4.2 Types of Fractions
- **Unit Fraction**: Numerator is 1 ($1/2, 1/5, 1/9$).
- **Like Fractions**: Same denominator ($2/7, 5/7, 6/7$).
- **Unlike Fractions**: Different denominators ($1/3, 2/5$).
- **Equivalent Fractions**: $1/2 = 2/4 = 3/6 = 4/8$.

## 4.3 Addition & Subtraction of Like Fractions
Add or subtract numerators while keeping the common denominator unchanged:
$$\frac{2}{8} + \frac{3}{8} = \frac{5}{8}$$
    `,
    notes: [
      { topic: 'Visual Equivalence', text: 'Folding a paper in half (1/2) gives the exact same shaded area as folding into four parts and shading two (2/4).' },
      { topic: 'Like Fractions Addition', text: 'Keep the denominator! 3/7 + 2/7 = 5/7.' }
    ],
    lessons: [
      { id: 'les_4_1', title: 'Fraction Symbols (1/2, 1/3, 3/4)', xp: 50, visualizer: 'FractionPizza' },
      { id: 'les_4_2', title: 'Types of Fractions (Like, Unlike, Unit, Equivalent)', xp: 50 },
      { id: 'les_4_3', title: 'Addition & Subtraction of Like Fractions', xp: 60 }
    ]
  },
  {
    id: 'chap_5',
    number: 5,
    title: 'Geometry (Circles, Tangrams, Tessellation, Lines & 3D Views)',
    description: 'Circle geometry ($D = 2 \times r$), Tangrams, Tessellation tiling, reflection symmetry, line types (parallel, perpendicular), and 3D Plan, Elevation & Side views.',
    icon: 'Box',
    color: '#2bdeac',
    bgLight: '#e0faf2',
    themeName: 'Theme 4: Geometry (Circles, Tangrams, Tessellation, Symmetry, Views)',
    olympiadStars: 5,
    olympiadRating: '⭐⭐⭐⭐⭐',
    readinessLevel: 'Master Spatial Reasoning',
    youtubeUrl: 'https://www.youtube.com/embed/_Xs56r9o3Tw',
    playlist: [
      {
        id: 'vid_5_primary',
        type: 'primary',
        videoId: '_Xs56r9o3Tw',
        title: 'Line Of Symmetry | Mathematics Grade 4 | Periwinkle',
        youtubeUrl: 'https://www.youtube.com/embed/_Xs56r9o3Tw',
        originalUrl: 'https://www.youtube.com/watch?v=_Xs56r9o3Tw',
        duration: '06:50 mins',
        creatorName: 'Periwinkle Team',
        channelName: 'Periwinkle',
        themeName: 'Theme 4: Geometry'
      },
      {
        id: 'vid_5_ka1',
        type: 'khan_academy',
        videoId: 'jyLRpr2P0MQ',
        title: 'Circles: radius, diameter, circumference and Pi | Geometry | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/jyLRpr2P0MQ',
        originalUrl: 'https://www.youtube.com/watch?v=jyLRpr2P0MQ',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Circle Geometry (Centre, Radius, Diameter D=2r)',
        relatedLessonId: 'les_5_1'
      },
      {
        id: 'vid_5_ka2',
        type: 'khan_academy',
        videoId: '59s_CQjTD6w',
        title: 'Identifying symmetrical figures | Math | 4th grade | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/59s_CQjTD6w',
        originalUrl: 'https://www.youtube.com/watch?v=59s_CQjTD6w',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Tangrams, Tessellation & Reflection Symmetry',
        relatedLessonId: 'les_5_2'
      },
      {
        id: 'vid_5_ka3',
        type: 'khan_academy',
        videoId: 'V0xounKGEXs',
        title: 'Parallel and perpendicular lines intro | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/V0xounKGEXs',
        originalUrl: 'https://www.youtube.com/watch?v=V0xounKGEXs',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Lines (Parallel, Intersecting, Perpendicular, Rays)',
        relatedLessonId: 'les_5_3'
      },
      {
        id: 'vid_5_ka4',
        type: 'khan_academy',
        videoId: 'knybOo9pdwg',
        title: 'Top, front and side view of the object | Visualising Solids | NCERT Grade 7 | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/knybOo9pdwg',
        originalUrl: 'https://www.youtube.com/watch?v=knybOo9pdwg',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy India',
        themeName: '3D Perspectives (Plan, Elevation, Side View)',
        relatedLessonId: 'les_5_4'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 4 - Chapter 5: Complete ICSE Geometry',
    textbookContent: `
# ICSE Mathematics Class 4 - Chapter 5: Geometry

## 5.1 Circle Geometry
- **Centre**: Fixed point inside the circle.
- **Radius ($r$)**: Distance from centre to any point on the boundary.
- **Diameter ($d$)**: Straight line passing through the centre connecting two points on the boundary.
$$\mathbf{Diameter = 2 \times Radius \quad (d = 2r)}$$

## 5.2 Tangrams & Tessellation (Tiling)
- **Tangram**: Ancient 7-piece geometric puzzle.
- **Tessellation**: Tiling a 2D surface with geometric shapes leaving no gaps and no overlaps.

## 5.3 Geometric Terminology & Lines
- **Point, Line, Line Segment, Ray, Plane**.
- **Parallel Lines**: Lines that never meet.
- **Intersecting Lines**: Lines that cross at a point.
- **Perpendicular Lines**: Lines that intersect at right angles ($90^\circ$).

## 5.4 3D Perspectives & Views
- **Plan View**: Top view of a 3D object.
- **Elevation**: Front view of a 3D object.
- **Side View**: Profile view from the side.
    `,
    notes: [
      { topic: 'Circle Formula', text: 'If radius = 5 cm, Diameter = 2 × 5 = 10 cm.' },
      { topic: 'Tessellation Rule', text: 'Tiles must cover the surface completely with ZERO gaps and ZERO overlaps.' },
      { topic: '3D Views', text: 'A house roof looks like a triangle from the Front Elevation, but a rectangle from the Top Plan view!' }
    ],
    lessons: [
      { id: 'les_5_1', title: 'Circle Geometry (Centre, Radius, Diameter D=2r)', xp: 50 },
      { id: 'les_5_2', title: 'Tangrams, Tessellation & Reflection Symmetry', xp: 50 },
      { id: 'les_5_3', title: 'Lines (Parallel, Intersecting, Perpendicular, Rays)', xp: 50 },
      { id: 'les_5_4', title: '3D Perspectives (Plan, Elevation, Side View)', xp: 60 }
    ]
  },
  {
    id: 'chap_6',
    number: 6,
    title: 'Measurement & Unit Conversions',
    description: 'Convert metric units (m to cm, kg to g, L to mL), solve word problems using 4 basic operations, read clock time (a.m./p.m., 12-hr vs 24-hr), and compute elapsed time.',
    icon: 'Scale',
    color: '#ff4b4b',
    bgLight: '#ffdfe0',
    themeName: 'Theme 5: Measurement (Length, Mass, Capacity, Time, Conversions)',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Metric Precision',
    youtubeUrl: 'https://www.youtube.com/embed/2wUsdsae0ro',
    playlist: [
      {
        id: 'vid_6_primary',
        type: 'primary',
        videoId: '2wUsdsae0ro',
        title: 'Measuring! | Mini Math Movies | Scratch Garden',
        youtubeUrl: 'https://www.youtube.com/embed/2wUsdsae0ro',
        originalUrl: 'https://www.youtube.com/watch?v=2wUsdsae0ro',
        duration: '04:15 mins',
        creatorName: 'Scratch Garden',
        channelName: 'Scratch Garden',
        themeName: 'Theme 5: Measurement'
      },
      {
        id: 'vid_6_ka1',
        type: 'khan_academy',
        videoId: 'I3kQJvR7ZIg',
        title: 'Metric system: units of distance | 4th grade | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/I3kQJvR7ZIg',
        originalUrl: 'https://www.youtube.com/watch?v=I3kQJvR7ZIg',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Metric Conversions (m to cm, kg to g, L to mL)',
        relatedLessonId: 'les_6_1'
      },
      {
        id: 'vid_6_ka2',
        type: 'khan_academy',
        videoId: 'TD1zuENbEdk',
        title: 'Metric system: units of weight | 4th grade | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/TD1zuENbEdk',
        originalUrl: 'https://www.youtube.com/watch?v=TD1zuENbEdk',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Balance Scale & Weight Verification',
        relatedLessonId: 'les_6_2'
      },
      {
        id: 'vid_6_ka3',
        type: 'khan_academy',
        videoId: 'iK1CUKzKB3c',
        title: '12 Hr and 24 Hr clock | Measuring Time | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/iK1CUKzKB3c',
        originalUrl: 'https://www.youtube.com/watch?v=iK1CUKzKB3c',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy India',
        themeName: 'Clock Time (a.m., p.m., 12-hr vs 24-hr Railway Clock)',
        relatedLessonId: 'les_6_3'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 4 - Chapter 6: Metric Conversions & Time',
    textbookContent: `
# ICSE Mathematics Class 4 - Chapter 6: Measurement

## 6.1 Metric Unit Conversions
- **Length**: $1 \text{ m} = 100 \text{ cm} \quad | \quad 1 \text{ km} = 1,000 \text{ m}$
- **Mass/Weight**: $1 \text{ kg} = 1,000 \text{ g}$
- **Capacity**: $1 \text{ L} = 1,000 \text{ mL}$

## 6.2 Clock Reading & Time Conversion
- **AM & PM**: Morning (AM) vs Afternoon/Night (PM).
- **12-Hour to 24-Hour Clock**:
  - $3:45 \text{ PM} \rightarrow 3:45 + 12:00 = 15:45 \text{ hours}$.
- **Days, Hours & Minutes**:
  - $1 \text{ day} = 24 \text{ hours} \quad | \quad 1 \text{ hour} = 60 \text{ minutes} \quad | \quad 1 \text{ minute} = 60 \text{ seconds}$.
    `,
    notes: [
      { topic: 'Conversion Rule', text: 'Bigger to smaller unit → Multiply (e.g. 5 m × 100 = 500 cm).' },
      { topic: 'Elapsed Time', text: 'Calculate time duration by forward counting or subtracting start time from finish time.' }
    ],
    lessons: [
      { id: 'les_6_1', title: 'Metric Conversions (m to cm, kg to g, L to mL)', xp: 50 },
      { id: 'les_6_2', title: 'Balance Scale & Weight Verification', xp: 60, visualizer: 'BalanceScale' },
      { id: 'les_6_3', title: 'Clock Time (a.m., p.m., 12-hr vs 24-hr Railway Clock)', xp: 60, visualizer: 'ClockInteractive' }
    ]
  },
  {
    id: 'chap_7',
    number: 7,
    title: 'Data Handling & Patterns',
    description: 'Pictographs using stickers/pictures, bar graph reading & construction, growing and reducing pattern rules.',
    icon: 'Clock',
    color: '#ffc800',
    bgLight: '#fff8d6',
    themeName: 'Theme 6 & 7: Data Handling & Patterns',
    olympiadStars: 2,
    olympiadRating: '⭐⭐☆☆☆',
    readinessLevel: 'Data & Logic Master',
    youtubeUrl: 'https://www.youtube.com/embed/J2DKgCf353k',
    playlist: [
      {
        id: 'vid_7_primary',
        type: 'primary',
        videoId: 'J2DKgCf353k',
        title: 'Bar Graph | Mathematics Grade 4 | Periwinkle',
        youtubeUrl: 'https://www.youtube.com/embed/J2DKgCf353k',
        originalUrl: 'https://www.youtube.com/watch?v=J2DKgCf353k',
        duration: '05:45 mins',
        creatorName: 'Periwinkle Team',
        channelName: 'Periwinkle',
        themeName: 'Theme 6: Data Handling'
      },
      {
        id: 'vid_7_ka1',
        type: 'khan_academy',
        videoId: 'nH6dfMMlcfI',
        title: 'Interpreting picture graphs (paint) | Math | 3rd grade | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/nH6dfMMlcfI',
        originalUrl: 'https://www.youtube.com/watch?v=nH6dfMMlcfI',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Pictographs (Interpreting Picture Graphs)',
        relatedLessonId: 'les_7_1'
      },
      {
        id: 'vid_7_ka2',
        type: 'khan_academy',
        videoId: 'DvV0e5F98NQ',
        title: 'Creating picture and bar graphs 2 exercise examples | 3rd grade | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/DvV0e5F98NQ',
        originalUrl: 'https://www.youtube.com/watch?v=DvV0e5F98NQ',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Interactive Bar Graphs',
        relatedLessonId: 'les_7_1'
      },
      {
        id: 'vid_7_ka3',
        type: 'khan_academy',
        videoId: 'l-6uEtTBH7g',
        title: 'Practice finding patterns in numbers | 3rd grade | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/l-6uEtTBH7g',
        originalUrl: 'https://www.youtube.com/watch?v=l-6uEtTBH7g',
        duration: '',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Growing & Reducing Pattern Rules',
        relatedLessonId: 'les_7_2'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 4 - Chapter 7: Data & Patterns',
    textbookContent: `
# ICSE Mathematics Class 4 - Chapter 7: Data Handling & Patterns

## 7.1 Pictographs & Bar Graphs
- **Pictograph**: Data presented using symbols/pictures where 1 symbol = $N$ units.
- **Bar Graph**: Data presented using rectangular bars comparing quantities.

## 7.2 Growing & Reducing Patterns
- **Growing Pattern**: Numbers/shapes increase by a rule (e.g. $+3, +6, +9, \dots$).
- **Reducing Pattern**: Numbers/shapes decrease by a rule (e.g. $100, 90, 80, 70, \dots$).
    `,
    notes: [
      { topic: 'Pictograph Key', text: 'Always check the Key! If 1 star = 5 students, then 3 stars = 15 students.' },
      { topic: 'Pattern Extension Rule', text: 'Formulate a rule by observing the difference between consecutive terms.' }
    ],
    lessons: [
      { id: 'les_7_1', title: 'Pictographs & Interactive Bar Graphs', xp: 50, visualizer: 'GraphBuilder' },
      { id: 'les_7_2', title: 'Growing & Reducing Pattern Rules', xp: 50 }
    ]
  }
];

export const class2Chapters = [
  {
    id: 'c2_theme_1',
    number: 1,
    title: 'Theme 1: Numbers (Up to 999 & Place Value)',
    description: 'Learn numbers up to 999, number names, place & face values of digits in 3-digit numbers, comparison, ascending/descending order, and forming greatest & smallest numbers.',
    icon: 'Hash',
    color: '#58cc02',
    bgLight: '#e5f9d8',
    themeName: 'Theme 1: Numbers',
    olympiadStars: 2,
    olympiadRating: '⭐⭐☆☆☆',
    readinessLevel: 'Foundation Readiness',
    youtubeUrl: 'https://www.youtube.com/embed/Ju3kQjmcH5g',
    playlist: [
      {
        id: 'vid_c2_1_1',
        type: 'primary',
        videoId: 'Ju3kQjmcH5g',
        title: 'Numbers up to 99 and Number Names | Class 2 Maths',
        youtubeUrl: 'https://www.youtube.com/embed/Ju3kQjmcH5g',
        originalUrl: 'https://www.youtube.com/watch?v=Ju3kQjmcH5g',
        duration: '06:30 mins',
        creatorName: 'Educational Math Videos',
        channelName: 'Math Learning Hub',
        themeName: 'Numbers up to 99 & Number Names',
        relatedLessonId: 'c2_les_1_1'
      },
      {
        id: 'vid_c2_1_2',
        type: 'primary',
        videoId: '2KsY7-qLmd0',
        title: 'Reading & Writing 3-Digit Numbers up to 999 | Class 2 Maths',
        youtubeUrl: 'https://www.youtube.com/embed/2KsY7-qLmd0',
        originalUrl: 'https://www.youtube.com/watch?v=2KsY7-qLmd0',
        duration: '07:15 mins',
        creatorName: 'Math Academy',
        channelName: 'Class 2 Learning',
        themeName: 'Reading & Writing 3-Digit Numbers up to 999',
        relatedLessonId: 'c2_les_1_2'
      },
      {
        id: 'vid_c2_1_3',
        type: 'khan_academy',
        videoId: '1ACa-NW8-TU',
        title: 'Place Value & Face Value in 3-Digit Numbers | Khan Academy Kids',
        youtubeUrl: 'https://www.youtube.com/embed/1ACa-NW8-TU',
        originalUrl: 'https://www.youtube.com/watch?v=1ACa-NW8-TU',
        duration: '05:40 mins',
        creatorName: 'Khan Academy Kids',
        channelName: 'Khan Academy Kids',
        themeName: 'Place Value & Face Value (Hundreds, Tens, Ones)',
        relatedLessonId: 'c2_les_1_3'
      },
      {
        id: 'vid_c2_1_4',
        type: 'primary',
        videoId: 'JliCoQs_Exo',
        title: 'Comparing Numbers, Ordering & Forming Greatest/Smallest Numbers | Class 2',
        youtubeUrl: 'https://www.youtube.com/embed/JliCoQs_Exo',
        originalUrl: 'https://www.youtube.com/watch?v=JliCoQs_Exo',
        duration: '08:10 mins',
        creatorName: 'Learning Studio',
        channelName: 'Primary Math Studio',
        themeName: 'Comparing Numbers, Ordering & Greatest/Smallest Numbers',
        relatedLessonId: 'c2_les_1_4'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 2 - Theme 1: Numbers',
    textbookContent: `
# ICSE Mathematics Class 2 - Theme 1: Numbers

## 1.1 Numbers up to 99 and Number Names
Children strengthen their understanding of two-digit numbers (10 to 99) and observe the patterns in number names:
- **Patterns in Names**: twenty-one, twenty-two... thirty-one, thirty-two... ninety-nine.

## 1.2 Three-Digit Numbers (Up to 999)
- When we add 1 to 99, we get **100** (One Hundred).
- The smallest 3-digit number is **100**.
- The greatest 3-digit number is **999**.

## 1.3 Place Value and Face Value
In a 3-digit number like **358**:
- **Face Value**: The digit itself (Face value of 5 is 5).
- **Place Value**: The value based on its place:
  - 3 is at Hundreds place $\\rightarrow$ **300**
  - 5 is at Tens place $\\rightarrow$ **50**
  - 8 is at Ones place $\\rightarrow$ **8**
- **Expanded Form**: $358 = 300 + 50 + 8$.

## 1.4 Comparing and Ordering Numbers
- A 3-digit number is always greater than a 2-digit number (e.g. $102 > 98$).
- **Ascending Order**: Arranging from smallest to greatest.
- **Descending Order**: Arranging from greatest to smallest.
- **Forming Numbers**: With digits 4, 8, 2 $\\rightarrow$ Greatest is **842**, Smallest is **248**.
    `,
    notes: [
      { topic: 'Place Value Cards', text: 'Numbers are formed combining Hundreds, Tens, and Ones (e.g., 200 + 40 + 7 = 247).' },
      { topic: 'Comparing Rule', text: 'First compare Hundreds digit; if equal, compare Tens, then Ones.' },
      { topic: 'Smallest & Greatest', text: 'Smallest 3-digit number is 100, Greatest 3-digit number is 999.' }
    ],
    lessons: [
      { id: 'c2_les_1_1', title: 'Numbers up to 99 & Number Names', xp: 40 },
      { id: 'c2_les_1_2', title: 'Reading & Writing 3-Digit Numbers up to 999', xp: 40 },
      { id: 'c2_les_1_3', title: 'Place Value & Face Value (Hundreds, Tens, Ones)', xp: 50 },
      { id: 'c2_les_1_4', title: 'Comparing Numbers, Ordering & Greatest/Smallest Numbers', xp: 50 }
    ]
  },
  {
    id: 'c2_theme_2',
    number: 2,
    title: 'Theme 2: Number Operations',
    description: 'Addition & subtraction of 2-digit numbers with/without regrouping, zero properties, commutative property, daily-life problems, estimation, skip counting & multiplication tables (2 to 5), and equal sharing.',
    icon: 'PlusCircle',
    color: '#1cb0f6',
    bgLight: '#e0f4ff',
    themeName: 'Theme 2: Number Operations',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Core Operations',
    youtubeUrl: 'https://www.youtube.com/embed/VPsYRPdlIpU',
    playlist: [
      {
        id: 'vid_c2_2_1',
        type: 'primary',
        videoId: 'VPsYRPdlIpU',
        title: '2-Digit Addition & Subtraction with Regrouping | Class 2 Maths',
        youtubeUrl: 'https://www.youtube.com/embed/VPsYRPdlIpU',
        originalUrl: 'https://www.youtube.com/watch?v=VPsYRPdlIpU',
        duration: '08:20 mins',
        creatorName: 'Math Learning Hub',
        channelName: 'Math Learning Hub',
        themeName: '2-Digit Addition & Subtraction (With & Without Regrouping)',
        relatedLessonId: 'c2_les_2_1'
      },
      {
        id: 'vid_c2_2_2',
        type: 'primary',
        videoId: 'xvl5JuySlm8',
        title: 'Properties of Addition: Zero & Commutative Property | Class 2 Maths',
        youtubeUrl: 'https://www.youtube.com/embed/xvl5JuySlm8',
        originalUrl: 'https://www.youtube.com/watch?v=xvl5JuySlm8',
        duration: '06:45 mins',
        creatorName: 'Class 2 Math Studio',
        channelName: 'Primary Math',
        themeName: 'Zero Properties & Commutative Property of Addition',
        relatedLessonId: 'c2_les_2_2'
      },
      {
        id: 'vid_c2_2_3',
        type: 'primary',
        videoId: 'nZ9VpX7c24w',
        title: 'Daily Life Word Problems & Estimating Sums and Differences | Class 2',
        youtubeUrl: 'https://www.youtube.com/embed/nZ9VpX7c24w',
        originalUrl: 'https://www.youtube.com/watch?v=nZ9VpX7c24w',
        duration: '07:30 mins',
        creatorName: 'Learning Studio',
        channelName: 'Learning Studio',
        themeName: 'Daily-Life Word Problems & Estimation',
        relatedLessonId: 'c2_les_2_3'
      },
      {
        id: 'vid_c2_2_4',
        type: 'primary',
        videoId: '6CFYMiQMfrY',
        title: 'Skip Counting & Repeated Addition leading to Multiplication Tables 2-5',
        youtubeUrl: 'https://www.youtube.com/embed/6CFYMiQMfrY',
        originalUrl: 'https://www.youtube.com/watch?v=6CFYMiQMfrY',
        duration: '08:50 mins',
        creatorName: 'Math Academy',
        channelName: 'Math Academy',
        themeName: 'Multiplication Tables (2, 3, 4, 5) via Skip Counting',
        relatedLessonId: 'c2_les_2_4'
      },
      {
        id: 'vid_c2_2_5',
        type: 'primary',
        videoId: 'jtU-jFCp80I',
        title: 'Equal Sharing & Equal Grouping leading to Repeated Subtraction',
        youtubeUrl: 'https://www.youtube.com/embed/jtU-jFCp80I',
        originalUrl: 'https://www.youtube.com/watch?v=jtU-jFCp80I',
        duration: '07:10 mins',
        creatorName: 'Educational Math Videos',
        channelName: 'Primary Math Hub',
        themeName: 'Equal Grouping & Equal Sharing (Repeated Subtraction)',
        relatedLessonId: 'c2_les_2_5'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 2 - Theme 2: Number Operations',
    textbookContent: `
# ICSE Mathematics Class 2 - Theme 2: Number Operations

## 2.1 Addition & Subtraction of Two-Digit Numbers
- Adding two 2-digit numbers using standard column method.
- **With Regrouping**: Carrying over when sum of ones $\\ge 10$.
- **Subtracting with Borrowing**: When top ones digit is smaller than bottom ones digit.

## 2.2 Special Properties of Addition
- **Adding Zero**: $a + 0 = a$ (Adding 0 to any number leaves it unchanged).
- **Subtracting Zero**: $a - 0 = a$.
- **Commutative Property**: Changing the order does not change the sum (e.g. $4 + 5 = 5 + 4 = 9$).

## 2.3 Multiplication as Repeated Addition
- Multiplication is a fast way of adding the same number repeatedly.
- $3 + 3 + 3 + 3 = 4 \\times 3 = 12$.
- Skip counting by 2s, 3s, 4s, and 5s helps construct multiplication tables for 2, 3, 4, and 5.

## 2.4 Division as Equal Sharing / Equal Grouping
- Sharing 12 apples equally among 3 children: each child gets $12 \\div 3 = 4$ apples.
- Equal grouping leads to repeated subtraction: $12 - 4 - 4 - 4 = 0$.
    `,
    notes: [
      { topic: 'Commutative Rule', text: 'Order of addition does not matter: 12 + 8 = 8 + 12 = 20.' },
      { topic: 'Multiplication as Repeated Addition', text: '3 groups of 4 is 4 + 4 + 4 = 3 × 4 = 12.' },
      { topic: 'Equal Sharing', text: 'Distributing items equally into groups is division.' }
    ],
    lessons: [
      { id: 'c2_les_2_1', title: '2-Digit Addition & Subtraction (With & Without Regrouping)', xp: 40 },
      { id: 'c2_les_2_2', title: 'Zero Properties & Commutative Property of Addition', xp: 40 },
      { id: 'c2_les_2_3', title: 'Daily-Life Word Problems & Estimation', xp: 50 },
      { id: 'c2_les_2_4', title: 'Multiplication Tables (2, 3, 4, 5) via Skip Counting & Repeated Addition', xp: 50 },
      { id: 'c2_les_2_5', title: 'Equal Grouping & Equal Sharing (Repeated Subtraction)', xp: 50 }
    ]
  },
  {
    id: 'c2_theme_3',
    number: 3,
    title: 'Theme 3: Geometry (2D & 3D Shapes)',
    description: 'Identify and describe 2D shapes (rectangle, square, triangle, circle) and 3D shapes (cuboid, cylinder, cone, sphere), straight vs curved lines, and tracing outlines.',
    icon: 'Shapes',
    color: '#ff9600',
    bgLight: '#fff3e0',
    themeName: 'Theme 3: Geometry',
    olympiadStars: 2,
    olympiadRating: '⭐⭐☆☆☆',
    readinessLevel: 'Spatial Concept',
    youtubeUrl: 'https://www.youtube.com/embed/h8WKbPo3iBQ',
    playlist: [
      {
        id: 'vid_c2_3_1',
        type: 'primary',
        videoId: 'h8WKbPo3iBQ',
        title: '2D Shapes: Rectangle, Square, Triangle & Circle (Sides & Corners)',
        youtubeUrl: 'https://www.youtube.com/embed/h8WKbPo3iBQ',
        originalUrl: 'https://www.youtube.com/watch?v=h8WKbPo3iBQ',
        duration: '06:50 mins',
        creatorName: 'Geometry Kids',
        channelName: 'Kids Geometry Hub',
        themeName: '2D Shapes: Rectangle, Square, Triangle & Circle',
        relatedLessonId: 'c2_les_3_1'
      },
      {
        id: 'vid_c2_3_2',
        type: 'primary',
        videoId: 'gk_u1xr7jQg',
        title: '3D Shapes: Identifying Cuboid, Cylinder, Cone & Sphere',
        youtubeUrl: 'https://www.youtube.com/embed/gk_u1xr7jQg',
        originalUrl: 'https://www.youtube.com/watch?v=gk_u1xr7jQg',
        duration: '07:40 mins',
        creatorName: 'Math Academy',
        channelName: 'Math Academy',
        themeName: '3D Shapes: Cuboid, Cylinder, Cone & Sphere',
        relatedLessonId: 'c2_les_3_2'
      },
      {
        id: 'vid_c2_3_3',
        type: 'primary',
        videoId: '10dTx1Zy_4w',
        title: 'Tracing 2D Outlines of 3D Objects | Class 2 Geometry',
        youtubeUrl: 'https://www.youtube.com/embed/10dTx1Zy_4w',
        originalUrl: 'https://www.youtube.com/watch?v=10dTx1Zy_4w',
        duration: '06:10 mins',
        creatorName: 'Creative Learning',
        channelName: 'Creative Learning',
        themeName: 'Tracing 2D Outlines of 3D Objects',
        relatedLessonId: 'c2_les_3_3'
      },
      {
        id: 'vid_c2_3_4',
        type: 'primary',
        videoId: 'R7hwCjbT1_M',
        title: 'Straight Lines (Horizontal, Vertical, Slant) & Curved Lines',
        youtubeUrl: 'https://www.youtube.com/embed/R7hwCjbT1_M',
        originalUrl: 'https://www.youtube.com/watch?v=R7hwCjbT1_M',
        duration: '05:30 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: 'Straight & Curved Lines (Horizontal, Vertical, Slant)',
        relatedLessonId: 'c2_les_3_4'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 2 - Theme 3: Geometry',
    textbookContent: `
# ICSE Mathematics Class 2 - Theme 3: Geometry

## 3.1 2D Shapes (Plane Shapes)
- **Rectangle**: 4 sides and 4 corners. Opposite sides are equal.
- **Square**: 4 equal sides and 4 corners.
- **Triangle**: 3 sides and 3 corners.
- **Circle**: Round shape with 1 curved edge and 0 corners.

## 3.2 3D Shapes (Solid Shapes)
- **Cuboid**: Like a brick or pencil box (6 flat faces, 12 straight edges, 8 corners).
- **Cube**: Like a playing dice (6 equal square faces).
- **Cylinder**: Like a drink can or tube (2 flat circular faces, 1 curved face).
- **Cone**: Like an ice-cream cone or birthday hat (1 flat circular base, 1 curved face, 1 corner/vertex).
- **Sphere**: Like a football (1 curved surface, 0 flat faces, 0 edges, 0 corners).

## 3.3 Straight & Curved Lines
- **Horizontal Line**: Sleeping line (left to right $\\leftrightarrow$).
- **Vertical Line**: Standing line (top to bottom $\\updownarrow$).
- **Slant / Oblique Line**: Slanting line ($\\diagup$ or $\\diagdown$).
- **Curved Line**: A line that bends smoothly.
    `,
    notes: [
      { topic: '2D vs 3D', text: '2D shapes are flat (paper), 3D shapes take up solid space (objects).' },
      { topic: 'Tracing 3D Objects', text: 'Tracing around a coin gives a circle; tracing a matchbox gives a rectangle.' },
      { topic: 'Lines Classification', text: 'Straight lines can be horizontal (sleeping), vertical (standing), or slant.' }
    ],
    lessons: [
      { id: 'c2_les_3_1', title: '2D Shapes: Rectangle, Square, Triangle & Circle', xp: 40 },
      { id: 'c2_les_3_2', title: '3D Shapes: Cuboid, Cylinder, Cone & Sphere', xp: 40 },
      { id: 'c2_les_3_3', title: 'Tracing 2D Outlines of 3D Objects', xp: 40 },
      { id: 'c2_les_3_4', title: 'Straight & Curved Lines (Horizontal, Vertical, Slant)', xp: 40 }
    ]
  },
  {
    id: 'c2_theme_4',
    number: 4,
    title: 'Theme 4: Measurement (Length, Weight, Capacity & Time)',
    description: 'Measure lengths using uniform non-standard units, compare weights (heavier/lighter) using simple balances, compare container capacities, days of the week, and months.',
    icon: 'Ruler',
    color: '#ff4b4b',
    bgLight: '#ffebee',
    themeName: 'Theme 4: Measurement',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Applied Math',
    youtubeUrl: 'https://www.youtube.com/embed/FrQqkwdAK2M',
    playlist: [
      {
        id: 'vid_c2_4_1',
        type: 'primary',
        videoId: 'FrQqkwdAK2M',
        title: 'Measuring Length & Distance with Non-Standard Units | Class 2',
        youtubeUrl: 'https://www.youtube.com/embed/FrQqkwdAK2M',
        originalUrl: 'https://www.youtube.com/watch?v=FrQqkwdAK2M',
        duration: '06:40 mins',
        creatorName: 'Math Learning Hub',
        channelName: 'Math Learning Hub',
        themeName: 'Measuring Lengths & Distances with Non-Standard Units',
        relatedLessonId: 'c2_les_4_1'
      },
      {
        id: 'vid_c2_4_2',
        type: 'primary',
        videoId: 'OraMXN9AWNI',
        title: 'Comparing Weight: Heavier vs Lighter with Simple Balance',
        youtubeUrl: 'https://www.youtube.com/embed/OraMXN9AWNI',
        originalUrl: 'https://www.youtube.com/watch?v=OraMXN9AWNI',
        duration: '07:20 mins',
        creatorName: 'Science & Math for Kids',
        channelName: 'Kids Learning Studio',
        themeName: 'Comparing Weight: Heavier & Lighter with Simple Balance',
        relatedLessonId: 'c2_les_4_2'
      },
      {
        id: 'vid_c2_4_3',
        type: 'primary',
        videoId: 'kQg8oIll6yU',
        title: 'Capacity & Volume Comparison of Containers | Class 2 Measurement',
        youtubeUrl: 'https://www.youtube.com/embed/kQg8oIll6yU',
        originalUrl: 'https://www.youtube.com/watch?v=kQg8oIll6yU',
        duration: '08:15 mins',
        creatorName: 'Primary Math Academy',
        channelName: 'Primary Math Academy',
        themeName: 'Comparing Container Capacities & Volume',
        relatedLessonId: 'c2_les_4_3'
      },
      {
        id: 'vid_c2_4_4',
        type: 'primary',
        videoId: '10BPs87-8QA',
        title: 'Days of the Week, Months of the Year & Sequencing Events',
        youtubeUrl: 'https://www.youtube.com/embed/10BPs87-8QA',
        originalUrl: 'https://www.youtube.com/watch?v=10BPs87-8QA',
        duration: '06:55 mins',
        creatorName: 'Learning Studio',
        channelName: 'Learning Studio',
        themeName: 'Days of the Week, Months & Sequencing Events',
        relatedLessonId: 'c2_les_4_4'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 2 - Theme 4: Measurement',
    textbookContent: `
# ICSE Mathematics Class 2 - Theme 4: Measurement

## 4.1 Measuring Lengths with Non-Standard Units
- We can measure lengths using uniform objects like paperclips, toothpicks, pencils, handspans, or footsteps.
- Example: "This book is 6 paperclips long."

## 4.2 Weight (Heavier and Lighter)
- Using a **Simple Balance / Beam Balance**:
  - The side that goes down is **Heavier**.
  - The side that goes up is **Lighter**.
  - When both pans are at the same level, the weights are **Equal**.

## 4.3 Capacity (Volume)
- Capacity is the amount of liquid a container can hold.
- A water bucket holds more water than a coffee mug.
- We can measure capacity by counting how many cups or glasses fill a bottle.

## 4.4 Time and Calendar
- **7 Days of the Week**: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
- **12 Months of the Year**: January through December.
- **Sequencing Events**: Morning (Breakfast) $\\rightarrow$ Afternoon (Lunch) $\\rightarrow$ Evening (Play) $\\rightarrow$ Night (Sleep).
    `,
    notes: [
      { topic: 'Non-Standard Units', text: 'Uniform non-standard units like paperclips give consistent comparisons.' },
      { topic: 'Simple Balance Pan', text: 'Heavier pan tilts down; lighter pan tilts up.' },
      { topic: 'Calendar Facts', text: 'There are 7 days in a week and 12 months in a year.' }
    ],
    lessons: [
      { id: 'c2_les_4_1', title: 'Measuring Lengths & Distances with Non-Standard Units', xp: 40 },
      { id: 'c2_les_4_2', title: 'Comparing Weight: Heavier & Lighter with Simple Balance', xp: 40 },
      { id: 'c2_les_4_3', title: 'Comparing Container Capacities & Volume', xp: 40 },
      { id: 'c2_les_4_4', title: 'Days of the Week, Months & Sequencing Events', xp: 40 }
    ]
  },
  {
    id: 'c2_theme_5',
    number: 5,
    title: 'Theme 5: Data Handling & Pictographs',
    description: 'Collect, organize and record daily life data, interpret simple graphs and charts, and represent data pictorially using pictographs.',
    icon: 'BarChart2',
    color: '#ce82ff',
    bgLight: '#f6e5ff',
    themeName: 'Theme 5: Data Handling',
    olympiadStars: 2,
    olympiadRating: '⭐⭐☆☆☆',
    readinessLevel: 'Data Representation',
    youtubeUrl: 'https://www.youtube.com/embed/V4vijfX-3u0',
    playlist: [
      {
        id: 'vid_c2_5_1',
        type: 'primary',
        videoId: 'V4vijfX-3u0',
        title: 'Collecting and Tabulating Daily Life Data | Class 2 Data Handling',
        youtubeUrl: 'https://www.youtube.com/embed/V4vijfX-3u0',
        originalUrl: 'https://www.youtube.com/watch?v=V4vijfX-3u0',
        duration: '06:15 mins',
        creatorName: 'Kids Math Corner',
        channelName: 'Kids Math Corner',
        themeName: 'Collecting & Tabulating Simple Data',
        relatedLessonId: 'c2_les_5_1'
      },
      {
        id: 'vid_c2_5_2',
        type: 'primary',
        videoId: 'mL_COXoZfA4',
        title: 'Practical Data Collection Activities & Inferences | Class 2',
        youtubeUrl: 'https://www.youtube.com/embed/mL_COXoZfA4',
        originalUrl: 'https://www.youtube.com/watch?v=mL_COXoZfA4',
        duration: '07:05 mins',
        creatorName: 'Learning Studio',
        channelName: 'Learning Studio',
        themeName: 'Practical Data Collection',
        relatedLessonId: 'c2_les_5_2'
      },
      {
        id: 'vid_c2_5_3',
        type: 'primary',
        videoId: 'AfyC1t2w0Qc',
        title: 'Interpreting Simple Charts & Graphs | Class 2 Maths',
        youtubeUrl: 'https://www.youtube.com/embed/AfyC1t2w0Qc',
        originalUrl: 'https://www.youtube.com/watch?v=AfyC1t2w0Qc',
        duration: '06:50 mins',
        creatorName: 'Math Academy',
        channelName: 'Math Academy',
        themeName: 'Interpreting Simple Charts and Graphs',
        relatedLessonId: 'c2_les_5_3'
      },
      {
        id: 'vid_c2_5_4',
        type: 'primary',
        videoId: 'bmY28wdGL9M',
        title: 'Presenting Information with Pictographs | Class 2 Maths',
        youtubeUrl: 'https://www.youtube.com/embed/bmY28wdGL9M',
        originalUrl: 'https://www.youtube.com/watch?v=bmY28wdGL9M',
        duration: '07:30 mins',
        creatorName: 'Educational Math Hub',
        channelName: 'Primary Math Hub',
        themeName: 'Presenting Information with Pictographs',
        relatedLessonId: 'c2_les_5_4'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 2 - Theme 5: Data Handling',
    textbookContent: `
# ICSE Mathematics Class 2 - Theme 5: Data Handling

## 5.1 Collecting and Organizing Data
- **Data** is a collection of facts, numbers, or information.
- We can collect data from our classroom, such as favourite fruits, shoe sizes, or favourite colors.

## 5.2 Recording Data in Simple Tables
- Using tally lists or table charts to organize counts neatly.

## 5.3 Reading and Making Pictographs
- A **Pictograph** uses pictures or symbols to represent numbers.
- **Key**: Always read the key carefully!
  - If $1 \\text{ ⭐} = 1 \\text{ student}$, then $4 \\text{ ⭐⭐⭐⭐} = 4 \\text{ students}$.
  - If $1 \\text{ 🍎} = 2 \\text{ apples}$, then $3 \\text{ 🍎🍎🍎} = 6 \\text{ apples}$.
    `,
    notes: [
      { topic: 'What is Data?', text: 'Data means information collected by counting or measuring.' },
      { topic: 'Pictograph Key', text: 'The key explains how much each picture represents.' },
      { topic: 'Comparison', text: 'Looking at tables helps us quickly see the most and least popular items.' }
    ],
    lessons: [
      { id: 'c2_les_5_1', title: 'Collecting & Tabulating Simple Data', xp: 40 },
      { id: 'c2_les_5_2', title: 'Practical Data Collection', xp: 40 },
      { id: 'c2_les_5_3', title: 'Interpreting Simple Charts and Graphs', xp: 40 },
      { id: 'c2_les_5_4', title: 'Presenting Information with Pictographs', xp: 40 }
    ]
  },
  {
    id: 'c2_theme_6',
    number: 6,
    title: 'Theme 6: Patterns & Sequences',
    description: 'Observe and identify the unit of repeat in patterns, extend patterns, and create patterns using objects, shapes, and numbers.',
    icon: 'Grid',
    color: '#2b70c9',
    bgLight: '#e3f2fd',
    themeName: 'Theme 6: Patterns',
    olympiadStars: 2,
    olympiadRating: '⭐⭐☆☆☆',
    readinessLevel: 'Logical Patterns',
    youtubeUrl: 'https://www.youtube.com/embed/0HzXapUeL5Y',
    playlist: [
      {
        id: 'vid_c2_6_1',
        type: 'primary',
        videoId: '0HzXapUeL5Y',
        title: 'Observing & Identifying Unit of Repeat in Patterns | Class 2',
        youtubeUrl: 'https://www.youtube.com/embed/0HzXapUeL5Y',
        originalUrl: 'https://www.youtube.com/watch?v=0HzXapUeL5Y',
        duration: '06:20 mins',
        creatorName: 'Pattern World',
        channelName: 'Kids Pattern Hub',
        themeName: 'Observing & Identifying the Unit of Repeat',
        relatedLessonId: 'c2_les_6_1'
      },
      {
        id: 'vid_c2_6_2',
        type: 'khan_academy',
        videoId: '1ACa-NW8-TU',
        title: 'Number Patterns & Repeating Place-Value Structure | Khan Academy Kids',
        youtubeUrl: 'https://www.youtube.com/embed/1ACa-NW8-TU',
        originalUrl: 'https://www.youtube.com/watch?v=1ACa-NW8-TU',
        duration: '05:40 mins',
        creatorName: 'Khan Academy Kids',
        channelName: 'Khan Academy Kids',
        themeName: 'Number Patterns & Place Value Repeats',
        relatedLessonId: 'c2_les_6_2'
      },
      {
        id: 'vid_c2_6_3',
        type: 'primary',
        videoId: '6CFYMiQMfrY',
        title: 'Patterns through Skip Counting & Shapes | Class 2 Patterns',
        youtubeUrl: 'https://www.youtube.com/embed/6CFYMiQMfrY',
        originalUrl: 'https://www.youtube.com/watch?v=6CFYMiQMfrY',
        duration: '08:50 mins',
        creatorName: 'Math Academy',
        channelName: 'Math Academy',
        themeName: 'Extending & Creating Patterns (Objects, Shapes & Skip Counting)',
        relatedLessonId: 'c2_les_6_3'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 2 - Theme 6: Patterns',
    textbookContent: `
# ICSE Mathematics Class 2 - Theme 6: Patterns

## 6.1 Identifying the Unit of Repeat
- A **Pattern** is a repeating sequence of shapes, objects, colors, or numbers.
- **Unit of Repeat**: The part of the pattern that repeats again and again.
  - Example: $\\bigtriangleup \\; \\bigcirc \\; \\bigtriangleup \\; \\bigcirc \\; \\bigtriangleup \\; \\bigcirc \\dots$ (Unit of repeat is $\\bigtriangleup \\; \\bigcirc$).

## 6.2 Shape & Color Patterns
- Repeating patterns using different shapes (Square, Circle, Triangle).
- Growing patterns: $\\star \\;, \\; \\star\\star \\;, \\; \\star\\star\\star \\dots$

## 6.3 Number Patterns (Skip Counting)
- Counting by 2s: $2, 4, 6, 8, 10, 12, \\dots$ (Rule: $+2$)
- Counting by 5s: $5, 10, 15, 20, 25, \\dots$ (Rule: $+5$)
- Counting by 10s: $10, 20, 30, 40, 50, \\dots$ (Rule: $+10$)
    `,
    notes: [
      { topic: 'Unit of Repeat', text: 'Find the basic block that repeats continuously.' },
      { topic: 'Number Pattern Rules', text: 'Check the difference between consecutive numbers to find the rule.' },
      { topic: 'Creating Patterns', text: 'You can create your own patterns using thumb prints, stamps, or vegetable cutouts.' }
    ],
    lessons: [
      { id: 'c2_les_6_1', title: 'Observing & Identifying the Unit of Repeat', xp: 40 },
      { id: 'c2_les_6_2', title: 'Number Patterns & Place Value Repeats', xp: 40 },
      { id: 'c2_les_6_3', title: 'Extending & Creating Patterns (Objects, Shapes & Skip Counting)', xp: 40 }
    ]
  }
];

export const class8Chapters = [
  {
    id: 'c8_theme_1',
    number: 1,
    title: 'Theme 1: Number System',
    description: 'Rational numbers & properties, laws of exponents with integral powers, squares & square roots, cubes & cube roots, generalised form (100a+10b+c) & divisibility rules, and set theory.',
    icon: 'Hash',
    color: '#58cc02',
    bgLight: '#e5f9d8',
    themeName: 'Theme 1: Number System',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Foundation & Pre-Algebra',
    youtubeUrl: 'https://www.youtube.com/embed/877YmPOZxhU',
    playlist: [
      {
        id: 'vid_c8_1_1_mb',
        type: 'primary',
        videoId: '877YmPOZxhU',
        title: 'Rational Numbers Full Chapter | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/877YmPOZxhU',
        originalUrl: 'https://www.youtube.com/watch?v=877YmPOZxhU',
        duration: '45:00 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Rational Numbers (Properties, Number Line & Density)',
        relatedLessonId: 'c8_les_1_1'
      },
      {
        id: 'vid_c8_1_1_pw',
        type: 'revision',
        videoId: 'GJnvCdnrgqQ',
        title: 'Rational Numbers One-Shot | Physics Wallah',
        youtubeUrl: 'https://www.youtube.com/embed/GJnvCdnrgqQ',
        originalUrl: 'https://youtu.be/GJnvCdnrgqQ',
        duration: '35:20 mins',
        creatorName: 'Physics Wallah',
        channelName: 'Physics Wallah Foundation',
        themeName: 'Rational Numbers (Properties, Number Line & Density)',
        relatedLessonId: 'c8_les_1_1'
      },
      {
        id: 'vid_c8_1_1_short',
        type: 'extra',
        videoId: 'KLW5OfV2MzQ',
        title: 'Rational Numbers Properties Focus with Examples',
        youtubeUrl: 'https://www.youtube.com/embed/KLW5OfV2MzQ',
        originalUrl: 'https://www.youtube.com/watch?v=KLW5OfV2MzQ',
        duration: '12:40 mins',
        creatorName: 'Math Focus',
        channelName: 'Math Focus Studio',
        themeName: 'Rational Numbers (Properties, Number Line & Density)',
        relatedLessonId: 'c8_les_1_1'
      },
      {
        id: 'vid_c8_1_2_mb_exp',
        type: 'primary',
        videoId: '1sQQJJ0PW7M',
        title: 'Laws of Exponents & Powers | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/1sQQJJ0PW7M',
        originalUrl: 'https://www.youtube.com/watch?v=1sQQJJ0PW7M',
        duration: '30:15 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Exponents, Squares, Square Roots, Cubes & Cube Roots',
        relatedLessonId: 'c8_les_1_2'
      },
      {
        id: 'vid_c8_1_2_pw_exp',
        type: 'revision',
        videoId: 'nfC8ihzSG58',
        title: 'Exponents One-Shot Revision | Physics Wallah',
        youtubeUrl: 'https://www.youtube.com/embed/nfC8ihzSG58',
        originalUrl: 'https://youtu.be/nfC8ihzSG58',
        duration: '28:40 mins',
        creatorName: 'Physics Wallah',
        channelName: 'Physics Wallah Foundation',
        themeName: 'Exponents, Squares, Square Roots, Cubes & Cube Roots',
        relatedLessonId: 'c8_les_1_2'
      },
      {
        id: 'vid_c8_1_2_pw_sq',
        type: 'extra',
        videoId: 'iRW9NHBSvAY',
        title: 'Squares & Square Roots One-Shot | Physics Wallah',
        youtubeUrl: 'https://www.youtube.com/embed/iRW9NHBSvAY',
        originalUrl: 'https://www.youtube.com/watch?v=iRW9NHBSvAY',
        duration: '40:10 mins',
        creatorName: 'Physics Wallah',
        channelName: 'Physics Wallah Foundation',
        themeName: 'Exponents, Squares, Square Roots, Cubes & Cube Roots',
        relatedLessonId: 'c8_les_1_2'
      },
      {
        id: 'vid_c8_1_2_ka_cube',
        type: 'extra',
        videoId: 'omqXGFjpJT0',
        title: 'Cube Roots by Prime Factorisation | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/omqXGFjpJT0',
        originalUrl: 'https://www.youtube.com/watch?v=omqXGFjpJT0',
        duration: '10:50 mins',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Exponents, Squares, Square Roots, Cubes & Cube Roots',
        relatedLessonId: 'c8_les_1_2'
      },
      {
        id: 'vid_c8_1_2_ln_cube',
        type: 'revision',
        videoId: 'W6O650E4wSY',
        title: 'Cubes & Cube Roots Complete Guide | Learning Notebook',
        youtubeUrl: 'https://www.youtube.com/embed/W6O650E4wSY',
        originalUrl: 'https://www.youtube.com/watch?v=W6O650E4wSY',
        duration: '18:25 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: 'Exponents, Squares, Square Roots, Cubes & Cube Roots',
        relatedLessonId: 'c8_les_1_2'
      },
      {
        id: 'vid_c8_1_3_mb_pwn',
        type: 'primary',
        videoId: 'hiKgmP7eoNU',
        title: 'Playing with Numbers & Divisibility | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/hiKgmP7eoNU',
        originalUrl: 'https://www.youtube.com/watch?v=hiKgmP7eoNU',
        duration: '32:00 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Playing with Numbers (Generalised Form, Puzzles & Divisibility)',
        relatedLessonId: 'c8_les_1_3'
      },
      {
        id: 'vid_c8_1_3_div',
        type: 'revision',
        videoId: 'i16N01IdIhk',
        title: 'Divisibility Rules Overview (2, 3, 5, 9, 10)',
        youtubeUrl: 'https://www.youtube.com/embed/i16N01IdIhk',
        originalUrl: 'https://www.youtube.com/watch?v=i16N01IdIhk',
        duration: '14:15 mins',
        creatorName: 'Math English Studio',
        channelName: 'Math English Studio',
        themeName: 'Playing with Numbers (Generalised Form, Puzzles & Divisibility)',
        relatedLessonId: 'c8_les_1_3'
      },
      {
        id: 'vid_c8_1_4_icse_sets',
        type: 'primary',
        videoId: '5HFtixq0JAQ',
        title: 'Sets Complete ICSE Lesson | ICSE Mathematics',
        youtubeUrl: 'https://www.youtube.com/embed/5HFtixq0JAQ',
        originalUrl: 'https://www.youtube.com/watch?v=5HFtixq0JAQ',
        duration: '38:00 mins',
        creatorName: 'ICSE Math Channel',
        channelName: 'ICSE Math Channel',
        themeName: 'Sets (Union, Intersection, Disjoint Sets & Complement)',
        relatedLessonId: 'c8_les_1_4'
      },
      {
        id: 'vid_c8_1_4_steve_sets',
        type: 'revision',
        videoId: 'fLMN0wtiz-4',
        title: 'Union, Intersection & Complement with Examples | Steve Crow',
        youtubeUrl: 'https://www.youtube.com/embed/fLMN0wtiz-4',
        originalUrl: 'https://www.youtube.com/watch?v=fLMN0wtiz-4',
        duration: '16:45 mins',
        creatorName: 'Steve Crow',
        channelName: 'Steve Crow Math',
        themeName: 'Sets (Union, Intersection, Disjoint Sets & Complement)',
        relatedLessonId: 'c8_les_1_4'
      },
      {
        id: 'vid_c8_1_4_venn_sets',
        type: 'extra',
        videoId: 'jXgtTAkyNIs',
        title: 'Venn Diagrams & Set Operations Masterclass',
        youtubeUrl: 'https://www.youtube.com/embed/jXgtTAkyNIs',
        originalUrl: 'https://www.youtube.com/watch?v=jXgtTAkyNIs',
        duration: '15:10 mins',
        creatorName: 'Visual Mathematics',
        channelName: 'Visual Math',
        themeName: 'Sets (Union, Intersection, Disjoint Sets & Complement)',
        relatedLessonId: 'c8_les_1_4'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 8 - Theme 1: Number System',
    textbookContent: `
# ICSE Mathematics Class 8 - Theme 1: Number System

## 1.1 Rational Numbers
A number that can be expressed in the form $\\frac{p}{q}$, where $p, q \\in \\mathbb{Z}$ and $q \\neq 0$.
- **Properties**: Closure, Commutative, Associative, and Distributive properties over addition and multiplication.
- **Identities**: Additive Identity is $0$, Multiplicative Identity is $1$.
- **Density Property**: Between any two rational numbers, there are infinitely many rational numbers (e.g. $\\frac{a+b}{2}$).

## 1.2 Exponents & Powers, Square Roots & Cube Roots
- **Laws of Exponents**:
  - $a^m \\times a^n = a^{m+n}$
  - $\\frac{a^m}{a^n} = a^{m-n}$
  - $(a^m)^n = a^{mn}$
  - $a^{-n} = \\frac{1}{a^n}, \\quad a^0 = 1$
- **Square Roots**: Prime Factorisation Method & Long Division Method.
- **Cube Roots**: $\\sqrt[3]{x}$ by Prime Factorisation Method.

## 1.3 Playing with Numbers
- **Generalised Form**: 2-digit number $ab = 10a + b$, 3-digit number $abc = 100a + 10b + c$.
- **Divisibility Tests**:
  - Divisible by 3 / 9: Sum of digits is divisible by 3 / 9.
  - Divisible by 5 / 10: Last digit is 0 or 5 / 0.

## 1.4 Sets & Set Operations
- **Union ($A \\cup B$)**: All elements present in $A$ or $B$ or both.
- **Intersection ($A \\cap B$)**: Elements common to both $A$ and $B$.
- **Disjoint Sets**: $A \\cap B = \\emptyset$.
- **Complement ($A'$)**: Elements in the Universal set $U$ that are not in $A$.
    `,
    notes: [
      { topic: 'Rational Density', text: 'To find a rational between a and b, calculate (a + b)/2.' },
      { topic: 'Exponent Law', text: 'a^(-m) = 1/(a^m) and (ab)^m = a^m * b^m.' },
      { topic: 'Set Operations', text: 'A union B includes all elements; A intersection B includes only common elements.' }
    ],
    lessons: [
      { id: 'c8_les_1_1', title: 'Rational Numbers (Properties, Number Line & Density)', xp: 50 },
      { id: 'c8_les_1_2', title: 'Exponents, Squares, Square Roots, Cubes & Cube Roots', xp: 50 },
      { id: 'c8_les_1_3', title: 'Playing with Numbers (Generalised Form, Puzzles & Divisibility)', xp: 50 },
      { id: 'c8_les_1_4', title: 'Sets (Union, Intersection, Disjoint Sets & Complement)', xp: 50 }
    ]
  },
  {
    id: 'c8_theme_2',
    number: 2,
    title: 'Theme 2: Ratio, Proportion & Financial Math',
    description: 'Percentages, profit & loss, overheads, discount, tax, simple vs compound interest (compounded annually & semi-annually), direct & inverse variation, and time & work problems.',
    icon: 'TrendingUp',
    color: '#1cb0f6',
    bgLight: '#e0f4ff',
    themeName: 'Theme 2: Ratio and Proportion',
    olympiadStars: 4,
    olympiadRating: '⭐⭐⭐⭐☆',
    readinessLevel: 'Commercial Math & Proportions',
    youtubeUrl: 'https://www.youtube.com/embed/z1eng66pi3Y',
    playlist: [
      {
        id: 'vid_c8_2_1_mb_pl',
        type: 'primary',
        videoId: 'z1eng66pi3Y',
        title: 'Percentages, Profit & Loss Full Chapter | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/z1eng66pi3Y',
        originalUrl: 'https://www.youtube.com/watch?v=z1eng66pi3Y',
        duration: '42:15 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Percentages, Profit & Loss, Discount, Tax & Overheads',
        relatedLessonId: 'c8_les_2_1'
      },
      {
        id: 'vid_c8_2_1_ex_pl',
        type: 'revision',
        videoId: 'B6-IUSALA1Y',
        title: 'Profit, Loss, Overheads, Discount & Tax Worked Examples',
        youtubeUrl: 'https://www.youtube.com/embed/B6-IUSALA1Y',
        originalUrl: 'https://www.youtube.com/watch?v=B6-IUSALA1Y',
        duration: '22:30 mins',
        creatorName: 'English Math Academy',
        channelName: 'English Math Academy',
        themeName: 'Percentages, Profit & Loss, Discount, Tax & Overheads',
        relatedLessonId: 'c8_les_2_1'
      },
      {
        id: 'vid_c8_2_2_mb_ci',
        type: 'primary',
        videoId: 'p6npHQTMOxk',
        title: 'Simple vs Compound Interest Complete Guide | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/p6npHQTMOxk',
        originalUrl: 'https://www.youtube.com/watch?v=p6npHQTMOxk',
        duration: '38:40 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Simple and Compound Interest (Annual & Semi-Annual)',
        relatedLessonId: 'c8_les_2_2'
      },
      {
        id: 'vid_c8_2_2_ka_ci',
        type: 'revision',
        videoId: '79HS3N1IBt8',
        title: 'Comparing Simple & Compound Interest | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/79HS3N1IBt8',
        originalUrl: 'https://www.youtube.com/watch?v=79HS3N1IBt8',
        duration: '12:10 mins',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Simple and Compound Interest (Annual & Semi-Annual)',
        relatedLessonId: 'c8_les_2_2'
      },
      {
        id: 'vid_c8_2_3_mb_dir',
        type: 'primary',
        videoId: 'SsURWQ6xt4c',
        title: 'Direct and Inverse Proportions Introduction | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/SsURWQ6xt4c',
        originalUrl: 'https://www.youtube.com/watch?v=SsURWQ6xt4c',
        duration: '25:00 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Direct and Inverse Variation (Word Problems & Methods)',
        relatedLessonId: 'c8_les_2_3'
      },
      {
        id: 'vid_c8_2_3_pw_dir',
        type: 'revision',
        videoId: 'oCx6f3wNP1w',
        title: 'Direct and Inverse Variation One-Shot | Physics Wallah',
        youtubeUrl: 'https://www.youtube.com/embed/oCx6f3wNP1w',
        originalUrl: 'https://www.youtube.com/watch?v=oCx6f3wNP1w',
        duration: '34:15 mins',
        creatorName: 'Physics Wallah',
        channelName: 'Physics Wallah Foundation',
        themeName: 'Direct and Inverse Variation (Word Problems & Methods)',
        relatedLessonId: 'c8_les_2_3'
      },
      {
        id: 'vid_c8_2_3_mb_sol',
        type: 'extra',
        videoId: 'PhcZcqRhQwU',
        title: 'Direct and Inverse Proportions Full NCERT Solutions | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/PhcZcqRhQwU',
        originalUrl: 'https://www.youtube.com/watch?v=PhcZcqRhQwU',
        duration: '48:30 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Direct and Inverse Variation (Word Problems & Methods)',
        relatedLessonId: 'c8_les_2_3'
      },
      {
        id: 'vid_c8_2_3_mb_full',
        type: 'extra',
        videoId: 'Xo4RJdZILmQ',
        title: 'Direct & Inverse Variations Complete Chapter | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/Xo4RJdZILmQ',
        originalUrl: 'https://www.youtube.com/watch?v=Xo4RJdZILmQ',
        duration: '40:00 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Direct and Inverse Variation (Word Problems & Methods)',
        relatedLessonId: 'c8_les_2_3'
      },
      {
        id: 'vid_c8_2_3_pw_rev',
        type: 'revision',
        videoId: 'DmnHF9cny5U',
        title: 'Direct and Inverse Proportions Quick Revision | PW Class 8',
        youtubeUrl: 'https://www.youtube.com/embed/DmnHF9cny5U',
        originalUrl: 'https://www.youtube.com/watch?v=DmnHF9cny5U',
        duration: '18:50 mins',
        creatorName: 'Physics Wallah',
        channelName: 'Physics Wallah Foundation',
        themeName: 'Direct and Inverse Variation (Word Problems & Methods)',
        relatedLessonId: 'c8_les_2_3'
      },
      {
        id: 'vid_c8_2_3_mb_inv',
        type: 'extra',
        videoId: '5IWhyDsREY8',
        title: 'Inverse Proportion Concepts Deep Dive | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/5IWhyDsREY8',
        originalUrl: 'https://www.youtube.com/watch?v=5IWhyDsREY8',
        duration: '22:15 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Direct and Inverse Variation (Word Problems & Methods)',
        relatedLessonId: 'c8_les_2_3'
      },
      {
        id: 'vid_c8_2_4_madhu_tw',
        type: 'primary',
        videoId: 'cU6DvuMX-ug',
        title: 'Time and Work Concepts & Problem Solving | Learn with Madhu',
        youtubeUrl: 'https://www.youtube.com/embed/cU6DvuMX-ug',
        originalUrl: 'https://www.youtube.com/watch?v=cU6DvuMX-ug',
        duration: '26:30 mins',
        creatorName: 'Learn with Madhu',
        channelName: 'Learn with Madhu',
        themeName: 'Time and Work Problems (Work per Day & Combined Rate)',
        relatedLessonId: 'c8_les_2_4'
      },
      {
        id: 'vid_c8_2_4_unac_tw',
        type: 'revision',
        videoId: '5yPVPfq65mM',
        title: 'Time and Work Problems Focused Masterclass | Class 8',
        youtubeUrl: 'https://www.youtube.com/embed/5yPVPfq65mM',
        originalUrl: 'https://www.youtube.com/watch?v=5yPVPfq65mM',
        duration: '29:40 mins',
        creatorName: 'Unacademy',
        channelName: 'Unacademy Class 8',
        themeName: 'Time and Work Problems (Work per Day & Combined Rate)',
        relatedLessonId: 'c8_les_2_4'
      },
      {
        id: 'vid_c8_2_4_tricks_tw',
        type: 'extra',
        videoId: '7No8wR59s3U',
        title: 'Time and Work Complete Concepts & Tricks for Class 8',
        youtubeUrl: 'https://www.youtube.com/embed/7No8wR59s3U',
        originalUrl: 'https://www.youtube.com/watch?v=7No8wR59s3U',
        duration: '24:10 mins',
        creatorName: 'Math Tricks Academy',
        channelName: 'Math Tricks',
        themeName: 'Time and Work Problems (Work per Day & Combined Rate)',
        relatedLessonId: 'c8_les_2_4'
      },
      {
        id: 'vid_c8_2_4_eng_tw',
        type: 'extra',
        videoId: 'J6J7E2YO1oM',
        title: 'Time & Work Problems: Formulas & English Explanation',
        youtubeUrl: 'https://www.youtube.com/embed/J6J7E2YO1oM',
        originalUrl: 'https://www.youtube.com/watch?v=J6J7E2YO1oM',
        duration: '20:15 mins',
        creatorName: 'English Math Studio',
        channelName: 'English Math Studio',
        themeName: 'Time and Work Problems (Work per Day & Combined Rate)',
        relatedLessonId: 'c8_les_2_4'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 8 - Theme 2: Ratio, Proportion & Financial Math',
    textbookContent: `
# ICSE Mathematics Class 8 - Theme 2: Ratio & Proportion

## 2.1 Commercial Mathematics
- **Profit % & Loss %**: $\\text{Profit } \\% = \\frac{\\text{Profit}}{\\text{CP}} \\times 100$, $\\quad \\text{Loss } \\% = \\frac{\\text{Loss}}{\\text{CP}} \\times 100$.
- **Overheads**: Added to Cost Price (Effective CP = Cost + Overheads).
- **Discount & GST**: Discount is calculated on Marked Price (MP). Selling Price = MP - Discount.

## 2.2 Simple & Compound Interest
- **Simple Interest**: $SI = \\frac{P \\times R \\times T}{100}$.
- **Compound Interest (Annually)**: $A = P \\left(1 + \\frac{R}{100}\\right)^n, \\quad CI = A - P$.
- **Half-Yearly Compounding**: $A = P \\left(1 + \\frac{R/2}{100}\\right)^{2n}$.

## 2.3 Direct and Inverse Variations
- **Direct Proportion**: $\\frac{x}{y} = k$ (constant). If $x$ increases, $y$ increases proportionally.
- **Inverse Proportion**: $x \\times y = k$ (constant). If $x$ increases, $y$ decreases proportionally.

## 2.4 Time and Work
- If a person completes a job in $n$ days, 1 day's work $= \\frac{1}{n}$.
- If $A$ does $\\frac{1}{a}$ and $B$ does $\\frac{1}{b}$ work per day, combined 1 day's work $= \\frac{1}{a} + \\frac{1}{b}$. Total days $= \\frac{ab}{a+b}$.
    `,
    notes: [
      { topic: 'Compound Interest Formula', text: 'A = P(1 + R/100)^n. Notice how CI grows exponentially compared to linear SI.' },
      { topic: 'Direct vs Inverse', text: 'Direct: x1/y1 = x2/y2. Inverse: x1*y1 = x2*y2.' },
      { topic: 'Work Rate Concept', text: 'Always convert work to unit-rate: Work done per day = 1 / Total Days.' }
    ],
    lessons: [
      { id: 'c8_les_2_1', title: 'Percentages, Profit & Loss, Discount, Tax & Overheads', xp: 50 },
      { id: 'c8_les_2_2', title: 'Simple and Compound Interest (Annual & Semi-Annual)', xp: 50 },
      { id: 'c8_les_2_3', title: 'Direct and Inverse Variation (Word Problems & Methods)', xp: 50 },
      { id: 'c8_les_2_4', title: 'Time and Work Problems (Work per Day & Combined Rate)', xp: 50 }
    ]
  },
  {
    id: 'c8_theme_3',
    number: 3,
    title: 'Theme 3: Algebra (Identities, Factorisation & Equations)',
    description: 'Multiplication & division of algebraic expressions, standard identities ((a±b)², a²-b²), inequalities, factorisation methods, and linear equations in one variable with contextual word problems.',
    icon: 'Divide',
    color: '#7c3aed',
    bgLight: '#f3e8ff',
    themeName: 'Theme 3: Algebra',
    olympiadStars: 4,
    olympiadRating: '⭐⭐⭐⭐☆',
    readinessLevel: 'Advanced Algebraic Mastery',
    youtubeUrl: 'https://www.youtube.com/embed/HMBqFHrqlT0',
    playlist: [
      {
        id: 'vid_c8_3_1_mb_alg',
        type: 'primary',
        videoId: 'HMBqFHrqlT0',
        title: 'Algebraic Expressions & Identities Full Chapter | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/HMBqFHrqlT0',
        originalUrl: 'https://www.youtube.com/watch?v=HMBqFHrqlT0',
        duration: '44:00 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Algebraic Expressions, Operations & Identities ((a±b)², a²-b²)',
        relatedLessonId: 'c8_les_3_1'
      },
      {
        id: 'vid_c8_3_1_pw_alg',
        type: 'revision',
        videoId: 'GQqQPY2wEQA',
        title: 'Algebraic Expressions & Identities One-Shot | Physics Wallah',
        youtubeUrl: 'https://www.youtube.com/embed/GQqQPY2wEQA',
        originalUrl: 'https://www.youtube.com/watch?v=GQqQPY2wEQA',
        duration: '36:15 mins',
        creatorName: 'Physics Wallah',
        channelName: 'Physics Wallah Foundation',
        themeName: 'Algebraic Expressions, Operations & Identities ((a±b)², a²-b²)',
        relatedLessonId: 'c8_les_3_1'
      },
      {
        id: 'vid_c8_3_1_mb_id',
        type: 'extra',
        videoId: 'dII0YPEl9Xc',
        title: 'Standard Identities Focus & Proofs | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/dII0YPEl9Xc',
        originalUrl: 'https://www.youtube.com/watch?v=dII0YPEl9Xc',
        duration: '18:40 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Algebraic Expressions, Operations & Identities ((a±b)², a²-b²)',
        relatedLessonId: 'c8_les_3_1'
      },
      {
        id: 'vid_c8_3_2_mb_fac',
        type: 'primary',
        videoId: 'JrUbN26vgDU',
        title: 'Factorisation Full Chapter Explanation | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/JrUbN26vgDU',
        originalUrl: 'https://www.youtube.com/watch?v=JrUbN26vgDU',
        duration: '46:30 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Factorisation (Common Factors, Regrouping, Identities & Splitting)',
        relatedLessonId: 'c8_les_3_2'
      },
      {
        id: 'vid_c8_3_2_pw_fac',
        type: 'revision',
        videoId: 'tX53XTvKheA',
        title: 'Factorisation One-Shot | Physics Wallah',
        youtubeUrl: 'https://www.youtube.com/embed/tX53XTvKheA',
        originalUrl: 'https://www.youtube.com/watch?v=tX53XTvKheA',
        duration: '32:00 mins',
        creatorName: 'Physics Wallah',
        channelName: 'Physics Wallah Foundation',
        themeName: 'Factorisation (Common Factors, Regrouping, Identities & Splitting)',
        relatedLessonId: 'c8_les_3_2'
      },
      {
        id: 'vid_c8_3_2_pw_rev',
        type: 'extra',
        videoId: 'uK1i6IzOhAA',
        title: 'Factorisation Short Revision & Formulas | PW Class 8',
        youtubeUrl: 'https://www.youtube.com/embed/uK1i6IzOhAA',
        originalUrl: 'https://www.youtube.com/watch?v=uK1i6IzOhAA',
        duration: '15:20 mins',
        creatorName: 'Physics Wallah',
        channelName: 'Physics Wallah Foundation',
        themeName: 'Factorisation (Common Factors, Regrouping, Identities & Splitting)',
        relatedLessonId: 'c8_les_3_2'
      },
      {
        id: 'vid_c8_3_3_mb_le',
        type: 'primary',
        videoId: '7_EtyPwzW_g',
        title: 'Linear Equations in One Variable Full Chapter | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/7_EtyPwzW_g',
        originalUrl: 'https://www.youtube.com/watch?v=7_EtyPwzW_g',
        duration: '42:50 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Linear Equations in One Variable (Contextual Word Problems)',
        relatedLessonId: 'c8_les_3_3'
      },
      {
        id: 'vid_c8_3_3_icse_le',
        type: 'revision',
        videoId: 'Bqg6UlTWyuI',
        title: 'Linear Equations Complete Chapter (ICSE Focus)',
        youtubeUrl: 'https://www.youtube.com/embed/Bqg6UlTWyuI',
        originalUrl: 'https://www.youtube.com/watch?v=Bqg6UlTWyuI',
        duration: '35:10 mins',
        creatorName: 'ICSE Math Channel',
        channelName: 'ICSE Math Channel',
        themeName: 'Linear Equations in One Variable (Contextual Word Problems)',
        relatedLessonId: 'c8_les_3_3'
      },
      {
        id: 'vid_c8_3_3_ka_le',
        type: 'extra',
        videoId: 'K-eLaEMqn5U',
        title: 'Word Problems on Linear Equations | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/K-eLaEMqn5U',
        originalUrl: 'https://www.youtube.com/watch?v=K-eLaEMqn5U',
        duration: '16:30 mins',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Linear Equations in One Variable (Contextual Word Problems)',
        relatedLessonId: 'c8_les_3_3'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 8 - Theme 3: Algebra',
    textbookContent: `
# ICSE Mathematics Class 8 - Theme 3: Algebra

## 3.1 Standard Identities
- $(a + b)^2 = a^2 + 2ab + b^2$
- $(a - b)^2 = a^2 - 2ab + b^2$
- $(a + b)(a - b) = a^2 - b^2$
- $(x + a)(x + b) = x^2 + (a + b)x + ab$

## 3.2 Methods of Factorisation
1. **Common Factor**: $ax + ay = a(x + y)$
2. **Regrouping Terms**: $ab + bc + ax + cx = b(a + c) + x(a + c) = (a + c)(b + x)$
3. **Using Identities**: $a^2 - b^2 = (a - b)(a + b)$ and $(a \\pm b)^2$
4. **Splitting the Middle Term**: $x^2 + (a+b)x + ab = (x + a)(x + b)$

## 3.3 Linear Equations in One Variable
- General form: $ax + b = c$ ($a \\neq 0$).
- Rules for transposition across the equality sign ($+$ becomes $-$, $\\times$ becomes $\\div$).
    `,
    notes: [
      { topic: 'Difference of Squares', text: 'a^2 - b^2 = (a - b)(a + b). Always check if terms can be factored with this identity first.' },
      { topic: 'Factorising by Grouping', text: 'Group terms in pairs having common factors.' },
      { topic: 'Transposition Rule', text: 'Change sign when moving terms across the equals sign.' }
    ],
    lessons: [
      { id: 'c8_les_3_1', title: 'Algebraic Expressions, Operations & Identities ((a±b)², a²-b²)', xp: 50 },
      { id: 'c8_les_3_2', title: 'Factorisation (Common Factors, Regrouping, Identities & Splitting)', xp: 50 },
      { id: 'c8_les_3_3', title: 'Linear Equations in One Variable (Contextual Word Problems)', xp: 50 }
    ]
  },
  {
    id: 'c8_theme_4',
    number: 4,
    title: 'Theme 4: Geometry & Understanding Shapes',
    description: 'Properties of quadrilaterals & special parallelograms, representing 3D in 2D & Euler’s formula (F + V = E + 2), constructions of quadrilaterals, reflection symmetry, and circle concepts.',
    icon: 'Shapes',
    color: '#ff9600',
    bgLight: '#fff3e0',
    themeName: 'Theme 4: Geometry',
    olympiadStars: 4,
    olympiadRating: '⭐⭐⭐⭐☆',
    readinessLevel: 'Geometry & Spatial Deductions',
    youtubeUrl: 'https://www.youtube.com/embed/ifz8dO2f8OM',
    playlist: [
      {
        id: 'vid_c8_4_1_mb_quad',
        type: 'primary',
        videoId: 'ifz8dO2f8OM',
        title: 'Parallelograms and Properties Full Chapter | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/ifz8dO2f8OM',
        originalUrl: 'https://www.youtube.com/watch?v=ifz8dO2f8OM',
        duration: '40:15 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Properties of Quadrilaterals & Special Parallelograms',
        relatedLessonId: 'c8_les_4_1'
      },
      {
        id: 'vid_c8_4_1_pw_quad',
        type: 'revision',
        videoId: '1BCrIlFjP3E',
        title: 'Quadrilaterals Complete Chapter One-Shot | Physics Wallah',
        youtubeUrl: 'https://www.youtube.com/embed/1BCrIlFjP3E',
        originalUrl: 'https://www.youtube.com/watch?v=1BCrIlFjP3E',
        duration: '38:00 mins',
        creatorName: 'Physics Wallah',
        channelName: 'Physics Wallah Foundation',
        themeName: 'Properties of Quadrilaterals & Special Parallelograms',
        relatedLessonId: 'c8_les_4_1'
      },
      {
        id: 'vid_c8_4_1_ka_spec',
        type: 'extra',
        videoId: 'dVFp9psjn8c',
        title: 'Special Parallelograms (Rectangle, Rhombus, Square) | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/dVFp9psjn8c',
        originalUrl: 'https://www.youtube.com/watch?v=dVFp9psjn8c',
        duration: '14:20 mins',
        creatorName: 'Khan Academy India',
        channelName: 'Khan Academy',
        themeName: 'Properties of Quadrilaterals & Special Parallelograms',
        relatedLessonId: 'c8_les_4_1'
      },
      {
        id: 'vid_c8_4_2_ka_euler',
        type: 'primary',
        videoId: 'LiHbNecbtpY',
        title: 'Euler’s Formula & Visualising Solid Shapes | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/LiHbNecbtpY',
        originalUrl: 'https://www.youtube.com/watch?v=LiHbNecbtpY',
        duration: '12:45 mins',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Representing 3D in 2D & Euler\'s Formula (F + V = E + 2)',
        relatedLessonId: 'c8_les_4_2'
      },
      {
        id: 'vid_c8_4_2_pw_solid',
        type: 'revision',
        videoId: 'PxUHLlnBuCA',
        title: 'Visualising Solid Shapes & Euler’s Formula One-Shot | PW',
        youtubeUrl: 'https://www.youtube.com/embed/PxUHLlnBuCA',
        originalUrl: 'https://www.youtube.com/watch?v=PxUHLlnBuCA',
        duration: '28:10 mins',
        creatorName: 'Physics Wallah',
        channelName: 'Physics Wallah Foundation',
        themeName: 'Representing 3D in 2D & Euler\'s Formula (F + V = E + 2)',
        relatedLessonId: 'c8_les_4_2'
      },
      {
        id: 'vid_c8_4_2_mb_cube',
        type: 'extra',
        videoId: 'bGpfiE8gUco',
        title: 'Euler’s Relation for Polyhedrons (Cubes, Prisms, Pyramids) | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/bGpfiE8gUco',
        originalUrl: 'https://www.youtube.com/watch?v=bGpfiE8gUco',
        duration: '19:30 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Representing 3D in 2D & Euler\'s Formula (F + V = E + 2)',
        relatedLessonId: 'c8_les_4_2'
      },
      {
        id: 'vid_c8_4_3_mb_const',
        type: 'primary',
        videoId: 'GxPuHMZ9Ezk',
        title: 'Constructing a Quadrilateral Step-by-Step | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/GxPuHMZ9Ezk',
        originalUrl: 'https://www.youtube.com/watch?v=GxPuHMZ9Ezk',
        duration: '35:00 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Construction of Quadrilaterals (Sides, Diagonals & Angles)',
        relatedLessonId: 'c8_les_4_3'
      },
      {
        id: 'vid_c8_4_3_prac_const',
        type: 'revision',
        videoId: 'y5l6DAm_Njc',
        title: 'Practical Geometry: Quadrilateral Constructions Worked Examples',
        youtubeUrl: 'https://www.youtube.com/embed/y5l6DAm_Njc',
        originalUrl: 'https://www.youtube.com/watch?v=y5l6DAm_Njc',
        duration: '22:15 mins',
        creatorName: 'Geometry Practical Studio',
        channelName: 'Geometry Studio',
        themeName: 'Construction of Quadrilaterals (Sides, Diagonals & Angles)',
        relatedLessonId: 'c8_les_4_3'
      },
      {
        id: 'vid_c8_4_4_circ_1',
        type: 'primary',
        videoId: 'pfTuYdNJ4eY',
        title: 'Parts of a Circle (Radius, Diameter, Chord, Arc, Sector, Segment)',
        youtubeUrl: 'https://www.youtube.com/embed/pfTuYdNJ4eY',
        originalUrl: 'https://www.youtube.com/watch?v=pfTuYdNJ4eY',
        duration: '14:20 mins',
        creatorName: 'Math Concept Studio',
        channelName: 'Math Concept Studio',
        themeName: 'Circles & Symmetry (Arcs, Chords, Sectors & Reflection Symmetry)',
        relatedLessonId: 'c8_les_4_4'
      },
      {
        id: 'vid_c8_4_4_circ_2',
        type: 'revision',
        videoId: 'iP_vzq9Tm2E',
        title: 'Circle Terminology & Geometry Deep Dive',
        youtubeUrl: 'https://www.youtube.com/embed/iP_vzq9Tm2E',
        originalUrl: 'https://www.youtube.com/watch?v=iP_vzq9Tm2E',
        duration: '16:00 mins',
        creatorName: 'Geometry Hub',
        channelName: 'Geometry Hub',
        themeName: 'Circles & Symmetry (Arcs, Chords, Sectors & Reflection Symmetry)',
        relatedLessonId: 'c8_les_4_4'
      },
      {
        id: 'vid_c8_4_4_circ_3',
        type: 'extra',
        videoId: 'OJ_og9dCQh8',
        title: 'Circles & Symmetrical Shapes in Everyday Geometry',
        youtubeUrl: 'https://www.youtube.com/embed/OJ_og9dCQh8',
        originalUrl: 'https://www.youtube.com/watch?v=OJ_og9dCQh8',
        duration: '11:45 mins',
        creatorName: 'English Math Learning',
        channelName: 'English Math Learning',
        themeName: 'Circles & Symmetry (Arcs, Chords, Sectors & Reflection Symmetry)',
        relatedLessonId: 'c8_les_4_4'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 8 - Theme 4: Geometry',
    textbookContent: `
# ICSE Mathematics Class 8 - Theme 4: Geometry

## 4.1 Properties of Special Parallelograms
- **Parallelogram**: Opposite sides equal, opposite angles equal, diagonals bisect each other.
- **Rectangle**: Parallelogram with all angles $90^\\circ$; diagonals are equal and bisect each other.
- **Rhombus**: Parallelogram with all 4 sides equal; diagonals bisect each other at right angles ($90^\\circ$).
- **Square**: All 4 sides equal, all angles $90^\\circ$; diagonals are equal and bisect at right angles.

## 4.2 Euler's Relation for Polyhedrons
For any convex 3D polyhedron with $F$ faces, $V$ vertices, and $E$ edges:
$$F + V = E + 2$$
- Cube: $F=6, V=8, E=12 \\implies 6 + 8 = 12 + 2 = 14$.
- Triangular Prism: $F=5, V=6, E=9 \\implies 5 + 6 = 9 + 2 = 11$.

## 4.3 Construction of Quadrilaterals
A quadrilateral can be uniquely constructed with 5 independent measurements:
1. 4 sides and 1 diagonal
2. 3 sides and 2 diagonals
3. 3 sides and 2 included angles
4. 2 adjacent sides and 3 angles

## 4.4 Parts of a Circle
- **Chord**: Line segment joining two points on the circle.
- **Arc**: A portion of the circumference.
- **Sector**: Region bounded by two radii and an arc.
- **Segment**: Region bounded by a chord and an arc.
    `,
    notes: [
      { topic: 'Euler\'s Formula', text: 'F + V = E + 2 holds for all convex 3D polyhedrons.' },
      { topic: 'Rhombus Diagonals', text: 'Diagonals of a rhombus are perpendicular bisectors of each other.' },
      { topic: 'Circle Sectors vs Segments', text: 'Sector is bounded by radii (pie slice); Segment is bounded by a chord.' }
    ],
    lessons: [
      { id: 'c8_les_4_1', title: 'Properties of Quadrilaterals & Special Parallelograms', xp: 50 },
      { id: 'c8_les_4_2', title: 'Representing 3D in 2D & Euler\'s Formula (F + V = E + 2)', xp: 50 },
      { id: 'c8_les_4_3', title: 'Construction of Quadrilaterals (Sides, Diagonals & Angles)', xp: 50 },
      { id: 'c8_les_4_4', title: 'Circles & Symmetry (Arcs, Chords, Sectors & Reflection Symmetry)', xp: 50 }
    ]
  },
  {
    id: 'c8_theme_5',
    number: 5,
    title: 'Theme 5: Mensuration (Area, Surface Area & Volume)',
    description: 'Area of trapezium, general polygons & semi-circles, surface area and volume of cube, cuboid, and cylinder, and capacity unit conversions (1 L = 1000 cm³).',
    icon: 'Box',
    color: '#ff4b4b',
    bgLight: '#ffebee',
    themeName: 'Theme 5: Mensuration',
    olympiadStars: 4,
    olympiadRating: '⭐⭐⭐⭐☆',
    readinessLevel: '3D Mensuration & Applied Geometry',
    youtubeUrl: 'https://www.youtube.com/embed/dtiKr09e5ig',
    playlist: [
      {
        id: 'vid_c8_5_1_mb_trap',
        type: 'primary',
        videoId: 'dtiKr09e5ig',
        title: 'Area of Trapezium & Polygons | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/dtiKr09e5ig',
        originalUrl: 'https://www.youtube.com/watch?v=dtiKr09e5ig',
        duration: '28:40 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Area of Trapezium, General Polygons & Semi-Circles',
        relatedLessonId: 'c8_les_5_1'
      },
      {
        id: 'vid_c8_5_1_vis_trap',
        type: 'extra',
        videoId: 'TniA2S9CKN8',
        title: 'Why the Trapezium Area Formula Works (Visual Proof)',
        youtubeUrl: 'https://www.youtube.com/embed/TniA2S9CKN8',
        originalUrl: 'https://www.youtube.com/watch?v=TniA2S9CKN8',
        duration: '08:15 mins',
        creatorName: 'Visual Geometry',
        channelName: 'Visual Geometry',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Area of Trapezium & Polygons',
        relatedLessonId: 'c8_les_5_1'
      },
      {
        id: 'vid_c8_5_1_vis_trap',
        type: 'extra',
        videoId: 'TniA2S9CKN8',
        title: 'Why the Trapezium Area Formula Works (Visual Proof)',
        youtubeUrl: 'https://www.youtube.com/embed/TniA2S9CKN8',
        originalUrl: 'https://www.youtube.com/watch?v=TniA2S9CKN8',
        duration: '08:15 mins',
        creatorName: 'Visual Geometry',
        channelName: 'Visual Geometry',
        themeName: 'Area of Trapezium & Polygons',
        relatedLessonId: 'c8_les_5_1'
      },
      {
        id: 'vid_c8_5_1_corb_trap',
        type: 'revision',
        videoId: 'jWX9KNToIcA',
        title: 'Area of a Trapezium | Corbettmaths',
        youtubeUrl: 'https://www.youtube.com/embed/jWX9KNToIcA',
        originalUrl: 'https://youtu.be/jWX9KNToIcA',
        duration: '09:50 mins',
        creatorName: 'Corbettmaths',
        channelName: 'Corbettmaths',
        themeName: 'Area of Trapezium & Polygons',
        relatedLessonId: 'c8_les_5_1'
      },
      {
        id: 'vid_c8_5_2_semi_1',
        type: 'primary',
        videoId: '6brKbdOQ2EQ',
        title: 'Area of a Semicircle | Formula, Definition & Perimeter',
        youtubeUrl: 'https://www.youtube.com/embed/6brKbdOQ2EQ',
        originalUrl: 'https://www.youtube.com/watch?v=6brKbdOQ2EQ',
        duration: '08:30 mins',
        creatorName: 'Math Geometry Studio',
        channelName: 'Geometry Studio',
        themeName: 'Area of Semi-Circle',
        relatedLessonId: 'c8_les_5_2'
      },
      {
        id: 'vid_c8_5_2_semi_2',
        type: 'revision',
        videoId: 'Ml-Lxlo9RDU',
        title: 'SEMI CIRCLE (Area & Perimeter) | Math Animation',
        youtubeUrl: 'https://www.youtube.com/embed/Ml-Lxlo9RDU',
        originalUrl: 'https://www.youtube.com/watch?v=Ml-Lxlo9RDU',
        duration: '06:15 mins',
        creatorName: 'Math Animation Studio',
        channelName: 'Math Animation Studio',
        themeName: 'Area of Semi-Circle',
        relatedLessonId: 'c8_les_5_2'
      },
      {
        id: 'vid_c8_5_2_semi_3',
        type: 'extra',
        videoId: 'Hh5PG6t-XYA',
        title: 'Class 7 | 8 – Area and Perimeter of Semicircle',
        youtubeUrl: 'https://www.youtube.com/embed/Hh5PG6t-XYA',
        originalUrl: 'https://www.youtube.com/watch?v=Hh5PG6t-XYA',
        duration: '11:40 mins',
        creatorName: 'Target Math',
        channelName: 'Target Math',
        themeName: 'Area of Semi-Circle',
        relatedLessonId: 'c8_les_5_2'
      },
      {
        id: 'vid_c8_5_3_mb_sa',
        type: 'primary',
        videoId: 'rxMu6If7jWM',
        title: 'Surface Area of Cube, Cuboid & Cylinder | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/rxMu6If7jWM',
        originalUrl: 'https://www.youtube.com/watch?v=rxMu6If7jWM',
        duration: '38:20 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Surface Area of Cube, Cuboid & Cylinder (Total & Curved Area)',
        relatedLessonId: 'c8_les_5_3'
      },
      {
        id: 'vid_c8_5_4_mb_vol',
        type: 'primary',
        videoId: 'bpHoH4q-Fxs',
        title: 'Volume of Cube, Cuboid and Cylinder | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/bpHoH4q-Fxs',
        originalUrl: 'https://www.youtube.com/watch?v=bpHoH4q-Fxs',
        duration: '35:10 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Volume of Cube, Cuboid, Cylinder & Capacity Calculations',
        relatedLessonId: 'c8_les_5_4'
      },
      {
        id: 'vid_c8_5_4_mb_cap',
        type: 'extra',
        videoId: 'FBeTkl7h_rU',
        title: 'Volume & Capacity Calculations and Unit Conversions | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/FBeTkl7h_rU',
        originalUrl: 'https://www.youtube.com/watch?v=FBeTkl7h_rU',
        duration: '22:00 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Volume of Cube, Cuboid, Cylinder & Capacity Calculations',
        relatedLessonId: 'c8_les_5_4'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 8 - Theme 5: Mensuration',
    textbookContent: `
# ICSE Mathematics Class 8 - Theme 5: Mensuration

## 5.1 Area of Plane Figures
- **Trapezium**: $\\text{Area} = \\frac{1}{2} \\times (a + b) \\times h$, where $a, b$ are parallel sides and $h$ is the perpendicular height.
- **General Polygon**: Divide the polygon into triangles and trapezia, then sum the areas.
- **Semi-Circle**: $\\text{Area} = \\frac{1}{2} \\pi r^2, \\quad \\text{Perimeter} = \\pi r + 2r$.

## 5.2 Surface Area of Solids
- **Cube** (edge $l$): $\\text{LSA} = 4l^2, \\quad \\text{TSA} = 6l^2$.
- **Cuboid** ($l, b, h$): $\\text{LSA} = 2h(l + b), \\quad \\text{TSA} = 2(lb + bh + hl)$.
- **Right Circular Cylinder** ($r, h$):
  - Curved Surface Area (CSA) $= 2\\pi r h$
  - Total Surface Area (TSA) $= 2\\pi r(r + h)$

## 5.3 Volume and Capacity
- **Volume of Cube**: $V = l^3$
- **Volume of Cuboid**: $V = l \\times b \\times h$
- **Volume of Cylinder**: $V = \\pi r^2 h$
- **Capacity**: $1 \\text{ cm}^3 = 1 \\text{ mL}, \\quad 1000 \\text{ cm}^3 = 1 \\text{ L}, \\quad 1 \\text{ m}^3 = 1000 \\text{ L}$.
    `,
    notes: [
      { topic: 'Trapezium Area Formula', text: 'Area = (1/2) * (Sum of Parallel Sides) * Height.' },
      { topic: 'Semi-Circle Area & Perimeter', text: 'Area = (1/2) * pi * r^2. Perimeter = pi * r + 2*r.' },
      { topic: 'Cylinder TSA vs CSA', text: 'TSA = CSA + 2 * (Base Area) = 2*pi*r*h + 2*pi*r^2 = 2*pi*r*(r + h).' },
      { topic: 'Capacity Conversion', text: '1 m^3 = 1000 Litres; 1 Litre = 1000 cm^3.' }
    ],
    lessons: [
      { id: 'c8_les_5_1', title: 'Area of Trapezium & Polygons', xp: 50 },
      { id: 'c8_les_5_2', title: 'Area of Semi-Circle', xp: 50 },
      { id: 'c8_les_5_3', title: 'Surface Area of Cube, Cuboid & Cylinder (Total & Curved Area)', xp: 50 },
      { id: 'c8_les_5_4', title: 'Volume of Cube, Cuboid, Cylinder & Capacity Calculations', xp: 50 }
    ]
  },
  {
    id: 'c8_theme_6',
    number: 6,
    title: 'Theme 6: Data Handling & Probability',
    description: 'Arranging ungrouped data into grouped frequency distributions, constructing and interpreting bar-graphs and pie charts, central angle calculations, and calculating probability of chance events.',
    icon: 'PieChart',
    color: '#ce82ff',
    bgLight: '#f6e5ff',
    themeName: 'Theme 6: Data Handling',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Statistical Analysis & Probability',
    youtubeUrl: 'https://www.youtube.com/embed/0rnLfWzeQ0o',
    playlist: [
      {
        id: 'vid_c8_6_1_grp_1',
        type: 'primary',
        videoId: '0rnLfWzeQ0o',
        title: 'Grouping of Data and Histogram – Part 1/3',
        youtubeUrl: 'https://www.youtube.com/embed/0rnLfWzeQ0o',
        originalUrl: 'https://www.youtube.com/watch?v=0rnLfWzeQ0o',
        duration: '14:20 mins',
        creatorName: 'Learning Studio',
        channelName: 'Learning Studio',
        themeName: 'Arranging Ungrouped Data into Groups',
        relatedLessonId: 'c8_les_6_1'
      },
      {
        id: 'vid_c8_6_1_grp_2',
        type: 'revision',
        videoId: 'YllJcqTr-Uk',
        title: 'Grouping of Data and Histogram – Part 2/3',
        youtubeUrl: 'https://www.youtube.com/embed/YllJcqTr-Uk',
        originalUrl: 'https://www.youtube.com/watch?v=YllJcqTr-Uk',
        duration: '16:05 mins',
        creatorName: 'Learning Studio',
        channelName: 'Learning Studio',
        themeName: 'Arranging Ungrouped Data into Groups',
        relatedLessonId: 'c8_les_6_1'
      },
      {
        id: 'vid_c8_6_1_grp_3',
        type: 'extra',
        videoId: 'DhEYCE53J5o',
        title: 'Data Handling | Grouping of Data | Class 8',
        youtubeUrl: 'https://www.youtube.com/embed/DhEYCE53J5o',
        originalUrl: 'https://www.youtube.com/watch?v=DhEYCE53J5o',
        duration: '18:40 mins',
        creatorName: 'Maths Class 8',
        channelName: 'Maths Class 8',
        themeName: 'Arranging Ungrouped Data into Groups',
        relatedLessonId: 'c8_les_6_1'
      },
      {
        id: 'vid_c8_6_2_mb_pie',
        type: 'primary',
        videoId: 'sOXBjrM6yuI',
        title: 'Drawing and Interpreting Pie Charts | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/sOXBjrM6yuI',
        originalUrl: 'https://www.youtube.com/watch?v=sOXBjrM6yuI',
        duration: '32:00 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Bar Graphs & Pie Charts',
        relatedLessonId: 'c8_les_6_2'
      },
      {
        id: 'vid_c8_6_2_pw_graph',
        type: 'revision',
        videoId: 'VdL-5VNDFpI',
        title: 'Introduction to Graphs (Bar & Pie Charts) | Physics Wallah',
        youtubeUrl: 'https://www.youtube.com/embed/VdL-5VNDFpI',
        originalUrl: 'https://www.youtube.com/watch?v=VdL-5VNDFpI',
        duration: '30:45 mins',
        creatorName: 'Physics Wallah',
        channelName: 'Physics Wallah Foundation',
        themeName: 'Bar Graphs & Pie Charts',
        relatedLessonId: 'c8_les_6_2'
      },
      {
        id: 'vid_c8_6_2_eng_chart',
        type: 'extra',
        videoId: '0Mft3Od5MYM',
        title: 'Types of Mathematical Charts & Graphs in Practice',
        youtubeUrl: 'https://www.youtube.com/embed/0Mft3Od5MYM',
        originalUrl: 'https://www.youtube.com/watch?v=0Mft3Od5MYM',
        duration: '15:30 mins',
        creatorName: 'English Math Channel',
        channelName: 'English Math Channel',
        themeName: 'Bar Graphs & Pie Charts',
        relatedLessonId: 'c8_les_6_2'
      },
      {
        id: 'vid_c8_6_3_mb_prob',
        type: 'primary',
        videoId: '36M8M4RvTS8',
        title: 'Chances and Probability Complete Lesson | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/36M8M4RvTS8',
        originalUrl: 'https://www.youtube.com/watch?v=36M8M4RvTS8',
        duration: '34:10 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Chance and Probability (Coins, Dice & Real-Life Experiments)',
        relatedLessonId: 'c8_les_6_3'
      },
      {
        id: 'vid_c8_6_3_eng_prob1',
        type: 'revision',
        videoId: 'l93kLw7ZYPY',
        title: 'Chance & Probability Part 1: Basic Principles',
        youtubeUrl: 'https://www.youtube.com/embed/l93kLw7ZYPY',
        originalUrl: 'https://www.youtube.com/watch?v=l93kLw7ZYPY',
        duration: '18:15 mins',
        creatorName: 'English Math Channel',
        channelName: 'English Math Channel',
        themeName: 'Chance and Probability (Coins, Dice & Real-Life Experiments)',
        relatedLessonId: 'c8_les_6_3'
      },
      {
        id: 'vid_c8_6_3_dtl_prob',
        type: 'extra',
        videoId: 'AjBsieL5IZM',
        title: 'Probability Introduction with Coins, Dice & Balls | Class 8',
        youtubeUrl: 'https://www.youtube.com/embed/AjBsieL5IZM',
        originalUrl: 'https://www.youtube.com/watch?v=AjBsieL5IZM',
        duration: '26:00 mins',
        creatorName: 'Class 8 Math Studio',
        channelName: 'Class 8 Math Studio',
        themeName: 'Chance and Probability (Coins, Dice & Real-Life Experiments)',
        relatedLessonId: 'c8_les_6_3'
      },
      {
        id: 'vid_c8_6_3_ka_prob',
        type: 'extra',
        videoId: 'uzkc-qNVoOk',
        title: 'Probability with Coins and Dice | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/uzkc-qNVoOk',
        originalUrl: 'https://www.youtube.com/watch?v=uzkc-qNVoOk',
        duration: '14:50 mins',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Chance and Probability (Coins, Dice & Real-Life Experiments)',
        relatedLessonId: 'c8_les_6_3'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 8 - Theme 6: Data Handling',
    textbookContent: `
# ICSE Mathematics Class 8 - Theme 6: Data Handling & Probability

## 6.1 Grouped Data & Graphical Representation
- **Grouped Frequency Distribution**: Class intervals, Class limits (Upper & Lower), Class mark (Mid-point $= \\frac{\\text{Upper} + \\text{Lower}}{2}$).
- **Pie Chart (Circle Graph)**:
  - Total angle at centre $= 360^\\circ$.
  - $\\text{Central Angle of a Component} = \\frac{\\text{Value of Component}}{\\text{Total Value}} \\times 360^\\circ$.

## 6.2 Probability & Chance
- **Random Experiment**: An experiment whose outcome cannot be predicted with certainty in advance.
- **Sample Space ($S$)**: Set of all possible outcomes.
  - Tossing a coin: $S = \\{H, T\\}, n(S) = 2$.
  - Rolling a die: $S = \\{1, 2, 3, 4, 5, 6\\}, n(S) = 6$.
- **Probability of Event ($E$)**:
$$P(E) = \\frac{\\text{Number of favourable outcomes } n(E)}{\\text{Total number of possible outcomes } n(S)}$$
- Always: $0 \\le P(E) \\le 1$.
    `,
    notes: [
      { topic: 'Grouped Frequency Tables', text: 'Organize continuous or large data into class intervals (e.g. 0-10, 10-20).' },
      { topic: 'Pie Chart Central Angle', text: 'Central Angle = (Component Value / Total Value) * 360 degrees.' },
      { topic: 'Probability Range', text: 'Probability is always between 0 (impossible event) and 1 (certain event).' },
      { topic: 'Class Mark', text: 'Class Mark = (Upper Limit + Lower Limit) / 2.' }
    ],
    lessons: [
      { id: 'c8_les_6_1', title: 'Arranging Ungrouped Data into Groups', xp: 50 },
      { id: 'c8_les_6_2', title: 'Bar Graphs & Pie Charts', xp: 50 },
      { id: 'c8_les_6_3', title: 'Chance and Probability (Coins, Dice & Real-Life Experiments)', xp: 50 }
    ]
  }
];

export const class5Chapters = [
  {
    id: 'c5_theme_1',
    number: 1,
    title: 'Theme 1: Numbers',
    description: 'Sense of numbers up to 8 digits, place value and estimation, Indian and International number systems, approximation, natural & whole numbers, number line, and operational properties.',
    icon: 'Hash',
    color: '#58cc02',
    bgLight: '#e5f9d8',
    themeName: 'Theme 1: Numbers',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Foundation Numbers Mastery',
    youtubeUrl: 'https://www.youtube.com/embed/jxA8MffVmPs',
    playlist: [
      {
        id: 'vid_c5_1_1_ka',
        type: 'primary',
        videoId: 'jxA8MffVmPs',
        title: 'Finding a Number\'s Place Value | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/jxA8MffVmPs',
        originalUrl: 'https://www.youtube.com/watch?v=jxA8MffVmPs',
        duration: '08:45 mins',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Place Value & Large Numbers',
        relatedLessonId: 'c5_les_1_1'
      },
      {
        id: 'vid_c5_1_1_ln',
        type: 'revision',
        videoId: 'ziVMro-BbnU',
        title: 'Class 5 Place Value & Large Numbers | Learning Notebook',
        youtubeUrl: 'https://www.youtube.com/embed/ziVMro-BbnU',
        originalUrl: 'https://www.youtube.com/watch?v=ziVMro-BbnU',
        duration: '15:20 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: 'Place Value & Large Numbers',
        relatedLessonId: 'c5_les_1_1'
      },
      {
        id: 'vid_c5_1_1_pw',
        type: 'extra',
        videoId: 'tqZ2r2Kujxk',
        title: 'Place Value Explanation & Chart | Periwinkle',
        youtubeUrl: 'https://www.youtube.com/embed/tqZ2r2Kujxk',
        originalUrl: 'https://www.youtube.com/watch?v=tqZ2r2Kujxk',
        duration: '07:15 mins',
        creatorName: 'Periwinkle',
        channelName: 'Periwinkle',
        themeName: 'Place Value & Large Numbers',
        relatedLessonId: 'c5_les_1_1'
      },
      {
        id: 'vid_c5_1_2_ln',
        type: 'primary',
        videoId: 'Bn0kC6rTMbA',
        title: 'Operations on Large Numbers | Learning Notebook',
        youtubeUrl: 'https://www.youtube.com/embed/Bn0kC6rTMbA',
        originalUrl: 'https://www.youtube.com/watch?v=Bn0kC6rTMbA',
        duration: '18:30 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: 'Operations on Large Numbers & Estimations',
        relatedLessonId: 'c5_les_1_2'
      },
      {
        id: 'vid_c5_1_3_nat',
        type: 'primary',
        videoId: 'XtzRXTedJQ0',
        title: 'Natural Numbers vs Whole Numbers',
        youtubeUrl: 'https://www.youtube.com/embed/XtzRXTedJQ0',
        originalUrl: 'https://www.youtube.com/watch?v=XtzRXTedJQ0',
        duration: '08:20 mins',
        creatorName: 'Math Learning Studio',
        channelName: 'Math Learning Studio',
        themeName: 'Number Properties, Natural & Whole Numbers',
        relatedLessonId: 'c5_les_1_3'
      },
      {
        id: 'vid_c5_1_3_prop',
        type: 'revision',
        videoId: '62NoiGwZmd4',
        title: 'Properties of Whole Numbers',
        youtubeUrl: 'https://www.youtube.com/embed/62NoiGwZmd4',
        originalUrl: 'https://www.youtube.com/watch?v=62NoiGwZmd4',
        duration: '12:15 mins',
        creatorName: 'Math Concepts',
        channelName: 'Math Concepts',
        themeName: 'Number Properties, Natural & Whole Numbers',
        relatedLessonId: 'c5_les_1_3'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 5 - Theme 1: Numbers',
    textbookContent: `
# ICSE Mathematics Class 5 - Theme 1: Numbers

## 1.1 Large Numbers (Up to 8 Digits)
- **Indian System**: Periods are Crores, Lakhs, Thousands, and Ones ($1,23,45,678$).
- **International System**: Periods are Millions, Thousands, and Ones ($12,345,678$).
- **Place Value vs Face Value**: Place value depends on position; Face value is the digit itself.

## 1.2 Natural Numbers & Whole Numbers
- Natural numbers: $1, 2, 3, 4, \\dots$
- Whole numbers: $0, 1, 2, 3, \\dots$ (includes 0).

## 1.3 Properties of Operations
- **Commutative Property**: $a + b = b + a$ and $a \\times b = b \\times a$.
- **Associative Property**: $(a + b) + c = a + (b + c)$.
- **Distributive Property**: $a \\times (b + c) = (a \\times b) + (a \\times c)$.
- **Identities**: Additive identity is $0$; Multiplicative identity is $1$.
    `,
    notes: [
      { topic: 'Place Value Chart', text: '1 Million = 10 Lakhs. 1 Crore = 10 Millions.' },
      { topic: 'Distributive Law', text: 'a*(b + c) = a*b + a*c makes large mental multiplications easy.' },
      { topic: 'Estimation', text: 'Round numbers to the nearest ten, hundred, or thousand before estimating sums.' }
    ],
    lessons: [
      { id: 'c5_les_1_1', title: 'Place Value & Large Numbers (Indian & International Systems)', xp: 45 },
      { id: 'c5_les_1_2', title: 'Operations on Large Numbers & Estimations', xp: 45 },
      { id: 'c5_les_1_3', title: 'Number Properties, Natural & Whole Numbers', xp: 45 }
    ]
  },
  {
    id: 'c5_theme_2',
    number: 2,
    title: 'Theme 2: Number Operations',
    description: 'Addition, subtraction, multiplication, and division on large numbers, estimation of outcomes, word problems, and real-life unit conversions.',
    icon: 'Calculator',
    color: '#1cb0f6',
    bgLight: '#e0f4ff',
    themeName: 'Theme 2: Number Operations',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Arithmetic Proficiency',
    youtubeUrl: 'https://www.youtube.com/embed/Bn0kC6rTMbA',
    playlist: [
      {
        id: 'vid_c5_2_1_ln',
        type: 'primary',
        videoId: 'Bn0kC6rTMbA',
        title: 'Operations on Large Numbers | Learning Notebook',
        youtubeUrl: 'https://www.youtube.com/embed/Bn0kC6rTMbA',
        originalUrl: 'https://www.youtube.com/watch?v=Bn0kC6rTMbA',
        duration: '18:30 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: 'Operations on Large Numbers',
        relatedLessonId: 'c5_les_2_1'
      },
      {
        id: 'vid_c5_2_2_peri',
        type: 'primary',
        videoId: 'Q-O1HeobVEs',
        title: 'Conversion of Metric Measurements | Periwinkle',
        youtubeUrl: 'https://www.youtube.com/embed/Q-O1HeobVEs',
        originalUrl: 'https://www.youtube.com/watch?v=Q-O1HeobVEs',
        duration: '07:45 mins',
        creatorName: 'Periwinkle',
        channelName: 'Periwinkle',
        themeName: 'Word Problems, Estimations & Unit Conversions',
        relatedLessonId: 'c5_les_2_2'
      },
      {
        id: 'vid_c5_2_2_gs',
        type: 'revision',
        videoId: 'Rqshlzrp7bU',
        title: 'Class 5 Maths – Measurement Units | GlobalShiksha',
        youtubeUrl: 'https://www.youtube.com/embed/Rqshlzrp7bU',
        originalUrl: 'https://www.youtube.com/watch?v=Rqshlzrp7bU',
        duration: '09:30 mins',
        creatorName: 'GlobalShiksha',
        channelName: 'GlobalShiksha',
        themeName: 'Word Problems, Estimations & Unit Conversions',
        relatedLessonId: 'c5_les_2_2'
      },
      {
        id: 'vid_c5_2_2_orch',
        type: 'extra',
        videoId: 'dyFSWZJB8fA',
        title: 'Measurement | Orchids eLearning',
        youtubeUrl: 'https://www.youtube.com/embed/dyFSWZJB8fA',
        originalUrl: 'https://www.youtube.com/watch?v=dyFSWZJB8fA',
        duration: '11:10 mins',
        creatorName: 'Orchids eLearning',
        channelName: 'Orchids eLearning',
        themeName: 'Word Problems, Estimations & Unit Conversions',
        relatedLessonId: 'c5_les_2_2'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 5 - Theme 2: Number Operations',
    textbookContent: `
# ICSE Mathematics Class 5 - Theme 2: Number Operations

## 2.1 Arithmetic Operations on Multi-Digit Numbers
- **Column Addition & Subtraction**: Aligning digits from right to left (ones to ones, tens to tens).
- **Multiplication**: Multi-digit multiplier with partial products.
- **Long Division**: $\\text{Dividend} = (\\text{Divisor} \\times \\text{Quotient}) + \\text{Remainder}$.

## 2.2 Word Problems & Estimation
- Estimating the outcome before performing calculation to verify reasonableness.
- Unit conversions involved in multi-step word problems (e.g. converting grams to kilograms, meters to kilometers).
    `,
    notes: [
      { topic: 'Division Algorithm', text: 'Dividend = Divisor * Quotient + Remainder, where Remainder < Divisor.' },
      { topic: 'Word Problem Strategy', text: 'Identify the key operation: Total = Add/Multiply; Difference/Leftover = Subtract; Equal Distribution = Divide.' }
    ],
    lessons: [
      { id: 'c5_les_2_1', title: 'Operations on Large Numbers (Addition, Subtraction, Multiplication, Division)', xp: 45 },
      { id: 'c5_les_2_2', title: 'Word Problems, Estimations & Unit Conversions', xp: 45 }
    ]
  },
  {
    id: 'c5_theme_3',
    number: 3,
    title: 'Theme 3: Fractions and Decimals',
    description: 'Fraction types (proper, improper, mixed), equivalent fractions, fraction operations, decimal fractions, decimal place value, and decimal applications in money & measurement.',
    icon: 'PieChart',
    color: '#ff9600',
    bgLight: '#fff3e0',
    themeName: 'Theme 3: Fractions and Decimals',
    olympiadStars: 4,
    olympiadRating: '⭐⭐⭐⭐☆',
    readinessLevel: 'Fractions & Rational Basics',
    youtubeUrl: 'https://www.youtube.com/embed/CA9XLJpQp3c',
    playlist: [
      {
        id: 'vid_c5_3_1_ma',
        type: 'primary',
        videoId: 'CA9XLJpQp3c',
        title: 'Fractions Are Parts | Math Antics',
        youtubeUrl: 'https://www.youtube.com/embed/CA9XLJpQp3c',
        originalUrl: 'https://www.youtube.com/watch?v=CA9XLJpQp3c',
        duration: '09:20 mins',
        creatorName: 'Math Antics',
        channelName: 'Math Antics',
        themeName: 'Understanding Fractions',
        relatedLessonId: 'c5_les_3_1'
      },
      {
        id: 'vid_c5_3_2_ma',
        type: 'primary',
        videoId: 'Mst8iZjIpFE',
        title: 'Fractions and Decimals | Math Antics',
        youtubeUrl: 'https://www.youtube.com/embed/Mst8iZjIpFE',
        originalUrl: 'https://www.youtube.com/watch?v=Mst8iZjIpFE',
        duration: '11:10 mins',
        creatorName: 'Math Antics',
        channelName: 'Math Antics',
        themeName: 'Fractions and Decimals Conversion',
        relatedLessonId: 'c5_les_3_2'
      },
      {
        id: 'vid_c5_3_3_add',
        type: 'primary',
        videoId: '5juto2ze8Lg',
        title: 'Adding & Subtracting Fractions | Math Antics',
        youtubeUrl: 'https://www.youtube.com/embed/5juto2ze8Lg',
        originalUrl: 'https://www.youtube.com/watch?v=5juto2ze8Lg',
        duration: '11:30 mins',
        creatorName: 'Math Antics',
        channelName: 'Math Antics',
        themeName: 'Operations on Fractions & Decimals with Word Problems',
        relatedLessonId: 'c5_les_3_3'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 5 - Theme 3: Fractions and Decimals',
    textbookContent: `
# ICSE Mathematics Class 5 - Theme 3: Fractions and Decimals

## 3.1 Fractions Fundamentals
- **Proper Fraction**: Numerator < Denominator (e.g. $\\frac{3}{5}$).
- **Improper Fraction**: Numerator $\\ge$ Denominator (e.g. $\\frac{7}{4}$).
- **Mixed Fraction**: Whole number and proper fraction (e.g. $1\\frac{3}{4}$).
- **Equivalent Fractions**: Multiply or divide numerator and denominator by the same non-zero number: $\\frac{a}{b} = \\frac{a \\times k}{b \\times k}$.

## 3.2 Decimals & Place Value
- The decimal point separates the whole number part from the fractional part:
  - Tenths ($\\frac{1}{10}$), Hundredths ($\\frac{1}{100}$), Thousandths ($\\frac{1}{1000}$).
- **Conversions**: $\\frac{3}{4} = \\frac{75}{100} = 0.75$; $0.6 = \\frac{6}{10} = \\frac{3}{5}$.
    `,
    notes: [
      { topic: 'Equivalent Fractions', text: 'Multiply numerator and denominator by the same number to find equivalent fractions.' },
      { topic: 'Decimal Alignment', text: 'Always align the decimal points vertically when adding or subtracting decimal numbers.' }
    ],
    lessons: [
      { id: 'c5_les_3_1', title: 'Understanding Fractions (Parts of a Whole, Types & Equivalence)', xp: 45 },
      { id: 'c5_les_3_2', title: 'Fractions and Decimals Conversion & Decimal Place Value', xp: 45 },
      { id: 'c5_les_3_3', title: 'Operations on Fractions & Decimals with Word Problems', xp: 45 }
    ]
  },
  {
    id: 'c5_theme_4',
    number: 4,
    title: 'Theme 4: Playing with Numbers (Factors & Multiples)',
    description: 'Factors and multiples, prime factorisation, prime and composite numbers, divisibility tests (2 to 11), HCF & LCM methods, and the LCM × HCF relationship.',
    icon: 'Sparkles',
    color: '#7c3aed',
    bgLight: '#f3e8ff',
    themeName: 'Theme 4: Playing with Numbers',
    olympiadStars: 4,
    olympiadRating: '⭐⭐⭐⭐☆',
    readinessLevel: 'Number Theory Foundations',
    youtubeUrl: 'https://www.youtube.com/embed/0NvLtTwnUHs',
    playlist: [
      {
        id: 'vid_c5_4_1_ma',
        type: 'primary',
        videoId: '0NvLtTwnUHs',
        title: 'Factoring Numbers | Math Antics',
        youtubeUrl: 'https://www.youtube.com/embed/0NvLtTwnUHs',
        originalUrl: 'https://www.youtube.com/watch?v=0NvLtTwnUHs',
        duration: '10:30 mins',
        creatorName: 'Math Antics',
        channelName: 'Math Antics',
        themeName: 'Factors, Multiples & Factoring Methods',
        relatedLessonId: 'c5_les_4_1'
      },
      {
        id: 'vid_c5_4_2_ma',
        type: 'primary',
        videoId: 'XGbOiYhHY2c',
        title: 'Prime Factorization | Math Antics',
        youtubeUrl: 'https://www.youtube.com/embed/XGbOiYhHY2c',
        originalUrl: 'https://www.youtube.com/watch?v=XGbOiYhHY2c',
        duration: '11:00 mins',
        creatorName: 'Math Antics',
        channelName: 'Math Antics',
        themeName: 'Prime Numbers & Prime Factorisation',
        relatedLessonId: 'c5_les_4_2'
      },
      {
        id: 'vid_c5_4_3_ln',
        type: 'primary',
        videoId: 'eQ9hlxAylLg',
        title: 'LCM and HCF Complete Lesson | Learning Notebook',
        youtubeUrl: 'https://www.youtube.com/embed/eQ9hlxAylLg',
        originalUrl: 'https://www.youtube.com/watch?v=eQ9hlxAylLg',
        duration: '16:45 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: 'HCF and LCM Methods',
        relatedLessonId: 'c5_les_4_3'
      },
      {
        id: 'vid_c5_4_4_div',
        type: 'primary',
        videoId: '0DMBjvUdtMo',
        title: 'Divisibility Rules for 2, 3, 4, 5, 6, 8, 9, 10, 11',
        youtubeUrl: 'https://www.youtube.com/embed/0DMBjvUdtMo',
        originalUrl: 'https://www.youtube.com/watch?v=0DMBjvUdtMo',
        duration: '10:15 mins',
        creatorName: 'Math Learning Studio',
        channelName: 'Math Learning Studio',
        themeName: 'Divisibility Rules & Simplification of Brackets',
        relatedLessonId: 'c5_les_4_4'
      },
      {
        id: 'vid_c5_4_4_pw',
        type: 'revision',
        videoId: 'dWhavMeUi5E',
        title: 'Divisibility Tests Explained | Periwinkle',
        youtubeUrl: 'https://www.youtube.com/embed/dWhavMeUi5E',
        originalUrl: 'https://www.youtube.com/watch?v=dWhavMeUi5E',
        duration: '08:00 mins',
        creatorName: 'Periwinkle',
        channelName: 'Periwinkle',
        themeName: 'Divisibility Rules & Simplification of Brackets',
        relatedLessonId: 'c5_les_4_4'
      },
      {
        id: 'vid_c5_4_4_order',
        type: 'extra',
        videoId: 'dAgfnK528RA',
        title: 'Order of Operations / Simplification of Brackets | Math Antics',
        youtubeUrl: 'https://www.youtube.com/embed/dAgfnK528RA',
        originalUrl: 'https://www.youtube.com/watch?v=dAgfnK528RA',
        duration: '09:40 mins',
        creatorName: 'Math Antics',
        channelName: 'Math Antics',
        themeName: 'Divisibility Rules & Simplification of Brackets',
        relatedLessonId: 'c5_les_4_4'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 5 - Theme 4: Playing with Numbers',
    textbookContent: `
# ICSE Mathematics Class 5 - Theme 4: Playing with Numbers

## 4.1 Factors and Multiples
- **Factor**: An exact divisor of a number ($1$ is a factor of every number).
- **Multiple**: Product of a number and any non-zero integer.
- **Prime Numbers**: Numbers having exactly 2 factors ($1$ and itself).
- **Composite Numbers**: Numbers having more than 2 factors ($4, 6, 8, 9, 10, \\dots$).

## 4.2 HCF and LCM
- **Highest Common Factor (HCF)**: The greatest common divisor among given numbers.
- **Lowest Common Multiple (LCM)**: The smallest non-zero common multiple.
- **Fundamental Property**:
$$\\text{LCM}(a, b) \\times \\text{HCF}(a, b) = a \\times b$$
    `,
    notes: [
      { topic: 'HCF and LCM Formula', text: 'HCF * LCM = Product of the two numbers. If HCF=4, LCM=24 and one number=8, the other is (4*24)/8 = 12.' },
      { topic: 'Prime Numbers', text: '2 is the only even prime number. 1 is neither prime nor composite.' }
    ],
    lessons: [
      { id: 'c5_les_4_1', title: 'Factors, Multiples & Factoring Methods', xp: 45 },
      { id: 'c5_les_4_2', title: 'Prime Numbers & Prime Factorisation', xp: 45 },
      { id: 'c5_les_4_3', title: 'HCF and LCM (Methods & Relationship LCM × HCF)', xp: 45 },
      { id: 'c5_les_4_4', title: 'Divisibility Rules (2 to 11) & Simplification of Brackets', xp: 45 }
    ]
  },
  {
    id: 'c5_theme_5',
    number: 5,
    title: 'Theme 5: Introduction to Negative Numbers',
    description: 'Need for negative numbers in daily life (temperature, depths, debts), representation and ordering of integers on the number line, and basic operations.',
    icon: 'TrendingDown',
    color: '#00b4d8',
    bgLight: '#e0f7fa',
    themeName: 'Theme 5: Introduction to Negative Numbers',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Integer Foundations',
    youtubeUrl: 'https://www.youtube.com/embed/uzE76nZmubg',
    playlist: [
      {
        id: 'vid_c5_5_1_hp',
        type: 'primary',
        videoId: 'uzE76nZmubg',
        title: 'Positive and Negative Numbers for Kids | Homeschool Pop',
        youtubeUrl: 'https://www.youtube.com/embed/uzE76nZmubg',
        originalUrl: 'https://www.youtube.com/watch?v=uzE76nZmubg',
        duration: '06:40 mins',
        creatorName: 'Homeschool Pop',
        channelName: 'Homeschool Pop',
        themeName: 'Introduction to Negative Numbers',
        relatedLessonId: 'c5_les_5_1'
      },
      {
        id: 'vid_c5_5_1_lf',
        type: 'revision',
        videoId: '6U1kCOuNpR4',
        title: 'Negative Numbers: An Overview | LearnFree',
        youtubeUrl: 'https://www.youtube.com/embed/6U1kCOuNpR4',
        originalUrl: 'https://www.youtube.com/watch?v=6U1kCOuNpR4',
        duration: '04:50 mins',
        creatorName: 'LearnFree',
        channelName: 'LearnFree',
        themeName: 'Introduction to Negative Numbers',
        relatedLessonId: 'c5_les_5_1'
      },
      {
        id: 'vid_c5_5_2_ka',
        type: 'primary',
        videoId: 'VW6UrPKPInA',
        title: 'Ordering Negative Numbers | Khan Academy',
        youtubeUrl: 'https://www.youtube.com/embed/VW6UrPKPInA',
        originalUrl: 'https://www.youtube.com/watch?v=VW6UrPKPInA',
        duration: '05:30 mins',
        creatorName: 'Khan Academy',
        channelName: 'Khan Academy',
        themeName: 'Integers on the Number Line & Ordering',
        relatedLessonId: 'c5_les_5_2'
      },
      {
        id: 'vid_c5_5_3_pw',
        type: 'primary',
        videoId: 'mlNHIzV4x8Y',
        title: 'Addition and Subtraction of Integers | Periwinkle',
        youtubeUrl: 'https://www.youtube.com/embed/mlNHIzV4x8Y',
        originalUrl: 'https://www.youtube.com/watch?v=mlNHIzV4x8Y',
        duration: '07:30 mins',
        creatorName: 'Periwinkle',
        channelName: 'Periwinkle',
        themeName: 'Addition and Subtraction of Integers',
        relatedLessonId: 'c5_les_5_3'
      },
      {
        id: 'vid_c5_5_3_ma',
        type: 'revision',
        videoId: '_BgblvF90UE',
        title: 'Adding & Subtracting Integers | Math Antics',
        youtubeUrl: 'https://www.youtube.com/embed/_BgblvF90UE',
        originalUrl: 'https://www.youtube.com/watch?v=_BgblvF90UE',
        duration: '11:45 mins',
        creatorName: 'Math Antics',
        channelName: 'Math Antics',
        themeName: 'Addition and Subtraction of Integers',
        relatedLessonId: 'c5_les_5_3'
      },
      {
        id: 'vid_c5_5_3_mrj',
        type: 'extra',
        videoId: '1DKWG5CBeek',
        title: 'Subtracting Integers | Math with Mr. J',
        youtubeUrl: 'https://www.youtube.com/embed/1DKWG5CBeek',
        originalUrl: 'https://www.youtube.com/watch?v=1DKWG5CBeek',
        duration: '06:50 mins',
        creatorName: 'Math with Mr. J',
        channelName: 'Math with Mr. J',
        themeName: 'Addition and Subtraction of Integers',
        relatedLessonId: 'c5_les_5_3'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 5 - Theme 5: Negative Numbers',
    textbookContent: `
# ICSE Mathematics Class 5 - Theme 5: Introduction to Negative Numbers

## 5.1 Real-World Need for Negative Numbers
- Temperatures below freezing ($0^\\circ \\text{C}$), such as $-5^\\circ \\text{C}$.
- Depths below sea level ($-100\\text{ m}$).
- Financial debits and elevations.

## 5.2 The Integer Number Line
- Negative numbers lie to the **left of 0**; positive numbers lie to the **right of 0**.
- $0$ is neither positive nor negative.
- Comparing: As we move from left to right, values increase (e.g. $-5 < -2 < 0 < 3$).
    `,
    notes: [
      { topic: 'Number Line Direction', text: 'Values to the right are always greater than values to the left. Thus -2 > -5.' },
      { topic: 'Zero is the Neutral Center', text: 'Zero separates positive integers from negative integers.' }
    ],
    lessons: [
      { id: 'c5_les_5_1', title: 'Introduction to Negative Numbers & Real-Life Contexts', xp: 45 },
      { id: 'c5_les_5_2', title: 'Integers on the Number Line & Ordering Negative Numbers', xp: 45 },
      { id: 'c5_les_5_3', title: 'Addition and Subtraction of Integers', xp: 45 }
    ]
  },
  {
    id: 'c5_theme_6',
    number: 6,
    title: 'Theme 6: Geometry',
    description: 'Lines, rays, line segments, angle types (acute, obtuse, right, reflex), 2D shapes, circle elements, 3D solids and nets, reflection symmetry, and geometric constructions.',
    icon: 'Shapes',
    color: '#ff4b4b',
    bgLight: '#ffebee',
    themeName: 'Theme 6: Geometry',
    olympiadStars: 4,
    olympiadRating: '⭐⭐⭐⭐☆',
    readinessLevel: 'Spatial & Geometric Thinking',
    youtubeUrl: 'https://www.youtube.com/embed/cXSN5i3ujyU',
    playlist: [
      {
        id: 'vid_c5_6_1_hp',
        type: 'primary',
        videoId: 'ZqwxaAnze8c',
        title: 'Lines, Line Segments and Rays | Homeschool Pop',
        youtubeUrl: 'https://www.youtube.com/embed/ZqwxaAnze8c',
        originalUrl: 'https://www.youtube.com/watch?v=ZqwxaAnze8c',
        duration: '06:10 mins',
        creatorName: 'Homeschool Pop',
        channelName: 'Homeschool Pop',
        themeName: 'Lines, Line Segments, Rays & Basic Angles',
        relatedLessonId: 'c5_les_6_1'
      },
      {
        id: 'vid_c5_6_1_ln',
        type: 'revision',
        videoId: 'cXSN5i3ujyU',
        title: 'Class 5 Geometry Full Chapter | Learning Notebook',
        youtubeUrl: 'https://www.youtube.com/embed/cXSN5i3ujyU',
        originalUrl: 'https://www.youtube.com/watch?v=cXSN5i3ujyU',
        duration: '22:15 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: 'Lines, Line Segments, Rays & Basic Angles',
        relatedLessonId: 'c5_les_6_1'
      },
      {
        id: 'vid_c5_6_2_ln',
        type: 'primary',
        videoId: 'cXSN5i3ujyU',
        title: '2D Shapes, Angles & Circles | Learning Notebook',
        youtubeUrl: 'https://www.youtube.com/embed/cXSN5i3ujyU',
        originalUrl: 'https://www.youtube.com/watch?v=cXSN5i3ujyU',
        duration: '22:15 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: '2D Shapes, Triangles, Quadrilaterals & Circles',
        relatedLessonId: 'c5_les_6_2'
      },
      {
        id: 'vid_c5_6_3_nets',
        type: 'primary',
        videoId: 'M4A8sVsyBZ0',
        title: 'Nets of 3-D Shapes (Cube, Cuboid, Cylinder, Cone, Prism)',
        youtubeUrl: 'https://www.youtube.com/embed/M4A8sVsyBZ0',
        originalUrl: 'https://www.youtube.com/watch?v=M4A8sVsyBZ0',
        duration: '08:40 mins',
        creatorName: 'Math Animation Studio',
        channelName: 'Math Animation Studio',
        themeName: '3D Shapes, Nets, Symmetry & Geometric Constructions',
        relatedLessonId: 'c5_les_6_3'
      },
      {
        id: 'vid_c5_6_3_sym',
        type: 'revision',
        videoId: 'Z0N_U06RdVU',
        title: 'Class 5 Symmetry and Patterns | Learning Notebook',
        youtubeUrl: 'https://www.youtube.com/embed/Z0N_U06RdVU',
        originalUrl: 'https://www.youtube.com/watch?v=Z0N_U06RdVU',
        duration: '15:40 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: '3D Shapes, Nets, Symmetry & Geometric Constructions',
        relatedLessonId: 'c5_les_6_3'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 5 - Theme 6: Geometry',
    textbookContent: `
# ICSE Mathematics Class 5 - Theme 6: Geometry

## 6.1 Basic Geometric Terms
- **Line**: Extends endlessly in both directions (no endpoints).
- **Line Segment**: Part of a line with two definite endpoints.
- **Ray**: Starts at an initial point and extends endlessly in one direction.

## 6.2 Types of Angles
- **Acute Angle**: $0^\\circ < \\theta < 90^\\circ$
- **Right Angle**: $\\theta = 90^\\circ$
- **Obtuse Angle**: $90^\\circ < \\theta < 180^\\circ$
- **Straight Angle**: $\\theta = 180^\\circ$
- **Reflex Angle**: $180^\\circ < \\theta < 360^\\circ$
- **Complete Angle**: $\\theta = 360^\\circ$

## 6.3 Circles & 3D Shapes
- **Circle**: Centre, Radius ($r$), Diameter ($d = 2r$), Chord, Sector, and Circumference ($2\\pi r$).
- **3D Shapes**: Cube, Cuboid, Cylinder, Sphere, Cone, Prisms, and Pyramids.
    `,
    notes: [
      { topic: 'Radius & Diameter', text: 'Diameter is the longest chord passing through the center: d = 2 * r.' },
      { topic: 'Angle Classification', text: 'Right = 90 deg, Straight = 180 deg, Complete = 360 deg.' }
    ],
    lessons: [
      { id: 'c5_les_6_1', title: 'Lines, Line Segments, Rays & Basic Angles', xp: 45 },
      { id: 'c5_les_6_2', title: '2D Shapes, Triangles, Quadrilaterals & Circles', xp: 45 },
      { id: 'c5_les_6_3', title: '3D Shapes, Nets, Symmetry & Geometric Constructions', xp: 45 }
    ]
  },
  {
    id: 'c5_theme_7',
    number: 7,
    title: 'Theme 7: Measurement',
    description: 'Perimeter and Area of squares and rectangles, geometric formula derivations, relationship and misconceptions, and unit conversions of mass, capacity, time, and money.',
    icon: 'Ruler',
    color: '#10b981',
    bgLight: '#e6f9f0',
    themeName: 'Theme 7: Measurement',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Applied Mensuration',
    youtubeUrl: 'https://www.youtube.com/embed/FvpUVUgq_lo',
    playlist: [
      {
        id: 'vid_c5_7_1_ln',
        type: 'primary',
        videoId: 'FvpUVUgq_lo',
        title: 'Perimeter, Area and Volume | Learning Notebook',
        youtubeUrl: 'https://www.youtube.com/embed/FvpUVUgq_lo',
        originalUrl: 'https://www.youtube.com/watch?v=FvpUVUgq_lo',
        duration: '24:00 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: 'Perimeter and Area of Rectangles and Squares',
        relatedLessonId: 'c5_les_7_1'
      },
      {
        id: 'vid_c5_7_2_peri',
        type: 'primary',
        videoId: 'Q-O1HeobVEs',
        title: 'Conversion of Metric Measurements | Periwinkle',
        youtubeUrl: 'https://www.youtube.com/embed/Q-O1HeobVEs',
        originalUrl: 'https://www.youtube.com/watch?v=Q-O1HeobVEs',
        duration: '07:45 mins',
        creatorName: 'Periwinkle',
        channelName: 'Periwinkle',
        themeName: 'Unit Conversions of Mass, Time, Money & Capacity',
        relatedLessonId: 'c5_les_7_2'
      },
      {
        id: 'vid_c5_7_2_gs',
        type: 'revision',
        videoId: 'Rqshlzrp7bU',
        title: 'Class 5 Maths – Measurement Units | GlobalShiksha',
        youtubeUrl: 'https://www.youtube.com/embed/Rqshlzrp7bU',
        originalUrl: 'https://www.youtube.com/watch?v=Rqshlzrp7bU',
        duration: '09:30 mins',
        creatorName: 'GlobalShiksha',
        channelName: 'GlobalShiksha',
        themeName: 'Unit Conversions of Mass, Time, Money & Capacity',
        relatedLessonId: 'c5_les_7_2'
      },
      {
        id: 'vid_c5_7_2_orch',
        type: 'extra',
        videoId: 'dyFSWZJB8fA',
        title: 'Measurement | Orchids eLearning',
        youtubeUrl: 'https://www.youtube.com/embed/dyFSWZJB8fA',
        originalUrl: 'https://www.youtube.com/watch?v=dyFSWZJB8fA',
        duration: '11:10 mins',
        creatorName: 'Orchids eLearning',
        channelName: 'Orchids eLearning',
        themeName: 'Unit Conversions of Mass, Time, Money & Capacity',
        relatedLessonId: 'c5_les_7_2'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 5 - Theme 7: Measurement',
    textbookContent: `
# ICSE Mathematics Class 5 - Theme 7: Measurement

## 7.1 Perimeter
- Distance around the boundary of a closed 2D shape.
- **Perimeter of Rectangle**: $P = 2 \\times (\\text{length} + \\text{breadth}) = 2(l + b)$
- **Perimeter of Square**: $P = 4 \\times \\text{side} = 4s$

## 7.2 Area
- Measure of the surface enclosed inside a shape.
- **Area of Rectangle**: $A = l \\times b$
- **Area of Square**: $A = s \\times s = s^2$

## 7.3 Common Misconceptions
- Shapes with the **same perimeter** can have **different areas**.
- Units of Perimeter: $\\text{cm}, \\text{m}$; Units of Area: $\\text{cm}^2, \\text{m}^2$.
    `,
    notes: [
      { topic: 'Perimeter vs Area', text: 'Perimeter is boundary length (1D, cm/m); Area is surface enclosed (2D, cm^2/m^2).' },
      { topic: 'Rectangle Formulas', text: 'Perimeter = 2*(l + b). Area = l * b.' }
    ],
    lessons: [
      { id: 'c5_les_7_1', title: 'Perimeter and Area of Rectangles and Squares', xp: 45 },
      { id: 'c5_les_7_2', title: 'Unit Conversions of Mass, Time, Money & Capacity', xp: 45 }
    ]
  },
  {
    id: 'c5_theme_8',
    number: 8,
    title: 'Theme 8: Introduction to Percentage',
    description: 'Percentage as a fraction with denominator 100, percentage notation (%), conversions between fractions, decimals, and percentages, and practical real-life problems.',
    icon: 'Percent',
    color: '#f59e0b',
    bgLight: '#fef3c7',
    themeName: 'Theme 8: Introduction to Percentage',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Percentages & Commercial Math',
    youtubeUrl: 'https://www.youtube.com/embed/z9goQWyhN5o',
    playlist: [
      {
        id: 'vid_c5_8_1_ln',
        type: 'primary',
        videoId: 'z9goQWyhN5o',
        title: 'Class 5 Percentage Complete Lesson | Learning Notebook',
        youtubeUrl: 'https://www.youtube.com/embed/z9goQWyhN5o',
        originalUrl: 'https://www.youtube.com/watch?v=z9goQWyhN5o',
        duration: '18:50 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: 'Concept of Percentage & Conversions',
        relatedLessonId: 'c5_les_8_1'
      },
      {
        id: 'vid_c5_8_2_peri',
        type: 'primary',
        videoId: 'NRGhUvlcwvA',
        title: 'Percentage – Story Problems | Periwinkle',
        youtubeUrl: 'https://www.youtube.com/embed/NRGhUvlcwvA',
        originalUrl: 'https://www.youtube.com/watch?v=NRGhUvlcwvA',
        duration: '08:15 mins',
        creatorName: 'Periwinkle',
        channelName: 'Periwinkle',
        themeName: 'Pictorial Understanding & Real-Life Percentage Problems',
        relatedLessonId: 'c5_les_8_2'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 5 - Theme 8: Percentage',
    textbookContent: `
# ICSE Mathematics Class 5 - Theme 8: Introduction to Percentage

## 8.1 Meaning of Percentage
- The word **Percent** comes from the Latin *per centum*, meaning "out of 100".
- Denoted by the symbol $\\%$.
- $25\\% = \\frac{25}{100} = \\frac{1}{4} = 0.25$.

## 8.2 Conversions
- **Fraction to Percentage**: Multiply by $100\\%$: $\\frac{3}{5} \\times 100\\% = 60\\%$.
- **Percentage to Fraction**: Divide by $100$: $40\\% = \\frac{40}{100} = \\frac{2}{5}$.
- **Decimal to Percentage**: Multiply by $100$: $0.35 \\times 100\\% = 35\\%$.
    `,
    notes: [
      { topic: 'Percent Meaning', text: 'Percent literally means per hundred (out of 100).' },
      { topic: 'Fast Conversion Rule', text: 'To convert any fraction or decimal to %, multiply by 100.' }
    ],
    lessons: [
      { id: 'c5_les_8_1', title: 'Concept of Percentage & Conversions (Fractions, Decimals & %)', xp: 45 },
      { id: 'c5_les_8_2', title: 'Pictorial Understanding & Real-Life Percentage Problems', xp: 45 }
    ]
  },
  {
    id: 'c5_theme_9',
    number: 9,
    title: 'Theme 9: Data Handling',
    description: 'Collection and organization of data, tally marks tables, pictographs with scaling, construction and interpretation of bar graphs, and calculating the mean (average).',
    icon: 'BarChart2',
    color: '#ce82ff',
    bgLight: '#f6e5ff',
    themeName: 'Theme 9: Data Handling',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Data Interpretation',
    youtubeUrl: 'https://www.youtube.com/embed/2a5OuENTZUg',
    playlist: [
      {
        id: 'vid_c5_9_1_pw',
        type: 'primary',
        videoId: '2a5OuENTZUg',
        title: 'Pictographs and Bar Graphs | Periwinkle',
        youtubeUrl: 'https://www.youtube.com/embed/2a5OuENTZUg',
        originalUrl: 'https://www.youtube.com/watch?v=2a5OuENTZUg',
        duration: '08:15 mins',
        creatorName: 'Periwinkle',
        channelName: 'Periwinkle',
        themeName: 'Data Organization, Tally Tables & Pictographs',
        relatedLessonId: 'c5_les_9_1'
      },
      {
        id: 'vid_c5_9_1_ln',
        type: 'revision',
        videoId: 'su3NNcgJ4LE',
        title: 'Class 5 Data Handling | Learning Notebook',
        youtubeUrl: 'https://www.youtube.com/embed/su3NNcgJ4LE',
        originalUrl: 'https://www.youtube.com/watch?v=su3NNcgJ4LE',
        duration: '16:20 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: 'Data Organization, Tally Tables & Pictographs',
        relatedLessonId: 'c5_les_9_1'
      },
      {
        id: 'vid_c5_9_2_pw',
        type: 'primary',
        videoId: '2a5OuENTZUg',
        title: 'Constructing and Reading Bar Graphs | Periwinkle',
        youtubeUrl: 'https://www.youtube.com/embed/2a5OuENTZUg',
        originalUrl: 'https://www.youtube.com/watch?v=2a5OuENTZUg',
        duration: '08:15 mins',
        creatorName: 'Periwinkle',
        channelName: 'Periwinkle',
        themeName: 'Bar Graphs: Construction & Interpretation',
        relatedLessonId: 'c5_les_9_2'
      },
      {
        id: 'vid_c5_9_2_ln',
        type: 'revision',
        videoId: 'su3NNcgJ4LE',
        title: 'Bar Graph Interpretation & Exercises | Learning Notebook',
        youtubeUrl: 'https://www.youtube.com/embed/su3NNcgJ4LE',
        originalUrl: 'https://www.youtube.com/watch?v=su3NNcgJ4LE',
        duration: '16:20 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: 'Bar Graphs: Construction & Interpretation',
        relatedLessonId: 'c5_les_9_2'
      },
      {
        id: 'vid_c5_9_3_wsc',
        type: 'primary',
        videoId: 'EvIp0TOlfe4',
        title: 'Grade 5 Mathematics – Data Handling Mean | WorksheetCloud',
        youtubeUrl: 'https://www.youtube.com/embed/EvIp0TOlfe4',
        originalUrl: 'https://www.youtube.com/watch?v=EvIp0TOlfe4',
        duration: '07:20 mins',
        creatorName: 'WorksheetCloud',
        channelName: 'WorksheetCloud',
        themeName: 'Mean / Average of Data',
        relatedLessonId: 'c5_les_9_3'
      },
      {
        id: 'vid_c5_9_3_spk',
        type: 'revision',
        videoId: 'i-GWpe78d1w',
        title: 'Data Handling – Class 5 Maths Made Simple | School Pro Kid',
        youtubeUrl: 'https://www.youtube.com/embed/i-GWpe78d1w',
        originalUrl: 'https://www.youtube.com/watch?v=i-GWpe78d1w',
        duration: '09:40 mins',
        creatorName: 'School Pro Kid',
        channelName: 'School Pro Kid',
        themeName: 'Mean / Average of Data',
        relatedLessonId: 'c5_les_9_3'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 5 - Theme 9: Data Handling',
    textbookContent: `
# ICSE Mathematics Class 5 - Theme 9: Data Handling

## 9.1 Data Representation
- **Tally Marks**: Grouped in bundles of 5 ($||||\\hspace{-7pt}/$).
- **Pictograph**: Uses symbols/pictures to represent numbers with a specific scale/key.
- **Bar Graph**: Uses vertical or horizontal bars of uniform width with equal spacing.

## 9.2 Arithmetic Mean (Average)
- The average value representing a collection of numbers:
$$\\text{Mean} = \\frac{\\text{Sum of all observations}}{\\text{Total number of observations}}$$
    `,
    notes: [
      { topic: 'Pictograph Key', text: 'Always read the key: if 1 symbol = 10 items, 3 symbols = 30 items.' },
      { topic: 'Mean Formula', text: 'Average = Sum of all values / Number of values.' }
    ],
    lessons: [
      { id: 'c5_les_9_1', title: 'Data Organization, Tally Tables & Pictographs', xp: 45 },
      { id: 'c5_les_9_2', title: 'Bar Graphs: Construction & Interpretation', xp: 45 },
      { id: 'c5_les_9_3', title: 'Mean / Average of Data', xp: 45 }
    ]
  },
  {
    id: 'c5_theme_10',
    number: 10,
    title: 'Theme 10: Patterns',
    description: 'Identifying, generating, and explaining visual symmetry and geometric patterns, and generalising number pattern rules (e.g. sums of consecutive odd numbers).',
    icon: 'Grid',
    color: '#ec4899',
    bgLight: '#fdf2f8',
    themeName: 'Theme 10: Patterns',
    olympiadStars: 3,
    olympiadRating: '⭐⭐⭐☆☆',
    readinessLevel: 'Pattern Logic & Reasoning',
    youtubeUrl: 'https://www.youtube.com/embed/Z0N_U06RdVU',
    playlist: [
      {
        id: 'vid_c5_10_1_ln',
        type: 'primary',
        videoId: 'Z0N_U06RdVU',
        title: 'Class 5 Symmetry and Patterns | Learning Notebook',
        youtubeUrl: 'https://www.youtube.com/embed/Z0N_U06RdVU',
        originalUrl: 'https://www.youtube.com/watch?v=Z0N_U06RdVU',
        duration: '15:40 mins',
        creatorName: 'Learning Notebook',
        channelName: 'Learning Notebook',
        themeName: 'Visual Patterns, Symmetry & Shape Patterns',
        relatedLessonId: 'c5_les_10_1'
      },
      {
        id: 'vid_c5_10_2_vm',
        type: 'primary',
        videoId: 'PKPosdIvExE',
        title: 'Sum of Odd Numbers – Visual Maths',
        youtubeUrl: 'https://www.youtube.com/embed/PKPosdIvExE',
        originalUrl: 'https://www.youtube.com/watch?v=PKPosdIvExE',
        duration: '05:10 mins',
        creatorName: 'Visual Maths',
        channelName: 'Visual Maths',
        themeName: 'Number Patterns & Generalisation Rules',
        relatedLessonId: 'c5_les_10_2'
      },
      {
        id: 'vid_c5_10_2_mb',
        type: 'revision',
        videoId: 'ItVfvb5EA4o',
        title: 'Fun With Odd Numbers – Can You See the Pattern | Magnet Brains',
        youtubeUrl: 'https://www.youtube.com/embed/ItVfvb5EA4o',
        originalUrl: 'https://www.youtube.com/watch?v=ItVfvb5EA4o',
        duration: '14:20 mins',
        creatorName: 'Magnet Brains',
        channelName: 'Magnet Brains',
        themeName: 'Number Patterns & Generalisation Rules',
        relatedLessonId: 'c5_les_10_2'
      }
    ],
    textbookTitle: 'ICSE Mathematics Class 5 - Theme 10: Patterns',
    textbookContent: `
# ICSE Mathematics Class 5 - Theme 10: Patterns

## 10.1 Visual & Rotational Patterns
- Symmetrical patterns with line symmetry (horizontal, vertical, diagonal).
- Rotational turns: $\\frac{1}{4}$ turn ($90^\\circ$), $\\frac{1}{2}$ turn ($180^\\circ$).

## 10.2 Number Patterns & Generalisation
- **Sum of Odd Numbers**:
  - $1 = 1^2 = 1$
  - $1 + 3 = 2^2 = 4$
  - $1 + 3 + 5 = 3^2 = 9$
  - $1 + 3 + 5 + 7 = 4^2 = 16$
- Rule: The sum of first $n$ odd natural numbers is always equal to $n^2$.
    `,
    notes: [
      { topic: 'Odd Number Sum Rule', text: 'Sum of first n odd numbers = n^2.' },
      { topic: 'Rotational Turns', text: '1/4 turn = 90 degrees; 1/2 turn = 180 degrees.' }
    ],
    lessons: [
      { id: 'c5_les_10_1', title: 'Visual Patterns, Symmetry & Shape Patterns', xp: 45 },
      { id: 'c5_les_10_2', title: 'Number Patterns & Generalisation Rules (Sum of Odds, Square Patterns)', xp: 45 }
    ]
  }
];

// =========================================================================
// Class 1 ICSE Chapters / Themes (6 Themes, 32 Topics)
// =========================================================================
export const class1Chapters = [
  {
    id: "c1_theme_1",
    number: 1,
    title: "Numbers 1 to 20 & Zero",
    description: "Explore numbers 1 to 20, understand zero as an empty set, practice counting, number lines, and before/after/between.",
    icon: "Hash",
    color: "#58cc02",
    bgLight: "#e5f9d8",
    themeName: "Theme 1: Numbers 1 to 20 & Zero",
    olympiadStars: 1,
    olympiadRating: "1 Star",
    readinessLevel: "Foundation Readiness",
    youtubeUrl: "https://www.youtube.com/embed/D0Ajq682yrA",
    playlist: [
      { id: "v_c1_1", type: "primary", videoId: "D0Ajq682yrA", title: "Numbers 1 to 20 Counting", duration: "08:00 mins", creatorName: "Math Made Easy", channelName: "Educational Math", themeName: "Theme 1: Numbers 1 to 20" }
    ],
    textbookTitle: "ICSE Mathematics Class 1 - Theme 1: Numbers 1 to 20 & Zero",
    textbookContent: "# Numbers 1 to 20 & Zero\n\nCounting objects from 1 to 20, understanding 0, comparing numbers.",
    notes: [{ topic: "Counting", text: "Numbers 1 to 20 and Zero." }],
    lessons: [
      { id: "c1_les_1_1", title: "Counting 1 to 9 (Concrete Objects & Visual Dot Patterns)", xp: 30 },
      { id: "c1_les_1_2", title: "Concept of Zero (Empty Sets & Empty Containers)", xp: 30 },
      { id: "c1_les_1_3", title: "Counting 10 to 20 (Building Ten and Extra Ones)", xp: 30 },
      { id: "c1_les_1_4", title: "Number Names (One to Twenty)", xp: 30 },
      { id: "c1_les_1_5", title: "Comparing Numbers up to 20 (More, Less, Equal, Symbols >, <, =)", xp: 30 },
      { id: "c1_les_1_6", title: "Before, After, and Between (1 to 20)", xp: 30 },
      { id: "c1_les_1_7", title: "Ordering Numbers (Increasing & Decreasing Order 1 to 20)", xp: 30 },
      { id: "c1_les_1_8", title: "Number Line: Representation of Numbers 0 to 20", xp: 30 },
      { id: "c1_les_1_9", title: "Ordinal Numbers (First to Tenth: 1st, 2nd, 3rd... 10th)", xp: 30 },
      { id: "c1_les_1_10", title: "Odd and Even Numbers Concept (Pairing up to 20)", xp: 30 }
    ]
  },
  {
    id: "c1_theme_2",
    number: 2,
    title: "Numbers up to 99 & Place Value",
    description: "Learn place value with tens and ones, expanded forms, and comparing numbers up to 99.",
    icon: "Layers",
    color: "#ff9600",
    bgLight: "#fff3d6",
    themeName: "Theme 2: Numbers up to 99 & Place Value",
    olympiadStars: 1,
    olympiadRating: "1 Star",
    readinessLevel: "Foundation Readiness",
    youtubeUrl: "https://www.youtube.com/embed/zVhQY173Yyo",
    playlist: [
      { id: "v_c1_2", type: "primary", videoId: "zVhQY173Yyo", title: "Tens and Ones | Place Value", duration: "07:30 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 2: Numbers up to 99" }
    ],
    textbookTitle: "ICSE Mathematics Class 1 - Theme 2: Numbers up to 99",
    textbookContent: "# Numbers up to 99\n\nGrouping into tens and ones, forming 2-digit numbers.",
    notes: [{ topic: "Tens & Ones", text: "1 Ten = 10 Ones. 47 = 4 Tens + 7 Ones." }],
    lessons: [
      { id: "c1_les_2_1", title: "Counting in Tens (10, 20, 30, ... 90)", xp: 30 },
      { id: "c1_les_2_2", title: "Grouping Objects into Tens and Ones (Base-10)", xp: 30 },
      { id: "c1_les_2_3", title: "Representing Tens & Ones (Abacus & Place Value Strips)", xp: 30 },
      { id: "c1_les_2_4", title: "Number Names (Twenty-one to Ninety-nine)", xp: 30 },
      { id: "c1_les_2_5", title: "Comparing Numbers up to 99 (<, >, =)", xp: 30 }
    ]
  },
  {
    id: "c1_theme_3",
    number: 3,
    title: "Addition & Subtraction",
    description: "Single-digit and 2-digit addition and subtraction, zero property, and word problems.",
    icon: "Calculator",
    color: "#ce82ff",
    bgLight: "#f5e8ff",
    themeName: "Theme 3: Addition & Subtraction",
    olympiadStars: 2,
    olympiadRating: "2 Stars",
    readinessLevel: "Foundation Readiness",
    youtubeUrl: "https://www.youtube.com/embed/Fe8u2I3vmHU",
    playlist: [
      { id: "v_c1_3", type: "primary", videoId: "Fe8u2I3vmHU", title: "Basic Addition and Subtraction", duration: "09:00 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 3: Operations" }
    ],
    textbookTitle: "ICSE Mathematics Class 1 - Theme 3: Addition & Subtraction",
    textbookContent: "# Addition & Subtraction\n\nVisual joining and taking away, number line hops.",
    notes: [{ topic: "Addition", text: "Addition is putting together (+). Subtraction is taking away (-)." }],
    lessons: [
      { id: "c1_les_3_1", title: "Concept of Addition (Combining/Joining Sets up to 9)", xp: 30 },
      { id: "c1_les_3_2", title: "Addition on the Number Line (Hopping Forward)", xp: 30 },
      { id: "c1_les_3_3", title: "Addition of Numbers up to 20 & Zero Property (a + 0 = a)", xp: 30 },
      { id: "c1_les_3_4", title: "Concept of Subtraction (Taking Away / Cross-Out up to 9)", xp: 30 },
      { id: "c1_les_3_5", title: "Subtraction on the Number Line (Hopping Backward)", xp: 30 },
      { id: "c1_les_3_6", title: "Vertical/Column Addition & Subtraction (up to 99, No Regrouping)", xp: 30 }
    ]
  },
  {
    id: "c1_theme_4",
    number: 4,
    title: "Geometry & Shapes",
    description: "Discover flat 2D shapes, 3D solid objects, straight and curved lines, and spatial relationships.",
    icon: "Shapes",
    color: "#00cd9c",
    bgLight: "#dff8f1",
    themeName: "Theme 4: Geometry (Shapes and Space)",
    olympiadStars: 1,
    olympiadRating: "1 Star",
    readinessLevel: "Foundation Readiness",
    youtubeUrl: "https://www.youtube.com/embed/guNdJ5MtX1A",
    playlist: [
      { id: "v_c1_4", type: "primary", videoId: "guNdJ5MtX1A", title: "2D and 3D Shapes for Class 1", duration: "06:45 mins", creatorName: "Math Antics", channelName: "Math Antics", themeName: "Theme 4: Geometry" }
    ],
    textbookTitle: "ICSE Mathematics Class 1 - Theme 4: Geometry",
    textbookContent: "# Geometry\n\nCircle, square, rectangle, triangle. Rolling and sliding 3D objects.",
    notes: [{ topic: "Shapes", text: "Square: 4 equal sides. Triangle: 3 sides. Circle: Round." }],
    lessons: [
      { id: "c1_les_4_1", title: "2D Shapes Identification (Circle, Square, Rectangle, Triangle)", xp: 30 },
      { id: "c1_les_4_2", title: "3D Solid Shapes Around Us (Cube, Cuboid, Sphere, Cylinder, Cone & Rolling vs Sliding)", xp: 30 },
      { id: "c1_les_4_3", title: "Straight Lines & Curved Lines (Horizontal, Vertical, Slanting)", xp: 30 },
      { id: "c1_les_4_4", title: "Spatial Relationships (Top/Bottom, On/Under, Inside/Outside, Near/Far)", xp: 30 },
      { id: "c1_les_4_5", title: "Tracing 2D Boundaries of 3D Objects", xp: 30 }
    ]
  },
  {
    id: "c1_theme_5",
    number: 5,
    title: "Measurement & Time",
    description: "Compare lengths, weights, capacities using non-standard units; learn days of the week, months, and clock reading.",
    icon: "Ruler",
    color: "#1cb0f6",
    bgLight: "#ddf4ff",
    themeName: "Theme 5: Measurement (Length, Weight, Capacity, Time, Money)",
    olympiadStars: 2,
    olympiadRating: "2 Stars",
    readinessLevel: "Foundation Readiness",
    youtubeUrl: "https://www.youtube.com/embed/k4fJ8y9N9_k",
    playlist: [
      { id: "v_c1_5", type: "primary", videoId: "k4fJ8y9N9_k", title: "Measurement of Length, Weight, Time", duration: "08:15 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 5: Measurement" }
    ],
    textbookTitle: "ICSE Mathematics Class 1 - Theme 5: Measurement",
    textbookContent: "# Measurement\n\nNon-standard units, balance scales, and reading o'clock time.",
    notes: [{ topic: "Time & Units", text: "7 days in a week. 12 months in a year." }],
    lessons: [
      { id: "c1_les_5_1", title: "Non-Standard Length Comparison (Longer/Shorter, Handspan, Footspan, Paperclips)", xp: 30 },
      { id: "c1_les_5_2", title: "Weight & Capacity Comparison (Heavier/Lighter, Holds More/Less)", xp: 30 },
      { id: "c1_les_5_3", title: "Time: Daily Sequences, Days of Week, Months of Year, Reading O'clock", xp: 30 }
    ]
  },
  {
    id: "c1_theme_6",
    number: 6,
    title: "Data Handling & Patterns",
    description: "Count and sort objects, read picture charts, and recognize repeating shapes, colors, and number patterns.",
    icon: "BarChart",
    color: "#ff4b4b",
    bgLight: "#ffe5e5",
    themeName: "Theme 6: Data Handling & Patterns",
    olympiadStars: 1,
    olympiadRating: "1 Star",
    readinessLevel: "Foundation Readiness",
    youtubeUrl: "https://www.youtube.com/embed/PWu6b_8BqCg",
    playlist: [
      { id: "v_c1_6", type: "primary", videoId: "PWu6b_8BqCg", title: "Patterns and Simple Data Handling", duration: "07:10 mins", creatorName: "Educational Videos", channelName: "Math Channel", themeName: "Theme 6: Data & Patterns" }
    ],
    textbookTitle: "ICSE Mathematics Class 1 - Theme 6: Data Handling & Patterns",
    textbookContent: "# Data Handling & Patterns\n\nSorting items into categories, counting picture charts, repeating sequences.",
    notes: [{ topic: "Patterns", text: "Patterns follow a repeating rule." }],
    lessons: [
      { id: "c1_les_6_1", title: "Sorting & Grouping Objects by Attributes (Color, Shape, Size)", xp: 30 },
      { id: "c1_les_6_2", title: "Picture Charts & Counting Tally Marks (Interpreting Simple Data)", xp: 30 },
      { id: "c1_les_6_3", title: "Repeating Shape & Color Patterns (AB, AAB, ABC Sequences)", xp: 30 }
    ]
  }
];

// =========================================================================
// Class 3 ICSE Chapters / Themes (6 Themes, 32 Topics)
// =========================================================================
export const class3Chapters = [
  {
    id: "c3_theme_1",
    number: 1,
    title: "4-Digit Numbers & Place Value",
    description: "Master numbers up to 9999, place value, face value, expanded notation, comparisons, and predecessor/successor.",
    icon: "Hash",
    color: "#58cc02",
    bgLight: "#e5f9d8",
    themeName: "Theme 1: Numbers up to 9999",
    olympiadStars: 2,
    olympiadRating: "2 Stars",
    readinessLevel: "Foundation Readiness",
    youtubeUrl: "https://www.youtube.com/embed/nrOA1U5jH6Q",
    playlist: [
      { id: "v_c3_1", type: "primary", videoId: "nrOA1U5jH6Q", title: "4-Digit Numbers Place Value", duration: "08:45 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 1: 4-Digit Numbers" }
    ],
    textbookTitle: "ICSE Mathematics Class 3 - Theme 1: 4-Digit Numbers",
    textbookContent: "# 4-Digit Numbers\n\nTh, H, T, O place values up to 9999, expanded form.",
    notes: [{ topic: "Place Value", text: "1 Thousand = 10 Hundreds = 100 Tens = 1000 Ones." }],
    lessons: [
      { id: "c3_les_1_1", title: "Building 4-Digit Numbers (Thousands, Hundreds, Tens, Ones)", xp: 35 },
      { id: "c3_les_1_2", title: "Place Value & Face Value in 4-Digit Numbers", xp: 35 },
      { id: "c3_les_1_3", title: "Expanded Form & Standard Form (up to 9999)", xp: 35 },
      { id: "c3_les_1_4", title: "Comparing & Ordering 4-Digit Numbers (Ascending & Descending)", xp: 35 },
      { id: "c3_les_1_5", title: "Successor & Predecessor (+1 and -1)", xp: 35 },
      { id: "c3_les_1_6", title: "Forming Greatest and Smallest Numbers with Given Digits", xp: 35 },
      { id: "c3_les_1_7", title: "Skip Counting (by 10s, 100s, 1000s)", xp: 35 }
    ]
  },
  {
    id: "c3_theme_2",
    number: 2,
    title: "Number Operations & Money",
    description: "Addition, subtraction with regrouping, multiplication (lattice and standard), division by grouping, money and bills.",
    icon: "Calculator",
    color: "#ff9600",
    bgLight: "#fff3d6",
    themeName: "Theme 2: Number Operations & Money",
    olympiadStars: 3,
    olympiadRating: "3 Stars",
    readinessLevel: "Intermediate Competence",
    youtubeUrl: "https://www.youtube.com/embed/Fe8u2I3vmHU",
    playlist: [
      { id: "v_c3_2", type: "primary", videoId: "Fe8u2I3vmHU", title: "Multiplication and Division Concepts", duration: "10:15 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 2: Operations" }
    ],
    textbookTitle: "ICSE Mathematics Class 3 - Theme 2: Number Operations",
    textbookContent: "# Number Operations\n\nRegrouping, lattice multiplication, division as repeated subtraction.",
    notes: [{ topic: "Division Rule", text: "Dividend = (Divisor × Quotient) + Remainder." }],
    lessons: [
      { id: "c3_les_2_1", title: "Addition of 4-Digit Numbers (with Regrouping / Carrying)", xp: 35 },
      { id: "c3_les_2_2", title: "Subtraction of 4-Digit Numbers (with Regrouping / Borrowing)", xp: 35 },
      { id: "c3_les_2_3", title: "Multiplication as Repeated Addition & Arrays", xp: 35 },
      { id: "c3_les_2_4", title: "Multiplication of 2-Digit and 3-Digit Numbers (Lattice & Standard Algorithm)", xp: 35 },
      { id: "c3_les_2_5", title: "Division as Equal Sharing & Repeated Subtraction", xp: 35 },
      { id: "c3_les_2_6", title: "Long Division by 1-Digit Divisor (Quotient & Remainder)", xp: 35 },
      { id: "c3_les_2_7", title: "Money: Operations with Rupees and Paise (Cash Memos & Bills)", xp: 35 },
      { id: "c3_les_2_8", title: "Estimation of Sums and Differences (Rounding to Nearest 10 and 100)", xp: 35 }
    ]
  },
  {
    id: "c3_theme_3",
    number: 3,
    title: "Geometry & Spatial Understanding",
    description: "Straight and curved lines, tangrams, properties of 2D shapes, 3D solids, tessellations, and basic map grids.",
    icon: "Shapes",
    color: "#00cd9c",
    bgLight: "#dff8f1",
    themeName: "Theme 3: Geometry & Spatial Understanding",
    olympiadStars: 2,
    olympiadRating: "2 Stars",
    readinessLevel: "Foundation Readiness",
    youtubeUrl: "https://www.youtube.com/embed/guNdJ5MtX1A",
    playlist: [
      { id: "v_c3_3", type: "primary", videoId: "guNdJ5MtX1A", title: "Geometry Shapes and Tessellation", duration: "08:20 mins", creatorName: "Math Antics", channelName: "Math Antics", themeName: "Theme 3: Geometry" }
    ],
    textbookTitle: "ICSE Mathematics Class 3 - Theme 3: Geometry",
    textbookContent: "# Geometry\n\nProperties of 2D shapes, 3D solid faces, edges, vertices.",
    notes: [{ topic: "Tessellation", text: "Tiling shapes fit together without gaps or overlaps." }],
    lessons: [
      { id: "c3_les_3_1", title: "Point, Line Segment, Ray, and Straight/Curved Lines", xp: 35 },
      { id: "c3_les_3_2", title: "Dot Grids, Geoboards & Tangram 7-Piece Puzzles", xp: 35 },
      { id: "c3_les_3_3", title: "Properties of 2D Shapes (Sides, Vertices, Diagonals of Square, Rect, Tri, Circle)", xp: 35 },
      { id: "c3_les_3_4", title: "3D Solid Figures (Faces, Edges, Vertices of Cube, Cuboid, Sphere, Cylinder, Cone)", xp: 35 },
      { id: "c3_les_3_5", title: "Tessellation (Tiling Patterns without Gaps or Overlaps)", xp: 35 }
    ]
  },
  {
    id: "c3_theme_4",
    number: 4,
    title: "Measurement & Time",
    description: "Standard units of length (cm, m), mass (g, kg), capacity (mL, L), calendar, and 12-hour/24-hour clocks.",
    icon: "Ruler",
    color: "#1cb0f6",
    bgLight: "#ddf4ff",
    themeName: "Theme 4: Measurement",
    olympiadStars: 2,
    olympiadRating: "2 Stars",
    readinessLevel: "Foundation Readiness",
    youtubeUrl: "https://www.youtube.com/embed/k4fJ8y9N9_k",
    playlist: [
      { id: "v_c3_4", type: "primary", videoId: "k4fJ8y9N9_k", title: "Standard Units & Time Clocks", duration: "09:30 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 4: Measurement" }
    ],
    textbookTitle: "ICSE Mathematics Class 3 - Theme 4: Measurement",
    textbookContent: "# Measurement\n\n1 m = 100 cm, 1 kg = 1000 g, 1 L = 1000 mL.",
    notes: [{ topic: "Conversions", text: "1 m = 100 cm, 1 kg = 1000 g, 1 L = 1000 mL." }],
    lessons: [
      { id: "c3_les_4_1", title: "Length Measurement (cm, m and Conversion 1 m = 100 cm)", xp: 35 },
      { id: "c3_les_4_2", title: "Weight & Capacity (g, kg, mL, L and Real-Life Estimations)", xp: 35 },
      { id: "c3_les_4_3", title: "Reading Time to Nearest 5 Minutes & 12-Hour / 24-Hour Notations", xp: 35 },
      { id: "c3_les_4_4", title: "Calendar, Days, Months, Leap Years & Elapsed Time Calculation", xp: 35 },
      { id: "c3_les_4_5", title: "Perimeter of Simple 2D Figures by Counting Grid Units", xp: 35 },
      { id: "c3_les_4_6", title: "Estimating and Measuring Mass with Pan Balance", xp: 35 }
    ]
  },
  {
    id: "c3_theme_5",
    number: 5,
    title: "Data Handling",
    description: "Collect, organize and represent data using tally marks, frequency tables, pictographs with scale keys, and simple bar charts.",
    icon: "BarChart",
    color: "#ce82ff",
    bgLight: "#f5e8ff",
    themeName: "Theme 5: Data Handling",
    olympiadStars: 2,
    olympiadRating: "2 Stars",
    readinessLevel: "Foundation Readiness",
    youtubeUrl: "https://www.youtube.com/embed/PWu6b_8BqCg",
    playlist: [
      { id: "v_c3_5", type: "primary", videoId: "PWu6b_8BqCg", title: "Tally Marks and Pictographs", duration: "07:50 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 5: Data Handling" }
    ],
    textbookTitle: "ICSE Mathematics Class 3 - Theme 5: Data Handling",
    textbookContent: "# Data Handling\n\nTally marks, pictographs with scale keys.",
    notes: [{ topic: "Tally Marks", text: "Bundles of 5: four vertical strokes + one diagonal strike-through." }],
    lessons: [
      { id: "c3_les_5_1", title: "Data Collection & Organization into Frequency Tables", xp: 35 },
      { id: "c3_les_5_2", title: "Pictographs with Keys / Scales (1 Symbol = Multiple Items)", xp: 35 },
      { id: "c3_les_5_3", title: "Tally Marks Representation & Interpreting Simple Bar Charts", xp: 35 }
    ]
  },
  {
    id: "c3_theme_6",
    number: 6,
    title: "Patterns",
    description: "Symmetry, mirror reflection, rotational patterns, odd/even number rules, and number sequences.",
    icon: "Hash",
    color: "#ff4b4b",
    bgLight: "#ffe5e5",
    themeName: "Theme 6: Patterns",
    olympiadStars: 2,
    olympiadRating: "2 Stars",
    readinessLevel: "Foundation Readiness",
    youtubeUrl: "https://www.youtube.com/embed/ItVfvb5EA4o",
    playlist: [
      { id: "v_c3_6", type: "primary", videoId: "ItVfvb5EA4o", title: "Symmetry and Number Patterns", duration: "08:10 mins", creatorName: "Magnet Brains", channelName: "Magnet Brains", themeName: "Theme 6: Patterns" }
    ],
    textbookTitle: "ICSE Mathematics Class 3 - Theme 6: Patterns",
    textbookContent: "# Patterns\n\nSymmetry lines, rotational turns, odd/even addition rules.",
    notes: [{ topic: "Odd/Even Rules", text: "Odd + Odd = Even, Odd + Even = Odd, Even + Even = Even." }],
    lessons: [
      { id: "c3_les_6_1", title: "Line of Symmetry & Mirror Reflection Patterns", xp: 35 },
      { id: "c3_les_6_2", title: "Rotational Turns in Patterns (Quarter Turn 90° & Half Turn 180°)", xp: 35 },
      { id: "c3_les_6_3", title: "Growing and Shrinking Number Sequences", xp: 35 }
    ]
  }
];

// =========================================================================
// Class 6 ICSE Chapters / Themes (6 Themes, 26 Topics)
// =========================================================================
export const class6Chapters = [
  {
    id: "c6_theme_1",
    number: 1,
    title: "Number System (Integers, Fractions, Decimals, Sets)",
    description: "Large numbers, whole numbers properties, integers and number line, sets, fractions, and decimals.",
    icon: "Hash",
    color: "#58cc02",
    bgLight: "#e5f9d8",
    themeName: "Theme 1: Number System",
    olympiadStars: 3,
    olympiadRating: "3 Stars",
    readinessLevel: "Intermediate Competence",
    youtubeUrl: "https://www.youtube.com/embed/5Uq1vQG6f4E",
    playlist: [
      { id: "v_c6_1", type: "primary", videoId: "5Uq1vQG6f4E", title: "Integers and Number Operations", duration: "12:00 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 1: Number System" }
    ],
    textbookTitle: "ICSE Mathematics Class 6 - Theme 1: Number System",
    textbookContent: "# Number System\n\nClosure, commutative, associative and distributive properties.",
    notes: [{ topic: "Properties", text: "Distributive Law: a × (b + c) = ab + ac." }],
    lessons: [
      { id: "c6_les_1_1", title: "Large Numbers, Indian & International System, Estimation & Rounding", xp: 40 },
      { id: "c6_les_1_2", title: "Natural & Whole Numbers, Properties of Operations (Closure, Commutative, Associative, Distributive)", xp: 40 },
      { id: "c6_les_1_3", title: "Negative Numbers, Integers, Absolute Value & Number Line Representation", xp: 40 },
      { id: "c6_les_1_4", title: "Operations on Integers (Addition, Subtraction, Multiplication, Division)", xp: 40 },
      { id: "c6_les_1_5", title: "Sets: Idea of Sets, Representation (Roster & Set-Builder), Finite/Infinite, Empty, Cardinal Number", xp: 40 },
      { id: "c6_les_1_6", title: "Fractions: Types, Equivalent Fractions, Like/Unlike, Operations (+, -, ×, ÷)", xp: 40 },
      { id: "c6_les_1_7", title: "Decimals: Place Value, Conversion with Fractions, Operations on Decimals", xp: 40 },
      { id: "c6_les_1_8", title: "Playing with Numbers: Prime Factorisation, HCF and LCM", xp: 40 }
    ]
  },
  {
    id: "c6_theme_2",
    number: 2,
    title: "Ratio, Proportion & Percentages",
    description: "Ratios in simplest form, proportion, unitary method, and percentages with practical applications.",
    icon: "Layers",
    color: "#ff9600",
    bgLight: "#fff3d6",
    themeName: "Theme 2: Ratio, Proportion & Percentages",
    olympiadStars: 3,
    olympiadRating: "3 Stars",
    readinessLevel: "Intermediate Competence",
    youtubeUrl: "https://www.youtube.com/embed/rq7w8Vv3j9s",
    playlist: [
      { id: "v_c6_2", type: "primary", videoId: "rq7w8Vv3j9s", title: "Ratio and Unitary Method", duration: "11:30 mins", creatorName: "Magnet Brains", channelName: "Magnet Brains", themeName: "Theme 2: Ratio & Proportion" }
    ],
    textbookTitle: "ICSE Mathematics Class 6 - Theme 2: Ratio & Proportion",
    textbookContent: "# Ratio & Proportion\n\nProduct of extremes = Product of means. Unitary method.",
    notes: [{ topic: "Proportion", text: "a : b :: c : d ⟹ a × d = b × c." }],
    lessons: [
      { id: "c6_les_2_1", title: "Ratio: Definition, Simplest Form, Comparison of Ratios", xp: 40 },
      { id: "c6_les_2_2", title: "Proportion: Extreme & Mean Terms, Continued Proportion", xp: 40 },
      { id: "c6_les_2_3", title: "Unitary Method (Direct Variation Problems)", xp: 40 },
      { id: "c6_les_2_4", title: "Percentage: Concept, Conversion (Fraction/Decimal to %), Applications", xp: 40 }
    ]
  },
  {
    id: "c6_theme_3",
    number: 3,
    title: "Algebra (Expressions & Equations)",
    description: "Constants, variables, algebraic terms, polynomials, evaluation, and solving linear equations.",
    icon: "Calculator",
    color: "#ce82ff",
    bgLight: "#f5e8ff",
    themeName: "Theme 3: Algebra",
    olympiadStars: 3,
    olympiadRating: "3 Stars",
    readinessLevel: "Intermediate Competence",
    youtubeUrl: "https://www.youtube.com/embed/NybHckSEQBI",
    playlist: [
      { id: "v_c6_3", type: "primary", videoId: "NybHckSEQBI", title: "Introduction to Algebra and Linear Equations", duration: "13:00 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 3: Algebra" }
    ],
    textbookTitle: "ICSE Mathematics Class 6 - Theme 3: Algebra",
    textbookContent: "# Algebra\n\nVariables, coefficients, like vs unlike terms.",
    notes: [{ topic: "Linear Equation", text: "Equation with variable of power 1." }],
    lessons: [
      { id: "c6_les_3_1", title: "Introduction to Algebra: Constants, Variables, Algebraic Terms, Coefficients", xp: 40 },
      { id: "c6_les_3_2", title: "Algebraic Expressions: Monomials, Binomials, Polynomials, Like/Unlike Terms, Addition/Subtraction", xp: 40 },
      { id: "c6_les_3_3", title: "Linear Equations in One Variable (Forming & Solving by Transposition/Trial-and-Error)", xp: 40 }
    ]
  },
  {
    id: "c6_theme_4",
    number: 4,
    title: "Geometry & Constructions",
    description: "Basic geometric concepts, angles, parallel lines, polygons, triangles, quadrilaterals, 3D solids, and constructions.",
    icon: "Shapes",
    color: "#00cd9c",
    bgLight: "#dff8f1",
    themeName: "Theme 4: Geometry",
    olympiadStars: 3,
    olympiadRating: "3 Stars",
    readinessLevel: "Intermediate Competence",
    youtubeUrl: "https://www.youtube.com/embed/302eJ3TzJQU",
    playlist: [
      { id: "v_c6_4", type: "primary", videoId: "302eJ3TzJQU", title: "Geometry Angles and Constructions", duration: "14:20 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 4: Geometry" }
    ],
    textbookTitle: "ICSE Mathematics Class 6 - Theme 4: Geometry",
    textbookContent: "# Geometry\n\nAngle types, classification of triangles and quadrilaterals.",
    notes: [{ topic: "Euler's Formula", text: "F + V - E = 2 for polyhedra." }],
    lessons: [
      { id: "c6_les_4_1", title: "Fundamental Concepts: Point, Line, Ray, Plane, Parallel & Intersecting Lines", xp: 40 },
      { id: "c6_les_4_2", title: "Angles: Types (Acute, Right, Obtuse, Straight, Reflex, Complete), Interior/Exterior", xp: 40 },
      { id: "c6_les_4_3", title: "Triangles: Classification by Sides & Angles, Angle Sum Property (180°)", xp: 40 },
      { id: "c6_les_4_4", title: "Quadrilaterals & Polygons: Properties of Parallelogram, Rectangle, Square, Rhombus, Trapezium", xp: 40 },
      { id: "c6_les_4_5", title: "3D Solid Shapes (Cube, Cuboid, Cylinder, Cone, Sphere, Prism, Pyramid) & Euler's Formula", xp: 40 }
    ]
  },
  {
    id: "c6_theme_5",
    number: 5,
    title: "Mensuration (Perimeter & Area)",
    description: "Perimeter and area of rectangle, square, triangle, and combined rectilinear figures.",
    icon: "Ruler",
    color: "#1cb0f6",
    bgLight: "#ddf4ff",
    themeName: "Theme 5: Mensuration",
    olympiadStars: 3,
    olympiadRating: "3 Stars",
    readinessLevel: "Intermediate Competence",
    youtubeUrl: "https://www.youtube.com/embed/rSVMrPu0__U",
    playlist: [
      { id: "v_c6_5", type: "primary", videoId: "rSVMrPu0__U", title: "Perimeter and Area of 2D Shapes", duration: "10:45 mins", creatorName: "Math Antics", channelName: "Math Antics", themeName: "Theme 5: Mensuration" }
    ],
    textbookTitle: "ICSE Mathematics Class 6 - Theme 5: Mensuration",
    textbookContent: "# Mensuration\n\nPerimeter: 2(l + b) and 4s. Area: l × b, s², and ½ × b × h.",
    notes: [{ topic: "Formulas", text: "Area of Rectangle = l × b. Area of Triangle = ½ × b × h." }],
    lessons: [
      { id: "c6_les_5_1", title: "Perimeter: Concept, Perimeter of Rectangle (2(l+b)), Square (4s), and Polygon Perimeter", xp: 40 },
      { id: "c6_les_5_2", title: "Area: Concept of Area, Standard Units (cm², m²), Area of Rectangle (l × b) and Square (s²)", xp: 40 },
      { id: "c6_les_5_3", title: "Area of Right-Angled Triangle (½ × base × height) & Rectilinear Combined Figures", xp: 40 }
    ]
  },
  {
    id: "c6_theme_6",
    number: 6,
    title: "Data Handling",
    description: "Collection and organization of data, tally charts, pictographs, and bar graphs with proper scaling.",
    icon: "BarChart",
    color: "#ff4b4b",
    bgLight: "#ffe5e5",
    themeName: "Theme 6: Data Handling",
    olympiadStars: 2,
    olympiadRating: "2 Stars",
    readinessLevel: "Intermediate Competence",
    youtubeUrl: "https://www.youtube.com/embed/8v_GvF6m-p0",
    playlist: [
      { id: "v_c6_6", type: "primary", videoId: "8v_GvF6m-p0", title: "Bar Graphs and Data Organization", duration: "09:15 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 6: Data Handling" }
    ],
    textbookTitle: "ICSE Mathematics Class 6 - Theme 6: Data Handling",
    textbookContent: "# Data Handling\n\nData collection, frequency distribution tables, pictographs with scale.",
    notes: [{ topic: "Bar Graphs", text: "Bars have uniform width and equal spacing." }],
    lessons: [
      { id: "c6_les_6_1", title: "Collection & Organization of Data, Tally Charts & Frequency Distribution Tables", xp: 40 },
      { id: "c6_les_6_2", title: "Pictographs: Interpretation and Drawing with Scale Factors", xp: 40 },
      { id: "c6_les_6_3", title: "Bar Graphs: Reading, Interpreting, and Constructing Bar Graphs with Chosen Scale", xp: 40 }
    ]
  }
];

// =========================================================================
// Class 7 ICSE Chapters / Themes (6 Themes, 28 Topics)
// =========================================================================
export const class7Chapters = [
  {
    id: "c7_theme_1",
    number: 1,
    title: "Number System (Integers, Rationals, Exponents, Sets)",
    description: "Integer operations and properties, rational numbers, powers and laws of exponents, sets operations and Venn diagrams.",
    icon: "Hash",
    color: "#58cc02",
    bgLight: "#e5f9d8",
    themeName: "Theme 1: Number System",
    olympiadStars: 3,
    olympiadRating: "3 Stars",
    readinessLevel: "Intermediate Competence",
    youtubeUrl: "https://www.youtube.com/embed/s0QF8zRNwrg",
    playlist: [
      { id: "v_c7_1_pw", type: "primary", videoId: "s0QF8zRNwrg", title: "Integers: Operations & Properties", duration: "22:15 mins", creatorName: "PW ICSE", channelName: "Physics Wallah Foundation", themeName: "Theme 1: Number System" },
      { id: "v_c7_1_rat", type: "primary", videoId: "V4RoSBZheMM", title: "Rational Numbers Full Chapter", duration: "20:50 mins", creatorName: "knkg learn easy", channelName: "knkg learn easy", themeName: "Theme 1: Number System" },
      { id: "v_c7_1_exp", type: "primary", videoId: "zQMFQJtrTQk", title: "Exponents & Powers Full Chapter", duration: "24:15 mins", creatorName: "knkg learn easy", channelName: "knkg learn easy", themeName: "Theme 1: Number System" },
      { id: "v_c7_1_set", type: "primary", videoId: "28v-sWx7NbI", title: "Sets Full Chapter Explanation", duration: "22:30 mins", creatorName: "knkg learn easy", channelName: "knkg learn easy", themeName: "Theme 1: Number System" }
    ],
    textbookTitle: "ICSE Mathematics Class 7 - Theme 1: Number System",
    textbookContent: "# Number System\n\nRational numbers (p/q), laws of exponents, sets operations, and Venn diagrams.",
    notes: [{ topic: "Exponent Laws", text: "aᵐ · aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1." }],
    lessons: [
      { id: "c7_les_1_1", title: "Integers: Multiplication & Division Rules, Properties (Closure, Commutative, Associative, Distributive)", xp: 40 },
      { id: "c7_les_1_2", title: "Rational Numbers: Definition (p/q, q ≠ 0), Positive & Negative, Representation on Number Line", xp: 40 },
      { id: "c7_les_1_3", title: "Operations on Rational Numbers (+, -, ×, ÷) & Finding Rational Numbers Between Two Numbers", xp: 40 },
      { id: "c7_les_1_4", title: "Decimals & Rational Numbers: Terminating & Non-Terminating Repeating Decimals", xp: 40 },
      { id: "c7_les_1_5", title: "Exponents & Powers: Meaning, Laws of Exponents (Multiplication, Division, Power of Power, Zero Exponent)", xp: 40 },
      { id: "c7_les_1_6", title: "Standard / Scientific Notation (Expressing Very Large & Small Numbers)", xp: 40 },
      { id: "c7_les_1_7", title: "Sets: Universal Set, Complement of a Set, Union & Intersection of Sets, Venn Diagrams", xp: 40 }
    ]
  },
  {
    id: "c7_theme_2",
    number: 2,
    title: "Commercial Mathematics",
    description: "Ratio & proportion, unitary method, percentage applications, profit & loss, simple interest, and speed, distance, time.",
    icon: "Layers",
    color: "#ff9600",
    bgLight: "#fff3d6",
    themeName: "Theme 2: Commercial Mathematics",
    olympiadStars: 3,
    olympiadRating: "3 Stars",
    readinessLevel: "Intermediate Competence",
    youtubeUrl: "https://www.youtube.com/embed/1KXGW3WQo48",
    playlist: [
      { id: "v_c7_2_rat", type: "primary", videoId: "1KXGW3WQo48", title: "Ratio and Proportion Full Chapter", duration: "26:10 mins", creatorName: "knkg learn easy", channelName: "knkg learn easy", themeName: "Theme 2: Commercial Math" },
      { id: "v_c7_2_uni", type: "primary", videoId: "rVnIS_vvV7Y", title: "Unitary Method: Direct & Inverse", duration: "18:50 mins", creatorName: "knkg learn easy", channelName: "knkg learn easy", themeName: "Theme 2: Commercial Math" },
      { id: "v_c7_2_per", type: "primary", videoId: "zzpEi3pCa2s", title: "Percentage Full Chapter", duration: "23:30 mins", creatorName: "knkg learn easy", channelName: "knkg learn easy", themeName: "Theme 2: Commercial Math" },
      { id: "v_c7_2_pl", type: "primary", videoId: "iHv3r_BRftc", title: "Profit, Loss & Discount", duration: "25:15 mins", creatorName: "knkg learn easy", channelName: "knkg learn easy", themeName: "Theme 2: Commercial Math" },
      { id: "v_c7_2_si", type: "primary", videoId: "__tWvXZ-AnQ", title: "Simple Interest: SI = PRT/100", duration: "21:05 mins", creatorName: "knkg learn easy", channelName: "knkg learn easy", themeName: "Theme 2: Commercial Math" }
    ],
    textbookTitle: "ICSE Mathematics Class 7 - Theme 2: Commercial Mathematics",
    textbookContent: "# Commercial Mathematics\n\nProfit % = (P/CP) × 100, Loss % = (L/CP) × 100, Simple Interest SI = (P × R × T) / 100.",
    notes: [{ topic: "Simple Interest", text: "SI = (P × R × T) / 100. Amount A = P + SI." }],
    lessons: [
      { id: "c7_les_2_1", title: "Ratio and Proportion: Mean Proportional, Third/Fourth Proportional, Compounded Ratio", xp: 40 },
      { id: "c7_les_2_2", title: "Unitary Method: Direct and Inverse Variations", xp: 40 },
      { id: "c7_les_2_3", title: "Percentages: Increase/Decrease %, Practical Problems", xp: 40 },
      { id: "c7_les_2_4", title: "Profit and Loss: Cost Price, Selling Price, Profit %, Loss %, Overhead Expenses", xp: 40 },
      { id: "c7_les_2_5", title: "Simple Interest (SI = PRT/100, Amount = P + SI) & Speed, Distance, Time", xp: 40 }
    ]
  },
  {
    id: "c7_theme_3",
    number: 3,
    title: "Algebra",
    description: "Algebraic terms and degrees, addition, subtraction, multiplication of polynomials, linear equations, and inequalities.",
    icon: "Calculator",
    color: "#ce82ff",
    bgLight: "#f5e8ff",
    themeName: "Theme 3: Algebra",
    olympiadStars: 3,
    olympiadRating: "3 Stars",
    readinessLevel: "Intermediate Competence",
    youtubeUrl: "https://www.youtube.com/embed/8xe0mpASlwI",
    playlist: [
      { id: "v_c7_3_pt1", type: "primary", videoId: "8xe0mpASlwI", title: "Algebraic Expressions Part 1: Terms & Factors", duration: "22:40 mins", creatorName: "knkg learn easy", channelName: "knkg learn easy", themeName: "Theme 3: Algebra" },
      { id: "v_c7_3_pt2", type: "primary", videoId: "TPvsA1Fxe9o", title: "Algebraic Expressions Part 2: Operations & Multiplication", duration: "24:10 mins", creatorName: "knkg learn easy", channelName: "knkg learn easy", themeName: "Theme 3: Algebra" },
      { id: "v_c7_3_ka", type: "primary", videoId: "NybHckSEQBI", title: "Algebraic Expressions and Linear Equations", duration: "12:45 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 3: Algebra" }
    ],
    textbookTitle: "ICSE Mathematics Class 7 - Theme 3: Algebra",
    textbookContent: "# Algebra\n\nMultiplying monomials by polynomials, solving linear equations.",
    notes: [{ topic: "Multiplication", text: "(a + b)(c + d) = ac + ad + bc + bd." }],
    lessons: [
      { id: "c7_les_3_1", title: "Algebraic Expressions: Terms, Factors, Coefficients, Degree of Polynomial", xp: 40 },
      { id: "c7_les_3_2", title: "Operations on Algebraic Expressions: Addition and Subtraction of Polynomials", xp: 40 },
      { id: "c7_les_3_3", title: "Multiplication of Algebraic Expressions (Monomial × Polynomial, Binomial × Binomial)", xp: 40 }
    ]
  },
  {
    id: "c7_theme_4",
    number: 4,
    title: "Geometry & Constructions",
    description: "Lines and angles, parallel lines & transversals, triangle properties, Pythagoras theorem, congruence (SSS, SAS, ASA, RHS), constructions.",
    icon: "Shapes",
    color: "#00cd9c",
    bgLight: "#dff8f1",
    themeName: "Theme 4: Geometry",
    olympiadStars: 4,
    olympiadRating: "4 Stars",
    readinessLevel: "Advanced Readiness",
    youtubeUrl: "https://www.youtube.com/embed/302eJ3TzJQU",
    playlist: [
      { id: "v_c7_4_ka", type: "primary", videoId: "302eJ3TzJQU", title: "Parallel Lines, Angles & Congruence", duration: "15:20 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 4: Geometry" },
      { id: "v_c7_4_pyt", type: "primary", videoId: "_MOwVO03ihk", title: "Pythagoras Theorem & Triplets", duration: "18:30 mins", creatorName: "Magnet Brains", channelName: "Magnet Brains", themeName: "Theme 4: Geometry" },
      { id: "v_c7_4_pyt_bg", type: "primary", videoId: "ae07ASw0jHo", title: "Pythagoras Application Animated", duration: "09:15 mins", creatorName: "Bodhaguru", channelName: "Bodhaguru Learning", themeName: "Theme 4: Geometry" },
      { id: "v_c7_4_sym", type: "primary", videoId: "sqXP5YJKmNc", title: "Symmetry (Line & Rotational)", duration: "16:20 mins", creatorName: "knkg learn easy", channelName: "knkg learn easy", themeName: "Theme 4: Geometry" },
      { id: "v_c7_4_sol", type: "primary", videoId: "3S679ct6ddM", title: "Visualising Solid Shapes", duration: "18:45 mins", creatorName: "knkg learn easy", channelName: "knkg learn easy", themeName: "Theme 4: Geometry" }
    ],
    textbookTitle: "ICSE Mathematics Class 7 - Theme 4: Geometry",
    textbookContent: "# Geometry\n\nAlternate, corresponding, co-interior angles. Pythagoras theorem.",
    notes: [{ topic: "Pythagoras", text: "Hypotenuse² = Base² + Perpendicular²." }],
    lessons: [
      { id: "c7_les_4_1", title: "Pairs of Angles: Complementary, Supplementary, Adjacent, Linear Pair, Vertically Opposite", xp: 40 },
      { id: "c7_les_4_2", title: "Parallel Lines and Transversal: Alternate, Corresponding, Co-Interior Angles", xp: 40 },
      { id: "c7_les_4_3", title: "Properties of Triangles: Angle Sum Property, Exterior Angle Theorem", xp: 40 },
      { id: "c7_les_4_4", title: "Pythagoras Theorem & Pythagorean Triplets", xp: 40 },
      { id: "c7_les_4_5", title: "Symmetry: Line Symmetry, Rotational Symmetry, Order and Angle of Rotational Symmetry", xp: 40 },
      { id: "c7_les_4_6", title: "Visualising Solid Shapes: 2D Representation of 3D Objects, Nets of Solids", xp: 40 },
      { id: "c7_les_4_7", title: "Congruence of Triangles (SSS, SAS, ASA, RHS Criteria) and Geometric Constructions", xp: 40 }
    ]
  },
  {
    id: "c7_theme_5",
    number: 5,
    title: "Mensuration (Area of Circle & Polygons)",
    description: "Circumference and area of circle, area of parallelogram, rhombus, trapezium, and area of paths/borders.",
    icon: "Ruler",
    color: "#1cb0f6",
    bgLight: "#ddf4ff",
    themeName: "Theme 5: Mensuration",
    olympiadStars: 3,
    olympiadRating: "3 Stars",
    readinessLevel: "Intermediate Competence",
    youtubeUrl: "https://www.youtube.com/embed/d-SRwlOHV9w",
    playlist: [
      { id: "v_c7_5_knkg", type: "primary", videoId: "d-SRwlOHV9w", title: "Perimeter and Area Full Chapter", duration: "27:40 mins", creatorName: "knkg learn easy", channelName: "knkg learn easy", themeName: "Theme 5: Mensuration" },
      { id: "v_c7_5_cir", type: "primary", videoId: "rSVMrPu0__U", title: "Circumference & Area of Circles", duration: "12:10 mins", creatorName: "Math Antics", channelName: "Math Antics", themeName: "Theme 5: Mensuration" }
    ],
    textbookTitle: "ICSE Mathematics Class 7 - Theme 5: Mensuration",
    textbookContent: "# Mensuration\n\nCircle: C = 2πr, Area = πr². Parallelogram: b × h.",
    notes: [{ topic: "Circle Formulas", text: "C = 2πr. Area = πr²." }],
    lessons: [
      { id: "c7_les_5_1", title: "Perimeter and Area of Rectangles, Squares, and Border/Pathway Problems", xp: 40 },
      { id: "c7_les_5_2", title: "Area of Parallelogram (base × height) and Triangle (½ × base × height)", xp: 40 },
      { id: "c7_les_5_3", title: "Circles: Circumference (2πr) and Area of Circle (πr²), Semi-Circle, Circular Ring", xp: 40 }
    ]
  },
  {
    id: "c7_theme_6",
    number: 6,
    title: "Data Handling & Probability",
    description: "Arithmetic mean, median, mode, range for ungrouped data, double bar graphs, and basic chance / probability.",
    icon: "BarChart",
    color: "#ff4b4b",
    bgLight: "#ffe5e5",
    themeName: "Theme 6: Data Handling & Probability",
    olympiadStars: 3,
    olympiadRating: "3 Stars",
    readinessLevel: "Intermediate Competence",
    youtubeUrl: "https://www.youtube.com/embed/sS6t-2j11Xs",
    playlist: [
      { id: "v_c7_6_ln", type: "primary", videoId: "sS6t-2j11Xs", title: "Mean, Median, Mode & Central Tendency", duration: "14:20 mins", creatorName: "Learning Notebook", channelName: "Learning Notebook", themeName: "Theme 6: Data Handling" },
      { id: "v_c7_6_ttl", type: "primary", videoId: "wRSYeM1z3X0", title: "Range, Mean, Median, Mode", duration: "09:30 mins", creatorName: "TicTacLearn English", channelName: "TicTacLearn English", themeName: "Theme 6: Data Handling" },
      { id: "v_c7_6_ka", type: "primary", videoId: "k3aKKasOmIw", title: "Finding Mean, Median and Mode", duration: "08:50 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 6: Data Handling" },
      { id: "v_c7_6_lh", type: "primary", videoId: "G9vk3QfBSGM", title: "Mean, Median and Mode Class 7", duration: "19:40 mins", creatorName: "LearnoHub", channelName: "LearnoHub - Class 7", themeName: "Theme 6: Data Handling" },
      { id: "v_c7_6_bg", type: "primary", videoId: "8v_GvF6m-p0", title: "Double Bar Graphs & Chance Probability", duration: "11:45 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 6: Data Handling" }
    ],
    textbookTitle: "ICSE Mathematics Class 7 - Theme 6: Data Handling",
    textbookContent: "# Data Handling & Probability\n\nMean = Sum / Count. Median = middle value.",
    notes: [{ topic: "Central Tendency", text: "Mean = Σx/N. Probability P(E) = n(E)/n(S)." }],
    lessons: [
      { id: "c7_les_6_1", title: "Measures of Central Tendency: Arithmetic Mean, Median, Mode, and Range of Raw Data", xp: 40 },
      { id: "c7_les_6_2", title: "Double Bar Graphs: Reading, Interpreting, and Comparing Two Data Sets", xp: 40 },
      { id: "c7_les_6_3", title: "Chance & Basic Probability: Probability of Single Events (Coins, Dice, Bags)", xp: 40 }
    ]
  }
];

// =========================================================================
// Class 9 ICSE Chapters / Themes (8 Themes, 25 Topics)
// =========================================================================
export const class9Chapters = [
  {
    id: "c9_theme_1",
    number: 1,
    title: "Pure Arithmetic (Rational & Irrational Numbers)",
    description: "Rational and irrational numbers, surds, radicals, rationalising denominators, proofs of irrationality.",
    icon: "Hash",
    color: "#58cc02",
    bgLight: "#e5f9d8",
    themeName: "Theme 1: Pure Arithmetic",
    olympiadStars: 4,
    olympiadRating: "4 Stars",
    readinessLevel: "Advanced Readiness",
    youtubeUrl: "https://www.youtube.com/embed/5Uq1vQG6f4E",
    playlist: [
      { id: "v_c9_1", type: "primary", videoId: "5Uq1vQG6f4E", title: "Rational and Irrational Numbers & Surds", duration: "14:00 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 1: Pure Arithmetic" }
    ],
    textbookTitle: "ICSE Mathematics Class 9 - Theme 1: Pure Arithmetic",
    textbookContent: "# Pure Arithmetic\n\nRational & irrational numbers, recurring decimals, surds.",
    notes: [{ topic: "Surds", text: "Rationalising factor of (a + √b) is (a - √b)." }],
    lessons: [
      { id: "c9_les_1_1", title: "Rational and Irrational Numbers, Surds, Radicals & Rationalising the Denominator", xp: 45 }
    ]
  },
  {
    id: "c9_theme_2",
    number: 2,
    title: "Commercial Mathematics (Compound Interest)",
    description: "Compound Interest using simple interest formula step-by-step and using compound interest formula A = P(1 + r/100)ⁿ.",
    icon: "Layers",
    color: "#ff9600",
    bgLight: "#fff3d6",
    themeName: "Theme 2: Commercial Mathematics",
    olympiadStars: 4,
    olympiadRating: "4 Stars",
    readinessLevel: "Advanced Readiness",
    youtubeUrl: "https://www.youtube.com/embed/rq7w8Vv3j9s",
    playlist: [
      { id: "v_c9_2", type: "primary", videoId: "rq7w8Vv3j9s", title: "Compound Interest Formula and Applications", duration: "15:10 mins", creatorName: "Magnet Brains", channelName: "Magnet Brains", themeName: "Theme 2: Commercial Math" }
    ],
    textbookTitle: "ICSE Mathematics Class 9 - Theme 2: Commercial Mathematics",
    textbookContent: "# Compound Interest\n\nA = P(1 + r/100)ⁿ. Half-yearly compounding: r/2 and 2n.",
    notes: [{ topic: "CI Formula", text: "A = P(1 + r/100)ⁿ. CI = A - P." }],
    lessons: [
      { id: "c9_les_2_1", title: "Compound Interest: Annual, Semi-Annual Compounding, Growth & Depreciation", xp: 45 }
    ]
  },
  {
    id: "c9_theme_3",
    number: 3,
    title: "Algebra (Expansions, Factorisation, Equations, Indices, Logs)",
    description: "Algebraic identities, factorisation, simultaneous linear equations, laws of indices, and logarithms.",
    icon: "Calculator",
    color: "#ce82ff",
    bgLight: "#f5e8ff",
    themeName: "Theme 3: Algebra",
    olympiadStars: 4,
    olympiadRating: "4 Stars",
    readinessLevel: "Advanced Readiness",
    youtubeUrl: "https://www.youtube.com/embed/NybHckSEQBI",
    playlist: [
      { id: "v_c9_3", type: "primary", videoId: "NybHckSEQBI", title: "Expansions, Factorisation and Logarithms", duration: "16:00 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 3: Algebra" }
    ],
    textbookTitle: "ICSE Mathematics Class 9 - Theme 3: Algebra",
    textbookContent: "# Algebra\n\n(a ± b)³, a³ ± b³, splitting the middle term, log laws.",
    notes: [{ topic: "Logarithms", text: "log(ab) = log a + log b, log(a/b) = log a - log b, log(aⁿ) = n log a." }],
    lessons: [
      { id: "c9_les_3_1", title: "Expansions: Identities (a ± b)², (a ± b)³, (a + b + c)², and Special Products", xp: 45 },
      { id: "c9_les_3_2", title: "Factorisation: Common Factors, Grouping, Difference of Squares, Trinomials (ax² + bx + c)", xp: 45 },
      { id: "c9_les_3_3", title: "Simultaneous Linear Equations in Two Variables (Elimination, Substitution, Cross-Multiplication)", xp: 45 },
      { id: "c9_les_3_4", title: "Indices / Exponents: Integral and Fractional Indices, Laws of Indices", xp: 45 },
      { id: "c9_les_3_5", title: "Logarithms: Meaning, Laws of Logarithms (Product, Quotient, Power, Change of Base)", xp: 45 }
    ]
  },
  {
    id: "c9_theme_4",
    number: 4,
    title: "Geometry (Triangles, Mid-Point, Pythagoras, Quadrilaterals, Circles)",
    description: "Congruency and inequalities, Mid-point theorem, Intercept theorem, Pythagoras theorem, Rectilinear figures, and Circles chords.",
    icon: "Shapes",
    color: "#00cd9c",
    bgLight: "#dff8f1",
    themeName: "Theme 4: Geometry",
    olympiadStars: 5,
    olympiadRating: "5 Stars",
    readinessLevel: "Advanced Readiness",
    youtubeUrl: "https://www.youtube.com/embed/302eJ3TzJQU",
    playlist: [
      { id: "v_c9_4", type: "primary", videoId: "302eJ3TzJQU", title: "Mid-Point Theorem and Circle Chords", duration: "15:40 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 4: Geometry" }
    ],
    textbookTitle: "ICSE Mathematics Class 9 - Theme 4: Geometry",
    textbookContent: "# Geometry\n\nMid-point theorem: DE || BC and DE = ½ BC.",
    notes: [{ topic: "Circle Chords", text: "Perpendicular from center bisects chord." }],
    lessons: [
      { id: "c9_les_4_1", title: "Triangles: Congruency Proofs & Triangle Inequalities (Side-Angle Relationships)", xp: 45 },
      { id: "c9_les_4_2", title: "Mid-Point Theorem and its Converse, Equal Intercept Theorem", xp: 45 },
      { id: "c9_les_4_3", title: "Pythagoras Theorem: Formal Proof and Geometric Applications", xp: 45 },
      { id: "c9_les_4_4", title: "Rectilinear Figures: Properties & Proofs for Parallelograms, Rhombus, Rectangle, Square, Trapezium", xp: 45 },
      { id: "c9_les_4_5", title: "Circles: Chords, Perpendicular from Centre to Chord, Equal Chords and Distance from Centre", xp: 45 }
    ]
  },
  {
    id: "c9_theme_5",
    number: 5,
    title: "Statistics",
    description: "Data collection and frequency tables, graphical representation (histograms and frequency polygons), mean and median of raw data.",
    icon: "BarChart",
    color: "#ff4b4b",
    bgLight: "#ffe5e5",
    themeName: "Theme 5: Statistics",
    olympiadStars: 3,
    olympiadRating: "3 Stars",
    readinessLevel: "Intermediate Competence",
    youtubeUrl: "https://www.youtube.com/embed/8v_GvF6m-p0",
    playlist: [
      { id: "v_c9_5", type: "primary", videoId: "8v_GvF6m-p0", title: "Histograms and Frequency Polygons", duration: "11:20 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 5: Statistics" }
    ],
    textbookTitle: "ICSE Mathematics Class 9 - Theme 5: Statistics",
    textbookContent: "# Statistics\n\nGrouped frequency distributions, histograms.",
    notes: [{ topic: "Class Mark", text: "Class Mark = (Upper Limit + Lower Limit) / 2." }],
    lessons: [
      { id: "c9_les_5_1", title: "Introduction to Statistics, Collection, Tabulation, Frequency Distribution (Continuous/Discrete)", xp: 45 },
      { id: "c9_les_5_2", title: "Graphical Representation: Histograms and Frequency Polygons", xp: 45 },
      { id: "c9_les_5_3", title: "Measures of Central Tendency: Mean and Median of Ungrouped / Tabulated Data", xp: 45 }
    ]
  },
  {
    id: "c9_theme_6",
    number: 6,
    title: "Mensuration (Area of Triangle, Circle, Ring, 3D Solids)",
    description: "Area of triangles using Heron's formula, circle, semi-circle, ring, surface area and volume of cube and cuboid.",
    icon: "Ruler",
    color: "#1cb0f6",
    bgLight: "#ddf4ff",
    themeName: "Theme 6: Mensuration",
    olympiadStars: 4,
    olympiadRating: "4 Stars",
    readinessLevel: "Advanced Readiness",
    youtubeUrl: "https://www.youtube.com/embed/rSVMrPu0__U",
    playlist: [
      { id: "v_c9_6", type: "primary", videoId: "rSVMrPu0__U", title: "Heron's Formula and 3D Solids Mensuration", duration: "13:50 mins", creatorName: "Math Antics", channelName: "Math Antics", themeName: "Theme 6: Mensuration" }
    ],
    textbookTitle: "ICSE Mathematics Class 9 - Theme 6: Mensuration",
    textbookContent: "# Mensuration\n\nHeron's formula: Area = √[s(s-a)(s-b)(s-c)], s = (a+b+c)/2.",
    notes: [{ topic: "Heron's Formula", text: "Area = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2." }],
    lessons: [
      { id: "c9_les_6_1", title: "Area of Triangle: Base-Height Method, Equilateral/Isosceles Triangles, and Heron's Formula", xp: 45 },
      { id: "c9_les_6_2", title: "Area of Circle, Semi-Circle, Quadrant, and Circular Ring / Track", xp: 45 },
      { id: "c9_les_6_3", title: "Surface Area and Volume of 3D Solids: Cube and Cuboid (TSA, LSA, Diagonal, Volume)", xp: 45 }
    ]
  },
  {
    id: "c9_theme_7",
    number: 7,
    title: "Trigonometry",
    description: "Trigonometric ratios (sin, cos, tan, cot, sec, cosec), values for standard angles (0°, 30°, 45°, 60°, 90°), right triangle problems, complementary angles.",
    icon: "PieChart",
    color: "#00cd9c",
    bgLight: "#dff8f1",
    themeName: "Theme 7: Trigonometry",
    olympiadStars: 5,
    olympiadRating: "5 Stars",
    readinessLevel: "Advanced Readiness",
    youtubeUrl: "https://www.youtube.com/embed/PUB0TaZ7bhA",
    playlist: [
      { id: "v_c9_7", type: "primary", videoId: "PUB0TaZ7bhA", title: "Trigonometric Ratios and Standard Angles", duration: "16:30 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 7: Trigonometry" }
    ],
    textbookTitle: "ICSE Mathematics Class 9 - Theme 7: Trigonometry",
    textbookContent: "# Trigonometry\n\nDefinitions of sin θ, cos θ, tan θ.",
    notes: [{ topic: "Trig Ratios", text: "sin θ = P/H, cos θ = B/H, tan θ = P/B." }],
    lessons: [
      { id: "c9_les_7_1", title: "Trigonometric Ratios (sin, cos, tan, cot, sec, cosec) in a Right Triangle", xp: 45 },
      { id: "c9_les_7_2", title: "Trigonometric Ratios of Standard Angles (0°, 30°, 45°, 60°, 90°)", xp: 45 },
      { id: "c9_les_7_3", title: "Simple 2D Right Triangle Problems Involving Angles of Elevation/Depression Basics", xp: 45 },
      { id: "c9_les_7_4", title: "Complementary Angles: sin(90°-θ) = cos θ, tan(90°-θ) = cot θ, sec(90°-θ) = cosec θ", xp: 45 }
    ]
  },
  {
    id: "c9_theme_8",
    number: 8,
    title: "Coordinate Geometry",
    description: "Cartesian plane, plotting points, graphing linear equations ax + by + c = 0, and distance formula.",
    icon: "Hash",
    color: "#ff4b4b",
    bgLight: "#ffe5e5",
    themeName: "Theme 8: Coordinate Geometry",
    olympiadStars: 4,
    olympiadRating: "4 Stars",
    readinessLevel: "Advanced Readiness",
    youtubeUrl: "https://www.youtube.com/embed/NybHckSEQBI",
    playlist: [
      { id: "v_c9_8", type: "primary", videoId: "NybHckSEQBI", title: "Cartesian Plane and Distance Formula", duration: "12:30 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 8: Coordinate Geometry" }
    ],
    textbookTitle: "ICSE Mathematics Class 9 - Theme 8: Coordinate Geometry",
    textbookContent: "# Coordinate Geometry\n\nQuadrants, signs of coordinates, distance formula.",
    notes: [{ topic: "Distance Formula", text: "d = √[(x₂ - x₁)² + (y₂ - y₁)²]." }],
    lessons: [
      { id: "c9_les_8_1", title: "Cartesian Coordinate System: Axes, Quadrants, Coordinates of Points, Plotting Points", xp: 45 },
      { id: "c9_les_8_2", title: "Graph of Linear Equations in Two Variables (ax + by = c, Intercepts, Slope Interpretation)", xp: 45 },
      { id: "c9_les_8_3", title: "Distance Formula: Distance Between Two Points on Coordinate Plane", xp: 45 }
    ]
  }
];

// =========================================================================
// Class 10 ICSE Chapters / Themes (7 Themes, 22 Topics)
// =========================================================================
export const class10Chapters = [
  {
    id: "c10_theme_1",
    number: 1,
    title: "Commercial Mathematics (GST, Banking RD, Shares & Dividends)",
    description: "Goods and Services Tax (GST), Recurring Deposit (RD) accounts maturity value, and Shares and Dividends calculation.",
    icon: "Layers",
    color: "#ff9600",
    bgLight: "#fff3d6",
    themeName: "Theme 1: Commercial Mathematics",
    olympiadStars: 4,
    olympiadRating: "4 Stars",
    readinessLevel: "Advanced Readiness",
    youtubeUrl: "https://www.youtube.com/embed/rq7w8Vv3j9s",
    playlist: [
      { id: "v_c10_1", type: "primary", videoId: "rq7w8Vv3j9s", title: "GST, RD Banking, and Shares & Dividends", duration: "16:00 mins", creatorName: "Magnet Brains", channelName: "Magnet Brains", themeName: "Theme 1: Commercial Math" }
    ],
    textbookTitle: "ICSE Mathematics Class 10 - Theme 1: Commercial Mathematics",
    textbookContent: "# Commercial Mathematics\n\nGST, RD Banking, and Shares calculations.",
    notes: [
      { topic: "GST", text: "Intra-state: CGST = SGST = GST/2. Inter-state: IGST = GST." },
      { topic: "RD Formula", text: "I = P × [n(n+1)/24] × (R/100). MV = (P × n) + I." }
    ],
    lessons: [
      { id: "c10_les_1_1", title: "Goods and Services Tax (GST) - CGST, SGST, IGST, Input/Output Tax Credit", xp: 50 },
      { id: "c10_les_1_2", title: "Banking: Recurring Deposit (RD) Accounts & Maturity Value Calculation", xp: 50 },
      { id: "c10_les_1_3", title: "Shares and Dividends: Face Value, Market Value, Dividend, Yield, Rate of Return", xp: 50 }
    ]
  },
  {
    id: "c10_theme_2",
    number: 2,
    title: "Algebra (Inequations, Quadratics, Ratio, Factor Theorem, Matrices, AP/GP, Coordinate Geometry)",
    description: "Linear inequations on real line, quadratic equations, ratio & componendo-dividendo, remainder & factor theorem, matrices, AP & GP, coordinate geometry.",
    icon: "Calculator",
    color: "#ce82ff",
    bgLight: "#f5e8ff",
    themeName: "Theme 2: Algebra",
    olympiadStars: 5,
    olympiadRating: "5 Stars",
    readinessLevel: "Board Mastery",
    youtubeUrl: "https://www.youtube.com/embed/NybHckSEQBI",
    playlist: [
      { id: "v_c10_2", type: "primary", videoId: "NybHckSEQBI", title: "Quadratic Equations, Matrices, AP/GP and Coordinate Geometry", duration: "18:00 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 2: Algebra" }
    ],
    textbookTitle: "ICSE Mathematics Class 10 - Theme 2: Algebra",
    textbookContent: "# Algebra\n\nQuadratic formula, Remainder theorem, Matrices, AP, GP, Coordinate geometry.",
    notes: [
      { topic: "Quadratic Formula", text: "x = [-b ± √(b² - 4ac)] / (2a)." },
      { topic: "Section Formula", text: "P = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n))." }
    ],
    lessons: [
      { id: "c10_les_2_1", title: "Linear Inequations in One Variable on Real Number Line", xp: 50 },
      { id: "c10_les_2_2", title: "Quadratic Equations: Factorisation, Quadratic Formula & Nature of Roots", xp: 50 },
      { id: "c10_les_2_3", title: "Ratio and Proportion: Componendo, Dividendo, Continued Proportion", xp: 50 },
      { id: "c10_les_2_4", title: "Factorisation of Polynomials: Remainder Theorem and Factor Theorem", xp: 50 },
      { id: "c10_les_2_5", title: "Matrices: Order, Addition, Scalar Multiplication, Matrix Multiplication", xp: 50 },
      { id: "c10_les_2_6", title: "Arithmetic and Geometric Progression (AP & GP, nth Term, Sum of n Terms)", xp: 50 },
      { id: "c10_les_2_7", title: "Coordinate Geometry: Reflection, Section Formula, Midpoint, Slope & Line Equation", xp: 50 }
    ]
  },
  {
    id: "c10_theme_3",
    number: 3,
    title: "Geometry (Similarity, Loci, Circles)",
    description: "Similarity of triangles, basic proportionality theorem, loci theorems, angle and cyclic properties of circles, tangents and intersecting chords.",
    icon: "Shapes",
    color: "#00cd9c",
    bgLight: "#dff8f1",
    themeName: "Theme 3: Geometry",
    olympiadStars: 5,
    olympiadRating: "5 Stars",
    readinessLevel: "Board Mastery",
    youtubeUrl: "https://www.youtube.com/embed/302eJ3TzJQU",
    playlist: [
      { id: "v_c10_3", type: "primary", videoId: "302eJ3TzJQU", title: "Similarity, Loci and Circle Tangent Theorems", duration: "17:30 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 3: Geometry" }
    ],
    textbookTitle: "ICSE Mathematics Class 10 - Theme 3: Geometry",
    textbookContent: "# Geometry\n\nArea ratio = (s₁/s₂)². Tangent ⊥ Radius. Tangent-Secant theorem: PT² = PA × PB.",
    notes: [
      { topic: "Similarity", text: "Area(Δ₁)/Area(Δ₂) = (side₁/side₂)²." },
      { topic: "Circle Tangents", text: "PT² = PA × PB. Angle in alternate segment is equal." }
    ],
    lessons: [
      { id: "c10_les_3_1", title: "Similarity of Triangles, Basic Proportionality Theorem, Maps & Models", xp: 50 },
      { id: "c10_les_3_2", title: "Loci (Locus): Definition and Fundamental Locus Theorems", xp: 50 },
      { id: "c10_les_3_3", title: "Circles: Angle Properties, Cyclic Properties, Tangents & Intersecting Chords", xp: 50 }
    ]
  },
  {
    id: "c10_theme_4",
    number: 4,
    title: "Mensuration (Cylinder, Cone, Sphere, Combination of Solids)",
    description: "Right circular cylinder, right circular cone, sphere and hemisphere, surface area, volume, and melting/recasting of solid combinations.",
    icon: "Ruler",
    color: "#1cb0f6",
    bgLight: "#ddf4ff",
    themeName: "Theme 4: Mensuration",
    olympiadStars: 5,
    olympiadRating: "5 Stars",
    readinessLevel: "Board Mastery",
    youtubeUrl: "https://www.youtube.com/embed/rSVMrPu0__U",
    playlist: [
      { id: "v_c10_4", type: "primary", videoId: "rSVMrPu0__U", title: "Cylinder, Cone and Sphere Mensuration", duration: "16:40 mins", creatorName: "Math Antics", channelName: "Math Antics", themeName: "Theme 4: Mensuration" }
    ],
    textbookTitle: "ICSE Mathematics Class 10 - Theme 4: Mensuration",
    textbookContent: "# Mensuration\n\nCylinder: CSA = 2πrh, V = πr²h. Cone: CSA = πrl, V = ⅓πr²h. Sphere: SA = 4πr², V = 4/3πr³.",
    notes: [
      { topic: "Cylinder & Cone", text: "Cylinder: 2πrh, πr²h. Cone: πrl, ⅓πr²h." },
      { topic: "Sphere", text: "Sphere: 4πr², 4/3 πr³. Solid Hemisphere: 3πr², 2/3 πr³." }
    ],
    lessons: [
      { id: "c10_les_4_1", title: "Right Circular Cylinder and Cone: Curved Surface Area, Total Surface Area, Volume", xp: 50 },
      { id: "c10_les_4_2", title: "Sphere and Hemisphere: Surface Area, Volume, and Combinations of Solids", xp: 50 }
    ]
  },
  {
    id: "c10_theme_5",
    number: 5,
    title: "Trigonometry (Identities & Heights and Distances)",
    description: "Trigonometric identities proofs and 2D heights & distances elevation/depression problems.",
    icon: "PieChart",
    color: "#00cd9c",
    bgLight: "#dff8f1",
    themeName: "Theme 5: Trigonometry",
    olympiadStars: 5,
    olympiadRating: "5 Stars",
    readinessLevel: "Board Mastery",
    youtubeUrl: "https://www.youtube.com/embed/PUB0TaZ7bhA",
    playlist: [
      { id: "v_c10_5", type: "primary", videoId: "PUB0TaZ7bhA", title: "Trigonometric Identities and Heights & Distances", duration: "17:00 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 5: Trigonometry" }
    ],
    textbookTitle: "ICSE Mathematics Class 10 - Theme 5: Trigonometry",
    textbookContent: "# Trigonometry\n\nIdentities: sec²θ - tan²θ = 1, cosec²θ - cot²θ = 1. Heights and distances.",
    notes: [{ topic: "Identities", text: "sin²θ + cos²θ = 1, sec²θ - tan²θ = 1, cosec²θ - cot²θ = 1." }],
    lessons: [
      { id: "c10_les_5_1", title: "Trigonometrical Identities: Proofs and Simplifications", xp: 50 },
      { id: "c10_les_5_2", title: "Heights and Distances: Angle of Elevation and Depression Practical Problems", xp: 50 }
    ]
  },
  {
    id: "c10_theme_6",
    number: 6,
    title: "Statistics (Mean, Median, Mode, Ogives)",
    description: "Mean (direct, shortcut, step-deviation), median and mode of continuous grouped data, cumulative frequency curves (ogives) and quartiles.",
    icon: "BarChart",
    color: "#ff4b4b",
    bgLight: "#ffe5e5",
    themeName: "Theme 6: Statistics",
    olympiadStars: 4,
    olympiadRating: "4 Stars",
    readinessLevel: "Board Mastery",
    youtubeUrl: "https://www.youtube.com/embed/8v_GvF6m-p0",
    playlist: [
      { id: "v_c10_6", type: "primary", videoId: "8v_GvF6m-p0", title: "Step-Deviation Mean, Ogives and Quartiles", duration: "16:20 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 6: Statistics" }
    ],
    textbookTitle: "ICSE Mathematics Class 10 - Theme 6: Statistics",
    textbookContent: "# Statistics\n\nStep-deviation: x̄ = A + (Σfu/Σf)·c. Ogives: plot less-than curve.",
    notes: [
      { topic: "Step-Deviation", text: "x̄ = A + (Σfu/Σf) × c where u = (x - A)/c." },
      { topic: "Ogives & Quartiles", text: "Median at y = N/2. Q₁ at y = N/4. Q₃ at y = 3N/4. IQR = Q₃ - Q₁." }
    ],
    lessons: [
      { id: "c10_les_6_1", title: "Mean (Direct, Short-Cut, and Step-Deviation Methods)", xp: 50 },
      { id: "c10_les_6_2", title: "Median and Mode for Continuous Grouped Data (Formula & Histogram Method)", xp: 50 },
      { id: "c10_les_6_3", title: "Ogives (Cumulative Frequency Curves): Median, Quartiles, Inter-Quartile Range", xp: 50 }
    ]
  },
  {
    id: "c10_theme_7",
    number: 7,
    title: "Probability",
    description: "Classical probability, random experiments, sample spaces, single and combined events (cards, dice, coins, letters, balls).",
    icon: "Hash",
    color: "#58cc02",
    bgLight: "#e5f9d8",
    themeName: "Theme 7: Probability",
    olympiadStars: 4,
    olympiadRating: "4 Stars",
    readinessLevel: "Board Mastery",
    youtubeUrl: "https://www.youtube.com/embed/PWu6b_8BqCg",
    playlist: [
      { id: "v_c10_7", type: "primary", videoId: "PWu6b_8BqCg", title: "Probability Theory and Experiments", duration: "14:50 mins", creatorName: "Khan Academy", channelName: "Khan Academy", themeName: "Theme 7: Probability" }
    ],
    textbookTitle: "ICSE Mathematics Class 10 - Theme 7: Probability",
    textbookContent: "# Probability\n\nP(E) = n(E)/n(S). Deck of 52 cards, two dice, three coins.",
    notes: [{ topic: "Probability Rules", text: "0 ≤ P(E) ≤ 1. P(E) + P(not E) = 1." }],
    lessons: [
      { id: "c10_les_7_1", title: "Single Event Probability: Cards, Dice, Coins, Letters, Marbles", xp: 50 },
      { id: "c10_les_7_2", title: "Combined Events, Sample Spaces (Two Dice, Three Coins), Complementary Events", xp: 50 }
    ]
  }
];

export const getChaptersForClass = (classId) => {
  const map = {
    class1: class1Chapters,
    class2: class2Chapters,
    class3: class3Chapters,
    class4: class4Chapters,
    class5: class5Chapters,
    class6: class6Chapters,
    class7: class7Chapters,
    class8: class8Chapters,
    class9: class9Chapters,
    class10: class10Chapters,
    '1': class1Chapters,
    '2': class2Chapters,
    '3': class3Chapters,
    '4': class4Chapters,
    '5': class5Chapters,
    '6': class6Chapters,
    '7': class7Chapters,
    '8': class8Chapters,
    '9': class9Chapters,
    '10': class10Chapters
  };
  return map[classId] || [];
};

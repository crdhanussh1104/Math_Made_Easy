export const icseClasses = [
  { id: 'class1', name: 'Class 1 ICSE', available: false },
  { id: 'class2', name: 'Class 2 ICSE', available: false },
  { id: 'class3', name: 'Class 3 ICSE', available: false },
  { id: 'class4', name: 'Class 4 ICSE', available: true, active: true },
  { id: 'class5', name: 'Class 5 ICSE', available: false },
  { id: 'class6', name: 'Class 6 ICSE', available: false },
  { id: 'class7', name: 'Class 7 ICSE', available: false },
  { id: 'class8', name: 'Class 8 ICSE', available: false },
  { id: 'class9', name: 'Class 9 ICSE', available: false },
  { id: 'class10', name: 'Class 10 ICSE', available: false }
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

export const formulaBookData = [
  {
    id: 'form_1',
    category: 'Large Numbers & Roman Numerals',
    title: 'Indian Place Value Chart & Roman Numerals',
    formula: 'Lakhs (L) | Ten Thousands (T-Th) | Thousands (Th) | Hundreds (H) | Tens (T) | Ones (O)',
    illustrationSvg: `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="280" height="80" rx="10" fill="#e5f9d8" stroke="#58cc02" stroke-width="2"/>
      <text x="150" y="50" font-size="16" font-weight="bold" fill="#2b3a4a" text-anchor="middle">5,42,109 (5 Lacs 42 Th 109)</text>
      <text x="150" y="80" font-size="14" font-weight="bold" fill="#7c3aed" text-anchor="middle">Roman: XXXIX = 39 (I=1, V=5, X=10)</text>
    </svg>`,
    memoryTrick: 'Place Value = Digit × Position Value. Roman Numerals: I, V, X up to 39!',
    application: 'Calculating 6-digit financial transactions in Lacs and reading Roman chapter numbers.',
    practiceExample: 'Write 39 in Roman Numerals and find the place value of 4 in 5,42,109.',
    solution: '39 = XXXIX (30 + 9). Place Value of 4 is 4 × 10,000 = 40,000.'
  },
  {
    id: 'form_2',
    category: 'Addition & Operations',
    title: 'Lattice Multiplication Algorithm',
    formula: 'Lattice Grid: Diagonal sums yield the product (e.g. 23 × 3 = 69)',
    illustrationSvg: `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="20" width="80" height="80" fill="#ddf4ff" stroke="#1cb0f6" stroke-width="2"/>
      <line x1="70" y1="20" x2="150" y2="100" stroke="#1cb0f6" stroke-width="2"/>
      <text x="110" y="65" font-size="16" font-weight="bold" fill="#1cb0f6" text-anchor="middle">23 × 3 = 69</text>
    </svg>`,
    memoryTrick: 'Draw a grid with diagonal slashes and sum down each diagonal lane!',
    application: 'Alternative visual method to multiply 2 and 3-digit numbers without column carry confusion.',
    practiceExample: 'Multiply 24 × 4 using the Lattice Algorithm.',
    solution: 'Grid cells: 2×4=08, 4×4=16. Summing diagonals yields 96.'
  },
  {
    id: 'form_3',
    category: 'Playing with Numbers',
    title: 'Divisibility Rules & Factor Trees',
    formula: 'Divisibility Tests for 2, 3, 4, 5, 9, 10 | Factor Tree Method',
    illustrationSvg: `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="280" height="80" rx="10" fill="#fff2df" stroke="#ff9600" stroke-width="2"/>
      <text x="150" y="55" font-size="14" font-weight="bold" fill="#ff9600" text-anchor="middle">Divisible by 3/9: Sum digits!</text>
      <text x="150" y="80" font-size="13" font-weight="bold" fill="#2b3a4a" text-anchor="middle">Factor Tree 24 = 2 × 2 × 2 × 3</text>
    </svg>`,
    memoryTrick: 'If digit sum is a multiple of 3 or 9, the entire number is divisible by 3 or 9!',
    application: 'Rapid mental math factor checks, prime factorization, and HCF/LCM calculations.',
    practiceExample: 'Is 135 divisible by 9? Find prime factors of 24 using a Factor Tree.',
    solution: '1+3+5 = 9 (Yes!). 24 splits into 4×6 = (2×2)×(2×3) = 2³ × 3.'
  },
  {
    id: 'form_4',
    category: 'Fractions',
    title: 'Visual Equivalent Fractions & Like Fractions',
    formula: 'Equivalent: 1/2 = 2/4 = 3/6 | Like Addition: (a/d) + (b/d) = (a+b)/d',
    illustrationSvg: `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90" cy="60" r="35" fill="#f6e5ff" stroke="#ce82ff" stroke-width="2"/>
      <path d="M 90 60 L 90 25 A 35 35 0 0 1 125 60 Z" fill="#ce82ff"/>
      <circle cx="210" cy="60" r="35" fill="#f6e5ff" stroke="#ce82ff" stroke-width="2"/>
      <path d="M 210 60 L 210 25 A 35 35 0 0 1 245 60 Z" fill="#ce82ff"/>
      <path d="M 210 60 L 245 60 A 35 35 0 0 1 210 95 Z" fill="#ce82ff"/>
      <text x="90" y="110" font-size="12" font-weight="bold" fill="#ce82ff" text-anchor="middle">1/4</text>
      <text x="210" y="110" font-size="12" font-weight="bold" fill="#ce82ff" text-anchor="middle">2/4 (1/2)</text>
    </svg>`,
    memoryTrick: 'To add like fractions, add the top numbers and keep the bottom number identical!',
    application: 'Dividing pizza slices, baking recipes, and calculating share fractions.',
    practiceExample: 'Add 2/8 + 3/8.',
    solution: '(2 + 3) / 8 = 5/8.'
  },
  {
    id: 'form_5',
    category: 'Geometry',
    title: 'Circle Geometry, Tangrams & 3D Perspectives',
    formula: 'Diameter = 2 × Radius (d = 2r) | Tessellation | Plan & Elevation Views',
    illustrationSvg: `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="70" cy="60" r="35" fill="#e0faf2" stroke="#2bdeac" stroke-width="2"/>
      <line x1="35" y1="60" x2="105" y2="60" stroke="#ff4b4b" stroke-width="2"/>
      <circle cx="70" cy="60" r="3.5" fill="#2b3a4a"/>
      <text x="70" y="52" font-size="11" font-weight="bold" fill="#ff4b4b" text-anchor="middle">Diameter d = 2r</text>
      <rect x="160" y="25" width="110" height="70" fill="#e0faf2" stroke="#2bdeac" stroke-width="2" rx="8"/>
      <text x="215" y="55" font-size="12" font-weight="bold" fill="#2b3a4a" text-anchor="middle">Tangram &</text>
      <text x="215" y="75" font-size="12" font-weight="bold" fill="#7c3aed" text-anchor="middle">3D Views</text>
    </svg>`,
    memoryTrick: 'Diameter cuts all the way across through the centre, twice as long as the radius!',
    application: 'Measuring wheel sizes, carpet tiling (tessellation), and architectural blueprint drawings.',
    practiceExample: 'If a circle has a radius of 6 cm, what is its diameter?',
    solution: 'Diameter = 2 × Radius = 2 × 6 = 12 cm.'
  }
];

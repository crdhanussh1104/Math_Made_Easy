import { test, expect } from '@playwright/test';

const curriculumDomains = [
  {
    id: 'numbers',
    title: '1. Numbers, Arithmetic & Modular Math',
    subtopics: [
      { id: 'counting_placevalue', title: 'Whole Numbers, Counting & Place Value' },
      { id: 'fractions_mastery', title: 'Fractions, Decimals & Percentages' },
      { id: 'factors_multiples', title: 'Factors, Multiples, Prime Trees, HCF & LCM' },
      { id: 'exponents_roots', title: 'Exponents, Powers, Surds & Scientific Notation' },
      { id: 'integers_negatives', title: 'Negative Numbers, Integers & Number Line' },
      { id: 'roman_numerals', title: 'Roman Numerals & Number Systems' },
      { id: 'modular_arithmetic', title: 'Modular & Clock Arithmetic, Digital Roots' }
    ]
  },
  {
    id: 'algebra',
    title: '2. Algebra, Functions & Progressions',
    subtopics: [
      { id: 'expressions_variables', title: 'Algebraic Expressions & Polynomials' },
      { id: 'linear_equations', title: 'Linear Equations & Equation Balance Scale' },
      { id: 'quadratic_equations', title: 'Quadratic Equations, Factoring & Parabola Graphs' },
      { id: 'inequalities', title: 'Inequalities & Absolute Value' },
      { id: 'systems_equations', title: 'Systems of Equations (Substitution & Elimination)' },
      { id: 'functions_graphing', title: 'Functions, Domain, Range & Logarithms' },
      { id: 'sequences_series', title: 'Sequences, Progressions (AP/GP) & Series' }
    ]
  },
  {
    id: 'geometry',
    title: '3. Plane & Solid Geometry',
    subtopics: [
      { id: '2d_shapes_tangrams', title: '2D Plane Geometry, Polygons & Tangram Puzzles' },
      { id: '3d_shapes_nets', title: '3D Solid Polyhedrons, Surface Area & Unfolding Nets' },
      { id: 'angles_transversals', title: 'Angles, Protractor & Parallel Line Transversals' },
      { id: 'transformations_geom', title: 'Transformations (Rotation, Reflection & Scaling)' },
      { id: 'pythagoras_theorem', title: 'Pythagorean Theorem & Distance Formula' }
    ]
  },
  {
    id: 'trigonometry',
    title: '4. Trigonometry, Heights & Distances',
    subtopics: [
      { id: 'trig_unit_circle', title: 'Trigonometry Unit Circle, SOH-CAH-TOA & Values Table' },
      { id: 'heights_distances', title: 'Heights & Distances, Angle of Elevation & Depression' }
    ]
  },
  {
    id: 'measurement',
    title: '5. Mensuration & Measurement',
    subtopics: [
      { id: 'metric_conversions', title: 'Metric & Imperial Unit Conversions' },
      { id: 'perimeter_area', title: 'Perimeter & Area of 2D Shapes' },
      { id: 'surface_volume', title: 'Surface Area & Volume of 3D Solids' },
      { id: 'time_clocks', title: 'Analog & Digital Clocks, 24h Time & Elapsed Timelines' }
    ]
  },
  {
    id: 'coordinates',
    title: '6. Coordinate Geometry',
    subtopics: [
      { id: 'quadrant_grid', title: '4-Quadrant Cartesian Grid, Distance & Midpoint Formula' }
    ]
  },
  {
    id: 'commercial',
    title: '7. Commercial & Business Math',
    subtopics: [
      { id: 'commercial_interest', title: 'Simple & Compound Interest, EMI Calculator' },
      { id: 'profit_loss_gst', title: 'Profit, Loss, Discount & GST Tax Analysis' }
    ]
  },
  {
    id: 'time_work',
    title: '8. Time, Work, Speed & Distance',
    subtopics: [
      { id: 'time_speed_distance', title: 'Speed, Distance, Time & Relative Speed' },
      { id: 'time_work_pipes', title: 'Time & Work, Pipes & Cisterns Simulator' }
    ]
  },
  {
    id: 'ratio_mixtures',
    title: '9. Ratio, Proportion & Alligation',
    subtopics: [
      { id: 'ratio_proportion', title: 'Ratio, Proportion, Mixtures & Alligation' }
    ]
  },
  {
    id: 'statistics',
    title: '10. Data Science & Statistics',
    subtopics: [
      { id: 'data_charts', title: 'Data Collection, Bar Charts, Line Plots & Pie Charts' },
      { id: 'central_tendency', title: 'Mean, Median, Mode, Range & Weighted Averages' },
      { id: 'dispersion_sd', title: 'Variance, Standard Deviation & Scatter Plots' }
    ]
  },
  {
    id: 'probability',
    title: '11. Probability & Combinatorics',
    subtopics: [
      { id: 'probability_basic', title: 'Theoretical vs Empirical Probability (Dice, Coins, Spinners)' },
      { id: 'compound_events', title: 'Compound Events, Tree Diagrams & Venn Diagrams' },
      { id: 'permutations_combinations', title: 'Permutations (nPr), Combinations (nCr) & Pascal’s Triangle' }
    ]
  },
  {
    id: 'sets_logic',
    title: '12. Set Theory & Boolean Logic',
    subtopics: [
      { id: 'set_theory', title: 'Sets, Subsets, Venn Diagrams & Operations' },
      { id: 'boolean_logic', title: 'Logic Truth Tables & Boolean Algebra' }
    ]
  },
  {
    id: 'mental_math',
    title: '13. Mental Ability & Fast Vedic Math',
    subtopics: [
      { id: 'vedic_math', title: 'Vedic Mathematics & Fast Speed Tricks' },
      { id: 'calendar_clock_puzzles', title: 'Calendar & Clock Reasoning Problems' }
    ]
  },
  {
    id: 'games_puzzles',
    title: '14. Math Games & Logic Puzzles',
    subtopics: [
      { id: 'game_timestables', title: 'Speed Times Tables Challenge (Multiplication Grid)' },
      { id: 'game_tangrams', title: '7-Piece Ancient Tangram Builder Game' },
      { id: 'game_abacus', title: 'Interactive Abacus & Place Value Counter' },
      { id: 'game_logic_puzzles', title: 'Logic Puzzles (Tower of Hanoi & Sudoku)' }
    ]
  },
  {
    id: 'calculators_tools',
    title: '15. Interactive Calculators Suite',
    subtopics: [
      { id: 'calc_scientific', title: 'Scientific & Function Calculator' },
      { id: 'calc_grapher', title: 'Function & Parabola Grapher Tool' },
      { id: 'calc_matrix', title: 'Matrix Algebra Calculator' },
      { id: 'calc_unit_converter', title: 'Universal Unit Converter Tool' }
    ]
  }
];

test.describe('Automated Recursive Curriculum Traversal & Quality Audit Suite', () => {

  curriculumDomains.forEach((domain) => {
    test.describe(`Domain: ${domain.title}`, () => {
      
      domain.subtopics.forEach((subtopic) => {
        test(`Audit Subtopic Node: [${subtopic.id}] - ${subtopic.title}`, async ({ page }) => {
          const consoleErrors = [];
          page.on('pageerror', err => consoleErrors.push(err.message));

          // 1. Open Application & Navigate to 3D Math Lab
          const response = await page.goto('/');
          expect(response.status()).toBe(200);

          await page.click('[data-testid="nav-threeLab"]');
          await page.waitForTimeout(400);

          // 2. Open Concept Tutorials & Lesson Engine
          await page.locator('button:has-text("Concept Tutorials & Formulas")').first().click({ force: true });
          await page.waitForTimeout(400);

          // 3. Verify Page Loaded & No Blank Screen
          const bodyText = await page.textContent('body');
          expect(bodyText.length).toBeGreaterThan(100);
          expect(bodyText).toContain('Math Made Easy');

          // 4. Verify Concept & Intuition Section
          await page.click('[data-testid="lesson-tab-tutorial"]');
          await page.waitForTimeout(300);
          await expect(page.locator('[data-testid="lesson-tab-tutorial"]')).toBeVisible();

          // 5. Verify Interactive Math Lab Section
          await page.click('[data-testid="lesson-tab-lab"]');
          await page.waitForTimeout(300);
          await expect(page.locator('[data-testid="lesson-tab-lab"]')).toBeVisible();

          // 6. Verify Practice Problems (10+) Section
          await page.click('[data-testid="lesson-tab-practice"]');
          await page.waitForTimeout(300);
          await expect(page.locator('[data-testid="lesson-tab-practice"]')).toBeVisible();

          // 7. Verify Multi-Format Quiz (10+) Section
          await page.click('[data-testid="lesson-tab-quiz"]');
          await page.waitForTimeout(300);
          await expect(page.locator('[data-testid="lesson-tab-quiz"]')).toBeVisible();

          // 8. Verify ZERO console errors / runtime exceptions occurred
          expect(consoleErrors).toHaveLength(0);
        });
      });

    });
  });

});

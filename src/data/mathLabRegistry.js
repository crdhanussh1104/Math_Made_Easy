/**
 * Master Math Lab Registry for ICSE Classes 1 to 10
 * Authoritative mapping: Class -> Theme -> Topic -> Subtopic -> Interactive Tool
 */

export const mathLabRegistry = [
  // =========================================================================
  // CLASS 1
  // =========================================================================
  {
    id: 'c1_num_counting_objects',
    classNumber: 1,
    classId: 'class1',
    theme: 'Theme 1: Numbers',
    topic: 'Counting & Grouping (1 to 20)',
    subtopic: 'Concrete Counting & Number Quantities',
    title: 'Touch & Count Manipulatives Lab',
    description: 'Drag colorful objects into counting bowls to build quantities 1 to 20 and discover zero by clearing all items.',
    objective: 'Understand one-to-one correspondence, count items up to 20, and explore zero.',
    tool: 'counters',
    difficulty: 'Beginner',
    estimatedTime: 5,
    syllabusReference: 'Class 1 → Numbers → Numbers 1-20, counting, zero',
    interactionType: 'Draggable Counters & Bowls',
    defaultConfig: { initialCount: 5, maxCount: 20, itemType: 'stars' },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Drag 5 stars into the counting bowl and watch the number update.' },
      { step: 2, type: 'observe', instruction: 'Remove all stars from the bowl. What number represents having nothing left?' },
      { step: 3, type: 'challenge', instruction: 'Count out exactly 12 stars into the bowl.' }
    ]
  },
  {
    id: 'c1_num_tens_ones',
    classNumber: 1,
    classId: 'class1',
    theme: 'Theme 1: Numbers',
    topic: 'Tens & Ones (Numbers up to 99)',
    subtopic: 'Place Value Bundles & Base-10',
    title: 'Tens & Ones Builder Lab',
    description: 'Group 10 single units into a 10-rod to understand two-digit place value up to 99.',
    objective: 'Discover that 10 ones make 1 ten, and represent 2-digit numbers as tens and ones.',
    tool: 'base_ten',
    difficulty: 'Beginner',
    estimatedTime: 6,
    syllabusReference: 'Class 1 → Numbers → Tens and ones, numbers up to 99',
    interactionType: 'Base-10 Block Bundling',
    defaultConfig: { tens: 2, ones: 4 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Add unit cubes until you reach 10. Click "Bundle into Ten" to see a 10-rod form.' },
      { step: 2, type: 'observe', instruction: 'Build the number 35 using 3 tens and 5 ones.' },
      { step: 3, type: 'challenge', instruction: 'How many tens and ones are needed to show 48?' }
    ]
  },
  {
    id: 'c1_num_number_line',
    classNumber: 1,
    classId: 'class1',
    theme: 'Theme 1: Numbers',
    topic: 'Number Line & Ordering',
    subtopic: 'Before, After, Between & Sequences',
    title: 'Hopping Number Line (1 to 20)',
    description: 'Drag the jumping frog across the number line to discover before, after, between, and sequence ordering.',
    objective: 'Explore sequential order of numbers from 0 to 20 on a visual number line.',
    tool: 'number_line',
    difficulty: 'Beginner',
    estimatedTime: 5,
    syllabusReference: 'Class 1 → Numbers → Before/after/between, number line',
    interactionType: 'Interactive Number Line Pointer',
    defaultConfig: { min: 0, max: 20, step: 1, currentVal: 7 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Move the frog to number 7. What number comes immediately after 7?' },
      { step: 2, type: 'observe', instruction: 'Hop backwards by 1 step. What number comes before 7?' },
      { step: 3, type: 'challenge', instruction: 'Place markers on all even numbers between 4 and 12.' }
    ]
  },
  {
    id: 'c1_ops_addition_subtraction',
    classNumber: 1,
    classId: 'class1',
    theme: 'Theme 2: Number Operations',
    topic: 'Addition & Subtraction up to 20',
    subtopic: 'Joining & Taking Away Visual Groups',
    title: 'Visual Addition & Subtraction Lab',
    description: 'Combine two groups of objects to add, or cross out objects to subtract with live numerical feedback.',
    objective: 'Understand addition as combining sets and subtraction as separating or taking away.',
    tool: 'counters',
    difficulty: 'Beginner',
    estimatedTime: 6,
    syllabusReference: 'Class 1 → Operations → Addition/subtraction up to 20',
    interactionType: 'Interactive Group Combining',
    defaultConfig: { groupA: 4, groupB: 3, operation: 'add' },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Place 4 red apples in basket A and 3 green apples in basket B. Combine them.' },
      { step: 2, type: 'observe', instruction: 'Start with 9 balloons. Pop 4 of them. How many remain?' },
      { step: 3, type: 'challenge', instruction: 'Solve: 8 + 6 using visual counters.' }
    ]
  },
  {
    id: 'c1_geom_2d_3d_shapes',
    classNumber: 1,
    classId: 'class1',
    theme: 'Theme 3: Geometry',
    topic: '2D & Basic 3D Shapes',
    subtopic: 'Shape Sorting, Corners & Flat vs Curved Surfaces',
    title: '3D Solid & 2D Shape Explorer',
    description: 'Rotate 3D solids (cube, sphere, cylinder, cone) to inspect faces and trace their 2D footprints.',
    objective: 'Identify circle, square, rectangle, triangle, cube, cylinder, cone, sphere and their surfaces.',
    tool: 'shape_3d',
    difficulty: 'Beginner',
    estimatedTime: 6,
    syllabusReference: 'Class 1 → Geometry → 2D/3D shapes, surfaces, edges, corners',
    interactionType: '3D Shape Inspection & Tracing',
    defaultConfig: { activeShape: 'cylinder', showLabels: true },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Rotate the cylinder in 3D. Notice the 2 flat circular faces and 1 curved face.' },
      { step: 2, type: 'observe', instruction: 'Trace the bottom face of the cube. What 2D shape does it create?' },
      { step: 3, type: 'challenge', instruction: 'Which solid shape has only 1 curved surface and 0 corners?' }
    ]
  },
  {
    id: 'c1_meas_pan_balance',
    classNumber: 1,
    classId: 'class1',
    theme: 'Theme 4: Measurement',
    topic: 'Comparison (Length, Weight & Capacity)',
    subtopic: 'Heavy vs Light, Long vs Short, Capacity',
    title: 'Virtual Pan Balance & Capacity Lab',
    description: 'Place objects on the two pans of a balance scale to see which item is heavier or lighter.',
    objective: 'Compare weights using a balance scale and compare lengths and container capacities visually.',
    tool: 'measurement_balance',
    difficulty: 'Beginner',
    estimatedTime: 5,
    syllabusReference: 'Class 1 → Measurement → Longer/shorter, heavier/lighter, capacity',
    interactionType: 'Interactive Balance Scale & Beakers',
    defaultConfig: { leftWeight: 3, rightWeight: 5 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Put a watermelon on the left pan and an apple on the right pan. Which side tilts down?' },
      { step: 2, type: 'observe', instruction: 'Add apples to the right pan until the scale is perfectly balanced.' },
      { step: 3, type: 'challenge', instruction: 'Which container holds more water: the tall thin glass or the wide bowl?' }
    ]
  },
  {
    id: 'c1_pat_repeating_patterns',
    classNumber: 1,
    classId: 'class1',
    theme: 'Theme 5: Patterns',
    topic: 'Shape & Color Patterns',
    subtopic: 'Identifying Repeat Units & Extending Sequences',
    title: 'Pattern Maker & Sequence Lab',
    description: 'Identify the repeating core in shape sequences (e.g. Circle-Square-Circle-Square) and drag next items.',
    objective: 'Recognize pattern units and extend visual and numerical sequences.',
    tool: 'pattern_builder',
    difficulty: 'Beginner',
    estimatedTime: 5,
    syllabusReference: 'Class 1 → Patterns → Shape patterns, repeating sequences',
    interactionType: 'Drag & Drop Pattern Completion',
    defaultConfig: { patternType: 'AB', items: ['circle', 'square'] },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Look at pattern: 🔴 🟦 🔴 🟦. Drag the missing shape into place.' },
      { step: 2, type: 'observe', instruction: 'Discover the ABC pattern: 🔺 🔵 🟩 🔺 🔵 ___. What comes next?' },
      { step: 3, type: 'challenge', instruction: 'Create your own 3-shape repeating pattern on the conveyor.' }
    ]
  },

  // =========================================================================
  // CLASS 2
  // =========================================================================
  {
    id: 'c2_num_place_value_999',
    classNumber: 2,
    classId: 'class2',
    theme: 'Theme 1: Numbers',
    topic: '3-Digit Numbers up to 999',
    subtopic: 'Place Value, Face Value & Expanded Form',
    title: '3-Digit Place Value & Abacus Lab',
    description: 'Construct numbers up to 999 using Hundreds flats, Tens rods, and Ones cubes on an interactive board.',
    objective: 'Master 3-digit place values (H, T, O), compare numbers, and expand numerals into hundreds, tens, and ones.',
    tool: 'base_ten',
    difficulty: 'Beginner',
    estimatedTime: 6,
    syllabusReference: 'Class 2 → Theme 1: Numbers → Up to 999, place value, expanded form',
    interactionType: 'Base-10 3D Blocks & Place Cards',
    defaultConfig: { hundreds: 3, tens: 4, ones: 7 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Add 3 Hundreds flats, 4 Tens rods, and 7 Unit cubes. Read the total numeral.' },
      { step: 2, type: 'observe', instruction: 'Change the tens digit to 0. Notice how the numeral reads 307.' },
      { step: 3, type: 'challenge', instruction: 'Build the greatest 3-digit number using digits 8, 2, and 5.' }
    ]
  },
  {
    id: 'c2_ops_multiplication_arrays',
    classNumber: 2,
    classId: 'class2',
    theme: 'Theme 2: Number Operations',
    topic: 'Multiplication as Repeated Addition',
    subtopic: 'Rectangular Arrays & Equal Group Sharing',
    title: 'Multiplication Array & Equal Sharing Lab',
    description: 'Arrange dots in rows and columns to discover that 4 rows of 3 is 4 x 3 = 12, and divide by equal sharing.',
    objective: 'Understand multiplication as repeated addition and division as equal distribution.',
    tool: 'counters',
    difficulty: 'Beginner',
    estimatedTime: 7,
    syllabusReference: 'Class 2 → Theme 2: Number Operations → Multiplication arrays, equal sharing',
    interactionType: 'Draggable Grid Arrays & Sharing Plates',
    defaultConfig: { rows: 3, cols: 4, totalItems: 12 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Create 3 rows with 4 apples in each row. Count the total apples.' },
      { step: 2, type: 'observe', instruction: 'Rotate the grid to 4 rows of 3. Does the total 12 change? (Commutative property).' },
      { step: 3, type: 'challenge', instruction: 'Share 15 candies equally among 3 friends. How many does each friend get?' }
    ]
  },
  {
    id: 'c2_geom_2d_lines_tangrams',
    classNumber: 2,
    classId: 'class2',
    theme: 'Theme 3: Geometry',
    topic: 'Straight & Curved Lines, 2D Shapes',
    subtopic: 'Horizontal, Vertical, Slanting Lines & Tangram',
    title: 'Lines, Shapes & Tangram Puzzle Lab',
    description: 'Draw horizontal, vertical, and slant lines on a pegboard and assemble shapes using 2D Tangram pieces.',
    objective: 'Distinguish straight vs curved lines and construct polygons with geometric tiles.',
    tool: 'tangram',
    difficulty: 'Beginner',
    estimatedTime: 7,
    syllabusReference: 'Class 2 → Theme 3: Geometry → Straight/curved lines, 2D shapes, tangrams',
    interactionType: 'Interactive Geoboard & Tangram Slices',
    defaultConfig: { activeTool: 'lines', pieces: 5 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Draw a vertical line and a horizontal line that meet at a sharp corner.' },
      { step: 2, type: 'observe', instruction: 'Combine two right triangles from the tangram set to form a square.' },
      { step: 3, type: 'challenge', instruction: 'Build a rectangle using 1 square and 2 small triangles.' }
    ]
  },
  {
    id: 'c2_meas_clock_time',
    classNumber: 2,
    classId: 'class2',
    theme: 'Theme 4: Measurement',
    topic: 'Time & Clocks',
    subtopic: 'Reading Clock Hands & Daily Routine Sequence',
    title: 'Interactive Analog Clock Lab',
    description: 'Drag the hour and minute clock hands to read time to the hour and half hour (o\'clock and half past).',
    objective: 'Read time on analog and digital clocks and understand the sequence of daily events.',
    tool: 'clock',
    difficulty: 'Beginner',
    estimatedTime: 6,
    syllabusReference: 'Class 2 → Theme 4: Measurement → Time, clock reading, days/months',
    interactionType: 'Rotatable Clock Hands',
    defaultConfig: { hours: 3, minutes: 30 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Drag the minute hand to 12 and the hour hand to 4. Read 4:00 o\'clock.' },
      { step: 2, type: 'observe', instruction: 'Move the minute hand half-way around to 6. Notice how the hour hand moves halfway.' },
      { step: 3, type: 'challenge', instruction: 'Set the clock to 7:30 (half past seven).' }
    ]
  },
  {
    id: 'c2_data_pictographs',
    classNumber: 2,
    classId: 'class2',
    theme: 'Theme 5: Data Handling',
    topic: 'Pictographs & Tables',
    subtopic: 'Collecting Data & Counting with Symbols',
    title: 'Interactive Pictograph Builder',
    description: 'Drag fruit and book icons into pictograph columns and discover how 1 icon represents a unit count.',
    objective: 'Represent categorical data with icons, read tables, and compare category totals.',
    tool: 'data_charts',
    difficulty: 'Beginner',
    estimatedTime: 6,
    syllabusReference: 'Class 2 → Theme 5: Data Handling → Pictographs, tables, simple graphs',
    interactionType: 'Draggable Icon Bar Chart',
    defaultConfig: { chartType: 'pictograph', scale: 1, categories: [{ name: 'Apples', count: 5 }, { name: 'Bananas', count: 3 }] },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Add 4 star icons to the "Team Red" column and 6 to "Team Blue".' },
      { step: 2, type: 'observe', instruction: 'Which column is taller? How many more stars does Team Blue have?' },
      { step: 3, type: 'challenge', instruction: 'Set up a pictograph where 1 icon = 2 pets and show 8 dogs.' }
    ]
  },

  // =========================================================================
  // CLASS 3
  // =========================================================================
  {
    id: 'c3_ops_multiplication_sharing',
    classNumber: 3,
    classId: 'class3',
    theme: 'Theme 2: Number Operations',
    topic: 'Multiplication & Division Sharing (Prototype 1)',
    subtopic: 'Array Models, Skip Counting & Equal Distribution',
    title: 'Multiplication Arrays & Division Sharing Lab',
    description: 'Interactive grid and counter arrays to visualize 2-digit by 1-digit multiplication, lattice boxes, and equal sharing division.',
    objective: 'Discover the inverse relationship between multiplication and division using visual array manipulatives.',
    tool: 'counters',
    difficulty: 'Beginner',
    estimatedTime: 8,
    syllabusReference: 'Class 3 → Operations → Multiplication tables, division sharing',
    interactionType: 'Interactive Matrix Array & Sharing Pots',
    defaultConfig: { rows: 4, cols: 6, totalItems: 24, mode: 'multiply' },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Adjust rows to 4 and columns to 6. Observe the total count of 24 dots.' },
      { step: 2, type: 'observe', instruction: 'Switch to Division mode: Share 24 items into 4 equal groups. How many in each group?' },
      { step: 3, type: 'challenge', instruction: 'Build an array showing 7 x 5. How many total items are formed?' }
    ]
  },
  {
    id: 'c3_num_4digit_place_value',
    classNumber: 3,
    classId: 'class3',
    theme: 'Theme 1: Numbers',
    topic: '4-Digit Numbers up to 9,999',
    subtopic: 'Thousands Blocks & Expanded Form',
    title: '4-Digit Thousands Place Value Lab',
    description: 'Construct 4-digit numbers with Thousands cubes, Hundreds flats, Tens rods, and Ones units.',
    objective: 'Understand place values up to 9,999 and write numbers in expanded standard notation.',
    tool: 'base_ten',
    difficulty: 'Intermediate',
    estimatedTime: 7,
    syllabusReference: 'Class 3 → Numbers → 4-digit numbers up to 9999, expanded form',
    interactionType: '3D Base-10 Blocks & Abacus',
    defaultConfig: { thousands: 2, hundreds: 5, tens: 4, ones: 3 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Add 2 Thousand cubes and 5 Hundred flats. Observe the expanded sum 2000 + 500.' },
      { step: 2, type: 'observe', instruction: 'Form 4,008. Notice that the hundreds and tens places hold zero.' },
      { step: 3, type: 'challenge', instruction: 'Build the predecessor of 5,000 using block subtraction.' }
    ]
  },
  {
    id: 'c3_geom_tessellation_tangram',
    classNumber: 3,
    classId: 'class3',
    theme: 'Theme 3: Geometry',
    topic: 'Tessellations, Tangrams & Dot Grids',
    subtopic: 'Tiling Floors & Geometric Puzzle Construction',
    title: 'Tessellation Tiling & Tangram Lab',
    description: 'Tile a surface with regular polygons to see which shapes leave no gaps, and solve 7-piece Tangram silhouettes.',
    objective: 'Discover which 2D shapes tessellate a plane without gaps and construct complex figures.',
    tool: 'tangram',
    difficulty: 'Intermediate',
    estimatedTime: 8,
    syllabusReference: 'Class 3 → Geometry → Tangrams, tessellation, dot grid shapes',
    interactionType: 'Interactive Floor Tiling & Tangram Dragging',
    defaultConfig: { activeShape: 'hexagon', gridType: 'isometric' },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Tile hexagons together on the grid. Notice how they fit perfectly without overlaps or gaps.' },
      { step: 2, type: 'observe', instruction: 'Try tiling regular octagons. Why do small square gaps appear between them?' },
      { step: 3, type: 'challenge', instruction: 'Assemble the 7 Tangram pieces to construct a running swan.' }
    ]
  },

  // =========================================================================
  // CLASS 4
  // =========================================================================
  {
    id: 'c4_num_fraction_strips',
    classNumber: 4,
    classId: 'class4',
    theme: 'Theme 4: Fractions',
    topic: 'Fraction Strips, Equivalence & Operations',
    subtopic: 'Like/Unlike Fractions, Unit Fractions & Equivalent Walls',
    title: 'Fraction Wall & Pizza Slicer Lab',
    description: 'Drag fraction strip bars and slice virtual pizzas to compare 1/2, 2/4, 3/6 and add like fractions visually.',
    objective: 'Explore equivalent fractions, unit fractions, fraction comparison, and like fraction addition.',
    tool: 'fractions',
    difficulty: 'Intermediate',
    estimatedTime: 8,
    syllabusReference: 'Class 4 → Fractions → Like/unlike, equivalent fractions, addition',
    interactionType: 'Interactive Fraction Strips & Pizza Cutter',
    defaultConfig: { slices: 8, shaded: 3, compareWith: { slices: 4, shaded: 2 } },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Shade 1/2 on the fraction wall. Find which 1/4 and 1/6 strips match its exact length.' },
      { step: 2, type: 'observe', instruction: 'Notice that 2/4 and 3/6 align perfectly with 1/2 (Equivalent Fractions).' },
      { step: 3, type: 'challenge', instruction: 'Add 2/8 + 3/8 on the pizza slicer. How many 8ths are shaded in total?' }
    ]
  },
  {
    id: 'c4_num_roman_numerals',
    classNumber: 4,
    classId: 'class4',
    theme: 'Theme 1: Numbers',
    topic: 'Roman Numerals up to 39',
    subtopic: 'Symbols I, V, X & Additive/Subtractive Rules',
    title: 'Roman Numeral Tile Lab',
    description: 'Combine Roman symbol tiles (I, V, X) and discover additive and subtractive rules up to XXXIX (39).',
    objective: 'Master Roman numeral construction rules and convert between Arabic and Roman numbers.',
    tool: 'counters',
    difficulty: 'Intermediate',
    estimatedTime: 6,
    syllabusReference: 'Class 4 → Numbers → Roman numerals up to 39',
    interactionType: 'Roman Symbol Tile Stacker',
    defaultConfig: { targetNum: 24 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Stack X + X + IV tiles. Watch how 10 + 10 + 4 evaluates to 24.' },
      { step: 2, type: 'observe', instruction: 'Place I before V (IV = 4) vs after V (VI = 6). Why does placement matter?' },
      { step: 3, type: 'challenge', instruction: 'Build the numeral 39 using symbol tiles.' }
    ]
  },
  {
    id: 'c4_geom_circle_radius_diameter',
    classNumber: 4,
    classId: 'class4',
    theme: 'Theme 5: Geometry',
    topic: 'Circles, Radius & Diameter',
    subtopic: 'Center, Radius, Diameter d = 2r, Chord',
    title: 'Interactive Compass & Circle Lab',
    description: 'Adjust compass radius and drag center points to discover that Diameter is always twice the Radius.',
    objective: 'Explore circle components: center, radius, diameter, chord, circumference, and test d = 2r.',
    tool: 'angles_protractor',
    difficulty: 'Intermediate',
    estimatedTime: 7,
    syllabusReference: 'Class 4 → Geometry → Circles, radius, diameter, 2D/3D views',
    interactionType: 'Interactive Virtual Compass',
    defaultConfig: { radius: 5 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Drag the circle radius slider from 3 cm to 7 cm. Watch the diameter line update.' },
      { step: 2, type: 'observe', instruction: 'Observe that Diameter (d) is always exactly 2 x Radius (r).' },
      { step: 3, type: 'challenge', instruction: 'Draw a chord that passes through the center. What special name does it have?' }
    ]
  },
  {
    id: 'c4_meas_unit_conversions',
    classNumber: 4,
    classId: 'class4',
    theme: 'Theme 6: Measurement',
    topic: 'Metric Unit Conversions',
    subtopic: 'm to cm, kg to g, L to mL & Area/Perimeter Grid',
    title: 'Metric Converter & Area Grid Lab',
    description: 'Slide metric units (km/m/cm, kg/g, L/mL) with dynamic multiplier ladders and measure rectangle areas on a grid.',
    objective: 'Convert metric units and calculate area and perimeter on square centimetre grids.',
    tool: 'measurement_balance',
    difficulty: 'Intermediate',
    estimatedTime: 7,
    syllabusReference: 'Class 4 → Measurement → Unit conversions, area, perimeter',
    interactionType: 'Metric Multiplier Ladder & Grid Area Resizer',
    defaultConfig: { unitType: 'length', val: 5, unitFrom: 'm', unitTo: 'cm' },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Convert 5 metres into centimetres. Notice the x100 multiplier step.' },
      { step: 2, type: 'observe', instruction: 'Draw a 4 cm by 3 cm rectangle on the grid. Count the 12 unit squares inside (Area).' },
      { step: 3, type: 'challenge', instruction: 'Find the perimeter of a rectangle with length 6 m and breadth 4 m.' }
    ]
  },

  // =========================================================================
  // CLASS 5
  // =========================================================================
  {
    id: 'c5_num_decimals_fractions',
    classNumber: 5,
    classId: 'class5',
    theme: 'Theme 3: Fractions & Decimals',
    topic: 'Decimals, Place Value & Conversion',
    subtopic: 'Tenths, Hundredths, Thousandths & Fraction Decimals',
    title: 'Decimal Grid & Fraction Converter Lab',
    description: 'Shade a 10x10 hundredths grid to see 0.35 as 35/100, and perform decimal additions with live Base-10 alignments.',
    objective: 'Connect fractions and decimals visually, understand decimal place value, and add/subtract decimals.',
    tool: 'fractions',
    difficulty: 'Intermediate',
    estimatedTime: 8,
    syllabusReference: 'Class 5 → Theme 3: Fractions and Decimals → Decimals, conversions, operations',
    interactionType: '100-Grid Decimal Shader',
    defaultConfig: { decimalVal: 0.45, gridMode: 'hundredths' },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Shade 4 tenths columns and 5 hundredths squares to represent 0.45.' },
      { step: 2, type: 'observe', instruction: 'Compare 0.5 and 0.05 on the 100-grid. Why is 0.5 ten times larger?' },
      { step: 3, type: 'challenge', instruction: 'Convert 3/4 into a decimal using the visual divider tool.' }
    ]
  },
  {
    id: 'c5_num_integers_number_line',
    classNumber: 5,
    classId: 'class5',
    theme: 'Theme 5: Negative Numbers',
    topic: 'Introduction to Integers',
    subtopic: 'Negative Numbers, Number Line & Temperature',
    title: 'Integers & Thermometer Number Line Lab',
    description: 'Explore negative integers below zero on a thermometer and add/subtract directed numbers on a 2-way number line.',
    objective: 'Understand negative numbers as opposite directions and perform integer additions and subtractions.',
    tool: 'number_line',
    difficulty: 'Intermediate',
    estimatedTime: 8,
    syllabusReference: 'Class 5 → Theme 5: Negative Numbers → Integers, number line, operations',
    interactionType: '2-Way Draggable Integer Line & Thermometer',
    defaultConfig: { min: -10, max: 10, startVal: -3 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Start at -3 on the number line. Add +5 by moving 5 steps to the right.' },
      { step: 2, type: 'observe', instruction: 'Subtract +4 from 2 by moving 4 steps left. Where do you land?' },
      { step: 3, type: 'challenge', instruction: 'Solve: (-4) + (-5) on the number line.' }
    ]
  },
  {
    id: 'c5_geom_angles_triangles',
    classNumber: 5,
    classId: 'class5',
    theme: 'Theme 6: Geometry',
    topic: 'Angles, Protractor & Triangle Angle Sum',
    subtopic: 'Acute, Right, Obtuse, Reflex & Triangle 180° Proof',
    title: 'Angle Explorer & Triangle 180° Proof Lab',
    description: 'Drag angle rays with a 360° protractor and tear off triangle corners to prove the sum of angles is always 180°.',
    objective: 'Classify angles, measure with a protractor, and discover the 180° interior angle sum of triangles.',
    tool: 'angles_protractor',
    difficulty: 'Intermediate',
    estimatedTime: 9,
    syllabusReference: 'Class 5 → Theme 6: Geometry → Angles, triangles, angle sum property',
    interactionType: 'Interactive Protractor & Vertex Dragging',
    defaultConfig: { angle: 65, showProtractor: true },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Drag the ray to measure acute, right (90°), and obtuse (>90°) angles.' },
      { step: 2, type: 'observe', instruction: 'Drag any vertex of the triangle. Notice that Angle A + Angle B + Angle C always equals 180°.' },
      { step: 3, type: 'challenge', instruction: 'If two angles in a triangle are 50° and 70°, find the third angle.' }
    ]
  },
  {
    id: 'c5_geom_3d_nets_polyhedrons',
    classNumber: 5,
    classId: 'class5',
    theme: 'Theme 6: Geometry',
    topic: '3D Polyhedrons & Unfolding Nets',
    subtopic: 'Cube, Cuboid, Cylinder, Cone & Net Folding',
    title: '3D Polyhedron & Unfolding Net Lab',
    description: 'Unfold 3D solids (Cube, Prism, Pyramid, Cylinder) into 2D flat nets and fold them back into 3D shapes.',
    objective: 'Visualize 3D solid structures, count faces, vertices, and edges, and master 2D net patterns.',
    tool: 'shape_3d',
    difficulty: 'Intermediate',
    estimatedTime: 8,
    syllabusReference: 'Class 5 → Theme 6: Geometry → 3D solids, nets, Euler vertices/faces',
    interactionType: '3D Interactive Net Folding Animation',
    defaultConfig: { activeSolid: 'cube', foldProgress: 1.0 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Drag the fold slider to unfold a 3D cube into its 6-square 2D net.' },
      { step: 2, type: 'observe', instruction: 'Count faces (6), vertices (8), and edges (12) on the 3D cuboid.' },
      { step: 3, type: 'challenge', instruction: 'Which of the 4 net templates can fold into a closed triangular prism?' }
    ]
  },
  {
    id: 'c5_data_mean_bar_charts',
    classNumber: 5,
    classId: 'class5',
    theme: 'Theme 9: Data Handling',
    topic: 'Bar Graphs & Arithmetic Mean (Average)',
    subtopic: 'Data Frequency, Bar Heights & Calculating Average',
    title: 'Bar Graph & Mean Average Leveler Lab',
    description: 'Drag bar chart heights and watch the water-level mean average line recalculate in real time.',
    objective: 'Construct bar charts with uniform scale and discover mean average as leveling unequal quantities.',
    tool: 'data_charts',
    difficulty: 'Intermediate',
    estimatedTime: 8,
    syllabusReference: 'Class 5 → Theme 9: Data Handling → Bar graphs, frequency, mean average',
    interactionType: 'Dynamic Bar Dragging & Water-Level Average Line',
    defaultConfig: { values: [10, 20, 30, 40, 50] },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Drag the 5 bars to values: 10, 20, 30, 40, 50. Observe the green mean line at 30.' },
      { step: 2, type: 'observe', instruction: 'Increase the highest bar to 80. How does the mean average line shift?' },
      { step: 3, type: 'challenge', instruction: 'Adjust 4 test scores so that their mean average is exactly 75.' }
    ]
  },

  // =========================================================================
  // CLASS 6
  // =========================================================================
  {
    id: 'c6_num_integers_ratio',
    classNumber: 6,
    classId: 'class6',
    theme: 'Theme 1: Number System & Ratio',
    topic: 'Integers, Number Line & Ratio Proportion',
    subtopic: 'Integer Multiplication, Ratio Comparisons & Unitary Method',
    title: 'Integer Number Line & Ratio Balance Lab',
    description: 'Multiply directed integers on a zoomable number line and compare ratios using dual proportional beakers.',
    objective: 'Model integer rules (+/-) and simplify ratios into lowest terms.',
    tool: 'number_line',
    difficulty: 'Intermediate',
    estimatedTime: 8,
    syllabusReference: 'Class 6 → Number System → Integers, ratios, proportion, unitary method',
    interactionType: 'Zoomable Number Line & Ratio Slider',
    defaultConfig: { min: -20, max: 20, ratioA: 2, ratioB: 3 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Model (-3) x 4 by taking 4 jumps of -3 to the left. Land on -12.' },
      { step: 2, type: 'observe', instruction: 'Set ratio beakers to 6:9. Notice how the simplified ratio simplifies to 2:3.' },
      { step: 3, type: 'challenge', instruction: 'If 4 pens cost Rs 24, find the cost of 7 pens using unitary method.' }
    ]
  },
  {
    id: 'c6_alg_expressions_balance',
    classNumber: 6,
    classId: 'class6',
    theme: 'Theme 2: Algebra',
    topic: 'Introduction to Algebra & Linear Equations',
    subtopic: 'Variables, Constants, Balance Scale & Simple Equations',
    title: 'Algebraic Equation Balance Scale Lab',
    description: 'Place variable boxes (x) and unit weights on a balance scale to isolate x and solve linear equations.',
    objective: 'Discover algebraic equality rules: whatever is added or removed from one side must be done to the other.',
    tool: 'equation_balance',
    difficulty: 'Intermediate',
    estimatedTime: 9,
    syllabusReference: 'Class 6 → Algebra → Variables, expressions, linear equations',
    interactionType: 'Interactive Physical Balance Scale',
    defaultConfig: { leftX: 2, leftUnits: 4, rightX: 0, rightUnits: 14 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Set scale to 2x + 4 = 14. Remove 4 units from both sides. Observe 2x = 10.' },
      { step: 2, type: 'observe', instruction: 'Divide both sides by 2. Read the final isolated value x = 5.' },
      { step: 3, type: 'challenge', instruction: 'Set up and solve: 3x + 5 = 20 on the balance scale.' }
    ]
  },
  {
    id: 'c6_geom_circles_angles',
    classNumber: 6,
    classId: 'class6',
    theme: 'Theme 3: Geometry & Mensuration',
    topic: 'Angles, Transversals & Circle Properties',
    subtopic: 'Parallel Lines, Perimeter & Area of Polygons',
    title: 'Parallel Lines, Transversals & Perimeter Lab',
    description: 'Rotate parallel line transversals to explore alternate and corresponding angles, and compute irregular polygon perimeter.',
    objective: 'Verify that corresponding and alternate interior angles are equal for parallel lines cut by a transversal.',
    tool: 'angles_protractor',
    difficulty: 'Intermediate',
    estimatedTime: 8,
    syllabusReference: 'Class 6 → Geometry → Angles, transversals, circle sectors, perimeter',
    interactionType: 'Transversal Angle Rotator & Perimeter Tracer',
    defaultConfig: { transversalAngle: 55, isParallel: true },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Rotate the transversal line to 60°. Observe that all acute angles measure 60° and obtuse measure 120°.' },
      { step: 2, type: 'observe', instruction: 'Check alternate interior angles (Z-shape). Notice they are always equal.' },
      { step: 3, type: 'challenge', instruction: 'If angle 1 is 115°, calculate its corresponding and interior consecutive angles.' }
    ]
  },

  // =========================================================================
  // CLASS 7
  // =========================================================================
  {
    id: 'c7_num_rational_exponents',
    classNumber: 7,
    classId: 'class7',
    theme: 'Theme 1: Number System',
    topic: 'Rational Numbers & Exponent Rules',
    subtopic: 'Rational Number Line & Laws of Indices (a^m * a^n = a^(m+n))',
    title: 'Rational Number Line & Exponent Law Lab',
    description: 'Zoom infinitely into the number line between fractions, and test exponent power multiplication laws visually.',
    objective: 'Discover density of rational numbers and verify exponent laws: a^m * a^n = a^(m+n) and (a^m)^n = a^(mn).',
    tool: 'number_line',
    difficulty: 'Intermediate',
    estimatedTime: 9,
    syllabusReference: 'Class 7 → Number System → Rational numbers, exponents, laws of indices',
    interactionType: 'Infinite Zoom Number Line & Exponent Block Stacker',
    defaultConfig: { base: 2, expM: 3, expN: 2 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Zoom into the number line between 1/3 and 1/2. Find the midpoint 5/12.' },
      { step: 2, type: 'observe', instruction: 'Multiply 2^3 x 2^2. Count the 5 total factors of 2 to verify 2^(3+2) = 2^5 = 32.' },
      { step: 3, type: 'challenge', instruction: 'Evaluate: (3^2)^3 using the power-of-a-power rule.' }
    ]
  },
  {
    id: 'c7_geom_triangle_congruence',
    classNumber: 7,
    classId: 'class7',
    theme: 'Theme 3: Geometry',
    topic: 'Congruence of Triangles (SSS, SAS, ASA, RHS)',
    subtopic: 'Superposition & Rigidity Tests for Triangle Criteria',
    title: 'Triangle Congruence Discovery Lab',
    description: 'Drag sides and angles of two triangles and attempt superposition to discover SSS, SAS, ASA, and RHS criteria.',
    objective: 'Discover why SSS, SAS, ASA, and RHS guarantee congruence, whereas AAA and SSA do not.',
    tool: 'pythagoras',
    difficulty: 'Intermediate',
    estimatedTime: 9,
    syllabusReference: 'Class 7 → Geometry → Congruence criteria (SSS, SAS, ASA, RHS)',
    interactionType: 'Interactive Triangle Superposition & Dragging',
    defaultConfig: { criteria: 'SAS', sideA: 6, angleB: 45, sideC: 8 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Set two triangles with 3 equal sides (SSS: 5, 7, 9). Drag triangle 1 onto triangle 2 to test fit.' },
      { step: 2, type: 'observe', instruction: 'Test SSA (Side-Side-Angle). Notice how a swinging side can create two non-congruent triangles.' },
      { step: 3, type: 'challenge', instruction: 'Construct a congruent right triangle using RHS criteria with hypotenuse 10 and side 6.' }
    ]
  },
  {
    id: 'c7_prob_chance_sim',
    classNumber: 7,
    classId: 'class7',
    theme: 'Theme 5: Data Handling',
    topic: 'Probability & Chance Experiments',
    subtopic: 'Coin Flips, Dice Rolls, Spinners & Theoretical vs Empirical',
    title: 'Probability Spinner & Multi-Trial Lab',
    description: 'Run 1, 10, 100, and 500 trials of coin flips and dice rolls to see empirical frequency converge to theoretical probability.',
    objective: 'Calculate theoretical probability and observe the Law of Large Numbers in action.',
    tool: 'probability',
    difficulty: 'Intermediate',
    estimatedTime: 8,
    syllabusReference: 'Class 7 → Data Handling → Probability, outcomes, chance',
    interactionType: 'Automated Multi-Trial Probability Simulator',
    defaultConfig: { simType: 'dice', trials: 100, sides: 6 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Spin the 4-color spinner once. Record the experimental outcome.' },
      { step: 2, type: 'observe', instruction: 'Run 500 automated spins. Notice how each color approaches exactly 25% (Theoretical Probability).' },
      { step: 3, type: 'challenge', instruction: 'What is the theoretical probability of rolling an even prime on a standard 6-sided die?' }
    ]
  },

  // =========================================================================
  // CLASS 8
  // =========================================================================
  {
    id: 'c8_mens_cylinder_volume',
    classNumber: 8,
    classId: 'class8',
    theme: 'Theme 5: Mensuration',
    topic: 'Cylinder Volume & Surface Area (Prototype 2)',
    subtopic: 'V = πr²h, Curved Surface Area & Water Filling',
    title: '3D Cylinder Volume & Mensuration Lab',
    description: 'Adjust radius and height sliders on a 3D cylinder, fill with virtual liquid, and discover why doubling radius quadruples volume.',
    objective: 'Discover the relationship between radius, height, base area, curved surface area, and volume in cylinders.',
    tool: 'mensuration',
    difficulty: 'Intermediate',
    estimatedTime: 8,
    syllabusReference: 'Class 8 → Mensuration → Volume and surface area of cylinder',
    interactionType: '3D Cylinder Dimension Sliders & Liquid Fill',
    defaultConfig: { shapeType: 'cylinder', radius: 5, height: 10, showLiquid: true },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Set radius = 5 cm and height = 10 cm. Read Volume = 785.4 cm³ (π x 5² x 10).' },
      { step: 2, type: 'observe', instruction: 'Double the radius to 10 cm (keep height = 10 cm). Notice volume increases 4x to 3,141.6 cm³!' },
      { step: 3, type: 'challenge', instruction: 'Find dimensions of a cylinder that holds exactly 1,540 cm³ of water with radius 7 cm.' }
    ]
  },
  {
    id: 'c8_alg_identities_tiles',
    classNumber: 8,
    classId: 'class8',
    theme: 'Theme 3: Algebra',
    topic: 'Algebraic Identities (a+b)², (a-b)², a²-b²',
    subtopic: 'Geometric Area Proofs with Algebra Tiles',
    title: 'Algebraic Identity Tile Visualizer Lab',
    description: 'Build a square of side (a+b) using a² square, two ab rectangles, and a b² square to prove (a+b)² = a² + 2ab + b².',
    objective: 'Geometrically prove standard algebraic identities and factorise quadratic trinomials.',
    tool: 'algebra_tiles',
    difficulty: 'Intermediate',
    estimatedTime: 9,
    syllabusReference: 'Class 8 → Algebra → Identities (a+b)², (a-b)², a²-b², factorisation',
    interactionType: 'Interactive Geometric Area Algebra Tiles',
    defaultConfig: { identity: 'a_plus_b_sq', a: 6, b: 3 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Set a = 6 and b = 3. Drag the tiles together: 1 big square (a²=36), 2 rectangles (2ab=36), 1 small square (b²=9).' },
      { step: 2, type: 'observe', instruction: 'Sum the tile areas: 36 + 36 + 9 = 81. Notice this equals (6+3)² = 9² = 81.' },
      { step: 3, type: 'challenge', instruction: 'Switch to the Difference of Squares mode: demonstrate a² - b² = (a-b)(a+b).' }
    ]
  },
  {
    id: 'c8_geom_euler_polyhedron',
    classNumber: 8,
    classId: 'class8',
    theme: 'Theme 4: Geometry',
    topic: 'Understanding Shapes & Euler Formula',
    subtopic: 'Polyhedra Faces, Edges, Vertices & F + V = E + 2',
    title: 'Euler Polyhedron 3D Explorer Lab',
    description: 'Rotate and highlight Faces (F), Vertices (V), and Edges (E) on 3D polyhedra to verify Euler\'s Formula F + V - E = 2.',
    objective: 'Discover Euler\'s formula relating faces, vertices, and edges for all convex polyhedra.',
    tool: 'shape_3d',
    difficulty: 'Intermediate',
    estimatedTime: 8,
    syllabusReference: 'Class 8 → Geometry → Polyhedra, Euler relation, nets',
    interactionType: '3D Polyhedron Element Highlighter',
    defaultConfig: { activeSolid: 'octahedron', highlightMode: 'faces' },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Rotate the Octahedron in 3D. Click each face, vertex, and edge to count them.' },
      { step: 2, type: 'observe', instruction: 'Verify F=8, V=6, E=12. Calculate F + V = 14, and E + 2 = 14 (Euler Relation Verified!).' },
      { step: 3, type: 'challenge', instruction: 'If a polyhedron has 20 faces and 12 vertices (Icosahedron), use Euler formula to find its edges.' }
    ]
  },
  {
    id: 'c8_num_rational_line',
    classNumber: 8,
    classId: 'class8',
    theme: 'Theme 1: Number System',
    topic: 'Rational Numbers on the Number Line',
    subtopic: 'Density Property, Additive/Multiplicative Inverses',
    title: 'Rational Number Line Density Lab',
    description: 'Insert rational numbers between any two points and verify that an infinite number of rationals exist between them.',
    objective: 'Master rational number representations, density property, and arithmetic operations on rationals.',
    tool: 'number_line',
    difficulty: 'Intermediate',
    estimatedTime: 8,
    syllabusReference: 'Class 8 → Number System → Rational numbers, density, inverses',
    interactionType: 'Precision Rational Number Line',
    defaultConfig: { min: -3, max: 3, points: [-5/8, 0, 3/4] },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Plot -5/8 and its additive inverse +5/8 on the number line. Notice they are symmetric across 0.' },
      { step: 2, type: 'observe', instruction: 'Insert the mean of 1/4 and 3/4. Discover that (1/4 + 3/4)/2 = 1/2.' },
      { step: 3, type: 'challenge', instruction: 'Find 3 distinct rational numbers between 2/5 and 3/5.' }
    ]
  },

  // =========================================================================
  // CLASS 9
  // =========================================================================
  {
    id: 'c9_geom_pythagoras_theorem',
    classNumber: 9,
    classId: 'class9',
    theme: 'Theme 4: Geometry',
    topic: 'Pythagoras Theorem Proof & Discovery',
    subtopic: 'Right Triangle a² + b² = c² & Side Squares Proof',
    title: 'Pythagorean Theorem Dynamic Square Lab',
    description: 'Drag vertices of a right triangle and observe the live areas of the three attached squares satisfying a² + b² = c².',
    objective: 'Discover and prove the Pythagorean Theorem geometrically and calculate unknown hypotenuse/legs.',
    tool: 'pythagoras',
    difficulty: 'Advanced',
    estimatedTime: 9,
    syllabusReference: 'Class 9 → Geometry → Pythagoras theorem, proofs, right triangles',
    interactionType: 'Draggable Right Triangle & Square Area Visualizer',
    defaultConfig: { legA: 6, legB: 8 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Drag leg A to 6 cm and leg B to 8 cm. Observe square A area = 36 and square B area = 64.' },
      { step: 2, type: 'observe', instruction: 'Notice that Hypotenuse Square C area = 100 (36 + 64 = 100), giving c = 10 cm.' },
      { step: 3, type: 'challenge', instruction: 'Drag the vertices to find 3 integer Pythagorean triples (e.g. 5-12-13, 8-15-17).' }
    ]
  },
  {
    id: 'c9_trig_ratios_right_triangle',
    classNumber: 9,
    classId: 'class9',
    theme: 'Theme 7: Trigonometry',
    topic: 'Trigonometric Ratios (sin, cos, tan)',
    subtopic: 'Opposite, Adjacent, Hypotenuse & Standard Angles (0°-90°)',
    title: 'Trigonometric Ratios & Unit Circle Lab',
    description: 'Drag a right triangle vertex across a circle to observe how sin θ = Opp/Hyp, cos θ = Adj/Hyp, and tan θ = Opp/Adj change.',
    objective: 'Master trigonometric definitions on right triangles and discover standard ratio values for 30°, 45°, 60°.',
    tool: 'trigonometry',
    difficulty: 'Advanced',
    estimatedTime: 10,
    syllabusReference: 'Class 9 → Trigonometry → Trigonometric ratios, right triangle, standard angles',
    interactionType: 'Interactive Right Triangle Vertex & SOH-CAH-TOA Ratios',
    defaultConfig: { angle: 30, radius: 10 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Set angle θ = 30°. Observe Opp = 5, Hyp = 10, giving sin(30°) = 5/10 = 0.5.' },
      { step: 2, type: 'observe', instruction: 'Increase θ to 45°. Notice Opp = Adj, so tan(45°) = 1.0.' },
      { step: 3, type: 'challenge', instruction: 'What happens to tan θ as the angle approaches 90°?' }
    ]
  },
  {
    id: 'c9_comm_compound_interest',
    classNumber: 9,
    classId: 'class9',
    theme: 'Theme 2: Commercial Mathematics',
    topic: 'Compound Interest vs Simple Interest',
    subtopic: 'A = P(1 + r/100)^n, Annual vs Semi-Annual Growth Curves',
    title: 'Compound Interest Exponential Curve Lab',
    description: 'Simulate annual vs compounding interest over time and compare linear SI growth against exponential CI growth.',
    objective: 'Discover how compounding interest earns interest on interest and analyze annual vs half-yearly growth.',
    tool: 'commercial_finance',
    difficulty: 'Advanced',
    estimatedTime: 9,
    syllabusReference: 'Class 9 → Commercial Mathematics → Compound interest without/with formula',
    interactionType: 'Dynamic Financial Growth Simulator & Comparison Chart',
    defaultConfig: { principal: 10000, rate: 10, years: 5, mode: 'compare' },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Invest Rs 10,000 at 10% for 3 years. Compare Year 1 interest with Year 3 interest.' },
      { step: 2, type: 'observe', instruction: 'Observe the divergence between the straight blue line (SI) and curved red line (CI).' },
      { step: 3, type: 'challenge', instruction: 'Calculate the difference between CI and SI on Rs 20,000 at 10% for 2 years.' }
    ]
  },
  {
    id: 'c9_coord_cartesian_distance',
    classNumber: 9,
    classId: 'class9',
    theme: 'Theme 8: Coordinate Geometry',
    topic: 'Cartesian Coordinates & Distance Formula',
    subtopic: 'Plotting Points, Slope & d = √((x2-x1)² + (y2-y1)²)',
    title: 'Cartesian Coordinate & Distance Formula Lab',
    description: 'Plot points A and B across 4 quadrants and observe the right triangle forming the Distance Formula.',
    objective: 'Plot Cartesian coordinates and calculate segment lengths using the distance formula derived from Pythagoras.',
    tool: 'coordinate_grid',
    difficulty: 'Advanced',
    estimatedTime: 9,
    syllabusReference: 'Class 9 → Coordinate Geometry → Cartesian plane, distance formula',
    interactionType: '4-Quadrant Draggable Point Grid & Distance Slope Calculator',
    defaultConfig: { pointA: { x: 1, y: 2 }, pointB: { x: 5, y: 5 } },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Drag Point A to (1, 2) and Point B to (5, 5). Observe Δx = 4 and Δy = 3.' },
      { step: 2, type: 'observe', instruction: 'Observe distance d = √(4² + 3²) = √(16 + 9) = √25 = 5 units.' },
      { step: 3, type: 'challenge', instruction: 'Find the distance between (-3, -4) and (3, 4).' }
    ]
  },

  // =========================================================================
  // CLASS 10
  // =========================================================================
  {
    id: 'c10_coord_distance_slope_sim',
    classNumber: 10,
    classId: 'class10',
    theme: 'Theme 2: Algebra & Coordinate Geometry',
    topic: 'Coordinate Geometry & Straight Lines (Prototype 3)',
    subtopic: 'Distance, Midpoint, Slope m = tan θ & Line Equation y = mx + c',
    title: 'Coordinate Geometry, Slope & Line Equation Lab',
    description: 'Drag points A and B on a 4-quadrant plane to discover slope m = Δy/Δx, line equations y = mx + c, and section formulas.',
    objective: 'Model lines on the Cartesian plane, compute slope, distance, midpoint, and explore parallel/perpendicular slopes.',
    tool: 'coordinate_grid',
    difficulty: 'Advanced',
    estimatedTime: 10,
    syllabusReference: 'Class 10 → Coordinate Geometry → Distance, section formula, slope, line equation',
    interactionType: 'Interactive Cartesian Line Grapher & Multi-Point Solver',
    defaultConfig: { pointA: { x: -2, y: 1 }, pointB: { x: 4, y: 4 }, showLine: true },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Drag points to (-2, 1) and (4, 4). Observe Slope m = (4-1)/(4 - (-2)) = 3/6 = 0.5.' },
      { step: 2, type: 'observe', instruction: 'Look at the y-intercept (c=2). Verify line equation: y = 0.5x + 2.' },
      { step: 3, type: 'challenge', instruction: 'Drag point B to make the line horizontal (slope = 0), then vertical (slope undefined).' }
    ]
  },
  {
    id: 'c10_comm_gst_shares_banking',
    classNumber: 10,
    classId: 'class10',
    theme: 'Theme 1: Commercial Mathematics',
    topic: 'GST, Banking & Shares Dividends',
    subtopic: 'CGST, SGST, IGST, Recurring Deposit & Dividend Returns',
    title: 'GST, Banking & Shares Portfolio Lab',
    description: 'Calculate intra-state vs inter-state GST breakdowns, simulate Recurring Deposit interest, and trade shares with dividends.',
    objective: 'Master commercial math algorithms: GST tax slabs, RD maturity value, and annual dividend yields.',
    tool: 'commercial_finance',
    difficulty: 'Advanced',
    estimatedTime: 10,
    syllabusReference: 'Class 10 → Commercial Mathematics → GST, banking (RD), shares & dividends',
    interactionType: 'Interactive Financial Ledger & Share Trading Simulator',
    defaultConfig: { mode: 'gst', itemPrice: 5000, gstRate: 18, isInterState: false },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Enter price Rs 5,000 with 18% GST (Intra-state). Observe CGST = 9% (Rs 450) and SGST = 9% (Rs 450).' },
      { step: 2, type: 'observe', instruction: 'Switch to Recurring Deposit mode: Deposit Rs 1,000/month for 24 months at 8%. Calculate maturity amount.' },
      { step: 3, type: 'challenge', instruction: 'Buy 50 shares of FV Rs 100 at MV Rs 120 offering 12% dividend. What is the dividend income?' }
    ]
  },
  {
    id: 'c10_alg_matrix_operations',
    classNumber: 10,
    classId: 'class10',
    theme: 'Theme 2: Algebra',
    topic: 'Matrices (2x2 Grid Operations)',
    subtopic: 'Matrix Addition, Subtraction, Scalar Multiplication & Matrix Product',
    title: 'Interactive 2x2 Matrix Operations Lab',
    description: 'Edit elements in 2x2 matrices A and B, perform live scalar multiplication, addition, and step-by-step matrix multiplication.',
    objective: 'Understand row-by-column matrix multiplication, order compatibility, and calculate determinants.',
    tool: 'matrix',
    difficulty: 'Advanced',
    estimatedTime: 10,
    syllabusReference: 'Class 10 → Algebra → Matrices (order 2x2), addition, multiplication',
    interactionType: 'Editable Matrix Grid & Dot Product Step Visualizer',
    defaultConfig: { matrixA: [[2, 3], [1, 4]], matrixB: [[5, 1], [0, 2]], scalar: 3 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Edit matrix A elements. Observe scalar multiplication 3 x A multiplying every entry.' },
      { step: 2, type: 'observe', instruction: 'Click "Multiply A x B". Follow the row 1 x col 1 dot product: (2x5 + 3x0 = 10).' },
      { step: 3, type: 'challenge', instruction: 'Test if A x B equals B x A. Is matrix multiplication commutative?' }
    ]
  },
  {
    id: 'c10_geom_loci_explorer',
    classNumber: 10,
    classId: 'class10',
    theme: 'Theme 3: Geometry',
    topic: 'Loci & Geometric Constructions',
    subtopic: 'Perpendicular Bisector, Angle Bisector & Fixed Distance Circle',
    title: 'Loci Dynamic Constraint Tracer Lab',
    description: 'Move a point constrained to stay equidistant from two fixed points (or lines) and watch the locus path trace out dynamically.',
    objective: 'Discover the theorems of loci: perpendicular bisector as equidistant from 2 points, angle bisector from 2 lines, circle from 1 point.',
    tool: 'loci',
    difficulty: 'Advanced',
    estimatedTime: 10,
    syllabusReference: 'Class 10 → Geometry → Loci, theorems, constructions',
    interactionType: 'Dynamic Point Constraint & Real-Time Locus Tracer',
    defaultConfig: { locusType: 'perpendicular_bisector', pointA: { x: -4, y: 0 }, pointB: { x: 4, y: 0 } },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Move the point such that Distance(P, A) = Distance(P, B). Watch the vertical perpendicular bisector trace out.' },
      { step: 2, type: 'observe', instruction: 'Switch to Angle Bisector locus. Notice how point P remains equidistant from arms of the angle.' },
      { step: 3, type: 'challenge', instruction: 'Constrain a point to stay 5 cm from a single center point. What locus curve forms?' }
    ]
  },
  {
    id: 'c10_alg_ap_gp_progressions',
    classNumber: 10,
    classId: 'class10',
    theme: 'Theme 2: Algebra',
    topic: 'Arithmetic & Geometric Progressions (AP/GP)',
    subtopic: 'nth term Tn = a + (n-1)d, Sum Sn = n/2[2a + (n-1)d] & GP ar^(n-1)',
    title: 'AP & GP Sequence Block Builder Lab',
    description: 'Adjust first term (a) and common difference (d) or ratio (r) to visualize term step blocks and sum of n terms.',
    objective: 'Visualize linear arithmetic vs exponential geometric growth and verify formulas for Tn and Sn.',
    tool: 'ap_gp',
    difficulty: 'Advanced',
    estimatedTime: 9,
    syllabusReference: 'Class 10 → Algebra → Arithmetic & geometric progressions (AP & GP)',
    interactionType: 'Step Block Sequence Grapher & Sum Tower',
    defaultConfig: { seqType: 'AP', a: 2, d: 3, r: 2, n: 6 },
    guidedSteps: [
      { step: 1, type: 'explore', instruction: 'Set AP with a = 2 and d = 3. Observe the staircase sequence: 2, 5, 8, 11, 14, 17.' },
      { step: 2, type: 'observe', instruction: 'Switch to GP with a = 2 and r = 2. Watch exponential growth: 2, 4, 8, 16, 32, 64.' },
      { step: 3, type: 'challenge', instruction: 'Find the sum of the first 10 terms of an AP with a = 5 and d = 4.' }
    ]
  }
];

/**
 * Helper to get all lab activities for a specific class
 * @param {string|number} classInput - e.g. 1, 'class1', 8, 'class8'
 * @returns {Array} Array of lab activity objects
 */
export function getLabsForClass(classInput) {
  const classNum = typeof classInput === 'string' ? parseInt(classInput.replace(/\D/g, ''), 10) : classInput;
  return mathLabRegistry.filter(lab => lab.classNumber === classNum);
}

/**
 * Helper to get a single lab by its unique ID
 * @param {string} labId
 * @returns {Object|null}
 */
export function getLabById(labId) {
  return mathLabRegistry.find(lab => lab.id === labId) || null;
}

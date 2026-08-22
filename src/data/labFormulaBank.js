/**
 * Master Math Lab Formula & Mathematical Rule Bank
 * Authoritative Formula/Rule mapping for all ICSE Classes 1 to 10
 */

export const labFormulaBank = {
  // =========================================================================
  // CLASS 1 (Age-appropriate foundational rules & relationships)
  // =========================================================================
  c1_num_counting_objects: {
    title: "One-to-One Correspondence & Successor Rule",
    formula: "Next Number = Current Number + 1",
    variables: [
      { symbol: "N", meaning: "Current number quantity of counted objects" },
      { symbol: "0 (Zero)", meaning: "Absence of any objects in the set" }
    ],
    ruleDescription: "Each object counted gets exactly one unique number word in sequential order. When all objects are removed, the remaining quantity is Zero (0).",
    example: "Start with 5 stars. Add 1 star: 5 + 1 = 6 stars. Remove all: 0 stars."
  },
  c1_num_tens_ones: {
    title: "Base-10 Place Value Bundling Rule",
    formula: "10 Ones = 1 Ten | 2-Digit Number = (Tens × 10) + Ones",
    variables: [
      { symbol: "Tens (T)", meaning: "Groups of 10 unit items" },
      { symbol: "Ones (O)", meaning: "Single remaining unit items (0 to 9)" }
    ],
    ruleDescription: "Our number system groups in tens. Ten individual unit blocks bundle together into one ten-rod.",
    example: "3 Tens and 5 Ones = (3 × 10) + 5 = 30 + 5 = 35."
  },
  c1_num_number_line: {
    title: "Linear Number Order & Predecessor/Successor Property",
    formula: "Predecessor = N - 1 ⟵ N ⟶ Successor = N + 1",
    variables: [
      { symbol: "N", meaning: "Reference number on the number line" },
      { symbol: "+1 (Right)", meaning: "Step forward to the next greater number" },
      { symbol: "-1 (Left)", meaning: "Step backward to the previous smaller number" }
    ],
    ruleDescription: "Moving right on the number line increases value; moving left decreases value. Between any two non-consecutive numbers lies an intermediate number.",
    example: "For N = 7: Predecessor = 7 - 1 = 6; Successor = 7 + 1 = 8."
  },
  c1_ops_addition_subtraction: {
    title: "Addition & Subtraction Part-Whole Relationships",
    formula: "Addition: Part₁ + Part₂ = Whole | Subtraction: Whole - Part₁ = Part₂",
    variables: [
      { symbol: "Part₁ & Part₂", meaning: "The two subsets of items being combined" },
      { symbol: "Whole (Total)", meaning: "The complete combined set of objects" }
    ],
    ruleDescription: "Addition is putting sets together to find the whole. Subtraction is separating or taking away a part from the whole.",
    example: "4 Red Apples + 3 Green Apples = 7 Apples (Total) | 7 - 3 = 4 Remaining."
  },
  c1_geom_2d_3d_shapes: {
    title: "2D & 3D Geometric Surface Properties",
    formula: "Cylinder = 2 Flat Circular Faces + 1 Curved Surface",
    variables: [
      { symbol: "Flat Face", meaning: "Planar surface that can slide on a table" },
      { symbol: "Curved Surface", meaning: "Rounded boundary that can roll smoothly" },
      { symbol: "Corner (Vertex)", meaning: "Point where edges meet" }
    ],
    ruleDescription: "3D solids are bounded by flat faces and/or curved surfaces. A cylinder has two flat circular bases and one rolling curved body.",
    example: "Tracing a cylinder's flat face produces a 2D Circle. Tracing a cube's face produces a 2D Square."
  },
  c1_meas_pan_balance: {
    title: "Comparative Weight & Balance Equilibrium Rule",
    formula: "Pan Tilts Down = Heavier | Pans Level = Equal Weight",
    variables: [
      { symbol: "Left Pan Weight", meaning: "Mass of item in left basket" },
      { symbol: "Right Pan Weight", meaning: "Mass of item in right basket" }
    ],
    ruleDescription: "Gravity pulls heavier objects downward. When both sides have the exact same weight, the beam rests horizontally in balance.",
    example: "1 Watermelon tilts down against 1 Apple because Watermelon is heavier."
  },
  c1_pat_repeating_patterns: {
    title: "Pattern Core Repeating Rule",
    formula: "Sequence = (Pattern Core Unit) repeated indefinitely",
    variables: [
      { symbol: "AB Pattern", meaning: "Core repeats every 2 steps (e.g. 🔴 🟦)" },
      { symbol: "ABC Pattern", meaning: "Core repeats every 3 steps (e.g. 🔺 🔵 🟩)" }
    ],
    ruleDescription: "A mathematical pattern follows a predictable repeat rule. Identifying the core unit allows predicting any future term.",
    example: "Core = [Red Circle, Blue Square]. 5th term = Red Circle; 6th term = Blue Square."
  },

  // =========================================================================
  // CLASS 2
  // =========================================================================
  c2_num_place_value_999: {
    title: "3-Digit Place Value & Expanded Notation",
    formula: "Number = (H × 100) + (T × 10) + (O × 1)",
    variables: [
      { symbol: "H", meaning: "Hundreds place digit (value = H × 100)" },
      { symbol: "T", meaning: "Tens place digit (value = T × 10)" },
      { symbol: "O", meaning: "Ones place digit (value = O × 1)" }
    ],
    ruleDescription: "Place value is the value of a digit based on its position in the numeral. Face value is the digit itself.",
    example: "In 458: Place value of 4 is 4 × 100 = 400. Expanded form: 400 + 50 + 8 = 458."
  },
  c2_ops_multiplication_arrays: {
    title: "Multiplication Array & Commutative Property",
    formula: "Total = Rows × Columns | a × b = b × a",
    variables: [
      { symbol: "Rows (Groups)", meaning: "Number of horizontal rows" },
      { symbol: "Columns (Size)", meaning: "Number of items in each row" },
      { symbol: "Total", meaning: "Product of repeated additions" }
    ],
    ruleDescription: "Multiplication is repeated addition of equal groups. Arranging items in a grid proves that 3 rows of 4 equals 4 rows of 3 (12).",
    example: "3 rows × 4 items = 4 + 4 + 4 = 12 items | 4 rows × 3 items = 3 + 3 + 3 + 3 = 12."
  },
  c2_geom_2d_lines_tangrams: {
    title: "2D Polygon Decomposition & Tangram Geometry",
    formula: "Area(Square) = Area(Triangle₁) + Area(Triangle₂)",
    variables: [
      { symbol: "Right Triangle", meaning: "Triangle with one 90° square corner" },
      { symbol: "Hypotenuse", meaning: "Longest slanting side opposite the right angle" }
    ],
    ruleDescription: "Geometric polygons can be formed by combining simpler shapes. Joining two congruent isosceles right triangles along their hypotenuses creates a square.",
    example: "2 small right triangles join to form 1 medium square or 1 larger triangle."
  },
  c2_meas_clock_time: {
    title: "Analog Clock Reading & Time Conversion",
    formula: "1 Hour = 60 Minutes | Half Past = 30 Minutes (:30)",
    variables: [
      { symbol: "Short Hand", meaning: "Hour indicator (moves 30° per hour)" },
      { symbol: "Long Hand", meaning: "Minute indicator (moves 6° per minute, pointing to 6 at :30)" }
    ],
    ruleDescription: "The clock face is divided into 12 equal hours and 60 minutes. When the minute hand points to 6, it has traveled half the circle (30 mins).",
    example: "Hour hand between 4 and 5, minute hand on 6 = 4:30 (Half past 4)."
  },
  c2_data_pictographs: {
    title: "Pictograph Symbol-to-Quantity Scaling Rule",
    formula: "Total Category Count = Number of Symbols × Key Value",
    variables: [
      { symbol: "Symbols", meaning: "Count of visual icons drawn in a category column" },
      { symbol: "Key (Scale)", meaning: "Number of physical units represented by 1 symbol" }
    ],
    ruleDescription: "A pictograph uses pictures to represent data. The key tells how many units each symbol represents.",
    example: "If 1 Book Symbol = 2 Books: 4 symbols in column = 4 × 2 = 8 books total."
  },

  // =========================================================================
  // CLASS 3
  // =========================================================================
  c3_ops_multiplication_sharing: {
    title: "Multiplication & Division Inverse Relationship",
    formula: "Dividend ÷ Divisor = Quotient ⟺ Quotient × Divisor = Dividend",
    variables: [
      { symbol: "Dividend (Total)", meaning: "Total quantity of items being divided" },
      { symbol: "Divisor (Groups)", meaning: "Number of equal shares or groups" },
      { symbol: "Quotient (Share)", meaning: "Number of items in each individual group" }
    ],
    ruleDescription: "Division is the inverse operation of multiplication. Sharing 24 items among 4 groups gives 6 items because 4 × 6 = 24.",
    example: "24 ÷ 4 = 6 because 4 groups × 6 items = 24 items."
  },
  c3_num_4digit_place_value: {
    title: "4-Digit Place Value & Expanded Notation",
    formula: "Number = (Th × 1000) + (H × 100) + (T × 10) + (O × 1)",
    variables: [
      { symbol: "Th", meaning: "Thousands place digit (value = Th × 1000)" },
      { symbol: "H", meaning: "Hundreds place digit (value = H × 100)" },
      { symbol: "T", meaning: "Tens place digit (value = T × 10)" },
      { symbol: "O", meaning: "Ones place digit (value = O × 1)" }
    ],
    ruleDescription: "Each position moving left is ten times greater than the previous place (O=1, T=10, H=100, Th=1000).",
    example: "3,074 = (3 × 1000) + (0 × 100) + (7 × 10) + (4 × 1) = 3000 + 70 + 4."
  },
  c3_geom_tessellation_tangram: {
    title: "Tessellation Vertex Angle Sum Rule",
    formula: "Vertex Angle Sum = 360° (Complete 0-gap tiling)",
    variables: [
      { symbol: "Interior Angle (θ)", meaning: "Corner angle of regular polygon (Hexagon = 120°)" },
      { symbol: "Number of Shapes (k)", meaning: "Polygons meeting at vertex (For Hexagon, k = 3)" }
    ],
    ruleDescription: "A plane figure tessellates when copies can tile a surface without gaps or overlaps. The interior angles around every vertex must sum exactly to 360°.",
    example: "Regular Hexagon: 120° × 3 = 360° (Tessellates perfectly like a honeycomb)."
  },

  // =========================================================================
  // CLASS 4
  // =========================================================================
  c4_num_fraction_strips: {
    title: "Equivalent Fractions & Like Fraction Addition",
    formula: "a/b = (a × k)/(b × k) | a/d + c/d = (a + c)/d",
    variables: [
      { symbol: "Numerator (a)", meaning: "Number of equal parts selected or shaded" },
      { symbol: "Denominator (b)", meaning: "Total number of equal parts making 1 whole" },
      { symbol: "Multiplier (k)", meaning: "Non-zero integer multiplying top and bottom" }
    ],
    ruleDescription: "Multiplying numerator and denominator by the same non-zero number produces an equivalent fraction representing the same proportion.",
    example: "1/2 = (1 × 4)/(2 × 4) = 4/8 | Addition: 2/8 + 3/8 = (2 + 3)/8 = 5/8."
  },
  c4_num_roman_numerals: {
    title: "Roman Numeral Additive & Subtractive Rules",
    formula: "I = 1, V = 5, X = 10 | IV = 5 - 1 = 4, VI = 5 + 1 = 6",
    variables: [
      { symbol: "Additive Rule", meaning: "A smaller symbol after a larger symbol is added (XI = 10 + 1 = 11)" },
      { symbol: "Subtractive Rule", meaning: "A smaller symbol before a larger symbol is subtracted (IX = 10 - 1 = 9)" }
    ],
    ruleDescription: "Roman numerals use 7 basic letters. Symbols are repeated up to 3 times; placing a smaller value to the left subtracts it.",
    example: "XXIV = 10 + 10 + (5 - 1) = 24 | XXXIX = 10 + 10 + 10 + (10 - 1) = 39."
  },
  c4_geom_circle_radius_diameter: {
    title: "Circle Radius & Diameter Relationship",
    formula: "Diameter (d) = 2 × Radius (r) | Radius (r) = d / 2",
    variables: [
      { symbol: "Radius (r)", meaning: "Distance from the center point to any point on the boundary" },
      { symbol: "Diameter (d)", meaning: "Longest chord passing through the center connecting two boundary points" }
    ],
    ruleDescription: "The diameter of any circle is always exactly twice its radius. All radii in the same circle are equal in length.",
    example: "If radius r = 6 cm, then diameter d = 2 × 6 = 12 cm."
  },
  c4_meas_unit_conversions: {
    title: "Metric Conversion Multiplier Ladder",
    formula: "1 m = 100 cm | 1 km = 1,000 m | 1 kg = 1,000 g | 1 L = 1,000 mL",
    variables: [
      { symbol: "Larger to Smaller", meaning: "Multiply by conversion factor (e.g. ×100 for m to cm)" },
      { symbol: "Smaller to Larger", meaning: "Divide by conversion factor (e.g. ÷1000 for g to kg)" }
    ],
    ruleDescription: "The metric system is a decimal base-10 system. Shifting between units involves multiplying or dividing by powers of 10.",
    example: "Convert 4 metres to centimetres: 4 m × 100 = 400 cm."
  },

  // =========================================================================
  // CLASS 5
  // =========================================================================
  c5_num_decimals_fractions: {
    title: "Decimal to Fraction Equivalence Rule",
    formula: "0.a = a/10 | 0.ab = ab/100 | Percentage = (Part / Whole) × 100",
    variables: [
      { symbol: "Tenths (0.1)", meaning: "1 part out of 10 equal parts" },
      { symbol: "Hundredths (0.01)", meaning: "1 part out of 100 equal parts" }
    ],
    ruleDescription: "Decimals are fractions with powers of 10 in the denominator. 0.75 represents 75/100, which simplifies to 3/4 or 75%.",
    example: "0.75 = 75/100 = (75 ÷ 25)/(100 ÷ 25) = 3/4 = 75%."
  },
  c5_num_integers_number_line: {
    title: "Directed Integer Addition & Subtraction Rules",
    formula: "(+a) + (+b) = +(a + b) | (-a) + (+b) = -(a - b) if a > b",
    variables: [
      { symbol: "Positive (+) Numbers", meaning: "Move right / temperature above 0°" },
      { symbol: "Negative (-) Numbers", meaning: "Move left / temperature below 0°" }
    ],
    ruleDescription: "Adding a positive number moves right on the number line; adding a negative number (or subtracting a positive) moves left.",
    example: "(-4) + 7: Start at -4, move 7 units right ⟶ Land on +3."
  },
  c5_geom_angles_triangles: {
    title: "Triangle Interior Angle Sum Theorem",
    formula: "Angle A + Angle B + Angle C = 180°",
    variables: [
      { symbol: "∠A, ∠B, ∠C", meaning: "The three interior angles of any triangle" }
    ],
    ruleDescription: "No matter how a triangle is resized or sheared, the sum of its three interior angles is always strictly constant at 180° (a straight angle).",
    example: "If ∠A = 60° and ∠B = 70°, then ∠C = 180° - (60° + 70°) = 180° - 130° = 50°."
  },
  c5_geom_3d_nets_polyhedrons: {
    title: "Euler's Polyhedral Formula & Surface Nets",
    formula: "Faces (F) + Vertices (V) - Edges (E) = 2",
    variables: [
      { symbol: "F (Faces)", meaning: "Flat 2D polygon boundaries (Cube = 6)" },
      { symbol: "V (Vertices)", meaning: "Corner points where edges meet (Cube = 8)" },
      { symbol: "E (Edges)", meaning: "Line segments where faces intersect (Cube = 12)" }
    ],
    ruleDescription: "For every convex polyhedron, the number of faces plus vertices minus edges always equals exactly 2.",
    example: "For a Cube: F = 6, V = 8, E = 12 ⟶ 6 + 8 - 12 = 14 - 12 = 2."
  },
  c5_data_mean_bar_charts: {
    title: "Arithmetic Mean (Average) Formula",
    formula: "Mean (Average) = (Sum of all observations) / (Number of observations)",
    variables: [
      { symbol: "Σx", meaning: "Total sum of all individual data values" },
      { symbol: "N", meaning: "Total count of observations or items" }
    ],
    ruleDescription: "The arithmetic mean represents the fair-share water-level value if all quantities were redistributed equally.",
    example: "Values: 10, 20, 30, 40, 50. Sum = 150, Count N = 5 ⟶ Mean = 150 / 5 = 30."
  },

  // =========================================================================
  // CLASS 6
  // =========================================================================
  c6_num_integers_ratio: {
    title: "Ratio Comparison & Unitary Method",
    formula: "Ratio a:b = a/b | Unit Value = Total Cost / Total Units",
    variables: [
      { symbol: "a : b", meaning: "Comparison of two quantities of the same unit in lowest terms" },
      { symbol: "Unitary Method", meaning: "Find the value of 1 unit first, then multiply for required units" }
    ],
    ruleDescription: "Ratios express proportional relationships. Dividing both terms by their Highest Common Factor (HCF) gives the ratio in simplest form.",
    example: "18 : 24 simplifies by HCF(6) to (18÷6) : (24÷6) = 3 : 4."
  },
  c6_alg_expressions_balance: {
    title: "Linear Equation Balance Principle",
    formula: "ax + b = c ⟹ ax = c - b ⟹ x = (c - b) / a",
    variables: [
      { symbol: "x", meaning: "Unknown variable" },
      { symbol: "a", meaning: "Coefficient of variable" },
      { symbol: "b, c", meaning: "Constant numerical terms" }
    ],
    ruleDescription: "An equation is a balanced scale. Any mathematical operation performed on the left side must be applied identically to the right side.",
    example: "2x + 4 = 14 ⟶ Subtract 4: 2x = 10 ⟶ Divide by 2: x = 5."
  },
  c6_geom_circles_angles: {
    title: "Parallel Lines & Transversal Angle Theorems",
    formula: "Alternate Angles: ∠3 = ∠5 | Corresponding Angles: ∠1 = ∠5",
    variables: [
      { symbol: "Transversal", meaning: "A straight line that intersects two parallel lines" },
      { symbol: "Supplementary Pair", meaning: "Consecutive interior angles sum to 180° (∠4 + ∠5 = 180°)" }
    ],
    ruleDescription: "When two parallel lines are cut by a transversal, alternate interior angles form a Z-shape and are equal; corresponding angles form an F-shape and are equal.",
    example: "If transversal angle is 65°, its alternate interior angle is exactly 65°, and its interior consecutive angle is 180° - 65° = 115°."
  },

  // =========================================================================
  // CLASS 7
  // =========================================================================
  c7_num_rational_exponents: {
    title: "Laws of Indices & Exponents",
    formula: "aᵐ × aⁿ = aᵐ⁺ⁿ | (aᵐ)ⁿ = aᵐⁿ | aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
    variables: [
      { symbol: "a (Base)", meaning: "Non-zero rational number being multiplied" },
      { symbol: "m, n (Powers)", meaning: "Integral exponents indicating repeated factors" }
    ],
    ruleDescription: "When multiplying terms with the same base, add their powers. When raising a power to a power, multiply the exponents.",
    example: "2³ × 2⁴ = 2^(3+4) = 2⁷ = 128 | (3²)³ = 3^(2×3) = 3⁶ = 729."
  },
  c7_geom_triangle_congruence: {
    title: "Triangle Congruence Criteria (SSS, SAS, ASA, RHS)",
    formula: "△ABC ≅ △PQR ⟹ Corresponding sides and angles are equal",
    variables: [
      { symbol: "SSS", meaning: "Three pairs of corresponding sides are equal" },
      { symbol: "SAS", meaning: "Two pairs of sides and the included angle are equal" },
      { symbol: "ASA", meaning: "Two pairs of angles and the included side are equal" },
      { symbol: "RHS", meaning: "Right angle, Hypotenuse, and one Side are equal" }
    ],
    ruleDescription: "Two triangles are congruent if they have the exact same shape and size. SAS requires the angle to be strictly trapped between the two known sides.",
    example: "△ABC with sides 5, 7, 9 is congruent to △DEF with sides 5, 7, 9 by SSS Criteria."
  },
  c7_prob_chance_sim: {
    title: "Classical Theoretical Probability Formula",
    formula: "P(E) = (Number of Favorable Outcomes) / (Total Number of Possible Outcomes)",
    variables: [
      { symbol: "P(E)", meaning: "Probability of event E (0 ≤ P(E) ≤ 1)" },
      { symbol: "Favorable (n)", meaning: "Outcomes that satisfy the target condition" },
      { symbol: "Total (S)", meaning: "Size of sample space of all equally likely outcomes" }
    ],
    ruleDescription: "The theoretical probability measures the likelihood of an event. Over many repeated trials (Law of Large Numbers), empirical frequency converges to theoretical probability.",
    example: "Rolling an odd number {1, 3, 5} on a 6-sided die: P(Odd) = 3 / 6 = 1/2 = 50%."
  },

  // =========================================================================
  // CLASS 8
  // =========================================================================
  c8_mens_cylinder_volume: {
    title: "3D Cylinder Volume & Surface Area Formulas",
    formula: "Volume V = πr²h | CSA = 2πrh | TSA = 2πr(r + h)",
    variables: [
      { symbol: "r", meaning: "Base circular radius (cm)" },
      { symbol: "h", meaning: "Vertical cylinder height (cm)" },
      { symbol: "π (pi)", meaning: "Mathematical constant ≈ 3.14159 or 22/7" }
    ],
    ruleDescription: "The volume of a cylinder is base area (πr²) multiplied by height (h). Because radius is squared, doubling radius quadruples the volume (2² = 4×).",
    example: "For r = 5 cm, h = 10 cm: V = π × 5² × 10 = 250π ≈ 785.4 cm³."
  },
  c8_alg_identities_tiles: {
    title: "Standard Algebraic Identities (Area Expansion Proofs)",
    formula: "(a + b)² = a² + 2ab + b² | a² - b² = (a - b)(a + b)",
    variables: [
      { symbol: "a²", meaning: "Area of square with side a" },
      { symbol: "b²", meaning: "Area of square with side b" },
      { symbol: "2ab", meaning: "Combined area of two identical rectangular strips a × b" }
    ],
    ruleDescription: "Geometrically, a square of side (a+b) decomposes into 4 distinct regions: one a² square, two ab rectangles, and one b² square.",
    example: "For a = 6, b = 3: (6 + 3)² = 9² = 81 | 6² + 2(6)(3) + 3² = 36 + 36 + 9 = 81."
  },
  c8_geom_euler_polyhedron: {
    title: "Euler's Formula for Convex Polyhedra",
    formula: "F + V = E + 2  ⟺  F + V - E = 2",
    variables: [
      { symbol: "F", meaning: "Number of polygonal faces" },
      { symbol: "V", meaning: "Number of corner vertices" },
      { symbol: "E", meaning: "Number of boundary edges" }
    ],
    ruleDescription: "Leonhard Euler proved that in any simply connected 3D convex polyhedron, the sum of faces and vertices always exceeds edges by exactly 2.",
    example: "Octahedron: F = 8, V = 6. Edges E = (F + V) - 2 = (8 + 6) - 2 = 14 - 2 = 12."
  },
  c8_num_rational_line: {
    title: "Rational Number Density & Midpoint Formula",
    formula: "Midpoint Rational = (a + b) / 2",
    variables: [
      { symbol: "a, b", meaning: "Two distinct rational numbers on the number line (a < b)" }
    ],
    ruleDescription: "Between any two rational numbers, there exists an infinite density of other rational numbers. The arithmetic mean always yields a rational strictly between them.",
    example: "Midpoint between 1/4 and 3/4 = (1/4 + 3/4) / 2 = (4/4) / 2 = 1 / 2."
  },

  // =========================================================================
  // CLASS 9
  // =========================================================================
  c9_geom_pythagoras_theorem: {
    title: "Pythagorean Theorem & Distance Relationship",
    formula: "a² + b² = c²  ⟹  Hypotenuse c = √(a² + b²)",
    variables: [
      { symbol: "a, b (Legs)", meaning: "Lengths of the two perpendicular sides" },
      { symbol: "c (Hypotenuse)", meaning: "Length of the side opposite the 90° right angle" }
    ],
    ruleDescription: "In any right-angled triangle, the area of the square built on the hypotenuse is equal to the sum of the areas of the squares built on the other two legs.",
    example: "For a = 6 cm, b = 8 cm: c² = 6² + 8² = 36 + 64 = 100 ⟹ c = √100 = 10 cm."
  },
  c9_trig_ratios_right_triangle: {
    title: "Trigonometric Ratios (SOH-CAH-TOA)",
    formula: "sin θ = Opp / Hyp | cos θ = Adj / Hyp | tan θ = Opp / Adj",
    variables: [
      { symbol: "Opposite (Opp)", meaning: "Side across from reference angle θ" },
      { symbol: "Adjacent (Adj)", meaning: "Side adjacent to reference angle θ (not hypotenuse)" },
      { symbol: "Hypotenuse (Hyp)", meaning: "Longest side opposite the 90° right angle" }
    ],
    ruleDescription: "Trigonometric ratios relate angle measures to side length ratios in right triangles. For standard 30°: sin(30°) = 1/2, cos(30°) = √3/2, tan(30°) = 1/√3.",
    example: "If θ = 30° and Hyp = 10 cm: Opposite = Hyp × sin(30°) = 10 × 0.5 = 5 cm."
  },
  c9_comm_compound_interest: {
    title: "Compound Interest Growth Formula",
    formula: "Amount A = P(1 + r/100)ⁿ | CI = Amount - Principal",
    variables: [
      { symbol: "P", meaning: "Initial Principal invested / borrowed" },
      { symbol: "r", meaning: "Annual interest rate percentage" },
      { symbol: "n", meaning: "Number of compounding conversion periods (years)" }
    ],
    ruleDescription: "Compound interest calculates interest on the initial principal AND accumulated interest from previous periods, producing exponential rather than linear growth.",
    example: "P = Rs 10,000, r = 10%, n = 2 yrs ⟶ A = 10000(1 + 0.1)² = 10000(1.21) = Rs 12,100 | CI = Rs 2,100."
  },
  c9_coord_cartesian_distance: {
    title: "Cartesian Distance Formula (Derived from Pythagoras)",
    formula: "Distance d = √((x₂ - x₁)² + (y₂ - y₁)²)",
    variables: [
      { symbol: "(x₁, y₁)", meaning: "Coordinates of starting Point A" },
      { symbol: "(x₂, y₂)", meaning: "Coordinates of destination Point B" },
      { symbol: "Δx = x₂ - x₁", meaning: "Horizontal leg length" },
      { symbol: "Δy = y₂ - y₁", meaning: "Vertical leg length" }
    ],
    ruleDescription: "The Euclidean distance between two points in a Cartesian plane is the length of the hypotenuse formed by horizontal (Δx) and vertical (Δy) differences.",
    example: "Between (1, 2) and (5, 5): Δx = 4, Δy = 3 ⟹ d = √(4² + 3²) = √(16 + 9) = √25 = 5 units."
  },

  // =========================================================================
  // CLASS 10
  // =========================================================================
  c10_coord_distance_slope_sim: {
    title: "Coordinate Geometry: Slope & Equation of a Line",
    formula: "Slope m = (y₂ - y₁)/(x₂ - x₁) = tan θ | Line: y = mx + c",
    variables: [
      { symbol: "m (Slope)", meaning: "Gradient / rate of steepness of the line" },
      { symbol: "c", meaning: "y-intercept where the line crosses the y-axis" },
      { symbol: "Midpoint M", meaning: "M = ((x₁ + x₂)/2, (y₁ + y₂)/2)" }
    ],
    ruleDescription: "The slope m measures rise over run. Parallel lines share equal slopes (m₁ = m₂); perpendicular lines have negative reciprocal slopes (m₁ × m₂ = -1).",
    example: "Points (-2, 1) and (4, 4): m = (4 - 1)/(4 - (-2)) = 3/6 = 0.5. Line: y = 0.5x + 2."
  },
  c10_comm_gst_shares_banking: {
    title: "Commercial Mathematics: GST Tax Breakdown",
    formula: "Total GST = Price × (Rate/100) | Intra-State: CGST = GST/2, SGST = GST/2",
    variables: [
      { symbol: "Taxable Value", meaning: "Base selling price before tax" },
      { symbol: "CGST", meaning: "Central Goods & Services Tax (Half of GST slab)" },
      { symbol: "SGST", meaning: "State Goods & Services Tax (Half of GST slab)" },
      { symbol: "Total Invoice", meaning: "Taxable Value + CGST + SGST" }
    ],
    ruleDescription: "In intra-state sales within the same state, GST is divided equally between Central and State governments. Inter-state sales charge full IGST to the Centre.",
    example: "Base Price Rs 5,000 with 18% GST: Total GST = Rs 900 ⟶ CGST = Rs 450, SGST = Rs 450, Total Bill = Rs 5,900."
  },
  c10_alg_matrix_operations: {
    title: "2x2 Matrix Multiplication & Determinant Formula",
    formula: "For A = [[a, b], [c, d]]: Determinant |A| = ad - bc",
    variables: [
      { symbol: "Matrix Product", meaning: "Row-by-column dot product: [a₁ b₁] · [x₁ y₁]ᵀ" },
      { symbol: "Determinant |A|", meaning: "Scalar scaling factor of the linear transformation" },
      { symbol: "Non-Commutative", meaning: "In general, Matrix A × B ≠ B × A" }
    ],
    ruleDescription: "Matrix multiplication is computed by taking the dot product of rows from the first matrix with columns of the second matrix. It is non-commutative.",
    example: "For A = [[2, 3], [1, 4]]: |A| = (2 × 4) - (3 × 1) = 8 - 3 = 5."
  },
  c10_geom_loci_explorer: {
    title: "Loci Theorems & Geometric Constraints",
    formula: "Locus(PA = PB) = Perpendicular Bisector of Segment AB",
    variables: [
      { symbol: "Point P(x, y)", meaning: "Moving point satisfying a strict geometric rule" },
      { symbol: "PA = PB", meaning: "Distance from P to point A equals distance from P to point B" }
    ],
    ruleDescription: "A locus is the set of all points whose coordinates satisfy given geometric conditions. The locus of points equidistant from two fixed points is their perpendicular bisector.",
    example: "As P moves maintaining PA = PB, it traces out a straight line perpendicular to AB passing through its midpoint."
  },
  c10_alg_ap_gp_progressions: {
    title: "Arithmetic & Geometric Progressions (AP & GP)",
    formula: "AP: Tₙ = a + (n - 1)d, Sₙ = (n/2)[2a + (n-1)d] | GP: Tₙ = a × rⁿ⁻¹",
    variables: [
      { symbol: "a", meaning: "First term of sequence" },
      { symbol: "d", meaning: "Common difference in AP (Tₙ - Tₙ₋₁)" },
      { symbol: "r", meaning: "Common ratio in GP (Tₙ / Tₙ₋₁)" },
      { symbol: "Tₙ", meaning: "Value of the n-th term" },
      { symbol: "Sₙ", meaning: "Sum of the first n terms" }
    ],
    ruleDescription: "An Arithmetic Progression adds a constant difference d each step (linear growth); a Geometric Progression multiplies by a constant ratio r each step (exponential growth).",
    example: "AP with a = 2, d = 3: T₆ = 2 + (6 - 1) × 3 = 2 + 15 = 17 | S₆ = (6/2)[2(2) + 5(3)] = 3[4 + 15] = 57."
  }
};

/**
 * Helper to retrieve formula/rule card data for a given lab activity ID
 * @param {string} activityId
 * @returns {Object|null}
 */
export function getFormulaForActivity(activityId) {
  return labFormulaBank[activityId] || null;
}

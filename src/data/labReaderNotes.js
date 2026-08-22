/**
 * Master Reader Notes Bank for ICSE Math Lab (Classes 1 to 10)
 * Age-appropriate explanations, real-life examples, and discovery observations.
 */

export const labReaderNotes = {
  // 3D Solids
  cube: {
    whatIsIt: "A Cube is a regular 3D polyhedron bounded by 6 congruent square faces.",
    keyProperties: ["6 equal square faces", "12 equal edges", "8 corner vertices", "Euler: F + V - E = 6 + 8 - 12 = 2"],
    realLifeExamples: ["Rubik's cube", "Playing dice", "Ice cube", "Sugar cube", "Gift box"],
    whatToObserve: "Notice that every face is an identical square. Dragging the size expands the volume by a³."
  },
  cuboid: {
    whatIsIt: "A Cuboid is a 3D solid rectangular prism bounded by 6 rectangular faces.",
    keyProperties: ["6 rectangular faces (3 opposite congruent pairs)", "12 edges", "8 vertices", "Euler: F + V - E = 2"],
    realLifeExamples: ["Matchbox", "Textbook", "Shoebox", "Brick", "Room/Classroom"],
    whatToObserve: "Adjusting height or breadth changes the lateral and total surface area proportionally."
  },
  cylinder: {
    whatIsIt: "A Cylinder is a 3D round solid with two parallel circular bases and one rolling curved surface.",
    keyProperties: ["2 flat circular faces", "1 curved surface", "2 circular edges", "0 vertices", "Euler formula does NOT apply (curved surface)"],
    realLifeExamples: ["Soda can", "Water pipe", "Battery cell", "Cooking gas cylinder", "Candle"],
    whatToObserve: "When unfolded into a 2D net, the curved surface opens into a rectangle of length 2πr and width h."
  },
  cone: {
    whatIsIt: "A Cone is a 3D solid with a circular flat base and a curved surface tapering smoothly to a sharp point (apex).",
    keyProperties: ["1 flat circular base", "1 curved surface", "1 circular edge", "1 apex vertex", "Slant height l = √(r² + h²)"],
    realLifeExamples: ["Ice cream cone", "Traffic safety cone", "Birthday party hat", "Funnel"],
    whatToObserve: "The unfolded 2D net of the curved surface is a circle sector whose arc length equals the base circumference 2πr."
  },
  sphere: {
    whatIsIt: "A Sphere is a completely symmetrical 3D round solid where every surface point is equidistant from the center.",
    keyProperties: ["1 continuous curved surface", "0 flat faces", "0 edges", "0 vertices", "Surface Area = 4πr²", "Volume = ⁴⁄₃πr³"],
    realLifeExamples: ["Cricket/Football", "Earth/Globe", "Marbles", "Soap bubbles", "Oranges"],
    whatToObserve: "A sphere has the smallest surface area among all 3D shapes enclosing a given volume."
  },
  prism: {
    whatIsIt: "A Triangular Prism is a polyhedron with two parallel congruent triangular bases and three rectangular sides.",
    keyProperties: ["5 faces (2 triangles + 3 rectangles)", "9 edges", "6 vertices", "Euler: 5 + 6 - 9 = 2"],
    realLifeExamples: ["Optical glass prism", "Tent", "Chocolate bar box", "Roof wedge"],
    whatToObserve: "Its volume is base triangle area multiplied by length."
  },
  pyramid: {
    whatIsIt: "A Square Pyramid is a polyhedron with a square base and four triangular faces meeting at a top apex.",
    keyProperties: ["5 faces (1 square + 4 triangles)", "8 edges", "5 vertices", "Euler: 5 + 5 - 8 = 2"],
    realLifeExamples: ["Great Pyramids of Giza", "Roof spire", "Camping pyramid tent"],
    whatToObserve: "Its volume is exactly one-third the volume of a prism with the same base and height (V = ⅓a²h)."
  },

  // 2D Shapes
  triangle: {
    whatIsIt: "A Triangle is a 3-sided 2D polygon whose interior angles always sum to 180°.",
    keyProperties: ["3 sides, 3 vertices, 3 interior angles", "Sum of angles = 180°", "Area = ½ × base × height"],
    realLifeExamples: ["Traffic warning sign", "Slice of pizza", "Billiard ball rack", "Roof truss"],
    whatToObserve: "Drag any vertex and observe that the sum ∠A + ∠B + ∠C remains locked at 180°."
  },
  square: {
    whatIsIt: "A Square is a regular 4-sided polygon with all sides equal and four 90° right angles.",
    keyProperties: ["4 equal sides", "4 right angles (90°)", "4 lines of symmetry", "Diagonals bisect at 90°", "Area = a²"],
    realLifeExamples: ["Chessboard square", "Floor tile", "Origami paper", "Square napkin"],
    whatToObserve: "Each diagonal equals a√2 and divides the square into two congruent right triangles."
  },
  rectangle: {
    whatIsIt: "A Rectangle is a 4-sided polygon with opposite sides equal and parallel, and four 90° angles.",
    keyProperties: ["Opposite sides equal and parallel", "4 right angles", "2 lines of symmetry", "Area = l × b", "Perimeter = 2(l + b)"],
    realLifeExamples: ["Door", "Mobile phone screen", "Blackboard", "Notebook page"],
    whatToObserve: "Dragging length or breadth shows that area is the count of 1cm × 1cm unit squares tiled inside."
  },
  parallelogram: {
    whatIsIt: "A Parallelogram is a quadrilateral with two pairs of parallel opposite sides.",
    keyProperties: ["Opposite sides equal and parallel", "Opposite angles equal", "Adjacent angles sum to 180°", "Area = base × height"],
    realLifeExamples: ["Solar panel array", "Architectural building panels", "Slanted book stack"],
    whatToObserve: "Cutting off a triangle from one side and sliding it to the other proves Area = base × height (same as a rectangle)."
  },
  trapezium: {
    whatIsIt: "A Trapezium is a quadrilateral with one pair of parallel sides and one pair of non-parallel sides.",
    keyProperties: ["One pair of parallel sides (a and b)", "Distance between parallel lines is height (h)", "Area = ½(a + b) × h"],
    realLifeExamples: ["Bridge girder", "Popcorn tub side", "Roof gable", "Handbag profile"],
    whatToObserve: "The area is equal to the average of the two parallel sides multiplied by the perpendicular height."
  },
  circle: {
    whatIsIt: "A Circle is a 2D curve where every point is equidistant from the center.",
    keyProperties: ["Center, radius (r), diameter (d = 2r)", "Circumference C = 2πr", "Area A = πr²", "Infinite lines of symmetry"],
    realLifeExamples: ["Wall clock", "Wheel / Bicycle tyre", "Coin", "Dinner plate", "CD/DVD"],
    whatToObserve: "Dividing the circumference by the diameter always yields the universal constant π ≈ 3.14159."
  },
  semicircle: {
    whatIsIt: "A Semi-Circle is a half-circle formed by bisecting a circle along its diameter.",
    keyProperties: ["1 curved boundary (arc length = πr)", "1 flat diameter base (2r)", "Perimeter = πr + 2r", "Area = ½πr²"],
    realLifeExamples: ["Protractor", "Speedometer arc", "Rainbow profile", "Arched window"],
    whatToObserve: "Its perimeter includes the straight diameter edge (πr + 2r), not just the curved arc."
  },
  polygons: {
    whatIsIt: "A Polygon is a closed 2D plane figure bounded by 3 or more straight line segments.",
    keyProperties: ["n sides and n vertices", "Interior Angle Sum = (n - 2) × 180°", "Each interior angle of regular polygon = [(n - 2) × 180°] / n"],
    realLifeExamples: ["Honeycomb (Hexagon)", "Stop Sign (Octagon)", "Pentagon Building", "Geometric floor tiling"],
    whatToObserve: "Adding one more side to any polygon increases its interior angle sum by exactly 180°."
  },

  // Trigonometry
  trigonometry_ratios: {
    whatIsIt: "Trigonometric ratios relate the acute angle of a right-angled triangle to the ratios of its side lengths.",
    keyProperties: [
      "sin θ = Opposite / Hypotenuse (SOH)",
      "cos θ = Adjacent / Hypotenuse (CAH)",
      "tan θ = Opposite / Adjacent (TOA)",
      "cosec θ = 1 / sin θ",
      "sec θ = 1 / cos θ",
      "cot θ = 1 / tan θ"
    ],
    realLifeExamples: ["Measuring heights of tall towers and mountains without climbing", "Satellite navigation and GPS", "Video game graphics", "Astronomy and celestial navigation"],
    whatToObserve: "For a fixed angle θ, the ratio of sides is strictly constant regardless of how large or small the triangle is resized."
  }
};

/**
 * Helper to fetch reader notes
 * @param {string} topicKey
 * @returns {Object}
 */
export function getReaderNotes(topicKey) {
  return labReaderNotes[topicKey] || labReaderNotes.cube;
}

/**
 * Master Shape & Geometry Properties Registry for ICSE Classes 1 to 10
 * Complete mathematical formulas, properties, symbol definitions, and dimension rules.
 * Every formula includes strict minClass / applicableClasses mapping based on the ICSE syllabus.
 */

export const shapeProperties = {
  // =========================================================================
  // 3D SOLIDS & POLYHEDRA
  // =========================================================================
  cube: {
    id: 'cube',
    name: 'Cube',
    type: '3d',
    isPolyhedron: true,
    hasEulerFormula: true,
    faces: 6,
    faceShape: 'Square (all 6 faces congruent)',
    edges: 12,
    vertices: 8,
    eulerFormula: 'F + V - E = 6 + 8 - 12 = 2',
    defaultDimensions: { a: 5 },
    dimensionLabels: { a: 'Side Length (a)' },
    units: { length: 'cm', area: 'cm²', volume: 'cm³' },
    formulaList: [
      { id: 'face_props', minClass: 1, applicableClasses: [1,2,3,4,5,6,7,8,9,10], category: 'Properties', label: 'Faces, Edges & Vertices', formula: '6 Faces, 12 Edges, 8 Vertices', calc: () => '6F, 12E, 8V', unit: '', desc: 'All 6 faces are congruent squares with equal edge length a' },
      { id: 'face_perimeter', minClass: 3, applicableClasses: [3,4,5,6,7,8,9,10], category: 'Properties', label: 'Perimeter of One Face', formula: 'P = 4a', calc: (d) => 4 * d.a, unit: 'cm', desc: 'Perimeter of one square face' },
      { id: 'face_area', minClass: 4, applicableClasses: [4,5,6,7,8,9,10], category: 'Area', label: 'Area of One Face', formula: 'A = a²', calc: (d) => d.a ** 2, unit: 'cm²', desc: 'Area of one of the six square faces' },
      { id: 'volume', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Volume', label: 'Volume', formula: 'V = a³', calc: (d) => d.a ** 3, unit: 'cm³', desc: 'Total space enclosed by the cube' },
      { id: 'lsa', minClass: 8, applicableClasses: [8,9,10], category: 'Surface Area', label: 'Lateral Surface Area (LSA)', formula: 'LSA = 4a²', calc: (d) => 4 * (d.a ** 2), unit: 'cm²', desc: 'Combined area of the 4 vertical side faces' },
      { id: 'tsa', minClass: 8, applicableClasses: [8,9,10], category: 'Surface Area', label: 'Total Surface Area (TSA)', formula: 'TSA = 6a²', calc: (d) => 6 * (d.a ** 2), unit: 'cm²', desc: 'Combined area of all 6 congruent square faces' },
      { id: 'face_diagonal', minClass: 8, applicableClasses: [8,9,10], category: 'Diagonals & Edges', label: 'Face Diagonal', formula: 'd = a√2', calc: (d) => d.a * Math.SQRT2, unit: 'cm', desc: 'Diagonal line across any single square face' },
      { id: 'space_diagonal', minClass: 9, applicableClasses: [9,10], category: 'Diagonals & Edges', label: 'Space Diagonal', formula: 'D = a√3', calc: (d) => d.a * Math.sqrt(3), unit: 'cm', desc: 'Longest internal diagonal connecting opposite vertices' },
      { id: 'edge_length', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Diagonals & Edges', label: 'Total Edge Length', formula: 'L = 12a', calc: (d) => 12 * d.a, unit: 'cm', desc: 'Sum of all 12 equal edge lengths' },
      { id: 'euler', minClass: 8, applicableClasses: [8,9,10], category: 'Euler Relation', label: 'Euler Polyhedral Relation', formula: 'F + V - E = 2 (6 + 8 - 12 = 2)', calc: () => 2, unit: '', desc: 'Universal relationship for convex polyhedra' }
    ],
    views: ['3D', '2D', 'Net'],
    applicableClasses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    description: 'A 3D regular polyhedron bounded by 6 congruent square faces, 12 equal edges, and 8 vertices.'
  },

  cuboid: {
    id: 'cuboid',
    name: 'Cuboid (Rectangular Prism)',
    type: '3d',
    isPolyhedron: true,
    hasEulerFormula: true,
    faces: 6,
    faceShape: 'Rectangle (3 pairs of parallel faces)',
    edges: 12,
    vertices: 8,
    eulerFormula: 'F + V - E = 6 + 8 - 12 = 2',
    defaultDimensions: { l: 8, b: 5, h: 4 },
    dimensionLabels: { l: 'Length (l)', b: 'Breadth (b)', h: 'Height (h)' },
    units: { length: 'cm', area: 'cm²', volume: 'cm³' },
    formulaList: [
      { id: 'cuboid_props', minClass: 1, applicableClasses: [1,2,3,4,5,6,7,8,9,10], category: 'Properties', label: 'Faces, Edges & Vertices', formula: '6 Faces, 12 Edges, 8 Vertices', calc: () => '6F, 12E, 8V', unit: '', desc: 'Opposite rectangular faces are congruent and parallel' },
      { id: 'base_area', minClass: 4, applicableClasses: [4,5,6,7,8,9,10], category: 'Area', label: 'Base Area', formula: 'A = l × b', calc: (d) => d.l * d.b, unit: 'cm²', desc: 'Area of the bottom/top rectangular face' },
      { id: 'volume', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Volume', label: 'Volume', formula: 'V = l × b × h', calc: (d) => d.l * d.b * d.h, unit: 'cm³', desc: 'Total space enclosed inside the cuboid' },
      { id: 'lsa', minClass: 8, applicableClasses: [8,9,10], category: 'Surface Area', label: 'Lateral Surface Area (Area of 4 Walls)', formula: 'LSA = 2h(l + b)', calc: (d) => 2 * d.h * (d.l + d.b), unit: 'cm²', desc: 'Area of the four vertical rectangular side faces' },
      { id: 'tsa', minClass: 8, applicableClasses: [8,9,10], category: 'Surface Area', label: 'Total Surface Area (TSA)', formula: 'TSA = 2(lb + bh + lh)', calc: (d) => 2 * (d.l * d.b + d.b * d.h + d.l * d.h), unit: 'cm²', desc: 'Combined area of all 6 rectangular faces' },
      { id: 'space_diagonal', minClass: 9, applicableClasses: [9,10], category: 'Diagonals & Edges', label: 'Space Diagonal', formula: 'D = √(l² + b² + h²)', calc: (d) => Math.sqrt(d.l ** 2 + d.b ** 2 + d.h ** 2), unit: 'cm', desc: 'Longest internal line connecting opposite corner vertices' },
      { id: 'edge_length', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Diagonals & Edges', label: 'Total Edge Length', formula: 'L = 4(l + b + h)', calc: (d) => 4 * (d.l + d.b + d.h), unit: 'cm', desc: 'Sum of all 12 edge lengths (4 lengths, 4 breadths, 4 heights)' },
      { id: 'euler', minClass: 8, applicableClasses: [8,9,10], category: 'Euler Relation', label: 'Euler Polyhedral Relation', formula: 'F + V - E = 2 (6 + 8 - 12 = 2)', calc: () => 2, unit: '', desc: 'Universal relationship for convex polyhedra' }
    ],
    views: ['3D', '2D', 'Net'],
    applicableClasses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    description: 'A 3D solid bounded by 6 rectangular faces with opposite faces equal and parallel.'
  },

  cylinder: {
    id: 'cylinder',
    name: 'Right Circular Cylinder',
    type: '3d',
    isPolyhedron: false,
    hasEulerFormula: false,
    faces: 3,
    flatFaces: 2,
    curvedSurfaces: 1,
    edges: 2,
    vertices: 0,
    eulerFormula: 'N/A (Curved surface - Euler formula applies only to flat-faced polyhedra)',
    defaultDimensions: { r: 5, h: 10 },
    dimensionLabels: { r: 'Radius (r)', h: 'Height (h)' },
    units: { length: 'cm', area: 'cm²', volume: 'cm³' },
    formulaList: [
      { id: 'cyl_props', minClass: 1, applicableClasses: [1,2,3,4,5,6,7,8,9,10], category: 'Properties', label: 'Faces & Surfaces', formula: '2 Flat Circular Faces + 1 Curved Surface', calc: () => '2 Flat, 1 Curved', unit: '', desc: 'Can roll on curved surface and slide on flat circular bases' },
      { id: 'circumference', minClass: 6, applicableClasses: [6,7,8,9,10], category: 'Properties', label: 'Circumference of Base', formula: 'C = 2πr', calc: (d, pi) => 2 * pi * d.r, unit: 'cm', desc: 'Perimeter of circular boundary' },
      { id: 'base_area', minClass: 7, applicableClasses: [7,8,9,10], category: 'Area', label: 'Base Area', formula: 'A = πr²', calc: (d, pi) => pi * (d.r ** 2), unit: 'cm²', desc: 'Area of each circular flat base' },
      { id: 'volume', minClass: 8, applicableClasses: [8,9,10], category: 'Volume', label: 'Volume', formula: 'V = πr²h', calc: (d, pi) => pi * (d.r ** 2) * d.h, unit: 'cm³', desc: 'Base Area × Height' },
      { id: 'csa', minClass: 8, applicableClasses: [8,9,10], category: 'Surface Area', label: 'Curved Surface Area (CSA)', formula: 'CSA = 2πrh', calc: (d, pi) => 2 * pi * d.r * d.h, unit: 'cm²', desc: 'Area of the unrolled cylindrical side wall' },
      { id: 'tsa', minClass: 8, applicableClasses: [8,9,10], category: 'Surface Area', label: 'Total Surface Area (TSA)', formula: 'TSA = 2πr(h + r)', calc: (d, pi) => 2 * pi * d.r * (d.h + d.r), unit: 'cm²', desc: 'CSA + 2 × Base Area' }
    ],
    views: ['3D', '2D', 'Net'],
    applicableClasses: [1, 4, 5, 6, 8, 9, 10],
    description: 'A 3D solid generated by rotating a rectangle, bounded by two parallel circular bases and one curved surface.'
  },

  cone: {
    id: 'cone',
    name: 'Right Circular Cone',
    type: '3d',
    isPolyhedron: false,
    hasEulerFormula: false,
    faces: 2,
    flatFaces: 1,
    curvedSurfaces: 1,
    edges: 1,
    vertices: 1,
    eulerFormula: 'N/A (Curved surface - Euler formula applies only to flat-faced polyhedra)',
    defaultDimensions: { r: 4, h: 8 },
    dimensionLabels: { r: 'Radius (r)', h: 'Height (h)' },
    units: { length: 'cm', area: 'cm²', volume: 'cm³' },
    formulaList: [
      { id: 'cone_props', minClass: 1, applicableClasses: [1,2,3,4,5,6,7,8,9,10], category: 'Properties', label: 'Faces & Vertices', formula: '1 Circular Base, 1 Curved Surface, 1 Apex', calc: () => '1 Base, 1 Apex', unit: '', desc: 'Pointed 3D solid tapering to an apex' },
      { id: 'circumference', minClass: 6, applicableClasses: [6,7,8,9,10], category: 'Properties', label: 'Circumference of Base', formula: 'C = 2πr', calc: (d, pi) => 2 * pi * d.r, unit: 'cm', desc: 'Perimeter of circular base' },
      { id: 'base_area', minClass: 7, applicableClasses: [7,8,9,10], category: 'Area', label: 'Base Area', formula: 'A = πr²', calc: (d, pi) => pi * (d.r ** 2), unit: 'cm²', desc: 'Area of circular flat base' },
      { id: 'slant_height', minClass: 9, applicableClasses: [9,10], category: 'Properties', label: 'Slant Height (l)', formula: 'l = √(r² + h²)', calc: (d) => Math.sqrt(d.r ** 2 + d.h ** 2), unit: 'cm', desc: 'Distance from base rim to apex vertex' },
      { id: 'csa', minClass: 9, applicableClasses: [9,10], category: 'Surface Area', label: 'Curved Surface Area (CSA)', formula: 'CSA = πrl', calc: (d, pi) => pi * d.r * Math.sqrt(d.r ** 2 + d.h ** 2), unit: 'cm²', desc: 'Area of the tapered conical surface' },
      { id: 'tsa', minClass: 9, applicableClasses: [9,10], category: 'Surface Area', label: 'Total Surface Area (TSA)', formula: 'TSA = πr(l + r)', calc: (d, pi) => { const l = Math.sqrt(d.r ** 2 + d.h ** 2); return pi * d.r * (l + d.r); }, unit: 'cm²', desc: 'CSA + Base Area' },
      { id: 'volume', minClass: 9, applicableClasses: [9,10], category: 'Volume', label: 'Volume', formula: 'V = ⅓πr²h', calc: (d, pi) => (1 / 3) * pi * (d.r ** 2) * d.h, unit: 'cm³', desc: 'Exactly 1/3 the volume of a cylinder with identical r and h' }
    ],
    views: ['3D', '2D', 'Net'],
    applicableClasses: [1, 4, 5, 8, 9, 10],
    description: 'A 3D solid with a flat circular base tapering smoothly to a single apex vertex.'
  },

  sphere: {
    id: 'sphere',
    name: 'Sphere',
    type: '3d',
    isPolyhedron: false,
    hasEulerFormula: false,
    faces: 1,
    flatFaces: 0,
    curvedSurfaces: 1,
    edges: 0,
    vertices: 0,
    eulerFormula: 'N/A (Curved surface)',
    defaultDimensions: { r: 5 },
    dimensionLabels: { r: 'Radius (r)' },
    units: { length: 'cm', area: 'cm²', volume: 'cm³' },
    formulaList: [
      { id: 'sphere_props', minClass: 1, applicableClasses: [1,2,3,4,5,6,7,8,9,10], category: 'Properties', label: 'Surfaces', formula: '1 Completely Curved Surface, 0 Edges, 0 Vertices', calc: () => '1 Curved Surface', unit: '', desc: 'All surface points are equidistant from the central point' },
      { id: 'diameter', minClass: 4, applicableClasses: [4,5,6,7,8,9,10], category: 'Properties', label: 'Diameter', formula: 'd = 2r', calc: (d) => 2 * d.r, unit: 'cm', desc: 'Straight line passing through center connecting two surface points' },
      { id: 'great_circumference', minClass: 6, applicableClasses: [6,7,8,9,10], category: 'Properties', label: 'Circumference of Great Circle', formula: 'C = 2πr', calc: (d, pi) => 2 * pi * d.r, unit: 'cm', desc: 'Perimeter of the central cross-sectional equator' },
      { id: 'surface_area', minClass: 10, applicableClasses: [10], category: 'Surface Area', label: 'Surface Area', formula: 'SA = 4πr²', calc: (d, pi) => 4 * pi * (d.r ** 2), unit: 'cm²', desc: 'Total outer curved surface area' },
      { id: 'volume', minClass: 10, applicableClasses: [10], category: 'Volume', label: 'Volume', formula: 'V = ⁴⁄₃πr³', calc: (d, pi) => (4 / 3) * pi * (d.r ** 3), unit: 'cm³', desc: 'Total 3D volume enclosed by the spherical shell' }
    ],
    views: ['3D', '2D'],
    applicableClasses: [1, 5, 8, 10],
    description: 'A perfectly symmetrical 3D round solid where every surface point is equidistant from the center.'
  },

  hemisphere: {
    id: 'hemisphere',
    name: 'Hemisphere',
    type: '3d',
    isPolyhedron: false,
    hasEulerFormula: false,
    faces: 2,
    flatFaces: 1,
    curvedSurfaces: 1,
    edges: 1,
    vertices: 0,
    defaultDimensions: { r: 5 },
    dimensionLabels: { r: 'Radius (r)' },
    units: { length: 'cm', area: 'cm²', volume: 'cm³' },
    formulaList: [
      { id: 'base_area', minClass: 7, applicableClasses: [7,8,9,10], category: 'Area', label: 'Base Circular Area', formula: 'A = πr²', calc: (d, pi) => pi * (d.r ** 2), unit: 'cm²', desc: 'Area of the flat circular base' },
      { id: 'csa', minClass: 10, applicableClasses: [10], category: 'Surface Area', label: 'Curved Surface Area (CSA)', formula: 'CSA = 2πr²', calc: (d, pi) => 2 * pi * (d.r ** 2), unit: 'cm²', desc: 'Half the surface area of a full sphere' },
      { id: 'tsa', minClass: 10, applicableClasses: [10], category: 'Surface Area', label: 'Total Surface Area (TSA)', formula: 'TSA = 3πr²', calc: (d, pi) => 3 * pi * (d.r ** 2), unit: 'cm²', desc: 'CSA + Base Area (2πr² + πr²)' },
      { id: 'volume', minClass: 10, applicableClasses: [10], category: 'Volume', label: 'Volume', formula: 'V = ⅔πr³', calc: (d, pi) => (2 / 3) * pi * (d.r ** 3), unit: 'cm³', desc: 'Half the volume of a full sphere' }
    ],
    views: ['3D', '2D'],
    applicableClasses: [8, 9, 10],
    description: 'Half of a sphere cut along its central equatorial plane, with one flat circular face and one hemisphere dome.'
  },

  prism: {
    id: 'prism',
    name: 'Triangular Prism',
    type: '3d',
    isPolyhedron: true,
    hasEulerFormula: true,
    faces: 5,
    faceShape: '2 Triangles + 3 Rectangles',
    edges: 9,
    vertices: 6,
    eulerFormula: 'F + V - E = 5 + 6 - 9 = 2',
    defaultDimensions: { base: 6, height: 5, length: 10 },
    dimensionLabels: { base: 'Base Triangle Side (b)', height: 'Triangle Height (h)', length: 'Prism Length (L)' },
    units: { length: 'cm', area: 'cm²', volume: 'cm³' },
    formulaList: [
      { id: 'prism_props', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Properties', label: 'Faces, Edges & Vertices', formula: '5 Faces (2 Triangles + 3 Rectangles), 9 Edges, 6 Vertices', calc: () => '5F, 9E, 6V', unit: '', desc: '2 parallel congruent triangular bases connected by 3 rectangles' },
      { id: 'base_area', minClass: 6, applicableClasses: [6,7,8,9,10], category: 'Area', label: 'Triangular Base Area', formula: 'Base Area = ½bh', calc: (d) => 0.5 * d.base * d.height, unit: 'cm²', desc: 'Area of each triangular base' },
      { id: 'volume', minClass: 8, applicableClasses: [8,9,10], category: 'Volume', label: 'Volume', formula: 'V = (½bh) × L', calc: (d) => 0.5 * d.base * d.height * d.length, unit: 'cm³', desc: 'Base Area × Length of Prism' },
      { id: 'tsa', minClass: 9, applicableClasses: [9,10], category: 'Surface Area', label: 'Total Surface Area (TSA)', formula: 'TSA = 2(Base Area) + Lateral Area', calc: (d) => 2 * (0.5 * d.base * d.height) + 3 * (d.base * d.length), unit: 'cm²', desc: 'Sum of 2 triangular bases + 3 rectangular side faces' },
      { id: 'euler', minClass: 8, applicableClasses: [8,9,10], category: 'Euler Relation', label: 'Euler Polyhedral Relation', formula: 'F + V - E = 2 (5 + 6 - 9 = 2)', calc: () => 2, unit: '', desc: 'Universal relationship for convex polyhedra' }
    ],
    views: ['3D', '2D', 'Net'],
    applicableClasses: [5, 8, 9, 10],
    description: 'A polyhedron with two parallel congruent triangular bases and three rectangular lateral faces.'
  },

  pyramid: {
    id: 'pyramid',
    name: 'Square Pyramid',
    type: '3d',
    isPolyhedron: true,
    hasEulerFormula: true,
    faces: 5,
    faceShape: '1 Square + 4 Triangles',
    edges: 8,
    vertices: 5,
    eulerFormula: 'F + V - E = 5 + 5 - 8 = 2',
    defaultDimensions: { a: 6, h: 8 },
    dimensionLabels: { a: 'Base Square Side (a)', h: 'Pyramid Height (h)' },
    units: { length: 'cm', area: 'cm²', volume: 'cm³' },
    formulaList: [
      { id: 'pyramid_props', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Properties', label: 'Faces, Edges & Vertices', formula: '5 Faces (1 Square + 4 Triangles), 8 Edges, 5 Vertices', calc: () => '5F, 8E, 5V', unit: '', desc: 'Square base with 4 triangular faces meeting at apex' },
      { id: 'base_area', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Area', label: 'Base Square Area', formula: 'A = a²', calc: (d) => d.a ** 2, unit: 'cm²', desc: 'Area of the bottom square base' },
      { id: 'slant_height', minClass: 9, applicableClasses: [9,10], category: 'Properties', label: 'Slant Height (l)', formula: 'l = √((a/2)² + h²)', calc: (d) => Math.sqrt((d.a / 2) ** 2 + d.h ** 2), unit: 'cm', desc: 'Altitude of each triangular lateral face' },
      { id: 'lsa', minClass: 9, applicableClasses: [9,10], category: 'Surface Area', label: 'Lateral Surface Area (LSA)', formula: 'LSA = 2al', calc: (d) => { const l = Math.sqrt((d.a / 2) ** 2 + d.h ** 2); return 2 * d.a * l; }, unit: 'cm²', desc: 'Combined area of the 4 triangular side faces' },
      { id: 'tsa', minClass: 9, applicableClasses: [9,10], category: 'Surface Area', label: 'Total Surface Area (TSA)', formula: 'TSA = a² + 2al', calc: (d) => { const l = Math.sqrt((d.a / 2) ** 2 + d.h ** 2); return (d.a ** 2) + 2 * d.a * l; }, unit: 'cm²', desc: 'Base Area + Lateral Surface Area' },
      { id: 'volume', minClass: 9, applicableClasses: [9,10], category: 'Volume', label: 'Volume', formula: 'V = ⅓a²h', calc: (d) => (1 / 3) * (d.a ** 2) * d.h, unit: 'cm³', desc: '⅓ × Base Area × Height' },
      { id: 'euler', minClass: 8, applicableClasses: [8,9,10], category: 'Euler Relation', label: 'Euler Polyhedral Relation', formula: 'F + V - E = 2 (5 + 5 - 8 = 2)', calc: () => 2, unit: '', desc: 'Universal relationship for convex polyhedra' }
    ],
    views: ['3D', '2D', 'Net'],
    applicableClasses: [5, 8, 9, 10],
    description: 'A polyhedron with a square base and four triangular faces meeting at a common apex.'
  },

  // =========================================================================
  // 2D PLANE GEOMETRIC SHAPES
  // =========================================================================
  triangle: {
    id: 'triangle',
    name: 'Triangle',
    type: '2d',
    sides: 3,
    vertices: 3,
    angles: 3,
    angleSum: '180°',
    defaultDimensions: { base: 8, height: 6, sideA: 6, sideC: 10 },
    dimensionLabels: { base: 'Base (b)', height: 'Height (h)' },
    units: { length: 'cm', area: 'cm²' },
    formulaList: [
      { id: 'triangle_props', minClass: 1, applicableClasses: [1,2,3,4,5,6,7,8,9,10], category: 'Properties', label: 'Sides, Vertices & Angles', formula: '3 Sides, 3 Vertices, 3 Angles', calc: () => '3 Sides, 3 Vertices', unit: '', desc: 'Closed polygon with 3 straight boundary segments' },
      { id: 'angle_sum', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Properties', label: 'Sum of Interior Angles', formula: '∠A + ∠B + ∠C = 180°', calc: () => 180, unit: '°', desc: 'Constant angle sum for any triangle' },
      { id: 'perimeter', minClass: 3, applicableClasses: [3,4,5,6,7,8,9,10], category: 'Properties', label: 'Perimeter', formula: 'P = a + b + c', calc: (d) => d.base + (d.sideA || d.height) + (d.sideC || Math.sqrt(d.base ** 2 + d.height ** 2)), unit: 'cm', desc: 'Sum of all three outer side lengths' },
      { id: 'equilateral_perim', minClass: 3, applicableClasses: [3,4,5,6,7,8,9,10], category: 'Properties', label: 'Equilateral Triangle Perimeter', formula: 'P = 3a', calc: (d) => 3 * d.base, unit: 'cm', desc: 'For triangle with 3 equal sides' },
      { id: 'area', minClass: 6, applicableClasses: [6,7,8,9,10], category: 'Area', label: 'Standard Area', formula: 'A = ½ × base × height', calc: (d) => 0.5 * d.base * d.height, unit: 'cm²', desc: 'Half the area of a rectangle with same base and height' },
      { id: 'equilateral_area', minClass: 9, applicableClasses: [9,10], category: 'Area', label: 'Equilateral Triangle Area', formula: 'A = (√3/4)a²', calc: (d) => (Math.sqrt(3) / 4) * (d.base ** 2), unit: 'cm²', desc: 'Area when all three sides equal a' },
      { id: 'heron_area', minClass: 9, applicableClasses: [9,10], category: 'Area', label: 'Heron\'s Formula', formula: 'A = √[s(s - a)(s - b)(s - c)] where s = (a+b+c)/2', calc: (d) => { const a = d.sideA || d.height, b = d.base, c = d.sideC || Math.sqrt(d.base ** 2 + d.height ** 2), s = (a + b + c) / 2; return Math.sqrt(Math.max(0, s * (s - a) * (s - b) * (s - c))); }, unit: 'cm²', desc: 'Calculates area directly from all 3 side lengths' }
    ],
    views: ['2D'],
    applicableClasses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    description: 'A 3-sided 2D polygon whose interior angles always sum to 180°.'
  },

  square: {
    id: 'square',
    name: 'Square',
    type: '2d',
    sides: 4,
    vertices: 4,
    angles: '4 equal right angles (90°)',
    symmetryLines: 4,
    defaultDimensions: { a: 6 },
    dimensionLabels: { a: 'Side Length (a)' },
    units: { length: 'cm', area: 'cm²' },
    formulaList: [
      { id: 'square_props', minClass: 1, applicableClasses: [1,2,3,4,5,6,7,8,9,10], category: 'Properties', label: 'Sides & Angles', formula: '4 Equal Sides, 4 Right Angles (90°)', calc: () => '4 Sides, 4 Right Angles', unit: '', desc: 'All 4 sides are equal and all 4 interior angles equal 90°' },
      { id: 'perimeter', minClass: 3, applicableClasses: [3,4,5,6,7,8,9,10], category: 'Properties', label: 'Perimeter', formula: 'P = 4a', calc: (d) => 4 * d.a, unit: 'cm', desc: 'Sum of all 4 equal side lengths' },
      { id: 'area', minClass: 4, applicableClasses: [4,5,6,7,8,9,10], category: 'Area', label: 'Area', formula: 'A = a²', calc: (d) => d.a ** 2, unit: 'cm²', desc: 'Length × Breadth (both equal a)' },
      { id: 'diagonal', minClass: 8, applicableClasses: [8,9,10], category: 'Diagonals & Edges', label: 'Diagonal', formula: 'd = a√2', calc: (d) => d.a * Math.SQRT2, unit: 'cm', desc: 'Straight line across opposite vertices' },
      { id: 'side_from_area', minClass: 8, applicableClasses: [8,9,10], category: 'Properties', label: 'Side from Area', formula: 'a = √A', calc: (d) => d.a, unit: 'cm', desc: 'Square root of total area' },
      { id: 'side_from_perim', minClass: 4, applicableClasses: [4,5,6,7,8,9,10], category: 'Properties', label: 'Side from Perimeter', formula: 'a = P / 4', calc: (d) => d.a, unit: 'cm', desc: 'Perimeter divided by 4' }
    ],
    views: ['2D'],
    applicableClasses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    description: 'A regular quadrilateral with 4 equal sides, 4 right angles, and 4 lines of symmetry.'
  },

  rectangle: {
    id: 'rectangle',
    name: 'Rectangle',
    type: '2d',
    sides: 4,
    vertices: 4,
    angles: '4 right angles (90°)',
    symmetryLines: 2,
    defaultDimensions: { l: 8, b: 5 },
    dimensionLabels: { l: 'Length (l)', b: 'Breadth (b)' },
    units: { length: 'cm', area: 'cm²' },
    formulaList: [
      { id: 'rect_props', minClass: 1, applicableClasses: [1,2,3,4,5,6,7,8,9,10], category: 'Properties', label: 'Sides & Angles', formula: 'Opposite Sides Equal, 4 Right Angles', calc: () => 'Opposite Sides Equal', unit: '', desc: 'Opposite sides are parallel and equal in length' },
      { id: 'perimeter', minClass: 3, applicableClasses: [3,4,5,6,7,8,9,10], category: 'Properties', label: 'Perimeter', formula: 'P = 2(l + b)', calc: (d) => 2 * (d.l + d.b), unit: 'cm', desc: 'Total boundary path length around the rectangle' },
      { id: 'area', minClass: 4, applicableClasses: [4,5,6,7,8,9,10], category: 'Area', label: 'Area', formula: 'A = l × b', calc: (d) => d.l * d.b, unit: 'cm²', desc: 'Count of unit square tiles enclosed' },
      { id: 'length_from_area', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Properties', label: 'Length from Area & Breadth', formula: 'l = A / b', calc: (d) => d.l, unit: 'cm', desc: 'Area divided by breadth' },
      { id: 'breadth_from_area', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Properties', label: 'Breadth from Area & Length', formula: 'b = A / l', calc: (d) => d.b, unit: 'cm', desc: 'Area divided by length' },
      { id: 'diagonal', minClass: 8, applicableClasses: [8,9,10], category: 'Diagonals & Edges', label: 'Diagonal', formula: 'd = √(l² + b²)', calc: (d) => Math.sqrt(d.l ** 2 + d.b ** 2), unit: 'cm', desc: 'Hypotenuse across opposite vertices' }
    ],
    views: ['2D'],
    applicableClasses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    description: 'A quadrilateral with opposite sides equal and parallel, and four 90° interior angles.'
  },

  parallelogram: {
    id: 'parallelogram',
    name: 'Parallelogram',
    type: '2d',
    sides: 4,
    vertices: 4,
    angles: 'Opposite angles equal, adjacent angles supplementary (180°)',
    defaultDimensions: { base: 8, height: 5, side: 6 },
    dimensionLabels: { base: 'Base (b)', height: 'Height (h)', side: 'Slant Side (a)' },
    units: { length: 'cm', area: 'cm²' },
    formulaList: [
      { id: 'par_props', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Properties', label: 'Properties', formula: 'Opposite Sides & Angles Equal', calc: () => 'Opposite Equal & Parallel', unit: '', desc: 'Diagonals bisect each other; adjacent angles sum to 180°' },
      { id: 'perimeter', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Properties', label: 'Perimeter', formula: 'P = 2(a + b)', calc: (d) => 2 * (d.base + d.side), unit: 'cm', desc: 'Sum of all 4 side lengths' },
      { id: 'area', minClass: 7, applicableClasses: [7,8,9,10], category: 'Area', label: 'Area', formula: 'A = base × height = b × h', calc: (d) => d.base * d.height, unit: 'cm²', desc: 'Base length multiplied by perpendicular height' }
    ],
    views: ['2D'],
    applicableClasses: [5, 6, 7, 8, 9, 10],
    description: 'A quadrilateral with two pairs of parallel opposite sides and bisecting diagonals.'
  },

  trapezium: {
    id: 'trapezium',
    name: 'Trapezium (Trapezoid)',
    type: '2d',
    sides: 4,
    vertices: 4,
    defaultDimensions: { a: 8, b: 5, h: 4, c: 5, d: 5 },
    dimensionLabels: { a: 'Parallel Side 1 (a)', b: 'Parallel Side 2 (b)', h: 'Height (h)' },
    units: { length: 'cm', area: 'cm²' },
    formulaList: [
      { id: 'trap_props', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Properties', label: 'Properties', formula: 'One Pair of Parallel Sides', calc: () => '1 Pair Parallel Sides', unit: '', desc: 'Quadrilateral with one pair of parallel bases (a and b)' },
      { id: 'perimeter', minClass: 5, applicableClasses: [5,6,7,8,9,10], category: 'Properties', label: 'Perimeter', formula: 'P = a + b + c + d', calc: (d) => d.a + d.b + (d.c || 5) + (d.d || 5), unit: 'cm', desc: 'Sum of all 4 outer boundary edges' },
      { id: 'area', minClass: 8, applicableClasses: [8,9,10], category: 'Area', label: 'Area', formula: 'A = ½(a + b) × h', calc: (d) => 0.5 * (d.a + d.b) * d.h, unit: 'cm²', desc: 'Average of parallel sides multiplied by perpendicular distance h' }
    ],
    views: ['2D'],
    applicableClasses: [5, 8, 9, 10],
    description: 'A quadrilateral with at least one pair of parallel opposite sides.'
  },

  circle: {
    id: 'circle',
    name: 'Circle',
    type: '2d',
    sides: 0,
    vertices: 0,
    defaultDimensions: { r: 5 },
    dimensionLabels: { r: 'Radius (r)' },
    units: { length: 'cm', area: 'cm²' },
    formulaList: [
      { id: 'circle_props', minClass: 1, applicableClasses: [1,2,3,4,5,6,7,8,9,10], category: 'Properties', label: 'Center & Boundary', formula: 'Round Boundary, 0 Vertices, 0 Edges', calc: () => 'Round 2D Curve', unit: '', desc: 'All boundary points are equidistant from the center' },
      { id: 'radius', minClass: 4, applicableClasses: [4,5,6,7,8,9,10], category: 'Properties', label: 'Radius', formula: 'r = d / 2', calc: (d) => d.r, unit: 'cm', desc: 'Distance from center to any boundary point' },
      { id: 'diameter', minClass: 4, applicableClasses: [4,5,6,7,8,9,10], category: 'Properties', label: 'Diameter', formula: 'd = 2r', calc: (d) => 2 * d.r, unit: 'cm', desc: 'Longest chord passing through center' },
      { id: 'circumference', minClass: 6, applicableClasses: [6,7,8,9,10], category: 'Properties', label: 'Circumference (C = 2πr)', formula: 'C = 2πr = πd', calc: (d, pi) => 2 * pi * d.r, unit: 'cm', desc: 'Total boundary perimeter around the circle' },
      { id: 'area_radius', minClass: 7, applicableClasses: [7,8,9,10], category: 'Area', label: 'Area using Radius', formula: 'A = πr²', calc: (d, pi) => pi * (d.r ** 2), unit: 'cm²', desc: 'Total planar region enclosed by boundary' },
      { id: 'area_diameter', minClass: 8, applicableClasses: [8,9,10], category: 'Area', label: 'Area using Diameter', formula: 'A = πd² / 4', calc: (d, pi) => (pi * ((2 * d.r) ** 2)) / 4, unit: 'cm²', desc: 'Area expressed in terms of diameter d' }
    ],
    views: ['2D'],
    applicableClasses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    description: 'The set of all points in a plane equidistant from a fixed center point.'
  },

  semicircle: {
    id: 'semicircle',
    name: 'Semi-Circle',
    type: '2d',
    defaultDimensions: { r: 5 },
    dimensionLabels: { r: 'Radius (r)' },
    units: { length: 'cm', area: 'cm²' },
    formulaList: [
      { id: 'radius', minClass: 4, applicableClasses: [4,5,6,7,8,9,10], category: 'Properties', label: 'Radius', formula: 'r = d / 2', calc: (d) => d.r, unit: 'cm', desc: 'Distance from center of diameter to arc' },
      { id: 'diameter', minClass: 4, applicableClasses: [4,5,6,7,8,9,10], category: 'Properties', label: 'Diameter', formula: 'd = 2r', calc: (d) => 2 * d.r, unit: 'cm', desc: 'Straight base line segment' },
      { id: 'curved_perimeter', minClass: 8, applicableClasses: [8,9,10], category: 'Properties', label: 'Curved Arc Perimeter', formula: 'C = πr', calc: (d, pi) => pi * d.r, unit: 'cm', desc: 'Length of the curved half-circumference' },
      { id: 'total_perimeter', minClass: 8, applicableClasses: [8,9,10], category: 'Properties', label: 'Total Perimeter (Boundary)', formula: 'P = πr + 2r', calc: (d, pi) => pi * d.r + 2 * d.r, unit: 'cm', desc: 'Curved arc + straight flat diameter base' },
      { id: 'area', minClass: 8, applicableClasses: [8,9,10], category: 'Area', label: 'Area', formula: 'A = ½πr²', calc: (d, pi) => 0.5 * pi * (d.r ** 2), unit: 'cm²', desc: 'Half the area of a complete circle' }
    ],
    views: ['2D'],
    applicableClasses: [5, 8, 9, 10],
    description: 'A half-circle formed by cutting a circle along its diameter.'
  },

  polygons: {
    id: 'polygons',
    name: 'Polygon Explorer (Geometry Extension)',
    type: '2d',
    defaultDimensions: { n: 6, side: 4 },
    dimensionLabels: { n: 'Number of Sides (n)', side: 'Side Length (a)' },
    units: { length: 'cm', area: 'cm²' },
    formulaList: [
      { id: 'poly_props', minClass: 3, applicableClasses: [3,4,5,6,7,8,9,10], category: 'Properties', label: 'Sides & Vertices', formula: 'n Sides, n Vertices', calc: (d) => `${d.n} Sides, ${d.n} Vertices`, unit: '', desc: '2D closed polygon bounded by n straight segments' },
      { id: 'perimeter', minClass: 4, applicableClasses: [4,5,6,7,8,9,10], category: 'Properties', label: 'Perimeter of Regular Polygon', formula: 'P = n × a', calc: (d) => d.n * d.side, unit: 'cm', desc: 'Number of sides multiplied by side length' },
      { id: 'interior_sum', minClass: 8, applicableClasses: [8,9,10], category: 'Properties', label: 'Sum of Interior Angles', formula: 'S = (n - 2) × 180°', calc: (d) => (d.n - 2) * 180, unit: '°', desc: 'Total sum of all interior angles' },
      { id: 'each_interior', minClass: 8, applicableClasses: [8,9,10], category: 'Properties', label: 'Each Interior Angle (Regular)', formula: 'Interior Angle = [(n - 2) × 180°] / n', calc: (d) => ((d.n - 2) * 180) / d.n, unit: '°', desc: 'Measure of each corner angle in regular polygon' },
      { id: 'each_exterior', minClass: 8, applicableClasses: [8,9,10], category: 'Properties', label: 'Each Exterior Angle (Regular)', formula: 'Exterior Angle = 360° / n', calc: (d) => 360 / d.n, unit: '°', desc: 'Measure of each turn angle summing to 360°' }
    ],
    views: ['2D'],
    applicableClasses: [5, 6, 7, 8, 9, 10],
    description: 'Explore regular polygons from triangles to dodecagons (3 to 12 sides) with live angle calculations.'
  }
};

/**
 * Helper to retrieve shape properties by shape ID
 * @param {string} shapeId
 * @returns {Object}
 */
export function getShapeData(shapeId) {
  return shapeProperties[shapeId] || shapeProperties.cube;
}

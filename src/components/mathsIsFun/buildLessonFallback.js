/**
 * Master Math Is Fun Style Lesson Generator & Fallback Resolver
 * Transforms any topic note into a rich, progressive, 13-stage interactive learning lesson.
 */

export function buildLessonFallback(topicId = '', rawNote = {}, classNum = 5) {
  const cleanTitle = (rawNote.title || topicId.replace(/_/g, ' ')).replace(/\(.*?\)/g, '').trim();
  const id = topicId.toLowerCase();
  const cat = (rawNote.category || 'Mathematics').toLowerCase();

  // 1. Hook Question
  let hookQuestion = rawNote.hookQuestion;
  if (!hookQuestion) {
    if (id.includes('count') || id.includes('zero') || id.includes('number')) {
      hookQuestion = `Have you ever wondered how we keep track of how many things exist without missing any?`;
    } else if (id.includes('frac') || id.includes('half') || id.includes('quarter')) {
      hookQuestion = `If you share a pizza with your friends, how do you mathematically prove everyone got an equal piece?`;
    } else if (id.includes('angle') || id.includes('triangle') || id.includes('line')) {
      hookQuestion = `Look at the corner of a room, an open door, or a clock hand. What actually determines how wide something is turning?`;
    } else if (id.includes('equation') || id.includes('linear') || id.includes('algebra')) {
      hookQuestion = `Imagine a secret number hidden inside a mystery box on a balanced scale. How can we find what's inside without opening it?`;
    } else if (id.includes('pythag') || id.includes('right')) {
      hookQuestion = `If you walk 3 km East and 4 km North, what is the exact shortest straight-line distance back to your starting point?`;
    } else if (id.includes('trig') || id.includes('sine') || id.includes('cosine') || id.includes('tangent')) {
      hookQuestion = `How do astronomers measure the distance to the moon or architects measure giant towers without climbing up with a tape measure?`;
    } else if (id.includes('percent') || id.includes('discount') || id.includes('profit') || id.includes('gst') || id.includes('interest')) {
      hookQuestion = `When a shop offers "30% off plus 10% cash back", are you really saving 40%? How do numbers work in everyday money?`;
    } else if (id.includes('coord') || id.includes('graph') || id.includes('plot')) {
      hookQuestion = `How does a GPS map or a video game know the exact location of your character on the screen?`;
    } else if (id.includes('probab') || id.includes('chance') || id.includes('dice')) {
      hookQuestion = `If you flip a fair coin 5 times and get heads every time, is the next flip more likely to be tails?`;
    } else if (id.includes('area') || id.includes('perimeter') || id.includes('volume') || id.includes('mensur')) {
      hookQuestion = `How much paint do you need for a wall, or how much water fills a swimming pool? How do we calculate space accurately?`;
    } else {
      hookQuestion = `What is the core idea behind ${cleanTitle}, and why is it so powerful in solving real problems?`;
    }
  }

  // 2. Build the Idea (Progressive concrete steps)
  let buildTheIdea = rawNote.buildTheIdea;
  if (!buildTheIdea || buildTheIdea.length === 0) {
    if (classNum <= 2) {
      buildTheIdea = [
        { text: `Step 1: Start with real objects you can touch and see (like 🍎 apples, 🟡 coins, or 🔵 blocks).`, note: "Concrete Observation" },
        { text: `Step 2: Group them or move them one at a time to see what changes.`, note: "Visual Action" },
        { text: `Step 3: Match each item to its special number symbol in ${cleanTitle}.`, note: "Mathematical Match" }
      ];
    } else if (classNum <= 5) {
      buildTheIdea = [
        { text: `Step 1: Start with a simple, familiar example using easy whole numbers.`, note: "Simple Foundation" },
        { text: `Step 2: Notice what happens when we repeat the operation or split quantities equally.`, note: "Visual Pattern" },
        { text: `Step 3: Connect this visual behavior directly to the rules of ${cleanTitle}.`, note: "Rule Formulation" }
      ];
    } else {
      buildTheIdea = [
        { text: `Step 1: Understand the fundamental relationship and variables involved in ${cleanTitle}.`, note: "Variable Setup" },
        { text: `Step 2: Express the relationship step-by-step using balance and logical deduction.`, note: "Logical Deduction" },
        { text: `Step 3: Generalize the observation into an exact mathematical formula that works every time.`, note: "Generalization" }
      ];
    }
  }

  // 3. Pattern Table
  let patternTable = rawNote.patternTable;
  if (!patternTable) {
    if (id.includes('frac') || id.includes('ratio')) {
      patternTable = {
        title: "Notice the Pattern: Equivalent Fractions & Scaling",
        headers: ["Fraction", "Multiplier", "Scaled Value", "Decimal Equivalent"],
        rows: [
          ["1/2", "× 2 / 2", "2/4", "0.50 (50%)"],
          ["1/2", "× 3 / 3", "3/6", "0.50 (50%)"],
          ["1/2", "× 4 / 4", "4/8", "0.50 (50%)"],
          ["1/2", "× 5 / 5", "5/10", "0.50 (50%)"]
        ],
        insight: "Multiplying or dividing numerator and denominator by the exact same non-zero number never changes the actual value!"
      };
    } else if (id.includes('angle') || id.includes('geom') || id.includes('triang')) {
      patternTable = {
        title: "Notice the Pattern: Angle Classifications & Rotations",
        headers: ["Angle Range", "Visual Openness", "Classification", "Real World Example"],
        rows: [
          ["Between 0° & 90°", "Sharp / Narrow", "Acute Angle", "Slice of Pizza 🍕"],
          ["Exactly 90°", "Square Corner 📐", "Right Angle", "Corner of a Book 📖"],
          ["Between 90° & 180°", "Wide Open", "Obtuse Angle", "Open Laptop Screen 💻"],
          ["Exactly 180°", "Straight Flat Line", "Straight Angle", "Flat Horizon 🌅"]
        ],
        insight: "As the ray sweeps through a circle, the angle measures rotation from 0° all the way to 360°!"
      };
    } else if (id.includes('pythag')) {
      patternTable = {
        title: "Notice the Pattern: Pythagorean Triples (a² + b² = c²)",
        headers: ["Side a", "Side b", "a² + b²", "Hypotenuse c", "c² Match?"],
        rows: [
          ["3", "4", "9 + 16 = 25", "5", "5² = 25 ✓"],
          ["6", "8", "36 + 64 = 100", "10", "10² = 100 ✓"],
          ["5", "12", "25 + 144 = 169", "13", "13² = 169 ✓"],
          ["8", "15", "64 + 225 = 289", "17", "17² = 289 ✓"]
        ],
        insight: "The sum of the areas of the two smaller squares always perfectly equals the area of the largest square!"
      };
    } else if (id.includes('trig')) {
      patternTable = {
        title: "Notice the Pattern: Standard Trigonometric Ratios",
        headers: ["Angle θ", "sin θ (Opp/Hyp)", "cos θ (Adj/Hyp)", "tan θ (Opp/Adj)"],
        rows: [
          ["0°", "0", "1", "0"],
          ["30°", "1/2 = 0.500", "√3/2 ≈ 0.866", "1/√3 ≈ 0.577"],
          ["45°", "1/√2 ≈ 0.707", "1/√2 ≈ 0.707", "1.000"],
          ["60°", "√3/2 ≈ 0.866", "1/2 = 0.500", "√3 ≈ 1.732"],
          ["90°", "1", "0", "Undefined (∞)"]
        ],
        insight: "As the angle grows from 0° to 90°, sine increases from 0 to 1, while cosine decreases from 1 to 0!"
      };
    } else if (id.includes('equation') || id.includes('linear')) {
      patternTable = {
        title: "Notice the Pattern: Balance Invariants in Algebra",
        headers: ["Original Equation", "Operation on Both Sides", "Resulting Equation", "Solution for x"],
        rows: [
          ["x + 5 = 12", "Subtract 5 from both sides", "x = 12 - 5", "x = 7"],
          ["2x = 14", "Divide both sides by 2", "x = 14 / 2", "x = 7"],
          ["2x + 5 = 19", "Subtract 5, then divide by 2", "2x = 14 → x = 7", "x = 7"],
          ["x / 3 = 4", "Multiply both sides by 3", "x = 4 × 3", "x = 12"]
        ],
        insight: "Whatever mathematical operation you do to one side of the equal sign, you MUST do to the other side to keep balance!"
      };
    } else {
      patternTable = {
        title: `Notice the Pattern: Progressive Exploration of ${cleanTitle}`,
        headers: ["Input Step", "Mathematical Process", "Resulting Pattern", "Key Takeaway"],
        rows: [
          ["Case 1: Baseline", "Apply fundamental definition", "Direct Value", "Forms the base rule"],
          ["Case 2: Double Input", "Scale values by 2", "Scales predictably", "Preserves mathematical structure"],
          ["Case 3: Inverse Check", "Reverse the operation", "Returns to baseline", "Confirms exact symmetry"]
        ],
        insight: `Observing the transformation confirms the standard ICSE mathematical properties of ${cleanTitle}.`
      };
    }
  }

  // 4. Mathematical Notation & Rule
  let mathNotation = rawNote.mathNotation;
  if (!mathNotation) {
    mathNotation = {
      formula: rawNote.remember || `Governing Rule for ${cleanTitle}`,
      explanation: `In standard mathematical notation, this rule allows us to calculate and verify solutions systematically for Class ${classNum}.`
    };
  }

  // 5. Multiple Worked Examples (Easy, Medium, Challenging)
  let workedExamples = rawNote.workedExamples;
  if (!workedExamples || workedExamples.length === 0) {
    const baseEx = rawNote.workedExample || {};
    workedExamples = [
      {
        level: "Level 1 — Easy / Foundational",
        badge: "Easy",
        problem: baseEx.problem || `Apply standard definition of ${cleanTitle} to calculate the foundational value.`,
        steps: baseEx.steps && baseEx.steps.length > 0 ? baseEx.steps : [
          "Step 1: Identify given parameters and constraints.",
          "Step 2: Apply the governing formula or rule directly.",
          "Step 3: State the final verified result."
        ],
        answer: baseEx.answer || "Standard Verified Result",
        reasoning: "Always verify given units and substitute values cleanly."
      },
      {
        level: "Level 2 — Intermediate Application",
        badge: "Medium",
        problem: `Given a combined scenario in ${cleanTitle}, find the unknown variable when values are scaled.`,
        steps: [
          "Step 1: Set up the governing mathematical relationship.",
          "Step 2: Rearrange the terms to isolate the target variable.",
          "Step 3: Simplify step-by-step using standard arithmetic operations."
        ],
        answer: "Calculated Intermediate Value",
        reasoning: "Breaking multi-step problems into smaller atomic steps prevents calculation errors."
      },
      {
        level: "Level 3 — Advanced Challenge",
        badge: "Challenging",
        problem: `Solve an ICSE board-level application problem involving ${cleanTitle} with multiple constraints.`,
        steps: [
          "Step 1: Draw a diagram or mental model to visualize all given parameters.",
          "Step 2: Construct the full algebraic/geometric equation.",
          "Step 3: Solve and check boundary conditions or validity."
        ],
        answer: "Complete Solved Result",
        reasoning: "Checking your final answer by substituting it back into the original question ensures 100% accuracy."
      }
    ];
  }

  // 6. Why Does This Work?
  let whyDoesThisWork = rawNote.whyDoesThisWork;
  if (!whyDoesThisWork) {
    if (id.includes('frac')) {
      whyDoesThisWork = `A fraction is just division in disguise. When we multiply both the top (numerator) and bottom (denominator) by the same number, we are really just multiplying by 1 (since 2/2 = 1, 3/3 = 1). Multiplying any number by 1 never changes its size, only how many pieces we cut it into!`;
    } else if (id.includes('pythag')) {
      whyDoesThisWork = `If you construct actual geometric square tiles on all three sides of a right triangle, the total square tiles covering the two smaller sides (a² + b²) can be cut and rearranged to completely and perfectly cover the large square tile on the hypotenuse (c²).`;
    } else if (id.includes('angle')) {
      whyDoesThisWork = `An angle measures rotation, not linear distance. No matter how long you draw the rays, the amount of turning between the two rays remains exactly the same constant number of degrees.`;
    } else if (id.includes('equation') || id.includes('linear')) {
      whyDoesThisWork = `An equation is an exact balance scale. If two trays balance, adding, subtracting, multiplying, or dividing both sides by the exact same amount keeps the pointer centered at zero. That is why inverse operations solve for x without changing the equality!`;
    } else if (id.includes('trig')) {
      whyDoesThisWork = `All right triangles with the same acute angle θ are similar triangles! That means their side lengths scale in exact constant proportions. No matter how big or small the triangle is, the ratio of (Opposite / Hypotenuse) is always identical for that angle.`;
    } else {
      whyDoesThisWork = `This rule is a direct consequence of fundamental mathematical conservation and symmetry principles. It guarantees that any calculation following these steps will yield a reliable, reproducible solution.`;
    }
  }

  // 7. Common Mistake
  let commonMistake = rawNote.commonMistake;
  if (!commonMistake) {
    if (id.includes('frac')) {
      commonMistake = {
        wrong: `Adding fractions by adding tops and bottoms directly: 1/2 + 1/3 = 2/5 ❌`,
        why: `You cannot add pieces of different sizes! A half-slice and a third-slice are not equal pieces.`,
        remember: `Always find a common denominator first (LCM) to make all pieces the exact same size: 3/6 + 2/6 = 5/6! ✅`
      };
    } else if (id.includes('equation') || id.includes('algebra')) {
      commonMistake = {
        wrong: `Changing one side of the equation without doing the same to the other side: 2x + 4 = 10 → 2x = 10 ❌`,
        why: `Forgetting to subtract 4 from BOTH sides destroys the balance scale.`,
        remember: `Golden Rule: Whatever operation you perform on the left side, you MUST do identically to the right side! ✅`
      };
    } else if (id.includes('angle')) {
      commonMistake = {
        wrong: `Thinking longer ray lines mean a bigger angle. ❌`,
        why: `Angle measures the degree of rotation/turn between rays, NOT how long the lines are drawn.`,
        remember: `A tiny 90° corner and a huge 90° room corner have the exact same angle: 90°! ✅`
      };
    } else if (id.includes('pythag')) {
      commonMistake = {
        wrong: `Applying a² + b² = c² to non-right triangles (obtuse or acute). ❌`,
        why: `Pythagoras' Theorem is ONLY strictly valid when one angle is exactly 90°.`,
        remember: `Always check for the 90° square corner symbol before using Pythagoras! ✅`
      };
    } else {
      commonMistake = {
        wrong: `Skipping step-by-step derivation and guessing the final answer without unit checks. ❌`,
        why: `Mental leaps often cause sign errors (+ / -) or incorrect unit conversions.`,
        remember: `Write down each step clearly and verify your units at the end. ✅`
      };
    }
  }

  // 8. Real-Life Connection
  let realLifeConnection = rawNote.realLifeConnection;
  if (!realLifeConnection) {
    if (id.includes('frac') || id.includes('ratio')) {
      realLifeConnection = {
        context: "Culinary Arts, Medicine Dosages & Chemistry",
        example: "Chefs scale recipes up or down using ratios, while pharmacists calculate exact medicinal dosages per kilogram of body weight."
      };
    } else if (id.includes('angle') || id.includes('trig') || id.includes('pythag') || id.includes('geom')) {
      realLifeConnection = {
        context: "Civil Engineering, Architecture & Video Game Graphics",
        example: "Engineers use angles and trigonometry to ensure bridges support heavy loads, while 3D game engines use coordinates and vectors to render realistic worlds."
      };
    } else if (id.includes('percent') || id.includes('interest') || id.includes('gst') || id.includes('finance')) {
      realLifeConnection = {
        context: "Personal Finance, Banking & Entrepreneurship",
        example: "Understanding compound interest and GST helps you calculate loan repayments, savings growth, and make smart business decisions."
      };
    } else if (id.includes('coord') || id.includes('graph') || id.includes('plot')) {
      realLifeConnection = {
        context: "GPS Satellite Navigation & Digital Screen Pixels",
        example: "Every GPS receiver pinpoints latitude and longitude using coordinate geometry, rendering your exact route on a digital map."
      };
    } else {
      realLifeConnection = {
        context: "Scientific Research, Technology & Everyday Problem Solving",
        example: `Professionals apply ${cleanTitle} to model real data, optimize workflows, and design robust solutions.`
      };
    }
  }

  // 9. Quick Recap
  let recap = rawNote.recap;
  if (!recap || recap.length === 0) {
    recap = [
      `Understand the core meaning: ${cleanTitle} connects visual representation to exact mathematical numbers.`,
      `Always observe the pattern and understand WHY the rule works before memorizing formulas.`,
      `Verify every calculation using step-by-step reasoning and check units.`,
      `Practice actively by testing different inputs in the interactive simulation above!`
    ];
  }

  return {
    ...rawNote,
    title: cleanTitle,
    category: rawNote.category || 'Mathematics',
    color: rawNote.color || '#4f46e5',
    hookQuestion,
    buildTheIdea,
    patternTable,
    mathNotation,
    workedExamples,
    whyDoesThisWork,
    commonMistake,
    realLifeConnection,
    recap
  };
}

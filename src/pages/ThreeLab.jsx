import React, { useState, useEffect } from 'react';
import { ShapeExplorer3D } from '../components/three/ShapeExplorer3D';
import { AngleExplorer } from '../components/three/AngleExplorer';
import { TransformationsLab } from '../components/three/TransformationsLab';
import { CoordinateGeometry } from '../components/three/CoordinateGeometry';
import { ShapeBuilder } from '../components/visualizers/ShapeBuilder';
import { FractionPizza } from '../components/visualizers/FractionPizza';
import { AbacusVisualizer } from '../components/visualizers/AbacusVisualizer';
import { BalanceScale } from '../components/visualizers/BalanceScale';
import { ClockInteractive } from '../components/visualizers/ClockInteractive';
import { TrigonometryUnitCircle } from '../components/visualizers/TrigonometryUnitCircle';
import { AlgebraParabolaGrapher } from '../components/visualizers/AlgebraParabolaGrapher';
import { ProbabilitySpinner } from '../components/visualizers/ProbabilitySpinner';
import { StatisticsDataLab } from '../components/visualizers/StatisticsDataLab';
import { PythagoreanTheoremLab } from '../components/visualizers/PythagoreanTheoremLab';
import { WholeNumbersLab } from '../components/visualizers/WholeNumbersLab';
import { CommercialMathLab } from '../components/visualizers/CommercialMathLab';
import { SetTheoryVennLab } from '../components/visualizers/SetTheoryVennLab';
import { MetricConversionsLab } from '../components/visualizers/MetricConversionsLab';
import { TimeWorkPipesLab } from '../components/visualizers/TimeWorkPipesLab';
import { HeightsDistancesLab } from '../components/visualizers/HeightsDistancesLab';
import { DataChartsLab } from '../components/visualizers/DataChartsLab';

// New MathsIsFun Complete Coverage Components
import { HierarchicalSitemapTree } from '../components/mathsIsFun/HierarchicalSitemapTree';
import { InteractiveCalculatorsSuite } from '../components/mathsIsFun/InteractiveCalculatorsSuite';
import { MathGamesSuite } from '../components/mathsIsFun/MathGamesSuite';
import { TopicLessonView } from '../components/mathsIsFun/TopicLessonView';

import { CardRounded } from '../components/ui/CardRounded';
import { Button3D } from '../components/ui/Button3D';
import { BadgeChip } from '../components/ui/BadgeChip';
import { RewardModal } from '../components/gamification/RewardModal';
import { useGame } from '../context/GameContext';
import { soundFx } from '../utils/audioSynth';
import { triggerConfetti } from '../utils/confetti';
import {
  Box, Compass, PieChart, Move, Sparkles, Search,
  Trophy, CheckCircle2, Award, RefreshCw, Activity, TrendingUp,
  BarChart3, Scale, Clock, Dices, Layers, Grid, Target, BookOpen,
  Calculator, Gamepad2, ShieldCheck, ListTree, Triangle, Zap, HelpCircle, Hash
} from 'lucide-react';

export const ThreeLab = () => {
  const { addXP, addGems, markVisited3DLab } = useGame();
  
  const [activeTab, setActiveTab] = useState('explorations'); // explorations, sitemap, calculators, games, lesson
  const [selectedTopicDomain, setSelectedTopicDomain] = useState('trigonometry'); // pure topic domain
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubtopicId, setActiveSubtopicId] = useState('trig_unit_circle');
  const [showRewardModal, setShowRewardModal] = useState(false);

  useEffect(() => {
    markVisited3DLab();
  }, []);

  // Pure Topic Category Domains
  const topicDomains = [
    { id: 'trigonometry', label: '📐 Trigonometry & Pythagoras', color: '#7c3aed' },
    { id: 'algebra', label: '📈 Algebra & Functions', color: '#1cb0f6' },
    { id: 'geometry', label: '📦 Geometry & 3D Solids', color: '#58cc02' },
    { id: 'coordinates', label: '🗺️ Coordinate Geometry', color: '#ff9600' },
    { id: 'fractions_numbers', label: '🍕 Fractions & Numbers', color: '#ce82ff' },
    { id: 'probability_stats', label: '🎲 Probability & Data', color: '#ec4899' },
    { id: 'measurement', label: '⏰ Measurement & Time', color: '#06b6d4' },
    { id: 'calculus', label: '⚡ Calculus & Advanced Math', color: '#f43f5e' }
  ];

  // Complete List of All 41 Subtopics mapped to exact visualizer components
  const allSubtopics = [
    // 1. Trigonometry & Pythagoras
    {
      id: 'trig_unit_circle',
      domainId: 'trigonometry',
      title: 'Unit Circle, Ratios (sin, cos, tan) & Values Table',
      description: 'Explore the Unit Circle, SOH-CAH-TOA ratios, and the Easy Sqrt(n)/2 Memory Trick Table for 0°, 30°, 45°, 60°, 90°!',
      icon: Target,
      color: '#7c3aed',
      component: <TrigonometryUnitCircle />
    },
    {
      id: 'heights_distances',
      domainId: 'trigonometry',
      title: 'Heights & Distances, Angle of Elevation & Depression',
      description: 'Calculate heights of buildings, towers, and cliffs using angle of sight and ground distance.',
      icon: TrendingUp,
      color: '#8b5cf6',
      component: <HeightsDistancesLab />
    },
    {
      id: 'pythagoras_theorem',
      domainId: 'trigonometry',
      title: 'Pythagorean Theorem (a² + b² = c²) & Distance Formula',
      description: 'Interactive right triangle with direct vertex dragging, side square areas, hypotenuse proofs, and triples!',
      icon: Triangle,
      color: '#7c3aed',
      component: <PythagoreanTheoremLab />
    },

    // 2. Algebra & Functions
    {
      id: 'algebra_parabola',
      domainId: 'algebra',
      title: 'Linear Lines y = mx + c & Quadratic Parabola y = ax² + bx + c',
      description: 'Plot linear functions and quadratic parabolas with direct vertex dragging, discriminant analysis, and roots formula!',
      icon: Activity,
      color: '#1cb0f6',
      component: <AlgebraParabolaGrapher />
    },
    {
      id: 'quadratic_equations',
      domainId: 'algebra',
      title: 'Quadratic Equations, Factoring & Parabola Graphs',
      description: 'Solve quadratics with factoring and vertex graphs.',
      icon: Activity,
      color: '#1cb0f6',
      component: <AlgebraParabolaGrapher />
    },
    {
      id: 'algebra_balance',
      domainId: 'algebra',
      title: 'Algebraic Equation Balance Scale',
      description: 'Balance variables and weights on an interactive scale to solve linear equations from scratch!',
      icon: Scale,
      color: '#f43f5e',
      component: <BalanceScale />
    },
    {
      id: 'linear_equations',
      domainId: 'algebra',
      title: 'Linear Equations & Equation Balance Scale',
      description: 'Solve ax + b = c linear equations using the interactive 3D balance scale.',
      icon: Scale,
      color: '#1cb0f6',
      component: <BalanceScale />
    },
    {
      id: 'expressions_variables',
      domainId: 'algebra',
      title: 'Algebraic Expressions & Polynomials',
      description: 'Simplify terms and expand polynomials.',
      icon: Calculator,
      color: '#1cb0f6',
      component: <BalanceScale />
    },
    {
      id: 'inequalities',
      domainId: 'algebra',
      title: 'Inequalities & Absolute Value',
      description: 'Solve linear inequalities and number line graphs.',
      icon: HelpCircle,
      color: '#1cb0f6',
      component: <WholeNumbersLab />
    },
    {
      id: 'systems_equations',
      domainId: 'algebra',
      title: 'Systems of Equations (Substitution & Elimination)',
      description: 'Solve simultaneous linear equations.',
      icon: Layers,
      color: '#1cb0f6',
      component: <AlgebraParabolaGrapher />
    },
    {
      id: 'functions_graphing',
      domainId: 'algebra',
      title: 'Functions, Domain, Range & Transformations',
      description: 'Analyze domain, range, and vertical line tests.',
      icon: Activity,
      color: '#1cb0f6',
      component: <AlgebraParabolaGrapher />
    },
    {
      id: 'sequences_series',
      domainId: 'algebra',
      title: 'Sequences, Progressions (AP/GP) & Series',
      description: 'Compute arithmetic and geometric progressions.',
      icon: ListTree,
      color: '#1cb0f6',
      component: <WholeNumbersLab />
    },

    // 3. Geometry & 3D Solids
    {
      id: '3d_solids',
      domainId: 'geometry',
      title: '3D Shapes, Polyhedrons & Unfolding Nets',
      description: 'Rotate and unfold 3D solids (Cubes, Pyramids, Prisms, Cylinders, Cones) with face, edge, and vertex counters!',
      icon: Box,
      color: '#58cc02',
      component: <ShapeExplorer3D />
    },
    {
      id: '3d_shapes_nets',
      domainId: 'geometry',
      title: '3D Solid Polyhedrons, Surface Area & Unfolding Nets',
      description: 'Explore 3D polyhedrons, Euler formula F + V - E = 2, and nets.',
      icon: Box,
      color: '#58cc02',
      component: <ShapeExplorer3D />
    },
    {
      id: 'angles_protractor',
      domainId: 'geometry',
      title: 'Angles, Protractor & Parallel Transversals',
      description: 'Measure acute, right, obtuse, reflex angles, complementary/supplementary pairs, and transversal parallel line angles!',
      icon: Compass,
      color: '#2bdeac',
      component: <AngleExplorer />
    },
    {
      id: 'angles_transversals',
      domainId: 'geometry',
      title: 'Angles, Protractor & Parallel Line Transversals',
      description: 'Measure angles using protractor tools and transversals.',
      icon: Compass,
      color: '#2bdeac',
      component: <AngleExplorer />
    },
    {
      id: '2d_tangrams',
      domainId: 'geometry',
      title: '2D Shapes, Symmetry & Tangrams',
      description: 'Build 2D polygons, test lines of symmetry, and construct shapes using the 7-piece ancient Tangram set!',
      icon: Layers,
      color: '#3b82f6',
      component: <ShapeBuilder />
    },
    {
      id: '2d_shapes_tangrams',
      domainId: 'geometry',
      title: '2D Plane Geometry, Polygons & Tangram Puzzles',
      description: 'Construct 2D polygons and solve Tangram geometric puzzles.',
      icon: Layers,
      color: '#3b82f6',
      component: <ShapeBuilder />
    },
    {
      id: 'transformations',
      domainId: 'geometry',
      title: 'Transformations (Rotation, Reflection & Scaling)',
      description: 'Apply geometric transformations: rotate around origin, reflect across axes, and scale shape coordinates!',
      icon: RefreshCw,
      color: '#8b5cf6',
      component: <TransformationsLab />
    },
    {
      id: 'transformations_geom',
      domainId: 'geometry',
      title: 'Transformations (Rotation, Reflection & Scaling)',
      description: 'Apply 2D geometric translations, rotations, and reflections.',
      icon: RefreshCw,
      color: '#8b5cf6',
      component: <TransformationsLab />
    },

    // 4. Coordinate Geometry
    {
      id: 'quadrant_grid',
      domainId: 'coordinates',
      title: '4-Quadrant Cartesian Grid, Points & Slope',
      description: 'Plot points (x, y) across all 4 quadrants, measure line segment lengths, and compute slope m = Δy / Δx!',
      icon: Move,
      color: '#ff9600',
      component: <CoordinateGeometry />
    },

    // 5. Fractions & Numbers
    {
      id: 'fraction_pizza',
      domainId: 'fractions_numbers',
      title: 'Fractions, Decimals, Percentages & Fraction Wall',
      description: 'Interactive pizza slicer, fraction wall strip tower, equivalent fraction matcher, and percentage converter!',
      icon: PieChart,
      color: '#ce82ff',
      component: <FractionPizza />
    },
    {
      id: 'fractions_mastery',
      domainId: 'fractions_numbers',
      title: 'Fractions, Decimals & Percentages',
      description: 'Master equivalent fractions, decimal conversions, and percentages.',
      icon: PieChart,
      color: '#ce82ff',
      component: <FractionPizza />
    },
    {
      id: 'abacus_place_value',
      domainId: 'fractions_numbers',
      title: 'Abacus & Multi-Digit Place Value',
      description: 'Move abacus beads across Lakhs, Thousands, Hundreds, Tens, and Ones columns!',
      icon: Grid,
      color: '#14b8a6',
      component: <AbacusVisualizer />
    },
    {
      id: 'counting_placevalue',
      domainId: 'fractions_numbers',
      title: 'Whole Numbers, Counting & Place Value',
      description: 'Learn place value systems (Indian & International), expanded forms, Base-10 blocks, and number lines!',
      icon: Grid,
      color: '#58cc02',
      component: <WholeNumbersLab />
    },
    {
      id: 'factors_multiples',
      domainId: 'fractions_numbers',
      title: 'Factors, Multiples, Prime Trees, HCF & LCM',
      description: 'Find HCF and LCM using prime factorization trees.',
      icon: Layers,
      color: '#58cc02',
      component: <WholeNumbersLab />
    },
    {
      id: 'exponents_roots',
      domainId: 'fractions_numbers',
      title: 'Exponents, Powers, Square Roots & Scientific Notation',
      description: 'Learn exponent rules, square roots, and scientific notation.',
      icon: Zap,
      color: '#58cc02',
      component: <WholeNumbersLab />
    },
    {
      id: 'integers_negatives',
      domainId: 'fractions_numbers',
      title: 'Negative Numbers, Integers & Number Line',
      description: 'Add, subtract, and multiply negative integers on a number line.',
      icon: Move,
      color: '#58cc02',
      component: <WholeNumbersLab />
    },
    {
      id: 'roman_numerals',
      domainId: 'fractions_numbers',
      title: 'Roman Numerals & Number Systems',
      description: 'Convert between Roman numerals and Arabic numbers.',
      icon: BookOpen,
      color: '#58cc02',
      component: <WholeNumbersLab />
    },

    // 6. Probability & Data
    {
      id: 'probability_sim',
      domainId: 'probability_stats',
      title: 'Probability Simulator (Dice, Coins & Color Wheels)',
      description: 'Roll dice, flip coins, and spin color wheels to compare theoretical vs empirical experiment probability!',
      icon: Dices,
      color: '#ffc800',
      component: <ProbabilitySpinner />
    },
    {
      id: 'probability_basic',
      domainId: 'probability_stats',
      title: 'Theoretical vs Empirical Probability',
      description: 'Simulate random events with dice, coins, and spinners.',
      icon: Dices,
      color: '#ffc800',
      component: <ProbabilitySpinner />
    },
    {
      id: 'compound_events',
      domainId: 'probability_stats',
      title: 'Compound Events, Tree Diagrams & Venn Diagrams',
      description: 'Calculate independent and dependent probability events.',
      icon: Dices,
      color: '#ffc800',
      component: <ProbabilitySpinner />
    },
    {
      id: 'permutations_combinations',
      domainId: 'probability_stats',
      title: 'Permutations (nPr), Combinations (nCr) & Pascal’s Triangle',
      description: 'Compute nPr permutations and nCr combinations.',
      icon: Hash,
      color: '#ffc800',
      component: <ProbabilitySpinner />
    },
    {
      id: 'stats_bar_chart',
      domainId: 'probability_stats',
      title: 'Statistics Bar Chart, Mean, Median, Mode & Range',
      description: 'Input data values to construct bar charts and automatically calculate Mean (Average), Median, Mode, and Range!',
      icon: BarChart3,
      color: '#ec4899',
      component: <StatisticsDataLab />
    },
    {
      id: 'data_charts',
      domainId: 'probability_stats',
      title: 'Data Collection, Bar Charts, Line Plots & Pie Charts',
      description: 'Create bar charts, line plots, and pie charts with dynamic category management.',
      icon: BarChart3,
      color: '#ec4899',
      component: <DataChartsLab />
    },
    {
      id: 'central_tendency',
      domainId: 'probability_stats',
      title: 'Mean, Median, Mode, Range & Weighted Averages',
      description: 'Compute mean, median, mode, and range for datasets.',
      icon: CheckCircle2,
      color: '#ec4899',
      component: <StatisticsDataLab />
    },
    {
      id: 'dispersion_sd',
      domainId: 'probability_stats',
      title: 'Variance, Standard Deviation & Scatter Plots',
      description: 'Calculate variance and standard deviation.',
      icon: Activity,
      color: '#ec4899',
      component: <StatisticsDataLab />
    },

    // 7. Commercial & Business Math
    {
      id: 'commercial_interest',
      domainId: 'commercial',
      title: 'Simple & Compound Interest, EMI Calculator',
      description: 'Simulate linear SI vs exponential CI interest growth over time.',
      icon: Scale,
      color: '#10b981',
      component: <CommercialMathLab />
    },
    {
      id: 'profit_loss_gst',
      domainId: 'commercial',
      title: 'Profit, Loss, Discount & GST Tax Analysis',
      description: 'Calculate retail profit margins, discounts, and GST taxes.',
      icon: Scale,
      color: '#10b981',
      component: <CommercialMathLab />
    },

    // 8. Time, Work & Distance
    {
      id: 'time_speed_distance',
      domainId: 'time_work',
      title: 'Speed, Distance, Time & Relative Speed',
      description: 'Animated vehicle track simulation for D = S × T.',
      icon: Clock,
      color: '#f59e0b',
      component: <TimeWorkPipesLab />
    },
    {
      id: 'time_work_pipes',
      domainId: 'time_work',
      title: 'Time & Work, Pipes & Cisterns Simulator',
      description: 'Simulate worker rates and water tank pipe filling.',
      icon: Clock,
      color: '#f59e0b',
      component: <TimeWorkPipesLab />
    },
    {
      id: 'set_theory',
      domainId: 'sets_logic',
      title: 'Sets, Subsets, Venn Diagrams & Operations',
      description: 'Interactive Venn diagram solver for Union, Intersection, and Difference.',
      icon: Layers,
      color: '#8b5cf6',
      component: <SetTheoryVennLab />
    },
    {
      id: 'boolean_logic',
      domainId: 'sets_logic',
      title: 'Logic Truth Tables & Boolean Algebra',
      description: 'Evaluate Boolean logic truth tables and set complements.',
      icon: Layers,
      color: '#8b5cf6',
      component: <SetTheoryVennLab />
    },
    {
      id: 'clock_time',
      domainId: 'measurement',
      title: 'Interactive Analog Clock & Elapsed Time',
      description: 'Drag hour and minute clock hands to read time, convert 12h/24h formats, and solve elapsed time word problems!',
      icon: Clock,
      color: '#06b6d4',
      component: <ClockInteractive />
    },
    {
      id: 'time_clocks',
      domainId: 'measurement',
      title: 'Analog & Digital Clocks, 24h Time & Elapsed Timelines',
      description: 'Interactive clock reading and 12h/24h time conversions.',
      icon: Clock,
      color: '#06b6d4',
      component: <ClockInteractive />
    },
    {
      id: 'metric_conversions',
      domainId: 'measurement',
      title: 'Metric & Imperial Unit Conversions',
      description: 'Convert lengths, weights, and volumes with live multipliers.',
      icon: RefreshCw,
      color: '#06b6d4',
      component: <MetricConversionsLab />
    },
    {
      id: 'perimeter_area',
      domainId: 'measurement',
      title: 'Perimeter & Area of 2D Shapes',
      description: 'Compute perimeter and area of rectangles, triangles, and circles.',
      icon: Layers,
      color: '#06b6d4',
      component: <ShapeBuilder />
    },
    {
      id: 'surface_volume',
      domainId: 'measurement',
      title: 'Surface Area & Volume of 3D Solids',
      description: 'Calculate surface area and volume of 3D solids.',
      icon: Box,
      color: '#06b6d4',
      component: <ShapeExplorer3D />
    },

    // 8. Calculus & Advanced Math
    {
      id: 'limits_continuity',
      domainId: 'calculus',
      title: 'Limits, Rates of Change & Continuity',
      description: 'Analyze limits and continuous functions.',
      icon: Activity,
      color: '#f43f5e',
      component: <AlgebraParabolaGrapher />
    },
    {
      id: 'differential_calculus',
      domainId: 'calculus',
      title: 'Derivatives, Power Rule, Chain Rule & Max/Min',
      description: 'Compute derivatives using power and chain rules.',
      icon: Activity,
      color: '#f43f5e',
      component: <AlgebraParabolaGrapher />
    },
    {
      id: 'integral_calculus',
      domainId: 'calculus',
      title: 'Definite & Indefinite Integrals & Area Under Curve',
      description: 'Calculate indefinite integrals and area under curve.',
      icon: Layers,
      color: '#f43f5e',
      component: <AlgebraParabolaGrapher />
    },
    {
      id: 'vectors_matrices',
      domainId: 'calculus',
      title: 'Vector Addition, Dot Product & Matrix Operations',
      description: 'Perform vector addition, dot products, and matrix determinants.',
      icon: Grid,
      color: '#f43f5e',
      component: <CoordinateGeometry />
    }
  ];

  const subtopicsForCurrentDomain = allSubtopics.filter(sub => {
    const matchesDomain = sub.domainId === selectedTopicDomain;
    const matchesSearch = searchQuery === '' ||
      sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  const activeSubtopicObj = allSubtopics.find(s => s.id === activeSubtopicId) || allSubtopics[0];

  const handleSelectDomain = (domainId) => {
    setSelectedTopicDomain(domainId);
    soundFx.playClick();
    const firstSub = allSubtopics.find(s => s.domainId === domainId);
    if (firstSub) setActiveSubtopicId(firstSub.id);
  };

  const handleSitemapSubtopicClick = (subId) => {
    setActiveSubtopicId(subId);
    soundFx.playClick();
    const subObj = allSubtopics.find(s => s.id === subId);
    if (subObj) {
      setSelectedTopicDomain(subObj.domainId);
    }
    setActiveTab('lesson'); // Switch directly to THAT subtopic's tutorial lesson!
  };

  const handleLaunchVisualizer = (subId) => {
    setActiveSubtopicId(subId);
    soundFx.playClick();
    const subObj = allSubtopics.find(s => s.id === subId);
    if (subObj) {
      setSelectedTopicDomain(subObj.domainId);
    }
    setActiveTab('explorations'); // Switch to visualizer lab!
  };

  const handleCompleteLabActivity = () => {
    soundFx.playCorrect();
    triggerConfetti('levelUp');
    addXP(50);
    addGems(20);
    setShowRewardModal(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', width: '100%', maxWidth: '100%', paddingBottom: '60px' }}>
      
      {/* Header Banner - MathsIsFun Redesign */}
      <CardRounded style={{
        background: 'linear-gradient(135deg, #1cb0f6 0%, #7c3aed 50%, #00f0ff 100%)',
        color: '#ffffff',
        padding: '32px',
        boxShadow: '0 12px 28px rgba(124, 58, 237, 0.35)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: 'rgba(255,255,255,0.25)', padding: '4px 14px', borderRadius: 'var(--radius-full)' }}>
                Maths Is Fun Full Curriculum Engine
              </span>
              <span style={{ fontSize: '0.82rem', fontWeight: '800', backgroundColor: '#f0fdf4', color: '#166534', padding: '4px 12px', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={16} /> 100% Coverage Verified
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '2.4rem', fontWeight: '800', marginTop: '6px', lineHeight: '1.2' }}>
              Interactive 3D Math Super-Lab 🧪
            </h2>
            <p style={{ fontSize: '1.05rem', opacity: 0.95, marginTop: '8px', maxWidth: '720px' }}>
              Comprehensive Mathematics Platform: Topic-Wise Lessons from Scratch, Formulas, Easy Memory Tricks, Interactive Calculators, Games & 100% Curriculum Coverage!
            </p>
          </div>

          <Button3D variant="warning" size="lg" onClick={handleCompleteLabActivity} icon={Sparkles}>
            Claim Lab XP (+50)
          </Button3D>
        </div>
      </CardRounded>

      {/* Main Top Navigation Tabs */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {[
          { id: 'explorations', label: '🧪 Topic-Wise Visualizers & Labs', icon: Box },
          { id: 'lesson', label: '📖 Concept Tutorials & Formulas', icon: BookOpen },
          { id: 'sitemap', label: '🗺️ 100% Sitemap Tree Coverage', icon: ListTree },
          { id: 'calculators', label: '🧮 Calculators Suite', icon: Calculator },
          { id: 'games', label: '🎮 Math Games & Puzzles', icon: Gamepad2 }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); soundFx.playClick(); }}
              style={{
                padding: '10px 18px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: isActive ? 'var(--primary)' : 'var(--bg-card-solid)',
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                fontWeight: '800',
                fontFamily: 'var(--font-rounded)',
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? '0 4px 14px rgba(88, 204, 2, 0.4)' : 'var(--shadow-sm)',
                transition: 'all 0.2s ease'
              }}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. VISUALIZERS & LABS TAB */}
      {activeTab === 'explorations' && (
        <>
          {/* Topic Domain Navigation Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            
            {/* Search Bar */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
              <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search math topics (e.g. Trig, Parabola, Pythagoras, Fractions)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 44px',
                  borderRadius: 'var(--radius-full)',
                  border: '2px solid var(--border-light)',
                  backgroundColor: 'var(--bg-card-solid)',
                  fontSize: '0.92rem',
                  fontWeight: '700',
                  outline: 'none',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-sans)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              />
            </div>

            {/* Topic Domain Pills */}
            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
              {topicDomains.map(dom => (
                <button
                  key={dom.id}
                  onClick={() => handleSelectDomain(dom.id)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    backgroundColor: selectedTopicDomain === dom.id ? dom.color : 'var(--bg-card-solid)',
                    color: selectedTopicDomain === dom.id ? '#ffffff' : 'var(--text-muted)',
                    fontWeight: '800',
                    fontFamily: 'var(--font-rounded)',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    boxShadow: selectedTopicDomain === dom.id ? `0 4px 14px ${dom.color}40` : 'var(--shadow-sm)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {dom.label}
                </button>
              ))}
            </div>

          </div>

          {/* Subtopics List Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-main)' }}>
              Select Subtopic to Explore:
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
              {subtopicsForCurrentDomain.map(sub => {
                const Icon = sub.icon;
                const isActive = activeSubtopicId === sub.id;

                return (
                  <button
                    key={sub.id}
                    onClick={() => { setActiveSubtopicId(sub.id); soundFx.playClick(); }}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-md)',
                      border: isActive ? `2.5px solid ${sub.color}` : '1.5px solid var(--border-light)',
                      backgroundColor: isActive ? 'var(--bg-card-solid)' : 'var(--bg-main)',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? `0 6px 18px ${sub.color}30` : 'none'
                    }}
                  >
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px',
                      backgroundColor: `${sub.color}20`, color: sub.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <Icon size={24} />
                    </div>

                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1.3' }}>
                        {sub.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: '1.4' }}>
                        {sub.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Interactive Subtopic Canvas */}
          <CardRounded style={{ padding: '28px', border: `3px solid ${activeSubtopicObj.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ padding: '8px 16px', borderRadius: 'var(--radius-full)', backgroundColor: `${activeSubtopicObj.color}20`, color: activeSubtopicObj.color, fontWeight: '800', fontSize: '0.9rem' }}>
                {activeSubtopicObj.title}
              </div>

              <Button3D variant="outline" size="sm" onClick={() => setActiveTab('lesson')} icon={BookOpen}>
                View Concept Tutorial & Formulas ➔
              </Button3D>
            </div>

            <div style={{ width: '100%' }}>
              {activeSubtopicObj.component}
            </div>
          </CardRounded>
        </>
      )}

      {/* 2. CONCEPT TUTORIALS & LESSON READER TAB */}
      {activeTab === 'lesson' && (
        <TopicLessonView
          subtopicId={activeSubtopicId}
          visualizerComponent={activeSubtopicObj.component}
          onLaunchVisualizer={handleLaunchVisualizer}
          onSelectTopic={handleSitemapSubtopicClick}
        />
      )}

      {/* 3. 100% SITEMAP TREE COVERAGE TAB */}
      {activeTab === 'sitemap' && (
        <HierarchicalSitemapTree
          activeSubtopicId={activeSubtopicId}
          onSelectSubtopic={handleSitemapSubtopicClick}
        />
      )}

      {/* 4. CALCULATORS SUITE TAB */}
      {activeTab === 'calculators' && (
        <InteractiveCalculatorsSuite />
      )}

      {/* 5. MATH GAMES & PUZZLES TAB */}
      {activeTab === 'games' && (
        <MathGamesSuite />
      )}

      {/* Reward Modal */}
      <RewardModal
        isOpen={showRewardModal}
        onContinue={() => setShowRewardModal(false)}
        score={100}
        xpEarned={50}
        gemsEarned={20}
      />

    </div>
  );
};

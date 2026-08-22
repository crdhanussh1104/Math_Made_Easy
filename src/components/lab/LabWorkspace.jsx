import React, { useState } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { GuidedDiscoveryPanel } from './GuidedDiscoveryPanel';
import { FormulaRuleCard } from './FormulaRuleCard';
import { useGame } from '../../context/GameContext';
import { soundFx } from '../../utils/audioSynth';
import { triggerConfetti } from '../../utils/confetti';
import {
  ArrowLeft, RotateCcw, Clock, Sparkles, BookOpen, Layers,
  Compass, CheckCircle2, ShieldCheck, Maximize2, RefreshCw
} from 'lucide-react';

// Tool Registry Dynamic Component Loader
import { CountersGroupingLab } from './tools/CountersGroupingLab';
import { BaseTenBlocksLab } from './tools/BaseTenBlocksLab';
import { NumberLineLab } from './tools/NumberLineLab';
import { ShapeExplorer3DLab } from './tools/ShapeExplorer3DLab';
import { MeasurementBalanceLab } from './tools/MeasurementBalanceLab';
import { PatternSequencesLab } from './tools/PatternSequencesLab';
import { TangramTessellationLab } from './tools/TangramTessellationLab';
import { ClockLab } from './tools/ClockLab';
import { FractionVisualizerLab } from './tools/FractionVisualizerLab';
import { AngleProtractorLab } from './tools/AngleProtractorLab';
import { DataChartsLab } from './tools/DataChartsLab';
import { EquationBalanceLab } from './tools/EquationBalanceLab';
import { AlgebraTilesLab } from './tools/AlgebraTilesLab';
import { MensurationLab } from './tools/MensurationLab';
import { PythagorasLab } from './tools/PythagorasLab';
import { ProbabilityLab } from './tools/ProbabilityLab';
import { CoordinateGridLab } from './tools/CoordinateGridLab';
import { CommercialFinanceLab } from './tools/CommercialFinanceLab';
import { MatrixLab } from './tools/MatrixLab';
import { LociExplorerLab } from './tools/LociExplorerLab';
import { SequenceApGpLab } from './tools/SequenceApGpLab';
import { TrigonometryTableLab } from './tools/TrigonometryTableLab';

const toolComponentsMap = {
  counters: CountersGroupingLab,
  base_ten: BaseTenBlocksLab,
  number_line: NumberLineLab,
  shape_3d: ShapeExplorer3DLab,
  measurement_balance: MeasurementBalanceLab,
  pattern_builder: PatternSequencesLab,
  tangram: TangramTessellationLab,
  clock: ClockLab,
  fractions: FractionVisualizerLab,
  angles_protractor: AngleProtractorLab,
  data_charts: DataChartsLab,
  equation_balance: EquationBalanceLab,
  algebra_tiles: AlgebraTilesLab,
  mensuration: MensurationLab,
  pythagoras: PythagorasLab,
  probability: ProbabilityLab,
  coordinate_grid: CoordinateGridLab,
  trigonometry: TrigonometryTableLab,
  trig_table: TrigonometryTableLab,
  commercial_finance: CommercialFinanceLab,
  matrix: MatrixLab,
  loci: LociExplorerLab,
  ap_gp: SequenceApGpLab
};

export const LabWorkspace = ({ activity, onBack }) => {
  const { gameState, addXP, addGems, completeLesson } = useGame();
  const [resetKey, setResetKey] = useState(0);

  const completedKey = `lab_${activity.id}`;
  const isCompleted = (gameState.completedLessons || []).includes(completedKey);

  const handleReset = () => {
    soundFx.playClick();
    setResetKey(prev => prev + 1);
  };

  const handleCompleteLab = () => {
    soundFx.playCorrect();
    triggerConfetti('levelUp');
    completeLesson(completedKey, 100);
    addXP(50);
    addGems(20);
  };

  const ToolComponent = toolComponentsMap[activity.tool] || CountersGroupingLab;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Top Header Bar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        background: '#ffffff',
        padding: '16px 20px',
        borderRadius: '16px',
        border: '1.5px solid #e2e8f0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Button3D onClick={onBack} variant="outline" size="sm" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={16} /> Back to Labs
          </Button3D>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ background: '#4f46e5', color: '#ffffff', fontSize: '0.75rem', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase' }}>
                Class {activity.classNumber}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '700' }}>
                {activity.theme} • {activity.topic}
              </span>
            </div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1e293b', marginTop: '2px' }}>
              {activity.title}
            </h2>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Button3D onClick={handleReset} variant="secondary" size="sm" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <RotateCcw size={16} /> Reset Lab
          </Button3D>
        </div>
      </div>

      {/* Main Workspace Layout (Desktop Two-Column Grid, Mobile Stacked) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.8fr) minmax(320px, 1.1fr)',
        gap: '20px',
        alignItems: 'start'
      }}>
        {/* Left Interactive Tool Workspace */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Formula & Governing Rule Card */}
          <FormulaRuleCard
            activityId={activity.id}
            classNumber={activity.classNumber}
          />

          {/* Interactive Manipulative Tool Canvas */}
          <CardRounded style={{ padding: '24px', background: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
            <div key={resetKey}>
              <ToolComponent
                config={activity.defaultConfig || {}}
                activityId={activity.id}
                classNumber={activity.classNumber}
              />
            </div>
          </CardRounded>
        </div>

        {/* Right Sidebar: Guided Discovery, Instructions & Questions */}
        <div>
          <GuidedDiscoveryPanel
            activity={activity}
            onCompleteLab={handleCompleteLab}
            isCompleted={isCompleted}
          />
        </div>
      </div>
    </div>
  );
};

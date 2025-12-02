import { useState } from 'react';
import { ArrowUp, ChevronUp, Navigation2, Compass, X } from 'lucide-react';
import { Building, Language, Theme, RoutePreference } from '../App';
import imgMap from "figma:asset/948540a80b08b11c7f9fea140c43d5fe43103d7e.png";
import imgIndoorMap from "figma:asset/46c55aef4864e0dd5a25689ecf3745917d8c6dcb.png";

// ============================================================================
// TYPES & DATA
// ============================================================================

interface Step {
  id: number;
  type: 'walk' | 'stairs' | 'indoor';
  instruction: string;
  instructionCN: string;
  instructionMI: string;
  distance: string;
  direction: 'north' | 'south' | 'east' | 'west' | 'straight';
}

// Sample navigation steps
const steps: Step[] = [
  { id: 1, type: 'walk', instruction: 'Head north on Campus Road', instructionCN: '沿校园路向北前进', instructionMI: 'Haere ki te raki i Campus Road', distance: '150m', direction: 'north' },
  { id: 2, type: 'walk', instruction: 'Turn right at Student Centre', instructionCN: '在学生中心右转', instructionMI: 'Huri ki te matau i te Pokapū Ākonga', distance: '80m', direction: 'east' },
  { id: 3, type: 'stairs', instruction: 'Take stairs to Level 2', instructionCN: '上楼梯至2层', instructionMI: 'Piki i ngā arawhata ki te Taumata 2', distance: '15m', direction: 'straight' },
  { id: 4, type: 'indoor', instruction: 'Walk through M Block corridor', instructionCN: '穿过M座走廊', instructionMI: 'Haere mā te koridor o Whare M', distance: '120m', direction: 'straight' },
  { id: 5, type: 'walk', instruction: 'Exit building and turn left', instructionCN: '离开建筑左转', instructionMI: 'Puta mai i te whare, huri mauī', distance: '85m', direction: 'west' },
];

// ============================================================================
// INTERFACE
// ============================================================================

interface StepNavigationProps {
  language: Language;
  theme: Theme;
  startPoint: Building | null;
  destination: Building | null;
  routePreference: RoutePreference;
  currentStep: number;
  onStepChange: (step: number) => void;
  onBack: () => void;
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function StepNavigation({
  language,
  theme,
  startPoint,
  destination,
  routePreference,
  currentStep,
  onStepChange,
  onBack,
}: StepNavigationProps) {
  const [isPanelExpanded, setIsPanelExpanded] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      onStepChange(currentStep + 1);
    }
  };

  const currentStepData = steps[currentStep];
  
  // Get instruction text based on language
  const getInstruction = (step: Step) => {
    if (language === 'zh') return step.instructionCN;
    if (language === 'mi') return step.instructionMI;
    return step.instruction;
  };

  // Get direction arrow icon
  const getDirectionIcon = () => {
    return <ArrowUp className="size-8 text-white" strokeWidth={3} />;
  };

  // Calculate progress percentage
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="relative w-full h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-[44px] bg-[#353535] dark:bg-gray-950 z-50 flex items-center justify-between px-4">
        <span className="text-white text-sm">10:29</span>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            <div className="w-1 h-3 bg-white rounded-sm" />
            <div className="w-1 h-3 bg-white rounded-sm" />
            <div className="w-1 h-3 bg-white/60 rounded-sm" />
            <div className="w-1 h-3 bg-white/40 rounded-sm" />
          </div>
          <Navigation2 className="size-3 text-white" />
          <span className="text-white text-xs bg-white/20 px-1.5 py-0.5 rounded">96</span>
        </div>
      </div>

      {/* Full Screen Map */}
      <div className="absolute inset-0 w-full h-full">
        <img
          alt="Navigation Map"
          className="w-full h-full object-cover"
          src={currentStepData.type === 'indoor' ? imgIndoorMap : imgMap}
        />
        
        {/* Route Overlay - Blue route line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 393 852">
          <defs>
            <linearGradient id="blueRoute" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#357ABD" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          
          {/* Main route path */}
          <path
            d="M 50 200 Q 100 350, 180 450 T 250 580"
            stroke="url(#blueRoute)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Direction arrow at the end */}
          <g transform={`translate(250, 580) rotate(45)`}>
            <path
              d="M -8 4 L 0 -8 L 8 4 L 0 0 Z"
              fill="#357ABD"
            />
          </g>
          
          {/* Current position indicator (blue triangle pointing direction) */}
          <g transform={`translate(${180 + currentStep * 15}, ${450 + currentStep * 25}) rotate(${currentStep * 10})`}>
            <circle cx="0" cy="0" r="28" fill="white" opacity="0.9" />
            <path
              d="M 0 -12 L 10 10 L 0 6 L -10 10 Z"
              fill="#357ABD"
            />
          </g>
        </svg>
      </div>

      {/* Top Instruction Banner */}
      <div className="absolute top-[60px] left-4 right-4 z-40">
        <div className="bg-gradient-to-r from-[#ff5a5a] to-[#ff4040] rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-4">
          {/* Direction Icon */}
          <div className="flex-shrink-0">
            {getDirectionIcon()}
          </div>
          
          {/* Instruction Text */}
          <div className="flex-1">
            <p className="text-white text-xl font-bold leading-tight">
              {getInstruction(currentStepData)}
            </p>
          </div>
          
          {/* Exit Navigation Button */}
          <button
            onClick={onBack}
            className="flex-shrink-0 p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Exit navigation"
          >
            <X className="size-6 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Recenter Button (bottom left) */}
      <button
        onClick={() => {/* Recenter map logic */}}
        className="absolute bottom-[180px] left-4 z-40 bg-white dark:bg-gray-800 rounded-full shadow-lg p-3 hover:scale-110 transition-transform"
      >
        <div className="flex items-center gap-2">
          <Compass className="size-5 text-[#357ABD]" />
          <span className="text-sm font-semibold text-black dark:text-white pr-1">
            {language === 'en' ? 'Recenter' : language === 'zh' ? '回正' : 'Hoki'}
          </span>
        </div>
      </button>

      {/* Bottom Panel - Swipeable */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-3xl shadow-2xl transition-all duration-300 z-50 ${
          isPanelExpanded ? 'h-[500px]' : 'h-[160px]'
        }`}
      >
        {/* Drag Handle */}
        <button
          onClick={() => setIsPanelExpanded(!isPanelExpanded)}
          className="w-full flex flex-col items-center pt-3 pb-2 cursor-pointer"
        >
          <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mb-2" />
          <ChevronUp className={`size-5 text-gray-400 transition-transform ${isPanelExpanded ? '' : 'rotate-180'}`} />
        </button>

        {/* Panel Content */}
        <div className="px-6 pb-8 overflow-y-auto h-full">
          {!isPanelExpanded ? (
            // Collapsed View - Current step info
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {language === 'en' ? `Step ${currentStep + 1}/${steps.length}` : language === 'zh' ? `第 ${currentStep + 1}/${steps.length} 步` : `Whakaaturanga ${currentStep + 1}/${steps.length}`}
                  </span>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-[#ff5a5a] to-[#ff4040] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Next Step Button */}
              {currentStep < steps.length - 1 && (
                <button
                  onClick={handleNext}
                  className="w-full bg-gradient-to-r from-[#ff5a5a] to-[#ff4040] text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  {language === 'en' ? 'Continue' : language === 'zh' ? '继续' : 'Haere tonu'}
                </button>
              )}
              
              {currentStep === steps.length - 1 && (
                <button
                  onClick={onBack}
                  className="w-full bg-gradient-to-r from-[#ff5a5a] to-[#ff4040] text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  {language === 'en' ? 'Finish Navigation' : language === 'zh' ? '完成导航' : 'Whakaoti i te Whakatere'}
                </button>
              )}
            </div>
          ) : (
            // Expanded View - All steps list
            <div className="pb-6">
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                {language === 'en' ? 'All Directions' : language === 'zh' ? '所有步骤' : 'Ngā Tohutohu Katoa'}
              </h3>
              
              <div className="space-y-3">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`p-4 rounded-xl transition-all ${
                      index === currentStep
                        ? 'bg-gradient-to-r from-[#ff5a5a]/20 to-[#ff4040]/20 border-2 border-[#ff5a5a]'
                        : index < currentStep
                        ? 'bg-red-50 dark:bg-red-900/20 opacity-60'
                        : 'bg-gray-50 dark:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Step number circle */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        index === currentStep
                          ? 'bg-[#ff5a5a] text-white'
                          : index < currentStep
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                      }`}>
                        {index < currentStep ? '✓' : index + 1}
                      </div>
                      
                      {/* Step info */}
                      <div className="flex-1">
                        <p className="font-semibold text-black dark:text-white mb-1">
                          {getInstruction(step)}
                        </p>
                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                          <span>
                            {step.type === 'walk' && (language === 'en' ? 'Walk' : language === 'zh' ? '步行' : 'Haere')}
                            {step.type === 'stairs' && (language === 'en' ? 'Stairs' : language === 'zh' ? '楼梯' : 'Arawhata')}
                            {step.type === 'indoor' && (language === 'en' ? 'Indoor' : language === 'zh' ? '室内' : 'ā-roto')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black dark:bg-white rounded-full z-50" />
    </div>
  );
}
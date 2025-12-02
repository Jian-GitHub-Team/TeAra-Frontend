import { useState } from 'react';
import { ArrowLeft, Search, ArrowUpDown, Navigation, MapPin } from 'lucide-react';
import { Building, Language, Theme, RoutePreference } from '../App';

const buildings: Building[] = [
  { id: 'student-centre', name: 'Student Centre', nameCN: '学生中心', lat: 37.7879, lng: -122.4075 },
  { id: 'm-block', name: 'M Block', nameCN: 'M座', lat: 37.7881, lng: -122.4073, hasIndoorMap: true },
  { id: 'l-block', name: 'L Block', nameCN: 'L座', lat: 37.7877, lng: -122.4079 },
  { id: 's-block', name: 'S Block', nameCN: 'S座', lat: 37.7873, lng: -122.4077 },
  { id: 'a-block', name: 'A Block', nameCN: 'A座', lat: 37.7875, lng: -122.4073 },
  { id: 'g-block', name: 'G Block', nameCN: 'G座', lat: 37.7869, lng: -122.4075, hasIndoorMap: true },
  { id: 'f-block', name: 'F Block', nameCN: 'F座', lat: 37.7867, lng: -122.4071 },
  { id: 'e-block', name: 'E Block', nameCN: 'E座', lat: 37.7865, lng: -122.4069 },
  { id: 'r-block', name: 'R Block', nameCN: 'R座', lat: 37.7863, lng: -122.4077 },
];

interface RouteSettingProps {
  language: Language;
  theme: Theme;
  startPoint: Building | null;
  destination: Building | null;
  routePreference: RoutePreference;
  onBack: () => void;
  onStartPointChange: (building: Building | null) => void;
  onDestinationChange: (building: Building | null) => void;
  onRoutePreferenceChange: (preference: RoutePreference) => void;
  onConfirm: () => void;
}

export default function RouteSetting({
  language,
  theme,
  startPoint,
  destination,
  routePreference,
  onBack,
  onStartPointChange,
  onDestinationChange,
  onRoutePreferenceChange,
  onConfirm,
}: RouteSettingProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeField, setActiveField] = useState<'start' | 'destination' | null>(null);

  const handleSwap = () => {
    const temp = startPoint;
    onStartPointChange(destination);
    onDestinationChange(temp);
  };

  const handleBuildingSelect = (building: Building) => {
    if (activeField === 'start') {
      onStartPointChange(building);
    } else if (activeField === 'destination') {
      onDestinationChange(building);
    }
    setActiveField(null);
    setSearchQuery('');
  };

  const filteredBuildings = buildings.filter((building) => {
    const name = language === 'en' ? building.name : building.nameCN;
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="absolute inset-0 z-50">
      {/* Backdrop 遮罩层 */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={onBack}
      />

      {/* Map Preview - 保留顶部的地图缩略图 */}
      <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none" />

      {/* Bottom Panel - 重新设计的底部面板 */}
      <div className="absolute left-0 bottom-0 w-[393px] bg-white dark:bg-gray-800 rounded-t-[24px] shadow-[0_-4px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_-4px_30px_rgba(0,0,0,0.4)] animate-slide-up">
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-4">
          <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full" />
        </div>

        {/* Header */}
        <div className="px-6 pb-4 flex items-center justify-between relative z-20">
          <button
            onClick={onBack}
            className="p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors relative z-30"
          >
            <ArrowLeft className="size-5 text-black dark:text-white" />
          </button>
          <h2 className="font-['Inter:Bold',sans-serif] text-[18px] text-black dark:text-white">
            {language === 'en' ? 'Plan Route' : '规划路线'}
          </h2>
          <div className="w-9" /> {/* Spacer for alignment */}
        </div>

        {/* Route Inputs Container */}
        <div className="px-6 pb-6">
          <div className="relative bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-4 space-y-3">
            {/* Starting Point */}
            <button
              onClick={() => setActiveField('start')}
              className="w-full flex items-center gap-3 bg-white dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors shadow-sm"
            >
              <div className="flex-shrink-0 w-3 h-3 rounded-full border-2 border-[#ff5a5a] bg-white dark:bg-gray-800" />
              <div className="flex-1 text-left">
                <div className="text-[12px] text-gray-500 dark:text-gray-400 mb-0.5">
                  {language === 'en' ? 'From' : '起点'}
                </div>
                <div className="text-[16px] text-black dark:text-white font-['Inter:Semi_Bold',sans-serif]">
                  {startPoint
                    ? language === 'en'
                      ? startPoint.name
                      : startPoint.nameCN
                    : language === 'en'
                    ? 'Your Location'
                    : '我的位置'}
                </div>
              </div>
            </button>

            {/* Swap Button */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <button
                onClick={handleSwap}
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all border border-gray-200 dark:border-gray-600"
              >
                <ArrowUpDown className="size-4 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Destination */}
            <button
              onClick={() => setActiveField('destination')}
              className="w-full flex items-center gap-3 bg-white dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors shadow-sm"
            >
              <MapPin className="flex-shrink-0 size-5 text-[#FF5A5A]" fill="#FF5A5A" />
              <div className="flex-1 text-left">
                <div className="text-[12px] text-gray-500 dark:text-gray-400 mb-0.5">
                  {language === 'en' ? 'To' : '终点'}
                </div>
                <div className="text-[16px] text-black dark:text-white font-['Inter:Semi_Bold',sans-serif]">
                  {destination
                    ? language === 'en'
                      ? destination.name
                      : destination.nameCN
                    : language === 'en'
                    ? 'Choose destination'
                    : '选择目的地'}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Start Button - 当选择了目的地后显示 */}
        {!activeField && destination && (
          <div className="px-6 pb-8">
            <button
              onClick={onConfirm}
              className="w-full flex items-center justify-center gap-2 bg-[#FF5A5A] hover:bg-[#ff4040] text-white py-4 rounded-full transition-all shadow-lg hover:shadow-xl font-['Inter:Semi_Bold',sans-serif]"
            >
              <Navigation className="size-5" />
              <span className="text-[16px]">{language === 'en' ? 'Start Navigation' : '开始导航'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Search Results Panel - 当点击输入框时显示 */}
      {activeField && (
        <div className="absolute left-0 bottom-0 w-[393px] h-[500px] bg-white dark:bg-gray-800 rounded-t-[24px] shadow-2xl z-60 animate-slide-up">
          <div className="flex justify-center pt-3 pb-4">
            <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full" />
          </div>
          
          <div className="px-6">
            {/* Search Header */}
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() => setActiveField(null)}
                className="p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <ArrowLeft className="size-5 text-black dark:text-white" />
              </button>
              <h3 className="text-[16px] text-black dark:text-white font-['Inter:Semi_Bold',sans-serif]">
                {activeField === 'start'
                  ? language === 'en' ? 'Choose starting point' : '选择起点'
                  : language === 'en' ? 'Choose destination' : '选择目的地'}
              </h3>
            </div>

            {/* Search Input */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'en' ? 'Search buildings...' : '搜索建筑...'}
                className="w-full pl-12 pr-4 py-3.5 bg-gray-100 dark:bg-gray-700 rounded-xl text-black dark:text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#FF5A5A] transition-all"
                autoFocus
              />
            </div>

            {/* Building List */}
            <div className="space-y-1 max-h-[320px] overflow-y-auto">
              {filteredBuildings.map((building) => (
                <button
                  key={building.id}
                  onClick={() => handleBuildingSelect(building)}
                  className="w-full text-left p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="size-5 text-gray-400 group-hover:text-[#FF5A5A] transition-colors" />
                    <div>
                      <div className="text-[15px] text-black dark:text-white font-['Inter:Medium',sans-serif]">
                        {language === 'en' ? building.name : building.nameCN}
                      </div>
                      {building.hasIndoorMap && (
                        <div className="text-[12px] text-gray-500 dark:text-gray-400 mt-0.5">
                          {language === 'en' ? 'Indoor map available' : '有室内地图'}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
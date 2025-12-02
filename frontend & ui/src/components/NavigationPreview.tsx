import { ArrowLeft, Navigation, Clock, Footprints } from 'lucide-react';
import { Building, Language, Theme, RoutePreference } from '../App';
import imgMap from "figma:asset/948540a80b08b11c7f9fea140c43d5fe43103d7e.png";

interface NavigationPreviewProps {
  language: Language;
  theme: Theme;
  startPoint: Building | null;
  destination: Building | null;
  routePreference: RoutePreference;
  onBack: () => void;
  onStart: () => void;
}

export default function NavigationPreview({
  language,
  theme,
  startPoint,
  destination,
  routePreference,
  onBack,
  onStart,
}: NavigationPreviewProps) {
  const distance = '450m';
  const duration = '6 min';
  const steps = 10;

  return (
    <div className="relative w-full h-screen bg-white dark:bg-gray-900">
      {/* Status Bar */}
      <div className="bg-[#353535] dark:bg-gray-950 h-[44px]" />

      {/* Header */}
      <div className="absolute top-[44px] left-0 right-0 z-20 flex items-center justify-between px-4 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative z-10">
          <ArrowLeft className="size-6 text-black dark:text-white" />
        </button>
        <h1 className="text-black dark:text-white">
          {language === 'en' ? 'Route Preview' : '路线预览'}
        </h1>
        <div className="w-10" />
      </div>

      {/* Map with Route */}
      <div className="relative h-[calc(100%-44px)] w-full">
        <img
          alt="Map"
          className="w-full h-full object-cover"
          src={imgMap}
        />

        {/* Blue Route Overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 393 852">
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1973E8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4285F4" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M 130 400 Q 180 450, 220 480 T 260 550"
            stroke="url(#routeGradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Start marker */}
          <circle cx="130" cy="400" r="10" fill="#34A853" stroke="white" strokeWidth="3" />
          {/* End marker */}
          <circle cx="260" cy="550" r="10" fill="#EA4335" stroke="white" strokeWidth="3" />
        </svg>

        {/* Route Info Card */}
        <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-3xl shadow-2xl p-6">
          {/* Drag Handle */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
          </div>

          {/* Route Details */}
          <div className="mb-6">
            <div className="space-y-3">
              {/* From */}
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-black dark:text-white">
                  {startPoint
                    ? language === 'en'
                      ? startPoint.name
                      : startPoint.nameCN
                    : language === 'en'
                    ? 'My Location'
                    : '我的位置'}
                </span>
              </div>

              {/* To */}
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-black dark:text-white">
                  {destination
                    ? language === 'en'
                      ? destination.name
                      : destination.nameCN
                    : ''}
                </span>
              </div>
            </div>
          </div>

          {/* Preferences Display */}
          {(routePreference.avoidStairs || routePreference.indoorNavigation) && (
            <div className="mb-4 flex gap-2 flex-wrap">
              {routePreference.avoidStairs && (
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-[#ff5a5a] dark:text-red-400 rounded-full text-sm">
                  {language === 'en' ? 'No Stairs' : '无楼梯'}
                </span>
              )}
              {routePreference.indoorNavigation && (
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-[#ff5a5a] dark:text-red-400 rounded-full text-sm">
                  {language === 'en' ? 'Indoor Route' : '室内路线'}
                </span>
              )}
            </div>
          )}

          {/* Start Navigation Button */}
          <button
            onClick={onStart}
            className="w-full flex items-center justify-center gap-2 bg-[#ff5a5a] hover:bg-[#ff4040] text-white py-4 rounded-full transition-colors shadow-lg"
          >
            <Navigation className="size-5" />
            <span className="font-['Inter:Semi_Bold',sans-serif]">{language === 'en' ? 'Start Navigation' : '开始导航'}</span>
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-0 h-[34px] left-0 w-full pointer-events-none">
        <div className="absolute bg-black dark:bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
      </div>
    </div>
  );
}
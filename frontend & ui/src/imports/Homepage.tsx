import svgPaths from "./svg-vyj7vz77k0";
import imgMap from "figma:asset/948540a80b08b11c7f9fea140c43d5fe43103d7e.png";
import { imgGroup } from "./svg-vz0t5";
import { Search, Plus, Minus, Menu as MenuIcon, ChevronRight, Route, Clock } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomepageProps {
  onMenuClick?: () => void;
  onBuildingClick?: (buildingId: string) => void;
  onFloatingButtonClick?: () => void;
}

function Notch() {
  return (
    <div className="absolute h-[31px] left-[calc(50%+0.5px)] top-[-2px] translate-x-[-50%] w-[164px]" data-name="Notch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164 31">
        <g id="Notch">
          <g id="Notch_2"></g>
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[27.34px] top-[17.33px] w-[66.661px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p18c81cf0} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3d3cbf00} fill="var(--fill-0, white)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p3cceaf80} fill="var(--fill-0, white)" id="Rectangle_2" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p1d7c8600} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
          <path clipRule="evenodd" d={svgPaths.p3e2de00} fill="var(--fill-0, white)" fillRule="evenodd" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[21px] left-[24px] rounded-[24px] top-[12px] w-[54px]" data-name="_Time">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[20px] leading-[20px] left-[27px] not-italic text-[15px] text-center text-white top-px tracking-[-0.5px] translate-x-[-50%] w-[54px]">9:41</p>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[24px] top-[12px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function StatusBarIPhone1313Pro() {
  return (
    <div className="bg-[#353535] h-[44px] overflow-clip pointer-events-auto sticky top-0 w-[393px]" data-name="Status Bar / iPhone 13 & 13 Pro">
      <Notch />
      <RightSide />
      <LeftSide />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.001px_0px] mask-size-[97.38px_29.33px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98 30">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p34b9a900} fill="var(--fill-0, #FFA400)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p140d5400} fill="var(--fill-0, #231F20)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p3b84c200} fill="var(--fill-0, #231F20)" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p1f622380} fill="var(--fill-0, #231F20)" id="Vector_4" />
          <path d={svgPaths.pb88bd00} fill="var(--fill-0, #231F20)" id="Vector_5" />
          <path d={svgPaths.p1b120e00} fill="var(--fill-0, #231F20)" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p10070680} fill="var(--fill-0, #231F20)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p36958780} fill="var(--fill-0, #231F20)" fillRule="evenodd" id="Vector_8" />
          <path d={svgPaths.p394b1740} fill="var(--fill-0, #231F20)" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p23c71200} fill="var(--fill-0, #231F20)" fillRule="evenodd" id="Vector_10" />
          <path d={svgPaths.pb99c600} fill="var(--fill-0, #231F20)" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p5943200} fill="var(--fill-0, #231F20)" fillRule="evenodd" id="Vector_12" />
          <path d={svgPaths.p11a93b00} fill="var(--fill-0, #231F20)" id="Vector_13" />
          <path d={svgPaths.p17408d10} fill="var(--fill-0, #FFA400)" id="Vector_14" />
          <path d={svgPaths.p2f766f20} fill="var(--fill-0, #231F20)" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.pf577500} fill="var(--fill-0, #231F20)" fillRule="evenodd" id="Vector_16" />
          <path d={svgPaths.p23038100} fill="var(--fill-0, #E1251B)" id="Vector_17" />
          <path d={svgPaths.p2d711f80} fill="var(--fill-0, #E1251B)" id="Vector_18" />
          <path d={svgPaths.p2f65f80} fill="var(--fill-0, #E1251B)" id="Vector_19" />
          <path d={svgPaths.p18fbc3a0} fill="var(--fill-0, #E1251B)" id="Vector_20" />
          <path d={svgPaths.p15d11180} fill="var(--fill-0, #E1251B)" id="Vector_21" />
          <path d={svgPaths.p553b4f0} fill="var(--fill-0, #E1251B)" id="Vector_22" />
          <path d={svgPaths.p2cf69600} fill="var(--fill-0, #E1251B)" id="Vector_23" />
          <path d={svgPaths.p8c2ee00} fill="var(--fill-0, #E1251B)" id="Vector_24" />
          <path d={svgPaths.p3fada300} fill="var(--fill-0, #E1251B)" id="Vector_25" />
          <path d={svgPaths.p17647b00} fill="var(--fill-0, #E1251B)" id="Vector_26" />
          <path d={svgPaths.p19ded6f0} fill="var(--fill-0, #E1251B)" id="Vector_27" />
          <path d={svgPaths.p32d36200} fill="var(--fill-0, #E1251B)" id="Vector_28" />
          <path d={svgPaths.p18933680} fill="var(--fill-0, #E1251B)" id="Vector_29" />
          <path clipRule="evenodd" d={svgPaths.p17ffd00} fill="var(--fill-0, #FFA400)" fillRule="evenodd" id="Vector_30" />
          <path clipRule="evenodd" d={svgPaths.p31290c00} fill="var(--fill-0, #FFA400)" fillRule="evenodd" id="Vector_31" />
          <path d={svgPaths.p159c3b00} fill="var(--fill-0, #E1251B)" id="Vector_32" />
          <path d={svgPaths.p3b701680} fill="var(--fill-0, #231F20)" id="Vector_33" />
          <path clipRule="evenodd" d={svgPaths.p12ef9d00} fill="var(--fill-0, #FFA400)" fillRule="evenodd" id="Vector_34" />
          <path clipRule="evenodd" d={svgPaths.p27c21c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_35" />
          <path clipRule="evenodd" d={svgPaths.p12d4e00} fill="var(--fill-0, #231F20)" fillRule="evenodd" id="Vector_36" />
          <path d={svgPaths.p29fe9870} fill="var(--fill-0, black)" id="Vector_37" />
          <path d={svgPaths.p4c9e6c0} fill="var(--fill-0, black)" id="Vector_38" />
          <path d={svgPaths.p9f80700} fill="var(--fill-0, black)" id="Vector_39" />
          <path d={svgPaths.p1a01ab00} fill="var(--fill-0, black)" id="Vector_40" />
          <path d={svgPaths.p275928f0} fill="var(--fill-0, black)" id="Vector_41" />
          <path d={svgPaths.p299f4580} fill="var(--fill-0, black)" id="Vector_42" />
          <path d={svgPaths.p5323500} fill="var(--fill-0, black)" id="Vector_43" />
          <path d={svgPaths.p1a327380} fill="var(--fill-0, black)" id="Vector_44" />
          <path clipRule="evenodd" d={svgPaths.p27657b00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_45" />
          <path d={svgPaths.p17ebad00} fill="var(--fill-0, black)" id="Vector_46" />
          <path d={svgPaths.pa328000} fill="var(--fill-0, black)" id="Vector_47" />
          <path d={svgPaths.p6ca5540} fill="var(--fill-0, black)" id="Vector_48" />
          <path d={svgPaths.p3d5d7ff0} fill="var(--fill-0, black)" id="Vector_49" />
          <path clipRule="evenodd" d={svgPaths.p2158700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_50" />
          <path d={svgPaths.p107ba0f0} fill="var(--fill-0, black)" id="Vector_51" />
          <path clipRule="evenodd" d={svgPaths.p3805a680} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_52" />
          <path d={svgPaths.p355ee600} fill="var(--fill-0, #E1251B)" id="Vector_53" />
          <path clipRule="evenodd" d={svgPaths.p2e8f7f00} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_54" />
          <path clipRule="evenodd" d={svgPaths.p1cfb4600} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_55" />
          <path d={svgPaths.p3f41e50} fill="var(--fill-0, #E1251B)" id="Vector_56" />
          <path clipRule="evenodd" d={svgPaths.p1b822100} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_57" />
          <path d={svgPaths.p1a47a800} fill="var(--fill-0, #E1251B)" id="Vector_58" />
          <path clipRule="evenodd" d={svgPaths.p167b4500} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_59" />
          <path d={svgPaths.p38cb7d80} fill="var(--fill-0, #E1251B)" id="Vector_60" />
          <path clipRule="evenodd" d={svgPaths.p2ae2c00} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_61" />
          <path d={svgPaths.p15306f00} fill="var(--fill-0, #E1251B)" id="Vector_62" />
          <path clipRule="evenodd" d={svgPaths.p20d4d600} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_63" />
          <path clipRule="evenodd" d={svgPaths.p3bb86200} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_64" />
          <path d={svgPaths.p35cdb80} fill="var(--fill-0, #E1251B)" id="Vector_65" />
          <path clipRule="evenodd" d={svgPaths.p153ee700} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_66" />
          <path clipRule="evenodd" d={svgPaths.p7533900} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_67" />
          <path clipRule="evenodd" d={svgPaths.p1f17cc80} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_68" />
          <path clipRule="evenodd" d={svgPaths.p16884600} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_69" />
          <path d={svgPaths.p1fb3af00} fill="var(--fill-0, #E1251B)" id="Vector_70" />
          <path clipRule="evenodd" d={svgPaths.p25785b00} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_71" />
          <path d={svgPaths.p2830cef0} fill="var(--fill-0, #E1251B)" id="Vector_72" />
          <path clipRule="evenodd" d={svgPaths.p148b19e0} fill="var(--fill-0, #E1251B)" fillRule="evenodd" id="Vector_73" />
          <path d={svgPaths.p284254f0} fill="var(--fill-0, #E1251B)" id="Vector_74" />
          <path clipRule="evenodd" d={svgPaths.p2a588e80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_75" />
          <path clipRule="evenodd" d={svgPaths.p29fa0880} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_76" />
          <path clipRule="evenodd" d={svgPaths.p3321b100} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_77" />
          <path clipRule="evenodd" d={svgPaths.p2006f000} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_78" />
          <path d={svgPaths.p3d2dbf00} fill="var(--fill-0, black)" id="Vector_79" />
          <path d={svgPaths.p2287e880} fill="var(--fill-0, black)" id="Vector_80" />
          <path d={svgPaths.p14af9a80} fill="var(--fill-0, black)" id="Vector_81" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[29.33px] relative shrink-0 w-[97.38px]" data-name="Component 3">
      <Group />
    </div>
  );
}

function Location() {
  return (
    <div className="h-[79px] relative w-[69px]" data-name="location">
      <div className="absolute bottom-[-0.38%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 80">
          <g>
            <path d={svgPaths.p361f1200} fill="url(#paint0_linear_1_668)" id="Vector 2" />
            <circle cx="35" cy="51" fill="var(--fill-0, #255AFF)" fillOpacity="0.1" r="28.15" stroke="var(--stroke-0, #95BCE1)" strokeWidth="0.3" />
            <circle cx="35" cy="51" fill="var(--fill-0, #255AFF)" id="point" r="8" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_668" x1="35" x2="35" y1="2" y2="50">
              <stop stopColor="#255AFF" stopOpacity="0" />
              <stop offset="1" stopColor="#255AFF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="absolute bottom-0 h-[34px] left-0 w-[390px]" data-name="Home Indicator/Light">
      <div className="absolute bg-black dark:bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

export default function Homepage({ onMenuClick, onBuildingClick, onFloatingButtonClick }: HomepageProps) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCampusPanel, setShowCampusPanel] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState('hamilton');
  const [showRecentSearch, setShowRecentSearch] = useState(false);

  const recentSearches = [
    { id: '1', name: 'M Block', type: 'Building' },
    { id: '2', name: 'Student Centre', type: 'Building' },
    { id: '3', name: 'Library', type: 'Building' },
  ];

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.6));
  };

  return (
    <div className="bg-white dark:bg-gray-900 relative size-full" data-name="Homepage">
      <div className="absolute bg-white dark:bg-gray-900 h-[852px] left-0 top-0 w-[393px]" data-name="background" />
      
      {/* Status Bar */}
      <div className="absolute bottom-0 h-[852px] left-0 pointer-events-none top-0">
        <StatusBarIPhone1313Pro />
      </div>
      
      {/* White background for Title and Search */}
      <div className="absolute bg-white dark:bg-gray-900 h-[96px] left-0 top-[48px] w-[390px]" />
      
      {/* Map */}
      <div className="absolute h-[731px] left-0 rounded-tl-[20px] rounded-tr-[20px] top-[121px] w-[393px]" data-name="map">
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[20px] rounded-tr-[20px] size-full transition-transform duration-200" 
          src={imgMap}
          style={{ transform: `scale(${zoomLevel})` }}
        />
      </div>
      
      {/* Building Markers */}
      <button onClick={() => onBuildingClick?.('m-block')} className="absolute left-[calc(33.33%+28px)] size-[24px] top-[254px] cursor-pointer hover:scale-110 transition-transform z-10">
        <div className="absolute inset-[-16.67%_-50%_-83.33%_-50%] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <g filter="url(#filter0_d_1_767)">
              <rect fill="#ff5a5a" height="24" rx="12" width="24" x="12" y="4" />
              <path d={svgPaths.p3da400} fill="white" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_1_767" width="48" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_767" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_767" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </button>
      
      <button onClick={() => onBuildingClick?.('g-block')} className="absolute left-[calc(66.67%-9px)] size-[24px] top-[609px] cursor-pointer hover:scale-110 transition-transform z-10">
        <div className="absolute inset-[-16.67%_-50%_-83.33%_-50%] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <g filter="url(#filter0_d_1_767)">
              <rect fill="#ff5a5a" height="24" rx="12" width="24" x="12" y="4" />
              <path d={svgPaths.p3da400} fill="white" />
            </g>
          </svg>
        </div>
      </button>
      
      <button onClick={() => onBuildingClick?.('s-block')} className="absolute left-[calc(33.33%+40px)] size-[24px] top-[559px] cursor-pointer hover:scale-110 transition-transform z-10">
        <div className="absolute inset-[-16.67%_-50%_-83.33%_-50%] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <g filter="url(#filter0_d_1_767)">
              <rect fill="#ff5a5a" height="24" rx="12" width="24" x="12" y="4" />
              <path d={svgPaths.p3da400} fill="white" />
            </g>
          </svg>
        </div>
      </button>
      
      <button onClick={() => onBuildingClick?.('a-block')} className="absolute left-[calc(16.67%+11.5px)] size-[24px] top-[463px] cursor-pointer hover:scale-110 transition-transform z-10">
        <div className="absolute inset-[-16.67%_-50%_-83.33%_-50%] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <g filter="url(#filter0_d_1_767)">
              <rect fill="#ff5a5a" height="24" rx="12" width="24" x="12" y="4" />
              <path d={svgPaths.p3da400} fill="white" />
            </g>
          </svg>
        </div>
      </button>
      
      <button onClick={() => onBuildingClick?.('l-block')} className="absolute left-[calc(66.67%-3px)] size-[24px] top-[402px] cursor-pointer hover:scale-110 transition-transform z-10">
        <div className="absolute inset-[-16.67%_-50%_-83.33%_-50%] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <g filter="url(#filter0_d_1_767)">
              <rect fill="#ff5a5a" height="24" rx="12" width="24" x="12" y="4" />
              <path d={svgPaths.p3da400} fill="white" />
            </g>
          </svg>
        </div>
      </button>
      
      <button onClick={() => onBuildingClick?.('student-centre')} className="absolute left-[calc(33.33%+15px)] size-[24px] top-[644px] cursor-pointer hover:scale-110 transition-transform z-10">
        <div className="absolute inset-[-16.67%_-50%_-83.33%_-50%] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <g filter="url(#filter0_d_1_656)">
              <rect fill="#ff5a5a" height="24" rx="12" width="24" x="12" y="4" />
              <path d={svgPaths.p3da400} fill="white" />
            </g>
          </svg>
        </div>
      </button>
      
      {/* Floating Route Button */}
      <button onClick={onFloatingButtonClick} className="absolute bg-gradient-to-br from-[#ff5a5a] to-[#ff4040] box-border content-stretch flex gap-[4px] items-center justify-center left-[calc(83.33%-6.5px)] p-[8px] rounded-[100px] shadow-[0px_8px_12px_0px_rgba(0,0,0,0.3)] size-[56px] top-[759px] cursor-pointer hover:scale-105 hover:shadow-[0px_8px_16px_0px_rgba(255,90,90,0.4)] transition-all z-10">
        <Route className="size-7 text-white" strokeWidth={2} />
      </button>
      
      {/* Current Location */}
      <div className="absolute flex h-[84.713px] items-center justify-center left-[calc(33.33%+52px)] top-[384px] w-[75.623px] z-10" style={{ "--transform-inner-width": "69", "--transform-inner-height": "79" } as React.CSSProperties}>
        <div className="flex-none rotate-[355deg]">
          <Location />
        </div>
      </div>
      
      {/* Search Input */}
      <div className="absolute bg-white dark:bg-gray-800 box-border content-stretch flex gap-[8px] items-center left-[16px] px-[12px] py-[8px] rounded-[100px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] top-[144px] w-[361px] z-20">
        <Search className="size-6 text-[#2B2B2B] dark:text-white" strokeWidth={2} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowRecentSearch(true)}
          placeholder="Search"
          className="flex-1 outline-none bg-transparent font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-black dark:text-white placeholder:text-[#cccccc] dark:placeholder:text-gray-500"
        />
      </div>
      
      {/* Recent Search Panel */}
      {showRecentSearch && (
        <div className="absolute bg-white dark:bg-gray-800 box-border flex flex-col left-[16px] overflow-hidden rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] top-[192px] w-[361px] z-30">
          <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Clock className="size-5 text-gray-500 dark:text-gray-400" strokeWidth={2} />
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-gray-500 dark:text-gray-400">Recent</p>
            </div>
            <button onClick={() => setShowRecentSearch(false)} className="text-[#ff5a5a] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] hover:opacity-80 transition-opacity">
              Clear
            </button>
          </div>
          <div className="flex flex-col">
            {recentSearches.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSearchQuery(item.name);
                  setShowRecentSearch(false);
                  onBuildingClick?.(item.id);
                }}
                className="flex items-center justify-between px-[16px] py-[12px] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-black dark:text-white">{item.name}</p>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-gray-500 dark:text-gray-400">{item.type}</p>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Overlay to close recent search */}
      {showRecentSearch && (
        <div onClick={() => setShowRecentSearch(false)} className="absolute inset-0 z-[25]" />
      )}
      
      {/* Title Bar */}
      <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[16px] py-[24px] top-[44px] w-[393px] z-20">
        <button onClick={onMenuClick} className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[29.33px] cursor-pointer hover:opacity-80 transition-opacity">
          <MenuIcon className="size-6 text-black dark:text-white" strokeWidth={2} />
        </button>
        
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[316px]">
          <Component />
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[20px] text-black dark:text-white text-nowrap whitespace-pre">Campus Map</p>
        </div>
        
        <button onClick={() => setShowCampusPanel(!showCampusPanel)} className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-80 transition-opacity">
          <ChevronRight className="size-6 text-black dark:text-white" strokeWidth={2} />
        </button>
        
        {/* Campus Panel */}
        {showCampusPanel && (
          <div className="absolute bg-[#f6f6f6] dark:bg-gray-800 box-border content-stretch flex flex-col gap-[7px] items-start left-[calc(50%+36.5px)] overflow-clip px-[16px] py-[4px] rounded-[20px] top-[56px] w-[128px] z-30">
            <button onClick={() => { setSelectedCampus('hamilton'); setShowCampusPanel(false); }} className="w-full text-left">
              <p className={`font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic text-[20px] ${selectedCampus === 'hamilton' ? 'text-[#ff5a5a]' : 'text-[rgba(0,0,0,0.6)] dark:text-gray-400 opacity-60'}`}>Hamilton</p>
            </button>
            <button onClick={() => { setSelectedCampus('tauranga'); setShowCampusPanel(false); }} className="w-full text-left">
              <p className={`font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic text-[20px] ${selectedCampus === 'tauranga' ? 'text-[#ff5a5a]' : 'text-[rgba(0,0,0,0.6)] dark:text-gray-400 opacity-60'}`}>Tauranga</p>
            </button>
          </div>
        )}
      </div>
      
      {/* Zoom Controls */}
      <div className="absolute bottom-[35px] left-[16px] h-[81px] w-[40px] z-20">
        <div className="bg-white dark:bg-gray-800 rounded-[14px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] h-full w-full flex flex-col items-center justify-between py-2">
          <button onClick={handleZoomIn} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Plus className="size-5 text-black dark:text-white" strokeWidth={2} />
          </button>
          <div className="h-px w-[28.5714px] bg-[#E6E6E6] dark:bg-gray-600" />
          <button onClick={handleZoomOut} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Minus className="size-5 text-black dark:text-white" strokeWidth={2} />
          </button>
        </div>
      </div>
      
      <HomeIndicatorLight />
    </div>
  );
}
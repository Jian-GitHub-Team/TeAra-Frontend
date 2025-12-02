import { useState } from 'react';
import Homepage from './imports/Homepage';
import MenuSidebar from './components/MenuSidebar';
import BuildingInfoPanel from './components/BuildingInfoPanel';
import RouteSetting from './components/RouteSetting';
import NavigationPreview from './components/NavigationPreview';
import StepNavigation from './components/StepNavigation';
import IndoorMap from './components/IndoorMap';

// ============================================================================
// TYPE DEFINITIONS.
// ============================================================================

export type Language = 'en' | 'zh' | 'mi';
export type Theme = 'light' | 'dark';
export type Page = 'home' | 'routeSetting' | 'navigationPreview' | 'stepNavigation' | 'indoorMap';

export interface Building {
  id: string;
  name: string;
  nameCN: string;
  lat: number;
  lng: number;
  hasIndoorMap?: boolean;
}

export interface RoutePreference {
  avoidStairs: boolean;
  indoorNavigation: boolean;
}

// ============================================================================
// DATA
// ============================================================================

const buildings: Building[] = [
  { id: 'student-centre', name: 'Student Centre', nameCN: '学生中心', lat: 37.7879, lng: -122.4075 },
  { id: 'm-block', name: 'M Block', nameCN: 'M座', lat: 37.7881, lng: -122.4073, hasIndoorMap: true },
  { id: 'l-block', name: 'L Block', nameCN: 'L座', lat: 37.7877, lng: -122.4079 },
  { id: 's-block', name: 'S Block', nameCN: 'S座', lat: 37.7873, lng: -122.4077 },
  { id: 'a-block', name: 'A Block', nameCN: 'A座', lat: 37.7875, lng: -122.4073 },
  { id: 'g-block', name: 'G Block', nameCN: 'G座', lat: 37.7869, lng: -122.4075, hasIndoorMap: true },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function App() {
  // Page navigation state
  const [currentPage, setCurrentPage] = useState<Page>('home');
  
  // Global settings
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('light');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Building and route state
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);
  const [startPoint, setStartPoint] = useState<Building | null>(null);
  const [destination, setDestination] = useState<Building | null>(null);
  const [routePreference, setRoutePreference] = useState<RoutePreference>({
    avoidStairs: false,
    indoorNavigation: false,
  });
  
  // Navigation step tracking
  const [currentStep, setCurrentStep] = useState(0);

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================

  /**
   * Handle building icon click on map
   * Shows the building info panel
   */
  const handleBuildingClick = (buildingId: string) => {
    const building = buildings.find(b => b.id === buildingId);
    if (building) {
      setSelectedBuilding(building);
    }
  };

  /**
   * Start route setting from floating button
   */
  const handleStartRoute = () => {
    setCurrentPage('routeSetting');
  };

  /**
   * Start route setting from building info panel
   * Sets the destination as the selected building
   * Sets the start point as the first building in the list (default)
   * Closes the building panel
   * Directly goes to navigation preview
   */
  const handleStartRouteFromBuilding = (building: Building) => {
    // Set destination as the selected building
    setDestination(building);
    // Set start point as current location (first building as default)
    setStartPoint(buildings[0]);
    // Close the building panel
    setSelectedBuilding(null);
    // Go directly to navigation preview
    setCurrentPage('navigationPreview');
  };

  /**
   * Confirm route settings and go to navigation preview
   */
  const handleConfirmRoute = () => {
    setCurrentPage('navigationPreview');
  };

  /**
   * Start navigation from preview
   * Resets step counter
   * Switches to step navigation page
   */
  const handleStartNavigation = () => {
    setCurrentStep(0);
    setCurrentPage('stepNavigation');
  };

  /**
   * Open indoor map for a selected building
   * Switches to indoor map page
   */
  const handleOpenIndoorMap = (building: Building) => {
    setSelectedBuilding(building);
    setCurrentPage('indoorMap');
  };

  /**
   * Go back to home page
   * Clears selected building
   */
  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedBuilding(null);
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-gray-900 transition-colors">
        <div className="relative w-full max-w-[393px] h-full max-h-[852px] mx-auto bg-white dark:bg-gray-900 transition-colors">
          {(currentPage === 'home' || currentPage === 'routeSetting' || menuOpen) && (
            <>
              <Homepage 
                onMenuClick={() => setMenuOpen(true)}
                onBuildingClick={handleBuildingClick}
                onFloatingButtonClick={handleStartRoute}
              />
              {selectedBuilding && currentPage === 'home' && !menuOpen && (
                <BuildingInfoPanel
                  building={selectedBuilding}
                  language={language}
                  theme={theme}
                  routePreference={routePreference}
                  onClose={() => setSelectedBuilding(null)}
                  onStartRoute={() => handleStartRouteFromBuilding(selectedBuilding)}
                  onOpenIndoorMap={() => handleOpenIndoorMap(selectedBuilding)}
                  onRoutePreferenceChange={setRoutePreference}
                />
              )}
            </>
          )}

          {currentPage === 'routeSetting' && (
            <RouteSetting
              language={language}
              theme={theme}
              startPoint={startPoint}
              destination={destination}
              routePreference={routePreference}
              onBack={handleBackToHome}
              onStartPointChange={setStartPoint}
              onDestinationChange={setDestination}
              onRoutePreferenceChange={setRoutePreference}
              onConfirm={handleConfirmRoute}
            />
          )}

          {currentPage === 'navigationPreview' && (
            <NavigationPreview
              language={language}
              theme={theme}
              startPoint={startPoint}
              destination={destination}
              routePreference={routePreference}
              onBack={() => setCurrentPage('routeSetting')}
              onStart={handleStartNavigation}
            />
          )}

          {currentPage === 'stepNavigation' && (
            <StepNavigation
              language={language}
              theme={theme}
              startPoint={startPoint}
              destination={destination}
              routePreference={routePreference}
              currentStep={currentStep}
              onStepChange={setCurrentStep}
              onBack={handleBackToHome}
            />
          )}

          {currentPage === 'indoorMap' && (
            <IndoorMap
              language={language}
              theme={theme}
              building={selectedBuilding}
              onBack={handleBackToHome}
            />
          )}

          {menuOpen && (
            <MenuSidebar
              language={language}
              theme={theme}
              onClose={() => setMenuOpen(false)}
              onLanguageChange={() => {
                setLanguage(
                  language === 'en' ? 'zh' : language === 'zh' ? 'mi' : 'en'
                );
              }}
              onThemeChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
          )}
        </div>
      </div>
    </div>
  );
}
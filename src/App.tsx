import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { OwnerDashboard } from './components/OwnerDashboard';
import { DogCalculator } from './components/DogCalculator';
import { RecipeCatalog } from './components/RecipeCatalog';
import { FoodChecker } from './components/FoodChecker';
import { TransitionPlanner } from './components/TransitionPlanner';
import { GuideReader } from './components/GuideReader';
import { AiNutriAssistant } from './components/AiNutriAssistant';
import { ShoppingList } from './components/ShoppingList';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans antialiased flex flex-col selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'home' && <HeroBanner />}
        {activeTab === 'dashboard' && <OwnerDashboard />}
        {activeTab === 'calculator' && <DogCalculator />}
        {activeTab === 'recipes' && <RecipeCatalog />}
        {activeTab === 'foods' && <FoodChecker />}
        {activeTab === 'transition' && <TransitionPlanner />}
        {activeTab === 'guide' && <GuideReader />}
        {activeTab === 'ai' && <AiNutriAssistant />}
        {activeTab === 'shopping' && <ShoppingList />}
      </main>

      <Footer />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;

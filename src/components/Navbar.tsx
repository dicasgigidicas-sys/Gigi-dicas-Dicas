import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Dog,
  Calculator,
  UtensilsCrossed,
  ShieldAlert,
  CalendarDays,
  BookOpen,
  Bot,
  Heart,
  Globe,
  Sparkles,
  ShoppingCart,
  User
} from 'lucide-react';
import { TabType } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage, activeTab, setActiveTab, dogProfile, favorites, shoppingList } = useApp();

  const isPt = language === 'pt';
  const pendingShoppingCount = shoppingList.filter((item) => !item.checked).length;

  interface NavItem {
    id: TabType;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: number;
    highlight?: boolean;
  }

  const navItems: NavItem[] = [
    { id: 'home', label: isPt ? 'Início' : 'Home', icon: Dog },
    { id: 'dashboard', label: isPt ? 'Meu Pet' : 'Dashboard', icon: User },
    { id: 'calculator', label: isPt ? 'Calculadora' : 'Calculator', icon: Calculator },
    { id: 'recipes', label: isPt ? 'Receitas (50+)' : 'Recipes (50+)', icon: UtensilsCrossed, badge: favorites.length > 0 ? favorites.length : undefined },
    { id: 'shopping', label: isPt ? 'Lista de Compras' : 'Shopping List', icon: ShoppingCart, badge: pendingShoppingCount > 0 ? pendingShoppingCount : undefined },
    { id: 'foods', label: isPt ? 'Permitidos/Proibidos' : 'Allowed/Forbidden', icon: ShieldAlert },
    { id: 'transition', label: isPt ? 'Transição' : 'Transition', icon: CalendarDays },
    { id: 'guide', label: isPt ? 'E-Book' : 'E-Book', icon: BookOpen },
    { id: 'ai', label: isPt ? 'Nutri IA' : 'AI Assistant', icon: Bot, highlight: true },
  ];

  return (
    <>
      {/* Top Header for Desktop & Tablet */}
      <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-inner group-hover:scale-105 transition-transform">
              <Dog className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                <span>Healthy Dog Meals</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  By Mel
                </span>
              </div>
              <p className="text-xs text-stone-400 hidden sm:block">
                {isPt ? 'Alimentação Natural para Cães' : 'Natural Pet Food Guide'}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 relative ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                      : item.highlight
                      ? 'bg-emerald-950/80 text-emerald-300 hover:bg-emerald-900 border border-emerald-700/50'
                      : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                  }`}
                  id={`nav-${item.id}`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : item.highlight ? 'text-emerald-400' : 'text-stone-400'}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="ml-0.5 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.highlight && (
                    <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Dog Profile Badge + Language Switcher */}
          <div className="flex items-center gap-2">
            {/* Active Dog Profile Quick Button */}
            <button
              onClick={() => setActiveTab('dashboard')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 transition-colors text-xs"
              title={isPt ? 'Painel do Cão (Foto e Dados)' : 'Owner Dashboard (Photo & Info)'}
              id="dog-profile-btn"
            >
              <div className="w-6.5 h-6.5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs overflow-hidden border border-emerald-500/30 flex-shrink-0">
                {dogProfile.photoUrl ? (
                  <img src={dogProfile.photoUrl} alt={dogProfile.name} className="w-full h-full object-cover" />
                ) : (
                  '🐾'
                )}
              </div>
              <div className="text-left hidden lg:block">
                <p className="font-semibold text-white leading-tight">{dogProfile.name || 'Pet'}</p>
                <p className="text-[10px] text-stone-400">{dogProfile.breed || `${dogProfile.weightKg} kg`}</p>
              </div>
            </button>

            {/* Language Selector */}
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 text-xs font-medium transition-colors"
              title={isPt ? 'Mudar para Inglês' : 'Switch to Portuguese'}
              id="language-switch-btn"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span className="uppercase font-bold">{language}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-stone-900/98 border-t border-stone-800 text-stone-300 px-2 py-1.5 shadow-2xl backdrop-blur-lg">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`flex flex-col items-center py-1 px-2 rounded-lg transition-all text-[11px] ${
                  isActive ? 'text-emerald-400 font-bold scale-105' : 'text-stone-400 hover:text-stone-200'
                }`}
                id={`mobile-nav-${item.id}`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-400' : ''}`} />
                  {item.badge !== undefined && (
                    <span className="absolute -top-1 -right-2 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="mt-0.5 truncate max-w-[58px]">{item.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

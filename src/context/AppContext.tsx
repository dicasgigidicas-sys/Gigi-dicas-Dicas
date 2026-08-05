import React, { createContext, useContext, useState, useEffect } from 'react';
import { DogProfile, PortionResult, AgeGroup, ShoppingItem } from '../types';
import { RECIPES_DATA } from '../data/recipes';

export type TabType = 'home' | 'dashboard' | 'calculator' | 'recipes' | 'foods' | 'transition' | 'guide' | 'ai' | 'shopping';

interface AppContextType {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
  dogProfile: DogProfile;
  setDogProfile: React.Dispatch<React.SetStateAction<DogProfile>>;
  portionResult: PortionResult;
  favorites: string[];
  toggleFavorite: (recipeId: string) => void;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  selectedRecipeId: string | null;
  setSelectedRecipeId: (id: string | null) => void;
  shoppingList: ShoppingItem[];
  addRecipeToShoppingList: (recipeId: string, scaleMode?: 'scaled' | 'base') => number;
  addAllFavoritesToShoppingList: () => number;
  addCustomShoppingItem: (name: string, amount?: string, category?: ShoppingItem['category']) => void;
  toggleShoppingItem: (id: string) => void;
  removeShoppingItem: (id: string) => void;
  clearCheckedShoppingItems: () => void;
  clearAllShoppingItems: () => void;
}

const DEFAULT_PROFILE: DogProfile = {
  name: 'Thor',
  breed: 'Vira-lata / Misto',
  ageYears: 3,
  ageMonths: 6,
  weightKg: 10,
  ageGroup: 'adult_neutered',
  dailyMealsCount: 2,
  gender: 'male',
  activityLevel: 'normal',
  photoUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600',
  notes: 'Ama batata doce e frango desfado.',
};

export function calculateDogPortions(weightKg: number, ageGroup: AgeGroup, dailyMeals: number): PortionResult {
  // RER = 70 * (weight)^0.75 or approx (30 * weight) + 70
  const rer = Math.round(70 * Math.pow(weightKg, 0.75));

  let multiplier = 1.6;
  switch (ageGroup) {
    case 'puppy_under4m':
      multiplier = 3.0;
      break;
    case 'puppy_4_12m':
      multiplier = 2.0;
      break;
    case 'adult_neutered':
      multiplier = 1.6;
      break;
    case 'adult_active':
      multiplier = 1.8;
      break;
    case 'weight_loss':
      multiplier = 1.0;
      break;
    case 'senior_sedentary':
      multiplier = 1.4;
      break;
  }

  const dme = Math.round(rer * multiplier);

  // Cooked natural food averages ~1.25 kcal / gram
  const totalDailyFoodGrams = Math.round(dme / 1.25);
  const perMealGrams = Math.round(totalDailyFoodGrams / Math.max(1, dailyMeals));

  // Plate macros: 45% protein, 35% carbs, 20% veggies
  const proteinGrams = Math.round(totalDailyFoodGrams * 0.45);
  const carbsGrams = Math.round(totalDailyFoodGrams * 0.35);
  const veggieGrams = Math.round(totalDailyFoodGrams * 0.20);

  // Calcium recommendation: ~1000 mg Calcium per 1000 kcal or ~1.2g eggshell powder per kg of food
  const calciumMg = Math.round((dme / 1000) * 1000);
  const oilTeaspoons = Math.max(0.5, Math.round((weightKg / 10) * 10) / 10);

  return {
    rer,
    multiplier,
    dme,
    totalDailyFoodGrams,
    perMealGrams,
    macros: {
      proteinGrams,
      carbsGrams,
      veggieGrams,
      calciumMg,
      oilTeaspoons,
    },
  };
}

function detectCategory(name: string): ShoppingItem['category'] {
  const lower = name.toLowerCase();
  if (
    lower.includes('frango') || lower.includes('carne') || lower.includes('peixe') ||
    lower.includes('ovo') || lower.includes('fígado') || lower.includes('peru') ||
    lower.includes('moela') || lower.includes('sardinha') || lower.includes('chicken') ||
    lower.includes('beef') || lower.includes('fish') || lower.includes('egg') ||
    lower.includes('turkey') || lower.includes('liver') || lower.includes('salmon')
  ) {
    return 'protein';
  }
  if (
    lower.includes('abóbora') || lower.includes('cenoura') || lower.includes('brócolis') ||
    lower.includes('chuchu') || lower.includes('abobrinha') || lower.includes('maçã') ||
    lower.includes('mirtilo') || lower.includes('couve') || lower.includes('vagem') ||
    lower.includes('pumpkin') || lower.includes('carrot') || lower.includes('broccoli') ||
    lower.includes('apple') || lower.includes('zucchini') || lower.includes('spinach')
  ) {
    return 'veggie';
  }
  if (
    lower.includes('arroz') || lower.includes('batata') || lower.includes('mandioca') ||
    lower.includes('aveia') || lower.includes('quinoa') || lower.includes('rice') ||
    lower.includes('potato') || lower.includes('oats') || lower.includes('sweet potato')
  ) {
    return 'carb';
  }
  if (
    lower.includes('cálcio') || lower.includes('óleo') || lower.includes('suplemento') ||
    lower.includes('casca de ovo') || lower.includes('sal') || lower.includes('calcium') ||
    lower.includes('oil') || lower.includes('supplement') || lower.includes('vitamin')
  ) {
    return 'supplement';
  }
  return 'other';
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'pt' | 'en'>(() => {
    try {
      const saved = localStorage.getItem('healthy_dog_meals_lang');
      return (saved === 'en' || saved === 'pt') ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('healthy_dog_meals_lang', language);
    } catch (e) {
      console.error(e);
    }
  }, [language]);
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);

  const [dogProfile, setDogProfile] = useState<DogProfile>(() => {
    try {
      const saved = localStorage.getItem('healthy_dog_meals_dog') || localStorage.getItem('natural_paws_dog');
      return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('healthy_dog_meals_favs') || localStorage.getItem('natural_paws_favs');
      return saved ? JSON.parse(saved) : ['meal-1', 'treat-1', 'frozen-1'];
    } catch {
      return ['meal-1', 'treat-1', 'frozen-1'];
    }
  });

  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(() => {
    try {
      const saved = localStorage.getItem('healthy_dog_meals_shopping_list') || localStorage.getItem('natural_paws_shopping_list');
      if (saved) return JSON.parse(saved);
      return [
        {
          id: 'init-1',
          name: 'Peito de Frango Sem Pele',
          namePt: 'Peito de Frango Sem Pele',
          amount: '~450 g',
          recipeId: 'meal-1',
          recipeTitle: 'Frango com Abóbora e Vagem',
          checked: false,
          category: 'protein',
          createdAt: Date.now() - 3000,
        },
        {
          id: 'init-2',
          name: 'Abóbora Cabotiá Cozida',
          namePt: 'Abóbora Cabotiá Cozida',
          amount: '~350 g',
          recipeId: 'meal-1',
          recipeTitle: 'Frango com Abóbora e Vagem',
          checked: false,
          category: 'veggie',
          createdAt: Date.now() - 2000,
        },
        {
          id: 'init-3',
          name: 'Farinha de Casca de Ovo (Cálcio)',
          namePt: 'Farinha de Casca de Ovo (Cálcio)',
          amount: '1/2 colher de chá',
          recipeId: 'meal-1',
          recipeTitle: 'Frango com Abóbora e Vagem',
          checked: true,
          category: 'supplement',
          createdAt: Date.now() - 1000,
        },
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      const data = JSON.stringify(dogProfile);
      localStorage.setItem('healthy_dog_meals_dog', data);
      localStorage.setItem('natural_paws_dog', data);
    } catch (e) {
      console.error(e);
    }
  }, [dogProfile]);

  useEffect(() => {
    try {
      const data = JSON.stringify(favorites);
      localStorage.setItem('healthy_dog_meals_favs', data);
      localStorage.setItem('natural_paws_favs', data);
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      const data = JSON.stringify(shoppingList);
      localStorage.setItem('healthy_dog_meals_shopping_list', data);
      localStorage.setItem('natural_paws_shopping_list', data);
    } catch (e) {
      console.error(e);
    }
  }, [shoppingList]);

  const portionResult = calculateDogPortions(dogProfile.weightKg, dogProfile.ageGroup, dogProfile.dailyMealsCount);

  const toggleFavorite = (recipeId: string) => {
    setFavorites((prev) =>
      prev.includes(recipeId) ? prev.filter((id) => id !== recipeId) : [...prev, recipeId]
    );
  };

  const addRecipeToShoppingList = (recipeId: string, scaleMode: 'scaled' | 'base' = 'scaled'): number => {
    const recipe = RECIPES_DATA.find((r) => r.id === recipeId);
    if (!recipe) return 0;

    const scaleRatio = dogProfile.weightKg / 10;
    const newItems: ShoppingItem[] = [];

    recipe.ingredients.forEach((ing) => {
      let amountText = ing.amount;
      if (scaleMode === 'scaled' && ing.baseGrams) {
        const scaledGrams = Math.round(ing.baseGrams * scaleRatio);
        amountText = `~${scaledGrams} g`;
      }

      // Check if already in list for same recipe
      const exists = shoppingList.some(
        (item) => item.recipeId === recipe.id && (item.name === ing.name || item.namePt === ing.namePt)
      );

      if (!exists) {
        newItems.push({
          id: `${recipe.id}-${ing.name.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
          name: ing.name,
          namePt: ing.namePt || ing.name,
          amount: amountText,
          recipeId: recipe.id,
          recipeTitle: recipe.titlePt || recipe.title,
          checked: false,
          category: detectCategory(ing.namePt || ing.name),
          createdAt: Date.now(),
        });
      }
    });

    if (newItems.length > 0) {
      setShoppingList((prev) => [...prev, ...newItems]);
    }
    return newItems.length;
  };

  const addAllFavoritesToShoppingList = (): number => {
    let totalAdded = 0;
    favorites.forEach((recipeId) => {
      totalAdded += addRecipeToShoppingList(recipeId, 'scaled');
    });
    return totalAdded;
  };

  const addCustomShoppingItem = (name: string, amount?: string, category?: ShoppingItem['category']) => {
    if (!name.trim()) return;
    const newItem: ShoppingItem = {
      id: `custom-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
      name: name.trim(),
      namePt: name.trim(),
      amount: amount?.trim() || '',
      checked: false,
      category: category || detectCategory(name),
      createdAt: Date.now(),
    };
    setShoppingList((prev) => [newItem, ...prev]);
  };

  const toggleShoppingItem = (id: string) => {
    setShoppingList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const removeShoppingItem = (id: string) => {
    setShoppingList((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCheckedShoppingItems = () => {
    setShoppingList((prev) => prev.filter((item) => !item.checked));
  };

  const clearAllShoppingItems = () => {
    setShoppingList([]);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        dogProfile,
        setDogProfile,
        portionResult,
        favorites,
        toggleFavorite,
        activeTab,
        setActiveTab,
        selectedRecipeId,
        setSelectedRecipeId,
        shoppingList,
        addRecipeToShoppingList,
        addAllFavoritesToShoppingList,
        addCustomShoppingItem,
        toggleShoppingItem,
        removeShoppingItem,
        clearCheckedShoppingItems,
        clearAllShoppingItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

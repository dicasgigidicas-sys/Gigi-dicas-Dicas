export type CategoryType = 'meal' | 'treat' | 'frozen';

export type ProteinType = 'chicken' | 'beef' | 'fish' | 'liver' | 'egg' | 'turkey' | 'fruit_veggie';

export interface ShoppingItem {
  id: string;
  name: string;
  namePt?: string;
  amount?: string;
  recipeId?: string;
  recipeTitle?: string;
  checked: boolean;
  category?: 'protein' | 'veggie' | 'carb' | 'supplement' | 'other';
  createdAt: number;
}

export interface Ingredient {
  name: string;
  namePt?: string;
  amount: string; // Original base amount text (e.g. "150g" or "1/2 cup")
  baseGrams?: number; // Base weight in grams for a 10kg dog serving (if scalable)
  unit?: string;
}

export interface Recipe {
  id: string;
  title: string;
  titlePt?: string;
  category: CategoryType;
  prepTimeMinutes: number;
  yields: string;
  yieldsPt?: string;
  proteinType: ProteinType;
  ingredients: Ingredient[];
  instructions: string[];
  instructionsPt?: string[];
  vetTip: string;
  vetTipPt?: string;
  isPuppyFriendly?: boolean;
  caloriesPerServingBase?: number; // approx kcal for base serving
  tags: string[];
  imageUrl?: string;
}

export type AgeGroup =
  | 'puppy_under4m'
  | 'puppy_4_12m'
  | 'adult_neutered'
  | 'adult_active'
  | 'weight_loss'
  | 'senior_sedentary';

export interface DogProfile {
  name: string;
  breed?: string;
  ageYears?: number;
  ageMonths?: number;
  weightKg: number;
  ageGroup: AgeGroup;
  dailyMealsCount: number; // 2, 3, or 4
  photoUrl?: string;
  gender?: 'male' | 'female';
  activityLevel?: 'sedentary' | 'normal' | 'active' | 'athlete';
  allergies?: string[];
  notes?: string;
  favoriteFood?: string;
}

export interface PortionResult {
  rer: number; // Resting Energy Requirement (kcal)
  multiplier: number;
  dme: number; // Daily Maintenance Energy (kcal)
  totalDailyFoodGrams: number; // Estimated cooked food grams (~1.25 kcal/g)
  perMealGrams: number;
  macros: {
    proteinGrams: number;
    carbsGrams: number;
    veggieGrams: number;
    calciumMg: number;
    oilTeaspoons: number;
  };
}

export interface FoodSafetyItem {
  id: string;
  name: string;
  namePt: string;
  category: 'fruit' | 'veggie' | 'protein' | 'grain' | 'dairy' | 'toxic';
  isAllowed: boolean | 'caution';
  note: string;
  notePt?: string;
  reasonIfForbidden?: string;
  reasonIfForbiddenPt?: string;
  iconName?: string;
}

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  titlePt: string;
  subtitle: string;
  subtitlePt: string;
  readTimeMinutes: number;
  sections: {
    heading: string;
    headingPt?: string;
    content: string;
    contentPt?: string;
    bulletPoints?: string[];
    bulletPointsPt?: string[];
    callout?: {
      type: 'warning' | 'info' | 'tip' | 'danger';
      title: string;
      text: string;
    };
  }[];
}

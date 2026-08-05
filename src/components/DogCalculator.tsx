import React from 'react';
import { useApp } from '../context/AppContext';
import { AgeGroup } from '../types';
import {
  Calculator,
  Scale,
  Flame,
  Utensils,
  ShieldAlert,
  Info,
  CheckCircle2,
  Save,
  Sparkles,
  PieChart
} from 'lucide-react';

export const DogCalculator: React.FC = () => {
  const { language, dogProfile, setDogProfile, portionResult, setActiveTab } = useApp();
  const isPt = language === 'pt';

  const handleInputChange = (field: keyof typeof dogProfile, value: any) => {
    setDogProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Capítulo 4 — {isPt ? 'Cálculo Energético' : 'Energy Math'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {isPt ? 'Calculadora de Porção e Calorias Diárias' : 'Daily Portion & Calorie Calculator'}
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            {isPt
              ? 'Insira o peso, fase de vida e rotina do seu cão para calcular a RER (Energia em Repouso), a DME (Gasto Diário) e a gramatura exata do prato.'
              : 'Calculate Resting Energy Requirement (RER), Daily Maintenance Energy (DME), and exact plate weight in grams based on veterinary formulas.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Inputs (5 columns on desktop) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2 pb-2 border-b border-stone-100">
            <Scale className="w-5 h-5 text-emerald-600" />
            <span>{isPt ? 'Perfil do Cão' : 'Dog Profile'}</span>
          </h2>

          {/* Dog Name & Breed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                {isPt ? 'Nome do Cão' : 'Dog Name'}
              </label>
              <input
                type="text"
                value={dogProfile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm font-medium"
                placeholder="Ex: Thor, Mel, Luna"
                id="calc-dog-name"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                {isPt ? 'Raça' : 'Breed'}
              </label>
              <input
                type="text"
                value={dogProfile.breed || ''}
                onChange={(e) => handleInputChange('breed', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm font-medium"
                placeholder={isPt ? 'Ex: Vira-lata, Shih Tzu...' : 'Ex: Golden, Poodle...'}
                id="calc-dog-breed"
              />
            </div>
          </div>

          {/* Age (Years / Months) */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">
              {isPt ? 'Idade do Cão (Anos / Meses)' : 'Dog Age (Years / Months)'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min="0"
                  max="25"
                  value={dogProfile.ageYears ?? 3}
                  onChange={(e) => handleInputChange('ageYears', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm text-center font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  id="calc-dog-age-years"
                />
                <span className="text-xs text-stone-600 font-semibold">{isPt ? 'anos' : 'yrs'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min="0"
                  max="11"
                  value={dogProfile.ageMonths ?? 0}
                  onChange={(e) => handleInputChange('ageMonths', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm text-center font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  id="calc-dog-age-months"
                />
                <span className="text-xs text-stone-600 font-semibold">{isPt ? 'meses' : 'mths'}</span>
              </div>
            </div>
          </div>

          {/* Weight in KG */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                {isPt ? 'Peso Corporal (kg)' : 'Body Weight (kg)'}
              </label>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                {dogProfile.weightKg} kg ({(dogProfile.weightKg * 2.20462).toFixed(1)} lbs)
              </span>
            </div>
            <input
              type="number"
              min="1"
              max="90"
              step="0.5"
              value={dogProfile.weightKg}
              onChange={(e) => handleInputChange('weightKg', Math.max(1, parseFloat(e.target.value) || 1))}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm font-bold text-stone-900"
              id="calc-dog-weight"
            />
            {/* Quick preset weight buttons */}
            <div className="flex items-center gap-1.5 pt-1">
              <span className="text-[10px] text-stone-600 mr-1">{isPt ? 'Atalhos:' : 'Presets:'}</span>
              {[3, 5, 10, 15, 25, 35].map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => handleInputChange('weightKg', w)}
                  className={`px-2 py-1 rounded text-[11px] font-semibold border transition-colors ${
                    dogProfile.weightKg === w
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-200'
                  }`}
                >
                  {w}kg
                </button>
              ))}
            </div>
          </div>

          {/* Age Group / Multiplier */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">
              {isPt ? 'Fase de Vida / Atividade (Fator DME)' : 'Life Stage / Activity Factor'}
            </label>
            <select
              value={dogProfile.ageGroup}
              onChange={(e) => handleInputChange('ageGroup', e.target.value as AgeGroup)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-xs font-medium text-stone-900 bg-white"
              id="calc-age-group"
            >
              <option value="puppy_under4m">
                {isPt ? 'Filhote (< 4 meses) — Fator 3.0 (Crescimento Rápido)' : 'Puppy (< 4 months) — Factor 3.0 (Rapid Growth)'}
              </option>
              <option value="puppy_4_12m">
                {isPt ? 'Filhote (4 a 12 meses) — Fator 2.0 (Crescimento Médio)' : 'Puppy (4–12 months) — Factor 2.0'}
              </option>
              <option value="adult_neutered">
                {isPt ? 'Adulto Castrado (Atividade Normal) — Fator 1.6' : 'Neutered Adult (Normal Activity) — Factor 1.6'}
              </option>
              <option value="adult_active">
                {isPt ? 'Adulto Intacto / Muito Ativo — Fator 1.8' : 'Intact / Highly Active Adult — Factor 1.8'}
              </option>
              <option value="weight_loss">
                {isPt ? 'Dieta de Emagrecimento / Perda de Peso — Fator 1.0' : 'Weight Loss Diet — Factor 1.0'}
              </option>
              <option value="senior_sedentary">
                {isPt ? 'Cão Sênior ou Sedentário — Fator 1.4' : 'Senior / Sedentary Dog — Factor 1.4'}
              </option>
            </select>
          </div>

          {/* Number of Meals per Day */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">
              {isPt ? 'Número de Refeições Diárias' : 'Daily Meals Count'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[2, 3, 4].map((meals) => (
                <button
                  key={meals}
                  type="button"
                  onClick={() => handleInputChange('dailyMealsCount', meals)}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                    dogProfile.dailyMealsCount === meals
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                  }`}
                >
                  {meals} {isPt ? 'refeições/dia' : 'meals/day'}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 text-xs text-stone-500 bg-stone-50 p-3 rounded-xl border border-stone-200 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <p className="leading-snug">
              {isPt
                ? 'Perfil salvo automaticamente! Todas as receitas do app serão redimensionadas para as necessidades do ' + dogProfile.name + '.'
                : 'Profile automatically saved! All recipes across the app will scale to ' + dogProfile.name + '\'s calculated portions.'}
            </p>
          </div>
        </div>

        {/* Results Cards (7 columns on desktop) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Calorie & Gram Highlight Card */}
          <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden space-y-6">
            <div className="flex items-center justify-between border-b border-emerald-500/40 pb-4">
              <div>
                <p className="text-emerald-200 text-xs font-bold uppercase tracking-wider">
                  {isPt ? 'Resultado Personalizado para' : 'Custom Result for'} {dogProfile.name || 'Seu Pet'}
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                  {portionResult.totalDailyFoodGrams} g <span className="text-emerald-200 text-sm font-normal">{isPt ? 'de comida cozida / dia' : 'total cooked food / day'}</span>
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white font-bold text-xl border border-white/20">
                🐾
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-stone-900/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                <p className="text-emerald-200 text-[11px] font-semibold">{isPt ? 'RER (Basal)' : 'Resting (RER)'}</p>
                <p className="text-lg font-bold text-white mt-0.5">{portionResult.rer} <span className="text-xs text-stone-300">kcal</span></p>
              </div>

              <div className="bg-stone-900/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                <p className="text-emerald-200 text-[11px] font-semibold">{isPt ? 'DME (Total Diário)' : 'Daily Need (DME)'}</p>
                <p className="text-lg font-bold text-amber-300 mt-0.5">{portionResult.dme} <span className="text-xs text-stone-300">kcal</span></p>
              </div>

              <div className="bg-stone-900/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 col-span-2 sm:col-span-1">
                <p className="text-emerald-200 text-[11px] font-semibold">
                  {portionResult.perMealGrams}g / {isPt ? 'refeição' : 'meal'}
                </p>
                <p className="text-lg font-bold text-white mt-0.5">
                  {dogProfile.dailyMealsCount}x {isPt ? 'ao dia' : 'daily'}
                </p>
              </div>
            </div>

            {/* Macro Proportions Plate breakdown */}
            <div className="bg-stone-900/50 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-100">
                <span className="flex items-center gap-1.5">
                  <PieChart className="w-4 h-4 text-emerald-300" />
                  {isPt ? 'Distribuição do Prato Cozido Diário' : 'Daily Cooked Plate Macro Distribution'}
                </span>
                <span>45% Prot / 35% Carb / 20% Veg</span>
              </div>

              {/* Progress visual bar */}
              <div className="h-3.5 w-full rounded-full bg-stone-800 flex overflow-hidden p-0.5 gap-0.5">
                <div className="bg-amber-400 h-full rounded-l-full" style={{ width: '45%' }} title="Proteína (45%)" />
                <div className="bg-teal-400 h-full" style={{ width: '35%' }} title="Carboidratos (35%)" />
                <div className="bg-emerald-400 h-full rounded-r-full" style={{ width: '20%' }} title="Vegetais (20%)" />
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="bg-stone-950/40 p-2 rounded-xl border border-amber-400/30">
                  <p className="text-[10px] text-amber-300 font-bold uppercase">{isPt ? 'Proteínas' : 'Proteins'} (45%)</p>
                  <p className="text-sm font-extrabold text-white mt-0.5">{portionResult.macros.proteinGrams} g</p>
                  <p className="text-[9px] text-stone-300">{isPt ? 'Frango, carne, peixe' : 'Chicken, beef, fish'}</p>
                </div>
                <div className="bg-stone-950/40 p-2 rounded-xl border border-teal-400/30">
                  <p className="text-[10px] text-teal-300 font-bold uppercase">{isPt ? 'Carbo/Fibras' : 'Carbs'} (35%)</p>
                  <p className="text-sm font-extrabold text-white mt-0.5">{portionResult.macros.carbsGrams} g</p>
                  <p className="text-[9px] text-stone-300">{isPt ? 'Batata doce, arroz' : 'Sweet potato, rice'}</p>
                </div>
                <div className="bg-stone-950/40 p-2 rounded-xl border border-emerald-400/30">
                  <p className="text-[10px] text-emerald-300 font-bold uppercase">{isPt ? 'Vegetais' : 'Veggies'} (20%)</p>
                  <p className="text-sm font-extrabold text-white mt-0.5">{portionResult.macros.veggieGrams} g</p>
                  <p className="text-[9px] text-stone-300">{isPt ? 'Cenoura, abobrinha' : 'Carrots, zucchini'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mandatory Calcium Supplement Card (Chapter 3 callout) */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>{isPt ? 'Cálculo Obrigatorio de Suplementação de Cálcio' : 'Mandatory Calcium Supplement Requirement'}</span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              {isPt
                ? 'Carnes e arroz são ricos em fósforo e Pobres em Cálcio. Sem suplementação de cálcio, o cão desenvolverá sérios problemas ósseos.'
                : 'Meat and grains are rich in phosphorus but almost zero in calcium. Without calcium addition, severe bone loss occurs.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-white p-3 rounded-xl border border-amber-200">
                <p className="text-[11px] font-bold text-amber-900">{isPt ? 'Cálcio Elemental Recomendado' : 'Recommended Elemental Calcium'}</p>
                <p className="text-base font-extrabold text-amber-700 mt-0.5">~{portionResult.macros.calciumMg} mg / {isPt ? 'dia' : 'day'}</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-amber-200">
                <p className="text-[11px] font-bold text-amber-900">{isPt ? 'Equivalente em Pó de Casca de Ovo' : 'Eggshell Powder Equivalent'}</p>
                <p className="text-base font-extrabold text-amber-700 mt-0.5">
                  ~{((portionResult.totalDailyFoodGrams / 1000) * 1.2).toFixed(1)} g / {isPt ? 'dia (aprox 1/2 colher chá)' : 'day'}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-amber-900 pt-1">
              <span className="font-semibold">{isPt ? 'Outras Gorduras Boas:' : 'Healthy Fats:'}</span>
              <span>{portionResult.macros.oilTeaspoons} {isPt ? 'colher(es) de chá de óleo de coco ou linhaça / dia' : 'tsp coconut or flaxseed oil / day'}</span>
            </div>
          </div>

          {/* Shortcut Button to Recipe Catalog */}
          <div className="flex justify-end">
            <button
              onClick={() => setActiveTab('recipes')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              id="view-recipes-with-scaled-portions"
            >
              <Utensils className="w-4 h-4 text-emerald-400" />
              <span>{isPt ? 'Ver 50+ Receitas com Porções do ' + dogProfile.name : 'View 50+ Recipes Scaled for ' + dogProfile.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

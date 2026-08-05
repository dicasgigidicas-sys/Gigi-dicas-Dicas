import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { RECIPES_DATA } from '../data/recipes';
import {
  X,
  Clock,
  CheckCircle2,
  Heart,
  Printer,
  Sparkles,
  Utensils,
  Flame,
  Dog,
  ShieldCheck,
  Scale,
  ShoppingCart,
  Check
} from 'lucide-react';

interface Props {
  recipeId: string;
  onClose: () => void;
}

export const RecipeDetailModal: React.FC<Props> = ({ recipeId, onClose }) => {
  const { language, dogProfile, favorites, toggleFavorite, addRecipeToShoppingList, shoppingList, setActiveTab } = useApp();
  const isPt = language === 'pt';

  const recipe = RECIPES_DATA.find((r) => r.id === recipeId);

  // Portion Scaling Mode: 'scaled' (for user's dog) or 'base'
  const [scaleMode, setScaleMode] = useState<'scaled' | 'base'>('scaled');
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [addedToast, setAddedToast] = useState<string | null>(null);

  if (!recipe) return null;

  const isFavorite = favorites.includes(recipe.id);

  // Scale ratio based on dog's weight vs default 10kg base
  const scaleRatio = dogProfile.weightKg / 10;

  const toggleStep = (index: number) => {
    setCompletedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn printable-modal-backdrop">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden relative max-h-[90vh] flex flex-col my-auto printable-modal-card">
        {/* Sticky Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-stone-200 bg-stone-50/90 backdrop-blur-md no-print">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                recipe.category === 'meal'
                  ? 'bg-amber-100 text-amber-800'
                  : recipe.category === 'treat'
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-sky-100 text-sky-800'
              }`}
            >
              {recipe.category === 'meal'
                ? isPt
                  ? '🍲 Refeição Completa'
                  : '🍲 Complete Meal'
                : recipe.category === 'treat'
                ? isPt
                  ? '🦴 Petisco Assado'
                  : '🦴 Baked Treat'
                : isPt
                ? '🧊 Picolé / Sorvete'
                : '🧊 Frozen Treat'}
            </span>
            {recipe.isPuppyFriendly && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 flex items-center gap-1">
                <Dog className="w-3 h-3" />
                {isPt ? 'Filhotes' : 'Puppies'}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Print / PDF Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 active:scale-95"
              title={isPt ? 'Imprimir receita ou Salvar em PDF' : 'Print recipe or Save as PDF'}
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span className="hidden xs:inline">
                {isPt ? 'Imprimir / PDF' : 'Print / PDF'}
              </span>
            </button>

            {/* Favorite button */}
            <button
              type="button"
              onClick={() => toggleFavorite(recipe.id)}
              className={`p-2 rounded-xl border transition-colors ${
                isFavorite
                  ? 'bg-rose-50 text-rose-600 border-rose-200'
                  : 'bg-white text-stone-500 border-stone-200 hover:text-stone-800'
              }`}
              title={isFavorite ? (isPt ? 'Remover dos favoritos' : 'Remove from favorites') : (isPt ? 'Salvar nos favoritos' : 'Save to favorites')}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500' : ''}`} />
            </button>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-200 text-stone-700 hover:bg-stone-300 transition-colors"
              id="modal-close-btn"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1 printable-modal-body">
          {/* Print-Only Kitchen Header Banner */}
          <div className="print-only-block border-b-2 border-stone-900 pb-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-stone-900 font-black text-lg">
                <Dog className="w-6 h-6 text-emerald-600" />
                <span>Healthy Dog Meals By Mel</span>
              </div>
              <span className="text-xs text-stone-500 font-mono">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <p className="text-xs text-stone-600 italic mt-1">
              {isPt
                ? 'Guia & Livro de Receitas para Alimentação Canina Natural'
                : 'Natural Homemade Canine Nutrition & Recipe Guide'}
            </p>
          </div>

          {/* Recipe Title & Image */}
          <div className="space-y-4 print-avoid-break">
            {recipe.imageUrl && (
              <div className="rounded-2xl overflow-hidden h-48 sm:h-64 border border-stone-200 shadow-inner relative no-print">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{recipe.prepTimeMinutes} min</span>
                </div>
              </div>
            )}

            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                {isPt ? recipe.titlePt || recipe.title : recipe.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-stone-600 mt-1">
                <span className="flex items-center gap-1 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  {recipe.prepTimeMinutes} {isPt ? 'minutos de preparo' : 'mins prep time'}
                </span>
                <span>•</span>
                <span className="font-semibold">
                  {isPt ? recipe.yieldsPt || recipe.yields : recipe.yields}
                </span>
              </div>
            </div>
          </div>

          {/* Portion Scaler Toggle Bar */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 print-avoid-break">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-700 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-emerald-900">
                  {isPt ? 'Redimensionar para seu Cão' : 'Scale Portion for Your Dog'}
                </p>
                <p className="text-[11px] text-emerald-800">
                  {scaleMode === 'scaled'
                    ? isPt
                      ? `Calculado para ${dogProfile.name || 'Cão'} (${dogProfile.weightKg} kg)`
                      : `Calculated for ${dogProfile.name || 'Dog'} (${dogProfile.weightKg} kg)`
                    : isPt
                    ? 'Receita padrão original (cão de ~10kg)'
                    : 'Original base recipe (approx 10kg dog)'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-emerald-200 self-start sm:self-auto no-print">
              <button
                type="button"
                onClick={() => setScaleMode('scaled')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  scaleMode === 'scaled'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                🐾 {dogProfile.name || 'Pet'} ({dogProfile.weightKg}kg)
              </button>
              <button
                type="button"
                onClick={() => setScaleMode('base')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  scaleMode === 'base'
                    ? 'bg-stone-800 text-white shadow-sm'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                {isPt ? 'Padrão (10kg)' : 'Base (10kg)'}
              </button>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="space-y-3 print-avoid-break">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200 pb-2 gap-2">
              <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-emerald-600" />
                <span>{isPt ? 'Ingredientes' : 'Ingredients'}</span>
              </h3>

              <button
                type="button"
                onClick={() => {
                  const addedCount = addRecipeToShoppingList(recipe.id, scaleMode);
                  if (addedCount > 0) {
                    setAddedToast(isPt ? `+${addedCount} ingredientes adicionados!` : `+${addedCount} items added!`);
                  } else {
                    setAddedToast(isPt ? 'Ingredientes já estão na lista!' : 'Items already in list!');
                  }
                  setTimeout(() => setAddedToast(null), 2500);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-all active:scale-95 self-start sm:self-auto no-print"
              >
                {addedToast ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{addedToast}</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    <span>{isPt ? 'Adicionar à Lista de Compras' : 'Add to Shopping List'}</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {recipe.ingredients.map((ing, i) => {
                const nameText = isPt ? ing.namePt || ing.name : ing.name;

                // Scaled amount calculation if baseGrams exists
                let displayAmount = ing.amount;
                if (scaleMode === 'scaled' && ing.baseGrams) {
                  const scaledGrams = Math.round(ing.baseGrams * scaleRatio);
                  displayAmount = `~${scaledGrams} g (${(scaledGrams / 28.35).toFixed(1)} oz)`;
                }

                return (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium"
                  >
                    <span className="text-stone-800">{nameText}</span>
                    <span className="font-bold text-emerald-700 bg-white px-2 py-1 rounded border border-emerald-200">
                      {displayAmount}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step-by-Step Instructions with Interactive Checkboxes */}
          <div className="space-y-3 print-avoid-break">
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isPt ? 'Modo de Preparo (Passo a Passo)' : 'Step-by-Step Instructions'}</span>
            </h3>

            <div className="space-y-2">
              {(isPt && recipe.instructionsPt ? recipe.instructionsPt : recipe.instructions).map(
                (step, index) => {
                  const isDone = completedSteps.includes(index);
                  return (
                    <div
                      key={index}
                      onClick={() => toggleStep(index)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                        isDone
                          ? 'bg-emerald-50/60 border-emerald-300 text-stone-500 line-through'
                          : 'bg-white border-stone-200 hover:border-emerald-400 text-stone-800'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 transition-colors ${
                          isDone
                            ? 'bg-emerald-600 text-white'
                            : 'bg-stone-100 text-stone-600 border border-stone-300'
                        }`}
                      >
                        {isDone ? '✓' : index + 1}
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed mt-0.5">{step}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Veterinary Tip Callout Box */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5 text-amber-900 print-avoid-break">
            <div className="flex items-center gap-2 font-bold text-xs text-amber-800">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{isPt ? 'Dica Nutricional Veterinária' : 'Veterinary Nutrition Tip'}</span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed italic">
              "{isPt ? recipe.vetTipPt || recipe.vetTip : recipe.vetTip}"
            </p>
          </div>

          {/* Print-Only Footer Disclaimer */}
          <div className="print-only-block border-t border-stone-300 pt-4 text-[10px] text-stone-500 text-center space-y-1">
            <p className="font-bold">
              © {new Date().getFullYear()} Healthy Dog Meals By Mel — All rights reserved.
            </p>
            <p>
              {isPt
                ? 'Nota: Consulte um veterinário nutrólogo antes de alterar drasticamente a dieta do seu pet.'
                : 'Note: Always consult a veterinary nutritionist before making significant changes to your pet’s diet.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

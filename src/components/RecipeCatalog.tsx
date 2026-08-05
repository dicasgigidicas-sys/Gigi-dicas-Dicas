import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { RECIPES_DATA } from '../data/recipes';
import { RecipeDetailModal } from './RecipeDetailModal';
import {
  UtensilsCrossed,
  Search,
  Filter,
  Clock,
  Heart,
  Dog,
  Sparkles,
  ChevronRight,
  ShoppingCart,
  Plus,
  Check
} from 'lucide-react';

export const RecipeCatalog: React.FC = () => {
  const {
    language,
    favorites,
    toggleFavorite,
    dogProfile,
    selectedRecipeId,
    setSelectedRecipeId,
    addRecipeToShoppingList,
    addAllFavoritesToShoppingList,
    setActiveTab
  } = useApp();
  const isPt = language === 'pt';

  const [activeCategory, setActiveCategory] = useState<'all' | 'meal' | 'treat' | 'frozen' | 'favorites'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProtein, setSelectedProtein] = useState<string>('all');
  const [puppyOnly, setPuppyOnly] = useState(false);
  const [addedRecipeId, setAddedRecipeId] = useState<string | null>(null);

  const filteredRecipes = useMemo(() => {
    return RECIPES_DATA.filter((r) => {
      // Category filter
      if (activeCategory === 'favorites') {
        if (!favorites.includes(r.id)) return false;
      } else if (activeCategory !== 'all' && r.category !== activeCategory) {
        return false;
      }

      // Protein filter
      if (selectedProtein !== 'all' && r.proteinType !== selectedProtein) {
        return false;
      }

      // Puppy filter
      if (puppyOnly && !r.isPuppyFriendly) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleMatch = r.title.toLowerCase().includes(q) || (r.titlePt && r.titlePt.toLowerCase().includes(q));
        const ingMatch = r.ingredients.some(
          (ing) => ing.name.toLowerCase().includes(q) || (ing.namePt && ing.namePt.toLowerCase().includes(q))
        );
        const tagMatch = r.tags.some((t) => t.toLowerCase().includes(q));
        return titleMatch || ingMatch || tagMatch;
      }

      return true;
    });
  }, [activeCategory, selectedProtein, puppyOnly, searchQuery, favorites]);

  return (
    <div className="space-y-8">
      {/* Catalog Header Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Capítulo 10 — 50+ {isPt ? 'Receitas Testadas' : 'Tested Recipes'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {isPt ? 'Livro de Receitas Naturais para Cães' : 'Natural Dog Food Recipe Collection'}
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            {isPt
              ? 'Refeições completas do dia a dia, petiscos assados para adestramento e picolés congelados para o verão.'
              : 'Complete everyday meals, training baked treats, and refreshing frozen popsicles for hot summer days.'}
          </p>
        </div>

        {/* Dog Profile Scaler Badge */}
        <div className="bg-stone-800/90 border border-stone-700 p-4 rounded-2xl text-xs space-y-1 self-start md:self-auto min-w-[200px]">
          <p className="text-stone-400 font-medium">{isPt ? 'Redimensionando Porções para:' : 'Scaling Portions for:'}</p>
          <p className="text-base font-extrabold text-emerald-400 flex items-center gap-1.5">
            <span>🐾 {dogProfile.name || 'Pet'}</span>
            <span className="text-xs text-stone-300 font-normal">({dogProfile.weightKg} kg)</span>
          </p>
        </div>
      </div>

      {/* Main Navigation & Filter Toolbar */}
      <div className="space-y-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: isPt ? 'Todas (50+)' : 'All (50+)' },
            { id: 'meal', label: isPt ? '🍲 Refeições (20)' : '🍲 Meals (20)' },
            { id: 'treat', label: isPt ? '🦴 Petiscos (15)' : '🦴 Treats (15)' },
            { id: 'frozen', label: isPt ? '🧊 Picolés (15)' : '🧊 Frozen (15)' },
            { id: 'favorites', label: isPt ? `❤️ Favoritas (${favorites.length})` : `❤️ Favorites (${favorites.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === tab.id
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
              }`}
              id={`tab-recipe-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Bar & Protein Chip Filters */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isPt ? 'Buscar por ingrediente (frango, batata doce, cenoura...)' : 'Search by ingredient (chicken, sweet potato, carrot...)'}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-stone-200 text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              id="recipe-search-input"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
            {/* Protein Dropdown or Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              <span className="text-stone-600 font-bold text-[11px] mr-1">{isPt ? 'Proteína:' : 'Protein:'}</span>
              {[
                { id: 'all', label: isPt ? 'Todas' : 'All' },
                { id: 'chicken', label: isPt ? 'Frango' : 'Chicken' },
                { id: 'beef', label: isPt ? 'Carne' : 'Beef' },
                { id: 'fish', label: isPt ? 'Peixe' : 'Fish' },
                { id: 'liver', label: isPt ? 'Fígado' : 'Liver' },
                { id: 'egg', label: isPt ? 'Ovo' : 'Egg' },
                { id: 'turkey', label: isPt ? 'Peru' : 'Turkey' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProtein(p.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                    selectedProtein === p.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Puppy Toggle */}
            <button
              onClick={() => setPuppyOnly(!puppyOnly)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border flex items-center gap-1.5 transition-colors ${
                puppyOnly
                  ? 'bg-teal-600 text-white border-teal-600'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
              }`}
            >
              <Dog className="w-3.5 h-3.5" />
              <span>{isPt ? 'Apenas Filhotes' : 'Puppy Friendly Only'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recipes Cards Grid */}
      {filteredRecipes.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-3xl border border-stone-200 space-y-3">
          {activeCategory === 'favorites' ? (
            <>
              <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center mx-auto text-rose-500">
                <Heart className="w-6 h-6 fill-rose-500/20 text-rose-500" />
              </div>
              <h3 className="text-lg font-bold text-stone-800">
                {isPt ? 'Nenhuma receita favorita salva' : 'No favorite recipes saved yet'}
              </h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto leading-relaxed">
                {isPt
                  ? 'Clique no ícone de coração em qualquer receita para favoritá-la e salvá-la em seu livro de receitas pessoal (salvo no seu navegador).'
                  : 'Click the heart icon on any recipe card to save it to your personal cookbook (persisted in your local storage).'}
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSelectedProtein('all');
                  setSearchQuery('');
                  setPuppyOnly(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold mt-2 hover:bg-stone-800 transition-colors inline-flex items-center gap-2"
              >
                <span>{isPt ? 'Explorar Todas as Receitas' : 'Explore All Recipes'}</span>
              </button>
            </>
          ) : (
            <>
              <UtensilsCrossed className="w-10 h-10 text-stone-300 mx-auto" />
              <h3 className="text-lg font-bold text-stone-800">
                {isPt ? 'Nenhuma receita encontrada' : 'No recipes found'}
              </h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                {isPt
                  ? 'Tente mudar os filtros de busca ou limpar a barra de pesquisa.'
                  : 'Try adjusting your search query or protein filters.'}
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSelectedProtein('all');
                  setSearchQuery('');
                  setPuppyOnly(false);
                }}
                className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold mt-2"
              >
                {isPt ? 'Limpar Filtros' : 'Reset Filters'}
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {/* Favorites Shopping List Callout Banner when in Favorites tab */}
          {activeCategory === 'favorites' && (
            <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-stone-900 text-white p-5 rounded-3xl border border-emerald-800 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold flex-shrink-0">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {isPt ? 'Gerar Lista de Compras dos Favoritos' : 'Generate Shopping List from Favorites'}
                  </h4>
                  <p className="text-xs text-stone-300">
                    {isPt
                      ? `Compilar automaticamente os ingredientes das suas ${filteredRecipes.length} receitas favoritas para ${dogProfile.name || 'seu pet'}.`
                      : `Compile ingredients from your ${filteredRecipes.length} favorite recipes for ${dogProfile.name || 'your pet'}.`}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  addAllFavoritesToShoppingList();
                  setActiveTab('shopping');
                }}
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold text-xs shadow-md transition-all flex items-center gap-2 whitespace-nowrap self-stretch sm:self-auto justify-center"
              >
                <Plus className="w-4 h-4" />
                <span>{isPt ? 'Ir para Lista de Compras' : 'Go to Shopping List'}</span>
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => {
              const isFav = favorites.includes(recipe.id);
              const titleText = isPt ? recipe.titlePt || recipe.title : recipe.title;

              // Scaled main protein amount preview for this dog
              const mainIng = recipe.ingredients[0];
              const mainIngGrams = mainIng?.baseGrams
                ? Math.round(mainIng.baseGrams * (dogProfile.weightKg / 10))
                : null;

              const isAddedToCart = addedRecipeId === recipe.id;

            return (
              <div
                key={recipe.id}
                onClick={() => setSelectedRecipeId(recipe.id)}
                className="bg-white rounded-3xl border border-stone-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group"
                id={`recipe-card-${recipe.id}`}
              >
                <div>
                  {/* Image Container / Header */}
                  <div className="relative h-44 bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden">
                    {recipe.imageUrl ? (
                      <img
                        src={recipe.imageUrl}
                        alt={titleText}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl">
                        {recipe.category === 'meal' ? '🍲' : recipe.category === 'treat' ? '🦴' : '🧊'}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

                    {/* Category & Puppy Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-stone-900/90 text-white backdrop-blur-md">
                        {recipe.category === 'meal'
                          ? isPt
                            ? 'Refeição'
                            : 'Meal'
                          : recipe.category === 'treat'
                          ? isPt
                            ? 'Petisco'
                            : 'Treat'
                          : isPt
                          ? 'Picolé'
                          : 'Frozen'}
                      </span>
                      {recipe.isPuppyFriendly && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-500 text-white shadow">
                          Filhote
                        </span>
                      )}
                    </div>

                    {/* Quick Action Top Right Buttons */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      {/* Quick Add to Shopping List Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          addRecipeToShoppingList(recipe.id, 'scaled');
                          setAddedRecipeId(recipe.id);
                          setTimeout(() => setAddedRecipeId(null), 2000);
                        }}
                        title={isPt ? 'Adicionar ingredientes à lista de compras' : 'Add ingredients to shopping list'}
                        aria-label={isPt ? 'Adicionar ingredientes à lista de compras' : 'Add ingredients to shopping list'}
                        className={`p-2 rounded-full backdrop-blur-md transition-all active:scale-95 ${
                          isAddedToCart
                            ? 'bg-emerald-600 text-white shadow-md'
                            : 'bg-stone-900/60 text-stone-200 hover:bg-stone-900 hover:text-emerald-400'
                        }`}
                      >
                        {isAddedToCart ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                      </button>

                      {/* Favorite Heart Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(recipe.id);
                        }}
                        title={isFav ? (isPt ? 'Remover dos favoritos' : 'Remove from favorites') : (isPt ? 'Salvar nos favoritos' : 'Save to favorites')}
                        aria-label={isFav ? (isPt ? 'Remover dos favoritos' : 'Remove from favorites') : (isPt ? 'Salvar nos favoritos' : 'Save to favorites')}
                        aria-pressed={isFav}
                        className={`p-2 rounded-full backdrop-blur-md transition-all active:scale-95 ${
                          isFav ? 'bg-rose-500 text-white shadow-md' : 'bg-stone-900/60 text-stone-200 hover:bg-stone-900'
                        }`}
                      >
                        <Heart className={`w-4 h-4 transition-transform ${isFav ? 'fill-white scale-110' : ''}`} />
                      </button>
                    </div>

                    {/* Prep Time Overlay */}
                    <div className="absolute bottom-3 left-3 text-white text-[11px] font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{recipe.prepTimeMinutes} min</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-stone-900 text-base leading-snug group-hover:text-emerald-700 transition-colors">
                      {titleText}
                    </h3>

                    {/* Ingredients Preview */}
                    <div className="text-xs text-stone-600 space-y-1">
                      <p className="line-clamp-2 leading-relaxed">
                        <span className="font-semibold text-stone-800">{isPt ? 'Ingredientes:' : 'Ingredients:'}</span>{' '}
                        {recipe.ingredients
                          .map((ing) => (isPt ? ing.namePt || ing.name : ing.name))
                          .join(', ')}
                      </p>
                    </div>

                    {/* Dog Scaled Preview Pill */}
                    {mainIngGrams && (
                      <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 font-semibold flex items-center justify-between">
                        <span>
                          {isPt ? 'Porção para' : 'Serving for'} {dogProfile.name}:
                        </span>
                        <span className="font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">
                          ~{mainIngGrams}g {isPt ? 'proteína' : 'protein'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="px-5 pb-5 pt-1 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>{isPt ? 'Ver Receita Completa' : 'View Full Recipe'}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
          </div>
        </div>
      )}

      {/* Selected Recipe Detail Modal */}
      {selectedRecipeId && (
        <RecipeDetailModal
          recipeId={selectedRecipeId}
          onClose={() => setSelectedRecipeId(null)}
        />
      )}
    </div>
  );
};

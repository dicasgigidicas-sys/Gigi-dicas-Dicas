import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { RECIPES_DATA } from '../data/recipes';
import { ShoppingItem } from '../types';
import {
  ShoppingCart,
  Plus,
  Trash2,
  CheckCircle2,
  Circle,
  Copy,
  Printer,
  Sparkles,
  Heart,
  Utensils,
  Share2,
  Check,
  Filter,
  RefreshCw,
  Dog,
  ChevronRight
} from 'lucide-react';

export const ShoppingList: React.FC = () => {
  const {
    language,
    dogProfile,
    favorites,
    shoppingList,
    addCustomShoppingItem,
    addRecipeToShoppingList,
    addAllFavoritesToShoppingList,
    toggleShoppingItem,
    removeShoppingItem,
    clearCheckedShoppingItems,
    clearAllShoppingItems,
    setActiveTab,
    setSelectedRecipeId
  } = useApp();

  const isPt = language === 'pt';

  // State for new custom item form
  const [itemName, setItemName] = useState('');
  const [itemAmount, setItemAmount] = useState('');
  const [itemCategory, setItemCategory] = useState<ShoppingItem['category']>('protein');

  // Filter & Grouping view mode
  const [filterMode, setFilterMode] = useState<'all' | 'pending' | 'completed'>('all');
  const [groupBy, setGroupBy] = useState<'category' | 'recipe'>('category');

  // Feedback notifications
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState<string | null>(null);

  const pendingItems = shoppingList.filter((item) => !item.checked);
  const completedItems = shoppingList.filter((item) => item.checked);
  const progressPercent =
    shoppingList.length > 0 ? Math.round((completedItems.length / shoppingList.length) * 100) : 0;

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemName.trim()) return;
    addCustomShoppingItem(itemName, itemAmount, itemCategory);
    setItemName('');
    setItemAmount('');
    showToast(isPt ? 'Item adicionado à lista!' : 'Item added to list!');
  };

  const showToast = (msg: string) => {
    setAddedFeedback(msg);
    setTimeout(() => setAddedFeedback(null), 3000);
  };

  const handleAddFavorites = () => {
    const addedCount = addAllFavoritesToShoppingList();
    if (addedCount > 0) {
      showToast(
        isPt
          ? `+${addedCount} novos ingredientes adicionados das receitas favoritas!`
          : `+${addedCount} new ingredients added from favorites!`
      );
    } else {
      showToast(
        isPt
          ? 'Todos os ingredientes dos favoritos já estão na lista!'
          : 'All favorite recipe ingredients are already in your list!'
      );
    }
  };

  const handleCopyList = () => {
    if (shoppingList.length === 0) return;

    let text = isPt
      ? `🛒 *Lista de Compras — ${dogProfile.name || 'Meu Pet'}*\n`
      : `🛒 *Shopping List — ${dogProfile.name || 'My Pet'}*\n`;

    if (pendingItems.length > 0) {
      text += isPt ? `\n🔴 *A comprar (${pendingItems.length}):*\n` : `\n🔴 *To buy (${pendingItems.length}):*\n`;
      pendingItems.forEach((item) => {
        const title = isPt ? item.namePt || item.name : item.name;
        text += `• ${title}${item.amount ? ` (${item.amount})` : ''}\n`;
      });
    }

    if (completedItems.length > 0) {
      text += isPt ? `\n✅ *Comprados (${completedItems.length}):*\n` : `\n✅ *Completed (${completedItems.length}):*\n`;
      completedItems.forEach((item) => {
        const title = isPt ? item.namePt || item.name : item.name;
        text += `~• ${title}${item.amount ? ` (${item.amount})` : ''}~\n`;
      });
    }

    text += `\n_Healthy Dog Meals By Mel_`;

    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  // Filtered list
  const displayItems = shoppingList.filter((item) => {
    if (filterMode === 'pending') return !item.checked;
    if (filterMode === 'completed') return item.checked;
    return true;
  });

  // Category Translation & Icons
  const categoryLabels: Record<string, { pt: string; en: string; icon: string; bg: string; text: string }> = {
    protein: {
      pt: '🥩 Proteínas & Carnes',
      en: '🥩 Proteins & Meats',
      icon: '🥩',
      bg: 'bg-rose-50 border-rose-200',
      text: 'text-rose-900',
    },
    veggie: {
      pt: '🥦 Vegetais, Frutas & Legumes',
      en: '🥦 Veggies & Fruits',
      icon: '🥦',
      bg: 'bg-emerald-50 border-emerald-200',
      text: 'text-emerald-900',
    },
    carb: {
      pt: '🍠 Carboidratos & Grãos',
      en: '🍠 Carbs & Grains',
      icon: '🍠',
      bg: 'bg-amber-50 border-amber-200',
      text: 'text-amber-900',
    },
    supplement: {
      pt: '💊 Suplementos & Óleos',
      en: '💊 Supplements & Oils',
      icon: '💊',
      bg: 'bg-sky-50 border-sky-200',
      text: 'text-sky-900',
    },
    other: {
      pt: '🛒 Outros Itens',
      en: '🛒 Other Items',
      icon: '🛒',
      bg: 'bg-stone-50 border-stone-200',
      text: 'text-stone-900',
    },
  };

  // Favorite recipes details
  const favoriteRecipes = RECIPES_DATA.filter((r) => favorites.includes(r.id));

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Toast Banner */}
      {addedFeedback && (
        <div className="fixed top-20 right-4 z-50 bg-stone-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-stone-700 flex items-center gap-2 text-xs font-semibold animate-bounce">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>{addedFeedback}</span>
        </div>
      )}

      {/* Main Header Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-stone-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>{isPt ? 'Lista de Feira & Supermercado' : 'Grocery & Store List'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {isPt ? (
                <>
                  Lista de Compras do <span className="text-emerald-400">{dogProfile.name || 'Pet'}</span>
                </>
              ) : (
                <>
                  Shopping List for <span className="text-emerald-400">{dogProfile.name || 'Pet'}</span>
                </>
              )}
            </h1>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              {isPt
                ? 'Adicione ingredientes das suas receitas favoritas ou inclua itens personalizados para manter o estoque de alimentação natural sempre atualizado.'
                : 'Add ingredients from your favorite recipes or custom items to keep your homemade dog food pantry well stocked.'}
            </p>
          </div>

          {/* Favorites Quick Action Box */}
          <div className="bg-stone-800/80 border border-stone-700/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center sm:min-w-[260px] gap-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
              <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>
                {favoriteRecipes.length} {isPt ? 'Receitas Favoritas' : 'Favorite Recipes'}
              </span>
            </div>
            <button
              onClick={handleAddFavorites}
              className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>{isPt ? 'Adicionar Favoritos à Lista' : 'Add Favorites to List'}</span>
            </button>
          </div>
        </div>

        {/* Progress Bar & Summary Stats */}
        {shoppingList.length > 0 && (
          <div className="mt-6 pt-6 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1">
              <div className="flex justify-between text-stone-300 font-semibold">
                <span>{isPt ? 'Progresso das Compras' : 'Shopping Progress'}</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="w-full bg-stone-800 h-2.5 rounded-full overflow-hidden border border-stone-700">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-center gap-4 bg-stone-800/50 p-2.5 rounded-xl border border-stone-800">
              <span className="text-stone-400">{isPt ? 'A Comprar:' : 'To Buy:'}</span>
              <span className="font-bold text-emerald-400 text-sm">{pendingItems.length} items</span>
            </div>

            <div className="flex items-center justify-between sm:justify-center gap-4 bg-stone-800/50 p-2.5 rounded-xl border border-stone-800">
              <span className="text-stone-400">{isPt ? 'Já Comprados:' : 'Completed:'}</span>
              <span className="font-bold text-stone-300 text-sm">{completedItems.length} items</span>
            </div>
          </div>
        )}
      </div>

      {/* Add Custom Item Input Card */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-stone-800 flex items-center gap-2">
          <Plus className="w-4 h-4 text-emerald-600" />
          <span>{isPt ? 'Adicionar Item Personalizado' : 'Add Custom Item'}</span>
        </h3>

        <form onSubmit={handleAddCustom} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-5">
            <input
              type="text"
              placeholder={isPt ? 'Ex: Peito de Frango, Cenoura, Cálcio...' : 'E.g. Chicken breast, Carrots...'}
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            />
          </div>

          <div className="sm:col-span-3">
            <input
              type="text"
              placeholder={isPt ? 'Qtd (ex: 500g, 1 un)' : 'Qty (e.g. 500g)'}
              value={itemAmount}
              onChange={(e) => setItemAmount(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            />
          </div>

          <div className="sm:col-span-2">
            <select
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value as any)}
              className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="protein">{isPt ? '🥩 Proteína' : '🥩 Protein'}</option>
              <option value="veggie">{isPt ? '🥦 Vegetais' : '🥦 Veggies'}</option>
              <option value="carb">{isPt ? '🍠 Carboidrato' : '🍠 Carbs'}</option>
              <option value="supplement">{isPt ? '💊 Suplemento' : '💊 Supplement'}</option>
              <option value="other">{isPt ? '🛒 Outro' : '🛒 Other'}</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={!itemName.trim()}
              className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1"
            >
              <Plus className="w-4 h-4" />
              <span>{isPt ? 'Adicionar' : 'Add'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Control Toolbar & Filters */}
      {shoppingList.length > 0 && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-stone-200/60 p-2 rounded-2xl border border-stone-200">
          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterMode === 'all'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              {isPt ? 'Todos' : 'All'} ({shoppingList.length})
            </button>
            <button
              onClick={() => setFilterMode('pending')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterMode === 'pending'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              {isPt ? 'A Comprar' : 'To Buy'} ({pendingItems.length})
            </button>
            <button
              onClick={() => setFilterMode('completed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterMode === 'completed'
                  ? 'bg-stone-600 text-white shadow-sm'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              {isPt ? 'Comprados' : 'Done'} ({completedItems.length})
            </button>
          </div>

          {/* Export / Clear Tools */}
          <div className="flex items-center gap-2 self-end sm:self-auto flex-wrap">
            <button
              onClick={handleCopyList}
              className="px-3 py-1.5 rounded-xl bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              title={isPt ? 'Copiar lista formatada para WhatsApp' : 'Copy formatted list'}
            >
              {copiedNotification ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">{isPt ? 'Copiado!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-500" />
                  <span>{isPt ? 'Copiar Lista' : 'Copy List'}</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm hidden sm:flex"
              title={isPt ? 'Imprimir lista' : 'Print list'}
            >
              <Printer className="w-3.5 h-3.5 text-stone-500" />
              <span>{isPt ? 'Imprimir' : 'Print'}</span>
            </button>

            {completedItems.length > 0 && (
              <button
                onClick={clearCheckedShoppingItems}
                className="px-3 py-1.5 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 text-xs font-bold transition-all flex items-center gap-1"
                title={isPt ? 'Remover itens já comprados' : 'Clear completed'}
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{isPt ? 'Limpar Comprados' : 'Clear Done'}</span>
              </button>
            )}

            <button
              onClick={() => {
                if (window.confirm(isPt ? 'Tem certeza que deseja limpar toda a lista?' : 'Clear entire list?')) {
                  clearAllShoppingItems();
                }
              }}
              className="px-2.5 py-1.5 rounded-xl text-stone-400 hover:text-stone-700 text-xs font-medium transition-colors"
              title={isPt ? 'Esvaziar tudo' : 'Clear all'}
            >
              {isPt ? 'Esvaziar' : 'Clear All'}
            </button>
          </div>
        </div>
      )}

      {/* Shopping Items List */}
      {shoppingList.length === 0 ? (
        <div className="bg-white p-10 sm:p-14 text-center rounded-3xl border border-stone-200 space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <ShoppingCart className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-stone-800">
              {isPt ? 'Sua lista de compras está vazia' : 'Your shopping list is empty'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto leading-relaxed">
              {isPt
                ? 'Você pode adicionar ingredientes diretamente das suas receitas favoritas ou digitar itens avulsos acima para se organizar na feira ou supermercado.'
                : 'Add ingredients directly from your favorite recipes or type custom items above to organize your grocery trips.'}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleAddFavorites}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>
                {isPt
                  ? `Adicionar das ${favoriteRecipes.length} Receitas Favoritas`
                  : `Add from ${favoriteRecipes.length} Favorites`}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('recipes')}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              <span>{isPt ? 'Explorar Livro de Receitas' : 'Explore Recipe Catalog'}</span>
            </button>
          </div>
        </div>
      ) : displayItems.length === 0 ? (
        <div className="bg-white p-8 text-center rounded-3xl border border-stone-200 space-y-2">
          <p className="text-sm font-bold text-stone-700">
            {isPt ? 'Nenhum item nesta visualização.' : 'No items match this filter.'}
          </p>
          <button
            onClick={() => setFilterMode('all')}
            className="text-xs text-emerald-600 font-bold underline"
          >
            {isPt ? 'Ver todos os itens' : 'View all items'}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Categorized Grouping View */}
          {(['protein', 'veggie', 'carb', 'supplement', 'other'] as const).map((cat) => {
            const catItems = displayItems.filter((i) => i.category === cat);
            if (catItems.length === 0) return null;

            const label = categoryLabels[cat];

            return (
              <div
                key={cat}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm"
              >
                {/* Category Group Header */}
                <div className={`p-4 border-b flex items-center justify-between ${label.bg}`}>
                  <div className="flex items-center gap-2">
                    <span className={`font-bold text-sm ${label.text}`}>
                      {isPt ? label.pt : label.en}
                    </span>
                    <span className="text-xs bg-white/80 px-2 py-0.5 rounded-full font-bold text-stone-700 border border-stone-200">
                      {catItems.length}
                    </span>
                  </div>
                </div>

                {/* Items in this category */}
                <div className="divide-y divide-stone-100">
                  {catItems.map((item) => {
                    const title = isPt ? item.namePt || item.name : item.name;

                    return (
                      <div
                        key={item.id}
                        className={`p-3.5 sm:p-4 flex items-center justify-between gap-3 transition-colors ${
                          item.checked ? 'bg-stone-50/80 text-stone-400' : 'hover:bg-stone-50/50'
                        }`}
                      >
                        {/* Checkbox & Name */}
                        <button
                          type="button"
                          onClick={() => toggleShoppingItem(item.id)}
                          className="flex items-center gap-3 text-left flex-1 min-w-0 group"
                        >
                          <div className="flex-shrink-0">
                            {item.checked ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                            ) : (
                              <Circle className="w-5 h-5 text-stone-300 group-hover:text-emerald-500 transition-colors" />
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <p
                              className={`text-xs sm:text-sm font-semibold truncate ${
                                item.checked ? 'line-through text-stone-400' : 'text-stone-800'
                              }`}
                            >
                              {title}
                            </p>

                            {item.recipeTitle && (
                              <p className="text-[10px] text-stone-400 flex items-center gap-1 mt-0.5 truncate">
                                <span>🍲</span>
                                <span className="italic">{item.recipeTitle}</span>
                              </p>
                            )}
                          </div>
                        </button>

                        {/* Amount & Actions */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                          {item.amount && (
                            <span
                              className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${
                                item.checked
                                  ? 'bg-stone-100 text-stone-400 border-stone-200'
                                  : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              }`}
                            >
                              {item.amount}
                            </span>
                          )}

                          <button
                            type="button"
                            onClick={() => removeShoppingItem(item.id)}
                            className="p-1.5 rounded-lg text-stone-300 hover:text-rose-500 hover:bg-rose-50 transition-colors"
                            title={isPt ? 'Remover item' : 'Remove item'}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Favorite Recipes Overview Drawer/Section */}
      {favoriteRecipes.length > 0 && (
        <div className="bg-stone-900 text-white p-6 rounded-3xl space-y-4 border border-stone-800 shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>{isPt ? 'Receitas Salvas nos Seus Favoritos' : 'Saved Favorite Recipes'}</span>
            </h3>
            <button
              onClick={() => setActiveTab('recipes')}
              className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>{isPt ? 'Ver Todas' : 'View All'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {favoriteRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-stone-800 p-3.5 rounded-2xl border border-stone-700 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <p className="text-xs font-bold text-stone-100 truncate">
                    {isPt ? recipe.titlePt || recipe.title : recipe.title}
                  </p>
                  <p className="text-[10px] text-stone-400">
                    {recipe.ingredients.length} {isPt ? 'ingredientes' : 'ingredients'}
                  </p>
                </div>

                <button
                  onClick={() => {
                    const added = addRecipeToShoppingList(recipe.id, 'scaled');
                    showToast(
                      added > 0
                        ? (isPt ? `+${added} ingredientes adicionados!` : `+${added} items added!`)
                        : (isPt ? 'Ingredientes já estão na lista!' : 'Items already in list!')
                    );
                  }}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] transition-colors flex-shrink-0 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isPt ? 'Add à Lista' : 'Add'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

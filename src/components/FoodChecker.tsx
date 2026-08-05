import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { FOODS_SAFETY_DATA } from '../data/foodsData';
import {
  ShieldAlert,
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  PhoneCall,
  Apple,
  Sparkles,
  Info
} from 'lucide-react';

export const FoodChecker: React.FC = () => {
  const { language } = useApp();
  const isPt = language === 'pt';

  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'allowed' | 'forbidden'>('all');

  const filteredFoods = useMemo(() => {
    return FOODS_SAFETY_DATA.filter((item) => {
      // Allowed filter
      if (filterType === 'allowed' && item.isAllowed !== true) return false;
      if (filterType === 'forbidden' && item.isAllowed !== false && item.isAllowed !== 'caution') return false;

      // Search query
      if (query.trim()) {
        const q = query.toLowerCase();
        const nameMatch = item.name.toLowerCase().includes(q) || item.namePt.toLowerCase().includes(q);
        const noteMatch =
          item.note.toLowerCase().includes(q) || (item.notePt && item.notePt.toLowerCase().includes(q));
        const reasonMatch =
          (item.reasonIfForbidden && item.reasonIfForbidden.toLowerCase().includes(q)) ||
          (item.reasonIfForbiddenPt && item.reasonIfForbiddenPt.toLowerCase().includes(q));

        return nameMatch || noteMatch || reasonMatch;
      }

      return true;
    });
  }, [filterType, query]);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Capítulo 8 — {isPt ? 'Segurança Alimentar' : 'Food Safety Guide'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {isPt ? 'Alimentos Permitidos e Proibidos' : 'Allowed and Forbidden Foods for Dogs'}
        </h1>
        <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
          {isPt
            ? 'Guia de consulta rápida antes de servir qualquer fruta ou petisco. Descubra quais alimentos são ótimos e quais são tóxicos para o seu cão.'
            : 'Quick visual reference before serving any human food. Learn which fruits are healthy and which foods pose severe toxic risks.'}
        </p>
      </div>

      {/* Emergency Advisory Box */}
      <div className="bg-rose-50 border-2 border-rose-300 rounded-3xl p-5 sm:p-6 space-y-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center flex-shrink-0 font-bold shadow-md">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-rose-950 text-sm sm:text-base">
              {isPt ? 'Ingestão Acidental de Alimento Tóxico?' : 'Accidental Toxic Food Ingestion?'}
            </h3>
            <p className="text-xs text-rose-800 leading-relaxed mt-0.5">
              {isPt
                ? 'Em caso de ingestão de uvas, chocolate, cebola, alho ou xilitol, contate imediatamente um médico veterinário ou pronto-socorro animal. Leve a embalagem do alimento.'
                : 'If your dog ingested grapes, chocolate, onions, or xylitol, contact a veterinarian or emergency pet clinic immediately. Bring the ingested food packaging.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0 self-stretch sm:self-auto">
          <a
            href="tel:190"
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{isPt ? 'Emergência Vet' : 'Vet Emergency'}</span>
          </a>
        </div>
      </div>

      {/* Interactive Search Bar & Filter Tabs */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                isPt
                  ? 'Consulte se o seu cão pode comer: maçã, uva, banana, abacate, chocolate...'
                  : 'Check if your dog can eat: apple, grape, banana, avocado, chocolate...'
              }
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              id="food-checker-input"
            />
          </div>

          <div className="flex items-center gap-2">
            {[
              { id: 'all', label: isPt ? 'Todos os Alimentos' : 'All Foods' },
              { id: 'allowed', label: isPt ? '✅ Frutas e Alimentos Permitidos' : '✅ Allowed Foods' },
              { id: 'forbidden', label: isPt ? '⛔ Proibidos e Tóxicos' : '⛔ Forbidden & Toxic' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  filterType === tab.id
                    ? 'bg-stone-900 text-white shadow'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
                id={`filter-food-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Foods Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredFoods.map((food) => {
          const isAllowed = food.isAllowed === true;
          const isCaution = food.isAllowed === 'caution';
          const nameText = isPt ? food.namePt : food.name;
          const noteText = isPt ? food.notePt || food.note : food.note;
          const reasonText = isPt
            ? food.reasonIfForbiddenPt || food.reasonIfForbidden
            : food.reasonIfForbidden;

          return (
            <div
              key={food.id}
              className={`p-5 rounded-3xl border transition-all space-y-2.5 ${
                isAllowed
                  ? 'bg-emerald-50/70 border-emerald-200 hover:border-emerald-400'
                  : isCaution
                  ? 'bg-amber-50/70 border-amber-200 hover:border-amber-400'
                  : 'bg-rose-50/80 border-rose-200 hover:border-rose-400'
              }`}
              id={`food-card-${food.id}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-extrabold text-stone-900 text-base flex items-center gap-2">
                    <span>{nameText}</span>
                  </h3>
                  <p className="text-[11px] font-bold text-stone-600 mt-0.5">
                    {food.name !== food.namePt ? (isPt ? food.name : food.namePt) : ''}
                  </p>
                </div>

                <span
                  className={`text-[10px] font-black px-2.5 py-1 rounded-full border flex items-center gap-1 ${
                    isAllowed
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : isCaution
                      ? 'bg-amber-500 text-white border-amber-500'
                      : 'bg-rose-600 text-white border-rose-600'
                  }`}
                >
                  {isAllowed ? (
                    <>
                      <CheckCircle2 className="w-3 h-3" />
                      {isPt ? 'PERMITIDO' : 'ALLOWED'}
                    </>
                  ) : isCaution ? (
                    <>
                      <Info className="w-3 h-3" />
                      {isPt ? 'CUIDADO' : 'CAUTION'}
                    </>
                  ) : (
                    <>
                      <XCircle className="w-3 h-3" />
                      {isPt ? 'PROIBIDO' : 'FORBIDDEN'}
                    </>
                  )}
                </span>
              </div>

              <div className="text-xs text-stone-800 space-y-1.5 pt-1">
                <p className="font-semibold leading-relaxed">{noteText}</p>

                {reasonText && (
                  <p className="text-rose-900 font-medium bg-rose-100/70 p-2.5 rounded-xl border border-rose-200 text-[11px] leading-relaxed">
                    <strong>{isPt ? 'Risco:' : 'Hazard:'}</strong> {reasonText}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

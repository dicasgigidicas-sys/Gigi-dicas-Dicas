import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  CalendarDays,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Info,
  Scale,
  Dog
} from 'lucide-react';

export const TransitionPlanner: React.FC = () => {
  const { language, dogProfile, portionResult } = useApp();
  const isPt = language === 'pt';

  const [selectedDay, setSelectedDay] = useState<number>(1);

  const transitionStages = [
    {
      dayRange: 'Dias 1–2',
      dayRangeEn: 'Days 1–2',
      naturalPercent: 25,
      kibblePercent: 75,
      description: 'Introdução suave. Misture 25% da porção diária de comida natural com 75% da ração antiga.',
      descriptionEn: 'Gentle introduction. Mix 25% natural cooked meal with 75% old kibble.',
      stoolNote: 'Fezes normais ou ligeiramente mais macias. Acompanhe a adaptação digestiva.',
      stoolNoteEn: 'Normal or slightly softer stool expected as gut microbiota adjusts.'
    },
    {
      dayRange: 'Dias 3–4',
      dayRangeEn: 'Days 3–4',
      naturalPercent: 50,
      kibblePercent: 50,
      description: 'Meio a meio. Proporções iguais em todas as refeições do dia.',
      descriptionEn: 'Half & half. Equal proportions across all daily meals.',
      stoolNote: 'O intestino começa a se adaptar. Mantenha os horários regulares de alimentação.',
      stoolNoteEn: 'Intestinal flora adapting well. Keep feeding times consistent.'
    },
    {
      dayRange: 'Dias 5–6',
      dayRangeEn: 'Days 5–6',
      naturalPercent: 75,
      kibblePercent: 25,
      description: 'Maioria natural. 75% de comida natural fresca e apenas 25% da ração antiga.',
      descriptionEn: 'Majority natural. 75% fresh natural food and only 25% old kibble.',
      stoolNote: 'As fezes tendem a diminuir de volume e ficar mais firmes com menor odor.',
      stoolNoteEn: 'Stools decrease in volume, become firmer, and smell significantly less.'
    },
    {
      dayRange: 'Dia 7 em Diante',
      dayRangeEn: 'Day 7 Onwards',
      naturalPercent: 100,
      kibblePercent: 0,
      description: 'Alimentação 100% Natural! Transição concluída com sucesso.',
      descriptionEn: '100% Fresh Natural Feeding! Transition successfully completed.',
      stoolNote: 'Digestão limpa, maior energia e absorção completa de nutrientes!',
      stoolNoteEn: 'Clean digestion, vibrant energy, and high nutrient absorption!'
    }
  ];

  const currentStage = transitionStages[Math.min(selectedDay - 1, 3)];

  // Portion weight calculation split
  const dailyTotalGrams = portionResult.totalDailyFoodGrams;
  const naturalPortionGrams = Math.round((dailyTotalGrams * currentStage.naturalPercent) / 100);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-stone-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold">
          <CalendarDays className="w-3.5 h-3.5" />
          <span>Capítulo 2 — {isPt ? 'Regra de Transição' : 'Transition Schedule'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {isPt ? 'Cronograma de Transição de Dieta (7 a 10 Dias)' : 'Gradual Diet Transition Planner'}
        </h1>
        <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
          {isPt
            ? 'Trocar a ração por comida natural deve ser feito gradualmente para permitir que a microbiota intestinal se adapte sem vômitos ou diarreia.'
            : 'Switching from kibble to natural food must be done step-by-step over 7-10 days to protect gut bacteria and avoid digestive discomfort.'}
        </p>
      </div>

      {/* Interactive Day Step Selector */}
      <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-stone-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-teal-600" />
            <span>{isPt ? 'Selecione a Etapa da Transição' : 'Select Transition Stage'}</span>
          </h2>

          <div className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            🐾 {dogProfile.name || 'Pet'}: {dailyTotalGrams}g / {isPt ? 'dia total' : 'day total'}
          </div>
        </div>

        {/* Day Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {transitionStages.map((stage, idx) => {
            const isSelected = selectedDay === idx + 1;
            return (
              <button
                key={idx}
                onClick={() => setSelectedDay(idx + 1)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-teal-600 text-white border-teal-600 shadow-md scale-102 font-bold'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                }`}
                id={`btn-transition-stage-${idx}`}
              >
                <p className="text-xs font-black uppercase opacity-90">
                  {isPt ? stage.dayRange : stage.dayRangeEn}
                </p>
                <p className="text-lg font-extrabold mt-1">
                  {stage.naturalPercent}% {isPt ? 'Natural' : 'Fresh'}
                </p>
                <p className="text-[10px] opacity-80 mt-0.5">
                  {stage.kibblePercent}% {isPt ? 'Ração' : 'Kibble'}
                </p>
              </button>
            );
          })}
        </div>

        {/* Visual Progress Ratio Bar */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between text-xs font-bold text-stone-700">
            <span className="text-emerald-700 flex items-center gap-1">
              🌱 {isPt ? 'Comida Natural' : 'Natural Food'}: {currentStage.naturalPercent}% ({naturalPortionGrams}g)
            </span>
            <span className="text-amber-700 flex items-center gap-1">
              🦴 {isPt ? 'Ração Antiga' : 'Old Kibble'}: {currentStage.kibblePercent}% ({dailyTotalGrams - naturalPortionGrams}g)
            </span>
          </div>

          <div className="h-4 w-full rounded-full bg-stone-200 overflow-hidden flex p-0.5 gap-0.5">
            <div
              className="bg-emerald-500 h-full rounded-l-full transition-all duration-500"
              style={{ width: `${currentStage.naturalPercent}%` }}
            />
            <div
              className="bg-amber-400 h-full rounded-r-full transition-all duration-500"
              style={{ width: `${currentStage.kibblePercent}%` }}
            />
          </div>
        </div>

        {/* Selected Stage Explanation Box */}
        <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 space-y-3 text-teal-900">
          <h3 className="font-extrabold text-sm text-teal-950 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-teal-600" />
            <span>
              {isPt ? 'Instruções para ' + currentStage.dayRange : 'Instructions for ' + currentStage.dayRangeEn}
            </span>
          </h3>

          <p className="text-xs sm:text-sm text-teal-900 leading-relaxed font-medium">
            {isPt ? currentStage.description : currentStage.descriptionEn}
          </p>

          <div className="bg-white p-3.5 rounded-xl border border-teal-200 text-xs text-stone-700 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>{isPt ? 'O que esperar das fezes:' : 'Stool expectation:'}</strong>{' '}
              {isPt ? currentStage.stoolNote : currentStage.stoolNoteEn}
            </p>
          </div>
        </div>
      </div>

      {/* Safety Tips during Transition */}
      <div className="bg-stone-900 text-white p-6 sm:p-8 rounded-3xl space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-400" />
          <span>{isPt ? 'Regras de Ouro da Transição' : 'Transition Golden Rules'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-300">
          <div className="p-3.5 rounded-2xl bg-stone-800/80 border border-stone-700 space-y-1">
            <p className="font-bold text-white text-sm">🚫 {isPt ? 'NUNCA use temperos' : 'NEVER use seasonings'}</p>
            <p className="leading-relaxed">
              {isPt
                ? 'Sem sal, sem alho, sem cebola, sem caldos em cubo. Tudo deve ser preparado em água pura.'
                : 'No salt, garlic, onion, or stock cubes. Prepare everything plain.'}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-stone-800/80 border border-stone-700 space-y-1">
            <p className="font-bold text-white text-sm">🦴 {isPt ? 'Adicione Cálcio Diário' : 'Add Daily Calcium'}</p>
            <p className="leading-relaxed">
              {isPt
                ? 'Comida caseira sem cálcio causa perdas ósseas. Adicione pó de casca de ovo ou suplemento vet.'
                : 'Homemade meals without calcium cause severe bone loss. Always supplement calcium.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

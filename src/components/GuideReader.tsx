import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CHAPTERS_DATA } from '../data/chaptersData';
import {
  BookOpen,
  Clock,
  ChevronRight,
  ChevronLeft,
  AlertTriangle,
  Info,
  CheckCircle2,
  Sparkles,
  Calculator,
  UtensilsCrossed
} from 'lucide-react';

export const GuideReader: React.FC = () => {
  const { language, setActiveTab } = useApp();
  const isPt = language === 'pt';

  const [activeChapterId, setActiveChapterId] = useState<number>(0);

  const currentChapter = CHAPTERS_DATA.find((c) => c.id === activeChapterId) || CHAPTERS_DATA[0];

  const currentIndex = CHAPTERS_DATA.findIndex((c) => c.id === currentChapter.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < CHAPTERS_DATA.length - 1;

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Reader Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-sky-950 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{isPt ? 'Livro / Guia Completo' : 'Complete E-Book Reader'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {isPt ? 'Comida Caseira para Cães — Guia Teórico' : 'Homemade Dog Food — Complete Guide'}
        </h1>
        <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
          {isPt
            ? 'Aprenda os princípios da alimentação natural, cuidados de higiene, fórmulas de cálculo, economia e como fazer ração desidratada caseira.'
            : 'Learn principles of natural feeding, hygiene, portion formulas, budgeting, and homemade dry kibble.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Table of Contents Sidebar (4 cols on desktop) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-stone-200 shadow-sm space-y-3 sticky top-20">
          <h2 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider px-2 flex items-center justify-between">
            <span>{isPt ? 'Índice de Capítulos' : 'Table of Contents'}</span>
            <span className="text-xs text-stone-600 font-normal">
              {isPt ? 'Introdução + 9 Capítulos' : 'Intro + 9 Chapters'}
            </span>
          </h2>

          <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
            {CHAPTERS_DATA.map((ch) => {
              const isActive = ch.id === activeChapterId;
              const titleText = isPt ? ch.titlePt : ch.title;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapterId(ch.id)}
                  className={`w-full p-3 rounded-2xl text-left transition-all flex items-start gap-3 ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-md font-bold'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700'
                  }`}
                  id={`chapter-link-${ch.id}`}
                >
                  <div
                    className={`px-1.5 py-0.5 rounded-lg flex items-center justify-center font-bold text-[11px] flex-shrink-0 mt-0.5 ${
                      isActive ? 'bg-emerald-500 text-white' : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    {ch.id === 0 ? 'Intro' : `Cap ${ch.id}`}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold leading-tight truncate">{titleText}</p>
                    <p className={`text-[10px] mt-0.5 ${isActive ? 'text-stone-300' : 'text-stone-600'}`}>
                      {ch.readTimeMinutes} min {isPt ? 'de leitura' : 'read'}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chapter Content Main Reader (8 cols on desktop) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          {/* Chapter Header */}
          <div className="border-b border-stone-200 pb-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-stone-900 text-white text-xs font-bold">
                {currentChapter.id === 0
                  ? isPt
                    ? 'Introdução ao Guia'
                    : 'Guide Introduction'
                  : `${isPt ? 'Capítulo' : 'Chapter'} ${currentChapter.id}`}
              </span>
              <span className="text-xs text-stone-600 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                {currentChapter.readTimeMinutes} {isPt ? 'minutos' : 'mins'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              {isPt ? currentChapter.titlePt : currentChapter.title}
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed font-medium">
              {isPt ? currentChapter.subtitlePt : currentChapter.subtitle}
            </p>
          </div>

          {/* Chapter Sections */}
          <div className="space-y-8">
            {currentChapter.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{isPt ? sec.headingPt || sec.heading : sec.heading}</span>
                </h3>

                <p className="text-sm text-stone-700 leading-relaxed">
                  {isPt ? sec.contentPt || sec.content : sec.content}
                </p>

                {/* Bullet Points */}
                {(sec.bulletPoints || sec.bulletPointsPt) && (
                  <ul className="space-y-2 pt-1 pl-2">
                    {(isPt && sec.bulletPointsPt ? sec.bulletPointsPt : sec.bulletPoints)!.map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                )}

                {/* Callout Box */}
                {sec.callout && (
                  <div
                    className={`p-4 rounded-2xl border space-y-1 mt-4 ${
                      sec.callout.type === 'warning' || sec.callout.type === 'danger'
                        ? 'bg-amber-50 border-amber-300 text-amber-900'
                        : 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-xs">
                      <AlertTriangle
                        className={`w-4 h-4 ${
                          sec.callout.type === 'warning' ? 'text-amber-600' : 'text-emerald-600'
                        }`}
                      />
                      <span>{sec.callout.title}</span>
                    </div>
                    <p className="text-xs leading-relaxed">{sec.callout.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contextual Jump Buttons inside Reader */}
          {currentChapter.id === 0 && (
            <div className="bg-sky-50 p-5 rounded-2xl border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-sm text-sky-900">
                  {isPt ? 'Deseja ir direto aos Benefícios?' : 'Want to go directly to Benefits?'}
                </p>
                <p className="text-xs text-sky-700">
                  {isPt ? 'Avance para o Capítulo 1 e entenda o impacto no pelo e digestão.' : 'Proceed to Chapter 1 to understand health impacts.'}
                </p>
              </div>
              <button
                onClick={() => setActiveChapterId(1)}
                className="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow"
              >
                <span>{isPt ? 'Ir para Capítulo 1' : 'Go to Chapter 1'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {currentChapter.id === 4 && (
            <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-sm text-emerald-900">{isPt ? 'Pronto para calcular a porção?' : 'Ready to calculate portions?'}</p>
                <p className="text-xs text-emerald-700">{isPt ? 'Acesse a calculadora interativa com RER/DME.' : 'Use the interactive RER/DME calculator.'}</p>
              </div>
              <button
                onClick={() => setActiveTab('calculator')}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow"
              >
                <Calculator className="w-4 h-4" />
                <span>{isPt ? 'Abrir Calculadora' : 'Open Calculator'}</span>
              </button>
            </div>
          )}

          {currentChapter.id === 9 && (
            <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-sm text-amber-900">{isPt ? 'Veja as 50+ receitas na prática' : 'See 50+ recipes in practice'}</p>
                <p className="text-xs text-amber-700">{isPt ? 'Confira pratos principais, petiscos e picolés.' : 'Check meals, treats, and frozen pops.'}</p>
              </div>
              <button
                onClick={() => setActiveTab('recipes')}
                className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>{isPt ? 'Ver Receitas' : 'View Recipes'}</span>
              </button>
            </div>
          )}

          {/* Chapter Prev / Next Navigation Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-stone-200">
            <button
              disabled={!hasPrev}
              onClick={() => {
                if (hasPrev) setActiveChapterId(CHAPTERS_DATA[currentIndex - 1].id);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                !hasPrev
                  ? 'bg-stone-100 text-stone-300 cursor-not-allowed'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{isPt ? 'Capítulo Anterior' : 'Previous Chapter'}</span>
            </button>

            <button
              disabled={!hasNext}
              onClick={() => {
                if (hasNext) setActiveChapterId(CHAPTERS_DATA[currentIndex + 1].id);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                !hasNext
                  ? 'bg-stone-100 text-stone-300 cursor-not-allowed'
                  : 'bg-stone-900 hover:bg-stone-800 text-white shadow'
              }`}
            >
              <span>{isPt ? 'Próximo Capítulo' : 'Next Chapter'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

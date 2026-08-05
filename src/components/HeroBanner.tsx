import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Calculator,
  UtensilsCrossed,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Bot,
  Heart,
  CheckCircle2,
  CalendarDays,
  Scale,
  Camera,
  User
} from 'lucide-react';

export const HeroBanner: React.FC = () => {
  const { language, setActiveTab, dogProfile } = useApp();
  const isPt = language === 'pt';

  return (
    <div className="space-y-12 pb-8">
      {/* Hero Header Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white border border-stone-800 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center relative z-10">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isPt ? 'Guia Definitivo e Interativo' : 'Complete Interactive Guide'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Healthy Dog Meals <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-200">By Mel</span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {isPt
                ? 'Mais de 50 receitas saúdaveis, testadas e econômicas para o seu cão viver mais, com pelo brilhante, energia vibrante e saúde de ferro. Inclui calculadora de gramas diárias e guia de transição.'
                : 'Over 50 healthy, budget-friendly, tested recipes to help your dog feel healthier, happier, and full of energy. Includes interactive portion calculator and step-by-step transition guide.'}
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-800/80 border border-stone-700/60 text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{isPt ? '50+ Receitas Testadas' : '50+ Tested Recipes'}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-800/80 border border-stone-700/60 text-stone-200">
                <Scale className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{isPt ? 'Calculadora RER/DME' : 'RER/DME Calculator'}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-800/80 border border-stone-700/60 text-stone-200 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{isPt ? 'Guia Tabela Alimentos' : 'Food Safety Table'}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <button
                onClick={() => setActiveTab('calculator')}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/40 flex items-center gap-2 transition-all hover:scale-102"
                id="hero-calculator-btn"
              >
                <Calculator className="w-4 h-4" />
                <span>{isPt ? 'Calcular Porção do Seu Cão' : 'Calculate Dog Portion'}</span>
              </button>

              <button
                onClick={() => setActiveTab('recipes')}
                className="px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold text-sm border border-stone-700 flex items-center gap-2 transition-all"
                id="hero-recipes-btn"
              >
                <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                <span>{isPt ? 'Ver 50+ Receitas' : 'Explore 50+ Recipes'}</span>
              </button>
            </div>
          </div>

          {/* Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-stone-700/80 shadow-2xl group">
              <img
                src="/src/assets/images/hero_dog_food_1785692600274.jpg"
                alt="Homemade Natural Dog Food"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-stone-900/90 backdrop-blur-md rounded-xl border border-stone-700 text-xs text-stone-200 flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-sm">{isPt ? 'Comida Fresca e Reconhecível' : 'Fresh Natural Meal'}</p>
                  <p className="text-stone-400 text-[11px]">{isPt ? 'Frango, Batata Doce, Cenoura e Vagem' : 'Chicken, Sweet Potato & Veggies'}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px] border border-emerald-500/30">
                  100% {isPt ? 'Natural' : 'Fresh'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation Category Grid */}
      <div className="space-y-4">
        {/* Guide Introduction Preview Section */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-850 to-sky-950 text-white border border-stone-800 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isPt ? 'Introdução ao Guia' : 'Guide Introduction'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {isPt ? 'Comida Caseira para Cães — Guia Definitivo' : 'Homemade Dog Food — Complete Guide'}
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
                {isPt
                  ? 'Oferecer alimentos naturais preparados em casa é o maior presente de longevidade para seu cão. Aprenda a equilibrar proteínas, carboidratos, suplementação de cálcio e fazer a transição gradual perfeita.'
                  : 'Serving homemade natural food is the best gift of health for your dog. Learn how to balance proteins, carbs, mandatory calcium supplementation, and make a seamless diet transition.'}
              </p>
            </div>
            <button
              onClick={() => setActiveTab('guide')}
              className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-lg shadow-sky-950/50 flex items-center justify-center gap-2 transition-all flex-shrink-0"
              id="hero-read-intro-btn"
            >
              <BookOpen className="w-4 h-4" />
              <span>{isPt ? 'Ler Introdução Completa' : 'Read Full Introduction'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs border-t border-stone-800">
            <div className="flex items-center gap-2 text-stone-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{isPt ? 'ZERO Temperos Tóxicos' : 'ZERO Toxic Seasonings'}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{isPt ? 'Cálcio Obrigatório (Casca de Ovo)' : 'Mandatory Calcium Powder'}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{isPt ? 'Transição Gradual em 7–10 Dias' : '7–10 Day Gradual Transition'}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            {isPt ? 'Recursos e Módulos do App' : 'App Features & Modules'}
          </h2>
          <p className="text-xs text-stone-500 hidden sm:block">
            {isPt ? 'Acesse os guias práticos abaixo' : 'Select a module to start'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 0: Owner Dashboard & Pet Camera */}
          <button
            onClick={() => setActiveTab('dashboard')}
            className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all text-left group flex flex-col justify-between"
            id="card-dashboard"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform overflow-hidden relative">
                {dogProfile.photoUrl ? (
                  <img src={dogProfile.photoUrl} alt={dogProfile.name} className="w-full h-full object-cover" />
                ) : (
                  <Camera className="w-6 h-6" />
                )}
              </div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                {dogProfile.name || 'Pet Profile'}
              </span>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                {isPt ? 'Painel do Cão (Foto e Perfil)' : 'Owner Dashboard & Pet Photo'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {isPt
                  ? 'Adicione uma foto do seu cão, defina raça, idade, peso e personalize a experiência no app.'
                  : 'Add a photo of your dog, save breed, age, weight, and customize your app experience.'}
              </p>
            </div>
          </button>

          {/* Card 1: Portion Calculator */}
          <button
            onClick={() => setActiveTab('calculator')}
            className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all text-left group flex flex-col justify-between"
            id="card-calculator"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Calculator className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-600">
                RER + DME
              </span>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                {isPt ? 'Calculadora de Porção Diária' : 'Daily Portion Calculator'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {isPt
                  ? 'Descubra a quantidade exata em gramas de comida por dia de acordo com o peso, idade e nível de atividade do seu cão.'
                  : 'Calculate exact daily gram portions based on weight, age stage, and activity multipliers.'}
              </p>
            </div>
          </button>

          {/* Card 2: 50+ Recipes */}
          <button
            onClick={() => setActiveTab('recipes')}
            className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-amber-500 shadow-sm hover:shadow-md transition-all text-left group flex flex-col justify-between"
            id="card-recipes"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
                50+ {isPt ? 'Receitas' : 'Recipes'}
              </span>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                {isPt ? 'Banco de Receitas com Redimensionador' : '50+ Tested Recipes'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {isPt
                  ? 'Refeições completas, petiscos assados e picolés congelados. Altere os ingredientes para o peso do seu cão!'
                  : 'Complete meals, baked treats, and frozen popsicles with live portion scaling for your dog.'}
              </p>
            </div>
          </button>

          {/* Card 3: Food Checker */}
          <button
            onClick={() => setActiveTab('foods')}
            className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-rose-500 shadow-sm hover:shadow-md transition-all text-left group flex flex-col justify-between"
            id="card-foods"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200">
                {isPt ? 'Tabela Segurança' : 'Food Safety'}
              </span>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-bold text-stone-900 group-hover:text-rose-700 transition-colors">
                {isPt ? 'Alimentos Permitidos e Proibidos' : 'Allowed & Forbidden Foods'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {isPt
                  ? 'Busca rápida "Meu cão pode comer isso?". Descubra frutas seguras e toxinas fatais a evitar.'
                  : 'Instant lookup "Can my dog eat this?". Fruits, vegetables, and toxic foods to avoid.'}
              </p>
            </div>
          </button>

          {/* Card 4: Transition Guide */}
          <button
            onClick={() => setActiveTab('transition')}
            className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-teal-500 shadow-sm hover:shadow-md transition-all text-left group flex flex-col justify-between"
            id="card-transition"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <CalendarDays className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-teal-50 text-teal-700">
                7–10 {isPt ? 'Dias' : 'Days'}
              </span>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-bold text-stone-900 group-hover:text-teal-700 transition-colors">
                {isPt ? 'Plano de Transição de Dieta' : 'Diet Transition Schedule'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {isPt
                  ? 'Passo a passo seguro para trocar a ração seca por comida natural sem vômitos nem diarreia.'
                  : 'Step-by-step gradual transition schedule to switch from kibble without intestinal distress.'}
              </p>
            </div>
          </button>

          {/* Card 5: E-Book Chapters */}
          <button
            onClick={() => setActiveTab('guide')}
            className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-sky-500 shadow-sm hover:shadow-md transition-all text-left group flex flex-col justify-between"
            id="card-guide"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-sky-50 text-sky-700">
                {isPt ? 'Intro + 9 Capítulos' : 'Intro + 9 Chapters'}
              </span>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-bold text-stone-900 group-hover:text-sky-700 transition-colors">
                {isPt ? 'Livro / Guia Completo' : 'Complete E-Book Guide'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {isPt
                  ? 'Leia a introdução e os 9 capítulos com técnicas de preparo, suplementação de cálcio e ração desidratada.'
                  : 'Read the introduction and 9 chapters on cooking techniques, mandatory calcium sources, and dry pet food.'}
              </p>
            </div>
          </button>

          {/* Card 6: AI Veterinary Nutri Assistant */}
          <button
            onClick={() => setActiveTab('ai')}
            className="p-5 rounded-2xl bg-gradient-to-br from-emerald-900 to-stone-900 border border-emerald-700/60 shadow-sm hover:shadow-lg transition-all text-left group flex flex-col justify-between text-white"
            id="card-ai"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold group-hover:scale-110 transition-transform border border-emerald-500/30">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                IA Gemini 3.6
              </span>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-bold text-white group-hover:text-emerald-300 transition-colors">
                {isPt ? 'Assistente Nutri IA "Dr. NutriPaw"' : 'AI Vet Nutritionist "Dr. NutriPaw"'}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {isPt
                  ? 'Tire dúvidas sobre substituições de alimentos, cálculo de pó de casca de ovo ou crie receitas sob medida.'
                  : 'Ask about food substitutions, eggshell calcium powder calculation, or generate custom tailored recipes.'}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

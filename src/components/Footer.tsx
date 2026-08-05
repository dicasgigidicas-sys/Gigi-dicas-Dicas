import React from 'react';
import { useApp } from '../context/AppContext';
import { Dog, ShieldAlert, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setActiveTab } = useApp();
  const isPt = language === 'pt';

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 mt-16 pb-20 md:pb-10 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Column 1: Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
                <Dog className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                Healthy Dog Meals By Mel
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              {isPt
                ? 'Guia interativo definitivo de Alimentação Natural Caseira para Cães. Mais de 50 receitas, calculadora de porções RER/DME, tabela de segurança alimentar e assistente de nutrição IA.'
                : 'Definitive interactive guide to Homemade Natural Dog Food. Over 50 recipes, RER/DME portion calculator, food safety tables, and AI nutrition assistant.'}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              {isPt ? 'Módulos do App' : 'App Modules'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('calculator')}
                  className="text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  {isPt ? 'Calculadora de Porção (RER/DME)' : 'Portion Calculator'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('recipes')}
                  className="text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  {isPt ? 'Livro de Receitas (50+)' : '50+ Recipe Book'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('shopping')}
                  className="text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  {isPt ? 'Lista de Compras de Ingredientes' : 'Ingredient Shopping List'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('foods')}
                  className="text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  {isPt ? 'Alimentos Permitidos e Proibidos' : 'Allowed / Forbidden Foods'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('transition')}
                  className="text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  {isPt ? 'Cronograma de Transição de Dieta' : 'Transition Schedule'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Guide Chapters */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              {isPt ? 'E-Book Guia Teórico' : 'E-Book Guide'}
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>{isPt ? '• Capítulo 1: Benefícios da Alimentação Caseira' : '• Ch 1: Benefits of Homemade Food'}</li>
              <li>{isPt ? '• Capítulo 3: Suplementação Obrigatória de Cálcio' : '• Ch 3: Mandatory Calcium Supplementation'}</li>
              <li>{isPt ? '• Capítulo 4: Cálculo Energético e Proporção do Prato' : '• Ch 4: Energy Calculation Math'}</li>
              <li>{isPt ? '• Capítulo 9: Como Fazer Ração Seca Desidratada' : '• Ch 9: Homemade Dehydrated Dry Kibble'}</li>
            </ul>
          </div>
        </div>

        {/* Veterinary Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 text-[11px] text-stone-400 space-y-1 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>{isPt ? 'Aviso Veterinário Importante:' : 'Important Veterinary Disclaimer:'}</strong>{' '}
            {isPt
              ? 'Este aplicativo é um guia informativo baseado em recomendações gerais de nutrição canina. Cães com doenças crônicas (como insuficiência renal, pancreatite ou hepatopatias) necessitam de acompanhamento individualizado com um médico veterinário nutrólogo.'
              : 'This application is an educational guide based on general veterinary nutrition principles. Dogs with chronic conditions (kidney failure, pancreatitis, liver disease) require individualized veterinary care.'}
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 border-t border-stone-800 pt-6 gap-2">
          <p>© {new Date().getFullYear()} Healthy Dog Meals By Mel — Homemade Dog Food Guide & Calculator.</p>
          <p className="flex items-center gap-1">
            <span>{isPt ? 'Feito com' : 'Made with'}</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>{isPt ? 'para cães felizes e saudáveis' : 'for happy and healthy dogs'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

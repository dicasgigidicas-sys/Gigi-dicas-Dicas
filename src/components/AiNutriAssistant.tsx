import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Bot,
  Send,
  Sparkles,
  User,
  RefreshCw,
  ChefHat,
  Utensils,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  customRecipe?: any;
}

export const AiNutriAssistant: React.FC = () => {
  const { language, dogProfile } = useApp();
  const isPt = language === 'pt';

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: isPt
        ? `Olá! Sou o **Dr. NutriPaw**, seu especialista em nutrição canina e alimentação natural. Posso ajudar com cálculo de pó de casca de ovo, substituições de ingredientes, alergias ou criar uma receita sob medida para o **${
            dogProfile.name || 'seu pet'
          }** (${dogProfile.weightKg}kg)!`
        : `Hello! I'm **Dr. NutriPaw**, your veterinary nutrition AI assistant. How can I help you with eggshell powder calculation, ingredient substitutes, or custom recipes for **${
            dogProfile.name || 'your pet'
          }** (${dogProfile.weightKg}kg)?`,
    },
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [avoidInput, setAvoidInput] = useState('');

  const handleSendPrompt = async (promptToSend?: string) => {
    const text = promptToSend || inputPrompt;
    if (!text.trim() || isLoading) return;

    setInputPrompt('');
    setMessages((prev) => [...prev, { sender: 'user', text }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: text,
          dogProfile,
          language,
        }),
      });

      const data = await res.json();
      if (res.ok && data.text) {
        setMessages((prev) => [...prev, { sender: 'ai', text: data.text }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: isPt
              ? 'Erro ao se conectar com a IA. Por favor, verifique se a chave GEMINI_API_KEY foi configurada no servidor.'
              : 'Error connecting to Gemini AI. Please make sure GEMINI_API_KEY is configured.',
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: isPt
            ? 'Ops, ocorreu um erro na comunicação com a IA NutriPaw. Tente novamente em instantes.'
            : 'Error communicating with AI assistant. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateCustomRecipe = async () => {
    if (isLoading) return;

    const userMsg = isPt
      ? `Gerar receita personalizada sem: ${avoidInput || 'nenhuma restrição'}`
      : `Generate custom recipe avoiding: ${avoidInput || 'none'}`;

    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/custom-recipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dogProfile,
          baseRecipeName: 'Refeição Personalizada',
          ingredientsToAvoid: avoidInput,
          language,
        }),
      });

      const data = await res.json();
      if (res.ok && data.recipe) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: isPt
              ? `Aqui está a receita personalizada criada especialmente para **${dogProfile.name}**:`
              : `Here is the custom recipe created specifically for **${dogProfile.name}**:`,
            customRecipe: data.recipe,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: isPt ? 'Não foi possível gerar a receita customizada no momento.' : 'Failed to generate custom recipe.',
          },
        ]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800/60 shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
          <Bot className="w-3.5 h-3.5" />
          <span>IA Gemini 3.6 Flash — Dr. NutriPaw</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {isPt ? 'Assistente Nutricional Veterinário IA' : 'AI Veterinary Nutritionist Assistant'}
        </h1>
        <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
          {isPt
            ? 'Pergunte qualquer dúvida sobre alimentação natural para cães, cálculo de suplementação de cálcio, trocas de alimentos ou crie receitas sob medida.'
            : 'Ask questions about homemade dog nutrition, calcium dosing, ingredient swaps, or generate custom recipes.'}
        </p>
      </div>

      {/* Suggested Quick Prompts */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {[
          isPt ? 'Como fazer pó de casca de ovo?' : 'How to make eggshell powder?',
          isPt ? 'Meu cão é alérgico a frango, o que usar?' : 'Chicken allergy alternatives?',
          isPt ? 'Posso substituir batata doce por abóbora?' : 'Substitute sweet potato with pumpkin?',
          isPt ? 'Cão de 10kg precisa de quanto cálcio por dia?' : 'How much calcium for 10kg dog?',
        ].map((promptText, i) => (
          <button
            key={i}
            onClick={() => handleSendPrompt(promptText)}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-50 text-stone-700 hover:text-emerald-800 text-xs font-semibold border border-stone-200 transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5"
            id={`quick-prompt-${i}`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{promptText}</span>
          </button>
        ))}
      </div>

      {/* Custom Recipe Generator Drawer Input */}
      <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 space-y-3">
        <div className="flex items-center gap-2 text-emerald-950 font-bold text-xs sm:text-sm">
          <ChefHat className="w-5 h-5 text-emerald-700" />
          <span>
            {isPt
              ? `Gerar Receita Customizada para ${dogProfile.name} (${dogProfile.weightKg}kg)`
              : `Generate Tailored Recipe for ${dogProfile.name} (${dogProfile.weightKg}kg)`}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={avoidInput}
            onChange={(e) => setAvoidInput(e.target.value)}
            placeholder={
              isPt
                ? 'Ingredientes a evitar / alergias (ex: sem frango, sem arroz)'
                : 'Ingredients to avoid (e.g. no chicken, no rice)'
            }
            className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-emerald-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            id="ai-avoid-input"
          />
          <button
            type="button"
            onClick={handleGenerateCustomRecipe}
            disabled={isLoading}
            className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow"
          >
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>{isPt ? 'Criar Receita IA' : 'Generate AI Recipe'}</span>
          </button>
        </div>
      </div>

      {/* Chat Messages Log Container */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-4 sm:p-6 space-y-4 min-h-[380px] max-h-[550px] overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex gap-3 text-xs sm:text-sm ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'ai' && (
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 font-bold shadow-sm mt-0.5">
                <Bot className="w-5 h-5" />
              </div>
            )}

            <div
              className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl space-y-2 ${
                msg.sender === 'user'
                  ? 'bg-stone-900 text-white rounded-tr-none'
                  : 'bg-stone-50 border border-stone-200 text-stone-800 rounded-tl-none'
              }`}
            >
              <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>

              {/* Custom Recipe Card output if present */}
              {msg.customRecipe && (
                <div className="bg-white p-4 rounded-2xl border border-emerald-300 text-stone-900 space-y-3 mt-2 shadow-inner">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                    <h4 className="font-extrabold text-base text-emerald-800">
                      {msg.customRecipe.recipeTitle}
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                      {msg.customRecipe.dailyPortionGrams}g / {isPt ? 'dia' : 'day'}
                    </span>
                  </div>

                  <div>
                    <p className="font-bold text-xs text-stone-800 mb-1">{isPt ? 'Ingredientes:' : 'Ingredients:'}</p>
                    <ul className="space-y-1 pl-2">
                      {msg.customRecipe.ingredients?.map((ing: any, idx: number) => (
                        <li key={idx} className="text-xs text-stone-700 flex items-center justify-between bg-stone-50 p-1.5 rounded">
                          <span>{ing.name}</span>
                          <span className="font-bold text-emerald-700">{ing.amount}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold text-xs text-stone-800 mb-1">{isPt ? 'Instruções:' : 'Instructions:'}</p>
                    <ol className="space-y-1 list-decimal pl-4 text-xs text-stone-700">
                      {msg.customRecipe.instructions?.map((step: string, idx: number) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  {msg.customRecipe.calciumNote && (
                    <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-[11px] text-amber-900">
                      <strong>Cálcio:</strong> {msg.customRecipe.calciumNote}
                    </div>
                  )}
                </div>
              )}
            </div>

            {msg.sender === 'user' && (
              <div className="w-8 h-8 rounded-xl bg-stone-200 text-stone-700 flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                <User className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-3 text-xs text-emerald-700 bg-emerald-50 p-3 rounded-2xl border border-emerald-200">
            <RefreshCw className="w-4 h-4 animate-spin text-emerald-600" />
            <span>Dr. NutriPaw está analisando a resposta com base na nutrição animal...</span>
          </div>
        )}
      </div>

      {/* Input Form Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendPrompt();
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={inputPrompt}
          onChange={(e) => setInputPrompt(e.target.value)}
          placeholder={
            isPt
              ? 'Digite sua dúvida nutricional ou pergunta para o Dr. NutriPaw...'
              : 'Ask Dr. NutriPaw any question about homemade dog food...'
          }
          className="flex-1 px-4 py-3 rounded-2xl border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-xs sm:text-sm font-medium bg-white shadow-sm"
          id="ai-chat-input"
        />
        <button
          type="submit"
          disabled={isLoading || !inputPrompt.trim()}
          className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md"
          id="ai-send-btn"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">{isPt ? 'Enviar' : 'Send'}</span>
        </button>
      </form>
    </div>
  );
};

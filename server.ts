import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // Initialize Gemini GenAI client lazy / safely on demand
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is missing.');
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  };

  // API Route 1: Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // API Route 2: AI Dog Nutrition Assistant Chat
  app.post('/api/ai/ask', async (req, res) => {
    try {
      const { prompt, dogProfile, language } = req.body;
      if (!prompt) {
        res.status(400).json({ error: 'Prompt is required' });
        return;
      }

      const ai = getAiClient();

      const systemInstruction = `You are "Dr. NutriPaw", an expert veterinary nutritionist specialized in homemade natural feeding for dogs.
You provide encouraging, accurate, safe, and practical advice based on veterinary animal nutrition principles.
Key Guidelines:
1. Emphasize calcium supplementation (eggshell powder or vet supplement) when feeding homemade meat/rice diets.
2. Stress zero salt, no garlic, no onions, no grapes, no chocolate, no xylitol, no cooked bones.
3. Keep answers concise, highly structured (use bullet points and clear bold headings), friendly, and practical.
4. Language context: Respond in ${language === 'pt' ? 'Portuguese (Brazil)' : 'English'}, matching the user's preferred language.
5. If the user provided dog details (weight: ${dogProfile?.weightKg || 'unspecified'} kg, age: ${dogProfile?.ageGroup || 'adult'}), tailor calculations or portion advice specifically for this dog.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error('Error in /api/ai/ask:', err);
      res.status(500).json({
        error: 'Failed to generate AI response',
        details: err.message || 'Server error',
      });
    }
  });

  // API Route 3: Custom Recipe Adaptation Generator
  app.post('/api/ai/custom-recipe', async (req, res) => {
    try {
      const { dogProfile, baseRecipeName, ingredientsToAvoid, language } = req.body;
      const ai = getAiClient();

      const prompt = `Create a custom, safe homemade dog food recipe adapted specifically for a dog with these characteristics:
- Dog Name: ${dogProfile?.name || 'Pet'}
- Weight: ${dogProfile?.weightKg || 10} kg
- Age / Life Stage: ${dogProfile?.ageGroup || 'adult_neutered'}
- Base Recipe Request / Category: ${baseRecipeName || 'Nutritious Balanced Meal'}
- Ingredients to Avoid / Allergies: ${ingredientsToAvoid || 'None'}

Response must be formatted in clean JSON matching this exact structure:
{
  "recipeTitle": "Custom Recipe Name",
  "prepTimeMinutes": 25,
  "dailyPortionGrams": 400,
  "ingredients": [
    { "name": "Ingredient Name", "amount": "150g" }
  ],
  "instructions": [
    "Step 1...",
    "Step 2..."
  ],
  "calciumNote": "Exact calcium needed in mg and eggshell powder grams",
  "vetNote": "Special recommendation for this dog profile"
}
Respond in ${language === 'pt' ? 'Portuguese (Brazil)' : 'English'}. Return ONLY valid JSON, no markdown code blocks if possible.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.5,
        },
      });

      const jsonText = response.text || '{}';
      const recipeData = JSON.parse(jsonText);
      res.json({ recipe: recipeData });
    } catch (err: any) {
      console.error('Error in /api/ai/custom-recipe:', err);
      res.status(500).json({
        error: 'Failed to generate custom recipe',
        details: err.message || 'Server error',
      });
    }
  });

  // Vite development middleware or static production fallback
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

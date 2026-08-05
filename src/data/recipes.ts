import { Recipe } from '../types';

export const RECIPES_DATA: Recipe[] = [
  // --- COMPLETE MEALS (20 Recipes) ---
  {
    id: 'meal-1',
    title: 'Chicken with Sweet Potato and Zucchini',
    titlePt: 'Frango com Batata Doce e Abobrinha',
    category: 'meal',
    prepTimeMinutes: 25,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'chicken',
    isPuppyFriendly: true,
    caloriesPerServingBase: 280,
    tags: ['Digestive Care', 'High Protein', 'Lean Meat'],
    imageUrl: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Cooked, shredded chicken breast', namePt: 'Peito de frango cozido e desfiado', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Sweet potato, cooked and mashed', namePt: 'Batata doce cozida e amassada', amount: '1 medium', baseGrams: 120 },
      { name: 'Zucchini, cooked and diced small', namePt: 'Abobrinha cozida em cubos pequenos', amount: '1/2 medium', baseGrams: 60 },
      { name: 'Coconut oil', namePt: 'Óleo de coco', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Cook the chicken in plain water with no salt or seasoning until fully done.',
      'Cook the sweet potato and zucchini separately until soft.',
      'Mash the sweet potato, dice the zucchini into small cubes, and mix everything with the shredded chicken.',
      'Finish with the coconut oil while still warm.'
    ],
    instructionsPt: [
      'Cozinhe o frango em água pura sem sal ou temperos até ficar bem passado.',
      'Cozinhe a batata doce e a abobrinha separadamente até ficarem macias.',
      'Amasse a batata doce, corte a abobrinha em cubos pequenos e misture tudo com o frango desfiado.',
      'Finalize com o óleo de coco enquanto ainda estiver morno.'
    ],
    vetTip: 'Freeze individual portions in containers to make your weekly routine easier.',
    vetTipPt: 'Congele porções individuais em potes para facilitar sua rotina semanal.'
  },
  {
    id: 'meal-2',
    title: 'Ground Beef with Rice and Carrot',
    titlePt: 'Carne Moída com Arroz e Cenoura',
    category: 'meal',
    prepTimeMinutes: 30,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'beef',
    isPuppyFriendly: true,
    caloriesPerServingBase: 310,
    tags: ['Energy Boost', 'Iron Rich', 'Classic Favorite'],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Lean ground beef', namePt: 'Carne moída magra', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Cooked white rice', namePt: 'Arroz branco cozido', amount: '1/2 cup', baseGrams: 100 },
      { name: 'Small carrot, grated and cooked', namePt: 'Cenoura pequena ralada e cozida', amount: '1 small', baseGrams: 50 },
      { name: 'Olive oil', namePt: 'Azeite de oliva', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Brown the ground beef in a non-stick pan, with no salt, garlic, or onion, until well cooked.',
      'Cook the rice and carrot separately in plain water.',
      'Mix everything together while still warm and finish with the olive oil.'
    ],
    instructionsPt: [
      'Doure a carne moída em uma panela antiaderente sem sal, alho ou cebola até ficar bem cozida.',
      'Cozinhe o arroz e a cenoura separadamente em água pura.',
      'Misture tudo ainda morno e finalize com o azeite de oliva.'
    ],
    vetTip: 'Choose lean cuts of beef (like patinho or lean sirloin) to reduce overall fat content.',
    vetTipPt: 'Escolha cortes magros de carne (como patinho) para reduzir o teor geral de gordura.'
  },
  {
    id: 'meal-3',
    title: 'Tilapia with Pumpkin and Green Beans',
    titlePt: 'Tilápia com Abóbora e Vagem',
    category: 'meal',
    prepTimeMinutes: 25,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'fish',
    isPuppyFriendly: false,
    caloriesPerServingBase: 240,
    tags: ['Omega-3', 'Easy Digestion', 'Shiny Coat'],
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Steamed tilapia fillet', namePt: 'Filé de tilápia no vapor', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Cooked, mashed pumpkin', namePt: 'Abóbora cozida e amassada', amount: '1/2 cup', baseGrams: 100 },
      { name: 'Cooked, chopped green beans', namePt: 'Vagem cozida e picada', amount: '1/4 cup', baseGrams: 40 },
      { name: 'Flaxseed oil', namePt: 'Óleo de linhaça', amount: 'A few drops', baseGrams: 3 }
    ],
    instructions: [
      'Steam the fish until it flakes easily with a fork, carefully checking and removing all bones.',
      'Cook the pumpkin and green beans until soft and chop them small.',
      'Mix everything together and finish with the flaxseed oil.'
    ],
    instructionsPt: [
      'Cozinhe o peixe no vapor até desfiar facilmente, verificando cuidadosamente e removendo todas as espinhas.',
      'Cozinhe a abóbora e a vagem até ficarem macias e pique em pedaços pequenos.',
      'Misture tudo e finalize com o óleo de linhaça.'
    ],
    vetTip: 'Always double-check that no fish bones remain before serving.',
    vetTipPt: 'Sempre verifique duas vezes se não restaram espinhas de peixe antes de servir.'
  },
  {
    id: 'meal-4',
    title: 'Chicken with Quinoa and Broccoli',
    titlePt: 'Frango com Quinoa e Brócolis',
    category: 'meal',
    prepTimeMinutes: 30,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'chicken',
    isPuppyFriendly: true,
    caloriesPerServingBase: 290,
    tags: ['Superfood', 'High Fiber', 'Antioxidant'],
    imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Cooked, chopped chicken breast', namePt: 'Peito de frango cozido e picado', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Cooked quinoa', namePt: 'Quinoa cozida', amount: '1/3 cup', baseGrams: 80 },
      { name: 'Cooked, finely chopped broccoli', namePt: 'Brócolis cozido e picado fino', amount: '1/4 cup', baseGrams: 40 },
      { name: 'Coconut oil', namePt: 'Óleo de coco', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Cook the quinoa in water until the grain opens up (about 15 minutes).',
      'Cook the chicken and broccoli separately.',
      'Chop everything into small pieces and mix with the coconut oil.'
    ],
    instructionsPt: [
      'Cozinhe a quinoa em água até os grãos abrirem (cerca de 15 minutos).',
      'Cozinhe o frango e o brócolis separadamente.',
      'Pique tudo em pedaços pequenos e misture com o óleo de coco.'
    ],
    vetTip: 'Always serve broccoli well cooked and in small amounts, as too much can cause gas.',
    vetTipPt: 'Sempre sirva o brócolis bem cozido e em pequenas quantidades, pois em excesso pode causar gases.'
  },
  {
    id: 'meal-5',
    title: 'Beef Liver with Potato and Chayote',
    titlePt: 'Fígado Bovina com Batata e Chuchu',
    category: 'meal',
    prepTimeMinutes: 25,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'liver',
    isPuppyFriendly: false,
    caloriesPerServingBase: 260,
    tags: ['Vitamin A Boost', 'Nutrient Dense', 'Budget Friendly'],
    imageUrl: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Cooked, chopped beef liver', namePt: 'Fígado bovino cozido e picado', amount: '120 g (4 oz)', baseGrams: 120 },
      { name: 'Cooked medium potato', namePt: 'Batata média cozida', amount: '1 medium', baseGrams: 100 },
      { name: 'Cooked, diced chayote', namePt: 'Chuchu cozido em cubos', amount: '1/2 chayote', baseGrams: 60 },
      { name: 'Olive oil', namePt: 'Azeite de oliva', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Cook the liver until no pink remains inside and chop into small pieces.',
      'Cook the potato and chayote until soft.',
      'Lightly mash the potato, mix all ingredients, and finish with the olive oil.'
    ],
    instructionsPt: [
      'Cozinhe o fígado até não restar nenhuma parte rosada no interior e pique em pedaços pequenos.',
      'Cozinhe a batata e o chuchu até ficarem macios.',
      'Amasse levemente a batata, misture todos os ingredientes e finalize com o azeite.'
    ],
    vetTip: 'Liver is rich in Vitamin A — offer only 1 to 2 times per week max.',
    vetTipPt: 'O fígado é riquíssimo em Vitamina A — ofereça apenas 1 a 2 vezes por semana.'
  },
  {
    id: 'meal-6',
    title: 'Ground Beef with Sweet Potato and Kale',
    titlePt: 'Carne Moída com Batata Doce e Couve',
    category: 'meal',
    prepTimeMinutes: 30,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'beef',
    isPuppyFriendly: true,
    caloriesPerServingBase: 320,
    tags: ['Iron & Minerals', 'Satiating', 'Strong Immune System'],
    imageUrl: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Lean ground beef', namePt: 'Carne moída magra', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Sweet potato, cooked and mashed', namePt: 'Batata doce cozida e amassada', amount: '1 medium', baseGrams: 120 },
      { name: 'Kale leaf, finely chopped and sautéed', namePt: 'Folha de couve picada bem fina e refogada', amount: '1 leaf', baseGrams: 20 },
      { name: 'Coconut oil', namePt: 'Óleo de coco', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Brown the ground beef until cooked through with no oil or salt.',
      'Cook the sweet potato and mash it.',
      'Sauté the chopped kale for 1 minute in a pan with a few drops of water.',
      'Mix everything and finish with the coconut oil.'
    ],
    instructionsPt: [
      'Doure a carne moída até cozinhar por completo sem óleo ou sal.',
      'Cozinhe a batata doce e amasse-a.',
      'Refogue a couve picada por 1 minuto na panela com algumas gotas de água.',
      'Misture tudo e finalize com o óleo de coco.'
    ],
    vetTip: 'Chop the kale very finely to make it easier for your dog to digest.',
    vetTipPt: 'Pique a couve de forma bem fina para facilitar a digestão do seu cão.'
  },
  {
    id: 'meal-7',
    title: 'Chicken with Brown Rice and Peas',
    titlePt: 'Frango com Arroz Integral e Ervilhas',
    category: 'meal',
    prepTimeMinutes: 30,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'chicken',
    isPuppyFriendly: true,
    caloriesPerServingBase: 285,
    tags: ['Fiber Rich', 'Sustained Energy', 'Digestive Health'],
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Cooked, shredded chicken breast', namePt: 'Peito de frango cozido e desfiado', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Cooked brown rice', namePt: 'Arroz integral cozido', amount: '1/2 cup', baseGrams: 90 },
      { name: 'Cooked peas', namePt: 'Ervilhas cozidas', amount: '2 tbsp', baseGrams: 30 },
      { name: 'Olive oil', namePt: 'Azeite de oliva', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Cook the brown rice thoroughly in water until very soft.',
      'Cook the chicken and peas.',
      'Mix everything while still warm and finish with the olive oil.'
    ],
    instructionsPt: [
      'Cozinhe bem o arroz integral em água até ficar bem macio.',
      'Cozinhe o frango e as ervilhas.',
      'Misture tudo ainda morno e finalize com o azeite de oliva.'
    ],
    vetTip: 'Brown rice offers more fiber, which helps dogs with slower digestion.',
    vetTipPt: 'O arroz integral oferece mais fibras, ajudando cães com digestão mais lenta.'
  },
  {
    id: 'meal-8',
    title: 'Ground Turkey with Pumpkin and Spinach',
    titlePt: 'Peru Moído com Abóbora e Espinafre',
    category: 'meal',
    prepTimeMinutes: 25,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'turkey',
    isPuppyFriendly: true,
    caloriesPerServingBase: 260,
    tags: ['Hypoallergenic Option', 'Lean Protein', 'Low Calorie'],
    imageUrl: 'https://images.unsplash.com/photo-1547496582-17506d3f137e?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Ground turkey', namePt: 'Carne moída de peru', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Cooked, mashed pumpkin', namePt: 'Abóbora cozida e amassada', amount: '1/2 cup', baseGrams: 100 },
      { name: 'Finely chopped spinach', namePt: 'Espinafre picado bem fino', amount: '1 small handful', baseGrams: 20 },
      { name: 'Coconut oil', namePt: 'Óleo de coco', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Sauté the ground turkey until fully cooked.',
      'Cook the pumpkin and mash it.',
      'Quickly sauté the spinach in a pan.',
      'Mix everything and finish with the coconut oil.'
    ],
    instructionsPt: [
      'Refogue a carne moída de peru até cozinhar por completo.',
      'Cozinhe a abóbora e amasse-a.',
      'Refogue rapidamente o espinafre na panela.',
      'Misture tudo e finalize com o óleo de coco.'
    ],
    vetTip: 'Offer spinach in moderation, since large amounts contain oxalates.',
    vetTipPt: 'Ofereça espinafre com moderação, pois grandes quantidades contêm oxalatos.'
  },
  {
    id: 'meal-9',
    title: 'Beef with Arracacha Root and Carrot',
    titlePt: 'Carne com Mandioquinha e Cenoura',
    category: 'meal',
    prepTimeMinutes: 30,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'beef',
    isPuppyFriendly: true,
    caloriesPerServingBase: 305,
    tags: ['Palatable', 'Easy Carb', 'Puppy Favorite'],
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Lean ground beef', namePt: 'Carne moída magra', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Arracacha root (Peruvian carrot), cooked & mashed', namePt: 'Mandioquinha / Batata Baroa cozida e amassada', amount: '1 root', baseGrams: 100 },
      { name: 'Cooked, grated carrot', namePt: 'Cenoura pequena cozida e ralada', amount: '1 small', baseGrams: 40 },
      { name: 'Olive oil', namePt: 'Azeite de oliva', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Brown the ground beef until well cooked.',
      'Cook the arracacha root and carrot, mashing the arracacha.',
      'Mix everything and finish with the olive oil.'
    ],
    instructionsPt: [
      'Doure a carne moída até ficar bem cozida.',
      'Cozinhe a mandioquinha e a cenoura, amassando a mandioquinha.',
      'Misture tudo e finalize com o azeite.'
    ],
    vetTip: 'Arracacha (mandioquinha) is a great source of easily digestible energy for dogs.',
    vetTipPt: 'A mandioquinha é uma excelente fonte de energia de facílima digestão.'
  },
  {
    id: 'meal-10',
    title: 'Scrambled Eggs with Sweet Potato and Zucchini',
    titlePt: 'Ovos Mexidos com Batata Doce e Abobrinha',
    category: 'meal',
    prepTimeMinutes: 15,
    yields: '1 serving',
    yieldsPt: '1 porção',
    proteinType: 'egg',
    isPuppyFriendly: true,
    caloriesPerServingBase: 250,
    tags: ['Quick Prep', 'Complete Protein', 'Meatless Monday'],
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Eggs', namePt: 'Ovos', amount: '2 large', baseGrams: 100 },
      { name: 'Sweet potato, cooked and mashed', namePt: 'Batata doce cozida e amassada', amount: '1/2 medium', baseGrams: 80 },
      { name: 'Zucchini, cooked and diced', namePt: 'Abobrinha cozida picada', amount: '1/4 medium', baseGrams: 40 },
      { name: 'Coconut oil', namePt: 'Óleo de coco', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Lightly beat the eggs and cook over low heat, stirring constantly, with no salt or seasoning.',
      'Mix with the mashed sweet potato and cooked zucchini.',
      'Finish with the coconut oil.'
    ],
    instructionsPt: [
      'Bata levemente os ovos e cozinhe em fogo baixo, mexendo sempre, sem sal ou temperos.',
      'Misture com a batata doce amassada e a abobrinha cozida.',
      'Finalize com o óleo de coco.'
    ],
    vetTip: 'Always serve eggs fully cooked; avoid offering them raw to prevent avidin binding.',
    vetTipPt: 'Sempre sirva ovos totalmente cozidos; evite oferecê-los crus.'
  },
  {
    id: 'meal-11',
    title: 'Shredded Chicken with Rice and Pumpkin',
    titlePt: 'Frango Desfiado com Arroz e Abóbora',
    category: 'meal',
    prepTimeMinutes: 25,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'chicken',
    isPuppyFriendly: true,
    caloriesPerServingBase: 270,
    tags: ['Gentle Stomach', 'Recovery Diet', 'Comfort Food'],
    imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Cooked, shredded chicken breast', namePt: 'Peito de frango cozido e desfiado', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Cooked white rice', namePt: 'Arroz branco cozido', amount: '1/2 cup', baseGrams: 100 },
      { name: 'Cooked, mashed pumpkin', namePt: 'Abóbora cozida e amassada', amount: '1/2 cup', baseGrams: 100 },
      { name: 'Olive oil', namePt: 'Azeite de oliva', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Cook the chicken and shred it finely.',
      'Cook the rice and pumpkin, mashing the pumpkin.',
      'Mix everything and finish with the olive oil.'
    ],
    instructionsPt: [
      'Cozinhe o frango e desfie bem fino.',
      'Cozinhe o arroz e a abóbora, amassando a abóbora.',
      'Misture tudo e finalize com o azeite de oliva.'
    ],
    vetTip: 'Great for dogs recovering digestively, as it is light and easy to absorb.',
    vetTipPt: 'Excelente para cães em recuperação digestiva, por ser leve e fácil de absorver.'
  },
  {
    id: 'meal-12',
    title: 'Fish with Sweet Potato and Broccoli',
    titlePt: 'Peixe com Batata Doce e Brócolis',
    category: 'meal',
    prepTimeMinutes: 25,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'fish',
    isPuppyFriendly: true,
    caloriesPerServingBase: 265,
    tags: ['Anti-inflammatory', 'Skin Health', 'Low Allergy'],
    imageUrl: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Steamed white fish fillet (tilapia/hake)', namePt: 'Filé de peixe branco no vapor (tilápia/merluza)', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Sweet potato, cooked and mashed', namePt: 'Batata doce cozida e amassada', amount: '1 medium', baseGrams: 120 },
      { name: 'Well-cooked, chopped broccoli', namePt: 'Brócolis bem cozido e picado', amount: '1/4 cup', baseGrams: 40 },
      { name: 'Flaxseed oil', namePt: 'Óleo de linhaça', amount: 'A few drops', baseGrams: 3 }
    ],
    instructions: [
      'Steam the fish, checking carefully and removing all bones.',
      'Cook the sweet potato and broccoli.',
      'Mix everything and finish with the flaxseed oil.'
    ],
    instructionsPt: [
      'Cozinhe o peixe no vapor, verificando com atenção e tirando todas as espinhas.',
      'Cozinhe a batata doce e o brócolis.',
      'Misture tudo e finalize com o óleo de linhaça.'
    ],
    vetTip: 'Fish is a great source of omega-3, excellent for skin and coat health.',
    vetTipPt: 'O peixe é uma fonte fantástica de ômega-3, excelente para a saúde da pele e pelagem.'
  },
  {
    id: 'meal-13',
    title: 'Ground Beef with Oats and Carrot',
    titlePt: 'Carne Moída com Aveia e Cenoura',
    category: 'meal',
    prepTimeMinutes: 25,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'beef',
    isPuppyFriendly: true,
    caloriesPerServingBase: 315,
    tags: ['Heart Healthy', 'Soluble Fiber', 'Rich Taste'],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Lean ground beef', namePt: 'Carne moída magra', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Rolled oats, cooked in water', namePt: 'Aveia em flocos cozida em água', amount: '3 tbsp', baseGrams: 60 },
      { name: 'Cooked, grated carrot', namePt: 'Cenoura pequena cozida e ralada', amount: '1 small', baseGrams: 50 },
      { name: 'Coconut oil', namePt: 'Óleo de coco', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Brown the ground beef until cooked through.',
      'Cook the oats in water until it forms a thick porridge.',
      'Cook and grate the carrot.',
      'Mix everything and finish with the coconut oil.'
    ],
    instructionsPt: [
      'Doure a carne moída até cozinhar completamente.',
      'Cozinhe a aveia em água até formar um mingau denso.',
      'Cozinhe e rale a cenoura.',
      'Misture tudo e finalize com o óleo de coco.'
    ],
    vetTip: 'Oats are a great extra source of beta-glucans and fiber.',
    vetTipPt: 'A aveia é uma ótima fonte extra de beta-glucanos e fibras.'
  },
  {
    id: 'meal-14',
    title: 'Chicken with Lentils and Pumpkin',
    titlePt: 'Frango com Lentilhas e Abóbora',
    category: 'meal',
    prepTimeMinutes: 35,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'chicken',
    isPuppyFriendly: false,
    caloriesPerServingBase: 275,
    tags: ['Plant & Meat Combo', 'High Micronutrients'],
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Cooked, chopped chicken breast', namePt: 'Peito de frango cozido e picado', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Well-cooked lentils', namePt: 'Lentilhas bem cozidas', amount: '3 tbsp', baseGrams: 50 },
      { name: 'Cooked, mashed pumpkin', namePt: 'Abóbora cozida e amassada', amount: '1/2 cup', baseGrams: 100 },
      { name: 'Olive oil', namePt: 'Azeite de oliva', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Soak the lentils before cooking them until very soft.',
      'Cook the chicken and pumpkin.',
      'Mix everything and finish with the olive oil.'
    ],
    instructionsPt: [
      'Deixe as lentilhas de molho antes de cozinhá-las até ficarem bem macias.',
      'Cozinhe o frango e a abóbora.',
      'Misture tudo e finalize com o azeite.'
    ],
    vetTip: 'Offer legumes like lentils in moderation and always very well cooked.',
    vetTipPt: 'Ofereça leguminosas como lentilhas em moderação e sempre muito bem cozidas.'
  },
  {
    id: 'meal-15',
    title: 'Liver with Rice and Green Beans',
    titlePt: 'Fígado com Arroz e Vagem',
    category: 'meal',
    prepTimeMinutes: 25,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'liver',
    isPuppyFriendly: false,
    caloriesPerServingBase: 255,
    tags: ['Organ Meat Special', 'Rich Iron', 'Budget Friendly'],
    imageUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Cooked, chopped beef liver', namePt: 'Fígado bovino cozido e picado', amount: '100 g (3.5 oz)', baseGrams: 100 },
      { name: 'Cooked white rice', namePt: 'Arroz branco cozido', amount: '1/2 cup', baseGrams: 100 },
      { name: 'Cooked, chopped green beans', namePt: 'Vagem cozida e picada', amount: '1/4 cup', baseGrams: 40 },
      { name: 'Olive oil', namePt: 'Azeite de oliva', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Cook the liver thoroughly and chop it very small.',
      'Cook the rice and green beans.',
      'Mix everything and finish with the olive oil.'
    ],
    instructionsPt: [
      'Cozinhe o fígado completamente e pique bem pequeno.',
      'Cozinhe o arroz e a vagem.',
      'Misture tudo e finalize com o azeite.'
    ],
    vetTip: 'Rotate liver with muscle meat throughout the week to keep diet balanced.',
    vetTipPt: 'Alterne o fígado com carnes musculares ao longo da semana.'
  },
  {
    id: 'meal-16',
    title: 'Chicken with Sweet Potato and Apple',
    titlePt: 'Frango com Batata Doce e Maçã',
    category: 'meal',
    prepTimeMinutes: 25,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'chicken',
    isPuppyFriendly: true,
    caloriesPerServingBase: 280,
    tags: ['Naturally Sweet', 'Pectin Fiber', 'Palatability Booster'],
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Cooked, shredded chicken breast', namePt: 'Peito de frango cozido e desfiado', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Sweet potato, cooked and mashed', namePt: 'Batata doce cozida e amassada', amount: '1 medium', baseGrams: 120 },
      { name: 'Diced apple (no seeds)', namePt: 'Maçã em cubos (sem sementes)', amount: '1/4 apple', baseGrams: 30 },
      { name: 'Coconut oil', namePt: 'Óleo de coco', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Cook the chicken and sweet potato.',
      'Dice the apple very small, always removing the core and seeds.',
      'Mix everything while still warm and finish with the coconut oil.'
    ],
    instructionsPt: [
      'Cozinhe o frango e a batata doce.',
      'Corte a maçã em cubos bem pequenos, sempre retirando o miolo e as sementes.',
      'Misture tudo ainda morno e finalize com o óleo de coco.'
    ],
    vetTip: 'Apple adds a natural touch of sweetness without needing added sugar.',
    vetTipPt: 'A maçã adiciona um toque doce natural sem necessidade de açúcar.'
  },
  {
    id: 'meal-17',
    title: 'Beef with Pumpkin and Kale',
    titlePt: 'Carne com Abóbora e Couve',
    category: 'meal',
    prepTimeMinutes: 25,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'beef',
    isPuppyFriendly: true,
    caloriesPerServingBase: 295,
    tags: ['Light Meal', 'Summer Friendly', 'High Fiber'],
    imageUrl: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Lean ground beef', namePt: 'Carne moída magra', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Cooked, mashed pumpkin', namePt: 'Abóbora cozida e amassada', amount: '1/2 cup', baseGrams: 100 },
      { name: 'Kale leaf, finely chopped & sautéed', namePt: 'Folha de couve picada e refogada', amount: '1 leaf', baseGrams: 20 },
      { name: 'Olive oil', namePt: 'Azeite de oliva', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Brown the ground beef until cooked through.',
      'Cook the pumpkin and mash it.',
      'Quickly sauté the kale.',
      'Mix everything and finish with the olive oil.'
    ],
    instructionsPt: [
      'Doure a carne moída até cozinhar por completo.',
      'Cozinhe a abóbora e amasse-a.',
      'Refogue rapidamente a couve.',
      'Misture tudo e finalize com o azeite.'
    ],
    vetTip: 'This is a lighter meal, great for warmer days or senior dogs.',
    vetTipPt: 'Uma refeição mais leve, ótima para dias mais quentes ou cães sênior.'
  },
  {
    id: 'meal-18',
    title: 'Fish with Rice and Carrot',
    titlePt: 'Peixe com Arroz e Cenoura',
    category: 'meal',
    prepTimeMinutes: 25,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'fish',
    isPuppyFriendly: true,
    caloriesPerServingBase: 250,
    tags: ['Omega-3', 'Gentle Meal', 'Hypoallergenic'],
    imageUrl: 'https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Steamed white fish fillet', namePt: 'Filé de peixe branco no vapor', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Cooked white rice', namePt: 'Arroz branco cozido', amount: '1/2 cup', baseGrams: 100 },
      { name: 'Cooked, grated carrot', namePt: 'Cenoura pequena cozida e ralada', amount: '1 small', baseGrams: 50 },
      { name: 'Flaxseed oil', namePt: 'Óleo de linhaça', amount: 'A few drops', baseGrams: 3 }
    ],
    instructions: [
      'Steam the fish, carefully removing all bones.',
      'Cook the rice and carrot.',
      'Mix everything and finish with the flaxseed oil.'
    ],
    instructionsPt: [
      'Cozinhe o peixe no vapor, retirando cuidadosamente todas as espinhas.',
      'Cozinhe o arroz e a cenoura.',
      'Misture tudo e finalize com o óleo de linhaça.'
    ],
    vetTip: 'Choose freshwater or low-mercury fish like tilapia or hake.',
    vetTipPt: 'Escolha peixes de água doce ou baixo teor de mercúrio como tilápia ou merluza.'
  },
  {
    id: 'meal-19',
    title: 'Chicken with Sweet Potato and Egg',
    titlePt: 'Frango com Batata Doce e Ovo',
    category: 'meal',
    prepTimeMinutes: 25,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'chicken',
    isPuppyFriendly: true,
    caloriesPerServingBase: 310,
    tags: ['Double Protein', 'High Energy', 'Active Dogs'],
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Cooked, shredded chicken breast', namePt: 'Peito de frango cozido e desfiado', amount: '120 g (4 oz)', baseGrams: 120 },
      { name: 'Sweet potato, cooked and mashed', namePt: 'Batata doce cozida e amassada', amount: '1 medium', baseGrams: 120 },
      { name: 'Hard-boiled egg, chopped', namePt: 'Ovo cozido bem picado', amount: '1 egg', baseGrams: 50 },
      { name: 'Coconut oil', namePt: 'Óleo de coco', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Cook the chicken and sweet potato.',
      'Hard-boil the egg until fully set.',
      'Chop the egg and mix with the other ingredients.',
      'Finish with the coconut oil.'
    ],
    instructionsPt: [
      'Cozinhe o frango e a batata doce.',
      'Cozinhe o ovo até ficar firme.',
      'Pique o ovo e misture com os outros ingredientes.',
      'Finalize com o óleo de coco.'
    ],
    vetTip: 'Hard-boiled egg is a great extra source of high-quality protein and choline.',
    vetTipPt: 'O ovo cozido é uma fonte fantástica de proteínas de alto valor biológico e colina.'
  },
  {
    id: 'meal-20',
    title: 'Complete Mix: Beef, Sweet Potato, Carrot, and Zucchini',
    titlePt: 'Mix Completo: Carne, Batata Doce, Cenoura e Abobrinha',
    category: 'meal',
    prepTimeMinutes: 35,
    yields: '3 servings',
    yieldsPt: '3 porções',
    proteinType: 'beef',
    isPuppyFriendly: true,
    caloriesPerServingBase: 330,
    tags: ['Batch Cooking', 'All-In-One', 'Balanced Meal'],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Lean ground beef', namePt: 'Carne moída magra', amount: '200 g (7 oz)', baseGrams: 200 },
      { name: 'Large sweet potato, cooked and mashed', namePt: 'Batata doce grande cozida e amassada', amount: '1 large', baseGrams: 180 },
      { name: 'Small carrot, cooked and grated', namePt: 'Cenoura pequena cozida e ralada', amount: '1 small', baseGrams: 50 },
      { name: 'Zucchini, cooked and diced', namePt: 'Abobrinha cozida em cubos', amount: '1/2 zucchini', baseGrams: 60 },
      { name: 'Coconut oil', namePt: 'Óleo de coco', amount: '1 tbsp', baseGrams: 15 }
    ],
    instructions: [
      'Brown the ground beef until well cooked.',
      'Cook the sweet potato, carrot, and zucchini separately.',
      'Mix everything in a large bowl and finish with the coconut oil.',
      'Divide into portions and freeze anything not eaten within 2 days.'
    ],
    instructionsPt: [
      'Doure a carne moída até ficar bem cozida.',
      'Cozinhe a batata doce, a cenoura e a abobrinha separadamente.',
      'Misture tudo em uma tigela grande e finalize com o óleo de coco.',
      'Divida em porções e congele o que não for consumido em 2 dias.'
    ],
    vetTip: 'This recipe makes batch cooking easy — freeze in meal size containers.',
    vetTipPt: 'Essa receita rende mais porções — ótima para cozinhar em lote e congelar.'
  },

  // --- HOME MADE TREATS (15 Recipes) ---
  {
    id: 'treat-1',
    title: 'Sweet Potato and Chicken Bites',
    titlePt: 'Bolinhos de Batata Doce e Frango',
    category: 'treat',
    prepTimeMinutes: 35,
    yields: '15 bites',
    yieldsPt: '15 bolinhos',
    proteinType: 'chicken',
    isPuppyFriendly: true,
    caloriesPerServingBase: 45,
    tags: ['Training Treat', 'Baked', 'High Value Reward'],
    imageUrl: '/src/assets/images/dog_treats_1785692615206.jpg',
    ingredients: [
      { name: 'Sweet potato, cooked and mashed', namePt: 'Batata doce cozida e amassada', amount: '1 medium', baseGrams: 120 },
      { name: 'Cooked chicken breast, finely shredded', namePt: 'Peito de frango cozido e bem desfiado', amount: '100 g (3.5 oz)', baseGrams: 100 },
      { name: 'Egg', namePt: 'Ovo', amount: '1 egg', baseGrams: 50 },
      { name: 'Oat flour', namePt: 'Farinha de aveia', amount: '2 tbsp', baseGrams: 20 }
    ],
    instructions: [
      'Mix all ingredients until a uniform dough forms.',
      'Shape small balls with your hands.',
      'Bake in a preheated oven at 350°F (180°C) for about 20 minutes, flipping halfway through.'
    ],
    instructionsPt: [
      'Misture todos os ingredientes até formar uma massa homogênea.',
      'Molde bolinhas pequenas com as mãos.',
      'Asse em forno pré-aquecido a 180°C por cerca de 20 minutos, virando na metade do tempo.'
    ],
    vetTip: 'Store in the fridge for up to 4 days in a sealed container.',
    vetTipPt: 'Guarde na geladeira por até 4 dias em pote fechado.'
  },
  {
    id: 'treat-2',
    title: 'Oat and Banana Cookies',
    titlePt: 'Biscoitos de Aveia e Banana',
    category: 'treat',
    prepTimeMinutes: 30,
    yields: '20 cookies',
    yieldsPt: '20 biscoitos',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 30,
    tags: ['Crunchy', 'Fiber Rich', 'Easy Baking'],
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Ripe banana, mashed', namePt: 'Banana madura amassada', amount: '1 banana', baseGrams: 100 },
      { name: 'Oat flour', namePt: 'Farinha de aveia', amount: '1 cup', baseGrams: 100 },
      { name: 'Egg', namePt: 'Ovo', amount: '1 egg', baseGrams: 50 },
      { name: 'Coconut oil', namePt: 'Óleo de coco', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Mix all ingredients into a dough.',
      'Roll out the dough on a surface dusted with oat flour and cut into shapes.',
      'Bake at 350°F (180°C) for 15–18 minutes, until lightly golden.'
    ],
    instructionsPt: [
      'Misture todos os ingredientes até formar uma massa.',
      'Abra a massa em uma superfície enfarinhada com aveia e corte nos formatos desejados.',
      'Asse a 180°C por 15 a 18 minutos, até dourar levemente.'
    ],
    vetTip: 'Let them cool completely before storing so they stay crunchy.',
    vetTipPt: 'Deixe esfriar completamente antes de guardar para ficarem crocantes.'
  },
  {
    id: 'treat-3',
    title: 'Baked Carrot Sticks',
    titlePt: 'Palitos de Cenoura Assados',
    category: 'treat',
    prepTimeMinutes: 25,
    yields: '1 large carrot portion',
    yieldsPt: '1 porção de cenoura grande',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 20,
    tags: ['Low Calorie', 'Weight Loss Friendly', 'Dental Chew'],
    imageUrl: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Large carrot', namePt: 'Cenoura grande', amount: '1 large', baseGrams: 100 },
      { name: 'Olive oil', namePt: 'Azeite de oliva', amount: 'A few drops', baseGrams: 2 }
    ],
    instructions: [
      'Cut the carrot into thin sticks.',
      'Drizzle with a bit of olive oil and bake at 350°F (180°C) for about 20 minutes, until soft inside and lightly toasted outside.'
    ],
    instructionsPt: [
      'Corte a cenoura em tiras finas no formato de palitos.',
      'Pincele com algumas gotas de azeite e asse a 180°C por cerca de 20 minutos, até ficar macia por dentro e levemente tostada por fora.'
    ],
    vetTip: 'A simple, cheap treat, great for dogs on a weight-loss plan.',
    vetTipPt: 'Petisco simples e econômico, ótimo para cães em dieta de emagrecimento.'
  },
  {
    id: 'treat-4',
    title: 'Liver Bites',
    titlePt: 'Biscoitinhos de Fígado',
    category: 'treat',
    prepTimeMinutes: 35,
    yields: '15 bites',
    yieldsPt: '15 biscoitinhos',
    proteinType: 'liver',
    isPuppyFriendly: false,
    caloriesPerServingBase: 40,
    tags: ['High Value Reward', 'Aromatic', 'Training Star'],
    imageUrl: 'https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Raw beef liver, blended', namePt: 'Fígado bovino cru batido no liquidificador', amount: '150 g (5 oz)', baseGrams: 150 },
      { name: 'Oat flour', namePt: 'Farinha de aveia', amount: '1 cup', baseGrams: 100 },
      { name: 'Egg', namePt: 'Ovo', amount: '1 egg', baseGrams: 50 }
    ],
    instructions: [
      'Blend the liver until it forms a purée.',
      'Mix with the oat flour and egg to form a dough.',
      'Spoon into small molds (like a mini muffin tin) and bake at 350°F (180°C) for 20 minutes.'
    ],
    instructionsPt: [
      'Bata o fígado no liquidificador até virar um purê.',
      'Misture com a farinha de aveia e o ovo para formar uma massa.',
      'Coloque em pequenas forminhas e asse a 180°C por 20 minutos.'
    ],
    vetTip: 'Since it is rich in Vitamin A, offer this treat no more than twice a week.',
    vetTipPt: 'Por ser rico em Vitamina A, ofereça este petisco no máximo 2 vezes por semana.'
  },
  {
    id: 'treat-5',
    title: 'Pumpkin Cookies',
    titlePt: 'Biscoitos de Abóbora',
    category: 'treat',
    prepTimeMinutes: 30,
    yields: '20 cookies',
    yieldsPt: '20 biscoitos',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 25,
    tags: ['Digestive Care', 'Beta-Carotene', 'Mouldable'],
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Cooked, mashed pumpkin', namePt: 'Abóbora cozida e amassada', amount: '1/2 cup', baseGrams: 100 },
      { name: 'Oat flour', namePt: 'Farinha de aveia', amount: '1 cup', baseGrams: 100 },
      { name: 'Egg', namePt: 'Ovo', amount: '1 egg', baseGrams: 50 }
    ],
    instructions: [
      'Mix all ingredients into a firm dough.',
      'Roll out and cut into small shapes.',
      'Bake at 350°F (180°C) for 15–18 minutes.'
    ],
    instructionsPt: [
      'Misture todos os ingredientes até formar uma massa firme.',
      'Abra a massa e corte em pequenos formatos.',
      'Asse a 180°C por 15 a 18 minutos.'
    ],
    vetTip: 'Pumpkin supports digestive regularity and is loved by most dogs.',
    vetTipPt: 'A abóbora auxilia no funcionamento intestinal e é muito apreciada.'
  },
  {
    id: 'treat-6',
    title: 'Sweet Potato Chips',
    titlePt: 'Chips de Batata Doce',
    category: 'treat',
    prepTimeMinutes: 60,
    yields: '1 large sweet potato batch',
    yieldsPt: '1 batata doce grande em chips',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 15,
    tags: ['Crunchy', 'Single Ingredient', 'Easy Prep'],
    imageUrl: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Large sweet potato, thinly sliced', namePt: 'Batata doce grande cortada bem fina', amount: '1 large', baseGrams: 150 }
    ],
    instructions: [
      'Slice the sweet potato into very thin rounds, about 1/8 inch thick.',
      'Arrange on a lined baking sheet and bake at 300°F (150°C) for 50–60 minutes, flipping halfway, until dry and crisp.'
    ],
    instructionsPt: [
      'Corte a batata doce em rodelas bem finas (cerca de 2 a 3 mm).',
      'Disponha em uma assadeira com papel manteiga e asse a 150°C por 50 a 60 minutos, virando na metade, até ficarem secas e crocantes.'
    ],
    vetTip: 'Store in a well-sealed container away from moisture to keep crunchy.',
    vetTipPt: 'Guarde em pote bem vedado para manter a crocância.'
  },
  {
    id: 'treat-7',
    title: 'Tuna Bites',
    titlePt: 'Petiscos de Atum',
    category: 'treat',
    prepTimeMinutes: 30,
    yields: '15 bites',
    yieldsPt: '15 bolinhos',
    proteinType: 'fish',
    isPuppyFriendly: false,
    caloriesPerServingBase: 35,
    tags: ['Seafood Treat', 'Omega-3', 'Strong Smelling'],
    imageUrl: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Can tuna in water (no salt, drained)', namePt: 'Lata de atum em água (sem sal, escorrido)', amount: '1 can', baseGrams: 120 },
      { name: 'Oat flour', namePt: 'Farinha de aveia', amount: '1 cup', baseGrams: 100 },
      { name: 'Egg', namePt: 'Ovo', amount: '1 egg', baseGrams: 50 }
    ],
    instructions: [
      'Mix the drained tuna with the oat flour and egg until a uniform dough forms.',
      'Shape into small balls and place on a baking sheet.',
      'Bake at 350°F (180°C) for 15–20 minutes.'
    ],
    instructionsPt: [
      'Misture o atum escorrido com a farinha de aveia e o ovo até formar massa homogênea.',
      'Molde bolinhas pequenas e coloque em uma assadeira.',
      'Asse a 180°C por 15 a 20 minutos.'
    ],
    vetTip: 'Always check that tuna is packed in water with no added oil or salt.',
    vetTipPt: 'Certifique-se sempre de usar atum ao natural em água, sem sal adicionado.'
  },
  {
    id: 'treat-8',
    title: 'Banana Oat Cookies with Peanut Butter',
    titlePt: 'Biscoito de Banana e Pasta de Amendoim',
    category: 'treat',
    prepTimeMinutes: 30,
    yields: '20 cookies',
    yieldsPt: '20 biscoitos',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 35,
    tags: ['Peanut Butter Delight', 'Irresistible Taste'],
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Mashed banana', namePt: 'Banana madura amassada', amount: '1 banana', baseGrams: 100 },
      { name: 'Oat flour', namePt: 'Farinha de aveia', amount: '1 cup', baseGrams: 100 },
      { name: 'Natural Peanut Butter (Xylitol-Free)', namePt: 'Pasta de amendoim natural (SEM XILITOL)', amount: '1 tbsp', baseGrams: 15 }
    ],
    instructions: [
      'Mix all ingredients into a dough.',
      'Roll out and cut into small shapes.',
      'Bake at 350°F (180°C) for 15–18 minutes.'
    ],
    instructionsPt: [
      'Misture todos os ingredientes até obter uma massa.',
      'Abra a massa e corte em pequenos formatos.',
      'Asse a 180°C por 15 a 18 minutos.'
    ],
    vetTip: 'Warning: Only use 100% pure peanut butter that is strictly FREE of xylitol!',
    vetTipPt: 'Aviso: Use apenas pasta de amendoim 100% pura, estritamente LIVRE de xilitol!'
  },
  {
    id: 'treat-9',
    title: 'Chicken and Rice Croquettes',
    titlePt: 'Croquetes de Frango e Arroz',
    category: 'treat',
    prepTimeMinutes: 30,
    yields: '15 croquettes',
    yieldsPt: '15 croquetes',
    proteinType: 'chicken',
    isPuppyFriendly: true,
    caloriesPerServingBase: 40,
    tags: ['Leftover Use', 'Savory Snack'],
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Cooked, shredded chicken breast', namePt: 'Peito de frango cozido e desfiado', amount: '100 g (3.5 oz)', baseGrams: 100 },
      { name: 'Cooked white rice', namePt: 'Arroz branco cozido', amount: '1/2 cup', baseGrams: 100 },
      { name: 'Egg', namePt: 'Ovo', amount: '1 egg', baseGrams: 50 }
    ],
    instructions: [
      'Mix the shredded chicken with the cooked rice and egg until a firm dough forms.',
      'Shape into small croquettes and bake at 350°F (180°C) for 20 minutes, flipping halfway through.'
    ],
    instructionsPt: [
      'Misture o frango desfiado com o arroz cozido e o ovo até formar uma massa firme.',
      'Molde pequenos croquetes e asse a 180°C por 20 minutos, virando na metade.'
    ],
    vetTip: 'A great way to use up leftover cooked plain chicken and rice.',
    vetTipPt: 'Uma ótima maneira de reaproveitar sobras de frango e arroz cozidos sem tempero.'
  },
  {
    id: 'treat-10',
    title: 'Dried Apple Sticks',
    titlePt: 'Tiras de Maçã Desidratadas',
    category: 'treat',
    prepTimeMinutes: 150,
    yields: '1 large apple batch',
    yieldsPt: '1 maçã grande em tiras',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 15,
    tags: ['Naturally Sweet', 'Chewy', 'Raw Fruit Snack'],
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Apple, seeds & core completely removed', namePt: 'Maçã (sementes e miolo totalmente removidos)', amount: '1 large', baseGrams: 120 }
    ],
    instructions: [
      'Remove the core and seeds from the apple and slice thinly.',
      'Arrange on a baking sheet and bake at very low heat (210°F / 100°C) for about 2–3 hours, until dehydrated.'
    ],
    instructionsPt: [
      'Remova o miolo e todas as sementes da maçã e fatie fino.',
      'Disponha na assadeira e asse em fogo muito baixo (100°C) por 2 a 3 horas, até desidratar.'
    ],
    vetTip: 'Never offer apple seeds — they contain cyanogenic glycosides.',
    vetTipPt: 'Nunca ofereça sementes de maçã — elas contêm compostos tóxicos.'
  },
  {
    id: 'treat-11',
    title: 'Sardine Bites',
    titlePt: 'Petiscos de Sardinha',
    category: 'treat',
    prepTimeMinutes: 30,
    yields: '15 bites',
    yieldsPt: '15 bolinhos',
    proteinType: 'fish',
    isPuppyFriendly: false,
    caloriesPerServingBase: 42,
    tags: ['Omega-3 Boost', 'Budget Friendly', 'High Palatability'],
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Can sardines in water (no salt)', namePt: 'Lata de sardinha em água (sem sal)', amount: '1 can', baseGrams: 120 },
      { name: 'Oat flour', namePt: 'Farinha de aveia', amount: '1 cup', baseGrams: 100 },
      { name: 'Egg', namePt: 'Ovo', amount: '1 egg', baseGrams: 50 }
    ],
    instructions: [
      'Mash the sardines well, checking for any sharp large bones.',
      'Mix with the oat flour and egg.',
      'Shape into small balls and bake at 350°F (180°C) for 15–20 minutes.'
    ],
    instructionsPt: [
      'Amasse bem as sardinhas, conferindo se não há espinhas grandes rígidas.',
      'Misture com a farinha de aveia e o ovo.',
      'Molde em bolinhas e asse a 180°C por 15 a 20 minutos.'
    ],
    vetTip: 'Sardines are an excellent, budget-friendly source of EPA/DHA Omega-3.',
    vetTipPt: 'Sardinhas são uma fonte excelente e acessível de ômega-3.'
  },
  {
    id: 'treat-12',
    title: 'Carrot and Oat Cookies',
    titlePt: 'Biscoitos de Cenoura e Aveia',
    category: 'treat',
    prepTimeMinutes: 30,
    yields: '20 cookies',
    yieldsPt: '20 biscoitos',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 22,
    tags: ['Crispy', 'Eye Health', 'Daily Treat'],
    imageUrl: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Small carrot, cooked and grated', namePt: 'Cenoura pequena cozida e ralada', amount: '1 small', baseGrams: 50 },
      { name: 'Oat flour', namePt: 'Farinha de aveia', amount: '1 cup', baseGrams: 100 },
      { name: 'Egg', namePt: 'Ovo', amount: '1 egg', baseGrams: 50 }
    ],
    instructions: [
      'Mix the grated carrot with the oat flour and egg until a dough forms.',
      'Roll out and cut into small shapes.',
      'Bake at 350°F (180°C) for 15–18 minutes.'
    ],
    instructionsPt: [
      'Misture a cenoura ralada com a farinha de aveia e o ovo até formar uma massa.',
      'Abra a massa e corte em pequenos formatos.',
      'Asse a 180°C por 15 a 18 minutos.'
    ],
    vetTip: 'Cut the cookies extra small if serving small-breed dogs or puppies.',
    vetTipPt: 'Corte os biscoitos em tamanho minúsculo se for servir para cães de porte pequeno.'
  },
  {
    id: 'treat-13',
    title: 'Dehydrated Liver Treats',
    titlePt: 'Petisco de Fígado Desidratado',
    category: 'treat',
    prepTimeMinutes: 120,
    yields: '150 g liver treats',
    yieldsPt: '150 g de petisco de fígado',
    proteinType: 'liver',
    isPuppyFriendly: false,
    caloriesPerServingBase: 35,
    tags: ['Pure Meat Treat', 'Ultra High Reward'],
    imageUrl: 'https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Beef liver, thinly sliced', namePt: 'Fígado bovino fatiado fino', amount: '150 g (5 oz)', baseGrams: 150 }
    ],
    instructions: [
      'Slice the liver very thin.',
      'Arrange on a lined baking sheet and bake at low heat (210°F / 100°C) for about 1.5 to 2 hours, until dry and firm.'
    ],
    instructionsPt: [
      'Fatie o fígado bem fino.',
      'Disponha em uma assadeira e asse em fogo baixo (100°C) por cerca de 1,5 a 2 horas, até ficar seco e firme.'
    ],
    vetTip: 'Offer in moderation due to concentrated Vitamin A.',
    vetTipPt: 'Ofereça com moderação devido à concentração de Vitamina A.'
  },
  {
    id: 'treat-14',
    title: 'Sweet Potato and Egg Bites',
    titlePt: 'Bolinhas de Batata Doce e Ovo',
    category: 'treat',
    prepTimeMinutes: 30,
    yields: '15 bites',
    yieldsPt: '15 bolinhas',
    proteinType: 'egg',
    isPuppyFriendly: true,
    caloriesPerServingBase: 35,
    tags: ['Puppy Friendly', 'Soft Texture', 'Training'],
    imageUrl: '/src/assets/images/dog_treats_1785692615206.jpg',
    ingredients: [
      { name: 'Sweet potato, cooked and mashed', namePt: 'Batata doce cozida e amassada', amount: '1 medium', baseGrams: 120 },
      { name: 'Hard-boiled eggs, chopped', namePt: 'Ovos cozidos picados', amount: '2 eggs', baseGrams: 100 },
      { name: 'Oat flour', namePt: 'Farinha de aveia', amount: '2 tbsp', baseGrams: 20 }
    ],
    instructions: [
      'Mix the mashed sweet potato with the chopped eggs and oat flour until a dough forms.',
      'Shape into small balls and bake at 350°F (180°C) for 20 minutes.'
    ],
    instructionsPt: [
      'Misture a batata doce amassada com os ovos picados e a farinha de aveia.',
      'Molde em bolinhas e asse a 180°C por 20 minutos.'
    ],
    vetTip: 'Simple and highly nutritious — a great option for puppies during training.',
    vetTipPt: 'Simples e nutritivo — excelente para filhotes durante o adestramento.'
  },
  {
    id: 'treat-15',
    title: 'Coconut and Banana Cookies',
    titlePt: 'Biscoitos de Coco e Banana',
    category: 'treat',
    prepTimeMinutes: 30,
    yields: '20 cookies',
    yieldsPt: '20 biscoitos',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 30,
    tags: ['Aromatic', 'Healthy Fats'],
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Mashed banana', namePt: 'Banana madura amassada', amount: '1 banana', baseGrams: 100 },
      { name: 'Oat flour', namePt: 'Farinha de aveia', amount: '1 cup', baseGrams: 100 },
      { name: 'Unsweetened shredded coconut', namePt: 'Coco ralado sem açúcar', amount: '1 tbsp', baseGrams: 10 }
    ],
    instructions: [
      'Mix all ingredients into a uniform dough.',
      'Roll out and cut into small shapes.',
      'Bake at 350°F (180°C) for 15–18 minutes.'
    ],
    instructionsPt: [
      'Misture todos os ingredientes até obter uma massa uniforme.',
      'Abra a massa e corte em pequenos formatos.',
      'Asse a 180°C por 15 a 18 minutos.'
    ],
    vetTip: 'Shredded coconut should always be 100% unsweetened.',
    vetTipPt: 'O coco ralado deve ser sempre 100% sem açúcar.'
  },

  // --- FROZEN TREATS & POPSICLES (15 Recipes) ---
  {
    id: 'frozen-1',
    title: 'Banana "Ice Cream"',
    titlePt: 'Sorvete Cremoso de Banana',
    category: 'frozen',
    prepTimeMinutes: 5,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 60,
    tags: ['Refreshing', 'Summer Favorite', 'Probiotic'],
    imageUrl: '/src/assets/images/frozen_treats_1785692665587.jpg',
    ingredients: [
      { name: 'Ripe bananas, frozen in slices', namePt: 'Bananas maduras congeladas em rodelas', amount: '2 bananas', baseGrams: 200 },
      { name: 'Plain, unsweetened yogurt', namePt: 'Iogurte natural sem açúcar', amount: '2 tbsp', baseGrams: 30 }
    ],
    instructions: [
      'Blend the frozen banana slices with the yogurt in a food processor or blender until creamy.',
      'Serve immediately or freeze in small cups for up to 30 minutes before serving.'
    ],
    instructionsPt: [
      'Bata as rodelas de banana congelada com o iogurte no processador ou liquidificador até virar um creme.',
      'Sirva imediatamente ou congele em potinhos por até 30 minutos antes de servir.'
    ],
    vetTip: 'Use ripe bananas frozen in slices for the creamiest consistency.',
    vetTipPt: 'Use bananas bem maduras congeladas em fatias para melhor cremosidade.'
  },
  {
    id: 'frozen-2',
    title: 'Yogurt and Strawberry "Ice Cream"',
    titlePt: 'Sorvete de Iogurte com Morango',
    category: 'frozen',
    prepTimeMinutes: 5,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 45,
    tags: ['Antioxidant', 'Cooling', 'Low Fat'],
    imageUrl: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Chopped strawberries', namePt: 'Morangos picados', amount: '1/2 cup', baseGrams: 80 },
      { name: 'Plain, unsweetened yogurt', namePt: 'Iogurte natural sem açúcar', amount: '1/2 cup', baseGrams: 120 }
    ],
    instructions: [
      'Blend the strawberries with the yogurt until smooth.',
      'Pour into small molds or cups and freeze for about 3 hours.'
    ],
    instructionsPt: [
      'Bata os morangos com o iogurte até obter uma mistura homogênea.',
      'Despeje em pequenas formas ou copinhos e congele por cerca de 3 horas.'
    ],
    vetTip: 'Always choose plain yogurt, with no added sugar or artificial sweeteners.',
    vetTipPt: 'Escolha sempre iogurte natural integral, sem açúcar ou adoçantes.'
  },
  {
    id: 'frozen-3',
    title: 'Watermelon Pops',
    titlePt: 'Picolé de Melancia',
    category: 'frozen',
    prepTimeMinutes: 5,
    yields: '6 small pops',
    yieldsPt: '6 picolés pequenos',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 15,
    tags: ['Ultra Hydrating', 'Low Calorie', 'Summer Hit'],
    imageUrl: 'https://images.unsplash.com/photo-1488900128323-21503983257e?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Seedless watermelon, cubed', namePt: 'Melancia sem sementes em cubos', amount: '2 cups', baseGrams: 300 }
    ],
    instructions: [
      'Blend the seedless watermelon until juiced.',
      'Pour into popsicle molds (or ice cube trays) and freeze for at least 4 hours.'
    ],
    instructionsPt: [
      'Bata a melancia sem sementes no liquidificador até virar suco.',
      'Despeje em forminhas de picolé ou de gelo e congele por pelo menos 4 horas.'
    ],
    vetTip: 'Always double-check that all seeds have been removed before blending.',
    vetTipPt: 'Verifique se todas as sementes foram removidas antes de bater.'
  },
  {
    id: 'frozen-4',
    title: 'Pumpkin "Ice Cream"',
    titlePt: 'Sorvete de Abóbora',
    category: 'frozen',
    prepTimeMinutes: 10,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 50,
    tags: ['Digestive Care', 'Cooling Relief'],
    imageUrl: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Cooked, mashed pumpkin (cooled)', namePt: 'Abóbora cozida e amassada (fria)', amount: '1/2 cup', baseGrams: 100 },
      { name: 'Plain, unsweetened yogurt', namePt: 'Iogurte natural sem açúcar', amount: '1/2 cup', baseGrams: 120 },
      { name: 'Pinch of cinnamon (optional)', namePt: 'Pitada de canela (opcional, mínima)', amount: 'Pinch', baseGrams: 1 }
    ],
    instructions: [
      'Mix the cooled pumpkin with the yogurt until smooth.',
      'Pour into small cups and freeze for about 3 hours.'
    ],
    instructionsPt: [
      'Misture a abóbora fria com o iogurte até ficar cremoso.',
      'Despeje em copinhos e congele por cerca de 3 horas.'
    ],
    vetTip: 'Cinnamon is optional and should only be used in a minimal pinch.',
    vetTipPt: 'A canela é opcional e deve ser usada apenas em quantidade mínima.'
  },
  {
    id: 'frozen-5',
    title: 'Chicken Broth Pops',
    titlePt: 'Picolé de Caldo de Frango',
    category: 'frozen',
    prepTimeMinutes: 10,
    yields: '6 small pops',
    yieldsPt: '6 picolés pequenos',
    proteinType: 'chicken',
    isPuppyFriendly: true,
    caloriesPerServingBase: 25,
    tags: ['Hydration Boost', 'Savory Ice', 'Hot Weather Savior'],
    imageUrl: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Homemade chicken broth (no salt)', namePt: 'Caldo de frango caseiro (sem sal/temperos)', amount: '1 cup', baseGrams: 240 },
      { name: 'Finely shredded cooked chicken', namePt: 'Frango cozido desfiado bem fino', amount: '2 tbsp', baseGrams: 30 }
    ],
    instructions: [
      'Cook the chicken in plain water and save the broth.',
      'Mix the cooled broth with the shredded chicken.',
      'Pour into popsicle molds and freeze for at least 4 hours.'
    ],
    instructionsPt: [
      'Cozinhe o frango em água pura e guarde o caldo.',
      'Misture o caldo frio com o frango desfiado.',
      'Despeje em forminhas e congele por pelo menos 4 horas.'
    ],
    vetTip: 'Encourages dogs who do not drink enough water on hot summer days.',
    vetTipPt: 'Estimula cães que bebem pouca água nos dias quentes de verão.'
  },
  {
    id: 'frozen-6',
    title: 'Banana and Peanut Butter "Ice Cream"',
    titlePt: 'Sorvete de Banana com Pasta de Amendoim',
    category: 'frozen',
    prepTimeMinutes: 5,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 70,
    tags: ['Creamy Delight', 'Energy Boost'],
    imageUrl: '/src/assets/images/frozen_treats_1785692665587.jpg',
    ingredients: [
      { name: 'Ripe banana, frozen in slices', namePt: 'Banana madura congelada em rodelas', amount: '1 banana', baseGrams: 100 },
      { name: 'Peanut butter (xylitol-free)', namePt: 'Pasta de amendoim (sem xilitol)', amount: '1 tsp', baseGrams: 10 }
    ],
    instructions: [
      'Blend the frozen banana with the peanut butter until creamy.',
      'Freeze in small cups for about 2–3 hours before serving.'
    ],
    instructionsPt: [
      'Bata a banana congelada com a pasta de amendoim até ficar cremoso.',
      'Congele em copinhos por 2 a 3 horas antes de servir.'
    ],
    vetTip: 'Always verify the peanut butter ingredients list for zero xylitol.',
    vetTipPt: 'Sempre confira o rótulo da pasta de amendoim para zero xilitol.'
  },
  {
    id: 'frozen-7',
    title: 'Yogurt and Blueberry Pops',
    titlePt: 'Picolé de Iogurte e Mirtilo',
    category: 'frozen',
    prepTimeMinutes: 5,
    yields: '6 small pops',
    yieldsPt: '6 picolés pequenos',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 25,
    tags: ['Superfood Ice', 'Antioxidant Burst'],
    imageUrl: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Blueberries', namePt: 'Mirtilos (blueberries)', amount: '1/2 cup', baseGrams: 80 },
      { name: 'Plain, unsweetened yogurt', namePt: 'Iogurte natural sem açúcar', amount: '1/2 cup', baseGrams: 120 }
    ],
    instructions: [
      'Blend the blueberries with the yogurt until smooth.',
      'Pour into popsicle molds and freeze for at least 4 hours.'
    ],
    instructionsPt: [
      'Bata os mirtilos com o iogurte até obter uma mistura homogênea.',
      'Despeje nas forminhas e congele por pelo menos 4 horas.'
    ],
    vetTip: 'Blueberries are rich in anthocyanins and polyphenols.',
    vetTipPt: 'Os mirtilos são riquíssimos em antocianinas e polifenóis.'
  },
  {
    id: 'frozen-8',
    title: 'Apple "Ice Cream"',
    titlePt: 'Sorvete de Maçã',
    category: 'frozen',
    prepTimeMinutes: 10,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 55,
    tags: ['Pectin Rich', 'Sweet Refreshment'],
    imageUrl: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Apple, seeds removed, chopped & cooked', namePt: 'Maçã sem sementes, picada e cozida', amount: '1 apple', baseGrams: 100 },
      { name: 'Plain, unsweetened yogurt', namePt: 'Iogurte natural sem açúcar', amount: '1/2 cup', baseGrams: 120 }
    ],
    instructions: [
      'Cook the chopped apple (seeds removed) until soft and let cool.',
      'Blend with the yogurt until smooth.',
      'Freeze in small cups for about 3 hours.'
    ],
    instructionsPt: [
      'Cozinhe a maçã picada (sem sementes) até amolecer e deixe esfriar.',
      'Bata com o iogurte até ficar cremoso.',
      'Congele em copinhos por cerca de 3 horas.'
    ],
    vetTip: 'Cooking apple softens texture and aids enzymatic digestion.',
    vetTipPt: 'Cozinhar a maçã suaviza a textura e melhora a digestão.'
  },
  {
    id: 'frozen-9',
    title: 'Beef Broth Pops',
    titlePt: 'Picolé de Caldo de Carne',
    category: 'frozen',
    prepTimeMinutes: 10,
    yields: '6 small pops',
    yieldsPt: '6 picolés pequenos',
    proteinType: 'beef',
    isPuppyFriendly: true,
    caloriesPerServingBase: 30,
    tags: ['Mineral Rich', 'Savory Frozen Treat'],
    imageUrl: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Homemade beef broth (no salt)', namePt: 'Caldo de carne caseiro (sem sal)', amount: '1 cup', baseGrams: 240 },
      { name: 'Finely chopped cooked beef', namePt: 'Carne cozida picada bem fina', amount: '2 tbsp', baseGrams: 30 }
    ],
    instructions: [
      'Cook the beef in plain water and save the broth.',
      'Mix the broth with the chopped beef.',
      'Pour into popsicle molds and freeze for at least 4 hours.'
    ],
    instructionsPt: [
      'Cozinhe a carne em água pura e guarde o caldo.',
      'Misture o caldo com a carne picada.',
      'Despeje em forminhas e congele por pelo menos 4 horas.'
    ],
    vetTip: 'Never use commercial bouillon cubes due to extreme sodium content.',
    vetTipPt: 'Nunca use caldos industrializados em cubo por causa do sódio.'
  },
  {
    id: 'frozen-10',
    title: 'Coconut and Banana "Ice Cream"',
    titlePt: 'Sorvete de Coco com Banana',
    category: 'frozen',
    prepTimeMinutes: 5,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 65,
    tags: ['Lactose Free', 'Dairy Free', 'Tropical Delight'],
    imageUrl: '/src/assets/images/frozen_treats_1785692665587.jpg',
    ingredients: [
      { name: 'Ripe banana, frozen in slices', namePt: 'Banana madura congelada em rodelas', amount: '1 banana', baseGrams: 100 },
      { name: 'Unsweetened coconut milk', namePt: 'Leite de coco sem açúcar', amount: '2 tbsp', baseGrams: 30 }
    ],
    instructions: [
      'Blend the frozen banana with the coconut milk until creamy.',
      'Freeze in small cups for about 2 hours before serving.'
    ],
    instructionsPt: [
      'Bata a banana congelada com o leite de coco até virar um creme.',
      'Congele em copinhos por 2 horas antes de servir.'
    ],
    vetTip: 'Great dairy-free alternative for dogs sensitive to lactose.',
    vetTipPt: 'Ótima alternativa sem lactose para cães sensíveis ao iogurte.'
  },
  {
    id: 'frozen-11',
    title: 'Mango Pops',
    titlePt: 'Picolé de Manga',
    category: 'frozen',
    prepTimeMinutes: 5,
    yields: '6 small pops',
    yieldsPt: '6 picolés pequenos',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 20,
    tags: ['Vitamin A & C', 'Sweet Refreshment'],
    imageUrl: 'https://images.unsplash.com/photo-1488900128323-21503983257e?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Ripe mango, cubed', namePt: 'Manga madura em cubos', amount: '1 cup', baseGrams: 150 },
      { name: 'Water', namePt: 'Água', amount: '2 tbsp', baseGrams: 30 }
    ],
    instructions: [
      'Blend the mango with the water until smooth.',
      'Pour into popsicle molds and freeze for at least 4 hours.'
    ],
    instructionsPt: [
      'Bata a manga com a água no liquidificador.',
      'Despeje em forminhas de picolé e congele por pelo menos 4 horas.'
    ],
    vetTip: 'Always discard the mango pit completely before prep.',
    vetTipPt: 'Descarte completamente o caroço da manga antes do preparo.'
  },
  {
    id: 'frozen-12',
    title: 'Yogurt and Pumpkin "Ice Cream"',
    titlePt: 'Sorvete de Iogurte, Abóbora e Mel',
    category: 'frozen',
    prepTimeMinutes: 10,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 55,
    tags: ['Probiotic', 'Digestive Balance'],
    imageUrl: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Cooked, mashed pumpkin', namePt: 'Abóbora cozida e amassada', amount: '1/2 cup', baseGrams: 100 },
      { name: 'Plain, unsweetened yogurt', namePt: 'Iogurte natural sem açúcar', amount: '1/2 cup', baseGrams: 120 },
      { name: 'Pure honey (optional)', namePt: 'Mel puro (opcional, mínimo)', amount: '1 tsp', baseGrams: 5 }
    ],
    instructions: [
      'Mix the pumpkin with the yogurt and minimal pure honey if desired.',
      'Freeze in small cups for about 3 hours.'
    ],
    instructionsPt: [
      'Misture a abóbora com o iogurte e o fio de mel puro.',
      'Congele em copinhos por cerca de 3 horas.'
    ],
    vetTip: 'Honey should only be offered occasionally in tiny quantities.',
    vetTipPt: 'O mel deve ser offered apenas ocasionalmente em quantidades mínimas.'
  },
  {
    id: 'frozen-13',
    title: 'Chicken Broth and Carrot Pops',
    titlePt: 'Picolé de Caldo de Frango e Cenoura',
    category: 'frozen',
    prepTimeMinutes: 10,
    yields: '6 small pops',
    yieldsPt: '6 picolés pequenos',
    proteinType: 'chicken',
    isPuppyFriendly: true,
    caloriesPerServingBase: 20,
    tags: ['Post-Play Cool Down', 'Hydrating'],
    imageUrl: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Homemade chicken broth', namePt: 'Caldo de frango caseiro sem sal', amount: '1 cup', baseGrams: 240 },
      { name: 'Cooked, grated carrot', namePt: 'Cenoura cozida e ralada', amount: '2 tbsp', baseGrams: 30 }
    ],
    instructions: [
      'Mix the cooled chicken broth with the grated carrot.',
      'Pour into popsicle molds and freeze for at least 4 hours.'
    ],
    instructionsPt: [
      'Misture o caldo de frango frio com a cenoura ralada.',
      'Despeje em forminhas e congele por pelo menos 4 hours.'
    ],
    vetTip: 'A great refreshing reward after park playtime on hot days.',
    vetTipPt: 'Ótima recompensa refrescante após brincadeiras em dias quentes.'
  },
  {
    id: 'frozen-14',
    title: 'Banana and Oat "Ice Cream"',
    titlePt: 'Sorvete de Banana e Aveia',
    category: 'frozen',
    prepTimeMinutes: 5,
    yields: '2 servings',
    yieldsPt: '2 porções',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 65,
    tags: ['Hearty Frozen Treat', 'Satiating'],
    imageUrl: '/src/assets/images/frozen_treats_1785692665587.jpg',
    ingredients: [
      { name: 'Ripe banana, frozen in slices', namePt: 'Banana madura congelada em rodelas', amount: '1 banana', baseGrams: 100 },
      { name: 'Finely ground rolled oats', namePt: 'Aveia em flocos finos', amount: '1 tbsp', baseGrams: 10 },
      { name: 'Plain, unsweetened yogurt', namePt: 'Iogurte natural sem açúcar', amount: '2 tbsp', baseGrams: 30 }
    ],
    instructions: [
      'Blend all ingredients together until smooth.',
      'Freeze in small cups for about 2–3 hours before serving.'
    ],
    instructionsPt: [
      'Bata todos os ingredientes até obter um creme liso.',
      'Congele em copinhos por cerca de 2 a 3 horas.'
    ],
    vetTip: 'The oats make the texture heartier and help satisfy larger dogs.',
    vetTipPt: 'A aveia torna a textura mais consistente e satisfaz cães maiores.'
  },
  {
    id: 'frozen-15',
    title: 'Watermelon and Mint Pops',
    titlePt: 'Picolé de Melancia com Hortelã',
    category: 'frozen',
    prepTimeMinutes: 5,
    yields: '6 small pops',
    yieldsPt: '6 picolés pequenos',
    proteinType: 'fruit_veggie',
    isPuppyFriendly: true,
    caloriesPerServingBase: 15,
    tags: ['Fresh Breath', 'Ultra Refreshing'],
    imageUrl: 'https://images.unsplash.com/photo-1488900128323-21503983257e?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Seedless watermelon', namePt: 'Melancia sem sementes', amount: '2 cups', baseGrams: 300 },
      { name: 'Fresh mint leaves', namePt: 'Folhas de hortelã fresca', amount: '2 small leaves', baseGrams: 2 }
    ],
    instructions: [
      'Blend the seedless watermelon with the mint leaves until smooth.',
      'Pour into popsicle molds and freeze for at least 4 hours.'
    ],
    instructionsPt: [
      'Bata a melancia sem sementes com as folhas de hortelã até virar suco.',
      'Despeje em forminhas e congele por pelo menos 4 horas.'
    ],
    vetTip: 'Mint helps freshen breath; use only 1-2 small leaves.',
    vetTipPt: 'A hortelã ajuda a refrescar o hálito; use apenas 1 a 2 folhinhas.'
  }
];

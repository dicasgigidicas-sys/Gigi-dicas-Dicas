import { Chapter } from '../types';

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: 0,
    slug: 'introducao',
    title: 'Introduction — Complete Natural Dog Food Guide',
    titlePt: 'Introdução — Guia Completo de Alimentação Natural Caseira',
    subtitle: 'Welcome to your definitive handbook for transformational canine health and nutrition',
    subtitlePt: 'Seja bem-vindo ao seu manual definitivo para uma nutrição canina saudável, saborosa e segura',
    readTimeMinutes: 3,
    sections: [
      {
        heading: 'Welcome to Canine Natural Nutrition',
        headingPt: 'Boas-Vindas à Nutrição Natural Canina',
        content: 'Serving fresh, homemade natural meals to your dog is one of the greatest acts of love and health care. By replacing ultra-processed kibble with real, wholesome ingredients, you deliver increased vitality, firmer stools with minimal odor, shiny fur, stronger immunity, and exceptional long-term health.',
        contentPt: 'Oferecer comida fresca e natural feita em casa para o seu cão é um dos maiores atos de amor e cuidado com a saúde dele. Ao trocar alimentos ultraprocessados por refeições de verdade, você proporciona mais vitalidade, fezes mais firmes com menor odor, pelo extremamente brilhante, imunidade fortalecida e uma longevidade incomparável.'
      },
      {
        heading: 'What You Will Find in This Guide & Application',
        headingPt: 'O Que Você Encontrará Neste Guia e Aplicativo',
        content: 'This digital book and interactive application were carefully designed to guide you step-by-step through canine nutrition:',
        contentPt: 'Este livro digital e aplicativo interativo foram cuidadosamente elaborados para guiar você passo a passo na nutrição do seu melhor amigo:',
        bulletPoints: [
          'Detailed Theory Chapters: From calorie math (RER/DME) to storage, budgeting, and homemade dry kibble.',
          'Interactive Portion Calculator: Calculate exact daily gram portions adjusted to your dog\'s weight, age, and activity level.',
          '50+ Tested Recipes Catalog: Complete meals, baked treats, and frozen popsicles with live portion scaling.',
          'Food Safety Table: Instant lookup for allowed fruits, safe vegetables, and toxic foods to avoid.',
          '7–10 Day Transition Schedule: A gradual step-by-step plan to switch diets without stomach upset.',
          'AI Nutrition Assistant (Dr. NutriPaw): Instant answers to substitutions, eggshell calcium powder, and custom recipes.'
        ],
        bulletPointsPt: [
          'Capítulos Teóricos Detalhados: Do cálculo de calorias (RER/DME) até a conservação, economia e ração desidratada.',
          'Calculadora Automática de Porção Diária: Descubra a quantidade exata em gramas de acordo com o peso, idade e atividade do cão.',
          'Banco de 50+ Receitas Testadas: Refeições completas, petiscos assados e picolés refrescantes com redimensionador de porção.',
          'Tabela de Alimentos Permitidos e Proibidos: Consulta rápida de frutas seguras e ingredientes tóxicos a evitar.',
          'Plano de Transição de 7 a 10 Dias: Passo a passo gradual para adaptar a digestão do seu cão com total segurança.',
          'Assistente Nutri IA (Dr. NutriPaw): Inteligência Artificial pronta para esclarecer dúvidas e adaptar receitas.'
        ]
      },
      {
        heading: 'The 3 Golden Rules of Homemade Dog Food',
        headingPt: 'As 3 Regras de Ouro da Alimentação Caseira',
        content: 'Natural feeding must always be balanced and prepared with responsibility. Never forget these golden rules:',
        contentPt: 'A alimentação natural caseira deve ser sempre equilibrada e preparada com responsabilidade. Lembre-se destas três regras de ouro:',
        bulletPoints: [
          'ZERO Toxic Seasonings: Never use salt, garlic, onion, pepper, or commercial stock cubes. Dogs love the natural taste of meat and veggies.',
          'Mandatory Calcium Supplementation: Meat is high in phosphorus but low in calcium. Calcium (eggshell powder or vet supplement) is essential for bones.',
          'Always Transition Gradually: Never change diets overnight to prevent gastrointestinal upset.'
        ],
        bulletPointsPt: [
          'ZERO Temperos Tóxicos: Nunca use sal, alho, cebola, pimenta ou caldos industrializados. Cães apreciam o sabor natural dos alimentos.',
          'Cálcio Obrigatório: A carne é rica em fósforo e pobre em cálcio. A suplementação com pó de casca de ovo ou suplemento veterinário é indispensável.',
          'Transição Sempre Gradual: Nunca mude a alimentação de um dia para o outro para evitar diarreia ou vômitos.'
        ],
        callout: {
          type: 'info',
          title: 'How to Read This Guide',
          text: 'Use the chapter index on the left (or top on mobile) to navigate between chapters, or click the Next Chapter button below. Enjoy reading!'
        }
      }
    ]
  },
  {
    id: 1,
    slug: 'benefits',
    title: 'Benefits of Homemade Food for Pets',
    titlePt: 'Benefícios da Alimentação Caseira para Cães',
    subtitle: 'Why fresh, natural food transforms your pet\'s health, energy, and coat',
    subtitlePt: 'Por que a comida fresca e natural transforma a saúde, energia e pelagem do seu cão',
    readTimeMinutes: 4,
    sections: [
      {
        heading: 'Fresh, Recognizable Ingredients',
        headingPt: 'Ingredientes Frescos e Reconhecíveis',
        content: 'When you prepare your dog\'s meals, you know exactly what goes into the bowl. There are no artificial colorants, synthetic chemical preservatives, chemical flavor enhancers, or mystery meat byproducts.',
        contentPt: 'Quando você prepara a comida do seu cão, sabe exatamente o que está na tigela. Não há corantes artificiais, conservantes químicos sintéticos, realçadores de sabor ou subprodutos carnes misteriosos.'
      },
      {
        heading: 'Health Advantages at a Glance',
        headingPt: 'Vantagens para a Saúde em Destaque',
        content: 'A well-balanced natural diet provides immediate and long-term benefits across multiple body systems:',
        contentPt: 'Uma dieta natural bem equilibrada traz benefícios imediatos e a longo prazo em múltiplos sistemas do organismo:',
        bulletPoints: [
          'Better Skin and Coat: Rich in quality protein and healthy fats (coconut oil, flaxseed oil), resulting in a shiny coat and less itching.',
          'More Energy and Vitality: Stable nutrient absorption prevents blood sugar spikes and lethargy.',
          'Fresher Breath & Smaller Stools: Clean digestion without filler grains leads to healthier digestion and less fecal odor.',
          'Easier Weight Management: You control every calorie, making weight loss or maintenance straightforward.',
          'Long-term Disease Prevention: Reduced risk of obesity, cardiac issues, and diabetes over your dog\'s lifetime.'
        ],
        bulletPointsPt: [
          'Pele e Pelagem Melhores: Rica em proteínas de qualidade e gorduras boas, resultando em pelo brilhante e menos coceiras.',
          'Mais Energia e Vitalidade: Absorção estável de nutrientes evita picos de glicemia e apatia.',
          'Hálito Fresco e Fezes Menores: Digestão limpa sem grãos de enchimento resulta em fezes mais firmes e menor odor.',
          'Controle de Peso Facilitado: Você controla cada caloria, facilitando o emagrecimento ou a manutenção.',
          'Prevenção de Doenças a Longo Prazo: Menor risco de obesidade, problemas cardíacos e diabetes ao longo da vida.'
        ]
      }
    ]
  },
  {
    id: 2,
    slug: 'precautions',
    title: 'Precautions When Preparing Pet Food for the First Time',
    titlePt: 'Cuidados na Primeiras Preparações',
    subtitle: 'Transition schedules, hygiene rules, and zero-seasoning golden rule',
    subtitlePt: 'Cronograma de transição, regras de higiene e a regra de ouro sem temperos',
    readTimeMinutes: 5,
    sections: [
      {
        heading: 'Gradual Transition Schedule (7 to 10 Days)',
        headingPt: 'Cronograma de Transição Gradual (7 a 10 Dias)',
        content: 'Never switch your dog\'s food abruptly from dry kibble to 100% natural food overnight. Abrupt changes can disrupt intestinal flora and cause diarrhea or stomach upset.',
        contentPt: 'Nunca mude a alimentação do seu cão abruptamente da ração seca para 100% comida natural de um dia para o outro. Mudanças repentinas podem desequilibrar a flora intestinal.',
        bulletPoints: [
          'Days 1–2: 25% Natural Food + 75% Old Kibble',
          'Days 3–4: 50% Natural Food + 50% Old Kibble',
          'Days 5–6: 75% Natural Food + 25% Old Kibble',
          'Day 7 onwards: 100% Natural Fresh Food'
        ],
        bulletPointsPt: [
          'Dias 1–2: 25% Comida Natural + 75% Ração Antiga',
          'Dias 3–4: 50% Comida Natural + 50% Ração Antiga',
          'Dias 5–6: 75% Comida Natural + 25% Ração Antiga',
          'Dia 7 em diante: 100% Comida Natural Fresca'
        ],
        callout: {
          type: 'warning',
          title: 'The Golden Rule of Dog Food',
          text: 'NEVER season your dog\'s food! Salt, garlic, onion, pepper, soy sauce, and commercial stock cubes are strictly toxic or harmful to dogs. Prepare all meat, grains, and veggies plain.'
        }
      }
    ]
  },
  {
    id: 3,
    slug: 'nutrients',
    title: 'Essential Nutrients in Homemade Dog Food',
    titlePt: 'Nutrientes Essenciais na Alimentação Natural',
    subtitle: 'The 4 plate pillars and why calcium is non-negotiable',
    subtitlePt: 'Os 4 pilares do prato e por que o cálcio é inegociável',
    readTimeMinutes: 6,
    sections: [
      {
        heading: 'The Plate Proportions',
        headingPt: 'A Proporção Ideal do Prato',
        content: 'A complete cooked homemade meal for a healthy adult dog follows these dietary proportions:',
        contentPt: 'Uma refeição caseira cozida completa para um cão adulto saudável segue estas proporções:',
        bulletPoints: [
          'Protein (40%–50%): Lean chicken breast, lean ground beef, turkey, tilapia/hake fillets, beef liver, eggs.',
          'Carbohydrates & Fibers (30%–40%): Sweet potato, pumpkin, white/brown rice, rolled oats, arracacha (mandioquinha).',
          'Vegetables (10%–20%): Carrots, zucchini, green beans, chayote, broccoli (cooked).',
          'Healthy Fats: Small daily teaspoon of coconut oil or flaxseed oil.'
        ],
        bulletPointsPt: [
          'Proteínas (40%–50%): Peito de frango, carne moída magra, peru, filé de tilápia/merluza, fígado bovino, ovos.',
          'Carboidratos e Fibras (30%–40%): Batata doce, abóbora, arroz branco/integral, aveia, mandioquinha.',
          'Vegetais (10%–20%): Cenoura, abobrinha, vagem, chuchu, brócolis cozido.',
          'Gorduras Saudáveis: Pequena colher de chá diária de óleo de coco ou óleo de linhaça.'
        ]
      },
      {
        heading: 'Calcium: The Most Critical Element',
        headingPt: 'Cálcio: O Elemento Mais Crítico',
        content: 'Commercial kibble is artificially fortified with calcium. Pure meat, rice, and vegetables are naturally rich in phosphorus but VERY low in calcium. Feeding meat without calcium causes severe metabolic bone disease (hyperparathyroidism).',
        contentPt: 'Rações comerciais são fortificadas artificialmente com cálcio. Carnes e vegetais são ricos em fósforo, mas POBRES em cálcio. Fornecer carne sem cálcio causa sérias doenças ósseas.',
        callout: {
          type: 'danger',
          title: 'Mandatory Calcium Supplementation',
          text: 'Always add a calcium source! Either fine eggshell powder (approx 1 tsp per kg of food) or a veterinary calcium supplement prescribed for your dog\'s weight.'
        }
      }
    ]
  },
  {
    id: 4,
    slug: 'calculator-guide',
    title: 'How to Calculate Ideal Daily Food Amount',
    titlePt: 'Como Calcular a Quantidade Diária Ideal',
    subtitle: 'Understanding RER, DME multipliers, and exact portion math',
    subtitlePt: 'Entendendo a RER, multiplicadores DME e cálculo exato de porções',
    readTimeMinutes: 5,
    sections: [
      {
        heading: 'Step 1: Calculate Resting Energy Requirement (RER)',
        headingPt: 'Passo 1: Calcular a Necessidade Energética de Repouso (RER)',
        content: 'RER estimates the calories your dog burns at rest. Formula: RER = 70 × (Body Weight in kg)^0.75. For quick estimation (5-25kg dogs): RER ≈ (30 × weight in kg) + 70.',
        contentPt: 'A RER estima as calorias que o cão queima em repouso. Fórmula: RER = 70 × (Peso em kg)^0.75. Aproximação prática: RER ≈ (30 × peso em kg) + 70.'
      },
      {
        heading: 'Step 2: Apply Activity Multipliers (DME)',
        headingPt: 'Passo 2: Aplicar o Multiplicador de Atividade (DME)',
        content: 'Multiply RER by your dog\'s specific multiplier:',
        contentPt: 'Multiplique a RER pelo fator da situação do cão:',
        bulletPoints: [
          'Puppy (< 4 months): Multiplier 3.0',
          'Puppy (4–12 months): Multiplier 2.0',
          'Neutered Adult (Low Activity): Multiplier 1.6',
          'Intact Adult (Active): Multiplier 1.8',
          'Weight Loss Diet: Multiplier 1.0',
          'Senior / Sedentary: Multiplier 1.4'
        ],
        bulletPointsPt: [
          'Filhote (< 4 meses): Fator 3.0',
          'Filhote (4–12 meses): Fator 2.0',
          'Adulto Castrado (Baixa Atividade): Fator 1.6',
          'Adulto Ativo (Não Castrado): Fator 1.8',
          'Dieta de Emagrecimento: Fator 1.0',
          'Sênior / Sedentário: Fator 1.4'
        ]
      }
    ]
  },
  {
    id: 5,
    slug: 'preparation',
    title: 'Natural Food Preparation Techniques',
    titlePt: 'Técnicas de Preparo da Comida Natural',
    subtitle: 'Steaming, boiling, portioning, freezing, and safety guidelines',
    subtitlePt: 'Cozimento a vapor, porcionamento, congelamento e segurança',
    readTimeMinutes: 4,
    sections: [
      {
        heading: 'Best Cooking Methods',
        headingPt: 'Melhores Métodos de Cozimento',
        content: 'Steaming or light boiling in plain water is the best method. It locks in water-soluble vitamins without requiring added cooking oils.',
        contentPt: 'Cozinhar a vapor ou fervura leve em água pura é o melhor método. Preserva vitaminas sem necessidade de óleos.'
      },
      {
        heading: 'Freezing and Storage Life',
        headingPt: 'Congelamento e Validade',
        content: 'Cooked natural dog food keeps in the refrigerator for up to 2 days, or in the freezer for up to 3 months. Thaw frozen portions overnight inside the refrigerator.',
        contentPt: 'A comida natural cozida dura até 2 dias na geladeira ou até 3 meses no freezer. Descongele as porções dentro da geladeira de um dia para o outro.'
      }
    ]
  },
  {
    id: 6,
    slug: 'quality-tips',
    title: 'Tips for Preparing Excellent Quality Food',
    titlePt: 'Dicas para uma Preparação de Excelente Qualidade',
    subtitle: 'Rotating proteins, trimming fat, and hydration hacks',
    subtitlePt: 'Rotação de proteínas, remoção de gordura e dicas de hidratação',
    readTimeMinutes: 3,
    sections: [
      {
        heading: 'Variety Matters',
        headingPt: 'Variedade Importa',
        content: 'Rotate proteins between chicken, beef, fish, turkey, and eggs across weeks. This prevents food boredom and covers a wider spectrum of natural amino acids and vitamins.',
        contentPt: 'Alterne as proteínas entre frango, carne, peixe, peru e ovos ao longo das semanas. Isso evita o desinteresse e garante aminoácidos variados.'
      }
    ]
  },
  {
    id: 7,
    slug: 'saving-money',
    title: 'Saving Money on Your Dog\'s Food',
    titlePt: 'Como Economizar na Comida do Seu Cão',
    subtitle: 'Bulk buying, seasonal veggies, and batch cooking strategies',
    subtitlePt: 'Compras em atacado, vegetais da estação e cozimento em lote',
    readTimeMinutes: 4,
    sections: [
      {
        heading: 'Smart Purchasing Strategies',
        headingPt: 'Estratégias de Compra Inteligente',
        content: 'Homemade food often costs equal to or LESS than premium kibble when you buy affordable meat cuts (ground beef, chicken breast, liver) in bulk and seasonal produce at local farmers\' markets.',
        contentPt: 'A comida caseira frequentemente custa igual ou MENOS que rações super premium quando você compra cortes de carne acessíveis em quantidade e vegetais da estação na feira.'
      }
    ]
  },
  {
    id: 8,
    slug: 'allowed-forbidden',
    title: 'Allowed and Forbidden Fruits and Foods',
    titlePt: 'Alimentos Permitidos e Proibidos',
    subtitle: 'Quick visual guide for fruits, veggies, and toxic items to avoid',
    subtitlePt: 'Guia visual rápido de frutas, vegetais e alimentos proibidos',
    readTimeMinutes: 5,
    sections: [
      {
        heading: 'Safe Fruit Guidelines',
        headingPt: 'Regras de Segurança para Frutas',
        content: 'Fruits are great healthy treats! Always remove all seeds, pits, and tough cores (e.g. apple seeds contain cyanogenic compounds; mango pits are choking hazards).',
        contentPt: 'Frutas são ótimos petiscos! Sempre remova sementes, caroços e miolos duros.'
      }
    ]
  },
  {
    id: 9,
    slug: 'dry-food',
    title: 'How to Make Homemade "Dry" Food',
    titlePt: 'Como Fazer Ração Seca Caseira Desidratada',
    subtitle: 'Convenient dehydrated kibble alternative for travel and busy days',
    subtitlePt: 'Alternativa desidratada prática para viagens e dias corridos',
    readTimeMinutes: 5,
    sections: [
      {
        heading: 'Dehydrated Homemade Kibble Process',
        headingPt: 'Processo da Ração Seca Desidratada',
        content: 'Combine cooked lean ground meat (chicken, beef, or turkey) with mashed sweet potato or pumpkin, rolled oats, and grated cooked carrot into a smooth paste. Spread in a thin layer on parchment paper.',
        contentPt: 'Misture carne magra cozida com purê de batata doce ou abóbora, aveia em flocos e cenoura ralada até formar uma massa lisa. Espalhe uma camada fina sobre papel manteiga.'
      },
      {
        heading: 'Low Temperature Baking',
        headingPt: 'Assamento em Baixa Temperatura',
        content: 'Bake at 175°F–210°F (80°C–100°C) with the oven door slightly cracked for 3 to 4 hours until completely dry and crumbly. Break into bite-sized kibble pieces. Keeps up to 30 days in an airtight container or 3 months refrigerated!',
        contentPt: 'Asse a 80°C–100°C com a porta do forno levemente entreaberta por 3 a 4 horas até secar por completo. Quebre em pedacinhos. Dura até 30 dias em pote hermético ou 3 meses na geladeira!'
      }
    ]
  }
];

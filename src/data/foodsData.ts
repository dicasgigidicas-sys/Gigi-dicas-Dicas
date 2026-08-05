import { FoodSafetyItem } from '../types';

export const FOODS_SAFETY_DATA: FoodSafetyItem[] = [
  // --- ALLOWED FRUITS & FOODS ---
  {
    id: 'food-1',
    name: 'Apple',
    namePt: 'Maçã',
    category: 'fruit',
    isAllowed: true,
    note: 'Remove seeds and core completely before serving. Rich in fiber and Vitamin C.',
    notePt: 'Remova totalmente o miolo e as sementes antes de servir. Rica em fibras e Vitamina C.',
    iconName: 'Apple'
  },
  {
    id: 'food-2',
    name: 'Banana',
    namePt: 'Banana',
    category: 'fruit',
    isAllowed: true,
    note: 'High in potassium and B vitamins; offer in moderation as it is calorie-dense.',
    notePt: 'Rica em potássio e vitaminas B; ofereça com moderação por ser calórica.',
    iconName: 'Banana'
  },
  {
    id: 'food-3',
    name: 'Watermelon',
    namePt: 'Melancia',
    category: 'fruit',
    isAllowed: true,
    note: 'Remove all seeds and rind. Excellent for hot days due to 92% water content.',
    notePt: 'Remova todas as sementes e a casca. Excelente para dias quentes (92% de água).',
    iconName: 'Droplet'
  },
  {
    id: 'food-4',
    name: 'Strawberry',
    namePt: 'Morango',
    category: 'fruit',
    isAllowed: true,
    note: 'Rich in antioxidants and Vitamin C. Offer fresh or frozen in small amounts.',
    notePt: 'Rico em antioxidantes e Vitamina C. Ofereça fresco ou congelado em pequenas porções.',
    iconName: 'Sparkles'
  },
  {
    id: 'food-5',
    name: 'Papaya',
    namePt: 'Mamão',
    category: 'fruit',
    isAllowed: true,
    note: 'Remove seeds and skin. Contains papain enzyme which aids digestive motility.',
    notePt: 'Remova sementes e casca. Contém a enzima papaína que estimula a digestão.',
    iconName: 'Activity'
  },
  {
    id: 'food-6',
    name: 'Mango',
    namePt: 'Manga',
    category: 'fruit',
    isAllowed: true,
    note: 'Remove pit completely. Offer in small moderation due to natural fruit sugars.',
    notePt: 'Remova o caroço completamente. Ofereça em moderação devido ao açúcar natural.',
    iconName: 'Sun'
  },
  {
    id: 'food-7',
    name: 'Blueberry',
    namePt: 'Mirtilo',
    category: 'fruit',
    isAllowed: true,
    note: 'Rich in antioxidants and polyphenols. Great for brain and immune health.',
    notePt: 'Rico em antioxidantes. Excelente para a saúde cerebral e imunidade.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'food-8',
    name: 'Pear',
    namePt: 'Pêra',
    category: 'fruit',
    isAllowed: true,
    note: 'Remove seeds and core. Provides good fiber and Vitamin K.',
    notePt: 'Remova as sementes e o miolo. Fonte de fibras e Vitamina K.',
    iconName: 'Heart'
  },
  {
    id: 'food-9',
    name: 'Sweet Potato',
    namePt: 'Batata Doce',
    category: 'veggie',
    isAllowed: true,
    note: 'Always serve fully cooked. Excellent source of digestible complex carbs and fiber.',
    notePt: 'Sirva sempre bem cozida. Excelente fonte de carboidratos complexos e fibras.',
    iconName: 'CheckCircle'
  },
  {
    id: 'food-10',
    name: 'Pumpkin',
    namePt: 'Abóbora',
    category: 'veggie',
    isAllowed: true,
    note: 'Great for regulating bowel movements (helps with both constipation and loose stool).',
    notePt: 'Fantástica para regular o intestino (ajuda tanto em constipação quanto fezes moles).',
    iconName: 'Smile'
  },
  {
    id: 'food-11',
    name: 'Carrot',
    namePt: 'Cenoura',
    category: 'veggie',
    isAllowed: true,
    note: 'Can be served cooked or raw as a low-calorie chew. Rich in beta-carotene.',
    notePt: 'Pode ser servida cozida ou crua como roer de baixa caloria. Rica em betacaroteno.',
    iconName: 'Check'
  },
  {
    id: 'food-12',
    name: 'Chicken Breast',
    namePt: 'Peito de Frango',
    category: 'protein',
    isAllowed: true,
    note: 'Boil or steam with zero seasoning or salt. Lean, highly digestible protein.',
    notePt: 'Cozinhe em água sem nenhum tempero ou sal. Proteína magra de alta digestibilidade.',
    iconName: 'Flame'
  },

  // --- FORBIDDEN TOXIC FOODS ---
  {
    id: 'food-toxic-1',
    name: 'Grapes & Raisins',
    namePt: 'Uvas e Uvas-Passas',
    category: 'toxic',
    isAllowed: false,
    note: 'STRICTLY FORBIDDEN',
    notePt: 'ESTRITAMENTE PROIBIDO',
    reasonIfForbidden: 'Can cause acute, severe kidney failure even in tiny amounts. Symptoms include vomiting and lethargy.',
    reasonIfForbiddenPt: 'Pode causar insuficiência renal aguda grave mesmo em pequenas quantidades.',
    iconName: 'AlertTriangle'
  },
  {
    id: 'food-toxic-2',
    name: 'Avocado',
    namePt: 'Abacate',
    category: 'toxic',
    isAllowed: false,
    note: 'FORBIDDEN',
    notePt: 'PROIBIDO',
    reasonIfForbidden: 'Contains persin, a toxin that causes vomiting and diarrhea in dogs. Pit is also a choking hazard.',
    reasonIfForbiddenPt: 'Contém persina, toxina que provoca vômitos e diarreia. O caroço causa risco de engasgo/obstrução.',
    iconName: 'XCircle'
  },
  {
    id: 'food-toxic-3',
    name: 'Chocolate & Cocoa',
    namePt: 'Chocolate e Cacau',
    category: 'toxic',
    isAllowed: false,
    note: 'DANGEROUS TOXIN',
    notePt: 'TOXINA PERIGOSA',
    reasonIfForbidden: 'Contains theobromine and caffeine, which dogs cannot metabolize. Causes tremors, arrhythmia, and seizures.',
    reasonIfForbiddenPt: 'Contém teobromina e cafeína. Causa tremores, arritmia cardíaca, convulsões e risco de vida.',
    iconName: 'Skull'
  },
  {
    id: 'food-toxic-4',
    name: 'Onion & Garlic (Raw or Cooked)',
    namePt: 'Cebola e Alho (Cru ou Cozido)',
    category: 'toxic',
    isAllowed: false,
    note: 'HIGH TOXICITY',
    notePt: 'ALTA TOXICIDADE',
    reasonIfForbidden: 'Contains thiosulfate which damages red blood cells, causing hemolytic anemia and weakness.',
    reasonIfForbiddenPt: 'Contém tiossulfato que destrói as hemácias (glóbulos vermelhos), causando anemia hemolítica.',
    iconName: 'Ban'
  },
  {
    id: 'food-toxic-5',
    name: 'Xylitol (Artificial Sweetener)',
    namePt: 'Xilitol (Adoçante Artificial)',
    category: 'toxic',
    isAllowed: false,
    note: 'FATAL TOXIN',
    notePt: 'TÓXICO FATAL',
    reasonIfForbidden: 'Causes rapid, massive insulin release leading to severe hypoglycemia and acute liver failure within hours.',
    reasonIfForbiddenPt: 'Provoca rápida liberação de insulina, hipoglicemia severa e falência hepática aguda em poucas horas.',
    iconName: 'Skull'
  },
  {
    id: 'food-toxic-6',
    name: 'Macadamia Nuts',
    namePt: 'Nozes Macadâmia',
    category: 'toxic',
    isAllowed: false,
    note: 'TOXIC NUT',
    notePt: 'NOZ TÓXICA',
    reasonIfForbidden: 'Affects the nervous system and muscles. Causes rear-leg weakness, tremors, vomiting, and high fever.',
    reasonIfForbiddenPt: 'Afeta o sistema nervoso. Causa fraqueza nas patas traseiras, tremores, vômitos e hipertermia.',
    iconName: 'AlertOctagon'
  },
  {
    id: 'food-toxic-7',
    name: 'Alcohol & Caffeine',
    namePt: 'Álcool e Cafeína',
    category: 'toxic',
    isAllowed: false,
    note: 'STRICTLY PROHIBITED',
    notePt: 'ESTRITAMENTE PROIBIDO',
    reasonIfForbidden: 'Toxically depresses or overstimulates the central nervous system, leading to organ failure.',
    reasonIfForbiddenPt: 'Tóxico para o sistema nervoso central, podendo levar a parada cardiorrespiratória.',
    iconName: 'XOctagon'
  },
  {
    id: 'food-toxic-8',
    name: 'Cooked Bones',
    namePt: 'Ossos Cozidos',
    category: 'toxic',
    isAllowed: false,
    note: 'PHYSICAL HAZARD',
    notePt: 'PERIGO FÍSICO',
    reasonIfForbidden: 'Cooking makes bones brittle. They splinter easily inside the mouth, esophagus, stomach, or intestine.',
    reasonIfForbiddenPt: 'O cozimento torna os ossos quebradiços e cortantes, podendo perfurar o trato gastrointestinal.',
    iconName: 'AlertTriangle'
  },
  {
    id: 'food-toxic-9',
    name: 'Excess Milk & Dairy',
    namePt: 'Leite e Derivados em Excesso',
    category: 'toxic',
    isAllowed: 'caution',
    note: 'LACTOSE SENSITIVITY',
    notePt: 'SENSIBILIDADE À LACTOSE',
    reasonIfForbidden: 'Most adult dogs lack lactase enzyme. Can cause severe gas, bloating, and diarrhea. Use plain yogurt in small amounts instead.',
    reasonIfForbiddenPt: 'Muitos cães adultos são intolerantes à lactose. Pode causar gases e diarreia. Prefira iogurte natural sem açúcar.',
    iconName: 'AlertCircle'
  },
  {
    id: 'food-toxic-10',
    name: 'Nutmeg',
    namePt: 'Nóz-Moscada',
    category: 'toxic',
    isAllowed: false,
    note: 'TOXIC SPICE',
    notePt: 'ESPECIARIA TÓXICA',
    reasonIfForbidden: 'Contains myristicin which causes disorientation, high heart rate, hallucination, and seizures in dogs.',
    reasonIfForbiddenPt: 'Contém miristicina que causa desorientação, taquicardia, alucinações e convulsões.',
    iconName: 'Ban'
  }
];

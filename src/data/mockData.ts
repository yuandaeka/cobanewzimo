export interface HotNewsItem {
  id: string;
  category: string;
  title: string;
  shortStat: string;
  tag: string;
  bgTheme: 'mint' | 'dark' | 'yellow';
  image: string;
  bullets: string[];
}

export const HOT_NEWS: HotNewsItem[] = [
  {
    id: 'news-1',
    category: 'Economy & Food',
    title: 'Stop Makan Nasi + Cireng!',
    shortStat: '92% cuma tepung & minyak, 0% bangun otot',
    tag: '🔥 Viral Anak Kos',
    bgTheme: 'mint',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
    bullets: [
      '⚠️ Nasi + Cireng/Cilung = Double Carbo pemicu ngantuk berat.',
      '🥚 Ganti 2 Telur + Tempe (Rp 7rb) = 21g Protein setara daging!',
      '🇮🇩 Pangan lokal kita murah & melimpah.'
    ]
  },
  {
    id: 'news-2',
    category: 'Local Superfood',
    title: 'Ikan Kembung Kalahkan Salmon',
    shortStat: 'Omega-3 1.5x lebih tinggi, harga cuma Rp 8rb',
    tag: '💡 Fakta Riset',
    bgTheme: 'dark',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80',
    bullets: [
      '🐟 Ikan Kembung: 2.6g Omega-3 (Rp 8.000).',
      '🍣 Salmon Impor: 1.6g Omega-3 (Rp 65.000).',
      '🌊 Kekayaan laut Indonesia juara nutrisi otak!'
    ]
  },
  {
    id: 'news-3',
    category: 'Teen Lifestyle',
    title: 'Bahaya Es Teh Jumbo Tiap Hari',
    shortStat: 'Blokir 80% zat besi & picu anemia remaja',
    tag: '⚡ Health Alert',
    bgTheme: 'yellow',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80',
    bullets: [
      '🧋 1 Cup Jumbo = 45g gula (lewat batas harian).',
      '🩸 Tanin teh mengikat zat besi makanan.',
      '🍊 Ganti air jeruk atau jeda 1 jam habis makan.'
    ]
  }
];

export interface FoodAlternative {
  id: string;
  inputKeywords: string[];
  label: string;
  emoji: string;
  originalName: string;
  originalPrice: string;
  originalImage: string;
  originalCategory: 'Expensive' | 'JunkHemat';
  originalStats: {
    protein: string;
    highlight: string;
    kcal: string;
  };
  alternativeName: string;
  alternativePrice: string;
  alternativeImage: string;
  savingsBadge: string;
  alternativeStats: {
    protein: string;
    highlight: string;
    kcal: string;
  };
  ingredientsVisual: { name: string; emoji: string; benefit: string }[];
  shortVerdict: string;
}

export const FOOD_ALTERNATIVES: FoodAlternative[] = [
  {
    id: 'alt-salmon',
    inputKeywords: ['salmon', 'ikan', 'sushi'],
    label: 'Salmon ➔ Kembung',
    emoji: '🐟',
    originalName: 'Salmon Fillet Impor',
    originalPrice: 'Rp 65.000',
    originalImage: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80',
    originalCategory: 'Expensive',
    originalStats: {
      protein: '20g Protein',
      highlight: '1.6g Omega-3',
      kcal: '208 kcal'
    },
    alternativeName: 'Ikan Kembung Bakar + Tempe',
    alternativePrice: 'Rp 9.000',
    alternativeImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80',
    savingsBadge: 'Hemat 85%',
    alternativeStats: {
      protein: '22g Protein',
      highlight: '2.6g Omega-3 🔥',
      kcal: '195 kcal'
    },
    ingredientsVisual: [
      { name: 'Ikan Kembung', emoji: '🐟', benefit: '2.6g Omega-3' },
      { name: 'Tempe Lokal', emoji: '🫘', benefit: 'Probiotik & B12' },
      { name: 'Jeruk Nipis', emoji: '🍋', benefit: 'Serap Gizi 3x' },
      { name: 'Sambal Tomat', emoji: '🍅', benefit: 'Antioksidan' }
    ],
    shortVerdict: 'Omega-3 Ikan Kembung lokal 1.5x lebih tinggi dari Salmon impor dengan harga 7x lebih murah!'
  },
  {
    id: 'alt-ayam',
    inputKeywords: ['ayam', 'chicken', 'steak'],
    label: 'Dada Ayam ➔ Telur',
    emoji: '🥚',
    originalName: 'Chicken Steak / Fillet',
    originalPrice: 'Rp 32.000',
    originalImage: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80',
    originalCategory: 'Expensive',
    originalStats: {
      protein: '23g Protein',
      highlight: 'Asam Amino',
      kcal: '240 kcal'
    },
    alternativeName: '2 Telur Rebus/Dadar + Tahu Tempe',
    alternativePrice: 'Rp 7.500',
    alternativeImage: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80',
    savingsBadge: 'Hemat 76%',
    alternativeStats: {
      protein: '21.5g Protein',
      highlight: 'Kolin Otak 🔥',
      kcal: '220 kcal'
    },
    ingredientsVisual: [
      { name: '2 Telur Lokal', emoji: '🥚', benefit: '13g Protein' },
      { name: 'Tempe Kedelai', emoji: '🟫', benefit: '8.5g Protein' },
      { name: 'Sayur Bayam', emoji: '🥬', benefit: 'Zat Besi Tinggi' },
      { name: 'Bawang Merah', emoji: '🧅', benefit: 'Imunitas' }
    ],
    shortVerdict: 'Telur punya skor serap protein 100 (standar emas). Padukan dengan tempe, gizinya setara steak ayam!'
  },
  {
    id: 'alt-cireng',
    inputKeywords: ['cireng', 'cilung', 'mie', 'aci', 'gorengan'],
    label: 'Nasi+Cireng ➔ Warteg',
    emoji: '🍛',
    originalName: 'Nasi Putih + Cireng / Cilung',
    originalPrice: 'Rp 8.000',
    originalImage: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=400&q=80',
    originalCategory: 'JunkHemat',
    originalStats: {
      protein: '2.5g (Krisis!)',
      highlight: '92% Tepung Karbo',
      kcal: '480 kcal'
    },
    alternativeName: 'Nasi + Telur Balado + Sayur Sop',
    alternativePrice: 'Rp 8.500',
    alternativeImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
    savingsBadge: 'Harga Sama, Gizi 7x!',
    alternativeStats: {
      protein: '18.5g Protein',
      highlight: 'Fokus & Kenyang 🔥',
      kcal: '410 kcal'
    },
    ingredientsVisual: [
      { name: 'Telur Balado', emoji: '🍳', benefit: 'Protein Padat' },
      { name: 'Orek Tempe', emoji: '🥜', benefit: 'Serat & Otot' },
      { name: 'Sayur Sop', emoji: '🥕', benefit: 'Vitamin A & C' },
      { name: 'Nasi ½ Porsi', emoji: '🍚', benefit: 'Anti Ngantuk' }
    ],
    shortVerdict: 'Uang Rp 8rb jangan dibeliin tepung ketemu nasi! Ganti telur + tempe + sayur, kenyang tahan 5 jam.'
  },
  {
    id: 'alt-sapi',
    inputKeywords: ['sapi', 'beef', 'wagyu', 'daging'],
    label: 'Sapi ➔ Lele/Hati',
    emoji: '🥩',
    originalName: 'Beef Bowl / Sirloin',
    originalPrice: 'Rp 52.000',
    originalImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80',
    originalCategory: 'Expensive',
    originalStats: {
      protein: '24g Protein',
      highlight: '3.2mg Zat Besi',
      kcal: '280 kcal'
    },
    alternativeName: 'Ikan Lele / Hati Ayam + Lalapan',
    alternativePrice: 'Rp 10.000',
    alternativeImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
    savingsBadge: 'Hemat 80%',
    alternativeStats: {
      protein: '23.5g Protein',
      highlight: '8.5mg Zat Besi 🔥',
      kcal: '210 kcal'
    },
    ingredientsVisual: [
      { name: 'Lele / Hati', emoji: '🐟', benefit: 'Zat Besi 2.5x' },
      { name: 'Daun Kemangi', emoji: '🌿', benefit: 'Segar & Antibakteri' },
      { name: 'Tahu Goreng', emoji: '🟨', benefit: 'Kalsium Lokal' },
      { name: 'Jeruk Limau', emoji: '🍋', benefit: 'Booster Besi' }
    ],
    shortVerdict: 'Zat besi pencegah anemia pada hati ayam & lele lokal bahkan melampaui daging sapi impor!'
  }
];

export interface IndoTrendItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  bgTheme: 'mint' | 'yellow' | 'dark' | 'coral';
  image: string;
  badPills: string[];
  goodPills: string[];
  scienceShort: string;
  healthySwap: {
    name: string;
    emoji: string;
    steps: string[];
  };
}

export const INDO_TRENDS: IndoTrendItem[] = [
  {
    id: 'trend-1',
    title: 'Nasi + Mie / Cireng',
    subtitle: 'Tren Hemat Anak Kos',
    category: 'Food Trend',
    bgTheme: 'mint',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=400&q=80',
    badPills: [
      '📉 Sugar spike & ngantuk berat di kelas',
      '💪 Nol protein, otot menyusut',
      '🧂 Garam tinggi (1.400mg natrium)'
    ],
    goodPills: [
      '💸 Murah di bawah Rp 10rb',
      '⚡ Cepat & gampang dicari 24 jam'
    ],
    scienceShort: 'Riset Gizi: Karbohidrat ganda tanpa protein menurunkan fokus otak 30% dalam 90 menit.',
    healthySwap: {
      name: 'Upgrade Protein Rp 3.000',
      emoji: '🍳',
      steps: [
        'Kurangi ½ porsi nasi',
        'Wajib tambah 1 Telur Ceplok + Sawi',
        'Pakai ½ bumbu mie saja'
      ]
    }
  },
  {
    id: 'trend-2',
    title: 'Es Teh Jumbo Harian',
    subtitle: 'Gerobak Viral Rp 3.000',
    category: 'Drink Trend',
    bgTheme: 'yellow',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80',
    badPills: [
      '🩸 Tanin blokir 80% zat besi (Anemia!)',
      '🍬 45g gula cair per cup jumbo',
      '🫃 Picu lemak perut (visceral fat)'
    ],
    goodPills: [
      '❄️ Segar di cuaca panas Indonesia',
      '💰 Harga super merakyat'
    ],
    scienceShort: 'Klinis: Senyawa polifenol teh mengikat zat besi makanan jika diminum langsung saat makan.',
    healthySwap: {
      name: 'Pesan Tawar & Jeda 1 Jam',
      emoji: '🍋',
      steps: [
        'Minta Less Sugar 25% / Teh Tawar',
        'Minum 1 jam sesudah makan berat',
        'Saat makan, pilih air putih / jeruk'
      ]
    }
  },
  {
    id: 'trend-3',
    title: 'Begadang & Bangun Siang',
    subtitle: 'Nongkrong / Push Rank',
    category: 'Lifestyle',
    bgTheme: 'dark',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=80',
    badPills: [
      '🧠 Hormon lapar (Ghrelin) naik drastis',
      '😴 Tidur siang tidak ganti sel otak malam',
      '☀️ Kurang Vitamin D matahari pagi'
    ],
    goodPills: [
      '🤫 Malam lebih tenang buat fokus',
      '🤝 Waktu sosial bareng teman'
    ],
    scienceShort: 'Neurobiologi: Hormon perbaikan sel & otot (HGH) hanya puncak rilis jam 22.00 - 02.00.',
    healthySwap: {
      name: 'Circadian Reset + Power Nap',
      emoji: '🌙',
      steps: [
        'Majukan tidur 30 menit tiap malam',
        'Power nap siang maksimal 20 menit',
        'Stop kopi setelah jam 16.00 sore'
      ]
    }
  },
  {
    id: 'trend-4',
    title: 'Seblak & Pedas Level 10',
    subtitle: 'Mukbang Saat Perut Kosong',
    category: 'Spicy Trend',
    bgTheme: 'coral',
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=400&q=80',
    badPills: [
      '🔥 Iritasi dinding lambung (GERD & Maag)',
      '💧 Diare & dehidrasi elektrolit',
      '🛢️ Minyak cabai tinggi lemak jenuh'
    ],
    goodPills: [
      '😊 Lepas hormon endorfin (anti stres)',
      '🌶️ Cabai segar kaya Vitamin C'
    ],
    scienceShort: 'Gastroenterologi: Capsaicin pekat + minyak panas pada lambung kosong memicu luka mukosa.',
    healthySwap: {
      name: 'Seblak Kuah Bening + Telur',
      emoji: '🍲',
      steps: [
        'Lapisi perut dengan air hangat & telur dulu',
        'Tambah tahu, sawi & jamur, kurangi kerupuk',
        'Hindari minyak cabai (chili oil) berlebih'
      ]
    }
  }
];

export interface PharmaItem {
  id: string;
  name: string;
  shortTag: string;
  emoji: string;
  bgTheme: string;
  dosagePill: string;
  bestTimePill: string;
  avoidList: string[];
  boostList: string[];
}

export const PHARMA_ITEMS: PharmaItem[] = [
  {
    id: 'ttd',
    name: 'Tablet Tambah Darah',
    shortTag: 'Cegah Anemia & 5L',
    emoji: '🩸',
    bgTheme: 'bg-rose-50 border-rose-200',
    dosagePill: '1x Seminggu / Sesuai Resep',
    bestTimePill: 'Malam Sesudah Makan',
    avoidList: ['🧋 Es Teh', '☕ Kopi', '🥛 Susu'],
    boostList: ['🍊 Jus Jeruk', '💧 Air Putih', '🥭 Pepaya']
  },
  {
    id: 'antasida',
    name: 'Antasida (Obat Maag)',
    shortTag: 'Netralisir Asam Lambung',
    emoji: '🛡️',
    bgTheme: 'bg-teal-50 border-teal-200',
    dosagePill: 'Kunyah Sebelum Telan',
    bestTimePill: '30 Menit Sebelum Makan',
    avoidList: ['☕ Kopi', '🌶️ Pedas', '💊 Jangan bareng TTD'],
    boostList: ['💧 Air Hangat', '🍌 Pisang']
  },
  {
    id: 'paracetamol',
    name: 'Paracetamol 500mg',
    shortTag: 'Demam & Nyeri Haid',
    emoji: '💊',
    bgTheme: 'bg-blue-50 border-blue-200',
    dosagePill: 'Tiap 6-8 Jam Bila Perlu',
    bestTimePill: 'Sesudah Makan',
    avoidList: ['☕ Kopi Pekat', '⚠️ Obat Flu Kemasan Dobel'],
    boostList: ['💧 Air Putih 2 Gelas', '😴 Istirahat']
  },
  {
    id: 'vitd',
    name: 'Vitamin D3 + Vit C',
    shortTag: 'Imun & Tulang Remaja',
    emoji: '☀️',
    bgTheme: 'bg-amber-50 border-amber-200',
    dosagePill: '1x Sehari',
    bestTimePill: 'Pagi Habis Sarapan Telur',
    avoidList: ['🫗 Perut Kosong (Vit C)', '☕ Kopi Bersamaan'],
    boostList: ['🥚 Telur / Alpukat', '💧 Air Putih']
  }
];

import React, { useState } from 'react';
import { 
  Camera, 
  Search, 
  Star, 
  SlidersHorizontal
} from 'lucide-react';
import { FOOD_ALTERNATIVES, FoodAlternative } from '../data/mockData';

export const Feature1_AltFood: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selected, setSelected] = useState<FoodAlternative>(FOOD_ALTERNATIVES[0]);
  const [uploadedPreview, setUploadedPreview] = useState<string | null>(null);
  const [showFilterSheet, setShowFilterSheet] = useState(false);
  const [maxBudget, setMaxBudget] = useState(15000);
  const [sortBy, setSortBy] = useState<'popular' | 'protein' | 'cheapest'>('popular');

  const handleSearch = (query: string) => {
    const q = query.toLowerCase();
    const match = FOOD_ALTERNATIVES.find(
      item =>
        item.inputKeywords.some(k => q.includes(k)) ||
        item.originalName.toLowerCase().includes(q)
    );
    if (match) {
      setSelected(match);
    } else if (query.trim()) {
      setSelected({
        ...FOOD_ALTERNATIVES[1],
        originalName: query,
        shortVerdict: `Pengganti lokal untuk ${query}: Telur + Tempe memberikan protein setara dengan harga jauh lebih hemat!`
      });
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedPreview(URL.createObjectURL(file));
    const name = file.name.toLowerCase();
    if (name.includes('ayam')) handleSearch('ayam');
    else if (name.includes('cireng') || name.includes('mie')) handleSearch('cireng');
    else if (name.includes('sapi')) handleSearch('sapi');
    else handleSearch('salmon');
  };

  return (
    <div className="space-y-6">
      {/* Top Visual Header & Search Bar (Inspired by Reference Image 2) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E7D32] bg-[#D8F3EE] px-3 py-1 rounded-full mb-2">
            🇮🇩 SDM & Pangan Lokal Melimpah
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1E21] tracking-tight leading-tight">
            Let's find <span className="text-[#4E9F3D]">low-budget</span>
            <br />
            superfood alternatives
          </h2>
        </div>

        {/* Search + Filter + Camera Pill Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(searchInput);
          }}
          className="flex items-center gap-2 w-full sm:w-auto"
        >
          <div className="relative flex-1 sm:w-60">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Salmon, Ayam, Cireng..."
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-gray-200 text-xs font-bold shadow-sm focus:outline-none focus:border-[#4E9F3D]"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowFilterSheet(!showFilterSheet)}
            title="Filter Budget & Urutan"
            className={`w-11 h-11 rounded-full flex items-center justify-center transition shadow-sm flex-shrink-0 ${
              showFilterSheet
                ? 'bg-[#FF8A00] text-white'
                : 'bg-white border border-gray-200 text-[#1C1E21] hover:border-[#4E9F3D]'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          <label
            title="Upload / Foto Makanan"
            className="w-11 h-11 rounded-full bg-[#1C1E21] hover:bg-[#2E7D32] text-white flex items-center justify-center cursor-pointer shadow-md transition flex-shrink-0"
          >
            <Camera className="w-4 h-4" />
            <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
          </label>
        </form>
      </div>

      {/* Image 2 Style Visual Filter Card (Sort by + Price Range Slider) */}
      {showFilterSheet && (
        <div className="bg-white rounded-[28px] p-5 border border-gray-100 shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-[#1C1E21]">Sort & Budget Range</span>
            <button
              onClick={() => setShowFilterSheet(false)}
              className="text-xs font-bold text-gray-400 hover:text-[#1C1E21]"
            >
              Tutup ✕
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'popular', label: '🔥 Popular Swap' },
              { id: 'protein', label: '💪 Highest Protein' },
              { id: 'cheapest', label: '💰 Termurah (< Rp 8rb)' },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setSortBy(s.id as any);
                  if (s.id === 'cheapest') setSelected(FOOD_ALTERNATIVES[1]);
                  if (s.id === 'protein') setSelected(FOOD_ALTERNATIVES[3]);
                }}
                className={`px-4 py-2 rounded-full text-xs font-extrabold border transition ${
                  sortBy === s.id
                    ? 'bg-[#FFF3E0] text-[#FF8A00] border-[#FF8A00]'
                    : 'bg-[#F6F8F7] text-gray-600 border-transparent'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-extrabold">
              <span className="text-gray-500">Batas Budget Makan Sekali:</span>
              <span className="text-[#FF8A00]">Maks. Rp {maxBudget.toLocaleString('id-ID')}</span>
            </div>
            <input
              type="range"
              min={5000}
              max={25000}
              step={1000}
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="w-full h-2.5 bg-orange-100 rounded-full accent-[#FF8A00] cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Uploaded Photo Toast */}
      {uploadedPreview && (
        <div className="bg-[#D8F3EE] rounded-2xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={uploadedPreview} alt="Upload" className="w-12 h-12 rounded-xl object-cover border-2 border-white shadow-sm" />
            <div>
              <span className="text-xs font-extrabold text-[#1C1E21] block">📸 Foto Berhasil Dipindai AI!</span>
              <span className="text-[11px] text-gray-600">Menampilkan alternatif lokal termurah dengan gizi setara</span>
            </div>
          </div>
          <button onClick={() => setUploadedPreview(null)} className="text-xs font-bold text-gray-500 px-2">✕</button>
        </div>
      )}

      {/* Visual Category Icon Tiles (Image 2 "Categories" style) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-gray-800">Pilih Kasus "In This Economy"</span>
          <span className="text-[11px] font-semibold text-[#4E9F3D]">Tap untuk bandingkan</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {FOOD_ALTERNATIVES.map((item) => {
            const active = selected.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`p-3 rounded-2xl border transition-all flex items-center gap-3 text-left ${
                  active
                    ? 'bg-[#1C1E21] text-white border-[#1C1E21] shadow-md scale-[1.01]'
                    : 'bg-white text-gray-800 border-gray-100 hover:border-[#4E9F3D] shadow-sm'
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${
                  active ? 'bg-white/15' : 'bg-[#F4F8F6]'
                }`}>
                  {item.emoji}
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-extrabold block truncate">{item.label}</span>
                  <span className={`text-[10px] font-semibold block ${active ? 'text-[#8CE563]' : 'text-[#4E9F3D]'}`}>
                    {item.savingsBadge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN VISUAL BATTLE: Circular Food Plates (Image 2 Card Style + Image 1 Pastel Aesthetic) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Left Card: Expensive / Wrong Diet Food */}
        <div className="md:col-span-5 bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center justify-between relative overflow-hidden">
          <span className="self-start text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-100 text-rose-700">
            {selected.originalCategory === 'JunkHemat' ? '⚠️ Hemat Salah Kaprah' : '💸 Mahal / Impor'}
          </span>

          {/* Circular Plate Photo */}
          <div className="my-4 relative">
            <img
              src={selected.originalImage}
              alt={selected.originalName}
              className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-rose-50"
            />
            <span className="absolute -bottom-2 right-0 bg-rose-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow">
              {selected.originalPrice}
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-gray-800">{selected.originalName}</h3>
            <p className="text-xs text-gray-400">Kurang ramah kantong / gizi timpang</p>
          </div>

          {/* 3 Compact Pill Stats */}
          <div className="w-full grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100 text-[11px]">
            <div className="bg-gray-50 rounded-xl p-2">
              <span className="text-gray-400 block text-[9px]">Protein</span>
              <strong className="text-gray-700">{selected.originalStats.protein}</strong>
            </div>
            <div className="bg-gray-50 rounded-xl p-2">
              <span className="text-gray-400 block text-[9px]">Kandungan</span>
              <strong className="text-rose-600">{selected.originalStats.highlight}</strong>
            </div>
            <div className="bg-gray-50 rounded-xl p-2">
              <span className="text-gray-400 block text-[9px]">Kalori</span>
              <strong className="text-gray-700">{selected.originalStats.kcal}</strong>
            </div>
          </div>
        </div>

        {/* Right Card: INDONESIAN LOCAL WINNER (Image 1 Mint Poster + Image 2 Detail Plate) */}
        <div className="md:col-span-7 bg-[#D8F3EE] rounded-[32px] p-6 shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#1C1E21] text-white">
              🏆 AI Local Superfood Winner
            </span>
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#4E9F3D] text-white shadow-sm">
              {selected.savingsBadge}
            </span>
          </div>

          {/* Top Hero Plate & Price */}
          <div className="flex flex-col sm:flex-row items-center gap-5 my-5">
            <div className="relative flex-shrink-0">
              <img
                src={selected.alternativeImage}
                alt={selected.alternativeName}
                className="w-36 h-36 rounded-full object-cover shadow-xl border-4 border-white"
              />
              <span className="absolute -bottom-2 -right-1 bg-[#FFBA08] text-[#1C1E21] text-sm font-black px-3.5 py-1 rounded-full shadow-md border-2 border-white">
                {selected.alternativePrice}
              </span>
            </div>

            <div className="text-center sm:text-left space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#155332]">
                <span className="flex items-center gap-0.5 bg-white/80 px-2 py-0.5 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-[#FFBA08] text-[#FFBA08]" /> 4.9
                </span>
                <span className="bg-white/80 px-2 py-0.5 rounded-full">
                  🔥 {selected.alternativeStats.kcal}
                </span>
                <span className="bg-white/80 px-2 py-0.5 rounded-full">
                  💪 {selected.alternativeStats.protein}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#1C1E21] leading-tight">
                {selected.alternativeName}
              </h3>

              <p className="text-xs font-semibold text-[#155332] bg-white/60 p-2.5 rounded-2xl">
                ✨ {selected.shortVerdict}
              </p>
            </div>
          </div>

          {/* Visual Ingredients Row (Exact match to Image 2 "Ingredients" tiles) */}
          <div className="space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#155332]">
              Komposisi Pangan Lokal & Khasiat:
            </span>
            <div className="grid grid-cols-4 gap-2.5">
              {selected.ingredientsVisual.map((ing, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-2.5 text-center shadow-sm flex flex-col items-center justify-center"
                >
                  <span className="text-2xl mb-1">{ing.emoji}</span>
                  <span className="text-[11px] font-extrabold text-[#1C1E21] leading-tight">{ing.name}</span>
                  <span className="text-[9px] font-bold text-[#4E9F3D] mt-0.5">{ing.benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

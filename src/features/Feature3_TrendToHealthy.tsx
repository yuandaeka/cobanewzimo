import React, { useState } from 'react';
import { Bookmark, Check, Sparkles, AlertTriangle, ThumbsUp } from 'lucide-react';
import { INDO_TRENDS, IndoTrendItem } from '../data/mockData';

export const Feature3_TrendToHealthy: React.FC = () => {
  const [selected, setSelected] = useState<IndoTrendItem>(INDO_TRENDS[0]);
  const [filterCat, setFilterCat] = useState<string>('All');

  const categories = ['All', 'Food Trend', 'Drink Trend', 'Lifestyle', 'Spicy Trend'];

  const filteredTrends =
    filterCat === 'All'
      ? INDO_TRENDS
      : INDO_TRENDS.filter((t) => t.category === filterCat);

  const getPosterTheme = (theme: IndoTrendItem['bgTheme']) => {
    switch (theme) {
      case 'mint':
        return 'bg-[#D8F3EE] text-[#1C1E21]';
      case 'yellow':
        return 'bg-[#FFF3B0] text-[#1C1E21]';
      case 'dark':
        return 'bg-[#26282B] text-white';
      case 'coral':
        return 'bg-[#FFE4E1] text-[#1C1E21]';
    }
  };

  return (
    <div className="space-y-6">
      {/* Editorial Headline & Pill Filters (Exact Image 1 Middle Screen Style) */}
      <div className="space-y-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1C1E21] bg-[#D8F3EE] px-3 py-1 rounded-full mb-2">
            🔥 Viral Lifestyle & Food Check
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1E21] tracking-tight leading-tight">
            Indonesian Trends
            <br />
            <span className="font-normal">Turned Healthy</span>
          </h2>
        </div>

        {/* Horizontal Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition flex-shrink-0 ${
                filterCat === cat
                  ? 'bg-[#1C1E21] text-white'
                  : 'bg-[#F1F4F3] text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Visual Poster Cards on Left + Visual Breakdown on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Visual Poster Stack (Image 1 "Drink With Lemon Slice" Poster Style) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {filteredTrends.map((trend) => {
            const isActive = selected.id === trend.id;
            return (
              <div
                key={trend.id}
                onClick={() => setSelected(trend)}
                className={`rounded-[30px] p-5 cursor-pointer transition-all relative overflow-hidden flex items-center justify-between min-h-[175px] ${getPosterTheme(
                  trend.bgTheme
                )} ${
                  isActive ? 'ring-4 ring-[#4E9F3D] scale-[1.01] shadow-lg' : 'shadow-sm hover:scale-[1.01]'
                }`}
              >
                {/* Left Content */}
                <div className="z-10 max-w-[58%] space-y-2.5 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider opacity-70 block">
                      {trend.category}
                    </span>
                    <h3 className="text-xl font-black leading-tight mt-0.5">
                      {trend.title}
                    </h3>
                    <p className="text-xs font-semibold opacity-80 mt-1">
                      {trend.subtitle}
                    </p>
                  </div>

                  <div>
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-xs font-extrabold shadow-sm ${
                        trend.bgTheme === 'dark'
                          ? 'bg-white text-[#1C1E21]'
                          : 'bg-[#1C1E21] text-white'
                      }`}
                    >
                      {isActive ? 'Viewing ✓' : 'Cek Fakta'}
                    </span>
                  </div>
                </div>

                {/* Right Circular/Floating Visual Photo + Bookmark */}
                <div className="relative flex flex-col items-end justify-between h-full">
                  <div className="w-9 h-9 rounded-full bg-white text-[#1C1E21] flex items-center justify-center shadow-sm mb-2">
                    <Bookmark className="w-4 h-4" />
                  </div>
                  <img
                    src={trend.image}
                    alt={trend.title}
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-md border-2 border-white/60 transform rotate-3"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Visual Fact vs Healthy Swap Panel (Low Text, Visual Pills!) */}
        <div className="lg:col-span-6 bg-white rounded-[32px] p-6 border border-gray-100 shadow-md space-y-5 sticky top-20">
          {/* Header with circular image */}
          <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
            <img
              src={selected.image}
              alt={selected.title}
              className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-[#4E9F3D]"
            />
            <div>
              <span className="text-[10px] font-extrabold uppercase text-[#4E9F3D] bg-[#D8F3EE] px-2.5 py-0.5 rounded-full">
                {selected.category} • {selected.subtitle}
              </span>
              <h3 className="text-xl font-black text-[#1C1E21] mt-1">
                {selected.title}
              </h3>
            </div>
          </div>

          {/* Visual Bad vs Good Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Kenapa Ga Baik */}
            <div className="bg-rose-50/70 rounded-2xl p-4 space-y-2">
              <span className="text-xs font-extrabold text-rose-700 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> Kenapa Kurang Baik?
              </span>
              <div className="space-y-1.5">
                {selected.badPills.map((pill, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl px-3 py-2 text-xs font-bold text-gray-800 shadow-sm"
                  >
                    {pill}
                  </div>
                ))}
              </div>
            </div>

            {/* Kenapa Populer / Baik */}
            <div className="bg-[#FFF3B0]/50 rounded-2xl p-4 space-y-2">
              <span className="text-xs font-extrabold text-amber-900 flex items-center gap-1.5">
                <ThumbsUp className="w-4 h-4" /> Kenapa Disukai?
              </span>
              <div className="space-y-1.5">
                {selected.goodPills.map((pill, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl px-3 py-2 text-xs font-bold text-gray-800 shadow-sm"
                  >
                    {pill}
                  </div>
                ))}
              </div>
              <div className="bg-white/90 rounded-xl p-2.5 text-[11px] font-bold text-[#155332] border border-amber-200 mt-2">
                🔬 {selected.scienceShort}
              </div>
            </div>
          </div>

          {/* Healthy Transformation Visual Card */}
          <div className="bg-[#D8F3EE] rounded-3xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selected.healthySwap.emoji}</span>
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-[#155332] block">
                    Solusi Trend-to-Healthy
                  </span>
                  <h4 className="text-base font-black text-[#1C1E21]">
                    {selected.healthySwap.name}
                  </h4>
                </div>
              </div>
              <span className="bg-[#1C1E21] text-white text-[10px] font-extrabold px-3 py-1 rounded-full">
                3 Simple Steps
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {selected.healthySwap.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-3 shadow-sm flex flex-col justify-between"
                >
                  <span className="w-6 h-6 rounded-full bg-[#4E9F3D] text-white text-xs font-black flex items-center justify-center mb-1.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-extrabold text-[#1C1E21] leading-snug">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

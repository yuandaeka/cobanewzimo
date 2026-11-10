import React, { useState } from 'react';
import { PHARMA_ITEMS } from '../data/mockData';

export const Feature5_PharmaCheck: React.FC = () => {
  const [med, setMed] = useState<'ttd' | 'antasida' | 'paracetamol' | 'vitd'>('ttd');
  const [drink, setDrink] = useState<'teh' | 'kopi' | 'susu' | 'jeruk' | 'air'>('teh');

  const drinks = [
    { id: 'teh', name: 'Es Teh', emoji: '🧋' },
    { id: 'kopi', name: 'Kopi', emoji: '☕' },
    { id: 'susu', name: 'Susu', emoji: '🥛' },
    { id: 'jeruk', name: 'Jus Jeruk', emoji: '🍊' },
    { id: 'air', name: 'Air Putih', emoji: '💧' },
  ];

  const getVisualVerdict = () => {
    if (med === 'ttd' && (drink === 'teh' || drink === 'kopi')) {
      return {
        theme: 'bg-[#FFE4E1] text-rose-950',
        badge: '🔴 BLOCKER PARAH (-80% Serap)',
        emoji: '🚫',
        title: 'Zat Besi Gagal Diserap!',
        shortText: 'Tanin teh & kopi mengikat zat besi. Kasih jeda minimal 2 jam!'
      };
    }
    if (med === 'ttd' && drink === 'susu') {
      return {
        theme: 'bg-[#FFF3B0] text-amber-950',
        badge: '🟡 TABRAKAN KALSIUM (-50%)',
        emoji: '⚠️',
        title: 'Kalsium Susu Halangi Zat Besi',
        shortText: 'Minum susu pagi hari, dan minum TTD malam sebelum tidur.'
      };
    }
    if (med === 'ttd' && drink === 'jeruk') {
      return {
        theme: 'bg-[#D8F3EE] text-[#155332]',
        badge: '🟢 SUPER BOOSTER (3x Lipat!)',
        emoji: '🚀',
        title: 'Penyerapan Zat Besi Maksimal!',
        shortText: 'Vitamin C jeruk membantu tubuh menyerap zat besi 3x lebih cepat.'
      };
    }
    if (med === 'antasida' && (drink === 'kopi' || drink === 'jeruk')) {
      return {
        theme: 'bg-[#FFE4E1] text-rose-950',
        badge: '🔴 PICU ASAM LAMBUNG',
        emoji: '🔥',
        title: 'Obat Maag Jadi Sia-Sia!',
        shortText: 'Kopi & minuman asam merangsang asam lambung naik lagi.'
      };
    }
    return {
      theme: 'bg-[#D8F3EE] text-[#155332]',
      badge: '🟢 100% AMAN & EFEKTIF',
      emoji: '✅',
      title: 'Kombinasi Aman Dikonsumsi',
      shortText: 'Obat dan vitamin bekerja optimal bersama air putih.'
    };
  };

  const verdict = getVisualVerdict();

  return (
    <div className="space-y-6">
      {/* Editorial Headline */}
      <div>
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1C1E21] bg-[#FFE4E1] px-3 py-1 rounded-full mb-2">
          💊 Visual Food–Drug Matcher
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1E21] tracking-tight leading-tight">
          Health & <span className="text-[#4E9F3D]">Pharma</span>
          <br />
          Quick Check
        </h2>
      </div>

      {/* INTERACTIVE VISUAL MATCHER (Tap Pill + Tap Drink) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Selectors */}
        <div className="lg:col-span-7 bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm space-y-5">
          <div>
            <span className="text-xs font-extrabold text-gray-500 uppercase block mb-2.5">
              1. Tap Obat / Vitamin:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {PHARMA_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setMed(item.id as any)}
                  className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center ${
                    med === item.id
                      ? 'bg-[#1C1E21] text-white border-[#1C1E21] shadow-md scale-105'
                      : 'bg-[#F6F8F7] text-[#1C1E21] border-transparent hover:bg-gray-200'
                  }`}
                >
                  <span className="text-2xl mb-1">{item.emoji}</span>
                  <span className="text-[11px] font-extrabold leading-tight">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-extrabold text-gray-500 uppercase block mb-2.5">
              2. Diminum Bareng Minuman Apa?
            </span>
            <div className="grid grid-cols-5 gap-2">
              {drinks.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDrink(d.id as any)}
                  className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center ${
                    drink === d.id
                      ? 'bg-[#4E9F3D] text-white border-[#4E9F3D] shadow-md scale-105'
                      : 'bg-[#F6F8F7] text-[#1C1E21] border-transparent hover:bg-gray-200'
                  }`}
                >
                  <span className="text-2xl mb-1">{d.emoji}</span>
                  <span className="text-[10px] font-extrabold">{d.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Verdict Poster Card */}
        <div className={`lg:col-span-5 rounded-[32px] p-6 flex flex-col justify-between shadow-sm ${verdict.theme}`}>
          <div className="flex items-center justify-between">
            <span className="bg-black/15 px-3 py-1 rounded-full text-[11px] font-black uppercase">
              {verdict.badge}
            </span>
            <span className="text-4xl">{verdict.emoji}</span>
          </div>

          <div className="my-4">
            <h3 className="text-2xl font-black leading-tight">{verdict.title}</h3>
            <p className="text-xs font-bold opacity-85 mt-2 leading-relaxed">
              {verdict.shortText}
            </p>
          </div>

          <div className="bg-white/70 rounded-2xl p-3 text-xs font-extrabold text-[#1C1E21] flex items-center justify-between">
            <span>Kombinasi Saat Ini:</span>
            <span>
              {PHARMA_ITEMS.find((p) => p.id === med)?.emoji} + {drinks.find((d) => d.id === drink)?.emoji}
            </span>
          </div>
        </div>
      </div>

      {/* 4 VISUAL SUPPLEMENT GUIDE CARDS (Compact Visual Pills) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PHARMA_ITEMS.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[28px] p-5 border border-gray-100 shadow-sm flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-12 h-12 rounded-2xl bg-[#F4F8F6] flex items-center justify-center text-2xl">
                  {item.emoji}
                </span>
                <span className="text-[10px] font-extrabold bg-[#1C1E21] text-white px-2.5 py-1 rounded-full">
                  {item.dosagePill}
                </span>
              </div>

              <h4 className="text-base font-black text-[#1C1E21]">{item.name}</h4>
              <span className="text-xs font-bold text-[#4E9F3D] block mt-0.5">
                ⏰ {item.bestTimePill}
              </span>
            </div>

            <div className="space-y-2 pt-2 border-t border-gray-100">
              <div>
                <span className="text-[10px] font-extrabold text-rose-600 uppercase block mb-1">
                  ❌ Hindari:
                </span>
                <div className="flex flex-wrap gap-1">
                  {item.avoidList.map((a, i) => (
                    <span key={i} className="text-[10px] font-bold bg-rose-50 text-rose-800 px-2 py-0.5 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-extrabold text-[#2E7D32] uppercase block mb-1">
                  ✅ Booster:
                </span>
                <div className="flex flex-wrap gap-1">
                  {item.boostList.map((b, i) => (
                    <span key={i} className="text-[10px] font-bold bg-[#D8F3EE] text-[#155332] px-2 py-0.5 rounded-full">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

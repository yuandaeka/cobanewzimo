import React, { useState } from 'react';
import { Sparkles, Check, Plus, GitBranch, Zap } from 'lucide-react';

interface VisualNode {
  id: string;
  time: string;
  emoji: string;
  title: string;
  shortTag: string;
  theme: 'mint' | 'yellow' | 'dark' | 'white';
  done: boolean;
}

export const Feature2_AICoach: React.FC = () => {
  const [goalText, setGoalText] = useState('Diet Hemat & Produktif');
  const [dayMode, setDayMode] = useState<'libur' | 'kuliah' | 'otot'>('libur');
  const [customTitle, setCustomTitle] = useState('');

  const presets: Record<'libur' | 'kuliah' | 'otot', VisualNode[]> = {
    libur: [
      { id: '1', time: '07:00', emoji: '💧', title: 'Minum 2 Gelas Air', shortTag: 'Boost Metabolisme', theme: 'mint', done: true },
      { id: '2', time: '07:30', emoji: '👟', title: 'Jalan Pagi 20 Menit', shortTag: 'Bakar 150 kcal + Vit D', theme: 'yellow', done: true },
      { id: '3', time: '08:30', emoji: '🥚', title: 'Sarapan 2 Telur Rebus', shortTag: '13g Protein Murah', theme: 'white', done: false },
      { id: '4', time: '12:30', emoji: '🐟', title: 'Makan Siang Ikan & Sayur', shortTag: 'Nasi ½ Porsi Saja', theme: 'dark', done: false },
      { id: '5', time: '16:30', emoji: '💪', title: 'Home Workout 15m', shortTag: 'Push-up & Squat', theme: 'mint', done: false },
      { id: '6', time: '22:00', emoji: '🌙', title: 'Tidur Tanpa Scroll HP', shortTag: 'Reset Hormon Lapar', theme: 'yellow', done: false },
    ],
    kuliah: [
      { id: 'k1', time: '06:30', emoji: '🍳', title: 'Sarapan Telur Dadar', shortTag: 'Anti Ngantuk di Kelas', theme: 'yellow', done: true },
      { id: 'k2', time: '10:00', emoji: '🍼', title: 'Refill Tumbler Kampus', shortTag: 'Hemat & Bebas Gula', theme: 'mint', done: false },
      { id: 'k3', time: '12:30', emoji: '🍛', title: 'Warteg: Tempe + Telur', shortTag: 'Skip Gorengan Tepung', theme: 'dark', done: false },
      { id: 'k4', time: '15:30', emoji: '🚶', title: 'Pilih Naik Tangga Gedung', shortTag: '+3.000 Langkah Gratis', theme: 'white', done: false },
      { id: 'k5', time: '22:00', emoji: '😴', title: 'Deep Sleep 7.5 Jam', shortTag: 'Kuatkan Memori Otak', theme: 'mint', done: false },
    ],
    otot: [
      { id: 'o1', time: '07:00', emoji: '🍌', title: 'Pisang + 2 Telur', shortTag: 'Pre-Workout Lokal', theme: 'yellow', done: true },
      { id: 'o2', time: '08:30', emoji: '🏋️', title: 'Calisthenics 30 Menit', shortTag: 'Hypertrophy Otot', theme: 'dark', done: false },
      { id: 'o3', time: '12:30', emoji: '🍗', title: 'Ikan Kembung + Tempe', shortTag: '25g Protein Lengkap', theme: 'mint', done: false },
      { id: 'o4', time: '17:00', emoji: '🫘', title: 'Camilan Kacang/Edamame', shortTag: 'Protein Nabati', theme: 'white', done: false },
      { id: 'o5', time: '21:30', emoji: '🛌', title: 'Tidur Fase HGH', shortTag: 'Pemulihan Serat Otot', theme: 'yellow', done: false },
    ],
  };

  const [nodes, setNodes] = useState<VisualNode[]>(presets.libur);

  const switchMode = (mode: 'libur' | 'kuliah' | 'otot', label: string) => {
    setDayMode(mode);
    setGoalText(label);
    setNodes(presets[mode]);
  };

  const toggleNode = (id: string) => {
    setNodes(prev => prev.map(n => (n.id === id ? { ...n, done: !n.done } : n)));
  };

  const handleAddNode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle.trim()) return;
    setNodes(prev => [
      ...prev,
      {
        id: 'c-' + Date.now(),
        time: '19:00',
        emoji: '✨',
        title: customTitle,
        shortTag: 'Custom Target',
        theme: 'mint',
        done: false
      }
    ]);
    setCustomTitle('');
  };

  const doneCount = nodes.filter(n => n.done).length;

  const getThemeClasses = (theme: VisualNode['theme'], done: boolean) => {
    if (done) return 'bg-[#1C1E21] text-white border-[#1C1E21]';
    switch (theme) {
      case 'mint':
        return 'bg-[#D8F3EE] text-[#1C1E21] border-transparent';
      case 'yellow':
        return 'bg-[#FFF3B0] text-[#1C1E21] border-transparent';
      case 'dark':
        return 'bg-[#26282B] text-white border-transparent';
      default:
        return 'bg-white text-[#1C1E21] border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1C1E21] bg-[#FFF3B0] px-3 py-1 rounded-full mb-2">
            🤖 AI Habit Web Generator
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1E21] tracking-tight leading-tight">
            Your Daily <span className="text-[#4E9F3D]">AI Routine</span>
            <br />
            Task Network
          </h2>
        </div>

        {/* Mode Pill Switcher (Image 1 Pill Bar style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {[
            { id: 'libur', label: '🏖️ Mode Libur & Diet' },
            { id: 'kuliah', label: '🎒 Kuliah Padat' },
            { id: 'otot', label: '💪 Naikin Otot Murah' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => switchMode(m.id as any, m.label)}
              className={`px-4 py-2.5 rounded-full text-xs font-extrabold transition flex-shrink-0 ${
                dayMode === m.id
                  ? 'bg-[#1C1E21] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#1C1E21]'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Goal Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (goalText.toLowerCase().includes('otot')) switchMode('otot', goalText);
          else if (goalText.toLowerCase().includes('kuliah')) switchMode('kuliah', goalText);
          else switchMode('libur', goalText);
        }}
        className="bg-white rounded-full p-2 border border-gray-200 shadow-sm flex items-center gap-2"
      >
        <span className="pl-3 text-lg">🎯</span>
        <input
          type="text"
          value={goalText}
          onChange={(e) => setGoalText(e.target.value)}
          placeholder="Ketik targetmu (misal: Mau diet pas hari libur)..."
          className="flex-1 text-xs sm:text-sm font-bold text-[#1C1E21] bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="px-5 py-2.5 rounded-full bg-[#4E9F3D] hover:bg-[#2E7D32] text-white text-xs font-extrabold flex items-center gap-1.5 transition"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Generate AI</span>
        </button>
      </form>

      {/* VISUAL JARING-JARING TASK NODES (Connected Visual Grid) */}
      <div className="relative">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-extrabold text-gray-500 flex items-center gap-1.5">
            <GitBranch className="w-4 h-4 text-[#4E9F3D]" />
            Jaring Task Terhubung • Tap kartu untuk selesaikan
          </span>
          <span className="text-xs font-black bg-[#1C1E21] text-white px-3 py-1 rounded-full">
            {doneCount} / {nodes.length} Done ✓
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nodes.map((node, idx) => (
            <div
              key={node.id}
              onClick={() => toggleNode(node.id)}
              className={`rounded-[28px] p-5 border cursor-pointer transition-all hover:scale-[1.01] shadow-sm flex flex-col justify-between min-h-[170px] relative overflow-hidden ${getThemeClasses(
                node.theme,
                node.done
              )}`}
            >
              {/* Top Row: Time Pill + Node Number */}
              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-extrabold px-3 py-1 rounded-full ${
                    node.done || node.theme === 'dark'
                      ? 'bg-white/15 text-white'
                      : 'bg-black/10 text-[#1C1E21]'
                  }`}
                >
                  ⏰ {node.time}
                </span>

                <span className="text-3xl">{node.emoji}</span>
              </div>

              {/* Center Bold Title (Minimal text!) */}
              <div className="my-3">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-70 block">
                  Step 0{idx + 1} • {node.shortTag}
                </span>
                <h3 className={`text-lg font-black leading-snug mt-0.5 ${node.done ? 'line-through opacity-75' : ''}`}>
                  {node.title}
                </h3>
              </div>

              {/* Bottom Pill Slider Toggle (Exact Image 1 `[ ✓ >>> ✓ ]` style) */}
              <div className="flex items-center justify-between bg-black/10 rounded-full p-1.5 pl-4">
                <span className="text-[11px] font-extrabold">
                  {node.done ? 'Completed' : 'Tap to Finish'}
                </span>
                <span className="text-[10px] tracking-widest opacity-60 font-bold">
                  {'> > >'}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition ${
                    node.done
                      ? 'bg-[#4E9F3D] text-white'
                      : 'bg-white text-[#1C1E21]'
                  }`}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Add Node Input */}
      <form onSubmit={handleAddNode} className="flex gap-2">
        <input
          type="text"
          value={customTitle}
          onChange={(e) => setCustomTitle(e.target.value)}
          placeholder="+ Tambah node kegiatan sendiri..."
          className="flex-1 px-5 py-3 rounded-full bg-white border border-gray-200 text-xs font-bold focus:outline-none focus:border-[#1C1E21]"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-full bg-[#1C1E21] text-white text-xs font-extrabold flex items-center gap-1"
        >
          <Plus className="w-4 h-4" /> Tambah
        </button>
      </form>
    </div>
  );
};

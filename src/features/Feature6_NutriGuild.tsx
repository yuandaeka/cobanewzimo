import React, { useState } from 'react';
import { Check, Trophy } from 'lucide-react';

interface VisualQuest {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  xp: number;
  theme: 'mint' | 'yellow' | 'dark';
  done: boolean;
}

export const Feature6_NutriGuild: React.FC = () => {
  const [xp, setXp] = useState(1450);
  const [quests, setQuests] = useState<VisualQuest[]>([
    {
      id: 'q1',
      emoji: '🥚',
      title: 'Anti Double-Carbo',
      subtitle: 'Makan Telur/Tempe, Bukan Cireng',
      xp: 150,
      theme: 'mint',
      done: true
    },
    {
      id: 'q2',
      emoji: '💧',
      title: 'Zero Boba / Es Manis',
      subtitle: '8 Gelas Air Putih Seharian',
      xp: 120,
      theme: 'yellow',
      done: false
    },
    {
      id: 'q3',
      emoji: '👟',
      title: '6.000 Steps Squad',
      subtitle: 'Jalan Kaki & Naik Tangga Kampus',
      xp: 180,
      theme: 'dark',
      done: false
    },
  ]);

  const toggleQuest = (id: string) => {
    setQuests(prev =>
      prev.map(q => {
        if (q.id === id) {
          const next = !q.done;
          setXp(curr => (next ? curr + q.xp : curr - q.xp));
          return { ...q, done: next };
        }
        return q;
      })
    );
  };

  const getCardStyle = (theme: VisualQuest['theme'], done: boolean) => {
    if (done) return 'bg-[#4E9F3D] text-white';
    switch (theme) {
      case 'mint':
        return 'bg-[#D8F3EE] text-[#1C1E21]';
      case 'yellow':
        return 'bg-[#FFF3B0] text-[#1C1E21]';
      case 'dark':
        return 'bg-[#26282B] text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1C1E21] bg-[#FFF3B0] px-3 py-1 rounded-full mb-2">
            🏆 Gamified Habit & Squad
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1E21] tracking-tight leading-tight">
            Lifestyle Quest &
            <br />
            <span className="text-[#4E9F3D]">Nutri-Guild</span>
          </h2>
        </div>

        {/* XP Pill Badge */}
        <div className="bg-[#1C1E21] text-white rounded-full px-5 py-3 flex items-center gap-3 shadow-md self-start">
          <Trophy className="w-5 h-5 text-[#FFBA08]" />
          <div>
            <span className="text-[10px] text-gray-400 uppercase font-bold block leading-none">Your Score</span>
            <span className="text-lg font-black text-[#8CE563]">{xp.toLocaleString('id-ID')} XP</span>
          </div>
        </div>
      </div>

      {/* 3 FANNED / POSTER QUEST CARDS (Inspired by Image 1 Right Screen) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-2">
        {quests.map((q) => (
          <div
            key={q.id}
            onClick={() => toggleQuest(q.id)}
            className={`rounded-[32px] p-6 cursor-pointer transition-all hover:-translate-y-1 shadow-md flex flex-col justify-between min-h-[240px] ${getCardStyle(
              q.theme,
              q.done
            )}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-4xl">{q.emoji}</span>
              <span className="bg-black/15 px-3 py-1 rounded-full text-xs font-black">
                +{q.xp} XP
              </span>
            </div>

            <div className="my-4">
              <h3 className="text-2xl font-black leading-tight">{q.title}</h3>
              <p className="text-xs font-bold opacity-80 mt-1">{q.subtitle}</p>
            </div>

            {/* Bottom Pill Slider `[ ✓ >>> ✓ ]` */}
            <div className="flex items-center justify-between bg-black/15 rounded-full p-1.5 pl-4">
              <span className="text-xs font-extrabold">
                {q.done ? 'Claimed!' : 'Claim Reward'}
              </span>
              <span className="text-xs opacity-60 tracking-widest font-bold">{'> > >'}</span>
              <div className="w-8 h-8 rounded-full bg-white text-[#1C1E21] flex items-center justify-center">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Squad Leaderboard Strip */}
      <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-[#1C1E21]">Top Nutri-Guild Squads</h3>
          <span className="text-xs font-bold text-[#4E9F3D] bg-[#D8F3EE] px-3 py-1 rounded-full">
            Live Ranking
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { rank: '🥇 #1', name: 'Squad Protein Lokal', xp: '18.4K XP', bg: 'bg-[#FFF3B0]' },
            { rank: '🥈 #2', name: 'Anak Kos Anti-Cireng', xp: '16.9K XP', bg: 'bg-[#D8F3EE]' },
            { rank: '🥉 #3', name: 'Water Warriors 2L', xp: '15.1K XP', bg: 'bg-[#F4F8F6]' },
          ].map((g, i) => (
            <div key={i} className={`${g.bg} rounded-2xl p-4 flex items-center justify-between`}>
              <div>
                <span className="text-xs font-black text-[#1C1E21] block">{g.rank}</span>
                <span className="text-sm font-extrabold text-[#1C1E21]">{g.name}</span>
              </div>
              <span className="bg-[#1C1E21] text-white text-xs font-extrabold px-3 py-1 rounded-full">
                {g.xp}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

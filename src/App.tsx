import React, { useState } from 'react';
import { 
  Bell, 
  Bookmark, 
  Check, 
  ChevronLeft, 
  Home, 
  LayoutGrid, 
  User, 
  LogOut, 
  Watch,
  Plus,
  Gamepad2,
  ExternalLink
} from 'lucide-react';
import { ZIMO_GAME_URL } from './config';
import { HOT_NEWS, HotNewsItem } from './data/mockData';
import { Feature1_AltFood } from './features/Feature1_AltFood';
import { Feature2_AICoach } from './features/Feature2_AICoach';
import { Feature3_TrendToHealthy } from './features/Feature3_TrendToHealthy';
import { Feature4_WellnessTracker } from './features/Feature4_WellnessTracker';
import { Feature5_PharmaCheck } from './features/Feature5_PharmaCheck';
import { Feature6_NutriGuild } from './features/Feature6_NutriGuild';

type ActiveFeature = 
  | null 
  | 'alt_food' 
  | 'ai_coach' 
  | 'trend_healthy' 
  | 'wellness_tracker' 
  | 'pharma_check' 
  | 'nutri_guild';

export function App() {
  const [authStep, setAuthStep] = useState<'splash' | 'login' | 'authenticated'>('splash');
  const [username, setUsername] = useState('Rizky');
  const [activeFeature, setActiveFeature] = useState<ActiveFeature>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'news' | 'features'>('all');
  const [selectedNews, setSelectedNews] = useState<HotNewsItem | null>(null);

  const visualFeatures = [
    {
      id: 'alt_food' as const,
      title: 'Low-Budget\nFood Swap',
      stat: 'Salmon ➔ Ikan Kembung Rp 8rb',
      cta: 'Scan / Cari',
      bg: 'bg-[#D8F3EE] text-[#1C1E21]',
      btnBg: 'bg-[#1C1E21] text-white',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'ai_coach' as const,
      title: 'ZIMO AI\nRoutine Web',
      stat: 'Jaring Task List Harian Otomatis',
      cta: 'Buat Plan',
      bg: 'bg-[#26282B] text-white',
      btnBg: 'bg-white text-[#1C1E21]',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'trend_healthy' as const,
      title: 'Trend-to-\nHealthy ID',
      stat: 'Cek Tren Es Teh Jumbo & Cireng',
      cta: 'Cek Tren',
      bg: 'bg-[#FFF3B0] text-[#1C1E21]',
      btnBg: 'bg-[#1C1E21] text-white',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'wellness_tracker' as const,
      title: 'Smartwatch &\nDaily Tracker',
      stat: 'Sensor Jam + Input Manual',
      cta: 'Track Now',
      bg: 'bg-[#D8F3EE] text-[#1C1E21]',
      btnBg: 'bg-[#1C1E21] text-white',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'pharma_check' as const,
      title: 'Health &\nPharma Check',
      stat: 'Cek Obat, TTD & Pantangan Teh',
      cta: 'Cek Obat',
      bg: 'bg-[#FFE4E1] text-[#1C1E21]',
      btnBg: 'bg-[#1C1E21] text-white',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'nutri_guild' as const,
      title: 'Quest &\nNutri-Guild',
      stat: 'Daily Challenge + Squad XP',
      cta: 'Mainkan',
      bg: 'bg-[#26282B] text-white',
      btnBg: 'bg-[#8CE563] text-[#1C1E21]',
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80',
    },
  ];

  // 1. FULL-SCREEN SPLASH & LOGIN (100% Edge-to-Edge Full Screen on Mobile!)
  if (authStep !== 'authenticated') {
    return (
      <div className="min-h-[100dvh] w-full bg-white flex flex-col md:flex-row overflow-hidden">
        {/* STEP A: FULL-SCREEN HERO SPLASH (Full 100dvh on Mobile when authStep === 'splash', Left 50% on Desktop) */}
        <div
          className={`${
            authStep === 'splash' ? 'flex' : 'hidden md:flex'
          } relative w-full md:w-1/2 min-h-[100dvh] bg-[#BCECE0] p-7 sm:p-12 flex-col justify-between overflow-hidden`}
        >
          <img
            src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1000&q=85"
            alt="Fresh Healthy Drink"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

          {/* Top Pill Badge */}
          <div className="relative z-10 pt-2">
            <span className="inline-block bg-white/90 backdrop-blur-md text-[#1C1E21] text-xs font-black px-4 py-2 rounded-full shadow-sm">
              🌿 ZIMO 2.0 • Gizi Mobile
            </span>
          </div>

          {/* Bottom Headline + Get Started Slider Button */}
          <div className="relative z-10 space-y-5 pb-4 max-w-md">
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Your
              <br />
              Healthy
              <br />
              Start
            </h1>
            <p className="text-sm text-white/85 font-medium leading-relaxed">
              Solusi gizi cerdas, hemat, dan seru untuk remaja & mahasiswa Indonesia.
            </p>

            {/* Glassmorphic Pill Button `[ Get Started >>> ✓ ]` */}
            <button
              onClick={() => setAuthStep('login')}
              className="w-full bg-white/20 hover:bg-white/30 active:scale-[0.99] backdrop-blur-md border border-white/30 rounded-full p-2 pl-7 flex items-center justify-between text-white transition group shadow-lg"
            >
              <span className="text-sm font-extrabold">Get Started</span>
              <span className="text-xs tracking-widest opacity-80 font-bold">{'> > >'}</span>
              <div className="w-12 h-12 rounded-full bg-white text-[#1C1E21] flex items-center justify-center shadow-md group-hover:scale-105 transition">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
            </button>
          </div>
        </div>

        {/* STEP B: FULL-SCREEN LOGIN VIEW (Full 100dvh on Mobile when authStep === 'login', Right 50% on Desktop) */}
        <div
          className={`${
            authStep === 'login' ? 'flex' : 'hidden md:flex'
          } w-full md:w-1/2 min-h-[100dvh] bg-white p-7 sm:p-12 flex-col justify-between`}
        >
          {/* Mobile Top Back Button to Splash */}
          <div className="flex items-center justify-between md:justify-end">
            <button
              onClick={() => setAuthStep('splash')}
              className="md:hidden w-11 h-11 rounded-full bg-[#F6F8F7] flex items-center justify-center text-[#1C1E21]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-extrabold text-[#4E9F3D] bg-[#D8F3EE] px-3.5 py-1.5 rounded-full">
              ZIMO 2.0 Ecosystem
            </span>
          </div>

          {/* Center Form */}
          <div className="max-w-sm mx-auto w-full space-y-7 text-center my-auto py-6">
            <div className="w-16 h-16 rounded-3xl bg-[#D8F3EE] text-[#155332] flex items-center justify-center mx-auto text-3xl shadow-sm">
              🥗
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1C1E21]">
                Welcome Back to <span className="text-[#4E9F3D]">ZIMO</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-1.5">
                Masuk untuk mulai hidup sehat tanpa boros
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAuthStep('authenticated');
              }}
              className="space-y-4 text-left"
            >
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nama / Username kamu"
                  className="w-full px-6 py-4 rounded-full bg-[#F6F8F7] border border-gray-200 text-sm font-bold text-[#1C1E21] focus:outline-none focus:border-[#4E9F3D]"
                />
              </div>

              <div>
                <input
                  type="password"
                  defaultValue="123456"
                  placeholder="Password"
                  className="w-full px-6 py-4 rounded-full bg-[#F6F8F7] border border-gray-200 text-sm font-bold text-[#1C1E21] focus:outline-none focus:border-[#4E9F3D]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#1C1E21] hover:bg-[#2E7D32] text-white font-extrabold text-sm shadow-lg transition active:scale-[0.99]"
              >
                Login Sekarang
              </button>
            </form>

            <div className="pt-2">
              <span className="text-[11px] text-gray-400 font-semibold block mb-3">
                Atau masuk cepat dengan
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setAuthStep('authenticated')}
                  className="py-3 px-4 rounded-full border border-gray-200 text-xs font-extrabold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <span>🎓</span> Mahasiswa
                </button>
                <button
                  onClick={() => setAuthStep('authenticated')}
                  className="py-3 px-4 rounded-full border border-gray-200 text-xs font-extrabold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <span>⚡</span> Guest Demo
                </button>
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-gray-400 font-semibold">
            Don't have an account?{' '}
            <button onClick={() => setAuthStep('authenticated')} className="text-[#4E9F3D] font-extrabold">
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
  }

  const openFeature = (id: ActiveFeature) => {
    setActiveFeature(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 2. MAIN VISUAL APP (100% Full-Screen Edge-to-Edge on Mobile & Desktop)
  return (
    <div className="min-h-[100dvh] w-full bg-white text-[#1C1E21] flex flex-col">
      {/* Minimalist Top Bar (Avatar + Hi Name + Bell) */}
      <header className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          {activeFeature ? (
            <button
              onClick={() => setActiveFeature(null)}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-11 h-11 rounded-full bg-[#F1F4F3] group-hover:bg-[#1C1E21] group-hover:text-white flex items-center justify-center transition">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <span className="text-sm font-extrabold">Back to Home</span>
            </button>
          ) : (
            <div className="flex items-center gap-3.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt={username}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#D8F3EE] shadow-sm"
              />
              <div>
                <h1 className="text-sm font-extrabold text-[#1C1E21] leading-tight">
                  Hi, {username}
                </h1>
                <p className="text-xs text-gray-400 font-semibold">Welcome Back</p>
              </div>
            </div>
          )}

          {/* Right Quick Actions */}
          <div className="flex items-center gap-2.5">
            {activeFeature && (
              <div className="hidden md:flex items-center gap-1.5 mr-2">
                {visualFeatures.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => openFeature(f.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-extrabold transition ${
                      activeFeature === f.id
                        ? 'bg-[#1C1E21] text-white'
                        : 'bg-[#F1F4F3] text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {f.title.replace('\n', ' ')}
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={() => openFeature('wellness_tracker')}
              className="w-11 h-11 rounded-full bg-[#F1F4F3] hover:bg-[#D8F3EE] flex items-center justify-center transition relative"
              title="Notifikasi & Tracker"
            >
              <Bell className="w-5 h-5 text-[#1C1E21]" />
              <span className="w-2 h-2 rounded-full bg-[#4E9F3D] absolute top-2.5 right-3" />
            </button>

            <button
              onClick={() => {
                setAuthStep('splash');
                setActiveFeature(null);
              }}
              className="w-11 h-11 rounded-full bg-[#F1F4F3] hover:bg-rose-100 text-gray-600 hover:text-rose-600 flex items-center justify-center transition"
              title="Keluar"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-2 pb-28">
        {activeFeature ? (
          <div>
            {activeFeature === 'alt_food' && <Feature1_AltFood />}
            {activeFeature === 'ai_coach' && <Feature2_AICoach />}
            {activeFeature === 'trend_healthy' && <Feature3_TrendToHealthy />}
            {activeFeature === 'wellness_tracker' && <Feature4_WellnessTracker />}
            {activeFeature === 'pharma_check' && <Feature5_PharmaCheck />}
            {activeFeature === 'nutri_guild' && <Feature6_NutriGuild />}
          </div>
        ) : (
          <div className="space-y-8">
            {/* BIG EDITORIAL TITLE & PILL FILTER BAR */}
            <div className="space-y-5">
              <h2 className="text-3xl sm:text-4xl font-normal text-[#1C1E21] tracking-tight leading-[1.15]">
                Your Healthy
                <br />
                <strong className="font-black">Start</strong>
              </h2>

              {/* Horizontal Pill Bar */}
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`h-11 px-4 rounded-full flex items-center justify-center gap-2 text-xs font-extrabold transition flex-shrink-0 ${
                    activeFilter === 'all'
                      ? 'bg-[#1C1E21] text-white shadow-sm'
                      : 'bg-[#F1F4F3] text-gray-600'
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                  <span>All Menu</span>
                </button>

                <button
                  onClick={() => setActiveFilter('news')}
                  className={`h-11 px-5 rounded-full text-xs font-extrabold transition flex-shrink-0 ${
                    activeFilter === 'news'
                      ? 'bg-[#1C1E21] text-white shadow-sm'
                      : 'bg-[#F1F4F3] text-gray-600'
                  }`}
                >
                  🔥 Hot News
                </button>

                {visualFeatures.map((feat) => (
                  <button
                    key={feat.id}
                    onClick={() => openFeature(feat.id)}
                    className="h-11 px-5 rounded-full bg-[#F1F4F3] hover:bg-[#D8F3EE] text-[#1C1E21] text-xs font-extrabold transition flex-shrink-0"
                  >
                    {feat.title.replace('\n', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* SECTION 1: HOT NEWS — POSTER CARDS */}
            {(activeFilter === 'all' || activeFilter === 'news') && (
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                    Hot News Indonesia
                  </span>
                  <span className="text-xs font-bold text-[#4E9F3D]">Tap kartu untuk detail</span>
                </div>

                {/* Selected News Quick Visual Sheet */}
                {selectedNews && (
                  <div className="bg-[#1C1E21] text-white rounded-[32px] p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="bg-[#8CE563] text-[#1C1E21] text-xs font-black px-3 py-1 rounded-full">
                          {selectedNews.tag}
                        </span>
                        <button
                          onClick={() => setSelectedNews(null)}
                          className="text-xs font-bold text-gray-400 hover:text-white"
                        >
                          Close ✕
                        </button>
                      </div>
                      <h3 className="text-2xl font-black">{selectedNews.title}</h3>
                      <div className="space-y-1.5">
                        {selectedNews.bullets.map((b, i) => (
                          <div key={i} className="bg-white/10 rounded-xl px-3.5 py-2 text-xs font-bold">
                            {b}
                          </div>
                        ))}
                      </div>
                    </div>
                    <img
                      src={selectedNews.image}
                      alt={selectedNews.title}
                      className="w-36 h-36 rounded-full object-cover border-4 border-[#8CE563] flex-shrink-0"
                    />
                  </div>
                )}

                {/* 3 Visual Poster Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {HOT_NEWS.map((news) => {
                    const cardTheme =
                      news.bgTheme === 'mint'
                        ? 'bg-[#D8F3EE] text-[#1C1E21]'
                        : news.bgTheme === 'dark'
                        ? 'bg-[#26282B] text-white'
                        : 'bg-[#FFF3B0] text-[#1C1E21]';

                    const btnTheme =
                      news.bgTheme === 'dark'
                        ? 'bg-white text-[#1C1E21]'
                        : 'bg-[#1C1E21] text-white';

                    return (
                      <div
                        key={news.id}
                        onClick={() => setSelectedNews(news)}
                        className={`${cardTheme} rounded-[32px] p-6 cursor-pointer transition-all hover:-translate-y-1 shadow-sm flex items-center justify-between min-h-[210px] relative overflow-hidden`}
                      >
                        <div className="z-10 max-w-[58%] flex flex-col justify-between h-full space-y-3">
                          <div>
                            <span className="text-[10px] font-extrabold uppercase opacity-70 block">
                              {news.tag}
                            </span>
                            <h3 className="text-xl font-black leading-tight mt-1">
                              {news.title}
                            </h3>
                            <p className="text-xs font-bold opacity-75 mt-1.5 leading-snug">
                              {news.shortStat}
                            </p>
                          </div>

                          <div>
                            <span className={`inline-block px-4 py-2 rounded-full text-xs font-extrabold ${btnTheme}`}>
                              Details
                            </span>
                          </div>
                        </div>

                        {/* Right Image & Bookmark Icon */}
                        <div className="flex flex-col items-end justify-between h-full">
                          <div className="w-9 h-9 rounded-full bg-white text-[#1C1E21] flex items-center justify-center shadow-sm mb-2">
                            <Bookmark className="w-4 h-4" />
                          </div>
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-white/50"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* SECTION 2: 6 CORE FEATURES — VISUAL POSTER BENTO GRID */}
            {(activeFilter === 'all' || activeFilter === 'features') && (
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                    6 Core Ecosystem Features
                  </span>
                  <span className="text-xs font-bold text-[#1C1E21]">Pilih Fitur</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {visualFeatures.map((feat) => (
                    <div
                      key={feat.id}
                      onClick={() => openFeature(feat.id)}
                      className={`${feat.bg} rounded-[34px] p-6 sm:p-7 cursor-pointer transition-all hover:scale-[1.01] shadow-sm flex items-center justify-between min-h-[210px] relative overflow-hidden group`}
                    >
                      <div className="z-10 max-w-[56%] flex flex-col justify-between h-full space-y-4">
                        <div>
                          <h3 className="text-2xl sm:text-[26px] font-black leading-[1.12] whitespace-pre-line">
                            {feat.title}
                          </h3>
                          <p className="text-xs font-bold opacity-80 mt-2">
                            {feat.stat}
                          </p>
                        </div>

                        <div>
                          <span className={`inline-block px-5 py-2.5 rounded-full text-xs font-extrabold shadow-sm transition group-hover:scale-105 ${feat.btnBg}`}>
                            {feat.cta}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end justify-between h-full z-10">
                        <div className="w-10 h-10 rounded-full bg-white text-[#1C1E21] flex items-center justify-center shadow-sm mb-2">
                          <Bookmark className="w-4 h-4" />
                        </div>
                        <img
                          src={feat.image}
                          alt={feat.title}
                          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover shadow-xl border-4 border-white/70 group-hover:rotate-6 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>

      {/* Bottom Edge-to-Edge / Floating Mobile Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 sm:bottom-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-[92%] sm:max-w-md bg-white/95 backdrop-blur-md border-t sm:border border-gray-100 sm:rounded-full px-6 py-2.5 shadow-xl flex items-center justify-between z-40">
        <button
          onClick={() => {
            setActiveFeature(null);
            setActiveFilter('all');
          }}
          className={`flex flex-col items-center gap-0.5 text-[11px] font-extrabold ${
            !activeFeature ? 'text-[#1C1E21]' : 'text-gray-400'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>

        <button
          onClick={() => openFeature('trend_healthy')}
          className={`flex flex-col items-center gap-0.5 text-[11px] font-extrabold ${
            activeFeature === 'trend_healthy' ? 'text-[#1C1E21]' : 'text-gray-400'
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span>Trends</span>
        </button>

        {/* Center Floating Green Action Button */}
        <button
          onClick={() => openFeature('alt_food')}
          className="w-13 h-13 -mt-6 p-3.5 rounded-full bg-[#4E9F3D] hover:bg-[#2E7D32] text-white shadow-lg border-4 border-white flex items-center justify-center transition transform active:scale-95"
          title="Cari Alternatif Makanan Murah"
        >
          <Plus className="w-6 h-6 stroke-[3]" />
        </button>

        <button
          onClick={() => openFeature('wellness_tracker')}
          className={`flex flex-col items-center gap-0.5 text-[11px] font-extrabold ${
            activeFeature === 'wellness_tracker' ? 'text-[#1C1E21]' : 'text-gray-400'
          }`}
        >
          <Watch className="w-5 h-5" />
          <span>Tracker</span>
        </button>

        <button
          onClick={() => openFeature('ai_coach')}
          className={`flex flex-col items-center gap-0.5 text-[11px] font-extrabold ${
            activeFeature === 'ai_coach' ? 'text-[#1C1E21]' : 'text-gray-400'
          }`}
        >
          <User className="w-5 h-5" />
          <span>AI Coach</span>
        </button>
      </nav>
    </div>
  );
}

export default App;

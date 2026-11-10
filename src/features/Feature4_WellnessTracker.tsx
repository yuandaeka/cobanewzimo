import React, { useState } from 'react';
import { 
  Watch, 
  Check, 
  Plus, 
  Minus, 
  RefreshCw, 
  Bluetooth, 
  BatteryCharging, 
  Activity, 
  Heart, 
  Moon, 
  Zap 
} from 'lucide-react';

export const Feature4_WellnessTracker: React.FC = () => {
  // Default connected so the user immediately sees the rich Smartwatch Graphs!
  const [watchConnected, setWatchConnected] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [deviceName, setDeviceName] = useState('HUAWEI Band 10');

  const [steps, setSteps] = useState(6840);
  const [sleepHours, setSleepHours] = useState(7.5);
  const [waterGlasses, setWaterGlasses] = useState(5);
  const [heartRate, setHeartRate] = useState(76);
  const [selectedMeals, setSelectedMeals] = useState<string[]>(['Telur & Sayur', 'Ikan Kembung']);

  const devices = [
    { name: 'HUAWEI Band 10', battery: '88%', sensor: 'TruSeen™ 5.5 & TruSleep™' },
    { name: 'Xiaomi Smart Band 9', battery: '92%', sensor: 'PPG Bio-Sensor' },
    { name: 'Apple Watch SE', battery: '79%', sensor: 'Optical Heart Sensor' },
  ];

  const currentDeviceObj = devices.find(d => d.name === deviceName) || devices[0];

  const toggleWatch = () => {
    if (watchConnected) {
      setWatchConnected(false);
      return;
    }
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setWatchConnected(true);
      setSteps(6840);
      setSleepHours(7.5);
      setHeartRate(76);
    }, 500);
  };

  const handleRefreshSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      // Slight live variation to feel like real sensor polling
      setHeartRate(Math.floor(72 + Math.random() * 8));
      setSteps(prev => prev + 15);
    }, 400);
  };

  // Hourly steps data for smartwatch bar chart (06:00 - 21:00)
  const hourlySteps = [120, 480, 920, 640, 310, 520, 890, 430, 290, 610, 950, 420, 180, 80];

  // Hourly BPM points for ECG / Heart Rate curve
  const bpmHistory = [64, 68, 82, 95, 78, 74, 88, 112, 85, 76, 72, 79, 74, heartRate];

  // Deep sleep / Light sleep / REM blocks (22:30 - 06:00)
  const sleepBlocks = [
    { type: 'Light', width: '14%', color: 'bg-indigo-400', label: 'Light' },
    { type: 'Deep', width: '22%', color: 'bg-indigo-700', label: 'Deep' },
    { type: 'Light', width: '18%', color: 'bg-indigo-400', label: 'Light' },
    { type: 'REM', width: '12%', color: 'bg-[#8CE563]', label: 'REM' },
    { type: 'Deep', width: '16%', color: 'bg-indigo-700', label: 'Deep' },
    { type: 'REM', width: '10%', color: 'bg-[#8CE563]', label: 'REM' },
    { type: 'Light', width: '8%', color: 'bg-indigo-400', label: 'Light' },
  ];

  const mealOptions = [
    { name: 'Telur & Sayur', kcal: '280 kcal', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=200&q=80' },
    { name: 'Ikan Kembung', kcal: '320 kcal', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80' },
    { name: 'Tahu & Tempe', kcal: '240 kcal', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80' },
    { name: 'Buah Lokal', kcal: '110 kcal', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80' }
  ];

  const toggleMeal = (name: string) => {
    setSelectedMeals(prev =>
      prev.includes(name) ? prev.filter(m => m !== name) : [...prev, name]
    );
  };

  const stepGoal = 8000;
  const stepPercent = Math.min(100, Math.round((steps / stepGoal) * 100));

  return (
    <div className="space-y-6">
      {/* Top Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1C1E21] bg-[#D8F3EE] px-3 py-1 rounded-full mb-2">
            ⌚ Smartwatch & Manual Sync
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1E21] tracking-tight leading-tight">
            Daily Wellness
            <br />
            <span className="text-[#4E9F3D]">Visual Tracker</span>
          </h2>
        </div>

        {/* Pill Slider Button for Smartwatch Sync */}
        <button
          onClick={toggleWatch}
          className={`rounded-full p-2 pl-5 flex items-center gap-4 transition shadow-md ${
            watchConnected ? 'bg-[#4E9F3D] text-white' : 'bg-[#1C1E21] text-white'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-extrabold">
            {syncing ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Watch className="w-4 h-4 text-[#FFBA08]" />
            )}
            <span>{watchConnected ? 'Smartwatch Validated' : 'Connect Smartwatch'}</span>
          </div>
          <span className="text-xs opacity-60 tracking-widest font-bold">{'> > >'}</span>
          <div className="w-9 h-9 rounded-full bg-white text-[#1C1E21] flex items-center justify-center">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
        </button>
      </div>

      {/* SMARTWATCH TELEMETRY & GRAPHS DASHBOARD */}
      {watchConnected && (
        <div className="space-y-4">
          {/* Device Status Bar (HUAWEI Band 10) */}
          <div className="bg-[#1C1E21] text-white rounded-[28px] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#4E9F3D] to-[#8CE563] text-[#1C1E21] flex items-center justify-center shadow-inner relative flex-shrink-0">
                <Watch className="w-7 h-7 stroke-[2.5]" />
                <span className="w-3 h-3 rounded-full bg-[#8CE563] ring-2 ring-[#1C1E21] absolute -top-1 -right-1 animate-ping" />
                <span className="w-3 h-3 rounded-full bg-[#8CE563] ring-2 ring-[#1C1E21] absolute -top-1 -right-1" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-lg sm:text-xl font-black tracking-tight text-white">
                    {deviceName}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#8CE563]/20 text-[#8CE563] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-[#8CE563]/30">
                    <Bluetooth className="w-3 h-3" /> Connected
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                    <BatteryCharging className="w-3 h-3 text-[#FFBA08]" /> {currentDeviceObj.battery}
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-semibold mt-0.5">
                  Sensor Aktif: {currentDeviceObj.sensor} • Validasi Real-Time
                </p>
              </div>
            </div>

            {/* Switch Device & Refresh Button */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              <select
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
                className="bg-white/10 hover:bg-white/15 text-white text-xs font-extrabold px-3.5 py-2 rounded-full border border-white/15 focus:outline-none cursor-pointer"
              >
                {devices.map((d) => (
                  <option key={d.name} value={d.name} className="text-black">
                    ⌚ {d.name}
                  </option>
                ))}
              </select>

              <button
                onClick={handleRefreshSync}
                className="px-3.5 py-2 rounded-full bg-white text-[#1C1E21] hover:bg-[#8CE563] text-xs font-extrabold flex items-center gap-1.5 transition"
                title="Sync Ulang Sensor"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin' : ''}`} />
                <span>Sync</span>
              </button>
            </div>
          </div>

          {/* 4 SMARTWATCH GRAPH CARDS (Heart Rate Curve, Steps Bar Chart, Deep Sleep Hypnogram, SpO2 & Stress) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* GRAPH 1: HEART RATE (BPM) + ECG WAVEFORM */}
            <div className="bg-rose-50/90 rounded-[28px] p-5 border border-rose-100 flex flex-col justify-between space-y-3 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-500 block">
                    ❤️ HEART RATE
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-black text-[#1C1E21]">{heartRate}</span>
                    <span className="text-xs font-extrabold text-rose-600">bpm</span>
                  </div>
                </div>
                <span className="bg-rose-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full animate-pulse">
                  Live PPG
                </span>
              </div>

              {/* SVG Heart Rate Area & Line Graph */}
              <div className="w-full h-20 pt-2">
                <svg viewBox="0 0 260 70" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="hrGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Area under curve */}
                  <path
                    d="M0,55 L20,48 L40,35 L60,18 L80,40 L100,45 L120,28 L140,8 L160,34 L180,42 L200,48 L220,38 L240,44 L260,36 L260,70 L0,70 Z"
                    fill="url(#hrGrad)"
                  />
                  {/* Smooth ECG / BPM Line */}
                  <path
                    d="M0,55 L20,48 L40,35 L60,18 L80,40 L100,45 L120,28 L140,8 L160,34 L180,42 L200,48 L220,38 L240,44 L260,36"
                    fill="none"
                    stroke="#E11D48"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Current pulse dot */}
                  <circle cx="260" cy="36" r="4.5" fill="#E11D48" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[10px] font-extrabold text-gray-500 pt-1 border-t border-rose-200/60">
                <span>Min: 62 bpm</span>
                <span className="text-rose-600">Avg: 75 bpm</span>
                <span>Max: 138 bpm</span>
              </div>
            </div>

            {/* GRAPH 2: SENSOR STEPS + 24H BAR CHART & RING */}
            <div className="bg-[#D8F3EE] rounded-[28px] p-5 border border-[#BCECE0] flex flex-col justify-between space-y-3 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#155332] block">
                    👟 SENSOR STEPS
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-black text-[#1C1E21]">
                      {steps.toLocaleString('id-ID')}
                    </span>
                    <span className="text-[11px] font-extrabold text-[#2E7D32]">
                      ({stepPercent}%)
                    </span>
                  </div>
                </div>

                {/* Mini Circular Progress Ring */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="4"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#2E7D32"
                      strokeWidth="4"
                      strokeDasharray={`${stepPercent}, 100`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-[9px] font-black text-[#155332] absolute">
                    {stepPercent}%
                  </span>
                </div>
              </div>

              {/* Hourly Steps Bar Chart */}
              <div className="h-20 flex items-end justify-between gap-1 pt-3">
                {hourlySteps.map((val, idx) => {
                  const hPercent = Math.max(12, Math.round((val / 1000) * 100));
                  return (
                    <div
                      key={idx}
                      className="flex-1 flex flex-col items-center h-full justify-end group"
                    >
                      <div
                        className={`w-full rounded-t-sm transition-all ${
                          val > 700 ? 'bg-[#155332]' : 'bg-[#4E9F3D]/70'
                        }`}
                        style={{ height: `${hPercent}%` }}
                        title={`${val} steps`}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-[10px] font-extrabold text-[#155332] pt-1 border-t border-[#155332]/15">
                <span>📍 {(steps * 0.00072).toFixed(1)} km</span>
                <span>🔥 {Math.round(steps * 0.042)} kcal</span>
                <span>Goal: 8k</span>
              </div>
            </div>

            {/* GRAPH 3: DEEP SLEEP HYPNOGRAM (TruSleep Stages) */}
            <div className="bg-[#FFF3B0] rounded-[28px] p-5 border border-amber-200 flex flex-col justify-between space-y-3 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 block">
                    🌙 SLEEP STAGES
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-black text-[#1C1E21]">{sleepHours}</span>
                    <span className="text-xs font-extrabold text-amber-900">hrs total</span>
                  </div>
                </div>
                <span className="bg-[#1C1E21] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                  Score 88
                </span>
              </div>

              {/* Multi-stage Sleep Hypnogram Visual */}
              <div className="space-y-2 py-1">
                <div className="w-full h-8 rounded-xl overflow-hidden flex gap-0.5 p-0.5 bg-white/70">
                  {sleepBlocks.map((b, i) => (
                    <div
                      key={i}
                      style={{ width: b.width }}
                      className={`${b.color} h-full first:rounded-l-lg last:rounded-r-lg`}
                      title={`${b.type} Sleep`}
                    />
                  ))}
                </div>

                {/* Stage Breakdown Pills */}
                <div className="grid grid-cols-3 gap-1 text-[9px] font-extrabold text-center">
                  <div className="bg-indigo-700 text-white rounded-lg py-1 px-1">
                    Deep 2h 15m
                  </div>
                  <div className="bg-indigo-400 text-white rounded-lg py-1 px-1">
                    Light 3h 55m
                  </div>
                  <div className="bg-[#8CE563] text-[#1C1E21] rounded-lg py-1 px-1">
                    REM 1h 20m
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-extrabold text-amber-900 pt-1 border-t border-amber-900/15">
                <span>22:30</span>
                <span>Deep Sleep 30% ✨</span>
                <span>06:00</span>
              </div>
            </div>

            {/* GRAPH 4: SpO2 BLOOD OXYGEN & STRESS MONITOR */}
            <div className="bg-emerald-50 rounded-[28px] p-5 border border-emerald-100 flex flex-col justify-between space-y-3 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 block">
                    🫁 SpO2 & STRESS
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-black text-[#1C1E21]">98%</span>
                    <span className="text-xs font-extrabold text-emerald-700">SpO2</span>
                  </div>
                </div>
                <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                  100% Synced
                </span>
              </div>

              {/* SpO2 & Stress Visual Bars */}
              <div className="space-y-2.5 py-1">
                <div>
                  <div className="flex justify-between text-[10px] font-extrabold mb-1">
                    <span className="text-gray-600">Oksigen Darah (SpO2)</span>
                    <span className="text-emerald-700">Optimal (98%)</span>
                  </div>
                  <div className="w-full h-2.5 bg-white rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-extrabold mb-1">
                    <span className="text-gray-600">Tingkat Stres</span>
                    <span className="text-blue-600">32 • Relaxed</span>
                  </div>
                  <div className="w-full h-2.5 bg-white rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '32%' }} />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-extrabold text-emerald-800 pt-1 border-t border-emerald-200">
                <span>⌚ {deviceName.split(' ')[0]}</span>
                <span>VO2 Max: 46</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4 VISUAL BENTO CARDS (Interactive Manual & Sensor Adjustment) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 1. Water Poster Card (Mint) */}
        <div className="bg-[#D8F3EE] rounded-[32px] p-6 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#155332]">
                Hydration Goal
              </span>
              <h3 className="text-2xl font-black text-[#1C1E21]">
                {waterGlasses} / 8 Glasses
              </h3>
            </div>
            <span className="text-4xl">💧</span>
          </div>

          {/* 8 Visual Water Pills */}
          <div className="grid grid-cols-8 gap-1.5">
            {Array.from({ length: 8 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setWaterGlasses(i + 1)}
                className={`h-12 rounded-2xl font-extrabold text-xs transition-all flex items-center justify-center ${
                  i < waterGlasses
                    ? 'bg-[#1C1E21] text-white shadow-sm scale-105'
                    : 'bg-white/60 text-gray-400'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between bg-white rounded-full p-1.5 px-3 shadow-sm">
            <button
              onClick={() => setWaterGlasses(Math.max(0, waterGlasses - 1))}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-xs font-extrabold text-[#1C1E21]">
              {(waterGlasses * 0.25).toFixed(2)} Liters Today
            </span>
            <button
              onClick={() => setWaterGlasses(Math.min(12, waterGlasses + 1))}
              className="w-8 h-8 rounded-full bg-[#4E9F3D] text-white flex items-center justify-center font-bold"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. Steps & Activity Poster Card (Yellow) */}
        <div className="bg-[#FFF3B0] rounded-[32px] p-6 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900">
                {watchConnected ? `⌚ ${deviceName}` : '✍️ Manual Input'}
              </span>
              <h3 className="text-2xl font-black text-[#1C1E21]">
                {steps.toLocaleString('id-ID')} Steps
              </h3>
            </div>
            <span className="text-4xl">👟</span>
          </div>

          <div className="space-y-2">
            <input
              type="range"
              min={0}
              max={12000}
              step={200}
              value={steps}
              onChange={(e) => setSteps(Number(e.target.value))}
              className="w-full h-3 bg-white rounded-full accent-[#1C1E21] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-extrabold text-amber-900">
              <span>0</span>
              <span>Target: 8.000</span>
              <span>12.000</span>
            </div>
          </div>

          <div className="bg-white/80 rounded-2xl p-3 flex items-center justify-between text-xs font-bold text-[#1C1E21]">
            <span>🔥 Kalori Aktif Terbakar</span>
            <span className="bg-[#1C1E21] text-white px-3 py-1 rounded-full">
              {Math.round(steps * 0.042)} kcal
            </span>
          </div>
        </div>

        {/* 3. Sleep Quality Poster Card (Charcoal Dark) */}
        <div className="bg-[#26282B] text-white rounded-[32px] p-6 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8CE563]">
                {watchConnected ? `⌚ ${deviceName} TruSleep™` : '✍️ Manual Sleep Log'}
              </span>
              <h3 className="text-2xl font-black mt-0.5">
                {sleepHours} Hours Sleep
              </h3>
            </div>
            <span className="text-4xl">🌙</span>
          </div>

          <div className="space-y-2">
            <input
              type="range"
              min={3}
              max={10}
              step={0.5}
              value={sleepHours}
              onChange={(e) => setSleepHours(Number(e.target.value))}
              className="w-full h-3 bg-white/20 rounded-full accent-[#8CE563] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-bold text-gray-400">
              <span>3h</span>
              <span>Ideal: 7.5h</span>
              <span>10h</span>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3 flex items-center justify-between text-xs font-bold">
            <span>Status Pemulihan</span>
            <span className="bg-[#8CE563] text-[#1C1E21] px-3 py-1 rounded-full font-extrabold">
              {sleepHours >= 7 ? 'Deep Sleep Optimal ✨' : 'Kurang Tidur ⚠️'}
            </span>
          </div>
        </div>

        {/* 4. Visual Meal Plates Tap Logger */}
        <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#4E9F3D]">
                Food Intake Today
              </span>
              <h3 className="text-xl font-black text-[#1C1E21]">
                Tap Piring Makanmu
              </h3>
            </div>
            <span className="text-xs font-extrabold bg-[#D8F3EE] text-[#155332] px-3 py-1 rounded-full">
              {selectedMeals.length} Menu
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {mealOptions.map((meal) => {
              const checked = selectedMeals.includes(meal.name);
              return (
                <div
                  key={meal.name}
                  onClick={() => toggleMeal(meal.name)}
                  className={`p-3 rounded-2xl border cursor-pointer transition flex items-center gap-2.5 ${
                    checked
                      ? 'bg-[#D8F3EE] border-[#4E9F3D]'
                      : 'bg-gray-50 border-transparent hover:bg-gray-100'
                  }`}
                >
                  <img
                    src={meal.img}
                    alt={meal.name}
                    className="w-11 h-11 rounded-full object-cover shadow-sm border-2 border-white flex-shrink-0"
                  />
                  <div className="overflow-hidden flex-1">
                    <span className="text-xs font-extrabold text-[#1C1E21] block truncate">
                      {meal.name}
                    </span>
                    <span className="text-[10px] font-bold text-gray-500">{meal.kcal}</span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      checked ? 'bg-[#4E9F3D] text-white' : 'bg-white text-gray-400'
                    }`}
                  >
                    {checked ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

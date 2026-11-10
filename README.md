# 🌿 ZIMO 2.0 (Gizi Mobile) — AI Gamified Health & Nutrition Ecosystem
### Official Innovation Entry for **IPITEx 2027 International Invention Exhibition (Bangkok, Thailand)**

> **"Smart, *Fun* and Sustainable Adolescent Nutrition Ecosystem"**

ZIMO 2.0 is a mobile-first Progressive Web App (PWA) that acts as the comprehensive **Health & Nutrition Super-App Ecosystem** and primary gateway before entering the standalone **ZIMO Virtual Pet Game**.

---

## 🚀 Key Innovation Pillars (Addressing 6 Core Adolescent Challenges)

1. **Nutri-Budget Battle** *(Solves: Limited budgets for healthy food)*
   - Calculates highest-protein local food combinations using typical teen pocket money (Rp 15.000 – Rp 25.000) vs. typical junk food comparison.
2. **ZIMO AI Lifestyle Coach** *(Solves: Difficulty building healthy routines)*
   - Interactive adolescent coach ("Dr. Zimo AI") providing personalized routines tailored to school hours and exam preparation.
3. **Trend-to-Healthy** *(Solves: Viral trends & health misinformation)*
   - Myth-Buster scanner comparing TikTok food trends against clinical nutrition facts (Permenkes RI / WHO) and suggesting healthy spin-offs.
4. **Daily Wellness Tracker** *(Solves: Irregular sleep, activity, eating, and hydration)*
   - 4-step structured wizard logger (Sleep, Hydration 8-glasses, Physical Activity, Balanced Plate & Sugar limit) calculating the ZIMO Metabolic Sync Score.
5. **Health & Pharma Check** *(Solves: Limited literacy on supplements & anemia)*
   - Adolescent guide for Tablet Tambah Darah (TTD) and interactive food-drug interaction checker (Absorbers vs Blockers).
6. **Lifestyle Quest & Nutri-Guild** *(Solves: Lack of peer motivation)*
   - School and inter-class leaderboard, cooperative healthy habit challenges, and cheering reactions.
7. **The 7th Anchor Feature: ZIMO Virtual Pet Game Launcher**
   - Highlighting the waving ZIMO pet whose vitality, level, and strength directly sync with real-world nutrition logs.
   - Built-in live interactive simulation + full-screen embedded iframe / external launch button.

---

## ⚙️ Configuration

To connect your existing standalone ZIMO Virtual Pet game, simply update `ZIMO_GAME_URL` in `src/config.ts`:

```typescript
// src/config.ts
export const ZIMO_GAME_URL = "https://your-standalone-zimo-game.vercel.app";
```

You can also change the URL at runtime inside the app by clicking the ⚙️ settings icon on the Game Portal screen.

---

## 🛠️ Tech Stack & Viewport Architecture
- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS (Harmonized Forest Green `#155332`, Gradient Green `#4E9F3D` to `#2E7D32`, Mint Canvas `#F4FDF8`, and Gamification Amber `#FFBA08`)
- **Icons:** Lucide React Icons
- **Animation & Effects:** Framer Motion, Canvas Confetti, and native Web Audio API sound synthesizer
- **Mobile-First Container:** Wrapped in `max-w-[430px] min-h-screen mx-auto` with iOS status bar simulation, dynamic island, and desktop framing.

---

## 📦 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Build for production (Vercel / Netlify / GitHub Pages)
npm run build
```

---

## 🏆 Exhibition Dossier & Judge Demo Mode
- **Quick Judge Demo 1-Tap Entry:** Click the **⚡ 1-Tap Judge Demo Access** button on the Welcome screen or PIN keypad to log in instantly.
- **Judge Guide Modal:** Click the gold **Judge Guide** pill in the top toolbar to access SDGs alignment (#3 & #4), research methodology, and instant state switches (Optimal Student vs Anemia-Risk Student).
- **Multilingual Support:** One-click toggle between **Bahasa Indonesia (ID)** and **English (EN)** for international exhibition judges.


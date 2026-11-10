/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zimo: {
          dark: '#155332',
          primary: '#2E7D32',
          light: '#4E9F3D',
          mint: '#E8F8F0',
          canvas: '#F4FDF8',
          border: '#D5EFE0',
          amber: '#FFBA08',
          gold: '#E5A000',
          subtle: '#6B8E7B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(21, 83, 50, 0.08)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'float': '0 12px 30px -4px rgba(46, 125, 50, 0.25)',
      }
    },
  },
  plugins: [],
}


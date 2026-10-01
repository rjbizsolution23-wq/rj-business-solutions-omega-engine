/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563eb',
          sky: '#0ea5e9',
          deep: '#1e3a8a',
          navy: '#0f172a',
          soft: '#f8fafc',
          light: '#eff6ff',
          border: '#bfdbfe',
          muted: '#dbeafe',
          line: '#e2e8f0',
        },
        dark: {
          surface: '#0b1220',
          surface2: '#0f172a',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
        code: ['ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
        'grad-dark': 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%)',
        'grad-light': 'linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)',
      },
      boxShadow: {
        'rj-blue': '0 8px 18px rgba(37, 99, 235, 0.35)',
        'rj-sky': '0 8px 18px rgba(14, 165, 233, 0.30)',
        'rj-dark': '0 15px 30px rgba(15, 23, 42, 0.25)',
      }
    },
  },
  plugins: [],
}

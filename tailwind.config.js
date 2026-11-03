/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: v('bg'),
        surface: v('surface'),
        surface2: v('surface2'),
        fg: v('fg'),
        fg2: v('fg2'),
        muted: v('muted'),
        line: v('line'),
        accent: v('accent'),
        onaccent: v('onaccent'),
        warm: v('warm'),
        pink: v('pink'),
        mint: v('mint'),
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

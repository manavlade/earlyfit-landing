import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
        unna: ['var(--font-unna)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;

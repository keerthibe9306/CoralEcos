/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#0B3D4E',
        accent: '#E05B3A',
        warm: '#F4A261',
        sand: '#FAF3E8',
        teal: '#1A7A8A',
        border: '#E8DDD0',
        success: '#2D7A4F',
        warning: '#C8820A',
        danger: '#C0392B',
        muted: '#6B7280',
      },
    },
  },
  plugins: [],
};

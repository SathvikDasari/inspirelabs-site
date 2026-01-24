const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './themes/tailbliss/layouts/**/*.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1E293B',       // dark slate
        secondary: '#0F172A',     // even darker
        accent: '#38BDF8',        // light blue (for highlights)
        background: '#020617',    // almost black
        surface: '#1E293B',
        text: '#F1F5F9',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

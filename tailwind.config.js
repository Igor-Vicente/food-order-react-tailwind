/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgBodyGradient1: '#29251c',
        bgBodyGradient2: '#2c2306',
        bgMealItem: '#1d1a16',
        bgLightGray: '#e4ddd4',
        mealPrice: '#312c1d',
        yellow: '#ffc404',
        yellowDark: '#ffab04',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      gridTemplateColumns: {
        //(20rem = 320px) ~ 1fr (72rem = 1152px)
        meals: 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
      animation: {
        fadeSlidUp: 'fade-slide-up 0.3s ease-out forwards',
      },
      keyframes: {
        'fade-slide-up': {
          from: {
            opacity: 0,
            transform: 'translateY(4rem)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};

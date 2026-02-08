/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef6f3',
          100: '#fde9e1',
          200: '#fbd0c3',
          300: '#f7ae96',
          400: '#f28766',
          500: '#e96943',
          600: '#d44f2e',
          700: '#b13e24',
          800: '#923623',
          900: '#793121',
        },
        warm: {
          50: '#fafaf8',
          100: '#f5f5f0',
          200: '#e8e6dc',
          300: '#d9d5c5',
          400: '#c5bea8',
          500: '#afa58a',
          600: '#978b72',
          700: '#7d715e',
          800: '#685f50',
          900: '#584f44',
        },
        forest: {
          50: '#f3f6f4',
          100: '#e3ebe6',
          200: '#c7d7ce',
          300: '#a1baad',
          400: '#769886',
          500: '#577d68',
          600: '#436453',
          700: '#365143',
          800: '#2d4237',
          900: '#26372f',
        }
      },
      fontFamily: {
        display: ['Merriweather', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'wag': 'wag 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wag: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
      },
    },
  },
  plugins: [],
}

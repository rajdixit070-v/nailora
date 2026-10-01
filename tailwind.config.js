/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        forest: {
          50: '#F1F6F3',
          100: '#E1ECE6',
          200: '#C2D9CD',
          300: '#94BEAA',
          400: '#5F9B80',
          500: '#3D7D62',
          600: '#2E624D',
          700: '#264E3E',
          800: '#1E3B30', // main primary dark green in reference
          900: '#183027',
          950: '#12241D', // footer deep dark green
        },
        terracotta: {
          50: '#FCF7F4',
          100: '#F8ECE6',
          200: '#F0D7CB',
          300: '#E4BAA6',
          400: '#D49479',
          500: '#C06F51',
          600: '#AF5C40', // "Canvas." & accent terracotta in reference
          700: '#924A32',
          800: '#773D2A',
          900: '#623526',
        },
        cream: {
          50: '#FAF7F2', // image body background
          100: '#F5EFE6',
          200: '#EDE4D6', // image card background
          300: '#E2D5C3',
          400: '#CEBDA4',
        },
        ink: {
          DEFAULT: '#1E2522',
          muted: '#616A65',
          light: '#8D9791',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Poppins', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(30, 59, 48, 0.05)',
        'card': '0 4px 20px rgba(30, 59, 48, 0.06)',
        'card-hover': '0 16px 36px rgba(30, 59, 48, 0.12)',
        'terracotta': '0 10px 25px rgba(175, 92, 64, 0.25)',
        'forest': '0 10px 25px rgba(30, 59, 48, 0.3)',
      },
      borderRadius: {
        'card': '14px',
        'arch': '120px 120px 0 0',
      },
    },
  },
  plugins: [],
};

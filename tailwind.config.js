/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          pink: '#FFF8F5',
        },
        blush: {
          DEFAULT: '#FFEDF3',
          border: '#F0C9DA',
          soft: '#FBD9E6',
        },
        raspberry: {
          DEFAULT: '#B23A6B',
          dark: '#932854',
          light: '#C74A7E',
          soft: 'rgba(178, 58, 107, 0.12)',
        },
        mauve: {
          DEFAULT: '#E8A5C4',
          soft: '#F5C6DA',
        },
        plum: {
          black: '#2B1B24',
          muted: '#7A5C6B',
        },
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'raspberry-sm': '0 4px 12px -2px rgba(178, 58, 107, 0.12), 0 2px 6px -1px rgba(178, 58, 107, 0.08)',
        'raspberry': '0 10px 25px -5px rgba(178, 58, 107, 0.15), 0 8px 10px -6px rgba(178, 58, 107, 0.08)',
        'raspberry-lg': '0 20px 35px -8px rgba(178, 58, 107, 0.2), 0 10px 15px -5px rgba(178, 58, 107, 0.12)',
        'glow': '0 0 18px rgba(178, 58, 107, 0.35)',
      },
      borderWidth: {
        '1.5': '1.5px',
      },
    },
  },
  plugins: [],
}

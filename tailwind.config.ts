import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

export default {
  mode: "jit",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans"],
      monospace: ["DM Mono", "monospace"],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
      pink: colors.pink,
    },
    extend: {
      colors: {
        bg: "#18181b",
        "secondary-light": "#b2bbcf",
        "secondary": "#7b89a8",
        "secondary-medium": "#767c85",
        "secondary-darker": "#2a2a2c",
        "secondary-dark": "#1F1F20",
        "secondary-darkest": "#141414",
        "primary": "#dc2626",
        "primary-darker": "#b91c1c",
        "primary-darkest": "#000c24",
        "primary-dark": "#192742",
        "primary-light": "#dc2626",
      },
      rotate: {
        '360': '360deg'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fadeInAndBounce': 'fadeIn 3s ease-out',
      },
      willChange: {
        'projectCard': 'border-color, opacity, transform',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config;

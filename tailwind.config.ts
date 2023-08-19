import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#F5C246',
      secondary: '#FFECED',
      danger: '#E53238',
      yellow: '#ddaf3f',
      black: '#201d1d',
      blue: '#0064D2',
      white: '#fff',
      grey: {
        100: '#D9D9D9',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#4F4F4F',
        500: '#151313',
        600: '#515151',
        700: '#767676',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: 'rgb(5, 5, 5)',
      gray: {
        100: 'rgb(45, 45, 45)',
        200: 'rgb(30, 30, 30)',
        300: 'rgb(145, 145, 145)',
        400: 'rgb(206, 206, 206)',
      },
      white: 'rgb(250, 250, 250)',
    },
    screens: {
      mobile: { max: '1023px' },
      big: { min: '2000px' },
    },
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      keyframes: {
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('children', '&>*');
    }),
  ],
};
export default config;

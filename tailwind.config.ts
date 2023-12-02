import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: 'hsl(0, 0%, 98%)',
        dark: 'hsl(0, 0%, 3.9%)',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(300px, 1fr))',
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

import { preset } from '@marigold/theme-docs/preset';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...preset.content, './index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
    },
    extend: {
      typography: ({ theme }) => ({
        docs: {
          css: {
            // https://github.com/tailwindlabs/tailwindcss-typography#adding-custom-color-themes
            h1: {
              fontSize: 60,
              paddingTop: theme('padding.32'),
            },
          },
        },
      }),
    },
  },
  presets: [preset],
  plugins: [require('@tailwindcss/typography')],
};

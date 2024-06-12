import { preset } from '@marigold/theme-docs/preset';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ...preset.content,
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
    },
    extend: {
      padding: {
        content: 'var(--page-padding)',
        'content-md': 'var(--page-padding-md)',
        'content-xl': 'var(--page-padding-xl)',
      },
      gridTemplateColumns: {
        content:
          'minmax(var(--page-padding), 1fr) minmax(0, 1300px) minmax(var(--page-padding), 1fr)',
        'content-md':
          'minmax(var(--page-padding-md), 1fr) minmax(0, 1300px) minmax(var(--page-padding-md), 1fr)',
        'content-xl':
          'minmax(var(--page-padding-xl), 1fr) minmax(0, 1300px) minmax(var(--page-padding-xl), 1fr)',
      },
      typography: ({ theme }) => ({
        docs: {
          css: {
            // https://github.com/tailwindlabs/tailwindcss-typography#adding-custom-color-themes
            h1: {
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: -1.5,
              paddingTop: theme('spacing.32'),
              marginBottom: theme('spacing.10'),
            },
            h2: {
              fontSize: 32,
              fontWeight: 900,
              marginTop: theme('spacing.24'),
              marginBottom: theme('spacing.6'),
            },
          },
        },
      }),
    },
  },
  presets: [preset],
  plugins: [require('@tailwindcss/typography')],
};

import { preset } from '@marigold/theme-core/preset';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...preset.content, './src/**/*.{js,ts,jsx,tsx}'],
  presets: [preset],
};

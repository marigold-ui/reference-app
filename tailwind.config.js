import { preset } from '@marigold/theme-core/preset';

/** @type {import('tailwindcss').Config} */
export default {
  content: [...preset.content, './src/**/*.{js,ts,jsx,tsx}'],
  presets: [preset],
};

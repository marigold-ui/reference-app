import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import {remarkCodeHike} from '@code-hike/mdx';

// @ts-ignore
export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup")
  return {
    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },
    plugins: [
      {enforce: 'pre',  ...mdx.default({
          remarkPlugins: [[remarkCodeHike, { lineNumbers: true, showCopyButton: true,}]],
        }),},
      react(),
    ],
  }
})

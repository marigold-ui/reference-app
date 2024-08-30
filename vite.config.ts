import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { remarkCodeHike } from '@code-hike/mdx';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import type { CodeHikeConfig } from 'codehike/mdx';
import * as v1 from 'codehike/mdx';

const chConfig: CodeHikeConfig = {
  syntaxHighlighting: { theme: 'github-dark' },
  components: { code: 'CodeHikeWrapperComponent' },
  ignoreCode: ({ meta }) => {
    console.log(meta);
    if (meta !== null) {
      return !meta.startsWith('use-v1');
    }
    return true;
  },
};
export default defineConfig(async () => {
  const mdx = await import('@mdx-js/rollup');
  return {
    optimizeDeps: {
      include: ['react/jsx-runtime'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      tailwindcss(),
      {
        enforce: 'pre',
        ...mdx.default({
          remarkPlugins: [
            [v1.remarkCodeHike, chConfig],
            [
              remarkCodeHike,
              {
                lineNumbers: false,
                showCopyButton: true,
                theme: 'material-palenight',
              },
            ],
          ],
          recmaPlugins: [[v1.recmaCodeHike, chConfig]],
          jsx: true,
        }),
      },
      react(),
      TanStackRouterVite(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './tests/setup.js',
      coverage: {
        exclude: [
          '**/{*.d.ts,index.ts,*.gen.ts}',
          '**/.cache/**',
          '**/build/**',
          '**/dist/**',
          '**/node_modules/**',
          '**/*.config.js',
          '**/index.tsx',
          '**/src/routes/**',
        ],
      },
    },
  } satisfies UserConfig;
});

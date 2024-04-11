module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {},
  testMatch: ['<rootDir>/**/*.test.{ts,tsx}'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // transform
  transform: {
    '^.+\\.css$': ['jest-transform-css', { modules: true }],
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          target: 'es2022',
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
        sourceMaps: true,
      },
    ],
  },
  transformIgnorePatterns: [], // set empty so it doesn't break some ESM only modules

  // coverage
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    // ignore:
    '!**/{*.d.ts,index.ts}',
    '!**/.cache/**',
    '!**/build/**',
    '!**/dist/**',
    '!**/node_modules/**',
    '!**/*.config.ts',
    '!**/index.tsx'
  ],

  clearMocks: true,

  snapshotFormat: {
    printBasicPrototype: false,
  },
};

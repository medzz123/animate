export default {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.next`,
    'cypress',
    '__tests__',
    'dist',
  ],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/__tests__/testSetup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};

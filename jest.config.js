module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [`node_modules`, `\\.next`],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@theme(.*)$': '<rootDir>/src/theme$1',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};

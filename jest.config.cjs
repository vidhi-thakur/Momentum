module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
    },
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1', // Handles Vite path aliases
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  };
  
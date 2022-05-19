module.exports = {
  roots: ['<rootDir>/tests/cdk'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

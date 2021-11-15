/** @type {import('@jest/types').Config.DefaultOptions} */
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts', 'jest-extended/all'],
  testEnvironment: 'node',
}

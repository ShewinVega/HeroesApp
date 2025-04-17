export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [
    "/node_modules/(?!query-string)/"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
}

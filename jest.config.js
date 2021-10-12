process.env.VUE_CLI_BABEL_TARGET_NODE = true
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true

module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  transformIgnorePatterns: ['/node_modules/@vuetify/(?!(lib))'],
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.(spec).(ts|js)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/tests/',
    '/public/',
    '/coverage/',
    '/styles/',
  ],
}

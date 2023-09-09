const path = require('path')
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
      transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
      },
      testEnvironment: 'node',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
      }),
      transformIgnorePatterns: ['<rootDir>/node_modules/'],
    },
  },
}

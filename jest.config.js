const path = require('path')

const transformIgnorePatterns = [
  '/dist/',
  'node_modules/[^/]+?/(?!(es|node_modules)/)' // Ignore modules without es dir
]

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts)$': 'babel-jest'
  },
  setupFiles: ['<rootDir>/test/setup.js'],
  // setupTestFrameworkScriptFile: path.resolve(__dirname, './test', 'jest.setup.js'),
  testURL: 'http://localhost/',
  testEnvironment: 'jsdom', // 测试环境
  moduleFileExtensions: ['js', 'jsx'], // 单元测试文件检测后缀名
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/spec/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/spec/__mocks__/styleMock.js',
    '^component_path$': '<rootDir>/src/components',
    '^root_path$': '<rootDir>/src'
  },
  transformIgnorePatterns
}

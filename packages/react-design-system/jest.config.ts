export default {
  displayName: '@ryuuji3/react-design-system',
  preset: '../../jest.preset.js',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/packages/react-design-system',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

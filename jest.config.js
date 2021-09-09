module.exports = {
  roots: ['<rootDir>'],
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageDirectory: 'test-results/jest/',
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test-results/jest',
        outputName: './unit.xml',
        usePathForSuiteName: 'true',
      },
    ],
  ],
};

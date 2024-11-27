import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(ts|js)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  testEnvironment: 'jsdom',
};

export default config;

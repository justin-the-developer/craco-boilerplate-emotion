reactHotReloadPlugin = require('craco-plugin-react-hot-reload');

const path = require('path');
const resolve = arg => path.resolve(__dirname, arg);
const emotionPresetOptions = {};

const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
  undefined,
  emotionPresetOptions
);
// https://github.com/emotion-js/emotion/issues/1123#issuecomment-455767886
module.exports = {
  babel: {
    plugins: [
      ...emotionBabelPreset.plugins,
    ],
  },
  webpack: {
    alias: {
      '@': resolve('src'),
      'react-dom': '@hot-loader/react-dom',
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
      },
    },
  },
  plugins: [{
    plugin: reactHotReloadPlugin,
  }],
};

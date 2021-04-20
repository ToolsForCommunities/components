const path = require('path');

module.exports = {
  // stories: ['./stories/**/*.stories.js'],
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-a11y'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src")
    };

    // Return the altered config
    return config;
  },
};

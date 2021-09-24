module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
};

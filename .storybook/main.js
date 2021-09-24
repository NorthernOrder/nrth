module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-knobs/register',
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

module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: [
    '@storybook/addon-postcss',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/preset-scss',
  ],
  webpackFinal: async (config) => {
    config.module.rules.unshift({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [{ removeViewBox: false }] },
            titleProp: true,
          },
        },
      ],
    })

    return config
  },
}

module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    const svgrOptions = {
      prettier: false,
      svgo: true,
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
                minifyStyles: false,
              },
            },
          },
          'convertStyleToAttrs',
        ],
      },
      titleProp: true,
    }

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          {
            oneOf: [
              {
                test: /\.svg$/i,
                use: [
                  {
                    loader: '@svgr/webpack',
                    options: svgrOptions,
                  },
                ],
              },
              {
                rules: [...config.module.rules],
              },
            ],
          },
        ],
      },
    }
  },
}

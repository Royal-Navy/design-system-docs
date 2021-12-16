const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['hex-rgb'])

module.exports = withPlugins([withTM], {
  // other configs...

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [] },
            titleProp: true,
          },
        },
      ],
    })
    return config
  },
})

const withTM = require('next-transpile-modules')([
  // ...
])

module.exports = withTM({
  images: {
    unoptimized: true,
  },
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

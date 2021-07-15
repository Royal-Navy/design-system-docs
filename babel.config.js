module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    'import-graphql',
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        [
          'styled-components',
          {
            ssr: false,
            displayName: false,
            namespace: 'sc',
          },
        ],
      ],
    },
  },
}

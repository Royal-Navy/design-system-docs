module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-typescript'],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        [
          'styled-components',
          {
            ssr: true,
            displayName: true,
            preprocess: false,
          },
        ],
      ],
    },
  },
}

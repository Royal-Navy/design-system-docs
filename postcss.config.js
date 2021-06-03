module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'autoprefixer',
      {
        flexbox: 'no-2009',
      },
    ],
  ],
}

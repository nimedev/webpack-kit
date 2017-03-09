/**
 * @module lint-css
 */

module.exports = (stylelint, { include }) => ({
  module: {
    rules: [{
      test: /\.css$/,
      include,
      enforce: 'pre',

      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: () => [stylelint]
      }
    }]
  }
})

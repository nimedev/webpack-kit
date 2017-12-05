'use strict'

const { HotModuleReplacementPlugin } = require('webpack')

module.exports = (options = {}) => ({
  devServer: {
    contentBase: './src',
    open: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    ...options
  },
  plugins: [
    // Enable multi-pass compilation for enhanced performance
    // in larger projects. Good default.
    new HotModuleReplacementPlugin({
      // Disabled as this won't work with html-webpack-template yet
      // multiStep: true
    })
  ]
})

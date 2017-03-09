/**
 * @module html-plugin
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * Configuration for HtmlWebpackPlugin
 */
module.exports = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ]
})

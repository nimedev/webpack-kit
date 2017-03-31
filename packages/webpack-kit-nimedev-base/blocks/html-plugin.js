/**
 * @module html-plugin
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')

const defaultOptions = {
  template: './app/index.html'
}

/**
 * Configuration for HtmlWebpackPlugin
 */
module.exports = (options = defaultOptions) => ({
  plugins: [
    new HtmlWebpackPlugin(options)
  ]
})

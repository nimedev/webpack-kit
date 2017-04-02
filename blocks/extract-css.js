/**
 * @module extract-css
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Configurations for ExtractTextPlugin
 */
module.exports = ({ include }) => ({
  module: {
    rules: [
      // Extract CSS during build
      {
        test: /\.css$/,
        // Restrict extraction process to the given
        // paths.
        include,

        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              import: false,
              importLoaders: 1,

              // Use css nano options
              minimize: {
                reduceIdents: {
                  keyframes: false
                },
                zindex: false
              }
            }
          }, 'postcss-loader']
        })
      }
    ]
  },
  plugins: [
    // Output extracted CSS to a file
    new ExtractTextPlugin('styles.[contenthash].css')
  ]
})

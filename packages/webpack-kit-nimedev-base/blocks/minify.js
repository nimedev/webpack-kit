/**
 * @module minify
 */

/**
 * Configurations for UglifyJsPlugin
 */
module.exports = webpack => ({
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})

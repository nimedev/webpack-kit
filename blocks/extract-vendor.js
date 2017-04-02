/**
 * @module extract-vendor
 */

const isVendor = module => /node_modules/.test(module.resource)

/**
 * Configuration for splitting bundles
 */
module.exports = (webpack, { chunks, name = 'vendor', minChunks = isVendor } = {}) => ({
  plugins: [
    // Extract bundles.
    new webpack.optimize.CommonsChunkPlugin({
      chunks,
      name,
      minChunks
    })
  ]
})

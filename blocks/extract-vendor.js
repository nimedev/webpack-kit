/**
 * @module extract-vendor
 */

'use strict'

const webpack = require('webpack')

const isVendor = module => /node_modules/.test(module.resource)

/**
 * Configuration for splitting bundles
 */
module.exports = ({ chunks, name = 'vendor', minChunks = isVendor } = {}) => ({
  plugins: [
    // Extract bundles.
    new webpack.optimize.CommonsChunkPlugin({
      chunks,
      name,
      minChunks,
    }),
  ],
})
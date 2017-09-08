'use strict'

const { CommonsChunkPlugin } = require('webpack').optimize

const isVendor = module => /node_modules/.test(module.context)

/**
 * Configuration for splitting bundles
 */
module.exports = (
  {
    name = 'vendor',
    names,
    filename,
    minChunks = isVendor,
    chunks
  } = {}
) => ({
  plugins: [
    // Extract bundles.
    new CommonsChunkPlugin({
      name,
      names,
      minChunks,
      filename,
      chunks
    })
  ]
})

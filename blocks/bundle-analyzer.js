'use strict'

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const defaultOptions = {
  analyzerMode: 'static'
}

/**
 * Configuration for BundleAnalyzerPlugin
 */
module.exports = (options = defaultOptions) => ({
  plugins: [
    new BundleAnalyzerPlugin(options)
  ]
})

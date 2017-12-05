'use strict'

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = (options = {}) => ({
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      ...options
    })
  ]
})

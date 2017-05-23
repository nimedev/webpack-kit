/**
 * @module copy-plugin
 */

'use strict'

const CopyWebpackPlugin = require('copy-webpack-plugin')

/**
 * Configuration for CopyWebpackPlugin
 */
module.exports = path => ({
  plugins: [
    new CopyWebpackPlugin(path)
  ]
})

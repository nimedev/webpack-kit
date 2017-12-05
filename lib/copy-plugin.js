'use strict'

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (patterns, options = {}) => ({
  plugins: [
    new CopyWebpackPlugin(patterns, {
      ignore: [
        '.gitkeep',
        '**/.DS_Store',
        '**/Thumbs.db'
      ],
      ...options
    })
  ]
})

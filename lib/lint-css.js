'use strict'

const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = (options = {}) => ({
  plugins: [
    new StyleLintPlugin({
      files: 'src/**/*.css',
      ...options
    })
  ]
})

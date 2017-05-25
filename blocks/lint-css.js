/**
 * @module lint-css
 */

'use strict'

const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = options => ({
  plugins: [
    new StyleLintPlugin(options),
  ],
})

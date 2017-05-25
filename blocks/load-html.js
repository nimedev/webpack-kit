/**
 * @module load-html
 */

'use strict'

/**
 * Configure html-loader to load html files.
 */
module.exports = ({ include }) => ({
  module: {
    rules: [{
      test: /\.html$/,
      include,

      use: 'html-loader',
    }],
  },
})

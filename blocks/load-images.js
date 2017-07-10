/**
 * @module load-images
 */

'use strict'

/**
 * Configuration of loader for images
 */
module.exports = ({ include, exclude, options = {} } = {}) => ({
  module: {
    rules: [{
      test: /\.(jpg|png|svg)$/,
      include,
      exclude,
      loader: 'url-loader',
      options: Object.assign({
        name: './assets/images/[name].[hash].[ext]',
        limit: 25000,
      }, options),
    }],
  },
})
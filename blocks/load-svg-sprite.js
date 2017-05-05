/**
 * @module load-svg-sprite
 */

'use strict'

/**
 * Configuration of loader for svg sprites
 */
module.exports = ({ include, exclude, options = {} } = {}) => ({
  module: {
    rules: [{
      test: /\.svg$/,
      include,
      exclude,

      loader: 'svg-sprite-loader',
      options: Object.assign({
        name: './assets/icons/[name].[hash].[ext]'
      }, options)
    }]
  }
})

/**
 * @module load-svg-sprite
 */

/**
 * Configuration of loader for svg sprites
 */
module.exports = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [{
      test: /\.svg$/,
      include,
      exclude,

      loader: 'svg-sprite-loader',
      options
    }]
  }
})

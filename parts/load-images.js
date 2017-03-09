/**
 * @module load-images
 */

/**
 * Configuration of loader for images
 */
module.exports = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [{
      test: /\.(jpg|png|svg)$/,
      include,
      exclude,

      loader: 'url-loader',
      options
    }]
  }
})

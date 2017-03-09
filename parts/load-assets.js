/**
 * @module load-assets
 */

/**
 * Configure file-loader to load some assets
 */
module.exports = ({ include }) => ({
  module: {
    rules: [{
      test: /\.(ico|txt)$/,
      include,

      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }]
  }
})

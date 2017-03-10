/**
 * @module load-css
 */

/**
 * Configuration of loader for css files
 */
module.exports = ({ include }) => ({
  module: {
    rules: [{
      test: /\.css$/,
      // Restrict extraction process to the given
      // paths.
      include,

      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            import: false,
            importLoaders: 1
          }
        },
        'postcss-loader'
      ]
    }]
  }
})

/**
 * @module load-css
 */

'use strict'

const minimize = {
  reduceIdents: {
    keyframes: false,
  },
  zindex: false,
}

/**
 * Configuration of loader for css files
 */
module.exports = ({ include, useExportsLoader = false }) => ({
  module: {
    rules: [{
      test: /\.css$/,
      // Restrict extraction process to the given
      // paths.
      include,

      use: [
        useExportsLoader ? 'exports-loader?module.exports.toString()' : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            import: false,
            importLoaders: 1,

            // Use css nano options
            minimize: process.env.NODE_ENV === 'production' ? minimize : false,
          },
        },
        'postcss-loader',
      ],
    }],
  },
})
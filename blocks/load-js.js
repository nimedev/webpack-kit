/**
 * @module load-js
 */

'use strict'

/**
 * Configuration for JavaScript linter and loader
 */
module.exports = ({ include, eslintOptions, test = /\.js$/ }) => ({
  module: {
    rules: [{
      test,
      include,
      enforce: 'pre',

      loader: 'eslint-loader',
      options: eslintOptions,
    }, {
      test,
      include,

      loader: 'babel-loader',
      options: {
        // Enable caching for improved performance during
        // development.
        // It uses default OS directory by default. If you need
        // something more custom, pass a path to it.
        // I.e., { cacheDirectory: '<path>' }
        cacheDirectory: true,
      },
    }],
  },
})

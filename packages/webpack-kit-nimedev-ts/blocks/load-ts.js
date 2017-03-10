/**
 * @module load-ts
 */

/**
 * Configuration for TypeScript linter and loader
 */
module.exports = ({ include }) => ({
  module: {
    rules: [{
      test: /\.ts$/,
      include,
      enforce: 'pre',

      use: 'tslint-loader'
    }, {
      test: /\.ts$/,
      include,

      use: 'ts-loader'
    }]
  }
})

'use strict'

module.exports = (ruleOptions = {}) => ({
  module: {
    rules: [
      {
        test: /\.woff2?$/,

        // Inline small woff files and output them below font/.
        // Set mimetype just in case.
        loader: 'url-loader',
        options: {
          name: './assets/fonts/[name].[hash].[ext]',
          limit: 100000,
          mimetype: 'application/font-woff'
        },
        ...ruleOptions
      }
    ]
  }
})

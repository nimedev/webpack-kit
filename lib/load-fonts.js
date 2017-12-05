'use strict'

module.exports = (ruleOptions = {}) => ({
  module: {
    rules: [
      {
        test: /\.(woff2?|ttf|svg|eot)$/,
        loader: 'file-loader',
        options: {
          name: './assets/fonts/[name].[hash].[ext]'
        },
        ...ruleOptions
      }
    ]
  }
})

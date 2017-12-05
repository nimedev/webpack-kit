'use strict'

module.exports = (ruleOptions = {}) => ({
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          name: './assets/images/[name].[hash].[ext]',
          limit: 1000
        },
        ...ruleOptions
      }
    ]
  }
})

'use strict'

const minimize = {
  reduceIdents: {
    keyframes: false
  },
  zindex: false
}

module.exports = (ruleOptions = {}, useExportsLoader = false) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          useExportsLoader ? 'exports-loader?module.exports.toString()' : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              import: false,
              importLoaders: 1,

              // Use css nano options
              minimize: process.env.NODE_ENV === 'production' ? minimize : false
            }
          },
          'postcss-loader'
        ],
        ...ruleOptions
      }
    ]
  }
})

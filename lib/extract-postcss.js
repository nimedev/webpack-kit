'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const minimize = {
  reduceIdents: {
    keyframes: false
  },
  zindex: false
}

module.exports = (ruleOptions = {}, name = 'styles.[contenthash:20].css') => {
  const extractCSS = new ExtractTextPlugin(name)

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: extractCSS.extract({
            fallback: 'style-loader',
            use: [
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
            ]
          }),
          ...ruleOptions
        }
      ]
    },
    plugins: [extractCSS]
  }
}

'use strict'

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = (ruleOptions = {}) => {
  const loaderOptions = ruleOptions.options
  const plugins = loaderOptions && loaderOptions.extract ? [new SpriteLoaderPlugin()] : []

  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          ...ruleOptions
        }
      ]
    },
    plugins
  }
}

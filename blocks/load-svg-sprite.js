'use strict'

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

/**
 * Configuration of loader for svg sprites
 */
module.exports = ({ include, exclude, options = {} } = {}) => {
  const plugins = options.extract ? [new SpriteLoaderPlugin()] : []

  return {
    module: {
      rules: [{
        test: /\.svg$/,
        include,
        exclude,
        loader: 'svg-sprite-loader',
        options
      }]
    },
    plugins
  }
}

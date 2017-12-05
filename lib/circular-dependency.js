'use strict'

const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = (options = {}) => ({
  plugins: [
    new CircularDependencyPlugin({
      exclude: /(\\|\/)node_modules(\\|\/)/,
      failOnError: false,
      ...options
    })
  ]
})

/**
 * Group blocks of webpack configurations
 * @module webpack-kit-nimedev-ts
 */

const webpackKitBase = require('webpack-kit-nimedev-base')
const loadTS = require('./blocks/load-ts')

module.exports = Object.assign(webpackKitBase, { loadTS })

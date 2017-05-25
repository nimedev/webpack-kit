/**
 * Group blocks of webpack configurations
 * @module webpack-kit-nimedev
 */

'use strict'

const copyPlugin = require('./blocks/copy-plugin')
const devServer = require('./blocks/dev-server')
const extractVendor = require('./blocks/extract-vendor')
const extractCSS = require('./blocks/extract-css')
const htmlPlugin = require('./blocks/html-plugin')
const lintCSS = require('./blocks/lint-css')
const loadCSS = require('./blocks/load-css')
const loadFonts = require('./blocks/load-fonts')
const loadHtml = require('./blocks/load-html')
const loadImages = require('./blocks/load-images')
const loadJS = require('./blocks/load-js')
const loadSvgSprite = require('./blocks/load-svg-sprite')

module.exports = {
  copyPlugin,
  devServer,
  extractVendor,
  extractCSS,
  htmlPlugin,
  lintCSS,
  loadCSS,
  loadFonts,
  loadHtml,
  loadImages,
  loadJS,
  loadSvgSprite,
}

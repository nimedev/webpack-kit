/**
 * Group blocks of webpack configurations
 * @module webpack-kit-nimedev
 */

const devServer = require('./blocks/dev-server')
const extractVendor = require('./blocks/extract-vendor')
const extractCSS = require('./blocks/extract-css')
const htmlPlugin = require('./blocks/html-plugin')
const lintCSS = require('./blocks/lint-css')
const loadAssets = require('./blocks/load-assets')
const loadCSS = require('./blocks/load-css')
const loadFonts = require('./blocks/load-fonts')
const loadHtml = require('./blocks/load-html')
const loadImages = require('./blocks/load-images')
const loadJS = require('./blocks/load-js')
const loadSvgSprite = require('./blocks/load-svg-sprite')

module.exports = {
  devServer,
  extractVendor,
  extractCSS,
  htmlPlugin,
  lintCSS,
  loadAssets,
  loadCSS,
  loadFonts,
  loadHtml,
  loadImages,
  loadJS,
  loadSvgSprite
}

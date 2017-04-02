/**
 * Group blocks of webpack configurations
 * @module webpack-kit-nimedev
 */

const cleanPlugin = require('./blocks/clean-plugin')
const devServer = require('./blocks/dev-server')
const extractVendor = require('./blocks/extract-vendor')
const extractCSS = require('./blocks/extract-css')
const generateSourcemaps = require('./blocks/generate-sourcemaps')
const htmlPlugin = require('./blocks/html-plugin')
const lintCSS = require('./blocks/lint-css')
const loadAssets = require('./blocks/load-assets')
const loadCSS = require('./blocks/load-css')
const loadFonts = require('./blocks/load-fonts')
const loadHtml = require('./blocks/load-html')
const loadImages = require('./blocks/load-images')
const loadJS = require('./blocks/load-js')
const loadSvgSprite = require('./blocks/load-svg-sprite')
const minify = require('./blocks/minify')

module.exports = {
  cleanPlugin,
  devServer,
  extractVendor,
  extractCSS,
  generateSourcemaps,
  htmlPlugin,
  lintCSS,
  loadAssets,
  loadCSS,
  loadFonts,
  loadHtml,
  loadImages,
  loadJS,
  loadSvgSprite,
  minify
}

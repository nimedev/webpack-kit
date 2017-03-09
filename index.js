/**
 * Group parts of webpack configurations
 * @module webpack-parts-nimedev
 */

const cleanPlugin = require('./parts/clean-plugin')
const devServer = require('./parts/dev-server')
const extractBundles = require('./parts/extract-bundles')
const extractCSS = require('./parts/extract-css')
const generateSourcemaps = require('./parts/generate-sourcemaps')
const htmlPlugin = require('./parts/html-plugin')
const lintCSS = require('./parts/lint-css')
const loadAssets = require('./parts/load-assets')
const loadCSS = require('./parts/load-css')
const loadFonts = require('./parts/load-fonts')
const loadHtml = require('./parts/load-html')
const loadImages = require('./parts/load-images')
const loadJS = require('./parts/load-js')
const loadSvgSprite = require('./parts/load-svg-sprite')
const loadTS = require('./parts/load-ts')
const minify = require('./parts/minify')

module.exports = {
  cleanPlugin,
  devServer,
  extractBundles,
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
  loadTS,
  minify
}

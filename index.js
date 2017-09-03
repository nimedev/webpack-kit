/**
 * Group blocks of webpack configurations
 */

'use strict'

const bundleAnalyzer = require('./blocks/bundle-analyzer')
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
const loadSvgSprite = require('./blocks/load-svg-sprite')

module.exports = {
  bundleAnalyzer,
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
  loadSvgSprite,
}
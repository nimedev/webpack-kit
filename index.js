'use strict'

const bundleAnalyzer = require('./lib/bundle-analyzer')
const circularDependency = require('./lib/circular-dependency')
const copyPlugin = require('./lib/copy-plugin')
const devServer = require('./lib/dev-server')
const extractFonts = require('./lib/extract-fonts')
const extractPostCSS = require('./lib/extract-postcss')
const htmlPlugin = require('./lib/html-plugin')
const lintCSS = require('./lib/lint-css')
const loadFonts = require('./lib/load-fonts')
const loadImages = require('./lib/load-images')
const loadPostCSS = require('./lib/load-postcss')
const loadSvgSprite = require('./lib/load-svg-sprite')

module.exports = {
  bundleAnalyzer,
  circularDependency,
  copyPlugin,
  devServer,
  extractFonts,
  extractPostCSS,
  htmlPlugin,
  lintCSS,
  loadFonts,
  loadImages,
  loadPostCSS,
  loadSvgSprite
}

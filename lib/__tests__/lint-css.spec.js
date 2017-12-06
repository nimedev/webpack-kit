'use strict'

const test = require('ava')

const lintCSS = require('../lint-css')
const { pluginMacro } = require('./helpers/macros')

test('lintCSS output', pluginMacro, lintCSS())

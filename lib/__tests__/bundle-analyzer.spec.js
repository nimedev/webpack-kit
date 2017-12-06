'use strict'

const test = require('ava')

const bundleAnalyzer = require('../bundle-analyzer')
const { pluginMacro } = require('./helpers/macros')

test('bundleAnalyzer output', pluginMacro, bundleAnalyzer())

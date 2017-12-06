'use strict'

const test = require('ava')

const htmlPlugin = require('../html-plugin')
const { pluginMacro } = require('./helpers/macros')

test('htmlPlugin output', pluginMacro, htmlPlugin())

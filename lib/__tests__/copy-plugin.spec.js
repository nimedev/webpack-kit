'use strict'

const test = require('ava')

const copyPlugin = require('../copy-plugin')
const { pluginMacro } = require('./helpers/macros')

test('copyPlugin output', pluginMacro, copyPlugin())

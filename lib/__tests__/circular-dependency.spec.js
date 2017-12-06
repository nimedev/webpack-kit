'use strict'

const test = require('ava')

const circularDependency = require('../circular-dependency')
const { pluginMacro } = require('./helpers/macros')

test('circularDependency output', pluginMacro, circularDependency())

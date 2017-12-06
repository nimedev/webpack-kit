'use strict'

const test = require('ava')

const loadSvgSprite = require('../load-svg-sprite')
const { addPropertyMacro, overridePropertyMacro } = require('./helpers/macros')

test('loadSvgSprite output', (t) => {
  const result = loadSvgSprite()
  t.is(typeof result, 'object', 'should return a object')
  t.is(Object.keys(result).length, 2, 'should return a object with 2 properties')
  t.is(result.module.rules.length, 1, 'object', 'result.module.rules should be an array with 1 rule')
  t.true(Array.isArray(result.plugins), 'result.plugins should be an array')
  t.is(result.plugins.length, 0, 'result.plugins should have one plugin')
})

test('loadSvgSprite add option', addPropertyMacro, loadSvgSprite)

test('loadSvgSprite override option', overridePropertyMacro, loadSvgSprite)

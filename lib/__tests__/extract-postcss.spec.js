'use strict'

const test = require('ava')

const extractPostCSS = require('../extract-postcss')
const { addPropertyMacro, overridePropertyMacro } = require('./helpers/macros')

test('extractPostCSS output', (t) => {
  const result = extractPostCSS()
  t.is(typeof result, 'object', 'should return a object')
  t.is(Object.keys(result).length, 2, 'should return a object with 2 properties')
  t.is(result.module.rules.length, 1, 'object', 'result.module.rules should be an array with 1 rule')
  t.true(Array.isArray(result.plugins), 'result.plugins should be an array')
  t.is(result.plugins.length, 1, 'result.plugins should have one plugin')
})

test('extractPostCSS add option', addPropertyMacro, extractPostCSS)

test('extractPostCSS override option', overridePropertyMacro, extractPostCSS)

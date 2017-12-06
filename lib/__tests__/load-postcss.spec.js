'use strict'

const test = require('ava')

const loadPostCSS = require('../load-postcss')
const { addPropertyMacro, overridePropertyMacro } = require('./helpers/macros')

test('loadPostCSS output', (t) => {
  const result = loadPostCSS()
  t.is(typeof result, 'object', 'should return a object')
  t.is(Object.keys(result).length, 1, 'should return a object with one property')
  t.is(result.module.rules.length, 1, 'object', 'result.module.rules should be an array with 1 rule')
})

test('loadPostCSS add option', addPropertyMacro, loadPostCSS)

test('loadPostCSS override option', overridePropertyMacro, loadPostCSS)

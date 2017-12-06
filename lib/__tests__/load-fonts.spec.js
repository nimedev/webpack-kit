'use strict'

const test = require('ava')

const loadFonts = require('../load-fonts')
const { addPropertyMacro, overridePropertyMacro } = require('./helpers/macros')

test('loadFonts output', (t) => {
  const result = loadFonts()
  t.is(typeof result, 'object', 'should return a object')
  t.is(Object.keys(result).length, 1, 'should return a object with one property')
  t.is(result.module.rules.length, 1, 'object', 'result.module.rules should be an array with 1 rule')
})

test('loadFonts add option', addPropertyMacro, loadFonts)

test('loadFonts override option', overridePropertyMacro, loadFonts)

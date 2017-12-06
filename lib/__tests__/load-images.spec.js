'use strict'

const test = require('ava')

const loadImages = require('../load-images')
const { addPropertyMacro, overridePropertyMacro } = require('./helpers/macros')

test('loadImages output', (t) => {
  const result = loadImages()
  t.is(typeof result, 'object', 'should return a object')
  t.is(Object.keys(result).length, 1, 'should return a object with one property')
  t.is(result.module.rules.length, 1, 'object', 'result.module.rules should be an array with 1 rule')
})

test('loadImages add option', addPropertyMacro, loadImages)

test('loadImages override option', overridePropertyMacro, loadImages)

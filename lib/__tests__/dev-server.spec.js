'use strict'

const test = require('ava')

const devServer = require('../dev-server')

const defaultOptions = {
  contentBase: './src',
  open: true,
  historyApiFallback: true,
  hot: true,
  inline: true,
  stats: 'errors-only'
}

test('devServer output', (t) => {
  const result = devServer()
  t.is(typeof result, 'object', 'should return a object')
  t.is(Object.keys(result).length, 2, 'should return a object with 2 properties')
  t.deepEqual(result.devServer, defaultOptions, 'result.devServer should be an object with default options')
  t.true(Array.isArray(result.plugins), 'result.plugins should be an array')
  t.is(result.plugins.length, 1, 'result.plugins should have one plugin')
})

test('devServer add options', (t) => {
  const options = { foo: 'foo' }
  const result = devServer(options)
  const expected = Object.assign({}, defaultOptions, options)
  t.deepEqual(result.devServer, expected, 'should add foo property to devServer options')
})

test('devServer override options', (t) => {
  const options = {
    contentBase: './',
    open: false
  }
  const result = devServer(options)
  const expected = Object.assign({}, defaultOptions, options)
  t.deepEqual(result.devServer, expected, 'should override some properties of devServer options')
})

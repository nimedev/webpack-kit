'use'

const pluginMacro = (t, result) => {
  t.is(typeof result, 'object', 'should return a object')
  t.is(Object.keys(result).length, 1, 'should return a object with 1 property')
  t.true(Array.isArray(result.plugins), 'result.plugins should be an array')
  t.is(result.plugins.length, 1, 'result.plugins should have one plugin')
}

const addPropertyMacro = (t, func) => {
  const options = { foo: 'foo' }
  const result = func(options)
  const expected = result.module.rules[0]
  t.is(expected.foo, options.foo, 'should add a foo property to rule')
}

const overridePropertyMacro = (t, func) => {
  const options = { test: /\.ext$/ }
  const result = func(options)
  const expected = result.module.rules[0]
  t.is(expected.test, options.test, 'should override test property of the rule')
}

module.exports = {
  pluginMacro,
  addPropertyMacro,
  overridePropertyMacro
}

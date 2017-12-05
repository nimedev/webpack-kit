# webpack-kit-nimedev
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/webpack-kit-nimedev.svg
[npm-url]: https://npmjs.org/package/webpack-kit-nimedev

> Base configuration blocks to use in [webpack config](https://webpack.js.org/configuration/).


## Installation

```sh
# Install webpack-kit-nimedev
$ npm i webpack-kit-nimedev -D
```

## Use

```js
const path = require('path')

const webpackKit = require('webpack-kit-nimedev')
const merge = require('webpack-merge')

// Webpack config object
module.exports = merge({
  // Loaders
  webpackKit.loadPostCSS({
    include: path.join(__dirname, 'src/app')
  }),

  // Plugins
  webpackKit.circularDependency()

  // Config webpack dev server
  webpackKit.devServer({
    port: 3010
  })
})
```

### Available blocks

  - [bundleAnalyzer](lib/bundle-analyzer.js)
  - [circularDependency](lib/circular-dependency.js)
  - [copyPlugin](lib/copy-plugin.js)
  - [devServer](lib/dev-server.js)
  - [extractFonts](lib/extract-fonts.js)
  - [extractPostCSS](lib/extract-postcss.js)
  - [htmlPlugin](lib/html-plugin.js)
  - [lintCSS](lib/lint-css.js)
  - [loadFonts](lib/load-fonts.js)
  - [loadImages](lib/load-images.js)
  - [loadPostCSS](lib/load-postcss.js)
  - [loadSvgSprite](lib/load-svg-sprite.js)


## [Contributing](CONTRIBUTING.md)


## [Changelog](CHANGELOG.md)


## [License](LICENSE.md)

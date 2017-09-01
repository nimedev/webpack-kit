# Change Log

## [12.0.6] - 2017-09-01

### Updated
- Upgrade dep: css-loader svg-sprite-loader.
- Upgrade devDep: eslint.


## [12.0.5] - 2017-08-25

### Updated
- Upgrade dep: svg-sprite-loader.
- Upgrade devDep: eslint-config-nimedev-base.


## [12.0.4] - 2017-08-20

### Updated
- Upgrade dep: css-loader svg-sprite-loader.
- Upgrade devDep: eslint webpack.


## [12.0.3] - 2017-08-12

### Updated
- Upgrade dep: html-loader svg-sprite-loader.
- Upgrade devDep: eslint webpack webpack-dev-server.


## [12.0.2] - 2017-08-06

### Updated
- Upgrade dep: html-webpack-plugin svg-sprite-loader.
- Upgrade devDep: eslint.


## [12.0.1] - 2017-07-29

### Updated
- Upgrade dep: html-loader stylelint-webpack-plugin svg-sprite-loader.
- Upgrade devDep: eslint stylelint webpack webpack-dev-server.


## [12.0.0] - 2017-07-17

### Added
- Add more option to extract-vendor block.

### Modified
- [Breaking change] Remove webpack parameter in dev-server and extract-vendor blocks.

### Updated
- Update engines versions.
- Upgrade peerDep: webpack.


## [11.0.3] - 2017-07-12

### Updated
- Install dependencies with npm@5.2.0.


## [11.0.2] - 2017-07-12

### Updated
- Upgrade dep: extract-text-webpack-plugin.
- Upgrade devDep: stylelint webpack.


## [11.0.1] - 2017-07-1

### Deleted
- Remove eslint from peerDependencies.


## [11.0.0] - 2017-07-10

### Updated dependencies
- [Breaking change] Update svg-sprite-loader.
- Upgrade devDep: eslint eslint-plugin-import webpack webpack-dev-server.


## [10.0.0] - 2017-07-05

### Deleted
- [Breaking change] Delete loadJS module.

### Updated
- Upgrade dep: stylelint-webpack-plugin.
- Upgrade devDep: eslint eslint-plugin-import stylelint.


## [9.2.1] - 2017-06-25

### Fixed
- Fix CHANGELOG file.


## [9.2.0] - 2017-06-25

### Deleted
- Remove pre-commit hook.

### Updated
- Upgrade dep: html-webpack-plugin stylelint-webpack-plugin.
- Upgrade devDep: eslint eslint-config-nimedev-base eslint-plugin-import.


## [9.1.0] - 2017-06-20

### Updated
- Upgrade dep: babel-loader eslint-loader postcss-loader url-loader.
- Upgrade devDep: stylelint webpack webpack-dev-server.


## [9.0.1] - 2017-06-11

### Updated
- Upgrade dep: css-loader extract-text-webpack-plugin file-loader style-loader.
- Upgrade devDep: babel-core eslint-config-nimedev-base stylelint.


## [9.0.0] - 2017-05-25

### Modified
- [Breaking change] change default value of contentBase in webpack-dev-server.
- Add contentBase in options of devServer block.

### Updated
- Upgrade devDep: eslint-config-nimedev-base eslint-plugin-import webpack.


## [8.0.0] - 2017-05-23

### Added
- Add copyPlugin block.

### Delete
- [Breaking Change] Remove load-assets block.

### Updated
- Upgrade dep: css-loader style-loader.
- Upgrade devDep: webpack.


## [7.0.2] - 2017-05-11

### Updated
- Upgrade dep: postcss-loader.
- Upgrade devDep: webpack.


## [7.0.1] - 2017-05-05

### Fixed
- Downgrade svg-sprite-loader.


## [7.0.0] - 2017-05-05

### Mofified
- Breaking: Add options to loadFont, loadImage and loadSvgSprite blocks.

### Updated
- Upgrade dep: babel-loader css-loader style-loader svg-sprite-loader.
- Upgrade devDep: babel-core eslint-config-nimedev-base webpack webpack-dev-server.


## [6.0.0] - 2017-04-04

### Modified
- Breaking: Use StyleLintPlugin in lintCSS block.


## [5.0.0] - 2017-04-04

### Added
- Add sortChunk function to htmlPlugin block.

### Deleted
- Breaking: remove cleanPlugin, generateSourcemaps and minify blocks.

### Updated
- Upgrade dep: file-loader.
- Upgrade devDep: babel-core and webpack.


## [4.1.0] - 2017-04-02

### Modified
- Use process.env.NODE_ENV to indicate when minify the CSS in loadCSS and extractCSS blocks.
- Add useExportsLoader option in loadCSS block to indicote if use style-loader or exports-loader.


## [4.0.1] - 2017-04-01

### Fixed
- Optional pass options in extractVendor block.


## [4.0.0] - 2017-04-01

### Modified
- Implement extractVendor instead extractBundles block.
- Update ExtractTextPlugin options in extract-css block.


## [3.0.0] - 2017-04-01

### Modified
- Move all to root project and use webpack-kit-nimedev package to publish.

### Deprecated
- Remove webpack-kit-nimedev-base and webpack-kit-nimedev-ts packages.


## [2.0.0] - 2017-03-09

### Added
- Implement webpack-kit-nimedev-base and webpack-kit-nimedev-ts packages.


## [1.2.0] - 2017-03-09

### Added
- Add test option to load-js module.


## [1.1.1] - 2017-03-09

### Modified

- Publish with npm instead yarn to solve missing file publication.


## [1.1.0] - 2017-03-09

### Modified
- Improve documentation.
- Remove webpack and webpack-dev-server from dependencies.


## [1.0.0] - 2017-03-09

* First release.

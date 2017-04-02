# Change Log

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

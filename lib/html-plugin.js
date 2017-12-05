'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')

const sortChunk = packages => (left, right) => {
  const leftIndex = packages.indexOf(left.names[0])
  const rightindex = packages.indexOf(right.names[0])
  if (leftIndex > rightindex) {
    return 1
  }
  if (leftIndex < rightindex) {
    return -1
  }
  return 0
}

module.exports = (options = {}, entryPoints = []) => ({
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: entryPoints.length > 0 ? sortChunk(entryPoints) : 'auto',
      ...options
    })
  ]
})

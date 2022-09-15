const path = require('path')

const { packageName } = require('./package.json')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: `${packageName}-[name]`,
    libraryTarget: 'umd',
    libraryExport: 'default',
    chunkLoadingGlobal: `webpackJsonp_${packageName}`
  }
}
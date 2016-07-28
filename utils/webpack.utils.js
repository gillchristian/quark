const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// eslint-disable-next-line no-use-before-define
module.exports = { getPlugins, getEntries }

/**
 * Returns the global variables
 *
 * @param {String}  enviroment
 * @returns {Object}  global variables
 */
function defineGlobals(enviroment) {
  return {
    'process.env.NODE_ENV': JSON.stringify(enviroment),
    __DEV__: enviroment === 'development',
    NODE_ENV: enviroment,
  }
}

/**
 * Production build specific plugins
 *
 * @param {Object}  globals to define
 * @returns {Array} plugins
 */
function prodPlugins(globals) {
  return [
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin(globals),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ]
}

/**
 * Development specific plugins
 *
 * @param {Object}  globals to define
 * @returns {Array} plugins
 */
function devPlugins(globals) {
  return [
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin(globals),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
}

/**
 * Returns the plugins according to the enviroment
 *
 * @param {Boolean}  is production
 * @return {Array}  webpack plugins instances
 */
function getPlugins(isProd) {
  const GLOBALS = defineGlobals(isProd ? 'production' : 'development')
  return isProd ? prodPlugins(GLOBALS) : devPlugins(GLOBALS)
}

/**
 * Returns the entries according to the enviroment
 *
 * @param {Boolean}  is production
 * @return {Array}  app entry files
 */
function getEntries() {
  return ['./src/index.js']
}

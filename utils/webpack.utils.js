import webpack from 'webpack'

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
 * Production specific plugins
 *
 * @param {Object}  globals to define
 * @returns {Array} plugins
 */
function prodPlugins(globals) {
  return [
    new webpack.DefinePlugin(globals),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ]
}

/**
 * Production specific plugins
 *
 * @param {Object}  globals to define
 * @param {Object}  globals to define
 * @returns {Array} plugins
 */
function devPlugins(globals) {
  return [
    new webpack.DefinePlugin(globals),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
}

/**
 * Returns the plugins according to the enviroment
 *
 * @param {Boolean}  is production
 * @return {Array}  webpack plugins instances
 */
export function getPlugins(isProd) {
  const GLOBALS = defineGlobals(isProd ? 'production' : 'development')
  return isProd ? prodPlugins(GLOBALS) : devPlugins(GLOBALS)
}
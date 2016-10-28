const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const rucksack = require('rucksack-css')
const { getPlugins, getEntries } = require('./utils/webpack.utils')

const enviroment = process.env.NODE_ENV
const isProd = enviroment === 'prod'

module.exports = {
  context: __dirname,
  entry: getEntries(isProd),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react', 'babel'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
      },
    ],
  },
  postcss: () => [
    rucksack({ autoprefixer: true }),
  ],
  plugins: getPlugins(isProd),
  debug: true,
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  colors: true,
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: 'localhost',
    port: process.env.PORT || 3000,
    contentBase: './public',
  },
}

import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import rucksack from 'rucksack-css'
import { getPlugins, getEntries } from './utils/webpack.utils'

const isProd = process.env.NODE_ENV === 'prod'
const plugins = getPlugins(isProd)

module.exports = {
  context: __dirname,
  entry: getEntries(isProd),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css', 'postcss', 'sass'),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
        },
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
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    ...plugins,
  ],
  debug: true,
  devtool: '#source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  colors: true,
}

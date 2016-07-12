import path from 'path'
import rucksack from 'rucksack-css'
import { getPlugins } from './utils/webpack.utils'

const isProd = process.env.NODE_ENV === 'prod'
const plugins = getPlugins(isProd)

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
    ],
  },
  postcss: () => [
    rucksack({ autoprefixer: true }),
  ],
  plugins,
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  colors: true,
}

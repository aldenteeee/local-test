import path from 'path'
import nodeExternals from 'webpack-node-externals'
//import webpack from 'webpack'
const webpack = require('webpack');

export default {
  mode: 'development',
  target: 'node',
  entry: {
    index: path.resolve(__dirname, '../src/app.js'),
  },
  output: {
    filename: 'bundle.js',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    ['transform-runtime', { "polyfill": false }],
    new webpack.ProvidePlugin(
      {
        jQuery: "jquery",
        $: "jquery",
      }
    ),
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  externals: [nodeExternals()],
}
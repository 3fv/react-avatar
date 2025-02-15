const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: './src/avatar.tsx',
  mode: 'production',
  output: {
    path: path.resolve('lib'),
    filename: 'react-avatar.js',
    library: 'reactAvatar',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        loader: 'babel-loader',
        test: /\.jsx$/,
        exclude: /node_modules/
      }, {
        loader: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/
      },
    ],
  },
  externals: {
    'react': 'react'
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CompressionPlugin({
      test: /\.js/
    }),
  ],
};

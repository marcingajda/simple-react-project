var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './app.jsx'
  },
  output: {
    path: 'build',
    filename: '[name]-bundle.js',
    publicPath: 'build/'
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {presets: ['es2015', 'react']}
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(png|jpg|gif|bmp)/,
        loader: "file"
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  devServer: {
    historyApiFallback: true
  }
};
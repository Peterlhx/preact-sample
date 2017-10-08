const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src',

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
}
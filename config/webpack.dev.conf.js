const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../dist/index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),

    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ],

  // enable Source Maps
  devtool: 'source-map',

  devServer: {
    contentBase: './src',

    // enable gzip compression:
    compress: true,

    // enable pushState() routing, as used by preact-router et al:
    historyApiFallback: true
  }
})
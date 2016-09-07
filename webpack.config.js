const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: './dist/js/bundle.js'
  },
  devServer: {
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [ 'es2015', 'react' ]
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  let devtool = 'eval-source-map';
  const plugins = [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ];

  if (env.NODE_ENV === 'production') {
    devtool = false;
    plugins.push(new UglifyJsPlugin({
      exclude: /node_modules/
    }));
    plugins.push(new CompressionPlugin({
      test: /\.js/
    }));
  }

  return {
    devtool,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js'
    },
    module: {
      loaders: [{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }]
    },
    plugins
  };
};
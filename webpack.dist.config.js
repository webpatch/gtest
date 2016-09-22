// "use strict";
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');
var extractCSS = new ExtractTextPlugin('[name].css', { allChunks: true });
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    'babel-polyfill',
    './src/index' // 定义程序入口文件
  ],
  output: {
    path: path.join(__dirname, 'dist'), // 输出文件路径
    publicPath: '',
    filename: 'bundle.js' // 输出文件名
  },
  module: {
    postLoaders: [
      {
        test: /\.jsx?$/, // 通过正则匹配js,jsx文件
        loaders: ['es3ify'], //IE8兼容
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/, // 通过正则匹配js,jsx文件
        exclude: /node_modules/, // 跳过 node_modules 目录
        include: path.join(__dirname, 'src'),
        loaders: ['babel-loader'] // 调用 babel进行es6->es5转换
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/'),
        loader: extractCSS.extract([
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          "postcss",
          'sass'
        ])
      }
    ]
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"' // 定义环境变量为生产发布模式
      }
    }),
    extractCSS,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
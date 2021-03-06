// "use strict";

var webpack = require('webpack');
var path = require('path');
module.exports = {
  devtool: 'cheap-module-inline-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:8000',
    'webpack/hot/only-dev-server',
    './src/index' // 定义程序入口文件
  ],
  output: {
    path: path.join(__dirname, 'dist'), // 输出文件路径
    publicPath: '/',
    filename: 'bundle.js' // 输出文件名
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // 通过正则匹配js,jsx文件
        exclude: /node_modules/, // 跳过 node_modules 目录
        loaders: ['babel'], // 调用 babel进行es6->es5转换,并且启用react热替换
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'src/css/'), // 跳过 node_modules 目录
        loaders: [
          "style",
          "css-loader?modules&sourceMap=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
          "sass?sourceMap"
        ]
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/css/'),
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 启用热替换插件
  ]
};

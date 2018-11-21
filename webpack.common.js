const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清空dist
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成dist中的html文件


module.exports = {
  entry: {
    index: ['react-hot-loader/patch', './src/index.js'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js', // 高速缓存
    chunkFilename: '[name].bundle.js', // 动态导入
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader', // 用URL-loader可以对css中的图片进行压缩
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // 自动清空dist重生
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({// 自动生成dist中的html文件（dist一般包括 html，boudlw，css（一般建议把css抽出） 三个文件）
      filename: 'index.html',
      template: './index.html', // 以该模板为例生成html
    }),
    new webpack.AutomaticPrefetchPlugin(),
  ],

};

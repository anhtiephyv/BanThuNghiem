
const webpack = require('webpack');

//require("bootstrap/less/bootstrap.less");
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        use: ['babel-loader'],
        test: /\.(js|jsx)$/,
        exclude: /node_modules/

      },
      {
        test: /\.less$/,
        use: [{
          loader: 'less-loader', options: {
            strictMath: true,
            noIeCompat: true
          }
        }]
      }
    ],
    
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const path = require('path');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath : '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.ejs$/,
        exclude: /(node_modules|bower_components)/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]'
        },
        
        use: [
          {
            loader: 'extract-loader'
          },
          {
            loader: "ejs-webpack-loader",
            options: {
              htmlmin: true
            }
          }
          ]
        }
          
        ]
},
  plugins: [
/*     new HtmlWebpackPlugin({  // HTMLS
      filename: 'jaja.html',
      template: 'src/views/pages/jaja.html',
      inject:'body'
    }) */
  ]
      
  };
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const path = require('path');


module.exports = {
  mode: 'production',
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
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.ejs$/,
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
    new webpack.ProvidePlugin(
    new HtmlWebpackPlugin(), // Default index.html
    new HtmlWebpackPlugin({  // HTMLS
      filename: 'datosEnvio.html',
      template: 'src/views/pages/datosEnvio.html'
    }))
  ]
      
  };
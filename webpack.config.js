const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.jsx'),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          "babel-loader",
          "@linaria/webpack-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Output Management',
     title: 'Development',
    }),
  ],
  devServer: {
    overlay: true,
    open: true
  },
};

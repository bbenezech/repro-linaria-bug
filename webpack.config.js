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
      title: 'Linaria bug reproduction https://github.com/callstack/linaria/issues/762',
    }),
  ],
  devServer: {
    overlay: true,
    open: true
  },
};

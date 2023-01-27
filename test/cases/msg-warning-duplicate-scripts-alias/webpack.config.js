const path = require('path');
const HtmlBundlerPlugin = require('../../../');

module.exports = {
  mode: 'production',
  devtool: false,

  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
  },

  resolve: {
    alias: {
      Scripts: path.join(__dirname, 'src/assets/scripts/'),
    },
  },

  entry: {
    index: './src/views/index.html',
  },

  plugins: [
    new HtmlBundlerPlugin({
      js: {
        filename: 'assets/js/[name].[contenthash:8].js',
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: HtmlBundlerPlugin.loader,
      },
    ],
  },
};

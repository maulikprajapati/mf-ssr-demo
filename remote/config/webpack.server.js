const { resolve } = require('path');
const { merge } = require('webpack-merge');
const shared = require('./webpack.shared');
const moduleFederationPlugin = require('./module-federation');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const server = merge(shared, {
  name: 'server',
  target: 'node',
  entry: ['@babel/polyfill', resolve(__dirname, '../server/index.ts')],
  output: {
    path: resolve(__dirname, '../dist/server'),
    filename: '[name].js',
    libraryTarget: 'commonjs-module',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    ...moduleFederationPlugin.server,
  ],
  stats: {
    colors: true,
  },
});

module.exports = server;

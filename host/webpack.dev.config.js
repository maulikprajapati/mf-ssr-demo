const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const { dependencies } = require('./package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const env = require('dotenv').config().parsed || {};

const envKeys = [];

Object.keys(env).forEach((key) => {
  envKeys[`process.env.${key}`] = JSON.stringify(env[key]);
});

const sharedDependencies = {};

Object.keys(dependencies).forEach((element) => {
  sharedDependencies[element] = {
    requiredVersion: dependencies[element],
    eager: false,
    singleton: true,
  };
});

module.exports = {
  entry: './src/index',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.[chunkhash].js',
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                sourceMap: false,
                noEmit: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin(envKeys),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      assets: './public/assets',
      hash: true,
      publicPath: '/',
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    preferAbsolute: true,
    alias: {
      lib: path.resolve(__dirname, 'src/lib/'),
      ui: path.resolve(__dirname, 'src/ui/'),
      providers: path.resolve(__dirname, 'src/providers/'),
      helpers: path.resolve(__dirname, 'src/helpers/'),
      'graphql-client': path.resolve(__dirname, 'src/graphql-client/'),
      process: 'process/browser',
    },
    roots: [path.resolve(__dirname, 'src')],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    fallback: {
      'SharedLib/*': [path.resolve(__dirname, '@mf-types/SharedLib/_types/')],
    },
  },
  target: 'web',
};

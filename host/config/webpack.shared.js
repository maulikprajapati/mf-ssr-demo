// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { join, resolve } = require("path");
const webpack = require("webpack");
const env = require("dotenv").config().parsed || {};

const envKeys = [];

Object.keys(env).forEach((key) => {
  envKeys[`process.env.${key}`] = JSON.stringify(env[key]);
});

module.exports = {
  entry: "../src/index",
  mode: "development",
  devServer: {
    historyApiFallback: true,
    hot: true,
    static: {
      directory: join(__dirname, "../public"),
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
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              cacheDirectory: false,
            },
          },
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                sourceMap: false,
                noEmit: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.DefinePlugin(envKeys),
    new CleanWebpackPlugin({
      verbose: true,
    }),
  ],
  resolve: {
    modules: [resolve(__dirname, "../node_modules")],
    preferAbsolute: true,
    alias: {
      lib: resolve(__dirname, "../src/lib/"),
      ui: resolve(__dirname, "../src/ui/"),
      providers: resolve(__dirname, "../src/providers/"),
      helpers: resolve(__dirname, "../src/helpers/"),
      "graphql-client": resolve(__dirname, "../src/graphql-client/"),
      process: "process/browser",
    },
    roots: [resolve(__dirname, "../src")],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  target: "web",
};

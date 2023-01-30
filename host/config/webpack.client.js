const { resolve } = require("path");
const { merge } = require("webpack-merge");
const shared = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = require("dotenv").config().parsed || {};

const cssRegex = /\.css$/i;
const sCssRegex = /\.s[ac]ss$/i;

const cssLoaders = [
  {
    loader: "style-loader",
  },
  {
    loader: "css-loader",
  },
];

module.exports = merge(shared, {
  name: "client",
  target: "web",
  entry: ["@babel/polyfill", resolve(__dirname, "../src/index.js")],
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: cssRegex,
        use: [...cssLoaders],
      },
      {
        test: sCssRegex,
        use: [
          ...cssLoaders,
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: resolve(__dirname, "../dist/client"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: `http://localhost:${env.PORT || "3000"}/static/`,
  },
  plugins: [
    moduleFederationPlugin.client,
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html",
    // }),
  ],
});

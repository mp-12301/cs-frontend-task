require("dotenv").config({ silent: true });

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    app: [path.resolve("src/index.jsx")],
  },

  output: {
    path: path.resolve("build"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.(png|jpg|gif)$/, use: "file-loader" },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file-loader?name=fonts/[name].[hash].[ext]",
      },
    ],
  },
};

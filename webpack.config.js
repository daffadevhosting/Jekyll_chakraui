const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./assets/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "_site/assets/js"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./_layouts/default.html",
      filename: "../_layouts/default.html",
    }),
  ],
};
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/components/index.js",
  output: {
    filename: "@COMP_NAME.js",
    path: path.resolve(__dirname, "dist"),
    filename: "@COMP_NAME.js",
    library: "@COMP_NAME",
    libraryTarget: "umd"
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "/",
    historyApiFallback: true,
    compress: true,
    port: 9000
  }
};

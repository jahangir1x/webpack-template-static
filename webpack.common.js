const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      // {
      //   test: /\.(svg|png|jpg|gif)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[name]-[hash].[ext]",
      //       outputPath: "imgs"
      //     }
      //   }
      // }
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
    ]
  },
  // output: {
  //   publicPath: "/",
  // },
};
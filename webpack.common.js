module.exports = {
  target: "web",
  entry: {
    main: "./src/js/index.js",
    vendor: "./src/js/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};
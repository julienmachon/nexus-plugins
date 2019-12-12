const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (path, externals = {}) => ({
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path,
    libraryTarget: "system"
  },
  externals,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@vue/babel-preset-app"]
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "vue-style-loader" }, { loader: "css-loader" }]
      },
      { parser: { system: false } }
    ]
  },
  plugins: [new VueLoaderPlugin()]
});

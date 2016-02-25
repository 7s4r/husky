var webpack = require("webpack")
var path = require("path")
var autoprefixer = require("autoprefixer")

module.exports = {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, "src/javascripts/main"),
    "file?name=index.html!jade-html!./src/html/index.jade"
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      {
        test: /\.jade$/,
        loader: "jade"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel!eslint"
      },
      {
        test: /\.scss$/,
        loader: "style!css!autoprefixer?browsers=last 2 version!sass"
      },
      {
        test: /\.json/,
        loader: "json"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    root: path.resolve(__dirname, ""),
    extensions: ["", ".js", ".scss", ".json"],
    modulesDirectories: ["src", "node_modules"]
  }
}
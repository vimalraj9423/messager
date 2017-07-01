var path = require("path")

module.exports = {
  entry: {
    home: "./dist/features/city/components/HomeClient.js",
    gods: "./dist/features/gods/components/GodClient.js",
    swipeable: "./dist/components/Swipeable.js"
  },
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "[name].bundle.js"
  },
  devtool: "cheap-module-source-map",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
}

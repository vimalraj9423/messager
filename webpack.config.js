var path = require("path")

module.exports = {
  entry: {
    home: "./dist/components/HomeClient.js",
    gods: "./dist/components/GodClient.js"
  },
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "[name].bundle.js"
  },
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

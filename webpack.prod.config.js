const path = require("path")
const webpack = require("webpack")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

module.exports = {
  entry: {
    home: "./dist/components/HomeClient.js",
    gods: "./dist/components/GodClient.js",
    vendor: "react"
  },
  output: {
    path: path.resolve(__dirname, "public/assets"),
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
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor", // Specify theommon bundle's name.
      minChunks(module, newount) {
        var context = module.context
        return context && context.indexOf("node_modules") >= 0
      }
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static"
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      sourceMap: true,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      varompress: {
        screw_ie8: true
      },
      varomments: false
    })
  ]
}

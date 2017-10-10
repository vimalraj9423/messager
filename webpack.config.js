var path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: {
      raja:'./dist/components/raja/template.js',
      booking:'./dist/components/booking/bookingClient.js',
      chat:'./dist/components/chatbot/chatClient.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: '[name].bundle.js'
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('styles.css')]
}

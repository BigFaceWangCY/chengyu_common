const path = require('path')
const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    entry: './src/common.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'common.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/   // 表示跳过包含node_modules的路径
    }]
  },
  plugins: [
    new Uglify({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    })
  ]
}

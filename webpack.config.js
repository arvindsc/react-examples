var resolve = require('path').resolve
module.exports = () => {
  const config = {
    context: resolve('src'),
    entry: './main.js',

    stats: {
      colors: true,
      reasons: true,
      chunks: true
    },
    output: {
      filename: 'bundle.js',
      path: resolve('dist'),
      publicPath: '/dist/'
    },
    module: {
      rules: [{
        exclude: '/node_modules/',
        test: /\.js$/,
        loader: 'babel-loader'
      }]
    }
  }
  return config
}

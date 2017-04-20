var resolve = require('path').resolve
module.exports = () => {
  const config = {
    context: resolve('src'),
    entry: './main.js',
    output: {
      filename: 'bundle.js',
      path: resolve('dist'),
      publicPath: '/dist/'
    }
  }
  return config
}

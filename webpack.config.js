var resolve = require('path').resolve
module.exports = () => {
  const config = {
    context: resolve('src'),
    entry: './main.js',
    devServer: {
      publicPath: '/dist/'
    },
    output: {
      filename: 'bundle.js',
      path: resolve('dist'),
      publicPath: '/dist/'
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true
    },
    module: {
      rules: [{
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/

      },
      {
        exclude: '/node_modules/',
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      }]
    }
  }
  return config
}

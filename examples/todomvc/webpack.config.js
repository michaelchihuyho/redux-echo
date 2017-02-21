var path = require('path')
  , CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'client/static'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        include: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        exclude: /node_modules/
      },
      {
        include: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanPlugin(['*'], {
      root: path.join(__dirname, 'client/static')
    })
  ]
}

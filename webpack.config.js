module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.svg|gif|png|eot|woff|ttf$/,
        use: [
          { loader: 'url-loader' }
        ]
      }
    ]
  }
};
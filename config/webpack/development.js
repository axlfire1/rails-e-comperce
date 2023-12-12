process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

//environment.config.merge({ devtool: 'inline-source-map' })

//environment.config.set('devServer', {
  //writeToDisk: true,
//})

environment.loaders.append('babel', {
  test: /\.js$/,
  use: {
    loader: 'babel-loader',
    options: {
      // your loader options
    },
  },
});

module.exports = environment.toWebpackConfig()

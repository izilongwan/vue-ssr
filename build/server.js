const { merge}           = require('webpack-merge'),
      base               = require('./base'),
      VueSSRServerPlugin = require('vue-server-renderer/server-plugin')


module.exports = merge(base, {
  target: 'node',

  devtool: 'source-map',

  output: {
    libraryTarget: 'commonjs2',
  },

  entry: {
    server: ['babel-polyfill', '/src/entry-server.js']
  },

  plugins: [
    new VueSSRServerPlugin()
  ]
})

const { merge }          = require('webpack-merge'),
      base               = require('./base'),
      VueSSRClientPlugin = require('vue-server-renderer/client-plugin'),
      HtmlWebpackPlugin  = require('html-webpack-plugin')

module.exports = merge(base, {
  entry: {
    client: ['babel-polyfill', '/src/entry-client.js']
  },

  output: {
    // clean: true,
  },

  plugins: [
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      template: '/public/index.html'
    })
  ],

  optimization: {
    // 将 webpack 运行时分离到一个引导 chunk 中，
    // 以便可以在之后正确注入异步 chunk。
    // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
    splitChunks: {
      name: 'manifest',
      minChunks: Infinity
    }
  },

  devServer: {
    port: 3000,
  }
})

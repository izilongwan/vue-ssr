const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',

  output: {
    filename: '[name].js',
    publicPath: '/' // 读取文件路径
  },

  resolve: {
    alias: {
      '@@': '/',
      '@': '/src',
    },

    extensions: ['.js', '.vue', '.json']
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@vue/babel-preset-jsx'],
              plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 20,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[ext]'
                }
              }
            }
          }
        ],
        exclude: /node_modules/,
      },
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ]
}

webpack           = require('webpack')
BrowserSyncPlugin = require('browser-sync-webpack-plugin')
autoprefixer      = require('autoprefixer')
precss            = require('precss')

env          = require('./env')

webpackConfig = {
  #context: __dirname + "/app",
  entry:
    app: './src/app.coffee'
    #mobile: './src/mobile.js'
  output:
    filename: '[name].js'
    path: __dirname + '/built'

  resolve:
    extensions: ['', '.js', '.coffee']

  plugins: [
    # new webpack.ProvidePlugin({
    #   "window.angular" : "angular"
    # })
    new BrowserSyncPlugin({
      host: 'localhost'
      port: 3000
      server:
        baseDir: 'built'
    })
  ]

  debug: true
  devtool: '#source-map'

  module:
    loaders: [
      {
        test: /\.coffee$/
        #include: []
        loader: "coffee"
      }
      {
        test: /\.jade$/
        #loader: 'jade?pretty=true'
        loader: "html!jade-html"
      }
      {
        test: /\.html$/
        loader: 'html'
      }
      {
        test:     /\.css$/
        loader:   "style!css"
      }
      {
        test:     /\.scss$/
        loaders:   ["style", "css", "postcss", "sass"]
      }
      {
        test: /\.jpg$/
        loader: "file-loader"
      }
		  {
        test: /\.png$/
        loader: "url-loader?limit=10000&mimetype=image/png"
      }
    ]

  htmlLoader:
    minimize: false
    ignoreCustomFragments: [/\{\{.*?}}/]

  jadeLoader:
    pretty: true,

  # postcss-loader plugin config
  postcss: () ->
    [autoprefixer, precss]

}

if env.isProduction
  webpackConfig.plugins.push(
      new webpack.optimize.UglifyJsPlugin()
  )

module.exports = webpackConfig


var webpack = require('webpack');
require('es6-promise').polyfill();

var npm = require("../package.json");

module.exports = {

  entry: __dirname + '/../src/js/plugin.js',

  output: {
    path: __dirname + '/../dist/',
    publicPath: '../dist/',
    filename: 'vue2-autocomplete.js',
    libraryTarget: "umd",
    library: "Vue2Autocomplete"
  },

  externals: {
    "vue": "Vue"
  },


  module: {

    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },

      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },

  plugins: [

    new webpack.BannerPlugin((
      [
        "Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)",
        "\n",
        "Licensed Under MIT (http://opensource.org/licenses/MIT)",
        "\n",
        "\n",
        "Vue 2 Autocomplete @ Version "+ npm.version,
        "\n"
      ])
      .join(",")),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

  ]

};

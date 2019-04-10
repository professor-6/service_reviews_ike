var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      },

      // {
      //   test: /\.css$/,
      //   loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      // }
//
      {
        test: /\.css/,
        use : [
          'style-loader',
           'css-loader',
        ]
      },

      // {
      //   test: /\.css$/,
      //   loaders: [
      //       'style-loader?sourceMap',
      //       'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
      //   ]
    // }

      //  {
      //   test: /\.css/,
      //   use: [
      //     {
      //       loader: require.resolve('css-loader'),
      //       options: {
      //         importLoaders: 1,
      //         modules: true,
      //         localIdentName: "[name]__[local]___[hash:base64:5]"
      //       },
      //     }
      //   ]
      // },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader'
      // },

      // {
      //   test: /\.css$/,
      //   loader: 'css-loader',
      //   query: {
      //     modules: true,
      //     localIdentName: '[name]__[local]___[hash:base64:5]'
      //   }
      // }

    ]
  }
};

const path=require('path');

const combineLoaders = require('webpack-combine-loaders');

module.exports = {

    entry: [

      './src/index.js'

    ],

    output: {

      path: path.join(__dirname,'public'),

      publicPath: '/',

      filename: 'bundle.js'

    },

    module: {

       

      loaders: [{

          exclude: /node_modules/,

          loader: 'babel',

          query: {

              presets: ['react', 'es2015', 'stage-1']

          }

      },
      {
        test: /\.css$/,
        include: [
            path.resolve(__dirname, "not_exist_path")
        ],
        loader: "style!css"
    },

      {

        test: /\.scss$/,

        loader: 'style!css!resolve-url!sass?sourceMap'

      },

    { test: /\.json$/, loader: 'json-loader' }

      ]

  },

    resolve: {

      extensions: ['', '.js', '.jsx','.json','.css'], "root": __dirname

    },

    devServer: {

      historyApiFallback: true,

      contentBase: './'

    }

  };

 
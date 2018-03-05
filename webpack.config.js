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

        test: /\.scss/,
        loader: 'css-loader!sass-loader?outputStyle=compressed!postcss-loader'

    },
    { test: /\.json$/, loader: 'json-loader' }
      ],
  },
    resolve: {
      extensions: ['', '.js', '.jsx','.json']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
  };
  
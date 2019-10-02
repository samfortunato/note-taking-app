const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules : [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /sketches/],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

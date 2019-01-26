/* eslint-disable import/no-extraneous-dependencies */

import { src, dest } from 'gulp';
import stream from 'webpack-stream';
import Dotenv from 'dotenv-webpack';
import webpack from 'webpack';
import { scripts as paths } from '../paths';

const options = {
  output: {
    filename: 'livestream-control.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  externals: {
    jquery: 'jQuery',
    $: 'jQuery'
  },
  stats: {
    warnings: false
  },
  plugins: [new Dotenv()]
};

const make = () =>
  src(paths.src)
    .pipe(stream(options, webpack))
    .pipe(dest(paths.dest));

make.displayName = 'create:scripts';
export default make;

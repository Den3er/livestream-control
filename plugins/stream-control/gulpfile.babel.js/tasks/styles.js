/* eslint-disable import/no-extraneous-dependencies, global-require */

import { src, dest } from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import { styles as paths } from '../paths';

const options = {
  sass: {
    outputStyle: 'compressed'
  },
  postCSS: [
    // prettier-ignore
    require('css-mqpacker'),
    require('autoprefixer')
  ]
};

const make = () =>
  src(paths.src)
    .pipe(sass(options.sass).on('error', sass.logError))
    .pipe(postcss(options.postCSS))
    .pipe(dest(paths.dest));

make.displayName = 'create:styles';
export default make;

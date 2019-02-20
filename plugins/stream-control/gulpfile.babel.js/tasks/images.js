/* eslint-disable import/no-extraneous-dependencies */

import { src, dest } from 'gulp';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import { images as paths } from '../paths';

const make = () =>
  src(paths.src)
    .pipe(changed(paths.dest))
    .pipe(imagemin())
    .pipe(dest(paths.dest));

make.displayName = 'create:images';
export default make;

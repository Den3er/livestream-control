/* eslint-disable import/no-extraneous-dependencies */

import { series, parallel, task } from 'gulp';
import clean from './tasks/clean';
import styles from './tasks/styles';
import scripts from './tasks/scripts';
import images from './tasks/images';
import watch from './tasks/watch';

const assets = parallel(styles, scripts, images);
task('default', series(clean, assets, watch));

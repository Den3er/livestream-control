/* eslint-disable import/no-extraneous-dependencies, global-require */

import { watch } from 'gulp';
import { watch as paths } from '../paths';

function make() {
  const { styles, scripts, images } = paths;

  watch(styles, require('./styles').default);
  watch(scripts, require('./scripts').default);
  watch(images, require('./images').default);
}

make.displayName = 'tasks-watcher';
export default make;

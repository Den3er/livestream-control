/* eslint-disable import/no-extraneous-dependencies */

import del from 'del';
import { clean as paths } from '../paths';

const task = () => del(paths);
task.displayName = 'clean:all';
export default task;

import { resolve } from 'path';

export const clean = [
  // prettier-ignore
  resolve('side-admin/assets')
];

export const styles = {
  src: [
    // prettier-ignore
    resolve('side-admin/_assets/scss/**/*.scss'),
    resolve('side-admin/_assets/js/**/*.scss')
  ],
  dest: file => resolve(file.base, '../../assets/css')
};

export const scripts = {
  src: resolve('side-admin/_assets/js/index.js'),
  dest: resolve('side-admin/assets/js')
};

export const images = {
  src: resolve('side-admin/_assets/images/**/*.{jpg,jpeg,png}'),
  dest: resolve('side-admin/assets/images')
};

export const watch = {
  styles: [
    // prettier-ignore
    'side-admin/_assets/scss/**/*.scss',
    'side-admin/_assets/js/**/*.scss'
  ],
  scripts: 'side-admin/_assets/js/**/*.{js,hbs}',
  images: 'side-admin/_assets/images/**/*.{jpg,jpeg,png}'
};

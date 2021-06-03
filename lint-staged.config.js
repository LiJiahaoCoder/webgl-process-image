'use strict';

module.exports = {
  '**/*.js?(x)': (filenames) => [
    `cross-env NODE_ENV=production eslint --fix ${filenames.join(' ')}`,
  ],
  '**/*.ts?(x)': (filenames) => [
    `cross-env NODE_ENV=production eslint --fix ${filenames.join(' ')}`,
    'tsc',
  ],
  '**/*.less': (filenames) => [
    `cross-env NODE_ENV=production stylelint --fix ${filenames.join(' ')}`,
  ],
};

const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-elem/runtime.js',
    './dist/angular-elem/polyfills.js',
    './dist/angular-elem/scripts.js',
    './dist/angular-elem/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/angular-elem.js');
  await fs.copyFile(
    './dist/angular-elem/styles.css',
    'elements/styles.css'
  );
})();
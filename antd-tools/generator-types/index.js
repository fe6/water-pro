const path = require('path');
const pkg = require('../../package.json');
const { parseAndWrite } = require('./lib/index.js');
const rootPath = path.resolve(__dirname, '../../');

try {
  parseAndWrite({
    version: pkg.version,
    name: 'types',
    path: path.resolve(rootPath, './v2-doc/src/docs'),
    // default match lang
    test: /en-US\.md/,
    outputDir: path.resolve(rootPath, './vetur'),
    tagPrefix: 'a-',
  });
  // eslint-disable-next-line no-console
  console.log(chalk.blue.bold('💦 [water tool] generator types success'));
} catch (e) {
  // eslint-disable-next-line no-console
  console.error('generator types error', e);
}

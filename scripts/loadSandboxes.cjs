#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const {promisify} = require('util');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const glob = promisify(require('glob'));

// TODO: add a usage guide or help command

const SANDBOX_GLOB = '**/*.sandbox.+(js|jsx|tsx)';
const DEFAULT_OUTPUT_PATH = 'sandboxFiles.js';

const projectDir = path.join(__dirname, '../../..');
const outputIndex = process.argv.findIndex((entry) =>
  ['-o', '--output'].includes(entry),
);
const outputPath =
  outputIndex !== -1 ? process.argv[outputIndex + 1] : DEFAULT_OUTPUT_PATH;

/**
 * Extracts the module name from a specified file path.
 *
 * example:
 *  - input: '/some/path/to/Component.sandbox.js'
 *  - output: 'Component'
 */
function extractModuleName(filePath) {
  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const moduleName = fileName.split('.')[0];

  return moduleName;
}

/**
 * Traverses upward from the specified file path until a package.json file is reached.
 */
async function findClosestPackageJson(filePath) {
  let info = null;
  let dir = path.join(projectDir, path.dirname(filePath));

  while (info === null) {
    try {
      const packagePath = path.join(dir, 'package.json');
      const packageJson = await readFile(packagePath);

      info = JSON.parse(packageJson);
    } catch {
      dir = path.join(dir, '..');
    }
  }

  return {info, dir};
}

(async () => {
  const {info: mainPackage} = await findClosestPackageJson(projectDir);
  const sandboxFilePaths = await glob(SANDBOX_GLOB, {
    ignore: ['node_modules/**'],
  });
  const sandboxFiles = [];
  const loaderResolvers = mainPackage.sandbox?.loader?.resolve ?? {};

  for (const filePath of sandboxFilePaths) {
    const {info: pckg, dir} = await findClosestPackageJson(filePath);

    sandboxFiles.push({
      path: filePath,
      name: extractModuleName(filePath),
      resolvedPath:
      pckg.name === mainPackage.name
          ? Object.keys(loaderResolvers).reduce(
              (prev, curr) => prev.replace(curr, loaderResolvers[curr]),
              filePath,
            )
          : filePath.replace(path.relative(projectDir, dir), pckg.name),
    });
  }

  const outputModule = `${sandboxFiles
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((file) => `import ${file.name} from '${file.resolvedPath}';`)
    .join('\n')}

const sandboxFiles = [
  ${sandboxFiles.map((file) => `${file.name}`).join(',\n  ')}
];

export default sandboxFiles;
`;

  writeFile(outputPath, outputModule);
})();

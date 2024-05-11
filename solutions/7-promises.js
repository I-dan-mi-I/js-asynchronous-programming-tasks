import fsp from 'fs/promises';

// BEGIN
/**
 * @param {string} filePath
 */
export const reverse = (filePath) =>
    fsp.readFile(filePath, 'utf-8')
        .then((data) => fsp.writeFile(filePath, data.split("\n").reverse().join("\n"), 'utf-8'))

// END
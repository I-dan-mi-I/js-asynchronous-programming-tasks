import fs from 'fs';

// BEGIN
/**
 * @param {string} filePath
 * @param {any} data
 * @param {function} callback
 */
const write = (filePath, data, callback) =>
    fs.writeFile(filePath, data, 'utf-8', callback);

export default write;
// END
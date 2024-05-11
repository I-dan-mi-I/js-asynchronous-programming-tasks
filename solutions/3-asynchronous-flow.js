import fs from 'fs';

// BEGIN
/**
 * @param {string} filePath_1
 * @param {string} filePath_2
 * @param {function} callback
 */
export const compareFileSizes = (filePath_1, filePath_2, callback) =>
    fs.stat(filePath_1, (_err, _stats) => {
        fs.stat(filePath_2, (err, stats) => {
            callback(null, Math.sign(_stats.size - stats.size));
        })
    })
// END
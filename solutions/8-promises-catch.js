import fsp from 'fs/promises';

// BEGIN
/**
 * @param {string} filePath
 */
export const touch = (filePath) =>
    fsp.access(filePath).catch(() => fsp.writeFile(filePath, ''));

// END
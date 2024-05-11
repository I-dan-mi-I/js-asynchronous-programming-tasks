import fsp from 'fs/promises';

// BEGIN
/**
 * @param {string[]} paths
 */
export const getTypes = (paths) => {

    let promises = paths.map((path) => {
        return fsp.stat(path)
            .then((stat) => stat.isFile() ? 'file' : 'directory')
            .catch(() => null);
    })

    return Promise.all(promises);
}

getTypes(['undefined']).then(console.log)
// END
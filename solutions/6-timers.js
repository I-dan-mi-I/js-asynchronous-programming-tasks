import fs from 'fs';

// BEGIN
/**
 * @param {string} filePath
 * @param {number} interval
 * @param {function} callback
 */
const watch = (filePath, interval, callback) => {
    let lastEdit;

    const id = setInterval(() => {
        let stats;
        try {
            stats = fs.statSync(filePath);
        } catch (err) {
            clearInterval(id);
            return callback(err);
        }

        if (stats.mtimeMs !== lastEdit) {
            if (lastEdit !== undefined)
                callback(null);
            lastEdit = stats.mtimeMs;
        }
    }, interval);

    return id;
}

export default watch;
// END

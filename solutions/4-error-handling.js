import fs from 'fs';

// BEGIN
/**
 * @param {string} oldPath
 * @param {string} newPath
 * @param {function} callback
 */
export const move = (oldPath, newPath, callback) => {
    fs.readFile(oldPath, (__err, data) => {
        if (__err) {
            callback(__err);
            return;
        }

        fs.writeFile(newPath, data, (_err) => {
            if (_err) {
                callback(_err);
                return;
            }

            fs.unlink(oldPath, (err) => {
                callback(err);
            })
        })
    })
}
// END

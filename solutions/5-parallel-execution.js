import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
/**
 * @param {string} dir
 * @param callback
 */
export const getDirectorySize = (dir, callback) => {
    fs.readdir(dir, (err1, files) => {
            if (err1) {
                callback(err1);
                return;
            }

            async.map(files, (file, callback) => {
                    fs.stat(path.join(dir, file), (err2, stat) => {
                        if (err2) {
                            return callback(err2);
                        }
                        if (stat.isFile())
                            callback(null, stat.size);
                        else
                            callback(null, 0);
                    })
                },
                (err3, sizes) => {
                    callback(err3, _.sumBy(sizes));
                }
            )
        }
    )
}
// END

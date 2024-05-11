import fsp from 'fs/promises';

// BEGIN
/**
 * @param {string} filepath1
 * @param {string} filepath2
 */
export const exchange = async (filepath1, filepath2) => {
    let promise1 = fsp.readFile(filepath1);
    let promise2 = fsp.readFile(filepath2);

    const [data1, data2] = await Promise.all([promise1, promise2]);

    promise1 = fsp.writeFile(filepath2, data1);
    promise2 = fsp.writeFile(filepath1, data2);

    await Promise.all([promise1, promise2]);
}
// END
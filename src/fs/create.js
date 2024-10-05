import * as fs from 'fs/promises';
import * as path from 'path'

const create = async () => {
    const targetFilePath = path.join(import.meta.dirname, 'files', 'fresh.txt');
    const targetFileContent = 'I am fresh and young';

    fs.writeFile(targetFilePath, targetFileContent, {encoding: 'utf-8', flush: true, flag: 'wx'}).catch((reason) => {
        if (reason.code === 'EEXIST'){
            throw new Error('FS operation failed')
        }

        throw reason;
    })
};

await create();
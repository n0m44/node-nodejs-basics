import * as fs from 'fs/promises';
import * as path from 'path'
import { existsSync } from 'fs';

const copy = async () => {
    const sourceFolder = path.join(import.meta.dirname, 'files');
    const targetFolder = path.join(import.meta.dirname, 'files_copy');

    if (existsSync(targetFolder)){
        throw new Error('FS operation failed');
    }

    fs.stat(sourceFolder).catch((reason) => {
        if (reason.code === 'ENOENT'){
            throw new Error('FS operation failed')
        }

        throw reason;
    })

    fs.cp(sourceFolder, targetFolder, {recursive: true, errorOnExist: false});
};

await copy();

import * as fs from 'fs/promises';
import * as path from 'path'
import { existsSync } from 'fs';

const remove = async () => {
    const targetFilePath = path.join(import.meta.dirname, 'files', 'fileToRemove.txt');

    if (!existsSync(targetFilePath)){
        throw new Error('FS operation failed');
    }

    fs.rm(targetFilePath, { force: true })
};

await remove();
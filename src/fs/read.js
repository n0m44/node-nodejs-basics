import * as fs from 'fs/promises';
import * as path from 'path'
import { existsSync } from 'fs';

const read = async () => {
    const targetFilePath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');

    if (!existsSync(targetFilePath)){
        throw new Error('FS operation failed');
    }

    fs.readFile(targetFilePath, {encoding: 'utf-8'}).then(console.log)
};

await read();
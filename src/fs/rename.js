import * as fs from 'fs/promises';
import * as path from 'path'
import { existsSync } from 'fs';

const rename = async () => {
    const sourceFilePath = path.join(import.meta.dirname, 'files', 'wrongFilename.txt');
    const targetFilePath = path.join(import.meta.dirname, 'files', 'properFilename.md');

    if (!existsSync(sourceFilePath) || existsSync(targetFilePath)){
        throw new Error('FS operation failed')
    }

    fs.rename(sourceFilePath, targetFilePath)
};

await rename();
import * as fs from 'fs/promises';
import * as path from 'path'
import { existsSync } from 'fs';

const list = async () => {
    const targetDirectoryPath = path.join(import.meta.dirname, 'files');

    if (!existsSync(targetDirectoryPath)) {
        throw new Error('FS operation failed');
    }

    fs
      .readdir(targetDirectoryPath, {encoding: 'utf-8', recursive: true, withFileTypes: true})
      .then((direntArray) => {
        direntArray.forEach((dirent) => {
            console.log(path.join(dirent.parentPath, dirent.name))
        })
      });
};

await list();
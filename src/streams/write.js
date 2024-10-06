import * as fs from 'fs';
import * as path from 'path';

const write = async () => {
    const targetFilePath = path.join(import.meta.dirname, 'files', 'fileToWrite.txt');

    const writeStream = fs.createWriteStream(targetFilePath, { flush: true, encoding: 'utf-8' });

    process.stdin.pipe(writeStream);
};

await write();
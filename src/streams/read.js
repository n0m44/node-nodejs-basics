import * as fs from 'fs';
import * as path from 'path'
import * as stream from 'stream/promises'

const read = async () => {
    const targetFilePath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');

    const readStream = fs.createReadStream(targetFilePath);

    stream.pipeline(readStream, process.stdout);
};

await read();
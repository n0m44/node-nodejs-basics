import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';
import * as stream from 'stream/promises';

const compress = async () => {
    const sourceFilePath = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');
    const targetFilePath = path.join(import.meta.dirname, 'files', 'archive.gz');

    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(targetFilePath, { flush: true });

    stream.pipeline(readStream, zlib.createGzip(), writeStream);
};

await compress();
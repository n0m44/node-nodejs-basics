import * as fs from 'fs';
import * as path from 'path'
import * as crypto from 'crypto'
import * as stream from 'stream/promises'

const calculateHash = async () => {
    const targetFilePath = path.join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');

    const readStream = fs.createReadStream(targetFilePath);

    stream.pipeline(readStream, crypto.createHash('sha256').setEncoding('hex'), async (hashInstance) => {
        hashInstance
          .toArray()
          .then((hashList) => {
            console.log(hashList[0]);
        });
    });
};

await calculateHash();
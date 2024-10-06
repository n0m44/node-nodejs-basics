import * as stream from 'stream';

const transform = async () => {
    const transformStream = new stream.Transform({
        transform(chunk, enc, callback) {
            callback(null, Buffer.from(chunk.toString().split('').reverse().join('')));
        }
    });

    stream.pipeline(process.stdin, transformStream, process.stdout, () => {});
};

await transform();

import * as worker_threads from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread};
    worker_threads.parentPort.postMessage(nthFibonacci(worker_threads.workerData.n))
};

sendResult();
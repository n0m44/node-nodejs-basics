import * as os from 'os';
import * as worker_threads from 'worker_threads';
import * as path from 'path';

const performCalculations = async () => {
    const workerTargetFile = path.join(import.meta.dirname, 'worker.js');
    const cpuCount = os.cpus().length;
    const workersResult = [];

    new Array(cpuCount).fill(0).map((v, count) => {
      const worker = new worker_threads.Worker(workerTargetFile, { workerData: { n: 10 + count } });

      worker.on('message', (fbn) => {
        workersResult.push({
            status: 'resolved',
            data: fbn,
            count
        })

        if (workersResult.length === cpuCount){
          console.log(workersResult.sort((a, b) => a.count - b.count).map((result) => ({ status: result.status, data: result.data })));
        }
      })

      worker.on('error', (err) => {
        workersResult.push({
            status: 'error',
            data: null,
            count
        })

        if (workersResult.length === cpuCount){
          console.log(workersResult.sort((a, b) => a.count - b.count).map((result) => ({ status: result.status, data: result.data })));
        }
      })

      return worker;
    })
};

await performCalculations();
// main.js
// const { Worker } = require('worker_threads');

// const worker = new Worker(`
//   const { parentPort } = require('worker_threads');
//   let sum = 0;
//   for(let i=0; i<1e9; i++) sum += i;
//   parentPort.postMessage(sum);
// `, { eval: true });

// worker.on('message', (result) => {
//   console.log(`Result from worker: ${result}`);
// });

// worker.on('error', (err) => console.error(err));
// worker.on('exit', (code) => console.log(`Worker exited with code ${code}`));





// using import export ///////////////////////////////////////////////////////////////////


// worker.js=============================== file name (make a seprate file of workrr threads)
import { parentPort } from 'worker_threads';   //this send a msg to main thred like task is done 

// Complex task
let sum = 0;
for (let i = 0; i < 108; i++) {
  sum += i;
}

// Send result back to main.js thread
parentPort.postMessage(sum);





// we r doing it in nodejs that why we code it like that ( scroll and go to that repo(express) for -  https://github.com/logicbaselabs/node-worker-threads/blob/main/index.js )
// main.js

import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

// Required to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a new worker using the worker.js file
const workerVar = new Worker(path.resolve(__dirname, 'worker.js'));

workerVar.on('message', (result) => {
  console.log('Result from worker:', result);
});

workerVar.on('error', (err) => {
  console.error('Worker error:', err);
});

workerVar.on('exit', (code) => {
  if (code !== 0)
    console.error(`Worker stopped with exit code ${code}`);
});
















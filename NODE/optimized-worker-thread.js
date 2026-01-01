// create a seprate file of this 20 line code worker-optimized.js
// Import 'parentPort' to send data back to main thread
// Import 'workerData' to receive data from main thread
const { parentPort, workerData } = require("worker_threads");

// This variable will store this worker's partial result
let result = 0;

// We run a heavy CPU loop here.
// Total work = 10,000,000,000 iterations
// But we divide it by thread_count.
// For THREAD_COUNT = 4 → each worker runs 2.5 billion loops.
// This is PARALLEL processing.
for (let i = 0; i < 10000000000 / workerData.thread_count; i++) {
    result++;
}

// Send the partial result BACK to the main thread
// using the built-in message channel.
parentPort.postMessage(result);










const express = require("express");
const { Worker } = require("worker_threads");

const app = express();
const port = process.env.PORT || 3000;

// We want 4 worker threads.
// The heavy work will be divided equally across all 4 threads.
const THREAD_COUNT = 4;


// This function creates ONE worker thread.
// It returns a promise that resolves with the result from that worker.
function createWorker() {
    return new Promise((resolve, reject) => {

        // Create a new worker thread
        // Give it "thread_count" so it knows how much work to do.
        const worker = new Worker("./worker-optimized.js", {
            workerData: {
                thread_count: THREAD_COUNT,
            },
        });

        // When worker finishes and sends result through parentPort.postMessage(),
        // we receive it here.
        worker.on("message", (data) => {
            resolve(data);
        });

        // If worker crashes → reject the promise
        worker.on("error", (err) => {
            reject(`An Error occured : ${err}`);
        });
    });
}


// This route is just to show that Node.js is STILL responsive.
// No heavy work happens here.
app.get("/non-blocking", (req, res) => {
    res.status(200).send("This page is non-blocking.");
});


// This route performs the HEAVY CPU WORK parallel using worker threads
app.get("/blocking", async (req, res) => {

    // Store all worker promises here
    const workerPromise = [];

    // Create 4 workers (THREAD_COUNT times)
    // So each worker handles 1/4 of the loop
    for (let i = 0; i < THREAD_COUNT; i++) {
        workerPromise.push(createWorker());
    }

    // Wait for ALL workers to complete using Promise.all()
    // threadResults will contain 4 partial results from 4 workers
    const threadResults = await Promise.all(workerPromise);

    // Combine results from all 4 workers
    const total =
        threadResults[0] +
        threadResults[1] +
        threadResults[2] +
        threadResults[3];

    // Send final combined result to user
    res.status(200).send(`Result is ${total}`);
});


// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

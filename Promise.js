// basic fetching with promise

// const pr = new Promise((resolve, reject) => {

//     fetch("https://jsonplaceholder.typicode.com/posts")

//     .then((res)=>{
//       if(!res.ok){
//         reject("Error fetching data");
//       }

//       return res.json();
//     })

//     .then((data)=>resolve(data))
//     .catch((err)=>{reject("Error: " + err.message)  })
// })


// pr.then((data)=>{
//     console.log("Data fetched successfully:", data.find((item) => item.id == 7));  
// })

// .catch((error) => {
//     console.error(error);  
// })




// Fetch with retry logic using Promises with fetch API (JSON)

// function fetchdata(url, retryCount = 3, delay = 1000) {
//     return new Promise((resolve, reject) => {
//         function again(url, retryCount) {

//             fetch(url)
//                 .then((res) => {
//                     if (!res.ok) {
//                         throw new Error("Network response was not ok");
//                     }
//                     return res.json();
//                 })

//                 .then((data) => {
//                     resolve(data);
//                 })

//                 .catch((err) => {
//                     if (retryCount > 0) {
//                         setTimeout(() => {
//                             again(url, retryCount - 1)
//                             console.log("trying");

//                         }, delay)
//                     }
//                     else {
//                         reject("Error fetching data: " + err.message);
//                     }
//                 })
//         }
//         again(url, retryCount);
//     })
// }

// fetchdata("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => {
//         console.log("Data fetched successfully:", data);
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error);
//     });





// Fetch with retry logic using Promises (simple obj)

// const retry = 3;
// const delay = 1000;

// const apiMock = () => {
//     return new Promise((reslove,reject)=>{
//         const api = {
//             name:"sj",
//             age:"22",
//         }

//         const code = 400;

//         if(code === 200){
//             reslove(api);

//         } else {
//             reject("Error fetching data");
//         }  

//     })
// }


// const retryy = (callback,retry,delay)=>{
//     return new Promise((resolve,reject)=>{
//         callback()
//         .then((api) => {
//             resolve(api);
//         })
//         .catch((err)=>{
//             if(retry){
//                 console.log("retring" + retry);

//                 setTimeout((resolve,reject) => {
//                     retryy(callback, retry - 1, delay)
//                     .then((api) => {
//                         resolve(api);
//                     })
//                     .catch((err) => {
//                         reject(err);
//                     });
//                 }, delay,resolve,reject);

//             }

//             else {
//                 reject("Error fetching data: " + err);
//             }
//         })
//     })
// }


// retryy(apiMock, retry, delay)
//     .then((api) => {
//         console.log("Data fetched successfully:", api);
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error);
//     }); 




// chatGpt logic for retrying API calls with Promises

// const retry = 3;
// const delay = 1000;

// const apiMock = () => {
//   return new Promise((resolve, reject) => {
//     const api = { name: "sj", age: "22" };
//     const code = 400; 

//     if (code === 200) {
//       resolve(api);
//     } else {
//       reject("❌ Error fetching data");
//     }
//   });
// };


// const retryy = (callback, tries, delay) => {
//   return callback()
//    .catch((err) => { 
//     if (tries <= 1) throw err;
//     console.log(`🔁 Retrying... attempts left: ${tries - 1}`);
//     return new Promise((res) => setTimeout(res, delay))
//       .then(() => retryy(callback, tries - 1, delay));
//   });
// };


// retryy(apiMock, retry, delay)
//   .then((data) => console.log("✅ Success:", data))
//   .catch((err) => console.error("🔥 Final Error:", err));





// just log after 10sec

// function wait(ms){
//     return new Promise((reslove)=> setTimeout(reslove,ms))
// }

// async function  add(){
//     await wait(10000)
//     console.log("ewwwwwwww");

// }

// add()



// first class function

// const Arithmetics = {
//     add: (a, b) => {
//         return `${a} + ${b} = ${a + b}`;
//     },
//     subtract: (a, b) => {
//         return `${a} - ${b} = ${a - b}`
//     },
//     multiply: (a, b) => {
//         return `${a} * ${b} = ${a * b}`
//     },
//     division: (a, b) => {
//         if (b != 0) return `${a} / ${b} = ${a / b}`;
//         return `Cannot Divide by Zero!!!`;
//     }

// }

// console.log(Arithmetics.add(100, 100));
// console.log(Arithmetics.subtract(100, 7))
// console.log(Arithmetics.multiply(5, 5))
// console.log(Arithmetics.division(100, 5));





// bind 
// async function fetchData(url, endpoint) {
//    console.log(url, endpoint);
//    const response = await fetch(`${url}${endpoint}`);
//    const data = response.json(); 
//    return data;
// }

// // Bind the base URL

// const getData = fetchData.bind(null, 'https://jsonplaceholder.typicode.com')
// getData('/posts').then(posts => console.log(posts));



// Promise with async await

// async function add() {
//    await new Promise((res) => setTimeout(res, 2000));
//    console.log("Done!");
// }
// add();



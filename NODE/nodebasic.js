// const path = require('path');
// const filePath = path.join(__dirname, 'hello.txt');
// console.log(filePath);

// const os = require('os');
// console.log(os.platform()); // e.g., 'win32', 'linux'
// console.log(os.totalmem());
// console.log(os.cpus().length);

const fs = require("fs");

fs.writeFile("fs.txt","hiii","utf-8",(err,data) => {
    if (err) {
        return
    }
    console.log("file contain",data);
    
})





const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/' && req.method === 'GET'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Home Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));
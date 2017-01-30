const http = require('http'); //require - reference to http module

const hostname = '127.0.0.1';
const port = 3000;

//create server
const server = http.createServer((req, res) => { //createserver - static method to render server into a new object "server" -- => Arrow Function returning Respose object
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\nNames Jason, noice to meet ya!');
});

//server event
server.listen(port, hostname, () => { //listen - method for all server objects - listening for hostname/port -- => Arrow Function as a callback method to output into console when it starts to listen to IP/hostname and port
  console.log(`Server running at http://${hostname}:${port}/`);
});
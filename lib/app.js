const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const [method, path] = parseRequest(data.toString());

    if(method === 'GET' && path === '/') {
      // Send a response
      socket.write(`HTTP/1.1 200 OK\r
Content-Type: text/plain\r
Content-Length: 2\r
\r
hi
`);
    } else if(method === 'POST' && path === '/echo') {
    // response
      socket.write(`HTTP/1.1 200 OK\r
Content-Type: text/plain\r
Content-Length: 2\r
\r
Whatever the client sent
`);
    }
    else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });});

module.exports = app;

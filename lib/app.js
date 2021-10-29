const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const { method, path, body } = parseRequest(data.toString());
    
    if(method === 'GET' && path === '/') {
      // Send a response
      socket.write(createResponse({ body: 'hey', status: '200', contentType: 'text/plain' }));

    } else if(method === 'POST' && path === '/echo') {
    // response
      socket.write(createResponse({ body, status: '200', contentType:'text/plain' }));
    }
    else if(method === 'GET' && path === '/red') {
      // response
      socket.write(createResponse({ body: '<h1>red</h1>', status: '200', contentType:'text/html' }));
    }
    else if(method === 'GET' && path === '/green') {
      // response
      socket.write(createResponse({ body: '<h1>green</h1>', status: '200', contentType:'text/html' }));
    }
    else if(method === 'GET' && path === '/blue') {
      // response
      socket.write(createResponse({ body: '<h1>blue</h1>', status: '200', contentType:'text/html' }));
    }
    else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });});

module.exports = app;

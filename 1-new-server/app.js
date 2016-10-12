'use strict';
const http = require('http');
const PORT = 8080;

const requestHandler = function (request, response) {
  if (request.url == "/") {
    response.end("Welcome!");
  } else if (request.url == "/urls") {
    response.end("www.lighthouselabs.ca\nwww.google.com");
  } else {
    response.statusCode = 404;
    response.end("Unknown  Path");
  }
}

const server = http.createServer(requestHandler);

server.listen(PORT, function() {
  console.log(`Server listening on: http://localhost:${PORT}`);
})

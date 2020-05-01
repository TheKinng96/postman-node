const http = require('http');

const server = http.createServer((request, response) => {
    console.log('header', request.header)
    console.log('method', request.method)
    console.log('url', request.url)

   response.setHeader('Content-Type', 'application/json');
   response.end('<h1>Hellooooooo</h1>');
})

server.listen(3000)
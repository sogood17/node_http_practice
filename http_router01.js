// using HTTP module, making server and running a server

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type':'application/json'});
  res.end(JSON.stringify({
    data:'Hello World!'
  }))
});

server.listen(3000, () => {
  console.log('Server is running!');
})
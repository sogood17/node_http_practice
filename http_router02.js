// using http module, running server

const http = require("http");

const server = http.createServer((req, res)=> {
  res.setHeader("Content-type", "text/plain");
  res.write("Hello World!");
  res.end();
})

server.listen(3000, () => {
  console.log("server is running!")
})
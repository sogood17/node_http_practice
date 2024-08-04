// making router

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain")

  // req.url: url
  // req.method: method
  
  // distructing
  const {url, method}  = req;
  if (url==="/home" && method==="GET") {
    res.end("Home");
  } else if (url==="/about") {
    res.end("About");
  } else {
    res.end("Not Found")
  }
});

server.listen(3000, () => {
  console.log("server is running!");
})


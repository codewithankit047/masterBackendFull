const http = require("http");
const { gfName, gfNamfffe } = require("./feature");
console.log(gfName);
console.log(gfNamfffe);
const server = http.createServer((req, resp) => {
  if (req.url === "/about") {
    resp.end("welocme to about page");
  } else if (req.url === "/") {
    resp.end("welcome to home page");
  } else if (req.url === "/contact") {
    resp.end("welcome to contact page");
  } else if (req.url === "/contact") {
    resp.end("welcome to contact page");
  } else if (req.url === "/help") {
    resp.end("welcome to help page");
  } else {
    resp.end("page not found");
  }
});

server.listen(5000, () => {
  console.log("server listening on 5000");
});

//question 1
const dns = require("dns");
const fs = require("fs");
dns.lookup("www.miu.edu", (_err, address) => {
  console.log("address: %j ", address);
});

//question 2

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("server", req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "");
  const pic = fs.readFileSync(path.join(__dirname, "./happy.jpeg"));
  res.data.pipe(pic);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

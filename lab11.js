//question 1
const dns = require("dns");
const fs = require("fs");
dns.lookup("www.miu.edu", (_err, address) => {
  console.log("address: %j ", address);
});

//question 2

const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("server", req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "");
  const pic = fs.readFileSync(path.join(__dirname, "./happy.jpeg"));
  // res.data.pipe(pic);
  res.end(pic, "binary");
});

//sol 2
server
  .on("request", (req, res) => {
    const img = require("fs").createReadStream("./happy.jpg");
    img.pipe(res);
  })
  .listen(9090, () => console.log("listening to 9090"));

// solution3
server.on("request", (req, res) => {
  fs.createReadStream("./happy.jpg").pipe(res);
});
server.listen(9000);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

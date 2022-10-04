const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Ola<h1/>");
  }

  if (req.url === "/users") {
    const users = [
      { name: "John", age: 30 },
      { name: "Vini", age: 21 },
      { name: "Marcy", age: 66 },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

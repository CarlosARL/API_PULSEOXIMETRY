const http = require('http');
const url = require('url');
const server = http.createServer(function (req, res) {
  const query = url.parse(req.url, true).query;
  const valor = query.valor;
  console.log("Received value: " + valor);
});

const port = 5555;
server.listen(port);
console.log("Server listening on port " + port);

var http = require('http');
var server = http.createServer(function(req, res) {
    if (req.method === 'GET' && req.url === '/data') {
        console.log('Received data:');
        req.on('data', function(chunk) {
            console.log(chunk.toString());
        });
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Data received.');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not found.');
    }
});
var port = 5555;
server.listen(port, function() {
    console.log('Listening on port ' + port);
});

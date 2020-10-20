var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello NodeJS</h1>')
    res.write('<p>This is my first NodeJS app.</p>');
    res.end('Hello Denpong');
}).listen(8080);

console.log('NodeJS is rinning!');
console.log('To quit, press Ctel+C');
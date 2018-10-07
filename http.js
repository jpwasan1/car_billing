const http = require('http');
http.createServer(function(req,res){
	res.writeHead({'Content-Type':'text/plain'});
	res.write('server is on');
}).listen(9876);
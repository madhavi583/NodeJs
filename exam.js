/*var http=require(http);
var server = http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end("welcome madhavi pathapati learning Nodejs");
});
server.listen(3000,function(){
	console.log("hello madhavi");
});*/
var http = require('http');

var server=http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
});
 server.listen(3000,function(){
	console.log("hello madhavi");
});
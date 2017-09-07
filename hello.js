/*setTimeout(function(){
console.log('3 secs have passed');
},3000);*/
var time =0;
var timer=setInterval(function(){
time += 2;
console.log(time + 'seconds have passed');
if(time > 5)
{
clearInterval(timer);

}
},2000);
console.log("Hello, World!");
/*var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(NodeJs/8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');*/
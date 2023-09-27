console.log("Enter the leo's world");

var http = require("http");
http.createServer((req,resp) => {
    resp.writeHead(200,{'Content-Type': 'text/plain'});
    resp.end("welcome to kirigalan's magic show");
}).listen(8787);


const http = require("http")
http.createServer((req, res) => {
    res.end("welcome to NodeJsServer");
}).listen(4100);
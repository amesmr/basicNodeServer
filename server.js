var http = require("http");

// define port to listen on 
var PORT = 7500;

function handleRequest(request, response) {
    response.end("You're a wonderful person...  Cuddle with me? " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server listening on http://localhost:%d", PORT);
    secondServer();
});

// second server
// var http = require("http");

// define port to listen on 
function secondServer() {
    PORT = 7000;

    function handleRequest2(request, response) {
        response.end("You're a bad person... Go pound sand. " + request.url);
    }

    var server2 = http.createServer(handleRequest2);

    server2.listen(PORT, function () {
        console.log("Server listening on http://localhost:%d", PORT);
    });
}
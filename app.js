var connect = require('connect');
var http = require('http');
var app = connect();

// require request-ip and register it as middleware
var requestIp = require('request-ip');
app.use(requestIp.mw())

app.use(function(req, res) {
    // by default, the ip address will be set on the `clientIp` attribute
    var ip = req.clientIp;
    res.end(ip + '\n');
});

var port = process.env.PORT || 3000;

//create node.js http server and listen on port
http.createServer(app).listen(port);
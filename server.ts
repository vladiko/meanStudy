/// <reference path="__server_references.ts" />
var express = require('express');
var app = express();
app.use('/', function (req, res) {
    res.send('Hello World from express');
});
app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;


//import http = require('http');
//var port = process.env.port || 1337
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);
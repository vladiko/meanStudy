/// <reference path="__references.ts" />
var express = require('express');
var app = express();
app.use('/', function (req, res) {
    res.send('Hello World from express');
});
app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;
//# sourceMappingURL=server.js.map
var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(path.join(__dirname,'views')));

app.listen(3000, function() {
    console.log('App listening on port 3000!\nEnjoy it :)');
});
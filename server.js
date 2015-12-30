var express = require('express')
var serveStatic = require('serve-static')

express.static.mime.define({
    'application/x-typescript': ['.ts']
});


var app = express()

app.use(serveStatic(__dirname + '/exports'))
app.use(serveStatic(__dirname + '/tests/app'))
app.listen(3000)
console.log('Serving on localhost:3000');

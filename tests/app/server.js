var express = require('express')
var serveStatic = require('serve-static')

var app = express()

app.use('/', serveStatic(__dirname + '/static'))
app.use('/', serveStatic(__dirname + '/../../exports'))
app.listen(3000)
console.log('Serving Ventana Test App on localhost:3000');

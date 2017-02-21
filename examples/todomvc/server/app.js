var express = require('express')
  , config = require('./config')
  , configure = require('./configure')
  , routes = require('./routes')
  , sockets = require('./sockets')

process.on('uncaughtException', function (error) {
    var errorName = error.name || 'UnknownType'
      , errorMessage = error.message || 'Error without a message'
      , message = errorName + ': ' + errorMessage

    console.log(message)

    process.exit(1)
})

var app = express()

configure(app)
routes(app)
var server = sockets(app)

console.log('Listening on ' + config.host + ':' + config.port)

server.listen(config.port, config.host)

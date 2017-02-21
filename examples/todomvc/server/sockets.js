var http = require('http')
var socketIO = require('socket.io')

module.exports = function(app) {

  var server = http.Server(app)
  var io = socketIO(server).of('/redux-echo')

  io.on('connection', function(socket) {
    var channelId
    var isListener
    var broadcastRoom
    var listenRoom

    if (!socket.handshake.query.channelId) {
      return socket.disconnect(true)
    }

    channelId = socket.handshake.query.channelId
    broadcastRoom = 'broadcast: ' + channelId
    listenRoom = 'listen: ' + channelId
    isListener = !!socket.handshake.query.token

    if (isListener) {
      socket.join(listenRoom)
    } else {
      socket.join(broadcastRoom)
      socket.on('redux action', function(action) {
        socket.to(listenRoom).emit('redux action', action)
      })
    }

  })

  return server
}

import io from 'socket.io-client'
import qs from 'qs'

const actionBroadcasterCreator = config => {
  const socketHandshakeConfig = {
    channelId: config.channelId,
  }

  var socket = new io(config.serverUrl, {
    query: qs.stringify(socketHandshakeConfig)
  })

  const broadcast = action => {
    socket.emit('redux action', action)
  }

  return store => next => action => {
    let result = next(action)
    broadcast(action)
    return result
  }
}

export default actionBroadcasterCreator

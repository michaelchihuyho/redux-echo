import io from 'socket.io-client'
import qs from 'qs'

const actionListener = (store, config) => {
  const socketHandshakeConfig = {
    channelId: config.channelId,
    token: config.token
  }

  var socket = new io(config.serverUrl, {
    query: qs.stringify(socketHandshakeConfig)
  })

  socket.on('redux action', action => {
    store.dispatch(action)
  })

}

export default actionListener

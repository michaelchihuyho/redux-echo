import socketIO from 'socket.io-client'

const actionBroadcaster = config => {

  const socket = new socketIO(config.serverEndpoint)

  const broadcast = action => {

  }

  return store => next => action => {
    let result = next(action)
    return result
  }
}

export default actionBroadcaster

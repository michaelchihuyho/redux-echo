import socketIO from 'socket.io-client'

const actionListener = (store, config) => {

  const socket = new socketIO(config.serverEndpoint)

}

export default actionListener

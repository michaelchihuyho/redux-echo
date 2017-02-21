import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import qs from 'qs'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'

import {actionBroadcasterCreator, actionListener} from 'redux-echo'

const locationQuery = qs.parse(window.location.search.substring(1))
var store

if (locationQuery.debug) {
  if(locationQuery.debugToken) {
    store = createStore(reducer)
    actionListener(store, {
      serverUrl: '/redux-echo',
      channelId: locationQuery.debug,
      token: locationQuery.debugToken
    })
  } else {
    const actionBroadcaster = actionBroadcasterCreator({
      serverUrl: '/redux-echo',
      channelId: locationQuery.debug
    })

    store = createStore(reducer, applyMiddleware(actionBroadcaster))
  }
} else {
  store = createStore(reducer)
}


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

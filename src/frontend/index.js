import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

import reducer from './store/reducers/index'

import App from './routes/App'

//import initialState from './utils/initialState'
const preloaderState = window.__PRELOADED_STATE__

const history =  createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose 
const store = createStore(reducer, preloaderState, composeEnhancers);

delete window.__PRELOADED_STATE__;

ReactDom.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>, 
  document.getElementById('app')
);
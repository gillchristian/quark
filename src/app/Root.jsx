import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './App'
import Home from './Home'
import Message from './Message'
import NotFound from './NotFound'

const Root = ({ store }) => {
  const history = syncHistoryWithStore(browserHistory, store)
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="(:quark)" component={Message} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root

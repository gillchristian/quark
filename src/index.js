import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './app/Root'
import configureStore from './store/configureStore'

import 'bulma/css/bulma.css'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)

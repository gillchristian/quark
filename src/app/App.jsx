import React, { PropTypes } from 'react'

import Footer from '../Footer'
import Main from './Main'

const App = ({ children }) => (
  <div>
    <Main>
      {children}
    </Main>
    <Footer />
  </div>
)

App.propTypes = {
  children: PropTypes.node,
}

export default App

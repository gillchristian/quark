import React from 'react'
import { Link } from 'react-router'

const NotFound = () => (
  <div>
    <h2 className="subtitle">
      - 404 dude!
    </h2>
    <h2 className="subtitle">
      <Link to="/" >- Take me home, I'm drunk!</Link>
    </h2>
  </div>
)

export default NotFound

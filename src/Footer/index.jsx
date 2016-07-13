import React from 'react'
import { Icon } from 'react-fa'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>Quark</strong>
          {' by '}
          <a target="_blank" href="http://gillchristian.xyz">gillchristian</a>.
        </p>
        <p>
          <a
            className="icon"
            href="https://github.com/gillchristian/quark"
            target="_blank"
          >
            <Icon name="github" />
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer

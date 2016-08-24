import React from 'react'
import { Icon } from 'react-fa'

const Footer = () => (
  <footer className="footer">
    <p>
      {' by '}
      <a target="_blank" href="http://gillchristian.xyz">gillchristian</a>
    </p>
    <p>
      <a href="https://github.com/gillchristian/quark" target="_blank">
        <Icon name="github" size="2x" />
      </a>
    </p>
  </footer>
)

export default Footer

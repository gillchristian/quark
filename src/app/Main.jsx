import React, { PropTypes } from 'react'

const Main = ({ children }) => (
  <section className="hero is-fullheight is-primary is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Quark rules!
        </h1>
        {children}
      </div>
    </div>
  </section>
)

Main.propTypes = {
  children: PropTypes.node,
}

export default Main

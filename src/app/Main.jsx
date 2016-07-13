import React, { PropTypes } from 'react'
import { withRouter } from 'react-router'

const Main = ({ params }) => (
  <section className="hero is-fullheight is-primary is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Quark rules!!
        </h1>
        <h2 className="subtitle">
          Route: {params.quark ? params.quark : '/'}
        </h2>
      </div>
    </div>
  </section>

)

Main.propTypes = {
  params: PropTypes.object.isRequired,
}

export default withRouter(Main)

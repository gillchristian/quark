import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Message = ({ params }) => (
  <div>
    <h2 className="subtitle">{`Route: /${params.quark}`}</h2>
    <div className="content">
      <p>{'Not much to do here . . .'}</p>
      <p>{'Hey what did you expect to find? ¯\\_(ツ)_/¯'}</p>
    </div>
    <h2 className="subtitle">
      <Link to="/" >Go Home</Link>
    </h2>
  </div>
)

Message.propTypes = {
  params: PropTypes.object.isRequired,
}

export default Message

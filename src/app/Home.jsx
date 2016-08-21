import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { updateValue } from './home.store'

import classnames from 'classnames'

const Home = ({ onChange, value, isPristine, isValid }) => {
  const inputClass = classnames('input', {
    'is-danger': !isPristine && !isValid,
    'is-success': isValid && !isPristine,
    'is-primary': isPristine || isValid,
  })
  const linkClass = classnames('button is-success', {
    'is-disabled': !value || (!isPristine && !isValid),
  })
  const helpClass = classnames('help', {
    'is-danger': !isPristine && !isValid,
    'is-white': !(!isPristine && !isValid),
  })

  const randMessages = [
    'Home sweet home!',
    'Sweet home Alabama!',
  ]

  return (
    <div>
      <div className="content">
        {randMessages[Math.floor(Math.random() * 2)]}
      </div>
      <form onSubmit={e => e.preventDefault()}>
        <label className="label">Route</label>
        <p className="control has-addons">
          <input
            onChange={onChange}
            className={inputClass}
            type="text"
            placeholder="really-cool-route"
            value={value}
          />
          <Link to={value || ''} className={linkClass}>
            Go to page!!!
          </Link>
        </p>
        <span className={helpClass}>
          {
            !isPristine && !isValid ?
              'This is an invalid route' :
              'Type a route you want to visit'
          }
        </span>
      </form>
    </div>
  )
}

Home.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  isPristine: PropTypes.bool,
  isValid: PropTypes.bool,
}

const mapStateToProps = state => ({
  ...state.home,
})
const mapDispatchToProps = {
  updateValue,
}


class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    this.props.updateValue(e.target.value)
  }
  render() {
    return (
      <Home
        {...this.props}
        onChange={this.onChange}
        goTo={this.goTo}
      />
    )
  }
}

HomeContainer.propTypes = {
  updateValue: PropTypes.func.isRequired,
}

export { Home }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)

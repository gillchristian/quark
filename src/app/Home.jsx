import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { updateValue } from './home.store'

import classnames from 'classnames'

const randMessages = [
  'Home sweet home!',
  'Sweet home Alabama!',
]

const inputClass = (isValid, isPristine) => classnames('input', {
  'is-danger': !isPristine && !isValid,
  'is-success': isValid && !isPristine,
  'is-primary': isPristine || isValid,
})

const linkClass = (isValid, isPristine, value) => classnames('button is-success', {
  'is-disabled': !value || (!isPristine && !isValid),
})

const helpClass = (isValid, isPristine) => classnames('help', {
  'is-danger': !isPristine && !isValid,
  'is-white': !(!isPristine && !isValid),
})

const Home = ({ onChange, value, isPristine, isValid }) => (
  <div>
    <div className="content">
      {randMessages[Math.floor(Math.random() * 2)]}
    </div>
    <form onSubmit={e => e.preventDefault()}>
      <label className="label">Route</label>
      <p className="control has-addons">
        <input
          onChange={onChange}
          className={inputClass(isValid, isPristine)}
          type="text"
          placeholder="really-cool-route"
          value={value}
        />
        <Link to={value || ''} className={linkClass(isValid, isPristine, value)}>
          Go to page!!!
        </Link>
      </p>
      <span className={helpClass(isValid, isPristine)}>
        {
          !isPristine && !isValid ?
            'This is an invalid route' :
            'Type a route you want to visit'
        }
      </span>
    </form>
  </div>
)

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
  propTypes = {
    updateValue: PropTypes.func.isRequired,
  }

  onChange = e => {
    this.props.updateValue(e.target.value)
  }

  render() {
    return (
      <Home {...this.props} onChange={this.onChange} goTo={this.goTo} />
    )
  }
}

export { Home }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)

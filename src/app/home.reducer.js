import * as types from './home.types'

export const INITIAL_STATE = {
  value: '',
  isPristine: true,
  isValid: false,
}

export default function home(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_VALUE: {
      const value = action.payload
      const isValid = value && value.split(' ').length <= 1
      return {
        ...state,
        value: action.payload,
        isPristine: false,
        isValid,
      }
    }
    default:
      return state
  }
}

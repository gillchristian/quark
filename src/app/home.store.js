import { createAction, handleActions } from 'redux-actions'

export const types = {
  UPDATE_VALUE: 'UPDATE_VALUE',
}

export const updateValue = createAction(types.UPDATE_VALUE)

export const INITIAL_STATE = {
  value: null,
  isPristine: true,
  isValid: false,
}

export default handleActions({
  [types.UPDATE_VALUE]: (state, action) => {
    const value = action.payload
    const isValid = value && value.split(' ').length <= 1
    return {
      ...state,
      value: action.payload,
      isPristine: false,
      isValid,
    }
  },
}, INITIAL_STATE)

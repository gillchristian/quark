import * as types from './home.types'

/**
 * Update value of the field action creator
 *
 * @param {String}  value
 * @returns {Object}  action creator
 */
export const updateValue = value => ({
  type: types.UPDATE_VALUE,
  payload: value,
})

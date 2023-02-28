import * as types from '../profile/types'

export const toggleProfile = () => ({
  type: types.CHANGE_VISIBLE
})

export const auth = (auth) => ({
  type: types.IS_AUTH,
  payload: auth
})
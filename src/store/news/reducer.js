import { ADD_NEWS } from './actions'

const initialState = {
  loading: true,
  error: 'dsfsdf',
  news: [],
}


export const newsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_NEWS:
      return {
        ...state,
        news: payload.news,
        loading: payload.loading,
        error: payload.error
      }

    default:
      return state
  }
}
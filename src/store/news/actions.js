import { api } from '../../constants';
export const ADD_NEWS = 'ADD_NEWS'


export const addNews = (loading, error, news) => ({
  type: ADD_NEWS,
  payload: { loading, error, news }
})


export const addNewsAnswer = (loading, error, news) => async (dispatch) => {
  dispatch(addNews(loading, error, news))
  try {
    const res = await fetch(api)
    if (res.ok) {
      const data = await res.json()
      dispatch(addNews({ loading: true, error: 'Ошибка', news: data }))
    }
  } catch (error) {
    dispatch(addNews({ loading, error: 'Ошибка' }))
  } finally {
    dispatch(addNews({ loading: true, error }))
  }
}
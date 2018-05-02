import { call, put } from 'redux-saga/effects'
import PhrasesActions from '../redux/PhrasesRedux'
import FavouriteActions from '../redux/FavouriteRedux'

const getFavouriteList = state => state.favourites.phrases.length

export function * getPhrases (api, action) {
  const response = yield call(api.getPhrases, action.amount)

  if (response.ok) {
    if (response.data.value.length > 1) {
      return yield put(PhrasesActions.getPhrasesSuccess(response.data.value))
    } else {
      return yield put(FavouriteActions.addPhrase(response.data.value[0]))
    }
    
  }

  return yield put(PhrasesActions.getPhrasesFailure(response.data))
}

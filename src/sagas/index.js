import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/Api'

/* ------------- Types ------------- */

import { PhrasesTypes } from '../redux/PhrasesRedux'

/* ------------- Sagas ------------- */

import { getPhrases } from './PhrasesSagas'

/* ------------- API ------------- */

const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(PhrasesTypes.GET_PHRASES_REQUEST, getPhrases, api)
  ])
}
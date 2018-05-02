import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getPhrasesRequest: ['amount'],
  getPhrasesSuccess: ['result'],
  getPhrasesFailure: ['error'],
}, {prefix: 'PHRASES_'})

export const PhrasesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  jokes: [],
  fetching: false,
  error: false
})

/* ------------- Reducers ------------- */

export const getPhrasesSuccess = (state, {result}) => {
  return state
    .setIn(['jokes'], result).set('fetching', false)
}

export const getPhrasesRequest = (state) => {
  return state
    .set('fetching', true).set('error', false)
}

export const getPhrasesFailure = (state, {error}) => {
  return state
    .set('fetching', false).set('error', error)
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PHRASES_SUCCESS]: getPhrasesSuccess,
  [Types.GET_PHRASES_FAILURE]: getPhrasesFailure,
  [Types.GET_PHRASES_REQUEST]: getPhrasesRequest
})

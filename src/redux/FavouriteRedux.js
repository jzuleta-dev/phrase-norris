import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { isNil, isEmpty, propEq, findIndex } from 'ramda'

const remove_item = (index, array) => {
  return array.slice(0, index).concat(array.slice(index + 1))
}

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  addPhrase: ['phrase'],
  removePhrase: ['id']
}, {prefix: 'FAVOURITE_'})

export const BoardTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  phrases: []
})
/* ------------- Reducers ------------- */

export const addPhrase = (state, {phrase}) => {
  if (isNil(state) || isEmpty(state)) {
    return INITIAL_STATE
  }

  return findIndex(propEq('id', phrase.id))(state.phrases) === -1 ? state.merge({phrases: state.phrases.concat([phrase])}) : state
}

export const removePhrase = (state, {id}) => {
  const index = findIndex(propEq('id', id))(state.phrases)
  return index === -1 ? state : state.merge({phrases: remove_item(index, state.phrases)})
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PHRASE]: addPhrase,
  [Types.REMOVE_PHRASE]: removePhrase
})

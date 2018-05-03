import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { isNil, isEmpty, propEq, findIndex, has} from 'ramda'

const hasId = has('id')
const hasJoke = has('joke')
const isValid = (phrase) => {
  return hasId(phrase) && hasJoke(phrase)
}

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

  if (isValid(phrase)) {
    return findIndex(propEq('id', phrase.id))(state.phrases) === -1 ? state.merge({phrases: state.phrases.concat([phrase])}) : state
  } else {
    return state
  }
}

export const removePhrase = (state, {id}) => {
  if (isNil(state) || isEmpty(state)) {
    return INITIAL_STATE
  }
  const index = findIndex(propEq('id', id))(state.phrases)
  return index === -1 ? state : state.merge({phrases: remove_item(index, state.phrases)})
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PHRASE]: addPhrase,
  [Types.REMOVE_PHRASE]: removePhrase
})

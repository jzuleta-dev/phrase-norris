import { createSelector } from 'reselect'
import Immutable from 'seamless-immutable'
import { slice } from 'ramda'
const getFavouriteList = state => state.favourites.phrases.length

export const isComplete = createSelector([getFavouriteList], (list) => list === 10)

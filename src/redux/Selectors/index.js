import { createSelector } from 'reselect'
const getFavouriteList = state => state.favourites.phrases.length

export const isComplete = createSelector([getFavouriteList], (list) => list === 10)

import FavouriteActions, {addPhrase as addPhraseReducer, removePhrase as removePhraseReducer} from '../../redux/FavouriteRedux'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  phrases: []
})

const PARTIAL_STATE = Immutable({
  phrases: [{
    id: 243,
    joke: "Contrary to popular belief, the Titanic didn't hit… he was doing the backstroke across the Atlantic."
  }]
})

const phrase = {
    id: 243,
    joke: "Contrary to popular belief, the Titanic didn't hit… he was doing the backstroke across the Atlantic."
  }

const invalidPhrase = {
    joke: "Contrary to popular belief, the Titanic didn't hit… he was doing the backstroke across the Atlantic."
  }

describe('Add Phrase Reducer', () => {
  it('Should return initial state when undefined', () => {
    expect(addPhraseReducer(undefined, {})).toEqual(INITIAL_STATE)
  });
  it('Should initial state when empty', () => {
    expect(addPhraseReducer({}, {})).toEqual(INITIAL_STATE)
  });
  it('Should add a valid phrase', () => {
    expect(addPhraseReducer(INITIAL_STATE, {phrase})).toEqual({
      phrases: [{
        id: 243,
        joke: "Contrary to popular belief, the Titanic didn't hit… he was doing the backstroke across the Atlantic."
      }]
    })
  });

  it('Should add a valid phrase', () => {
    expect(addPhraseReducer(INITIAL_STATE, {phrase: invalidPhrase})).toEqual(INITIAL_STATE)
  });
})

describe('Remove Phrase Reducer', () => {
  it('Should return initial state when undefined', () => {
    expect(removePhraseReducer(undefined, {})).toEqual(INITIAL_STATE)
  });
  it('Should initial state when empty', () => {
    expect(removePhraseReducer({}, {})).toEqual(INITIAL_STATE)
  });
  it('Should remove a valid id', () => {
    expect(removePhraseReducer(PARTIAL_STATE, {id: 243})).toEqual(INITIAL_STATE)
  });
  it('Should not remove an non existing id', () => {
    expect(removePhraseReducer(PARTIAL_STATE, {id: 23})).toEqual(PARTIAL_STATE)
  })
})
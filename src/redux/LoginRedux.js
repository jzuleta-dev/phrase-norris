import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  logIn: [],
  logOut: []
}, {prefix: 'LOGIN_'})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  loggedIn: false
}

/* ------------- Reducers ------------- */
export const logIn = (state) => {
  return {
    ...state,
    loggedIn: true
  }
}

export const logOut = (state) => {
  return {
    ...state,
    loggedIn: false
  }
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOG_IN]: logIn,
  [Types.LOG_OUT]: logOut
})

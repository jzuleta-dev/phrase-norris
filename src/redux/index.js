import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas/'

export default () => {
	const rootReducer = combineReducers({
    favourites: require('./FavouriteRedux').reducer,
    phrases: require('./PhrasesRedux').reducer,
    login: require('./LoginRedux').reducer
  })

	return configureStore(rootReducer, rootSaga)
}

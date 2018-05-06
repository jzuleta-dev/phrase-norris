import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { seamlessImmutableReconciler, seamlessImmutableTransformer } from 'redux-persist-seamless-immutable'
import storage from 'redux-persist/lib/storage' 
import { persistStore, persistReducer } from 'redux-persist'

export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Logger Middleware ------------- */
    const logger = createLogger({
      predicate: (getState, { type }) => true
    })
    middleware.push(logger)
  /* ------------- Redux-Persist ------------- */
    const persistConfig = {
      key: 'root',
      storage,
      blacklist: ['phrases'],
      stateReconciler: seamlessImmutableReconciler,
      transforms: [seamlessImmutableTransformer]
    }

    const persistedReducer = persistReducer(persistConfig, rootReducer)

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(persistedReducer, composeEnhancers(...enhancers))
  let persistor = persistStore(store)
  
  sagaMiddleware.run(rootSaga)

  return {store, persistor}
}
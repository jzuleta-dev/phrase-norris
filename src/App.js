import React, {Component} from 'react'
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import createStore from './redux'
import Main from './containers/main'

const setup = createStore()

class App extends Component {
  render () {
    return (
      <Provider store={setup.store}>
        <PersistGate loading={null} persistor={setup.persistor}>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}

export default App

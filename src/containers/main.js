import React, {Component} from 'react';
import styled from 'styled-components'
import PhrasesActions from '../redux/PhrasesRedux'
import FavouriteActions from '../redux/FavouriteRedux'
import FavouriteList from '../components/FavouriteList'
import RandomList from '../components/RandomList'
import { connect } from 'react-redux'

const AppContainer = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 32px;
  height: 100%;
  width: 100%;
`

class Main extends Component {

  constructor(props, context) {
    super(props, context)
    state: {
      display: false
    }
  }
  render () {
    return (
      <AppContainer className='container'>
        <RandomList />
        <FavouriteList />
      </AppContainer>
    )
  }
}

export default Main

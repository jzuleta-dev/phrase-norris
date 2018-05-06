import React, {Component} from 'react'
import styled from 'styled-components'
import PhrasesActions from '../redux/PhrasesRedux'
import FavouriteActions from '../redux/FavouriteRedux'
import FavouriteList from '../components/FavouriteList'
import RandomList from '../components/RandomList'
import LoginModal from '../components/LoginModal'
import { Navbar, Nav, Button, NavItem } from 'react-bootstrap'
import Header from './header'
import { connect } from 'react-redux'


const AppContainer = styled.div`
`
const ListContainer = styled.div`
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
      display: true
    }
  }

  render () {
    return (
      <div className='container'>
        {
          this.props.userLoggedIn ? 
          <AppContainer>
            <Header />
            <ListContainer>
              <RandomList />
              <FavouriteList />
            </ListContainer>
          </AppContainer>
          : <LoginModal show={!this.props.userLoggedIn} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.login.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

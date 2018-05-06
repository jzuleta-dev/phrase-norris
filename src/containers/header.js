import React, {Component} from 'react'
import styled from 'styled-components'
import LoginActions from '../redux/LoginRedux'
import { Navbar, Nav, Button, NavItem } from 'react-bootstrap'
import { connect } from 'react-redux'

class Header extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render () {
    return (
      <Navbar>
        <Nav>
          <NavItem>
            <Button bsStyle="primary" onClick={() => this.props.logout()}>Log out</Button>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.login.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(LoginActions.logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

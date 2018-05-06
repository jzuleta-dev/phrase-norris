import React, {Component} from 'react'
import styled from 'styled-components'
import LoginActions from '../redux/LoginRedux'
import { Modal, Form, FormControl, CheckBox, FormGroup, Button, Col, ControlLabel } from 'react-bootstrap'
import { connect } from 'react-redux'


class LoginModal extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: '' }
  }

  getValidationState () {
    const length = this.state.value.length    
    const sequenceRegExp = new RegExp(/^((?:a(?=b|$))?(?:b(?=c|$))?(?:c(?=d|$))?(?:d(?=e|$))?(?:e(?=f|$))?(?:f(?=g|$))?(?:g(?=h|$))?(?:h(?=i|$))?(?:i(?=j|$))?(?:j(?=k|$))?(?:k(?=l|$))?(?:l(?=m|$))?(?:m(?=n|$))?(?:n(?=o|$))?(?:o(?=p|$))?(?:p(?=q|$))?(?:q(?=r|$))?(?:r(?=s|$))?(?:s(?=t|$))?(?:t(?=u|$))?(?:u(?=v|$))?(?:v(?=w|$))?(?:w(?=x|$))?(?:x(?=y|$))?(?:y(?=z|$))?(?:z(?=z|$))?0?)$/)
    const notContainRegExp = new RegExp(/^[^iOl]+$/)
    const a = sequenceRegExp.test(this.state.value)
    const b = notContainRegExp.test(this.state.value)
    const c = this.state.value.length > 2 && this.state.value.length < 33
    if (a && b && c) return 'success'
    return null
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render () {
    return (
      <Modal show={this.props.show}>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col sm={2}>
                  Username
                </Col>
                <Col sm={10}>
                  <FormControl type="userName" placeholder="Username" />
                </Col>
              </FormGroup>

              <FormGroup 
                validationState={this.getValidationState()}
                controlId="formHorizontalPassword"
                onChange={this.handleChange}
              >
                <Col sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl value={this.state.value} type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" onClick={() => {this.props.logIn()}}>Sign in</Button>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
        </Modal>
    )
    
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(LoginActions.logIn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
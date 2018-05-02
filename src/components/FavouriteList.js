import React, {Component} from 'react';
import styled from 'styled-components'
import PhrasesActions from '../redux/PhrasesRedux'
import FavouriteActions from '../redux/FavouriteRedux'
import { isComplete } from '../redux/Selectors/index'
import { connect } from 'react-redux'
import { Button, Glyphicon, ButtonGroup, Panel} from 'react-bootstrap'
import { isNil } from 'ramda'

const Content = styled(Panel)`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
  margin-left: 32px;
`

const TitleContainer = styled(Panel.Heading)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`

const TextContainer = styled(Panel.Body)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

const RemoveButton = styled(Button)`
  height: 32px;
  margin-right: 10px;
`

const Text = styled.div`
  font-family: 'Montserrat', 'Helvetica', sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 32px;
  line-height: 40px;
`

class FavouriteList extends Component {

  constructor(props, context) {
    super(props, context)
    this.activateRandom = this.activateRandom.bind(this)
    this.stopRandom = this.stopRandom.bind(this)
    state: {
      display: false
      intervalId: null
    }
  }

  activateRandom () {
    if (!(this.props.favourites.phrases.length === 10)) {
      const intervalId = setInterval( () => {
        this.props.getPhrases(1)
      }, 1000)
      this.setState({intervalId: intervalId})
    }
  }

  stopRandom () {
    clearInterval(this.state.intervalId)
  }

  componentWillUpdate (nextProps, nextState) {
    if (this.state && nextProps.favourites.phrases.length === 10 && !isNil(this.state.intervalId)) {
      this.stopRandom()
    }
  }

  render () {
    return (
      <Content>
        <TitleContainer>
          <Text>Favourites!</Text>
           <Button onClick={() => this.activateRandom()}>
              Add Random Phrases
           </Button>
            <Button onClick={() => this.stopRandom()}>
              Stop
           </Button>
        </TitleContainer>
        {
          this.props.favourites.phrases.map(
            phrase => 
            <TextContainer key={phrase.id}>
              <RemoveButton onClick={() => this.props.removePhrase(phrase.id)}>Remove</RemoveButton>
              {phrase.joke}
            </TextContainer>
          )
      }
      </Content>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites,
    canAdd: !isComplete(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPhrases: (amount) => dispatch(PhrasesActions.getPhrasesRequest(amount)),
    addPhrase: (phrase) => dispatch(FavouriteActions.addPhrase(phrase)),
    removePhrase: (id) => dispatch(FavouriteActions.removePhrase(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteList)

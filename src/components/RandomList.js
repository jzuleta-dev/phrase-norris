import React, {Component} from 'react'
import styled from 'styled-components'
import PhrasesActions from '../redux/PhrasesRedux'
import FavouriteActions from '../redux/FavouriteRedux'
import { connect } from 'react-redux'
import { Button, Glyphicon, ButtonGroup, Panel} from 'react-bootstrap'
import { propEq, findIndex } from 'ramda'

const Content = styled(Panel)`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%
  margin-right: 32px;
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
  align-items: center;
  margin-top: 10px;
`

const Text = styled.div`
  font-family: 'Montserrat', 'Helvetica', sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 32px;
  line-height: 40px;
`

const StarButton = styled(Button)`
  height: 32px;
  margin-right: 10px;
`

class RandomList extends Component {

  constructor(props, context) {
    super(props, context)
    state: {
      display: false
    }
  }

  componentDidMount () {
      this.props.getPhrases(10)
  }

  addPhrase(joke) {
    return this.props.favourites.phrases.length < 10 ? this.props.addPhrase(joke) : alert('The favourite list limit is 10')
  }

  render () {
    const { phrases, favourites, getPhrases } = this.props
    return (
      <Content>
        <TitleContainer>
          <Text>Random</Text>
           <Button onClick={() => getPhrases(10)}>
            Get New Phrases!
           </Button>
        </TitleContainer>

        {
          phrases.jokes ? phrases.jokes.map(
            joke => (
              <TextContainer key={joke.id}>
                <StarButton 
                  disabled={findIndex(propEq('id', joke.id))(favourites.phrases) !== -1}
                  onClick={() => this.addPhrase(joke)}
                >
                  <Glyphicon glyph="star" />
                </StarButton>
                {joke.joke}
              </TextContainer>
            )
          )
          : null
        }
      </Content>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    phrases: state.phrases,
    favourites: state.favourites,
    userLoggedIn: state.login.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPhrases: (amount) => dispatch(PhrasesActions.getPhrasesRequest(amount)),
    addPhrase: (phrase) => dispatch(FavouriteActions.addPhrase(phrase))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomList)

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Button from '../../components/Button'
import CharacterWrapper from './components/CharacterWrapper'
import { createStructuredSelector } from 'reselect'
import {setCharacter} from './actions'
import characterGenerator from './utils/characterGenerator'
import {
  makeSelectName,
  makeSelectType,
  makeSelectAnimals,
  makeSelectPrimaryApproach
} from './selectors'

export class UmdaarGenerator extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
    this.generateCharacter()
  }

  generateCharacter () {
    const character = characterGenerator()
    this.props.actions.setCharacter(character)
  }

  handleClick () {
    this.generateCharacter()
  }

  renderCharacterMessage () {
    const {name, type, animals, primaryApproach} = this.props
    const animalString = animals.length ? animals.join('/').trim() + '-' : ''
    return (<div>
      { name + ' the ' +
        primaryApproach + ' ' +
        animalString +
        type
      }
    </div>)
  }

  render () {
    return (
      <CharacterWrapper>

        <Helmet
          title='Masters of Umdaar Character Generator'
        />

        {this.renderCharacterMessage()}

        <Button onClick={this.handleClick.bind(this)}>
          Click to Fire Up the Recombinator
        </Button>

      </CharacterWrapper>
    )
  }
}

UmdaarGenerator.defaultProps = {
  animals: []
}

UmdaarGenerator.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  animals: PropTypes.array,
  primaryApproach: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  name: makeSelectName(),
  type: makeSelectType(),
  animals: makeSelectAnimals(),
  primaryApproach: makeSelectPrimaryApproach()
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({setCharacter}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UmdaarGenerator)

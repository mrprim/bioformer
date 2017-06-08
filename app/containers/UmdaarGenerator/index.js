import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Button from '../../components/Button'
import CharacterWrapper from './components/CharacterWrapper'
import StuntBlock from './components/StuntBlock'
import { createStructuredSelector } from 'reselect'
import {setCharacter} from './actions'
import characterGenerator from './utils/characterGenerator'
import {
  makeSelectName,
  makeSelectType,
  makeSelectAnimals,
  makeSelectPrimaryApproach,
  makeSelectStunts
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

  renderBioform () {
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

  renderStunts () {
    const {stunts = []} = this.props

    return stunts.reduce((rslt, stunt) => {
      rslt.push(<div>{stunt.type}: {stunt.value} ({stunt.approach})</div>)
      return rslt
    }, [])
  }

  render () {
    return (
      <CharacterWrapper>

        <Helmet
          title='Masters of Umdaar Character Generator'
        />

        {this.renderBioform()}
        <StuntBlock>
          <u>Stunts</u>
          {this.renderStunts()}
        </StuntBlock>
        <Button onClick={this.handleClick.bind(this)}>
          Click to Fire Up the Recombinator
        </Button>

      </CharacterWrapper>
    )
  }
}

UmdaarGenerator.defaultProps = {
  animals: [],
  stunts: []
}

UmdaarGenerator.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  animals: PropTypes.array,
  stunts: PropTypes.array,
  primaryApproach: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  name: makeSelectName(),
  type: makeSelectType(),
  animals: makeSelectAnimals(),
  primaryApproach: makeSelectPrimaryApproach(),
  stunts: makeSelectStunts()
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({setCharacter}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UmdaarGenerator)

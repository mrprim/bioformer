/*
 *
 * MastersOfUmdaarCharacter
 *
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Button from '../../components/Button'
import CharacterWrapper from './CharacterWrapper'
import { createStructuredSelector } from 'reselect'
import {setCharacter} from './actions'
import buildCharacter from '../../utils/buildCharacter'
import {
  makeSelectBioformType,
  makeSelectBioformAnimals,
  makeSelectBioformApproach
} from './selectors'

export class MastersOfUmdaarCharacter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
    this.generateCharacter()
  }

  generateCharacter () {
    const character = buildCharacter()
    this.props.actions.setCharacter(character)
  }

  handleClick () {
    this.generateCharacter()
  }

  renderCharacterMessage () {
    const {bioformType, bioformAnimals, bioformApproach} = this.props
    const animalString = bioformAnimals.length ? bioformAnimals.join('/').trim() + '-' : ''
    return (<div>
      {' Umga the ' +
        bioformApproach + ' ' +
        animalString +
        bioformType

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

MastersOfUmdaarCharacter.defaultProps = {
  bioformAnimals: []
}

MastersOfUmdaarCharacter.propTypes = {
  bioformType: PropTypes.string,
  bioformAnimals: PropTypes.array,
  bioformApproach: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  bioformType: makeSelectBioformType(),
  bioformAnimals: makeSelectBioformAnimals(),
  bioformApproach: makeSelectBioformApproach()
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({setCharacter}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MastersOfUmdaarCharacter)

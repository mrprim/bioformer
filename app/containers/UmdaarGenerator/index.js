import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Button from '../../components/Button'
import CharacterWrapper from './components/CharacterWrapper'
import ApproachesBlock from './components/ApproachesBlock'
import StuntsBlock from './components/StuntsBlock'
import { createStructuredSelector } from 'reselect'
import {setCharacter} from './actions'
import characterGenerator from './utils/characterGenerator'
import { toTitleCase } from '../../utils/strings'
import {
  makeSelectName,
  makeSelectType,
  makeSelectAnimals,
  makeSelectApproaches,
  makeSelectDescriptor,
  makeSelectStunts,
  makeSelectPrimaryApproach,
  makeSelectAspects
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

  renderSummary () {
    const {name, type, animals, descriptor} = this.props
    const animalString = animals.length ? animals.join('/').trim() + '-' : ''
    const summary = name + ' the ' + descriptor + ' ' + animalString + type
    return (<div>
      {toTitleCase(summary)}
    </div>)
  }

  renderApproaches () {
    const {approaches = []} = this.props
    let i = 0
    return approaches.map(app => {
      return <div key={i++}>{app.approach}: {app.value}</div>
    })
  }

  renderStunts () {
    const {stunts = []} = this.props
    let i = 0
    return stunts.reduce((rslt, stunt) => {
      rslt.push(<div key={i++}>{stunt.type}: {stunt.value} ({stunt.approach})</div>)
      return rslt
    }, [])
  }

  render () {
    return (
      <CharacterWrapper>

        <Helmet
          title='Masters of Umdaar Character Generator'
        />

        {this.renderSummary()}

        <ApproachesBlock>
          <u>Approaches</u>
          {this.renderApproaches()}
        </ApproachesBlock>

        <StuntsBlock>
          <u>Stunts</u>
          {this.renderStunts()}
        </StuntsBlock>

        <Button onClick={this.handleClick.bind(this)}>
          Click to Fire Up the Recombinator
        </Button>

      </CharacterWrapper>
    )
  }
}

UmdaarGenerator.defaultProps = {
  animals: [],
  stunts: [],
  approaches: []
}

UmdaarGenerator.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  animals: PropTypes.array,
  stunts: PropTypes.array,
  approaches: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
  name: makeSelectName(),
  type: makeSelectType(),
  animals: makeSelectAnimals(),
  primaryApproach: makeSelectPrimaryApproach(),
  approaches: makeSelectApproaches(),
  stunts: makeSelectStunts(),
  descriptor: makeSelectDescriptor(),
  aspects: makeSelectAspects()
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({setCharacter}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UmdaarGenerator)

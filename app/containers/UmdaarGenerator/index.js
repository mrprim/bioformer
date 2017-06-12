import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import GiantGoogleButton from '../../components/GiantGoogleButton'
import CharacterWrapper from './components/CharacterWrapper'
import LabelValueItem from './components/LabelValueItem.js'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
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
  makeSelectAspects,
  makeSelectClass
} from './selectors'

export class UmdaarGenerator extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
    this.generateCharacter()
  }

  generateCharacter () {
    const character = characterGenerator()
    this.props.actions.setCharacter(character)
  }

  handleGenerateCharacterClick () {
    this.generateCharacter()
  }

  renderSummary () {
    const {name, aspects} = this.props

    const summary = name + ' the ' + aspects.mainConcept
    return (<div>
      {toTitleCase(summary)}
    </div>)
  }

  renderApproaches () {
    const {approaches = []} = this.props
    return approaches.map((app, i) => {
      return <LabelValueItem key={i}><label>{app.approach}</label> <span>+{app.value}</span></LabelValueItem>
    })
  }

  renderStunts () {
    const {stunts = []} = this.props
    return stunts.map((stunt, i) => {
      return <LabelValueItem key={i}><label>{stunt.type}</label> <span>{stunt.value} ({stunt.approach})</span></LabelValueItem>
    })
  }

  renderAspects () {
    const { mainConcept, motivation, personal, shared } = this.props.aspects
    const rslt = []
    rslt.push(<LabelValueItem key='0'><label>Main Concept</label> <span><em>{mainConcept}</em></span></LabelValueItem>)
    rslt.push(<LabelValueItem key='1'><label>Motivation</label> <span><em>{motivation}</em></span></LabelValueItem>)
    rslt.push(<LabelValueItem key='2'><label>Personal</label> <span><em>{personal}</em></span></LabelValueItem>)
    rslt.push(<LabelValueItem key='3'><label>Shared</label> <span><em>{shared}</em></span></LabelValueItem>)

    return rslt
  }

  render () {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <CharacterWrapper>
            <Helmet title='Masters of Umdaar Character Generator' />

            <div className='summary'>
              {this.renderSummary()}
            </div>

            <div className='aspects text-left'>
              <h3>Aspects</h3>
              {this.renderAspects()}
            </div>

            <div className='approaches text-left'>
              <h3>Approaches</h3>
              {this.renderApproaches()}
            </div>

            <div className='stunts text-left'>
              <h3>Stunts</h3>
              {this.renderStunts()}
            </div>

            <GiantGoogleButton onClick={this.handleGenerateCharacterClick.bind(this)}>
              &#9861;
            </GiantGoogleButton>

          </CharacterWrapper>
        </ThemeProvider>
      </div>
    )
  }
}

UmdaarGenerator.defaultProps = {
  animals: [],
  stunts: [],
  approaches: [],
  aspects: {}
}

UmdaarGenerator.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  animals: PropTypes.array,
  stunts: PropTypes.array,
  approaches: PropTypes.array,
  descriptor: PropTypes.string,
  characterClass: PropTypes.string,
  aspects: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  name: makeSelectName(),
  type: makeSelectType(),
  animals: makeSelectAnimals(),
  primaryApproach: makeSelectPrimaryApproach(),
  approaches: makeSelectApproaches(),
  stunts: makeSelectStunts(),
  descriptor: makeSelectDescriptor(),
  aspects: makeSelectAspects(),
  characterClass: makeSelectClass()
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({setCharacter}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UmdaarGenerator)

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import GiantGoogleButton from '../../components/GiantGoogleButton'
import CharacterWrapper from './components/CharacterWrapper'
import PageWrapper from './components/PageWrapper'
import LabelValueItem from './components/LabelValueItem.js'
import Heading from './components/Heading'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'
import { createStructuredSelector } from 'reselect'
import { fetchRandomCharacter } from './actions'
import { toTitleCase } from '../../utils/strings'
import ladder from '../../../api/umdaar/data/ladder'
import {
  makeSelectName,
  makeSelectType,
  makeSelectAnimals,
  makeSelectApproaches,
  makeSelectDescriptor,
  makeSelectStunts,
  makeSelectPrimaryApproach,
  makeSelectAspects,
  makeSelectClass,
  makeSelectCharacterExists
} from './selectors'
import logo from '../../../assets/logo.png'

export class UmdaarGenerator extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
    this.generateCharacter()
  }

  generateCharacter () {
    this.props.actions.fetchRandomCharacter()
  }

  handleGenerateCharacterClick () {
    this.generateCharacter()
  }

  renderSummary () {
    const {name, aspects} = this.props

    const summary = name + ' the ' + aspects.bioform
    return (<h2>
      {toTitleCase(summary)}
    </h2>)
  }

  renderApproaches () {
    const {approaches = []} = this.props
    return approaches.map((app, i) => {
      return <LabelValueItem key={i}><label>{app.approach}</label> <span> {toTitleCase(ladder[app.value])} (+{app.value})</span></LabelValueItem>
    })
  }

  renderStunts () {
    const {stunts = []} = this.props
    return stunts.map((stunt, i) => {
      return <LabelValueItem key={i}><label>{stunt.type}</label> <span>{stunt.value} ({stunt.approach})</span></LabelValueItem>
    })
  }

  renderAspects () {
    const { bioform, motivation, personal, shared } = this.props.aspects
    const rslt = []
    rslt.push(<LabelValueItem key='0'><label>Bioform</label> <span><em>{toTitleCase(bioform)}</em></span></LabelValueItem>)
    rslt.push(<LabelValueItem key='1'><label>Motivation</label> <span><em>{toTitleCase(motivation)}</em></span></LabelValueItem>)
    rslt.push(<LabelValueItem key='2'><label>Personal</label> <span><em>{toTitleCase(personal)}</em></span></LabelValueItem>)
    rslt.push(<LabelValueItem key='3'><label>Shared</label> <span><em>{toTitleCase(shared)}</em></span></LabelValueItem>)

    return rslt
  }

  renderEmpty () {
    return null
  }

  renderCharacter () {
    return (<div>

      <div className='summary'>
        {this.renderSummary()}
      </div>

      <div className='aspects text-left'>
        <Heading>Aspects</Heading>
        {this.renderAspects()}
      </div>

      <div className='approaches text-left'>
        <Heading>Approaches</Heading>
        {this.renderApproaches()}
      </div>

      <div className='stunts text-left'>
        <Heading>Stunts</Heading>
        {this.renderStunts()}
      </div>

    </div>)
  }

  render () {
    const { characterExists } = this.props

    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Helmet title='Masters of Umdaar Character Generator' />
          <CSSTransitionGroup
            transitionName='umdaar'
            transitionAppear
            transitionAppearTimeout={800}
            transitionEnterTimeout={800}
            transitionLeaveTimeout={800}>

            <CharacterWrapper>
              {characterExists ? this.renderCharacter() : this.renderEmpty()}
            </CharacterWrapper>

          </CSSTransitionGroup>

          <GiantGoogleButton onClick={this.handleGenerateCharacterClick.bind(this)}>
            &#9861;
          </GiantGoogleButton>
        </PageWrapper>

      </ThemeProvider>
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
  characterClass: makeSelectClass(),
  characterExists: makeSelectCharacterExists()
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({fetchRandomCharacter}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UmdaarGenerator)

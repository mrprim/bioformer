import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import GiantGoogleButton from '../../components/GiantGoogleButton'
import CharacterWrapper from './components/CharacterWrapper'
import Character from './components/Character'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'
import { createStructuredSelector } from 'reselect'
import { fetchRandomCharacter } from './actions'
import { Grid, Row, Col } from 'react-bootstrap'

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

  renderCharacter () {
    return <Character {...this.props} />
  }

  renderEmpty () {
    return null
  }

  render () {
    const { characterExists } = this.props

    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet title='Masters of Umdaar Character Generator' />
          <CSSTransitionGroup
            transitionName='umdaar'
            transitionAppear
            transitionAppearTimeout={800}
            transitionEnterTimeout={800}
            transitionLeaveTimeout={800}>

            <Grid>
              <Row>
                <Col xs={12} mdOffset={3} md={6}>
                  <CharacterWrapper>
                    {characterExists ? this.renderCharacter() : this.renderEmpty()}
                  </CharacterWrapper>
                </Col>
              </Row>
            </Grid>

          </CSSTransitionGroup>

          <GiantGoogleButton onClick={this.handleGenerateCharacterClick.bind(this)}>
            &#9861;
          </GiantGoogleButton>
        </div>

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

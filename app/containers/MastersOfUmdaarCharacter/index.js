/*
 *
 * MastersOfUmdaarCharacter
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import makeSelectMastersOfUmdaarCharacter from './selectors'
import messages from './messages'
import {setCharacter} from './actions'
import buildCharacter from '../../utils/buildCharacter'
import {get} from 'lodash'

export class MastersOfUmdaarCharacter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
    this.generateCharacter()
  }

  generateCharacter () {
    const character = buildCharacter()
    const action = setCharacter(character)
    this.props.dispatch(action)
  }

  handleClick () {
    this.generateCharacter()
  }
  render () {
    const bioform = get(this, 'props.MastersOfUmdaarCharacter.character.bioform') || {}

    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          Click to Fire Up the Recombinator
        </button>

        <div>
          {bioform.type}
        </div>
        <div>
          {bioform.animals.length ? 'Animals: ' + bioform.animals.join(' | ') : undefined}
        </div>
        <div>
          {'Approaches: ' + bioform.approaches.join(' | ')}
        </div>
      </div>
    )
  }
}

MastersOfUmdaarCharacter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  character: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  MastersOfUmdaarCharacter: makeSelectMastersOfUmdaarCharacter()
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MastersOfUmdaarCharacter)

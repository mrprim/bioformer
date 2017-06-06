/*
 *
 * MastersOfUmdaarCharacter reducer
 *
 */

import { fromJS } from 'immutable'
import {
  GENERATE_CHARACTER
} from './constants'

const initialState = fromJS({})

function mastersOfUmdaarCharacterReducer (state = initialState, action) {
  switch (action.type) {
    case GENERATE_CHARACTER:
      return {...state, character: action.character}
    default:
      return state
  }
}

export default mastersOfUmdaarCharacterReducer

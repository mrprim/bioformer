/*
 *
 * MastersOfUmdaarCharacter reducer
 *
 */

import { fromJS } from 'immutable'
import {
  SET_CHARACTER
} from './constants'

const initialState = fromJS({})

function umdaarGeneratorReducer (state = initialState, action) {
  switch (action.type) {
    case SET_CHARACTER:
      return fromJS({...state, character: action.character})
    default:
      return state
  }
}

export default umdaarGeneratorReducer

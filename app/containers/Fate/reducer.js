/*
 *
 * MastersOfUmdaarCharacter reducer
 *
 */

import { fromJS } from 'immutable'
import {
  SET_WEAPON
} from './constants'

const initialState = fromJS({})

function fateReducer (state = initialState, action) {
  switch (action.type) {
    case SET_WEAPON:
      return fromJS({...state, weapons: [action.weapon]})
    default:
      return state
  }
}

export default fateReducer

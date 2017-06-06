/*
 *
 * MastersOfUmdaarCharacter actions
 *
 */

import {
  SET_CHARACTER
} from './constants'

export function setCharacter (character) {
  return {
    type: SET_CHARACTER,
    character
  }
}

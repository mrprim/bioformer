/*
 *
 * MastersOfUmdaarCharacter actions
 *
 */

import {
  GENERATE_CHARACTER
} from './constants'

export function generateCharacter (character) {
  return {
    type: GENERATE_CHARACTER,
    character
  }
}

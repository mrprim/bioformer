import {
  SET_CHARACTER,
  FETCH_RANDOM_CHARACTER
} from './constants'

export function setCharacter (character) {
  return {
    type: SET_CHARACTER,
    character
  }
}

export function fetchRandomCharacter () {
  return {
    type: FETCH_RANDOM_CHARACTER
  }
}

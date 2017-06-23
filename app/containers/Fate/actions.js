import {
  SET_WEAPON,
  FETCH_RANDOM_WEAPON
} from './constants'

export function setWeapon (weapon) {
  return {
    type: SET_WEAPON,
    weapon
  }
}

export function fetchRandomWeapon () {
  return {
    type: FETCH_RANDOM_WEAPON
  }
}

import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_RANDOM_WEAPON, SET_WEAPON } from './constants'
import request from '../../utils/request'

export function * fetchRandomWeapon (action) {
  yield put({type: SET_WEAPON})
  const weapon = yield call(request, '/api/fate/weapon')
  yield put({type: SET_WEAPON, weapon})
}

export function * initialize () {
  yield takeEvery(FETCH_RANDOM_WEAPON, fetchRandomWeapon)
}

export default [
  initialize
]

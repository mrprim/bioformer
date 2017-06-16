import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_RANDOM_CHARACTER, SET_CHARACTER } from './constants'
import request from '../../utils/request'

export function * fetchRandomCharacter (action) {
  const character = yield call(request, '/api/umdaar/character')
  yield put({type: SET_CHARACTER, character})
}

export function * initialize () {
  yield takeEvery(FETCH_RANDOM_CHARACTER, fetchRandomCharacter)
}

export default [
  initialize
]

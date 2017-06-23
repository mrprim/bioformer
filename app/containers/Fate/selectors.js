import { createSelector } from 'reselect'
import { get } from 'lodash'

const selectFateDomain = () => (state) => state.get('fate').toJS()

const makeSelectFateDomain = () => createSelector(
  selectFateDomain(),
  (fate) => fate
)

const makeSelectWeapons = () => createSelector(
  selectFateDomain(),
  (fate) => get(fate, 'weapons')
)
export default makeSelectFateDomain
export {
  selectFateDomain,
  makeSelectFateDomain,
  makeSelectWeapons
}

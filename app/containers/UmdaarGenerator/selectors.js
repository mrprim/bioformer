import { createSelector } from 'reselect'
import { get } from 'lodash'

/**
 * Direct selector to the mastersOfUmdaarCharacter state domain
 */
const selectUmdaarDomain = () => (state) => state.get('umdaar').toJS()

const makeSelectUmdaarDomain = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => umdaar
)

const makeSelectName = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => get(umdaar, 'character.name')
)

const makeSelectType = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => get(umdaar, 'character.type')
)

const makeSelectAnimals = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => get(umdaar, 'character.animals')
)

const makeSelectPrimaryApproach = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => get(umdaar, 'character.primaryApproach')
)

export default makeSelectUmdaarDomain
export {
  selectUmdaarDomain,
  makeSelectUmdaarDomain,
  makeSelectName,
  makeSelectType,
  makeSelectAnimals,
  makeSelectPrimaryApproach
}

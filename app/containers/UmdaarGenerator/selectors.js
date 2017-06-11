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

const makeSelectApproaches = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => get(umdaar, 'character.approaches')
)

const makeSelectPrimaryApproach = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => get(umdaar, 'character.approaches[0].approach')
)

const makeSelectStunts = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => get(umdaar, 'character.stunts')
)

const makeSelectAspects = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => get(umdaar, 'character.aspects')
)

const makeSelectDescriptor = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => get(umdaar, 'character.descriptor')
)

const makeSelectClass = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => get(umdaar, 'character.class')
)
export default makeSelectUmdaarDomain
export {
  selectUmdaarDomain,
  makeSelectUmdaarDomain,
  makeSelectName,
  makeSelectType,
  makeSelectAnimals,
  makeSelectApproaches,
  makeSelectPrimaryApproach,
  makeSelectStunts,
  makeSelectAspects,
  makeSelectClass,
  makeSelectDescriptor
}

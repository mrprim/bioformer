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

const makeSelectBioformType = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => get(umdaar, 'character.bioform.type')
)

const makeSelectBioformAnimals = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => get(umdaar, 'character.bioform.animals')
)

const makeSelectBioformApproach = () => createSelector(
  selectUmdaarDomain(),
  (umdaar) => get(umdaar, 'character.bioform.approach')
)

export {
  selectUmdaarDomain,
  makeSelectUmdaarDomain,
  makeSelectBioformType,
  makeSelectBioformAnimals,
  makeSelectBioformApproach
}

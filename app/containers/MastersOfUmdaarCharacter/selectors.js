import { createSelector } from 'reselect'

/**
 * Direct selector to the mastersOfUmdaarCharacter state domain
 */
const selectMastersOfUmdaarCharacterDomain = () => (state) => state.get('umdaar')

/**
 * Other specific selectors
 */

/**
 * Default selector used by MastersOfUmdaarCharacter
 */

const makeSelectMastersOfUmdaarCharacter = () => createSelector(
  selectMastersOfUmdaarCharacterDomain(),
  (substate) => substate
)

export default makeSelectMastersOfUmdaarCharacter
export {
  selectMastersOfUmdaarCharacterDomain
}

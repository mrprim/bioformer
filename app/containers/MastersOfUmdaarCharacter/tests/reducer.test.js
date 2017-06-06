
import { fromJS } from 'immutable';
import mastersOfUmdaarCharacterReducer from '../reducer';

describe('mastersOfUmdaarCharacterReducer', () => {
  it('returns the initial state', () => {
    expect(mastersOfUmdaarCharacterReducer(undefined, {})).toEqual(fromJS({}));
  });
});

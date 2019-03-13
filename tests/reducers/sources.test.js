//import { addSource } from '../../src/actions';
import sources from '../../src/reducers/sources';
import { defaultState } from '../../src/reducers/sources';

describe('sources', () => {
  /*
  const addId = 'url1';
  const addSource = { name: 'name1', url: 'url1' };
  const beforeAdd = {
    'url0': { name: 'name0', url: 'url0' }
  };
  const afterAdd = {
    'url0': { name: 'name0', url: 'url0' },
    'url1': { name: 'name1', url: 'url1' }
  };
  */

  test('Should return default state for undefined state', () => {
    expect(sources(undefined, { type: null })).toEqual(defaultState);
  });

  test('Should return same state for undefined action', () => {
    expect(sources({}, { type: null })).toEqual(defaultState);
  });

  /*
  test('Should add source from object and id', () => {
    expect(sources(beforeAdd, { type: types.ADD_SOURCE, id: addId, source: addSource})).toEqual(afterAdd);
  });
  */
});

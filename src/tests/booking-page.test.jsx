import { describe, expect, test } from 'vitest';
import { fetchAPI, initializeTimes, updateTimes } from '../utils/utils.js';

const mockUsedNavigate = vitest.fn();
describe('Booking Form tests', () => {

  test('initializeTimes returns the correct expected value', () => {
    const today = new Date();
    const initialState = initializeTimes();
    const expectedResult = { times: fetchAPI(today) };
    expect(initialState).toEqual(expectedResult);
  });

  test('updateTimes returns the same state', () => {
    const state = {
      times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    };
    const action = { type: 'SOME_ACTION' };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
  });
});
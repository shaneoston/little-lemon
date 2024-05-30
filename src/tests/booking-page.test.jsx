import { describe, expect, test } from 'vitest';
import { fetchAPI, initializeTimes, updateTimes } from '../utils/utils.js';

const mockUseNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate
}));

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

  // test('form validation', async () => {
  //
  //   render(
  //     <BookingForm
  //       availableTimes={{
  //         times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  //       }}
  //       dispatch={vi.fn((action) => action)}
  //     />
  //   );
  //   const user = userEvent.setup();
  //   const numberGuestField = screen.getByTestId('booking-guests');
  //   const submitButton = screen.getByDisplayValue('Make Your Booking');
  //
  //   await user.type(numberGuestField, '0');
  //
  //   await user.click(submitButton);
  //   const numberGuestFieldError = screen.getByTestId('guests-error');
  //   expect(numberGuestFieldError).toHaveTextContent('Must be at least 1');
  // });
});
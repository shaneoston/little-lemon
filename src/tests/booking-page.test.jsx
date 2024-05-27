import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BookingPage } from '../pages';

describe('BookingPage tests', () => {
  test('Renders the BookingPage heading', () => {
    render(<BookingPage />);
    const title = screen.getByText('Make a booking');
    expect(title).toBeInTheDocument();
  });

  test('initializeTimes returns array of times', () => {
    const { getTestId, getAllByTestId } = render(<BookingPage />);
    fireEvent.change(getTestId('times'), { target: { value: 0 } });
    let options = getAllByTestId('times-option');
    console.log(options);
  });
});
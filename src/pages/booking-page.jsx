import { BookingForm, BookingHero } from '../components';
import { useReducer } from 'react';
import { initializeTimes, updateTimes } from '../utils/utils.js';

export const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  
  return (
    <>
      <BookingHero />
      <div className="container max-w-4xl p-6 md:pt-12 sm:p-6">
        <h1 className="font-serif w-100 text-6xl">Make a booking</h1>
      </div>
      <div className="container max-w-4xl px-6">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch} />
      </div>
    </>
  );
};

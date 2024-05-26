import { useState } from 'react';

export const BookingForm = ({ handleBooking, times, handleTime }) => {
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: ''
  });

  const updateKey = (key, { target: { value } }) => {
    setBookingData({
      ...bookingData,
      [key]: value || null
    });
    if (key === 'time') handleTime();
  };

  return (
    <>
      <form className="grid max-w-4xl gap-3 text-2xl mb-12">
        <label htmlFor="booking-date">Choose date</label>
        <input className="border border-gray-600 p-6 mb-3"
               value={bookingData.date}
               onChange={evt => updateKey('date', evt)}
               type="date"
               id="booking-date" />
        <label htmlFor="booking-time">Choose time</label>
        <select className="border border-gray-600 p-6 mb-3"
                id="booking-time"
                value={bookingData.time}
                onChange={evt => updateKey('time', evt)}>
          {times().times.map(time => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input className="border border-gray-600 p-6 mb-3"
               type="number"
               placeholder="1"
               min="1"
               max="10"
               id="guests"
               value={bookingData.guests}
               onChange={evt => updateKey('guests', evt)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select className="border border-gray-600 p-6 mb-3"
                id="occasion"
                value={bookingData.occasion}
                onChange={evt => updateKey('occasion', evt)}>
          <option value=""></option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        <input className="bg-llgold font-sans px-4 py-6 text-xl font-semibold rounded-lg w-full md:w-48 md:h-14"
               type="button"
               value="Make Your booking"
               onClick={handleBooking(bookingData)} />
      </form>
    </>
  );
};

import { BookingForm, BookingHero } from '../components';

export const BookingPage = () => {
  const handleBooking = (booking => {
    console.log(booking);
  });

  return (
    <>
      <BookingHero />
      <div className="container max-w-4xl p-6 md:pt-12 sm:p-6">
        <h1 className="font-serif w-100 text-6xl">Make a booking</h1>
      </div>
      <div className="container max-w-4xl px-6">
        <BookingForm handleBooking={handleBooking} />
      </div>
    </>
  );
};

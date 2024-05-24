import { BookingForm, BookingHero } from '../components';

export const BookingPage = () => {
  return (
    <>
      <BookingHero />
      <div className="container max-w-4xl p-6 md:pt-12 sm:p-6">
        <h1 className="font-serif w-1/2 text-6xl pb-4 md:w-3/4">Make a booking</h1>
      </div>
      <div className="container max-w-4xl p-6">
        <BookingForm />
      </div>
    </>
  );
};

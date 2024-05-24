export const BookingHero = () => {
  return (
    <div className="bg-llgreen">
      <div className="container max-w-4xl md:flex bg-llgreen p-0 md:h-84">
        <div className="pb-6 md:order-last md:w-1/2 md:pt-8 md:px-6">
          <img className="object-cover w-full h-60 md:rounded-xl"
               src="/src/assets/restaurant.jpg"
               alt="food" />
        </div>
        <div className="p-6 md:order-first md:w-1/2">
          <h1 className="text-llgold font-serif text-6xl">Little Lemon</h1>
          <h2 className="text-white font-serif text-3xl">Chicago</h2>
          <p className="text-white text-lg font-sans pb-6">
            Please join us for an extraordinary meal in our beautiful restaurant. You and
            your friends are sure to have a fantastic time.
          </p>
        </div>
      </div>
    </div>
  );
};
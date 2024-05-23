export const Hero = () => {
  return (
    <div className="bg-llgreen">
      <div className="container max-w-4xl md:flex bg-llgreen p-0 md:h-84">
        <div className="md:order-last md:w-1/2 md:pt-8 md:pl-6 md:pr-6">
          <img className="object-cover w-full h-60 md:rounded-xl"
               src="/src/assets/restauranfood.jpg"
               alt="food" />
        </div>
        <div className="p-6 md:order-first md:w-1/2">
          <h1 className="text-llgold font-serif text-6xl">Little Lemon</h1>
          <h2 className="text-white font-serif text-3xl">Chicago</h2>
          <p className="text-white text-lg font-sans pb-6">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="bg-llgold w-full px-8 py-3 text-xl font-semibold rounded-lg md:w-3/4">Reserve a Table
          </button>
        </div>
      </div>
    </div>
  );
};
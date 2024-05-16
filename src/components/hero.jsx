export const Hero = () => {
  return (
    <div className="lg:flex">
      <div className="lg:flex lg:justify-around lg:order-last lg:w-1/2 lg:pt-6 lg:pr-6">
        <img className="object-cover w-full h-60 lg:rounded-xl"
             src="/src/assets/restauranfood.jpg"
             alt="food" />
      </div>
      <div className="p-6 lg:order-first lg:w-1/2">
        <h1 className="text-llgold font-serif text-6xl">Little Lemon</h1>
        <h2 className="text-white font-serif text-3xl">Chicago</h2>
        <p className="text-white text-lg font-sans pb-6">
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <button className="bg-llgold w-full px-8 py-3 rounded-lg lg:w-1/2">Reserve a Table</button>
      </div>
    </div>
  );
};
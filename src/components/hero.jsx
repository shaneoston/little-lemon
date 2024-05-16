export const Hero = () => {
  return (
    <>
      <div>
        <img className="object-cover w-full h-60" src="/src/assets/restauranfood.jpg" alt="food" />
      </div>
      <div className="px-6 pb-6 lg:basis-1/2">
        <h1 className="text-llgold font-serif text-6xl pt-6">Little Lemon</h1>
        <h2 className="text-white font-serif text-3xl">Chicago</h2>
        <p className="text-white text-lg font-sans pb-6">
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <button className="bg-llgold w-full px-8 py-3 rounded-lg">Reserve a Table</button>
      </div>
    </>
  );
};
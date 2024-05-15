export const Hero = () => {
  return (
    <>
      <div className="basis-1/2">
        <h1 className="text-llgold font-serif text-6xl pt-6">Little Lemon</h1>
        <h2 className="text-white font-serif text-3xl">Chicago</h2>
        <p className="text-white text-lg font-sans pr-28 pb-6">
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
      </div>
      <div>
        <img src="/src/assets/restauranfood.jpg" alt="food" />
      </div>
    </>
  );
};
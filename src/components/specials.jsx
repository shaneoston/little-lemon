import { SpecialCard } from './special-card.jsx';

export const Specials = () => {
  return (
    <div className="container">
      <div className="p-6 lg:flex lg:justify-between lg:pt-24">
        <h1 className="font-serif text-6xl pb-4">This weeks specials!</h1>
        <button className="bg-llgold font-sans px-4 py-3 text-xl font-semibold rounded-lg w-full">Online menu</button>
      </div>
      <div>
        <SpecialCard />
      </div>
    </div>
  );
};
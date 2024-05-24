import { SpecialCard } from './special-card.jsx';
import GreekSalad from '../../assets/greekSalad.jpg';
import Bruchetta from '../../assets/bruchetta.svg';
import Dessert from '../../assets/lemondessert.jpg';

export const Specials = () => {
  const specials = [
    {
      image: GreekSalad,
      name: 'Greek Salad',
      desc: 'A delicious and healthy salad made with fresh vegetables and feta cheese.',
      price: 12.99
    },
    {
      image: Bruchetta,
      name: 'Bruchetta',
      desc: 'Our bruchetta is made from grilled bread that has been smeared with garlic, salt and olive oil.',
      price: 5.99
    },
    {
      image: Dessert,
      name: 'Lemon Dessert',
      desc: `This comes straight from grandma's recipe book, every ingredient has been sourced from Italy`,
      price: 5.00
    }
  ];

  return (
    <div className="container max-w-4xl p-6 md:pt-12 sm:p-6">
      <div className="md:flex  md:justify-between">
        <h1 className="font-serif w-1/2 text-6xl pb-4 md:w-3/4">This weeks specials!</h1>
        <button className="bg-llgold font-sans px-4 py-3 text-xl font-semibold rounded-lg w-full md:w-48 md:h-14">
          Online menu
        </button>
      </div>
      <div className="md:flex md:gap-4">{specials.map((special, idx) => (
          <SpecialCard key={idx} {...special} />
        )
      )}</div>
    </div>
  );
};
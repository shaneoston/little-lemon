import greekSalad from '../assets/greekSalad.jpg';

export const SpecialCard = () => {
  return (
    <article className="w-full px-6">
      <div className="flex justify-between rounded-lg border border-amber-500">
        <img className="rounded-tl-lg rounded-bl-lg h-32" src={greekSalad} alt={'greek salad'} />
        <div className={'flex justify-between'}>
          <div className="flex flex-col p-2">
            <div className={'flex justify-between'}>
              <h2 className="text-lg font-bold">Greek Salad</h2>
              <p className={'text-base font-bold'}>$12.99</p>
            </div>
            <p className="text-sm text-gray-500">A delicious and healthy salad made with fresh vegetables and feta
              cheese.</p>
          </div>

        </div>
      </div>
    </article>
  );
};
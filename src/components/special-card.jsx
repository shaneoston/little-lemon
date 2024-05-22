export const SpecialCard = ({ image, name, desc, price }) => {
  return (
    <article className="w-full px-6 mb-6">
      <div className="flex justify-between rounded-l bg-gray-300">
        <img className="rounded-tl-lg rounded-bl-lg h-40 w-50 max-w-50" src={image} alt={name} />
        <div className="flex justify-between px-2">
          <div className="flex flex-col p-2">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold">{name}</h2>
              <p className="text-base font-bold text-llsalmon">${price}</p>
            </div>
            <p className="text-sm text-gray-500">{desc}</p>
            <p className="text-base font-bold pt-5">
              Order a delivery
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
export const SpecialCard = ({ image, name, desc, price }) => {
  return (
    <article className="w-full mb-6 md:w-1/3 md:flex">
      <div className="flex rounded-lg bg-gray-300 md:flex-col">
        <img className="rounded-tl-lg rounded-bl-lg h-40 w-50 max-w-50 md:w-full md:object-cover md:rounded-tr-lg"
             src={image}
             alt={name} />
        <div className="flex flex-col justify-between p-3">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold">{name}</h2>
              <p className="text-base font-bold text-llsalmon">${price}</p>
            </div>
            <p className="text-sm text-gray-500">{desc}</p>
          </div>
          <p className="text-base font-bold">
            Order a delivery
          </p>
        </div>
      </div>
    </article>
  );
};
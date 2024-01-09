const SubscriptionCard = (props) => {
  const {name,meals,prioDelivery,specialItems,customMeal,multiplePlaces,price} = props.Data;
    return(
        <div
        className="flex flex-col rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full p-8 m-[3%] mr-[3%]">
        <div
          className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
          <p className="block text-sm antialiased leading-normal text-white uppercase">
            {name}
          </p>
          <h1 className="flex justify-center gap-1 mt-6 antialiased tracking-normal text-white text-6xl">
            <span className="mt-2 text-3xl"> ₹</span>{price}
            <span className="self-end text-3xl">/mo</span>
          </h1>
        </div>
        <div className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4 ml-[10%]">
              <p className="block text-base antialiased leading-relaxed text-inherit">{meals}
              </p>
            </li>
            <li className="flex items-center gap-4 ml-[10%]">
              <p className="block text-base antialiased leading-relaxed text-inherit">
                {prioDelivery}
              </p>
            </li>
            <li className="flex items-center gap-4 ml-[10%]">
              <p className="block text-base antialiased leading-relaxed text-inherit">
                {specialItems}
              </p>
            </li>
            <li className="flex items-center gap-4 ml-[10%]">
              <p className="block text-base antialiased leading-relaxed text-inherit">
                {customMeal}
              </p>
            </li>
            <li className="flex items-center gap-4 ml-[10%]">
              <p className="block text-base antialiased leading-relaxed text-inherit">
                {multiplePlaces}
              </p>
            </li>
          </ul>
        </div>
        <div className="p-0 mt-12">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-black shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            type="button">
            Buy Now
          </button>
        </div>
      </div>
    )
}
export default SubscriptionCard;
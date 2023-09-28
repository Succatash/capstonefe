/* eslint-disable react/prop-types */
export default function CartItem({ product, quantity }) {
  return (
    <div className=" flex w-full flex-row py-3 shadow-md">
      <img
        src={product.image}
        alt=""
        className=" h-[90px] w-[90px] object-contain pl-3"
      />
      <div className="flex w-8/12 flex-col pl-5 pt-5">
        <p className="h-3/12 line-clamp-2 text-xs font-bold">
          {product.title.slice(0, 75)}
        </p>
        <p className="h-3/12 line-clamp-2 w-3/12 text-xs">
          {product.description}
        </p>
        <div></div>
        <div className=" flex w-6/12 flex-row pt-4  maxMd:justify-start">
          <div className="text-2xl text-checkmarkGreen">
            ${Math.round(((product.price - product.price / 10) * 100) / 100)}
          </div>

          <div className="self-end pl-4 text-lg text-black line-through">
            ${product?.price}
          </div>
        </div>
      </div>
      <button
        className="h-[40px] w-[120px] self-center rounded-full bg-errorRed py-[6px] text-white"
        onClick={() => {}}
      >
        Remove
      </button>
    </div>
  );
}

/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Product from "./product";
import Categories from "./categories";

const ByCategory = ({ cart, setCart }) => {
  const { category } = useParams();

  //

  return (
    <main className="flex h-full w-full flex-col items-center  bg-khaki/10">
      <h1 className="pt-20 text-center text-fs30px font-bold">
        {category.toUpperCase()}
      </h1>
      <Categories
        styling={{
          container: " flex flex-col",
        }}
        cat={category}
        renderProduct={(product) => {
          return (
            <div
              className=" h-4/12 relative z-[1] mb-10 flex w-8/12 flex-col gap-x-1   self-center rounded-md bg-white p-10 shadow-lg"
              key={product.id}
            >
              <Product
                category={category}
                product={product}
                setCart={setCart}
                cart={cart}
                styling={{
                  container:
                    " relative flex flex-col justify-around items-start w-full h-full   z-[1]  min-h-[300px]",
                  svgContainer:
                    "w-6 h-6  absolute right-3 top-0  mt-4 bg-transparent mr-[2px] bg-aeroBlue",
                  title: "hidden",
                  img: " relative w-5/12 w-11/12 self-center p-1 z-20 object-contain ",
                  price: "text-checkmarkGreen",
                  desc: "line-clamp-2 ",
                  button:
                    "relative z-[1000] cursor-default bg-aeroBlue/70  rounded-full text-white p-1 h-3/12 w-9/12 self-center mb-3 text-center active:scale-95 ",
                  subContainer: "px-5 cursor-default",
                  priceBox: "hover:underline",
                  rateBox: "f-full relative  pb-5",
                  count: "text-sm absolute top-0 pt-1 left-[83px] ",
                  rate: `before:content-["★★★★★"]  bg-clip-text  text-transparent bg-gold`,
                  sale: "pl-3",
                }}
              />
            </div>
          );
        }}
      />
    </main>
  );
};

export default ByCategory;

/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import Product from "./product";

const MapProducts = ({ productsByCat, setSingleProduct }) => {
  const { category } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col items-center  bg-khaki/10">
      <h1 className="pt-20 text-center text-fs30px font-bold">
        {category.toUpperCase()}
      </h1>
      {productsByCat.map((product) => {
        return (
          <div
            className=" h-4/12 relative mb-10 flex w-8/12 flex-col gap-x-1 rounded-md  bg-white p-10 shadow-lg"
            key={product.id}
          >
            {/* TODO: finish styling products */}
            <Product
              product={product}
              styling={{
                container:
                  " relative flex flex-col justify-center items-start w-11/12    ",
                svgContainer:
                  "w-6 h-6  absolute right-3 top-0  mt-4 bg-transparent mr-[2px] z-[11] ",
                title: "hidden",
                img: " relative w-5/12 w-11/12 self-center p-1 z-20 object-contain ",
                price: "text-checkmarkGreen",
                desc: "line-clamp-2 ",
                button:
                  "bg-aeroBlue/70  rounded-full text-white p-1 h-3/12 w-9/12 self-center mb-3 text-center",
                subContainer: "px-5 cursor-default",
                priceBox: "hover:underline",
                rateBox: "f-full relative  pb-5",
                count: "text-sm absolute top-0 pt-1 left-[83px] ",
                rate: `before:content-["★★★★★"]  bg-clip-text  text-transparent bg-gold`,
                sale: "pl-3",
              }}
              click={() => {
                navigate(`/${category}/${product.id}`);
                setSingleProduct(product);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MapProducts;

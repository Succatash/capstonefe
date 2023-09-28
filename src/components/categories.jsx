/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Product from "./product";
import { useNavigate } from "react-router-dom";
const Categories = ({ styling, categories }) => {
  const [productsByCat, setProductsByCat] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProductByCategory = async (param) => {
      await fetch(`https://fakestoreapi.com/products/category/${param}?limit=4`)
        .then((res) => res.json())
        .then((json) => {
          setProductsByCat(json);
        });
    };
    getProductByCategory(categories);
  }, [categories]);

  return (
    <div className={styling.container}>
      {productsByCat.map((prod) => {
        return (
          <div
            className=" relative z-0 flex h-full w-full min-w-[200px] flex-col  shadow-lg maxMd:mb-5 maxMd:justify-around"
            key={prod.id}
            onClick={() => {
              navigate(`/${categories}/${prod.id}`);
            }}
          >
            <Product
              category={categories}
              product={prod}
              styling={{
                container:
                  "relative   z-10 flex  h-full w-full min-w-[200px] flex-col justify-between bg-white  ",
                svgContainer:
                  "w-6 h-6  absolute right-3 top-0  mt-4 bg-transparent mr-[2px] z-[11]",
                title: "hidden",
                img: " flex w-[125px] h-[100px]  self-center object-contain mt-8",
                price: "h-3/12 text-sm text-checkmarkGreen",
                desc: "line-clamp-2 text-xs h-3/12 ",
                subContainer: "px-5 cursor-default",
                priceBox: "hover:underline",
                button: "hidden",
                rateBox: "f-full relative  pb-5",
                count: "text-sm absolute top-0 pt-1 left-[83px] ",
                rate: `before:content-["★★★★★"] bg-clip-text  text-transparent bg-gold`,
                sale: `text-xs self-end pl-2`,
              }}
              click={() => {
                navigate(`/${categories}/${prod.id}`);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Categories;

/* eslint-disable react/prop-types */

import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Categories from "./categories";
import Product from "./product";
//TODO:IMPORTANT: fix the home page not to have products then add a backend for categories and products
const Home = ({
  categories,
  setCategories,
  setProductsByCat,
  cart,
  // setFavorites, favorites
}) => {
  useEffect(() => {
    const getCategories = async () => {
      await fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => {
          setCategories(json);
          localStorage.setItem("categories", JSON.stringify(json));
        });
    };
    getCategories();
  }, [setCategories]);

  // TODO:IMPORTANT:add a sorting feature by filtering and setting products
  // console.log(cart);
  return (
    <main className="flex h-screen w-full flex-col items-center bg-khaki/10  px-20 pt-20 ">
      {categories.map((cat, idx) => {
        return (
          <section
            key={cat}
            className=" relative  mb-20  justify-around shadow-2xl maxMd:shadow-none"
          >
            <h1
              className="text-bold cursor-pointer pb-2 text-center text-2xl "
              onClick={() => {
                navigate(`/${cat}`);
              }}
            >
              {cat.toUpperCase()}
            </h1>
            <Categories
              key={idx}
              cat={cat}
              styling={{
                container:
                  "lg:gridHomeContainer sm:gridHomeContainerMedium  md:z-10 lg:z-10  maxMd:h-full ",
              }}
              renderProduct={(products) => {
                return (
                  <div
                    className=" relative z-0 flex h-full w-full min-w-[200px] flex-col  shadow-lg maxMd:mb-5 maxMd:justify-around"
                    key={products.id}
                  >
                    <Product
                      product={products}
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
                    />
                  </div>
                );
              }}
            />
          </section>
        );
      })}
    </main>
  );
};

export default Home;

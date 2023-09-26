/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Product from "./product";
import Categories from "./categories";

const Home = ({
  categories,
  setSingleProduct,
  // setFavorites, favorites

  setProductsByCat,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  // const [filter, setFilter] = useState();

  // TODO:ask tony if he can help fix this issue that all bools turn on click

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [location]);

  const getProductByCategory = async (param) => {
    await fetch(`https://fakestoreapi.com/products/category/${param}`)
      .then((res) => res.json())
      .then((json) => {
        setProductsByCat(json);
      });
  };

  // NOTE: talk to tony on monday and look at the code to see if i can call the getProduct by category without major refactor

  // TODO:IMPORTANT:add a sorting feature by filtering and setting products

  return (
    <main className="flex h-full w-full flex-col items-center bg-khaki/10  px-20 pt-20 ">
      {categories.map((el) => {
        return (
          <section
            key={el}
            className=" maxMd:shadow-none  relative  mb-20 justify-around shadow-2xl"
          >
            <h1
              className="text-bold cursor-pointer pb-2 text-center text-2xl "
              onClick={() => {
                navigate(`/${el}`);
                getProductByCategory(el);
              }}
            >
              {el.toUpperCase()}
            </h1>
            <Categories
              key={el}
              styling={{
                container:
                  "lg:gridHomeContainer sm:gridHomeContainerMedium  md:z-10 lg:z-10  maxMd:h-full ",
              }}
              render={products.map((prod) => {
                return prod.category === el ? (
                  <div
                    className=" maxMd:mb-5 maxMd:justify-around relative z-0 flex h-full w-full  min-w-[200px] flex-col shadow-lg"
                    key={prod.id}
                  >
                    <Product
                      product={prod}
                      styling={{
                        container:
                          "relative   z-10 flex  h-full w-full min-w-[200px] flex-col justify-between bg-white  ",
                        svgContainer:
                          "w-6 h-6  absolute right-3 top-0  mt-4 bg-transparent mr-[2px] z-[11]",
                        title: "hidden",
                        img: " flex w-[125px] h-[125px]  self-center object-contain mt-8",
                        price: "h-3/12",
                        desc: "line-clamp-2 text-xs h-3/12 ",
                        subContainer: "px-5 cursor-default",
                        priceBox: "hover:underline",
                        button: "hidden",
                        rateBox: "f-full relative  pb-5",
                        count: "text-sm absolute top-0 pt-1 left-[83px] ",
                        rate: `before:content-["★★★★★"] bg-clip-text  text-transparent bg-gold`,
                      }}
                      click={() => {
                        navigate(`/${el}/${prod.id}`);
                        setSingleProduct(prod);
                      }}
                    />
                  </div>
                ) : null;
              })}
            />
          </section>
        );
      })}
    </main>
  );
};

export default Home;

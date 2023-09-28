/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Categories from "./categories";

const Home = ({
  categories,
  setCategories,
  // cart,
  // setCart,
  // setFavorites, favorites
}) => {
  const navigate = useNavigate();

  // TODO:ask tony if he can help fix this issue that all bools turn on click

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
  // NOTE: talk to tony on monday and look at the code to see if i can call the getProduct by category without major refactor

  // TODO:IMPORTANT:add a sorting feature by filtering and setting products
  // console.log(cart);
  return (
    <main className="flex h-full w-full flex-col items-center bg-khaki/10  px-20 pt-20 ">
      {categories.map((el) => {
        return (
          <section
            key={el}
            className=" relative  mb-20  justify-around shadow-2xl maxMd:shadow-none"
          >
            <h1
              className="text-bold cursor-pointer pb-2 text-center text-2xl "
              onClick={() => {
                navigate(`/${el}`);
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
              categories={el}
            ></Categories>
          </section>
        );
      })}
    </main>
  );
};

export default Home;

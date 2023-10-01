/* eslint-disable react/prop-types */
import Logo from "./logo";
import { useNavigate, NavLink, Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Navbar({ categories, cart }) {
  const navigate = useNavigate();
  const cartRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState({});

  const total = () => {
    let result = 0;
    cart.map((el) => {
      result += el.qty;
    });
    return result;
  };
  {
    () => {
      console.log(document.scrollTop());
    };
  }
  const price = () => {
    let result = 0;
    cart.map((el) => {
      result += el.qty * el.prod.price;
    });
    return result;
  };

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("login"));

    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <nav className=" relative flex h-16 w-full flex-row bg-white align-middle ">
      <Link to={"/"}>
        <Logo
          styling=" absolute z-30  h-full w-15 text-purple/70 text-center text-[30px] flex items-center left-5 top-0 self-center "
          onClick={() => {
            navigate("/");
          }}
        />
      </Link>
      <div className="widthWithCalcMinusLogo absolute right-0  flex h-[64px] ">
        {categories.map((el, i) => (
          <div
            key={1 + i}
            className="border-x-1 flex flex-row divide-x-2  divide-solid divide-black  border-x-dimGray/20 maxLg:hidden"
          >
            <NavLink
              to={`/${el}`}
              className=" flex h-full w-[133px] items-center justify-center px-3 text-center leading-4"
            >
              <div className="hover:w-full hover:border-px hover:border-dashed hover:border-black hover:bg-khaki/10 hover:text-center">
                {el.toUpperCase()}
              </div>
            </NavLink>
          </div>
        ))}

        <div className="  flex w-9/12 flex-row justify-end maxLg:w-full">
          <div className=" flex w-full flex-row justify-around maxSm:justify-end maxSm:pr-4">
            <div className="relative flex flex-row maxSm:hidden">
              <input
                type="search"
                className=" relative appearance-none self-center rounded-md bg-khaki/20 p-1 focus:outline-purple/60 maxLg:w-60 maxLg:px-20 maxMd:w-44"
              />
              <div className="right pointer-events-none absolute right-0 z-20 flex h-8 self-center rounded-r-md pr-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="h-5 w-5  self-center stroke-black "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>

            {isLoggedIn?.success ? (
              <>
                <div className=" group w-20  self-center  hover:border-px hover:border-dashed  hover:border-black hover:bg-khaki/10 hover:px-px maxSm:pr-6">
                  <span className="flex flex-row">
                    <IconContext.Provider
                      value={{ className: "self-center ml-2 fill-purple" }}
                    >
                      <AiOutlineUser />
                    </IconContext.Provider>
                    <span className="text-purple">Hi</span>,{" "}
                    {isLoggedIn.firstName[0].toUpperCase()}{" "}
                    {isLoggedIn?.lastName[0].toUpperCase().charAt(0)}
                  </span>
                  <button
                    onClick={() => {
                      localStorage.removeItem("login");
                      location.reload();
                    }}
                    className=" invisible  group-hover:visible "
                  >
                    logout
                  </button>
                </div>
              </>
            ) : (
              <div
                className=" relative self-center hover:border-px hover:border-dashed hover:border-black hover:bg-khaki/10 maxSm:pr-6"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <span className="flex flex-row">
                  <IconContext.Provider
                    value={{ className: "self-center mr-2 fill-purple" }}
                  >
                    <AiOutlineUser />
                  </IconContext.Provider>
                  Sign In
                </span>
              </div>
            )}
            <div
              className=" h-13 right-0 mr-3 w-10 self-center   border border-transparent hover:self-center hover:border-px hover:border-dashed   hover:border-black hover:bg-khaki/10 "
              onClick={() => {
                navigate("cart");
              }}
            >
              <div
                ref={cartRef}
                className={`${
                  cartRef.current?.attributes?.value?.nodeValue == 0
                    ? "hidden"
                    : "badge"
                } `}
                value={total()}
              >
                {" "}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" absolute top-4 h-8 w-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <p
                className={`${
                  cartRef.current?.attributes?.value?.nodeValue == 0
                    ? " pr-2 pt-9 text-center text-[8px]"
                    : "pr-2 pt-4 text-center text-[8px]"
                }`}
              >
                ${price().toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

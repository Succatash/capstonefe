/* eslint-disable react/prop-types */
import Logo from "./logo";
import HamburgerMenu from "./hamburgerMenu";

import { useNavigate, NavLink } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Navbar({ categories, cart, setIsOpen, isOpen }) {
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
    <nav className="gridNavBar maxMd:gridNavBar3 grid w-full  bg-white align-middle ">
      <>
        <div className="w-15 relative">
          <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
          <Logo
            styling=" absolute z-10 h-15 w-15 maxMd:pl-3 flex items-center maxMd:left-5 left-10 top-0 self-center  maxSm:self-center   maxSm:pl-2"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>

        <div className=" widthWithCalcMinusLogo absolute right-0 flex h-[64px]  justify-end py-4 pl-4 pr-2">
          <div className="  flex-end flex w-full flex-row justify-end">
            <div className=" focus-within:outline-px  mr-4  flex flex-row  justify-center rounded-md  focus-within:outline maxMd:hidden maxSm:mr-4">
              <input
                type="search"
                className=" removeInputX group w-[250px] appearance-none justify-self-center  rounded-l-md bg-khaki/20 px-4 outline outline-transparent maxMd:w-[200px] "
              />
              <div className="right pointer-events-none relative right-0 z-20 flex h-8 self-center rounded-r-md bg-khaki/20 pr-2">
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

            <div className="flex w-5/12 flex-row justify-end">
              {isLoggedIn?.success ? (
                <div className=" group mr-5 flex h-full  w-[120px] justify-end ">
                  <div className="flex flex-col self-center">
                    <span className="flex   flex-row  self-center hover:w-full hover:border-px  hover:border-dashed hover:border-black hover:bg-khaki/10 hover:px-px sm:justify-end maxMd:justify-start">
                      <IconContext.Provider
                        value={{
                          className: "self-center ml-2  w-5 h-5  ",
                        }}
                      >
                        <AiOutlineUser />
                      </IconContext.Provider>

                      <div className="flex flex-row">
                        Hi,{" "}
                        {`${isLoggedIn?.firstName[0]
                          .toUpperCase()
                          .charAt(0)}${isLoggedIn.firstName.slice(1)} `}
                        {isLoggedIn.lastName[0].toUpperCase()}{" "}
                      </div>
                    </span>

                    {/* TODO:this needs to be styled to the left as an actual
                    hamburger that drops down */}

                    <button
                      onClick={() => {
                        localStorage.removeItem("login");
                        location.reload();
                      }}
                      className=" hidden group-hover:absolute group-hover:top-10 group-hover:block "
                    >
                      logout
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className=" relative   mr-3 self-center justify-self-end text-center hover:border-px hover:border-dashed hover:border-black  hover:bg-khaki/10 "
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <span className="flex w-[80.85px]  flex-row">
                    <IconContext.Provider
                      value={{ className: "self-center mr-1  w-5 h-5" }}
                    >
                      <AiOutlineUser />
                    </IconContext.Provider>
                    <span className="text-sm">Sign In</span>
                  </span>
                </div>
              )}

              <button className=" maxMid:hidden mr-2" name="wishlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="
                       
                         relative z-[100] mr-2  h-6  w-6  fill-none stroke-black
                    "
                >
                  {/*NOTE:this is when u have items in the wish List " heartBounce relative z-[1000] h-6 w-6 fill-aeroBlue stroke-aeroBlue": */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

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
      </>
      {/* row2 */}
      <div className="relative order-2 flex w-full flex-row justify-around maxMd:order-3">
        {categories.map((el, i) => (
          // <div
          //   key={1 + i}
          //   className="border-x-1 flex flex-row divide-x-8  divide-solid divide-black  border-x-dimGray/20 "
          // >
          <NavLink
            key={1 + i}
            to={`/${el}`}
            className=" flex h-full  w-full items-center justify-center text-center  text-xs leading-4 hover:w-full hover:border-px hover:border-dashed hover:border-black hover:bg-khaki/10 hover:text-center maxMd:text-[8px]"
          >
            {console.log(el)}
            {el.toUpperCase()}
          </NavLink>
          // </div>
        ))}
      </div>

      {/*NOTE: this is the search bar on the second row when screens get smaller then 600px */}

      <div className=" hidden h-full justify-center maxMd:order-2 maxMd:flex">
        <div className=" flex  h-full flex-row rounded-md border-black focus-within:border-px">
          <input
            type="search"
            className=" removeInputX group h-9 w-[200px] appearance-none self-center rounded-l-md bg-khaki/20 px-4 outline outline-transparent "
          />
          <div className="pointer-events-none  relative flex h-9 self-center rounded-r-md bg-khaki/20 pr-3">
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
      </div>
    </nav>
  );
}

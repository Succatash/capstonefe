/* eslint-disable react/prop-types */
import Logo from "./logo";
import HamburgerMenu from "./hamburgerMenu";

import { useNavigate, NavLink } from "react-router-dom";

import { useRef } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Navbar({
  categories,
  cart,
  setIsOpen,
  isOpen,
  logOutModal,
  setLogOutModal,
  isLoggedIn,
}) {
  const navigate = useNavigate();
  const cartRef = useRef();

  const total = () => {
    let result = 0;
    cart.map((el) => {
      result += el.qty;
    });
    return result;
  };

  const price = () => {
    let result = 0;
    cart.map((el) => {
      result += el.qty * el.prod.price;
    });
    return result;
  };

  return (
    <nav className="gridNavBar maxMd:gridNavBar3 grid w-full  bg-white align-middle ">
      <>
        <div className="relative flex h-full w-full flex-row">
          <Logo
            styling=" absolute z-10 h-15 w-15 maxMd:pl-3 flex justify-center  top-0 left-3   maxMd:left-[42%] maxSm:pl-2 "
            onClick={() => {
              navigate("/");
            }}
          />
          <p></p>

          <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>

        <div className=" widthWithCalcMinusLogo absolute right-0 flex h-[64px]  justify-end py-4 pl-4 pr-2">
          <div className="  flex-end flex w-full flex-row justify-end">
            <div
              className="  focus-within:outline-px   black flex  
           flex-row justify-center rounded-md focus-within:outline focus-within:outline-black maxMd:hidden"
            >
              <div className="pointer-events-none relative  z-20 flex h-9 self-center rounded-l-md bg-khaki/20 pl-2">
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

              <input
                type="search"
                className=" removeInputX group h-9 w-[300px] appearance-none self-center rounded-r-md border-transparent bg-khaki/20 px-4 outline outline-transparent "
                placeholder="search here"
              />
            </div>

            <div className="flex w-5/12 cursor-default flex-row justify-end">
              {isLoggedIn?.success ? (
                <div className="mr-5 flex h-full  w-full justify-end ">
                  <div className="flex flex-col self-center ">
                    <div
                      className="flex  w-[150px] flex-row self-center text-right  text-sm    hover:underline sm:justify-end maxMd:w-10 maxMd:justify-end "
                      onClick={() => {
                        setLogOutModal(!logOutModal);
                      }}
                    >
                      <IconContext.Provider
                        value={{
                          className: "self-center ml-2  w-5 h-5",
                        }}
                      >
                        <AiOutlineUser />
                      </IconContext.Provider>

                      <div className="flex flex-row maxMd:hidden">
                        Hi,{" "}
                        {`${
                          isLoggedIn?.firstName[0].toUpperCase().charAt(0) +
                          isLoggedIn.firstName.slice(1)
                        } `}
                      </div>
                    </div>
                    {/* NOTE:modal for account */}
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

              <button className=" mr-2 maxMid:hidden" name="wishlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className=" pointer-events-none relative flex h-8 self-center fill-transparent stroke-black pr-3"
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
                className=" h-13 right-0 mr-3 w-10 self-center   border border-transparent "
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
                  className=" absolute top-4 h-8 w-8  pr-px"
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
          <NavLink
            key={1 + i}
            to={`/${el}`}
            className=" flex h-full  w-full items-center justify-center text-center  text-xs font-extrabold leading-4 hover:w-full hover:border-px hover:border-dashed hover:border-black hover:bg-khaki/10 hover:text-center maxMd:text-[8px]"
          >
            {el[0].toUpperCase() + el.slice(1)}
          </NavLink>
          // </div>
        ))}
      </div>

      {/*NOTE: this is the search bar on the second row when screens get smaller then 600px */}

      <div className=" hidden h-full w-full justify-center maxMd:order-2 maxMd:flex">
        <div className=" flex  h-full w-10/12 flex-row rounded-md border-black focus-within:border-px">
          <input
            type="search"
            className=" removeInputX group h-9 w-full appearance-none self-center rounded-l-md bg-khaki/20 px-4 outline outline-transparent "
            placeholder="search here"
            onBlur={(e) => {
              console.log(e);
            }}
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

/* eslint-disable react/prop-types */
import Navbar from "./navbar";
import CallToAction from "./CallToAction";
import Logo from "./logo";

import { useState, useEffect } from "react";

export default function Header({ categories, setProductsByCat, cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [logOutModal, setLogOutModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState({});

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("login"));
    setIsLoggedIn(loggedIn);
  }, []);
  return (
    <>
      {/* NOTE: left side modal */}

      <header className="shadow-lg">
        {isOpen ? (
          <>
            <div
              className="modalEase absolute z-20 h-screen w-screen  bg-black/50 backdrop-blur-sm"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />

            <div className=" modalEase absolute z-[30] h-screen w-6/12 translate-x-0 flex-col items-center bg-white maxSm:w-10/12">
              <div className="relative h-[10%] ">
                <div className="flex flex-row">
                  <Logo />
                  Hi,{" "}
                  {`${
                    isLoggedIn?.firstName[0].toUpperCase().charAt(0) +
                    isLoggedIn.firstName.slice(1)
                  } `}
                  {isLoggedIn.lastName[0].toUpperCase()}{" "}
                </div>
              </div>
              <div className="h-[30%]  bg-aeroBlue text-white">HEllo</div>
              <div className="h-[30%] bg-aeroBlue text-white">HELLO</div>
              <div className="h-[30%] bg-aeroBlue text-white">HELLO</div>
            </div>
          </>
        ) : (
          <div
            className=" invisible  absolute  -z-10   h-screen w-6/12 opacity-0"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div className=" z-60  absolute  h-full w-6/12 -translate-x-20 flex-col items-center bg-white">
              <div className="relative">Hello</div>
              <div className="relative">HEllo</div>
              <div className="relative">HELLO</div>
            </div>
          </div>
        )}

        {/* NOTE:right modal */}
        {logOutModal ? (
          <>
            <div
              className="modalEase absolute z-[10] h-screen w-screen bg-black/50 backdrop-blur-sm"
              onClick={() => {
                setLogOutModal(!logOutModal);
              }}
            />

            <div className=" modalEase absolute right-0 top-0 z-[70] h-screen w-4/12 flex-col items-center bg-white">
              <div className="relative h-[10%]  bg-aeroBlue pt-3 text-center text-2xl font-extrabold text-white">
                Account
              </div>
              <div className="z-[100]  h-[30%] bg-white text-black">
                <button
                  onClick={() => {
                    localStorage.removeItem("login");
                    location.reload();
                  }}
                  className="hover:underline "
                >
                  logout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div
            className=" invisible  absolute  -z-10   h-screen w-6/12 opacity-0"
            onClick={() => {
              setLogOutModal(!logOutModal);
            }}
          >
            <div className=" z-60  absolute  h-full w-6/12 translate-x-20 flex-col items-center bg-white">
              <div className="relative"></div>
              <div className="relative">HEllo</div>
              <div className="relative">HELLO</div>
            </div>
          </div>
        )}

        <CallToAction />
        <Navbar
          categories={categories}
          setProductsByCat={setProductsByCat}
          cart={cart}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          setLogOutModal={setLogOutModal}
          logOutModal={logOutModal}
          isLoggedIn={isLoggedIn}
        />
      </header>
    </>
  );
}

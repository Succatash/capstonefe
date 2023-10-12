/* eslint-disable react/prop-types */
import Navbar from "./navbar";
import CallToAction from "./CallToAction";
import Logo from "./logo";
import SideModal from "./sideModal";

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
      {/* NOTE: left side modal NOTE: */}

      <header className="h-full shadow-lg">
        {isOpen ? (
          <SideModal
            styling={{
              outerDiv:
                "modalEase absolute z-[20] h-screen w-screen  bg-black/50 backdrop-blur-sm",
              contentContainer:
                "modalEase absolute z-[50] h-screen w-6/12 translate-x-0 flex-col items-center bg-white maxSm:w-10/12",
            }}
            outerClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div className="relative h-[10%] ">
              <div className="flex flex-row">
                <Logo />
                Hi,{" "}
                {isLoggedIn
                  ? `${
                      isLoggedIn?.firstName[0].toUpperCase().charAt(0) +
                      isLoggedIn?.firstName.slice(1)
                    }`
                  : "Guest"}
              </div>
            </div>
            <div className="h-[30%]  bg-aeroBlue text-white">HEllo</div>
            <div className="h-[30%] bg-aeroBlue text-white">HELLO</div>
            <div className="h-[30%] bg-aeroBlue text-white">HELLO</div>
          </SideModal>
        ) : (
          <SideModal
            styling={{
              outerDiv:
                "invisible  absolute  -z-10   h-screen w-6/12 opacity-0",
              contentContainer:
                " invisible z-60  absolute  h-full w-6/12 -translate-x-20 flex-col items-center ",
            }}
            outerClick={() => {
              setIsOpen(!isOpen);
            }}
          ></SideModal>
        )}



        {/* NOTE:IMPORTANT: right modal NOTE: */}
        {logOutModal ? (
          <SideModal
            styling={{
              outerDiv:
                "modalEase absolute z-[60] h-screen w-screen bg-black/50 backdrop-blur-sm",
              contentContainer:
                " modalEase absolute right-0 top-0 z-[70] h-screen w-4/12 flex-col items-center bg-white maxMd:w-10/12",
            }}
            outerClick={() => {
              setLogOutModal(!logOutModal);
            }}
          >
            <div className="relative h-[10%]  bg-aeroBlue pt-3 text-center text-xl font-extrabold text-white">
              Hi,{" "}
              {`${
                isLoggedIn?.firstName[0].toUpperCase().charAt(0) +
                isLoggedIn?.firstName.slice(1)
              } `}
              {isLoggedIn?.lastName[0].toUpperCase()}
              <p>Your Account</p>
            </div>

            <div className="z-[60]  h-[30%] bg-white text-black">
              <button
                onClick={() => {
                  localStorage.removeItem("login");
                  location.reload();
                }}
                className="hover:underline "
              >
                <div className="self-c flex w-full flex-row justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                  logout
                </div>
              </button>
            </div>
          </SideModal>
        ) : (
          <SideModal
            styling={{
              outerDiv:
                " invisible  absolute  -z-10   h-screen w-6/12 opacity-0",
              contentContainer:
                " invisible z-60  absolute  h-full w-6/12 translate-x-20 flex-col items-center bg-white",
            }}
            outerClick={() => {
              setLogOutModal(!logOutModal);
            }}
          ></SideModal>
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

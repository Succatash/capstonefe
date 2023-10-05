/* eslint-disable react/prop-types */
import Navbar from "./navbar";
import CallToAction from "./CallToAction";

import { useState } from "react";

export default function Header({
  categories,

  setProductsByCat,

  cart,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="shadow-lg">
        {isOpen ? (
          <div
            className=" absolute z-50 h-screen w-screen bg-black/50"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div className="  z-60 absolute h-full  w-6/12 flex-col items-center bg-white">
              <div className="relative">Hello</div>
              <div className="relative">HEllo</div>
              <div className="relative">HELLO</div>
            </div>
          </div>
        ) : null}

        <CallToAction />
        <Navbar
          categories={categories}
          setProductsByCat={setProductsByCat}
          cart={cart}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </header>
    </>
  );
}

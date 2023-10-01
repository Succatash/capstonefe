/* eslint-disable react/prop-types */
import Navbar from "./navbar";
import CallToAction from "./CallToAction";

export default function Header({
  categories,

  setProductsByCat,

  cart,
}) {
  return (
    <>
      <header className="shadow-lg">
        <CallToAction />
        <Navbar
     
          categories={categories}
          setProductsByCat={setProductsByCat}
          cart={cart}
        />
      </header>
    </>
  );
}

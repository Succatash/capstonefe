/* eslint-disable react/prop-types */
import Navbar from "./navbar";
import CallToAction from "./CallToAction";

export default function Header({
  categories,
  setCategories,
  setProductsByCat,
  user,
  cart,
  isLoggedIn,
}) {
  return (
    <>
      <header className="shadow-lg">
        <CallToAction />
        <Navbar
          categories={categories}
          setCategories={setCategories}
          setProductsByCat={setProductsByCat}
          user={user}
          cart={cart}
          isLoggedIn={isLoggedIn}
        />
      </header>
    </>
  );
}

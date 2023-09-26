/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = ({
  setCategories,
  categories,
  setProductsByCat,
  user,
  cart,
  isLoggedIn,

}) => {
  return (
    <main>
      <Header
        setProductsByCat={setProductsByCat}
        setCategories={setCategories}
        categories={categories}
        user={user}
        cart={cart}
        isLoggedIn={isLoggedIn}
      />
      <Outlet />
    </main>
  );
};

export default Layout;

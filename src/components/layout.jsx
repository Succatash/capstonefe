/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = ({
  setCategories,
  categories,
  setProductsByCat,
  
  cart,
}) => {
  return (
    <main>
      <Header
        setProductsByCat={setProductsByCat}
        setCategories={setCategories}
        categories={categories}
        cart={cart}
      />
      <Outlet />
    </main>
  );
};

export default Layout;

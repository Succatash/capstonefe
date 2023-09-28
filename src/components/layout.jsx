/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = ({
  categories,
  setProductsByCat,

  cart,
}) => {
  return (
    <main>
      <Header
        setProductsByCat={setProductsByCat}
        categories={categories}
        cart={cart}
      />
      <Outlet />
    </main>
  );
};

export default Layout;

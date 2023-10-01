import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//components
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Cart from "./components/cart";
import Layout from "./components/layout";
import SingleProduct from "./components/singleProduct";
import ByCategory from "./components/byCategory";

function App() {
  const [categories, setCategories] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const cat = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(cat);
    setCart(savedCart);
  }, [setCart]);

  return (
    <Routes>
      <Route element={<Layout categories={categories} cart={cart} />}>
        <Route
          path="/"
          element={
            <Home
              categories={categories}
              setFavorites={setFavorites}
              favorites={favorites}
              setCategories={setCategories}
              setCart={setCart}
              cart={cart}
            />
          }
        />

        <Route
          path="/:category"
          element={<ByCategory setCart={setCart} cart={cart} />}
        />

        <Route
          path="/:category/:productId"
          element={<SingleProduct setCart={setCart} cart={cart} />}
        />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Route>

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//components
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import MapProducts from "./components/mapProducts";
import Cart from "./components/cart";
import Layout from "./components/layout";
import SingleProduct from "./components/singleProduct";
import FullScreenImage from "./components/fullScreenImage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [productsByCat, setProductsByCat] = useState([]);
  const [categories, setCategories] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([
    { id: 1, productId: 2 },
    { id: 2, productId: 3, quantity: 2 },
  ]);
  const [user, setUser] = useState({});

  return (
    <Routes>
      <Route
        element={
          <Layout
            setCategories={setCategories}
            categories={categories}
            setProductsByCat={setProductsByCat}
            isLoggedIn={isLoggedIn}
            user={user}
            cart={cart}
          />
        }
      >
        <Route
          path="/"
          element={
            <Home
              productsByCat={productsByCat}
              categories={categories}
              setSingleProduct={setSingleProduct}
              setFavorites={setFavorites}
              favorites={favorites}
              setProductsByCat={setProductsByCat}
            />
          }
        />

        <Route
          path="/:category"
          element={
            <MapProducts
              productsByCat={productsByCat}
              setSingleProduct={setSingleProduct}
            />
          }
        />

        <Route
          path="/:category/:productId"
          element={<SingleProduct singleProduct={singleProduct} />}
        >
          <Route
            path="/:category/:productId/fsImage"
            element={<FullScreenImage />}
          />
        </Route>

        <Route path="/cart" element={<Cart />} />

        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
        />

        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;

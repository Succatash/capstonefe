/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product, styling, click, setCart, cart, category }) => {
  const [heartSvg, setHeartSvg] = useState({});
  const navigate = useNavigate();

  const addToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex((cart) => cart.id === item.id);

    if (existingItemIndex !== -1) {
      // If the item already exists, update its quantity
      const updatedCart = [...cart];
      (updatedCart[existingItemIndex].qty += 1),
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // If the item doesn't exist, add it to the cart
      const updatedCart = [...cart, { ...item, qty: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <>
      <button
        className={`${styling.svgContainer} bg-aero-blue  absolute`}
        name={product.id}
        onClick={() => {
          if (heartSvg.bool) {
            setHeartSvg({ bool: false });
          } else {
            setHeartSvg({ bool: true });
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className={`${
            heartSvg.bool
              ? " heartBounce relative z-[1000] h-6 w-6 fill-aeroBlue stroke-aeroBlue"
              : "relative z-[1000] h-6  w-6  fill-none stroke-black"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <div
        className={styling.container}
        style={{ zIndex: 0 }}
        onClick={() => {
          navigate(`/${category}/${product.id}`);
        }}
      >
        <img src={product.image} alt="product image" className={styling.img} />
        <h2 className={styling.title}>{product.title}</h2>
        <div className={styling.subContainer}>
          <div className={styling.priceBox}>
            <div className="flex w-4/12 flex-row">
              <div className={styling.price}>
                {" "}
                $
                {Math.round(
                  ((product?.price - product?.price / 10) * 100) / 100,
                )}
              </div>
              <p className={`line-through ${styling.sale}`}>${product.price}</p>
            </div>
            <p className={styling.desc}>{product.description}...</p>
          </div>

          <div className={styling.rateBox}>
            <div
              className={styling.rate}
              style={{
                width: `${(product.rating.rate / 5) * 79}px`,
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#D49821",
              }}
            ></div>
            <p className={styling.count}>{product.rating.count}</p>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className={`${styling.button}`}
        onClick={() => {
          addToCart({ id: product.id, qty: 1, prod: product });
          navigate("/");
        }}
        style={{ zIndex: 30 }}
      >
        Add to cart
      </button>
    </>
  );
};
export default Product;

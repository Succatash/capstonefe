/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Product = ({ product, styling, click }) => {
  const [heartSvg, setHeartSvg] = useState(false);

  return (
    <>
      <button
        className={`${styling.svgContainer} absolute z-[60]`}
        name={product.id}
        onClick={() => {
          if (heartSvg) {
            setHeartSvg(false);
          } else setHeartSvg(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className={`${
            heartSvg
              ? "heartBounce h-6 w-6 fill-aeroBlue stroke-aeroBlue"
              : "h-6 w-6  fill-none stroke-black "
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <div className={styling.container} onClick={click} style={{ zIndex: 10 }}>
        <img src={product.image} alt="product image" className={styling.img} />
        <h2 className={styling.title}>{product.title}</h2>
        <div className={styling.subContainer}>
          <div className={styling.priceBox}>
            <div className={styling.price}> ${product.price}</div>
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
      <NavLink className={styling.button} to={"/cart"}>
        Add to cart
      </NavLink>
    </>
  );
};
export default Product;

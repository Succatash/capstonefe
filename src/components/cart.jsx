/* eslint-disable react/prop-types */
import { useState } from "react";
import CartItem from "./cartItem";

// import Product from "./product";

const Cart = ({ cart }) => {
  const [total, setTotal] = useState(0);
  const tot = () => {
    let result = 0;
    cart.map((el) => {
      result += el.qty * el.prod.price;
    });
    return result;
  };

  // const removeFromCart = (itemId) => {

  //   setCartItems(updatedCart);
  //   localStorage.setItem(JSON.stringify("cart", cartItems));
  // };
  return (
    <section className="m-auto mt-4 h-full w-9/12 ">
      <div className="text-bold w-[140px] text-3xl shadow-lg">
        TOTAL: ${tot()}
      </div>
      {cart.map((item, idx) => {
        return <CartItem key={idx} product={item.prod} />;
      })}
    </section>
  );
};

export default Cart;

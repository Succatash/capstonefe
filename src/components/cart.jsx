/* eslint-disable react/prop-types */

import CartItem from "./cartItem";

// import Product from "./product";

const Cart = ({ cart, setCart }) => {
  const total = () => {
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
      <div
        className="text-bold  maxSm:text-center 
      maxSm:text-fs30px
      
      w-full text-right text-3xl maxMd:text-center"
      >
        TOTAL: ${total()}
      </div>
      {cart.map((item, idx) => {
        return (
          <CartItem
            itemId={item.id}
            key={idx}
            product={item.prod}
            setCart={setCart}
            cart={cart}
            quantity={item.qty}
          />
        );
      })}
    </section>
  );
};

export default Cart;

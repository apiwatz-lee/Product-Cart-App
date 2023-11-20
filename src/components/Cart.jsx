import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = ({
  formatNumber,
  carts,
  handleDeleteProductFromCart,
  handleIncreaseProductQuantity,
  handleDecreaseProductQuantity,
  price,
}) => {
  return (
    <section className="cart w-screen p-10 mt-2">
      <h1 className="font-bold text-white mb-10 text-center text-5xl flex justify-center gap-4">
        Cart <AiOutlineShoppingCart />
      </h1>

      <div className="flex flex-wrap justify-center items-center">
          {carts.map((cart, index) => (
            <div
              className="relative bg-slate-300 p-[20px] rounded-md w-[400px] mr-[50px] mb-[30px]"
              key={index}
            >
              <div className="flex justify-center items-center gap-5">
                <img
                  src={cart.image}
                  alt={cart.name}
                  className="w-[100px] h-[100px] object-cover rounded-md"
                />
                <div>
                  <h1>
                    <span className="font-extrabold">Item name:</span>
                    {cart.name}
                  </h1>
                  <h2>
                    <span className="font-extrabold">Price:</span>
                    {formatNumber(cart.price)}
                  </h2>
                  <h2>
                    <span className="font-extrabold">Quantity:</span>
                    {cart.quantity}
                  </h2>
                </div>
              </div>

              <button
                className="text-white text-xl font-bold bg-slate-800 border-slate-600 flex justify-center items-center absolute right-[-30px] top-[-10px] rounded-full w-[50px] h-[50px] hover:bg-amber-700 duration-500 cursor-pointer"
                onClick={() => handleDeleteProductFromCart(index)}
              >
                x
              </button>
              <div className="flex mt-[20px] justify-evenly">
                <button
                  className="w-[150px] bg-slate-900 text-white rounded-md hover:bg-amber-700 hover:w-32 duration-500"
                  onClick={() => handleIncreaseProductQuantity(cart.id)}
                >
                  +
                </button>
                <button
                  className="w-[150px] bg-slate-900 text-white rounded-md hover:bg-amber-700 hover:w-32 duration-500"
                  onClick={() => handleDecreaseProductQuantity(cart.id, index)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="font-bold text-white mb-10 text-center text-3xl mt-5 flex flex-col justify-center item-center gap-10">
        <h1>Total Price is</h1>

        <span className="text-8xl text-amber-500 mx-10">
          {formatNumber(price)}
        </span>

        <h1>Baht</h1>
      </div>
    </section>
  );
};

export default Cart;

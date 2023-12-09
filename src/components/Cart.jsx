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
    <section className="flex justify-center items-center flex-col w-screen p-10 mt-2">
      <h1 className="font-bold text-white mb-10 text-center text-5xl flex justify-center gap-4">
        Cart <AiOutlineShoppingCart />
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-20">
          {carts.map((cart, index) => (
            <div
              className="relative bg-slate-300 p-[20px] rounded-md w-[270px] sm:w-[400px] mb-[30px]"
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
                className="text-white text-xl font-bold bg-slate-800 border-slate-600 flex justify-center items-center absolute  rounded-full w-[40px] h-[40px] lg:w-[50px] top-[-10px] right-[-15px] lg:h-[50px] lg:right-[-30px] lg:top-[-10px] hover:bg-amber-700 duration-500 cursor-pointer"
                onClick={() => handleDeleteProductFromCart(index)}
              >
                x
              </button>
              <div className="flex gap-1 mt-[20px] justify-evenly">
                <button
                  className="w-[100px] lg:w-[150px] bg-slate-900 text-white rounded-md hover:bg-amber-700 hover:w-32 duration-500"
                  onClick={() => handleIncreaseProductQuantity(cart.id)}
                >
                  +
                </button>
                <button
                  className="w-[100px] lg:w-[150px] bg-slate-900 text-white rounded-md hover:bg-amber-700 hover:w-32 duration-500"
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

        <span className="text-5xl lg:text-8xl text-amber-500 mx-10">
          {formatNumber(price)}
        </span>

        <h1>Baht</h1>
      </div>
    </section>
  );
};

export default Cart;

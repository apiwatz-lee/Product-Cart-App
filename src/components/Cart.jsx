import React from "react";

const Cart = ({
  formatNumber,
  carts,
  handleDeleteProductFromCart,
  handleIncreaseProductQuantity,
  handleDecreaseProductQuantity,
  price,
}) => {
  return (
    <section className="cart w-screen p-10">
      <h1 className="text-3xl font-bold text-white mb-10">
        Cart (Total Price is {formatNumber(price)} Baht)
      </h1>
      <div className="flex flex-wrap">
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
              className="text-white text-xl font-bold bg-slate-800 border-slate-600 flex justify-center items-center absolute right-[-30px] top-[-10px] rounded-full w-[50px] h-[50px] cursor-pointer"
              onClick={() => handleDeleteProductFromCart(index)}
            >
              x
            </button>
            <div className="flex mt-[20px] justify-evenly">
              <button
                className="w-[150px] bg-slate-900 text-white rounded-md"
                onClick={() => handleIncreaseProductQuantity(cart.id)}
              >
                +
              </button>
              <button
                className="w-[150px] bg-slate-900 text-white rounded-md"
                onClick={() => handleDecreaseProductQuantity(cart.id, index)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;

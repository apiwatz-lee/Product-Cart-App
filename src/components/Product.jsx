import React from "react";
import { CiShoppingTag } from "react-icons/ci";

const Product = ({ productLists, formatNumber, handleAddProductToCart }) => {
  return (
    <section className="product-container">
      <h1 className="text-white font-bold mb-5 text-center text-5xl flex justify-center gap-3">
        Products <CiShoppingTag />
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        {productLists.map((product, index) => (
          <div
            className="flex flex-col justify-between p-[20px] m-[20px] max-w-[300px] min-h-[500px] bg-slate-300 rounded-lg"
            key={index}
          >
            <img
              src={product.image}
              alt="sample name"
              className="object-cover w-[300px] h-[300px] rounded-md"
            />
            <h2 className="font-extrabold flex gap-2">
              {product.name} (THB {formatNumber(product.price)})
            </h2>
            <p>{product.description}</p>
            <button
              onClick={() => handleAddProductToCart(index, product.id)}
              className=" border-slate-900 h-8 rounded-md bg-slate-900 text-white hover:bg-amber-700 duration-500"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;

import React from "react";

const Product = ({ productLists, formatNumber, handleAddProductToCart }) => {
  return (
    <section className="product-container">
      <h1 className="text-white text-3xl font-bold mb-5">Products</h1>
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
              className="border-2 border-slate-900 rounded-md bg-slate-900 text-white"
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

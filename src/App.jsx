import "./App.css";
import React, { useState, useEffect } from "react";
import products from "./data/product";
import Product from "./components/product";
import Cart from "./components/Cart";

function App() {
  const [productLists, setProductLists] = useState(products);
  const [carts, setCarts] = useState([]);
  const [price, setPrice] = useState(0);

  const handleAddProductToCart = (index, productId) => {
    const newCarts = [...carts];
    const productExist = newCarts.some((product) => product.id === productId);

    if (productExist) {
      const findProduct = newCarts.find((product) => product.id === productId);
      findProduct.quantity++; //find product and update quantity
      setCarts(newCarts);
    } else {
      newCarts.push({ ...productLists[index], quantity: 1 }); //spread object and add key quantity into object
      setCarts(newCarts);
    }
  };

  const handleDeleteProductFromCart = (index) => {
    const newCarts = [...carts];
    newCarts.splice(index, 1);
    setCarts(newCarts);
  };

  const handleIncreaseProductQuantity = (productId) => {
    const newCarts = [...carts];
    const findProduct = newCarts.find((product) => product.id === productId);
    if (findProduct.quantity >= 0) {
      findProduct.quantity++;
    }
    setCarts(newCarts);
  };

  const handleDecreaseProductQuantity = (productId, index) => {
    const newCarts = [...carts];
    const findProduct = newCarts.find((product) => product.id === productId);
    if (findProduct.quantity > 1) {
      findProduct.quantity--;
    } else if (findProduct.quantity === 1) {
      newCarts.splice(index, 1);
    }
    setCarts(newCarts);
  };

  const calculateAmount = () => {
    const eachAmount = carts.map((item) => item.price * item.quantity);
    const sumAmount = eachAmount.reduce((acc, curr) => acc + curr, 0);
    setPrice(sumAmount);
  };

  useEffect(() => calculateAmount(), [carts]);

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className=" flex flex-col justify-center items-center p-5 h-auto bg-gradient-to-br from-gray-900 to-gray-600 bg-gradient-to-r">
      <Product
        productLists={productLists}
        formatNumber={formatNumber}
        handleAddProductToCart={handleAddProductToCart}
      />

      <hr />

      <Cart
        formatNumber={formatNumber}
        carts={carts}
        handleDeleteProductFromCart={handleDeleteProductFromCart}
        handleIncreaseProductQuantity={handleIncreaseProductQuantity}
        handleDecreaseProductQuantity={handleDecreaseProductQuantity}
        price={price}
      />
    </div>
  );
}

export default App;

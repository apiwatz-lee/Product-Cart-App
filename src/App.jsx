import "./App.css";
import React, { useState, useEffect } from "react";
import products from "./data/product";

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

  return (
    <div className="App">
      <section className="product-container">
        <h1 className="product-heading">Products</h1>
        <div className="product-list">
          {productLists.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.image} alt="sample name" />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <button onClick={() => handleAddProductToCart(index, product.id)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <hr />

      <section className="cart">
        <h1 className="cart-heading">Cart (Total Price is {price} Baht)</h1>
        <div className="cart-item-list">
          {carts.map((cart, index) => (
            <div className="cart-item" key={index}>
              <h1>Item name: {cart.name}</h1>
              <h2>Price: {cart.price}</h2>
              <h2>Quantity: {cart.quantity}</h2>
              <button
                className="delete-button"
                onClick={() => handleDeleteProductFromCart(index)}
              >
                x
              </button>
              <div className="quantity-actions">
                <button
                  className="add-quantity"
                  onClick={() => handleIncreaseProductQuantity(cart.id)}
                >
                  +
                </button>
                <button
                  className="subtract-quantity"
                  onClick={() => handleDecreaseProductQuantity(cart.id, index)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

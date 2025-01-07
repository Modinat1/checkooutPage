import React, { useState } from "react";
import "./App.css";
import CartDetails from "./components/CartDetails";
import product_1 from "../src/assets/p-1.jpg"
import product_2 from "../src/assets/p-2.jpg"
import product_3 from "../src/assets/p-3.png"
import OrderSummary from "./components/OrderSummary";

const App = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 20,
      quantity: 1,
      img: product_1
    },
    {
      id: 2,
      name: "Product 2",
      price: 35,
      quantity: 1,
      img: product_2
    },
    {
      id: 3,
      name: "Product 3",
      price: 50,
      quantity: 1,
      img: product_3
    },
  ]);
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="">
      <h1 className="title">Checkout Page</h1>
      <div className="w-full md:grid grid-cols-3 gap-5">

        <div className="col-span-2">
        <CartDetails cart={cart} setCart={setCart}/>
        </div>

        <div className="col-span-1">  
       <OrderSummary cart={cart} calculateTotal={calculateTotal}/>
        </div>

      </div>
    </div>
  );
};

export default App;

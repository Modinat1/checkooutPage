import React, { useState } from 'react'
import CartDetails from "./CartDetails";
import product_1 from "../assets/p-1.png"
import product_2 from "../assets/p-2.jpg"
import product_3 from "../assets/p-3.png"
import OrderSummary from './OrderSummary';
import axios from "axios";
import DefaultModal from './Modal';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false)
  const [verificationData, setVerificationData] = useState({});
  const [paymentResponse, setPaymentResponse] = useState({});
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 20,
      quantity: 1,
      img: product_1,
      vendor: "apple"
    },
    {
      id: 2,
      name: "Product 2",
      price: 35,
      quantity: 1,
      img: product_2,
      vendor: "nike"
    },
    {
      id: 3,
      name: "Product 3",
      price: 50,
      quantity: 1,
      img: product_3,
      vendor: "dior"
    },
  ]);

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

const handlePayment = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
  
    if (!window.PaystackPop) {
      alert("Paystack library failed to load. Please refresh the page and try again.");
      return;
    }
  
    const handler = window.PaystackPop.setup({
      key: "pk_test_b298d476e79aa55787cdc691ef704bac014c6524", 
      email: email,
      amount: calculateTotal() * 100, 
      currency: "NGN",
      ref: `ref-${Math.ceil(Math.random() * 1000000000)}`, 
      callback: (response) => {
        if(response.status === "success"){
          setPaymentResponse(response)
          setOpenModal(true)
        }
        verifyTransaction(response.reference); 
      },
      onClose: () => {
        alert("Transaction was not completed, window closed.");
      },
    });
  
    handler.openIframe();
  };

  
  const verifyTransaction = async (reference) => {
    try {
      console.log("Verifying transaction...");
      
      const response = await axios.post("https://pal-backend.onrender.com/api/verify-payment",{ reference },
        {
          headers: { "Content-Type": "application/json" }, 
        }
      );
  
      const data = response.data.data; 
      console.log("Verification Response:", data);
  
      if (data.status === "success") {
        setVerificationData(data);
        return(data);
      } else {
        console.error("Verification Error:", data.status);
        throw new Error(data.status || "Payment verification failed");
      }
    } catch (error) {
      console.error("Verification Error:", error.message);
       throw error;
    }
  };
  

  const toggleModal = () => {
    setOpenModal(!openModal);
};

  return (
    <div>
    <h1 className="text-center my-5 text-lg font-bold">Checkout Page</h1>
    
    <div className="w-full px-5 md:px-10 md:grid grid-cols-3 gap-5">
      <div className="col-span-2">
      <CartDetails cart={cart} setCart={setCart}/>
      </div>

      <div className="col-span-1 my-5 md:my-0">  
     <OrderSummary
     email={email}
     setEmail={setEmail}
     error={error}
      cart={cart} calculateTotal={calculateTotal} handlePayment={handlePayment}/>
      </div>
    </div>

    <DefaultModal subheading closeModal={toggleModal} visibilityState={openModal}>
        <h3 className='text-center text-lg font-medium'>
          Your transaction has been {paymentResponse.message} with {paymentResponse.reference}
        </h3>

        <Link to='/verify' state={{ verificationData }}>
        <button className='block capitalize mx-auto text-[#ffffff] bg-[#5a87a7] px-3 py-1 my-3 hover:scale-75'>
          Verify Payment
        </button>
        </Link>

    </DefaultModal>
  
    </div>
  )
}

export default CheckoutPage
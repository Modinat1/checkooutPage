// import React from 'react'

// const OrderSummary = ({cart, calculateTotal}) => {
//   return (
//     <div className="summary bg-[#ffffff] rounded-lg p-4">
//     <h2>Order Summary</h2>
//     <p>Total Items: {cart.length}</p>
//     <p>Total Price: ${calculateTotal()}</p>
//     <button className="checkout-btn">Continue to Payment</button>
//     {/* <button className="checkout-btn">Proceed to Checkout</button> */}
//   </div>
//   )
// }

// export default OrderSummary

import React, { useState } from "react";
import axios from "axios";

const OrderSummary = ({ cart, calculateTotal }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

//   const handlePayment = () => {
//     // Validate email
//     if (!email || !/\S+@\S+\.\S+/.test(email)) {
//       setError("Please enter a valid email address");
//       return;
//     }
//     setError("");

//     // Paystack integration
//     const handler = window.PaystackPop.setup({
//       key: "pk_test_b298d476e79aa55787cdc691ef704bac014c6524", // Replace with your public key
//       email: email,
//       amount: calculateTotal() * 100, // Paystack expects amount in kobo
//       currency: "NGN",
//       ref: `ref-${Math.ceil(Math.random() * 1000000000)}`, // Generate a unique reference
//       callback: (response) => {
//         // Payment was successful
//         alert(`Payment successful! Reference: ${response.reference}`);
//         // Here, you can verify the transaction on the server
//       },
//       onClose: () => {
//         alert("Transaction was not completed, window closed.");
//       },
//     });

//     handler.openIframe();
//   };
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
      key: "pk_test_b298d476e79aa55787cdc691ef704bac014c6524", // Replace with your public key
      email: email,
      amount: calculateTotal() * 100, // Amount in kobo
      currency: "NGN",
      ref: `ref-${Math.ceil(Math.random() * 1000000000)}`, // Unique reference
      callback: (response) => {
        console.log(`Payment successful! Reference: ${response.reference}`);
        verifyTransaction(response.reference); // Call a separate function to handle verification
      },
      onClose: () => {
        alert("Transaction was not completed, window closed.");
      },
    });
  
    handler.openIframe();
  };
  
  // Function to verify transaction
  const verifyTransaction = async (reference) => {
    try {
      console.log("Verifying transaction...");
      const verifyResponse = await fetch("https://pal-backend.onrender.com/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference }),
      });
  
      const data = await verifyResponse.json();
      console.log("Verification Response:", data);
  
      if (verifyResponse.ok && data.status === "success") {
        alert("Payment verified successfully!");
        console.log("Verified Payment Details:", data.data);
      } else {
        alert("Payment verification failed!");
        console.error("Verification Error:", data.message);
      }
    } catch (error) {
      alert("An error occurred during verification.");
      console.error("Verification Error:", error);
    }
  };
  
  

  return (
    <div className="summary bg-[#ffffff] rounded-lg p-4">
      <h2>Order Summary</h2>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ${calculateTotal()}</p>
      
      <div className="email-input">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border rounded p-2 w-full"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      <button className="checkout-btn" onClick={handlePayment}>
        Continue to Payment
      </button>
    </div>
  );
};

export default OrderSummary;

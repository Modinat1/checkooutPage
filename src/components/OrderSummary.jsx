import React from "react";

const OrderSummary = ({ email, setEmail, error, cart, calculateTotal, handlePayment }) => {
  
  return (
    <div className="summary bg-[#ffffff] rounded-lg p-4">
      <h2 className="font-bold">Order Summary</h2>
      <p>Total Items: <span className="font-bold">{cart.length}</span></p>
      <p >Total Price: <span className="font-bold">${calculateTotal()}</span></p>
      
      <div className="email-input">
        <label className="block my-3 font-bold" htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border rounded p-2 w-full focus:outline-none"
        />
        {error && <p className="text-[#ff4d4dbc] text-sm">{error}</p>}
      </div>

      <button className="checkout-btn mt-5 focus:outline-none" onClick={handlePayment}>
        Continue to Payment
      </button>
    
    </div>
  );
};

export default OrderSummary;

// import { useLocation } from "react-router-dom";
// import tick_circle from '../assets/tick-circle.png'

// const VerificationPage = () => {
//   const location = useLocation();
//   const { verificationData } = location.state || {};

//   if (!verificationData) {
//     return <p>No verification details available.</p>;
//   }
// console.log(verificationData);

//   return (
//     <div className="leading-8 flex flex-col justify-center items-center h-screen">
    
//     <div className="mb-10">
//         <img
//         src={tick_circle}
//         alt="success"
//         />
//     </div>

//       <h1 className="font-medium text-xl mb-3">Payment Verification {verificationData.gateway_response}</h1>
//       <p>Payment Amount: <span className="font-bold">{verificationData.amount / 100}</span> NGN</p>
//       <p >Verification Status: <span className="capitalize font-bold">{verificationData.status}</span></p>
//       <p className="capitalize">{verificationData.reference}</p>
//       {/* <p className="capitalize">{verificationData.customer.first_name}</p> */}
//     </div>
//   );
// };

// export default VerificationPage;

import React from 'react';
import { useLocation } from 'react-router-dom';

const VerificationPage = () => {
  const location = useLocation();
  const verificationData = location.state?.verificationData;
//   const { verificationData } = location.state || {};
  if (!verificationData) {
    return <p>Verification payament...</p>;
  }

  return (
    <div>
      <h1>Payment Verification</h1>
      <p>Transaction Reference: {verificationData.reference}</p>
      <p>Status: {verificationData.status}</p>
      <p>Customer: {verificationData.customer.email}</p>
      <p>Amount: {verificationData.amount / 100} NGN</p>
    </div>
  );
};

export default VerificationPage;


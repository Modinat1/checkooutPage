// import { useLocation } from "react-router-dom";
// import tick_circle from '../assets/tick-circle.png'

// const VerificationPage = () => {
//   const location = useLocation();
//   const { verificationData } = location.state || {};

//   return (
//     <div className="leading-8 flex flex-col justify-center items-center h-screen">
//         {
//             verificationData ?  
//     <>
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
//       </>
//       : <h2 className="text-xl">Verification Payment...</h2> 
//     }
//     </div>
//   );
// };

// export default VerificationPage;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import tick_circle from "../assets/tick-circle.png";

const VerificationPage = () => {
  const location = useLocation();
  const { reference } = location.state || {};
  const [verificationData, setVerificationData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchVerificationData = async () => {
      try {
        if (!reference) {
          throw new Error("No reference provided for verification.");
        }

        const response = await axios.post("https://pal-backend.onrender.com/api/verify-payment", {
          reference,
        });

        if (response.data?.data?.status === "success") {
          setVerificationData(response.data.data);
        } else {
          throw new Error(response.data?.message || "Verification failed.");
        }
      } catch (err) {
        setError(err.message || "An error occurred during verification.");
      } finally {
        setLoading(false);
      }
    };

    fetchVerificationData();
  }, [reference]);

  if (loading) {
    return (
      <div className="leading-8 flex flex-col justify-center items-center h-screen">
        <h2 className="text-xl">Verifying Payment...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="leading-8 flex flex-col justify-center items-center h-screen">
        <h2 className="text-xl text-red-500">Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="leading-8 flex flex-col justify-center items-center h-screen">
      <div className="mb-10">
        <img src={tick_circle} alt="success" />
      </div>

      <h1 className="font-medium text-xl mb-3">
        Payment Verification {verificationData.gateway_response}
      </h1>
      <p>
        Payment Amount:{" "}
        <span className="font-bold">{verificationData.amount / 100}</span> NGN
      </p>
      <p>
        Verification Status:{" "}
        <span className="capitalize font-bold">{verificationData.status}</span>
      </p>
      <p className="capitalize">{verificationData.reference}</p>
    </div>
  );
};

export default VerificationPage;

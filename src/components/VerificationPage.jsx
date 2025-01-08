import { useLocation } from "react-router-dom";
import tick_circle from '../assets/tick-circle.png'

const VerificationPage = () => {
//   const location = useLocation();
//   const { verificationData } = location.state || {};

//   if (!verificationData) {
//     return <p>No verification details available.</p>;
//   }

  const location = useLocation();
  const verificationData = location.state?.verificationData;
  if (!verificationData) {
    return <p>Verification payament...</p>;
  }
console.log(verificationData);

  return (
    <div className="leading-8 flex flex-col justify-center items-center h-screen">
        {
            !verificationData ? <h2 className="text-xl">Verification Payment...</h2> : 
    <>
    <div className="mb-10">
        <img
        src={tick_circle}
        alt="success"
        />
    </div>

      <h1 className="font-medium text-xl mb-3">Payment Verification {verificationData.gateway_response}</h1>
      <p>Payment Amount: <span className="font-bold">{verificationData.amount / 100}</span> NGN</p>
      <p >Verification Status: <span className="capitalize font-bold">{verificationData.status}</span></p>
      <p className="capitalize">{verificationData.reference}</p>
      </>
    }
    </div>
  );
};

export default VerificationPage;


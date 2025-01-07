import { useLocation } from "react-router-dom";

const VerificationPage = () => {
  const location = useLocation();
  const { verificationData } = location.state || {};

  if (!verificationData) {
    return <p>No transaction details available.</p>;
  }
console.log(verificationData);

  return (
    <div className="verification-page">
      <h1>Payment Verification Successful</h1>
      <p>Reference: {verificationData.reference}</p>
      <p>Amount: {verificationData.amount / 100} NGN</p>
      <p>Status: {verificationData.status}</p>
    </div>
  );
};

export default VerificationPage;

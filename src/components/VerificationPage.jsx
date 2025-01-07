import { useLocation } from "react-router-dom";

const VerificationPage = () => {
  const location = useLocation();
  const { verificationData } = location.state || {};

  if (!verificationData) {
    return <p>No transaction details available.</p>;
  }

  return (
    <div className="verification-page">
      <h1>Payment Verification Successful</h1>
      <p>Reference: {verificationData.reference}</p>
      <p>Amount: {verificationData.amount / 100} NGN</p>
      <p>Status: {verificationData.status}</p>
      <p>Customer: {verificationData.customer.email}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default VerificationPage;

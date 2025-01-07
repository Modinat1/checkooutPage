import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import VerificationPage from "./components/VerificationPage";

const App = () => {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<CheckoutPage/>}/>
      <Route path="verify" element={<VerificationPage/>}/>
    </Routes>    
    </BrowserRouter>
  );
};

export default App;

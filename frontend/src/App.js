// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SurveyPage from "./pages/SurveyPage/SurveyPage";
import SeasonalBox from "./pages/SnackBoxes/SeasonalBox";
import SavoryBox from "./pages/SnackBoxes/SavoryBox";
import SweetBox from "./pages/SnackBoxes/SweetBox";
import SmallPurchasePage from "./pages/PurchasePage/SmallPurchasePage";
import MediumPurchasePage from "./pages/PurchasePage/MediumPurchasePage";
import LargePurchasePage from "./pages/PurchasePage/LargePurchasePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import React, {useState} from "react"
import {PayPalScriptProvider} from "@paypal/react-paypal-js"
import PaypalCheckoutButton from "./components/Paypal/Paypal";



function App() {

  const [sizeHandler, setSizeHandler] = useState('');

  function addSize(entry){
    let entries = [entry]
    setSizeHandler(entries)
  }

  return (
    <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_VLIENT_ID}}>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/sweet" element={<SweetBox addSize={addSize}/>} />
          <Route path="/seasonal" element={<SeasonalBox addSize={addSize}/>} />
          <Route path="/savory" element={<SavoryBox addSize={addSize}/>} />
          <Route path="/purchaseS" element={<SmallPurchasePage sizeHandler={sizeHandler}/>} />
          <Route path="/purchaseM" element={<MediumPurchasePage sizeHandler={sizeHandler}/>} />
          <Route path="/purchaseL" element={<LargePurchasePage sizeHandler={sizeHandler}/>} />
        </Routes>
        <Footer />
      </div>
    </PayPalScriptProvider>
  );
}

export default App;

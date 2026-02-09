import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./landing_page/home/Homepage";
import Aboutpage from "./landing_page/about/Aboutpage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/support/supportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Notfound from "./landing_page/notfound";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 

  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<Notfound />} />

    </Routes>
    <Footer/>
  </BrowserRouter>,
);

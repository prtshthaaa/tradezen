import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './landing_page/home/Homepage';
import Aboutpage from './landing_page/about/Aboutpage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import Signup from './landing_page/signup/Signup';
import SupportPage from './landing_page/support/supportPage';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <div>
    <Homepage />
    <Aboutpage />
    <PricingPage/>
    <ProductPage/>
    <Signup/>
    <SupportPage/>
    
  </div>
  </React.StrictMode>
);


